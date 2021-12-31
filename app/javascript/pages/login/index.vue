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
            v-model="user.email"
            type="email"
            class="form-control"
            placeholder="test@example.com"
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
            v-model="user.password"
            type="password"
            class="form-control"
            placeholder="password"
          >
          <span class="text-danger">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <button
        type="submit"
        class="btn btn-secondary shadow"
        @click="handleSubmit(login)"
      >
        ログイン
      </button>
    </ValidationObserver>
    <router-link
      :to="{ name: 'RegisterIndex' }"
    >
      <button
        class="btn"
      >
        はじめての方はこちら
      </button>
    </router-link>
  </div>
</template>

<script>
import { mapActions } from "vuex"

export default {
  name: "LoginIndex",
  data() {
    return {
      user: {
        email: "",
        password: "",
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
      }
    }
  }
}
</script>

<style scoped>
</style>