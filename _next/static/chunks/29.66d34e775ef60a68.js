"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[29],{85565:function(e,r,n){n.d(r,{dy:function(){return z},DQ:function(){return w}});n(99021);var t=n(52322),o=n(73023),a=n(68683),i=n(45482),u=n(54503),c=n(82735),l=n(63035),s=n(92682),d=n(56695),f=n(23917),p=n(2784);function b(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function h(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function m(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){h(e,r,n[r])}))}return e}function g(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function y(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,o,a=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(t=n.next()).done)&&(a.push(t.value),!r||a.length!==r);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return b(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var _=Object.defineProperty,v=function(e,r){return _(e,"name",{value:r,configurable:!0})},w=o.rJ,k="Drawer",j=(0,i.z)(d.sL,{name:"DrawerHandle",height:8,borderRadius:100,backgroundColor:"$backgroundHover",position:"absolute",pointerEvents:"auto",zIndex:10,y:-20,top:0,left:"30%",right:"30%",opacity:.5,hoverStyle:{opacity:.7}}),x=y((0,s.b)(k),2),O=x[0],L=(x[1],y(O(k,{}),2)),R=L[0],C=(L[1],(0,i.z)(d.FA,{name:"DrawerBackdrop",backgroundColor:"$color",fullscreen:!0,opacity:.2})),S=(0,i.z)(d.FA,{name:"DrawerFrame",flex:1,backgroundColor:"$background",borderTopLeftRadius:"$4",borderTopRightRadius:"$4",padding:"$4"}),$=v((function(){var e=(0,p.useState)(!!u.$L&&u.yF),r=e[0],n=e[1];return(0,p.useEffect)((function(){u.$L&&!u.yF&&n(!1)}),[]),r}),"useIsSSR"),z=(0,c.$)((0,l.Y)((0,p.forwardRef)((function(e,r){var n=e.__scopeDrawer,i=e.children,c=e.open,l=e.defaultOpen,s=e.onChangeOpen,d=g(e,["__scopeDrawer","children","open","defaultOpen","onChangeOpen"]),b=$(),h=y((0,f.T)({prop:c,defaultProp:l||!1,onChange:s,strategy:"most-recent-wins"}),2),_=h[0],v=h[1],w=(0,p.useRef)(null);if((0,u.LI)((function(){var e;if(!_){var r=setTimeout((function(){var e;null==(e=w.current)||e.dismiss()}));return function(){clearTimeout(r)}}null==(e=w.current)||e.present()}),[_]),b)return null;var k=null,j=null,x=null;return p.Children.forEach(i,(function(e){var r;if((0,p.isValidElement)(e))switch(null==(r=e.type)?void 0:r.staticConfig.componentName){case"DrawerHandle":k=e;break;case"DrawerFrame":x=e;break;case"DrawerBackdrop":j=e;break;default:console.warn("Warning: passed invalid child to Drawer",e)}})),(0,t.jsx)(R,{scope:n,open:_,onChangeOpen:v,children:(0,t.jsx)(o.WN,m({handleComponent:function(){return k},backdropComponent:function(){return j},snapPoints:["80%"],ref:(0,a.F)(r,w),onChange:function(e){v(e>=0)},backgroundStyle:{backgroundColor:"transparent"}},d,{children:x}))})})),{componentName:"Drawer"}),{Provider:w,Handle:j,Frame:S,Backdrop:C,ScrollView:o.vM,get FlatList(){return o.dm},get VirtualizedList(){return o.Hs},get SectionList(){return o.jP}})},88029:function(e,r,n){n.r(r),n.d(r,{default:function(){return l}});var t=n(52322),o=n(85565),a=n(12070),i=n(46642),u=n(2784),c=n(42571);function l(){var e=(0,u.useState)(!1),r=e[0],n=e[1];return(0,t.jsx)("div",{className:" _pos-1ypdr05 _jc-3mx9pa _h-omohrv _w-1y5rwnu _miw-1it7o03 _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-1elmj36 _ai-17do05s ",children:(0,t.jsxs)(o.dy.Provider,{children:[(0,t.jsx)(c.z,{tag:"button",size:"$6",icon:r?a._:i.K,circular:!0,width:"_w-1y5umnj",height:"_h-omr7rk",maxWidth:"_maw-1amgjsb",maxHeight:"_mah-58rams",minWidth:"_miw-1igx5a5",minHeight:"_mih-zdpn2a",borderTopLeftRadius:"_btlr-1ffllu1",borderTopRightRadius:"_btrr-s1eb1o",borderBottomRightRadius:"_bbrr-1dnaj0e",borderBottomLeftRadius:"_bblr-avx2d3",paddingTop:"_pt-bv6eyc",paddingBottom:"_pb-15pd5p8",paddingRight:"_pr-va8vyl",paddingLeft:"_pl-wh8dj4",onPress:function(){return n((function(e){return!e}))},elevation:"$2",boxShadow:"_boxsha-jy1s0w"}),(0,t.jsx)(o.dy,{open:r,onChangeOpen:n,children:(0,t.jsxs)(o.dy.Frame,{h:200,ai:"center",jc:"center",p:"$6",space:!0,children:[(0,t.jsx)("p",{className:" _lh-1x7rt8o _fos-1y4ya70 _letsp-1y1dvx7 _fow-1lznk30 _col-f1vuru _ussel-1k4vh3z _cur-1gpc3n _ww-fl0oek _boxs-1pkamc3 _fofam-41wzum _disp-1ffesbf ",children:"Hello."}),(0,t.jsx)(c.z,{tag:"button",size:"$6",icon:r?a._:i.K,circular:!0,width:"_w-1y5umnj",height:"_h-omr7rk",maxWidth:"_maw-1amgjsb",maxHeight:"_mah-58rams",minWidth:"_miw-1igx5a5",minHeight:"_mih-zdpn2a",borderTopLeftRadius:"_btlr-1ffllu1",borderTopRightRadius:"_btrr-s1eb1o",borderBottomRightRadius:"_bbrr-1dnaj0e",borderBottomLeftRadius:"_bblr-avx2d3",paddingTop:"_pt-bv6eyc",paddingBottom:"_pb-15pd5p8",paddingRight:"_pr-va8vyl",paddingLeft:"_pl-wh8dj4",onPress:function(){return n((function(e){return!e}))},elevation:"$2",boxShadow:"_boxsha-jy1s0w"})]})})]})})}},12070:function(e,r,n){n.d(r,{_:function(){return c}});var t=n(2784),o=n(70810),a=n(74479),i=Object.defineProperty;const u=((e,r)=>i(e,"name",{value:r,configurable:!0}))((e=>{const{color:r="black",size:n=24,...a}=e;return t.createElement(o.ny,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:`${r}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...a},t.createElement(o.aH,{points:"6 9 12 15 18 9",fill:"none",stroke:`${r}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))}),"Icon");u.displayName="ChevronDown";const c=(0,t.memo)((0,a.H)(u))},46642:function(e,r,n){n.d(r,{K:function(){return c}});var t=n(2784),o=n(70810),a=n(74479),i=Object.defineProperty;const u=((e,r)=>i(e,"name",{value:r,configurable:!0}))((e=>{const{color:r="black",size:n=24,...a}=e;return t.createElement(o.ny,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:`${r}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...a},t.createElement(o.aH,{points:"18 15 12 9 6 15",fill:"none",stroke:`${r}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))}),"Icon");u.displayName="ChevronUp";const c=(0,t.memo)((0,a.H)(u))}}]);