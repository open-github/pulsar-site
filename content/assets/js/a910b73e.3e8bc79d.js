"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[61373],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=u(n),d=i,f=h["".concat(c,".").concat(d)]||h[d]||p[d]||a;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},35059:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],s={id:"security-overview",title:"Pulsar security overview",sidebar_label:"Overview"},c=void 0,u={unversionedId:"security-overview",id:"security-overview",title:"Pulsar security overview",description:"As the central message bus for a business, Apache Pulsar is frequently used for storing mission-critical data. Therefore, enabling security features in Pulsar is crucial.",source:"@site/docs/security-overview.md",sourceDirName:".",slug:"/security-overview",permalink:"/docs/next/security-overview",editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/security-overview.md",tags:[],version:"current",frontMatter:{id:"security-overview",title:"Pulsar security overview",sidebar_label:"Overview"},sidebar:"docsSidebar",previous:{title:"Pulsar isolation",permalink:"/docs/next/administration-isolation"},next:{title:"Transport Encryption using TLS",permalink:"/docs/next/security-tls-transport"}},l={},p=[{value:"Role tokens",id:"role-tokens",level:2},{value:"Authentication providers",id:"authentication-providers",level:2}],h={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As the central message bus for a business, Apache Pulsar is frequently used for storing mission-critical data. Therefore, enabling security features in Pulsar is crucial."),(0,a.kt)("p",null,"By default, Pulsar configures no encryption, authentication, or authorization. Any client can communicate to Apache Pulsar via plain text service URLs. So we must ensure that Pulsar accessing via these plain text service URLs is restricted to trusted clients only. In such cases, you can use Network segmentation and/or authorization ACLs to restrict access to trusted IPs. If you use neither, the state of cluster is wide open and anyone can access the cluster."),(0,a.kt)("p",null,"Pulsar supports a pluggable authentication mechanism. And Pulsar clients use this mechanism to authenticate with brokers and proxies. You can also configure Pulsar to support multiple authentication sources."),(0,a.kt)("p",null,'The Pulsar broker validates the authentication credentials when a connection is established. After the initial connection is authenticated, the "principal" token is stored for authorization though the connection is not re-authenticated. The broker periodically checks the expiration status of every ',(0,a.kt)("inlineCode",{parentName:"p"},"ServerCnx")," object. You can set the ",(0,a.kt)("inlineCode",{parentName:"p"},"authenticationRefreshCheckSeconds")," on the broker to control the frequency to check the expiration status. By default, the ",(0,a.kt)("inlineCode",{parentName:"p"},"authenticationRefreshCheckSeconds")," is set to 60s. When the authentication is expired, the broker forces to re-authenticate the connection. If the re-authentication fails, the broker disconnects the client."),(0,a.kt)("p",null,"The broker supports learning whether a particular client supports authentication refreshing. If a client supports authentication refreshing and the credential is expired, the authentication provider calls the ",(0,a.kt)("inlineCode",{parentName:"p"},"refreshAuthentication")," method to initiate the refreshing process. If a client does not support authentication refreshing and the credential is expired, the broker disconnects the client."),(0,a.kt)("p",null,"You had better secure the service components in your Apache Pulsar deployment."),(0,a.kt)("h2",{id:"role-tokens"},"Role tokens"),(0,a.kt)("p",null,"In Pulsar, a ",(0,a.kt)("em",{parentName:"p"},"role")," is a string, like ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"app1"),", which can represent a single client or multiple clients. You can use roles to control permission for clients to produce or consume from certain topics, administer the configuration for tenants, and so on."),(0,a.kt)("p",null,"Apache Pulsar uses a ",(0,a.kt)("a",{parentName:"p",href:"#authentication-providers"},"Authentication Provider")," to establish the identity of a client and then assign a ",(0,a.kt)("em",{parentName:"p"},"role token")," to that client. This role token is then used for ",(0,a.kt)("a",{parentName:"p",href:"security-authorization"},"Authorization and ACLs")," to determine what the client is authorized to do."),(0,a.kt)("h2",{id:"authentication-providers"},"Authentication providers"),(0,a.kt)("p",null,"Currently Pulsar supports the following authentication providers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"security-tls-authentication"},"TLS authentication")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"security-athenz"},"Athenz authentication")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"security-kerberos"},"Kerberos authentication")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"security-jwt"},"JSON Web Token (JWT) authentication")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"security-oauth2"},"OAuth 2.0 authentication")),(0,a.kt)("li",{parentName:"ul"},"Basic authentication")))}d.isMDXComponent=!0}}]);