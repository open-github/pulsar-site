"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[21547],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,s=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),h=u(n),d=o,f=h["".concat(s,".").concat(d)]||h[d]||l[d]||i;return n?r.createElement(f,a(a({ref:e},p),{},{components:n})):r.createElement(f,a({ref:e},p))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=h;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},90797:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={id:"concepts-authentication",title:"Authentication and Authorization",sidebar_label:"Authentication and Authorization",original_id:"concepts-authentication"},s=void 0,u={unversionedId:"concepts-authentication",id:"version-2.9.1/concepts-authentication",title:"Authentication and Authorization",description:"Pulsar supports a pluggable authentication mechanism which can be configured at the proxy and/or the broker. Pulsar also supports a pluggable authorization mechanism. These mechanisms work together to identify the client and its access rights on topics, namespaces and tenants.",source:"@site/versioned_docs/version-2.9.1/concepts-authentication.md",sourceDirName:".",slug:"/concepts-authentication",permalink:"/docs/concepts-authentication",editUrl:"https://github.com/apache/pulsar/edit/master/site2/versioned_docs/version-2.9.1/concepts-authentication.md",tags:[],version:"2.9.1",frontMatter:{id:"concepts-authentication",title:"Authentication and Authorization",sidebar_label:"Authentication and Authorization",original_id:"concepts-authentication"},sidebar:"version-2.9.1/docsSidebar",previous:{title:"Multi Tenancy",permalink:"/docs/concepts-multi-tenancy"},next:{title:"Topic Compaction",permalink:"/docs/concepts-topic-compaction"}},p={},l=[],h={toc:l};function d(t){var e=t.components,n=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Pulsar supports a pluggable ",(0,i.kt)("a",{parentName:"p",href:"/docs/security-overview"},"authentication")," mechanism which can be configured at the proxy and/or the broker. Pulsar also supports a pluggable ",(0,i.kt)("a",{parentName:"p",href:"security-authorization"},"authorization")," mechanism. These mechanisms work together to identify the client and its access rights on topics, namespaces and tenants."))}d.isMDXComponent=!0}}]);