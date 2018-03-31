<template>
    <div class="fileupload">
        <div id="showMoreImgBtn" class="fileButton" @click="uploadOpen()" v-show="isA">
            <i class="icon-images"></i>
            <div>
                <span class="msg">尚未選擇檔案</span>
                <!-- <span class="msg">已附加{{img_count}}張圖片 <span class="view">(點擊檢視)</span></span> -->
            </div>
        </div>
        <div id="addMoreImg_Div" v-show="!isA">
            <div v-for="(item, index) in list">
                <div class="imageArea">
                    <label :for="item.i" style="position:relative;z-index:1">
                        <input type="file" :val="index" :key="item.i" :id="item.i" ref="fileInput" accept="image/*" @change="onFilePicked">
                            
                                <div class="updateBtn">
                                    <span class="addIcon">+</span>
                                    <span class="addPs">新增圖片{{item.i}}</span>
                                </div>
                            </label>
                    <div class="updateShow" ref="updateShow">
                        <label :for="item.i" style="height:100%">
                                    <img :src="item.url" height="150">
                                </label>
                        <div class="imgOption">
                            <label class="imgOptionBtn" :for="item.i">更換</label>
                            <div class="imgOptionBtn" :val="index" @click="onFileRemove">刪除</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: '',
        data() {
            return {
                isA: true,
                isB: true,
                selectedFile: null,
                image: null,
                imageUrl: '',
                list: [{
                        i: "Banner1",
                        url: ""
                    },
                    {
                        i: "Banner2",
                        url: ""
                    }
                ]
            }
        },
        methods: {
            uploadOpen() {
                this.isA = !this.isA
            },
            onFileRemove(event) {
                var val = event.target.getAttribute('val');
                this.list[val]['url'] = '';
                this.$refs.updateShow[val].style.zIndex = '0'
            },
            onFilePicked(event) {
                let val = event.target.getAttribute('val');
                const files = event.target.files
                let filename = files[0].name
                if (filename.lastIndexOf('.') <= 0) {
                    return alert('Please add a valid file !')
                }
                const fileReader = new FileReader()
                fileReader.addEventListener('load', () => {
                    this.list[val]['url'] = fileReader.result
                })
                fileReader.readAsDataURL(files[0])
                this.image = files[0];
                this.$refs.updateShow[val].style.zIndex = '1'
                
            },
            // 上傳到 firebase
            // onUpload() {
            //     const fd = new FormData();
            //     fd.append('image', this.selectedFile, this.selectedFile.name)
            //     axios.post('', fd, {
            //             onUploadProgress: uploadEvent => {
            //                 console.log('upload progress' + Math.round(uploadEvent.load / uploadEvent.total * 100) + '%')
            //             }
            //         })
            //         .then(res => {
            //             console.log(res)
            //         })
            // }
        }
    }
</script>
