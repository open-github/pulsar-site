"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[59081],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69175:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"transactions-guarantee",title:"Transactions Guarantee",sidebar_label:"Transactions Guarantee"},c=void 0,l={unversionedId:"transactions-guarantee",id:"transactions-guarantee",title:"Transactions Guarantee",description:"Pulsar transactions support the following guarantee.",source:"@site/docs/transaction-guarantee.md",sourceDirName:".",slug:"/transactions-guarantee",permalink:"/docs/next/transactions-guarantee",editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/transaction-guarantee.md",tags:[],version:"current",frontMatter:{id:"transactions-guarantee",title:"Transactions Guarantee",sidebar_label:"Transactions Guarantee"}},u={},p=[{value:"Atomic multi-partition writes and multi-subscription acknowledges",id:"atomic-multi-partition-writes-and-multi-subscription-acknowledges",level:2},{value:"Read transactional message",id:"read-transactional-message",level:2},{value:"Acknowledge transactional message",id:"acknowledge-transactional-message",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pulsar transactions support the following guarantee."),(0,o.kt)("h2",{id:"atomic-multi-partition-writes-and-multi-subscription-acknowledges"},"Atomic multi-partition writes and multi-subscription acknowledges"),(0,o.kt)("p",null,"Transactions enable atomic writes to multiple topics and partitions. A batch of messages in a transaction can be received from, produced to, and acknowledged by many partitions. All the operations involved in a transaction succeed or fail as a single unit. "),(0,o.kt)("h2",{id:"read-transactional-message"},"Read transactional message"),(0,o.kt)("p",null,"All the messages in a transaction are available only for consumers until the transaction is committed."),(0,o.kt)("h2",{id:"acknowledge-transactional-message"},"Acknowledge transactional message"),(0,o.kt)("p",null,"A message is acknowledged successfully only once by a consumer under the subscription when acknowledging the message with the transaction ID."))}m.isMDXComponent=!0}}]);