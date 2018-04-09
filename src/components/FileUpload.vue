<template>
  <div class="fileupload">
    <slot name="list">
      <div class="imageArea">
        <label :for="folder.i" style="position:relative;z-index:1">
          <input type="file" :val="folder.index" :key="folder.i" :id="folder.i" ref="fileInput" accept="image/*" @change="onFilePicked">
          <div class="updateBtn">
            <span class="addIcon">+</span>
            <span class="addPs">{{folder.i}}</span>
          </div>
        </label>
        <div class="updateShow" ref="updateShow">
          <label :for="folder.i" style="height:100%">
            <img :src="folder.url" height="150">
          </label>
          <div class="imgOption">
            <label class="imgOptionBtn" :for="folder.i">更換</label>
            <div class="imgOptionBtn" :val="folder.index" @click="onFileRemove">刪除</div>
          </div>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: '',
  props: ['folder'],
  data() {
    return {
      isB: true,
      selectedFile: null,
      image: null,
      imageUrl: '',
      status: '線上'
    }
  },
  methods: {
    onFileRemove(event) {
      this.folder['url'] = ''
      this.$refs.updateShow.style.zIndex = '0'
    },
    onFilePicked(event) {
      let vobj = this
      let val = event.target.getAttribute('val')
      const files = event.target.files
      let filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert('Please add a valid file !')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        vobj.folder['url'] = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
      this.$refs.updateShow.style.zIndex = '1'
    }
  }
}
</script>
