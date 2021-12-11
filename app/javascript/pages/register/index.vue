<template>
  <div id="register-form" class="container w-50">
    <div class="h3 mb-3">
      ユーザー登録
    </div>
    <div class="form-group mb-3">
      <label for="name" class="form-label">ユーザー名</label>
      <input
        id="name"
        v-model="user.name"
        type="text"
        class="form-control"
        placeholder="username"
      >
    </div>
    <div class="form-group mb-3">
      <label for="email" class="form-label">メールアドレス</label>
      <input
        id="email"
        v-model="user.email"
        type="email"
        class="form-control"
        placeholder="test@example.com"
      >
    </div>
    <div class="form-group mb-3">
      <label for="password" class="form-label">パスワード</label>
      <input
        id="password"
        v-model="user.password"
        type="password"
        class="form-control"
        placeholder="password"
      >
    </div>
    <div class="form-group mb-3">
      <label for="password_confirmation" class="form-label">パスワード（確認）</label>
      <input
        id="password_confirmation"
        v-model="user.password_confirmation"
        type="password"
        class="form-control"
        placeholder="password"
      >
    </div>
    <button
      type="submit"
      class="btn btn-primary"
      @click="register"
    >
      登録
    </button>
    <router-link
      :to="{ name: 'LoginIndex' }"
    >
      <button
        class="btn btn-secondary"
      >
        すでにアカウントをお持ちの方はこちら
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "RegisterIndex",
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      }
    }
  },
  methods: {
    register() {
      this.$axios.post('users', { user: this.user })
        .then(res => {
          this.$router.push({ name: 'LoginIndex' })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
</style>