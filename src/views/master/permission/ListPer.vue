<template>
<div>
  <el-container>
    <el-main>
      <el-table id="tablestyle" style="width: 100%" height="600" highlight-current-row border fit show-header :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)">
        <el-table-column type="index" width="50">
        </el-table-column>

        <el-table-column prop="name" label="讲师姓名">
        </el-table-column>

        <el-table-column prop="identifier" label="讲师编号">
        </el-table-column>

        <el-table-column prop="phonenum" label="手机号">
        </el-table-column>

        <el-table-column prop="per_position" label="申请职位">
        </el-table-column>

        <el-table-column prop="date" label="日期">
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">通过</el-button>
            <el-button size="mini" type="danger" @click="dialogVisible = true;deleteindexloc(scope.$index,scope.row)">驳回</el-button>
            <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
              <span>确认删除？</span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false;handleDelete()">确 定</el-button>
              </span>
            </el-dialog>

          </template>
        </el-table-column>
      </el-table>

    </el-main>
  </el-container>
</div>
</template>

<script>
export default {
  name: 'ListPer',
  data() {
    return {
      state: false,
      currentPage: 1,
      pagesize: 10,
      dialogFormVisible: false,
      formLabelWidth: '120px',
      dialogVisible: false,
      deleteindex: Number,
      tableData: [{
          name: '小明',
          identifier: '3345678',
          phonenum: '18180186069',
          date: '2016-05-02',
          per_position: '特级讲师',
        },
        {
          name: '小红',
          identifier: '3345678',
          phonenum: '18180186069',
          date: '2016-05-02',
          per_position: '初级讲师',
        },
        {
          name: '小张',
          identifier: '3345678',
          phonenum: '18180186069',
          date: '2016-05-02',
          per_position: '资深讲师'
        }
      ],

    }
  },
  methods: {
    handleSizeChange(val) {
      this.pagesize = val;
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(`当前页: ${val}`);
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete() {
      console.log(this.deleteindex);
      this.tableData.splice(this.deleteindex, 1)
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    deleteindexloc(index, row) {
      this.deleteindex = index;
    }
  },
}
</script>

<style>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

#tablestyle {
  color: #555555;
  border: black;
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  text-align: center;
  font-size: 14px;
}
</style>
