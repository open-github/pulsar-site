"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[1033],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=u(n),d=l,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(k,o(o({ref:e},p),{},{components:n})):r.createElement(k,o({ref:e},p))}));function d(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10656:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=n(87462),l=n(63366),a=(n(67294),n(3905)),o=["components"],i={id:"io-solr-sink",title:"Solr sink connector",sidebar_label:"Solr sink connector"},s=void 0,u={unversionedId:"io-solr-sink",id:"io-solr-sink",title:"Solr sink connector",description:"The Solr sink connector pulls messages from Pulsar topics and persists the messages to Solr collections.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/io-solr-sink.md",sourceDirName:".",slug:"/io-solr-sink",permalink:"/ja/docs/next/io-solr-sink",editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/io-solr-sink.md",tags:[],version:"current",frontMatter:{id:"io-solr-sink",title:"Solr sink connector",sidebar_label:"Solr sink connector"}},p={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3}],m={toc:c};function d(t){var e=t.components,n=(0,l.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Solr sink connector pulls messages from Pulsar topics and persists the messages to Solr collections."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"The configuration of the Solr sink connector has the following properties."),(0,a.kt)("h3",{id:"property"},"Property"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"solrUrl")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"true"),(0,a.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("li",null,"Comma-separated zookeeper hosts with chroot used in the SolrCloud mode. ",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Example"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"localhost:2181,localhost:2182/chroot")," ",(0,a.kt)("br",null),(0,a.kt)("br",null)),(0,a.kt)("li",null,"URL to connect to Solr used in standalone mode. ",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Example"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"localhost:8983/solr")," "))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"solrMode")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"true"),(0,a.kt)("td",{parentName:"tr",align:null},"SolrCloud"),(0,a.kt)("td",{parentName:"tr",align:null},"The client mode when interacting with the Solr cluster. ",(0,a.kt)("br",null),(0,a.kt)("br",null),"Below are the available options:",(0,a.kt)("br",null),(0,a.kt)("li",null,"Standalone",(0,a.kt)("br",null)),(0,a.kt)("li",null," SolrCloud"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"solrCollection")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"true"),(0,a.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,a.kt)("td",{parentName:"tr",align:null},"Solr collection name to which records need to be written.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"solrCommitWithinMs")),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"The time within million seconds for Solr updating commits.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"username")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,a.kt)("td",{parentName:"tr",align:null},"The username for basic authentication.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Note: ",(0,a.kt)("inlineCode",{parentName:"strong"},"usename")," is case-sensitive."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"password")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,a.kt)("td",{parentName:"tr",align:null},"The password for basic authentication. ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Note: ",(0,a.kt)("inlineCode",{parentName:"strong"},"password")," is case-sensitive."))))),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"Before using the Solr sink connector, you need to create a configuration file through one of the following methods."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"JSON"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n   "configs": {\n      "solrUrl": "localhost:2181,localhost:2182/chroot",\n      "solrMode": "SolrCloud",\n      "solrCollection": "techproducts",\n      "solrCommitWithinMs": 100,\n      "username": "fakeuser",\n      "password": "fake@123"\n   }\n}\n\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"YAML"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'\n{\n    solrUrl: "localhost:2181,localhost:2182/chroot"\n    solrMode: "SolrCloud"\n    solrCollection: "techproducts"\n    solrCommitWithinMs: 100\n    username: "fakeuser"\n    password: "fake@123"\n}\n\n')))))}d.isMDXComponent=!0}}]);