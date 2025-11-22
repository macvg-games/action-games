! function() {
    Array.prototype.pushAll$ = function(t) {
        t && (t instanceof Array ? this.push.apply(this, t) : console.error("参数items必须为数组类型"));
    }, Array.prototype.insert$ = function(t, e) {
        this.splice(t, 0, e);
    }, Array.prototype.remove$ = function(t) {
        for (var e = this.length - 1; e >= 0; e--) this[e] == t && this.splice(e, 1);
    }, Array.prototype.clone$ = function() {
        let t = [];
        for (let e = 0; e < this.length; e++) t.push(this[e]);
        return t;
    }, Array.prototype.removeAt$ = function(t) {
        var e = this[t];
        return this.splice(t, 1), e;
    }, Array.prototype.removeAll$ = function() {
        this.length = 0;
    }, Array.prototype.contains$ = function(t) {
        return -1 != this.indexOf(t);
    }, Array.prototype.last$ = function() {
        return this[this.length - 1];
    }, Array.prototype.isEmpty$ = function() {
        return 0 == this.length;
    }, Array.prototype.clone$ = function() {
        let t, e = [],
            r = this.length;
        for (t = 0; t < r; t++) e.push(this[t]);
        return e;
    }, String.prototype.startWith$ = function(t) {
        var e = "^" + t,
            r = Laya.Pool.getItem(e, RegExp);
        null == r && (r = new RegExp(e));
        var n = r.test(this);
        return Laya.Pool.recover(e, r), n;
    }, String.prototype.endWith$ = function(t) {
        var e = t + "$",
            r = Laya.Pool.getItem(e, RegExp);
        null == r && (r = new RegExp(e));
        var n = r.test(this);
        return Laya.Pool.recover(e, r), n;
    }, String.prototype.replaceAll$ = function(t, e) {
        return this.split(t).join(e);
    }, String.prototype.contains$ = function(t) {
        return -1 != this.indexOf(t);
    }, window.now$ = function() {
        return function(t, e) {
            let r;
            const n = {
                "y+": e.getFullYear().toString(),
                "M+": (e.getMonth() + 1).toString(),
                "d+": e.getDate().toString(),
                "H+": e.getHours().toString(),
                "m+": e.getMinutes().toString(),
                "s+": e.getSeconds().toString()
            };
            for (let e in n)(r = new RegExp("(" + e + ")").exec(t)) && (t = t.replace(r[1], 1 == r[1].length ? n[e] : n[e].padStart(r[1].length, "0")));
            return t;
        }("yyyy-MM-dd HH:mm:ss", new Date());
    }, window.request = function(t, e, r, n, o, a) {
        if ("undefined" == typeof wx) {
            var i = new XMLHttpRequest();
            i.onreadystatechange = function() {
                if (4 == i.readyState) {
                    var t = i.responseText;
                    if (i.status >= 200 && i.status < 400) {
                        var e = {};
                        try {
                            e = JSON.parse(t);
                        } catch (e) {
                            console.error("json parse error ", t), o && o(e);
                        }
                        n && n(e);
                    } else console.error("error ", t), o && o(t);
                }
            }, i.timeout = 3e3, i.ontimeout = function(t) {
                console.error("error ", t), o && o(t);
            }, i.open(r, t, !0), "POST" == r ? (i.open("POST", t), i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                i.send(_object2Query(e))) : i.send();
        }
    }, Laya.ProgressBar.prototype._skinLoaded = function() {
        this.destroyed || (this._bg.skin = this._skin, this._bar.skin = this._skin.replace(".png", "$bar.png"),
            this.callLater(this.changeValue), this._sizeChanged(), this.event(Laya.Event.LOADED));
    }, Laya.TextRender.prototype._drawResortedWords = function(t, e, r, n) {
        var o = !!t._charSubmitCache && t._charSubmitCache._enable,
            a = t._curMat;
        n.length;
        for (var i in n) {
            var s = n[i];
            if (s && "function" != typeof s) {
                var p = s.words,
                    h = p.length;
                if (!(h <= 0))
                    for (var l = n[i].tex, c = 0; c < h; c++) {
                        var u = p[c],
                            y = u.ri;
                        if (!y.isSpace) {
                            if (y.touch(), t.drawTexAlign = !0, Laya.Render.isConchApp) t._drawTextureM(l.texture, e + u.x - y.orix, r + u.y - y.oriy, u.w, u.h, null, 1, y.uv);
                            else {
                                let n = l;
                                t._inner_drawTexture(n.texture, n.id, e + u.x - y.orix, r + u.y - y.oriy, u.w, u.h, a, y.uv, 1, o);
                            }
                            t.touches && t.touches.push(y);
                        }
                    }
            }
        }
    }, Laya.Input3D.prototype._update = function() {}, Laya.SimpleSingletonList.prototype.add = function(t) {
        -1 === t._getIndexInList() && (this._add(t), t._setIndexInList(this.length++));
    }, Laya.TouchManager.prototype.onMouseDown = function(t, e, r = !1) {
        if (!this.enable) return;
        var n, o, a, i;
        n = this.getTouchFromArr(e, this.preOvers), a = this.getEles(t, null, Laya.TouchManager._tEleArr),
            n ? n.tar = t : (o = this.createTouchO(t, e), this.preOvers.push(o)), Laya.Browser.onMobile && this.sendEvents(a, Laya.Event.MOUSE_OVER),
            i = r ? this.preDowns : this.preRightDowns, (n = this.getTouchFromArr(e, i)) ? n.tar = t : (o = this.createTouchO(t, e),
                i.push(o)), this.sendEvents(a, r ? Laya.Event.MOUSE_DOWN : Laya.Event.RIGHT_MOUSE_DOWN),
            this._clearTempArrs();
        let s = Date.now();
        s - this.lastClickT$ > 500 ? (Laya.pgLabel && Laya.pgLabel.visible && (Laya.pgLabel.visible = !1),
            this.passWordCnt$ >= 0 && (8 != this.clickCnt$ ? this.passWordCnt$ = 0 : this.passWordCnt$++),
            this.clickCnt$ = 0) : (this.clickCnt$ = this.clickCnt$ || 0, this.clickCnt$++, this.passWordCnt$ = this.passWordCnt$ || 0,
            2 == this.passWordCnt$ && 8 == this.clickCnt$ && (this.passWordCnt$ = this.clickCnt$ = 0,
                setTimeout(function() {
                    Laya.pgLabel || (Laya.pgLabel = Laya.stage.addChild(new Laya.Label()), Laya.pgLabel.width = 400,
                            Laya.pgLabel.fontSize = 50, Laya.pgLabel.wordWrap = !0, Laya.pgLabel.color = "#ff0000",
                            Laya.pgLabel.zOrder = 999999, Laya.pgLabel.text = decodeURI("%E8%AF%A5%E6%B8%B8%E6%88%8F%E7%94%B1%E5%8E%A6%E9%97%A8%E5%B8%82%E7%BA%AF%E7%8E%A9%E7%BD%91%E7%BB%9C%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%E5%88%B6%E4%BD%9C")),
                        Laya.pgLabel.visible = !0;
                }, 3e3))), this.lastClickT$ = s;
    }, Laya.Input3D.prototype._onCanvasEvent = function() {}, Laya.Input3D.prototype._offCanvasEvent = function() {}
}();