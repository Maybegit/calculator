webpackJsonp([1],{NHnr:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i("7+uW");function l(t,s){var i=t[0];return s.map(function(s,n){"+"==s?i=1*i+1*t[n+1]:"-"==s?i=1*i-1*t[n+1]:"×"==s?i=1*i*t[n+1]*1:"÷"==s&&(i=1*i/t[n+1]*1)}),i}var e={name:"app",data:function(){return{id1:"clear",id2:"back",id3:"history",id4:"div",id5:"num_7",id6:"num_8",id7:"num_9",id8:"mul",id9:"num_4",id10:"num_5",id11:"num_6",id12:"sub",id13:"num_1",id14:"num_2",id15:"num_3",id16:"add",id17:"num_0",id18:"dot",id19:"equals",result:"0",dotSign:!1}},methods:{onclick:function(t){var s=t.target.id;if(s.match("num_")){var i=s.split("_")[1];"0"==this.result?this.result=i:this.result+=i}else if("dot"==s)this.dotSign||(this.dotSign=!0,this.result+=".");else if("clear"==s)this.result="0",this.dotSign=!1;else if("back"==s)1==this.result.length?this.result="0":(this.result=this.result.substr(0,this.result.length-1),this.result.match(/\./)?this.dotSign=!0:this.dotSign=!1);else if(("add"==s||"sub"==s||"mul"==s||"div"==s)&&"."!=this.result.substr(this.result.length-1)&&"+"!=this.result.substr(this.result.length-1)&&"-"!=this.result.substr(this.result.length-1)&&"×"!=this.result.substr(this.result.length-1)&&"÷"!=this.result.substr(this.result.length-1)){var n=void 0;switch(s){case"add":n="+";break;case"sub":n="-";break;case"div":n="÷";break;case"mul":n="×"}this.result+=n,this.dotSign=!1}},equal:function(){var t=void 0;if("."!=this.result.substr(this.result.length-1)&&"+"!=this.result.substr(this.result.length-1)&&"-"!=this.result.substr(this.result.length-1)&&"×"!=this.result.substr(this.result.length-1)&&"÷"!=this.result.substr(this.result.length-1)){if(this.result.match("=")&&(this.result=this.result.split("=")[1]),null==this.result.match(/[\+\-]/g)||null==this.result.match(/[\×\÷]/g)){t=l(this.result.split(/[\+\-\×\÷]/),this.result.match(/[\+\-\×\÷]/g))}else{var s=this.result.split(/[\+\-]/),i=this.result.match(/[\+\-]/g);console.log(s),console.log(i),t=l(s.map(function(t){return t.match(/[\×\÷]/g)?l(t.split(/[\+\-\×\÷]/),t.match(/[\+\-\×\÷]/g)):t}),i)}this.result=this.result+"="+t.toFixed(1)}}},mounted:function(){var t=window.innerWidth/18;document.documentElement.style.fontSize=t+"px",window.onresize=function(){t=window.innerWidth/18,document.documentElement.style.fontSize=t+"px"}}},c={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"screen"},[i("p",{staticClass:"text"},[t._v("\n      "+t._s(t.result)+"\n    ")])]),t._v(" "),i("div",{staticClass:"keys"},[i("div",{staticClass:"btns-row"},[i("div",{staticClass:"btn gray",attrs:{id:t.id1},on:{click:t.onclick}},[t._v("清除")]),t._v(" "),i("div",{staticClass:"btn gray",attrs:{id:t.id2},on:{click:t.onclick}},[t._v("回退")]),t._v(" "),i("div",{staticClass:"btn gray",attrs:{id:t.id3},on:{click:t.onclick}},[t._v("?")]),t._v(" "),i("div",{staticClass:"btn orange",attrs:{id:t.id4},on:{click:t.onclick}},[t._v("÷")])]),t._v(" "),i("div",{staticClass:"btns-row"},[i("div",{staticClass:"btn",attrs:{id:t.id5},on:{click:t.onclick}},[t._v("7")]),t._v(" "),i("div",{staticClass:"btn",attrs:{id:t.id6},on:{click:t.onclick}},[t._v("8")]),t._v(" "),i("div",{staticClass:"btn",attrs:{id:t.id7},on:{click:t.onclick}},[t._v("9")]),t._v(" "),i("div",{staticClass:"btn orange",attrs:{id:t.id8},on:{click:t.onclick}},[t._v("×")])]),t._v(" "),i("div",{staticClass:"btns-row"},[i("div",{staticClass:"btn",attrs:{id:t.id9},on:{click:t.onclick}},[t._v("4")]),t._v(" "),i("div",{staticClass:"btn",attrs:{id:t.id10},on:{click:t.onclick}},[t._v("5")]),t._v(" "),i("div",{staticClass:"btn",attrs:{id:t.id11},on:{click:t.onclick}},[t._v("6")]),t._v(" "),i("div",{staticClass:"btn orange",attrs:{id:t.id12},on:{click:t.onclick}},[t._v("-")])]),t._v(" "),i("div",{staticClass:"btns-row"},[i("div",{staticClass:"btn",attrs:{id:t.id13},on:{click:t.onclick}},[t._v("1")]),t._v(" "),i("div",{staticClass:"btn",attrs:{id:t.id14},on:{click:t.onclick}},[t._v("2")]),t._v(" "),i("div",{staticClass:"btn",attrs:{id:t.id15},on:{click:t.onclick}},[t._v("3")]),t._v(" "),i("div",{staticClass:"btn orange",attrs:{id:t.id16},on:{click:t.onclick}},[t._v("+")])]),t._v(" "),i("div",{staticClass:"btns-row"},[i("div",{staticClass:"btn zero",attrs:{id:t.id17},on:{click:t.onclick}},[t._v("0")]),t._v(" "),i("div",{staticClass:"btn",attrs:{id:t.id18},on:{click:t.onclick}},[t._v(".")]),t._v(" "),i("div",{staticClass:"btn orange",attrs:{id:t.id19},on:{click:t.equal}},[t._v("=")])])])])},staticRenderFns:[]};var a=i("VU/8")(e,c,!1,function(t){i("um9E")},"data-v-67feb974",null).exports,r=i("/ocq"),d={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"container"})},staticRenderFns:[]};var u=i("VU/8")({name:"HelloWorld",data:function(){return{}}},d,!1,function(t){i("zlDI")},"data-v-3af10dac",null).exports;n.a.use(r.a);var o=new r.a({routes:[{path:"/",name:"HelloWorld",component:u}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:o,components:{App:a},template:"<App/>"})},um9E:function(t,s){},zlDI:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.02c4fab591797c3a7e89.js.map