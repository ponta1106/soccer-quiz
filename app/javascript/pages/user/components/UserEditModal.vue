<template>
  <div id="user-edit-modal">
    <div class="modal">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5>ユーザー編集</h5>
          </div>
          <div class="modal-body">
            <div class="form-group mb-3">
              <label
                for="name"
                class="form-label"
              >ユーザー名</label>
              <input
                id="name"
                v-model="user.name"
                type="text"
                class="form-control"
                placeholder="username"
              >
            </div>
            <div class="form-group mb-3">
              <label
                for="email"
                class="form-label"
              >メールアドレス</label>
              <input
                id="email"
                v-model="user.email"
                type="email"
                class="form-control"
                placeholder="test@example.com"
              >
            </div>
            <div class="form-group mb-3">
              <label
                for="password"
                class="form-label"
              >パスワード</label>
              <input
                id="password"
                v-model="user.password"
                type="password"
                class="form-control"
                placeholder="password"
              >
            </div>
            <div class="form-group mb-3">
              <label
                for="password_confirmation"
                class="form-label"
              >パスワード（確認）</label>
              <input
                id="password_confirmation"
                v-model="user.password_confirmation"
                type="password"
                class="form-control"
                placeholder="password"
              >
            </div>
          </div>
          <div class="modal-footer mt-3">
            <button
              type="submit"
              class="btn btn-secondary shadow"
              @click="update"
            >
              更新する
            </button>
            <button
              class="btn shadow"
              @click="handleCloseModal"
            >
              閉じる
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop show" />
  </div>
</template>

<script>

import { mapGetters, mapActions } from "vuex"
export default {
  name: "UserEditModal",
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  },
  computed: {
    ...mapGetters("users", ["authUser"]),
  },
  methods: {
    ...mapActions("users", ["updateUser"]),
    handleCloseModal() {
      this.$emit('close-modal');
    },
    handleUpdateUser() {
      this.$emit('update-user', this.user)
    },
    update() {
      const formData = new FormData()
      formData.append("user[name]", this.user.name)
      formData.append("user[email]", this.user.email)
      formData.append("user[password]", this.user.password)
      formData.append("user[password_confirmation]", this.user.password_confirmation)
      if (this.uploadAvatar) formData.append("user[avatar]", this.uploadAvatar)

      try {
        this.updateUser(formData)
        this.$emit('close-modal');
      } catch (error) {
        console.log(error);
      }

    }
  },
  created() {
    this.user = Object.assign({}, this.authUser)
  },
}
</script>

<style scoped>

.modal {
  display: block;
}

</style>