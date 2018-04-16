<template>
    <div id="app">
        <!-- Console -->
        <div id="showConsole"
            class="modal-basic">
            <div class="modal-header header">
                <h4 class="modal-title">推播社區狀態</h4>
            </div>
            <div id="console_txt"
                class="household-select"
                style="overflow-y: auto; max-height: 300px;">
            </div>
            <button type="button"
                class="btn btn-primary btn-sm pull-right"
                id="consolePass"
                data-loading-text="處理中..."
                style="position: absolute; right: 20px; bottom: 24px;">確認</button>
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
                <h4>
                    <i class="icon-filter"></i>資料篩選</h4>

                <table class="table table-bordered ann-tb communitySearchTable">
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
                            <el-input v-model="titleInput"
                                placeholder="请输入内容">
                            </el-input>

                        </td>
                        <th>公告類型</th>
                        <td>
                            <el-select v-model="typeOptValue"
                                placeholder="請選擇">
                                <el-option v-for="item in typeOpt"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </td>
                        <th>狀態</th>
                        <td>
                            <el-select v-model="statusOptValue"
                                placeholder="請選擇">
                                <el-option v-for="item in statusOpt"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </td>
                        <th>公告日期</th>
                        <td>
                            <el-date-picker v-model="datepickerValue"
                                type="date"
                                placeholder="选择日期">
                            </el-date-picker>
                        </td>

                    </tr>
                    <tr>
                        <td colspan="8"
                            style="text-align: right;">

                            <button type="button"
                                class="btn btn-primary btn-sm"
                                id="search"
                                data-loading-text="讀取中..."
                                style="padding-left: 20px; padding-right: 20px;">查詢</button>
                            <button type="button"
                                class="btn btn-default btn-sm"
                                onclick="location.reload();">清除條件</button>
                        </td>
                    </tr>
                </table>
            </div>
            <!-- /資料篩選 -->
            <hr />
            <!-- 記錄列表 -->
            <div class="ann-list-content">
                <h4>
                    <i class="icon-list"></i>公告列表</h4>
                <router-link class="btn btn-s-md btn-warning addAnnBtn pull-right"
                    to="communityManagerInfoSubmitRouter">新增公告</router-link>
                <!--公告表格-->
                <el-table v-loading="loading"
                    element-loading-text="資料讀取中"
                    element-loading-spinner="el-icon-loading"
                    element-loading-background="rgba(0, 0, 0, 0.8)"
                    :data="tableData"
                    style="width: 100%"
                    :default-sort="{prop: 'number', order: 'number'}">
                    <el-table-column type="index"
                        label="#"
                        :index="indexMethod"
                        sortable>
                    </el-table-column>
                    <el-table-column prop="title"
                        label="標題"
                        sortable>
                    </el-table-column>
                    <el-table-column prop="type"
                        label="公告類型"
                        sortable>
                    </el-table-column>
                    <el-table-column prop="status"
                        label="狀態"
                        sortable>
                    </el-table-column>
                    <el-table-column prop="date"
                        label="公告日期"
                        sortable>
                    </el-table-column>
                    <el-table-column prop="views"
                        label="瀏覽數"
                        sortable>
                    </el-table-column>
                    <el-table-column prop="features"
                        label="操作">
                        <template slot-scope="scope">
                            <el-button size="mini"
                                @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>

            <!--公告分頁-->
            <div class="col-xs-12 text-center">
                <el-pagination background
                    layout="prev, pager, next"
                    :page-size="Math.floor($data.tableData.length / 4)"
                    :page-sizes="10"
                    :total="$data.tableData.length">
                </el-pagination>
            </div>
            <!-- /記錄列表 -->
        </div>
        <!-- /Page Content -->
    </div>
</template>

<script>
import FileUploadComponent from '@/components/FileUpload'
export default {
  name: 'app',
  data() {
    return {
      datepickerValue: '',
      titleInput: '',
      viewInput: '',
      select: '',
      statusOptValue: '',
      typeOptValue: '',
      statusOpt: [
        {
          value: '選項一',
          label: '未刊登'
        },
        {
          value: '選項二',
          label: '刊登中'
        }
      ],
      typeOpt: [
        {
          value: '選項一',
          label: '餐飲'
        },
        {
          value: '選項二',
          label: '消費購物'
        }
      ],

      tableData: [
        {
          title: '標題',
          type: '類型',
          status: '',
          date: '2016-05-01',
          views: '',
          features: ''
        },
        {
          title: '標題',
          type: '類型',
          status: '',
          date: '2016-05-02',
          views: '',
          features: ''
        },
        {
          title: '標題',
          type: '類型',
          status: '',
          date: '2016-05-03',
          views: '',
          features: ''
        },
        {
          title: '標題',
          type: '類型',
          status: '',
          date: '2016-05-04',
          views: '',
          features: ''
        },
        {
          title: '標題',
          type: '類型',
          status: '',
          date: '2016-05-01',
          views: '',
          features: ''
        },
        {
          title: '標題',
          type: '類型',
          status: '',
          date: '2016-05-02',
          views: '',
          features: ''
        },
        {
          title: '標題',
          type: '類型',
          status: '',
          date: '2016-05-03',
          views: '',
          features: ''
        },
        {
          title: '標題',
          type: '類型',
          status: '',
          date: '2016-05-04',
          views: '',
          features: ''
        },
        {
          title: '標題',
          type: '類型',
          status: '',
          date: '2016-05-03',
          views: '',
          features: ''
        },
        {
          title: '標題',
          type: '類型',
          status: '',
          date: '2016-05-04',
          views: '',
          features: ''
        },
        {
          title: '標題',
          type: '類型',
          status: '',
          date: '2016-05-03',
          views: '',
          features: ''
        },
        {
          title: '標題',
          type: '類型',
          status: '',
          date: '2016-05-04',
          views: '',
          features: ''
        }
      ],
      loading: false
    }
  },
  methods: {
    formatter(row, column) {
      return row.address
    },
    indexMethod(index) {
      return index + 1
    }
  }
}
</script>

<style>
.communitySearchTable tr td,
.communitySearchTable tr th {
  border: 1px solid #ccc;
}
</style>

