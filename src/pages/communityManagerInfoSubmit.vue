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
                    <div class="col-lg-5">
                        <ckeditor id="1" v-model="content" :config="config" @blur="onBlur($event)" @focus="onFocus($event)">
                        </ckeditor>
                    </div>
                </div>
                <!-- 社區 -->
                <div class="form-group">
                    <label class="col-lg-2 control-label">公告社區*</label>
                    <div class="col-lg-8">
                        123
                    </div>
                   
                </div>
                <!-- /社區 -->
                <!-- /內容 -->
                <!-- 附加檔案 -->
                <div class="form-group">
                    <label class="col-lg-2 control-label">附加檔案</label>
                    <div class="col-lg-5">
                        <!-- 預設 -->
                        <asp:Panel ID="Panel1" runat="server">
                            附檔1：
                        </asp:Panel>
                        <asp:FileUpload ID="annFiles1" runat="server" />
                        <!-- /預設 -->
                        <!-- 選取更多檔案 -->
                        <div id="addMoreFile_Div" style="display: none;">
                            <asp:Panel ID="Panel2" runat="server">
                                附檔2：
                            </asp:Panel>
                            <asp:FileUpload ID="annFiles2" runat="server" />
                            <asp:Panel ID="Panel3" runat="server">
                                附檔3：
                            </asp:Panel>
                            <asp:FileUpload ID="annFiles3" runat="server" />
                        </div>
                        <!-- /選取更多檔案 -->
                        <span class="help-block">(限10MB以下之檔案)</span>
                        <input id="addMoreFile" class="btn btn-info more-file-btn" type="button" value="選取更多檔案" />
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-lg-2 control-label">附加圖檔</label>
                    <div class="col-lg-5">
                        <asp:Panel ID="Panel4" runat="server">
                            圖檔1：
                        </asp:Panel>
                        <asp:FileUpload ID="annImage" runat="server" />
                        <!-- 選取更多檔案 -->
                        <div id="addMoreImg_Div" style="display: none;">
                            <asp:Panel ID="Panel5" runat="server">
                                圖檔2：
                            </asp:Panel>
                            <asp:FileUpload ID="annImage2" runat="server" />
                            <asp:Panel ID="Panel6" runat="server">
                                圖檔3：
                            </asp:Panel>
                            <asp:FileUpload ID="annImage3" runat="server" />
                        </div>
                        <!-- /選取更多檔案 -->
                        <span class="help-block">(限4MB以下之圖片檔)</span>
                        <input id="addMoreImg" class="btn btn-info more-file-btn" type="button" value="選取更多圖檔" />
                    </div>
                </div>
                <!-- /附加檔案 -->
            </div>
            <div class="bottom-btn-control">
                <input type="button" value="取消" id="cancelAnn" class="btn btn-md btn-default" />
                <input type="button" id="sendAnnFake" value="送出" class="btn btn-md btn-primary" data-loading-text="資料傳送中..." />
                <asp:Button ID="sendAnn" UseSubmitBehavior="false" runat="server" Text="送出" OnClick="sendAnn_Click" Style="display: none;" />
            </div>
        </div>
        <!-- /Page Content -->
    
    </div>
</template>

<script>
import Ckeditor from "../components/ckeditor.vue";
export default {
  name: "app",
  components: {
    Ckeditor
  }
};
</script>
