<template>
  <transition name="fade">
    <div>
      <div class="overlay">
          <div class="modal base" role="dialog">
            <div class="modal-dialog" role="document">
              <p>このジャンルは{{ questions.length }}問あります。</p>
              <div
                v-for="question in questions" :key="question.id"
                class="modal-content"
                >
                <div class="modal-header">
                  <h5 class="modal-title">{{ question.title }}</h5>
                </div>
                <div class="modal-body">
                  <button class="btn btn-primary">{{ question.choice1 }}</button>
                  <button class="btn btn-primary">{{ question.choice2 }}</button>
                  <button class="btn btn-primary">{{ question.choice3 }}</button>
                  <button class="btn btn-primary">{{ question.choice4 }}</button>
                </div>
                <div class="modal-body">
                  <p>{{ question.explanation }}</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeModal">閉じる</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['questions'],
  data() {
    return {
      modal: false,
    }
  },
  methods: {
    closeModal() {
      this.$emit('close-modal');
    }
  }
}
</script>

<style scoped>
.base {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0, 0.5);
}
/* 表示/非表示はvueで制御するので最初から表示状態にする */
.modal {
  display: block;
}

/* vueのtransitionを使わないなら不要 */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>