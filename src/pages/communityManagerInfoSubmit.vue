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
            <span class="tb-title">新增公告</span>
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
                    <label class="col-lg-2 control-label">公告迄日</label>
                    <div class="col-lg-2">
                        <input class="form-control date" type="text" id="annDue" runat="server" placeholder="請選擇 (非必填)" />
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
                <!-- /狀態 -->
                <div class="form-group">
                    <label class="col-lg-2 control-label" for="annIsTop">是否置頂</label>
                    <div class="col-lg-2">
                        <label class="cr-styled" style="padding-top: 8px;">
                                                                    <input type="checkbox" id="annIsTop" runat="server" />
                                                                    <i class="glyphicon"></i>
                                                                </label>
                    </div>
                </div>
                <!-- /狀態 -->
                <!-- 內容 -->
                <div class="form-group">
                    <label class="col-lg-2 control-label">內容*</label>
                    <div class="col-lg-10">
                        <ckeditor id="1" v-model="content" :config="config" @blur="onBlur($event)" @focus="onFocus($event)">
                        </ckeditor>
                    </div>
                </div>
                <!-- banner -->
                <div class="form-group">
                    <label class="col-lg-2 control-label">banner</label>
                    <div class="col-lg-8">
                        <FileUploadComponent></FileUploadComponent>
                    </div>
                </div>
                <!-- /banner -->
                <!-- /內容 -->
            </div>
        </div>
        <!-- /Page Content -->
    </div>
</template>

<script>
    import Ckeditor from "../components/ckeditor.vue";
    import FileUploadComponent from "@/components/FileUpload";
    export default {
        name: "app",
        components: {
            Ckeditor,
            FileUploadComponent
        },
        data() {
            return {
                content: '',
                content1: '',
                config: {
                    toolbar: [
                        ["Bold", "Italic", "-", "NumberedList", "BulletedList", "-", "Outdent", "Indent", "-", "CreateDiv", "-", "BidiLtr", "BidiRtl", "-", "Link", "Unlink", "-", "JustifyLeft", "JustifyCenter", "JustifyRight", "JustifyBlock", "-", "Table", "Styles", "Format", "Font", "FontSize", "TextColor", "BGColor", "-", "Image", "Source"]
                    ],
                    skin: 'kama',
                    height: 300
                }
            }
        }
    };
</script>
