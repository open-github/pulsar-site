"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[8387],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=c(r),m=n,d=h["".concat(i,".").concat(m)]||h[m]||u[m]||p;return r?a.createElement(d,o(o({ref:t},s),{},{components:r})):a.createElement(d,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<p;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},16067:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=r(87462),n=r(63366),p=(r(67294),r(3905)),o=["components"],l={id:"pulsar-2.7.3",title:"Apache Pulsar 2.7.3",sidebar_label:"Apache Pulsar 2.7.3"},i=void 0,c={unversionedId:"versioned/pulsar-2.7.3",id:"versioned/pulsar-2.7.3",title:"Apache Pulsar 2.7.3",description:"metrics",source:"@site/release-notes/versioned/pulsar-2.7.3.md",sourceDirName:"versioned",slug:"/versioned/pulsar-2.7.3",permalink:"/zh-TW/release-notes/versioned/pulsar-2.7.3",tags:[],version:"current",frontMatter:{id:"pulsar-2.7.3",title:"Apache Pulsar 2.7.3",sidebar_label:"Apache Pulsar 2.7.3"}},s={},u=[{value:"metrics",id:"metrics",level:2},{value:"tieredstorage",id:"tieredstorage",level:2},{value:"topic-policy",id:"topic-policy",level:2},{value:"broker",id:"broker",level:2},{value:"tool",id:"tool",level:2},{value:"proxy",id:"proxy",level:2},{value:"connector",id:"connector",level:2},{value:"connect",id:"connect",level:2},{value:"function",id:"function",level:2},{value:"test",id:"test",level:2}],h={toc:u};function m(e){var t=e.components,r=(0,n.Z)(e,o);return(0,p.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"metrics"},"metrics"),(0,p.kt)("p",null,"Fix missing replicator metrics ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11264"},"#11264"),"  "),(0,p.kt)("h2",{id:"tieredstorage"},"tieredstorage"),(0,p.kt)("p",null,"Remove unused listener to reduce creating executor pool ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11215"},"#11215"),"  "),(0,p.kt)("h2",{id:"topic-policy"},"topic-policy"),(0,p.kt)("p",null,"fix replay topic policy message not work ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11136"},"#11136"),(0,p.kt)("br",{parentName:"p"}),"\n","Fix race condition of the SystemTopicBasedTopicPoliciesService ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11097"},"#11097"),(0,p.kt)("br",{parentName:"p"}),"\n","Fix potential data lost on the system topic when topic compaction have not triggered yet ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11003"},"#11003"),"  "),(0,p.kt)("h2",{id:"broker"},"broker"),(0,p.kt)("p",null,"[Ledger]"," Fix ledger rollover scheduled task ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11116"},"#11116"),(0,p.kt)("br",{parentName:"p"}),"\n","[broker]"," Fix issue where Key_Shared consumers could get stuck ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/10920"},"#10920"),(0,p.kt)("br",{parentName:"p"}),"\n","[pulsar-broker]"," Handle multiple topic creation for same topic-name in broker ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/10847"},"#10847"),(0,p.kt)("br",{parentName:"p"}),"\n","[broker]"," Fix issue that message ordering could be broken when redelivering messages on Key_Shared subscription ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/10762"},"#10762"),(0,p.kt)("br",{parentName:"p"}),"\n","[broker]"," Fix issue where StackOverflowError occurs when trying to redeliver a large number of already acked messages ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/10696"},"#10696"),(0,p.kt)("br",{parentName:"p"}),"\n","[Performance]"," Use single instance of parser ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/10664"},"#10664"),(0,p.kt)("br",{parentName:"p"}),"\n","[pulsar-broker]"," Fix: Topic loading fails without any error when replicator init fails ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/10432"},"#10432"),(0,p.kt)("br",{parentName:"p"}),"\n","Fix the inconsistency of AdvertisedAddress ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/10312"},"#10312"),"  "),(0,p.kt)("h2",{id:"tool"},"tool"),(0,p.kt)("p",null,"Print message metadata when getting message by id ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11092"},"#11092"),"  "),(0,p.kt)("h2",{id:"proxy"},"proxy"),(0,p.kt)("p",null,"Upgrade Jetty to 9.4.42.v20210604 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/10907"},"#10907"),(0,p.kt)("br",{parentName:"p"}),"\n","[Issue 7903][proxy]","Enable AutoTopicCreationType partitioned through proxy ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8048"},"#8048"),"  "),(0,p.kt)("h2",{id:"connector"},"connector"),(0,p.kt)("p",null,"[Kinesis]"," Fix kinesis sink connector does not ack messages ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/10769"},"#10769"),"  "),(0,p.kt)("h2",{id:"connect"},"connect"),(0,p.kt)("p",null,"Fix kinesis sink backoff class not found ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/10744"},"#10744"),"  "),(0,p.kt)("h2",{id:"function"},"function"),(0,p.kt)("p",null,"[Functions]"," Process async results in the same Java runnable thread ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/10618"},"#10618"),(0,p.kt)("br",{parentName:"p"}),"\n","K8s Function Name Length Check Allows Invalid StatefulSet  ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/10531"},"#10531"),(0,p.kt)("br",{parentName:"p"}),"\n","[broker]"," change getWorkerService method to throw UnsupportedOperationException ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9738"},"#9738"),"  "),(0,p.kt)("h2",{id:"test"},"test"),(0,p.kt)("p",null,"Added more unit tests to the JavaInstanceTest class ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/10369"},"#10369")))}m.isMDXComponent=!0}}]);