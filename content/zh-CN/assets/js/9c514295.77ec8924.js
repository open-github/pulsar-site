"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[5828],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(67294);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,p=function(e,t){if(null==e)return{};var a,r,p={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,p=e.mdxType,n=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=s(a),m=p,d=h["".concat(i,".").concat(m)]||h[m]||c[m]||n;return a?r.createElement(d,l(l({ref:t},u),{},{components:a})):r.createElement(d,l({ref:t},u))}));function m(e,t){var a=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var n=a.length,l=new Array(n);l[0]=h;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:p,l[1]=o;for(var s=2;s<n;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},41083:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var r=a(87462),p=a(63366),n=(a(67294),a(3905)),l=["components"],o={id:"pulsar-2.9.0",title:"Apache Pulsar 2.9.0",sidebar_label:"Apache Pulsar 2.9.0"},i=void 0,s={unversionedId:"versioned/pulsar-2.9.0",id:"versioned/pulsar-2.9.0",title:"Apache Pulsar 2.9.0",description:"schema",source:"@site/release-notes/versioned/pulsar-2.9.0.md",sourceDirName:"versioned",slug:"/versioned/pulsar-2.9.0",permalink:"/zh-CN/release-notes/versioned/pulsar-2.9.0",tags:[],version:"current",frontMatter:{id:"pulsar-2.9.0",title:"Apache Pulsar 2.9.0",sidebar_label:"Apache Pulsar 2.9.0"}},u={},c=[{value:"schema",id:"schema",level:2},{value:"transaction",id:"transaction",level:2},{value:"broker",id:"broker",level:2},{value:"proxy",id:"proxy",level:2},{value:"function",id:"function",level:2},{value:"compaction",id:"compaction",level:2},{value:"security",id:"security",level:2},{value:"key-shared",id:"key-shared",level:2},{value:"test",id:"test",level:2},{value:"cli",id:"cli",level:2},{value:"connect",id:"connect",level:2},{value:"zookeeper",id:"zookeeper",level:2},{value:"tool",id:"tool",level:2},{value:"topic-policy",id:"topic-policy",level:2},{value:"build",id:"build",level:2},{value:"dependency",id:"dependency",level:2},{value:"admin",id:"admin",level:2},{value:"stats",id:"stats",level:2}],h={toc:c};function m(e){var t=e.components,a=(0,p.Z)(e,l);return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"schema"},"schema"),(0,n.kt)("p",null,"[Schema]"," Fix pulsar use json or avro primitive schema. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12886"},"#12886"),"  "),(0,n.kt)("h2",{id:"transaction"},"transaction"),(0,n.kt)("p",null,"[Transaction]"," Fix transaction system topic create in loop. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12749"},"#12749"),(0,n.kt)("br",{parentName:"p"}),"\n","[Transaction]"," add method to clear up transaction buffer snapshot ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11934"},"#11934"),"  "),(0,n.kt)("h2",{id:"broker"},"broker"),(0,n.kt)("p",null,"[#12423]"," allow ",(0,n.kt)("inlineCode",{parentName:"p"},"GetTopicsOfNamespace")," op with ",(0,n.kt)("inlineCode",{parentName:"p"},"consume")," permission ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12600"},"#12600"),(0,n.kt)("br",{parentName:"p"}),"\n","Allow to configure schema compatibility policy for system topics ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12598"},"#12598"),(0,n.kt)("br",{parentName:"p"}),"\n","[pulsar-broker]"," Cleanup already deleted namespace topics. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12597"},"#12597"),(0,n.kt)("br",{parentName:"p"}),"\n","Disable stats recorder for built-in PulsarClient ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12217"},"#12217"),(0,n.kt)("br",{parentName:"p"}),"\n","[pulsar-broker]"," support remove-ttl api for V1 namespace ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12121"},"#12121"),(0,n.kt)("br",{parentName:"p"}),"\n","[pulsar-broker]"," Broker auto refresh bk-client certs to avoid cnx failure after cert refresh ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12107"},"#12107"),(0,n.kt)("br",{parentName:"p"}),"\n","Optimize the memory usage of Cache Eviction ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12045"},"#12045"),(0,n.kt)("br",{parentName:"p"}),"\n","Avoid adding duplicated BrokerEntryMetadata ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12018"},"#12018"),(0,n.kt)("br",{parentName:"p"}),"\n","[PIP-82][pulsar-broker]"," Misc fixes: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11918"},"#11918"),(0,n.kt)("br",{parentName:"p"}),"\n","[Broker]"," Refine topic level backlog quota policies warning log ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11863"},"#11863"),"  "),(0,n.kt)("h2",{id:"proxy"},"proxy"),(0,n.kt)("p",null,"Fix the batch message ack for WebSocket proxy. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12530"},"#12530"),(0,n.kt)("br",{parentName:"p"}),"\n","PIP-99 - Pulsar Proxy Estensions ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11838"},"#11838"),"  "),(0,n.kt)("h2",{id:"function"},"function"),(0,n.kt)("p",null,"Allow Pulsar Functions localrun to exit on error ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12278"},"#12278"),(0,n.kt)("br",{parentName:"p"}),"\n","Support for draining workers ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12178"},"#12178"),(0,n.kt)("br",{parentName:"p"}),"\n","[pulsar-functions-go]"," support set subscription position ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11990"},"#11990"),(0,n.kt)("br",{parentName:"p"}),"\n","[function]"," enable protobuf-native schema support for function ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11868"},"#11868"),(0,n.kt)("br",{parentName:"p"}),"\n","[pulsar-functions-go]"," sync to the latest function proto ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11853"},"#11853"),(0,n.kt)("br",{parentName:"p"}),"\n","[pulsar-functions]"," Pass ",(0,n.kt)("inlineCode",{parentName:"p"},"SubscriptionPosition")," from ",(0,n.kt)("inlineCode",{parentName:"p"},"FunctionDetails")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"FunctionConfig")," / ",(0,n.kt)("inlineCode",{parentName:"p"},"SinkConfig")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11831"},"#11831"),"  "),(0,n.kt)("h2",{id:"compaction"},"compaction"),(0,n.kt)("p",null,"Fix incorrect returned last message ID while the ",(0,n.kt)("inlineCode",{parentName:"p"},"lastConfirmedEntry")," with negative entry ID ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12277"},"#12277"),(0,n.kt)("br",{parentName:"p"}),"\n","Fix typo of the returned last message ID when the last message ID is from compacted ledger ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12237"},"#12237"),(0,n.kt)("br",{parentName:"p"}),"\n","Return the last position of the compacted data while the original data been deleted ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12161"},"#12161"),"  "),(0,n.kt)("h2",{id:"security"},"security"),(0,n.kt)("p",null,"[security]"," Upgrade netty to 4.1.68.Final ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12218"},"#12218"),(0,n.kt)("br",{parentName:"p"}),"\n","Forbid to read other topic's data in managedLedger layer ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11912"},"#11912"),"  "),(0,n.kt)("h2",{id:"key-shared"},"key-shared"),(0,n.kt)("p",null,"Fix returned wrong hash ranges for the consumer with same consumer name ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12212"},"#12212"),"  "),(0,n.kt)("h2",{id:"test"},"test"),(0,n.kt)("p",null,"[unit test]"," use correct line separator instead of \\n ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12143"},"#12143"),(0,n.kt)("br",{parentName:"p"}),"\n","Force Python CI to use earlier version of Protobuf which supports Python2 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12058"},"#12058"),(0,n.kt)("br",{parentName:"p"}),"\n","[Test]"," Fix managed cursor metrics test ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11879"},"#11879"),"  "),(0,n.kt)("h2",{id:"cli"},"cli"),(0,n.kt)("p",null,"[pulsar-client]"," Make it possible to disable poolMessages ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12108"},"#12108"),(0,n.kt)("br",{parentName:"p"}),"\n","[testclient]"," Add total messages when periodic printing throughput ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12084"},"#12084"),(0,n.kt)("br",{parentName:"p"}),"\n","[cli]"," Fix issue where pulsar-client command cannot consume v2 topics through WebSocket ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12000"},"#12000"),"  "),(0,n.kt)("h2",{id:"connect"},"connect"),(0,n.kt)("p",null,"Remove the deprecated api usage in hdfs ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12080"},"#12080"),"  "),(0,n.kt)("h2",{id:"zookeeper"},"zookeeper"),(0,n.kt)("p",null,"[Zookeeper Client]"," Fix String formatting conversion in toString method ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12006"},"#12006"),"  "),(0,n.kt)("h2",{id:"tool"},"tool"),(0,n.kt)("p",null,"[testclient]"," Printing aggregated data when client exit ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11985"},"#11985"),(0,n.kt)("br",{parentName:"p"}),"\n","[standalone]"," remove noisy log on pulsar standalone startup ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11970"},"#11970"),"  "),(0,n.kt)("h2",{id:"topic-policy"},"topic-policy"),(0,n.kt)("p",null,"Fix messages in TopicPolicies will never be cleaned up ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11928"},"#11928"),"  "),(0,n.kt)("h2",{id:"build"},"build"),(0,n.kt)("p",null,"Fixed merge conflict on MetadataStoreTest ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11921"},"#11921"),(0,n.kt)("br",{parentName:"p"}),"\n","Source tarball: apply executable file permissions to shell scripts (fixes #10917)  ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11858"},"#11858"),"  "),(0,n.kt)("h2",{id:"dependency"},"dependency"),(0,n.kt)("p",null,"Upgrade Netty to 4.1.67.Final ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11875"},"#11875"),"  "),(0,n.kt)("h2",{id:"admin"},"admin"),(0,n.kt)("p",null,"[Issue 11814]"," fix pulsar admin method:getMessageById. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11852"},"#11852"),(0,n.kt)("br",{parentName:"p"}),"\n","[pulsar-admin]"," add option to get precise backlog on v1 topic ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8927"},"#8927"),"  "),(0,n.kt)("h2",{id:"stats"},"stats"),(0,n.kt)("p",null,"[stats]"," Add Key_Shared metadata to topic stats ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11839"},"#11839")))}m.isMDXComponent=!0}}]);