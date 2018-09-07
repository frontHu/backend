<template>
  <div class="markdown">
    <div class="markdown-title">
      <input v-model="title" type="text" placeholder="文章标题">
    </div>
    <div class="markdown-desc">
      <input v-model="desc" type="text" placeholder="写点描述吧" />
    </div>
    <div class="markdown-btn">
      <el-button type="primary" size="small" @click="subArticle">发布文章</el-button>
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
import "./../../assets/css/atom-one-dark.css";
import "./../../assets/css/simplemde.css";
import { button, Message } from "element-ui";
import { saveBlogApi } from "./../../api/blog.api.js";
export default {
  name: "Markdown",
  data() {
    return {
      title: "",
      content: "",
      desc: ""
    };
  },
  components: {
    elButton: button
  },
  mounted() {
    var smde = new SimpleMDE({
      element: document.getElementById("markdown"),
      autoDownloadFontAwesome: true,
      autofocus: true,
      autosave: {
        enabled: true,
        uniqueId: "MyUniqueID",
        delay: 1000
      },
      blockStyles: {
        bold: "__",
        italic: "_"
      },
      forceSync: true,
      hideIcons: ["guide", "heading"],
      indentWithTabs: false,
      insertTexts: {
        horizontalRule: ["", "\n\n-----\n\n"],
        image: ["![](http://", ")"],
        link: ["[", "](http://)"],
        table: [
          "",
          "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"
        ]
      },
      lineWrapping: true,
      parsingConfig: {
        allowAtxHeaderWithoutSpace: true,
        strikethrough: true,
        underscoresBreakWords: false
      },
      renderingConfig: {
        singleLineBreaks: true,
        codeSyntaxHighlighting: true
      },
      shortcuts: {
        drawTable: "Cmd-Alt-T"
      },
      // showIcons: ["code", "table"],
      spellChecker: false,
      status: false,
      status: ["autosave", "lines", "words", "cursor"], // Optional usage
      status: [
        "autosave",
        "lines",
        "words",
        "cursor",
        {
          className: "keystrokes",
          defaultValue: function(el) {
            this.keystrokes = 0;
            el.innerHTML = "0 Keystrokes";
          },
          onUpdate: function(el) {
            el.innerHTML = ++this.keystrokes + " Keystrokes";
          }
        }
      ], // Another optional usage, with a custom status bar item that counts keystrokes
      styleSelectedText: true,
      tabSize: 4,
      // toolbar: true,
      // toolbarTips: true,
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
    smde.codemirror.on("change", () => {
      var value = smde.value();
      this.content = smde.markdown(value);
    });
  },
  methods: {
    subArticle() {
      if (!this.title || !this.content) {
        this.$message({
          message: "请填写完整内容",
          type: "warning"
        });
        return;
      }

      let params = {
        title: this.title,
        desc: this.desc,
        content: this.content,
        time: new Date().getTime()
      };
      saveBlogApi(params).then(res => {
        console.log(res, "resssss");
      });
    }
  }
};
</script>

<style scoped lang='scss'>
.markdown {
  width: 100%;
  height: 100%;
  .markdown-title,
  .markdown-desc {
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
  .markdown-desc {
    height: 30px;
    input {
      box-sizing: border-box;
      font-size: 14px;
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
