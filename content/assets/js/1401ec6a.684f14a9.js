"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[83228],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=s(n),m=r,d=h["".concat(c,".").concat(m)]||h[m]||u[m]||i;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},14989:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"security-tls-authentication",title:"Authentication using TLS",sidebar_label:"Authentication using TLS"},c=void 0,s={unversionedId:"security-tls-authentication",id:"security-tls-authentication",title:"Authentication using TLS",description:"TLS authentication overview",source:"@site/docs/security-tls-authentication.md",sourceDirName:".",slug:"/security-tls-authentication",permalink:"/docs/next/security-tls-authentication",editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/security-tls-authentication.md",tags:[],version:"current",frontMatter:{id:"security-tls-authentication",title:"Authentication using TLS",sidebar_label:"Authentication using TLS"},sidebar:"docsSidebar",previous:{title:"Transport Encryption using TLS",permalink:"/docs/next/security-tls-transport"},next:{title:"Using TLS with KeyStore configure",permalink:"/docs/next/security-tls-keystore"}},p={},u=[{value:"TLS authentication overview",id:"tls-authentication-overview",level:2},{value:"Create client certificates",id:"create-client-certificates",level:3},{value:"Enable TLS authentication on brokers",id:"enable-tls-authentication-on-brokers",level:2},{value:"Enable TLS authentication on proxies",id:"enable-tls-authentication-on-proxies",level:2},{value:"Client configuration",id:"client-configuration",level:2},{value:"CLI tools",id:"cli-tools",level:3},{value:"Java client",id:"java-client",level:3},{value:"Python client",id:"python-client",level:3},{value:"C++ client",id:"c-client",level:3},{value:"Node.js client",id:"nodejs-client",level:3},{value:"C# client",id:"c-client-1",level:3}],h={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tls-authentication-overview"},"TLS authentication overview"),(0,i.kt)("p",null,"TLS authentication is an extension of ",(0,i.kt)("a",{parentName:"p",href:"security-tls-transport"},"TLS transport encryption"),". Not only servers have keys and certs that the client uses to verify the identity of servers, clients also have keys and certs that the server uses to verify the identity of clients. You must have TLS transport encryption configured on your cluster before you can use TLS authentication. This guide assumes you already have TLS transport encryption configured."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Bouncy Castle Provider")," provides TLS related cipher suites and algorithms in Pulsar. If you need ",(0,i.kt)("a",{parentName:"p",href:"https://www.bouncycastle.org/fips_faq.html"},"FIPS")," version of ",(0,i.kt)("inlineCode",{parentName:"p"},"Bouncy Castle Provider"),", please reference ",(0,i.kt)("a",{parentName:"p",href:"security-bouncy-castle"},"Bouncy Castle page"),"."),(0,i.kt)("h3",{id:"create-client-certificates"},"Create client certificates"),(0,i.kt)("p",null,"Client certificates are generated using the certificate authority. Server certificates are also generated with the same certificate authority."),(0,i.kt)("p",null,"The biggest difference between client certs and server certs is that the ",(0,i.kt)("strong",{parentName:"p"},"common name")," for the client certificate is the ",(0,i.kt)("strong",{parentName:"p"},"role token")," which that client is authenticated as."),(0,i.kt)("p",null,"To use client certificates, you need to set ",(0,i.kt)("inlineCode",{parentName:"p"},"tlsRequireTrustedClientCertOnConnect=true")," at the broker side. For details, refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/security-tls-transport#configure-broker"},"TLS broker configuration"),"."),(0,i.kt)("p",null,"First, you need to enter the following command to generate the key :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ openssl genrsa -out admin.key.pem 2048\n\n")),(0,i.kt)("p",null,"Similar to the broker, the client expects the key to be in ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/PKCS_8"},"PKCS 8")," format, so you need to convert it by entering the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ openssl pkcs8 -topk8 -inform PEM -outform PEM \\\n      -in admin.key.pem -out admin.key-pk8.pem -nocrypt\n\n")),(0,i.kt)("p",null,"Next, enter the command below to generate the certificate request. When you are asked for a ",(0,i.kt)("strong",{parentName:"p"},"common name"),", enter the ",(0,i.kt)("strong",{parentName:"p"},"role token")," that you want this key pair to authenticate a client as."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ openssl req -config openssl.cnf \\\n      -key admin.key.pem -new -sha256 -out admin.csr.pem\n\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If openssl.cnf is not specified, read ",(0,i.kt)("a",{parentName:"p",href:"http://pulsar.apache.org/docs/en/security-tls-transport/#certificate-authority"},"Certificate authority")," to get the openssl.cnf."))),(0,i.kt)("p",null,"Then, enter the command below to sign with request with the certificate authority. Note that the client certs uses the ",(0,i.kt)("strong",{parentName:"p"},"usr_cert")," extension, which allows the cert to be used for client authentication."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ openssl ca -config openssl.cnf -extensions usr_cert \\\n      -days 1000 -notext -md sha256 \\\n      -in admin.csr.pem -out admin.cert.pem\n\n")),(0,i.kt)("p",null,"You can get a cert, ",(0,i.kt)("inlineCode",{parentName:"p"},"admin.cert.pem"),", and a key, ",(0,i.kt)("inlineCode",{parentName:"p"},"admin.key-pk8.pem")," from this command. With ",(0,i.kt)("inlineCode",{parentName:"p"},"ca.cert.pem"),", clients can use this cert and this key to authenticate themselves to brokers and proxies as the role token ",(0,i.kt)("inlineCode",{parentName:"p"},"admin"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'If the "unable to load CA private key" error occurs and the reason of this error is "No such file or directory: /etc/pki/CA/private/cakey.pem" in this step. Try the command below:'),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ cd /etc/pki/tls/misc/CA\n$ ./CA -newca\n\n")),(0,i.kt)("p",{parentName:"div"},"to generate ",(0,i.kt)("inlineCode",{parentName:"p"},"cakey.pem")," ."))),(0,i.kt)("h2",{id:"enable-tls-authentication-on-brokers"},"Enable TLS authentication on brokers"),(0,i.kt)("p",null,"To configure brokers to authenticate clients, add the following parameters to ",(0,i.kt)("inlineCode",{parentName:"p"},"broker.conf"),", alongside ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/security-tls-transport#broker-configuration"},"the configuration to enable tls transport"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},'\n# Configuration to enable authentication\nauthenticationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderTls\n\n# operations and publish/consume from all topics\nsuperUserRoles=admin\n\n# Authentication settings of the broker itself. Used when the broker connects to other brokers, either in same or other clusters\nbrokerClientTlsEnabled=true\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationTls\nbrokerClientAuthenticationParameters={"tlsCertFile":"/path/my-ca/admin.cert.pem","tlsKeyFile":"/path/my-ca/admin.key-pk8.pem"}\nbrokerClientTrustCertsFilePath=/path/my-ca/certs/ca.cert.pem\n\n')),(0,i.kt)("h2",{id:"enable-tls-authentication-on-proxies"},"Enable TLS authentication on proxies"),(0,i.kt)("p",null,"To configure proxies to authenticate clients, add the following parameters to ",(0,i.kt)("inlineCode",{parentName:"p"},"proxy.conf"),", alongside ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/security-tls-transport#proxy-configuration"},"the configuration to enable tls transport"),":"),(0,i.kt)("p",null,"The proxy should have its own client key pair for connecting to brokers. You need to configure the role token for this key pair in the ",(0,i.kt)("inlineCode",{parentName:"p"},"proxyRoles")," of the brokers. See the ",(0,i.kt)("a",{parentName:"p",href:"security-authorization"},"authorization guide")," for more details."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"\n# For clients connecting to the proxy\nauthenticationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderTls\n\n# For the proxy to connect to brokers\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationTls\nbrokerClientAuthenticationParameters=tlsCertFile:/path/to/proxy.cert.pem,tlsKeyFile:/path/to/proxy.key-pk8.pem\n\n")),(0,i.kt)("h2",{id:"client-configuration"},"Client configuration"),(0,i.kt)("p",null,"When you use TLS authentication, client connects via TLS transport. You need to configure the client to use ",(0,i.kt)("inlineCode",{parentName:"p"},"https://")," and 8443 port for the web service URL, ",(0,i.kt)("inlineCode",{parentName:"p"},"pulsar+ssl://")," and 6651 port for the broker service URL."),(0,i.kt)("h3",{id:"cli-tools"},"CLI tools"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/reference-cli-tools"},"Command-line tools")," like ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin"},(0,i.kt)("inlineCode",{parentName:"a"},"pulsar-admin")),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/reference-cli-tools#pulsar-perf"},(0,i.kt)("inlineCode",{parentName:"a"},"pulsar-perf")),", and ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/reference-cli-tools#pulsar-client"},(0,i.kt)("inlineCode",{parentName:"a"},"pulsar-client"))," use the ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/client.conf")," config file in a Pulsar installation."),(0,i.kt)("p",null,"You need to add the following parameters to that file to use TLS authentication with the CLI tools of Pulsar:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"\nwebServiceUrl=https://broker.example.com:8443/\nbrokerServiceUrl=pulsar+ssl://broker.example.com:6651/\nuseTls=true\ntlsAllowInsecureConnection=false\ntlsTrustCertsFilePath=/path/to/ca.cert.pem\nauthPlugin=org.apache.pulsar.client.impl.auth.AuthenticationTls\nauthParams=tlsCertFile:/path/to/my-role.cert.pem,tlsKeyFile:/path/to/my-role.key-pk8.pem\n\n")),(0,i.kt)("h3",{id:"java-client"},"Java client"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nimport org.apache.pulsar.client.api.PulsarClient;\n\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar+ssl://broker.example.com:6651/")\n    .enableTls(true)\n    .tlsTrustCertsFilePath("/path/to/ca.cert.pem")\n    .authentication("org.apache.pulsar.client.impl.auth.AuthenticationTls",\n                    "tlsCertFile:/path/to/my-role.cert.pem,tlsKeyFile:/path/to/my-role.key-pk8.pem")\n    .build();\n\n')),(0,i.kt)("h3",{id:"python-client"},"Python client"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'\nfrom pulsar import Client, AuthenticationTLS\n\nauth = AuthenticationTLS("/path/to/my-role.cert.pem", "/path/to/my-role.key-pk8.pem")\nclient = Client("pulsar+ssl://broker.example.com:6651/",\n                tls_trust_certs_file_path="/path/to/ca.cert.pem",\n                tls_allow_insecure_connection=False,\n                authentication=auth)\n\n')),(0,i.kt)("h3",{id:"c-client"},"C++ client"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c++"},'\n#include <pulsar/Client.h>\n\npulsar::ClientConfiguration config;\nconfig.setUseTls(true);\nconfig.setTlsTrustCertsFilePath("/path/to/ca.cert.pem");\nconfig.setTlsAllowInsecureConnection(false);\n\npulsar::AuthenticationPtr auth = pulsar::AuthTls::create("/path/to/my-role.cert.pem",\n                                                         "/path/to/my-role.key-pk8.pem")\nconfig.setAuth(auth);\n\npulsar::Client client("pulsar+ssl://broker.example.com:6651/", config);\n\n')),(0,i.kt)("h3",{id:"nodejs-client"},"Node.js client"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JavaScript"},"\nconst Pulsar = require('pulsar-client');\n\n(async () => {\n  const auth = new Pulsar.AuthenticationTls({\n    certificatePath: '/path/to/my-role.cert.pem',\n    privateKeyPath: '/path/to/my-role.key-pk8.pem',\n  });\n\n  const client = new Pulsar.Client({\n    serviceUrl: 'pulsar+ssl://broker.example.com:6651/',\n    authentication: auth,\n    tlsTrustCertsFilePath: '/path/to/ca.cert.pem',\n  });\n})();\n\n")),(0,i.kt)("h3",{id:"c-client-1"},"C# client"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c#"},'\nvar clientCertificate = new X509Certificate2("admin.pfx");\nvar client = PulsarClient.Builder()\n                         .AuthenticateUsingClientCertificate(clientCertificate)\n                         .Build();\n\n')))}m.isMDXComponent=!0}}]);