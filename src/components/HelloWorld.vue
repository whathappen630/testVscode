<template>
  <div class="hello" style="display:flex">
    <!-- <div id="container" style="height:600px;    width: 1000px;
    text-align: left;"></div> -->
      <!-- <iframe width="500px" height="500px" src="http://localhost:5601/goto/afbc5610-cdd0-11ec-ba6b-a145a6dd9c5e" frameborder="0"></iframe> -->
      <!-- <div style="flex:1"> -->
<!-- <iframe src="http://localhost:5601/app/dashboards#/view/d8e98630-cdcf-11ec-ba6b-a145a6dd9c5e?embed=true&_g=(filters:!(),refreshInterval:(pause:!f,value:900000),time:(from:now-7d,to:now))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,syncColors:!f,useMargins:!t),panels:!((embeddableConfig:(enhancements:()),gridData:(h:15,i:c84c38bc-a1c4-4e09-82da-8e6cea9433fe,w:24,x:0,y:0),id:'45e07720-b890-11e8-a6d9-e546fe2bba5f',panelIndex:c84c38bc-a1c4-4e09-82da-8e6cea9433fe,type:visualization,version:'7.17.0')),query:(language:kuery,query:''),tags:!(),timeRestore:!f,title:'123321',viewMode:view)&show-top-menu=true&show-query-input=true&show-time-filter=true" height="600" width="600"></iframe>      </div> -->
<!-- <div style="flex:1">
  <span>当前</span> -->
  <!-- <iframe src="http://localhost:5601/app/dashboards#/view/d8e98630-cdcf-11ec-ba6b-a145a6dd9c5e?embed=true&_g=(filters:!(),refreshInterval:(pause:!f,value:900000),time:(from:now-7d,to:now))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,syncColors:!f,useMargins:!t),panels:!((embeddableConfig:(enhancements:()),gridData:(h:15,i:c84c38bc-a1c4-4e09-82da-8e6cea9433fe,w:24,x:0,y:0),id:'45e07720-b890-11e8-a6d9-e546fe2bba5f',panelIndex:c84c38bc-a1c4-4e09-82da-8e6cea9433fe,type:visualization,version:'7.17.0')),query:(language:kuery,query:''),tags:!(),timeRestore:!f,title:'123321',viewMode:view)&hide-filter-bar=true" height="600" width="600"></iframe>   -->

 <!-- </div> 
<div style="flex:1">
  <span>保存最新版本</span> --> 
  <!-- <iframe src="http://localhost:5601/app/dashboards#/view/d8e98630-cdcf-11ec-ba6b-a145a6dd9c5e?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!f%2Cvalue%3A900000)%2Ctime%3A(from%3Anow-7d%2Cto%3Anow))&hide-filter-bar=true" height="600" width="600"></iframe> -->

<!-- </div> -->
 <el-table
      :data="tableData"
     width="1000">
      <el-table-column
        prop="line"
        label="行"
        width="20">
      </el-table-column>
      <el-table-column
        prop="caption"
        label="描述"
        width="150">
      </el-table-column>
      <el-table-column
        prop="language"
        label="语言"
        width="150">
      </el-table-column>
       <el-table-column
        prop="rule_name"
        label="规则集"
        width="150">
      </el-table-column>
       <el-table-column
        prop="found_tool"
        label="工具"
        width="150">
      </el-table-column>
       <el-table-column
        prop="caption_original"
        label="描述"
        width="150">
      </el-table-column>
    </el-table>
</div>
</template>

<script>
/*eslint-disable */
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
// import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution.js';

const info = require('./data.json') 
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      info:``,
      editor:{},
      tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
    }
  },
   created() {
     this.info = info.data
    this.span = this.$apm.startSpan('create-mount-duration', 'custom')
  },
  mounted() {
    this.span && this.span.end()
    this.tableData = info.data.infos
    // this.editor = monaco.editor.create(document.getElementById('container'), {
	  //     value: "function hello() {\n\talert('Hello world!');\n}",
	  //   language: 'javascript',
    //   readOnly:true
    // });

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
