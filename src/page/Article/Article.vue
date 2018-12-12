<template>
  <div class="article">
    <el-table 
      border
      :data="tableData.list">
      <el-table-column 
        label="序号" 
        type="index"
        width="80px"></el-table-column>
      <el-table-column label="标题" prop="title"></el-table-column>
      <el-table-column label="创建时间" prop="createTime"></el-table-column>
      <el-table-column label="描述" prop="desc"></el-table-column>
      <el-table-column label="阅读人数" prop="seeNumber"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            @click="handleDelete(scope.row)"
            type="danger" 
            size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getBlogList, deleteBlog } from './../../api/blog.api.js'
export default {
  name: 'Article',
  data() {
    return {
      tableData: {
        list: [],
        currentPage: 2,
        pageSize: 10
      }
    }
  },
  created() { 
    this.getBlog()
  },
  methods: {
    getBlog() {
      let { currentPage, pageSize } = this.tableData;
      let params = { currentPage, pageSize }
     getBlogList(params).then(res => {
       console.log(res, 'res')
       this.tableData.list = res ? res.list.content : []
     })
    },
    handleDelete(item) {
      deleteBlog({_id: item._id}).then(res => {
        this.getBlog()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .article {
    padding: 20px;
  }
</style>
