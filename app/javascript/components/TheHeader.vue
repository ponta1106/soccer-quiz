<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div class="container">
        <router-link
          :to="{ name: 'TopIndex' }"
          class="navbar-brand mb-0 h1"
        >
          欧州サッカークイズ
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse navbar-collapse collapse justify-content-end" id="navbarNav">
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
              <li class="nav-item">
                <router-link
                  :to="{ name: 'UserIndex' }"
                  class="nav-link"
                >
                  {{ authUser.name }}
                </router-link>
              </li>
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
          <li class="nav-item">
            <router-link
              :to="{ name: 'ContactIndex' }"
              class="nav-link"
            >
              お問合せ
            </router-link>
          </li>
          </ul>
        </div>
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