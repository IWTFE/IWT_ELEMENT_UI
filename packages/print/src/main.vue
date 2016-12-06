<template>
  <el-button v-on:click="printer()">打印</el-button>
</template>
<script type="text/javascript">
  import "./style.css";
  export default {
    name:'el-print',
    props:{
      target:{
        type: String,
        default: ''
      },
      'stylesheet' : {
        type:String,
        default:''
      },
      defaultStyle : {
        type:String,
        default : 'body { font-size: 14px; width:650px; margin:0 auto; } .title { text-align:center; } .border { border-collapse:collapse;border:1px solid #000; } .border td,.border th { border:1px solid #000; } .text-r { text-align:right; }'
      }
    },
    methods:{
      printer(){
        if(this.target){
          var target = document.getElementById(this.target);
          if(!target) return false;
          var table = target.cloneNode(true),
              stylesheet = this["stylesheet"],
              docfrag = document.createDocumentFragment(),
              iframe = document.createElement("iframe"),
              contWind = null;
          if(stylesheet){
            var style = document.createElement("link");
            style.type = "text/css";
            style.rel = "stylesheet";
            style.href = stylesheet;
          }else{
              var style = document.createElement("style");
              style.innerHTML = this.defaultStyle;
          }
          iframe.name = "frame";
          iframe.style.display = "none";
          document.body.appendChild(iframe);
          var o = window.open("about:blank","frame");
          docfrag.appendChild(table);
          docfrag.appendChild(style);
          contWind = iframe.contentWindow;
          contWind.document.body.appendChild(docfrag);
          contWind.print();
          document.body.removeChild(iframe);
        }else{
          window.print();
        }
      }
    }
  }
</script>
