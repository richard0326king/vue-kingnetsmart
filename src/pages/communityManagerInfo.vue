<template>
    <div id="app">
        <!-- Console -->
        <div id="showConsole" class="modal-basic">
            <div class="modal-header header">
                <h4 class="modal-title">推播社區狀態</h4>
            </div>
            <div id="console_txt" class="household-select" style="overflow-y: auto; max-height: 300px;">
            </div>
            <button type="button" class="btn btn-primary btn-sm pull-right" id="consolePass" data-loading-text="處理中..." style="position: absolute; right: 20px; bottom: 24px;">確認</button>
        </div>
        <!-- /戶別選擇 -->
        <!-- Page Content -->
        <div class="panel-heading">
            <span class="tb-title">管理資訊</span>
            <span class="tb-subtitle">可檢視所有公告、刊登時間與狀態。</span>
        </div>
        <div class="panel-body">
            <!-- 資料篩選 -->
            <div class="ann-filter-content">
                <h4><i class="icon-filter"></i>資料篩選</h4>
                <table class="table table-bordered ann-tb">
                    <colgroup>
                        <col style="width: 60px" />
                        <col style="width: 150px" />
                        <col style="width: 60px" />
                        <col style="width: 150px" />
                        <col style="width: 60px" />
                        <col style="width: 150px" />
                        <col style="width: 60px" />
                    </colgroup>
                    <tr>
                        <th>標題</th>
                        <td>
                            <input type="text" class="form-control floatL" id="title" style="width: 120px;" />
                        </td>
                        <th>公告類型</th>
                        <td>
                            <select class="form-control floatL" id="type">
                                    <option value="請選擇">請選擇</option>
                                </select>
                        </td>
                        <th>狀態</th>
                        <td>
                            <select class="form-control floatL" id="status">
                                    <option value="請選擇">請選擇</option>
                                    <option value="0">未刊登</option>
                                    <option value="1">等待刊登</option>
                                    <option value="2">刊登中</option>
                                </select>
                        </td>
                        <th>公告日期</th>
                        <td>
                            <div class="input-daterange input-group">
                                <input type="text" id="start" class="date form-control" />
                                <span class="input-group-addon">至</span>
                                <input type="text" id="due" class="date form-control" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="8" style="text-align: right;">
                            <button type="button" class="btn btn-primary btn-sm" id="search" data-loading-text="讀取中..." style="padding-left: 20px; padding-right: 20px;">查詢</button>
                            <button type="button" class="btn btn-default btn-sm" onclick="location.reload();">清除條件</button>
                        </td>
                    </tr>
                </table>
            </div>
            <!-- /資料篩選 -->
            <hr />
            <!-- 記錄列表 -->
            <div class="ann-list-content">
                <h4><i class="icon-list"></i>公告列表</h4>
                <router-link class="btn btn-s-md btn-warning addAnnBtn pull-right" to="communityManagerInfoSubmitRouter">新增公告</router-link>
                <table class="table table-bordered table-hover ann-tb">
                    <colgroup>
                        <col style="width: 50px" />
                        <col style="width: 200px" />
                        <col style="width: 100px" />
                        <col style="width: 100px" />
                        <col style="width: 100px" />
                        <col style="width: 100px" />
                        <col style="width: 140px" />
                        <col style="width: 80px" />
                        <col style="width: 60px" />
                    </colgroup>
                    <tr class="title">
                        <th>#</th>
                        <th>公告標題</th>
                        <th>公告類型</th>
                        <th>公告起日</th>
                        <th>公告迄日</th>
                        <th>狀態</th>
                        <th>更新時間</th>
                        <th>瀏覽數</th>
                        <th>置頂</th>
                        <th>操作</th>
                    </tr>
                    <tr id="noBody_ann" style="display: none;">
                        <td colspan="10" class="empty_row" style="text-align: center;">目前無任何公告
                        </td>
                    </tr>
                    <tr id="loading_ann">
                        <td colspan="10">
                            <div class="loading-box">
                                <div class="circle">
                                    <div></div>
                                </div>
                                <span class="txt">資料讀取中...</span>
                            </div>
                        </td>
                    </tr>
                    <tbody id="annList">
                    </tbody>
                </table>
            </div>
            <div class="paginationWrap">
                <nav>
                    <ul class="pagination" id="annListPages">
                    </ul>
                </nav>
            </div>
            <!-- /記錄列表 -->
        </div>
        <!-- /Page Content -->
    </div>
</template>

<script>
    import FileUploadComponent from "@/components/FileUpload";
    export default {
        name: "app"
    };
</script>
