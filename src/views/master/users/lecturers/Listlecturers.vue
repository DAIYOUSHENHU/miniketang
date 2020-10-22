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

        <el-table-column prop="position" label="讲师介绍">
        </el-table-column>

        <el-table-column prop="date" label="日期">
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row);dialogFormVisible = true">编辑</el-button>
            <el-dialog title="修改用户" :visible.sync="dialogFormVisible">
              <el-form :model="scope.row">
                <el-form-item label="姓名" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="编号" :label-width="formLabelWidth">
                  <el-input v-model="form.identifier" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="手机号" :label-width="formLabelWidth">
                  <el-input v-model="form.phonenum" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="讲师介绍" :label-width="formLabelWidth">
                  <el-input v-model="form.position" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="日期" :label-width="formLabelWidth">
                  <el-input v-model="form.date" autocomplete="off"></el-input>
                </el-form-item>

              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
              </div>
            </el-dialog>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

    </el-main>
  </el-container>
  <div style="margin-top: 10px"></div>

  <el-backtop></el-backtop>
  <div class="block">
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 50, 100]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.length">
    </el-pagination>
  </div>
</div>
</template>

<script>
export default {
  name: 'ListLec',
  data() {
    return {
      state: false,
      currentPage: 1,
      pagesize: 10,
      dialogFormVisible: false,
      formLabelWidth: '120px',
      form: {
        name: '',
        identifier: '',
        phonenum: '',
        totalpay: '',
        date: '',
        position: ''
      },
      tableData: [{
          name: '小明',
          identifier: '3345678',
          phonenum: '18180186069',
          date: '2016-05-02',
          position: '特级讲师',
        },
        {
          name: '小红',
          identifier: '3345678',
          phonenum: '18180186069',
          date: '2016-05-02',
          position: '初级讲师',
        },
        {
          name: '小张',
          identifier: '3345678',
          phonenum: '18180186069',
          date: '2016-05-02',
          position: '资深讲师'
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
      this.form.name = row.name
      this.form.identifier = row.identifier
      this.form.phonenum = row.phonenum
      this.form.position = row.position
      this.form.date = row.date

    },
    handleDelete(index, row) {
      console.log(index, row);
      this.tableData.splice(index, 1)
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
