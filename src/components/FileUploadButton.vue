<template>
  <div id="showMoreImgBtn"
    class="fileButton"
    @click="clicked">
    <i class="icon-images"></i>
    <div>
      <span class="msg">尚未選擇檔案</span>
      <!-- <span class="msg">已附加{{img_count}}張圖片 <span class="view">(點擊檢視)</span></span> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'showMoreImgBtn',
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {
    uploadOpen() {
      this.isA = !this.isA
    },
    clicked() {
      this.$emit('click')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>