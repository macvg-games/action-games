window.__require = function e(t, i, o) {
    function a(r, s) {
        if (!i[r]) {
            if (!t[r]) {
                var c = r.split("/");
                if (c = c[c.length - 1], !t[c]) {
                    var h = "function" == typeof __require && __require;
                    if (!s && h) return h(c, !0);
                    if (n) return n(c, !0);
                    throw new Error("Cannot find module '" + r + "'")
                }
                r = c
            }
            var l = i[r] = {
                exports: {}
            };
            t[r][0].call(l.exports, function(e) {
                return a(t[r][1][e] || e)
            }, l, l.exports, e, t, i, o)
        }
        return i[r].exports
    }
    for (var n = "function" == typeof __require && __require, r = 0; r < o.length; r++) a(o[r]);
    return a
}({
    AdManager: [function(t, i) {
        "use strict";
        cc._RF.push(i, "50f64X9kJdKfYYKZQhLeBAd", "AdManager");
        var o = t("../model/GameConfig"),
            a = {
                videoCall: null,
                errorCall: null,
                recorder: null,
                chapingAdCom: null,
                _videoPath: null,
                releaseType: 2,
                loadAllAd: function() {
                    o.publicGameBool || this.createVideoScreen()
                },
                showBanner: function() {
                    if (!o.publicGameBool) {
                        var e = tt.createBannerAd({
                            adUnitId: "2sbfsh0le2b5qap7ct",
                            adIntervals: 30,
                            style: {
                                left: 0,
                                top: 500
                            }
                        });
                        e.onLoad(function() {
                            e.show().then(function() {
                                console.log("\u5e7f\u544a\u663e\u793a\u6210\u529f")
                            }).catch(function(e) {
                                console.log("\u5e7f\u544a\u7ec4\u4ef6\u51fa\u73b0\u95ee\u9898", e)
                            })
                        })
                    }
                },
                hideBanner: function() {
                    o.publicGameBool
                },
                showIntersAd: function() {
                    if (!o.publicGameBool) {
                        var e = tt.createInterstitialAd({
                            adUnitId: "123k53j62j0gi1tkd3"
                        });
                        e.load().then(function() {
                            e.show().then(function() {
                                console.log("\u63d2\u5c4f\u5e7f\u544a\u5c55\u793a\u6210\u529f")
                            }).catch(function(e) {
                                console.log(e)
                            })
                        }).catch(function(e) {
                            console.log(e)
                        }), this.chapingAdCom = e
                    }
                },
                playVideo: function(e, t) {
                    var i = this;
                    if (e && (this.videoCall = e), t && (this.errorCall = t), o.publicGameBool) this.finishVideo();
                    else {
                        var a = tt.createRewardedVideoAd({
                            adUnitId: "1e5f12i0l5ilcje0mf"
                        });
                        a.onLoad(function() {
                            console.log("\u5e7f\u544a\u52a0\u8f7d\u5b8c\u6210")
                        }), a.load(), a.show().then(function() {
                            console.log("\u5e7f\u544a\u663e\u793a\u6210\u529f")
                        }).catch(function(e) {
                            i.finishVideo(), console.log("\u5e7f\u544a\u7ec4\u4ef6\u51fa\u73b0\u95ee\u9898", e), a.load().then(function() {
                                console.log("\u624b\u52a8\u52a0\u8f7d\u6210\u529f"), a.show()
                            })
                        }), a.onClose(function(e) {
                            e.isEnded ? (console.log("\u83b7\u53d6\u5956\u52b1"), i.finishVideo()) : (console.log("\u6ca1\u6709\u89c2\u770b\u5b8c\u6bd5--"), i.errorVideo()), e.count
                        })
                    }
                },
                finishVideo: function() {
                    this.videoCall && (this.videoCall(), this.videoCall = null), this.errorCall = null
                },
                errorVideo: function() {
                    this.errorCall && (this.errorCall(), this.errorCall = null), this.videoCall = null
                },
                createVideoScreen: function() {
                    o.publicGameBool || (this.recorder = tt.getGameRecorderManager(), this.recorder.onStart(function() {}), this.recorder.onError(function(e) {
                        console.log("\u5f55\u5c4f\u9519\u8bef:", e)
                    }), this.recorder.start({
                        duration: 300
                    }))
                },
                stopVideoScreen: function() {
                    if (!o.publicGameBool) {
                        var e = this;
                        this.recorder.onStop(function(t) {
                            e._videoPath = t.videoPath
                        }), this.recorder.stop()
                    }
                },
                shareScreenVideo: function() {
                    o.publicGameBool || (console.log("\u5206\u4eab\u89c6\u9891"), tt.shareAppMessage({
                        channel: "video",
                        title: "\u4f60\u53ec\u5524\u51fa\u6765\u9ad8\u94c1\u4e86\u561b~~",
                        imageUrl: "",
                        query: "",
                        extra: {
                            videoPath: this._videoPath,
                            videoTopics: ["\u53ec\u5524\u795e\u9f992022"]
                        },
                        success: function() {
                            EventManager.dispachEvent(EventData.SHARE_ADD_GLOD), console.log("\u5206\u4eab\u89c6\u9891\u6210\u529f")
                        },
                        fail: function() {
                            console.log("\u5206\u4eab\u89c6\u9891\u5931\u8d25" + e)
                        }
                    }))
                }
            };
        i.exports = a, cc._RF.pop()
    }, {
        "../model/GameConfig": "GameConfig"
    }],
    AniTools: [function(e, t) {
        "use strict";
        cc._RF.push(t, "c1ddcRY/mRHiYxChOjYdF2+", "AniTools");
        var i = {
            doLabStrAni: function(e, t, i) {
                e.node.stopAllActions(), e.string = "";
                var o = t.split(""),
                    a = 0,
                    n = i / o.length;
                e.node.runAction(cc.sequence(cc.callFunc(function() {
                    e.string = e.string + o[a], a++
                }), cc.delayTime(n)).repeat(o.length))
            },
            gunNumLabAni: function(e, t, i, o, a) {
                if (void 0 === i && (i = 30), a = a || parseInt(e.string), t != a) {
                    e.node.stopAllActions();
                    var n = 0,
                        r = Math.abs(t - a),
                        s = a > t ? -1 : 1;
                    Math.abs(t - a) > i && (r = i, s *= Math.abs(t - a) / i), e.node.runAction(cc.sequence(cc.callFunc(function() {
                        n >= r - 1 ? e.string = o ? ToolsJs.getStrForNum2(t) : t : (a += Math.floor(s), e.string = o ? ToolsJs.getStrForNum2(a) : Math.floor(a)), n++
                    }), cc.delayTime(.02)).repeat(r))
                }
            },
            openUIAni: function(e, t, i, o) {
                void 0 === i && (i = .3), e.opacity = 0, t.scale = 0, e.runAction(cc.fadeTo(i, 100)), t.runAction(cc.sequence(cc.scaleTo(i, 1).easing(cc.easeBackOut()), cc.callFunc(o)))
            },
            closeUIAni: function(e, t, i, o) {
                void 0 === i && (i = .2), e.runAction(cc.fadeOut(i)), t.runAction(cc.sequence(cc.scaleTo(i, 0).easing(cc.easeBackIn()), cc.callFunc(o), cc.removeSelf(!0)))
            },
            sortFadeInArr: function(e, t, i) {
                void 0 === t && (t = .3), void 0 === i && (i = .02);
                for (var o = 0; o < e.length; o++) {
                    var a = e[o];
                    a.opacity = 0, a.runAction(cc.sequence(cc.delayTime(i * o), cc.fadeIn(t)))
                }
            },
            jumpByDegressAni: function(e, t, i, o, a, n) {
                void 0 === i && (i = 0), void 0 === n && (n = 0);
                var r = cc.misc.degreesToRadians(t),
                    s = cc.v2(Math.cos(r) * o, Math.sin(r) * o),
                    c = o / a;
                e.runAction(cc.sequence(cc.delayTime(n), cc.jumpBy(c, cc.v2(1.5 * s.x, i), o, 1), cc.removeSelf(!0)))
            },
            moveDegressAni: function(e, t, i, o, a, n) {
                t = t || this.returnRanNum(-180, 180);
                var r = cc.misc.degreesToRadians(t),
                    s = cc.v2(Math.cos(r) * i, Math.sin(r) * i),
                    c = i / o,
                    h = a ? 0 : e.scale,
                    l = n ? 0 : e.opacity;
                e.runAction(cc.sequence(cc.spawn(cc.scaleTo(c + .1, h), cc.moveBy(c, s).easing(cc.easeQuadraticActionOut()), cc.fadeTo(c + .1, l)), cc.fadeOut(.1), cc.removeSelf(!0)))
            },
            moveByOutInit: function(e, t, i, o) {
                void 0 === t && (t = .5), void 0 === i && (i = 0), void 0 === o && (o = 0), e.x += i, e.y += o, e.runAction(cc.moveBy(t, cc.v2(-i, -o)).easing(cc.easeBackOut()))
            },
            sprRedAni: function(e, t, i, o) {
                var a = 0;
                e.runAction(cc.sequence(cc.delayTime(t), cc.callFunc(function(e) {
                    e.color = cc.Color.RED
                }), cc.delayTime(t), cc.callFunc(function(e) {
                    e.color = cc.Color.WHITE, ++a >= i && null != o && o()
                })).repeat(i))
            },
            shakeAni: function(e, t, i, o, a) {
                void 0 === i && (i = 10), void 0 === o && (o = .1), void 0 === a && (a = 2), e.stopAllActions();
                var n = cc.sequence(cc.rotateTo(o, i), cc.rotateTo(o, 0), cc.rotateTo(o, -i), cc.rotateTo(o, 0), cc.rotateTo(o, i), cc.rotateTo(o, 0), cc.delayTime(a));
                t ? e.runAction(n.repeatForever()) : e.runAction(n)
            },
            playAni: function(e, t) {
                e.getComponent(cc.Animation).play(t)
            },
            stopAni: function(e, t) {
                e.getComponent(cc.Animation).stop(t)
            },
            addNodeAni: function(e, t, i, o, a, n, r) {
                var s = e.getComponent(cc.Animation);
                null == s && (s = e.addComponent(cc.Animation));
                var c = [];
                if (ToolsJs.SpriteFrameDic[t + o]) {
                    for (var h = o; h <= a; h++) {
                        var l = ToolsJs.SpriteFrameDic[t + h];
                        c.push(l)
                    }
                    this.addClipForAnimaton(s, c, i, r, n)
                } else
                    for (var d = this, m = 0, g = a - o + 1, u = function(e) {
                            cc.loader.loadRes(t + e, cc.SpriteFrame, function(t, o) {
                                o && (m++, o.index = e, c.push(o)), m >= g && (ToolsJs.sortArrForObject(c, "index"), d.addClipForAnimaton(s, c, i, r, n))
                            })
                        }, p = o; p <= a; p++) u(p)
            },
            addClipForAnimaton: function(e, t, i, o, a) {
                var n = cc.AnimationClip.createWithSpriteFrames(t, t.length);
                n.name = i, n.speed = o, n.wrapMode = a ? cc.WrapMode.Loop : cc.WrapMode.Normal, e.addClip(n)
            },
            returnRanNum: function(e, t) {
                return e + Math.floor(Math.random() * (t - e + 1))
            }
        };
        window.AniTools = i, cc._RF.pop()
    }, {}],
    CarHomeGame: [function(e, t) {
        "use strict";
        cc._RF.push(t, "45461S6gMxJEppfLrKk7UAr", "CarHomeGame");
        var i = e("../commonJs/mTool_WHQ"),
            o = e("../commonJs/PersonCtrl"),
            a = e("../MainManage"),
            n = (e("../managerJs/AdManager"), e("../managerJs/UIManager")),
            r = e("../model/GameConfig");
        cc.Class({
            extends: cc.Component,
            properties: {
                sceneScore: cc.Label,
                enemyNode: cc.Node,
                playerNode: cc.Node,
                sceneItemNode: cc.Node,
                carmeraNode: cc.Node,
                liziNode: cc.Node,
                gameOverPre: cc.Prefab,
                enemyPreArr: [cc.Prefab],
                newFishPreArr: [cc.Prefab],
                BGPre: cc.Prefab,
                bianjiePre: cc.Prefab,
                eatMusic: {
                    default: null,
                    type: cc.AudioClip
                },
                HurtMusic: {
                    default: null,
                    type: cc.AudioClip
                },
                failMusic: {
                    default: null,
                    type: cc.AudioClip
                }
            },
            judgeCurPlatform: function() {
                console.log(navigator.userAgent);
                var e, t, i, o, a, n, r, s = (e = navigator.userAgent, t = /(?:Windows Phone)/.test(e), i = /(?:SymbianOS)/.test(e) || t, o = /(?:Android)/.test(e), a = /(?:Firefox)/.test(e), /(?:Chrome|CriOS)/.test(e), {
                    isTablet: n = /(?:iPad|PlayBook)/.test(e) || o && !/(?:Mobile)/.test(e) || a && /(?:Tablet)/.test(e),
                    isPhone: r = /(?:iPhone)/.test(e) && !n,
                    isAndroid: o,
                    isPc: !r && !o && !i
                });
                s.isAndroid || s.isPhone ? this.platFromNum = 1 : s.isTablet ? this.platFromNum = 2 : s.isPc && (this.platFromNum = 3)
            },
            adapterScreen: function() {
                var e = cc.find("Canvas").getComponent(cc.Canvas);
                2 == this.platFromNum || 3 == this.platFromNum ? (e.fitWidth = !0, e.fitHeight = !0) : (e.fitWidth = !0, e.fitHeight = !1)
            },
            onLoad: function() {
                var e = this;
                r.mianGameJs = this, r.publicGameBool, this.platFromNum = 1, this.judgeCurPlatform(), this.adapterScreen(), this.gameWidth = cc.winSize.width, this.gameHeight = cc.winSize.height, r.playNum >= 2 || !r.publicGameBool && r.isBanner && ShowBannerAD(), r.publicGameBool || finishLoad(), r.playNum++, r.curType = ToolsJs.returnCurrentLanType(), this.addTouchEvents(), o.loginPerson(), cc.director.getCollisionManager().enabled = !0, this.touchBeginFlags = !0, this.Hscale = 1280 / this.gameHeight, this.Wscale = 720 / this.gameWidth, this.SizeScale = 0, this.Hscale >= this.Wscale ? this.SizeScale = this.Wscale : this.SizeScale = this.Hscale, this.canCreateDisX = 0, this.canCreateDisY = 0, this.OffPos = null, this.lastZoomTatio = this.carmeraNode.getChildByName("MoveCamera").getComponent(cc.Camera).zoomRatio, this.speedNum = 400 / this.lastZoomTatio, this.speed = this.speedNum, this.BGNum = 9, this.kedouArr = [], this.qingwaArr = [], this.haiguiArr = [], this.xiaojinyuArr = [], this.jinliArr = [], this.dianmanArr = [], this.shayuArr = [], this.jingyuArr = [], this.jiaoArr = [], this.longArr = [], this.tempArr = [], this.BGArr = [], this.fishScaleX = [], this.fishScaleY = [], this.myFish = null, this.boolFlags = !1, this.gameOverFlags = !1, this.canMoveFlags = !0, this.firstFlags = !0, this.BGNode = cc.find("Canvas/bgLayer"), this.waterNode = this.node.getChildByName("waterNode"), this.scale = .4 * this.SizeScale;
                for (var t = 0; t < 9; t++) this.changeSize(this.playerNode.getChildByName("car_" + (t + 1)));
                this.playerNode.typeID = 1, this.createMap(), this.maxCameraMovePosX = Math.abs(this.BGArr[0][this.BGNum - 1].x) - this.gameWidth, this.maxCameraMovePosY = Math.abs(this.BGArr[0][this.BGNum - 1].y) - this.gameHeight / 2;
                for (var i = 0; i < this.sceneItemNode.children.length; i++) {
                    var a = this.sceneItemNode.children[i].position,
                        n = 200 * this.SizeScale * this.carmeraNode.getChildByName("MoveCamera").getComponent(cc.Camera).zoomRatio;
                    (a.x > this.maxCameraMovePosX - n || a.x < -this.maxCameraMovePosX + n || a.y > this.maxCameraMovePosY - n || a.y < -this.maxCameraMovePosY + n) && (this.sceneItemNode.children[i].opacity = 180)
                }
                this.myFish = this.playerNode.getChildByName("car_1"), this.myFish.typeID = this.playerNode.typeID, this.angle = 0, this.rotSpeed = 1500, this.addSpeed = 60, this.maxTypeID = 1, this.canTouchReplay = !1;
                for (var s = 0; s < 9; s++) {
                    var c = this.playerNode.getChildByName("car_" + (s + 1)).scaleX;
                    this.fishScaleX.push(c)
                }
                for (var h = 0; h < 9; h++) {
                    var l = this.playerNode.getChildByName("car_" + (h + 1)).scaleY;
                    this.fishScaleY.push(l)
                }
                this.jingyuNum = 0, this.jiaoNum = 0, this.playerNode.zIndex = 888, this.node.getChildByName("bgSpr").zIndex = 50, this.sceneItemNode.zIndex = zIndexAll.Scene_Item, this.enemyNode.zIndex = zIndexAll.Enmy_Z, this.liziNode.zIndex = zIndexAll.LiZi_Z, this.gameOverFlags = !0, EventManager.addListener(EventData.START_GAME, this.startGame.bind(this), this.node), EventManager.addListener(EventData.REIVE_GAME, this.revieGame.bind(this), this.node), EventManager.addListener(EventData.UP_SON_LEVEL, this.upAllSon.bind(this), this.node), this.isRemoveFish = !1, this.tempTime = 0, this.scheduleOnce(function() {
                    e.myFish.getComponent("playerJSCar").setLightSpr(!0)
                }, 0), this.isStartGame = !1
            },
            onDestroy: function() {
                EventManager.removeListenerForTarget(this.node)
            },
            startGame: function(e) {
                var t = this;
                if (void 0 === e && (e = !1), !this.isStartGame) {
                    this.isStartGame = !0, this.gameOverFlags = !1, r.isRevive = !1;
                    var i = 60;
                    r.addGlodNum = 1;
                    var o = 0;
                    this.playerNode.typeID = 1, r.gameMode != GAME_MODE.NORMAL_GMAE && r.gameMode != GAME_MODE.LONG_ZHU_MODE || (e ? (this.playerNode.typeID = 5, this.maxTypeID = this.playerNode.typeID, this.playerNode.getChildByName("car_1").active = !1, this.ChangeBig(), i = 30) : (this.CameraChangeZoomRatio(1, .75), this.myFish.getChildByName("carSpr").getComponent(cc.Animation).play())), r.gameMode == GAME_MODE.TIME_MODE && (r.addGlodNum = 0, this.playerNode.typeID = 25, this.maxTypeID = this.playerNode.typeID, this.ChangeBig(), i = 0, this.timeNum = 60, this.sceneScore.node.active = !0, this.sceneScore.string = this.timeNum), r.gameMode == GAME_MODE.LONG_ZHU_MODE && (this.longZhuMain = ToolsJs.clonePrefab("longZhuMain", this.node).getComponent("longZhuMain"), i = 20, o = 2, this.gameOverFlags = !0), this.scheduleOnce(function() {
                        t.createNewEnemy(), t.CreateEnemy(i), t.gameOverFlags = !1
                    }, o), r.gameMode == GAME_MODE.TIME_MODE && EventManager.dispachEvent(EventData.SHOW_GLOD, !0)
                }
            },
            revieGame: function() {
                var e = this;
                if (!r.isRevive) {
                    r.isRevive = !0;
                    for (var t = 0; t < .7 * this.enemyNode.children.length; t++) this.enemyNode.children[t].getComponent("enemyJSCar").bombAni(), this.enemyNode.children[t].destroy();
                    this.gameOverFlags = !1, this.playerNode.typeID = this.maxTypeID, this.angle = 0, this.scheduleOnce(function() {
                        r.gameMode == GAME_MODE.LONG_ZHU_MODE && (e.playerNode.position = cc.v2(0, 0)), e.playerNode.opacity = 255, e.playerNode.active = !0, e.gameOverFlags = !1, e.ChangeBig(), e.myFish.angle = 0, e.OffPos = null, e.myFish.getComponent("playerJSCar").reviePlayer(), e.scheduleOnce(function() {
                            e.isRemoveFish = !0
                        }, 1)
                    }, .2)
                }
            },
            upAllSon: function(e) {
                var t = this,
                    i = e + 1;
                7 == e && (i = 9);
                var o = this.playerNode.getChildByName("son");
                if (!(i <= this.playerNode.typeID)) {
                    this.playerNode.typeID = i, this.maxTypeID = this.playerNode.typeID, this.ChangeBig();
                    for (var a = [], n = 0; n < o.children.length; n++) {
                        var r = o.children[n];
                        a.push(r.position), r.destroy()
                    }
                    for (var s = function(e) {
                            var n = cc.instantiate(t.newFishPreArr[i - 1]);
                            n.typeID = i, t.changeSize(n), n.runAction(cc.sequence(cc.delayTime(.5 * Math.random()), cc.callFunc(function() {
                                n.children[0].getComponent(dragonBones.ArmatureDisplay).playAnimation("newAnimation", -1)
                            }))), n.position = a[e], o.addChild(n, 100)
                        }, c = 0; c < a.length; c++) s(c)
                }
            },
            start: function() {},
            changeSize: function(e) {
                e.scaleX = (e.scaleX - .1) * this.SizeScale, e.scaleY = (e.scaleY - .1) * this.SizeScale
            },
            CreateBG: function() {
                var e = wordCtrl.getRandomWrod().split("");
                this.wordSprArr = [];
                for (var t = 0; t < e.length; t++) {
                    var i = ToolsJs.clonePrefab("fuSpr");
                    ToolsJs.setTexture(i.children[1], "wordSpr/" + e[t]), i.name = e[t], i.num = 0, i.groupIndex = GroupIndexAll.UI, i.opacity = 0, i.getChildByName("boxSpr").active = !0, i.getChildByName("ziSpr").active = !1, i.getComponent(cc.Sprite).enabled = !1;
                    for (var o = 0; o < i.children.length; o++) i.children[o].groupIndex = GroupIndexAll.UI;
                    i.scale = .25, this.node.addChild(i, 200), i.position = cc.v2(-this.gameWidth / 2 + 50 + 90 * t, this.gameHeight / 2 - 80), this.wordSprArr.push(i)
                }
                for (var a = this.BGNum, n = 0; n < a; n++) {
                    for (var r = [], s = 0; s < a; s++) {
                        var c = cc.instantiate(this.BGPre);
                        this.BGNode.addChild(c), c.width = this.gameHeight, c.height = this.gameHeight;
                        var h = c.width,
                            l = c.height;
                        this.canCreateDisX = h * a / 2 - h, this.canCreateDisY = l * a / 2 - l;
                        var d = cc.v2(-h * Math.floor(a / 2), l * Math.floor(a / 2)),
                            m = cc.v2(d.x + h * n, d.y - l * s);
                        if (c.setPosition(m), r.push(c), n > 0 && n < a - 1 && s > 0 && s < a - 1 && Math.random() <= .3) {
                            var g = ToolsJs.returnRandom(1, 1, !0),
                                u = ToolsJs.returnRandom(0, 2, !0);
                            this.sceneItemNode.children.length <= 3 && (u = this.sceneItemNode.children.length), this.CreateFuBG(g, c, e[u])
                        }
                    }
                    this.BGArr.push(r)
                }
            },
            getCreatePos: function(e, t) {
                void 0 === t && (t = 0);
                var o = e.width,
                    a = e.height,
                    n = i.getRandomNum(-o / 4, o / 4, !1),
                    r = i.getRandomNum(-a / 4, a / 4, !1),
                    s = cc.v2(n + e.x, r + e.y),
                    c = this.sceneItemNode.convertToNodeSpaceAR(this.BGNode.convertToWorldSpaceAR(cc.v2(s)));
                if (++t > 100) return null;
                for (var h = 0; h < this.sceneItemNode.children.length; h++)
                    if (i.pDistance(c, this.sceneItemNode.children[h].position) < 400) return this.getCreatePos(e, t);
                return c
            },
            CreateFuBG: function(e, t, i) {
                for (var o = 0; o < e; o++) {
                    var a = ToolsJs.clonePrefab("fuSpr");
                    ToolsJs.setTexture(a.children[1], "wordSpr/" + i), a.groupIndex = GroupIndexAll.Move, a.size = ToolsJs.returnRandom(1, 2, !1) * this.SizeScale, a.name = i, this.sceneItemNode.addChild(a, 1);
                    var n = this.getCreatePos(t);
                    n ? a.setPosition(n) : a.destroy()
                }
            },
            CreateLine: function(e, t) {
                var i = ToolsJs.newSprite("line_Y");
                if (i.groupIndex = GroupIndexAll.Move, i.scaleY = .8, this.sceneItemNode.addChild(i), i.position = t.position, e % 2 != 0)
                    for (var o = Math.floor(t.width / 8), a = 0; a < 8; a++)
                        if (0 != a) {
                            var n = ToolsJs.newSprite("line_W");
                            n.groupIndex = GroupIndexAll.Move, n.scaleY = .4, n.scaleX = .7, this.sceneItemNode.addChild(n), n.position = cc.v2(t.x + a * o, t.y - t.height / 2)
                        }
            },
            CreateBianJie: function() {
                for (var e = 1; e < this.BGNum - 1; e++)
                    if (e == Math.floor(this.BGNum / 2)) {
                        var t = cc.instantiate(this.bianjiePre);
                        ToolsJs.setTexture(t, "bian"), this.BGNode.addChild(t, 100);
                        var i = this.BGArr[0][e].position;
                        t.width = 1.8 * this.gameHeight, t.height = 1.8 * this.gameHeight, t.angle = 90, t.setPosition(cc.v2(i.x - this.gameHeight / 4, i.y)), ToolsJs.setNodeParent(t, this.node), t.zIndex = zIndexAll.Scene_Bian
                    }
                for (var o = 1; o < this.BGNum - 1; o++)
                    if (o == Math.floor(this.BGNum / 2)) {
                        var a = cc.instantiate(this.bianjiePre);
                        ToolsJs.setTexture(a, "bian"), this.BGNode.addChild(a, 100);
                        var n = this.BGArr[this.BGNum - 1][o].position;
                        a.width = 1.8 * this.gameHeight, a.height = 1.8 * this.gameHeight, a.angle = -90, a.setPosition(cc.v2(n.x + this.gameHeight / 4, n.y)), ToolsJs.setNodeParent(a, this.node), a.zIndex = zIndexAll.Scene_Bian
                    }
                for (var r = 1; r < this.BGNum - 1; r++)
                    if (r == Math.floor(this.BGNum / 2)) {
                        var s = cc.instantiate(this.bianjiePre);
                        ToolsJs.setTexture(s, "bian"), this.BGNode.addChild(s, 100);
                        var c = this.BGArr[r][0].position;
                        s.width = 1.8 * this.gameHeight, s.height = 1.8 * this.gameHeight, s.angle = 0, s.setPosition(cc.v2(c.x, c.y + this.gameHeight / 4)), ToolsJs.setNodeParent(s, this.node), s.zIndex = zIndexAll.Scene_Bian
                    }
                for (var h = 1; h < this.BGNum - 1; h++)
                    if (h == Math.floor(this.BGNum / 2)) {
                        var l = cc.instantiate(this.bianjiePre);
                        ToolsJs.setTexture(l, "bian"), this.BGNode.addChild(l, 100);
                        var d = this.BGArr[h][this.BGNum - 1].position;
                        l.width = 1.8 * this.gameHeight, l.height = 1.8 * this.gameHeight, l.angle = 180, l.setPosition(cc.v2(d.x, d.y - this.gameHeight / 4)), ToolsJs.setNodeParent(l, this.node), l.zIndex = zIndexAll.Scene_Bian
                    }
                for (var m = 0; m < 4; m++) {
                    var g = cc.instantiate(this.bianjiePre);
                    if (this.BGNode.addChild(g, 300 + m), g.width = 6 * this.gameHeight, g.height = 6 * this.gameHeight, 0 == m) {
                        var u = this.BGArr[0][0].position;
                        g.angle = 0, g.setPosition(cc.v2(u.x + this.gameHeight / 2, u.y - this.gameHeight / 2.2))
                    }
                    if (1 == m) {
                        var p = this.BGArr[0][this.BGNum - 1].position;
                        g.angle = 90, g.setPosition(cc.v2(p.x + this.gameHeight / 2, p.y + this.gameHeight / 2.2))
                    }
                    if (2 == m) {
                        var f = this.BGArr[this.BGNum - 1][0].position;
                        g.angle = -90, g.setPosition(cc.v2(f.x - this.gameHeight / 2, f.y - this.gameHeight / 2.2))
                    }
                    if (3 == m) {
                        var y = this.BGArr[this.BGNum - 1][this.BGNum - 1].position;
                        g.angle = 180, g.setPosition(cc.v2(y.x - this.gameHeight / 2, y.y + this.gameHeight / 2.2))
                    }
                    ToolsJs.setNodeParent(g, this.node), g.zIndex = zIndexAll.Scene_Bian
                }
            },
            createMap: function() {
                this.CreateBG(), this.CreateBianJie()
            },
            createNewEnemy: function() {
                var e = cc.instantiate(this.enemyPreArr[0]);
                this.enemyNode.addChild(e), this.changeSize(e), e.typeID = 1, e.speed = 100;
                var t = this.enemyNode.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(cc.v2(this.playerNode.position))),
                    o = i.getRandomNum(this.gameWidth / 3, 3 * this.gameWidth / 4, !1),
                    a = 360 * Math.random(),
                    n = i.getCircumferencePos(t, o, a);
                e.setPosition(n), this.enemyAction(e)
            },
            CameraMove: function(e) {
                if (!this.gameOverFlags) {
                    var t = this.playerNode,
                        i = 0,
                        o = 0;
                    if (t.x <= -this.maxCameraMovePosX || t.x >= this.maxCameraMovePosX || t.y <= -this.maxCameraMovePosY || t.y >= this.maxCameraMovePosY) {
                        var a = t.x + this.OffPos.x * this.speed * e,
                            n = t.y + this.OffPos.y * this.speed * e;
                        a < -this.maxCameraMovePosX && n > -this.maxCameraMovePosY && n < this.maxCameraMovePosY ? (o = this.speedNum, i = 0, t.x = -this.maxCameraMovePosX) : a >= this.maxCameraMovePosX && n >= -this.maxCameraMovePosY && n <= this.maxCameraMovePosY ? (o = this.speedNum, i = 0, t.x = this.maxCameraMovePosX) : n >= this.maxCameraMovePosY && a >= -this.maxCameraMovePosX && a <= this.maxCameraMovePosX ? (i = this.speedNum, o = 0, t.y = this.maxCameraMovePosY) : n <= -this.maxCameraMovePosY && a >= -this.maxCameraMovePosX && a <= this.maxCameraMovePosX ? (i = this.speedNum, o = 0, t.y = -this.maxCameraMovePosY) : a <= -this.maxCameraMovePosX && n <= -this.maxCameraMovePosY ? (i = 0, o = 0, t.x = -this.maxCameraMovePosX, t.y = -this.maxCameraMovePosY) : a <= -this.maxCameraMovePosX && n >= this.maxCameraMovePosY ? (i = 0, o = 0, t.x = -this.maxCameraMovePosX, t.y = this.maxCameraMovePosY) : a >= this.maxCameraMovePosX && n <= -this.maxCameraMovePosY ? (i = 0, o = 0, t.x = this.maxCameraMovePosX, t.y = -this.maxCameraMovePosY) : a >= this.maxCameraMovePosX && n >= this.maxCameraMovePosY ? (i = 0, o = 0, t.x = this.maxCameraMovePosX, t.y = this.maxCameraMovePosY) : (i = this.speedNum, o = this.speedNum)
                    } else i = this.speedNum, o = this.speedNum;
                    var r = cc.misc.degreesToRadians(this.angle);
                    t.x += Math.floor(-Math.sin(r) * i * e), t.y += Math.floor(Math.cos(r) * o * e), t.x >= -this.maxCameraMovePosX + this.gameWidth / 4 && t.x <= this.maxCameraMovePosX - this.gameWidth / 4 && t.y >= -this.maxCameraMovePosY + this.gameHeight / 4 && t.y <= this.maxCameraMovePosY - this.gameHeight / 4 ? this.carmeraNode.setPosition(t.position) : t.x > -this.maxCameraMovePosX + this.gameWidth / 4 && t.x < this.maxCameraMovePosX - this.gameWidth / 4 && t.y < -this.maxCameraMovePosY + this.gameHeight / 4 ? this.carmeraNode.setPosition(cc.v2(t.x, -this.maxCameraMovePosY + this.gameHeight / 4)) : t.x > -this.maxCameraMovePosX + this.gameWidth / 4 && t.x < this.maxCameraMovePosX - this.gameWidth / 4 && t.y > this.maxCameraMovePosY - this.gameHeight / 4 ? this.carmeraNode.setPosition(cc.v2(t.x, this.maxCameraMovePosY - this.gameHeight / 4)) : t.y > -this.maxCameraMovePosY + this.gameHeight / 4 && t.y < this.maxCameraMovePosY - this.gameHeight / 4 && t.x > this.maxCameraMovePosX - this.gameWidth / 4 ? this.carmeraNode.setPosition(cc.v2(this.maxCameraMovePosX - this.gameWidth / 4, t.y)) : t.y > -this.maxCameraMovePosY + this.gameHeight / 4 && t.y < this.maxCameraMovePosY - this.gameHeight / 4 && t.x < -this.maxCameraMovePosX + this.gameWidth / 4 ? this.carmeraNode.setPosition(cc.v2(-this.maxCameraMovePosX + this.gameWidth / 4, t.y)) : t.y >= this.maxCameraMovePosY - this.gameHeight / 4 && t.x < -this.maxCameraMovePosY + this.gameWidth / 4 ? this.carmeraNode.setPosition(cc.v2(-this.maxCameraMovePosX + this.gameWidth / 4, this.maxCameraMovePosY - this.gameHeight / 4)) : t.y > this.maxCameraMovePosY - this.gameHeight / 4 && t.x > this.maxCameraMovePosY - this.gameWidth / 4 ? this.carmeraNode.setPosition(cc.v2(this.maxCameraMovePosX - this.gameWidth / 4, this.maxCameraMovePosY - this.gameHeight / 4)) : t.y < -this.maxCameraMovePosY + this.gameHeight / 4 && t.x > this.maxCameraMovePosY - this.gameWidth / 4 ? this.carmeraNode.setPosition(cc.v2(this.maxCameraMovePosX - this.gameWidth / 4, -this.maxCameraMovePosY + this.gameHeight / 4)) : t.y < -this.maxCameraMovePosY + this.gameHeight / 4 && t.x < -this.maxCameraMovePosY + this.gameWidth / 4 && this.carmeraNode.setPosition(cc.v2(-this.maxCameraMovePosX + this.gameWidth / 4, -this.maxCameraMovePosY + this.gameHeight / 4))
                }
            },
            CameraChangeZoomRatio: function(e, t) {
                if (e != t) {
                    this.lastZoomTatio = t;
                    var i = this.carmeraNode.getChildByName("MoveCamera");
                    i.stopAllActions(), i.getComponent(cc.Camera).zoomRatio;
                    var o = !0;
                    t - e > 0 && (o = !1);
                    var a = Math.abs(t - e),
                        n = Math.floor(a / .01);
                    i.runAction(cc.sequence(cc.callFunc(function() {
                        i.getComponent(cc.Camera).zoomRatio != t && (o ? i.getComponent(cc.Camera).zoomRatio -= .01 : i.getComponent(cc.Camera).zoomRatio += .01)
                    }, this), cc.delayTime(.005)).repeat(n))
                }
            },
            getEnemyPos: function(e, t) {
                if (void 0 === t && (t = 0), !this.gameOverFlags) {
                    var o = this.carmeraNode.getChildByName("MoveCamera").getComponent(cc.Camera).zoomRatio,
                        a = this.enemyNode.convertToNodeSpaceAR(this.BGNode.convertToWorldSpaceAR(cc.v2(this.BGArr[0][this.BGNum - 1].position))),
                        n = Math.abs(a.x) - e.width - 400,
                        r = Math.abs(a.y) - e.height - 400,
                        s = i.getRandomNum(-n, n, !1),
                        c = i.getRandomNum(-r, r, !1),
                        h = cc.v2();
                    if (this.firstFlags || (h = cc.v2(s, c)), ++t > 100) {
                        var l = this.playerNode.position,
                            d = this.enemyNode.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(cc.v2(this.playerNode.position))),
                            m = 0,
                            g = 0;
                        return l.x >= 0 && l.y >= 0 ? (m = -this.gameWidth / o, g = -this.gameHeight / o) : l.x < 0 && l.y >= 0 ? (m = this.gameWidth / o, g = -this.gameHeight / o) : l.x >= 0 && l.y < 0 ? (m = -this.gameWidth / o, g = this.gameHeight / o) : (m = this.gameWidth / o, g = this.gameHeight / o), cc.v2(d.x + m, d.y + g)
                    }
                    if (this.firstFlags) {
                        var u = i.getRandomNum(2 * -this.gameHeight, 2 * this.gameHeight, !1),
                            p = i.getRandomNum(2 * -this.gameHeight, 2 * this.gameHeight, !1);
                        if (h = cc.v2(u, p), i.pDistance(h, cc.v2(0, 0)) < 200) return this.getEnemyPos(e, t)
                    }
                    var f = this.enemyNode.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(cc.v2(this.playerNode.position)));
                    if (i.pDistance(h, f) < (this.gameHeight + e.width) / o) return this.getEnemyPos(e, t);
                    for (var y = 0; y < this.enemyNode.children.length; y++)
                        if (i.pDistance(h, this.enemyNode.children[y].position) < 500) return this.getEnemyPos(e, t);
                    return h
                }
            },
            getEnemyID: function(e) {
                var t = i.getRandomNum(0, 100, !1),
                    o = 0;
                return 1 == e ? o = t < 50 ? 0 : t > 50 && t < 75 ? 1 : 2 : 2 == e ? o = t < 20 ? 0 : t > 25 && t < 50 ? 1 : t > 50 && t < 70 ? 2 : 3 : 3 == e ? o = t < 20 ? 0 : t < 35 ? 1 : t < 40 ? 2 : t < 70 ? 3 : 4 : 4 == e ? o = t < 20 ? 1 : t < 35 ? 2 : t < 40 ? 3 : t > 40 && t < 70 ? 4 : 5 : 5 == e ? t <= 15 ? o = 2 : t <= 30 ? o = 3 : t <= 40 ? o = 4 : t <= 60 ? o = 5 : t <= 90 ? o = 6 : this.jingyuNum < 1 && (o = 7, this.jingyuNum++) : 6 == e ? t <= 15 ? o = 3 : t <= 30 ? o = 4 : t <= 35 ? o = 5 : t <= 65 ? o = 6 : t <= 90 ? this.jingyuNum < 3 ? (o = 7, this.jingyuNum++) : o = 6 : this.jiaoNum < 2 ? (o = 8, this.jiaoNum++) : o = this.jingyuNum < 3 ? 7 : 6 : 7 == e ? t <= 20 ? o = 3 : t <= 25 ? o = 4 : t <= 30 ? o = 5 : t <= 35 ? o = 6 : this.jingyuNum < 5 ? (o = 7, this.jingyuNum++) : this.jiaoNum < 2 ? (o = 8, this.jiaoNum++) : o = i.getRandomNum(3, 4, !0) : 8 == e ? t < 40 ? o = 3 : t < 45 ? o = 4 : t <= 50 ? o = 5 : t <= 55 ? o = 6 : t <= 60 ? this.jingyuNum < 2 && (o = 7, this.jingyuNum++) : this.jiaoNum < 2 ? (o = 8, this.jiaoNum++) : o = i.getRandomNum(4, 5, !0) : o = i.getRandomNum(3, 5, !0), o
            },
            CreateEnemy: function(e) {
                for (var t = 0; t < e; t++) {
                    var i;
                    i = t <= .8 * e ? 0 : t > .8 * e && t <= .9 * e ? 1 : 2;
                    var o = cc.instantiate(this.enemyPreArr[i]);
                    this.changeSize(o), o.typeID = i + 1;
                    var a = this.carmeraNode.getChildByName("MoveCamera").getComponent(cc.Camera).zoomRatio;
                    o.speed = (200 - 15 * o.typeID) / a;
                    var n = this.getEnemyPos(o);
                    n ? (this.enemyNode.addChild(o, 1), o.setPosition(n), o.getComponent("enemyJSCar").active = !0, this.enemyAction(o)) : o.destroy()
                }
                this.firstFlags = !1
            },
            updateCreate: function() {
                if (!this.gameOverFlags) {
                    for (var e = this.enemyNode.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(cc.v2(this.playerNode.position))), t = this.carmeraNode.getChildByName("MoveCamera").getComponent(cc.Camera).zoomRatio, o = 0; o < this.enemyNode.children.length; o++)
                        if (i.pDistance(e, this.enemyNode.children[o].position) > (this.gameHeight / 2 + this.enemyNode.children[o].height / 2) / t) {
                            this.enemyNode.children[o].children[1].active = !1;
                            var a = this.enemyNode.children[o].getComponent(cc.PolygonCollider);
                            a && (a.enabled = !1)
                        } else if (!this.enemyNode.children[o].children[1].active) {
                        this.enemyNode.children[o].children[1].active = !0;
                        var n = this.enemyNode.children[o].getComponent(cc.PolygonCollider);
                        n && (n.enabled = !0)
                    }
                    this.CreateSingleEnemy(1, this.playerNode.typeID)
                }
            },
            CreateSingleEnemy: function(e, t) {
                if (!this.gameOverFlags) {
                    var i = this.enemyNode.children.length,
                        o = this.playerNode.typeID;
                    if (r.gameMode == GAME_MODE.TIME_MODE) {
                        if (i > 80) return
                    } else if (o <= 3) {
                        if (i > 60) return
                    } else if (o >= 4 && o <= 5) {
                        if (i > 50) return
                    } else if (o > 5 && o <= 7) {
                        if (i > 40) return
                    } else if (o > 7 && i > 30) return;
                    for (var a = 0; a < e; a++) {
                        var n = this.getEnemyID(t),
                            s = cc.instantiate(this.enemyPreArr[n]);
                        this.changeSize(s), s.typeID = n + 1;
                        var c = this.carmeraNode.getChildByName("MoveCamera").getComponent(cc.Camera).zoomRatio;
                        s.speed = (200 - 10 * s.typeID) / c;
                        var h = this.getEnemyPos(s);
                        h ? (this.enemyNode.addChild(s, 1), s.setPosition(h), s.getComponent("enemyJSCar").active = !0, this.enemyAction(s)) : s.destroy()
                    }
                }
            },
            judgeEnemyPos: function(e) {
                var t = this.enemyNode.convertToNodeSpaceAR(this.BGNode.convertToWorldSpaceAR(cc.v2(this.BGArr[0][0].position))),
                    i = Math.abs(t.x),
                    o = Math.abs(t.y);
                e.x > i - this.gameHeight || e.y > o - this.gameHeight || e.x < -i + this.gameHeight || e.y < -o + this.gameHeight ? this.EnemyReturnAction(e) : this.enemyAction(e)
            },
            enemyAction: function(e) {
                if (!e.longZhu) {
                    e.stopAllActions();
                    var t = i.getRandomNum(500, 1e3, !0),
                        o = e.position,
                        a = i.getRandomNum(-t, t, !0),
                        n = i.getRandomNum(-t, t, !0),
                        r = cc.v2(o.x + a, o.y + n),
                        s = this.enemyNode.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(cc.v2(r))),
                        c = Math.atan2(s.y - o.y, s.x - o.x),
                        h = cc.misc.radiansToDegrees(c) - 90,
                        l = e.speed,
                        d = i.pDistance(o, s) / l,
                        m = .3;
                    e.typeID >= 8 && (m = 2), e.runAction(cc.sequence(cc.spawn(cc.moveTo(d, s), cc.rotateTo(m, h)), cc.callFunc(function() {
                        this.judgeEnemyPos(e)
                    }, this)))
                }
            },
            EnemyReturnAction: function(e) {
                if (!e.longZhu) {
                    e.stopAllActions();
                    var t = e.speed,
                        o = i.getRandomNum(1e3, 1300, !1),
                        a = o / t,
                        n = Math.atan2(-e.y, -e.x),
                        r = cc.misc.radiansToDegrees(n) - 90;
                    e.runAction(cc.sequence(cc.spawn(cc.moveBy(a, o * Math.cos(n), o * Math.sin(n)), cc.rotateTo(.3, r)), cc.callFunc(function() {
                        this.judgeEnemyPos(e)
                    }, this)))
                }
            },
            ChasePlayer: function(e) {
                if (!e.longZhu) {
                    e.stopAllActions();
                    var t = e.position,
                        o = this.playerNode.position,
                        a = Math.atan2(o.y - t.y, o.x - t.x),
                        n = e.speed,
                        r = this.carmeraNode.getChildByName("MoveCamera").getComponent(cc.Camera).zoomRatio,
                        s = i.getRandomNum(100 / r, 200 / r, !1),
                        c = s / n,
                        h = cc.misc.radiansToDegrees(a) - 90,
                        l = e.typeID >= 8 ? 1.5 : 2 / 3;
                    e.runAction(cc.sequence(cc.spawn(cc.moveBy(c, s * Math.cos(a), s * Math.sin(a)), cc.rotateTo(c * l, h)), cc.callFunc(function() {
                        this.ChasePlayer(e)
                    }, this)))
                }
            },
            EscapePlayer: function(e) {
                e.stopAllActions();
                var t = e.position,
                    o = this.playerNode.position,
                    a = Math.atan2(t.y - o.y, t.x - o.x),
                    n = e.speed,
                    r = i.getRandomNum(100, 200, !1),
                    s = r / n,
                    c = cc.misc.radiansToDegrees(a) - 90;
                e.runAction(cc.sequence(cc.spawn(cc.moveBy(s, r * Math.cos(a), r * Math.sin(a)), cc.rotateTo(.3, c)), cc.callFunc(function() {
                    this.enemyAction(e)
                }, this)))
            },
            judgeIsChange: function(e) {
                var t = this;
                if (r.gameMode != GAME_MODE.LONG_ZHU_MODE && this.tempArr.length >= 2)
                    if (this.playerNode.typeID <= e) {
                        this.playerNode.typeID++, this.playerNode.typeID > this.maxTypeID && (this.maxTypeID = this.playerNode.typeID);
                        for (var o = this.playerNode.getChildByName("son").convertToNodeSpaceAR(this.playerNode.convertToWorldSpaceAR(cc.v2(this.myFish.position))), a = function(e) {
                                var a = t.tempArr[e].position,
                                    n = i.pDistance(o, a) / 2e3;
                                t.tempArr[e].runAction(cc.sequence(cc.spawn(cc.moveTo(n, o).easing(cc.easeQuadraticActionOut()), cc.scaleTo(n, 0, 0), cc.callFunc(function() {
                                    if (e == this.tempArr.length - 1) {
                                        for (var t = 0; t < this.tempArr.length; t++) this.tempArr[t].destroy();
                                        this.tempArr.splice(0, this.tempArr.length), this.createLizi(this.myFish, !0), this.ChangeBig()
                                    }
                                }, t)), cc.callFunc(function() {}, t)))
                            }, n = 0; n < this.tempArr.length; n++) a(n)
                    } else this.playerNode.typeID > e && this.tempArr.length >= 3 && this.EatSmallAction2()
            },
            judgePushArr: function(e, t) {
                1 == e ? (this.kedouArr.push(t), this.tempArr = this.kedouArr, this.judgeIsChange(e)) : 2 == e ? (this.qingwaArr.push(t), this.tempArr = this.qingwaArr, this.judgeIsChange(e)) : 3 == e ? (this.haiguiArr.push(t), this.tempArr = this.haiguiArr, this.judgeIsChange(e)) : 4 == e ? (this.xiaojinyuArr.push(t), this.tempArr = this.xiaojinyuArr, this.judgeIsChange(e)) : 5 == e ? (this.jinliArr.push(t), this.tempArr = this.jinliArr, this.judgeIsChange(e)) : 6 == e ? (this.dianmanArr.push(t), this.tempArr = this.dianmanArr, this.judgeIsChange(e)) : 7 == e ? (this.shayuArr.push(t), this.tempArr = this.shayuArr, this.judgeIsChange(e)) : 8 == e ? (this.jingyuArr.push(t), this.tempArr = this.jingyuArr, this.judgeIsChange(e)) : 9 == e ? (this.jiaoArr.push(t), this.tempArr = this.jiaoArr, this.judgeIsChange(e)) : 10 == e && (this.longArr.push(t), this.tempArr = this.longArr, this.judgeIsChange(e))
            },
            ChangeBig: function() {
                if (!this.gameOverFlags) {
                    var e = this.carmeraNode.getChildByName("MoveCamera").getComponent(cc.Camera).zoomRatio;
                    this.lastZoomTatio = e;
                    for (var t = this.playerNode.typeID, i = 0; i < this.playerNode.children.length; i++) this.playerNode.children[i].active = !1;
                    this.playerNode.getChildByName("son").active = !0, this.playerNode.getChildByName("liziNode").active = !0, this.playerNode.getChildByName("liziBgNode").active = !0, 1 == t ? (this.playerNode.getChildByName("car_1").active = !0, this.playerNode.getChildByName("car_1").scaleX = 0, this.playerNode.getChildByName("car_1").scaleY = 0, this.myFish = this.playerNode.getChildByName("car_1"), this.CameraChangeZoomRatio(e, .75)) : 2 == t ? (this.playerNode.getChildByName("car_1").active = !1, this.playerNode.getChildByName("car_2").scaleX = 0, this.playerNode.getChildByName("car_2").scaleY = 0, this.playerNode.getChildByName("car_2").active = !0, this.myFish = this.playerNode.getChildByName("car_2"), this.CameraChangeZoomRatio(e, .75)) : 3 == t ? (this.playerNode.getChildByName("car_2").active = !1, this.playerNode.getChildByName("car_3").scaleX = 0, this.playerNode.getChildByName("car_3").scaleY = 0, this.playerNode.getChildByName("car_3").active = !0, this.CameraChangeZoomRatio(e, .65), this.myFish = this.playerNode.getChildByName("car_3")) : 4 == t ? (this.playerNode.getChildByName("car_3").active = !1, this.playerNode.getChildByName("car_4").scaleX = 0, this.playerNode.getChildByName("car_4").scaleY = 0, this.playerNode.getChildByName("car_4").active = !0, this.myFish = this.playerNode.getChildByName("car_4"), this.CameraChangeZoomRatio(e, .65)) : 5 == t ? (this.playerNode.getChildByName("car_4").active = !1, this.playerNode.getChildByName("car_5").scaleX = 0, this.playerNode.getChildByName("car_5").scaleY = 0, this.playerNode.getChildByName("car_5").active = !0, this.CameraChangeZoomRatio(e, .55), this.myFish = this.playerNode.getChildByName("car_5")) : 6 == t ? (this.playerNode.getChildByName("car_5").active = !1, this.playerNode.getChildByName("car_6").scaleX = 0, this.playerNode.getChildByName("car_6").scaleY = 0, this.playerNode.getChildByName("car_6").active = !0, this.myFish = this.playerNode.getChildByName("car_6"), this.CameraChangeZoomRatio(e, .45)) : 7 == t ? (this.playerNode.getChildByName("car_6").active = !1, this.playerNode.getChildByName("car_7").scaleX = 0, this.playerNode.getChildByName("car_7").scaleY = 0, this.playerNode.getChildByName("car_7").active = !0, this.CameraChangeZoomRatio(e, .4), this.myFish = this.playerNode.getChildByName("car_7")) : 8 == t ? (this.playerNode.getChildByName("car_7").active = !1, this.playerNode.getChildByName("car_8").scaleX = 0, this.playerNode.getChildByName("car_8").scaleY = 0, this.playerNode.getChildByName("car_8").active = !0, this.CameraChangeZoomRatio(e, .3), this.myFish = this.playerNode.getChildByName("car_8")) : 9 == t ? (this.playerNode.getChildByName("car_8").active = !1, this.playerNode.getChildByName("car_9").scaleX = 0, this.playerNode.getChildByName("car_9").scaleY = 0, this.playerNode.getChildByName("car_9").active = !0, this.CameraChangeZoomRatio(e, .25), this.myFish = this.playerNode.getChildByName("car_9")) : 10 == t ? (this.playerNode.getChildByName("car_9").active = !1, this.SummonDragonAction()) : 25 == t && (this.playerNode.getChildByName("car_1").active = !1, this.playerNode.getChildByName("wudiKeDou").active = !0, this.playerNode.getChildByName("lightSpr").active = !0, this.myFish = this.playerNode.getChildByName("wudiKeDou"), this.playerNode.getChildByName("lightSpr").runAction(cc.rotateBy(1, 360).repeatForever()), this.CameraChangeZoomRatio(e, .4)), this.myFish.typeID = this.playerNode.typeID, t < 10 && this.myFish.runAction(cc.sequence(cc.scaleTo(.1, this.fishScaleX[t - 1], this.fishScaleY[t - 1]).easing(cc.easeBackOut()), cc.callFunc(function() {}, this))), this.myFish.getComponent("playerJSCar").setLightSpr(!0)
                }
            },
            EatSmallAction2: function() {
                var e = this;
                if (this.tempArr.length >= 3) {
                    var t = function() {
                        var t = e.tempArr[0].typeID;
                        if (9 == t) return {
                            v: void 0
                        };
                        var o = cc.instantiate(e.newFishPreArr[t]);
                        o.typeID = t + 1, e.changeSize(o);
                        var a = o.scaleX,
                            n = o.scaleY,
                            r = e.playerNode.getChildByName("son"),
                            s = e.getSmallFishPos(o, e.myFish);
                        o.scaleX = 0, o.scaleY = 0, r.addChild(o, 100), o.setPosition(s), o.getComponent("playerJSCar").setLightSpr(!1);
                        for (var c = function(r) {
                                var c = i.pDistance(s, e.tempArr[r].position) / 2e3;
                                e.tempArr[r].runAction(cc.sequence(cc.spawn(cc.moveTo(c, s).easing(cc.easeQuadraticActionOut()), cc.callFunc(function() {
                                    if (r == this.tempArr.length - 1) {
                                        for (var e = 0; e < this.tempArr.length; e++) this.tempArr[e].destroy();
                                        this.tempArr.splice(0, this.tempArr.length), o.runAction(cc.sequence(cc.scaleTo(.1, a, n).easing(cc.easeQuarticActionOut()), cc.callFunc(function() {
                                            o.zIndex = 50 * (10 - t - 1), this.createLizi(o, !1), this.judgePushArr(o.typeID, o)
                                        }, this)))
                                    }
                                }, e)), cc.callFunc(function() {}, e)))
                            }, h = 0; h < e.tempArr.length; h++) c(h)
                    }();
                    if ("object" == typeof t) return t.v
                }
            },
            getSmallFishPos: function(e, t, o) {
                void 0 === o && (o = 0), o++;
                var a, n = cc.v2(),
                    s = this.playerNode.getChildByName("son"),
                    c = s.convertToNodeSpaceAR(s.parent.convertToWorldSpaceAR(cc.v2(t.position)));
                a = Math.random() > .5 ? i.getRandomNum(-t.width / 2 * t.scaleX - e.width / 2 * e.scaleX, -t.width / 2 * t.scaleX - e.width / 4 * e.scaleX, !1) : i.getRandomNum(t.width / 2 * t.scaleX + e.width / 4 * e.scaleX, t.width / 2 * t.scaleX + e.width / 2 * e.scaleX, !1);
                var h = i.getRandomNum(-t.height * t.scaleY, -e.height / 3 * e.scaleY, !1),
                    l = this.carmeraNode.getChildByName("MoveCamera").getComponent(cc.Camera).zoomRatio;
                if (r.gameMode == GAME_MODE.LONG_ZHU_MODE && this.playerNode.typeID <= 1 && (l *= 3), n = cc.v2(c.x + a * l, c.y + h * l), o > 100) {
                    var d = i.getRandomNum(.8, 1.3, !1),
                        m = a * d,
                        g = h * d;
                    return cc.v2(cc.v2(c.x + m * l, c.y + g * l))
                }
                for (var u = 0; u < s.children.length; u++)
                    if (i.pDistance(n, s.children[u].position) < e.width / 2 * e.scaleX) return this.getSmallFishPos(e, t, o);
                return n
            },
            EatSmallAction: function(e, t) {
                if (!this.gameOverFlags) {
                    var i = e.typeID;
                    8 == e.type && this.jingyuNum--, 9 == e.type && this.jiaoNum--;
                    var a = this.getSmallFishPos(e, t);
                    if (audioTools.isPlayAudio && cc.audioEngine.play(this.eatMusic, !1, 1), r.gameMode == GAME_MODE.TIME_MODE) {
                        r.addGlodNum += 1 * i;
                        var n = ToolsJs.getToWorldPosAR(e),
                            s = this.carmeraNode.getChildByName("MoveCamera").getComponent(cc.Camera).getWorldToScreenPoint(n);
                        return o.addGlod(1 * i, s), void e.destroy()
                    }
                    r.gameMode != GAME_MODE.NORMAL_GMAE && r.gameMode != GAME_MODE.LONG_ZHU_MODE || (r.addGlodNum += i), e.destroy();
                    var c = cc.instantiate(this.newFishPreArr[i - 1]);
                    c.typeID = i, this.changeSize(c);
                    var h = c.scaleX,
                        l = c.scaleY;
                    this.playerNode.getChildByName("son").addChild(c, 100), c.setPosition(a), c.scaleX = 0, c.scaleY = 0, c.runAction(cc.sequence(cc.spawn(cc.scaleTo(.1, h, l).easing(cc.easeQuadraticActionOut()), cc.callFunc(function() {
                        c.zIndex = 50 * (10 - i), this.judgePushArr(i, c)
                    }, this)), cc.callFunc(function() {
                        c.getComponent("playerJSCar").eatSmallAni(), c.getComponent("playerJSCar").setLightSpr(!1)
                    }, this))), this.CreateSingleEnemy(1, this.playerNode.typeID)
                }
            },
            JudgeSmallFish: function() {
                this.myFish.active = !1;
                var e = this.playerNode.getChildByName("son").children.length;
                console.log("\u8ddf\u73ed\u6570\u91cf" + e), e > 0 ? (audioTools.isPlayAudio && cc.audioEngine.play(this.HurtMusic, !1, 1), this.chooseBiggerFish()) : this.DieAction()
            },
            chooseBiggerFish: function() {
                var e = this;
                if (!this.gameOverFlags) {
                    for (var t = this.playerNode.getChildByName("son"), o = this.myFish.angle, a = this.carmeraNode.getChildByName("MoveCamera").getComponent(cc.Camera).zoomRatio, n = t.children[0].typeID, r = 0, s = 0; s < t.children.length; s++) t.children[s].typeID > n && (n = t.children[s].typeID, r = s);
                    var c = this.node.convertToNodeSpaceAR(t.convertToWorldSpaceAR(cc.v2(t.children[r].position)));
                    c.x < -this.maxCameraMovePosX ? c.x = -this.maxCameraMovePosX : c.x > this.maxCameraMovePosX && (c.x = this.maxCameraMovePosX), c.y > this.maxCameraMovePosY ? c.y = this.maxCameraMovePosY : c.y < -this.maxCameraMovePosY && (c.y = this.maxCameraMovePosY);
                    var h = this.playerNode.position,
                        l = i.pDistance(c, h) / 1e3;
                    this.playerNode.stopAllActions(), t.children[r].getComponent("playerJSCar").bombAni(), this.playerNode.runAction(cc.moveTo(l, c)), 1 == n ? (ToolsJs.removeNodeForArr(this.kedouArr, t.children[r]), this.tempArr = this.kedouArr, this.myFish = this.playerNode.getChildByName("car_1"), Math.abs(a - 1) > .05 && this.CameraChangeZoomRatio(a, .75)) : 2 == n ? (ToolsJs.removeNodeForArr(this.qingwaArr, t.children[r]), this.tempArr = this.qingwaArr, this.myFish = this.playerNode.getChildByName("car_2"), Math.abs(a - 1) > .05 && this.CameraChangeZoomRatio(a, .75)) : 3 == n ? (ToolsJs.removeNodeForArr(this.haiguiArr, t.children[r]), this.tempArr = this.haiguiArr, this.myFish = this.playerNode.getChildByName("car_3"), Math.abs(a - .75) > .05 && this.CameraChangeZoomRatio(a, .75)) : 4 == n ? (ToolsJs.removeNodeForArr(this.xiaojinyuArr, t.children[r]), this.tempArr = this.xiaojinyuArr, this.myFish = this.playerNode.getChildByName("car_4"), Math.abs(a - .65) > .05 && this.CameraChangeZoomRatio(a, .65)) : 5 == n ? (ToolsJs.removeNodeForArr(this.jinliArr, t.children[r]), this.tempArr = this.jinliArr, this.myFish = this.playerNode.getChildByName("car_5"), Math.abs(a - .55) > .05 && this.CameraChangeZoomRatio(a, .55)) : 6 == n ? (ToolsJs.removeNodeForArr(this.dianmanArr, t.children[r]), this.tempArr = this.dianmanArr, this.myFish = this.playerNode.getChildByName("car_6"), Math.abs(a - .45) > .05 && this.CameraChangeZoomRatio(a, .45)) : 7 == n ? (ToolsJs.removeNodeForArr(this.shayuArr, t.children[r]), this.tempArr = this.shayuArr, this.myFish = this.playerNode.getChildByName("car_7"), Math.abs(a - .4) > .05 && this.CameraChangeZoomRatio(a, .4)) : 8 == n && (ToolsJs.removeNodeForArr(this.jingyuArr, t.children[r]), this.tempArr = this.shayuArr, this.myFish = this.playerNode.getChildByName("car_8"), Math.abs(a - .3) > .05 && this.CameraChangeZoomRatio(a, .3)), this.playerNode.typeID = n, this.myFish.typeID = n, t.removeChild(t.children[r]), this.myFish.active = !0, this.myFish.scaleX = this.fishScaleX[n - 1], this.myFish.scaleY = this.fishScaleY[n - 1], this.myFish.angle = o, this.scheduleOnce(function() {
                        if (!e.gameOverFlags) {
                            e.myFish.getComponent("playerJSCar").setLightSpr(!0);
                            for (var t = e.playerNode.getChildByName("son"), i = 0; i < t.children.length; i++) t.children[i].getComponent("playerJSCar").setLightSpr(!1)
                        }
                    }, .1)
                }
            },
            createSmallFish: function(e) {
                var t;
                t = e < 8 ? i.getRandomNum(0, e - 1, !0) : i.getRandomNum(1, 7, !0);
                var o = cc.instantiate(this.enemyPreArr[t]);
                this.changeSize(o), o.typeID = t + 1;
                var a = this.carmeraNode.getChildByName("MoveCamera").getComponent(cc.Camera).zoomRatio;
                o.speed = 100 / a;
                var n = this.getEnemyPos(o);
                n ? (this.enemyNode.addChild(o, 1), o.setPosition(n), o.getComponent("enemyJSCar").active = !0, this.enemyAction(o)) : o.destroy()
            },
            removeSomeBigFish: function() {
                if (!this.gameOverFlags) {
                    for (var e = this.enemyNode.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(cc.v2(this.playerNode.position))), t = this.carmeraNode.getChildByName("MoveCamera").getComponent(cc.Camera).zoomRatio, o = [], a = 0; a < this.enemyNode.children.length; a++) {
                        var n = this.enemyNode.children[a].typeID;
                        this.enemyNode.children[a].longZhu || n >= this.playerNode.typeID + 3 && o.push(this.enemyNode.children[a])
                    }
                    for (var r = 0; r < o.length; r++)
                        if (i.pDistance(e, o[r].position) > (this.gameHeight / 2 + o[r].height / 2) / t) return 8 == o[r].typeID && this.jingyuNum--, 9 == o[r].typeID && this.jiaoNum--, void this.enemyNode.removeChild(o[r])
                }
            },
            removeSmallFish: function() {
                if (!this.gameOverFlags) {
                    for (var e = this.enemyNode.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(cc.v2(this.playerNode.position))), t = this.carmeraNode.getChildByName("MoveCamera").getComponent(cc.Camera).zoomRatio, o = [], a = 0; a < this.enemyNode.children.length; a++) {
                        var n = this.enemyNode.children[a].typeID;
                        this.enemyNode.children[a].longZhu || this.playerNode.typeID >= 4 && n == this.playerNode.typeID && o.push(this.enemyNode.children[a])
                    }
                    if (o.length > 0)
                        for (var r = 0; r < o.length; r++)
                            if (i.pDistance(e, o[r].position) > (this.gameHeight / 2 + o[r].height / 2) / t) return this.enemyNode.removeChild(o[r]), void this.CreateSingleEnemy(1, this.playerNode.typeID)
                }
            },
            createLizi: function(e) {
                e.getComponent("playerJSCar").upLevelAni()
            },
            SummonDragonAction: function() {
                var e = this;
                this.gameOverFlags = !0, this.speed = 0, this.speedNum = 0, this.enemyNode.removeAllChildren(), this.enemyNode.destroy();
                for (var t = this.playerNode.getChildByName("son"), o = t.convertToNodeSpaceAR(this.playerNode.convertToWorldSpaceAR(cc.v2(this.myFish.position))), a = 0; a < t.children.length; a++) {
                    var s = i.getRandomNum(50, 100, !1),
                        c = Math.atan2(o.y - t.children[a].y, o.x - t.children[a].x),
                        h = cc.misc.radiansToDegrees(c) + 90;
                    t.children[a].runAction(cc.sequence(cc.spawn(cc.jumpTo(.5, o, s, 1).easing(cc.easeQuadraticActionOut()), cc.scaleTo(.5, 0, 0), cc.rotateTo(0, 1, h)), cc.callFunc(function(e) {
                        e.destroy()
                    }, this)))
                }
                this.scheduleOnce(function() {
                    n.OpenUI("winLongPanelCar", r.addGlodNum), e.myFish.opacity = 0
                }, .5)
            },
            aginGame: function() {
                r.GAME_OVER_BOOL = !0, r.gameScore = 0, r.publicGameBool, loadTools.loadScene("MainGameScene")
            },
            DieAction: function() {
                var e = this;
                this.speed = 0, this.gameOverFlags = !0, audioTools.isPlayAudio && cc.audioEngine.play(this.failMusic, !1, 1), this.myFish.getComponent("playerJSCar").bombAni(), this.myFish.active = !1, this.scheduleOnce(function() {
                    e.kedouArr = [], e.qingwaArr = [], e.haiguiArr = [], e.xiaojinyuArr = [], e.jinliArr = [], e.dianmanArr = [], e.shayuArr = [], e.jingyuArr = [], e.jiaoArr = [], e.longArr = [], e.tempArr = [], e.gameEnd()
                }, .8)
            },
            setHisSocre: function(e) {
                cc.sys.localStorage.setItem("ZhaoHuanShenLong_12WS", e)
            },
            addTouchEvents: function() {
                var e = this;
                this.node.on(cc.Node.EventType.TOUCH_START, function() {
                    if (r.GAME_OVER_BOOL && r.noTouchBool && e.touchBeginFlags) return e.touchBeginFlags = !1, this.startGame(), !0
                }, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.on_touch_move, this), this.node.on(cc.Node.EventType.TOUCH_END, this.on_touch_end, this)
            },
            on_touch_move: function() {
                this.gameOverFlags || this.canMoveFlags && (this.speed = this.speedNum)
            },
            on_touch_end: function() {
                this.gameOverFlags || r.GAME_OVER_BOOL && (this.touchBeginFlags = !0)
            },
            update: function(e) {
                if (this.updateGame(e), this.updateCreate(), this.removeSmallFish(), this.removeSomeBigFish(), this.OffPos) {
                    if (this.gameOverFlags) return;
                    var t = cc.v2(0, 1).signAngle(this.OffPos),
                        i = cc.misc.radiansToDegrees(t);
                    this.angle = i, this.myFish.getComponent("playerJSCar").updateRotate(this.angle, this.rotSpeed * e, this.speedNum * e);
                    for (var o = this.playerNode.getChildByName("son"), a = 0; a < o.children.length; a++) o.children[a].getComponent("playerJSCar").updateRotate(this.angle, this.rotSpeed * e, this.speedNum * e);
                    this.CameraMove(e)
                }
            },
            gameEnd: function() {
                r.GAME_OVER_BOOL = !1, this.isAddSpeed = !1, r.publicGameBool || a.gameOverShowText(r.gameScore, 1), r.gameMode == GAME_MODE.TIME_MODE && (this.sceneScore.node.stopAllActions(), this.sceneScore.string = "", this.sceneScore.node.children[0].active = !1, this.sceneScore.node.children[1].active = !0), this.node.runAction(cc.sequence(cc.delayTime(.3), cc.callFunc(this.gameEnd1.bind(this))))
            },
            gameEnd1: function() {
                var e = this;
                this.scheduleOnce(function() {
                    for (var t = 0; t < e.enemyNode.children.length; t++) {
                        var i = e.enemyNode.children[t];
                        i.typeID > e.maxTypeID && !i.getComponent("enemyJSCar").longZhuPos && (i.getComponent("enemyJSCar").bombAni(), e.enemyNode.children[t].destroy())
                    }
                    e.initEndLayer()
                }, .3)
            },
            initEndLayer: function() {
                this.sceneScore.node.active = !1, r.gameMode == GAME_MODE.LONG_ZHU_MODE && this.longZhuMain.removeAllLongZhu();
                var e = cc.instantiate(this.gameOverPre);
                this.node.addChild(e, 99)
            },
            updateGame: function(e) {
                this.gameOverFlags || (this.isAddSpeed ? this.speedNum = 800 + (this.playerNode.typeID - 1) * this.addSpeed / this.lastZoomTatio : this.speedNum = 450 + (this.playerNode.typeID - 1) * this.addSpeed / this.lastZoomTatio, r.gameMode == GAME_MODE.TIME_MODE && (this.tempTime += e, this.tempTime >= 1 && (this.tempTime = 0, this.timeNum--, this.sceneScore.string = this.timeNum, this.timeNum <= 5 && this.redTimeLab()), this.timeNum <= 0 && (this.gameOverFlags = !0, this.gameEnd())))
            },
            redTimeLab: function() {
                this.isRedLab || (this.isRedLab = !0, this.sceneScore.node.color = cc.Color.RED, this.sceneScore.node.children[0].color = cc.Color.RED, this.sceneScore.node.runAction(cc.sequence(cc.scaleTo(.5, 1.8), cc.scaleTo(.5, 1)).repeatForever()))
            }
        }), cc._RF.pop()
    }, {
        "../MainManage": "MainManage",
        "../commonJs/PersonCtrl": "PersonCtrl",
        "../commonJs/mTool_WHQ": "mTool_WHQ",
        "../managerJs/AdManager": "AdManager",
        "../managerJs/UIManager": "UIManager",
        "../model/GameConfig": "GameConfig"
    }],
    EventData: [function(e, t) {
        "use strict";
        cc._RF.push(t, "00f19xAv/JGmKf/MZ/AWHni", "EventData"), window.EventData = {
            UPDATE_GLOD: "updateGlod",
            START_GAME: "START_GAME",
            SHOW_GLOD: "SHOW_GLOD",
            REIVE_GAME: "REIVE_GAME",
            SHARE_ADD_GLOD: "SHARE_ADD_GLOD",
            UP_SON_LEVEL: "UP_SON_LEVEL",
            REMOVE_LONG_ZHU: "REMOVE_LONG_ZHU"
        }, cc._RF.pop()
    }, {}],
    EventManager: [function(e, t) {
        "use strict";
        cc._RF.push(t, "94634X4eDVNUoEnqKm3D5/S", "EventManager");
        var i = {
            addListener: function(e, t, i) {
                cc.systemEvent.on(e, t, i)
            },
            removeListener: function(e, t, i) {
                cc.systemEvent.off(e, t, i)
            },
            dispachEvent: function(e, t, i, o, a, n) {
                cc.systemEvent.emit(e, t, i, o, a, n)
            },
            removeListenerForTarget: function(e) {
                cc.systemEvent.targetOff(e)
            }
        };
        window.EventManager = i, cc._RF.pop()
    }, {}],
    GameConfig: [function(e, t) {
        "use strict";
        cc._RF.push(t, "f0663sWtfNKCKOL+Hvnt0cI", "GameConfig");
        var i = {
            publicGameBool: !1,
            gameScore: 0,
            standScore: 6,
            GAME_OVER_BOOL: !0,
            noTouchBool: !0,
            gameMode: 1,
            addGlodNum: 0,
            curType: 2,
            clickYesBool: !1,
            mianGameJs: null,
            GameClubButton: null,
            GameScene: null,
            launchScene: null,
            Bros: null,
            caS: null,
            MAIN_MENU_NUM: "Classic",
            isShowGifAd: !1,
            isBanner: !1,
            isNewHand: !0,
            ranLinkData: null,
            recGameData: null,
            InfoData: null,
            endShow0: null,
            endShow1: null,
            endShow2: null,
            endShow3: null,
            infoGameName: null,
            showText: null,
            startText: null,
            moreGameText: null,
            playAgainText: null,
            playNum: 0,
            returnRanNum: function(e, t) {
                return e + Math.floor(Math.random() * (t - e + 1))
            },
            popBoxJson: null
        };
        t.exports = i, cc._RF.pop()
    }, {}],
    HttpManagerJs: [function(e, t) {
        "use strict";
        var i;
        cc._RF.push(t, "197e1hfNnxIcJx73V3VhUxY", "HttpManagerJs");
        var o = e("GameConfig"),
            a = ((i = {
                URL: "https://zazgames.com/",
                cacheList: null,
                isBusy: null,
                req: null,
                perform: null,
                retGameId: 0
            }).cacheList = [], i.ctor = function() {}, i.checkHave = function() {
                this.isBusy || this.sendOne()
            }, i.httpInitUrl = function(e) {
                var t = window.location.href,
                    i = t.substring(0, t.lastIndexOf("//") + 2) + window.location.host + "/Service/Share/index";
                this.URL = i, console.log("data", this.URL), this.retGameId = e
            }, i.send = function(e, t, i, o) {
                this.cacheList.push({
                    type: e,
                    data: t,
                    func: i,
                    target: o
                }), this.isBusy || this.sendOne()
            }, i.sendOne = function() {
                if (0 != this.cacheList.length) {
                    this.isBusy = !0, this.perform = this.cacheList.shift(), this.req = cc.loader.getXMLHttpRequest(), this.req.onreadystatechange = this.onDataHandler.bind(this), this.req.onerror = this.onErrorHandler.bind(this), this.req.ontimeout = this.onTimeoutHandler.bind(this), this.req.timeout = 2e3, cc.log("pos", this.URL), this.req.open("POST", this.URL), this.req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
                    var e = this.returnLanguage();
                    console.log("gameIdid", this.retGameId);
                    var t = this.retGameId,
                        i = {
                            type: this.perform.type,
                            gid: t,
                            mid: null,
                            data: this.perform.data,
                            languageType: e
                        },
                        o = "send=" + JSON.stringify(i);
                    this.req.send(o)
                }
            }, i.onDataHandler = function() {
                if (404 != this.req.status) {
                    if (4 == this.req.readyState && this.req.status >= 200 && this.req.status <= 207 && this.req.responseText) {
                        var e = JSON.parse(this.req.responseText);
                        this.isBusy = !1, this.perform.target ? this.perform.func.call(this.perform.target, e.error, e.data, e.commendGame, e.gameInfo) : this.perform.func(e)
                    }
                } else {
                    var t = o.launchScene,
                        i = o.Bros;
                    o.caS, cc.director.loadScene(t, null, function() {
                        if (i) {
                            var e = document.getElementById("GameDiv");
                            e && (e.style.backgroundImage = "")
                        }
                        cc.loader.onProgress = null, console.log("Success to load scene: " + t)
                    })
                }
            }, i.returnLanguage = function() {
                return ("" + window.navigator.language).toLocaleLowerCase()
            }, i.onErrorHandler = function() {
                cc.log("\u7f51\u7edc\u9519\u8bef"), this.isBusy = !1, this.perform.target ? this.perform.func.call(this.perform.target, -1) : this.perform.func(-1)
            }, i.onTimeoutHandler = function() {
                cc.log("\u8bf7\u6c42\u8d85\u65f6"), this.isBusy = !1, this.perform.target ? this.perform.func.call(this.perform.target, -1) : this.perform.func(-1)
            }, i.clearAll = function() {
                for (var e = this.cacheList.length, t = 0; t < e; t++) {
                    var i = this.cacheList[t];
                    i && (i.target ? i.func.call(i.target, -1) : i.func(-1))
                }
                this.cacheList.length = 0
            }, i);
        t.exports = a, cc._RF.pop()
    }, {
        GameConfig: "GameConfig"
    }],
    LanguageSetJs: [function(e, t) {
        "use strict";
        cc._RF.push(t, "4754e8KuPZJCqklCNyKpG29", "LanguageSetJs"), t.exports = {
            language_1: {
                   game_name: "Transporters IO",
                game_name1: "Seventeen Years",
                game_info: "Go home for the new year, or celebrate the new year on the spot?",
                txtStart: "Start",
                txtMore: "More Game",
                txtAgain: "Play Again",
                txtShare1: "In Game ",
                txtShare2: " Let's play together!",
                bgRgb: "#3698C5",
                gameT1: "Follow Us",
                gameT2: "Thousand Flower",
                gameT3: "Eliminate Star",
                gameUrl1: "https://zazgames.com/",
                gameUrl2: "https://zazgames.com/",
                gameT11: "Focus WeChat",
                gameT12: "Focus Kakao",
                gameT13: "Focus Line",
                gameEndL: "Game OVer",
                gameEndL1: "View the score later"
            },
            language_2: {
                game_name: "Transporters IO",
                game_name1: "Seventeen Years",
                game_info: "Go home for the new year, or celebrate the new year on the spot?",
                txtStart: "Start",
                txtMore: "More Game",
                txtAgain: "Play Again",
                txtShare1: "In Game ",
                txtShare2: " Let's play together!",
                bgRgb: "#3698C5",
                gameT1: "Follow Us",
                gameT2: "Thousand Flower",
                gameT3: "Eliminate Star",
                gameUrl1: "https://zazgames.com/",
                gameUrl2: "https://zazgames.com/",
                gameT11: "Focus WeChat",
                gameT12: "Focus Kakao",
                gameT13: "Focus Line",
                gameEndL: "Game OVer",
                gameEndL1: "View the score later"
            }
        }, cc._RF.pop()
    }, {}],
    LoadSceneJs: [function(e, t) {
        "use strict";
        cc._RF.push(t, "3ef908fwfNIwJsOjET8tCh2", "LoadSceneJs");
        var i = {
            goToCover: function(e, t, i, o, a) {
                var n = e;
                n = null == n || null == n || e, console.log("LoadBoolBeforeLoadS", n), this.needShow = !1, n && n ? (this.needShow = !0, showMyAds()) : this.needShow = !1, this.needShow ? (null == preloader && this.startGoToGame(i, o, a), resCompleteFlag = !0, adCompleteFlag && resCompleteFlag && this.startGoToGame(i, o, a)) : this.startGoToGame(i, o, a)
            },
            startGoToGame: function() {
                console.log("goToScene"), noAdGoToScene()
            }
        };
        t.exports = i, cc._RF.pop()
    }, {}],
    MainGameJS: [function(e, t) {
        "use strict";
        cc._RF.push(t, "0e7a8SkMLxEY7nCB1Bqi8WZ", "MainGameJS"), cc.Class({
            extends: cc.Component,
            properties: {}
        }), cc._RF.pop()
    }, {}],
    MainManage: [function(e, t) {
        "use strict";
        cc._RF.push(t, "946adGkxvdBmZXnlD952XtK", "MainManage");
        var i = e("HttpManagerJs"),
            o = e("LanguageSetJs"),
            a = e("GameConfig"),
            n = e("LoadSceneJs"),
            r = {
                gameHttpId: 0,
                subScoreHttp: null,
                gameNameText: null,
                gameInfoText: null,
                txtStartText: null,
                txtMoreText: null,
                txtAgainText: null,
                gameEndLText: null,
                gameEndL1Text: null,
                bgLayRgb: null,
                gameEndName1: null,
                gameEndName2: null,
                gameEndUrl1: null,
                gameEndUrl2: null,
                langugeType: 1,
                ranLinkData: null,
                adShowBefore: !1,
                adShowAfter: !0,
                endLayCol: null,
                moreBtnBgCol: null,
                moreBtnTextCol: null,
                recGameData: null,
                recGameUrl: null,
                recGameDelPau: null,
                recGameDelPer: null,
                recGameimg1: null,
                recGameimg2: null,
                recGamePos: null,
                InfoData: null,
                endShow0: null,
                endShow1: null,
                endShow2: null,
                endShow3: null,
                infoGameName: null,
                showText: null,
                startText: null,
                moreGameText: null,
                playAgainText: null,
                endHttpShowInfo: null,
                moreGameUrl: null,
                init: function(e, t, o) {
                    if (!a.publicGameBool) {
                        if (a.playNum >= 1) return;
                        a.playNum++
                    }
                    a.launchScene = e, a.Bros = t, a.caS = o, this.curType = 1, this.getHttpGameId(), this.gamePV_load(), console.log("thisg", this.gameHttpId), i.httpInitUrl(this.gameHttpId);
                    var r = this.initLanguage();
                    this.gameNameText = r.game_name, this.gameInfoText = r.game_info, this.txtStartText = r.txtStart, this.txtMoreText = r.txtMore, this.txtAgainText = r.txtAgain, this.gameEndLText = r.gameEndL, this.gameEndL1Text = r.gameEndL1, this.bgLayRgb = r.bgRgb, this.gameEndName1 = r.gameT2, this.gameEndName2 = r.gameT3, this.gameEndUrl1 = r.gameUrl1, this.gameEndUrl2 = r.gameUrl2, this.langugeType = this.curType, n.goToCover(this.adShowBefore, this.adShowAfter, e, t, o)
                },
                getHttpGameId: function() {
                    var e = window.location.href,
                        t = e.substring(0, e.lastIndexOf("//") + 2),
                        i = window.location.host,
                        o = t + i + "/Service/Share/index";
                    this.gameAllHttp = o, this.subScoreHttp = t + i + "/Service/Score/index", this.gamePvHttp = t + i + "/Service/GamePv/index";
                    var a = document.URL,
                        n = a.lastIndexOf("/"),
                        r = a.substring(0, n),
                        s = (n = r.lastIndexOf("/"), r.substring(n + 1, r.length));
                    this.gameHttpId = s, console.log("gameIdNew", s);
                    var c = e.substring(e.lastIndexOf("//") + 4, e.lastIndexOf("com") + 3); - 1 == e.search("/game/") ? this.moreGameUrl = t + i : this.moreGameUrl = t + c, console.log("moreGame", this.moreGameUrl)
                },
                gameOverShowText: function(e, t) {
                    this.ajaxLoad(this.subScoreHttp, "gameScore=" + e + "&gameId=" + this.gameHttpId + "&gameType=" + t, this.scoreResult)
                },
                gamePV_load: function() {
                    this.ajaxLoad(this.gamePvHttp, "gameId=" + this.gameHttpId, this.ajaxOnLogoResult)
                },
                ajaxOnLogoResult: function() {},
                ajaxLoad: function(e, t, i) {
                    var o = cc.loader.getXMLHttpRequest();
                    o.onreadystatechange = i, o.open("POST", e), o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), o.send(t)
                },
                scoreResult: function(e) {
                    if (null != e.currentTarget.response && "" != e.currentTarget.response) {
                        var t = JSON.parse(e.currentTarget.response);
                        cc.log("endshow", t.content), r.endHttpShowInfo = t.content
                    }
                },
                initLanguage: function() {
                    var e = null;
                    return cc.sys.language == cc.sys.LANGUAGE_CHINESE ? (this.curType = 1, e = o.language_1) : (cc.log("\u82f1\u6587"), this.curType = 2, e = o.language_2), e
                },
                getLinkGameReturn: function(e, t, i, o) {
                    if (console.log("err0", e), console.log("err1", t), console.log("err2", i), console.log("err3", o), 0 == e) {
                        this.ranLinkData = t, this.adShowBefore = this.ranLinkData.gameSet.adShowBefore, this.adShowAfter = this.ranLinkData.gameSet.adShowAfter, this.endLayCol = this.ranLinkData.gameSet.endLayerColor, this.moreBtnBgCol = this.ranLinkData.gameSet.moreBtnBgCol, this.moreBtnTextCol = this.ranLinkData.gameSet.moreBtnTextCol, this.moreGameUrl = this.ranLinkData.gameSet.moreBtnUrl, this.recGameData = i, this.ranRecGameData(), this.InfoData = o, this.endShow0 = this.InfoData.endShow0, this.endShow1 = this.InfoData.endShow1, this.endShow2 = this.InfoData.endShow2, this.endShow3 = this.InfoData.endShow3, this.infoGameName = this.InfoData.gameName, this.showText = this.InfoData.showText, this.startText = this.InfoData.startText, this.moreGameText = this.InfoData.moreGame, this.playAgainText = this.InfoData.rePlay, this.gameInfoText = this.InfoData.showText, this.txtStartText = this.InfoData.startText, this.txtMoreText = this.InfoData.moreGame, this.txtAgainText = this.InfoData.rePlay, console.log("LoadMainGameScnee");
                        var r = a.launchScene,
                            s = a.Bros,
                            c = a.caS;
                        n.goToCover(this.adShowBefore, this.adShowAfter, r, s, c)
                    }
                },
                ranRecGameData: function() {
                    if (null != this.recGameData && "" != this.recGameData) {
                        this.returnBool = !1;
                        var e = this.recGameData.length,
                            t = a.returnRanNum(1, e) - 1;
                        cc.log("ranNNN", t), this.recGameUrl = this.recGameData[t].data_link, this.recGameDelPer = this.recGameData[t].delay_per, this.recGameDelPau = this.recGameData[t].delay_pau, this.recGameimg1 = this.recGameData[t].img_1, this.recGameimg2 = this.recGameData[t].img_2, this.recGamePos = this.recGameData[t].poistion
                    }
                },
                ranLinkUrl: function() {
                    if (null != this.ranLinkData && this.ranLinkData.gameList && null != this.ranLinkData.gameList) {
                        var e = this.ranLinkData.gameList.length,
                            t = a.returnRanNum(1, e) - 1;
                        return cc.log("templ", t, this.ranLinkData.gameList), cc.log("url", this.ranLinkData.gameList[0].gameName, this.ranLinkData.gameList[0].gameUrl), t
                    }
                    return null
                },
                gotoEndLayer: function() {
                    if (a.publicGameBool) this.showGameEndLayer();
                    else {
                        if (adEndComplete = !1, resEndComplete = !1, this.needShow = null, 1 == window.navigator.onLine) {
                            var e = this.adShowAfter;
                            console.log("ad", e), (e = null == e || null == e || this.adShowAfter) ? (this.needShow = !0, console.log("showMyad"), showMyAds()) : this.needShow = !1
                        } else console.log("showOver1"), this.showGameEndLayer(), this.needShow = null;
                        console.log("showMyad2", this.needShow), null != this.needShow && (console.log("showMyad3"), this.needShow ? (console.log("pre", preloader), null == preloader && this.showGameEndLayer(), resEndComplete = !0, adEndComplete && resEndComplete && (console.log("showOver1"), this.showGameEndLayer())) : (console.log("gam"), this.showGameEndLayer()))
                    }
                },
                showGameEndLayer: function() {
                    console.log("Gottttttgameend"), ToolsJs.clonePrefab("GameOverLayer", cc.director.getScene().children[0], cc.v2(0, 0), null, 100)
                }
            };
        t.exports = r, cc._RF.pop()
    }, {
        GameConfig: "GameConfig",
        HttpManagerJs: "HttpManagerJs",
        LanguageSetJs: "LanguageSetJs",
        LoadSceneJs: "LoadSceneJs"
    }],
    OtherConfig: [function(e, t) {
        "use strict";
        cc._RF.push(t, "608a3yCxFxLC6+PTyEzdmgt", "OtherConfig");
        var i = {
            Continue: {
                CN: "\u70b9\u51fb\u7ee7\u7eed",
                CHT: "\u9ede\u64ca\u7e7c\u7e8c",
                EN: "Click Continue",
                KOR: "\ud074\ub9ad \ud558\uc5ec \uacc4\uc18d"
            },
            name_1: {
                CN: "\u81ea \u884c \u8f66",
                CHT: "\u874c \u86aa",
                EN: "Tadpole",
                KOR: "\uc62c\ucc59\uc774"
            },
            name_2: {
                CN: "\u7535 \u52a8 \u8f66",
                CHT: "\u9752 \u86d9",
                EN: "Frog",
                KOR: "\uac1c\uad6c\ub9ac"
            },
            name_3: {
                CN: "\u4e09 \u8f6e \u8f66",
                CHT: "\u70cf \u9f9c",
                EN: "Tortoise",
                KOR: "\uac70\ubd81\uc774"
            },
            name_4: {
                CN: "\u5c0f \u6c7d \u8f66 ",
                CHT: "\u5c0f \u91d1 \u9b5a",
                EN: "Goldfish",
                KOR: "\uc791\uc740 \uae08\ubd95\uc5b4"
            },
            name_5: {
                CN: "\u76ae \u5361",
                CHT: "\u9326 \u9bc9 \u9b5a",
                EN: "Koi Fish",
                KOR: "\uc789\uc5b4"
            },
            name_6: {
                CN: "\u8d27 \u8f66",
                CHT: "\u96fb \u9c3b",
                EN: "Eel",
                KOR: "\uc804\uae30\ubc40\uc7a5\uc5b4"
            },
            name_7: {
                CN: "\u516c \u4ea4 \u8f66",
                CHT: "\u9bca \u9b5a",
                EN: "Shark",
                KOR: "\uc0c1\uc5b4."
            },
            name_8: {
                CN: "\u5730 \u8dcc",
                CHT: "\u5927 \u9be8 \u9b5a",
                EN: "Whale",
                KOR: "\ud070 \uace0\ub798"
            },
            name_9: {
                CN: "\u7eff \u76ae \u706b \u8f66",
                CHT: "\u86df",
                EN: "Snake",
                KOR: "\ud65c\uc6a9\ub2e8\uc5b4\ucc38\uc870"
            },
            name_10: {
                CN: "\u9ad8 \u94c1",
                CHT: "\u795e \u9f8d",
                EN: "Dragon",
                KOR: "\uc2e0\ub8e1"
            },
            long_1: {
                CN: "\u51b0 \u971c \u9f99",
                CHT: "\u51b0 \u971c \u9f8d",
                EN: "Frost Dragon",
                KOR: "\uc11c\ub9ac \ub4dc\ub798\uace4"
            },
            long_2: {
                CN: "\u8d64 \u706b \u9f99",
                CHT: "\u8d64 \u706b \u9f8d",
                EN: "Red Fire Dragon",
                KOR: "\uc801\ud654\ub8e1"
            },
            long_3: {
                CN: "\u87e0 \u9f99",
                CHT: "\u87e0 \u9f8d",
                EN: "Broom",
                KOR: "\uc6a9\uc744 \ub3c4\ub294\ub2e4"
            },
            long_4: {
                CN: "\u5267 \u6bd2 \u9f99",
                CHT: "\u5287 \u6bd2 \u9f8d",
                EN: "Poisonous Dragons",
                KOR: "\ub9f9\ub3c5\uc131 \uc6a9"
            },
            long_5: {
                CN: "\u9752 \u9f99",
                CHT: "\u9752 \u9f8d",
                EN: "Green Dragon",
                KOR: "\uccad\ub8e1"
            },
            long_6: {
                CN: "\u94dc \u53e4 \u9f99",
                CHT: "\u9285 \u53e4 \u9f8d",
                EN: "Bronze Vologne",
                KOR: "\uad6c\ub9ac \uace0\ub8e1"
            },
            getStrForType: function(e) {
                var t = ToolsJs.returnCurrentLanType();
                return 1 == t ? "CN" : 2 == t ? "CHT" : 4 == t ? "KOR" : "EN", "CN", null != this[e] ? this[e].CN : (cc.log("\u6ca1\u6709\u7ffb\u8bd1:" + e), e)
            },
            getSprType: function() {
                ToolsJs.returnCurrentLanType();
                return "cn"
            }
        };
        window.renderConfig = i, window.zIndexAll = {
            Scene_Bian: 1,
            Scene_Item: 2,
            LiZi_Z: 5,
            Enmy_Z: 3
        }, window.GroupIndexAll = {
            Default: 0,
            Move: 1,
            UI: 2
        };
        var o = cc.Enum({
            NORMAL_GMAE: 1,
            TIME_MODE: 2,
            LONG_ZHU_MODE: 3,
            CHAO_JIN_HUA: 4,
            ZHI_PAI_MODE: 5,
            YUE_LONG_MEN: 6,
            LONG_ZHENG_BA: 7,
            CAR_HOME_GAME: 10
        });
        window.GAME_MODE = o;
        var a = cc.Enum({
            Enmy_Tag: 1,
            Son_Tag: 2,
            Player_Tag: 3,
            Fu_Tag: 5
        });
        window.InterTag = a;
        var n = cc.Enum({
            Test_WEB: 1,
            GooglePlay: 2,
            HaoYouKP: 3,
            TapTap: 4,
            TX: 5,
            XiaoMi: 6,
            Vivo: 7
        });
        window.BuildType = n, cc._RF.pop()
    }, {}],
    PersonCtrl: [function(e, t) {
        "use strict";
        cc._RF.push(t, "ee765ke+gxEv7B7aSqWqkxc", "PersonCtrl");
        var i = e("PersonData"),
            o = {
                loginPerson: function() {
                    for (var e in i) i.hasOwnProperty(e) && null != ToolsJs.getStorage(e) && (i[e] = "haveLongs" == e ? ToolsJs.getStorage(e, !0) : ToolsJs.getStorage(e));
                    cc.log(i)
                },
                addGlod: function(e, t) {
                    var o = i.glod;
                    i.glod = Math.ceil(i.glod + e), i.glod <= 0 && (i.glod = 0), ToolsJs.setStorage("glod", i.glod), t ? EventManager.dispachEvent(EventData.UPDATE_GLOD, o, e, t) : EventManager.dispachEvent(EventData.UPDATE_GLOD, o)
                },
                addHaveLong: function(e) {
                    i.haveLongs.indexOf(e) >= 0 || (i.haveLongs.push(e), ToolsJs.setStorage("haveLongs", i.haveLongs, !0))
                },
                useLong: function(e) {
                    i.haveLongs.indexOf(e) < 0 || (i.selectLong = e, ToolsJs.setStorage("selectLong", i.selectLong))
                },
                setTimeModeTime: function() {
                    i.lastTimeMode = (new Date).getTime(), ToolsJs.setStorage("lastTimeMode", i.lastTimeMode)
                }
            };
        t.exports = o, cc._RF.pop()
    }, {
        PersonData: "PersonData"
    }],
    PersonData: [function(e, t) {
        "use strict";
        cc._RF.push(t, "921a9DA9J5MI7EpvvVfwWiF", "PersonData"), t.exports = {
            glod: 100,
            diamond: 0,
            maxLevel: 1,
            haveLongs: [1],
            selectLong: 1,
            maxLongNum: 6,
            lastTimeMode: null,
            finishGameNum: 10,
            isFirstGame: !1
        }, cc._RF.pop()
    }, {}],
    PoolManager: [function(e, t) {
        "use strict";
        cc._RF.push(t, "6ed4diP7FRFIJc3wpj5cOOM", "PoolManager");
        var i = {
            PoolDic: {
                tailPar: null
            },
            addPoolObj: function(e, t) {
                null == this.PoolDic[e] && (this.PoolDic[e] = new cc.NodePool(e)), this.PoolDic[e].put(t)
            },
            getPoolObj: function(e) {
                return null == this.PoolDic[e] ? null : this.PoolDic[e].size() > 1 ? this.PoolDic[e].get() : null
            },
            clearPool: function(e) {
                if (null != this.PoolDic[e]) return this.PoolDic[e].clear();
                cc.error("\u6ca1\u6709\u6dfb\u52a0\u5bf9\u8c61\u6c60\uff1a", e)
            },
            clearAllPool: function() {
                for (var e in this.PoolDic) Object.hasOwnProperty.call(this.PoolDic[e], e) && this.PoolDic[e].clear()
            }
        };
        window.PoolManager = i, cc._RF.pop()
    }, {}],
    ToolsJs: [function(e, t) {
        "use strict";
        cc._RF.push(t, "5eeb3uOnbFGtKGg8ygEwPGB", "ToolsJs");
        var i = {
            SpriteFrameDic: {},
            PrefabDic: {},
            AudioClipDic: {},
            storageName: "ZhaoHuanShenLongH5_WEISAN_1",
            setStorage: function(e, t, i) {
                i && (t = JSON.stringify(t)), e = this.storageName + e, cc.sys.localStorage.setItem(e, t)
            },
            getStorage: function(e, t) {
                e = this.storageName + e;
                var i = cc.sys.localStorage.getItem(e);
                return isNaN(i) || (i = parseInt(i)), "NaN" == i.toString() && (i = null), t && null != i && (i = JSON.parse(i)), i
            },
            logJsonObject: function(e) {
                console.log(JSON.stringify(e))
            },
            addNoArr: function(e, t) {
                return e.indexOf(t) < 0 && (e.push(t), !0)
            },
            removeNodeForArr: function(e, t) {
                return e.splice(e.indexOf(t), 1)
            },
            addArrForIndex: function(e, t, i) {
                return e.splice(t, 0, i)
            },
            newSprite: function(e, t) {
                var i = new cc.Node;
                return null != this.SpriteFrameDic[e] ? (i.addComponent(cc.Sprite).spriteFrame = this.SpriteFrameDic[e], null != t && t(i)) : (i.addComponent(cc.Sprite), loadTools.loadNodeSprite(i, e, t)), i
            },
            setTexture: function(e, t) {
                this.SpriteFrameDic[t] ? e.getComponent(cc.Sprite).spriteFrame = this.SpriteFrameDic[t] : loadTools.loadNodeSprite(e, t)
            },
            setBtnClickSpr: function(e, t, i, o) {
                this.SpriteFrameDic[t] ? (e.getComponent(cc.Button).normalSprite = this.SpriteFrameDic[t], e.getComponent(cc.Button).hoverSprite = this.SpriteFrameDic[t], e.getComponent(cc.Sprite).pressedSprite = this.SpriteFrameDic[i], null != o && o()) : (loadTools.getResSpr(t, function(t) {
                    e.getComponent(cc.Button).normalSprite = t, e.getComponent(cc.Button).hoverSprite = t
                }), loadTools.getResSpr(i, function(t) {
                    e.getComponent(cc.Button).pressedSprite = t, null != o && o()
                }))
            },
            setSpriteState: function(e, t) {
                var i = 0 == t ? "2d_sprite" : "gray_sprite";
                cc.loader.loadRes("materials/" + i, cc.Material, function(t, i) {
                    t ? cc.error(t) : e.getComponent(cc.Sprite).setMaterial(0, i)
                })
            },
            clonePrefab: function(e, t, i, o, a) {
                void 0 === a && (a = 0);
                var n = this.PrefabDic[e],
                    r = null;
                return null != n ? (r = cc.instantiate(n), t && t.addChild(r, a), i && (r.position = i), null != o && o(r)) : loadTools.loadPrefab(e, t, i, o, a), r
            },
            newLabel: function(e, t, i, o, a, n) {
                void 0 === i && (i = 20), void 0 === o && (o = .5), void 0 === a && (a = .5), void 0 === n && (n = 0);
                var r = new cc.Node;
                r.anchorX = o, r.anchorY = a;
                var s = r.addComponent(cc.Label);
                return s.string = e, s.fontSize = i, t.addChild(r, n), r
            },
            delayTimeCall: function(e, t, i, o) {
                e.runAction(cc.sequence(cc.delayTime(i), cc.callFunc(t, o)))
            },
            getDistance: function(e, t) {
                return e.sub(t).mag()
            },
            getDiscForNode: function(e, t) {
                var i = this.getToWorldPosAR(e),
                    o = this.getToWorldPosAR(t);
                return this.getDistance(i, o)
            },
            getVectorForPos: function(e, t) {
                return t.sub(e)
            },
            getStrForNum: function(e, t, i) {
                void 0 === t && (t = 1), void 0 === i && (i = 2);
                var o = "";
                return e >= 1e3 * Math.pow(10, i - 1) ? (e /= 1e3, o = "k", (e = Math.floor(e * Math.pow(10, t)) / Math.pow(10, t)) >= 1e3 && (e /= 1e3, o = "M", e = Math.floor(e * Math.pow(10, t)) / Math.pow(10, t)), e >= 1e3 && (e /= 1e3, o = "G", e = Math.floor(e * Math.pow(10, t)) / Math.pow(10, t)), e + o) : (e = Math.ceil(e)) + o
            },
            getStrForNum2: function(e) {
                var t = "";
                if ((e = (e || 0).toString()) <= 3) return e;
                for (; e.length > 3;) t = "," + e.slice(-3) + t, e = e.slice(0, e.length - 3);
                return e && (t = e + t), t
            },
            insertStrForIndex: function(e, t, i) {
                return e.slice(0, t) + i + e.slice(t)
            },
            prefixInteger: function(e, t) {
                return void 0 === t && (t = 2), (Array(t).join("0") + e).slice(-t)
            },
            getNodePosForWroldPos: function(e, t) {
                return e.convertToNodeSpaceAR(t)
            },
            getToNodePos: function(e, t) {
                if (e && t) {
                    var i = e.parent.convertToWorldSpaceAR(cc.v2(e.position));
                    return t.convertToNodeSpaceAR(i)
                }
            },
            getToWorldPosAR: function(e) {
                if (e) return e.parent.convertToWorldSpaceAR(cc.v2(e.position))
            },
            getToWorldPos: function(e) {
                return e.parent.convertToWorldSpace(e.position)
            },
            isBoxContainPos: function(e, t) {
                return e.getBoundingBox().contains(t)
            },
            isBoxContainWorldPos: function(e, t) {
                return e.getBoundingBoxToWorld().contains(t)
            },
            isRectInterRect: function(e, t) {
                return e.getBoundingBoxToWorld().intersects(t.getBoundingBoxToWorld())
            },
            returnRandom: function(e, t, i) {
                return void 0 === i && (i = !0), i ? e + Math.floor(Math.random() * (t - e + 1)) : Math.random() * (t - e) + e
            },
            setAngleForParent: function() {},
            setNodeParent: function(e, t, i) {
                void 0 === i && (i = !0);
                var o = this.getToNodePos(e, t);
                e.parent = t, e.position = o, i && e.parent && (e.angle += e.parent.angle)
            },
            refractionY: function(e) {
                return Math.atan2(Math.sin(e), -Math.cos(e))
            },
            refractionX: function(e) {
                return Math.atan2(-Math.sin(e), Math.cos(e))
            },
            aginSortArr: function(e) {
                for (var t = 0; t < e.length; t++) {
                    var o = i.returnRandom(0, e.length - 1);
                    if (o != t) {
                        var a = e[t];
                        e[t] = e[o], e[o] = a
                    }
                }
            },
            returnCurrentLanType: function() {
                return cc.sys.language == cc.sys.LANGUAGE_CHINESE ? -1 != cc.sys.languageCode.toLowerCase().indexOf("zh-cn") || -1 != cc.sys.languageCode.toLowerCase().indexOf("zh_cn") ? 1 : 2 : cc.sys.language == cc.sys.LANGUAGE_KOREAN ? 4 : 3
            },
            getBeatItScore: function(e, t, i) {
                if (e > i) return 100;
                if (e <= t) {
                    if (0 == e) return 0;
                    var o = e / t * 80 + this.returnRandom(-3, 3);
                    return Math.max(Math.floor(o), 5)
                }
                var a = 80 + (e - t) / (i - t) * 20 + this.returnRandom(-3, 3);
                return Math.min(Math.floor(a), 99)
            },
            sortArrForObject: function(e, t, i) {
                void 0 === i && (i = !1), i ? e.sort(function(e, i) {
                    return i[t] - e[t]
                }) : e.sort(function(e, i) {
                    return e[t] - i[t]
                })
            },
            getDiffNumRandom: function(e, t, i) {
                for (var o = [], a = e; a <= t; a++) o.push(a);
                for (var n = o.length - i, r = 0; r < n; r++) {
                    var s = this.returnRandom(0, o.length - 1);
                    o.splice(s, 1)
                }
                return o
            },
            writeJson: function(e, t) {
                if (cc.sys.isBrowser) {
                    console.log("\u6d4f\u89c8\u5668");
                    var i = new Blob([e], {
                            type: "application/json"
                        }),
                        o = document.createElement("a");
                    o.download = t, o.innerHTML = "Download File", null != window.webkitURL ? o.href = window.webkitURL.createObjectURL(i) : (o.href = window.URL.createObjectURL(i), o.onclick = destroyClickedElement, o.style.display = "none", document.body.appendChild(o)), o.click()
                }
            }
        };
        window.ToolsJs = i, cc._RF.pop()
    }, {}],
    UIManager: [function(e, t) {
        "use strict";
        cc._RF.push(t, "866bf0oenZKtoq5L6EbRayh", "UIManager");
        var i = {
            UIDic: {},
            OpenUI: function(e, t, i) {
                var a;
                "string" == typeof e || (e = e.name), o && o[e] && (a = o[e]), null != a ? null == this.UIDic[e] ? (1 == i && this.removeAllUI(), this.CreateUI(a, t)) : cc.error("\u5df2\u7ecf\u6253\u5f00\u8fc7UI:" + e) : cc.error("\u672a\u627e\u5230\u8be5UI\u7684\u914d\u7f6e\u4fe1\u606f:" + e)
            },
            CloseUI: function(e, t) {
                var i;
                "string" == typeof e || (e = e.name), null != (i = this.UIDic[e]) ? (this.UIDic[e] = null, i.getComponent(i.config.com) && null != i.getComponent(i.config.com).closeUI ? i.getComponent(i.config.com).closeUI(t) : i.destroy()) : cc.error("\u5df2\u7ecf\u5173\u95ed\u8fc7UI:" + e)
            },
            GetUI: function(e) {
                var t = this.UIDic[e];
                return null != t ? t : (cc.log("\u6ca1\u6709\u6253\u5f00UI:" + e), null)
            },
            GetUIForJs: function(e) {
                var t = this.UIDic[e];
                return null != t ? t.getComponent(t.config.com) : (cc.error("\u6ca1\u6709\u6253\u5f00UI:" + e), null)
            },
            CreateUI: function(e, t) {
                var i = this;
                if (null == this.UIDic[e.name]) {
                    var o = cc.director.getScene().getChildByName("Canvas");
                    ToolsJs.clonePrefab(e.resUrl, o, null, function(o) {
                        o.config = e;
                        var a = o.getComponent(e.com);
                        null != a && null != a.openUI && a.openUI(t), i.UIDic[e.name] = o
                    }, e.zIndex)
                }
            },
            removeAllUI: function() {
                for (var e in this.UIDic) this.CloseUI(e)
            },
            openTipUI: function(e, t, i, o, a, n, r, s, c) {
                void 0 === t && (t = 2), void 0 === i && (i = 0), void 0 === n && (n = !1), void 0 === r && (r = 1);
                var h = {
                    tipStr: e,
                    glodNum: i,
                    tipType: t,
                    yesCall: o,
                    noCall: a,
                    isDouble: n,
                    glodType: r,
                    yesStr: s || 2 == t ? renderConfig.getStrForType("yesStr") : renderConfig.getStrForType("sureStr"),
                    noStr: c || renderConfig.getStrForType("noStr")
                };
                this.OpenUI("tipUIPanel", h)
            }
        };
        t.exports = i;
        var o = {
            nextPanel: {
                name: "nextPanel",
                resUrl: "nextPanel",
                com: "nextPanel",
                zIndex: 99
            },
            revivePanelCar: {
                name: "revivePanelCar",
                resUrl: "revivePanelCar",
                com: "revivePanelCar",
                zIndex: 99
            },
            upVideoPanelCar: {
                name: "upVideoPanelCar",
                resUrl: "upVideoPanelCar",
                com: "upVideoPanelCar",
                zIndex: 99
            },
            winLongPanelCar: {
                name: "winLongPanelCar",
                resUrl: "winLongPanelCar",
                com: "winLongPanelCar",
                zIndex: 99
            }
        };
        window.UIConfig = o, cc._RF.pop()
    }, {}],
    audioTools: [function(e, t) {
        "use strict";
        cc._RF.push(t, "f0150VbHHtN2qKswCMoDllB", "audioTools");
        var i = {
            bgAudio: null,
            isPlayAudio: !0,
            isPlayBG: !0,
            playBG: function(e, t) {
                void 0 === t && (t = .3), this.isPlayBG && this.isPlayAudio && (this.stopBG(), null != ToolsJs.AudioClipDic[e] ? this.bgAudio = cc.audioEngine.play(ToolsJs.AudioClipDic[e], !0, t) : this.bgAudio = cc.audioEngine.play(cc.url.raw("resources/music/" + e + ".mp3"), !0, t))
            },
            stopBG: function() {
                this.stopAudio(this.bgAudio)
            },
            playAudio: function(e, t, i) {
                if (void 0 === t && (t = .5), void 0 === i && (i = !1), this.isPlayAudio) return null != ToolsJs.AudioClipDic[e] ? cc.audioEngine.play(ToolsJs.AudioClipDic[e], i, t) : cc.audioEngine.play(cc.url.raw("resources/music/" + e + ".mp3"), i, t)
            },
            stopAudio: function(e) {
                null != e && (cc.audioEngine.stop(e), e = null)
            },
            newAduioSource: function(e) {
                var t;
                if (null != ToolsJs.AudioClipDic[e]) t = ToolsJs.AudioClipDic[e];
                else {
                    if (null == e) return console.log("clip\u4e0d\u80fd\u4e3a\u7a7a\uff01"), null;
                    t = e
                }
                var i = new cc.Node;
                return i.addComponent(cc.AudioSource).clip = t, i.getComponent(cc.AudioSource)
            }
        };
        window.audioTools = i, cc._RF.pop()
    }, {}],
    carBoxItem: [function(e, t) {
        "use strict";
        cc._RF.push(t, "37db6kgiwpJxqvH5SY9W2Vi", "carBoxItem");
        var i = e("../../model/GameConfig");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                this.mainSelf = i.mianGameJs, this.finshNode = this.node.parent.parent
            },
            start: function() {},
            onCollisionEnter: function(e, t) {
                if (!this.mainSelf.gameOverFlags) {
                    var i = e.node;
                    e.node.getComponent("carBoxItem") && (i = e.node.getComponent("carBoxItem").finshNode), this.interPlayer(e, t, i), this.interEnmyCall(e, t, i)
                }
            },
            interPlayer: function(e, t, i) {
                if (e.tag == InterTag.Fu_Tag && (e.node.parent.getChildByName("GraySpr").runAction(cc.fadeOut(.2)), e.node.active = !1), t.tag == InterTag.Player_Tag && e.tag == InterTag.Enmy_Tag) {
                    var o = i.typeID;
                    this.mainSelf.playerNode.typeID >= o ? (e.tag = 999, this.mainSelf.EatSmallAction(i, this.finshNode), i.getComponent("enemyJSCar").bombAni()) : this.mainSelf.JudgeSmallFish()
                }
                if (t.tag == InterTag.Son_Tag && e.tag == InterTag.Enmy_Tag) {
                    if (e.flags) return;
                    var a = i.typeID;
                    if (this.finshNode.typeID >= a) e.tag = 9999, this.mainSelf.EatSmallAction(i, this.mainSelf.myFish);
                    else {
                        audioTools.isPlayAudio && cc.audioEngine.play(this.mainSelf.HurtMusic, !1, 1), this.finshNode.getComponent("playerJSCar").bombAni();
                        var n = this.finshNode.typeID;
                        1 == n ? ToolsJs.removeNodeForArr(this.mainSelf.kedouArr, this.finshNode) : 2 == n ? ToolsJs.removeNodeForArr(this.mainSelf.qingwaArr, this.finshNode) : 3 == n ? ToolsJs.removeNodeForArr(this.mainSelf.haiguiArr, this.finshNode) : 4 == n ? ToolsJs.removeNodeForArr(this.mainSelf.xiaojinyuArr, this.finshNode) : 5 == n ? ToolsJs.removeNodeForArr(this.mainSelf.jinliArr, this.finshNode) : 6 == n ? ToolsJs.removeNodeForArr(this.mainSelf.dianmanArr, this.finshNode) : 7 == n ? ToolsJs.removeNodeForArr(this.mainSelf.shayuArr, this.finshNode) : 8 == n && ToolsJs.removeNodeForArr(this.mainSelf.jingyuArr, this.finshNode), this.finshNode.destroy()
                    }
                }
            },
            interEnmyCall: function(e, t, i) {
                if (t.tag == InterTag.Enmy_Tag && e.tag == InterTag.Enmy_Tag) {
                    var o = i.typeID;
                    this.finshNode.typeID > o && (this.mainSelf.createSmallFish(this.mainSelf.playerNode.typeID), i.getComponent("enemyJSCar").bombAni(), i.destroy())
                }
            }
        }), cc._RF.pop()
    }, {
        "../../model/GameConfig": "GameConfig"
    }],
    effectCar: [function(e, t) {
        "use strict";
        cc._RF.push(t, "a663fp/O9BNx4hpz3W89Aad", "effectCar"), cc.Class({
            extends: cc.Component,
            properties: {
                fireBall: cc.Node,
                tailing: cc.Node,
                fireworksArr1: [cc.Node],
                fireworksArr2: [cc.Node],
                starArr: [cc.Node],
                fireAudio: cc.AudioClip
            },
            start: function() {
                var e = this;
                this.effectArr = [], this.effectArr.push(this.fireworksArr1), this.effectArr.push(this.fireworksArr2), this.node.runAction(cc.sequence(cc.callFunc(function() {
                    e.fireworks()
                }, this), cc.delayTime(2.5)).repeatForever())
            },
            fireworks: function() {
                for (var e = this, t = this, i = function(i) {
                        var o = ToolsJs.returnRandom(.5, 1.5, !1),
                            a = cc.v2(0, 0);
                        a = i < 3 ? cc.v2(ToolsJs.returnRandom(-250, -100), -cc.winSize.height / 2 - 50) : cc.v2(ToolsJs.returnRandom(100, 250), -cc.winSize.height / 2 - 50);
                        var n = cc.v2(a.x, ToolsJs.returnRandom(0, 300)),
                            r = cc.instantiate(e.fireBall);
                        r.active = !0, e.node.addChild(r, 3), r.scaleX = o, r.scaleY = o, r.position = a;
                        var s = ToolsJs.returnRandom(.3, 1, !1);
                        r.runAction(cc.sequence(cc.delayTime(s), cc.callFunc(function() {}), cc.moveTo(.5, n), cc.fadeOut(.2), cc.callFunc(function() {
                            for (var e = ToolsJs.returnRandom(0, 1), i = 0; i < t.effectArr[e].length; i++) {
                                var a = .1 * i;
                                t.scheduleOnce(function() {
                                    cc.audioEngine.play(t.fireAudio, !1, 1)
                                }, a);
                                for (var r = function(a) {
                                        var r = cc.instantiate(t.effectArr[e][i]);
                                        r.active = !0, t.node.addChild(r, 3), r.scaleX = o, r.scaleY = o;
                                        var s = 40 * a;
                                        r.angle = s, 1 == i && (r.angle = 20 + s), r.position = n, 1 == i && (s = 20 + 40 * a);
                                        var c = cc.v2(0, 10);
                                        c.rotateSelf(s * Math.PI / 180);
                                        var h = c.normalize();
                                        r.runAction(cc.sequence(cc.moveBy(.3, h.mul(80 * (i + 1) * o)), cc.fadeOut(.1), cc.callFunc(function() {
                                            r.destroy()
                                        })))
                                    }, s = 0; s < 9; s++) r(s)
                            }
                            for (var c = function() {
                                    var e = ToolsJs.returnRandom(.7, 1.5, !1),
                                        i = ToolsJs.returnRandom(0, 2),
                                        o = cc.instantiate(t.starArr[i]);
                                    o.active = !0, t.node.addChild(o, 3);
                                    var a = cc.v2(ToolsJs.returnRandom(-200, 200), ToolsJs.returnRandom(100, 500));
                                    o.scaleX = e, o.scaleY = e, o.opacity = 0, o.position = a;
                                    var n = ToolsJs.returnRandom(.2, .4, !1);
                                    o.runAction(cc.sequence(cc.fadeIn(n), cc.fadeOut(n), cc.callFunc(function() {
                                        o.destroy()
                                    })))
                                }, h = 0; h < 2; h++) c()
                        })));
                        var c = cc.instantiate(e.tailing);
                        c.active = !0, e.node.addChild(c, 3), c.scaleX = o, c.scaleY = 0, c.position = a, c.runAction(cc.sequence(cc.delayTime(s), cc.spawn(cc.moveTo(.5, n), cc.sequence(cc.scaleTo(.2, o, 1.4), cc.scaleTo(.2, o, 0))), cc.fadeOut(.2), cc.callFunc(function() {})))
                    }, o = 0; o < 6; o++) i(o)
            }
        }), cc._RF.pop()
    }, {}],
    enemyJSCar: [function(e, t) {
        "use strict";
        cc._RF.push(t, "9bf97/TUWJAtJTYemvyINjL", "enemyJSCar");
        var i = e("../../model/GameConfig");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                this.mainSelf = i.mianGameJs, this.longZhu = null, this.bombScaleArr = [.5, .8, .8, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5], this.speed = 250
            },
            setInitLongZhu: function(e, t, i) {
                this.longZhu = e, this.longZhuPos = cc.v2(e.x, e.y), this.moveR = t, this.tempAngle = i;
                var o = cc.misc.degreesToRadians(this.tempAngle);
                this.node.position = cc.v2(this.longZhu.x + Math.cos(o) * o, this.longZhu.y + Math.sin(o) * o), this.node.children[1].active = !1
            },
            onCollisionEnter: function(e, t) {
                if (!this.mainSelf.gameOverFlags) {
                    this.mainSelf.collision = t.node;
                    var i = e.node;
                    if (e.node.getComponent("carBoxItem") && (i = e.node.getComponent("carBoxItem").finshNode), t.tag == InterTag.Enmy_Tag && e.tag == InterTag.Enmy_Tag) {
                        var o = i.typeID;
                        t.node.typeID > o && (this.mainSelf.createSmallFish(this.mainSelf.playerNode.typeID), i.getComponent("enemyJSCar").bombAni(), i.destroy())
                    }
                }
            },
            update: function() {},
            updateSnakePos: function(e) {
                if (this.carBody_Data.length > 0) {
                    for (var t = 0; t < this.carSprArr.length; t++)
                        if (t > 0) {
                            var i = this.carSprArr[t],
                                o = cc.v2(this.carBody_Data[i.posIndex].x, this.carBody_Data[i.posIndex].y);
                            i.position = this.carNode.convertToNodeSpaceAR(o), i.angle = this.carBody_Data[i.posIndex].angle
                        }
                    var a = ToolsJs.getToWorldPosAR(this.carSprArr[0]);
                    this.carBody_Data[0] = this.setCarBodyData(a.x, a.y, this.carSprArr[0].angle);
                    for (var n = this.carBody_Data.length - 1; n > 0; n--) this.carBody_Data[n] = this.carBody_Data[n - 1]
                } else {
                    e /= this.node.scaleY;
                    for (var r = Math.floor(this.carNode.height / e), s = 0; s < r; s++) {
                        var c = this.carNodePos.convertToWorldSpaceAR(cc.v2(0, -s * e)),
                            h = this.setCarBodyData(c.x, c.y, this.carSprArr[0].angle);
                        this.carBody_Data.push(h), this.setCarPosIndex(c, e, s)
                    }
                }
            },
            setCarBodyData: function(e, t, i, o) {
                return o || (o = {}), o.x = e, o.y = t, o.angle = i, o
            },
            setCarPosIndex: function(e, t, i) {
                for (var o = 0; o < this.carNode.children.length; o++) {
                    var a = this.carNode.children[o];
                    ToolsJs.getDistance(ToolsJs.getToWorldPosAR(a), e) <= t && (a.posIndex = i)
                }
            },
            bombAni: function() {
                for (var e = ToolsJs.returnRandom(3, 5), t = this.node.width * this.node.scaleX, i = this.node.height * this.node.scaleY, o = 0; o < e; o++) {
                    var a = ToolsJs.returnRandom(this.node.x - t / 2, this.node.x + t / 2),
                        n = ToolsJs.returnRandom(this.node.y - i / 2, this.node.y + i / 2),
                        r = ToolsJs.clonePrefab("bombNode", this.mainSelf.liziNode, cc.v2(a, n), null, 200);
                    r.angle = ToolsJs.returnRandom(0, 360), r.scale = ToolsJs.returnRandom(.6 * this.bombScaleArr[this.node.typeID - 1], this.bombScaleArr[this.node.typeID - 1], !1), r.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function(e) {
                        e.destroy()
                    })))
                }
            },
            updateLongZhuMove: function(e) {
                var t = cc.misc.degreesToRadians(this.tempAngle);
                this.node.position = cc.v2(this.longZhuPos.x + Math.cos(t) * this.moveR, this.longZhuPos.y + Math.sin(t) * this.moveR);
                var i = this.speed * e / 2 / Math.PI;
                this.tempAngle += i, this.node.angle = this.tempAngle
            }
        }), cc._RF.pop()
    }, {
        "../../model/GameConfig": "GameConfig"
    }],
    gameOverJs: [function(e, t) {
        "use strict";
        cc._RF.push(t, "3621brbM61BsYFG7fM/74TL", "gameOverJs"), e("../commonJs/PersonCtrl"), e("../managerJs/AdManager"), e("../managerJs/UIManager");
        var i = e("../model/GameConfig");
        cc.Class({
            extends: cc.Component,
            properties: {
                bgLayer: cc.Node,
                moreBtn: cc.Button,
                maxScoreText: cc.Label,
                nametext: cc.Label,
                nowFishNode: cc.Node,
                mainNode: cc.Node,
                tipSpr: cc.Node
            },
            onLoad: function() {
                this.mainSelf = i.mianGameJs, this.bgLayer.runAction(cc.fadeTo(.3, 100)), this.isClick = !1, this.addClickBtns(), this.node.opacity = 0, this.node.runAction(cc.sequence(cc.fadeIn(.3), cc.callFunc(function() {
                    this.isClick = !0, this.showOverInfo()
                }, this))), this.setNameText(), this.endPageDisplay(), EventManager.addListener(EventData.SHARE_ADD_GLOD, this.shareAddGlod.bind(this), this.node)
            },
            onDestroy: function() {
                EventManager.removeListenerForTarget(this.node)
            },
            endPageDisplay: function() {
                if (i.gameMode != GAME_MODE.TIME_MODE) {
                    var e = this.mainSelf.maxTypeID,
                        t = this.nowFishNode.getChildByName("car_" + e);
                    t.active = !0;
                    var o, a = t.getChildByName("carNode");
                    o = a ? a.children[0].getChildByName("lightSpr") : t.getChildByName("lightSpr"), ToolsJs.setTexture(o, "langLight/" + e);
                    var n = this.mainNode.getChildByName("nameBg").children[0];
                    ToolsJs.setTexture(n, "carName/carName_" + e)
                }
            },
            setDoubleAni: function() {},
            setNameText: function() {
                i.gameMode != GAME_MODE.TIME_MODE && (this.nametext.string = {
                    name_1: {
                        CN: "\u81ea \u884c \u8f66",
                        CHT: "\u874c \u86aa",
                        EN: "Tadpole",
                        KOR: "\uc62c\ucc59\uc774"
                    },
                    name_2: {
                        CN: "\u7535 \u52a8 \u8f66",
                        CHT: "\u9752 \u86d9",
                        EN: "Frog",
                        KOR: "\uac1c\uad6c\ub9ac"
                    },
                    name_3: {
                        CN: "\u4e09 \u8f6e \u8f66",
                        CHT: "\u70cf \u9f9c",
                        EN: "Tortoise",
                        KOR: "\uac70\ubd81\uc774"
                    },
                    name_4: {
                        CN: "\u5c0f \u6c7d \u8f66 ",
                        CHT: "\u5c0f \u91d1 \u9b5a",
                        EN: "Goldfish",
                        KOR: "\uc791\uc740 \uae08\ubd95\uc5b4"
                    },
                    name_5: {
                        CN: "\u76ae \u5361",
                        CHT: "\u9326 \u9bc9 \u9b5a",
                        EN: "Koi Fish",
                        KOR: "\uc789\uc5b4"
                    },
                    name_6: {
                        CN: "\u8d27 \u8f66",
                        CHT: "\u96fb \u9c3b",
                        EN: "Eel",
                        KOR: "\uc804\uae30\ubc40\uc7a5\uc5b4"
                    },
                    name_7: {
                        CN: "\u516c \u4ea4 \u8f66",
                        CHT: "\u9bca \u9b5a",
                        EN: "Shark",
                        KOR: "\uc0c1\uc5b4."
                    },
                    name_8: {
                        CN: "\u5730 \u8dcc",
                        CHT: "\u5927 \u9be8 \u9b5a",
                        EN: "Whale",
                        KOR: "\ud070 \uace0\ub798"
                    },
                    name_9: {
                        CN: "\u7eff \u76ae \u706b \u8f66",
                        CHT: "\u86df",
                        EN: "Snake",
                        KOR: "\ud65c\uc6a9\ub2e8\uc5b4\ucc38\uc870"
                    },
                    name_10: {
                        CN: "\u9ad8 \u94c1",
                        CHT: "\u795e \u9f8d",
                        EN: "Dragon",
                        KOR: "\uc2e0\ub8e1"
                    }
                }["name_" + this.mainSelf.maxTypeID].CN)
            },
            setHisSocre: function(e) {
                cc.sys.localStorage.setItem("ZhaoHuanShenLong_12WS", e)
            },
            getHighScore: function() {
                return cc.sys.localStorage.getItem("ZhaoHuanShenLong_12WS")
            },
            addClickBtns: function() {
                this.tipSpr.on(cc.Node.EventType.TOUCH_END, function() {
                    this.isClick && (audioTools.playAudio("btnClick"), this.rePlayClick())
                }, this)
            },
            rePlayClick: function(e) {
                void 0 === e && (e = !1), this.isClick = !1, this.aginGame()
            },
            aginGame: function() {
                console.log("noThansks"), i.GAME_OVER_BOOL = !0, i.gameScore = 0, i.publicGameBool || adBreak({
                    type: "next",
                    name: "restart-game"
                }), loadTools.loadScene("CarGameScene")
            },
            getContentByScore1: function() {
                return "\u51fb\u8d25\u4e86\u5168\u7403" + this.endPercent + "%\u7684\u73a9\u5bb6\uff01"
            },
            start: function() {
                this.canTouchShareVideo = !1, this.tipSpr.opacity = 0, this.lowSpr = this.mainNode.getChildByName("lowSpr"), this.leftPao = this.mainNode.getChildByName("leftPao"), this.rightPao = this.mainNode.getChildByName("rightPao"), this.effectFire = this.mainNode.getChildByName("effectFire"), this.lowSpr.opacity = 0, this.leftPao.opacity = 0, this.rightPao.opacity = 0, this.addBtnClick()
            },
            showOverInfo: function() {
                this.tipSpr.runAction(cc.fadeIn(.2)), this.lowSpr.runAction(cc.fadeIn(.2)), this.leftPao.runAction(cc.fadeIn(.2)), this.rightPao.runAction(cc.fadeIn(.2))
            },
            shareAddGlod: function() {},
            addBtnClick: function() {},
            getContentByScore: function(e) {
                var t = "\u53ea\u5f970\u5206\uff0c\u5168\u7403\u72ec\u4e00\u4e2a\uff01";
                return e > 0 && (t = "\u51fb\u8d25\u4e86" + ToolsJs.getBeatItScore(e, this.standardScore, this.game_max_score) + "%\u7684\u73a9\u5bb6\uff01"), t
            },
            getContentByScore3: function(e, t) {
                var i = "\u6211\u771f\u662f\u592a\u5389\u5bb3\uff0c\u5728" + t + "\u4e2d\u7adf\u7136\u5f97\u4e860\u5206\uff0c\u5168\u7403\u53ea\u67091\u4e2a\u4eba\u5f970\u5206\uff01",
                    o = ToolsJs.getBeatItScore(e, this.standardScore, this.game_max_score);
                return e > 0 && o >= 0 && (i = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u771f\u662f\u592a\u68d2\u4e86\uff0c\u518d\u7ec3\u7ec3\u5c31\u80fd\u8fbe\u5230\u6e38\u5203\u6709\u4f59\u7684\u5883\u754c\uff01"), e > 0 && o >= 15 && (i = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u771f\u662f\u592a\u68d2\u4e86\uff0c\u518d\u7ec3\u7ec3\u5c31\u80fd\u8fbe\u5230\u6e38\u5203\u6709\u4f59\u7684\u5883\u754c\uff01"), e > 0 && o >= 30 && (i = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u51fb\u8d25\u4e86\u5168\u7403" + o + "%\u7684\u73a9\u5bb6\uff0c\u8fdb\u5165\u4e86\u4fe1\u624b\u62c8\u6765\u7684\u5883\u754c\uff01"), e > 0 && o >= 50 && (i = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u51fb\u8d25\u4e86\u5168\u7403" + o + "%\u7684\u73a9\u5bb6\uff0c\u8fdb\u5165\u4e86\u8fd0\u7528\u81ea\u5982\u7684\u5883\u754c\uff01"), e > 0 && o >= 70 && (i = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u51fb\u8d25\u4e86\u5168\u7403" + o + "%\u7684\u73a9\u5bb6\uff0c\u8fbe\u5230\u4e86\u884c\u4e91\u6d41\u6c34\u7684\u5883\u754c\uff01"), e > 0 && o >= 90 && (i = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u636e\u8bf4\u5168\u7403\u53ea\u6709 " + (100 - o) + "\u4e2a\u4eba\u8fbe\u5230\u8fd9\u4e2a\u6c34\u5e73\uff0c\u72ec\u5b64\u6c42\u8d25\uff01"), e >= this.game_max_score && (i = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u8d85\u8d8a\u4e86\u72ec\u5b64\u6c42\u8d25\uff0c\u5fc3\u6709\u7075\u7280\uff01"), i
            },
            strlen: function(e) {
                for (var t = 0, i = 0; i < e.length; i++) {
                    var o = e.charCodeAt(i);
                    o >= 1 && o <= 126 || 65376 <= o && o <= 65439 ? t++ : t += 2
                }
                return t
            },
            getContentByScore2: function(e) {
                var t = "Only 0, the only one in the world!";
                return e > 0 && (t = "Handy: beat " + ToolsJs.getBeatItScore(e, this.standardScore, this.game_max_score) + "% of the players!"), t
            },
            getContentByScore4: function(e, t) {
                var i = "I'm awesome\uff0cin" + t + "get 0 score\uff0conly one person in the world has a 0\uff01",
                    o = ToolsJs.getBeatItScore(e, this.standardScore, this.game_max_score);
                return e > 0 && o >= 0 && (i = "I got " + e + " points in the game, really great\uff01"), e > 0 && o >= 15 && (i = "I got " + e + " points in the game, really great\uff01"), e > 0 && o >= 30 && (i = "I got in the game in " + e + " points, beating out " + o + "% of global players\uff01"), e > 0 && o >= 50 && (i = "I got in the game in " + e + " points, beating out " + o + "% of global players\uff01"), e > 0 && o >= 70 && (i = "I got in the game in " + e + " points, beating out " + o + "% of global players\uff01"), e > 0 && o >= 90 && (hare_title = "I got " + e + " points in the game, it said to be the world's only " + (100 - o) + " people to reach this level! Have you?"), e >= this.game_max_score && (i = "I got " + e + " points in the game, defeating all players worldwide, waiting for you to fight!"), i
            }
        }), cc._RF.pop()
    }, {
        "../commonJs/PersonCtrl": "PersonCtrl",
        "../managerJs/AdManager": "AdManager",
        "../managerJs/UIManager": "UIManager",
        "../model/GameConfig": "GameConfig"
    }],
    jianceJSCar: [function(e, t) {
        "use strict";
        cc._RF.push(t, "671d7/ykbxBLKzxFW4yZU5f", "jianceJSCar");
        var i = e("../../model/GameConfig");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                this.mainSelf = i.mianGameJs
            },
            start: function() {},
            onCollisionEnter: function(e, t) {
                if (!this.mainSelf.gameOverFlags && e.tag == InterTag.Player_Tag) {
                    var i = this.mainSelf.playerNode.typeID;
                    t.node.parent.typeID > i && this.mainSelf.ChasePlayer(t.node.parent), t.node.parent.typeID == i && this.mainSelf.EscapePlayer(t.node.parent)
                }
            },
            onCollisionExit: function(e, t) {
                if (2 == e.tag) {
                    var i = this.mainSelf.playerNode.typeID;
                    t.node.parent.typeID != i && (t.node.parent.stopAllActions(), this.mainSelf.enemyAction(t.node.parent))
                }
            }
        }), cc._RF.pop()
    }, {
        "../../model/GameConfig": "GameConfig"
    }],
    linkHttpIconJs: [function(e, t) {
        "use strict";
        cc._RF.push(t, "95474fr0oNDP7SAidILF03q", "linkHttpIconJs");
        var i = e("MainManage");
        e("GameConfig"), cc.Class({
            extends: cc.Component,
            properties: {
                iconSpr: cc.Node,
                iconSpr1: cc.Node
            },
            onLoad: function() {
                if (this._imageArr = [], this.stopUpdateBool = !0, this.gameWidth = cc.winSize.width, this.gameHeight = cc.winSize.height, null != i.recGameData && "" != i.recGameData && null != i.recGameimg1 && "" != i.recGameimg1) {
                    var e = 50 - this.gameWidth / 2,
                        t = this.gameHeight - 50 - this.gameHeight / 2;
                    null != i.recGamePos && "" != i.recGamePos && (1 == i.recGamePos ? (e = 50 - this.gameWidth / 2, t = this.gameHeight - 50 - this.gameHeight / 2) : 2 == i.recGamePos ? (e = this.gameWidth - 50 - this.gameWidth / 2, t = this.gameHeight - 50 - this.gameHeight / 2) : 3 == i.recGamePos ? (e = this.gameWidth - 50 - this.gameWidth / 2, t = 50 - this.gameHeight / 2) : 4 == i.recGamePos && (e = 50 - this.gameWidth / 2, t = 50 - this.gameHeight / 2));
                    var o = i.recGameimg1,
                        a = i.recGameimg2,
                        n = this.iconSpr,
                        r = this.iconSpr1,
                        s = this;
                    cc.loader.load(o, function(i, o) {
                        n.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(o), s.iconSpr.opacity = 0, s.iconSpr.x = e, s.iconSpr.y = t, s._imageArr.push(s.iconSpr)
                    }), cc.loader.load(a, function(i, o) {
                        r.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(o), s.iconSpr1.opacity = 0, s.iconSpr1.x = e, s.iconSpr1.y = t, s._imageArr.push(s.iconSpr1)
                    })
                }
                this.addTouchEvents()
            },
            showLinkPic: function() {
                var e, t;
                e = null != i.recGameDelPau ? i.recGameDelPau : 6, cc.log("dMainManager.recGameDelPer", i.recGameDelPer), t = null != i.recGameDelPer ? i.recGameDelPer : .7, this._imageArr[0].opacity = 255, this._imageArr[0].runAction(cc.repeatForever(cc.sequence(cc.delayTime(e), cc.rotateBy(t, 0, 180), cc.callFunc(function() {
                    this._imageArr[0].setRotation(0), this._imageArr[0].opacity = 0, this._imageArr[1].opacity = 255
                }, this), cc.delayTime(e), cc.callFunc(function() {
                    this.flowerAction(this._imageArr[1], t)
                }, this), cc.delayTime(t), cc.callFunc(function() {
                    this._imageArr[1].opacity = 0, this._imageArr[0].opacity = 255
                }, this))))
            },
            flowerAction: function(e, t) {
                e.runAction(cc.sequence(cc.rotateBy(t, 0, 180), cc.callFunc(function() {
                    e.setRotation(0)
                })))
            },
            start: function() {},
            addTouchEvents: function() {},
            update: function() {
                this.stopUpdateBool && this._imageArr.length >= 2 && (this.stopUpdateBool = !1, this.showLinkPic())
            }
        }), cc._RF.pop()
    }, {
        GameConfig: "GameConfig",
        MainManage: "MainManage"
    }],
    loadTools: [function(e, t) {
        "use strict";
        cc._RF.push(t, "9ea23JPr69LB6K5CalAIXPw", "loadTools");
        var i = {
            loadNodeSprite: function(e, t, i) {
                e.getComponent(cc.Sprite) ? cc.loader.loadRes(t, cc.SpriteFrame, function(t, o) {
                    t ? cc.error(t) : (e.getComponent(cc.Sprite).spriteFrame = o, null != i && i(e))
                }) : cc.error("node\u4e0a\u6ca1\u6709Sprite\u7ec4\u4ef6\uff1a", e)
            },
            getResSpr: function(e, t) {
                cc.loader.loadRes(e, cc.SpriteFrame, function(e, i) {
                    e ? cc.error(e) : null != t && t(i)
                })
            },
            loadPrefab: function(e, t, i, o, a) {
                void 0 === a && (a = 0), cc.loader.loadRes(e, cc.Prefab, function(e, n) {
                    if (e) cc.error(e);
                    else {
                        var r = cc.instantiate(n);
                        t ? t.addChild(r, a) : cc.director.getScene().children[0].addChild(r, 100), i && (r.position = i), o && o(r)
                    }
                })
            },
            loadScene: function(e, t) {
                cc.director.preloadScene(e, function() {
                    cc.director.loadScene(e, t)
                })
            },
            loadJson: function() {}
        };
        window.loadTools = i, cc._RF.pop()
    }, {}],
    mTool_WHQ: [function(e, t) {
        "use strict";
        cc._RF.push(t, "fe57af2WNxE+67eFxNClrcq", "mTool_WHQ");
        var i = {
            getRandomNum: function(e, t, i) {
                return i ? Math.floor(Math.random() * (t - e + 1) + e) : Math.random() * (t - e) + e
            },
            cbPosToWorldPos: function(e, t, i, o, a, n) {
                var r = i + (e.x - t / 2 + .5) * a,
                    s = o + (e.y + .5) * n;
                return cc.v2(r, s)
            },
            worldPosToCbPos: function(e, t, i, o, a, n) {
                var r = (e.x - i) / a - .5 + t / 2,
                    s = (e.y - o) / n - .5;
                return r % 1 == 0 && s % 1 == 0 || (r = Math.round(r), s = Math.round(s)), cc.v2(r, s)
            },
            judgeInArr: function(e, t) {
                for (var i = 0; i < t.length; i++)
                    if (t[i] === e) return !0;
                return !1
            },
            getAngleByPos: function(e, t) {
                var i = t.x - e.x,
                    o = t.y - e.y;
                return 360 * Math.atan(o / i) / (2 * Math.PI)
            },
            judgeIntersect: function(e, t, i, o, a, n, r, s) {
                return Math.min(e, i) <= Math.max(a, r) && Math.min(n, s) <= Math.max(t, o) && Math.min(a, r) <= Math.max(e, i) && Math.min(t, o) <= Math.max(n, s) && ((a - e) * (o - t) - (i - e) * (n - t)) * ((r - e) * (o - t) - (i - e) * (s - t)) <= 1e-8 && ((e - a) * (s - n) - (r - a) * (t - n)) * ((i - a) * (s - n) - (r - a) * (o - n)) <= 1e-8
            },
            getNormalizeVector: function(e, t) {
                return t.sub(e).normalize()
            },
            judgeItemOverlapping: function(e, t, i, o, a, n, r, s) {
                return !(e + i < a || a + r < e || t + o < n || n + s < t)
            },
            getCircumferencePos: function(e, t, i) {
                var o = cc.v2(0, 0);
                return o.x = e.x + Math.sin(2 * Math.PI / 360 * i) * t, o.y = e.y + Math.cos(2 * Math.PI / 360 * i) * t, o
            },
            upsetArr: function(e) {
                return e.sort(function() {
                    return Math.random() > .5 ? -1 : 1
                })
            },
            getAudio: function(e, t) {
                return cc.sys.os === cc.sys.OS_IOS ? e : t
            },
            setLocalData: function(e, t) {
                cc.sys.localStorage.setItem(e, t)
            },
            getLocalData: function(e) {
                return cc.sys.localStorage.getItem(e)
            },
            getNodePos: function(e, t, i) {
                return i ? e.convertToNodeSpaceAR(t.convertToWorldSpaceAR(i)) : e.convertToNodeSpaceAR(t.convertToWorldSpaceAR())
            },
            judgeArrSame: function(e, t) {
                for (var i = 0; i < e.length; i++)
                    for (var o = 0; o < t.length; o++)
                        if (e[i] !== t[o]) return !1;
                return !0
            },
            pDistance: function(e, t) {
                return e.sub(t).mag()
            },
            getAngleByVector: function(e) {
                return e.y < 0 ? 360 - cc.v2(1, 0).angle(e) / Math.PI * 180 : cc.v2(1, 0).angle(e) / Math.PI * 180
            },
            getBoundingBoxToNode: function(e, t) {
                var i = t.convertToNodeSpaceAR(e.convertToWorldSpaceAR(cc.v2(-e.anchorX * e.width * (e.scaleX / Math.abs(e.scaleX)), -e.anchorY * e.height * (e.scaleY / Math.abs(e.scaleY)))));
                return cc.rect(i.x, i.y, e.width * Math.abs(e.scaleX), e.height * Math.abs(e.scaleY))
            },
            degreesToVectors: function(e) {
                var t = cc.misc.degreesToRadians(e);
                return cc.v2(1, 0).rotate(-t)
            },
            vectorsToDegrees: function(e) {
                if (Math.abs(e.x) + Math.abs(e.y) !== 0) {
                    var t = cc.v2(1, 0),
                        i = e.signAngle(t);
                    return cc.misc.radiansToDegrees(i)
                }
                return 0
            }
        };
        t.exports = i, cc._RF.pop()
    }, {}],
    playerJSCar: [function(e, t) {
        "use strict";
        cc._RF.push(t, "ba7b9DpttpMLq9QsKGwuABo", "playerJSCar"), e("../../commonJs/mTool_WHQ");
        var i = e("../../model/GameConfig");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                if (this.mainSelf = i.mianGameJs, this.carNode = this.node.getChildByName("carNode"), this.carNodePos = this.node.getChildByName("carNodePos"), this.liziNode = this.mainSelf.playerNode.getChildByName("liziNode"), this.liziBgNode = this.mainSelf.playerNode.getChildByName("liziBgNode"), this.carBody_Data = [], this.carSprArr = [], this.carYinSprArr = [], this.carNode) {
                    for (var e = 0; e < this.carNode.children.length; e++) this.carSprArr.push(this.carNode.children[e]);
                    for (var t = 0; t < this.carSprArr.length; t++) this.carSprArr[t].zIndex = 20 - t, this.carSprArr[t].initPos = cc.v2(this.carSprArr[t].x, this.carSprArr[t].y);
                    this.StreakNode = this.carSprArr[this.carSprArr.length - 1].getChildByName("StreakNode"), this.lightSpr = this.carSprArr[0].getChildByName("lightSpr")
                } else this.StreakNode = this.node.getChildByName("StreakNode"), this.lightSpr = this.node.getChildByName("lightSpr");
                this.tailTime = 0, this.tailScaleArr = [.2, .3, .3, .35, .4, .45, .5, .55, .6], this.bombScaleArr = [.5, .8, .8, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5], this.lightTime = 0
            },
            start: function() {
                var e = this;
                this.scheduleOnce(function() {
                    if (!(e.carYinSprArr.length > 0))
                        if (e.carSprArr.length > 0)
                            for (var t = 0; t < e.carSprArr.length; t++) {
                                e.carSprArr[t].zIndex = 20 - t;
                                var i = 0;
                                t >= 1 && (i = t == e.carSprArr.length - 1 ? 2 : 1);
                                var o = e.createCarYin(e.carSprArr[t], i);
                                e.carYinSprArr.push(o)
                            } else {
                                var a = e.createCarYin(e.node.getChildByName("carSpr"));
                                e.carYinSprArr.push(a)
                            }
                }, 0)
            },
            setLightSpr: function(e) {
                void 0 === e && (e = !1), e ? (ToolsJs.setTexture(this.lightSpr, "langLight/" + this.node.typeID), this.lightSpr.scaleY = 0, this.lightSpr.runAction(cc.scaleTo(.3, 1))) : (this.lightSpr.scaleY = 1, ToolsJs.setTexture(this.lightSpr, "lightSpr/" + this.node.typeID)), this.isLangLight = e
            },
            onCollisionEnter: function(e, t) {
                if (!this.mainSelf.gameOverFlags) {
                    this.mainSelf.collision = t.node;
                    var i = e.node;
                    if (e.node.getComponent("carBoxItem") && (i = e.node.getComponent("carBoxItem").finshNode), t.tag == InterTag.Player_Tag && e.tag == InterTag.Enmy_Tag) {
                        var o = i.typeID;
                        this.mainSelf.playerNode.typeID >= o ? (e.tag = 999, this.mainSelf.EatSmallAction(i, t.node), i.getComponent("enemyJSCar").bombAni()) : this.mainSelf.JudgeSmallFish()
                    }
                    if (e.tag == InterTag.Fu_Tag && (e.node.parent.getChildByName("GraySpr").runAction(cc.fadeOut(.2)), e.node.active = !1, this.moveToFuAni(e.node.parent)), t.tag == InterTag.Son_Tag && e.tag == InterTag.Enmy_Tag) {
                        if (e.flags) return;
                        var a = i.typeID;
                        if (t.node.typeID >= a) e.tag = 9999, this.mainSelf.EatSmallAction(i, this.mainSelf.myFish);
                        else {
                            audioTools.isPlayAudio && cc.audioEngine.play(this.mainSelf.HurtMusic, !1, 1);
                            var n = t.node.typeID;
                            this.bombAni(), 1 == n ? ToolsJs.removeNodeForArr(this.mainSelf.kedouArr, t.node) : 2 == n ? ToolsJs.removeNodeForArr(this.mainSelf.qingwaArr, t.node) : 3 == n ? ToolsJs.removeNodeForArr(this.mainSelf.haiguiArr, t.node) : 4 == n ? ToolsJs.removeNodeForArr(this.mainSelf.xiaojinyuArr, t.node) : 5 == n ? ToolsJs.removeNodeForArr(this.mainSelf.jinliArr, t.node) : 6 == n ? ToolsJs.removeNodeForArr(this.mainSelf.dianmanArr, t.node) : 7 == n ? ToolsJs.removeNodeForArr(this.mainSelf.shayuArr, t.node) : 8 == n && ToolsJs.removeNodeForArr(this.mainSelf.jingyuArr, t.node), t.node.destroy()
                        }
                    }
                }
            },
            onDestroy: function() {
                for (var e = 0; e < this.carYinSprArr.length; e++) this.carYinSprArr[e].destroy();
                this.carYinSprArr = []
            },
            onDisable: function() {
                for (var e = 0; e < this.carYinSprArr.length; e++) this.carYinSprArr[e].active = !1
            },
            onEnable: function() {
                for (var e = 0; e < this.carYinSprArr.length; e++) this.carYinSprArr[e].active = !0
            },
            update: function(e) {
                if (!this.mainSelf.gameOverFlags) {
                    this.updateCreateTail(e), this.updateLangLight(e);
                    for (var t = 0; t < this.carYinSprArr.length; t++) {
                        var i = this.carYinSprArr[t],
                            o = ToolsJs.getToNodePos(i.carSpr, i.parent);
                        i.position = cc.v2(o.x, o.y - 10), i.angle = i.carSpr.angle + this.node.angle
                    }
                }
            },
            updateRotate: function(e, t, i) {
                if (this.carSprArr.length <= 0 || this.node.scaleY < this.mainSelf.fishScaleY[this.node.typeID - 1]) this.updateFishRotate(this.node, e, t);
                else {
                    var o = this.carSprArr[0];
                    this.carBody_Data.length > 0 ? this.updateFishRotate(o, e, t) : this.updateFishRotate(this.node, e, t), this.updateSnakePos(i)
                }
            },
            updateFishRotate: function(e, t, i) {
                if (e) {
                    var o = e.angle % 360;
                    o = e.angle < 0 ? 360 - Math.abs(o) : o;
                    var a = t < 0 ? 360 - Math.abs(t) : t;
                    Math.abs(o - a) > i && Math.abs(o - a) < 360 - i ? Math.abs(o - a) > 180 ? o - a > 180 ? e.angle += i : e.angle -= i : o >= a ? e.angle -= i : e.angle += i : e.angle = t
                }
            },
            updateSnakePos: function(e) {
                if (this.carBody_Data.length > 0) {
                    for (var t = 0; t < this.carSprArr.length; t++)
                        if (t > 0) {
                            var i = this.carSprArr[t],
                                o = cc.v2(this.carBody_Data[i.posIndex].x, this.carBody_Data[i.posIndex].y);
                            i.position = this.carNode.convertToNodeSpaceAR(o), i.angle = this.carBody_Data[i.posIndex].angle
                        }
                    var a = ToolsJs.getToWorldPosAR(this.carSprArr[0]);
                    this.carBody_Data[0] = this.setCarBodyData(a.x, a.y, this.carSprArr[0].angle);
                    for (var n = this.carBody_Data.length - 1; n > 0; n--) {
                        var r = this.carBody_Data[n - 1],
                            s = -cc.misc.degreesToRadians(r.angle);
                        this.carBody_Data[n].x = r.x - Math.sin(s) * this.moveSpeed, this.carBody_Data[n].y = r.y - Math.cos(s) * this.moveSpeed, this.carBody_Data[n].angle = r.angle
                    }
                    for (var c = 1; c < this.carBody_Data.length; c++) {
                        var h = this.carBody_Data[c - 1],
                            l = Math.atan2(h.x - this.carBody_Data[c].x, h.y - this.carBody_Data[c].y);
                        this.carBody_Data[c].x = h.x - Math.sin(l) * this.moveSpeed, this.carBody_Data[c].y = h.y - Math.cos(l) * this.moveSpeed
                    }
                } else this.initSnakePos2(e)
            },
            initSnakePos: function(e) {
                if (!(this.node.typeID < 8)) {
                    this.carBody_Data = [];
                    for (var t = e * this.node.scaleY, i = Math.floor(this.carNode.height / t), o = 0; o < i; o++) {
                        var a = this.carNodePos.convertToWorldSpaceAR(cc.v2(0, -o * t)),
                            n = this.setCarBodyData(a.x, a.y, this.carSprArr[0].angle);
                        this.carBody_Data.push(n), this.setCarPosIndex(a, e, o)
                    }
                }
            },
            reviePlayer: function() {
                if (!(this.node.typeID < 8)) {
                    this.carBody_Data = [];
                    for (var e = 0; e < this.carSprArr.length; e++) {
                        var t = this.carNode.children[e];
                        t.angle = 0, t.position = t.initPos
                    }
                }
            },
            initSnakePos2: function(e) {
                if (!(this.node.typeID < 8)) {
                    this.carBody_Data = [];
                    var t = e * this.node.scaleY,
                        i = Math.floor(this.carNode.height / t);
                    this.moveSpeed = e, this.node.angle = 0, this.carNodePos.angle = this.node.angle;
                    for (var o = 0; o < i; o++) {
                        var a = ToolsJs.getToWorldPosAR(this.carSprArr[0]),
                            n = -cc.misc.degreesToRadians(this.carSprArr[0].angle + this.node.angle);
                        a.x -= Math.sin(n) * this.moveSpeed * o, a.y -= Math.cos(n) * this.moveSpeed * o;
                        var r = this.setCarBodyData(a.x, a.y, this.carSprArr[0].angle);
                        this.carBody_Data.push(r), this.setCarPosIndex(a, e, o)
                    }
                }
            },
            setCarBodyData: function(e, t, i, o) {
                return o || (o = {}), o.x = e, o.y = t, o.angle = i, o
            },
            setCarPosIndex: function(e, t, i) {
                for (var o = 0; o < this.carSprArr.length; o++) {
                    var a = this.carSprArr[o];
                    ToolsJs.getDistance(ToolsJs.getToWorldPosAR(a), e) <= t * this.node.scale && (a.posIndex = i)
                }
            },
            createCarYin: function(e, t) {
                var i;
                (i = this.node.typeID < 8 ? ToolsJs.newSprite("carYin_" + this.node.typeID) : ToolsJs.newSprite("carYin_" + this.node.typeID + "_" + t)).groupIndex = GroupIndexAll.Move, i.scale = this.mainSelf.fishScaleY[this.node.typeID - 1], this.mainSelf.playerNode.getChildByName("liziBgNode").addChild(i);
                var o = ToolsJs.getToNodePos(e, i.parent);
                return i.position = cc.v2(o.x, o.y - 10), i.angle = e.angle + this.node.angle, i.carSpr = e, i
            },
            updateCreateTail: function(e) {
                if (this.tailTime += e, !(this.tailTime <= .05)) {
                    this.tailTime = 0;
                    for (var t = 0; t < this.StreakNode.children.length; t++) {
                        var i = ToolsJs.getToNodePos(this.StreakNode.children[t], this.mainSelf.liziNode);
                        this.createTail(i)
                    }
                }
            },
            createTail: function(e, t) {
                void 0 === t && (t = null);
                var i = PoolManager.getPoolObj("tailPar");
                i || (i = ToolsJs.newSprite("tail_" + ToolsJs.returnRandom(1, 3))), i.groupIndex = GroupIndexAll.Move, this.mainSelf.liziNode.addChild(i), i.position = e, i.scale = 0, i.opacity = ToolsJs.returnRandom(100, 200), i.angle = ToolsJs.returnRandom(0, 360);
                var o = this.tailScaleArr[this.node.typeID - 1];
                return this.tailAni(i, o, .5, t), i
            },
            tailAni: function(e, t, i, o) {
                void 0 === o && (o = null);
                var a = cc.v2(0, 0);
                if (null != o) {
                    var n = ToolsJs.returnRandom(100, 200),
                        r = cc.misc.degreesToRadians(o);
                    a = cc.v2(Math.cos(r) * n, Math.sin(r) * n)
                }
                e.runAction(cc.sequence(cc.spawn(cc.scaleTo(i / 2, t / 2), cc.moveBy(i / 2, cc.v2(a.x / 2, a.y / 2))), cc.spawn(cc.scaleTo(i / 2, t), cc.moveBy(i / 2), cc.fadeOut(i / 2)), cc.callFunc(function(e) {
                    PoolManager.addPoolObj("tailPar", e)
                })))
            },
            bombAni: function() {
                console.log("bombAni"), this.eatSmallAni();
                for (var e = ToolsJs.returnRandom(3, 5), t = this.node.width * this.node.scaleX, i = this.node.height * this.node.scaleY, o = ToolsJs.getToNodePos(this.node, this.mainSelf.liziNode), a = 0; a < e; a++) {
                    var n = ToolsJs.returnRandom(o.x - t / 2, o.x + t / 2),
                        r = ToolsJs.returnRandom(o.y - i / 2, o.y + i / 2),
                        s = ToolsJs.clonePrefab("bombNode", this.mainSelf.liziNode, cc.v2(n, r), null, 200);
                    s.angle = ToolsJs.returnRandom(0, 360), s.scale = ToolsJs.returnRandom(.6 * this.bombScaleArr[this.node.typeID - 1], this.bombScaleArr[this.node.typeID - 1], !1), s.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function(e) {
                        e.destroy()
                    })))
                }
            },
            eatSmallAni: function() {
                this.createLightBg(.5, this.liziBgNode), this.createCirSpr(.5, this.liziBgNode), this.createStar()
            },
            upLevelAni: function() {
                this.createLightBg(.5, this.liziNode, "starLight", 1.8), this.createCirSpr(.5, this.liziNode), this.createStar(), this.createCroStar()
            },
            createLightBg: function(e, t, i, o) {
                void 0 === i && (i = "light_Bg"), void 0 === o && (o = 1);
                var a = ToolsJs.newSprite(i);
                t.addChild(a), a.groupIndex = GroupIndexAll.Move, a.position = this.node.position, a.width = this.node.height * this.node.scale * o, a.height = a.width, a.opacity = 0, a.active = !0, a.runAction(cc.sequence(cc.fadeIn(e / 2), cc.delayTime(.1), cc.fadeOut(e / 2 - .1), cc.callFunc(function(e) {
                    e.destroy()
                })))
            },
            createCirSpr: function(e, t) {
                void 0 === e && (e = .5);
                var i = ToolsJs.newSprite("cirSpr");
                t.addChild(i), i.groupIndex = GroupIndexAll.Move, i.position = this.node.position, i.width = this.node.height * this.node.scale * 1.5, i.height = i.width, i.scale = 0, i.runAction(cc.scaleTo(e, 1)), i.runAction(cc.sequence(cc.delayTime(e / 2 + .1), cc.fadeOut(e / 2 - .1), cc.callFunc(function(e) {
                    e.destroy()
                })))
            },
            createStar: function() {
                for (var e = 0; e < 20; e++) {
                    var t = ToolsJs.newSprite("starSpr");
                    this.liziNode.addChild(t), t.groupIndex = GroupIndexAll.Move, t.position = this.node.position, t.width = this.node.width * this.node.scale * .5, t.width <= 50 && (t.width = 50), t.height = t.width, t.scale = .3 + .5 * Math.random(), t.angle = ToolsJs.returnRandom(0, 360);
                    var i = ToolsJs.returnRandom(50, 150) / this.mainSelf.lastZoomTatio;
                    AniTools.moveDegressAni(t, null, i, 300, null, !0), t.runAction(cc.rotateBy(1, ToolsJs.returnRandom(180, 250)).repeatForever())
                }
            },
            createCroStar: function(e) {
                void 0 === e && (e = .5);
                for (var t = 0; t < 10; t++) {
                    var i = ToolsJs.newSprite("croStar");
                    this.liziNode.addChild(i), i.groupIndex = GroupIndexAll.Move, i.position = this.node.position, i.width = this.node.width * this.node.scale * .8, i.width <= 50 && (i.width = 50), i.height = i.width, i.scale = .3 + .5 * Math.random(), i.opacity = 0, i.angle = ToolsJs.returnRandom(0, 360), i.runAction(cc.rotateBy(1, ToolsJs.returnRandom(180, 250)).repeatForever()), i.runAction(cc.sequence(cc.fadeIn(e / 2), cc.delayTime(.1), cc.fadeOut(e / 2 - .1), cc.callFunc(function(e) {
                        e.destroy()
                    })))
                }
            },
            updateLangLight: function(e) {
                if (0 != this.isLangLight) return this.lightTime += e, this.lightTime >= 3 ? (this.lightTime = .5 * Math.random(), void this.lightSpr.runAction(cc.sequence(cc.fadeTo(.1, 100), cc.fadeTo(.1, 255)).repeat(3))) : void 0;
                this.lightTime = 0
            },
            moveToFuAni: function(e) {
                var t = this,
                    i = cc.instantiate(e);
                i.groupIndex = GroupIndexAll.UI;
                for (var o = 0; o < i.children.length; o++) i.children[o].groupIndex = GroupIndexAll.UI;
                i.parent = this.mainSelf.node, i.zIndex = 200;
                var a = this.mainSelf.carmeraNode.getChildByName("MoveCamera").getComponent(cc.Camera).getWorldToScreenPoint(ToolsJs.getToWorldPosAR(e));
                i.position = cc.v2(a.x - cc.winSize.width / 2, a.y - cc.winSize.height / 2), i.getChildByName("GraySpr").active = !1;
                for (var n = null, r = 0; r < this.mainSelf.wordSprArr.length; r++) {
                    var s = this.mainSelf.wordSprArr[r];
                    if (s.name == e.name && 0 == s.num) {
                        n = s;
                        break
                    }
                    s.name == e.name && (n = s)
                }
                i.scale = n.scale + .2;
                var c = n.scale;
                i.runAction(cc.sequence(cc.spawn(cc.moveTo(.3, n.position), cc.scaleTo(.3, c)), cc.callFunc(function(e) {
                    n.num >= 1 && (n.getChildByName("Label").active = !0), n.num++, n.getChildByName("ziSpr").active = !0, n.getChildByName("Label").getComponent(cc.Label).string = n.num, n.getChildByName("boxSpr").active = !1, n.getComponent(cc.Sprite).enabled = !0, n.runAction(cc.sequence(cc.scaleTo(.1, c + .1), cc.scaleTo(.1, c))), e.destroy();
                    for (var i = !0, o = 0; o < t.mainSelf.wordSprArr.length; o++) {
                        var a = t.mainSelf.wordSprArr[o];
                        (a.num <= 0 || a.getChildByName("Streak").active) && (i = !1), a.runAction(cc.fadeIn(.3)), a.getChildByName("GraySpr").active = !1
                    }
                    i && t.lightAni()
                })))
            },
            lightAni: function() {
                for (var e = 0; e < this.mainSelf.wordSprArr.length; e++) {
                    var t = this.mainSelf.wordSprArr[e],
                        i = t.getChildByName("Streak");
                    i.active = !0, i.runAction(cc.sequence(cc.moveTo(.35, cc.v2(-t.width / 2, 0)), cc.moveTo(.35, cc.v2(0, -t.height / 2 + 0)), cc.moveTo(.35, cc.v2(t.width / 2, 0)), cc.moveTo(.35, cc.v2(0, t.height / 2))).repeatForever())
                }
            }
        }), cc._RF.pop()
    }, {
        "../../commonJs/mTool_WHQ": "mTool_WHQ",
        "../../model/GameConfig": "GameConfig"
    }],
    resArr: [function(e, t) {
        "use strict";
        cc._RF.push(t, "d1951bUsVBEo7LtLLUajDCO", "resArr"), cc.Class({
            extends: cc.Component,
            properties: {
                SpriteFrameArr: [cc.SpriteFrame],
                PrefabArr: [cc.Prefab],
                audiosArr: {
                    type: cc.AudioClip,
                    default: []
                }
            },
            onLoad: function() {
                this.addPrefabs(), this.addSpriteFrame(), this.addAudio()
            },
            addAudio: function() {
                for (var e = 0; e < this.audiosArr.length; e++)
                    if (this.audiosArr[e]) {
                        var t = this.audiosArr[e];
                        ToolsJs.AudioClipDic[t.name] = t
                    }
            },
            addSpriteFrame: function() {
                for (var e = 0; e < this.SpriteFrameArr.length; e++)
                    if (this.SpriteFrameArr[e]) {
                        var t = this.SpriteFrameArr[e];
                        ToolsJs.SpriteFrameDic[t.name] = t
                    }
            },
            addPrefabs: function() {
                for (var e = 0; e < this.PrefabArr.length; e++)
                    if (this.PrefabArr[e]) {
                        var t = this.PrefabArr[e];
                        ToolsJs.PrefabDic[t.name] = t
                    }
            }
        }), cc._RF.pop()
    }, {}],
    rockerJSCar: [function(e, t) {
        "use strict";
        cc._RF.push(t, "132743iYdROWry4PeEjE8Fb", "rockerJSCar");
        var i = e("../../model/GameConfig");
        cc.Class({
            extends: cc.Component,
            properties: {
                buttonNode: cc.Node
            },
            onLoad: function() {
                this.node.opacity = 0, this.mainSelf = i.mianGameJs, this.max_r = this.node.width / 2;
                var e = cc.v2(0, 0);
                this.dir = cc.v2(0, 0), this.buttonNode.setPosition(e), this.mainSelf.node.on(cc.Node.EventType.TOUCH_END, function() {
                    this.buttonNode.setPosition(cc.v2(0, 0))
                }, this), this.mainSelf.node.on(cc.Node.EventType.TOUCH_CANCEL, function() {
                    this.buttonNode.setPosition(cc.v2(0, 0))
                }, this), this.mainSelf.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
                    var t = e.getLocation(),
                        i = this.node.convertToNodeSpaceAR(t),
                        o = i.mag();
                    this.dir.x = i.x / o, this.dir.y = i.y / o, o > this.max_r && (i.x = i.x / o * this.max_r, i.y = i.y / o * this.max_r), this.dir.mag() > .5 && o > 0 && (this.mainSelf.OffPos = this.dir), this.buttonNode.setPosition(i)
                }, this), this.mainSelf.node.on(cc.Node.EventType.TOUCH_START, function(e) {
                    var t = e.getLocation(),
                        i = this.mainSelf.node.convertToNodeSpaceAR(t);
                    this.node.setPosition(i)
                }, this)
            },
            start: function() {}
        }), cc._RF.pop()
    }, {
        "../../model/GameConfig": "GameConfig"
    }],
    use_reversed_rotateTo: [function(e, t) {
        "use strict";
        cc._RF.push(t, "16142aty4ZFBpA8RBwxcagf", "use_reversed_rotateTo"), cc.RotateTo._reverse = !0, cc._RF.pop()
    }, {}],
    winLongPanelCar: [function(e, t) {
        "use strict";
        cc._RF.push(t, "a0764oB4sROarEZH/2o6dN0", "winLongPanelCar"), e("../commonJs/PersonCtrl"), e("../managerJs/AdManager");
        var i = e("../managerJs/UIManager"),
            o = e("../model/GameConfig");
        e("../model/PersonData"), cc.Class({
            extends: cc.Component,
            properties: {
                bgLayer: cc.Node,
                stoneNode: cc.Node,
                viewNode: cc.Node,
                replay: cc.Node,
                nameLabel: cc.Label
            },
            onLoad: function() {
                this.gameHeight = cc.winSize.height, this.gameWidth = cc.winSize.width, this.Hscale = 1280 / this.gameHeight, this.Wscale = 720 / this.gameWidth, this.Hscale >= this.Wscale ? this.SizeScale = this.Wscale : this.SizeScale = this.Hscale, this.SizeScale > .86 && (this.SizeScale = .86), this.replay.opacity = 0, this.canTouchReplay = !1, this.canTouchShareVideo = !1, this.isCreateRole = !1, this.tempTime = 1e4, this.tailTime = 0, this.addBtnClick(), EventManager.addListener(EventData.SHARE_ADD_GLOD, this.shareAddGlod.bind(this), this.node)
            },
            onDestroy: function() {
                EventManager.removeListenerForTarget(this.node)
            },
            shareAddGlod: function() {},
            addBtnClick: function() {},
            start: function() {
                this.StoneFadeInAction()
            },
            StoneFadeInAction: function() {
                var e = this;
                this.bgLayer.opacity = 0, this.stoneNode.opacity = 0, this.bgLayer.runAction(cc.fadeTo(.3, 80)), this.stoneNode.runAction(cc.sequence(cc.delayTime(.1), cc.fadeIn(.5), cc.callFunc(function() {
                    e.CreateGaoTie()
                }, this)))
            },
            CreateGaoTie: function() {
                var e = this,
                    t = ToolsJs.clonePrefab("Panlong", this.viewNode, null, null, 20);
                t.angle = 180, t.position = cc.v2(0, this.gameHeight / 2 + 300), t.children[0].active = !0, t.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                    e.isCreateRole = !0
                }))), t.runAction(cc.sequence(cc.moveTo(1.5, this.stoneNode.position).easing(cc.easeQuadraticActionOut()), cc.callFunc(function() {
                    e.initReplay()
                }))), this.panlong = t
            },
            update: function(e) {
                this.updateCreateRole(e), this.updateCreateTail(e)
            },
            initReplay: function() {
                var e = this;
                this.replay.runAction(cc.fadeIn(.3)), cc.tween(this.node).delay(.3).call(function() {
                    e.canTouchReplay = !0
                }).start();
                var t = this.replay.getChildByName("tipSpr");
                this.replay.setPosition(cc.v2(0, -this.stoneNode.y - 150 - this.stoneNode.height / 2 * this.stoneNode.scale)), this.nameLabel.string = "\u9ad8 \u94c1", t.on("click", function() {
                    e.canTouchReplay && (console.log("\u70b9\u51fb\u91cd\u73a9"), audioTools.playAudio("btnClick"), e.isCreateRole = !1, e.canTouchReplay = !1, o.publicGameBool || adBreak({
                        type: "next",
                        name: "restart-game"
                    }), e.aginGame())
                })
            },
            openUI: function(e) {
                void 0 === e && (e = 0), this.addGlodNum = e
            },
            aginGame: function() {
                var e = this;
                this.replay.runAction(cc.fadeOut(.2)), this.stoneNode.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
                    e.panlong.runAction(cc.sequence(cc.moveTo(2, cc.v2(0, 2 * -e.gameHeight)).easing(cc.easeQuadraticActionIn()), cc.callFunc(function() {
                        o.GAME_OVER_BOOL = !0, o.gameScore = 0, i.CloseUI("winLongPanelCar"), loadTools.loadScene("CarGameScene")
                    })))
                })))
            },
            updateCreateRole: function(e) {
                if (this.isCreateRole && (this.tempTime += e, this.tempTime >= 1.5)) {
                    var t = this.createRole();
                    this.roleAni(t), this.tempTime = 1 * Math.random()
                }
            },
            createRole: function() {
                var e = ToolsJs.newSprite("role_" + ToolsJs.returnRandom(1, 8));
                return e.groupIndex = GroupIndexAll.UI, this.viewNode.addChild(e, 5), e.y = ToolsJs.returnRandom(this.stoneNode.y - this.stoneNode.height / 2, this.stoneNode.y + this.stoneNode.height / 2), e.x = Math.random() >= .5 ? this.gameWidth / 2 + e.width : -this.gameWidth / 2 - e.width, e
            },
            roleAni: function(e) {
                var t = e.x > 0 ? 1 : -1,
                    i = cc.v2(this.panlong.x + .5 * this.panlong.height * this.panlong.scale * t, this.panlong.y + ToolsJs.returnRandom(-100, 100)),
                    o = 1 + Math.random(),
                    a = Math.atan2(i.y - e.y, i.x - e.x);
                e.angle = cc.misc.radiansToDegrees(a), e.runAction(cc.sequence(cc.moveTo(o, i), cc.fadeOut(.2), cc.callFunc(function(e) {
                    e.destroy()
                })))
            },
            updateCreateTail: function() {
                if (this.panlong) {
                    var e = this.panlong.width * this.panlong.scale - 30,
                        t = Math.random() <= .5 ? this.panlong.x + e / 2 : this.panlong.x - e / 2,
                        i = ToolsJs.returnRandom(this.panlong.y, this.panlong.y + this.panlong.children[0].height),
                        o = t > this.panlong.x ? ToolsJs.returnRandom(60, 90) : ToolsJs.returnRandom(90, 120);
                    this.createTail(cc.v2(t, i), o)
                }
            },
            createTail: function(e, t) {
                void 0 === t && (t = null);
                var i = PoolManager.getPoolObj("tailPar");
                return i || (i = ToolsJs.newSprite("tail_" + ToolsJs.returnRandom(1, 3))), i.groupIndex = GroupIndexAll.UI, this.viewNode.addChild(i), i.position = e, i.scale = 0, i.opacity = ToolsJs.returnRandom(100, 200), i.angle = ToolsJs.returnRandom(0, 360), this.tailAni(i, .3, 1, t), i
            },
            tailAni: function(e, t, i, o) {
                void 0 === o && (o = null);
                var a = cc.v2(0, 0);
                if (null != o) {
                    var n = ToolsJs.returnRandom(100, 200),
                        r = cc.misc.degreesToRadians(o);
                    a = cc.v2(Math.cos(r) * n, Math.sin(r) * n)
                }
                e.runAction(cc.sequence(cc.spawn(cc.scaleTo(i / 2, t / 2), cc.moveBy(i / 2, cc.v2(a.x / 2, a.y / 2))), cc.spawn(cc.scaleTo(i / 2, t), cc.moveBy(i / 2), cc.fadeOut(i / 2)), cc.callFunc(function(e) {
                    PoolManager.addPoolObj("tailPar", e)
                })))
            }
        }), cc._RF.pop()
    }, {
        "../commonJs/PersonCtrl": "PersonCtrl",
        "../managerJs/AdManager": "AdManager",
        "../managerJs/UIManager": "UIManager",
        "../model/GameConfig": "GameConfig",
        "../model/PersonData": "PersonData"
    }],
    wordCtrl: [function(e, t) {
        "use strict";
        cc._RF.push(t, "23e55Zq+zFDD7HZHkOW/jRl", "wordCtrl");
        var i = {
            getRandomWrod: function() {
                return this.wordArr[ToolsJs.returnRandom(0, this.wordArr.length - 1)]
            },
            wordArr: ["\u4e07\u7269\u53ef\u671f", "\u9022\u8003\u5fc5\u8fc7", "\u8d22\u5bcc\u81ea\u7531", "\u725b\u6c14\u51b2\u5929", "\u591a\u5403\u4e0d\u80d6", "\u5e73\u5b89\u559c\u4e50", "\u6276\u6447\u76f4\u4e0a", "\u4e07\u4e8b\u987a\u9042", "\u672a\u6765\u53ef\u671f", "\u597d\u4e8b\u8fde\u8fde", "\u5b66\u795e\u9a7e\u5230", "\u5e74\u5e74\u6709\u4f59", "\u62db\u8d22\u8fdb\u5b9d", "\u5927\u5c55\u9e3f\u56fe", "\u559c\u6c14\u6d0b\u6d0b", "\u53cc\u559c\u4e34\u95e8", "\u8d22\u6e90\u6eda\u6eda", "\u5c81\u5c81\u5e73\u5b89", "\u5fc3\u60f3\u4e8b\u6210", "\u4e00\u5e06\u98ce\u987a", "\u4e00\u591c\u66b4\u5bcc", "\u606d\u559c\u53d1\u8d22", "\u4e07\u4e8b\u5982\u610f", "\u7b11\u9010\u989c\u5f00", "\u9e4f\u7a0b\u4e07\u91cc", "\u5e78\u798f\u65e0\u7586", "\u4e07\u4e8b\u80dc\u610f", "\u4e8b\u4e1a\u6709\u6210", "\u8f9e\u65e7\u8fce\u65b0", "\u5927\u5409\u5927\u5229", "\u4eba\u95f4\u9526\u9ca4", "YYDS", "\u6b27\u7687\u9644\u4f53", "\u6b27\u6c14\u7206\u68da", "\u9a6c\u5230\u6210\u529f", "\u65d7\u5f00\u5f97\u80dc", "\u91d1\u7389\u6ee1\u5802", "\u9f99\u51e4\u5448\u7965", "\u9616\u5bb6\u56e2\u5706", "\u98de\u9ec4\u817e\u8fbe", "\u529f\u6210\u540d\u5c31", "\u91d1\u699c\u9898\u540d", "\u82b1\u597d\u6708\u5706", "\u9f99\u9a6c\u7cbe\u795e", "\u8d22\u8fd0\u4ea8\u901a", "\u9c7c\u8dc3\u9f99\u95e8", "\u65b0\u6625\u4f73\u8282", "\u516b\u65b9\u6765\u8d22", "\u4e03\u661f\u9ad8\u7167", "\u4e94\u798f\u4e34\u95e8", "\u56db\u5b63\u5e73\u5b89", "\u4e09\u7f8a\u5f00\u6cf0", "\u4e8c\u9f99\u817e\u98de", "\u5341\u5168\u5341\u7f8e", "\u6b65\u6b65\u9ad8\u5347", "\u5409\u7965\u5982\u610f", "\u864e\u864e\u751f\u5a01", "\u559c\u4ece\u5929\u964d", "\u5347\u804c\u52a0\u85aa", "\u66b4\u7626\u5341\u65a4", "\u516d\u516d\u5927\u987a", "\u65e0\u5fe7\u65e0\u8651", "\u53cb\u8c0a\u4e07\u5c81", "\u864e\u864e\u751f\u8d22", "\u4eba\u751f\u8d62\u5bb6", , "\u624d\u8c8c\u53cc\u5168", "\u597d\u8fd0\u4e0d\u65ad", "\u989c\u503c\u5dc5\u5cf0", "\u8eab\u4f53\u5065\u5eb7", "\u559c\u6c14\u76c8\u95e8"]
        };
        window.wordCtrl = i, cc._RF.pop()
    }, {}]
}, {}, ["HttpManagerJs", "LanguageSetJs", "LoadSceneJs", "MainGameJS", "MainManage", "AniTools", "ToolsJs", "audioTools", "loadTools", "CarHomeGame", "carBoxItem", "effectCar", "enemyJSCar", "jianceJSCar", "playerJSCar", "rockerJSCar", "wordCtrl", "PersonCtrl", "mTool_WHQ", "resArr", "linkHttpIconJs", "AdManager", "EventManager", "PoolManager", "UIManager", "EventData", "GameConfig", "OtherConfig", "PersonData", "gameOverJs", "winLongPanelCar", "use_reversed_rotateTo"]);