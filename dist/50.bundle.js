(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{HqHB:function(t,a,e){(t.exports=e("JPst")(!1)).push([t.i,".app-details[data-v-db39205e]{padding:50px}.main-panel[data-v-db39205e]{text-align:center}.fixed-actions .actions[data-v-db39205e]{display:flex;justify-content:space-between}\n",""])},IeaP:function(t,a,e){"use strict";var p=e("L2JU"),n={components:{Scatter:e("wg2a").a},props:["app","suffix"],computed:{...Object(p.d)(["appReputation"]),...Object(p.c)(["ridlEnabled"]),unknownReputation(){return void 0===this.appReputation},trusted(){return this.appReputation&&parseFloat(this.appReputation.decimal)>0},untrusted(){return this.appReputation&&parseFloat(this.appReputation.decimal)<0}}},i=(e("tL4a"),e("KHd+")),s=Object(i.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"app-details"},[t.untrusted?e("figure",{staticClass:"logo scam"},[e("i",{staticClass:"icon-attention"})]):e("figure",{staticClass:"logo",class:{border:"Scatter"!==t.app.applink&&!t.app.img}},["Scatter"===t.app.applink?e("Scatter"):t.app.img?e("img",{attrs:{src:t.app.img}}):e("span",[t._v(t._s(t.$t("popouts.popoutApp.noImage")))])],1),t._v(" "),t.ridlEnabled&&"Scatter"!==t.app.applink?e("section",[!1===t.appReputation?e("figure",{staticClass:"reputation"},[e("i",{staticClass:"icon-spin4 animate-spin"}),t._v(" loading reputation")]):e("section",[t.unknownReputation?e("figure",{staticClass:"reputation"},[t._v(t._s(t.$t("popouts.popoutApp.reputation.unknown")))]):t._e(),t._v(" "),t.trusted?e("figure",{staticClass:"reputation trusted"},[t._v(t._s(t.$t("popouts.popoutApp.reputation.trusty")))]):t._e(),t._v(" "),t.untrusted?e("figure",{staticClass:"reputation untrusted"},[t._v(t._s(t.$t("popouts.popoutApp.reputation.scam")))]):t._e()])]):t._e(),t._v(" "),e("figure",{staticClass:"name"},[e("b",[t._v(t._s(t.app.name))]),t._v(" "),t.suffix?e("span",[t._v(t._s(t.suffix))]):t._e()])])}),[],!1,null,"3c121449",null);a.a=s.exports},J8XJ:function(t,a,e){var p=e("y5zb");"string"==typeof p&&(p=[[t.i,p,""]]),p.locals&&(t.exports=p.locals);(0,e("SZ7m").default)("1a4d8aa0",p,!0,{})},"M/P+":function(t,a,e){"use strict";e.r(a);var p=e("L2JU"),n=(e("qjwK"),e("zAsq")),i=e.n(n),s={components:{PopOutApp:e("IeaP").a},data:()=>({}),computed:{...Object(p.d)(["state"]),...Object(p.c)(["identities","accounts"]),payload(){return this.popup.payload()},app(){return i.a.fromJson(this.payload)}},mounted(){},methods:{returnResult(t){this.$emit("returned",t)}},props:["popup"]},o=(e("oVmc"),e("KHd+")),r=Object(o.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"popout-window"},[e("PopOutApp",{attrs:{app:t.popup.data.props.appData,suffix:t.$t("popouts.linkApp.suffix")}}),t._v(" "),e("section",{staticClass:"fixed-actions"},[t._v("\n        "+t._s(t.$t("popouts.linkApp.description"))+"\n        "),e("br"),t._v(" "),e("br"),t._v(" "),e("section",{staticClass:"actions"},[e("Button",{attrs:{text:t.$t("generic.deny"),big:"1"},nativeOn:{click:function(a){return t.returnResult(!1)}}}),t._v(" "),e("Button",{attrs:{blue:"1",big:"1",text:t.$t("generic.allow")},nativeOn:{click:function(a){return t.returnResult(!0)}}})],1)])],1)}),[],!1,null,"db39205e",null);a.default=r.exports},oVmc:function(t,a,e){"use strict";var p=e("wu70");e.n(p).a},tL4a:function(t,a,e){"use strict";var p=e("J8XJ");e.n(p).a},wu70:function(t,a,e){var p=e("HqHB");"string"==typeof p&&(p=[[t.i,p,""]]),p.locals&&(t.exports=p.locals);(0,e("SZ7m").default)("f0225470",p,!0,{})},y5zb:function(t,a,e){(t.exports=e("JPst")(!1)).push([t.i,".reputation[data-v-3c121449]{padding:5px 12px;font-size:10px;margin-bottom:10px;margin-top:-5px;font-weight:bold;background:#f3f6f7;color:#c8c8c8}.reputation.trusted[data-v-3c121449]{background:#159F00;color:#fff}.reputation.untrusted[data-v-3c121449]{background:#ff0707;color:#fff}.app-details[data-v-3c121449]{text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center}.app-details .logo[data-v-3c121449]{display:flex;align-items:center;justify-content:center;height:100px;width:100px;border-radius:4px;padding:5px;margin-bottom:20px}.app-details .logo.border[data-v-3c121449]{background:#f3f6f7;border:1px solid #dfe0e1}.app-details .logo img[data-v-3c121449]{height:100%;width:100%}.app-details .logo span[data-v-3c121449]{font-size:10px;font-weight:bold;color:#7a7a7a}.app-details .logo.scam[data-v-3c121449]{font-size:48px;border-radius:50%;color:#ff0707;background:#f3f6f7;border:1px solid #dfe0e1;animation:pulsate 0.5s ease infinite}.app-details .name[data-v-3c121449]{font-size:14px}\n",""])}}]);