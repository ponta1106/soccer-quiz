<template>
  <footer
    class="mt-auto shadow"
  >
  <div class="container">
    <div class="row">
      <button
        class="btn col-6"
        @click="openRules"
      >
        利用規約
      </button>
      <Rules
        v-if="isVisibleRulesModal"
        @close-modal="closeModal"
      />
      <button
        class="btn col-6"
        @click="openPrivacyPolicy"
      >
        プライバシーポリシー
      </button>
      <PrivacyPolicy
        v-if="isVisiblePrivacyPolicyModal"
        @close-modal="closeModal"
      />
    </div>
  </div>
  </footer>
</template>

<script>
import Rules from '../pages/terms_of_service/Rules'
import PrivacyPolicy from '../pages/terms_of_service/PrivacyPolicy'
export default {
  name: "TheFooter",
  components: {
    Rules,
    PrivacyPolicy
  },
  data() {
    return {
      isVisibleRulesModal: false,
      isVisiblePrivacyPolicyModal: false,
    }
  },
  methods: {
    openRules() {
      this.isVisibleRulesModal = true
    },
    openPrivacyPolicy() {
      this.isVisiblePrivacyPolicyModal = true
    },
    closeModal() {
      this.isVisibleRulesModal = false;
      this.isVisiblePrivacyPolicyModal = false;
    },
  }
}
</script>
