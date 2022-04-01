"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[1114],{3905:function(e,t,a){a.d(t,{Zo:function(){return i},kt:function(){return m}});var r=a(67294);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,p=function(e,t){if(null==e)return{};var a,r,p={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,p=e.mdxType,n=e.originalType,u=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),h=s(a),m=p,d=h["".concat(u,".").concat(m)]||h[m]||c[m]||n;return a?r.createElement(d,l(l({ref:t},i),{},{components:a})):r.createElement(d,l({ref:t},i))}));function m(e,t){var a=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var n=a.length,l=new Array(n);l[0]=h;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:p,l[1]=o;for(var s=2;s<n;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},84751:function(e,t,a){a.r(t),a.d(t,{assets:function(){return i},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var r=a(87462),p=a(63366),n=(a(67294),a(3905)),l=["components"],o={id:"pulsar-2.6.2",title:"Apache Pulsar 2.6.2",sidebar_label:"Apache Pulsar 2.6.2"},u=void 0,s={unversionedId:"versioned/pulsar-2.6.2",id:"versioned/pulsar-2.6.2",title:"Apache Pulsar 2.6.2",description:"security",source:"@site/release-notes/versioned/pulsar-2.6.2.md",sourceDirName:"versioned",slug:"/versioned/pulsar-2.6.2",permalink:"/zh-CN/release-notes/versioned/pulsar-2.6.2",tags:[],version:"current",frontMatter:{id:"pulsar-2.6.2",title:"Apache Pulsar 2.6.2",sidebar_label:"Apache Pulsar 2.6.2"}},i={},c=[{value:"security",id:"security",level:2},{value:"broker",id:"broker",level:2},{value:"k8s",id:"k8s",level:2},{value:"key-shared",id:"key-shared",level:2},{value:"bookkeeper",id:"bookkeeper",level:2},{value:"function",id:"function",level:2},{value:"build",id:"build",level:2},{value:"go",id:"go",level:2},{value:"connector",id:"connector",level:2},{value:"cli",id:"cli",level:2},{value:"deploy",id:"deploy",level:2},{value:"dashboard",id:"dashboard",level:2},{value:"admin",id:"admin",level:2},{value:"schemaregistry",id:"schemaregistry",level:2},{value:"config",id:"config",level:2},{value:"sql",id:"sql",level:2},{value:"metrics",id:"metrics",level:2},{value:"proxy",id:"proxy",level:2},{value:"topic-policy",id:"topic-policy",level:2},{value:"tieredstorage",id:"tieredstorage",level:2}],h={toc:c};function m(e){var t=e.components,a=(0,p.Z)(e,l);return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"security"},"security"),(0,n.kt)("p",null,"[docs]"," Add config info in security jwt ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8482"},"#8482"),(0,n.kt)("br",{parentName:"p"}),"\n","Upgrade jetty to 9.4.33.v20201020 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8413"},"#8413"),(0,n.kt)("br",{parentName:"p"}),"\n","Upgrade solr version to 8.6.3 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8328"},"#8328"),(0,n.kt)("br",{parentName:"p"}),"\n","Upgrade jetty-util version to 9.4.31 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8035"},"#8035"),(0,n.kt)("br",{parentName:"p"}),"\n","Fix the null exception when starting the proxy service ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8019"},"#8019"),(0,n.kt)("br",{parentName:"p"}),"\n","The token endpoint should get from the well-known configuration ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8006"},"#8006"),(0,n.kt)("br",{parentName:"p"}),"\n","Exclude vertx from bookkeeper-http package ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7997"},"#7997"),(0,n.kt)("br",{parentName:"p"}),"\n","Fix the wrong issuer url concatenate ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7980"},"#7980"),"  "),(0,n.kt)("h2",{id:"broker"},"broker"),(0,n.kt)("p",null,"[pulsar-broker]","Fix zk cache expiration check ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8458"},"#8458"),(0,n.kt)("br",{parentName:"p"}),"\n","[broker]"," Fix deadlock that occurred during topic ownership check ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8406"},"#8406"),(0,n.kt)("br",{parentName:"p"}),"\n","[pulsar-broker]"," Refresh ZooKeeper-data cache in background to avoid d\u2026 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8304"},"#8304"),(0,n.kt)("br",{parentName:"p"}),"\n","[broker]"," Add command to delete a cluster's metadata from ZK ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8169"},"#8169"),(0,n.kt)("br",{parentName:"p"}),"\n","[broker]"," Fix error code returned to client when service unit is not ready ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8147"},"#8147"),(0,n.kt)("br",{parentName:"p"}),"\n","[pulsar-broker]"," Support Disable Replicated Subscriptions ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8144"},"#8144"),(0,n.kt)("br",{parentName:"p"}),"\n","Always use SNI for TLS enabled Pulsar Java broker client. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8117"},"#8117"),(0,n.kt)("br",{parentName:"p"}),"\n","[broker]"," Add replicated check to checkInactiveSubscriptions. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8066"},"#8066"),(0,n.kt)("br",{parentName:"p"}),"\n","[pulsar-broker]"," add configuration to set number of channels per bookie ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7910"},"#7910"),(0,n.kt)("br",{parentName:"p"}),"\n","[Issue 7554][broker]"," Split message ranges by ledger ID and store them in individualDeletedMessages ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7861"},"#7861"),(0,n.kt)("br",{parentName:"p"}),"\n","[broker]"," Fix deadlock when adding consumer ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7841"},"#7841"),(0,n.kt)("br",{parentName:"p"}),"\n","Redirect Get message by id request when broker not serve for the topic ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7786"},"#7786"),(0,n.kt)("br",{parentName:"p"}),"\n","[Issue 7517][pulsar-broker]"," Reestablish namespace bundle ownership from false negative releasing and false positive acquiring ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7773"},"#7773"),(0,n.kt)("br",{parentName:"p"}),"\n","[broker]"," Make resetting cursor in REST API asynchronous ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7744"},"#7744"),(0,n.kt)("br",{parentName:"p"}),"\n","[broker]"," Fix bug where producer for geo-replication is not closed when topic is unloaded ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7735"},"#7735"),(0,n.kt)("br",{parentName:"p"}),"\n","[pulsar-broker]"," Stop to dispatch when skip message temporally since Key_Shared consumer stuck on delivery ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7553"},"#7553"),(0,n.kt)("br",{parentName:"p"}),"\n","Check for null arguments in Namespaces Rest API ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7247"},"#7247"),"  "),(0,n.kt)("h2",{id:"k8s"},"k8s"),(0,n.kt)("p",null,"[docs]"," Update helm deploy content ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8404"},"#8404"),(0,n.kt)("br",{parentName:"p"}),"\n","[docs]"," Sync K8S Helm content from 2.6.0 docs into 2.6.1 and 2.6.2 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8398"},"#8398"),"  "),(0,n.kt)("h2",{id:"key-shared"},"key-shared"),(0,n.kt)("p",null,"Fix typo in PersistentStickyKeyDispatcherMultipleConsumers.java ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8389"},"#8389"),(0,n.kt)("br",{parentName:"p"}),"\n","Fix message TTL on Key_Shared subscription and Fix ordering issue when replay messages. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8292"},"#8292"),"  "),(0,n.kt)("h2",{id:"bookkeeper"},"bookkeeper"),(0,n.kt)("p",null,"[Issue 8364][docs]"," Update decommission content in different releases ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8368"},"#8368"),"  "),(0,n.kt)("h2",{id:"function"},"function"),(0,n.kt)("p",null,"Update docs for Java Functions develop ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8350"},"#8350"),(0,n.kt)("br",{parentName:"p"}),"\n","#7994 Missed dryRun on maintenance of secrets. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8286"},"#8286"),(0,n.kt)("br",{parentName:"p"}),"\n","Allow disabling forwarding source message properties ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8158"},"#8158"),(0,n.kt)("br",{parentName:"p"}),"\n","Set dryrun of KubernetesRuntime is null ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8064"},"#8064"),(0,n.kt)("br",{parentName:"p"}),"\n","[Security]"," Upgrade the snakeyaml verion to 1.26 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7994"},"#7994"),(0,n.kt)("br",{parentName:"p"}),"\n","[Issue 7742][functions]"," Allow kubernetes runtime to customize function instance class path ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7844"},"#7844"),(0,n.kt)("br",{parentName:"p"}),"\n","Fix functions-worker typos ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7746"},"#7746"),(0,n.kt)("br",{parentName:"p"}),"\n","[Issue 5520][Function Doc]"," Add window function context docs for repo ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7741"},"#7741"),(0,n.kt)("br",{parentName:"p"}),"\n","Have metadata tailer use its own thread for processing ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7211"},"#7211"),(0,n.kt)("br",{parentName:"p"}),"\n","During Function update, cleanup should only happen for temp files that were generated ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7201"},"#7201"),"  "),(0,n.kt)("h2",{id:"build"},"build"),(0,n.kt)("p",null,"Fix branch-2.6 build issue ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8330"},"#8330"),(0,n.kt)("br",{parentName:"p"}),"\n","[python]"," Made the script for building Docker images for Python work ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8153"},"#8153"),(0,n.kt)("br",{parentName:"p"}),"\n","[build]"," Add python-dev to pulsar docker image ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7857"},"#7857"),(0,n.kt)("br",{parentName:"p"}),"\n","Update Jersey to 2.31 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7515"},"#7515"),(0,n.kt)("br",{parentName:"p"}),"\n","[Issue 5736]"," Add test checks in branches ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7465"},"#7465"),(0,n.kt)("br",{parentName:"p"}),"\n","Protobuf-shaded package can not update version ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7228"},"#7228"),"  "),(0,n.kt)("h2",{id:"go"},"go"),(0,n.kt)("p",null,"[Issue 8311][pulsar-client-go]"," Fix memory leak in cgo golang client ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8325"},"#8325"),(0,n.kt)("br",{parentName:"p"}),"\n","[go]"," Fix argument type of pulsarProducerSendCallbackProxy ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8186"},"#8186"),"  "),(0,n.kt)("h2",{id:"connector"},"connector"),(0,n.kt)("p",null,"Upgrade hdfs2 version to 2.8.5 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8319"},"#8319"),(0,n.kt)("br",{parentName:"p"}),"\n","SinkRecord adds an overridden method ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8038"},"#8038"),"  "),(0,n.kt)("h2",{id:"cli"},"cli"),(0,n.kt)("p",null,"Delete associated ledgers before deleting cluster metadata ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8244"},"#8244"),(0,n.kt)("br",{parentName:"p"}),"\n","[pulsar-admin-tools]"," Support delete all data associated with a cluster ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8133"},"#8133"),"  "),(0,n.kt)("h2",{id:"deploy"},"deploy"),(0,n.kt)("p",null,"Close ZK connections at end of metadata setup ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8228"},"#8228"),(0,n.kt)("br",{parentName:"p"}),"\n","update aws deployment for 2.6.0 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7668"},"#7668"),"  "),(0,n.kt)("h2",{id:"dashboard"},"dashboard"),(0,n.kt)("p",null,"Issue 8187 pulsar-dashboard django migration fix ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8188"},"#8188"),"  "),(0,n.kt)("h2",{id:"admin"},"admin"),(0,n.kt)("p",null,"fix peek messages failed with subscriptionName not exist ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8182"},"#8182"),(0,n.kt)("br",{parentName:"p"}),"\n","[pulsar-admin]"," Support delete schema ledgers when delete topics ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8167"},"#8167"),(0,n.kt)("br",{parentName:"p"}),"\n","[pulsar-admin-tool]"," add cli command to get last message Id ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8082"},"#8082"),(0,n.kt)("br",{parentName:"p"}),"\n","[pulsar-broker]"," Add get-last-message-id admin for v1 api ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8081"},"#8081"),"  "),(0,n.kt)("h2",{id:"schemaregistry"},"schemaregistry"),(0,n.kt)("p",null,"fix possible NPE ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8172"},"#8172"),(0,n.kt)("br",{parentName:"p"}),"\n","fix json deserialize byte to string bug ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8140"},"#8140"),"  "),(0,n.kt)("h2",{id:"config"},"config"),(0,n.kt)("p",null,"remove sensitive client configuration info from log ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8110"},"#8110"),(0,n.kt)("br",{parentName:"p"}),"\n","make zk cache executor thread pool size configurable ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7794"},"#7794"),(0,n.kt)("br",{parentName:"p"}),"\n","[pulsar-server]"," minor: fix typo in service-config ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7248"},"#7248"),"  "),(0,n.kt)("h2",{id:"sql"},"sql"),(0,n.kt)("p",null,"Replace com.ning.asynchttpclient with org.asynchttpclient ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8099"},"#8099"),(0,n.kt)("br",{parentName:"p"}),"\n","[Pulsar SQL]"," Fix Pulsar SQL CI test ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7898"},"#7898"),(0,n.kt)("br",{parentName:"p"}),"\n","Upgrade Presto version to 332 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7194"},"#7194"),"  "),(0,n.kt)("h2",{id:"metrics"},"metrics"),(0,n.kt)("p",null,"fix pulsar metrics providing wrong information ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7905"},"#7905"),"  "),(0,n.kt)("h2",{id:"proxy"},"proxy"),(0,n.kt)("p",null,"[pulsar-proxy]"," Handle NPE while updating proxy stats ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7766"},"#7766"),(0,n.kt)("br",{parentName:"p"}),"\n","[proxy]"," Fix deadlock in pulsar proxy ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7690"},"#7690"),(0,n.kt)("br",{parentName:"p"}),"\n","Add advertisedAddress config field to ProxyConfiguration ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7542"},"#7542"),"  "),(0,n.kt)("h2",{id:"topic-policy"},"topic-policy"),(0,n.kt)("p",null,"[Issue 2689]"," Support set backlog quota on topic level. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7646"},"#7646"),"  "),(0,n.kt)("h2",{id:"tieredstorage"},"tieredstorage"),(0,n.kt)("p",null,"Refactored JCloud Tiered Storage ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6335"},"#6335")))}m.isMDXComponent=!0}}]);