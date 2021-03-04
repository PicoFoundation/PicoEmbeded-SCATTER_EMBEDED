/*! For license information please see vendor~fdc6512a.bundle.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"/uSP":function(t,e,n){const r=n("+qE3").EventEmitter,o=n("MCLT").inherits;function s(){r.call(this),this.isLocked=!0}t.exports=s,o(s,r),s.prototype.go=function(){this.isLocked=!1,this.emit("unlock")},s.prototype.stop=function(){this.isLocked=!0,this.emit("lock")},s.prototype.await=function(t){const e=this;e.isLocked?e.once("unlock",t):setTimeout(t)}},"7sdD":function(t,e,n){"use strict";var r=n("vgmO"),o=n("g2LC"),s=n("ZESv"),i=n("U6jy");function a(t,e,n){var r=t;return o(e)?(n=e,"string"==typeof t&&(r={uri:t})):r=i(e,{uri:t}),r.callback=n,r}function c(t,e,n){return u(e=a(t,e,n))}function u(t){if(void 0===t.callback)throw new Error("callback argument missing");var e=!1,n=function(n,r,o){e||(e=!0,t.callback(n,r,o))};function r(){var t=void 0;if(t=p.response?p.response:p.responseText||function(t){try{if("document"===t.responseType)return t.responseXML;var e=t.responseXML&&"parsererror"===t.responseXML.documentElement.nodeName;if(""===t.responseType&&!e)return t.responseXML}catch(t){}return null}(p),y)try{t=JSON.parse(t)}catch(t){}return t}function o(t){return clearTimeout(l),t instanceof Error||(t=new Error(""+(t||"Unknown XMLHttpRequest Error"))),t.statusCode=0,n(t,v)}function i(){if(!u){var e;clearTimeout(l),e=t.useXDR&&void 0===p.status?200:1223===p.status?204:p.status;var o=v,i=null;return 0!==e?(o={body:r(),statusCode:e,method:h,headers:{},url:d,rawRequest:p},p.getAllResponseHeaders&&(o.headers=s(p.getAllResponseHeaders()))):i=new Error("Internal XMLHttpRequest Error"),n(i,o,o.body)}}var a,u,p=t.xhr||null;p||(p=t.cors||t.useXDR?new c.XDomainRequest:new c.XMLHttpRequest);var l,d=p.url=t.uri||t.url,h=p.method=t.method||"GET",f=t.body||t.data,g=p.headers=t.headers||{},m=!!t.sync,y=!1,v={body:void 0,headers:{},statusCode:0,method:h,url:d,rawRequest:p};if("json"in t&&!1!==t.json&&(y=!0,g.accept||g.Accept||(g.Accept="application/json"),"GET"!==h&&"HEAD"!==h&&(g["content-type"]||g["Content-Type"]||(g["Content-Type"]="application/json"),f=JSON.stringify(!0===t.json?f:t.json))),p.onreadystatechange=function(){4===p.readyState&&setTimeout(i,0)},p.onload=i,p.onerror=o,p.onprogress=function(){},p.onabort=function(){u=!0},p.ontimeout=o,p.open(h,d,!m,t.username,t.password),m||(p.withCredentials=!!t.withCredentials),!m&&t.timeout>0&&(l=setTimeout((function(){if(!u){u=!0,p.abort("timeout");var t=new Error("XMLHttpRequest timeout");t.code="ETIMEDOUT",o(t)}}),t.timeout)),p.setRequestHeader)for(a in g)g.hasOwnProperty(a)&&p.setRequestHeader(a,g[a]);else if(t.headers&&!function(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}(t.headers))throw new Error("Headers cannot be set on an XDomainRequest object");return"responseType"in t&&(p.responseType=t.responseType),"beforeSend"in t&&"function"==typeof t.beforeSend&&t.beforeSend(p),p.send(f||null),p}t.exports=c,t.exports.default=c,c.XMLHttpRequest=r.XMLHttpRequest||function(){},c.XDomainRequest="withCredentials"in new c.XMLHttpRequest?c.XMLHttpRequest:r.XDomainRequest,function(t,e){for(var n=0;n<t.length;n++)e(t[n])}(["get","put","post","patch","head","delete"],(function(t){c["delete"===t?"del":t]=function(e,n,r){return(n=a(e,n,r)).method=t.toUpperCase(),u(n)}}))},L2JU:function(t,e,n){"use strict";(function(t){n.d(e,"d",(function(){return v})),n.d(e,"c",(function(){return b})),n.d(e,"b",(function(){return w}));var r=("undefined"!=typeof window?window:void 0!==t?t:{}).__VUE_DEVTOOLS_GLOBAL_HOOK__;function o(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}var s=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"==typeof n?n():n)||{}},i={namespaced:{configurable:!0}};i.namespaced.get=function(){return!!this._rawModule.namespaced},s.prototype.addChild=function(t,e){this._children[t]=e},s.prototype.removeChild=function(t){delete this._children[t]},s.prototype.getChild=function(t){return this._children[t]},s.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},s.prototype.forEachChild=function(t){o(this._children,t)},s.prototype.forEachGetter=function(t){this._rawModule.getters&&o(this._rawModule.getters,t)},s.prototype.forEachAction=function(t){this._rawModule.actions&&o(this._rawModule.actions,t)},s.prototype.forEachMutation=function(t){this._rawModule.mutations&&o(this._rawModule.mutations,t)},Object.defineProperties(s.prototype,i);var a=function(t){this.register([],t,!1)};a.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},a.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return t+((e=e.getChild(n)).namespaced?n+"/":"")}),"")},a.prototype.update=function(t){!function t(e,n,r){0;n.update(r);if(r.modules)for(var o in r.modules){if(!n.getChild(o))return void 0;t(e.concat(o),n.getChild(o),r.modules[o])}}([],this.root,t)},a.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var i=new s(e,n);0===t.length?this.root=i:this.get(t.slice(0,-1)).addChild(t[t.length-1],i);e.modules&&o(e.modules,(function(e,o){r.register(t.concat(o),e,n)}))},a.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var c;var u=function(t){var e=this;void 0===t&&(t={}),!c&&"undefined"!=typeof window&&window.Vue&&y(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var o=t.strict;void 0===o&&(o=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new a(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new c;var s=this,i=this.dispatch,u=this.commit;this.dispatch=function(t,e){return i.call(s,t,e)},this.commit=function(t,e,n){return u.call(s,t,e,n)},this.strict=o;var p=this._modules.root.state;f(this,p,[],this._modules.root),h(this,p),n.forEach((function(t){return t(e)})),(void 0!==t.devtools?t.devtools:c.config.devtools)&&function(t){r&&(t._devtoolHook=r,r.emit("vuex:init",t),r.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){r.emit("vuex:mutation",t,e)})))}(this)},p={state:{configurable:!0}};function l(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function d(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;f(t,n,[],t._modules.root,!0),h(t,n,e)}function h(t,e,n){var r=t._vm;t.getters={};var s=t._wrappedGetters,i={};o(s,(function(e,n){i[n]=function(t,e){return function(){return t(e)}}(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})}));var a=c.config.silent;c.config.silent=!0,t._vm=new c({data:{$$state:e},computed:i}),c.config.silent=a,t.strict&&function(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}(t),r&&(n&&t._withCommit((function(){r._data.$$state=null})),c.nextTick((function(){return r.$destroy()})))}function f(t,e,n,r,o){var s=!n.length,i=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[i]=r),!s&&!o){var a=g(e,n.slice(0,-1)),u=n[n.length-1];t._withCommit((function(){c.set(a,u,r.state)}))}var p=r.context=function(t,e,n){var r=""===e,o={dispatch:r?t.dispatch:function(n,r,o){var s=m(n,r,o),i=s.payload,a=s.options,c=s.type;return a&&a.root||(c=e+c),t.dispatch(c,i)},commit:r?t.commit:function(n,r,o){var s=m(n,r,o),i=s.payload,a=s.options,c=s.type;a&&a.root||(c=e+c),t.commit(c,i,a)}};return Object.defineProperties(o,{getters:{get:r?function(){return t.getters}:function(){return function(t,e){var n={},r=e.length;return Object.keys(t.getters).forEach((function(o){if(o.slice(0,r)===e){var s=o.slice(r);Object.defineProperty(n,s,{get:function(){return t.getters[o]},enumerable:!0})}})),n}(t,e)}},state:{get:function(){return g(t.state,n)}}}),o}(t,i,n);r.forEachMutation((function(e,n){!function(t,e,n,r){(t._mutations[e]||(t._mutations[e]=[])).push((function(e){n.call(t,r.state,e)}))}(t,i+n,e,p)})),r.forEachAction((function(e,n){var r=e.root?n:i+n,o=e.handler||e;!function(t,e,n,r){(t._actions[e]||(t._actions[e]=[])).push((function(e,o){var s,i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e,o);return(s=i)&&"function"==typeof s.then||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}(t,r,o,p)})),r.forEachGetter((function(e,n){!function(t,e,n,r){if(t._wrappedGetters[e])return void 0;t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)}}(t,i+n,e,p)})),r.forEachChild((function(r,s){f(t,e,n.concat(s),r,o)}))}function g(t,e){return e.length?e.reduce((function(t,e){return t[e]}),t):t}function m(t,e,n){var r;return null!==(r=t)&&"object"==typeof r&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function y(t){c&&t===c||function(t){if(Number(t.version.split(".")[0])>=2)t.mixin({beforeCreate:n});else{var e=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[n].concat(t.init):n,e.call(this,t)}}function n(){var t=this.$options;t.store?this.$store="function"==typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}(c=t)}p.state.get=function(){return this._vm._data.$$state},p.state.set=function(t){0},u.prototype.commit=function(t,e,n){var r=this,o=m(t,e,n),s=o.type,i=o.payload,a=(o.options,{type:s,payload:i}),c=this._mutations[s];c&&(this._withCommit((function(){c.forEach((function(t){t(i)}))})),this._subscribers.forEach((function(t){return t(a,r.state)})))},u.prototype.dispatch=function(t,e){var n=this,r=m(t,e),o=r.type,s=r.payload,i={type:o,payload:s},a=this._actions[o];if(a){try{this._actionSubscribers.filter((function(t){return t.before})).forEach((function(t){return t.before(i,n.state)}))}catch(t){0}return(a.length>1?Promise.all(a.map((function(t){return t(s)}))):a[0](s)).then((function(t){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(i,n.state)}))}catch(t){0}return t}))}},u.prototype.subscribe=function(t){return l(t,this._subscribers)},u.prototype.subscribeAction=function(t){return l("function"==typeof t?{before:t}:t,this._actionSubscribers)},u.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch((function(){return t(r.state,r.getters)}),e,n)},u.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},u.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"==typeof t&&(t=[t]),this._modules.register(t,e),f(this,this.state,t,this._modules.get(t),n.preserveState),h(this,this.state)},u.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=g(e.state,t.slice(0,-1));c.delete(n,t[t.length-1])})),d(this)},u.prototype.hotUpdate=function(t){this._modules.update(t),d(this,!0)},u.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(u.prototype,p);var v=k((function(t,e){var n={};return T(e).forEach((function(e){var r=e.key,o=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=M(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"==typeof o?o.call(this,e,n):e[o]},n[r].vuex=!0})),n})),_=k((function(t,e){var n={};return T(e).forEach((function(e){var r=e.key,o=e.val;n[r]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var r=this.$store.commit;if(t){var s=M(this.$store,"mapMutations",t);if(!s)return;r=s.context.commit}return"function"==typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}})),n})),b=k((function(t,e){var n={};return T(e).forEach((function(e){var r=e.key,o=e.val;o=t+o,n[r]=function(){if(!t||M(this.$store,"mapGetters",t))return this.$store.getters[o]},n[r].vuex=!0})),n})),w=k((function(t,e){var n={};return T(e).forEach((function(e){var r=e.key,o=e.val;n[r]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var s=M(this.$store,"mapActions",t);if(!s)return;r=s.context.dispatch}return"function"==typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}})),n}));function T(t){return Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}}))}function k(t){return function(e,n){return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function M(t,e,n){return t._modulesNamespaceMap[n]}var P={Store:u,install:y,version:"3.1.1",mapState:v,mapMutations:_,mapGetters:b,mapActions:w,createNamespacedHelpers:function(t){return{mapState:v.bind(null,t),mapGetters:b.bind(null,t),mapMutations:_.bind(null,t),mapActions:w.bind(null,t)}}};e.a=P}).call(this,n("yLpj"))},Rlsf:function(t,e,n){const r=n("l1gh"),o=n("KWkM"),s=n("MCLT").inherits,i=n("tnHP"),a=n("HtlB"),c=n("U6jy"),u=n("odnP"),p=n("Uu7K"),l=n("a5O3"),d=/^[0-9A-Fa-f]+$/g;function h(t){this.nonceLock=u(1),t.getAccounts&&(this.getAccounts=t.getAccounts),t.processTransaction&&(this.processTransaction=t.processTransaction),t.processSignTransaction&&(this.processSignTransaction=t.processSignTransaction),t.processMessage&&(this.processMessage=t.processMessage),t.processPersonalMessage&&(this.processPersonalMessage=t.processPersonalMessage),t.processTypedMessage&&(this.processTypedMessage=t.processTypedMessage),this.approveTransaction=t.approveTransaction||this.autoApprove,this.approveMessage=t.approveMessage||this.autoApprove,this.approvePersonalMessage=t.approvePersonalMessage||this.autoApprove,this.approveTypedMessage=t.approveTypedMessage||this.autoApprove,this.signTransaction=t.signTransaction||m("signTransaction"),this.signMessage=t.signMessage||m("signMessage"),this.signPersonalMessage=t.signPersonalMessage||m("signPersonalMessage"),this.signTypedMessage=t.signTypedMessage||m("signTypedMessage"),t.recoverPersonalSignature&&(this.recoverPersonalSignature=t.recoverPersonalSignature),t.publishTransaction&&(this.publishTransaction=t.publishTransaction),this.estimateGas=t.estimateGas||this.estimateGas,this.getGasPrice=t.getGasPrice||this.getGasPrice}function f(t){return t.toLowerCase()}function g(t){return"string"==typeof t&&("0x"===t.slice(0,2)&&t.slice(2).match(d))}function m(t){return function(e,n){n(new Error('ProviderEngine - HookedWalletSubprovider - Must provide "'+t+'" fn in constructor options'))}}t.exports=h,s(h,p),h.prototype.handleRequest=function(t,e,n){const o=this;let s,a,u,p,l;switch(o._parityRequests={},o._parityRequestCount=0,t.method){case"eth_coinbase":return void o.getAccounts((function(t,e){if(t)return n(t);let r=e[0]||null;n(null,r)}));case"eth_accounts":return void o.getAccounts((function(t,e){if(t)return n(t);n(null,e)}));case"eth_sendTransaction":return s=t.params[0],void r([t=>o.validateTransaction(s,t),t=>o.processTransaction(s,t)],n);case"eth_signTransaction":return s=t.params[0],void r([t=>o.validateTransaction(s,t),t=>o.processSignTransaction(s,t)],n);case"eth_sign":return l=t.params[0],p=t.params[1],u=t.params[2]||{},a=c(u,{from:l,data:p}),void r([t=>o.validateMessage(a,t),t=>o.processMessage(a,t)],n);case"personal_sign":return function(){const e=t.params[0];if(function(t){const e=i.addHexPrefix(t);return!i.isValidAddress(e)&&g(t)}(t.params[1])&&function(t){const e=i.addHexPrefix(t);return i.isValidAddress(e)}(e)){let e="The eth_personalSign method requires params ordered ";e+="[message, address]. This was previously handled incorrectly, ",e+="and has been corrected automatically. ",e+="Please switch this param order for smooth behavior in the future.",console.warn(e),l=t.params[0],p=t.params[1]}else p=t.params[0],l=t.params[1];u=t.params[2]||{},a=c(u,{from:l,data:p}),r([t=>o.validatePersonalMessage(a,t),t=>o.processPersonalMessage(a,t)],n)}();case"personal_ecRecover":return function(){p=t.params[0];let e=t.params[1];u=t.params[2]||{},a=c(u,{sig:e,data:p}),o.recoverPersonalSignature(a,n)}();case"eth_signTypedData":return p=t.params[0],l=t.params[1],u=t.params[2]||{},a=c(u,{from:l,data:p}),void r([t=>o.validateTypedMessage(a,t),t=>o.processTypedMessage(a,t)],n);case"parity_postTransaction":return s=t.params[0],void o.parityPostTransaction(s,n);case"parity_postSign":return l=t.params[0],p=t.params[1],void o.parityPostSign(l,p,n);case"parity_checkRequest":return function(){const e=t.params[0];o.parityCheckRequest(e,n)}();case"parity_defaultAccount":return void o.getAccounts((function(t,e){if(t)return n(t);const r=e[0]||null;n(null,r)}));default:return void e()}},h.prototype.getAccounts=function(t){t(null,[])},h.prototype.processTransaction=function(t,e){const n=this;r([e=>n.approveTransaction(t,e),(t,e)=>n.checkApproval("transaction",t,e),e=>n.finalizeAndSubmitTx(t,e)],e)},h.prototype.processSignTransaction=function(t,e){const n=this;r([e=>n.approveTransaction(t,e),(t,e)=>n.checkApproval("transaction",t,e),e=>n.finalizeTx(t,e)],e)},h.prototype.processMessage=function(t,e){const n=this;r([e=>n.approveMessage(t,e),(t,e)=>n.checkApproval("message",t,e),e=>n.signMessage(t,e)],e)},h.prototype.processPersonalMessage=function(t,e){const n=this;r([e=>n.approvePersonalMessage(t,e),(t,e)=>n.checkApproval("message",t,e),e=>n.signPersonalMessage(t,e)],e)},h.prototype.processTypedMessage=function(t,e){const n=this;r([e=>n.approveTypedMessage(t,e),(t,e)=>n.checkApproval("message",t,e),e=>n.signTypedMessage(t,e)],e)},h.prototype.autoApprove=function(t,e){e(null,!0)},h.prototype.checkApproval=function(t,e,n){n(e?null:new Error("User denied "+t+" signature."))},h.prototype.parityPostTransaction=function(t,e){const n=this,r=`0x${n._parityRequestCount.toString(16)}`;n._parityRequestCount++,n.emitPayload({method:"eth_sendTransaction",params:[t]},(function(t,e){if(t)return void(n._parityRequests[r]={error:t});const o=e.result;n._parityRequests[r]=o})),e(null,r)},h.prototype.parityPostSign=function(t,e,n){const r=this,o=`0x${r._parityRequestCount.toString(16)}`;r._parityRequestCount++,r.emitPayload({method:"eth_sign",params:[t,e]},(function(t,e){if(t)return void(r._parityRequests[o]={error:t});const n=e.result;r._parityRequests[o]=n})),n(null,o)},h.prototype.parityCheckRequest=function(t,e){const n=this._parityRequests[t]||null;return n?n.error?e(n.error):void e(null,n):e(null,null)},h.prototype.recoverPersonalSignature=function(t,e){let n;try{n=a.recoverPersonalSignature(t)}catch(t){return e(t)}e(null,n)},h.prototype.validateTransaction=function(t,e){if(void 0===t.from)return e(new Error("Undefined address - from address required to sign transaction."));this.validateSender(t.from,(function(n,r){return n?e(n):r?void e():e(new Error(`Unknown address - unable to sign transaction for this address: "${t.from}"`))}))},h.prototype.validateMessage=function(t,e){if(void 0===t.from)return e(new Error("Undefined address - from address required to sign message."));this.validateSender(t.from,(function(n,r){return n?e(n):r?void e():e(new Error(`Unknown address - unable to sign message for this address: "${t.from}"`))}))},h.prototype.validatePersonalMessage=function(t,e){return void 0===t.from?e(new Error("Undefined address - from address required to sign personal message.")):void 0===t.data?e(new Error("Undefined message - message required to sign personal message.")):g(t.data)?void this.validateSender(t.from,(function(n,r){return n?e(n):r?void e():e(new Error(`Unknown address - unable to sign message for this address: "${t.from}"`))})):e(new Error("HookedWalletSubprovider - validateMessage - message was not encoded as hex."))},h.prototype.validateTypedMessage=function(t,e){return void 0===t.from?e(new Error("Undefined address - from address required to sign typed data.")):void 0===t.data?e(new Error("Undefined data - message required to sign typed data.")):void this.validateSender(t.from,(function(n,r){return n?e(n):r?void e():e(new Error(`Unknown address - unable to sign message for this address: "${t.from}"`))}))},h.prototype.validateSender=function(t,e){if(!t)return e(null,!1);this.getAccounts((function(n,r){if(n)return e(n);const o=-1!==r.map(f).indexOf(t.toLowerCase());e(null,o)}))},h.prototype.finalizeAndSubmitTx=function(t,e){const n=this;n.nonceLock.take((function(){r([n.fillInTxExtras.bind(n,t),n.signTransaction.bind(n),n.publishTransaction.bind(n)],(function(t,r){if(n.nonceLock.leave(),t)return e(t);e(null,r)}))}))},h.prototype.finalizeTx=function(t,e){const n=this;n.nonceLock.take((function(){r([n.fillInTxExtras.bind(n,t),n.signTransaction.bind(n)],(function(r,o){if(n.nonceLock.leave(),r)return e(r);e(null,{raw:o,tx:t})}))}))},h.prototype.publishTransaction=function(t,e){this.emitPayload({method:"eth_sendRawTransaction",params:[t]},(function(t,n){if(t)return e(t);e(null,n.result)}))},h.prototype.estimateGas=function(t,e){l(this.engine,t,e)},h.prototype.getGasPrice=function(t){this.emitPayload({method:"eth_gasPrice",params:[]},(function(e,n){if(e)return t(e);t(null,n.result)}))},h.prototype.fillInTxExtras=function(t,e){const n=this,r=t.from,s={};void 0===t.gasPrice&&(s.gasPrice=n.getGasPrice.bind(n)),void 0===t.nonce&&(s.nonce=n.emitPayload.bind(n,{method:"eth_getTransactionCount",params:[r,"pending"]})),void 0===t.gas&&(s.gas=n.estimateGas.bind(n,function(t){return{from:t.from,to:t.to,value:t.value,data:t.data,gas:t.gas,gasPrice:t.gasPrice,nonce:t.nonce}}(t))),o(s,(function(n,r){if(n)return e(n);const o={};r.gasPrice&&(o.gasPrice=r.gasPrice),r.nonce&&(o.nonce=r.nonce.result),r.gas&&(o.gas=r.gas),e(null,c(t,o))}))}},U6jy:function(t,e){t.exports=function(){for(var t={},e=0;e<arguments.length;e++){var r=arguments[e];for(var o in r)n.call(r,o)&&(t[o]=r[o])}return t};var n=Object.prototype.hasOwnProperty},Uu7K:function(t,e,n){const r=n("xQaN");function o(){}t.exports=o,o.prototype.setEngine=function(t){const e=this;e.engine||(e.engine=t,t.on("block",(function(t){e.currentBlock=t})),t.on("start",(function(){e.start()})),t.on("stop",(function(){e.stop()})))},o.prototype.handleRequest=function(t,e,n){throw new Error("Subproviders should override `handleRequest`.")},o.prototype.emitPayload=function(t,e){this.engine.sendAsync(r(t),e)},o.prototype.stop=function(){},o.prototype.start=function(){}},WPTD:function(t,e,n){(function(e){const r=e.browser?n("7sdD"):n(4),o=n("MCLT").inherits,s=n("xQaN"),i=n("Uu7K"),{errors:a}=n("z8+S");function c(t){this.rpcUrl=t.rpcUrl}t.exports=c,o(c,i),c.prototype.handleRequest=function(t,e,n){const o=this.rpcUrl;let i=s(t);r({uri:o,method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(i),rejectUnauthorized:!1,timeout:2e4},(function(t,e,r){if(t)return n(a.internal(t));switch(e.statusCode){case 405:return n(a.methodNotFound());case 504:return function(){let t="Gateway timeout. The request took too long to process. ";return t+="This can happen when querying logs over too wide a block range.",n(a.internal("Gateway timeout. The request took too long to process. This can happen when querying logs over too wide a block range."))}();case 429:return function(){const t=new Error("Too Many Requests");return n(a.internal(t))}();default:if(200!=e.statusCode)return n(a.internal(e.body))}let o;try{o=JSON.parse(r)}catch(t){return console.error(t.stack),n(a.internal(t))}if(o.error)return n(o.error);n(null,o.result)}))}}).call(this,n("8oxB"))},YuTi:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},a5O3:function(t,e,n){const r=n("xQaN");t.exports=function(t,e,n){t.sendAsync(r({method:"eth_estimateGas",params:[e]}),(function(t,e){if(t)return"no contract code at given address"===t.message?n(null,"0xcf08"):n(t);n(null,e.result)}))}},f4g2:function(t,e,n){const r=n("+qE3").EventEmitter,o=n("MCLT").inherits,s=n("tnHP"),i=n("V5x4"),a=n("LCem"),c=n("YOJA"),u=n("/uSP"),p=(n("gO+T"),n("xQaN")),l=function(){};function d(t){r.call(this),this.setMaxListeners(30),t=t||{};const e={sendAsync:this._handleAsync.bind(this)},n=t.blockTrackerProvider||e;this._blockTracker=t.blockTracker||new i({provider:n,pollingInterval:t.pollingInterval||4e3,setSkipCacheFlag:!0}),this._ready=new u,this.currentBlock=null,this._providers=[]}t.exports=d,o(d,r),d.prototype.start=function(t=l){const e=this;e._ready.go(),e._blockTracker.on("latest",t=>{e._getBlockByNumber(t,(t,n)=>{if(t)return void this.emit("error",t);if(!n)return void this.emit("error",new Error("Could not find block"));const r=function(t){return{number:s.toBuffer(t.number),hash:s.toBuffer(t.hash),parentHash:s.toBuffer(t.parentHash),nonce:s.toBuffer(t.nonce),mixHash:s.toBuffer(t.mixHash),sha3Uncles:s.toBuffer(t.sha3Uncles),logsBloom:s.toBuffer(t.logsBloom),transactionsRoot:s.toBuffer(t.transactionsRoot),stateRoot:s.toBuffer(t.stateRoot),receiptsRoot:s.toBuffer(t.receiptRoot||t.receiptsRoot),miner:s.toBuffer(t.miner),difficulty:s.toBuffer(t.difficulty),totalDifficulty:s.toBuffer(t.totalDifficulty),size:s.toBuffer(t.size),extraData:s.toBuffer(t.extraData),gasLimit:s.toBuffer(t.gasLimit),gasUsed:s.toBuffer(t.gasUsed),timestamp:s.toBuffer(t.timestamp),transactions:t.transactions}}(n);e._setCurrentBlock(r),e.emit("rawBlock",n),e.emit("latest",n)})}),e._blockTracker.on("sync",e.emit.bind(e,"sync")),e._blockTracker.on("error",e.emit.bind(e,"error")),e._running=!0,e.emit("start")},d.prototype.stop=function(){this._blockTracker.removeAllListeners(),this._running=!1,this.emit("stop")},d.prototype.isRunning=function(){return this._running},d.prototype.addProvider=function(t,e){const n=this;"number"==typeof e?n._providers.splice(e,0,t):n._providers.push(t),t.setEngine(this)},d.prototype.removeProvider=function(t){const e=this._providers.indexOf(t);if(e<0)throw new Error("Provider not found.");this._providers.splice(e,1)},d.prototype.send=function(t){throw new Error("Web3ProviderEngine does not support synchronous requests.")},d.prototype.sendAsync=function(t,e){const n=this;n._ready.await((function(){Array.isArray(t)?a(t,n._handleAsync.bind(n),e):n._handleAsync(t,e)}))},d.prototype._getBlockByNumber=function(t,e){const n=p({method:"eth_getBlockByNumber",params:[t,!1],skipCache:!0});this._handleAsync(n,(t,n)=>t?e(t):e(null,n.result))},d.prototype._handleAsync=function(t,e){var n=this,r=-1,o=null,s=null,i=[];function a(n,r){s=n,o=r,c(i,(function(t,e){t?t(s,o,e):e()}),(function(){var n={id:t.id,jsonrpc:t.jsonrpc,result:o};null!=s?(n.error={message:s.stack||s.message||s,code:-32e3},e(s,n)):e(null,n)}))}!function e(o){r+=1;i.unshift(o);if(r>=n._providers.length)a(new Error('Request for method "'+t.method+'" not handled by any subprovider. Please check your subprovider configuration to ensure this method is handled.'));else try{n._providers[r].handleRequest(t,e,a)}catch(t){a(t)}}()},d.prototype._setCurrentBlock=function(t){this.currentBlock=t,this.emit("block",t)}},"gO+T":function(t,e,n){const r=n("rE/H");function o(t){return"never"!==a(t)}function s(t){var e=i(t);return e>=t.params.length?t.params:"eth_getBlockByNumber"===t.method?t.params.slice(1):t.params.slice(0,e)}function i(t){switch(t.method){case"eth_getStorageAt":return 2;case"eth_getBalance":case"eth_getCode":case"eth_getTransactionCount":case"eth_call":case"eth_estimateGas":return 1;case"eth_getBlockByNumber":return 0;default:return}}function a(t){switch(t.method){case"web3_clientVersion":case"web3_sha3":case"eth_protocolVersion":case"eth_getBlockTransactionCountByHash":case"eth_getUncleCountByBlockHash":case"eth_getCode":case"eth_getBlockByHash":case"eth_getTransactionByHash":case"eth_getTransactionByBlockHashAndIndex":case"eth_getTransactionReceipt":case"eth_getUncleByBlockHashAndIndex":case"eth_getCompilers":case"eth_compileLLL":case"eth_compileSolidity":case"eth_compileSerpent":case"shh_version":return"perma";case"eth_getBlockByNumber":case"eth_getBlockTransactionCountByNumber":case"eth_getUncleCountByBlockNumber":case"eth_getTransactionByBlockNumberAndIndex":case"eth_getUncleByBlockNumberAndIndex":return"fork";case"eth_gasPrice":case"eth_getBalance":case"eth_getStorageAt":case"eth_getTransactionCount":case"eth_call":case"eth_estimateGas":case"eth_getFilterLogs":case"eth_getLogs":case"eth_blockNumber":return"block";case"net_version":case"net_peerCount":case"net_listening":case"eth_syncing":case"eth_sign":case"eth_coinbase":case"eth_mining":case"eth_hashrate":case"eth_accounts":case"eth_sendTransaction":case"eth_sendRawTransaction":case"eth_newFilter":case"eth_newBlockFilter":case"eth_newPendingTransactionFilter":case"eth_uninstallFilter":case"eth_getFilterChanges":case"eth_getWork":case"eth_submitWork":case"eth_submitHashrate":case"db_putString":case"db_getString":case"db_putHex":case"db_getHex":case"shh_post":case"shh_newIdentity":case"shh_hasIdentity":case"shh_newGroup":case"shh_addToGroup":case"shh_newFilter":case"shh_uninstallFilter":case"shh_getFilterChanges":case"shh_getMessages":return"never"}}t.exports={cacheIdentifierForPayload:function(t,e={}){if(!o(t))return null;const{includeBlockRef:n}=e,i=n?t.params:s(t);return t.method+":"+r(i)},canCache:o,blockTagForPayload:function(t){var e=i(t);if(e>=t.params.length)return null;return t.params[e]},paramsWithoutBlockTag:s,blockTagParamIndex:i,cacheTypeForPayload:a}},"kzD/":function(t,e){const n=3;t.exports=function(){var t=(new Date).getTime()*Math.pow(10,n),e=Math.floor(Math.random()*Math.pow(10,n));return t+e}},pQ88:function(t,e,n){(function(e){var r=n("b3gk");function o(t,e){if(void 0!==e&&t[0]!==e)throw new Error("Invalid network version");if(33===t.length)return{version:t[0],privateKey:t.slice(1,33),compressed:!1};if(34!==t.length)throw new Error("Invalid WIF length");if(1!==t[33])throw new Error("Invalid compression flag");return{version:t[0],privateKey:t.slice(1,33),compressed:!0}}function s(t,n,r){var o=new e(r?34:33);return o.writeUInt8(t,0),n.copy(o,1),r&&(o[33]=1),o}t.exports={decode:function(t,e){return o(r.decode(t),e)},decodeRaw:o,encode:function(t,e,n){return"number"==typeof t?r.encode(s(t,e,n)):r.encode(s(t.version,t.privateKey,t.compressed))},encodeRaw:s}}).call(this,n("HDXh").Buffer)},xQaN:function(t,e,n){const r=n("kzD/"),o=n("U6jy");t.exports=function(t){return o({id:r(),jsonrpc:"2.0",params:[]},t)}},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n}}]);