<template>
  <div class="container text-center">
    <h3>お問合せ</h3>
    <div class="adimin-icon">
      <img src="../../assets/images/turtle.png" alt="icon" width="200px;">
    </div>
    <div class="message mb-5">
      <p>こんにちは、このサイトの管理人ぽんたです。</p>
      <p>このアプリについて、ご意見ご要望などありましたら、<br>私のTwitterまでご連絡ください。</p>
    </div>
    <div class="contact">
      <button
        class="btn btn-info text-white shadow col-8 col-sm-4"
        @click="contactAdmin"
      >
        <font-awesome-icon :icon="['fab', 'twitter']"/>
        管理人のTwitter
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactIndex",
  methods: {
    contactAdmin() {
      //シェアする画面を設定
      var shareURL = 'https://twitter.com/ponta_1106';
      //シェア用の画面へ移行
      window.open(shareURL, '_blank')
    }
  }
}
</script>