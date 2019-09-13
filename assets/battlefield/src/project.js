window.__require=function e(t,n,s){function o(r,a){if(!n[r]){if(!t[r]){var l=r.split("/");if(l=l[l.length-1],!t[l]){var c="function"==typeof __require&&__require;if(!a&&c)return c(l,!0);if(i)return i(l,!0);throw new Error("Cannot find module '"+r+"'")}}var u=n[r]={exports:{}};t[r][0].call(u.exports,function(e){return o(t[r][1][e]||e)},u,u.exports,e,t,n,s)}return n[r].exports}for(var i="function"==typeof __require&&__require,r=0;r<s.length;r++)o(s[r]);return o}({AutoDestroy:[function(e,t,n){"use strict";cc._RF.push(t,"34c83V2HOBChYVmtpjaiXes","AutoDestroy"),Object.defineProperty(n,"__esModule",{value:!0});var s=cc._decorator,o=s.ccclass,i=s.property,r=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.life=1,t}return __extends(t,e),t.prototype.start=function(){var e=this;setTimeout(function(){e.node.destroy()},1e3*this.life)},__decorate([i],t.prototype,"life",void 0),t=__decorate([o],t)}(cc.Component);n.default=r,cc._RF.pop()},{}],Bar:[function(e,t,n){"use strict";cc._RF.push(t,"9501abCkwFCu7/xP0VfklNu","Bar"),Object.defineProperty(n,"__esModule",{value:!0});var s=cc._decorator,o=s.ccclass,i=s.property,r=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.red=null,t.redMask=null,t.green=null,t.greenMask=null,t.t=0,t.oldOffset=0,t.offset=0,t.finished=!1,t.oldValue=1,t.duration=.3,t}return __extends(t,e),t.prototype.start=function(){},t.prototype.update=function(e){if(!this.finished)if(this.t+=e,this.t>=this.duration)this.red.node.setPosition(-160+this.offset,0),this.redMask.node.setPosition(160-this.offset,0),this.greenMask.node.setPosition(-this.offset,0),this.green.node.setPosition(this.offset,0),this.finished=!0;else{var t=this.t/this.duration;this.redMask.node.setPosition(160-this.offset*t-this.oldOffset*(1-t),0),this.red.node.setPosition(this.offset*t-160+this.oldOffset*(1-t),0),this.greenMask.node.setPosition(-this.offset*t-this.oldOffset*(1-t),0),this.green.node.setPosition(this.offset*t+this.oldOffset*(1-t),0)}},t.prototype.setValue=function(e){e<0||e>1||(this.oldOffset=this.offset,this.offset=160*(1-e),this.t=0,this.finished=!1,this.oldValue=e)},t.prototype.isSameValue=function(e){return Math.abs(this.oldValue-e)<.001},t.prototype.getOldValue=function(){return this.oldValue},t.prototype.setValueWithoutAnimation=function(e){e<0||e>1||(this.offset=160*(1-e),this.red.node.setPosition(-160+this.offset,0),this.redMask.node.setPosition(160-this.offset,0),this.greenMask.node.setPosition(-this.offset,0),this.green.node.setPosition(this.offset,0),this.finished=!0,this.oldValue=e)},__decorate([i({type:cc.Sprite})],t.prototype,"red",void 0),__decorate([i({type:cc.Mask})],t.prototype,"redMask",void 0),__decorate([i({type:cc.Sprite})],t.prototype,"green",void 0),__decorate([i({type:cc.Mask})],t.prototype,"greenMask",void 0),t=__decorate([o],t)}(cc.Component);n.default=r,cc._RF.pop()},{}],BattleManager:[function(e,t,n){"use strict";cc._RF.push(t,"e524eQiYflFn4pMxXFzoESc","BattleManager"),Object.defineProperty(n,"__esModule",{value:!0});var s=cc._decorator,o=s.ccclass,i=s.property,r=e("Bar"),a=e("Effect"),l=e("SkillText"),c=e("Unit"),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.canvas=null,t.enemyPositions=[],t.playerPositions=[],t.barPrefab=null,t.unitPrefab=null,t.effects=[],t.hits=[],t.skills=[],t.skillText=null,t.players=[],t.enemies=[],t.playerUnitIds=[],t.enemyUnitIds=[],t.playerBars=[],t.enemyBars=[],t.index2HpMax={},t.isBattleOver=!1,t.onFinish=null,t.UNIT_ID_TO_RESOURCE={1:"heroes/guanyu",2:"heroes/zhangfei",3:"heroes/dianwei",4:"heroes/xiahoudun",5:"heroes/taishici",6:"heroes/sunjian",7:"heroes/ganning",8:"heroes/jianyong",9:"heroes/xunyu",10:"heroes/guojia",11:"heroes/chengong",12:"heroes/chengzhiyuan",13:"heroes/zhaohong",14:"heroes/dengmao",15:"heroes/zhangliang",16:"heroes/zhangbao",17:"heroes/zhangjiao",18:"heroes/huangjinzei",19:"heroes/liubei",20:"heroes/caocao",21:"heroes/lvbu",22:"heroes/hanbing",23:"heroes/huaxiong",24:"heroes/lijue",25:"heroes/guosi",26:"heroes/jiaxu",27:"heroes/dongzhuo",28:"heroes/xuchu",29:"heroes/zhaoyun",30:"heroes/sunshangxiang",31:"heroes/zhouyu"},t.willSkip=!1,t}return __extends(t,e),t.prototype.start=function(){var e=this;window.battlefield={loadBattleField:function(t,n,s,o){return e.loadBattleField(t,n,s,o)},loadBattleRecords:function(t,n,s,o,i,r,a){return e.loadBattleRecords(t,n,s,o,i,r,a)}}},t.prototype.onDestroy=function(){},t.prototype.update=function(e){},t.prototype.update=function(e){},t.prototype.loadBattleField=function(e,t,n,s,o){var i=s.length/2;this.loadUnits(s.slice(0,i),s.slice(i)),this.index2HpMax={};for(var a=0;a<t.length;++a)this.index2HpMax[a]=t[a],a<i?this.enemyBars[a]&&this.enemyBars[a].getComponent(r.default).setValueWithoutAnimation(e[a]/t[a]):this.playerBars[a-i]&&this.playerBars[a-i].getComponent(r.default).setValueWithoutAnimation(e[a]/t[a])},t.prototype.loadBattleRecords=function(e,t,n,s,o,i,r){var a=this;this.onFinish=r,__awaiter(a,void 0,void 0,function(){var e;return __generator(this,function(r){switch(r.label){case 0:e=0,r.label=1;case 1:return e<t.length?this.willSkip?[3,4]:[4,this.applySkill(t[e],n[e],s[e],o[e],i[e])]:[3,4];case 2:r.sent(),r.label=3;case 3:return++e,[3,1];case 4:return this.onFinish&&this.onFinish(),[2]}})})},t.prototype.skip=function(){this.willSkip=!0},t.prototype.loadUnits=function(e,t){var n=this;3==e.length&&3==t.length&&(this.enemyUnitIds=e,this.playerUnitIds=t,this.enemies=[],this.players=[],this.enemyBars=[],this.playerBars=[],e.map(function(e,t){if(0==e)return n.enemies.push(null),void n.enemyBars.push(null);var s=cc.instantiate(n.unitPrefab);s.parent=n.enemyPositions[t].parent,s.setPosition(n.enemyPositions[t].getPosition()),s.getComponent(c.default).loadResource(n.UNIT_ID_TO_RESOURCE[e]),s.getComponent(c.default).setEnemy(),n.enemies.push(s);var o=cc.instantiate(n.barPrefab);s.getComponent(c.default).attachToMe(o),o.setPosition(cc.v2(0,-110)),n.enemyBars.push(o)}),t.map(function(e,t){if(0==e)return n.players.push(null),void n.playerBars.push(null);var s=cc.instantiate(n.unitPrefab);s.parent=n.playerPositions[t].parent,s.setPosition(n.playerPositions[t].getPosition()),s.getComponent(c.default).loadResource(n.UNIT_ID_TO_RESOURCE[e]),n.players.push(s);var o=cc.instantiate(n.barPrefab);s.getComponent(c.default).attachToMe(o),o.setPosition(cc.v2(0,-110)),n.playerBars.push(o)}))},t.prototype.applySkill=function(e,t,n,s,o){return __awaiter(this,void 0,void 0,function(){var i,a,u,p,h,f,d,y,_,m,g,v;return __generator(this,function(C){switch(C.label){case 0:return e?(i=this.players[t],a=this.enemies[n]):(i=this.enemies[n],a=this.players[t]),i.getComponent(c.default).setStatus(1,!1),0==s?[3,3]:(i.getComponent(cc.Animation).play("status_00"),[4,this.waitFor(.5)]);case 1:return C.sent(),this.skillText.getComponent(l.default).play(s),[4,this.waitFor(.5)];case 2:C.sent(),C.label=3;case 3:return 0!=s&&1!=s&&2!=s&&3!=s&&4!=s&&5!=s&&7!=s&&16!=s&&17!=s&&21!=s&&20!=s&&28!=s&&30!=s?[3,28]:[4,this.playSkillEffect(i,a)];case 4:return C.sent(),1!=o.length?[3,16]:(h=o[0],d=this.index2HpMax[e?n:this.enemyPositions.length+t],f=h/d,e&&this.enemyBars[n].getComponent(r.default).isSameValue(f)&&19==this.enemyUnitIds[n]||!e&&this.playerBars[t].getComponent(r.default).isSameValue(f)&&19==this.playerUnitIds[t]?(a.getComponent(cc.Animation).play("status_00"),[4,this.waitFor(.5)]):[3,8]);case 5:return C.sent(),this.skillText.getComponent(l.default).play(19),[4,this.waitFor(.5)];case 6:return C.sent(),[4,this.playHitEffect([a])];case 7:return C.sent(),[3,13];case 8:return[4,this.playHitEffect([a])];case 9:return C.sent(),21!=s?[3,13]:(e?(g=this.enemyBars[n].getComponent(r.default).getOldValue(),this.enemyBars[n].getComponent(r.default).setValue((g+f)/2)):(g=this.playerBars[t].getComponent(r.default).getOldValue(),this.playerBars[t].getComponent(r.default).setValue((g+f)/2)),[4,this.waitFor(.5)]);case 10:return C.sent(),[4,this.playSkillEffect(i,a)];case 11:return C.sent(),[4,this.playHitEffect([a])];case 12:C.sent(),C.label=13;case 13:return e?(this.enemyBars[n].getComponent(r.default).setValue(f),0==f&&20!=this.enemyUnitIds[n]&&(a.getComponent(c.default).killMe(),delete this.enemies[n]),20==s&&(i.getComponent(c.default).killMe(),delete this.players[t])):(this.playerBars[t].getComponent(r.default).setValue(f),0==f&&20!=this.playerUnitIds[t]&&(a.getComponent(c.default).killMe(),delete this.players[t]),20==s&&(i.getComponent(c.default).killMe(),delete this.enemies[n])),f>0?5!=s&&17!=s&&28!=s?[3,15]:[4,a.getComponent(c.default).setStatus(1,!0)]:[3,15];case 14:C.sent(),C.label=15;case 15:return[3,27];case 16:if(!(o.length>1))return[3,27];u=[],p=[],_=0,C.label=17;case 17:return _<o.length?(h=o[_],d=this.index2HpMax[e?_:this.enemyPositions.length+_],f=h/d,e&&this.enemies[_]&&this.enemyBars[_].getComponent(r.default).isSameValue(f)&&19==this.enemyUnitIds[_]?(this.enemies[_].getComponent(cc.Animation).play("status_00"),[4,this.waitFor(.5)]):[3,20]):[3,25];case 18:return C.sent(),this.skillText.getComponent(l.default).play(20),[4,this.waitFor(.5)];case 19:return C.sent(),[3,23];case 20:return!e&&this.players[_]&&this.playerBars[_].getComponent(r.default).isSameValue(f)&&19==this.playerUnitIds[_]?(this.players[_].getComponent(cc.Animation).play("status_00"),[4,this.waitFor(.5)]):[3,23];case 21:return C.sent(),this.skillText.getComponent(l.default).play(20),[4,this.waitFor(.5)];case 22:C.sent(),C.label=23;case 23:p.push(e?this.enemies[_]:this.players[_]),u.push(f),C.label=24;case 24:return++_,[3,17];case 25:return[4,this.playHitEffect(p)];case 26:for(C.sent(),_=0;_<o.length;++_)if(f=u[_],e){if(!this.enemies[_])continue;this.enemyBars[_].getComponent(r.default).setValue(f),0==f&&20!=this.enemyUnitIds[_]&&(this.enemies[_].getComponent(c.default).killMe(),delete this.enemies[_]),20==s&&(i.getComponent(c.default).killMe(),delete this.players[t])}else{if(!this.players[_])continue;this.playerBars[_].getComponent(r.default).setValue(f),0==f&&20!=this.playerUnitIds[_]&&(this.players[_].getComponent(c.default).killMe(),delete this.players[_]),20==s&&(i.getComponent(c.default).killMe(),delete this.enemies[n])}C.label=27;case 27:return[3,42];case 28:return 6!=s?[3,30]:[4,i.getComponent(c.default).showText("+\u654f\u6377")];case 29:return C.sent(),[3,42];case 30:return 29!=s?[3,32]:[4,i.getComponent(c.default).showText("+\u9632\u5fa1")];case 31:return C.sent(),[3,42];case 32:return 8!=s?[3,34]:[4,a.getComponent(c.default).showText("-\u9632\u5fa1")];case 33:return C.sent(),[3,42];case 34:return 9!=s?[3,36]:[4,a.getComponent(c.default).showText("-\u654f\u6377")];case 35:return C.sent(),[3,42];case 36:return 10!=s&&12!=s&&13!=s&&15!=s?[3,37]:(d=this.index2HpMax[e?this.enemyPositions.length+n:t],e?(this.playerBars[n].getComponent(r.default).setValue(o[0]/d),this.players[n].getComponent(c.default).showText("\u6cbb\u7597")):(this.enemyBars[t].getComponent(r.default).setValue(o[0]/d),this.enemies[t].getComponent(c.default).showText("\u6cbb\u7597")),[3,42]);case 37:if(11!=s)return[3,39];if(y=[],e)for(_=0;_<this.players.length;++_)this.players[_]&&y.push(this.players[_].getComponent(c.default).showText("+\u654f\u6377"));else for(_=0;_<this.enemies.length;++_)this.enemies[_]&&y.push(this.enemies[_].getComponent(c.default).showText("+\u654f\u6377"));return[4,Promise.all(y)];case 38:return C.sent(),[3,42];case 39:if(14!=s)return[3,41];for(y=[],_=0;_<3;++_)e&&this.enemies[_]?y.push(this.players[_].getComponent(c.default).setStatus(1,!0)):!e&&this.players[_]&&y.push(this.players[_].getComponent(c.default).setStatus(1,!0));return[4,Promise.all(y)];case 40:return C.sent(),[3,42];case 41:31==s&&(a.getComponent(c.default).setFire(),a.fire=o[0]),C.label=42;case 42:return i.fire>0?(i.getComponent(c.default).showText("\u707c\u4f24"),[4,this.waitFor(.5)]):[3,44];case 43:C.sent(),m=Math.min(.2,.05*i.fire),e?(g=this.playerBars[t].getComponent(r.default).getOldValue(),v=Math.max(0,g-1*m),this.playerBars[t].getComponent(r.default).setValue(v),0==v&&(i.getComponent(c.default).killMe(),delete this.players[t])):(g=this.enemyBars[n].getComponent(r.default).getOldValue(),v=Math.max(0,g-m),this.enemyBars[n].getComponent(r.default).setValue(v),0==v&&(i.getComponent(c.default).killMe(),delete this.enemies[n])),C.label=44;case 44:return[4,this.waitFor(1)];case 45:return C.sent(),[2]}})})},t.prototype.playSkillEffect=function(e,t){return __awaiter(this,void 0,void 0,function(){var n,s,o,i,r,l,c;return __generator(this,function(u){switch(u.label){case 0:return n=e.parent.convertToWorldSpaceAR(e.position),s=this.skills[0].split(","),o=s[0],i=this.effects[1*s[1]],r=1*s[3],e.getComponent(cc.Animation).play(o),[4,this.waitFor(r)];case 1:return u.sent(),t&&t.parent&&((l=cc.instantiate(i)).parent=this.node.parent,l.setPosition(n),l.getComponent(a.default)&&(c=t.parent.convertToWorldSpaceAR(t.position),l.getComponent(a.default).fly(n,c,t1))),[2]}})})},t.prototype.playHitEffect=function(e){return __awaiter(this,void 0,void 0,function(){var t,n,s,o,i,r;return __generator(this,function(a){switch(a.label){case 0:return t=this.skills[0].split(","),n=this.hits[1*t[2]],s=1*t[4],[4,this.waitFor(s)];case 1:for(a.sent(),o=0;o<e.length;++o)e[o]&&e[o].parent&&(i=e[o].parent.convertToWorldSpaceAR(e[o].position),e[o].getComponent(cc.Animation).play("unit_hit_00"),(r=cc.instantiate(n)).parent=this.node.parent,r.setPosition(i));return[2]}})})},t.prototype.waitFor=function(e){var t=this;return new Promise(function(n,s){t.scheduleOnce(function(){n()},e)})},__decorate([i({type:cc.Node})],t.prototype,"canvas",void 0),__decorate([i({type:[cc.Node]})],t.prototype,"enemyPositions",void 0),__decorate([i({type:[cc.Node]})],t.prototype,"playerPositions",void 0),__decorate([i({type:cc.Prefab})],t.prototype,"barPrefab",void 0),__decorate([i({type:cc.Prefab})],t.prototype,"unitPrefab",void 0),__decorate([i({type:[cc.Prefab]})],t.prototype,"effects",void 0),__decorate([i({type:[cc.Prefab]})],t.prototype,"hits",void 0),__decorate([i({type:[cc.String]})],t.prototype,"skills",void 0),__decorate([i({type:cc.Node})],t.prototype,"skillText",void 0),t=__decorate([o],t)}(cc.Component);n.default=u,cc._RF.pop()},{Bar:"Bar",Effect:"Effect",SkillText:"SkillText",Unit:"Unit"}],Effect:[function(e,t,n){"use strict";cc._RF.push(t,"2b1808enq9ELLTXMBbBKK2y","Effect"),Object.defineProperty(n,"__esModule",{value:!0});var s=cc._decorator,o=s.ccclass,i=(s.property,function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._from=null,t._to=null,t._life=0,t._t=0,t}return __extends(t,e),t.prototype.start=function(){},t.prototype.update=function(e){if(!(null==this._from||this._life<=0))if(this._t-=e,this._t<=0)this.node.destroy();else{var t=this._t/this._life,n=this._from.x*t+this._to.x*(1-t),s=this._from.y*t+this._to.y*(1-t);this.node.setPosition(cc.v2(n,s))}},t.prototype.fly=function(e,t,n){this._from=e,this._to=t,this._life=n,this._t=n},t=__decorate([o],t)}(cc.Component));n.default=i,cc._RF.pop()},{}],SkillText:[function(e,t,n){"use strict";cc._RF.push(t,"3a8devW28dEOq3GsZJ9LSKY","SkillText"),Object.defineProperty(n,"__esModule",{value:!0});var s=cc._decorator,o=s.ccclass,i=(s.property,function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.SKILL_ARRAY={1:"\u9752\u9f99\u5043\u6708",2:"\u65ad\u6865\u4e4b\u6012",3:"\u72c2\u66b4\u4e4b\u5203",4:"\u566c\u76ee\u4e00\u51fb",5:"\u8d2f\u624b\u7740\u68fc",6:"\u60ca\u6d9b\u9a87\u6d6a",7:"\u4e34\u5371\u4e0d\u60e7",8:"\u5de6\u53f3\u9022\u6e90",9:"\u575a\u58c1\u6e05\u91ce",10:"\u8fd0\u7b79\u5e37\u5e44",11:"\u6fc0\u6d41\u52c7\u8fdb",12:"\u89c6\u6b7b\u5982\u5f52",13:"\u795e\u5175\u5929\u964d",14:"\u5341\u6708\u56f4\u57ce",15:"\u82cd\u5929\u5df2\u6b7b",16:"\u9ec4\u5929\u5f53\u7acb",17:"\u5929\u4e0b\u5927\u5409",19:"\u4ee5\u5fb7\u670d\u4eba",20:"\u5bbf\u547d\u4e4b\u5203",21:"\u8f95\u95e8\u5c04\u621f",28:"\u8d64\u818a\u4e0a\u9635",29:"\u5355\u9a91\u6551\u4e3b",30:"\u547d\u8fd0\u4e4b\u5f29",31:"\u706b\u70e7\u8d64\u58c1",32:"\u957f\u9a71\u76f4\u5165"},t}return __extends(t,e),t.prototype.start=function(){},t.prototype.play=function(e){this.getComponent(cc.Label).string=this.SKILL_ARRAY[e]||"",this.getComponent(cc.Animation).play("skill_text")},t=__decorate([o],t)}(cc.Component));n.default=i,cc._RF.pop()},{}],StatusText:[function(e,t,n){"use strict";cc._RF.push(t,"304afTwfJpDyZzWFFpBxTmM","StatusText"),Object.defineProperty(n,"__esModule",{value:!0});var s=cc._decorator,o=s.ccclass,i=(s.property,function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.start=function(){},t.prototype.setContent=function(e){this.getComponent(cc.Label).string=e},t=__decorate([o],t)}(cc.Component));n.default=i,cc._RF.pop()},{}],Unit:[function(e,t,n){"use strict";cc._RF.push(t,"f3da9BWeGBEg4+NskGsooiz","Unit"),Object.defineProperty(n,"__esModule",{value:!0});var s=cc._decorator,o=s.ccclass,i=s.property,r=e("StatusText"),a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.sprite=null,t.tombstonePrefab=null,t.stunnedPrefab=null,t.firePrefab=null,t.statusTextPrefab=null,t.currentStatus=0,t.fire=!1,t}return __extends(t,e),t.prototype.start=function(){},t.prototype.update=function(e){},t.prototype.setEnemy=function(){},t.prototype.loadResource=function(e){var t=this;cc.loader.loadRes(e,cc.SpriteFrame,function(e,n){t.sprite.spriteFrame=n})},t.prototype.attachToMe=function(e){e.parent=this.sprite.node},t.prototype.killMe=function(){var e=this;this.effect&&this.effect.destroy(),this.fireEffect&&this.fireEffect.destroy();var t=this.getComponent(cc.Animation),n=t.getAnimationState("death");t.on("finished",function(t,s){if(s==n){var o=cc.instantiate(e.tombstonePrefab);o.parent=e.node.parent,o.setPosition(e.node.getPosition()),e.node.destroy()}}),t.play("death")},t.prototype.setStatus=function(e,t){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(n){switch(n.label){case 0:return t?1!=e?[3,2]:(this.effect&&this.effect.destroy(),this.effect=cc.instantiate(this.stunnedPrefab),this.effect.parent=this.node.parent,this.effect.setPosition(this.node.getPosition()),this.currentStatus=1,[4,this.waitFor(.5)]):(this.currentStatus==e&&this.effect&&(this.effect.destroy(),this.effect=null,this.currentStatus=0),[2]);case 1:n.sent(),n.label=2;case 2:return[2]}})})},t.prototype.setFire=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return this.fireEffect?[2]:(this.fireEffect=cc.instantiate(this.firePrefab),this.fireEffect.parent=this.node.parent,this.fireEffect.setPosition(this.node.getPosition()),[4,this.waitFor(.5)]);case 1:return e.sent(),[2]}})})},t.prototype.showText=function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return(t=cc.instantiate(this.statusTextPrefab)).parent=this.node.parent,t.setPosition(this.node.getPosition()),t.getComponent(r.default).setContent(e),[4,this.waitFor(1)];case 1:return n.sent(),[2]}})})},t.prototype.waitFor=function(e){var t=this;return new Promise(function(n,s){t.scheduleOnce(function(){n()},e)})},__decorate([i({type:cc.Sprite})],t.prototype,"sprite",void 0),__decorate([i({type:cc.Prefab})],t.prototype,"tombstonePrefab",void 0),__decorate([i({type:cc.Prefab})],t.prototype,"stunnedPrefab",void 0),__decorate([i({type:cc.Prefab})],t.prototype,"firePrefab",void 0),__decorate([i({type:cc.Prefab})],t.prototype,"statusTextPrefab",void 0),t=__decorate([o],t)}(cc.Component);n.default=a,cc._RF.pop()},{StatusText:"StatusText"}]},{},["BattleManager","AutoDestroy","Bar","Effect","SkillText","StatusText","Unit"]);