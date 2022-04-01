"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[7981],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=u(a),m=l,g=h["".concat(o,".").concat(m)]||h[m]||s[m]||n;return a?r.createElement(g,i(i({ref:t},c),{},{components:a})):r.createElement(g,i({ref:t},c))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var u=2;u<n;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},41191:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var r=a(87462),l=a(63366),n=(a(67294),a(3905)),i=["components"],p={id:"pulsar-client-go-0.2.0",title:"Pulsar Client Go",sidebar_label:"Pulsar Client Go"},o=void 0,u={unversionedId:"versioned/pulsar-client-go-0.2.0",id:"versioned/pulsar-client-go-0.2.0",title:"Pulsar Client Go",description:"Feature",source:"@site/release-notes/versioned/pulsar-client-go-0.2.0.md",sourceDirName:"versioned",slug:"/versioned/pulsar-client-go-0.2.0",permalink:"/ja/release-notes/versioned/pulsar-client-go-0.2.0",tags:[],version:"current",frontMatter:{id:"pulsar-client-go-0.2.0",title:"Pulsar Client Go",sidebar_label:"Pulsar Client Go"}},c={},s=[{value:"Feature",id:"feature",level:2},{value:"Improve",id:"improve",level:2}],h={toc:s};function m(e){var t=e.components,a=(0,l.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"feature"},"Feature"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Expose BatchingMaxSize from ProducerOptions, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/280"},"PR-280"),"."),(0,n.kt)("li",{parentName:"ul"},"Allow applications to configure the compression level, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/290"},"PR-290"),"."),(0,n.kt)("li",{parentName:"ul"},"Support producer name for Message, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/299"},"PR-299"),"."),(0,n.kt)("li",{parentName:"ul"},"Support oauth2 authentication for pulsar-client-go, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/313"},"PR-313"),"."),(0,n.kt)("li",{parentName:"ul"},"Add interceptor feature for Go client, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/314"},"PR-314"),"."),(0,n.kt)("li",{parentName:"ul"},"Export client metrics to Prometheus, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/317"},"PR-317"),"."),(0,n.kt)("li",{parentName:"ul"},"Add Name method to Consumer interface, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/321"},"PR-321"),"."),(0,n.kt)("li",{parentName:"ul"},"Add oauth2 to the provider, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/338"},"PR-338"),"."),(0,n.kt)("li",{parentName:"ul"},"Support specified the oauth2 private key with prefix ",(0,n.kt)("inlineCode",{parentName:"li"},"file://")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"data://"),", see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/343"},"PR-343"),"."),(0,n.kt)("li",{parentName:"ul"},"Fix the keyfile unmarshal error, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/339"},"PR-339"),"."),(0,n.kt)("li",{parentName:"ul"},"Add a new method to create auth provider from tls cert supplier, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/347"},"PR-347"),"."),(0,n.kt)("li",{parentName:"ul"},"Add seek logic for reader, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/356"},"PR-356"),".")),(0,n.kt)("h2",{id:"improve"},"Improve"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use .asf.yaml to configure github repo, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/216"},"PR-216"),"."),(0,n.kt)("li",{parentName:"ul"},"Auto update the client to handle changes in number of partitions, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/221"},"PR-221"),"."),(0,n.kt)("li",{parentName:"ul"},"Clean callbacks of connection after run loop stopped, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/248"},"PR-248"),"."),(0,n.kt)("li",{parentName:"ul"},"Fix unable to close consumer after unsubscribe in Shared Subscription, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/283"},"PR-283"),"."),(0,n.kt)("li",{parentName:"ul"},"Introduced lifecycle for compression providers, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/284"},"PR-284"),"."),(0,n.kt)("li",{parentName:"ul"},"Use maxPendingMessages for sizing producer eventsChan, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/285"},"PR-285"),"."),(0,n.kt)("li",{parentName:"ul"},"Avoid contention on producer mutex on critical path, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/286"},"PR-286"),"."),(0,n.kt)("li",{parentName:"ul"},"Switched to DataDog zstd wrapper, reusing the compression ctx, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/287"},"PR-287"),"."),(0,n.kt)("li",{parentName:"ul"},"Fix panic when creating consumer with ReceiverQueueSize set to -1, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/289"},"PR-289"),"."),(0,n.kt)("li",{parentName:"ul"},"Used pooled buffering for compression and batch serialization, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/292"},"PR-292"),"."),(0,n.kt)("li",{parentName:"ul"},"Use gogofast to have in-place protobuf serialization, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/294"},"PR-294"),"."),(0,n.kt)("li",{parentName:"ul"},"Added semaphore implementation with lower contention, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/298"},"PR-298"),"."),(0,n.kt)("li",{parentName:"ul"},"Fixed pooled buffer lifecycle, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/300"},"PR-300"),"."),(0,n.kt)("li",{parentName:"ul"},"Removed blocking queue iterator, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/301"},"PR-301"),"."),(0,n.kt)("li",{parentName:"ul"},"Fix panic in CreateReader API using custom MessageID for ReaderOptions, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/305"},"PR-305"),"."),(0,n.kt)("li",{parentName:"ul"},"Change connection failed warn log to error and print error message, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/309"},"PR-309"),"."),(0,n.kt)("li",{parentName:"ul"},"Share buffer pool across all partitions, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/310"},"PR-310"),"."),(0,n.kt)("li",{parentName:"ul"},"Add rerun feature test command to repo, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/311"},"PR-311"),"."),(0,n.kt)("li",{parentName:"ul"},"Fix CompressMaxSize() for ZLib provider, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/312"},"PR-312"),"."),(0,n.kt)("li",{parentName:"ul"},"Reduce the size of the MessageID structs by one word on 64-bit arch, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/316"},"PR-316"),"."),(0,n.kt)("li",{parentName:"ul"},"Do not allocate MessageIDs on the heap, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/319"},"PR-319"),"."),(0,n.kt)("li",{parentName:"ul"},"Different MessageID implementations for message Production and Consumption, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/324"},"PR-324"),"."),(0,n.kt)("li",{parentName:"ul"},"Fix producer block when the producer with the same id, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/326"},"PR-326"),"."),(0,n.kt)("li",{parentName:"ul"},"Get the last message when LatestMessageID and inclusive, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/329"},"PR-329"),"."),(0,n.kt)("li",{parentName:"ul"},"Fix go.mod issue with invalid version, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/330"},"PR-330"),"."),(0,n.kt)("li",{parentName:"ul"},"Fix producer goroutine leak, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/331"},"PR-331"),"."),(0,n.kt)("li",{parentName:"ul"},"Fix producer state by reconnecting when receiving unexpected receipts, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/336"},"PR-336"),"."),(0,n.kt)("li",{parentName:"ul"},"Avoid producer deadlock on connection closing, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/337"},"PR-337"),".")))}m.isMDXComponent=!0}}]);