"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[7737],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,h=m["".concat(c,".").concat(f)]||m[f]||s[f]||p;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<p;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44938:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var n=r(87462),a=r(63366),p=(r(67294),r(3905)),o=["components"],i={id:"client-cpp-2.8.2",title:"Client CPP 2.8.2",sidebar_label:"Client CPP 2.8.2"},c=void 0,l={unversionedId:"versioned/client-cpp-2.8.2",id:"versioned/client-cpp-2.8.2",title:"Client CPP 2.8.2",description:"C++]Fix libcurl miss auth header when broker return 307 [#13112",source:"@site/release-notes/versioned/client-cpp-2.8.2.md",sourceDirName:"versioned",slug:"/versioned/client-cpp-2.8.2",permalink:"/zh-CN/release-notes/versioned/client-cpp-2.8.2",tags:[],version:"current",frontMatter:{id:"client-cpp-2.8.2",title:"Client CPP 2.8.2",sidebar_label:"Client CPP 2.8.2"}},u={},s=[],m={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"[C++]","Fix libcurl miss auth header when broker return 307 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/13112"},"#13112"),(0,p.kt)("br",{parentName:"p"}),"\n","[c++]"," Define and expose PULSAR_VERSION macro ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12769"},"#12769"),(0,p.kt)("br",{parentName:"p"}),"\n","[C++]"," Fix request timeout for GetLastMessageId doesn't work ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12586"},"#12586"),(0,p.kt)("br",{parentName:"p"}),"\n","[C++]"," Fixed connection read error logging ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12492"},"#12492"),(0,p.kt)("br",{parentName:"p"}),"\n","Fix frequent segmentation fault of Python tests by refactoring ExecutorService ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12427"},"#12427"),(0,p.kt)("br",{parentName:"p"}),"\n","[C++]"," Use weak ref to ClientConnection for timeout task ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12409"},"#12409"),(0,p.kt)("br",{parentName:"p"}),"\n","[C++]"," Delay ClientCredentialFlow::initialize to the first authenticate call ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12372"},"#12372"),(0,p.kt)("br",{parentName:"p"}),"\n","[C++]"," Use URL encoded content type for OAuth 2.0 authentication ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12341"},"#12341"),(0,p.kt)("br",{parentName:"p"}),"\n","[C++]"," Handle OAuth 2.0 exceptional cases gracefully ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12335"},"#12335"),(0,p.kt)("br",{parentName:"p"}),"\n","[C++]"," Support configuring optional scope field for OAuth2 authentication ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12305"},"#12305"),(0,p.kt)("br",{parentName:"p"}),"\n","Remove python3 from vcpkg.json ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12092"},"#12092"),(0,p.kt)("br",{parentName:"p"}),"\n","[C++]"," Fixed attempting to connect to multiple IP addresses ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11958"},"#11958"),(0,p.kt)("br",{parentName:"p"}),"\n","[C++]"," Handle error when shutting down client after forks ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11954"},"#11954"),(0,p.kt)("br",{parentName:"p"}),"\n","[C++]"," Move all C symbols into C++ pulsar namespace ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11919"},"#11919")))}f.isMDXComponent=!0}}]);