<template>
  <div
    id="register-form"
    class="container col-sm-8"
  >
    <div class="h3 mb-3">
      ユーザー登録
    </div>
    <ValidationObserver v-slot="{ handleSubmit }">
      <div class="form-group mb-3">
        <ValidationProvider
          v-slot="{ errors }"
          rules="required"
        >
          <label
            for="name"
            class="form-label"
          >ユーザー名</label>
          <input
            id="name"
            v-model="user.name"
            type="text"
            name="ユーザー名"
            class="form-control"
            placeholder="username"
          >
          <span class="text-danger">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="form-group mb-3">
        <ValidationProvider
          v-slot="{ errors }"
          rules="required|email"
        >
          <label
            for="email"
            class="form-label"
          >メールアドレス</label>
          <input
            id="email"
            v-model="user.email"
            type="email"
            name="メールアドレス"
            class="form-control"
            placeholder="test@example.com"
          >
          <span class="text-danger">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="form-group mb-3">
        <ValidationProvider
          v-slot="{ errors }"
          rules="required"
          vid="password"
        >
          <label
            for="password"
            class="form-label"
          >パスワード</label>
          <input
            id="password"
            v-model="user.password"
            type="password"
            name="パスワード"
            class="form-control"
            placeholder="password"
          >
          <span class="text-danger">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="form-group mb-3">
        <ValidationProvider
          v-slot="{ errors }"
          rules="required|min:3|password_confirmed:@password"
        >
          <label
            for="password_confirmation"
            class="form-label"
          >パスワード（確認）</label>
          <input
            id="password_confirmation"
            v-model="user.password_confirmation"
            type="password"
            name="パスワード"
            class="form-control"
            placeholder="password"
          >
          <span class="text-danger">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="col-12 mb-3">
        <button
          type="submit"
          class="btn btn-dark shadow col-12"
          @click="handleSubmit(register)"
        >
          登録
        </button>
      </div>
    </ValidationObserver>
    <div class="col-12">
      <router-link
        :to="{ name: 'LoginIndex' }"
      >
        <button
          class="btn btn-light shadow col-12"
        >
          すでにアカウントをお持ちの方はこちら
        </button>
      </router-link>
    </div>
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
          console.log(err.response)
          alert('通信に失敗しました。インターネットが繋がっているか確認し、再度実行してください。')
        })
    }
  }
}
</script>

<style scoped>
</style>