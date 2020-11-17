<template>
<div>
  <el-container>
    <el-main>
      <el-table id="tablestyle" style="width: 100%" height="600" highlight-current-row border fit show-header :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)">
        <el-table-column type="index" width="50">
        </el-table-column>

        <el-table-column prop="name" label="讲师姓名">
        </el-table-column>

        <el-table-column prop="id" label="讲师编号">
        </el-table-column>

        <el-table-column prop="tel" label="手机号">
        </el-table-column>

        <el-table-column prop="level" label="讲师等级">
        </el-table-column>

        <el-table-column prop="intro" label="讲师介绍">
        </el-table-column>

        <el-table-column prop="career" label="讲师经历">
        </el-table-column>

        <el-table-column prop="gmtCreate" label="创建日期">
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
                <el-form-item label="讲师等级" :label-width="formLabelWidth">
                  <el-input v-model="form.level" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="讲师介绍" :label-width="formLabelWidth">
                  <el-input v-model="form.intro" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="讲师经历" :label-width="formLabelWidth">
                  <el-input v-model="form.career" autocomplete="off"></el-input>
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
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 50, 100]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.length">
    </el-pagination>
  </div>
</div>
</template>

<script>
import {getLecList,updatelec,deletelec,getLecListById} from '@/network/maslec'
import bus from '@/components/eventBus/eventBus'
export default {
  name: 'ListLec',
  data() {
    return {
      state: false,
      currentPage: 1,
      pagesize: 10,
      adddialogFormVisible: false,
      editdialogFormVisible: false,
      formLabelWidth: '120px',
      form: {
        name: '',
        id: '',
        tel: '',
        intro: '',
        career: '',
        level: '',
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
    handleEdit(row) {
      this.form = row
    },
    handleDelete(row) {
      deletelec(row.id).then(() => {
        getLecList().then(res =>{
        this.tableData = res.data;   
    })
      })
    },
    editcancel() {
      this.form = ''
    },
    editconfirm() {
      updatelec(this.form).then(() => {
        getLecList().then(res =>{
          this.tableData = res.data;   
    })
      })
    }
  },

  created() {
    getLecList().then(res =>{
      this.tableData = res.data;   
    })
  },

  mounted() {
    bus.$on("getlecid",id => {
      getLecListById(id).then(res => {
        if(res.data != null){
          this.tableData = [];
          this.tableData.push(res.data)
        }else{
          alert("查无此人！")
        }
        
      })
    })
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
