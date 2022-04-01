"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[7157],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},24328:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],i={id:"pulsar-cs-0.11.0",title:"Pulsar DotPulsar",sidebar_label:"Pulsar DotPulsar"},s=void 0,c={unversionedId:"versioned/pulsar-cs-0.11.0",id:"versioned/pulsar-cs-0.11.0",title:"Pulsar DotPulsar",description:"Added",source:"@site/release-notes/versioned/pulsar-cs-0.11.0.md",sourceDirName:"versioned",slug:"/versioned/pulsar-cs-0.11.0",permalink:"/zh-CN/release-notes/versioned/pulsar-cs-0.11.0",tags:[],version:"current",frontMatter:{id:"pulsar-cs-0.11.0",title:"Pulsar DotPulsar",sidebar_label:"Pulsar DotPulsar"}},u={},d=[{value:"Added",id:"added",level:2},{value:"Changed",id:"changed",level:2},{value:"Fixed",id:"fixed",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"added"},"Added"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Consumer and Reader now share the IReceive interface for receiving a single message: ValueTask\\<Message",">"," Receive(CancellationToken cancellationToken)"),(0,o.kt)("li",{parentName:"ul"},"The Consumer and Reader now share the ISeek interface for seeking on message-id and publish time"),(0,o.kt)("li",{parentName:"ul"},"The Consumer and Reader now share the IGetLastMessageId interface for getting the last message-id on a topic"),(0,o.kt)("li",{parentName:"ul"},"The Consumer, Reader, and Producer now share the IState interface adding 'OnStateChangeFrom' and 'OnStateChangeTo'"),(0,o.kt)("li",{parentName:"ul"},"The PulsarClient, Consumer, Reader, and Producer now have the read-only property 'ServiceUrl'"),(0,o.kt)("li",{parentName:"ul"},"The Consumer now have the read-only property 'SubscriptionName'"),(0,o.kt)("li",{parentName:"ul"},"All message compression types are now supported (listed below). Please read this ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-dotpulsar/wiki/Compression"},"compression how-to"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"LZ4"),(0,o.kt)("li",{parentName:"ul"},"SNAPPY"),(0,o.kt)("li",{parentName:"ul"},"ZLIB"),(0,o.kt)("li",{parentName:"ul"},"ZSTD")))),(0,o.kt)("h2",{id:"changed"},"Changed"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'MessageId.ToString() now returns a string matching that of other clients: "{LedgerId}:{EntryId}:{Partition}:{BatchIndex}"'),(0,o.kt)("li",{parentName:"ul"},"A lot of methods were made into extension methods and now require a using statement for 'DotPulsar.Extensions'",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Producer.StateChangedTo(ProducerState state, CancellationToken cancellationToken)"),(0,o.kt)("li",{parentName:"ul"},"Producer.StateChangedFrom(ProducerState state, CancellationToken cancellationToken)"),(0,o.kt)("li",{parentName:"ul"},"Producer.Send(byte[] data, CancellationToken cancellationToken)"),(0,o.kt)("li",{parentName:"ul"},"Producer.Send(ReadOnlyMemory\\<byte",">"," data, CancellationToken cancellationToken)"),(0,o.kt)("li",{parentName:"ul"},"Producer.Send(MessageMetadata metadata, byte[] data, CancellationToken cancellationToken)"),(0,o.kt)("li",{parentName:"ul"},"Producer.Send(MessageMetadata metadata, ReadOnlyMemory\\<byte",">"," data, CancellationToken cancellationToken)"),(0,o.kt)("li",{parentName:"ul"},"Consumer.Acknowledge(Message message, CancellationToken cancellationToken)"),(0,o.kt)("li",{parentName:"ul"},"Consumer.AcknowledgeCumulative(Message message, CancellationToken cancellationToken)"),(0,o.kt)("li",{parentName:"ul"},"Consumer.StateChangedTo(ConsumerState state, CancellationToken cancellationToken)"),(0,o.kt)("li",{parentName:"ul"},"Consumer.StateChangedFrom(ConsumerState state, CancellationToken cancellationToken)"),(0,o.kt)("li",{parentName:"ul"},"Consumer.Messages(CancellationToken cancellationToken)"),(0,o.kt)("li",{parentName:"ul"},"Consumer.Seek(DateTime publishTime, CancellationToken cancellationToken)"),(0,o.kt)("li",{parentName:"ul"},"Consumer.Seek(DateTimeOffset publishTime, CancellationToken cancellationToken)"),(0,o.kt)("li",{parentName:"ul"},"Reader.StateChangedTo(ReaderState state, CancellationToken cancellationToken)"),(0,o.kt)("li",{parentName:"ul"},"Reader.StateChangedFrom(ReaderState state, CancellationToken cancellationToken)"),(0,o.kt)("li",{parentName:"ul"},"Reader.Messages(CancellationToken cancellationToken)"),(0,o.kt)("li",{parentName:"ul"},"Reader.Seek(DateTime publishTime, CancellationToken cancellationToken)"),(0,o.kt)("li",{parentName:"ul"},"Reader.Seek(DateTimeOffset publishTime, CancellationToken cancellationToken)")))),(0,o.kt)("h2",{id:"fixed"},"Fixed"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Before the Consumer and Reader would throw an ArgumentOutOfRangeException if they encountered a compressed message. Now they will throw a CompressionException if the compression type is not supported"),(0,o.kt)("li",{parentName:"ul"},"DotPulsarEventSource (performance counters) was only enabled for .NET Standard 2.1. Now it's enabled for all target frameworks except .NET Standard 2.0")))}m.isMDXComponent=!0}}]);