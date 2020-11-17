<template>
<div>
  <el-container>
    <el-main>

      <el-table id="tablestyle" style="width: 100%" height="600" highlight-current-row border fit show-header :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)">
        <el-table-column type="index" width="50">
        </el-table-column>

        <el-table-column prop="name" label="学生姓名">
        </el-table-column>

        <el-table-column prop="id" label="学生编号">
        </el-table-column>

        <el-table-column prop="tel" label="手机号">
        </el-table-column>

        <el-table-column prop="gmtCreate" label="创建日期">
        </el-table-column>

        <el-table-column prop="gmtModified" label="修改日期">
        </el-table-column>

        <el-table-column label="账号禁用">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.isDisabled" :active-value="1" :inactive-value="0" active-color="#ff4949" inactive-color="#13ce66" disabled>
            </el-switch>
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row);editdialogFormVisible = true">编辑</el-button>
            <el-dialog title="修改用户" :visible.sync="editdialogFormVisible">
              <el-form :model="scope.row">
                <el-form-item label="姓名" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="编号" :label-width="formLabelWidth">
                  <el-input v-model="form.id" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="手机号" :label-width="formLabelWidth">
                  <el-input v-model="form.tel" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="创建日期" :label-width="formLabelWidth">
                  <el-input v-model="form.gmtCreate" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="账号禁用" :label-width="formLabelWidth">
                  <el-select v-model="form.isDisabled" placeholder="是否禁用账号">
                    <el-option label="是" value="1"></el-option>
                    <el-option label="否" value="0"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="editcancel();editdialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="editconfirm();editdialogFormVisible = false">确 定</el-button>
              </div>
            </el-dialog>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
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
import {
  memFindAll
} from '@/network/masstu'

import {memFindById,memUpdate,deletestu} from '@/network/masstu'

import bus from '@/components/eventBus/eventBus'

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
        id: '',
        tel: '',
        gmtCreate: '',
        isDisabled: '',
      },
      tableData: [],
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

    handleDelete(row) {
      deletestu(row.id).then(() => {
        memFindAll().then(res => {
          this.tableData = res.data;
    })
      })
    }, 

    handleEdit(row) {
      this.form = row
    },

    editcancel() {
      this.form.name = ''
      this.form.id = ''
      this.form.tel = ''
      this.form.gmtCreate = ''
      this.isDisabled = ''
    },

    editconfirm() {
      memUpdate(this.form).then(() => {
        memFindAll().then(res => {
          this.tableData = res.data;
    })
      })
    },
  },

  created() {
    memFindAll().then(res => {
      this.tableData = res.data;
    })
  },
  mounted() {
    bus.$on("searchById", id => {
      memFindById(id).then(res => {
        if (res.data == null) {
          alert("查无此人");
        }
        this.tableData = [];
        this.tableData.push(res.data)
      })
    })
  }
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
