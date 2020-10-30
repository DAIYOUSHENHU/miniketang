<template>
<div>
  <el-container>
    <el-main>
      <div class="newStu">
        <el-button type="danger" @click="newdialogFormVisible = true">新增</el-button>
        <el-dialog title="增加学生" :visible.sync="newdialogFormVisible" style="text-align: left">
          <el-form>

            <el-form-item label="姓名" :label-width="formLabelWidth">
              <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
            </el-form-item>

            <el-form-item label="性别" :label-width="formLabelWidth" style="text-align: left">
              <el-select v-model="form.sex" placeholder="请选择性别">
                <el-option label="男" value="1"></el-option>
                <el-option label="女" value="0"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="电话" :label-width="formLabelWidth">
              <el-input v-model="form.tel" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="地址" :label-width="formLabelWidth">
              <el-input v-model="form.addr" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="newdialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="newdialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </div>
      <el-table id="tablestyle" style="width: 100%" height="600" highlight-current-row border fit show-header :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)">
        <el-table-column type="index" width="50">
        </el-table-column>

        <el-table-column prop="name" label="学生姓名">
        </el-table-column>

        <el-table-column prop="identifier" label="学生编号">
        </el-table-column>

        <el-table-column prop="phonenum" label="手机号">
        </el-table-column>

        <el-table-column prop="totalpay" label="付费总额">
        </el-table-column>

        <el-table-column prop="date" label="日期">
        </el-table-column>

        <el-table-column label="账号禁用">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.state" :active-value="1" :inactive-value="0" active-color="#ff4949" inactive-color="#13ce66" disabled>
            </el-switch>
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row);editdialogFormVisible = true">编辑</el-button>
            <el-dialog title="修改用户" :visible.sync="editdialogFormVisible">
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
                <el-form-item label="付费总额" :label-width="formLabelWidth">
                  <el-input v-model="form.totalpay" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="日期" :label-width="formLabelWidth">
                  <el-input v-model="form.date" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="账号禁用" :label-width="formLabelWidth">
                  <el-select v-model="form.state" placeholder="是否禁用账号">
                    <el-option label="是" value="1"></el-option>
                    <el-option label="否" value="0"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="editdialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="editdialogFormVisible = false">确 定</el-button>
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
    <el-pagination id="pagin" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 50, 100]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.length">
    </el-pagination>
  </div>
</div>
</template>

<script>
export default {
  name: 'ListStu',
  data() {
    return {
      state: false,
      currentPage: 1,
      pagesize: 10,
      newdialogFormVisible: false,
      editdialogFormVisible: false,
      formLabelWidth: '120px',
      form: {
        name: '',
        identifier: '',
        phonenum: '',
        totalpay: '',
        date: '',
        state: ''
      },
      tableData: [{
          name: '张三',
          identifier: '3345678',
          phonenum: '18180186069',
          totalpay: '333',
          date: '2016-05-02',
          state: 0,
        },
        {
          name: '李四',
          identifier: '3345678',
          phonenum: '18180186069',
          totalpay: '555',
          date: '2016-05-02',
          state: 1,
        },
        {
          name: '王五',
          identifier: '3345678',
          phonenum: '18180186069',
          totalpay: '666',
          date: '2016-05-02',
          state: 1,
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
      this.form.totalpay = row.totalpay
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

.newStu {
  text-align: right;
  padding-right: 20px;
}

.newStuBtn {
  text-align: right;
  padding-right: 30px;
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

#pagin {
  text-align: center;
}
</style>
