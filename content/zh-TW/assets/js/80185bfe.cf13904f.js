"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[5684],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=c(n),m=a,b=f["".concat(l,".").concat(m)]||f[m]||s[m]||o;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4570:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],p={id:"client-java-2.9.0",title:"Client Java 2.9.0",sidebar_label:"Client Java 2.9.0"},l=void 0,c={unversionedId:"versioned/client-java-2.9.0",id:"versioned/client-java-2.9.0",title:"Client Java 2.9.0",description:"Java Client] Use failPendingMessages to ensure proper cleanup [#12259",source:"@site/release-notes/versioned/client-java-2.9.0.md",sourceDirName:"versioned",slug:"/versioned/client-java-2.9.0",permalink:"/zh-TW/release-notes/versioned/client-java-2.9.0",tags:[],version:"current",frontMatter:{id:"client-java-2.9.0",title:"Client Java 2.9.0",sidebar_label:"Client Java 2.9.0"}},u={},s=[],f={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"[Java Client]"," Use failPendingMessages to ensure proper cleanup ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12259"},"#12259"),(0,o.kt)("br",{parentName:"p"}),"\n","[pulsar-client]"," Fix NPE in pulsar bolt while publishing messages ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12106"},"#12106"),(0,o.kt)("br",{parentName:"p"}),"\n","[PIP 96]"," Add message payload processor for Pulsar client ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12088"},"#12088"),(0,o.kt)("br",{parentName:"p"}),"\n","[Client]"," Fix endless receiveAsync loop in MultiTopicsConsumer ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12044"},"#12044"),(0,o.kt)("br",{parentName:"p"}),"\n","Forget to update memory usage on producer close ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11906"},"#11906"),(0,o.kt)("br",{parentName:"p"}),"\n","[Client]"," Fix ConcurrentModificationException in sendAsync ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11884"},"#11884"),(0,o.kt)("br",{parentName:"p"}),"\n","Handle receiveAsync() failures in MultiTopicsConsumer ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11843"},"#11843")))}m.isMDXComponent=!0}}]);