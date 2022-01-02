<template>
  <div
    id="login-form"
    class="container col-sm-8"
  >
    <div class="h3 mb-3">
      ログイン
    </div>
    <ValidationObserver v-slot="{ handleSubmit }">
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
            type="email"
            name="メールアドレス"
            class="form-control"
            placeholder="test@example.com"
            v-model="user.email"
          >
          <span class="text-danger">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="form-group mb-3">
        <ValidationProvider
          v-slot="{ errors }"
          rules="required|min:3"
        >
          <label
            for="password"
            class="form-label"
          >パスワード</label>
          <input
            id="password"
            type="password"
            name="パスワード"
            class="form-control"
            placeholder="password"
            v-model="user.password"
          >
          <span class="text-danger">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="col-12 mb-3">
        <button
          type="submit"
          class="btn btn-secondary shadow col-12"
          @click="handleSubmit(login)"
        >
          ログイン
        </button>
      </div>
    </ValidationObserver>
    <div class="col-12 mb-3">
      <button
        type="submit"
        class="btn btn-success shadow col-12"
        @click="guestLogin"
      >
        ゲストとしてログイン
      </button>
    </div>
    <div class="col-12">
      <router-link
        :to="{ name: 'RegisterIndex' }"
      >
        <button
          class="btn shadow col-12"
        >
          はじめての方はこちら
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"

export default {
  name: "LoginIndex",
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      guestUser: {
        email: 'guest@example.com',
        password: 'guest'
      }
    }
  },
  methods: {
    ...mapActions("users", [
      "loginUser",
      "fetchAuthUser",
    ]),
    async login() {
      try {
        await this.loginUser(this.user);
        this.$router.push({ name: 'QuestionIndex' })
      } catch (error) {
        console.log(error);
        alert('通信に失敗しました。インターネットが繋がっているか確認し、再度実行してください。')
      }
    },
    async guestLogin() {
      try {
        await this.loginUser(this.guestUser);
        this.$router.push({ name: 'QuestionIndex' })
      } catch (error) {
        console.log(error);
        alert('通信に失敗しました。インターネットが繋がっているか確認し、再度実行してください。')
      }
    }
  }
}
</script>

<style scoped>
</style>