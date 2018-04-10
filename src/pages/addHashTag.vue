<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <span class="tb-title">HashTag 管理</span>
            <span class="tb-subtitle">可檢視與修改社區包裹擺放位置的名稱，增進包裹收發有效管理。</span>
        </div>
        <div class="panel-body">
            <!-- 新增位置 -->
            <h4>
                <i class="icon-add"></i>新增HashTag</h4>
            <div class="form-group">
                <el-input placeholder="最多10個字元"
                    v-model="input"
                    @keyup.enter="HashAdd"></el-input>
                <el-form-item size="large">
                    <el-button type="primary"
                        size="medium"
                        @click="HashAdd">
                        新增
                    </el-button>
                </el-form-item>
            </div>

            <!-- 新增位置 -->
            <!-- 位置列表 -->
            <div class="postalL-list-content">
                <h4>
                    <i class="icon-list"></i>位置列表</h4>
                <span class="help-block">此資訊將於【郵務管理 / 郵務作業 / 備註欄位-位置】提供選擇。</span>
                <div class="col-sm-8">
                    <el-table :data="tableData"
                        style="width: 100%">
                        <el-table-column type="index"
                            width="50">
                        </el-table-column>
                        <el-table-column prop="name"
                            label="位置名稱">
                        </el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button size="mini"
                                    @click="modify(scope.$index, scope.row)">编辑</el-button>
                                <el-button size="mini"
                                    type="danger"
                                    @click="HashDelete(scope.$index, scope.row)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
            <!-- /位置列表 -->
        </div>
    </div>

</template>


<script>
export default {
  name: '#app',
  data() {
    return {
      tableData: [{ name: '海洋' }, { name: '海洋2' }],
      input: ''
    }
  },
  methods: {
    //   新增
    HashAdd() {
      var value = this.input && this.input.trim()
      if (!value) {
        return
      }
      this.tableData.push({ name: this.input })
      this.input = ''
    },
    // 編輯
    modify(index, row) {
      var that = this
      this.$prompt('修改姓名', '编辑', {
        confirmButtonText: '保存',
        cancelButtonText: '取消',
        inputValue: row.name
      })
        .then(function({ value }) {
          //编辑保存
          row.name = value
        })
        .catch(function() {
          //编辑取消
          that.$message({
            type: 'info',
            message: '取消编辑'
          })
        })
    },
    // 刪除
    HashDelete(index, row) {
      this.tableData.splice(index, 1)
    }
  }
}
</script>