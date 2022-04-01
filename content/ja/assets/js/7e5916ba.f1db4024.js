"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[5161],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var a=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,p=function(e,t){if(null==e)return{};var r,a,p={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,p=e.mdxType,n=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),h=u(r),m=p,d=h["".concat(i,".").concat(m)]||h[m]||c[m]||n;return r?a.createElement(d,l(l({ref:t},s),{},{components:r})):a.createElement(d,l({ref:t},s))}));function m(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var n=r.length,l=new Array(n);l[0]=h;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:p,l[1]=o;for(var u=2;u<n;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},29362:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var a=r(87462),p=r(63366),n=(r(67294),r(3905)),l=["components"],o={id:"pulsar-2.7.2",title:"Apache Pulsar 2.7.2",sidebar_label:"Apache Pulsar 2.7.2"},i=void 0,u={unversionedId:"versioned/pulsar-2.7.2",id:"versioned/pulsar-2.7.2",title:"Apache Pulsar 2.7.2",description:"schemaregistry",source:"@site/release-notes/versioned/pulsar-2.7.2.md",sourceDirName:"versioned",slug:"/versioned/pulsar-2.7.2",permalink:"/ja/release-notes/versioned/pulsar-2.7.2",tags:[],version:"current",frontMatter:{id:"pulsar-2.7.2",title:"Apache Pulsar 2.7.2",sidebar_label:"Apache Pulsar 2.7.2"}},s={},c=[{value:"schemaregistry",id:"schemaregistry",level:2},{value:"build",id:"build",level:2},{value:"security",id:"security",level:2},{value:"broker",id:"broker",level:2},{value:"storage",id:"storage",level:2},{value:"function",id:"function",level:2},{value:"deploy",id:"deploy",level:2},{value:"admin",id:"admin",level:2},{value:"connector",id:"connector",level:2},{value:"sql",id:"sql",level:2},{value:"tieredstorage",id:"tieredstorage",level:2}],h={toc:c};function m(e){var t=e.components,r=(0,p.Z)(e,l);return(0,n.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"schemaregistry"},"schemaregistry"),(0,n.kt)("p",null,"Fix primitive schema upload for ALWAYS_COMPATIBLE strategy. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/10386"},"#10386"),(0,n.kt)("br",{parentName:"p"}),"\n","Fix schema ledger deletion when deleting topic with delete schema. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/10383"},"#10383"),(0,n.kt)("br",{parentName:"p"}),"\n","Fix error OutOfMemoryError while using KeyValue<GenericRecord, GenericRecord> ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9981"},"#9981"),(0,n.kt)("br",{parentName:"p"}),"\n","Fix schema not added when subscribe an empty topic without schema ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9853"},"#9853"),(0,n.kt)("br",{parentName:"p"}),"\n","[Issue 9602]"," Add schema type validation ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9797"},"#9797"),"  "),(0,n.kt)("h2",{id:"build"},"build"),(0,n.kt)("p",null,"fix docker standalone image error ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/10359"},"#10359"),(0,n.kt)("br",{parentName:"p"}),"\n","Fix possible name mismatch bugs when build wheel files within docker ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/10051"},"#10051"),(0,n.kt)("br",{parentName:"p"}),"\n","Pass envirnoment variables to the docker container when building whee\u2026 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/10043"},"#10043"),(0,n.kt)("br",{parentName:"p"}),"\n","[Build]"," Python-client build script use wrong path for root dir ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9961"},"#9961"),(0,n.kt)("br",{parentName:"p"}),"\n","[Build]"," RPM build script use wrong path for root dir ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9890"},"#9890"),(0,n.kt)("br",{parentName:"p"}),"\n","Allow DockerImage to be built from source tarball ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9846"},"#9846"),"  "),(0,n.kt)("h2",{id:"security"},"security"),(0,n.kt)("p",null,"[Security]"," Upgrade commons-io to address CVE-2021-29425 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/10287"},"#10287"),(0,n.kt)("br",{parentName:"p"}),"\n","Upgrade Jetty libraries to 9.4.39.v20210325 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/10177"},"#10177"),(0,n.kt)("br",{parentName:"p"}),"\n","Upgrade Netty version to 4.1.60.final ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/10073"},"#10073"),(0,n.kt)("br",{parentName:"p"}),"\n","Upgrade Bouncy Castle to 1.68 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9199"},"#9199"),"  "),(0,n.kt)("h2",{id:"broker"},"broker"),(0,n.kt)("p",null,"[Broker]",' Suppress printing of "skip Processing" lines in startup scripts ',(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/10275"},"#10275"),(0,n.kt)("br",{parentName:"p"}),"\n","[broker]"," Continue graceful shutdown even if web service closing fails ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9835"},"#9835"),(0,n.kt)("br",{parentName:"p"}),"\n","Add NPE check for PulsarService#getAdminClient ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9782"},"#9782"),"  "),(0,n.kt)("h2",{id:"storage"},"storage"),(0,n.kt)("p",null,"[Cursor]"," add return statement to exit asyncMarkDelete early on failure ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/10272"},"#10272"),(0,n.kt)("br",{parentName:"p"}),"\n","[BUG]","fix zkBookieRackAffinityMapping bug to support for bookkeeper dnsResolver  ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9894"},"#9894"),"  "),(0,n.kt)("h2",{id:"function"},"function"),(0,n.kt)("p",null,"[ISSUE 10153]","fix time unit ns -> ms ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/10160"},"#10160"),"  "),(0,n.kt)("h2",{id:"deploy"},"deploy"),(0,n.kt)("p",null,"[Issue 10058]",":apply-config-from-env.py to commented default values ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/10060"},"#10060"),(0,n.kt)("br",{parentName:"p"}),"\n","[Bookie]"," Fallback to PULSAR_GC if BOOKIE_GC is not defined ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9621"},"#9621"),"  "),(0,n.kt)("h2",{id:"admin"},"admin"),(0,n.kt)("p",null,"Add underReplicate state in the topic internal stats ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/10013"},"#10013"),"  "),(0,n.kt)("h2",{id:"connector"},"connector"),(0,n.kt)("p",null,"[Issue-9926][Pulsar Functions]"," Pass through record properties from Pulsar Sources ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9943"},"#9943"),"  "),(0,n.kt)("h2",{id:"sql"},"sql"),(0,n.kt)("p",null,"[Pulsar-sql]","Using pulsar SQL query messages will appear `NoSuchLedger\u2026 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9910"},"#9910"),"  "),(0,n.kt)("h2",{id:"tieredstorage"},"tieredstorage"),(0,n.kt)("p",null,"[Tiered Storage]"," Prevent Class Loader Leak; Restore Offloader Directory Override ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9878"},"#9878"),(0,n.kt)("br",{parentName:"p"}),"\n","[Tiered Storage]"," Add logs for cleanup offloaded data operation ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9852"},"#9852")))}m.isMDXComponent=!0}}]);