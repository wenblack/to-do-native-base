(()=>{"use strict";var e={58:(e,t,r)=>{r.r(t);var n=r(5813),o=r(885),l=r(9526),a=r(3244),i=r(5711),d=r(8719),s=r(6128),c=r(6854),u=r(4389),f=r(7754),g=r(7849),m=r(8246),h=r(2535),x=r(2986),p=r(5151),j=r(13),y=r(9476),b=r(3879),C=r(3161),w=r(2530),_=r(7557);function k(){var e=(0,s.useColorMode)(),t=e.colorMode,r=e.toggleColorMode;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(j.Button,{bg:"transparent",onPress:r,style:{backgroundColor:"transparent"},variant:"outline",_light:{_focus:{borderColor:"green.500"}},children:(0,_.jsxs)(g.default,{space:2,alignItems:"center",justifyContent:"center",children:[(0,_.jsx)(w.default,{color:"light"===t?"rgb(75, 85, 99)":"white",name:"sun",size:25}),(0,_.jsx)(b.default,{isChecked:"dark"===t,onToggle:r,colorScheme:"blueGray","aria-label":"light"===t?"switch to dark mode":"switch to light mode"}),(0,_.jsx)(w.default,{color:"light"===t?"#4338CA":"#6066E5",name:"moon",size:25})]})}),(0,_.jsx)(C.StatusBar,{barStyle:"dark"===t?"light-content":"dark-content"})]})}var I=r(7118),v=r(2982),S=r(8873),T=r(6576),z=r(6650),M=r(8523),O=r(3317),G=r(4942),B=r(7068),F=r(8385);function D(e){var t=e.iconName,r=e.title,n=e.color,o=e.textColor,l=e.font;return(0,_.jsxs)(g.default,{flex:1,space:4,alignItems:"center",textAlign:"justify",justifyContent:"space-between",paddingBottom:2,children:[(0,_.jsx)(w.default,{name:t,size:25,color:n}),(0,_.jsx)(h.default,{color:o,w:40,fontFamily:l,children:r})]})}function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,G.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function N(e){var t=e.editNameFunction,r=e.editListFunction,n=e.logOutFunction,a=(0,l.useState)(!1),i=(0,o.default)(a,1)[0],c=(0,s.useColorMode)(),u=c.colorMode,f=c.toggleColorMode;return(0,l.useEffect)((function(){}),[u]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(d.default,{space:6,children:(0,_.jsxs)(B.Menu,{w:"200",rounded:"lg",marginTop:4,shouldOverlapWithTrigger:i,placement:"bottom right",backgroundColor:"warmGray.50",_dark:{backgroundColor:"blueGray.600"},trigger:function(e){return(0,_.jsx)(j.Button,P(P({alignSelf:"center",variant:"unstyled"},e),{},{children:(0,_.jsx)(F.default,{name:"menu",size:25,color:"white"})}))},children:[(0,_.jsx)(B.Menu.Item,{onPress:f,children:(0,_.jsx)(D,{iconName:"dark"===u?"sun":"moon",title:"Change  theme",color:"dark"===u?"white":"#166534",textColor:"dark"===u?"white":"#166534",borderSize:1,font:"Inter_500Medium"})}),(0,_.jsx)(B.Menu.Item,{onPress:t,children:(0,_.jsx)(D,{iconName:"user",title:"Edit your Name",color:"dark"===u?"white":"#166534",textColor:"dark"===u?"white":"#166534",borderSize:1,font:"Inter_500Medium"})}),(0,_.jsx)(B.Menu.Item,{onPress:r,children:(0,_.jsx)(D,{borderSize:1,iconName:"edit",title:"Rename List",color:"dark"===u?"white":"#166534",textColor:"dark"===u?"white":"#166534",font:"Inter_500Medium"})}),(0,_.jsx)(B.Menu.Item,{onPress:n,children:(0,_.jsx)(D,{borderSize:0,iconName:"power",title:"Log Out",font:"Inter_500Medium",color:"dark"===u?"white":"#166534",textColor:"dark"===u?"white":"#166534"})})]})}),(0,_.jsx)(C.StatusBar,{barStyle:"dark"===u?"light-content":"dark-content"})]})}var A=r(7951),W=r(538);function L(e){var t=e.total,r=e.completed,n=(e.type,(0,s.useColorMode)());n.colorMode,n.toggleColorMode;return t===r?(0,_.jsx)(f.default,{children:(0,_.jsx)(d.default,{maxW:"800",w:"full",children:(0,_.jsx)(A.Alert,{w:"100%",status:"warning",_dark:{bg:"blueGray.900"},_light:{bg:"blueGray.50"},fontFamily:"Inter_800ExtraBold",children:(0,_.jsxs)(d.default,{space:1,flexShrink:1,w:"100%",alignItems:"center",children:[(0,_.jsx)(f.default,{w:"100%",mt:4,mb:2,children:(0,_.jsx)(S.default,{w:"100%",maxW:"400",children:(0,_.jsx)(d.default,{space:"md",children:(0,_.jsx)(d.default,{space:"md",children:(0,_.jsx)(W.default,{max:t,colorScheme:"green",size:"md",mx:4,value:r})})})})}),(0,_.jsx)(S.default,{flexDirection:"row",_text:{textAlign:"center"},children:(0,_.jsxs)(h.default,{fontSize:"lg",fontFamily:"Inter_700Bold",_dark:{color:"green.500"},_light:{color:"green.500"},children:["Complete ",r,"/",t," tasks"]})})]})})})}):.5*t>=r?(0,_.jsx)(f.default,{children:(0,_.jsx)(d.default,{maxW:"800",w:"full",children:(0,_.jsx)(A.Alert,{w:"100%",status:"error",_dark:{bg:"blueGray.900"},_light:{bg:"blueGray.50"},fontFamily:"Inter_800ExtraBold",children:(0,_.jsxs)(d.default,{space:1,flexShrink:1,w:"100%",alignItems:"center",children:[(0,_.jsx)(f.default,{w:"100%",mt:4,mb:2,children:(0,_.jsx)(S.default,{w:"100%",maxW:"400",children:(0,_.jsx)(d.default,{space:"md",children:(0,_.jsx)(d.default,{space:"md",children:(0,_.jsx)(W.default,{max:t,colorScheme:"red",size:"md",mx:4,value:r})})})})}),(0,_.jsx)(S.default,{flexDirection:"row",_text:{textAlign:"center"},children:(0,_.jsxs)(h.default,{fontSize:"lg",fontFamily:"Inter_700Bold",_dark:{color:"red.500"},_light:{color:"red.500"},children:["Complete ",r,"/",t," tasks"]})})]})})})}):(0,_.jsx)(f.default,{children:(0,_.jsx)(d.default,{maxW:"800",w:"full",children:(0,_.jsx)(A.Alert,{w:"100%",status:"warning",_dark:{bg:"blueGray.900"},_light:{bg:"blueGray.50"},fontFamily:"Inter_800ExtraBold",children:(0,_.jsxs)(d.default,{space:1,flexShrink:1,w:"100%",alignItems:"center",children:[(0,_.jsx)(f.default,{w:"100%",mt:4,mb:2,children:(0,_.jsx)(S.default,{w:"100%",maxW:"400",children:(0,_.jsx)(d.default,{space:"md",children:(0,_.jsx)(d.default,{space:"md",children:(0,_.jsx)(W.default,{max:t,colorScheme:"yellow",size:"md",mx:4,value:r})})})})}),(0,_.jsx)(S.default,{flexDirection:"row",_text:{textAlign:"center"},children:(0,_.jsxs)(h.default,{fontSize:"lg",fontFamily:"Inter_700Bold",_dark:{color:"yellow.500"},_light:{color:"yellow.500"},children:["Complete ",r,"/",t," tasks"]})})]})})})})}function H(e){e.onClick;var t=e.listName,r=(e.userName,e.editListFunction,e.editNameFunction,e.logOutFunction),n=Array,a=l.useState(n),i=(0,o.default)(a,2),x=i[0],j=i[1],b=l.useState(""),C=(0,o.default)(b,2),k=C[0],G=C[1],B=(0,s.useColorMode)(),F=B.colorMode,D=(B.toggleColorMode,(0,l.useState)(0)),E=(0,o.default)(D,2),P=E[0],A=E[1],W=(0,l.useState)(0),H=(0,o.default)(W,2),R=H[0],K=H[1],V=(0,l.useState)("error"),Y=(0,o.default)(V,2);Y[0],Y[1];function q(){K(R-1)}(0,l.useEffect)((function(){}),[P,R]);var U=function(e){return""===e?(setTimeout((function(){c.Toast.closeAll()}),1e3),c.Toast.show({placement:"top",_dark:{style:{display:"flex",flexDirection:"column",paddingHorizontal:20,padding:20,alignItems:"center",justifyContent:"center",alignContent:"center",backgroundColor:"#6066E5"}},description:"Please fill the field",style:{display:"flex",flexDirection:"column",paddingHorizontal:20,padding:20,alignItems:"center",justifyContent:"center",alignContent:"center",backgroundColor:"#0E7490",marginTop:15}})):9===x.length?(setTimeout((function(){c.Toast.closeAll()}),2e3),c.Toast.show({placement:"top",_dark:{style:{display:"flex",flexDirection:"column",paddingHorizontal:20,padding:20,alignItems:"center",justifyContent:"center",alignContent:"center",backgroundColor:"#6066E5"}},title:"Please remove tasks",description:"You already have many tasks",style:{display:"flex",flexDirection:"column",paddingHorizontal:20,padding:20,alignItems:"center",justifyContent:"center",alignContent:"center",backgroundColor:"#0E7490",marginTop:15}})):(j((function(t){return[].concat((0,v.default)(t),[{title:e,isCompleted:!1}])})),void A(P+1))},J=function(e){j((function(t){return t.filter((function(t,r){return r!==e}))})),P===R?(A(P-1),console.log(P),q()):(A(P-1),console.log(P))},Q=function(e){j((function(t){var r=(0,v.default)(t);return r[e].isCompleted=!r[e].isCompleted,r[e].isCompleted?P!==R&&K(R+1):r[e].isCompleted||q(),r}))};return(0,_.jsxs)(u.KeyboardAvoidingView,{h:"100%",w:"100%",height:"full",width:"full",display:"flex",flex:1,alignItems:"center",_web:{marginTop:"24"},_dark:{bg:"blueGray.900"},_light:{bg:"blueGray.50"},children:[(0,_.jsx)(g.default,{width:"full",w:"100%",alignItems:"center",flexDirection:"row",justifyContent:"center",display:"flex",position:"fixed",space:2,top:0,p:4,background:"green.700",_dark:{bg:"blueGray.700"},zIndex:"1",children:(0,_.jsxs)(f.default,{width:"100%",maxW:"800",flexDirection:"row",justifyContent:"space-between",children:[(0,_.jsxs)(g.default,{space:2,children:[(0,_.jsx)(h.default,{color:"light"===F?"white":"#22d3ee",fontWeight:"bold",fontSize:"lg",fontFamily:"Inter_800ExtraBold",children:"TO-DO"}),(0,_.jsx)(I.default,{size:25,name:"checksquare",color:"light"===F?"white":"#22d3ee"})]}),(0,_.jsx)(N,{editNameFunction:r,logOutFunction:r,editListFunction:r})]})}),(0,_.jsx)(d.default,{safeArea:!0,space:4,display:"flex",_dark:{bg:"blueGray.900"},_light:{bg:"blueGray.50"},children:(0,_.jsx)(f.default,{_dark:{bg:"blueGray.900"},_light:{bg:"blueGray.50"},children:(0,_.jsxs)(S.default,{w:"80",pb:"2",children:[(0,_.jsx)(m.default,{size:"md",mt:4,textTransform:"uppercase",fontWeight:"800",fontFamily:"Inter_800ExtraBold",color:"green.800",marginBottom:"2",_dark:{color:"blueGray.50"},children:t}),(0,_.jsxs)(g.default,{space:2,marginBottom:4,alignItems:"center",children:[(0,_.jsx)(p.Input,{flex:1,onChangeText:function(e){return G(e)},value:k,fontSize:"md",placeholder:"Add Task",onSubmitEditing:function(){U(k),G("")},_light:{_focus:{borderColor:"green.500",shadow:"0",borderWidth:"1"}},_dark:{borderColor:"warmGray.300",placeholderTextColor:"#737373",color:"white"}}),(0,_.jsx)(T.default,{borderRadius:"sm",variant:"solid",background:"green.700",_dark:{bg:"blueGray.600"},icon:(0,_.jsx)(z.default,{as:w.default,name:"plus",size:"sm",color:"warmGray.50"}),onPress:function(){U(k),G("")}})]}),(0,_.jsx)(d.default,{alignItems:"center",height:"full",_dark:{bg:"blueGray.900"},_light:{bg:"blueGray.50"},children:x.map((function(e,t){return(0,_.jsxs)(g.default,{w:"100%",justifyContent:"space-between",alignItems:"center",borderColor:e.isCompleted?"green.500":"red.500",_light:{bg:e.isCompleted?"green.100":"red.100"},rounded:"lg",_dark:{bg:"transparent",borderColor:e.isCompleted?"primary.400":"warmGray.300"},borderWidth:"2",px:"2",py:2,marginBottom:1,children:[(0,_.jsx)(M.Checkbox,{isChecked:e.isCompleted,_dark:{borderColor:e.isCompleted?"red.400":"warmGray.300",backgroundColor:e.isCompleted?"primary.400":"transparent"},borderColor:e.isCompleted?"green.500":"red.500",_light:{background:e.isCompleted?"green.500":"transparent"},onChange:function(){return Q(t)},value:e.title,ml:2}),(0,_.jsx)(h.default,{width:"100%",flexShrink:1,textAlign:"left",textTransform:"lowercase",mx:"2",fontWeight:"700",fontSize:"md",strikeThrough:e.isCompleted,_light:{color:e.isCompleted?"green.500":"red.500"},_dark:{color:e.isCompleted?"primary.400":"warmGray.300"},onPress:function(){return Q(t)},children:e.title}),(0,_.jsx)(T.default,{size:"sm",colorScheme:"trueGray",icon:(0,_.jsx)(z.default,{as:O.default,name:"trash",size:"md",_dark:{color:e.isCompleted?"primary.400":"warmGray.300"},color:e.isCompleted?"green.500":"red.500",onPress:function(){return J(t)}}),onPressIn:function(){return J(t)}})]},e.title+t.toString())}))})]})})}),(0,_.jsxs)(d.default,{position:"fixed",bottom:0,zIndex:1,w:"full",bg:"warmGray.50",_dark:{bg:"blueGray.900"},children:[(0,_.jsx)(y.default,{}),(0,_.jsx)(L,{completed:R,total:P,type:"error"})]})]})}var R=r(2507),K=r(9221);function V(){var e=(0,l.useState)(!0),t=(0,o.default)(e,2),r=t[0],n=t[1];function a(){n(!1)}return setTimeout((function(){a()}),1e3),(0,_.jsx)(R.Modal,{isOpen:r,onClose:a,_backdrop:{_dark:{bg:"coolGray.800"},bg:"warmGray.50"},shadow:"2",overlayVisible:!1,backgroundColor:"gray.100",_dark:{backgroundColor:"#0f172a"},children:(0,_.jsx)(R.Modal.Content,{children:(0,_.jsx)(R.Modal.Body,{marginBottom:5,children:(0,_.jsxs)(f.default,{children:[(0,_.jsx)(h.default,{children:"Loading..."}),(0,_.jsx)(K.default,{marginTop:2,size:"sm"})]})})})})}var Y=r(7132),q=r(4887);function U(e){var t=e.font,r=(0,s.useColorMode)(),n=r.colorMode;r.toggleColorMode;return(0,_.jsxs)(f.default,{children:[(0,_.jsx)(h.default,{marginTop:1,_dark:{color:"#d4d4d4"},color:"muted.600",fontFamily:t,fontSize:"md",children:"Made with \ud83d\udc97 by Wender"}),(0,_.jsxs)(g.default,{space:4,marginTop:2,children:[(0,_.jsx)(T.default,{background:"transparent",icon:(0,_.jsx)(q.default,{name:"linkedin",size:30,color:"light"===n?"#737373":"#d4d4d4"})}),(0,_.jsx)(T.default,{background:"transparent",icon:(0,_.jsx)(q.default,{name:"github",size:30,color:"light"===n?"#737373":"#d4d4d4"})}),(0,_.jsx)(T.default,{background:"transparent",icon:(0,_.jsx)(q.default,{name:"react",size:30,color:"light"===n?"#737373":"#d4d4d4"})})]})]})}function J(e){var t=e.font,r=e.fontTitle,n=(0,s.useColorMode)().colorMode,a=(0,l.useState)(""),i=(0,o.default)(a,2),b=i[0],C=i[1],w=(0,l.useState)(""),v=(0,o.default)(w,2),S=v[0],T=v[1],z=(0,l.useState)(!1),M=(0,o.default)(z,2),O=M[0],G=M[1];function B(){return G(!1),T(""),T(""),setTimeout((function(){c.Toast.closeAll()}),1e3),c.Toast.show({placement:"top",_dark:{style:{display:"flex",flexDirection:"column",paddingHorizontal:20,padding:20,alignItems:"center",justifyContent:"center",alignContent:"center",backgroundColor:"#6066E5"}},description:"User disconnected!",style:{display:"flex",flexDirection:"column",paddingHorizontal:20,padding:20,alignItems:"center",justifyContent:"center",alignContent:"center",backgroundColor:"#0E7490",marginTop:15}})}return(0,l.useEffect)((function(){}),[O]),O?(0,_.jsx)(H,{onClick:B,listName:S,userName:b,logOutFunction:B,editListFunction:B,editNameFunction:B}):(0,_.jsx)(u.KeyboardAvoidingView,{behavior:"ios"===Y.default.OS?"padding":"height",w:"80",h:"100%",children:(0,_.jsxs)(f.default,{height:"100%",children:[(0,_.jsx)(g.default,{w:"lg",maxWidth:"full",mr:5,mt:5,alignItems:"center",flexDirection:"row",justifyContent:"flex-end",position:"fixed",top:0,children:(0,_.jsx)(k,{})}),(0,_.jsxs)(g.default,{w:80,space:3,justifyContent:"flex-start",alignItems:"center",children:[(0,_.jsx)(I.default,{size:40,name:"checksquare",color:"light"===n?"#15803D":"#4f46e5"}),(0,_.jsxs)(m.default,{size:"2xl",fontWeight:"700",color:"coolGray.800",_dark:{color:"warmGray.50"},fontFamily:r,children:[(0,_.jsx)(h.default,{textDecorationLine:"line-through",_light:{color:"green.700"},fontFamily:r,children:"TO"}),(0,_.jsxs)(h.default,{textDecorationLine:"line-through",_light:{color:"green.700"},fontFamily:r,children:[" ","DO"]})]})]}),(0,_.jsxs)(d.default,{space:3,mt:"4",width:"full",children:[(0,_.jsxs)(x.FormControl,{mt:5,children:[(0,_.jsx)(x.FormControl.Label,{_text:{color:"green.800"},_dark:{_text:{color:"warmGray.200"}},display:"none",fontFamily:t,children:"List Name:"}),(0,_.jsx)(p.Input,{fontFamily:t,fontSize:"md",placeholder:"Your List Name",value:S,onChangeText:T,returnKeyType:"next",autoComplete:"password",_light:{_focus:{borderColor:"green.500",borderWidth:"1"}},_dark:{borderColor:"warmGray.300",placeholderTextColor:"#737373",color:"white"}})]}),(0,_.jsxs)(x.FormControl,{children:[(0,_.jsx)(x.FormControl.Label,{fontFamily:t,_text:{color:"green.800"},_dark:{_text:{color:"warmGray.200"}},display:"none",children:"Your Name:"}),(0,_.jsx)(p.Input,{fontFamily:t,fontSize:"md",placeholder:"Your Name",autoComplete:"name",returnKeyType:"done",value:b,onChangeText:C,_light:{_focus:{borderColor:"green.500",borderWidth:"1"}},_dark:{borderColor:"warmGray.300",placeholderTextColor:"#737373",color:"white"}})]}),(0,_.jsx)(j.Button,{fontFamily:r,mt:"4",mb:"16",colorScheme:"green",_dark:{bg:"indigo.600"},shadow:"2",onPress:function(){return""===S?(setTimeout((function(){c.Toast.closeAll()}),1e3),c.Toast.show({placement:"top",title:"Something went wrong",_dark:{style:{display:"flex",flexDirection:"column",paddingHorizontal:20,height:80,alignItems:"center",justifyContent:"center",alignContent:"center",backgroundColor:"#6066E5"}},description:"Did you fill in both fields?",style:{display:"flex",flexDirection:"column",paddingHorizontal:20,height:80,alignItems:"center",justifyContent:"center",alignContent:"center",backgroundColor:"rgb(75, 85, 99)",marginTop:15}})):""===b?(setTimeout((function(){c.Toast.closeAll()}),1e3),c.Toast.show({placement:"top",title:"Something went wrong",description:"Did you fill in both fields?",_dark:{style:{display:"flex",flexDirection:"column",paddingHorizontal:20,height:80,alignItems:"center",justifyContent:"center",alignContent:"center",backgroundColor:"#6066E5"}},style:{display:"flex",flexDirection:"column",paddingHorizontal:20,height:80,alignItems:"center",justifyContent:"center",alignContent:"center",backgroundColor:"rgb(75, 85, 99)"}})):(G(!0),void c.Toast.show({placement:"top",render:function(){return(0,_.jsx)(V,{})}}))},children:(0,_.jsx)(g.default,{alignItems:"center",justifyContent:"space-between",space:5,children:(0,_.jsx)(h.default,{fontSize:"lg",color:"white",fontWeight:"bold",fontFamily:r,children:"Save"})})})]}),(0,_.jsx)(y.default,{}),(0,_.jsx)(U,{font:t})]})})}var Q=r(7534);function X(e){var t=e.fontTitle;return(0,_.jsx)(R.Modal,{isOpen:!0,_backdrop:{_dark:{bg:"coolGray.800"},bg:"warmGray.50"},shadow:"2",overlayVisible:!1,backgroundColor:"gray.100",_dark:{backgroundColor:"#0f172a"},children:(0,_.jsx)(R.Modal.Content,{children:(0,_.jsx)(R.Modal.Body,{marginBottom:5,children:(0,_.jsx)(f.default,{children:(0,_.jsxs)(d.default,{space:2,alignItems:"center",justifyContent:"center",children:[(0,_.jsx)(h.default,{fontFamily:t,children:"Loading..."}),(0,_.jsx)(K.default,{marginTop:2,size:"sm"})]})})})})})}var Z=(0,a.extendTheme)({config:{useSystemColorMode:!0,initialColorMode:"auto"},fontConfig:{Inter:{400:{normal:"Inter_400Regular"},500:{normal:"Inter_500Medium"},700:{normal:"Inter_700Bold"},800:{normal:"Inter_800ExtraBold"},900:{normal:"Inter_900Black"},Inter_900Black:"Inter_900Black",Inter_400Regular:"Inter_400Regular",Inter_700Bold:"Inter_700Bold",Inter_800ExtraBold:"Inter_800ExtraBold",Inter_500Medium:"Inter_500Medium"}},fonts:{heading:"Inter",body:"Inter",mono:"Inter"}});(0,n.default)((function(){var e=(0,Q.useFonts)({Inter_900Black:Q.Inter_900Black,Inter_400Regular:Q.Inter_400Regular,Inter_700Bold:Q.Inter_700Bold,Inter_800ExtraBold:Q.Inter_800ExtraBold,Inter_500Medium:Q.Inter_500Medium});return(0,o.default)(e,1)[0]?(0,_.jsx)(i.NativeBaseProvider,{theme:Z,children:(0,_.jsx)(d.default,{_dark:{bg:"blueGray.900"},_light:{bg:"blueGray.50"},flex:1,width:"100%",height:"100%",alignItems:"center",children:(0,_.jsx)(J,{font:"Inter_500Medium",fontTitle:"Inter_700Bold"})})}):(0,_.jsx)(i.NativeBaseProvider,{theme:Z,children:(0,_.jsx)(X,{fontTitle:"Inter_700Bold"})})}))}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var l=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(l.exports,l,l.exports,r),l.loaded=!0,l.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,l)=>{if(!n){var a=1/0;for(c=0;c<e.length;c++){for(var[n,o,l]=e[c],i=!0,d=0;d<n.length;d++)(!1&l||a>=l)&&Object.keys(r.O).every((e=>r.O[e](n[d])))?n.splice(d--,1):(i=!1,l<a&&(a=l));if(i){e.splice(c--,1);var s=o();void 0!==s&&(t=s)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[n,o,l]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.p="/to-do-native-base/",(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,l,[a,i,d]=n,s=0;if(a.some((t=>0!==e[t]))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(d)var c=d(r)}for(t&&t(n);s<a.length;s++)l=a[s],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(c)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[230],(()=>r(58)));n=r.O(n)})();
//# sourceMappingURL=main.056db301.js.map