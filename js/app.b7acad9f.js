(function(t){function n(n){for(var o,a,c=n[0],u=n[1],s=n[2],d=0,l=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&l.push(i[a][0]),i[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);p&&p(n);while(l.length)l.shift()();return r.push.apply(r,s||[]),e()}function e(){for(var t,n=0;n<r.length;n++){for(var e=r[n],o=!0,c=1;c<e.length;c++){var u=e[c];0!==i[u]&&(o=!1)}o&&(r.splice(n--,1),t=a(a.s=e[0]))}return t}var o={},i={app:0},r=[];function a(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=o,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)a.d(e,o,function(n){return t[n]}.bind(null,o));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="/logic-gate/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var s=0;s<c.length;s++)n(c[s]);var p=u;r.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},1312:function(t,n,e){"use strict";var o=e("a68f"),i=e.n(o);i.a},"1a9a":function(t,n,e){},"352f":function(t,n,e){"use strict";var o=e("1a9a"),i=e.n(o);i.a},"41ee":function(t,n,e){},"45e8":function(t,n,e){"use strict";var o=e("41ee"),i=e.n(o);i.a},"47d9":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"page"},[e("Header",{on:{select:t.select,about:t.goToAboutPage}}),t.about?e("About"):e("svg",{ref:"main",staticClass:"main",attrs:{width:"100%",height:"100%",viewBox:"0, 0, "+t.width/t.zoom+", "+t.height/t.zoom}},[t.board?e("Board",{attrs:{zoom:t.zoom,board:t.board}}):t._e()],1)],1)},r=[],a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",[t._l(t.menu,(function(n,o){return e("a",{key:n.title,class:{active:o==t.selected},on:{click:function(e){return t.select(o,n.data)}}},[t._v(t._s(n.title))])})),e("span",[t._v("|")]),e("a",{staticClass:"about",class:{active:"about"==t.selected},on:{click:t.about}},[t._v("About")])],2)},c=[],u={components:[{type:"static",label:"A",x:200,y:100,props:!0},{type:"static",label:"B",x:210,y:205},{type:"xor",x:280,y:105},{type:"and",x:280,y:200},{type:"result",label:"Sum",x:340,y:105},{type:"result",label:"Carry out",x:350,y:200}],connections:[{output:{c:0,o:"q"},input:{c:2,i:"a"}},{output:{c:0,o:"q"},input:{c:3,i:"a"}},{output:{c:1,o:"q"},input:{c:2,i:"b"}},{output:{c:1,o:"q"},input:{c:3,i:"b"}},{output:{c:2,o:"q"},input:{c:4,i:"a"}},{output:{c:3,o:"q"},input:{c:5,i:"a"}}]},s={components:[{type:"static",label:"A",x:210,y:105},{type:"static",label:"B",x:200,y:205},{type:"not",x:280,y:105},{type:"not",x:270,y:205},{type:"and",x:400,y:200},{type:"and",x:400,y:250},{type:"and",x:400,y:300},{type:"and",x:400,y:350},{type:"result",label:"0",x:470,y:200},{type:"result",label:"1",x:470,y:250},{type:"result",label:"2",x:470,y:300},{type:"result",label:"3",x:470,y:350}],connections:[{output:{c:0,o:"q"},input:{c:2,i:"a"}},{output:{c:1,o:"q"},input:{c:3,i:"a"}},{output:{c:2,o:"q"},input:{c:4,i:"a"}},{output:{c:3,o:"q"},input:{c:4,i:"b"}},{output:{c:2,o:"q"},input:{c:5,i:"a"}},{output:{c:1,o:"q"},input:{c:5,i:"b"}},{output:{c:0,o:"q"},input:{c:6,i:"a"}},{output:{c:3,o:"q"},input:{c:6,i:"b"}},{output:{c:0,o:"q"},input:{c:7,i:"a"}},{output:{c:1,o:"q"},input:{c:7,i:"b"}},{output:{c:4,o:"q"},input:{c:8,i:"a"}},{output:{c:5,o:"q"},input:{c:9,i:"a"}},{output:{c:6,o:"q"},input:{c:10,i:"a"}},{output:{c:7,o:"q"},input:{c:11,i:"a"}}]},p={components:[{type:"static",label:"A",x:200,y:110},{type:"static",label:"B",x:210,y:270},{type:"not",x:280,y:110},{type:"not",x:280,y:270},{type:"and",x:340,y:140},{type:"and",x:340,y:240},{type:"nor",x:400,y:190},{type:"result",label:"A < B",x:470,y:140},{type:"result",label:"A = B",x:470,y:190},{type:"result",label:"A > B",x:470,y:240}],connections:[{output:{c:0,o:"q"},input:{c:2,i:"a"}},{output:{c:1,o:"q"},input:{c:3,i:"a"}},{output:{c:2,o:"q"},input:{c:4,i:"a"}},{output:{c:1,o:"q"},input:{c:4,i:"b"}},{output:{c:0,o:"q"},input:{c:5,i:"a"}},{output:{c:3,o:"q"},input:{c:5,i:"b"}},{output:{c:4,o:"q"},input:{c:6,i:"a"}},{output:{c:5,o:"q"},input:{c:6,i:"b"}},{output:{c:4,o:"q"},input:{c:7,i:"a"}},{output:{c:6,o:"q"},input:{c:8,i:"a"}},{output:{c:5,o:"q"},input:{c:9,i:"a"}}]},d={components:[{type:"static",label:"D",x:200,y:100,props:!1},{type:"static",label:"Enable",x:320,y:175,props:!0},{type:"not",x:270,y:250},{type:"nand",x:390,y:105},{type:"nand",x:480,y:110},{type:"nand",x:390,y:245},{type:"nand",x:490,y:240},{type:"result",label:"Q",x:570,y:110},{type:"result",label:"!Q",x:600,y:240}],connections:[{output:{c:0,o:"q"},input:{c:2,i:"a"}},{output:{c:0,o:"q"},input:{c:3,i:"a"}},{output:{c:1,o:"q"},input:{c:3,i:"b"}},{output:{c:3,o:"q"},input:{c:4,i:"a"}},{output:{c:6,o:"q"},input:{c:4,i:"b"}},{output:{c:1,o:"q"},input:{c:5,i:"a"}},{output:{c:2,o:"q"},input:{c:5,i:"b"}},{output:{c:4,o:"q"},input:{c:6,i:"a"}},{output:{c:5,o:"q"},input:{c:6,i:"b"}},{output:{c:4,o:"q"},input:{c:7,i:"a"}},{output:{c:6,o:"q"},input:{c:8,i:"a"}}]},l={components:[{type:"static",label:"A",x:200,y:100},{type:"static",label:"I0",x:200,y:50},{type:"static",label:"I1",x:200,y:150},{type:"nand",x:270,y:100},{type:"nand",x:330,y:55},{type:"nand",x:330,y:145},{type:"nand",x:400,y:100},{type:"result",label:"Q",x:470,y:100}],connections:[{output:{c:0,o:"q"},input:{c:3,i:"a"}},{output:{c:0,o:"q"},input:{c:3,i:"b"}},{output:{c:1,o:"q"},input:{c:4,i:"a"}},{output:{c:0,o:"q"},input:{c:4,i:"b"}},{output:{c:3,o:"q"},input:{c:5,i:"a"}},{output:{c:2,o:"q"},input:{c:5,i:"b"}},{output:{c:4,o:"q"},input:{c:6,i:"a"}},{output:{c:5,o:"q"},input:{c:6,i:"b"}},{output:{c:6,o:"q"},input:{c:7,i:"a"}}]},f={data:function(){return{selected:2,menu:[{title:"Binary adder",data:u},{title:"Binary decoder",data:s},{title:"Digital comparator",data:p},{title:"D flip-flop",data:d},{title:"Multiplexer",data:l}]}},created:function(){this.$emit("select",this.menu[this.selected].data)},methods:{select:function(t,n){this.selected=t,this.$emit("select",n)},about:function(){this.selected="about",this.$emit("about")}}},y=f,h=(e("c2da"),e("2877")),b=Object(h["a"])(y,a,c,!1,null,"4eeb4bdf",null),x=b.exports,m=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("g",[e("Sidebar",{attrs:{zoom:t.zoom},on:{addGate:t.addGate,dragAddedGate:t.dragAddedGate,gateAdded:t.gateAdded}}),t._l(t.components,(function(n,o){return e("Draggable",{key:o,attrs:{x:n.x,y:n.y,r:10,zoom:t.zoom,disabled:!!t.connectionSource},on:{drag:function(n){return t.drag(o,n)}}},[e("g",[e(n.type,{tag:"component",attrs:{index:o,label:n.label,model:n.model,inputs:Object.fromEntries(Object.entries(n.model.inputs).map((function(t){var n=t[0],e=t[1],o=e.c,i=e.o;return[n,o.outputs[i]]}))),outputs:n.model.outputs}}),t._l(n.outputs,(function(n,i){return!t.connectionSource||!t.connectionSource.outbound||t.connectionSource.index==o&&t.connectionSource.ioKey==i?e("Draggable",{key:i,attrs:{x:n.x,y:n.y,r:5,zoom:t.zoom,color:t.connectionTarget&&t.connectionTarget.index==o&&t.connectionTarget.ioKey==i?"green":"gray"},on:{dragstart:function(n){return t.startConnection(o,i,!0)},drag:function(n){return t.drawConnection(n)},dragend:function(n){return t.endConnection()}}}):t._e()})),t._l(n.inputs,(function(n,i){return[n.used||t.connectionSource&&!t.connectionSource.outbound&&(t.connectionSource.index!=o||t.connectionSource.ioKey!=i)?t.connectionSource?t._e():e("circle",{staticClass:"remove-input",attrs:{cx:n.x,cy:n.y,r:5},on:{click:function(n){return t.removeInput(o,i)}}}):e("Draggable",{key:i,attrs:{x:n.x,y:n.y,r:5,zoom:t.zoom,color:t.connectionTarget&&t.connectionTarget.index==o&&t.connectionTarget.ioKey==i?"green":"gray"},on:{dragstart:function(n){return t.startConnection(o,i,!1)},drag:function(n){return t.drawConnection(n)},dragend:function(n){return t.endConnection()}}})]}))],2)])})),t._l(t.connections,(function(n){return e("Connection",{key:n.output.c+"-"+n.output.o+"-"+n.input.c+"-"+n.input.i,attrs:{x1:t.components[n.output.c].x+t.components[n.output.c].outputs[n.output.o].x,y1:t.components[n.output.c].y+t.components[n.output.c].outputs[n.output.o].y,x2:t.components[n.input.c].x+t.components[n.input.c].inputs[n.input.i].x,y2:t.components[n.input.c].y+t.components[n.input.c].inputs[n.input.i].y,on:t.components[n.output.c].model.outputs[n.output.o]}})})),t.connectionSource?e("Connection",{attrs:{x1:t.connectionSource.x,y1:t.connectionSource.y,x2:t.connectionSource.x+t.connectionSource.dx,y2:t.connectionSource.y+t.connectionSource.dy}}):t._e()],2)},g=[],v=(e("4de4"),e("c740"),e("5db7"),e("4160"),e("caad"),e("d81d"),e("a434"),e("73d9"),e("a9e3"),e("4fad"),e("159b"),e("3835")),q=e("5530"),O=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("g",{staticClass:"sidebar",attrs:{transform:"translate("+t.baseOffset.x+", "+t.baseOffset.y+")"}},[e("rect",{attrs:{x:"-40",y:"-40",width:"80",height:"100%"}}),t._l(t.gates,(function(n){return e("Draggable",{attrs:{x:0,y:n.offset,r:20,zoom:t.zoom},on:{dragstart:function(e){return t.dragstart(n.type,n.offset)},drag:function(n){return t.drag(n)},dragend:t.dragend}},[e(n.type,{tag:"component"})],1)})),t._e()],2)},_=[],S=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("g",{attrs:{transform:"translate(-25)"},on:{click:t.toggle}},[e("text",{attrs:{x:"-15",y:"0","font-size":"10","alignment-baseline":"middle","text-anchor":"end"}},[t._v(t._s(t.label))]),this.model?e("circle",{attrs:{cx:"3",cy:"0",r:"10"}}):t._e(),e("rect",{class:{fillOn:t.outputs&&t.outputs.q},attrs:{x:"-4",y:"-7",width:"14",height:"14"}}),e("path",{class:{on:t.outputs&&t.outputs.q},attrs:{d:"M 10 0 L 50 0"}})])},M=[],j=(e("a623"),e("c1f9"),e("d3b7"),e("6062"),e("2532"),e("3ca3"),e("ddb0"),0);function w(){this.id=j++,this.inputs={},this.outputs={},this.dependencies=new Set,this.trigger()}function L(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=t;Object.defineProperty(this,"value",{get:function(){return n},set:function(t){n=t,this.trigger()}}),w.call(this)}function C(){w.call(this)}function D(){w.call(this)}function A(){w.call(this)}function z(){w.call(this)}function N(){w.call(this)}function $(){w.call(this)}function T(){w.call(this)}w.prototype.trigger=function(){var t=Object.entries(this.inputs).filter((function(t){var n=Object(v["a"])(t,2),e=n[1];return void 0!=e})).map((function(t){var n=Object(v["a"])(t,1),e=n[0];return e}));if(this.requiredInputs.every((function(n){return t.includes(n)}))){var n=JSON.stringify(this.outputs);this.outputs=this.calculate(Object.fromEntries(Object.entries(this.inputs).map((function(t){var n=Object(v["a"])(t,2),e=n[0],o=n[1];return[e,o.c.outputs[o.o]]})))),n!=JSON.stringify(this.outputs)&&this.dependencies.forEach((function(t){t.trigger()}))}},w.prototype.calculate=function(){throw Error("Component is abstract")},w.prototype.connect=function(t,n,e){n.dependencies.add(this),this.inputs[t]={c:n,o:e},this.trigger()},w.prototype.disconnect=function(t,n){n.dependencies.delete(this),delete this.inputs[t],this.trigger()},L.prototype=Object.create(w.prototype),L.prototype.requiredInputs=[],L.prototype.calculate=function(){return{q:this.value}},C.prototype=Object.create(w.prototype),C.prototype.requiredInputs=["a"],C.prototype.calculate=function(){return{}},D.prototype=Object.create(w.prototype),D.prototype.requiredInputs=["a"],D.prototype.calculate=function(t){var n=t.a;return{q:!n}},A.prototype=Object.create(w.prototype),A.prototype.requiredInputs=["a","b"],A.prototype.calculate=function(t){var n=t.a,e=t.b;return{q:n&&e}},z.prototype=Object.create(w.prototype),z.prototype.requiredInputs=["a","b"],z.prototype.calculate=function(t){var n=t.a,e=t.b;return{q:!(n&&e)}},N.prototype=Object.create(w.prototype),N.prototype.requiredInputs=["a","b"],N.prototype.calculate=function(t){var n=t.a,e=t.b;return{q:n||e}},$.prototype=Object.create(w.prototype),$.prototype.requiredInputs=["a","b"],$.prototype.calculate=function(t){var n=t.a,e=t.b;return{q:!(n||e)}},T.prototype=Object.create(w.prototype),T.prototype.requiredInputs=["a","b"],T.prototype.calculate=function(t){var n=t.a,e=t.b;return{q:(n||e)&&!(n&&e)}};var I={name:"Static",props:{index:{type:Number,default:void 0},model:{type:Object,default:void 0},label:{type:String,default:""},outputs:{type:Object,default:void 0}},methods:{toggle:function(){this.model.value=!this.model.value}},extraData:{model:L,outputs:{q:{x:25,y:0}}}},E=I,B=(e("d6ab"),Object(h["a"])(E,S,M,!1,null,"7e30e164",null)),G=B.exports,K=function(t,n){var e=n._c;return e("g",{attrs:{transform:"translate(-25)"}},[e("path",{class:{on:n.props.inputs&&n.props.inputs.a},attrs:{d:"M 0 0 L 40 0"}}),e("rect",{class:{fillOn:n.props.inputs&&n.props.inputs.a},attrs:{x:"40",y:"-7",width:"14",height:"14"}}),e("text",{attrs:{x:"62",y:"0","font-size":"10","alignment-baseline":"middle","text-anchor":"start"}},[n._v(n._s(n.props.label))])])},k=[],X={extraData:{model:C,inputs:{a:{x:-25,y:0}}}},P=X,J=(e("bae3"),Object(h["a"])(P,K,k,!0,null,"4a24f27f",null)),H=J.exports,Y=function(t,n){var e=n._c;return e("g",{attrs:{transform:"translate(-25)"}},[e("path",{class:{on:n.props.inputs&&n.props.inputs.a},attrs:{d:"M 0 0 L 10 0"}}),e("path",{attrs:{d:"\n    M 10 -10\n    L 10 10\n    L 30 0\n    L 10 -10"}}),e("path",{class:{on:n.props.outputs&&n.props.outputs.q},attrs:{d:"M 40 0 L 50 0"}}),e("circle",{attrs:{r:"5",cx:"35",cy:"0"}})])},Q=[],R={extraData:{model:D,outputs:{q:{x:25,y:0}},inputs:{a:{x:-25,y:0}}}},U=R,W=Object(h["a"])(U,Y,Q,!0,null,null,null),V=W.exports,F=function(t,n){var e=n._c;return e("g",{attrs:{transform:"translate(-25)"}},[e("path",{class:{on:n.props.inputs&&n.props.inputs.a},attrs:{d:"M 0 -5 L 10 -5"}}),e("path",{class:{on:n.props.inputs&&n.props.inputs.b},attrs:{d:"M 0 5 L 10 5"}}),e("path",{attrs:{d:"\n    M 10 -10 L 10 10\n    C 40 10 40 -10 10 -10"}}),e("path",{class:{on:n.props.outputs&&n.props.outputs.q},attrs:{d:"M 32 0 L 50 0"}})])},Z=[],tt={extraData:{model:A,outputs:{q:{x:25,y:0}},inputs:{a:{x:-25,y:-5},b:{x:-25,y:5}}}},nt=tt,et=Object(h["a"])(nt,F,Z,!0,null,null,null),ot=et.exports,it=function(t,n){var e=n._c;return e("g",{attrs:{transform:"translate(-25)"}},[e("path",{class:{on:n.props.inputs&&n.props.inputs.a},attrs:{d:"M 0 -5 L 10 -5"}}),e("path",{class:{on:n.props.inputs&&n.props.inputs.b},attrs:{d:"M 0 5 L 10 5"}}),e("path",{attrs:{d:"\n    M 10 -10 L 10 10\n    C 40 10 40 -10 10 -10"}}),e("path",{class:{on:n.props.outputs&&n.props.outputs.q},attrs:{d:"M 39 0 L 50 0"}}),e("circle",{attrs:{r:"3",cx:"36",cy:"0"}})])},rt=[],at={extraData:{model:z,outputs:{q:{x:25,y:0}},inputs:{a:{x:-25,y:-5},b:{x:-25,y:5}}}},ct=at,ut=Object(h["a"])(ct,it,rt,!0,null,null,null),st=ut.exports,pt=function(t,n){var e=n._c;return e("g",{attrs:{transform:"translate(-25)"}},[e("path",{class:{on:n.props.inputs&&n.props.inputs.a},attrs:{d:"M 0 -5 L 10 -5"}}),e("path",{class:{on:n.props.inputs&&n.props.inputs.b},attrs:{d:"M 0 5 L 10 5"}}),e("path",{attrs:{d:"\n    M 7 -10\n    C 12 -10 12 10 7 10\n    C 40 10 40 -10 7 -10"}}),e("path",{class:{on:n.props.outputs&&n.props.outputs.q},attrs:{d:"M 32 0 L 50 0"}})])},dt=[],lt={extraData:{model:N,outputs:{q:{x:25,y:0}},inputs:{a:{x:-25,y:-5},b:{x:-25,y:5}}}},ft=lt,yt=Object(h["a"])(ft,pt,dt,!0,null,null,null),ht=yt.exports,bt=function(t,n){var e=n._c;return e("g",{attrs:{transform:"translate(-25)"}},[e("path",{class:{on:n.props.inputs&&n.props.inputs.a},attrs:{d:"M 0 -5 L 10 -5"}}),e("path",{class:{on:n.props.inputs&&n.props.inputs.b},attrs:{d:"M 0 5 L 10 5"}}),e("path",{attrs:{d:"\n    M 7 -10\n    C 12 -10 12 10 7 10\n    C 40 10 40 -10 7 -10"}}),e("path",{class:{on:n.props.outputs&&n.props.outputs.q},attrs:{d:"M 39 0 L 50 0"}}),e("circle",{attrs:{r:"3",cx:"36",cy:"0"}})])},xt=[],mt={extraData:{model:$,outputs:{q:{x:25,y:0}},inputs:{a:{x:-25,y:-5},b:{x:-25,y:5}}}},gt=mt,vt=Object(h["a"])(gt,bt,xt,!0,null,null,null),qt=vt.exports,Ot=function(t,n){var e=n._c;return e("g",{attrs:{transform:"translate(-25)"}},[e("path",{class:{on:n.props.inputs&&n.props.inputs.a},attrs:{d:"M 0 -5 L 8 -5"}}),e("path",{class:{on:n.props.inputs&&n.props.inputs.b},attrs:{d:"M 0 5 L 8 5"}}),e("path",{attrs:{d:"\n    M 5 -10\n    C 10 -10 10 10 5 10\n\n    M 10 -10\n    C 15 -10 15 10 10 10\n    C 40 10 40 -10 10 -10"}}),e("path",{class:{on:n.props.outputs&&n.props.outputs.q},attrs:{d:"M 32 0 L 50 0"}})])},_t=[],St={extraData:{model:T,outputs:{q:{x:25,y:0}},inputs:{a:{x:-25,y:-5},b:{x:-25,y:5}}}},Mt=St,jt=Object(h["a"])(Mt,Ot,_t,!0,null,null,null),wt=jt.exports,Lt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("g",{attrs:{transform:"translate("+t.x+" "+t.y+")"}},[t._t("default"),e("circle",{ref:"draggable",staticClass:"draggable",class:{disabled:t.disabled},style:{fill:t.color},attrs:{r:t.r,cx:0,cy:0}})],2)},Ct=[],Dt={props:{x:{type:Number,required:!0},y:{type:Number,required:!0},r:{type:Number,required:!0},zoom:{type:Number,default:1},color:{type:String,default:"gray"},disabled:{type:Boolean,default:!1}},data:function(){return{dragging:!1,prevX:void 0,prevY:void 0}},mounted:function(){this.$refs.draggable.addEventListener("mousedown",this.onMouseDown,!1),window.addEventListener("mousemove",this.onMouseMove,!1),window.addEventListener("mouseup",this.onMouseUp,!1)},methods:{onMouseDown:function(t){this.dragging=!0,this.prevX=t.clientX,this.prevY=t.clientY,this.$emit("dragstart")},onMouseMove:function(){if(this.dragging){var t=(event.clientX-this.prevX)/this.zoom,n=(event.clientY-this.prevY)/this.zoom;this.$emit("drag",{dx:t,dy:n}),this.prevX=event.clientX,this.prevY=event.clientY}},onMouseUp:function(){this.dragging&&(this.dragging=!1,this.$emit("dragend"))}}},At=Dt,zt=(e("45e8"),Object(h["a"])(At,Lt,Ct,!1,null,"1962fb98",null)),Nt=zt.exports,$t={components:{Static:G,Result:H,Not:V,And:ot,Nand:st,Or:ht,Nor:qt,Xor:wt,Draggable:Nt},props:{zoom:{type:Number,default:1}},data:function(){return{baseOffset:{x:40,y:40},gates:[{type:"static",offset:0},{type:"result",offset:50},{type:"not",offset:100},{type:"and",offset:150},{type:"nand",offset:200},{type:"or",offset:250},{type:"nor",offset:300},{type:"xor",offset:350}]}},methods:{dragstart:function(t,n){this.$emit("addGate",t,this.baseOffset.x,this.baseOffset.y+n)},drag:function(t){var n=t.dx,e=t.dy;this.$emit("dragAddedGate",{dx:n,dy:e})},dragend:function(){this.$emit("gateAdded")}}},Tt=$t,It=(e("1312"),Object(h["a"])(Tt,O,_,!1,null,"db6d114c",null)),Et=It.exports,Bt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("path",{class:{on:t.on},attrs:{d:t.path}})},Gt=[],Kt=(e("99af"),{props:{x1:{type:Number,required:!0},y1:{type:Number,required:!0},x2:{type:Number,required:!0},y2:{type:Number,required:!0},on:{type:Boolean,default:!1}},computed:{path:function(){return this.x2>this.x1?"\n          M ".concat(this.x1," ").concat(this.y1,"\n          l 0 ").concat(this.y2-this.y1,"\n          L ").concat(this.x2," ").concat(this.y2):"\n        M ".concat(this.x1," ").concat(this.y1,"\n        l 0 ").concat((this.y2-this.y1)/2,"\n        l ").concat(this.x2-this.x1," 0\n        L ").concat(this.x2," ").concat(this.y2)}}}),kt=Kt,Xt=(e("352f"),Object(h["a"])(kt,Bt,Gt,!1,null,"479c6a0a",null)),Pt=Xt.exports,Jt=function(t){switch(t){case"static":return G.extraData;case"result":return H.extraData;case"not":return V.extraData;case"and":return ot.extraData;case"nand":return st.extraData;case"or":return ht.extraData;case"nor":return qt.extraData;case"xor":return wt.extraData}},Ht=function(t,n){var e=Jt(t.type),o=e.inputs&&JSON.parse(JSON.stringify(e.inputs)),i=e.outputs&&JSON.parse(JSON.stringify(e.outputs));return Object(q["a"])(Object(q["a"])({},t),{},{index:n,inputs:o,outputs:i,model:new e.model(t.props)})},Yt=function(t,n){var e=t.map(Ht);return n.forEach((function(t){e[t.input.c].inputs[t.input.i].used=!0})),e},Qt={name:"App",components:{Sidebar:Et,Static:G,Result:H,Not:V,And:ot,Nand:st,Or:ht,Nor:qt,Xor:wt,Connection:Pt,Draggable:Nt},props:{board:{type:Object,required:!0},zoom:{type:Number,default:1}},data:function(){return{components:void 0,connections:void 0,connectionSource:void 0,addedGateIndex:void 0,addedGateOffsetX:void 0}},created:function(){this.initBoard()},watch:{board:function(){this.initBoard()}},computed:{connectionTarget:function(){if(this.connectionSource){var t=this.connectionSource.x+this.connectionSource.dx,n=this.connectionSource.y+this.connectionSource.dy,e=this.connectionSource.outbound,o=function(t,n){var e=t.x,o=t.y,i=n.x,r=n.y;return Math.sqrt(Math.pow(e-i,2)+Math.pow(o-r,2))},i=this.components.filter((function(t){return e?t.inputs:t.outputs})).flatMap((function(t){return Object.entries(e?t.inputs:t.outputs).map((function(n){var e=Object(v["a"])(n,2),o=e[0],i=e[1];return{component:t,ioKey:o,io:i}}))})).filter((function(t){t.component,t.ioKey;var n=t.io;return!e||!n.used})).filter((function(e){var i=e.component,r=(e.ioKey,e.io);return o({x:t,y:n},{x:i.x+r.x,y:i.y+r.y})<10})).map((function(t){var n=t.component,e=t.ioKey;return{index:n.index,ioKey:e}}))[0];return console.log(i),i}}},methods:{initBoard:function(){var t=this;this.components=Yt(this.board.components,this.board.connections),this.connections=this.board.connections,this.board.connections.forEach((function(n){t.components[n.input.c].model.connect(n.input.i,t.components[n.output.c].model,n.output.o)}))},addGate:function(t,n,e){var o=this.components.length,i=Ht({type:t,x:n,y:e},o);this.components.push(i),this.addedGateIndex=o,this.addedGateOffsetX=0},dragAddedGate:function(t){var n=t.dx,e=t.dy,o=this.components[this.addedGateIndex];o.x+=n,o.y+=e,this.addedGateOffsetX+=n},gateAdded:function(){var t=this.components[this.addedGateIndex],n=this.addedGateOffsetX;if(this.addedGateIndex=void 0,this.addedGateOffsetX=void 0,n/this.zoom<50)this.components.splice(t.index,1);else if(["static","result"].includes(t.type)){var e=prompt("Label (optional):");t.label=e}},drag:function(t,n){var e=n.dx,o=n.dy,i=this.components[t];i.x+=e,i.y+=o},startConnection:function(t,n,e){var o=this.components[t],i=e?o.outputs[n]:o.inputs[n];this.connectionSource={index:t,ioKey:n,outbound:e,x:o.x+i.x,y:o.y+i.y,dx:0,dy:0}},drawConnection:function(t){var n=t.dx,e=t.dy;this.connectionSource.dx+=n,this.connectionSource.dy+=e,this.connectionTarget&&console.log("target found:",this.connectionTarget.index,this.connectionTarget.ioKey)},endConnection:function(){if(this.connectionTarget){console.log("target found:",this.connectionSource.index,this.connectionSource.ioKey,"->",this.connectionTarget.index,this.connectionTarget.ioKey);var t=this.connectionSource.outbound?this.connectionSource:this.connectionTarget,n=this.connectionSource.outbound?this.connectionTarget:this.connectionSource,e=this.components[n.index],o=this.components[t.index];e.model.connect(n.ioKey,o.model,t.ioKey),e.inputs[n.ioKey].used=!0,this.connections.push({output:{c:t.index,o:t.ioKey},input:{c:n.index,i:n.ioKey}})}else console.log("no target found");this.connectionSource=void 0},removeInput:function(t,n){var e=this.connections.findIndex((function(e){return e.input.c==t&&e.input.i==n})),o=this.connections[e],i=this.components[o.input.c],r=this.components[o.output.c];i.model.disconnect(o.input.i,r.model),this.connections.splice(e,1),i.inputs[o.input.i].used=!1}}},Rt=Qt,Ut=(e("f8fc"),e("cf43"),Object(h["a"])(Rt,m,g,!1,null,"461c3e8f",null)),Wt=Ut.exports,Vt=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},Ft=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"about"},[e("h1",[t._v("Logic gates")]),e("p",[t._v("Interactive logic gate simulator build with Vue")]),e("h3",[t._v("Source code")]),e("a",{attrs:{href:"https://github.com/HunorMarton/logic-gate",target:"_blank"}},[t._v("https://github.com/HunorMarton/logic-gate")]),e("h3",[t._v("Made by")]),e("div",[t._v("Hunor Márton Borbély")]),e("div",[t._v("2020")]),e("a",{attrs:{href:"https://twitter.com/HunorBorbely",target:"_blank"}},[t._v("Twitter")]),e("a",{attrs:{href:"https://hunormarton.github.io/",target:"_blank"}},[t._v("Website")])])}],Zt=(e("d9c3"),{}),tn=Object(h["a"])(Zt,Vt,Ft,!1,null,"faf7ceaa",null),nn=tn.exports,en={name:"App",components:{Header:x,Board:Wt,About:nn},data:function(){return{width:1e3,height:1e3,zoom:1.2,board:void 0,about:!1}},mounted:function(){this.width=this.$refs.main.clientWidth,this.height=this.$refs.main.clientHeight},methods:{select:function(t){this.board=t,this.about=!1},goToAboutPage:function(){this.about=!0}}},on=en,rn=(e("5c0b"),Object(h["a"])(on,i,r,!1,null,null,null)),an=rn.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(an)}}).$mount("#app")},"5c0b":function(t,n,e){"use strict";var o=e("9c0c"),i=e.n(o);i.a},"9c0c":function(t,n,e){},a68f:function(t,n,e){},ad4c:function(t,n,e){},afd4:function(t,n,e){},bae3:function(t,n,e){"use strict";var o=e("f30c"),i=e.n(o);i.a},c2da:function(t,n,e){"use strict";var o=e("ad4c"),i=e.n(o);i.a},cf43:function(t,n,e){"use strict";var o=e("47d9"),i=e.n(o);i.a},d6ab:function(t,n,e){"use strict";var o=e("f404"),i=e.n(o);i.a},d9c3:function(t,n,e){"use strict";var o=e("afd4"),i=e.n(o);i.a},f30c:function(t,n,e){},f404:function(t,n,e){},f772b:function(t,n,e){},f8fc:function(t,n,e){"use strict";var o=e("f772b"),i=e.n(o);i.a}});
//# sourceMappingURL=app.b7acad9f.js.map