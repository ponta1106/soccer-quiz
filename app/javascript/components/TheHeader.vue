<template>
  <header>
    <nav class="navbar navbar-expand navbar-dark bg-secondary justify-content-between shadow">
      <div class="container">
        <div class="col-6">
          <router-link
            :to="{ name: 'TopIndex' }"
            class="navbar-brand mb-0 h1"
          >
            欧州サッカークイズ
          </router-link>
        </div>
        <ul class="navbar-nav">
          <template v-if="!authUser">
            <li class="nav-item active">
              <router-link
                :to="{ name: 'RegisterIndex' }"
                class="nav-link"
              >
                登録
              </router-link>
            </li>
            <li class="nav-item active">
              <router-link
                :to="{ name: 'LoginIndex' }"
                class="nav-link"
              >
                ログイン
              </router-link>
            </li>
          </template>
          <template v-else>
            <router-link
              :to="{ name: 'UserIndex' }"
              class="nav-link"
            >
              {{ authUser.name }}
            </router-link>
            <li class="nav-item">
              <router-link
                to="#"
                class="nav-link"
                @click.native="handleLogout"
              >
                ログアウト
              </router-link>
            </li>
          </template>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
  name: "TheHeader",
  computed: {
    ...mapGetters("users", ["authUser"])
  },
  methods: {
    ...mapActions("users", ["logoutUser"]),
    async handleLogout() {
      try {
        await this.logoutUser()
        this.$router.push({name: 'TopIndex'})
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>