window.__require=function e(t,s,n){function o(r,a){if(!s[r]){if(!t[r]){var l=r.split("/");if(l=l[l.length-1],!t[l]){var c="function"==typeof __require&&__require;if(!a&&c)return c(l,!0);if(i)return i(l,!0);throw new Error("Cannot find module '"+r+"'")}}var u=s[r]={exports:{}};t[r][0].call(u.exports,function(e){return o(t[r][1][e]||e)},u,u.exports,e,t,s,n)}return s[r].exports}for(var i="function"==typeof __require&&__require,r=0;r<n.length;r++)o(n[r]);return o}({AutoDestroy:[function(e,t,s){"use strict";cc._RF.push(t,"34c83V2HOBChYVmtpjaiXes","AutoDestroy"),Object.defineProperty(s,"__esModule",{value:!0});var n=cc._decorator,o=n.ccclass,i=n.property,r=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.life=1,t}return __extends(t,e),t.prototype.start=function(){var e=this;setTimeout(function(){e.node.destroy()},1e3*this.life)},__decorate([i],t.prototype,"life",void 0),t=__decorate([o],t)}(cc.Component);s.default=r,cc._RF.pop()},{}],Bar:[function(e,t,s){"use strict";cc._RF.push(t,"9501abCkwFCu7/xP0VfklNu","Bar"),Object.defineProperty(s,"__esModule",{value:!0});var n=cc._decorator,o=n.ccclass,i=n.property,r=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.red=null,t.redMask=null,t.green=null,t.greenMask=null,t.t=0,t.oldOffset=0,t.offset=0,t.finished=!1,t.oldValue=1,t.duration=.3,t}return __extends(t,e),t.prototype.start=function(){},t.prototype.update=function(e){if(!this.finished)if(this.t+=e,this.t>=this.duration)this.red.node.setPosition(-160+this.offset,0),this.redMask.node.setPosition(160-this.offset,0),this.greenMask.node.setPosition(-this.offset,0),this.green.node.setPosition(this.offset,0),this.finished=!0;else{var t=this.t/this.duration;this.redMask.node.setPosition(160-this.offset*t-this.oldOffset*(1-t),0),this.red.node.setPosition(this.offset*t-160+this.oldOffset*(1-t),0),this.greenMask.node.setPosition(-this.offset*t-this.oldOffset*(1-t),0),this.green.node.setPosition(this.offset*t+this.oldOffset*(1-t),0)}},t.prototype.setValue=function(e){e<0||e>1||(this.oldOffset=this.offset,this.offset=160*(1-e),this.t=0,this.finished=!1,this.oldValue=e)},t.prototype.isSameValue=function(e){return Math.abs(this.oldValue-e)<.001},t.prototype.getOldValue=function(){return this.oldValue},t.prototype.setValueWithoutAnimation=function(e){e<0||e>1||(this.offset=160*(1-e),this.red.node.setPosition(-160+this.offset,0),this.redMask.node.setPosition(160-this.offset,0),this.greenMask.node.setPosition(-this.offset,0),this.green.node.setPosition(this.offset,0),this.finished=!0,this.oldValue=e)},__decorate([i({type:cc.Sprite})],t.prototype,"red",void 0),__decorate([i({type:cc.Mask})],t.prototype,"redMask",void 0),__decorate([i({type:cc.Sprite})],t.prototype,"green",void 0),__decorate([i({type:cc.Mask})],t.prototype,"greenMask",void 0),t=__decorate([o],t)}(cc.Component);s.default=r,cc._RF.pop()},{}],BattleManager:[function(e,t,s){"use strict";cc._RF.push(t,"e524eQiYflFn4pMxXFzoESc","BattleManager"),Object.defineProperty(s,"__esModule",{value:!0});var n=cc._decorator,o=n.ccclass,i=n.property,r=e("Bar"),a=e("Effect"),l=e("SkillText"),c=e("Unit"),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.canvas=null,t.enemyPositions=[],t.playerPositions=[],t.enemyExtendedPositions=[],t.playerExtendedPositions=[],t.enemyBasicPositions=[],t.playerBasicPositions=[],t.barPrefab=null,t.unitPrefab=null,t.effects=[],t.hits=[],t.skills=[],t.skillText=null,t.players=[],t.enemies=[],t.playerUnitIds=[],t.enemyUnitIds=[],t.playerBars=[],t.enemyBars=[],t.index2HpMax={},t.isBattleOver=!1,t.onFinish=null,t.UNIT_ID_TO_RESOURCE={1:"heroes/guanyu",2:"heroes/zhangfei",3:"heroes/dianwei",4:"heroes/xiahoudun",5:"heroes/taishici",6:"heroes/sunjian",7:"heroes/ganning",8:"heroes/jianyong",9:"heroes/xunyu",10:"heroes/guojia",11:"heroes/chengong",12:"heroes/chengzhiyuan",13:"heroes/zhaohong",14:"heroes/dengmao",15:"heroes/zhangliang",16:"heroes/zhangbao",17:"heroes/zhangjiao",18:"heroes/huangjinzei",19:"heroes/liubei",20:"heroes/caocao",21:"heroes/lvbu",22:"heroes/hanbing",23:"heroes/huaxiong",24:"heroes/lijue",25:"heroes/guosi",26:"heroes/jiaxu",27:"heroes/dongzhuo",28:"heroes/xuchu",29:"heroes/zhaoyun",30:"heroes/sunshangxiang",31:"heroes/zhouyu",32:"heroes/xuhuang",33:"heroes/diaochan",34:"heroes/yuanshaojun",35:"heroes/tianfeng",36:"heroes/yanliang",37:"heroes/wenchou",38:"heroes/chunyuqiong",39:"heroes/yuanshao",40:"heroes/xiaoqiao",41:"heroes/daqiao",42:"heroes/zhenji",43:"heroes/caoren",44:"heroes/lidian",45:"heroes/lejin",46:"heroes/xiahouyuan",47:"heroes/yujin",48:"heroes/zhangxiu",49:"heroes/zhangliao",50:"heroes/machao"},t.willSkip=!1,t}return __extends(t,e),t.prototype.start=function(){var e=this;window.battlefield={loadBattleField:function(t,s,n,o){return e.loadBattleField(t,s,n,o)},loadBattleRecords:function(t,s,n,o,i,r,a){return e.loadBattleRecords(t,s,n,o,i,r,a)}}},t.prototype.onDestroy=function(){},t.prototype.update=function(e){},t.prototype.update=function(e){},t.prototype.loadBattleField=function(e,t,s,n,o){6==n.length?(this.playerPositions=this.playerBasicPositions,this.enemyPositions=this.enemyBasicPositions):(this.playerPositions=this.playerExtendedPositions,this.enemyPositions=this.enemyExtendedPositions);var i=n.length/2;this.loadUnits(n.slice(0,i),n.slice(i)),this.index2HpMax={};for(var a=0;a<t.length;++a)this.index2HpMax[a]=t[a],a<i?this.enemyBars[a]&&this.enemyBars[a].getComponent(r.default).setValueWithoutAnimation(e[a]/t[a]):this.playerBars[a-i]&&this.playerBars[a-i].getComponent(r.default).setValueWithoutAnimation(e[a]/t[a])},t.prototype.loadBattleRecords=function(e,t,s,n,o,i,r){var a=this;this.onFinish=r,__awaiter(a,void 0,void 0,function(){var e;return __generator(this,function(r){switch(r.label){case 0:e=0,r.label=1;case 1:return e<t.length?this.willSkip?[3,4]:[4,this.applySkill(t[e],s[e],n[e],o[e],i[e])]:[3,4];case 2:r.sent(),r.label=3;case 3:return++e,[3,1];case 4:return this.onFinish&&this.onFinish(),[2]}})})},t.prototype.skip=function(){this.willSkip=!0},t.prototype.loadUnits=function(e,t){var s=this;this.enemyUnitIds=e,this.playerUnitIds=t,this.enemies=[],this.players=[],this.enemyBars=[],this.playerBars=[],e.map(function(t,n){if(0==t)return s.enemies.push(null),void s.enemyBars.push(null);var o=cc.instantiate(s.unitPrefab);o.parent=s.enemyPositions[n].parent,o.setPosition(s.enemyPositions[n].getPosition()),6==e.length&&o.setScale(cc.v2(.7,.7)),o.getComponent(c.default).loadResource(s.UNIT_ID_TO_RESOURCE[t]),o.getComponent(c.default).setEnemy(),s.enemies.push(o);var i=cc.instantiate(s.barPrefab);o.getComponent(c.default).attachToMe(i),i.setPosition(cc.v2(0,-110)),s.enemyBars.push(i)}),t.map(function(e,n){if(0==e)return s.players.push(null),void s.playerBars.push(null);var o=cc.instantiate(s.unitPrefab);o.parent=s.playerPositions[n].parent,o.setPosition(s.playerPositions[n].getPosition()),6==t.length&&o.setScale(cc.v2(.7,.7)),o.getComponent(c.default).loadResource(s.UNIT_ID_TO_RESOURCE[e]),s.players.push(o);var i=cc.instantiate(s.barPrefab);o.getComponent(c.default).attachToMe(i),i.setPosition(cc.v2(0,-110)),s.playerBars.push(i)})},t.prototype.applySkill=function(e,t,s,n,o){return __awaiter(this,void 0,void 0,function(){var i,a,u,h,p,f,d,y,m,_,g,v,P;return __generator(this,function(C){switch(C.label){case 0:return e?(i=this.players[t],a=this.enemies[s]):(i=this.enemies[s],a=this.players[t]),i.getComponent(c.default).setStatus(1,!1),0==n?[3,3]:(i.getComponent(cc.Animation).play("status_00"),[4,this.waitFor(.5)]);case 1:return C.sent(),this.skillText.getComponent(l.default).play(n),[4,this.waitFor(.5)];case 2:C.sent(),C.label=3;case 3:return[0,1,2,3,4,5,7,16,17,20,21,28,30,32,33,36,39,50].indexOf(n)>=0?[4,this.playSkillEffect(i,a)]:[3,29];case 4:return C.sent(),1!=o.length?[3,16]:(p=o[0],y=this.index2HpMax[e?s:this.enemyPositions.length+t],d=p/y,e&&this.enemyBars[s].getComponent(r.default).isSameValue(d)&&19==this.enemyUnitIds[s]||!e&&this.playerBars[t].getComponent(r.default).isSameValue(d)&&19==this.playerUnitIds[t]?(a.getComponent(cc.Animation).play("status_00"),[4,this.waitFor(.5)]):[3,8]);case 5:return C.sent(),this.skillText.getComponent(l.default).play(19),[4,this.waitFor(.5)];case 6:return C.sent(),[4,this.playHitEffect([a])];case 7:return C.sent(),[3,13];case 8:return[4,this.playHitEffect([a])];case 9:return C.sent(),21!=n?[3,13]:(e?(v=this.enemyBars[s].getComponent(r.default).getOldValue(),this.enemyBars[s].getComponent(r.default).setValue((v+d)/2)):(v=this.playerBars[t].getComponent(r.default).getOldValue(),this.playerBars[t].getComponent(r.default).setValue((v+d)/2)),[4,this.waitFor(.5)]);case 10:return C.sent(),[4,this.playSkillEffect(i,a)];case 11:return C.sent(),[4,this.playHitEffect([a])];case 12:C.sent(),C.label=13;case 13:return e?(this.enemyBars[s].getComponent(r.default).setValue(d),0==d&&20!=this.enemyUnitIds[s]&&(a.getComponent(c.default).killMe(),delete this.enemies[s]),20==n&&(i.getComponent(c.default).killMe(),delete this.players[t])):(this.playerBars[t].getComponent(r.default).setValue(d),0==d&&20!=this.playerUnitIds[t]&&(a.getComponent(c.default).killMe(),delete this.players[t]),20==n&&(i.getComponent(c.default).killMe(),delete this.enemies[s])),d>0?5!=n&&17!=n&&28!=n&&39!=n?[3,15]:[4,a.getComponent(c.default).setStatus(1,!0)]:[3,15];case 14:C.sent(),C.label=15;case 15:return[3,28];case 16:if(!(o.length>1))return[3,28];u=[],h=[],_=0,C.label=17;case 17:return _<o.length?(p=o[_],y=this.index2HpMax[e?_:this.enemyPositions.length+_],d=p/y,e&&this.enemies[_]&&this.enemyBars[_].getComponent(r.default).isSameValue(d)&&19==this.enemyUnitIds[_]?(this.enemies[_].getComponent(cc.Animation).play("status_00"),[4,this.waitFor(.5)]):[3,20]):[3,25];case 18:return C.sent(),this.skillText.getComponent(l.default).play(20),[4,this.waitFor(.5)];case 19:return C.sent(),[3,23];case 20:return!e&&this.players[_]&&this.playerBars[_].getComponent(r.default).isSameValue(d)&&19==this.playerUnitIds[_]?(this.players[_].getComponent(cc.Animation).play("status_00"),[4,this.waitFor(.5)]):[3,23];case 21:return C.sent(),this.skillText.getComponent(l.default).play(20),[4,this.waitFor(.5)];case 22:C.sent(),C.label=23;case 23:h.push(e?this.enemies[_]:this.players[_]),u.push(d),C.label=24;case 24:return++_,[3,17];case 25:return[4,this.playHitEffect(h)];case 26:for(C.sent(),_=0;_<o.length;++_)if(d=u[_],e){if(!this.enemies[_])continue;this.enemyBars[_].getComponent(r.default).setValue(d),0==d&&20!=this.enemyUnitIds[_]&&(this.enemies[_].getComponent(c.default).killMe(),delete this.enemies[_]),20==n&&(i.getComponent(c.default).killMe(),delete this.players[t])}else{if(!this.players[_])continue;this.playerBars[_].getComponent(r.default).setValue(d),0==d&&20!=this.playerUnitIds[_]&&(this.players[_].getComponent(c.default).killMe(),delete this.players[_]),20==n&&(i.getComponent(c.default).killMe(),delete this.enemies[s])}for(f=[],_=0;_<o.length;++_)(d=u[_])>0&&33==n&&(e?f.push(this.enemies[_].getComponent(c.default).setStatus(1,!0)):f.push(this.players[_].getComponent(c.default).setStatus(1,!0)));return[4,Promise.all(f)];case 27:C.sent(),C.label=28;case 28:return[3,46];case 29:return 6!=n?[3,31]:[4,i.getComponent(c.default).showText("+\u654f\u6377")];case 30:return C.sent(),[3,46];case 31:return 29!=n?[3,33]:[4,i.getComponent(c.default).showText("+\u9632\u5fa1")];case 32:return C.sent(),[3,46];case 33:return 8!=n?[3,35]:[4,a.getComponent(c.default).showText("-\u9632\u5fa1")];case 34:return C.sent(),[3,46];case 35:return 9!=n?[3,37]:[4,a.getComponent(c.default).showText("-\u654f\u6377")];case 36:return C.sent(),[3,46];case 37:return 10!=n&&12!=n&&13!=n&&15!=n&&42!=n&&37!=n?[3,38]:(y=this.index2HpMax[e?this.enemyPositions.length+s:t],e?(this.playerBars[s].getComponent(r.default).setValue(o[0]/y),this.players[s].getComponent(c.default).showText("\u6cbb\u7597")):(this.enemyBars[t].getComponent(r.default).setValue(o[0]/y),this.enemies[t].getComponent(c.default).showText("\u6cbb\u7597")),[3,46]);case 38:if(11!=n)return[3,40];if(m=[],e)for(_=0;_<this.players.length;++_)this.players[_]&&m.push(this.players[_].getComponent(c.default).showText("+\u654f\u6377"));else for(_=0;_<this.enemies.length;++_)this.enemies[_]&&m.push(this.enemies[_].getComponent(c.default).showText("+\u654f\u6377"));return[4,Promise.all(m)];case 39:return C.sent(),[3,46];case 40:if(14!=n)return[3,42];for(m=[],_=0;_<this.enemies.length;++_)e&&this.enemies[_]?m.push(this.players[_].getComponent(c.default).setStatus(1,!0)):!e&&this.players[_]&&m.push(this.players[_].getComponent(c.default).setStatus(1,!0));return[4,Promise.all(m)];case 41:return C.sent(),[3,46];case 42:return 31!=n?[3,43]:(a.getComponent(c.default).setFire(),a.fire=o[0],[3,46]);case 43:if(40!=n)return[3,44];for(_=0;_<o.length;++_)o[_]<=0||(e?(y=this.index2HpMax[this.enemyPositions.length+_],this.playerBars[_].getComponent(r.default).setValue(o[_]/y),this.players[_].getComponent(c.default).showText("\u6cbb\u7597")):(y=this.index2HpMax[_],this.enemyBars[_].getComponent(r.default).setValue(o[_]/y),this.enemies[_].getComponent(c.default).showText("\u6cbb\u7597")));return[3,46];case 44:if(41!=n)return[3,46];if(m=[],e)for(_=0;_<this.players.length;++_)this.players[_]&&m.push(this.players[_].getComponent(c.default).showText("+\u653b\u51fb"));else for(_=0;_<this.enemies.length;++_)this.enemies[_]&&m.push(this.enemies[_].getComponent(c.default).showText("+\u653b\u51fb"));return[4,Promise.all(m)];case 45:C.sent(),C.label=46;case 46:return i.fire>0?(i.getComponent(c.default).showText("\u707c\u4f24"),[4,this.waitFor(.5)]):[3,48];case 47:C.sent(),g=Math.min(.2,.05*i.fire),e?(v=this.playerBars[t].getComponent(r.default).getOldValue(),P=Math.max(0,v-1*g),this.playerBars[t].getComponent(r.default).setValue(P),0==P&&(i.getComponent(c.default).killMe(),delete this.players[t])):(v=this.enemyBars[s].getComponent(r.default).getOldValue(),P=Math.max(0,v-g),this.enemyBars[s].getComponent(r.default).setValue(P),0==P&&(i.getComponent(c.default).killMe(),delete this.enemies[s])),C.label=48;case 48:return[4,this.waitFor(1)];case 49:return C.sent(),[2]}})})},t.prototype.playSkillEffect=function(e,t){return __awaiter(this,void 0,void 0,function(){var s,n,o,i,r,l,c;return __generator(this,function(u){switch(u.label){case 0:return s=e.parent.convertToWorldSpaceAR(e.position),n=this.skills[0].split(","),o=n[0],i=this.effects[1*n[1]],r=1*n[3],e.getComponent(cc.Animation).play(o),[4,this.waitFor(r)];case 1:return u.sent(),t&&t.parent&&((l=cc.instantiate(i)).parent=this.node.parent,l.setPosition(s),l.getComponent(a.default)&&(c=t.parent.convertToWorldSpaceAR(t.position),l.getComponent(a.default).fly(s,c,t1))),[2]}})})},t.prototype.playHitEffect=function(e){return __awaiter(this,void 0,void 0,function(){var t,s,n,o,i,r;return __generator(this,function(a){switch(a.label){case 0:return t=this.skills[0].split(","),s=this.hits[1*t[2]],n=1*t[4],[4,this.waitFor(n)];case 1:for(a.sent(),o=0;o<e.length;++o)e[o]&&e[o].parent&&(i=e[o].parent.convertToWorldSpaceAR(e[o].position),e[o].getComponent(cc.Animation).play("unit_hit_00"),(r=cc.instantiate(s)).parent=this.node.parent,r.setPosition(i));return[2]}})})},t.prototype.waitFor=function(e){var t=this;return new Promise(function(s,n){t.scheduleOnce(function(){s()},e)})},__decorate([i({type:cc.Node})],t.prototype,"canvas",void 0),__decorate([i({type:[cc.Node]})],t.prototype,"enemyExtendedPositions",void 0),__decorate([i({type:[cc.Node]})],t.prototype,"playerExtendedPositions",void 0),__decorate([i({type:[cc.Node]})],t.prototype,"enemyBasicPositions",void 0),__decorate([i({type:[cc.Node]})],t.prototype,"playerBasicPositions",void 0),__decorate([i({type:cc.Prefab})],t.prototype,"barPrefab",void 0),__decorate([i({type:cc.Prefab})],t.prototype,"unitPrefab",void 0),__decorate([i({type:[cc.Prefab]})],t.prototype,"effects",void 0),__decorate([i({type:[cc.Prefab]})],t.prototype,"hits",void 0),__decorate([i({type:[cc.String]})],t.prototype,"skills",void 0),__decorate([i({type:cc.Node})],t.prototype,"skillText",void 0),t=__decorate([o],t)}(cc.Component);s.default=u,cc._RF.pop()},{Bar:"Bar",Effect:"Effect",SkillText:"SkillText",Unit:"Unit"}],Effect:[function(e,t,s){"use strict";cc._RF.push(t,"2b1808enq9ELLTXMBbBKK2y","Effect"),Object.defineProperty(s,"__esModule",{value:!0});var n=cc._decorator,o=n.ccclass,i=(n.property,function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._from=null,t._to=null,t._life=0,t._t=0,t}return __extends(t,e),t.prototype.start=function(){},t.prototype.update=function(e){if(!(null==this._from||this._life<=0))if(this._t-=e,this._t<=0)this.node.destroy();else{var t=this._t/this._life,s=this._from.x*t+this._to.x*(1-t),n=this._from.y*t+this._to.y*(1-t);this.node.setPosition(cc.v2(s,n))}},t.prototype.fly=function(e,t,s){this._from=e,this._to=t,this._life=s,this._t=s},t=__decorate([o],t)}(cc.Component));s.default=i,cc._RF.pop()},{}],SkillText:[function(e,t,s){"use strict";cc._RF.push(t,"3a8devW28dEOq3GsZJ9LSKY","SkillText"),Object.defineProperty(s,"__esModule",{value:!0});var n=cc._decorator,o=n.ccclass,i=(n.property,function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.SKILL_ARRAY={1:"\u9752\u9f99\u5043\u6708",2:"\u65ad\u6865\u4e4b\u6012",3:"\u72c2\u66b4\u4e4b\u5203",4:"\u566c\u76ee\u4e00\u51fb",5:"\u8d2f\u624b\u7740\u68fc",6:"\u60ca\u6d9b\u9a87\u6d6a",7:"\u4e34\u5371\u4e0d\u60e7",8:"\u5de6\u53f3\u9022\u6e90",9:"\u575a\u58c1\u6e05\u91ce",10:"\u8fd0\u7b79\u5e37\u5e44",11:"\u6fc0\u6d41\u52c7\u8fdb",12:"\u89c6\u6b7b\u5982\u5f52",13:"\u795e\u5175\u5929\u964d",14:"\u5341\u6708\u56f4\u57ce",15:"\u82cd\u5929\u5df2\u6b7b",16:"\u9ec4\u5929\u5f53\u7acb",17:"\u5929\u4e0b\u5927\u5409",19:"\u4ee5\u5fb7\u670d\u4eba",20:"\u5bbf\u547d\u4e4b\u5203",21:"\u8f95\u95e8\u5c04\u621f",28:"\u8d64\u818a\u4e0a\u9635",29:"\u5355\u9a91\u6551\u4e3b",30:"\u547d\u8fd0\u4e4b\u5f29",31:"\u706b\u70e7\u8d64\u58c1",32:"\u957f\u9a71\u76f4\u5165",33:"\u95ed\u6708\u7f9e\u82b1",36:"\u52c7\u51a0\u4e09\u519b",37:"\u4e00\u592b\u5f53\u5173",39:"\u795e\u9b3c\u51fa\u51fb",40:"\u751c\u871c\u604b\u98ce",41:"\u4e00\u7b11\u503e\u57ce",42:"\u6d1b\u795e\u4e4b\u6b4c",50:"\u897f\u51c9\u4e4b\u5203"},t}return __extends(t,e),t.prototype.start=function(){},t.prototype.play=function(e){this.getComponent(cc.Label).string=this.SKILL_ARRAY[e]||"",this.getComponent(cc.Animation).play("skill_text")},t=__decorate([o],t)}(cc.Component));s.default=i,cc._RF.pop()},{}],StatusText:[function(e,t,s){"use strict";cc._RF.push(t,"304afTwfJpDyZzWFFpBxTmM","StatusText"),Object.defineProperty(s,"__esModule",{value:!0});var n=cc._decorator,o=n.ccclass,i=(n.property,function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.start=function(){},t.prototype.setContent=function(e){this.getComponent(cc.Label).string=e},t=__decorate([o],t)}(cc.Component));s.default=i,cc._RF.pop()},{}],Unit:[function(e,t,s){"use strict";cc._RF.push(t,"f3da9BWeGBEg4+NskGsooiz","Unit"),Object.defineProperty(s,"__esModule",{value:!0});var n=cc._decorator,o=n.ccclass,i=n.property,r=e("StatusText"),a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.sprite=null,t.tombstonePrefab=null,t.stunnedPrefab=null,t.firePrefab=null,t.statusTextPrefab=null,t.currentStatus=0,t.fire=!1,t}return __extends(t,e),t.prototype.start=function(){},t.prototype.update=function(e){},t.prototype.setEnemy=function(){},t.prototype.loadResource=function(e){var t=this;cc.loader.loadRes(e,cc.SpriteFrame,function(e,s){t.sprite.spriteFrame=s})},t.prototype.attachToMe=function(e){e.parent=this.sprite.node},t.prototype.killMe=function(){var e=this;this.effect&&this.effect.destroy(),this.fireEffect&&this.fireEffect.destroy();var t=this.getComponent(cc.Animation),s=t.getAnimationState("death");t.on("finished",function(t,n){if(n==s){var o=cc.instantiate(e.tombstonePrefab);o.parent=e.node.parent,o.setPosition(e.node.getPosition()),e.node.destroy()}}),t.play("death")},t.prototype.setStatus=function(e,t){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(s){switch(s.label){case 0:return t?1!=e?[3,2]:(this.effect&&this.effect.destroy(),this.effect=cc.instantiate(this.stunnedPrefab),this.effect.parent=this.node.parent,this.effect.setPosition(this.node.getPosition()),this.currentStatus=1,[4,this.waitFor(.5)]):(this.currentStatus==e&&this.effect&&(this.effect.destroy(),this.effect=null,this.currentStatus=0),[2]);case 1:s.sent(),s.label=2;case 2:return[2]}})})},t.prototype.setFire=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return this.fireEffect?[2]:(this.fireEffect=cc.instantiate(this.firePrefab),this.fireEffect.parent=this.node.parent,this.fireEffect.setPosition(this.node.getPosition()),[4,this.waitFor(.5)]);case 1:return e.sent(),[2]}})})},t.prototype.showText=function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(s){switch(s.label){case 0:return(t=cc.instantiate(this.statusTextPrefab)).parent=this.node.parent,t.setPosition(this.node.getPosition()),t.getComponent(r.default).setContent(e),[4,this.waitFor(1)];case 1:return s.sent(),[2]}})})},t.prototype.waitFor=function(e){var t=this;return new Promise(function(s,n){t.scheduleOnce(function(){s()},e)})},__decorate([i({type:cc.Sprite})],t.prototype,"sprite",void 0),__decorate([i({type:cc.Prefab})],t.prototype,"tombstonePrefab",void 0),__decorate([i({type:cc.Prefab})],t.prototype,"stunnedPrefab",void 0),__decorate([i({type:cc.Prefab})],t.prototype,"firePrefab",void 0),__decorate([i({type:cc.Prefab})],t.prototype,"statusTextPrefab",void 0),t=__decorate([o],t)}(cc.Component);s.default=a,cc._RF.pop()},{StatusText:"StatusText"}]},{},["BattleManager","AutoDestroy","Bar","Effect","SkillText","StatusText","Unit"]);