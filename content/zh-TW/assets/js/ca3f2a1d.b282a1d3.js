"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[771],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,h=m["".concat(u,".").concat(f)]||m[f]||s[f]||p;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<p;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},32117:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var n=r(87462),a=r(63366),p=(r(67294),r(3905)),o=["components"],i={id:"client-java-2.8.1",title:"Client Java 2.8.1",sidebar_label:"Client Java 2.8.1"},u=void 0,l={unversionedId:"versioned/client-java-2.8.1",id:"versioned/client-java-2.8.1",title:"Client Java 2.8.1",description:"Handle receiveAsync() failures in MultiTopicsConsumer #11843",source:"@site/release-notes/versioned/client-java-2.8.1.md",sourceDirName:"versioned",slug:"/versioned/client-java-2.8.1",permalink:"/zh-TW/release-notes/versioned/client-java-2.8.1",tags:[],version:"current",frontMatter:{id:"client-java-2.8.1",title:"Client Java 2.8.1",sidebar_label:"Client Java 2.8.1"}},c={},s=[],m={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Handle receiveAsync() failures in MultiTopicsConsumer ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11843"},"#11843"),(0,p.kt)("br",{parentName:"p"}),"\n","Fixed accessing MessageImpl after it was enqueued on user queue ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11824"},"#11824"),(0,p.kt)("br",{parentName:"p"}),"\n","Forget to update memory usage on message send timeout ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11761"},"#11761"),(0,p.kt)("br",{parentName:"p"}),"\n","[pulsar-client]"," remove consumer reference from PulsarClient on subscription failure ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11758"},"#11758"),(0,p.kt)("br",{parentName:"p"}),"\n","[pulsar-client]"," clean up MultiTopicsConsumerImpl reference on consumer creation failure ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11754"},"#11754"),(0,p.kt)("br",{parentName:"p"}),"\n","Fix null MessageId may be passed to its compareTo() method ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11607"},"#11607"),(0,p.kt)("br",{parentName:"p"}),"\n","Use sendRequestWithId to add timeout to hasMessageAvailable ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11600"},"#11600"),(0,p.kt)("br",{parentName:"p"}),"\n","[C++/Python]"," Fix bugs that were not exposed by broken C++ CI before ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11557"},"#11557"),(0,p.kt)("br",{parentName:"p"}),"\n","[Issue 11493]"," Fix #11493. Simple implementation of getting number of references from C++ client ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11535"},"#11535"),(0,p.kt)("br",{parentName:"p"}),"\n","Fix Consumer listener does not respect receiver queue size ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11455"},"#11455"),(0,p.kt)("br",{parentName:"p"}),"\n","Avoid infinite waiting for consumer close ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11347"},"#11347"),(0,p.kt)("br",{parentName:"p"}),"\n","[C++]"," Use same regex code at ZTSClient ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11323"},"#11323")))}f.isMDXComponent=!0}}]);