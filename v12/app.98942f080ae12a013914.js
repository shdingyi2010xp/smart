webpackJsonp([6],{"4ml/":function(e,t){},H7gO:function(e,t){},LVcC:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.d(t,"m",function(){return a});var a={UnlockWallet:"Unlock Wallet",MainTitle:'Twelve Constellation Series "Pisces"',MainDesc:"It is said that the two fish of Pisces, one is Venus(VNS), the other is Cupid(CPD)",MainDesc1:"It is said that the two fish of Pisces",MainDesc2:"One is Venus(VNS), the other is Cupid(CPD)",MainDesc3:"The other is Cupid(CPD)",Title:"Staking",AirDrop:"Airdrop",Home:"Home",IPO:"AirDrop & Public",name:"Pisces",AddLiquidity:"Add Liquidity",Buy:"Buy",Pay:"Pay",Balance:"Balance",Signout:"Disconnect",TotalRaise:"Total Raise",EndTime:"End Time",SwapProgress:"Swap Progress",InProgress:"In Progress",Public:"Public",MinAllocation:"Min Allocation",GoingToPay:"It's going to pay",Payforsuccess:"Payment successful",Payforfailure:"Payment failed",errInfo:"Please click in order",Congratulationsgettingmnemonics:"Congratulations on getting mnemonics",Toview:"To view",Invite:"Invite",EarnCpdByStaking:"Earn CPD by Staking VNS-USDT-LP",Withdraw:"Withdraw",Deposit:"Deposit",Stake:"Stake",StakeOk:"Deposit Succeed",StakeBad:"Deposit Failed",WithdrawOK:"Withdraw Succeed",WithdrawBad:"Withdraw Failed",Unstake:"Unstake",Available:"Available",Earned:"Earned",TotalEarned:"Total Earned",InviteToReward:"Invite friends to get a huge reward",InviteToAirdrop:"Invite friends to get more airdrop bonuses",NoAirdropRewards:"Sorry, there is no airdrop",IPOTitle:"VNS Swap",Copyandinvitefriends:"Copy and invite friends",Fillintheinviter:"Fill in the inviter's address for binding",Bind:"Bind",BindOK:"Bind Succeed",BindBad:"Bind Failed",WhoInviteMe:"My Parent Node",TotalRewards:"Total Rewards",MyMiners:"My Child Nodes",Staked:"Staked",Harvest:"Harvest",ClaimOK:"Claim Succeed",ClaimBad:"Claim Failed",Claim:"Claim",EarnedCoinA:"CPD Earned",ClaimReward:"Claim Reward",MinersAddress:"Public Key Of ChildNode",Mypublickey:"My public key",Approve:"Approve",ApproveOK:"Approve Succeed",ApproveBad:"Approve Failed",Swap:"Swap",From:"From",To:"To",Price:"Price",h24:"24h",Unlock:"Unlock",Unlocked:"Unlocked",ScratchCardGames:"Scratch Card Games",ScratchCardGamesInfo:"Scratch the card to unlock 12 mnemonics, receive an airdrop account, and win big prizes",Record:"Record",ValueLocked:"Value Locked",CopyOk:"Coppied",Min:"Min",Max:"Max",Auditagency:"Audit agency",Walletsupport:"Wallet Support",Tutorial:"Tutorial",HuobiwalletTutorial:"Huobi Wallet Tutorial",TokenPocketTutorial:"Token Pocket Tutorial",WebsideTutorial:"Web-side Tutorial",ContactUs:"Contact Us",Copyright:"Copyright",AllRightsReserved:"All Rights Reserved"}},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("HSQo"),n=i.n(a),o=i("7+uW"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("keep-alive",[this.$route.meta.keepAlive?t("router-view"):this._e()],1),this._v(" "),this.$route.meta.keepAlive?this._e():t("router-view")],1)},staticRenderFns:[]};var l=i("VU/8")({name:"app",data:function(){return{}},mounted:function(){},methods:{}},r,!1,function(e){i("vh+i")},null,null).exports,c=i("Fd2+"),s=(i("4ml/"),i("tY+K"),i("H7gO"),i("rqsT"),i("TXmL")),d=i("NYxO"),u=i("424j");o.a.use(d.a);var p=new d.a.Store({plugins:[Object(u.a)({storage:window.sessionStorage,reducer:function(e){return{has_co:e.has_co}}})],state:{code:"",lat:"",lng:"",index:0,url:"",article:""},getters:{recruitScrollY:function(e){return e.recruitScrollY},url:function(e){return e.url},article:function(e){return e.article}},mutations:{getCode:function(e,t){e.code=t},getUrl:function(e,t){e.url=t},getLat:function(e,t){e.lat=t},getLng:function(e,t){e.lng=t},getIndex:function(e,t){e.index=t},getArticle:function(e,t){e.article=t}},actions:{},modules:{}}),h=i("/ocq");o.a.use(h.a);var v=[{path:"/",name:"ZFindex",component:function(e){return Promise.all([i.e(0),i.e(1)]).then(function(){var t=[i("Bc1I")];e.apply(null,t)}.bind(this)).catch(i.oe)},meta:{keepAlive:!1,wechatAuth:!1}},{path:"/Invitation",name:"Invitation",component:function(e){return Promise.all([i.e(0),i.e(3)]).then(function(){var t=[i("gwg5")];e.apply(null,t)}.bind(this)).catch(i.oe)},meta:{keepAlive:!1,wechatAuth:!1}},{path:"/Drop",name:"Drop",component:function(e){return Promise.all([i.e(0),i.e(2)]).then(function(){var t=[i("O/7P")];e.apply(null,t)}.bind(this)).catch(i.oe)},meta:{keepAlive:!1,wechatAuth:!1}},{path:"/BaoMing",name:"BaoMing",component:function(e){return i.e(4).then(function(){var t=[i("x0GW")];e.apply(null,t)}.bind(this)).catch(i.oe)},meta:{keepAlive:!1,wechatAuth:!1}}],m=new h.a({mode:"history",base:(Object({NODE_ENV:"production"}).BASE_ENV,""),routes:v,scrollBehavior:function(e,t,i){return i||(t.meta.keepAlive&&(t.meta.savedPosition=document.body.scrollTop),{x:0,y:e.meta.savedPosition||0})}}),f=i("sHpN");o.a.use(c.b),o.a.use(c.d),o.a.use(s.a),o.a.use(f.a),o.a.use(c.a);var g=new s.a({locale:"en",messages:{cn:i("r3Gj"),en:i("LVcC")}});o.a.prototype.$DEBUG_FLAG=Object({NODE_ENV:"production"}).DEBUG_FLAG,o.a.prototype.env=Object({NODE_ENV:"production"}),o.a.config.productionTip=!1,o.a.prototype.$store=p,o.a.prototype.returntype=function(e){return Object.prototype.toString.call(e).split("[object ")[1].split("]")[0]},m.beforeEach(function(e,t,i){i()});var P=new o.a;n()(o.a.prototype,{$bus:{get:function(){return P}}}),new o.a({el:"#app",router:m,i18n:g,store:p,components:{App:l},template:"<App/>"})},r3Gj:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.d(t,"m",function(){return a});var a={UnlockWallet:"解锁钱包",MainTitle:"十二星座系列之双鱼座",MainDesc:"传说双鱼座的两条鱼，一条是维纳斯(VNS)，另一条是丘比特(CPD)",MainDesc1:"传说双鱼座的两条鱼",MainDesc2:"一条是维纳斯(VNS)",MainDesc3:"另一条是丘比特(CPD)",Title:"流动性挖矿",AirDrop:"空投",Home:"首页",IPO:"空投与公募",name:"Pisces",AddLiquidity:"添加流动性",Buy:"购买",Pay:"支付",Balance:"余额",Signout:"断开连接",TotalRaise:"计划募集",MinAllocation:"最小投资额",EndTime:"结束时间",SwapProgress:"募集进度",InProgress:"进行中",Public:"公有轮",GoingToPay:"即将支付",Payforsuccess:"支付成功",Payforfailure:"支付失败",errInfo:"请按顺序点击",Congratulationsgettingmnemonics:"恭喜获得助记词",Toview:"去查看",Invite:"邀请",EarnCpdByStaking:"质押VNS-USDT-LP挖CPD",Withdraw:"提取",Deposit:"存入",Stake:"质押",StakeOk:"质押成功",StakeBad:"质押失败",WithdrawOK:"赎回成功",WithdrawBad:"赎回失败",ClaimOK:"提取成功",ClaimBad:"提取失败",Unstake:"赎回",Available:"可用LP",Earned:"收益",TotalEarned:"总收益",InviteToReward:"邀请好友得奖励",InviteToAirdrop:"邀请好友获取空投奖励",NoAirdropRewards:"对不去,您暂时没有空投资格",IPOTitle:"购买VNS",Copyandinvitefriends:"复制并发送好友",Fillintheinviter:"输入要绑定的邀请人地址",Bind:"绑定",BindOK:"绑定成功",BindBad:"绑定失败",WhoInviteMe:"我的父节点",TotalRewards:"总奖励",Staked:"已质押LP",Harvest:"收获",Claim:"提取",MyMiners:"我的子节点",ClaimReward:"提取奖励",MinersAddress:"子节点公钥",Mypublickey:"我的公钥地址",EarnedCoinA:"CPD收益",Approve:"授权",ApproveOK:"授权成功",ApproveBad:"授权失败",Swap:"兑换",From:"付出",To:"得到",Price:"价格",h24:"24小时",Unlock:"解锁",Unlocked:"已解锁",ScratchCardGames:"刮刮卡纸牌游戏",ScratchCardGamesInfo:"刮卡解锁12个助记词，获取空投账号，赢大奖",Record:"记录",ValueLocked:"锁仓价值",CopyOk:"复制成功",Min:"最小",Max:"最大",Auditagency:"审计机构",Walletsupport:"支持钱包",Tutorial:"指南",HuobiwalletTutorial:"火币钱包指南",TokenPocketTutorial:"TP钱包指南",WebsideTutorial:"网页端指南",ContactUs:"联系我们",Copyright:"版权所有",AllRightsReserved:"版权所有"}},rqsT:function(e,t){},"tY+K":function(e,t){},"vh+i":function(e,t){}},["NHnr"]);