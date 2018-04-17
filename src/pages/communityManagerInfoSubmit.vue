<template>
    <div id="app">
        <!-- Page Content -->
        <div class="panel-heading">
            <span class="tb-title">管理資訊</span>
            <span class="tb-tips floatR">*為必填</span>
        </div>
        <div class="padding-md clearfix"
            style="padding-bottom: 0!important;">
            <div id="formToggleLine"
                class="annSubmit-container form-horizontal">
                <!-- 標題 -->
                <div class="form-group">
                    <label class="col-lg-2 control-label">標題*</label>
                    <div class="col-lg-5">
                        <el-input v-model="title"
                            placeholder="請輸入標題"></el-input>
                        <span class="help-block mt-4">限20個字元</span>
                    </div>
                </div>
                <!-- /標題 -->
                <!-- 公告類型 BulletinData-->
                <div class="form-group">
                    <label class="col-lg-2 control-label">公告類型*</label>
                    <div class="col-lg-5">
                        <el-select v-model="BulletinValue"
                            filterable
                            placeholder="請選擇">
                            <el-option v-for="item in BulletinData"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <!-- /公告類型 -->
                <!-- 日期 -->
                <div class="form-group">
                    <label class="col-lg-2 control-label">公告起日*</label>
                    <div class="col-lg-2">
                        <div class="block">
                            <el-date-picker v-model="value1"
                                type="date"
                                placeholder="選擇日期">
                            </el-date-picker>
                        </div>
                    </div>
                </div>
                <!-- /日期 -->
                <!-- /狀態 -->
                <div class="form-group">
                    <label class="col-lg-2 control-label"
                        for="annStatus">是否上架</label>
                    <div class="col-lg-2">
                        <label class="cr-styled"
                            style="padding-top: 8px;">
                            <input type="checkbox"
                                id="annStatus"
                                runat="server" />
                            <i class="glyphicon"></i>
                        </label>
                    </div>
                </div>
                <!-- /狀態 -->
                <!-- banner -->
                <div class="form-group">
                    <label class="col-lg-2 control-label">banner</label>
                    <div class="col-lg-8">
                        <file-upload-btn @click="uploadOpen"
                            v-show="isA"></file-upload-btn>
                        <div v-for="folder in folders">
                            <file-upload v-show="!isA"
                                v-bind:folder="folder">
                                <template slot="list "
                                    slot-scope="props">
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
                        <ckeditor id="1"
                            v-model="content"
                            :config="config"
                            @blur="onBlur($event)"
                            @focus="onFocus($event)">
                        </ckeditor>
                        <!-- quill-editor -->
                        <quill-editor ref="myTextEditor"
                            v-model="contentQuill"
                            :options="editorOption"
                            @blur="onEditorBlur($event)"
                            @focus="onEditorFocus($event)"
                            @ready="onEditorReady($event)">
                        </quill-editor>

                    </div>
                </div>
                <!-- /內容 -->
                <div class="form-group ">
                    <label class="col-lg-2 control-label ">公寓管理條例相關法條</label>
                    <div class="col-lg-10">
                        <el-cascader :options="layerData"
                            :show-all-levels="true"
                            expand-trigger="hover"
                            v-model="selected"
                            @change="isSelected"></el-cascader>
                        <ul class="listStyle">
                            <li v-for="item in selected2">
                                {{item[0]}} / {{item[1]}}
                                <a @click="removeTodo(item)">
                                    <i class="el-icon-delete"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                <!-- hashTag -->
                <div class="form-group">
                    <label class="col-lg-2 control-label ">hashTag</label>
                    <div class="col-sm-8">
                        <el-checkbox label="陽台"
                            border></el-checkbox>
                        <el-checkbox label="共用空間"
                            border></el-checkbox>
                        <el-checkbox label="烤肉"
                            border></el-checkbox>
                    </div>

                </div>
                <!-- /文章來源 -->
                <div class="form-group">
                    <label class="col-lg-2 control-label">文章來源</label>
                    <div class="col-lg-2">
                        <el-select v-model="PaperSouceValue"
                            filterable
                            placeholder="請選擇">
                            <el-option v-for="item in PaperSouce"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </div>

                </div>
            </div>
        </div>
        <div class="bottom-btn-control ">
            <el-button type="primary">送出</el-button>
            <el-button plain>取消</el-button>
        </div>
        <!-- /Page Content -->

        <pre>
            {{$data.title | json}}
            {{$data.content | json}}
        </pre>
    </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import Ckeditor from '../components/ckeditor.vue'
import FileUpload from '../components/FileUpload.vue'
import FileUploadBtn from '../components/FileUploadButton.vue'
export default {
  name: 'app',
  components: {
    Ckeditor,
    FileUpload,
    FileUploadBtn,
    quillEditor
  },
  data() {
    return {
      title: '',
      url: 'http://teepr.com/wp-content/uploads/-000//1/5943413756b9c.jpg',
      content: '',
      contentQuill: '',
      selected: [],
      selected2: [],
      //   公告類型
      BulletinData: [
        {
          value: '選項1',
          label: '法律知識'
        },
        {
          value: '選項2',
          label: '民間知識'
        }
      ],
      PaperSouce: [{ value: '選項一', label: '聯晟法律事務法' }],
      BulletinValue: '',
      layerDataValue: '',
      layerDataInValue: '',
      PaperSouceValue: '',
      layerData: [
        {
          value: '第一章 總則',
          label: '第一章 總則',
          children: [
            {
              value: '第一條',
              label: '第一條'
            },
            {
              value: '第二條',
              label: '第二條'
            },
            {
              value: '第三條',
              label: '第三條'
            }
          ]
        },
        {
          value: '第二章 住戶之權利義務',
          label: '第二章 住戶之權利義務',
          children: [
            {
              value: '第 4 條 (專有部分)',
              label: '第 4 條 (專有部分)'
            },
            {
              value: '第 5 條 (專有部分的使用權)',
              label: '第 5 條 (專有部分的使用權)'
            },
            {
              value: '第 6 條 (住戶的義務)',
              label: '第 6 條 (住戶的義務)'
            }
          ]
        }
      ],

      //   圖片上傳
      isA: true,
      folders: [
        {
          index: 0,
          i: '圖片1',
          url: ''
        }
      ],
      //   Ckeditor
      config: {
        toolbar: [
          {
            name: 'fontStyle',
            items: [
              'Bold',
              'Italic',
              'NumberedList',
              'BulletedList',
              'Outdent',
              'Indent',
              'CreateDiv',
              'BidiLtr',
              'BidiRtl',
              'Link',
              'Unlink',
              'JustifyLeft',
              'JustifyCenter',
              'JustifyRight',
              'JustifyBlock',
              'Table'
            ]
          },
          {
            name: 'fontStyle',
            items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Print', 'SpellChecker', 'Scayt']
          },
          {
            name: 'fontStyle',
            items: ['Styles', 'Format', 'Font', 'FontSize', 'TextColor', 'BGColor', '-', 'Image', 'Source']
          }
        ],
        skin: 'kama',
        height: 300
      },
      //   quill

      editorOption: {
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ header: 1 }, { header: 2 }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ script: 'sub' }, { script: 'super' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ direction: 'rtl' }],
            [{ size: ['small', false, 'large', 'huge'] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ font: [] }],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ['clean'],
            ['link', 'image', 'video']
          ]
        }
      },
      //   datepicker
      value1: '',
      value2: ''
    }
  },
  methods: {
    //   圖片上傳
    uploadOpen() {
      this.isA = !this.isA
    },
    isSelected() {
      console.log(this.selected2)
      this.selected2.push(this.selected)
      this.selected2.sort()
    },
    removeTodo: function(item) {
      this.selected2.splice(this.selected2.indexOf(item), 1)
    }
  }
}
</script>

<style lang="scss">
.listStyle {
  margin-top: 12px;
  padding-left: 0;
  li {
    list-style: none;
    padding: 8px 0;
    button {
      margin-right: 8px;
    }
  }
}
</style>
