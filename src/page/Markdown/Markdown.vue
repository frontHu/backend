<template>
  <div class="markdown">
    <div class="markdown-title">
      <input v-model="title" type="text" placeholder="文章标题">
    </div>
    <div class="markdown-btn">
      <el-button type="primary" size="small">发布文章</el-button>
      <el-button type="danger" size="small">删除</el-button>
      <el-button size="small">保存草稿</el-button>
    </div>
    <div class="markdown-main">
      <textarea id='markdown'></textarea > 
    </div>
  </div>
</template>

<script>
import SimpleMDE from "simplemde";
import marked from "marked";
import highlight from "highlight.js";
import "./../../assets/css/simplemde.css";
import "./../../assets/css/atom-one-dark.css";
import {
  button
} from 'element-ui'
export default {
  name: "Markdown",
  data() {
    return {
      title: "",
      content: ""
    }
  },
  component: {
    elButton: button
  },
  mounted() {
    var smde = new SimpleMDE({
      element: document.getElementById("markdown"),
      autofocus: true,
      autosave: true,
      previewRender: function(plainText) {
        return marked(plainText, {
          renderer: new marked.Renderer(),
          gfm: true,
          pedantic: false,
          sanitize: false,
          tables: true,
          breaks: true,
          smartLists: true,
          smartypants: true,
          highlight: function(code) {
            return highlight.highlightAuto(code).value;
          }
        });
      }
    });
    smde.codemirror.on("change", ()=>{
      var value = smde.value();
      this.content = value
    });
  }
};
</script>

<style scoped lang='scss'>
.markdown {
  width: 100%;
  height: 100%;
  .markdown-title {
    width: 100%;
    height: 45px;
    border-bottom: 1px solid #f1f1f1;
    input {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      font-size: 20px;
      padding-left: 20px;
    }
  }
  .markdown-main {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
  .markdown-btn {
    text-align: left;
    padding: 10px 20px;
  }
}
</style>
