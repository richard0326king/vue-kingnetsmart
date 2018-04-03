<template>
    <div id="app">
        <input type="hidden" id="hiddenSn" runat="server" />
        <input type="hidden" id="hidden_annFiles1" runat="server" />
        <input type="hidden" id="hidden_annFiles2" runat="server" />
        <input type="hidden" id="hidden_annFiles3" runat="server" />
        <input type="hidden" id="hidden_annFiles4" runat="server" />
        <input type="hidden" id="hidden_annFiles5" runat="server" />
        <input type="hidden" id="hidden_annFiles6" runat="server" />
        <input type="hidden" id="comList" runat="server" />
        <!-- Page Content -->
        <div class="panel-heading">
            <span class="tb-title">管理資訊</span>
            <span class="tb-tips floatR">*為必填</span>
        </div>
        <div class="padding-md clearfix" style="padding-bottom: 0!important;">
            <div id="formToggleLine" class="annSubmit-container form-horizontal">
                <!-- 標題 -->
                <div class="form-group">
                    <label class="col-lg-2 control-label">標題*</label>
                    <div class="col-lg-5">
                        <input class="form-control" type="text" id="annTitle" runat="server" placeholder="請輸入標題" />
                        <span class="help-block">限20個字元</span>
                    </div>
                </div>
                <!-- /標題 -->
                <!-- 公告類型 -->
                <div class="form-group">
                    <label class="col-lg-2 control-label">公告類型*</label>
                    <div class="col-lg-5">
                        <select id="annType" class="form-control floatL">
                            <option value="">法律知識</option>
                            <option value="">生活服務</option>
                        </select>
                    </div>
                </div>
                <!-- /公告類型 -->
                <!-- 日期 -->
                <div class="form-group">
                    <label class="col-lg-2 control-label">公告起日*</label>
                    <div class="col-lg-2">
                        <input class="form-control date" type="text" id="annStart" runat="server" placeholder="請選擇" />
                    </div>
                </div>
                <!-- /日期 -->
                <!-- /狀態 -->
                <div class="form-group">
                    <label class="col-lg-2 control-label" for="annStatus">是否上架</label>
                    <div class="col-lg-2">
                        <label class="cr-styled" style="padding-top: 8px;">
                            <input type="checkbox" id="annStatus" runat="server" />
                            <i class="glyphicon"></i>
                        </label>
                    </div>
                </div>
                <!-- /狀態 -->
                <!-- banner -->
                <div class="form-group">
                    <label class="col-lg-2 control-label">banner</label>
                    <div class="col-lg-8">
                        <file-upload-btn @click="uploadOpen" v-show="isA"></file-upload-btn>
                        <div v-for="folder in folders">
                            <file-upload v-show="!isA" v-bind:folder="folder">
                                <template slot="list " slot-scope="props">
                                </template>
                            </file-upload>
                        </div>
                    </div>
                </div>
                <!-- /banner -->
                <!-- 內容 -->
                <div class="form-group">
                    <label class="col-lg-2 control-label">內容*</label>
                    <div class="col-lg-8">
                        <ckeditor id="1" v-model="content" :config="config" @blur="onBlur($event)" @focus="onFocus($event)">
                        </ckeditor>
                    </div>
                </div>
                <!-- /內容 -->
                <div class="form-group ">
                    <label class="col-lg-2 control-label ">公寓管理條例相關法條</label>
                    <div class="col-lg-2 ">
                        <select name=" " id=" " class="form-control ">
                            <option value=" ">第一章</option>
                            <option value=" ">第二章</option>
                            <option value=" ">第三章</option>
                            <option value=" ">第四章</option>
                        </select>
                    </div>
                    <div class="col-lg-2 ">
                        <select name=" " id=" " class="form-control ">
                            <option value=" ">第四條</option>
                            <option value=" ">第十五條</option>
                            <option value=" ">第二十二條</option>
                            <option value=" ">第二十四條</option>
                        </select>
                    </div>
                    <div class="col-lg-2">
                        <button>+</button>
                    </div>
                </div>
                <!-- /內容 -->
                <div class="form-group ">
                    <label class="col-lg-2 control-label ">文章來源</label>
                    <div class="col-lg-2 ">
                        <select name=" " id=" " class="form-control ">
                            <option value=" ">請選擇</option>
                            <option value=" ">事務所</option>
                        </select>
                    </div>

                </div>
            </div>
        </div>
        <div class="bottom-btn-control ">
            <input type="button " id="sendFake " value="送出 " class="btn btn-md btn-primary " data-loading-text="資料傳送中... ">
            <input type="button " value="取消 " id="cancel " class="btn btn-md btn-default ">
            <input type="button " name="ctl00$main$sendStore " value="送出 " onclick="javascript:__doPostBack( 'ctl00$main$sendStore', '') " id="sendStore " style="display: none; ">
        </div>
        <!-- /Page Content -->
    </div>
</template>

<script>
import Ckeditor from '../components/ckeditor.vue'
import FileUpload from '../components/FileUpload.vue'
import FileUploadBtn from '../components/FileUploadButton.vue'
export default {
  name: 'app',
  components: {
    Ckeditor,
    FileUpload,
    FileUploadBtn
  },
  data() {
    return {
      content: '',
      content1: '',
      isA: true,
      folders: [
        {
          index: 0,
          i: 'pic1',
          url: ''
        }
      ],
      config: {
        toolbar: [
          [
            'Bold',
            'Italic',
            '-',
            'NumberedList',
            'BulletedList',
            '-',
            'Outdent',
            'Indent',
            '-',
            'CreateDiv',
            '-',
            'BidiLtr',
            'BidiRtl',
            '-',
            'Link',
            'Unlink',
            '-',
            'JustifyLeft',
            'JustifyCenter',
            'JustifyRight',
            'JustifyBlock',
            '-',
            'Table',
            'Styles',
            'Format',
            'Font',
            'FontSize',
            'TextColor',
            'BGColor',
            '-',
            'Image',
            'Source'
          ]
        ],
        skin: 'kama',
        height: 300
      }
    }
  },
  methods: {
    uploadOpen() {
      this.isA = !this.isA
    }
  }
}
</script>

