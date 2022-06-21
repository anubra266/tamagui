"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[822],{1957:function(e,r,t){t.r(r)},49945:function(e,r,t){t.r(r)},99822:function(e,r,t){t.r(r),t.d(r,{default:function(){return A}});var o=t(52322),n=t(2784);var c=t(68683),i=t(59699),a=t(9303),s=t(45482),b=t(54503),l=Object.defineProperty,d=(e,r)=>l(e,"name",{value:r,configurable:!0});const u={"+":(e,r)=>e+r,"-":(e,r)=>e-r,"/":(e,r)=>e/r,"*":(e,r)=>e*r},f=d(((...e)=>{if(b.$L){let r="calc(";for(const t of e)r+=u[t]?" "+t+" ":h(t);return r+")"}let r=0,t=null;for(const o of e)u[o]?t=u[o]:t?(r=t(r,o),t=null):r=+o;return r}),"calc"),h=d((e=>{const r=(0,i.kv)(e);return"number"===typeof r?`${r}px`:r}),"convertToVariableOrNumber");var _=t(63035),p=t(92682),m=t(56695),v=t(4586),w=t(23917),g=t(35730),y=t(63862);function j(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function k(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(r){j(e,r,t[r])}))}return e}function x(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var z=Object.defineProperty,S=(e,r)=>z(e,"name",{value:r,configurable:!0});const C="Switch",O=(0,p.b)(C),[R]=O,[L,P]=(O[1],R(C)),T=S((e=>Math.round(.65*(0,i.Ve)((0,a.a)(e)))),"getSwitchHeight"),$=S((e=>2*T(e)),"getSwitchWidth"),B=(0,s.z)(m.sL,{name:"Switch",tag:"button",variants:{size:{"...size":e=>{const r=f(T(e),"+",4);return{height:r,minHeight:r,width:f($(e),"+",4)}}}},defaultVariants:{size:"$4"},borderTopColor_focus:"_btc-0focus-nopeqz",borderRightColor_focus:"_brc-0focus-e9veh0",borderBottomColor_focus:"_bbc-0focus-1iy15ml",borderLeftColor_focus:"_blc-0focus-fuwy8x",borderBottomStyle:"_bbs-1d05hm9",borderTopStyle:"_bts-j2x5vn",borderLeftStyle:"_bls-69w1u5",borderRightStyle:"_brs-r2rbii",backgroundColor:"_bc-ea1zmt",borderTopColor:"_btc-m01i2g",borderRightColor:"_brc-afar9b",borderBottomColor:"_bbc-13rsofa",borderLeftColor:"_blc-tic6ma",borderTopWidth:"_btw-1k5vqvx",borderRightWidth:"_brw-1737ctg",borderBottomWidth:"_bbw-he1byj",borderLeftWidth:"_blw-np9tbb",borderTopLeftRadius:"_btlr-1idohe1",borderTopRightRadius:"_btrr-94c9kc",borderBottomRightRadius:"_bbrr-1qsycse",borderBottomLeftRadius:"_bblr-14blrr"}),E=n.forwardRef(((e,r)=>{const{__scopeSwitch:t,labeledBy:i,name:a,checked:s,defaultChecked:l,required:d,disabled:u,value:f="on",onCheckedChange:h,size:_="$4"}=e,p=x(e,["__scopeSwitch","labeledBy","name","checked","defaultChecked","required","disabled","value","onCheckedChange","size"]),[m,v]=n.useState(null),j=(0,c.e)(r,(e=>v(e))),z=(0,y.t0)(m),S=i||z,C=n.useRef(!1),O=!!b.$L&&(!m||Boolean(m.closest("form"))),[R=!1,P]=(0,w.T)({prop:s,defaultProp:l||!1,onChange:h});return n.useEffect((()=>{if(e.id)return(0,g.QS)(e.id,{focus:()=>{P((e=>!e))}})}),[e.id]),(0,o.jsxs)(L,{scope:t,checked:R,disabled:u,size:_,children:[(0,o.jsx)(B,k({size:_,role:"switch","aria-checked":R,"aria-labelledby":S,"aria-required":d,"data-state":D(R),"data-disabled":u?"":void 0,disabled:u,tabIndex:u?void 0:0,value:f},p,{ref:j,onPress:r=>{var t;null==(t=e.onPress)||t.call(e,r),P((e=>!e)),b.$L&&O&&(C.current=r.isPropagationStopped(),C.current||r.stopPropagation())}})),b.$L&&O&&(0,o.jsx)(V,{control:m,bubbles:!C.current,name:a,value:f,checked:R,required:d,disabled:u,style:{transform:"translateX(-100%)"}})]})}));E.displayName=C;const q=B.extractable((0,_.Y)(E),{neverFlatten:!0}),I="SwitchThumb",N=(0,s.z)(v.K,{name:"SwitchThumb",variants:{size:{"...size":e=>({height:T(e),width:T(e)})}},defaultVariants:{size:"$4"},borderTopLeftRadius:"_btlr-1idohe1",borderTopRightRadius:"_btrr-94c9kc",borderBottomRightRadius:"_bbrr-1qsycse",borderBottomLeftRadius:"_bblr-14blrr",backgroundColor:"_bc-ea1zmt"}),W=N.extractable(n.forwardRef(((e,r)=>{const{__scopeSwitch:t}=e,n=x(e,["__scopeSwitch"]),{size:c,disabled:a,checked:s}=P(I,t);return(0,o.jsx)(N,k({size:c,"data-state":D(s),"data-disabled":a?"":void 0},n,{x:s?(0,i.Ve)($(c))-(0,i.Ve)(T(c)):0,ref:r}))})),{neverFlatten:!0});W.displayName=I,q.Thumb=W;const V=S((e=>{const{control:r,checked:t,bubbles:c=!0}=e,i=x(e,["control","checked","bubbles"]),a=n.useRef(null),s=function(e){const r=n.useRef({value:e,previous:e});return n.useMemo((()=>(r.current.value!==e&&(r.current.previous=r.current.value,r.current.value=e),r.current.previous)),[e])}(t);return n.useEffect((()=>{const e=a.current,r=window.HTMLInputElement.prototype,o=Object.getOwnPropertyDescriptor(r,"checked").set;if(s!==t&&o){const r=new Event("click",{bubbles:c});o.call(e,t),e.dispatchEvent(r)}}),[s,t,c]),(0,o.jsx)("input",k({type:"checkbox","aria-hidden":!0,defaultChecked:t},i,{tabIndex:-1,ref:a,style:k({},e.style,{position:"absolute",pointerEvents:"none",opacity:0,margin:0})}))}),"BubbleInput");function D(e){return e?"checked":"unchecked"}S(D,"getState"),t(49945);var F=t(94874);var H=Object.defineProperty,M=(e,r)=>H(e,"name",{value:r,configurable:!0});function A(){return(0,o.jsxs)(m.FA,{alignItems:"_ai-17do05s",width:"_w-182r4c5",space:"$3",children:[(0,o.jsx)(K,{size:"$2"}),(0,o.jsx)(K,{size:"$3"}),(0,o.jsx)(K,{size:"$4"}),(0,o.jsx)(K,{size:"$5"})]})}function K(e){return(0,o.jsxs)(m.sL,{x:"_transform-17o6ma4",alignItems:"_ai-17do05s",width:"_w-182r4c5",space:"$4",children:[(0,o.jsx)(y.__,{justifyContent:"_jc-1lct8eo",minWidth:"_miw-1it5r1i",paddingRight:"_pr-4rm8j0",size:e.size,htmlFor:"switch-1",children:"Dark mode"}),(0,o.jsx)("div",{vertical:!0,className:(0,F.concatClassName)(" _bbs-1d05hm9 _bts-j2x5vn _bls-69w1u5 _brs-r2rbii _transform-fx81n7 _brw-1737c2r _maw-ao3bcm _w-1c386nm _mih-zdnlnj _bbw-he1ah5 _mah-e01bnd _h-386d6l _fg-15m5m9x _fs-vf3l73 _btw-1k5vpej _blw-np9rtx _btc-1ubgvm5 _brc-lv4h9i _bbc-1gkdz6n _blc-11gd9tv _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _ai-o35pey  ")}),(0,o.jsx)(q,{id:"switch-1",size:e.size,children:(0,o.jsx)(q.Thumb,{animation:"bouncy"})})]})}M(A,"SwitchDemo"),M(K,"SwitchWithLabel"),t(1957)}}]);