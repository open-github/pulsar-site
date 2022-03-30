"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[7466],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return y}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),y=r,m=p["".concat(c,".").concat(y)]||p[y]||d[y]||o;return t?a.createElement(m,i(i({ref:n},u),{},{components:t})):a.createElement(m,i({ref:n},u))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},93425:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=["components"],l={id:"security-bouncy-castle",title:"Bouncy Castle Providers",sidebar_label:"Bouncy Castle Providers",original_id:"security-bouncy-castle"},c=void 0,s={unversionedId:"security-bouncy-castle",id:"version-2.9.1/security-bouncy-castle",title:"Bouncy Castle Providers",description:"BouncyCastle Introduce",source:"@site/versioned_docs/version-2.9.1/security-bouncy-castle.md",sourceDirName:".",slug:"/security-bouncy-castle",permalink:"/docs/security-bouncy-castle",editUrl:"https://github.com/apache/pulsar/edit/master/site2/versioned_docs/version-2.9.1/security-bouncy-castle.md",tags:[],version:"2.9.1",frontMatter:{id:"security-bouncy-castle",title:"Bouncy Castle Providers",sidebar_label:"Bouncy Castle Providers",original_id:"security-bouncy-castle"},sidebar:"version-2.9.1/docsSidebar",previous:{title:"Extending",permalink:"/docs/security-extending"},next:{title:"Pulsar Perf",permalink:"/docs/performance-pulsar-perf"}},u={},d=[{value:"BouncyCastle Introduce",id:"bouncycastle-introduce",level:2},{value:"How BouncyCastle modules packaged in Pulsar",id:"how-bouncycastle-modules-packaged-in-pulsar",level:2},{value:"Include dependencies of BC-non-FIPS",id:"include-dependencies-of-bc-non-fips",level:3},{value:"Modules that include BC-non-FIPS module (<code>bouncy-castle-bc</code>)",id:"modules-that-include-bc-non-fips-module-bouncy-castle-bc",level:3},{value:"Module BC-FIPS (<code>bouncy-castle-bcfips</code>)",id:"module-bc-fips-bouncy-castle-bcfips",level:3},{value:"Exclude BC-non-FIPS and include BC-FIPS",id:"exclude-bc-non-fips-and-include-bc-fips",level:3}],p={toc:d};function y(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"bouncycastle-introduce"},"BouncyCastle Introduce"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Bouncy Castle")," is a Java library that complements the default Java Cryptographic Extension (JCE),\nand it provides more cipher suites and algorithms than the default JCE provided by Sun."),(0,o.kt)("p",null,"In addition to that, ",(0,o.kt)("inlineCode",{parentName:"p"},"Bouncy Castle")," has lots of utilities for reading arcane formats like PEM and ASN.1 that no sane person would want to rewrite themselves."),(0,o.kt)("p",null,"In Pulsar, security and crypto have dependencies on BouncyCastle Jars. For the detailed installing and configuring Bouncy Castle FIPS, see ",(0,o.kt)("a",{parentName:"p",href:"https://www.bouncycastle.org/documentation.html"},"BC FIPS Documentation"),", especially the ",(0,o.kt)("strong",{parentName:"p"},"User Guides")," and ",(0,o.kt)("strong",{parentName:"p"},"Security Policy")," PDFs."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Bouncy Castle")," provides both ",(0,o.kt)("a",{parentName:"p",href:"https://www.bouncycastle.org/fips_faq.html"},"FIPS")," and non-FIPS version. But in a JVM, you can not include both of the 2 versions, and you need to exclude the current version before include the other."),(0,o.kt)("p",null,"In Pulsar, the security and crypto methods also depends on ",(0,o.kt)("inlineCode",{parentName:"p"},"Bouncy Castle"),", especially in ",(0,o.kt)("a",{parentName:"p",href:"/docs/security-tls-authentication"},"TLS Authentication")," and ",(0,o.kt)("a",{parentName:"p",href:"security-encryption"},"Transport Encryption"),". This document contains the configuration between BouncyCastle FIPS(BC-FIPS) and non-FIPS(BC-non-FIPS) version while using Pulsar."),(0,o.kt)("h2",{id:"how-bouncycastle-modules-packaged-in-pulsar"},"How BouncyCastle modules packaged in Pulsar"),(0,o.kt)("p",null,"In Pulsar's ",(0,o.kt)("inlineCode",{parentName:"p"},"bouncy-castle")," module, We provide 2 sub modules: ",(0,o.kt)("inlineCode",{parentName:"p"},"bouncy-castle-bc"),"(for non-FIPS version) and ",(0,o.kt)("inlineCode",{parentName:"p"},"bouncy-castle-bcfips"),"(for FIPS version), to package BC jars together to make the include and exclude of ",(0,o.kt)("inlineCode",{parentName:"p"},"Bouncy Castle")," easier."),(0,o.kt)("p",null,"To achieve this goal, we will need to package several ",(0,o.kt)("inlineCode",{parentName:"p"},"bouncy-castle")," jars together into ",(0,o.kt)("inlineCode",{parentName:"p"},"bouncy-castle-bc")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"bouncy-castle-bcfips")," jar.\nEach of the original bouncy-castle jar is related with security, so BouncyCastle dutifully supplies signed of each JAR.\nBut when we do the re-package, Maven shade explodes the BouncyCastle jar file which puts the signatures into META-INF,\nthese signatures aren't valid for this new, uber-jar (signatures are only for the original BC jar).\nUsually, You will meet error like ",(0,o.kt)("inlineCode",{parentName:"p"},"java.lang.SecurityException: Invalid signature file digest for Manifest main attributes"),"."),(0,o.kt)("p",null,"You could exclude these signatures in mvn pom file to avoid above error, by"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-access",metastring:"transformers",transformers:!0},"\n<exclude>META-INF/*.SF</exclude>\n<exclude>META-INF/*.DSA</exclude>\n<exclude>META-INF/*.RSA</exclude>\n\n")),(0,o.kt)("p",null,"But it can also lead to new, cryptic errors, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"java.security.NoSuchAlgorithmException: PBEWithSHA256And256BitAES-CBC-BC SecretKeyFactory not available"),"\nBy explicitly specifying where to find the algorithm like this: ",(0,o.kt)("inlineCode",{parentName:"p"},'SecretKeyFactory.getInstance("PBEWithSHA256And256BitAES-CBC-BC","BC")'),"\nIt will get the real error: ",(0,o.kt)("inlineCode",{parentName:"p"},"java.security.NoSuchProviderException: JCE cannot authenticate the provider BC")),(0,o.kt)("p",null,"So, we used a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nthuemmel/executable-packer-maven-plugin"},"executable packer plugin")," that uses a jar-in-jar approach to preserve the BouncyCastle signature in a single, executable jar."),(0,o.kt)("h3",{id:"include-dependencies-of-bc-non-fips"},"Include dependencies of BC-non-FIPS"),(0,o.kt)("p",null,"Pulsar module ",(0,o.kt)("inlineCode",{parentName:"p"},"bouncy-castle-bc"),", which defined by ",(0,o.kt)("inlineCode",{parentName:"p"},"bouncy-castle/bc/pom.xml")," contains the needed non-FIPS jars for Pulsar, and packaged as a jar-in-jar(need to provide ",(0,o.kt)("inlineCode",{parentName:"p"},"<classifier>pkg</classifier>"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\n  <dependency>\n    <groupId>org.bouncycastle</groupId>\n    <artifactId>bcpkix-jdk15on</artifactId>\n    <version>${bouncycastle.version}</version>\n  </dependency>\n\n  <dependency>\n    <groupId>org.bouncycastle</groupId>\n    <artifactId>bcprov-ext-jdk15on</artifactId>\n    <version>${bouncycastle.version}</version>\n  </dependency>\n\n")),(0,o.kt)("p",null,"By using this ",(0,o.kt)("inlineCode",{parentName:"p"},"bouncy-castle-bc")," module, you can easily include and exclude BouncyCastle non-FIPS jars."),(0,o.kt)("h3",{id:"modules-that-include-bc-non-fips-module-bouncy-castle-bc"},"Modules that include BC-non-FIPS module (",(0,o.kt)("inlineCode",{parentName:"h3"},"bouncy-castle-bc"),")"),(0,o.kt)("p",null,"For Pulsar client, user need the bouncy-castle module, so ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-client-original")," will include the ",(0,o.kt)("inlineCode",{parentName:"p"},"bouncy-castle-bc")," module, and have ",(0,o.kt)("inlineCode",{parentName:"p"},"<classifier>pkg</classifier>")," set to reference the ",(0,o.kt)("inlineCode",{parentName:"p"},"jar-in-jar")," package.\nIt is included as following example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\n  <dependency>\n    <groupId>org.apache.pulsar</groupId>\n    <artifactId>bouncy-castle-bc</artifactId>\n    <version>${pulsar.version}</version>\n    <classifier>pkg</classifier>\n  </dependency>\n\n")),(0,o.kt)("p",null,"By default ",(0,o.kt)("inlineCode",{parentName:"p"},"bouncy-castle-bc")," already included in ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-client-original"),", And ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-client-original")," has been included in a lot of other modules like ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-client-admin"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-broker"),".",(0,o.kt)("br",{parentName:"p"}),"\n","But for the above shaded jar and signatures reason, we should not package Pulsar's ",(0,o.kt)("inlineCode",{parentName:"p"},"bouncy-castle")," module into ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-client-all")," other shaded modules directly, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-client-shaded"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-client-admin-shaded")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-broker-shaded"),".\nSo in the shaded modules, we will exclude the ",(0,o.kt)("inlineCode",{parentName:"p"},"bouncy-castle")," modules."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\n  <filters>\n    <filter>\n      <artifact>org.apache.pulsar:pulsar-client-original</artifact>\n      <includes>\n        <include>**</include>\n      </includes>\n      <excludes>\n        <exclude>org/bouncycastle/**</exclude>\n      </excludes>\n    </filter>\n  </filters>\n\n")),(0,o.kt)("p",null,"That means, ",(0,o.kt)("inlineCode",{parentName:"p"},"bouncy-castle")," related jars are not shaded in these fat jars."),(0,o.kt)("h3",{id:"module-bc-fips-bouncy-castle-bcfips"},"Module BC-FIPS (",(0,o.kt)("inlineCode",{parentName:"h3"},"bouncy-castle-bcfips"),")"),(0,o.kt)("p",null,"Pulsar module ",(0,o.kt)("inlineCode",{parentName:"p"},"bouncy-castle-bcfips"),", which defined by ",(0,o.kt)("inlineCode",{parentName:"p"},"bouncy-castle/bcfips/pom.xml")," contains the needed FIPS jars for Pulsar.\nSimilar to ",(0,o.kt)("inlineCode",{parentName:"p"},"bouncy-castle-bc"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"bouncy-castle-bcfips")," also packaged as a ",(0,o.kt)("inlineCode",{parentName:"p"},"jar-in-jar")," package for easy include/exclude."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\n    <dependency>\n      <groupId>org.bouncycastle</groupId>\n      <artifactId>bc-fips</artifactId>\n      <version>${bouncycastlefips.version}</version>\n    </dependency>\n\n    <dependency>\n      <groupId>org.bouncycastle</groupId>\n      <artifactId>bcpkix-fips</artifactId>\n      <version>${bouncycastlefips.version}</version>\n    </dependency>\n\n")),(0,o.kt)("h3",{id:"exclude-bc-non-fips-and-include-bc-fips"},"Exclude BC-non-FIPS and include BC-FIPS"),(0,o.kt)("p",null,"If you want to switch from BC-non-FIPS to BC-FIPS version, Here is an example for ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-broker")," module: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\n  <dependency>\n    <groupId>org.apache.pulsar</groupId>\n    <artifactId>pulsar-broker</artifactId>\n    <version>${pulsar.version}</version>\n    <exclusions>\n      <exclusion>\n        <groupId>org.apache.pulsar</groupId>\n        <artifactId>bouncy-castle-bc</artifactId>\n      </exclusion>\n    </exclusions>\n  </dependency>\n  \n  <dependency>\n    <groupId>org.apache.pulsar</groupId>\n    <artifactId>bouncy-castle-bcfips</artifactId>\n    <version>${pulsar.version}</version>\n    <classifier>pkg</classifier>\n  </dependency>\n\n")),(0,o.kt)("p",null,"For more example, you can reference module ",(0,o.kt)("inlineCode",{parentName:"p"},"bcfips-include-test"),"."))}y.isMDXComponent=!0}}]);