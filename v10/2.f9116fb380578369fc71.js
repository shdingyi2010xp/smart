webpackJsonp([2],{"0rm6":function(s,t){},B29n:function(s,t,a){"use strict";var n={render:function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"toastwindows_failure_phone"},[t("div",{staticClass:"failure"},[this._m(0),this._v(" "),t("div",{staticClass:"failure_info"},[t("span",[this._v(this._s(this.failure_info))])])])])},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"failure_icon"},[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/shdingyi2010xp/smart/img/ZF/pay_failure_icon.png"}})])}]};var i=a("VU/8")({props:["failure_info"],name:"toastwindows_failure_phone",data:function(){return{}}},n,!1,function(s){a("YnZV")},"data-v-5c06851f",null);t.a=i.exports},D7Xo:function(s,t){},Ifcu:function(s,t){},"KT+S":function(s,t,a){"use strict";var n={render:function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"toastwindows_failure"},[t("div",{staticClass:"failure"},[this._m(0),this._v(" "),t("div",{staticClass:"failure_info"},[t("span",[this._v(this._s(this.failure_info))])])])])},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"failure_icon"},[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/shdingyi2010xp/smart/img/ZF/pay_failure_icon.png"}})])}]};var i=a("VU/8")({props:["failure_info"],name:"toastwindows_failure",data:function(){return{}}},n,!1,function(s){a("Ifcu")},"data-v-257dbcf8",null);t.a=i.exports},"O/7P":function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Xxa5"),i=a.n(n),e=a("exGp"),o=a.n(e),r=a("TQvf"),c=a.n(r),_=a("Fd2+"),l=a("nmEC"),v=a("rA78"),u=a("KT+S"),d=a("StI1"),p=a("B29n"),m=window.Web3Modal.default,h=window.WalletConnectProvider.default,f=l.d.MiningPool,g=l.d.LPToken,C=l.d.USDT,w=l.d.CoinA,x=l.d.RewardToken,$={name:"Airdrop",components:{Toastwindows_failure_phone:p.a,Toastwindows_success_phone:d.a,Toastwindows_failure:u.a,Toastwindows_success:v.a},data:function(){return{EarnTokenName:"CPD",menuShow:!1,has_co:0,BcoinNum:0,pcShow:!0,isBind:!1,connectwallet:"",defaultaccount:"",not_auth:!0,MiningPool:f,LPToken:g,USDT:C,RewardToken:x,CoinA:w,MiningPoolContract:"",LPTokenContract:"",UsdtContract:"",UsdtNum:0,CoinANum:0,RewardTokenContract:"",CoinAContract:"",chose_num:0,rate:.5,max_num:500,min_num:100,ido_total:5e4,ido_num:0,drop_empty:!1,have_num:0,allUsdt_num:0,CoinAName:"VNS",airdrop_pending:"",showLoad_Approve:!1,showLoad2:!1,showLoad3:!1,process:0,process2:100,isEN:!1,sign:!1,airdrop_success:!1,airdrop_failure:!1,approve_success:!1,approve_failure:!1,pay_success:!1,pay_failure:!1}},computed:{ido_process:function(){return this.ido_num/this.ido_total*100+"%"}},created:function(){var s=this;return o()(i.a.mark(function t(){var a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a={walletconnect:{package:h,options:{infuraId:"7c0b90d07c5448beb91cecac47d7b33e"}}},s.web3Modal=new m({network:"mainnet",cacheProvider:!0,providerOptions:a});case 2:case"end":return t.stop()}},t,s)}))()},mounted:function(){document.title=this.$t("m.name"),this.init()},methods:{maxamount:function(s){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=new BigNumber(Math.pow(10,Number(t)));return a?new BigNumber(s.toString()).div(n):new BigNumber(s.toString()).times(n)},get_user_usdt_balance:function(){var s=this;return o()(i.a.mark(function t(){var a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.UsdtContract.balanceOf(s.defaultaccount);case 2:a=t.sent,s.allUsdt_num=(parseInt(100*s.change_big_to_normal(a))/100).toFixed(2),s.min_num<s.allUsdt_num&&s.allUsdt_num<s.max_num?(s.max_num=parseInt(s.allUsdt_num),s.chose_num=s.max_num):s.allUsdt_num<s.min_num?(s.max_num=parseInt(s.allUsdt_num),s.min_num=parseInt(s.allUsdt_num),s.chose_num=s.max_num):s.chose_num=s.max_num;case 5:case"end":return t.stop()}},t,s)}))()},get_user_usdt_allowance:function(){var s=this;return o()(i.a.mark(function t(){var a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.UsdtContract.allowance(s.defaultaccount,s.MiningPool);case 2:a=t.sent,parseInt(s.change_big_to_normal(a))>0?s.not_auth=!1:s.not_auth=!0;case 4:case"end":return t.stop()}},t,s)}))()},get_fixed:function(s,t){return parseInt(this.change_big_to_normal(s)*Math.pow(10,t)/Math.pow(10,t)).toFixed(t)},get_user_rewardtoken_balance:function(){var s=this;return o()(i.a.mark(function t(){var a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.RewardTokenContract.balanceOf(s.defaultaccount);case 2:a=t.sent,s.BcoinNum=(parseInt(1e6*s.change_big_to_normal(a))/1e6).toFixed(6);case 4:case"end":return t.stop()}},t,s)}))()},get_user_coina_balance:function(){var s=this;return o()(i.a.mark(function t(){var a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.CoinAContract.balanceOf(s.defaultaccount);case 2:a=t.sent,s.CoinANum=(parseInt(1e6*s.change_big_to_normal(a))/1e6).toFixed(6);case 4:case"end":return t.stop()}},t,s)}))()},approve:function(){var s=this;return o()(i.a.mark(function t(){var a,n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return(a=s).showLoad_Approve=!0,t.prev=2,t.next=5,s.UsdtContract.approve(f,s.maxamount(1e6,18,!1).toFixed());case 5:return n=t.sent,t.next=8,n.wait();case 8:1===t.sent.status?(a.approve_success=!0,s.not_auth=!1,a.showLoad_Approve=!1,window.sessionStorage.setItem("not_auth",!1),setTimeout(function(){a.approve_success=!1},2e3)):(a.showLoad_Approve=!1,a.approve_failure=!0,setTimeout(function(){a.approve_failure=!1},2e3)),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(2),a.showLoad_Approve=!1,a.approve_failure=!0,setTimeout(function(){a.approve_failure=!1},2e3);case 17:case"end":return t.stop()}},t,s,[[2,12]])}))()},swap:function(s){var t=this;return o()(i.a.mark(function a(){var n,e;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return(n=t).showLoad2=!0,a.prev=2,a.next=5,t.MiningPoolContract.ido(t.maxamount(s,18,!1).toFixed());case 5:return e=a.sent,a.next=8,e.wait();case 8:1===a.sent.status?(t.isShow2=!1,n.showLoad2=!1,n.pay_success=!0,setTimeout(function(){n.pay_success=!1},2e3),t.get_user_coina_balance(),t.get_user_usdt_balance(),t.get_user_rewardtoken_balance(),t.get_ido_info()):(n.showLoad2=!1,n.pay_failure=!0,setTimeout(function(){n.pay_failure=!1},2e3)),a.next=17;break;case 12:a.prev=12,a.t0=a.catch(2),n.showLoad2=!1,n.pay_failure=!0,setTimeout(function(){n.pay_failure=!1},2e3);case 17:case"end":return a.stop()}},a,t,[[2,12]])}))()},airdrop:function(){var s=this;return o()(i.a.mark(function t(){var a,n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return(a=s).showLoad3=!0,t.prev=2,t.next=5,s.MiningPoolContract.airdrop();case 5:return n=t.sent,t.next=8,n.wait();case 8:1===t.sent.status?(a.airdrop_success=!0,a.showLoad3=!1,s.get_airdrop_pending(),setTimeout(function(){a.airdrop_success=!1},2e3)):(a.showLoad3=!1,a.airdrop_failure=!0,setTimeout(function(){a.airdrop_failure=!1},2e3)),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(2),a.showLoad3=!1,a.airdrop_failure=!0,setTimeout(function(){a.airdrop_failure=!1},2e3);case 17:case"end":return t.stop()}},t,s,[[2,12]])}))()},get_airdrop_info:function(){var s=this;return o()(i.a.mark(function t(){var a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.MiningPoolContract.getAirdropInfo(s.defaultaccount);case 3:a=t.sent,s.airdrop_pending=s.get_fixed(a[0],2),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}},t,s,[[0,7]])}))()},get_ido_info:function(){var s=this;return o()(i.a.mark(function t(){var a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.MiningPoolContract.getIdoInfo();case 3:a=t.sent,s.ido_total=s.get_fixed(a[0],0),s.ido_num=s.get_fixed(a[1],2),s.process=(100*a[1]/a[0]).toFixed(2),s.process2>=s.process&&(s.process2=s.process),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}},t,s,[[0,10]])}))()},connect_wallet:function(){var s=this;return o()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.onConnect();case 2:case"end":return t.stop()}},t,s)}))()},change_big_to_normal:function(s){return ethers.utils.formatUnits(ethers.BigNumber.from(s.toString()))},onConnect:function(){var s=this;return o()(i.a.mark(function t(){var a,n,e,o,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.web3Modal.connect();case 2:return a=t.sent,n=new Web3(a),t.next=6,n.eth.getAccounts();case 6:e=t.sent,s.defaultaccount=e[0],o=new ethers.providers.Web3Provider(a),r=o.getSigner(),s.MiningPoolContract=new ethers.Contract(f,l.b,r),s.LPTokenContract=new ethers.Contract(g[0],l.a,r),s.UsdtContract=new ethers.Contract(C,l.e,r),s.RewardTokenContract=new ethers.Contract(x,l.c,r),s.CoinAContract=new ethers.Contract(w,l.c,r),s.has_co=1,window.sessionStorage.setItem("has_co",1),s.connectwallet=s.defaultaccount.substring(0,6)+"..."+s.defaultaccount.substring(s.defaultaccount.length-4),s.connectwallet_full=s.defaultaccount,s.info_t1=s.defaultaccount,s.info_t2=window.location.href.split("?code")[0]+"?code="+s.defaultaccount,s.get_user_usdt_allowance(),s.get_user_coina_balance(),s.get_user_usdt_balance(),s.get_user_rewardtoken_balance(),s.get_airdrop_info(),s.get_ido_info();case 27:case"end":return t.stop()}},t,s)}))()},copy:function(){var s=new c.a(".tag-read");s.on("success",function(t){Object(_.c)("复制成功"),s.destroy()}),s.on("error",function(t){s.destroy()})},lang:function(s){this.$i18n.locale=s,document.title=this.$t("m.name");"cn"==this.$i18n.locale?this.isEN=!1:this.isEN=!0},init:function(){window.sessionStorage.getItem("not_auth")&&(this.not_auth=window.sessionStorage.getItem("not_auth")),window.sessionStorage.getItem("has_co")&&(this.has_co=window.sessionStorage.getItem("has_co"),1==this.has_co&&this.onConnect()),"cn"==this.$i18n.locale?this.isEN=!1:this.isEN=!0;var s,t,a,n,i,e,o,r=(s=navigator.userAgent,t=/(?:Windows Phone)/.test(s),a=/(?:SymbianOS)/.test(s)||t,n=/(?:Android)/.test(s),i=/(?:Firefox)/.test(s),/(?:Chrome|CriOS)/.test(s),e=/(?:iPad|PlayBook)/.test(s)||n&&!/(?:Mobile)/.test(s)||i&&/(?:Tablet)/.test(s),o=/(?:iPhone)/.test(s)&&!e,{isTablet:e,isPhone:o,isAndroid:n,isPc:!o&&!n&&!a});r.isAndroid||r.isPhone?this.pcShow=!1:r.isTablet&&(this.pcShow=!1)},onChange:function(s){},sign_out:function(){var s=this;return o()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s.sign=!1,t.next=3,s.web3Modal.clearCachedProvider();case 3:s.has_co=0,window.sessionStorage.setItem("has_co",0),s.BcoinNum=0,s.price=0,s.Your_balance=0,s.Your_stake_num=0,s.msg=0,s.msg2=0,s.shouyi=0,s.shouyi_all=0,s.RandNumList=[],s.Record_list=[],s.find=[],clearInterval(s.timer3),s.timer3=null,s.init();case 19:case"end":return t.stop()}},t,s)}))()}}},b={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"main"},[s.pcShow?a("div",{staticClass:"pc"},[a("div",{staticClass:"Drop"},[s.sign?a("div",{staticClass:"sign_out",on:{mousewheel:s.mousewheel}},[a("div",{staticClass:"sign_main"},[a("div",{staticClass:"close",on:{click:function(t){s.sign=!1}}}),s._v(" "),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/shdingyi2010xp/smart/img/ZF/cpd.png"}}),s._v(" "),a("span",{staticClass:"coinnum"},[s._v(s._s(s.BcoinNum))]),s._v(" "),a("span",{staticClass:"cointext"},[s._v(s._s(s.EarnTokenName)+"  "+s._s(s.$t("m.Balance")))]),s._v(" "),a("div",{staticClass:"out",on:{click:function(t){return s.sign_out()}}},[a("span",[s._v(s._s(s.$t("m.Signout")))])])])]):s._e(),s._v(" "),s.airdrop_success?a("toastwindows_success",{staticClass:"airdrop_success",attrs:{success_info:s.$t("m.ClaimOK")}}):s._e(),s._v(" "),s.airdrop_failure?a("toastwindows_failure",{staticClass:"airdrop_failure",attrs:{failure_info:s.$t("m.ClaimBad")}}):s._e(),s._v(" "),s.approve_success?a("toastwindows_success",{staticClass:"approve_success",attrs:{success_info:s.$t("m.ApproveOK")}}):s._e(),s._v(" "),s.approve_failure?a("toastwindows_failure",{staticClass:"approve_failure",attrs:{failure_info:s.$t("m.ApproveBad")}}):s._e(),s._v(" "),s.pay_success?a("toastwindows_success",{staticClass:"pay_success",attrs:{success_info:s.$t("m.Payforsuccess")}}):s._e(),s._v(" "),s.pay_failure?a("toastwindows_failure",{staticClass:"pay_failure",attrs:{failure_info:s.$t("m.Payforfailure")}}):s._e(),s._v(" "),a("div",{staticClass:"top"},[a("div",{staticClass:"top_in"},[s._m(0),s._v(" "),a("div",{staticClass:"top_mid"},[a("div",{staticClass:"home"},[a("div",{staticClass:"home_span",on:{click:function(t){return s.$router.push({name:"ZFindex",query:{}})}}},[a("span",[s._v(s._s(s.$t("m.Home")))])])]),s._v(" "),a("div",{staticClass:"invitation",on:{click:function(t){return s.$router.push({name:"Invitation",query:{}})}}},[a("div",{staticClass:"invitation_span"},[a("span",[s._v(s._s(s.$t("m.Invite")))])])]),s._v(" "),a("div",{staticClass:"drop"},[a("div",{staticClass:"drop_span"},[a("span",[s._v(s._s(s.$t("m.IPO")))])])])]),s._v(" "),a("div",{staticClass:"top_right"},[1==s.has_co?a("div",{staticClass:"link_wallte",on:{click:function(t){s.sign=!0}}},[a("span",{staticClass:"txt3"},[s._v(s._s(s.BcoinNum)+" "+s._s(s.EarnTokenName))]),s._v(" "),a("div",{staticClass:"line_mid"}),s._v(" "),a("div",{staticClass:"txt4"},[a("span",[s._v(s._s(s.connectwallet))])])]):a("div",{staticClass:"unlink_wallte",on:{click:function(t){return s.connect_wallet()}}},[a("span",{staticStyle:{cursor:"pointer"}},[s._v("\n                "+s._s(s.$t("m.UnlockWallet"))+"\n              ")])])]),s._v(" "),a("div",{staticClass:"top_lang"},[a("span",{class:s.isEN?"not_lang_zh":"lang_zh",on:{click:function(t){return s.lang("cn")}}},[s._v("中")]),s._v(" "),a("span",{class:s.isEN?"lang_en":"not_lang_en",on:{click:function(t){return s.lang("en")}}},[s._v("EN")])])])]),s._v(" "),a("div",{staticClass:"banner1"},[a("div",{staticClass:"in_banner"},[a("span",[s._v(s._s(s.$t("m.InviteToReward")))]),s._v(" "),a("div",{staticClass:"line"})])]),s._v(" "),a("div",{staticClass:"Drop_main"},[a("div",{staticClass:"Drop_info"},[a("div",{staticClass:"info_t1"},[a("img",{staticClass:"Cicon",attrs:{src:"static/img/ZF/cpd.png"}}),s._v(" "),a("span",{staticClass:"CoinAname"},[s._v(s._s(s.EarnTokenName))]),s._v(" "),a("div",{staticClass:"airdrop"},[a("span",[s._v(s._s(s.$t("m.AirDrop")))])])]),s._v(" "),a("div",{staticClass:"info_main"},[s.drop_empty?s._e():a("div",{staticClass:"have"},[a("span",{staticClass:"have_num"},[s._v(s._s(s.airdrop_pending))]),s._v(" "),a("div",{class:0==s.airdrop_pending?"unhave_btn":"have_btn"},[s.showLoad3?a("div",{staticClass:"showLoad"},[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/shdingyi2010xp/smart/img/ZF/zf_loading_b.png"}}),s._v(" "),a("span",[s._v(s._s(s.$t("m.Claim")))])]):a("span",{on:{click:function(t){return s.airdrop()}}},[s._v(s._s(s.$t("m.Claim")))])]),s._v(" "),a("span",{staticClass:"have_info"},[s._v(s._s(s.$t("m.InviteToAirdrop")))])]),s._v(" "),s.drop_empty?a("div",{staticClass:"empty"},[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/shdingyi2010xp/smart/img/ZF/Drop_empty.png"}}),s._v(" "),a("span",{staticClass:"e_t1"},[s._v(s._s(s.$t("m.NoAirdropRewards")))]),s._v(" "),a("span",[s._v(s._s(s.$t("m.InviteToAirdrop")))])]):s._e()])]),s._v(" "),a("div",{staticClass:"speed"},[a("div",{staticClass:"speed_t1"},[a("img",{staticClass:"Cicon",attrs:{src:"https://cdn.jsdelivr.net/gh/shdingyi2010xp/smart/img/ZF/vns.png"}}),s._v(" "),a("span",{staticClass:"CoinAname"},[s._v(s._s(s.CoinAName))]),s._v(" "),a("div",{staticClass:"state"},[a("span",[s._v(s._s(s.$t("m.InProgress")))])]),s._v(" "),a("div",{staticClass:"title"},[a("span",[s._v(s._s(s.$t("m.Public")))])])]),s._v(" "),a("div",{staticClass:"target"},[a("div",{staticClass:"target_left"},[a("span",{staticClass:"lt1"},[s._v(s._s(s.$t("m.TotalRaise")))]),s._v(" "),a("span",{staticClass:"lt2"},[s._v(s._s(s.ido_total)+" USDT")])]),s._v(" "),a("div",{staticClass:"target_right"},[a("span",{staticClass:"rt1"},[s._v(s._s(s.$t("m.MinAllocation")))]),s._v(" "),a("span",{staticClass:"rt2"},[s._v(s._s(s.min_num)+" USDT")])])]),s._v(" "),a("div",{staticClass:"speed_t2"},[a("span",{staticClass:"Swap_Progress"},[s._v(s._s(s.$t("m.SwapProgress")))]),s._v(" "),a("span",{staticClass:"rate"},[s._v("1 VNS = 0.5 USDT")])]),s._v(" "),a("div",{staticClass:"progress"},[a("van-progress",{attrs:{percentage:s.process2,"stroke-width":"8","show-pivot":!1,color:"linear-gradient(270deg, #B0F6F8 0%, #8FF99B 100%)"}})],1),s._v(" "),a("div",{staticClass:"speed_t3"},[a("span",{staticClass:"Progress"},[s._v(s._s(s.process)+"%")]),s._v(" "),a("span",{staticClass:"proportion"},[s._v(s._s(s.ido_num)+"/"+s._s(s.ido_total))])]),s._v(" "),a("div",{staticClass:"speed_t4"},[a("span",{staticClass:"end_time"},[s._v(s._s(s.$t("m.EndTime"))+": 2021-04-30")])])]),s._v(" "),a("div",{staticClass:"Public_offering"},[a("span",{staticClass:"public_t1"},[s._v(s._s(s.CoinAName)+" "+s._s(s.$t("m.Balance"))+" "+s._s(s.CoinANum))]),s._v(" "),a("div",{staticClass:"exchage"},[a("div",{staticClass:"ex_left"},[a("span",{staticClass:"f_t0"},[s._v(s._s(s.$t("m.From")))]),s._v(" "),a("div",{staticClass:"form"},[a("div",{staticClass:"f_l"},[a("div",{staticClass:"l_t"},[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/shdingyi2010xp/smart/img/ZF/Drop_icon2.png"}}),s._v(" "),a("span",[s._v(s._s(s.allUsdt_num))])]),s._v(" "),a("span",{staticClass:"f_t1"},[s._v(s._s(s.chose_num))])]),s._v(" "),s._m(1)])]),s._v(" "),a("img",{staticClass:"img_ex",attrs:{src:"https://cdn.jsdelivr.net/gh/shdingyi2010xp/smart/img/ZF/Drop_exchange.png"}}),s._v(" "),a("div",{staticClass:"ex_right"},[a("span",{staticClass:"t_t0"},[s._v(s._s(s.$t("m.To")))]),s._v(" "),a("div",{staticClass:"to"},[a("span",{staticClass:"t_t1"},[s._v(s._s(s.chose_num*s.rate))]),s._v(" "),a("div",{staticClass:"t_in"},[a("span",{staticClass:"t_t2"},[s._v(s._s(s.CoinAName))]),s._v(" "),a("img",{staticClass:"img_t",attrs:{src:"https://cdn.jsdelivr.net/gh/shdingyi2010xp/smart/img/ZF/vns.png"}})])])])]),s._v(" "),a("div",{staticClass:"chose_num"},[a("div",{staticClass:"chose_t1"},[a("span",{staticClass:"t1_l"},[s._v(s._s(s.$t("m.Min")))]),s._v(" "),a("span",{staticClass:"t1_r"},[s._v(s._s(s.$t("m.Max")))])]),s._v(" "),a("van-slider",{staticClass:"slider",attrs:{max:s.max_num,min:s.min_num,"bar-height":"8px","active-color":"#8FF99B"},on:{change:s.onChange},scopedSlots:s._u([{key:"button",fn:function(){return[a("div",{staticClass:"custom-button"})]},proxy:!0}],null,!1,2603049259),model:{value:s.chose_num,callback:function(t){s.chose_num=t},expression:"chose_num"}}),s._v(" "),a("div",{staticClass:"chose_t2"},[a("span",{staticClass:"cn1"},[s._v(s._s(s.min_num))]),s._v(" "),a("span",{staticClass:"cn2"},[s._v(s._s(s.max_num))])])],1),s._v(" "),a("div",{staticClass:"btn"},[a("div",{class:s.not_auth?"approve":"unapprove"},[s.showLoad_Approve?a("div",{staticClass:"showLoad"},[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/shdingyi2010xp/smart/img/ZF/zf_loading_b.png"}}),s._v(" "),a("span",[s._v(s._s(s.$t("m.Approve")))])]):a("span",{on:{click:function(t){return s.approve()}}},[s._v(s._s(s.$t("m.Approve")))])]),s._v(" "),a("div",{class:s.not_auth?"unpay":"pay"},[s.showLoad2?a("div",{staticClass:"showLoad"},[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/shdingyi2010xp/smart/img/ZF/zf_loading_b.png"}}),s._v(" "),a("span",[s._v(s._s(s.$t("m.Swap")))])]):a("span",{on:{click:function(t){return s.swap(s.chose_num)}}},[s._v(s._s(s.$t("m.Swap")))])]),s._v(" "),a("div",{staticClass:"state"},[a("div",{staticClass:"line"}),s._v(" "),a("div",{class:s.not_auth?"una_img":"a_img"}),s._v(" "),a("div",{class:s.not_auth?"unl_img":"l_img"})])])])])],1)]):s._e(),s._v(" "),s.pcShow?s._e():a("div",{staticClass:"phone"},[a("div",{staticClass:"Drop"},[s.airdrop_success?a("toastwindows_success_phone",{staticClass:"airdrop_success",attrs:{success_info:s.$t("m.ClaimOK")}}):s._e(),s._v(" "),s.airdrop_failure?a("toastwindows_failure_phone",{staticClass:"airdrop_failure",attrs:{failure_info:s.$t("m.ClaimBad")}}):s._e(),s._v(" "),s.approve_success?a("toastwindows_success_phone",{staticClass:"approve_success",attrs:{success_info:s.$t("m.ApproveOK")}}):s._e(),s._v(" "),s.approve_failure?a("toastwindows_failure_phone",{staticClass:"approve_failure",attrs:{failure_info:s.$t("m.ApproveBad")}}):s._e(),s._v(" "),s.pay_success?a("toastwindows_success_phone",{staticClass:"pay_success",attrs:{success_info:s.$t("m.Payforsuccess")}}):s._e(),s._v(" "),s.pay_failure?a("toastwindows_failure_phone",{staticClass:"pay_failure",attrs:{failure_info:s.$t("m.Payforfailure")}}):s._e(),s._v(" "),a("div",{staticClass:"top"},[a("div",{staticClass:"top_in"},[s._m(2),s._v(" "),a("div",{staticClass:"top_right_menu",on:{click:function(t){s.menuShow=!0}}}),s._v(" "),a("div",{staticClass:"top_language"},[a("span",{class:s.isEN?"not_zh":"zh",on:{click:function(t){return s.lang("cn")}}},[s._v("中")]),s._v(" "),a("span",{class:s.isEN?"en":"not_en",on:{click:function(t){return s.lang("en")}}},[s._v("EN")])]),s._v(" "),s.menuShow?a("div",{staticClass:"top_right",on:{click:function(t){s.menuShow=!1}}},[a("div",{staticClass:"box"},[a("div",{staticClass:"home",on:{click:function(t){return s.$router.push({name:"ZFindex"})}}},[a("div",{staticClass:"home_span"},[a("span",{class:s.page=""},[s._v(s._s(s.$t("m.Home")))])])]),s._v(" "),a("div",{staticClass:"invitation",on:{click:function(t){return s.$router.push({name:"Invitation",query:{}})}}},[a("div",{staticClass:"invitation_span"},[a("span",[s._v(s._s(s.$t("m.Invite")))])])]),s._v(" "),a("div",{staticClass:"drop"},[a("div",{staticClass:"drop_span"},[a("span",[s._v(s._s(s.$t("m.IPO")))])])])])]):s._e()])]),s._v(" "),a("div",{staticClass:"banner1"},[a("div",{staticClass:"in_banner"},[a("span",[s._v(s._s(s.$t("m.InviteToAirdrop")))]),s._v(" "),a("div",{staticClass:"line"})])]),s._v(" "),a("div",{staticClass:"Drop_main"},[a("div",{staticClass:"Drop_info"},[a("div",{staticClass:"info_t1"},[a("img",{staticClass:"Cicon",attrs:{src:"https://cdn.jsdelivr.net/gh/shdingyi2010xp/smart/img/ZF/cpd.png"}}),s._v(" "),a("span",{staticClass:"CoinAname"},[s._v(s._s(s.EarnTokenName))]),s._v(" "),a("div",{staticClass:"airdrop"},[a("span",[s._v(s._s(s.$t("m.AirDrop")))])])]),s._v(" "),a("div",{staticClass:"info_main"},[s.drop_empty?s._e():a("div",{staticClass:"have"},[a("span",{staticClass:"have_num"},[s._v(s._s(s.airdrop_pending))]),s._v(" "),a("div",{class:0==s.airdrop_pending?"unhave_btn":"have_btn"},[s.showLoad3?a("div",{staticClass:"showLoad"},[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/shdingyi2010xp/smart/img/ZF/zf_loading_b.png"}}),s._v(" "),a("span",[s._v(s._s(s.$t("m.Claim")))])]):a("span",{on:{click:function(t){return s.airdrop()}}},[s._v(s._s(s.$t("m.Claim")))])]),s._v(" "),a("span",{staticClass:"have_info"},[s._v(s._s(s.$t("m.InviteToAirdrop")))])]),s._v(" "),s.drop_empty?a("div",{staticClass:"empty"},[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/shdingyi2010xp/smart/img/ZF/Drop_empty.png"}}),s._v(" "),a("span",{staticClass:"e_t1"},[s._v(s._s(s.$t("m.NoAirdropRewards")))]),s._v(" "),a("span",[s._v(s._s(s.$t("m.InviteToAirdrop")))])]):s._e()])]),s._v(" "),a("div",{staticClass:"speed"},[a("div",{staticClass:"speed_t1"},[a("img",{staticClass:"Cicon",attrs:{src:"https://cdn.jsdelivr.net/gh/shdingyi2010xp/smart/img/ZF/vns.png"}}),s._v(" "),a("span",{staticClass:"CoinAname"},[s._v(s._s(s.CoinAName))]),s._v(" "),a("div",{staticClass:"state"},[a("span",[s._v(s._s(s.$t("m.InProgress")))])]),s._v(" "),a("div",{staticClass:"title"},[a("span",[s._v(s._s(s.$t("m.Public")))])])]),s._v(" "),a("div",{staticClass:"target"},[a("div",{staticClass:"target_left"},[a("span",{staticClass:"lt1"},[s._v(s._s(s.$t("m.TotalRaise")))]),s._v(" "),a("span",{staticClass:"lt2"},[s._v(s._s(s.ido_total)+" "),a("span",{staticStyle:{"font-size":"12px"}},[s._v("USDT")])])]),s._v(" "),a("div",{staticClass:"target_right"},[a("span",{staticClass:"rt1"},[s._v(s._s(s.$t("m.MinAllocation")))]),s._v(" "),a("span",{staticClass:"rt2"},[s._v(s._s(s.min_num)+" "),a("span",{staticStyle:{"font-size":"12px"}},[s._v("USDT")])])])]),s._v(" "),a("div",{staticClass:"speed_t2"},[a("span",{staticClass:"Swap_Progress"},[s._v(s._s(s.$t("m.SwapProgress")))]),s._v(" "),a("span",{staticClass:"rate"},[s._v("1 VNS = 0.5 USDT")])]),s._v(" "),a("div",{staticClass:"progress"},[a("van-progress",{attrs:{percentage:s.process2,id:"jdt","stroke-width":"8","show-pivot":!1,color:"linear-gradient(270deg, #B0F6F8 0%, #8FF99B 100%)"}})],1),s._v(" "),a("div",{staticClass:"speed_t3"},[a("span",{staticClass:"Progress"},[s._v(s._s(s.process)+"%")]),s._v(" "),a("span",{staticClass:"proportion"},[s._v(s._s(s.ido_num)+"/"+s._s(s.ido_total))])]),s._v(" "),a("div",{staticClass:"speed_t4"},[a("span",{staticClass:"end_time"},[s._v(s._s(s.$t("m.EndTime"))+": 2021-04-30")])])]),s._v(" "),a("div",{staticClass:"Public_offering"},[a("span",{staticClass:"public_t1"},[s._v(s._s(s.CoinAName)+" "+s._s(s.$t("m.Balance"))+" "+s._s(s.CoinANum))]),s._v(" "),a("div",{staticClass:"exchage"},[a("div",{staticClass:"ex_left"},[a("span",{staticClass:"f_t0"},[s._v(s._s(s.$t("m.From")))]),s._v(" "),a("div",{staticClass:"form"},[s._m(3),s._v(" "),a("div",{staticClass:"l_t"},[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/shdingyi2010xp/smart/img/ZF/Drop_icon2.png"}}),s._v(" "),a("span",[s._v(s._s(s.allUsdt_num))])]),s._v(" "),a("span",{staticClass:"f_t1"},[s._v(s._s(s.chose_num)+" ")])])]),s._v(" "),a("img",{staticClass:"img_ex",attrs:{src:"https://cdn.jsdelivr.net/gh/shdingyi2010xp/smart/img/ZF/Drop_exchange.png"}}),s._v(" "),a("div",{staticClass:"ex_right"},[a("span",{staticClass:"t_t0"},[s._v(s._s(s.$t("m.To")))]),s._v(" "),a("div",{staticClass:"to"},[a("div",{staticClass:"t_in"},[a("span",{staticClass:"t_t2"},[s._v(s._s(s.CoinAName))]),s._v(" "),a("img",{staticClass:"img_t",attrs:{src:"https://cdn.jsdelivr.net/gh/shdingyi2010xp/smart/img/ZF/vns.png"}})]),s._v(" "),a("span",{staticClass:"t_t1"},[s._v(s._s(s.chose_num*s.rate))])])])]),s._v(" "),a("div",{staticClass:"chose_num"},[a("div",{staticClass:"chose_t1"},[a("span",{staticClass:"t1_l"},[s._v(s._s(s.$t("m.Min")))]),s._v(" "),a("span",{staticClass:"t1_r"},[s._v(s._s(s.$t("m.Max")))])]),s._v(" "),a("van-slider",{staticClass:"slider",attrs:{max:s.max_num,min:s.min_num,"bar-height":"4px","active-color":"#8FF99B"},on:{change:s.onChange},scopedSlots:s._u([{key:"button",fn:function(){return[a("div",{staticClass:"custom-button"})]},proxy:!0}],null,!1,2603049259),model:{value:s.chose_num,callback:function(t){s.chose_num=t},expression:"chose_num"}}),s._v(" "),a("div",{staticClass:"chose_t2"},[a("span",{staticClass:"cn1"},[s._v(s._s(s.min_num))]),s._v(" "),a("span",{staticClass:"cn2"},[s._v(s._s(s.max_num))])])],1),s._v(" "),a("div",{staticClass:"btn"},[a("div",{class:s.not_auth?"approve":"unapprove"},[a("div",{staticClass:"app_img1"}),s._v(" "),s.showLoad_Approve?a("div",{staticClass:"showLoad"},[a("span",[s._v(s._s(s.$t("m.Approve")))]),s._v(" "),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/shdingyi2010xp/smart/img/ZF/zf_loading_b.png"}})]):a("span",{on:{click:function(t){return s.approve()}}},[s._v(s._s(s.$t("m.Approve")))])]),s._v(" "),a("div",{class:s.not_auth|s.allUsdt_num<s.min_num?"unpay_toroll":"pay_toroll"},[a("div",{staticClass:"pay_img"}),s._v(" "),s.showLoad2?a("div",{staticClass:"showLoad"},[a("span",[s._v(s._s(s.$t("m.Swap")))]),s._v(" "),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/shdingyi2010xp/smart/img/ZF/zf_loading_b.png"}})]):a("span",{on:{click:function(t){return s.swap(s.chose_num)}}},[s._v(s._s(s.$t("m.Swap")))])])])])])],1)])])},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"top_left"},[t("div",{staticClass:"icon"})])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"f_in"},[t("span",{staticClass:"f_t2"},[this._v("USDT")]),this._v(" "),t("img",{staticClass:"img_f",attrs:{src:"https://cdn.jsdelivr.net/gh/shdingyi2010xp/smart/img/ZF/zf_index_icon1.png"}})])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"top_left"},[t("div",{staticClass:"icon"})])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"f_in"},[t("img",{staticClass:"img_f",attrs:{src:"https://cdn.jsdelivr.net/gh/shdingyi2010xp/smart/img/ZF/zf_index_icon1.png"}}),this._v(" "),t("span",{staticClass:"f_t2"},[this._v("USDT")])])}]};var y=a("VU/8")($,b,!1,function(s){a("cE7S")},"data-v-35705b22",null);t.default=y.exports},StI1:function(s,t,a){"use strict";var n={render:function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"toastwindows_success_phone"},[t("div",{staticClass:"sucess"},[this._m(0),this._v(" "),t("div",{staticClass:"success_info"},[t("span",[this._v(this._s(this.success_info))])])])])},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"sucess_icon"},[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/shdingyi2010xp/smart/img/ZF/pay_sucess_icon.png"}})])}]};var i=a("VU/8")({props:["success_info"],name:"toastwindows_success_phone",data:function(){return{}}},n,!1,function(s){a("D7Xo")},"data-v-a1546190",null);t.a=i.exports},YnZV:function(s,t){},cE7S:function(s,t){},rA78:function(s,t,a){"use strict";var n={render:function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"toastwindows_success",on:{mousewheel:this.mousewheel}},[t("div",{staticClass:"sucess"},[this._m(0),this._v(" "),t("div",{staticClass:"success_info"},[t("span",[this._v(this._s(this.success_info))])])])])},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"sucess_icon"},[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/shdingyi2010xp/smart/img/ZF/pay_sucess_icon.png"}})])}]};var i=a("VU/8")({props:["success_info"],name:"toastwindows_success",data:function(){return{}}},n,!1,function(s){a("0rm6")},"data-v-64d29542",null);t.a=i.exports}});