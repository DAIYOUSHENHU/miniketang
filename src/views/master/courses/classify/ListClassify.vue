<template>
<div>
  <el-container>
    <el-main>
      <el-table id="tablestyle" style="width: 100%" height="600" highlight-current-row border fit show-header :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)">
        <el-table-column type="index" width="50">
        </el-table-column>

        <el-table-column prop="name" label="分类">
        </el-table-column>

        <el-table-column prop="children" label="内容">
          <template slot-scope="scope">
            <el-tag v-for="tag in scope.row.children" :key="tag.name" :type="tag.type">
              {{tag.name}}
            </el-tag>
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="dialogVisible = true;deleteindexloc(scope.$index,scope.row)">删除
            </el-button>
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
import {getClaList} from '@/network/mascla'
import bus from '@/components/eventBus/eventBus'
export default {
  name: 'ListCla',
  data() {
    return {
      state: false,
      currentPage: 1,
      pagesize: 10,
      dialogFormVisible: false,
      formLabelWidth: '120px',
      dialogVisible: false,
      deleteindex: Number,
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
      console.log(row);
    },
    handleDelete() {
      
    },
    handleClose(done) {
      
    },
    
  },
  created() {
    getClaList().then(res => {
      console.log(res.data);
      this.tableData = res.data
    })
  },
  mounted() {
    bus.$on("searchByName",words => {
      console.log(words);
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
