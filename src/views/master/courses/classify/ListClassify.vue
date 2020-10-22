<template>
<div>
  <el-container>
    <el-main>
      <el-table id="tablestyle" style="width: 100%" height="600" highlight-current-row border fit show-header :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)">
        <el-table-column type="index" width="50">
        </el-table-column>

        <el-table-column prop="classifyname" label="分类">
        </el-table-column>

        <el-table-column prop="tags" label="内容">
          <template slot-scope="scope">
            <el-tag v-for="tag in scope.row.tags" :key="tag.name" :type="tag.type">
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
      tableData: [{
          classifyname: '职业考证',
          tags: [{
              name: '公考求职',
              type: 'info'
            },
            {
              name: '法学院',
              type: 'info'
            },
            {
              name: '医疗卫生',
              type: 'info'
            }
          ]
        },
        {
          classifyname: 'IT-互联网',
          tags: [{
              name: '互联网产品',
              type: 'info'
            },
            {
              name: '编程语言',
              type: 'info'
            },
            {
              name: 'JAva开发',
              type: 'info'
            }
          ]
        },
        {
          classifyname: '兴趣-生活',
          tags: [{
              name: '吃',
              type: 'info'
            },
            {
              name: '喝',
              type: 'info'
            },
            {
              name: '玩',
              type: 'info'
            }
          ]
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
