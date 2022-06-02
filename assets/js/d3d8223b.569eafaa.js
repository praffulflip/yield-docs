"use strict";(self.webpackChunkyield_docs=self.webpackChunkyield_docs||[]).push([[1295],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9997:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={},p="IUniswapV3PoolImmutables",u={unversionedId:"oracles/uniswap/IUniswapV3PoolImmutables",id:"oracles/uniswap/IUniswapV3PoolImmutables",title:"IUniswapV3PoolImmutables",description:"These parameters are fixed for a pool forever, i.e., the methods will always return the same values",source:"@site/docs/oracles/uniswap/IUniswapV3PoolImmutables.md",sourceDirName:"oracles/uniswap",slug:"/oracles/uniswap/IUniswapV3PoolImmutables",permalink:"/docs/oracles/uniswap/IUniswapV3PoolImmutables",draft:!1,editUrl:"https://github.com/iamsahu/yield-docs/tree/main/packages/create-docusaurus/templates/shared/docs/oracles/uniswap/IUniswapV3PoolImmutables.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LidoOracle",permalink:"/docs/oracles/lido/LidoOracle"},next:{title:"UniswapV3Oracle",permalink:"/docs/oracles/uniswap/UniswapV3Oracle"}},s={},c=[{value:"factory",id:"factory",level:3},{value:"token0",id:"token0",level:3},{value:"token1",id:"token1",level:3},{value:"fee",id:"fee",level:3},{value:"tickSpacing",id:"tickspacing",level:3},{value:"maxLiquidityPerTick",id:"maxliquiditypertick",level:3}],m={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"iuniswapv3poolimmutables"},"IUniswapV3PoolImmutables"),(0,l.kt)("p",null,"These parameters are fixed for a pool forever, i.e., the methods will always return the same values"),(0,l.kt)("h3",{id:"factory"},"factory"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function factory() external view returns (address)\n")),(0,l.kt)("p",null,"The contract that deployed the pool, which must adhere to the IUniswapV3Factory interface"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[0]"),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"The contract address")))),(0,l.kt)("h3",{id:"token0"},"token0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function token0() external view returns (address)\n")),(0,l.kt)("p",null,"The first of the two tokens of the pool, sorted by address"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[0]"),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"The token contract address")))),(0,l.kt)("h3",{id:"token1"},"token1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function token1() external view returns (address)\n")),(0,l.kt)("p",null,"The second of the two tokens of the pool, sorted by address"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[0]"),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"The token contract address")))),(0,l.kt)("h3",{id:"fee"},"fee"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function fee() external view returns (uint24)\n")),(0,l.kt)("p",null,"The pool's fee in hundredths of a bip, i.e. 1e-6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[0]"),(0,l.kt)("td",{parentName:"tr",align:null},"uint24"),(0,l.kt)("td",{parentName:"tr",align:null},"The fee")))),(0,l.kt)("h3",{id:"tickspacing"},"tickSpacing"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function tickSpacing() external view returns (int24)\n")),(0,l.kt)("p",null,"The pool tick spacing"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Ticks can only be used at multiples of this value, minimum of 1 and always positive\ne.g.: a tickSpacing of 3 means ticks can be initialized every 3rd tick, i.e., ..., -6, -3, 0, 3, 6, ...\nThis value is an int24 to avoid casting even though it is always positive.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[0]"),(0,l.kt)("td",{parentName:"tr",align:null},"int24"),(0,l.kt)("td",{parentName:"tr",align:null},"The tick spacing")))),(0,l.kt)("h3",{id:"maxliquiditypertick"},"maxLiquidityPerTick"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function maxLiquidityPerTick() external view returns (uint128)\n")),(0,l.kt)("p",null,"The maximum amount of position liquidity that can use any tick in the range"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"This parameter is enforced per tick to prevent liquidity from overflowing a uint128 at any point, and\nalso prevents out-of-range liquidity from being used to prevent adding in-range liquidity to a pool")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[0]"),(0,l.kt)("td",{parentName:"tr",align:null},"uint128"),(0,l.kt)("td",{parentName:"tr",align:null},"The max amount of liquidity per tick")))))}d.isMDXComponent=!0}}]);