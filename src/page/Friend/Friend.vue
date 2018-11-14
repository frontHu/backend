<template>
  <div class="friend">
    <div class="friend-add">
      <el-button type="primary" @click="dialogVisible=true">新增</el-button>
    </div>
    <el-dialog
      title="添加好朋友"
      :visible="dialogVisible"
    >
      <div class="info">
        <input type="file" @change="uploadImg($event)"/>
      </div>
      <div class="info">
        <el-input v-model="name" placeholder="名称"></el-input>
      </div>
      <div class="info">
        <el-input v-model="desc" type="textarea" placeholder="描述"></el-input>
      </div>
      <div class="info">
        <el-input v-model="blog" placeholder="博客"></el-input>
      </div>
      <div class="info">
        <el-input v-model="github" placeholder="Github"></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-table border>
      <el-table-column
        type="index">
      </el-table-column>
      <el-table-column
        label="友名"
      ></el-table-column>
      <el-table-column
        label="描述"
      ></el-table-column>
      <el-table-column
        label="博客"
      ></el-table-column> 
      <el-table-column
        label="GitHub"
      ></el-table-column> 
       <el-table-column
        label="操作"
      ></el-table-column> 
    </el-table>
  </div>
</template>

<script>
import { addFriend } from './../../api/friend.api.js'
export default {  
  name: 'Friend',
  data() {
    return {  
      dialogVisible: false,
      name: '',
      desc: '',
      blog: '',
      github: '',
      imageUrl: ''
    }
  },
  methods: {
    uploadImg(e) {
      let file = e.target.files[0]
      let formData = new FormData()
      formData.append('file', file)
      addFriend(formData).then(res => {
        console.log(res, 'res') 
      })
    }
  }
}
</script>

<style scoped lang='scss'>
  .friend {
    padding: 20px;
    .friend-add {
      margin-bottom: 20px;
    }
    .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
      border-color: #409EFF;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      line-height: 178px;
      text-align: center;
    }
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
    .info {
      margin-bottom: 20px;
    }
  }
</style>
