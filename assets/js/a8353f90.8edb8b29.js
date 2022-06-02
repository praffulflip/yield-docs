"use strict";(self.webpackChunkyield_docs=self.webpackChunkyield_docs||[]).push([[97],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3284:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s="Join",u={unversionedId:"Join",id:"Join",title:"Join",description:"asset",source:"@site/docs/Join.md",sourceDirName:".",slug:"/Join",permalink:"/docs/Join",draft:!1,editUrl:"https://github.com/iamsahu/yield-docs/tree/main/packages/create-docusaurus/templates/shared/docs/Join.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FlashJoin",permalink:"/docs/FlashJoin"},next:{title:"Ladle",permalink:"/docs/Ladle"}},c={},p=[{value:"asset",id:"asset",level:3},{value:"storedBalance",id:"storedbalance",level:3},{value:"constructor",id:"constructor",level:3},{value:"join",id:"join-1",level:3},{value:"_join",id:"_join",level:3},{value:"exit",id:"exit",level:3},{value:"_exit",id:"_exit",level:3},{value:"retrieve",id:"retrieve",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"join"},"Join"),(0,i.kt)("h3",{id:"asset"},"asset"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"address asset\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"asset managed by this contract")),(0,i.kt)("h3",{id:"storedbalance"},"storedBalance"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"uint256 storedBalance\n")),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"constructor(address asset_) public\n")),(0,i.kt)("h3",{id:"join-1"},"join"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function join(address user, uint128 amount) external virtual returns (uint128)\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Take ",(0,i.kt)("inlineCode",{parentName:"em"},"amount")," ",(0,i.kt)("inlineCode",{parentName:"em"},"asset")," from ",(0,i.kt)("inlineCode",{parentName:"em"},"user")," using ",(0,i.kt)("inlineCode",{parentName:"em"},"transferFrom"),", minus any unaccounted ",(0,i.kt)("inlineCode",{parentName:"em"},"asset")," in this contract.")),(0,i.kt)("h3",{id:"_join"},"_join"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function _join(address user, uint128 amount) internal returns (uint128)\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Take ",(0,i.kt)("inlineCode",{parentName:"em"},"amount")," ",(0,i.kt)("inlineCode",{parentName:"em"},"asset")," from ",(0,i.kt)("inlineCode",{parentName:"em"},"user")," using ",(0,i.kt)("inlineCode",{parentName:"em"},"transferFrom"),", minus any unaccounted ",(0,i.kt)("inlineCode",{parentName:"em"},"asset")," in this contract.")),(0,i.kt)("h3",{id:"exit"},"exit"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function exit(address user, uint128 amount) external virtual returns (uint128)\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Transfer ",(0,i.kt)("inlineCode",{parentName:"em"},"amount")," ",(0,i.kt)("inlineCode",{parentName:"em"},"asset")," to ",(0,i.kt)("inlineCode",{parentName:"em"},"user"))),(0,i.kt)("h3",{id:"_exit"},"_exit"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function _exit(address user, uint128 amount) internal returns (uint128)\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Transfer ",(0,i.kt)("inlineCode",{parentName:"em"},"amount")," ",(0,i.kt)("inlineCode",{parentName:"em"},"asset")," to ",(0,i.kt)("inlineCode",{parentName:"em"},"user"))),(0,i.kt)("h3",{id:"retrieve"},"retrieve"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function retrieve(contract IERC20 token, address to) external\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Retrieve any tokens other than the ",(0,i.kt)("inlineCode",{parentName:"em"},"asset"),". Useful for airdropped tokens.")))}m.isMDXComponent=!0}}]);