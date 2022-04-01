"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[9440],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(r),h=a,f=m["".concat(p,".").concat(h)]||m[h]||s[h]||l;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},82435:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),i=["components"],o={id:"pulsar-client-go-0.7.0",title:"Pulsar Client Go",sidebar_label:"Pulsar Client Go"},p=void 0,u={unversionedId:"versioned/pulsar-client-go-0.7.0",id:"versioned/pulsar-client-go-0.7.0",title:"Pulsar Client Go",description:"Feature",source:"@site/release-notes/versioned/pulsar-client-go-0.7.0.md",sourceDirName:"versioned",slug:"/versioned/pulsar-client-go-0.7.0",permalink:"/fr/release-notes/versioned/pulsar-client-go-0.7.0",tags:[],version:"current",frontMatter:{id:"pulsar-client-go-0.7.0",title:"Pulsar Client Go",sidebar_label:"Pulsar Client Go"}},c={},s=[{value:"Feature",id:"feature",level:2},{value:"Improve",id:"improve",level:2}],m={toc:s};function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"feature"},"Feature"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Encryption support for producer, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/560"},"PR-560")),(0,l.kt)("li",{parentName:"ul"},"Decrytion support for consumer, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/612"},"PR-612")),(0,l.kt)("li",{parentName:"ul"},"User-defined metric cardinality, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/604"},"PR-604")),(0,l.kt)("li",{parentName:"ul"},"Better support for Azure AD OAuth 2.0, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/630"},"PR-630"),", ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/633"},"PR-633"),", ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/634"},"PR-634")),(0,l.kt)("li",{parentName:"ul"},"Removed testing for go versions 1.11 and 1.12, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/632"},"PR-632")),(0,l.kt)("li",{parentName:"ul"},"Add epoch to create producer to prevent a duplicate producer when broker is not available., see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/582"},"PR-582"))),(0,l.kt)("h2",{id:"improve"},"Improve"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fix batch size limit validation, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/528"},"PR-528")),(0,l.kt)("li",{parentName:"ul"},"Fix logic of command for sendError, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/622"},"PR-622")),(0,l.kt)("li",{parentName:"ul"},"Drain connection requests channel without closing, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/645"},"PR-645")),(0,l.kt)("li",{parentName:"ul"},"Fix ConsumersOpened counter not incremented when use multitopic or regexp consumer, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/619"},"PR-619")),(0,l.kt)("li",{parentName:"ul"},"Fix reconnection logic when topic is deleted, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/627"},"PR-627")),(0,l.kt)("li",{parentName:"ul"},"Fix panic when scale down partitions, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/601"},"PR-601")),(0,l.kt)("li",{parentName:"ul"},"Fix missing metrics for topics by registration of existing collector, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/600"},"PR-600")),(0,l.kt)("li",{parentName:"ul"},"Fix producer panic by oldProducers, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/598"},"PR-598")),(0,l.kt)("li",{parentName:"ul"},"Fail pending messages when topic is terminated, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/588"},"PR-588")),(0,l.kt)("li",{parentName:"ul"},"Fix handle send error panic, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/576"},"PR-576"))))}h.isMDXComponent=!0}}]);