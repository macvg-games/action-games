! function() {
    "use strict";
    class e {}
    e.LAYER_BG$ = "bg", e.LAYER_MAINUI$ = "main_ui", e.LAYER_NORMAL$ = "normal", e.LAYER_TOP$ = "top",
        e.LAYER_MESSAGE$ = "msg";
    class t {
        constructor() {}
    }
    window.GameSetting = t, t.LOGIN_URL$ = "", t.HEARTBEAT$ = 1 / 0, t.ratio$ = 1, t.HAS_SDK$ = !1,
        t.SWITCH$ = {
            ONLINE$: !1,
            SHOW_PROTOCOL_LOG$: !1,
            AD_VIDEO$: !0
        }, t.SHOW_SCENE_COL$ = !0, t.GAME_SIGN$ = "br", t.LoginPlatform$ = "web", t.REPORT$ = !1,
        t.LOAD_DATA_JS$ = !0, t.startScene$ = "MainScene", t.ANGLE_1_RAD$ = 180 / Math.PI,
        t.RAD_1_ANGLE$ = Math.PI / 180, t.UI_SCENE_RATE$ = 100, t.SCENE_UI_RATE$ = 1 / t.UI_SCENE_RATE$,
        t.BODY_MODEL_DIS$ = .08, t.BODY_3D_RADIU$ = .1, t.BODY_3D_SCALE$ = .2, t.APPLE_3D_RADIU$ = .5,
        t.FRICTION_VALUE$ = .07, t.LEVS_CNT$ = 101, t.HAVE_OPEN_LEV$ = 14, t.MODEL_ID$ = {
            SEA$: 1001,
            WORM_HAED$: 1002,
            WORM_BODY$: 1003,
            APPLE_TARGET$: 1004,
            POO$: 1005,
            BACK_GROUND$: 1006,
            JUMP_WATER$: 1015,
            SEA_BUBBLE$: 1017,
            WORM_FART$: 1016,
            STAR_EFFECT$: 1018,
            DIE_BODY$: 1019,
            APPLE_LIGHT$: 1020,
            DIE_BODY_EFFECT$: 1021,
            BOMBS$: 1022,
            PLANK$: 1023,
            BOOM_EFFECT$: 1024,
            SAW$: 1025
        }, t.COL_GROUP$ = {
            PLACES$: -2,
            WORM_BODY$: -1,
            APPLE$: -3,
            POO$: -4,
            DIE_BODY$: -5,
            BOMBS$: -6,
            SAW$: -7
        }, t.ADSORPTION_POWER$ = {
            ROCK$: 160,
            ICE$: 50
        }, t.DIE_BODY_MAX$ = 10, t.COLLIDER_TYPE$ = {
            POLYGON$: 1,
            CIRCLE$: 2
        }, t.SOUND_ID$ = {
            MAIN_MUSIC$: 1,
            CLICK_UI$: 2
        }, t.AD_ADD_COIN$ = 200, t.CHECK_DIS$ = 50, t.MAP_SPACE$ = 1, t.CONTROL_MODE$ = {
            LEFT$: 1,
            RIGHT$: 2,
            FLOAT$: 3,
            TOUCH$: 4
        }, t.TOUCH_MAX_RADIUS$ = 100, t.HEAD_BODY_GRAVITY$ = 10, t.LEFT_ROCKER_POSX$ = 50,
        t.LEFT_ROCKER_POSY$ = 170, t.RIGHT_ROCKER_POSX$ = 50, t.RIGHT_ROCKER_POSY$ = 170,
        t.SCORE_DIC$ = {
            tree: 2,
            CarRed: 2,
            CarYellow: 2,
            CarBlue: 2,
            Shop1: 5,
            Shop2: 5,
            Shop3: 5,
            Shop4: 5,
            Shop5: 5,
            Shop6: 5,
            HouseRed: 5,
            HouseGreen: 5,
            TownHouseGreen: 5,
            TownHouseBlue: 5,
            TownHouseYellow: 5,
            OfficeMediumBlue: 10,
            OfficeMediumBrown: 10,
            OfficeMediumBrown: 10,
            OfficeStepped: 10,
            OfficeLargeBrown: 30,
            OfficeLargeDark: 30,
            OfficeLargeBrown: 30,
            OfficeLargeBrown2: 30,
            Station: 30,
            Tower: 100,
            Windmill: 100,
            Stadium: 100
        }, t.LEVEL_COIN$ = [10, 10, 15, 15, 18, 18];
    let s = 0,
        a = 0,
        n = 0;
    class o extends Laya.Vector3 {
        static rotateX$(e, t, i, o) {
            s = e.x - t.x, a = e.y - t.y, n = e.z - t.z;
            const r = Math.cos(i),
                $ = Math.sin(i),
                h = s,
                l = a * r - n * $,
                d = a * $ + n * r;
            return o.x = h + t.x, o.y = l + t.y, o.z = d + t.z, o;
        }
        static rotateY$(e, t, i, o) {
            s = e.x - t.x, a = e.y - t.y, n = e.z - t.z;
            const r = Math.cos(i),
                $ = Math.sin(i),
                h = n * $ + s * r,
                l = a,
                d = n * r - s * $;
            return o.x = h + t.x, o.y = l + t.y, o.z = d + t.z, o;
        }
        static rotateZ$(e, t, i, o) {
            s = e.x - t.x, a = e.y - t.y, n = e.z - t.z;
            const r = Math.cos(i),
                $ = Math.sin(i),
                h = s * r - a * $,
                l = s * $ + a * r,
                d = n;
            return o.x = h + t.x, o.y = l + t.y, o.z = d + t.z, o;
        }
        static negate$(e, t) {
            return t.x = -e.x, t.y = -e.y, t.z = -e.z, t;
        }
        static moveTowards$(e, t, i, s) {
            let a = t.x - e.x,
                n = t.y - e.y,
                o = t.z - e.z,
                r = a * a + n * n + o * o;
            if (0 == r || i >= 0 && r <= i * i) return t;
            let $ = Math.sqrt(r);
            return s.setValue(e.x + a / $ * i, e.y + n / $ * i, e.z + o / $ * i), s;
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        }
        lengthSqr() {
            return this.x * this.x + this.y * this.y + this.z * this.z;
        }
    }
    o.ZERO$ = Object.freeze(new Laya.Vector3(0, 0, 0)), o.ONE$ = Object.freeze(new Laya.Vector3(1, 1, 1)),
        o.UnitX$ = Object.freeze(new Laya.Vector3(1, 0, 0)), o.UnitY$ = Object.freeze(new Laya.Vector3(0, 1, 0)),
        o.UnitZ$ = Object.freeze(new Laya.Vector3(0, 0, 1));
    class r {
        constructor() {}
        static removeArrayElement$(e, t) {
            if (e && e instanceof Array)
                for (var i = e.length; --i > -1;) e[i] == t && e.splice(i, 1);
        }
        static removeArrayElementAt$(e, t) {
            e && e instanceof Array && e.splice(t, 1);
        }
        static arrayContains$(e, t) {
            return !!(e && e instanceof Array) && -1 != e.indexOf(t);
        }
        static getChildDeep$(e, t, i) {
            var s = e.getChildByName(t);
            if (s) return s;
            if (i && e.name.startsWith(t)) return e;
            for (var a = 0; a < e._children.length; a++)
                if (s = r.getChildDeep$(e._children[a], t, i)) return s;
        }
        static getChildArrayDeep$(e, t) {
            let i = [];
            e.name == t && i.push(e);
            let s, a = e._children.length;
            for (; --a > -1;)(s = r.getChildArrayDeep$(e._children[a], t)) && i.pushAll$(s);
            return i;
        }
        static getAvater$(e) {
            if (!e || !e.getComponent) return null;
            let t = null;
            if (e.getComponent(Laya.Animator)) t = e;
            else {
                let i = e._children,
                    s = 0,
                    a = i.length;
                for (; s < a && !(t = r.getAvater$(i[s])); s++);
            }
            return t;
        }
        static clamp$(e, t, i) {
            return Math.max(e, Math.min(t, i));
        }
        static formatDateStr$(e) {
            return e.format("yyyy-MM-dd hh:mm");
        }
        static getZeroTime$() {
            return Date.parse(new Date().toDateString());
        }
        static floatRange$(e, t) {
            return Math.random() * (t - e) + e;
        }
        static randomChance$(e) {
            return e >= Math.random();
        }
        static intRange$(e, t) {
            return Math.floor(Math.random() * (t - e) + e);
        }
        static getSkinPathById$(e) {
            var t = D.SpritePath[e];
            return t || (t = D.SpritePath[100]), t.chs;
        }
        static setImgColorFilter$(e, t) {
            var i = new Laya.ColorFilter(e);
            t.filters = [i];
        }
        static arrayRandom$(e) {
            return e[r.intRange$(0, e.length)];
        }
        static shiftRandom$(e) {
            var t = r.intRange$(0, e.length),
                i = e[t];
            return e.removeAt(t), i;
        }
        static randomIndexByWeight$(e, t) {
            if (!t) {
                t = 0;
                for (var i = 0; i < e.length; i++) t += e[i];
            }
            for (var s = r.intRange$(0, t + 1), a = 0; a < e.length; a++)
                if ((s -= e[a]) <= 0) return a;
            return 0;
        }
        static getStrParam$(e) {
            var t = D.CommonParameter[e];
            return t ? t.Value : "";
        }
        static getNumberParam$(e) {
            return Number(r.getStrParam$(e));
        }
        static sendParamHttp$(e, t, i) {
            var s = new Laya.HttpRequest();
            s._loadedSize = 0, s._totalSize = 5e6, s.once(Laya.Event.COMPLETE, r, r.onHttpCompelete$, [s, i]);
            for (key in t) e += r.stringFormat$("&{0}={1}", [key, t[key]]);
            s.send(e, null, "get", "text");
        }
        static onHttpCompelete$(e, t) {
            t && t.runWith(e.data);
        }
        static setShowName$(e, t, i) {
            if (e) {
                var s;
                i || (e.text = "", i = e.width); //textField.textWidth
                var a = t.length;
                for (e.text = "", s = 0; s < a; s++)
                    if (e.text += t.charAt(s), e.textField.textWidth > i) return void(e.text = t.substring(0, s));
                e.text = t;
            }
        }
        static getHgLanguage$() {
            if ("undefined" != typeof hg) switch (hg.getSystemInfoSync().language) {
                case "hi":
                    return "hi";

                case "en-us":
                    return "en";

                case "id":
                    return "id";

                case "th":
                    return "th";

                case "vi":
                    return "vi";

                case "pt-br":
                    return "pt";

                default:
                    return "en";
            }
            return "en";
        }
        static getString$(e, t) {
            if (!D.GameText[e]) return e + t;
            let i = "chinese";
            if ("undefined" != typeof hg) switch (i = hg.getSystemInfoSync().language) {
                case "hi":
                    i = "hindi";
                    break;

                case "en-us":
                    i = "english";
                    break;

                case "id":
                    i = "indonisian";
                    break;

                case "th":
                    i = "thai";
                    break;

                case "vi":
                    i = "vietnamese";
                    break;

                case "pt-br":
                    i = "portuguese";
            }
            var s = D.GameText[e][i];
            return s ? t ? r.stringFormat$(s, t) : s : D.GameText[0].chs;
        }
        static stringFormat$(e, t) {
            if (!e) return t;
            var i = e;
            if (t)
                for (var s = 0; s < t.length; s++) i = i.replaceAll("{" + s + "}", t[s]);
            return i;
        }
        static onButtonScaleEvent$(e, t, i, s) {
            !e.defaultScale && (e.defaultScale = {
                    scaleX: e.scaleX || 1,
                    scaleY: e.scaleY || 1
                }), e.on(Laya.Event.MOUSE_DOWN, r, r._onScaleBtnDown), e.on(Laya.Event.ROLL_OUT, r, r._onScaleBtnOut),
                e.on(Laya.Event.MOUSE_UP, r, r._onScaleBtnUp), e.on(Laya.Event.CLICK, r, r._onScaleBtnClick, [t, i]),
                e._sound = s;
        }
        static _onScaleBtnClick(e, i, s) {
            r.shakePhone$();
            try {
                e && e[i] && e[i](s), Laya.CyzClassMap$.AudioManager.getInstance$().playSound$(s.target._sound || t.SOUND_ID$.CLICK_UI$);
            } catch (e) {
                console.log(e.stack);
            }
            s.stopPropagation();
        }
        static _onScaleBtnDown(e) {
            e.target.scale(1.1 * e.target.defaultScale.scaleX, 1.1 * e.target.defaultScale.scaleY),
                e.stopPropagation();
        }
        static _onScaleBtnOut(e) {
            e.currentTarget.scale(1 * e.target.defaultScale.scaleX, 1 * e.target.defaultScale.scaleY),
                e.stopPropagation();
        }
        static _onScaleBtnUp(e) {
            e.target.scale(1 * e.target.defaultScale.scaleX, 1 * e.target.defaultScale.scaleY),
                e.stopPropagation();
        }
        static onButtonEvent$(e, t, i) {
            e && (e.on(Laya.Event.MOUSE_DOWN, t, r._onBtnDown), e.on(Laya.Event.ROLL_OUT, t, r._onBtnOut),
                e.on(Laya.Event.MOUSE_UP, t, r._onBtnUp), e.on(Laya.Event.CLICK, t, r._onBtnClick, [t, i]));
        }
        static _onBtnClick(e, t, i) {
            r.shakePhone$();
            try {
                e && e[t] && e[t](i);
            } catch (e) {
                console.log(e.stack);
            }
            i.stopPropagation();
        }
        static _onBtnDown(e) {
            e.stopPropagation();
        }
        static _onBtnOut(e) {
            e.stopPropagation();
        }
        static _onBtnUp(e) {
            e.stopPropagation();
        }
        static onEvent(e, t) {
            t.on(Laya.Event.MOUSE_DOWN, e, e.onMouseEventHandler), t.on(Laya.Event.ROLL_OUT, e, e.onMouseEventHandler),
                t.on(Laya.Event.MOUSE_UP, e, e.onMouseEventHandler), t.on(Laya.Event.CLICK, e, e.onMouseEventHandler);
        }
        static offEvent(e, t) {
            t.off(Laya.Event.MOUSE_DOWN, e, e.onMouseEventHandler), t.off(Laya.Event.ROLL_OUT, e, e.onMouseEventHandler),
                t.off(Laya.Event.MOUSE_UP, e, e.onMouseEventHandler), t.off(Laya.Event.CLICK, e, e.onMouseEventHandler);
        }
        static formatTime(e, t) {
            var i = Math.floor(e / 60);
            if (e %= 60, !t || i < 60) return r.timeNumberFormat(i) + ":" + r.timeNumberFormat(e);
            var s = Math.floor(i / 60);
            return i %= 60, s + ":" + r.timeNumberFormat(i) + ":" + r.timeNumberFormat(e);
        }
        static timeNumberFormat(e) {
            return (e < 10 ? "0" : "") + parseInt(e);
        }
        static isToDay$(e) {
            let t = new Date(),
                i = t.toDateString();
            return t.setTime(e), t.toDateString() == i;
        }
        static setVector3(e, t, i, s) {
            e.x = t, e.y = i, e.z = s;
        }
        static resetScale(e) {
            if (!e) return;
            let t = e.transform.localScale.clone();
            e.transform.localScale = new Laya.Vector3(0, 0, 0), e.transform.localScale = t;
            let i = e._children,
                s = i ? i.length : 0;
            for (; --s > -1;) r.resetScale(i[s]);
        }
        static copyVector3(e, t) {
            t.x = e.x, t.y = e.y, t.z = e.z;
        }
        static getV3Length$(e) {
            return Math.sqrt(Math.pow(e.x, 2) + Math.pow(e.y, 2) + Math.pow(e.z, 2));
        }
        static isLineIntersect(e, t, i, s) {
            var a = this.cross(e, t, i),
                n = this.cross(e, t, s),
                o = this.cross(i, s, e),
                r = this.cross(i, s, t);
            return !(a * n > 0 || o * r > 0) && (0 !== a || 0 !== n || this.rectsIntersect(e, t, i, s));
        }
        static cross(e, t, i) {
            return (i.x - e.x) * (t.y - e.y) - (i.y - e.y) * (t.x - e.x);
        }
        static rectsIntersect(e, t, i, s) {
            return Math.min(e.y, t.y) <= Math.max(i.y, s.y) && Math.max(e.y, t.y) >= Math.min(i.y, s.y) && Math.min(e.x, t.x) <= Math.max(i.x, s.x) && Math.max(e.x, t.x) >= Math.min(i.x, s.x);
        }
        static isLineInCircle(e, t, i, s, a) {
            return !(!this.isInCircle$(e, i, s, a) && !this.isInCircle$(t, i, s, a)) || (e.x === t.x ? (n = 1,
                o = 0, r = -e.x) : e.y === t.y ? (n = 0, o = 1, r = -e.y) : (n = e.y - t.y, o = t.x - e.x,
                r = e.x * t.y - e.y * t.x), $ = n * i + o * s + r, !(($ *= $) > (n * n + o * o) * a * a) && (h = (i - e.x) * (t.x - e.x) + (s - e.y) * (t.y - e.y),
                l = (i - t.x) * (e.x - t.x) + (s - t.y) * (e.y - t.y), h > 0 && l > 0));
            var n, o, r, $, h, l;
        }
        static getPolygonColClosePos$(e, t, i) {
            let s, a, n, o, r, $, h, l = i.points,
                d = null;
            for (s = 0, a = l.length; s < a; s++)
                if (n = l[s], o = l[s == a - 1 ? 0 : s + 1],
                    this.isLineInCircle(n, o, e.x, e.y, t)) {
                    let t = new Laya.Point(n.x - o.x, n.y - o.y),
                        i = Math.sqrt(Math.pow(t.x, 2) + Math.pow(t.y, 2)),
                        s = ((e.x - n.x) * t.x + (e.y - n.y) * t.y) / i,
                        a = new Laya.Point();
                    Laya.Vector2.normalize(t, a);
                    let l = new Laya.Point(n.x + a.x * s, n.y + a.y * s),
                        c = Math.sqrt(Math.pow(l.x - o.x, 2) + Math.pow(l.y - o.y, 2));
                    $ = Math.abs(s) + c <= i + 1e-6 ? l : Math.abs(s) < c ? n : o, h = Math.pow($.x - e.x, 2) + Math.pow($.y - e.y, 2),
                        (null == d || h < r) && (d = $, r = h);
                }
            return d;
        }
        static getCircleColClosePos$(e, t, i) {
            if (Math.pow(e.x - i.cX, 2) + Math.pow(e.y - i.cY, 2) > Math.pow(t + i.r, 2)) return null;
            let s = new Laya.Vector2(e.x - i.cX, e.y - i.cY);
            return Laya.Vector2.normalize(s, s), s.x = s.x * i.r + i.cX, s.y = s.y * i.r + i.cY,
                s;
        }
        static isInCircle$(e, t, i, s) {
            return (e.x - t) * (e.x - t) + (e.y - i) * (e.y - i) <= s * s;
        }
        static getPolygonVertex$(e, i, s, a, n) {
            var o = Math.cos(s * t.RAD_1_ANGLE$),
                r = Math.sin(s * t.RAD_1_ANGLE$);
            if (a)
                for (var $, h, l, d = a.length; --d > -1;)($ = a[d]) && (h = $.x, l = $.y,
                    n[d] = {
                        x: e + h * o - l * r,
                        y: i + h * r + l * o
                    });
        }
        static isPointInPolygon$(e, t) {
            for (var i, s, a, n, o, r, $ = 0, h = t.length; --h > -1;) o = t[h], r = t[0 === h ? t.length - 1 : h - 1],
                i = (o.y - r.y) / (o.x - r.x), s = r.x <= e.x && e.x < o.x, a = o.x <= e.x && e.x < r.x,
                n = e.y < i * (e.x - r.x) + r.y, (s || a) && n && $++;
            return $ % 2 != 0;
        }
        static rotateVec2Angle$(e, i, s) {
            let a = s * t.RAD_1_ANGLE$;
            var n = Math.cos(a),
                o = Math.sin(a);
            return [e * n - i * o, e * o + i * n];
        }
        static checkTwoRectCollide$(e, t, i) {
            for (var s, a = 4; --a > -1;)
                for (s = 4; --s > -1;)
                    if (r.isLineIntersect(e[a], e[0 === a ? 3 : a - 1], t[s], t[0 === s ? 3 : s - 1])) return !i || r.getPoint$(e[a], e[0 === a ? 3 : a - 1], t[s], t[0 === s ? 3 : s - 1]);
            return !1;
        }
        static getPoint$(e, t, i, s) {
            let a = e.x,
                n = e.y,
                o = t.x,
                r = t.y,
                $ = i.x,
                h = i.y,
                l = s.x,
                d = s.y,
                c = ((o - a) * (h - n) - ($ - a) * (r - n)) / ((o - a) * (h - d) - ($ - l) * (r - n));
            return {
                x: $ + c * (l - $),
                y: h + c * (d - h)
            };
        }
        static checkCircleBoxCollide$(e, t, i, s) {
            if (s) {
                for (var a = s.length; --a > -1;)
                    if (r.isLineInCircle(s[a], s[0 === a ? s.length - 1 : a - 1], e, t, i)) return !0;
                return r.isPointInPolygon$({
                    x: e,
                    y: t
                }, s);
            }
            return !1;
        }
        static getBoxColliderVertexs$(e, t, i, s) {
            let a = [{
                    x: e.offsetX,
                    y: e.offsetY
                }, {
                    x: e.offsetX + e.w,
                    y: e.offsetY
                }, {
                    x: e.offsetX + e.w,
                    y: e.offsetY + e.h
                }, {
                    x: e.offsetX,
                    y: e.offsetY + e.h
                }],
                n = [];
            return r.getPolygonVertex$(t, i, s, a, n), n;
        }
        static get3dX$(e) {
            return -e * t.SCENE_UI_RATE$;
        }
        static get3dY$(e) {
            return -e * t.SCENE_UI_RATE$;
        }
        static getWorldMatrix4x4$(e) {
            var t = new Laya.Vector3();
            Laya.Vector3.cross(Laya.Vector3._Up, e, t);
            var i = new Laya.Vector3();
            Laya.Vector3.cross(e, t, i);
            var s = new Laya.Matrix4x4(),
                a = s.elements;
            return a[0] = t.x, a[1] = t.y, a[2] = t.z, a[4] = i.x, a[5] = i.y, a[6] = i.z, a[8] = e.x,
                a[9] = e.y, a[10] = e.z, s;
        }
        static getColor16Str$(e, t, i) {
            return "#" + this.getColorValue16Str$(e) + this.getColorValue16Str$(t) + this.getColorValue16Str$(i);
        }
        static getColorValue16Str$(e) {
            let t = Math.floor(255 * e).toString(16);
            return 1 == t.length && (t = "0" + t), t;
        }
        static shakePhone$(e, t) {
            if (Laya.CyzClassMap$.AudioManager.getInstance$().getShakeSwitch$() && (t || !(Date.now() - 50 < this.lastShakeT)))
                if (this.lastShakeT = Date.now(),
                    window.wx) e ? wx.vibrateLong() : wx.vibrateShort();
                else if (window.qg) e ? qg.vibrateLong() : qg.vibrateShort();
            else {
                if (!window.navigator.vibrate) return;
                window.navigator.vibrate(500);
            }
        }
        static getPosIdx$(e) {
            return Math.floor(e / t.MAP_SPACE$);
        }
        static getChannel$() {
            switch (conf.channel) {
                case "wx":
                    return "Wx";

                case "oppo":
                    return "Oppo";

                case "vivo":
                    return "Vivo";

                case "qq":
                    return "Qq";

                case "tt":
                    return "Tt";
            }
            return "";
        }
        static dateFormat$(e, t) {
            let i;
            const s = {
                "y+": t.getFullYear().toString(),
                "M+": (t.getMonth() + 1).toString(),
                "d+": t.getDate().toString(),
                "h+": t.getHours().toString(),
                "m+": t.getMinutes().toString(),
                "s+": t.getSeconds().toString()
            };
            for (let t in s)(i = new RegExp("(" + t + ")").exec(e)) && (e = e.replace(i[1], 1 == i[1].length ? s[t] : s[t].padStart(i[1].length, "0")));
            return e;
        }
        static wordToStagePos$(e, t, i) {
            return i = i || new Laya.Vector2(), r.vec4$ || (r.vec4$ = new Laya.Vector4()), e.worldToViewportPoint(t, r.vec4$),
                isNaN(r.vec4$.x) || isNaN(r.vec4$.y) ? (i.x = i.y = -1e3, i) : (r.isInViewPort$(e, t) ? (i.x = r.vec4$.x,
                        i.y = r.vec4$.y) : (i.x = Laya.stage.width - r.vec4$.x, i.y = Laya.stage.height - r.vec4$.y),
                    i);
        }
        static isInViewPort$(e, t) {
            return r.vec3$ || (r.vec3$ = new Laya.Vector3()), r.vec3_2$ || (r.vec3_2$ = new Laya.Vector3()),
                e.transform.getForward(r.vec3$), Laya.Vector3.subtract(t, e.transform.position, r.vec3_2$),
                Laya.Vector3.dot(r.vec3$, r.vec3_2$) >= 0;
        }
        static getRoundPosition$(e, t, i) {
            let s = t + (i - t) * Math.random();
            return $.setValue(s, 0, 0), o.rotateY$($, new Laya.Vector3(0, 0, 0), toRadian(360 * Math.random()), $),
                Laya.Vector3.add($, e, $), $.clone();
        }
        static copyVector3Prop$(e, t, i, s, a) {
            let n = e[t];
            n.x = i, n.y = s, n.z = a, e[t] = n;
        }
    }
    var $ = new Laya.Vector3();
    class h extends Laya.EventDispatcher {
        constructor() {
            super(), this.inited$ = !1, this.initedCB$ = void 0, window.eventManager = this;
        }
        static getInstance$() {
            return null == h.instance$ && (h.instance$ = new h()), h.instance$;
        }
        get isInited$() {
            return this.inited$;
        }
        init$(e) {
            this.initedCB$ = e, this.initComplete();
        }
        initComplete() {
            this.inited$ = !0, this.initedCB$ && this.initedCB$();
        }
        addEventListener$(e, t, i, s) {
            this.on(e, t, i, s);
        }
        removeEventListener$(e, t, i) {
            this.off(e, t, i);
        }
        dispatchEvent$(e, t) {
            var i = {
                data: t,
                name: e
            };
            this.event(e, i), i = null;
        }
    }
    h.instance$ = void 0;
    class l {
        constructor() {
            this.inited$ = !1, this.initedCB$ = void 0, this.uis$ = {}, this.layers$ = {}, this.baseWindowClass$ = Laya.CyzClassMap$.BaseWindow,
                window.uiMgr = this;
        }
        static getInstance$() {
            return null == l.instance$ && (l.instance$ = new l()), l.instance$;
        }
        get isInited$() {
            return this.inited$;
        }
        init$(t) {
            this.initedCB$ = t;
            var i = 0,
                s = this.createBox$();
            Laya.stage.addChild(s), this.layers$[e.LAYER_BG$] = s, i += 100, s.zOrder = i;
            var a = this.createBox$();
            Laya.stage.addChild(a), this.layers$[e.LAYER_MAINUI$] = a, i += 100, a.zOrder = i;
            var n = this.createBox$();
            Laya.stage.addChild(n), this.layers$[e.LAYER_NORMAL$] = n, i += 100, n.zOrder = i;
            var o = this.createBox$();
            Laya.stage.addChild(o), this.layers$[e.LAYER_TOP$] = o, i += 100, o.zOrder = i;
            var r = this.createBox$();
            Laya.stage.addChild(r), this.layers$[e.LAYER_MESSAGE$] = r, i += 100, r.zOrder = i,
                this.initRightTopCloseBtn$(), this.initComplete$();
        }
        initRightTopCloseBtn$() {}
        onClickRightTopCloseBtn$() {}
        setRightTopCloseBtnShow$(e) {}
        createBox$() {
            var e = new Laya.Box();
            return e.left = 0, e.right = 0, e.top = 0, e.bottom = 0, e.mouseThrough = !0, e;
        }
        initComplete$() {
            this.inited$ = !0, this.initedCB$ && this.initedCB$();
        }
        getUI$(e) {
            var t = this.uis$[e.className$];
            return t && t.last$();
        }
        openUI$(e, t, i) {
            if (e.uiConfig$.only && this.getUI$(e)) return t && t(), this.getUI$(e);
            var s = this.createSurrenal$(e);
            Laya.loader.create(e.url, Laya.Handler.create(this, a => {
                if (e.uiConfig$.only && this.getUI$(e)) return;
                let n = new Laya.Prefab();
                n.json = a;
                let o = n.create(),
                    r = o.getComponent(e);
                r.init(i, t, s), this.uis$[e.className$] || (this.uis$[e.className$] = []), this.uis$[e.className$].push(r);
                let $ = e.uiConfig$.layer,
                    h = this.layers$[$];
                h && h.addChild(o);
            }));
        }
        createComp$(e, t, i, ...s) {
            Laya.loader.create(t.url, Laya.Handler.create(this, a => {
                if (e.destroyed) return;
                let n = new Laya.Prefab();
                n.json = a;
                let o = n.create();
                o.getComponent(t).init(s, i), e && e.addChild(o);
            }));
        }
        createPrefab$(e, t, i) {
            Laya.loader.create(e, Laya.Handler.create(this, e => {
                if (t.destroyed) return;
                let s = new Laya.Prefab();
                s.json = e;
                let a = s.create();
                t && t.addChild(a), i && i(a);
            }));
        }
        createSurrenal$(e) {
            if (!e.uiConfig$.needUISurrenal) return null;
            var t = e.uiConfig$.layer,
                i = this.createBox$();
            i.mouseThrough = !1;
            var s = this.layers$[t];
            return s && s.addChild(i), r.onButtonEvent$(i), i;
        }
        getLayer$(e) {
            return this.layers$[e];
        }
        closeUI$(e) {
            var t = this.uis$[e.constructor.className$];
            t && t.remove$(e), e.owner.destroy();
        }
        closeAll$() {
            for (var e in this.uis$) {
                var t = this.uis$[e];
                if (!(t instanceof Array)) continue;
                let s = t.length;
                for (; --s > -1;) {
                    var i = t[s];
                    i instanceof this.baseWindowClass$ && !i.constructor.uiConfig$.notClose && (i.destroy$(),
                        t.removeAt$(s));
                }
            }
        }
        static showTips$(e) {
            l.getInstance$().openUI$(Laya.classWithChannel$("TipsUI"), void 0, e);
        }
    }
    l.instance$ = void 0;
    class d extends Laya.Script {
        constructor() {
            super(), this.finishCb$ = void 0, this._events$ = [], this._bannerActIndex$ = void 0;
        }
        onStart() {
            this.owner.visible = !1, this.constructor.uiConfig$.bannerId || this.onUILoad$();
        }
        onUILoad$() {
            this._isClosed$ || (this.owner.visible = !0, this.uiSurrenal$ && this.uiSurrenal$.destroy(),
                this.uiSurrenal$ = void 0, Laya.timer.callLater(this, function() {
                    this.finishCb$ && this.finishCb$(this.ui);
                }));
        }
        initData$() {}
        monitorBtns$() {}
        init(e, t, i) {
            this.args$ = e, this.finishCb$ = t, this.uiSurrenal$ = i, this.initData$();
        }
        addEventListener$(e, t) {
            h.getInstance$().addEventListener$(e, this, t), this._events$.push({
                e: e,
                cn: t
            });
        }
        removeEventListener$(e, t) {
            for (var i, s = this._events$.length; --s > -1;)
                if ((i = this._events$[s]).e == e && i.cn == t) {
                    this._events$.removeAt(s);
                    break;
                }
        }
        removeAllEventListener$() {
            for (var e; this._events$.length;) e = this._events$.shift(), h.getInstance$().removeEventListener$(e.e, this, e.cn);
            this._events$ = [];
        }
        createBannerByUI$(e, t) {
            this._bannerUI$ = e;
        }
        hideBanner$() {}
        rebackBanner$() {
            this._bannerActIndex$ = void 0;
        }
        refreshBanner$() {
            this.bannerChangeCnt--, this.bannerChangeCnt < 0 || (Laya.timer.once(this.bannerChangeSpacing, this, this.refreshBanner$),
                1 == bannerState && (this.isLoadingNewBanner || (this.isLoadingNewBanner = !0)));
        }
        onLoadedNewBanner$(e) {
            this.isLoadingNewBanner = !1, e && 1 == bannerState && (this._bannerUI$.destroyed || (this.rebackBanner$(),
                this.bannerId = this.nextBannerId, this.createBannerByUI$(this._bannerUI$)));
        }
        doClose$() {
            this._isClosed$ || (this.uiSurrenal$ && this.uiSurrenal$.destroy(), this.uiSurrenal$ = void 0,
                this.rebackBanner$(), this._isClosed$ = !0, this.removeAllEventListener$(), Laya.timer.clearAll(this),
                l.getInstance$().closeUI$(this), this.args$ && this.args$.closeHandler && this.args$.closeHandler.run());
        }
        destroy$() {
            this.doClose$();
        }
    }
    d.url = "", d.className$ = "", d.uiConfig$ = {
        layer: e.LAYER_NORMAL$,
        only: !0,
        needUISurrenal: !0,
        notClose: !1,
        bannerId: void 0
    };
    class c {}
    c.SCREEN_SIZE_CHANGE$ = 1, c.MUSIC_VOLUME$ = 2, c.SOUND_VOLUME$ = 3, c.ON_EXIT_GAME$ = 4,
        c.ON_SHOW_GAME$ = 5, c.COLLIDER_ENTER$ = "colliderEnter", c.COLLIDER_STAY$ = "colliderStay",
        c.COLLIDER_EXIT$ = "colliderExit", c.TRIGGER_ENTER$ = "triggerEnter", c.TRIGGER_STAY$ = "triggerStay",
        c.TRIGGER_EXIT$ = "triggerExit", c.BANNER_ERROR$ = "banner_error", c.ON_VIDEO_SHOW$ = "on_video_show",
        c.ON_VIDEO_HIDE$ = "on_video_hide", c.ON_DATA_LOAD$ = 1002, c.ON_START_GAME$ = 1003,
        c.REST_FIGHT$ = 1004, c.INPUT_MOUSE_DOWN$ = 1010, c.INPUT_MOUSE_MOVE$ = 1011, c.INPUT_MOUSE_UP$ = 1012,
        c.FIGHT_FAIL$ = 1013, c.FIGHT_WIN$ = 1014, c.COIN_CHANGE$ = 1016, c.SCORE_CHANGE$ = 1017,
        c.ADD_SCORE$ = 1018, c.RELIVE$ = 1020, c.SCENE_LOADED$ = 1021, c.ASK_CHANGE_CAMERA_POS$ = 1022,
        c.LOADING_COMPLETE$ = 1027, c.ASK_GAME_OVER$ = 1028, c.OPEN_SHOP_SCENE$ = 1029,
        c.CLOSE_SHOP_SCENE$ = 1030, c.ROLE_SKIN_CHANGE$ = 1031, c.DIEBODY_DISAPPEAR$ = 1032,
        c.EAT_APPLE$ = 1033, c.IS_ON_ICE$ = 1034, c.IS_OUT_ICE$ = 1035, c.SHOW_TIPS$ = 1036,
        c.HIDE_TIPS$ = 1037, c.JUMP_WATER$ = 1038, c.TIPS_UPDATE$ = 1039, c.OPEN_TIPS_SCENE$ = 1040,
        c.CLOSE_TIPS_SCENE$ = 1041, c.WORM_BOOMED$ = 1042, c.SAW_TOUCH$ = 1043, c.ON_NET_FAILD$ = 2e3,
        c.ON_REGISTER_FINISH$ = 2001, c.ON_LOGINGAME_FINISH$ = 2002, c.ON_SERVER_LIST_FINISH$ = 2003,
        c.ON_UPDATE_WX_USERINFO$ = 2004;
    class g {
        constructor() {}
        static init() {
            h.getInstance$().addEventListener$(c.SCREEN_SIZE_CHANGE$, null, g.onResize$);
        }
        static createUIModel$(e, t, i) {
            g.uiModelDic$ || (g.uiModelDic$ = {}, g.uiModelMaxId$ = 0), e.UMId || (e.UMId = ++g.uiModelMaxId$);
            g.getUIData$(e, !0);
            return Laya.CyzClassMap$.UIMode3D.create$(e, t, i);
        }
        static onResize$() {
            g.resizeScenes$();
        }
        static resizeScenes$() {
            if (!g.uiModelDic$) return;
            let e;
            for (e in g.uiModelDic$) g.resizeScene$(g.uiModelDic$[e]);
        }
        static getUIData$(e, t) {
            let i = g.uiModelDic$[e.UMId];
            if (!i && t) {
                g.uiModelDic$[e.UMId] = i = {};
                let t = e.addChild(new Laya.Scene3D());
                t.ambientColor = new Laya.Vector3(.3, .3, .3);
                let s = t.addChild(new Laya.Camera(0, .1, 1e3));
                s.transform.rotate(new Laya.Vector3(0, 180, 0), !0, !1), s.transform.position = new Laya.Vector3(0, 0, -500),
                    s.orthographic = !0, s.orthographicVerticalSize = 5, s.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY,
                    i.camera = s, i.scene = t, g.resizeScene$(i);
            }
            return i;
        }
        static get3DUIPos$(e, t, i, s) {
            if (!i) return null;
            s || (s = new Laya.Vector3());
            var a = g.getUIData$(i),
                n = a.sceneStageRate,
                o = a.camera;
            return s.x = (e - .5 * Laya.stage.width) * n.x + o.transform.position.x, s.y = (t - .5 * Laya.stage.height) * n.y + o.transform.position.y,
                s.z = o.transform.position.z + 100, s;
        }
        static resizeScene$(e) {
            let t = e.camera,
                i = new Laya.Vector3(0, 0, 0),
                s = new Laya.Vector3(0, 0, 0),
                a = new Laya.Vector3(0, 0, 0);
            t.convertScreenCoordToOrthographicCoord(a, i);
            let n = Laya.RenderState.clientWidth / Laya.stage.width || 1,
                o = Laya.RenderState.clientHeight / Laya.stage.height || 1;
            a = new Laya.Vector3(n, o, 0), t.convertScreenCoordToOrthographicCoord(a, s), e.sceneStageRate = new Laya.Vector2(s.x - i.x, s.y - i.y);
        }
        static destroyUIModel$(e, t) {
            let i = g.getUIData$(e);
            i && (i.scene.destroy(), delete g.uiModelDic$[e.UMId], e.UMId = void 0);
        }
        static getWorldPosition$(e, t, i) {
            let s = e.worldMatrix;
            return i || (i = new Laya.Vector3()), Laya.Vector3.transformCoordinate(t, s, i),
                i;
        }
        static getLocalPosition$(e, t, i) {
            let s = e.worldMatrix;
            i || (i = new Laya.Vector3());
            var a = Laya.Transform3D._tempMatrix0;
            return s.invert(a), Laya.Vector3.transformCoordinate(t, a, i), i;
        }
        static getLocalRotation$(e, t, i) {
            return i || (i = new Laya.Quaternion()), null != e ? (e.rotation.invert(Laya.Transform3D._tempQuaternion0),
                    Laya.Quaternion.multiply(Laya.Transform3D._tempQuaternion0, t, i)) : t.cloneTo(i),
                i;
        }
        static getLocalScale$(e, t, i) {
            if (i || (i = new Laya.Vector3()), null !== e) {
                let s = Laya.Transform3D._tempMatrix3x33,
                    a = Laya.Transform3D._tempMatrix3x33,
                    n = a.elements,
                    o = e._getScaleMatrix();
                o.invert(o), Laya.Matrix3x3.createFromScaling(t, s), Laya.Matrix3x3.multiply(o, s, a),
                    i.x = n[0], i.y = n[4], i.z = n[8];
            } else t.cloneTo(i);
            return i;
        }
        static refreshRigidbodysColliderShape$(e) {
            let t = e.getComponent(Laya.Rigidbody3D);
            if (t && g.refreshSingleRigidbodyColliderShape$(t, e), !e._children) return;
            let i = e._children.length;
            for (; --i > -1;) g.refreshRigidbodysColliderShape$(e._children[i]);
        }
        static refreshSingleRigidbodyColliderShape$(e, t) {
            let i = t.getComponent(Laya.Rigidbody3D);
            if (i && i != e) return;
            let s = t.getComponent(Laya.PhysicsCollider);
            if (s) {
                let i = s.colliderShape.clone();
                i._localRotation = g.getLocalRotation$(e.owner.transform, t.transform.rotation),
                    i._scale = g.getLocalScale$(e.owner.transform, t.transform.getWorldLossyScale()),
                    i._localOffset = g.getLocalPosition$(e.owner.transform, t.transform.position), i.updateLocalTransformations(),
                    t._destroyComponent(s), e.colliderShape || (e.colliderShape = new Laya.CompoundColliderShape()),
                    e.colliderShape.addChildShape && e.colliderShape.addChildShape(i);
            }
            if (!t._children) return;
            let a = t._children.length;
            for (; --a > -1;) g.refreshSingleRigidbodyColliderShape$(e, t._children[a]);
        }
    }
    class u extends Laya.Script {
        constructor() {
            super(), this._modelId$ = 0, this.sprite$ = null, this._animator$ = null, this.avater$ = null,
                this._canimators$ = [], this._parent$ = null, this._addModels$ = [], this._bones$ = {},
                this._loadedHandler$ = null, this._position$ = new Laya.Vector3(NaN, NaN, NaN),
                this._localPosition$ = new Laya.Vector3(0, 0, 0), this._localScale$ = new Laya.Vector3(1, 1, 1),
                this._localRotation$ = new Laya.Vector3(0, 0, 0), this.loaded$ = !1, this._active$ = !0,
                this._config$ = void 0, this._name$ = void 0, this._isDestroyed$ = void 0, this._isOrbit$ = void 0,
                this._adds$ = void 0, this._addLoadIndex$ = void 0, this.lastPlayAnim$ = void 0;
        }
        reset$(e, t, i) {
            this._parent$ = e, this._modelId$ = t, this._loadedHandler$ = i, this._isDestroyed$ = !1,
                this._config$ = D.PrefabsPath[t];
            var s = u._getUrlById$(t);
            if (this._name$ = this._config$.chs.substring(s.lastIndexOf("/") + 1, s.lastIndexOf(".")),
                this.setLocalScale$(this._config$.scale), this._isOrbit$ = !!this._config$.path,
                this._adds$ = [], this._addLoadIndex$ = 0, this._config$.additionalId)
                for (var a = this._config$.additionalId.split("&"), n = 0; n < a.length; n++) {
                    var o = a[n].split("#");
                    this._adds$.push([o[0], o[1]]);
                }
            this._isOrbit$ ? this.creareOrbit$() : this.create$();
        }
        create$() {
            if (this.loaded$) Laya.timer.once(1, this, this._onAllCompleted$);
            else {
                let e = this._modelId$;
                u.prepareLoad$([this._modelId$], Laya.Handler.create(this, this._onComplete$, [e]));
            }
        }
        static getModelLhUrl$(e) {
            let t = D.PrefabsPath[e],
                i = t.chs;
            if (".lh" != i.substr(i.length - 3)) {
                let e = i.substring(i.lastIndexOf("/") + 1);
                i += "/" + e + ".lh", Laya.config$ && Laya.config$.isCDN$ && t.isCDN && (i = u.CDN_HOST$ + i);
            }
            return i;
        }
        _onComplete$(e) {
            if (e == this._modelId$ && !this._isDestroyed$) {
                var t = u.getModelLhUrl$(e);
                this.sprite$ = Laya.Loader.getRes(t), this.sprite$ = Laya.Sprite3D.instantiate(this.sprite$),
                    this.sprite$.$model = this, this.sprite$.$name = "Model_" + this._modelId$, this.avater$ = r.getAvater$(this.sprite$),
                    this.avater$ && (this._animator$ = this.avater$.getComponent(Laya.Animator));
                for (var i = 0; i < this._adds$.length; i++) {
                    var s = this._adds$[i];
                    u.create$(this.getBone$(s[1]), s[0]);
                }
                Laya.timer.once(1, this, this._onAllCompleted$);
            }
        }
        changeParent$(e) {
            let t = this.sprite$.transform.position.clone(),
                i = this.sprite$.transform.rotationEuler.clone(),
                s = this.sprite$.transform.getWorldLossyScale().clone();
            this.sprite$.removeSelf(), this._parent$ = e, this._parent$.addChild(this.sprite$),
                this.sprite$.transform.position = t, this.sprite$.transform.rotationEuler = i, this.sprite$.transform.setWorldLossyScale(s);
        }
        setPosition$(e, t, i) {
            r.setVector3(this._position$, e, t, i), this.loaded$ && (this.sprite$.transform.position = this._position$);
        }
        setLocalPosition$(e, t, i) {
            r.setVector3(this._localPosition$, e, t, i), this.loaded$ && (this.sprite$.transform.localPosition = this._localPosition$);
        }
        setLocalScale$(e, t, i, s) {
            void 0 === e && (e = 1), void 0 === t && (t = e), void 0 === i && (i = e), s && (e *= this._config$.scale,
                    t *= this._config$.scale, i *= this._config$.scale), r.setVector3(this._localScale$, e, t, i),
                this.loaded$ && (this.sprite$.transform.localScale = this._localScale$.clone(),
                    r.resetScale(this.sprite$));
        }
        setLocalRotation$(e, i, s, a) {
            a || (e *= t.RAD_1_ANGLE$, i *= t.RAD_1_ANGLE$, s *= t.RAD_1_ANGLE$), r.setVector3(this._localRotation$, e, i, s),
                this.loaded$ && this._setLocalRotation$();
        }
        _setLocalRotation$() {
            var e = this.sprite$.transform;
            Laya.Quaternion.createFromYawPitchRoll(this._localRotation$.x, this._localRotation$.y, this._localRotation$.z, e._localRotation),
                e.localRotation = e._localRotation;
        }
        setActive$(e) {
            this._active$ != e && (this._active$ = e, this.loaded$ && (this.sprite$.active = e));
        }
        rotate$(e, t, i) {
            this.loaded$ && this.sprite$.transform.rotate(e, t, i);
        }
        _onLoadedModel$(e) {
            if (!this._isDestroyed$) {
                this.sprite$ = Laya.Sprite3D.instantiate(e), this.avater$ = this.sprite$.getChildAt(0),
                    this._animator$ = this.avater$.getComponent(Laya.Animator);
                for (var t = 0; t < this._config$.subModel.length; t++) {
                    var i = this._config$.subModel[t];
                    if ("0" == i) break;
                    var s = this.avater$.getChildByName(i);
                    if (s) {
                        var a = s.getComponent(Laya.Animator);
                        a && this._canimators$.push(a);
                    }
                }
                this._loadAdds$();
            }
        }
        _loadAdds$() {
            this._isDestroyed$ || (this._addLoadIndex$ >= this._adds$.length ? this._onAllCompleted$() : this._addModels$.push(u.create$(void 0, this._adds$[this._addLoadIndex$][0], Laya.Handler.create(this, this._onAddLoaded$))));
        }
        _onAddLoaded$() {
            if (!this._isDestroyed$) {
                var e = this._addModels$.last(),
                    t = this._adds$[this._addLoadIndex$][1];
                this.bindBone$(t, e.sprite), this._addLoadIndex$++, this._loadAdds$();
            }
        }
        _onAllCompleted$() {
            this.loaded$ = !0, this._isDestroyed$ || (this._waitDestroy ? this.dispose$() : (this._parent$ && this._parent$.addChild(this.sprite$),
                this.sprite$.transform.localScale = this._localScale$, this.refreshRigidbodysColliderShape$(this.sprite$),
                isNaN(this._position$.x) ? this.sprite$.transform.localPosition = this._localPosition$ : this.sprite$.transform.position = this._position$,
                this._setLocalRotation$(), this._config$.color && this._config$.color.length > 0 && u.changeMaterialColor$(this.sprite$, this._config$.color[0], this._config$.color[1], this._config$.color[2], this._config$.color[3]),
                this.sprite$.active = this._active$, this._parent$.destroyed || this._loadedHandler$ && this._loadedHandler$.runWith(this)));
        }
        refreshRigidbodysColliderShape$(e) {
            let t = e.getComponent(Laya.Rigidbody3D);
            if (t && this.refreshSingleRigidbodyColliderShape$(t, e), !e._children) return;
            let i = e._children.length;
            for (; --i > -1;) this.refreshRigidbodysColliderShape$(e._children[i]);
        }
        refreshSingleRigidbodyColliderShape$(e, t) {
            let i = t.getComponent(Laya.PhysicsCollider);
            if (i) {
                let s = i.colliderShape.clone();
                s._localRotation = g.getLocalRotation$(e.owner.transform, t.transform.rotation),
                    s._scale = g.getLocalScale$(e.owner.transform, t.transform.getWorldLossyScale()),
                    s._localOffset = g.getLocalPosition$(e.owner.transform, t.transform.position), s.updateLocalTransformations(),
                    t._destroyComponent(i), e.colliderShape.addChildShape && e.colliderShape.addChildShape(s);
            }
            if (!t._children) return;
            let s = t._children.length;
            for (; --s > -1;) this.refreshSingleRigidbodyColliderShape$(e, t._children[s]);
        }
        bindBone$(e, t) {
            var i = this.getBone$(e);
            i && i.addChild(t);
        }
        getBone$(e) {
            var t = this._bones$[e];
            if (!t) {
                if (e !== u.ORBIT_POINT$.POINT3 || this._animator$._avatarNodeMap[e]) {
                    if (!this._animator$._avatarNodeMap[e]) return console.log("无该模型:" + this._modelId$ + "的绑点:" + e + "!"),
                        null;
                    t = this.sprite$.addChild(new Laya.Sprite3D()), this._animator$.linkSprite3DToAvatarNode(e, t);
                } else t = this.avater$;
                this._bones$[e] = t;
            }
            return t;
        }
        changeAnimSpeed$(e, t) {
            let i;
            this._animator$ && (i = this._animator$._controllerLayers[0]._statesMap[e]), i && (i.speed = null != t ? t : 1);
        }
        playAnim$(e, t, i, s, a, n) {
            let o;
            if (this._animator$ && (o = this._animator$._controllerLayers[0]._statesMap[e]),
                o) {
                if (!n)
                    if (null == this.lastPlayAnim$) {
                        let t = void 0;
                        if ((t = this._animator$.getControllerLayer()._currentPlayState ? this._animator$.getControllerLayer()._currentPlayState : this._animator$.getControllerLayer()._playStateInfo._currentState) && t.name == e) return;
                    } else if (this.lastPlayAnim$ == e) return;
                o.clip.islooping = t, o.speed = null != a ? a : 1, this.lastPlayAnim$ = e, n ? this._animator$.play(e, 0, 0) : this._animator$.crossFade(e, .2);
            }
        }
        pauseEmission$() {
            this.sprite$ && this._setEmission$(this.sprite$, !1);
        }
        resumeEmission$() {
            this.sprite$ && this._setEmission$(this.sprite$, !0);
        }
        _setEmission$(e, t) {
            if (e.particleSystem && (e.particleSystem.emission.enable = t), e.particleSystem && (e.particleSystem.emission.enbale = t),
                e._children && e._children.length > 0)
                for (let i = 0; i < e._children.length; i++) this._setEmission$(e._children[i], t);
        }
        static changeMaterialColor$(e, t, i, s, a, n) {
            u._changeMaterialColor$(e, t, i, s, a, n);
            for (let o = 0; o < e._children.length; o++) u.changeMaterialColor$(e._children[o], t, i, s, a, n);
        }
        static _changeMaterialColor$(e, t, i, s, a, n) {
            (t > 1 || i > 1 || s > 1) && (t /= 255, i /= 255, s /= 255);
            let o = [];
            if (e instanceof Laya.MeshSprite3D || e instanceof Laya.SkinnedMeshSprite3D)
                if (null != n) {
                    let t = e._render.materials;
                    if (t) {
                        let e, i = t.length;
                        for (; --i > -1;)(e = t[i]).name == n && o.push(e);
                    } else e._render.material.name == n && o.push(e._render.material);
                } else {
                    o.push(e._render.material);
                    let t = e._render.materials;
                    if (t) {
                        let e = t.length;
                        for (; --e > -1;) o.push(t[e]);
                    }
                }
            if (o && o.length > 0) {
                let e = o.length;
                for (; --e > -1;) u.setMaterialColor$(o[e], t, i, s, a);
            }
        }
        static setMaterialColor$(e, t, i, s, a) {
            if ((t > 1 || i > 1 || s > 1) && (t /= 255, i /= 255, s /= 255), e.defualtAlbedoColor || (e.defualtAlbedoColor = null != e.albedoColor ? e.albedoColor.clone() : e.color),
                t = null == t ? e.defualtAlbedoColor.x : t, i = null == i ? e.defualtAlbedoColor.y : i,
                s = null == s ? e.defualtAlbedoColor.z : s, a = null == a ? e.defualtAlbedoColor.w : a,
                null != e.albedoColor) {
                let n = e.albedoColor;
                n.x = t, n.y = i, n.z = s, n.w = a, e.albedoColor = n;
            } else if (null != e.color) {
                let n = e.color;
                n.x = t, n.y = i, n.z = s, n.w = a, e.color = n;
            }
        }
        static setFriction$(e, t) {
            let i, s = e._components;
            if (s) {
                let e;
                for (i = s.length; --i > -1;)((e = s[i]) instanceof Laya.PhysicsCollider || e instanceof Laya.Rigidbody3D) && (e.friction = t);
            }
            let a = e._children;
            if (a)
                for (i = a.length; --i > -1;) u.setFriction$(a[i], t);
        }
        getMaterials$() {
            if (this.loaded$) return this._getMaterials$(this.sprite$);
        }
        _getMaterials$(e) {
            let t = [];
            if (e instanceof Laya.MeshSprite3D || e instanceof Laya.SkinnedMeshSprite3D)
                if (e._render.materials) {
                    let i = e._render.materials.length;
                    for (; --i > -1;) t.push(e._render.materials[i]);
                } else t.push(e._render.material);
            let i = e._children;
            if (i) {
                let e = i.length;
                for (; --e > -1;) {
                    let s = this._getMaterials$(i[e]),
                        a = s.length;
                    for (; --a > -1;) t.push(s[a]);
                }
            }
            return t;
        }
        resetMaterialsColor$(e) {
            this._resetMaterialColor$(e);
            for (let t = 0; t < e._children.length; t++) this.resetMaterialsColor$(e._children[t]);
        }
        _resetMaterialColor$(e) {
            if (e instanceof Laya.MeshSprite3D || e instanceof Laya.SkinnedMeshSprite3D) {
                e._render.material.defualtAlbedoColor && (null != e._render.material.albedoColor ? e._render.material.albedoColor = e._render.material.defualtAlbedoColor.clone() : material.color = e._render.material.defualtAlbedoColor.clone());
                let t = e._render.materials;
                if (t) {
                    let e, i = t.length;
                    for (; --i > -1;)(e = t[i]).defualtAlbedoColor && (null != e.albedoColor ? e.albedoColor = e.defualtAlbedoColor.clone() : e.color = e.defualtAlbedoColor.clone());
                }
            }
        }
        replay$() {
            this.setActive$(!1), this.setActive$(!0);
        }
        creareOrbit$() {
            var e = u._fullChs$(u.ORBIT_DATA$[this._config$.path]);
            this.spritePrefab = Laya.Loader.getRes(e), this.spritePrefab = Laya.Sprite3D.instantiate(this.spritePrefab),
                this.spritePrefab.loaded ? Laya.timer.once(1, this, this.onLoadedOrbit$, null, !1) : this.spritePrefab.once(Laya.Event.HIERARCHY_LOADED, this, this.onLoadedOrbit$);
        }
        onLoadedOrbit$() {
            if (!this._isDestroyed$) {
                this._onLoadedModel$(this.spritePrefab), this._onAllCompleted$();
                var e = 0;
                this._config$.path === u.ORBIT_TYPE$.SURROUND ? e = 3 : this._config$.path === u.ORBIT_TYPE$.UPROUND ? e = 2 : this._config$.path === u.ORBIT_TYPE$.DRAGON && (e = 1),
                    this.prepareOrbitItems$(e);
            }
        }
        prepareOrbitItems$(e) {
            var t = u._getUrlById$(this._modelId$);
            this._orbitItemPrefab = Laya.Loader.getRes(t), this._orbitItemPrefab = Laya.Sprite3D.instantiate(this._orbitItemPrefab),
                this._orbitItemPrefab.loaded ? this.onLoadedOrbitItems$(e) : this._orbitItemPrefab.once(Laya.Event.HIERARCHY_LOADED, this, this.onLoadedOrbitItems$, [e]);
        }
        onLoadedOrbitItems$(e) {
            if (!this._isDestroyed$ && e > 0)
                for (var t; --e > -1;) t = Laya.Sprite3D.instantiate(this._orbitItemPrefab),
                    this.bindBone$(u.ORBIT_POINT$["POINT" + (e + 1)], t);
        }
        dispose$() {
            if (!this._isDestroyed$ && this.loaded$) {
                this._isDestroyed$ = !0, this.loaded$ = !1;
                for (var e = 0; e < this._addModels$.length; e++) this._addModels$[e].dispose();
                this._orbitItemPrefab && this._orbitItemPrefab.destroy(!0), this.spritePrefab && this.spritePrefab.destroy(!0),
                    this._addModels$ = [], this._parent$ && this._parent$.destroyed || this.sprite$.destroy(!0),
                    this.sprite$ = null, this._animator$ = null, this.avater$ = null, this._canimators$ = [],
                    this._parent$ = null, this._addModels$ = [], this._bones$ = {}, this._loadedHandler$ = null,
                    this._active$ = !0, this._waitDestroy = !1, this._position$ = new Laya.Vector3(NaN, NaN, NaN),
                    this._localPosition$ = new Laya.Vector3(0, 0, 0), this._localScale$ = new Laya.Vector3(1, 1, 1),
                    this._localRotation$ = new Laya.Vector3(0, 0, 0), this.lastPlayAnim$ = void 0, Laya.Pool.recover("ssModel", this),
                    u.modelUsedCnt$[this._modelId$]--;
            } else this._waitDestroy = !0;
        }
        setReceiveShadow$(e) {
            this._setReceiveShadow$(this.sprite$, e);
        }
        _setReceiveShadow$(e, t) {
            if (e instanceof Laya.MeshSprite3D) e.meshRenderer.receiveShadow = t;
            else
                for (let i = 0; i < e._children.length; i++) this._setReceiveShadow$(e._children[i], t);
        }
        setCastShadow$(e) {
            this._setCastShadow$(this.sprite$, e);
        }
        _setCastShadow$(e, t) {
            e instanceof Laya.MeshSprite3D ? e.meshRenderer.castShadow = t : e instanceof Laya.SkinnedMeshSprite3D && (e.skinnedMeshRenderer.castShadow = t);
            for (let i = 0; i < e._children.length; i++) this._setCastShadow$(e._children[i], t);
        }
        static _isLoading$(e) {
            for (var t = 0; t < e.length; t++)
                if (-1 != u.curLoad$.indexOf(e[t])) return !0;
            return !1;
        }
        static _hasLoaded$(e) {
            for (var t = 0; t < e.length; t++)
                if (-1 === u.hasLoadIds$.contains$(e[t])) return !1;
            return !0;
        }
        static prepareLoad$(e, t) {
            if (!e || 0 == e.length) return void(t && t.run());
            let i = u._hasLoaded$(e);
            if (i || !u._isLoading$(e))
                if (!i && u.curLoadingNum$ >= u.MAX_LOADING_NUM$) {
                    d = {
                        ids: e,
                        completeHandler: t
                    };
                    u.waitting$.push(d);
                } else {
                    for (var s = [], a = 0; a < e.length; a++) {
                        var n = e[a],
                            o = D.PrefabsPath[n];
                        if (Number(n)) {
                            if (!o) continue;
                            u.curLoad$.push(n);
                        }
                        var r = o ? o.additionalId : 0;
                        if (r)
                            for (var $ = r.split("&"), h = 0; h < $.length; h++) {
                                var l = $[h].split("#")[0];
                                !e.contains$(l) && e.push(l);
                            }
                        s.push(u.getModelLhUrl$(n));
                    }
                    u.curLoadingNum$++, Laya.loader.create(s, Laya.Handler.create(null, function() {
                        u.curLoadingNum$--;
                        for (var i = 0; i < e.length; i++) {
                            var s = e[i];
                            u.hasLoadIds$.contains$(s) || u.hasLoadIds$.push(s);
                            var a = D.PrefabsPath[s];
                            Number(s) && !a || u.curLoad$.remove$(s);
                        }
                        t && t.run(), Laya.timer.once(1, this, function() {
                            for (var e, t = u.waitting$.length - 1; t >= 0; t--)
                                if (e = u.waitting$[t], !u._isLoading$(e)) return u.waitting$.removeAt$(t),
                                    void u.prepareLoad$(e.ids, e.completeHandler);
                        });
                    }));
                }
            else {
                var d = {
                    ids: e,
                    completeHandler: t
                };
                u.waitting$.push(d);
            }
        }
        static create$(e, t, i) {
            var s = Laya.Pool.getItem("ssModel") || new u();
            return s.reset$(e, t, i), u._addModelUsedCnt$(t), s;
        }
        static _addModelUsedCnt$(e) {
            u.modelUsedCnt$[e] = (u.modelUsedCnt$[e] || 0) + 1;
        }
        static _getUrlById$(e) {
            var t = D.PrefabsPath[e];
            return u._fullChs$(t.chs);
        }
        static _fullChs$(e) {
            if (e.endWith$(".lh")) return i;
            var t = e.substring(e.lastIndexOf("/") + 1),
                i = e + "/" + t + ".lh";
            return i;
        }
        static destroyRes$(e) {
            e && (e.destroy && !e.destroyed ? e.destroy() : e.dispose && !e.disposed && e.dispose());
        }
        static destroyResArray$(e) {
            if (e)
                for (var i = 0; i < e.length; i++) {
                    var s = e[i];
                    t.SWITCH$.MODEL_LOG && console.log("-资源:" + s), u.loadedCount$[s] && (u.loadedCount$[s]--,
                        0 == u.loadedCount$[s] && (u.destroyRes$(Laya.Loader.getRes(s)), Laya.Loader.clearRes(Laya.URL.formatURL(s), !0)));
                }
        }
    }
    u.CDN_HOST$ = "", u.ORBIT_POINT$ = {}, u.ORBIT_POINT$.POINT1 = "leftPoint", u.ORBIT_POINT$.POINT2 = "rightPoint",
        u.ORBIT_POINT$.POINT3 = "waistPoint", u.ORBIT_POINT$.POINT4 = "solePoint", u.ORBIT_TYPE$ = {},
        u.ORBIT_TYPE$.SURROUND = 1, u.ORBIT_TYPE$.UPROUND = 2, u.ORBIT_TYPE$.DRAGON = 3,
        u.ORBIT_DATA$ = {}, u.ORBIT_DATA$[u.ORBIT_TYPE$.UPROUND] = "models/orbit/guiji_luoxuan01",
        u.ORBIT_DATA$[u.ORBIT_TYPE$.DRAGON] = "models/orbit/guiji_long01", u.MAX_LOADING_NUM$ = 1e3,
        u.curLoadingNum$ = 0, u.waitting$ = [], u.loadedCount$ = {}, u.modelUsedCnt$ = {},
        u.curLoad$ = [], u.hasLoadIds$ = [];
    class p extends Laya.Box {
        constructor() {
            super(), this.progressBar$ = this.addChild(new Laya.ProgressBar()), this.progressBar$.skin = "common/progress_hp.png",
                this.progressBar$.centerX = 0, this.progressBar$.centerY = 0;
        }
        static initPool$() {
            for (let e = 0; e < 5; e++) {
                let e = new p();
                Laya.Pool.recover("HP_BAR$", e);
            }
        }
        static getFromPoolOrCreate$() {
            return Laya.Pool.getItemByCreateFun("HP_BAR$", function() {
                return new p();
            }.bind(this), this);
        }
        recoverToPool$() {
            this.removeSelf(), Laya.Pool.recover("HP_BAR$", this);
        }
        show(e, t, i, s, a, n) {
            Laya.Tween.clearAll(this), Laya.Tween.clearAll(this.progressBar$), this.clearTimer(this, this._delayHide$),
                a.addChild(this);
            let o = r.wordToStagePos$(s, i);
            this.pos(o.x - this.width / 2, o.y - this.height / 2), this.progressBar$.value = t,
                this.visible = !0, this.active = !0, this.alpha = 1, Laya.Tween.to(this.progressBar$, {
                    value: e
                }, 200, Laya.Ease.linearNone, Laya.Handler.create(this, function() {
                    this._delayHide$(n);
                }.bind(this)));
        }
        _delayHide$(e) {
            Laya.Tween.to(this, {
                alpha: 0
            }, 500, Laya.Ease.linearNone, Laya.Handler.create(this, function() {
                e(this), this.recoverToPool$();
            }.bind(this)));
        }
    }
    class m {
        constructor(e) {
            this._objectPrototype$ = null, this._opts$ = e;
        }
        get objectPrototype() {
            return this._objectPrototype$;
        }
        loadPrototypeAndInitPool$(e) {
            if (this._objectPrototype$) return void e(this._objectPrototype$);
            let t = this.getResourcePath();
            Laya.Sprite3D.load(t, Laya.Handler.create(this, t => {
                t.transform.localPosition = new Laya.Vector3(0, 0, 0), this._objectPrototype$ = t.addComponent(this._opts$.gameObjectClass),
                    this.initPool(), e && e(this._objectPrototype$);
            }));
        }
        spawn$() {
            return this._objectPrototype$ ? this.getFromPoolOrClone() : (console.error("请先调用loadPrototypeAndInitPool()"),
                null);
        }
        recoverToPool$(e) {
            e.owner.removeSelf(), Laya.Pool.recover(this._opts$.poolSign, e);
        }
        getFromPoolOrClone() {
            return Laya.Pool.getItemByCreateFun(this._opts$.poolSign, this.clone$, this);
        }
        initPool() {
            for (let e = 0; e < this._opts$.poolSize; e++) {
                let e = this.clone$();
                Laya.Pool.recover(this._opts$.poolSign, e);
            }
        }
        clone$() {
            let e = this._objectPrototype$.owner;
            return Laya.Sprite3D.instantiate(e, null, !1, e.transform.position, e.transform.rotation).getComponent(this._opts$.gameObjectClass);
        }
        getResourcePath() {
            return get3DResourcePath$(this._opts$.resourceFileName);
        }
    }
    class _ extends Laya.Script3D {
        constructor() {
            super(), this._poolSign$ = null, this._particles$ = [];
        }
        static loadPrototypeAndInitPool$(e, t) {
            let i = this._pools$[e.poolSign];
            i || ((i = new m(e)).loadPrototypeAndInitPool$(t), this._pools$.set(e.poolSign, i));
        }
        static spawn$(e) {
            let t = this.getPool$(e).spawn$();
            return t._poolSign$ = e, t.init$(), t;
        }
        static spawnAndShow$(e, t, i, s) {
            let a = this.spawn$(s);
            this.showParticle$(a, e, t, i);
        }
        static showParticle$(e, t, i, s) {
            t.addChild(e.owner), e.showParticles$(i, s);
        }
        static getPool$(e) {
            let t = this._pools$.get(e);
            return t || console.warn("异常:粒子对象池未初始化", e), t;
        }
        recoverToPool$() {
            !this.destroyed && this.owner && _._pools$.get(this._poolSign$).recoverToPool$(this);
        }
        init$() {
            this._particles$ = function findClassFromChildren(e, t, i, s = !0) {
                i = i || [], s && e instanceof t && i.push(e);
                let a = e.numChildren;
                for (let s = 0; s < a; s++) findClassFromChildren(e.getChildAt(s), t, i, !0);
                return i;
            }(this.owner, Laya.ShuriKenParticle3D);
            for (let e = 0; e < this._particles$.length; e++) this._particles$[e].particleSystem.stop();
        }
        showParticles$(e, t) {
            this.owner.callLater(() => {
                if (this.destroyed || !this.owner || !this.owner.parent) return;
                let i, s = -1,
                    a = !1;
                for (let e = 0; e < this._particles$.length; e++) {
                    if (t && this._particles$[e].transform.setWorldLossyScale(t), (i = this._particles$[e].particleSystem).looping) {
                        a = !0;
                        break;
                    }
                    s = Math.max(i.duration, s, i._maxStartLifetime);
                }
                let n = this.owner.transform;
                e && (n.position = e),
                    function(e, t) {
                        if (t.parent)
                            for (let i = 0; i < e.length; i++) {
                                let s = e[i];
                                t.parent.addChild(s), s.transform.position = t.transform.position, s.particleSystem.play();
                            } else console.warn("异常: syncWithNode.parent is null");
                    }(this._particles$, this.owner), a || this.owner.timerOnce(1e3 * s, this, () => {
                        this.recoverToPool$();
                    });
            });
        }
    }
    _._pools$ = new Map();
    class y {
        static initParticles(e) {
            let t = [this._buildDestroyParticlePoolOption$, this._buildHitParticlePoolOption$, this._levelUpParticlePoolOption$, this._splatParticlePoolOption$],
                i = function() {
                    let s = t.shift();
                    s ? _.loadPrototypeAndInitPool$(s, i) : e();
                };
            i();
        }
        static showRedCarDestroyParticle$(e, t, i = new Laya.Vector3(1, 1, 1)) {
            _.spawnAndShow$(e, t, i, "RedCarDestroyParticle");
        }
        static showYellowCarDestroyParticle$(e, t, i = new Laya.Vector3(1, 1, 1)) {
            _.spawnAndShow$(e, t, i, "YellowCarDestroyParticle");
        }
        static showBlueCarDestroyParticle$(e, t, i = new Laya.Vector3(1, 1, 1)) {
            _.spawnAndShow$(e, t, i, "BlueCarDestroyParticle");
        }
        static showRedBuildDestroyParticle$(e, t, i = new Laya.Vector3(1, 1, 1)) {
            _.spawnAndShow$(e, t, i, "RedBuildDestroyParticle");
        }
        static showGreenBuildDestroyParticle$(e, t, i = new Laya.Vector3(1, 1, 1)) {
            _.spawnAndShow$(e, t, i, "GreenBuildDestroyParticle");
        }
        static showBlueBuildDestroyParticle$(e, t, i = new Laya.Vector3(1, 1, 1)) {
            _.spawnAndShow$(e, t, i, "BlueBuildDestroyParticle");
        }
        static showYellowBuildDestroyParticle$(e, t, i = new Laya.Vector3(1, 1, 1)) {
            _.spawnAndShow$(e, t, i, "YellowBuildDestroyParticle");
        }
        static showDarkBuildDestroyParticle$(e, t, i = new Laya.Vector3(1, 1, 1)) {
            _.spawnAndShow$(e, t, i, "DarkBuildDestroyParticle");
        }
        static showBrownBuildDestroyParticle$(e, t, i = new Laya.Vector3(1, 1, 1)) {
            _.spawnAndShow$(e, t, i, "BrownBuildDestroyParticle");
        }
        static showTreeDestroyParticle$(e, t, i = new Laya.Vector3(1, 1, 1)) {
            _.spawnAndShow$(e, t, i, "TreeDestroyParticle");
        }
        static showBuildDestroyParticle$(e, t, i = new Laya.Vector3(1, 1, 1)) {
            _.spawnAndShow$(e, t, i, "BuildDestroyParticle");
        }
        static showBuildHitParticle$(e, t, i = new Laya.Vector3(1, 1, 1)) {
            _.spawnAndShow$(e, t, i, "BuildHitParticle");
        }
        static showLevelUpParticle$(e, t, i = new Laya.Vector3(1, 1, 1)) {
            _.spawnAndShow$(e, t, i, "LevelUpParticle");
        }
        static showSplatParticle$(e, t, i = new Laya.Vector3(1, 1, 1)) {
            _.spawnAndShow$(e, t, i, "SplatParticle");
        }
    }
    y._redCarDestroyParticlePoolOption$ = {
        poolSize: 10,
        resourceFileName: "RedCarDestroyParticle.lh",
        poolSign: "RedCarDestroyParticle",
        gameObjectClass: _
    }, y._yellowCarDestroyParticlePoolOption$ = {
        poolSize: 10,
        resourceFileName: "YellowCarDestroyParticle.lh",
        poolSign: "YellowCarDestroyParticle",
        gameObjectClass: _
    }, y._blueCarDestroyParticlePoolOption$ = {
        poolSize: 10,
        resourceFileName: "BlueCarDestroyParticle.lh",
        poolSign: "BlueCarDestroyParticle",
        gameObjectClass: _
    }, y._redBuildDestroyParticlePoolOption$ = {
        poolSize: 10,
        resourceFileName: "RedBuildDestroyParticle.lh",
        poolSign: "RedBuildDestroyParticle",
        gameObjectClass: _
    }, y._greenBuildDestroyParticlePoolOption$ = {
        poolSize: 10,
        resourceFileName: "GreenBuildDestroyParticle.lh",
        poolSign: "GreenBuildDestroyParticle",
        gameObjectClass: _
    }, y._blueBuildDestroyParticlePoolOption$ = {
        poolSize: 10,
        resourceFileName: "BlueBuildDestroyParticle.lh",
        poolSign: "BlueBuildDestroyParticle",
        gameObjectClass: _
    }, y._yellowBuildDestroyParticlePoolOption$ = {
        poolSize: 10,
        resourceFileName: "YellowBuildDestroyParticle.lh",
        poolSign: "YellowBuildDestroyParticle",
        gameObjectClass: _
    }, y._darkBuildDestroyParticlePoolOption$ = {
        poolSize: 10,
        resourceFileName: "DarkBuildDestroyParticle.lh",
        poolSign: "DarkBuildDestroyParticle",
        gameObjectClass: _
    }, y._brownBuildDestroyParticlePoolOption$ = {
        poolSize: 10,
        resourceFileName: "BrownBuildDestroyParticle.lh",
        poolSign: "BrownBuildDestroyParticle",
        gameObjectClass: _
    }, y._treeDestroyParticlePoolOption$ = {
        poolSize: 10,
        resourceFileName: "TreeDestroyParticle.lh",
        poolSign: "TreeDestroyParticle",
        gameObjectClass: _
    }, y._buildDestroyParticlePoolOption$ = {
        poolSize: 10,
        resourceFileName: "BuildDestroyParticle.lh",
        poolSign: "BuildDestroyParticle",
        gameObjectClass: _
    }, y._buildHitParticlePoolOption$ = {
        poolSize: 10,
        resourceFileName: "BuildHitParticle.lh",
        poolSign: "BuildHitParticle",
        gameObjectClass: _
    }, y._levelUpParticlePoolOption$ = {
        poolSize: 3,
        resourceFileName: "LevelUpParticle.lh",
        poolSign: "LevelUpParticle",
        gameObjectClass: _
    }, y._splatParticlePoolOption$ = {
        poolSize: 3,
        resourceFileName: "SplatParticle.lh",
        poolSign: "SplatParticle",
        gameObjectClass: _
    };
    let S = 0,
        L = 0,
        w = 0;
    class C extends Laya.Vector3 {
        static rotateX$(e, t, i, s) {
            S = e.x - t.x, L = e.y - t.y, w = e.z - t.z;
            const a = Math.cos(i),
                n = Math.sin(i),
                o = S,
                r = L * a - w * n,
                $ = L * n + w * a;
            return s.x = o + t.x, s.y = r + t.y, s.z = $ + t.z, s;
        }
        static rotateY$(e, t, i, s) {
            S = e.x - t.x, L = e.y - t.y, w = e.z - t.z;
            const a = Math.cos(i),
                n = Math.sin(i),
                o = w * n + S * a,
                r = L,
                $ = w * a - S * n;
            return s.x = o + t.x, s.y = r + t.y, s.z = $ + t.z, s;
        }
        static rotateZ$(e, t, i, s) {
            S = e.x - t.x, L = e.y - t.y, w = e.z - t.z;
            const a = Math.cos(i),
                n = Math.sin(i),
                o = S * a - L * n,
                r = S * n + L * a,
                $ = w;
            return s.x = o + t.x, s.y = r + t.y, s.z = $ + t.z, s;
        }
        static negate$(e, t) {
            return t.x = -e.x, t.y = -e.y, t.z = -e.z, t;
        }
        static moveTowards$(e, t, i, s) {
            let a = t.x - e.x,
                n = t.y - e.y,
                o = t.z - e.z,
                r = a * a + n * n + o * o;
            if (0 == r || i >= 0 && r <= i * i) return t;
            let $ = Math.sqrt(r);
            return s.setValue(e.x + a / $ * i, e.y + n / $ * i, e.z + o / $ * i), s;
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        }
        lengthSqr() {
            return this.x * this.x + this.y * this.y + this.z * this.z;
        }
    }
    C.ZERO$ = Object.freeze(new Laya.Vector3(0, 0, 0)), C.ONE$ = Object.freeze(new Laya.Vector3(1, 1, 1)),
        C.UnitX$ = Object.freeze(new Laya.Vector3(1, 0, 0)), C.UnitY$ = Object.freeze(new Laya.Vector3(0, 1, 0)),
        C.UnitZ$ = Object.freeze(new Laya.Vector3(0, 0, 1));
    var f = new Laya.Vector3();
    class v extends Laya.Quaternion {
        static multiplyVector3$(e, t, i) {
            let s = 2 * e.x,
                a = 2 * e.y,
                n = 2 * e.z,
                o = e.x * s,
                r = e.y * a,
                $ = e.z * n,
                h = e.x * a,
                l = e.x * n,
                d = e.y * n,
                c = e.w * s,
                g = e.w * a,
                u = e.w * n;
            return f.x = (1 - (r + $)) * t.x + (h - u) * t.y + (l + g) * t.z, f.y = (h + u) * t.x + (1 - (o + $)) * t.y + (d - c) * t.z,
                f.z = (l - g) * t.x + (d + c) * t.y + (1 - (o + r)) * t.z, f.cloneTo(i), i;
        }
    }
    let I = new Laya.Vector3(),
        E = new Laya.Quaternion();
    class A extends Laya.Transform3D {
        static transformPoint$(e, t) {
            return Laya.Vector3.multiply(t, e.localScale, I), v.multiplyVector3$(e.rotation, I, I),
                Laya.Vector3.add(I, e.position, I), I;
        }
        static slerpLookAt$(e, t, i) {
            let s = e.position;
            Math.abs(s.x - t.x) < Laya.MathUtils3D.zeroTolerance && Math.abs(s.y - t.y) < Laya.MathUtils3D.zeroTolerance && Math.abs(s.z - t.z) < Laya.MathUtils3D.zeroTolerance || (Laya.Quaternion.lookAt(s, t, C.UnitY$, E),
                E.invert(E), Laya.Quaternion.slerp(e.rotation, E, i, E), e.rotation = E);
        }
        static moveTowards$(e, t, i) {
            C.moveTowards$(e.position, t, i, I), e.position = I;
        }
        static moveLerp$(e, t, i) {
            Laya.Vector3.lerp(e.position, t, i, I), e.position = I;
        }
        static rotationLookTo$(e, t) {
            Laya.Quaternion.rotationLookAt(t, C.UnitY$, E), E.invert(E), e.rotation = E;
        }
        static slerpRotationLookTo$(e, t, i) {
            Laya.Quaternion.rotationLookAt(t, C.UnitY$, E), E.invert(E), Laya.Quaternion.slerp(e.rotation, E, i, E),
                e.rotation = E;
        }
    }
    class k extends Laya.Script3D {
        constructor() {
            super(), this.isLookAtWayPoint = !0, this.moveSpeed = 5, this.turnSpeed = 10, this.loop = !1,
                this._currentIndex$ = -1, this._wayPoints$ = [], this._isDone$ = !0;
        }
        set wayPoints(e) {
            this._wayPoints$ = e, this._wayPoints$.length > 0 ? (this._isDone$ = !1, this._currentIndex$ = 0) : (this._isDone$ = !0,
                this._currentIndex$ = -1);
        }
        get done() {
            return this._isDone$;
        }
        reset() {
            this._wayPoints$ = [], this._currentIndex$ = -1, this._isDone$ = !0;
        }
        onUpdate() {
            if (this._isDone$) return;
            if (window.curScene && curScene.isPaused) return;
            this._getCurrentWayPointDistanceSqr$() < .09 && this._nextWayPoint$();
            let e = this._getCurrentWayPoint$(),
                t = Laya.timer.delta / 1e3;
            this._moveToWayPoint$(e, t), this._lookAtWayPoint$(e, t);
        }
        _lookAtWayPoint$(e, t) {
            this.isLookAtWayPoint && this._lookAtPosition$(e, t);
        }
        _getCurrentWayPoint$() {
            return this._wayPoints$[this._currentIndex$];
        }
        _lookAtPosition$(e, t) {
            let i = this.owner.transform;
            A.slerpLookAt$(i, e, t * this.turnSpeed);
        }
        _getCurrentWayPointDistanceSqr$() {
            let e = this.owner.transform.position,
                t = this._wayPoints$[this._currentIndex$];
            return Laya.Vector3.distanceSquared(e, t);
        }
        _nextWayPoint$() {
            this._currentIndex$ === this._wayPoints$.length - 1 ? this.loop ? this._currentIndex$ = 0 : this._isDone$ = !0 : this._currentIndex$++;
        }
        _moveToWayPoint$(e, t) {
            A.moveTowards$(this.owner.transform, e, t * this.moveSpeed);
        }
    }
    class B {}
    B.JoyStick$ = {
            DOWN$: "JOYSTICK_DOWN$",
            UP$: "JOYSTICK_UP$",
            CANCEL$: "JOYSTICK_CANCEL$",
            DIRECTION_CHANGE$: "JOYSTICK_DIRECTION_CHANGE$"
        }, B.Event$ = {
            GAME_PAUSED$: "GAME_PAUSED$",
            GAME_RESUME$: "GAME_RESUME$",
            SHOW_HOME_VIEW$: "SHOW_HOME_VIEW$",
            SHOW_SETTLEMENT_VIEW$: "SHOW_SETTLEMENT_VIEW$",
            SHOW_RESURGENCE_VIEW$: "SHOW_RESURGENCE_VIEW$",
            COIN_CHANGE$: "MONEY_CHANGE$",
            EXP_CHANGE$: "EXP_CHANGE$",
            KEY_CHANGE$: "KEY_CHANGE$",
            DAMAGE_LEVEL_CHANGE$: "DAMAGE_LEVEL_CHANGE$",
            GROWTH_LEVEL_CHANGE$: "GROWTH_LEVEL_CHANGE$",
            MOVE_SPEED_LEVEL_CHANGE$: "MOVE_SPEED_LEVEL_CHANGE$",
            RANK_LEVEL_CHANGE$: "RANK_LEVEL_CHANGE$",
            SKIN_ID_CHANGED$: "SKIN_ID_CHANGED$",
            SKIN_UNLOCKED$: "SKIN_UNLOCKED$",
            SIGNIN_SUCCEED$: "SIGNIN_SUCCEED$",
            LOADING_LEVEL$: "LOADING_LEVEL$",
            LEVEL_READY$: "LEVEL_READY$",
            START_PLAYING_LEVEL$: "START_PLAYING_LEVEL$",
            SKIP_LEVEL$: "SKIP_LEVEL$",
            RETRY_LEVEL$: "RETRY_LEVEL$",
            NEXT_LEVEL$: "NEXT_LEVEL$",
            PREV_LEVEL$: "PREV_LEVEL$",
            SKIN_UNLOCK_DIALOG_OPEN$: "SKIN_UNLOCK_DIALOG_OPEN$",
            SKIN_UNLOCK_DIALOG_CLOSE$: "SKIN_UNLOCK_DIALOG_CLOSE$",
            SKIN_STORE_TAB_CLICK_EVENT$: "SKIN_STORE_TAB_CLICK_EVENT$",
            COIN_FLY_EFFECT$: "COIN_FLY_EFFECT$",
            ADD_DINOSAUR_TO_SCENE$: "ADD_DINOSAUR_TO_SCENE$",
            DESTROY_DESTROYABLE_OBJECT$: "DESTROY_DESTROYABLE_OBJECT$",
            SHOW_HP_BAR$: "SHOW_HP_BAR$",
            HUMAN_KILL$: "HUMAN_KILL$",
            DINOSAUR_KILL$: "DINOSAUR_KILL$",
            DINOSAUR_LEVEL_UP$: "DINOSAUR_LEVEL_UP$",
            PLAYER_DINOSAUR_KILL$: "PLAYER_DINOSAUR_KILL$",
            RESURGENCE$: "RESURGENCE$",
            ROUND_TIME_CHANGED$: "ROUND_TIME_CHANGED$",
            ROUND_TIME_OUT$: "ROUND_TIME_OUT$",
            DINOSAUR_EXP_CHANGED$: "DINOSAUR_EXP_CHANGED$",
            PLAYER_EXP_CHANGED$: "PLAYER_EXP_CHANGED$",
            RANK_LIST_CHANGED$: "RANK_LIST_CHANGED$",
            TASK_LIST_ITEM_COMPLETED$: "TASK_LIST_ITEM_COMPLETED$",
            USE_FREE_SPIN_TIMES$: "USE_FREE_SPIN_TIMES$",
            BIGGER_START$: "BIGGER_START$",
            SPEED_UP_START$: "SPEED_UP_START$",
            OPEN_CHEST$: "OPEN_CHEST$",
            PICKUP_KEY$: "PICKUP_KEY$",
            PICKUP_MEAT$: "PICKUP_MEAT$",
            QUICK_CLICK_RESURGENCE_VIEW$: "QUICK_CLICK_RESURGENCE_VIEW$",
            QUICK_CLICK_RESURGENCE_SUCCESS$: "QUICK_CLICK_RESURGENCE_SUCCESS$",
            OPEN_SKIN_TRY_OUT_DIALOG$: "OPEN_SKIN_TRY_OUT_DIALOG$",
            SKIN_TRY_OUT$: "SKIN_TRY_OUT$",
            QUICK_CLICK_BIGGER_VIEW$: "QUICK_CLICK_BIGGER_VIEW$",
            QUICK_CLICK_BIGGER_SUCCESS$: "QUICK_CLICK_BIGGER_SUCCESS$",
            DESTROY_OBJ$: "DRESTROY_OBJ$"
        }, B.BaseSkins$ = ["Triceratops1", "Triceratops2", "Dilophosaurus1", "Dilophosaurus2"],
        B.AdvancedSkins$ = ["Triceratops3", "Triceratops4", "Dilophosaurus3", "Dilophosaurus4"],
        B.InfrequentSkins$ = ["Triceratops5", "Dilophosaurus5", "FireDragon1", "FireDragon2"],
        B.qt = {
            Triceratops5: 2,
            Dilophosaurus5: 3,
            FireDragon1: 5,
            FireDragon2: 10
        }, B.jt = {
            Triceratops1: {
                damage: 1,
                speed: 1,
                type: "Triceratops"
            },
            Dilophosaurus1: {
                damage: 1.05,
                speed: 1,
                type: "Rex"
            },
            Triceratops2: {
                damage: 1,
                speed: 1.05,
                type: "Triceratops"
            },
            Dilophosaurus2: {
                damage: 1,
                speed: 1.1,
                type: "Rex"
            },
            Dilophosaurus3: {
                damage: 1.15,
                speed: 1,
                type: "Rex"
            },
            Triceratops3: {
                damage: 1.45,
                speed: 1.15,
                type: "Triceratops"
            },
            Dilophosaurus4: {
                damage: 1.55,
                speed: 1.3,
                type: "Rex"
            },
            Triceratops4: {
                damage: 1.55,
                speed: 1.35,
                type: "Triceratops"
            },
            Dilophosaurus5: {
                damage: 1.65,
                speed: 1.3,
                type: "Rex"
            },
            Triceratops5: {
                damage: 1.55,
                speed: 1.4,
                type: "Triceratops"
            },
            FireDragon1: {
                damage: 1.65,
                speed: 1.3,
                type: "FireDragon"
            },
            FireDragon2: {
                damage: 1.7,
                speed: 1.3,
                type: "FireDragon"
            }
        }, B.AllSkins$ = B.BaseSkins$.concat(B.AdvancedSkins$).concat(B.InfrequentSkins$),
        B.Anim$ = {
            Idle$: 0,
            Run$: 1,
            Eat$: 2,
            Attack$: 3,
            Walk$: 4,
            Death$: 5,
            Roar$: 6
        }, B.Anim$[B.Anim$.Idle$] = "Idle", B.Anim$[B.Anim$.Run$] = "Run", B.Anim$[B.Anim$.Eat$] = "Eat",
        B.Anim$[B.Anim$.Attack$] = "Attack", B.Anim$[B.Anim$.Walk$] = "Walk", B.Anim$[B.Anim$.Death$] = "Death",
        B.Anim$[B.Anim$.Roar$] = "Roar", B.vi = {}, B.vi[B.Anim$.Idle$] = null, B.vi[B.Anim$.Run$] = null,
        B.vi[B.Anim$.Walk$] = null, B.vi[B.Anim$.Eat$] = B.Anim$.Run$, B.vi[B.Anim$.Attack$] = B.Anim$.Run$,
        B.vi[B.Anim$.Death$] = null, B.vi[B.Anim$.Roar$] = null, B.S = {
            money: 0,
            exp: 0,
            key: 0,
            damageLevel: 1,
            growthLevel: 1,
            moveSpeedLevel: 1,
            highestLevelExpire: 0,
            usingSkinId: "Dilophosaurus1",
            unlockedSkins: {
                Dilophosaurus1: !0
            },
            skinUnlockedStep: {},
            signinDays: 0,
            killDinosaur: 0,
            killDinosaurCompleted: !1,
            destroyCar: 0,
            destroyCarCompleted: !1,
            destroyBuild: 0,
            destroyBuildCompleted: !1,
            burstTimes: 0,
            burstTimesCompleted: !1,
            level8Achieve: 0,
            lv8AchieveDone: !1,
            rank1Times: 0,
            rank1TimesCompleted: !1
        }, B.r$ = {
            COIN$: 0,
            SKIN$: 1
        }, B.r$[B.r$.COIN$] = "COIN", B.r$[B.r$.SKIN$] = "SKIN", B.Li$ = {
            Rex: {},
            Triceratops: {},
            FireDragon: {}
        }, B.Li$.Rex[B.Anim$.Idle$] = {
            name: "Idle",
            speed: 1
        }, B.Li$.Rex[B.Anim$.Run$] = {
            name: "Run",
            speed: .75
        }, B.Li$.Rex[B.Anim$.Eat$] = {
            name: "Attack",
            speed: 1
        }, B.Li$.Rex[B.Anim$.Attack$] = {
            name: "Attack",
            speed: 1
        }, B.Li$.Rex[B.Anim$.Walk$] = {
            name: "Run",
            speed: .75
        }, B.Li$.Rex[B.Anim$.Death$] = {
            name: "Die",
            speed: 1
        }, B.Li$.Rex[B.Anim$.Roar$] = {
            name: "Roar",
            speed: 1
        }, B.Li$.Triceratops[B.Anim$.Idle$] = {
            name: "Idle",
            speed: 1
        }, B.Li$.Triceratops[B.Anim$.Run$] = {
            name: "Run",
            speed: .75
        }, B.Li$.Triceratops[B.Anim$.Eat$] = {
            name: "Attack",
            speed: 1
        }, B.Li$.Triceratops[B.Anim$.Attack$] = {
            name: "Attack",
            speed: 1
        }, B.Li$.Triceratops[B.Anim$.Walk$] = {
            name: "Run",
            speed: .75
        }, B.Li$.Triceratops[B.Anim$.Death$] = {
            name: "Die",
            speed: 1
        }, B.Li$.Triceratops[B.Anim$.Roar$] = {
            name: "Attack",
            speed: 1
        }, B.Li$.FireDragon[B.Anim$.Idle$] = {
            name: "Idle",
            speed: 1
        }, B.Li$.FireDragon[B.Anim$.Run$] = {
            name: "Run",
            speed: 1
        }, B.Li$.FireDragon[B.Anim$.Eat$] = {
            name: "Attack",
            speed: 1
        }, B.Li$.FireDragon[B.Anim$.Attack$] = {
            name: "Attack",
            speed: 1
        }, B.Li$.FireDragon[B.Anim$.Walk$] = {
            name: "Run",
            speed: 1
        }, B.Li$.FireDragon[B.Anim$.Death$] = {
            name: "Die",
            speed: 1
        }, B.Li$.FireDragon[B.Anim$.Roar$] = {
            name: "Run",
            speed: 1
        }, B.on$ = {
            CIRCLE$: 0,
            POLYGON$: 1
        }, B.on$[B.on$.CIRCLE$] = "CIRCLE", B.on$[B.on$.POLYGON$] = "POLYGON", B.OBJ_TYPE$ = {
            DINOSAUR$: 1,
            HUMAN$: 2,
            HOUSE$: 3,
            CAR$: 4,
            OTHER_DESTROYABLE_OBJECT$: 5,
            MEAT$: 6,
            WALL$: 7,
            ENEMY_DETECTOR$: 8,
            KEY$: 9
        }, B.es = {
            ALL: -1,
            [B.OBJ_TYPE$.DINOSAUR$]: B.OBJ_TYPE$.WALL$ | B.OBJ_TYPE$.HOUSE$ | B.OBJ_TYPE$.CAR$ | B.OBJ_TYPE$.OTHER_DESTROYABLE_OBJECT$ | B.OBJ_TYPE$.DINOSAUR$ | B.OBJ_TYPE$.HUMAN$ | B.OBJ_TYPE$.KEY$ | B.OBJ_TYPE$.MEAT$,
            [B.OBJ_TYPE$.WALL$]: B.OBJ_TYPE$.DINOSAUR$ | B.OBJ_TYPE$.HUMAN$,
            [B.OBJ_TYPE$.HOUSE$]: B.OBJ_TYPE$.DINOSAUR$,
            [B.OBJ_TYPE$.CAR$]: B.OBJ_TYPE$.DINOSAUR$,
            [B.OBJ_TYPE$.OTHER_DESTROYABLE_OBJECT$]: B.OBJ_TYPE$.DINOSAUR$,
            [B.OBJ_TYPE$.ENEMY_DETECTOR$]: B.OBJ_TYPE$.DINOSAUR$ | B.OBJ_TYPE$.HUMAN$,
            [B.OBJ_TYPE$.HUMAN$]: B.OBJ_TYPE$.ENEMY_DETECTOR$ | B.OBJ_TYPE$.HOUSE$ | B.OBJ_TYPE$.CAR$ | B.OBJ_TYPE$.WALL$ | B.OBJ_TYPE$.OTHER_DESTROYABLE_OBJECT$,
            [B.OBJ_TYPE$.KEY$]: B.OBJ_TYPE$.ENEMY_DETECTOR$ | B.OBJ_TYPE$.DINOSAUR$,
            [B.OBJ_TYPE$.MEAT$]: B.OBJ_TYPE$.ENEMY_DETECTOR$ | B.OBJ_TYPE$.DINOSAUR$
        }, B.Sound$ = {
            BOMO$: "sounds/bomb1.mp3",
            COIN$: "sounds/coin03.mp3",
            COIN_AWARD$: "sounds/CoinAward.mp3",
            POPUP$: "sounds/Popup.mp3",
            PICK_KEY$: "sounds/KeyCollect.mp3",
            CROWD_CHAOS$: "sounds/CrowdChaos.mp3",
            DESTRUCTION$: "sounds/Destruction.mp3",
            EAT$: "sounds/Eat.mp3",
            EGG_KONKON$: "sounds/egg-konkon1.mp3",
            FINISH$: "sounds/Finish.mp3",
            FAIL$: "sounds/FailSound.mp3",
            LEVEL_UP$: "sounds/LevelUp.mp3",
            RANK_UP$: "sounds/RankUp.mp3",
            SKIN_UNLOCK$: "sounds/Unlock.mp3",
            COUNT_DOWN$: "sounds/cd.mp3"
        }, B.KillSounds$ = ["sounds/kill.mp3"],
        B.GameEvent$ = {
            GAME_ON_SHOW$: "GAME_ON_SHOW",
            GAME_ON_HIDE$: "GAME_ON_HIDE",
            SET_NET_DATA$: "SET_NET_DATA",
            GAME_IS_READY$: "GAME_IS_READY",
            ON_CUSTOMER_SERVICE_SUCCESS$: "ON_CUSTOMER_SERVICE_SUCCESS",
            ADDED_TO_MY_MINI_GAME$: "ADDED_TO_MY_MINI_GAME",
            TUTORIAL_START$: "TUTORIAL_START",
            TUTORIAL_ALL_STEP_COMPLETED$: "TUTORIAL_ALL_STEP_COMPLETED",
            TUTORIAL_SHOW_GUIDE_HOTSPOT$: "TUTORIAL_SHOW_GUIDE_HOTSPOT",
            TUTORIAL_HIDE_GUIDE_HOTSPOT$: "TUTORIAL_HIDE_GUIDE_HOTSPOT",
            TUTORIAL_BEGIN_STEP$: "TUTORIAL_BEGIN_STEP",
            TUTORIAL_END_STEP$: "TUTORIAL_END_STEP",
            SHOW_SUB_DOMAIN$: "SHOW_SUB_DOMAIN",
            HIDE_SUB_DOMAIN$: "HIDE_SUB_DOMAIN",
            AUTO_UPDATE_SUB_DOMAIN$: "AUTO_UPDATE_SUB_DOMAIN",
            UPDATE_SUB_DOMAIN$: "UPDATE_SUB_DOMAIN",
            USER_INFO_UPDATED$: "USER_INFO_UPDATED"
        }, B.nicknames$ = ['Valley',
            'Roy',
            'Godwin',
            'Fenton',
            'Gift-Brave',
            'Beguiling',
            'Eliot',
            'Roderick',
            'Jimmy',
            'Morton',
            'Deborah',
            'Jane',
            'Joan',
            'Jasmine',
            'Wenda',
            'Hayley',
            'Hilda',
            'Katrina',
            'Hope',
            'Eileen',
            'Olin',
            'Elijah',
            'Egbert',
            'Joey',
            'Joseph',
            'Torrent',
            'Keaton',
            'Dion',
            'Darcy',
            'Half-Dane',
            'Lulu',
            'Luna',
            'Ula',
            'Nadine',
            'Beauty',
            'Glynnis',
            'Light',
            'Nursing',
            'Bound',
            'Kyla',
            'Ethanael',
            'Ferris',
            'Will',
            'Wylie',
            'Keegan',
            'Neville',
            'Joshua',
            'Quade',
            'Faithful',
            'Peacemaker',
            'Egbert',
            'Howard',
            'Zachary',
            'Leroy',
            'Exalted',
            'Thomas',
            'Lewis',
            'Meadow',
            'Lewis',
            'Tobias'
        ],
        B.Achivements$ = [{
            desc: "Kill 200 enemies",
            allStep: 200,
            rewardNum: 800,
            getCurrStep$: () => Laya.CyzClassMap$.GameData.getKillDino$(),
            isDone$: () => Laya.CyzClassMap$.GameData.getKillDinoDone$(),
            onDone$: () => Laya.CyzClassMap$.GameData.setKillDinoDone$()
        }, {
            desc: "Get the first place 10 times",
            allStep: 10,
            rewardNum: 600,
            getCurrStep$: () => Laya.CyzClassMap$.GameData.getNum1Times$(),
            isDone$: () => Laya.CyzClassMap$.GameData.getNum1TimesDone$(),
            onDone$: () => Laya.CyzClassMap$.GameData.setNum1TimesDone$()
        }, {
            desc: "Hit 1,000 buildings",
            allStep: 1e3,
            rewardNum: 2e3,
            getCurrStep$: () => Laya.CyzClassMap$.GameData.getDestroyBuilding$(),
            isDone$: () => Laya.CyzClassMap$.GameData.getDestroyBuildingDone$(),
            onDone$: () => Laya.CyzClassMap$.GameData.setDestroyBuildingDone$()
        }, {
            desc: "Hit 200 cars",
            allStep: 200,
            rewardNum: 800,
            getCurrStep$: () => Laya.CyzClassMap$.GameData.getDestroyCar$(),
            isDone$: () => Laya.CyzClassMap$.GameData.getDestroyCarDone$(),
            onDone$: () => Laya.CyzClassMap$.GameData.setDestroyCarDone$()
        }, {
            desc: "Stormtromp 80 times",
            allStep: 80,
            rewardNum: 800,
            getCurrStep$: () => Laya.CyzClassMap$.GameData.getBaozouTimes$(),
            isDone$: () => Laya.CyzClassMap$.GameData.getBaozouTimesDone$(),
            onDone$: () => Laya.CyzClassMap$.GameData.setBaozouTimesDone$()
        }, {
            desc: "Reach level 8 15 times",
            allStep: 15,
            rewardNum: 1500,
            getCurrStep$: () => Laya.CyzClassMap$.GameData.getLv8Achieve$(),
            isDone$: () => Laya.CyzClassMap$.GameData.getLv8AchieveDone$(),
            onDone$: () => Laya.CyzClassMap$.GameData.setLv8AchieveDone$()
        }], B.Tasks$ = [{
            desc: "Kill 15 enemies",
            allStep: 15,
            rewardNum: 600,
            getCurrStep$: () => Laya.CyzClassMap$.GameData.getKillDino$(),
            isDone$: () => Laya.CyzClassMap$.GameData.getKillDinoDone$(),
            onDone$: () => Laya.CyzClassMap$.GameData.setKillDinoDone$()
        }, {
            desc: "Storm away five times",
            allStep: 5,
            rewardNum: 600,
            getCurrStep$: () => Laya.CyzClassMap$.GameData.getBaozouTimes$(),
            isDone$: () => Laya.CyzClassMap$.GameData.getBaozouTimesDone$(),
            onDone$: () => Laya.CyzClassMap$.GameData.setBaozouTimesDone$()
        }, {
            desc: "Watch the video ad 3 times",
            allStep: 3,
            rewardNum: 1800,
            getCurrStep$: () => Laya.CyzClassMap$.GameData.getWatchAdTimes$(),
            isDone$: () => Laya.CyzClassMap$.GameData.getWatchAdTimesDone$(),
            onDone$: () => Laya.CyzClassMap$.GameData.setWatchAdTimesDone$()
        }, {
            desc: "Hit 80 buildings",
            allStep: 80,
            rewardNum: 800,
            getCurrStep$: () => Laya.CyzClassMap$.GameData.getDestroyBuilding$(),
            isDone$: () => Laya.CyzClassMap$.GameData.getDestroyBuildingDone$(),
            onDone$: () => Laya.CyzClassMap$.GameData.setDestroyBuildingDone$()
        }, {
            desc: "Hit 60 cars",
            allStep: 60,
            rewardNum: 600,
            getCurrStep$: () => Laya.CyzClassMap$.GameData.getDestroyCar$(),
            isDone$: () => Laya.CyzClassMap$.GameData.getDestroyCarDone$(),
            onDone$: () => Laya.CyzClassMap$.GameData.setDestroyCarDone$()
        }, {
            desc: "Cost 4000 gold coins",
            allStep: 4e3,
            rewardNum: 800,
            getCurrStep$: () => Laya.CyzClassMap$.GameData.getUseCoin$(),
            isDone$: () => Laya.CyzClassMap$.GameData.getUseCoinDone$(),
            onDone$: () => Laya.CyzClassMap$.GameData.setUseCoinDone$()
        }, {
            desc: " Get the first place",
            allStep: 1,
            rewardNum: 1500,
            getCurrStep$: () => Laya.CyzClassMap$.GameData.getNum1Times$(),
            isDone$: () => Laya.CyzClassMap$.GameData.getNum1TimesDone$(),
            onDone$: () => Laya.CyzClassMap$.GameData.setNum1TimesDone$()
        }], window.clamp = function(e, t, i) {
            if (t > i) {
                let e = t;
                t = i, i = e;
            }
            return e < t ? t : e > i ? i : e;
        }, window.toRadian = function(e) {
            return e * Math.PI / 180;
        }, window.toDegree = function(e) {
            return 180 * e / Math.PI;
        }, window.randomRangeInt = function(e, t) {
            return Math.floor(function(e, t) {
                return Math.random() * (t - e) + e;
            }(e, t));
        }, window.findChildByNamePath$ = function(e, t) {
            if (null == e) return null;
            if (t) {
                if (t.destroyed) return null;
            } else {
                let e = Laya.stage;
                if (!e) return null;
                if (e.destroyed) return null;
                t = e;
            }
            let i = t,
                s = "/" !== e[0] ? 0 : 1,
                a = e.split("/");
            for (let e = s; e < a.length; e++) {
                let t = a[e];
                if (!(i = i.getChildByName(t))) return null;
            }
            return i;
        }, window.findComponentByType$ = function(e, t, i = !0) {
            let s = null;
            if (i && (s = e.getComponent(t))) return s;
            let a = e.numChildren;
            for (let i = 0; i < a; i++)
                if (s = e.getChildAt(i).getComponent(t)) return s;
            for (let i = 0; i < a; i++)
                if (s = findComponentByType$(e.getChildAt(i), t, !1)) return s;
            return null;
        }, window.get3DResourcePath$ = function(e, t = "roles/") {
            return t + e;
        };
    window.recursionEnableRenderer$ = function(e, t) {}, B.Ae$ = {
            enableAppMatrix$: !0,
            watchAdCDSec$: 120,
            coinBuyPagePrice$: [3e3, 4e3, 5e3],
            adBuyPagePrice$: [3e3, 4e3, 5e3],
            notEnoughCoinAward$: 5e3,
            bestCoinAward$: 3e3,
            coinAwardAmount$: [200, 250, 300, 350, 450, 500, 600, 700, 800],
            enemyLevelCtrl$: {
                toPlayerOdds$: .1,
                resetLevelOdds$: .2,
                lessThenWeight$: 6,
                greatThenWeight$: 0,
                maxLessThenPlayerLv$: 5,
                maxGreatThenPlayerLv$: 2,
                maxLessThenDamageLv$: 2,
                maxLessThenGrowthLv$: 2,
                maxLessThenSpeedLv$: 2
            },
            totalRoundSec$: 90,
            keyCountPerRound$: 1,
            meatCountPerRound$: 2,
            damageBase$: 100,
            moveSpeedBase$: 1.8,
            upgradePricePerLv$: {
                damage: 350,
                speed: 450,
                growth: 400
            },
            upgradePropertyFactors$: {
                damagePerLv: 20,
                damage: 17,
                speed: .02,
                growth: .1
            },
            freeSpinMaxTimes$: 3,
            skinTryOutOdds$: 0
        }, B.Mr$ = ["common/text_kill1.png", "common/text_kill2.png", "common/text_kill3.png", "common/text_kill4.png", "common/text_kill5.png", "common/text_kill6.png"],
        B.Ur$ = "common/text_larger_start.png", B.Vr$ = "common/text_faster_start.png",
        B.Gr$ = "common/text_levelup.png";
    class b {
        static registerEvent$(e, t, i, s = 0, a) {
            if ("string" == typeof t && !i[t]) return void console.error("无效的监听函数, 请检查", e, i, t);
            let n = this._eventData[e] || [];
            for (let e = 0; e < n.length; e++)
                if (n[e].target === i) return;
            n.push({
                target: i,
                callback: t,
                weight: s,
                source: a
            }), n.sort(function(e, t) {
                let i = e.weight,
                    s = t.weight;
                return i < s ? -1 : i > s ? 1 : i === s ? 0 : void 0;
            }), this._eventData[e] = n;
        }
        static dispatchEvent$(e, t, i) {
            let s = this._eventData[e] || [];
            for (let e = s.length - 1; e >= 0; e--) {
                let i = s[e],
                    a = i.callback,
                    n = i.target;
                i.source && i.source !== e || ("string" == typeof a ? n[a](t) : a.call(n, t));
            }
        }
        static releaseEvent$(e, t = null) {
            if (null === t)
                for (let t in this._eventData) {
                    let i = this._eventData[t];
                    if (i)
                        for (let t = 0; t < i.length; t++)
                            if (i[t].target === e) {
                                i.splice(t, 1);
                                break;
                            }
                } else {
                    let i = this._eventData[t];
                    if (!i) return;
                    for (let t = 0; t < i.length; t++)
                        if (i[t].target === e) {
                            i.splice(t, 1);
                            break;
                        }
                }
        }
        static releaseAllEvents$(e) {
            this.releaseEvent$(e, null);
        }
    }
    b._eventData = {};
    var x = new Laya.Vector3(),
        P = 30,
        T = 80;
    class M extends Laya.Script3D {
        constructor() {
            super(), this.collisionGroup = B.OBJ_TYPE$.HUMAN$, this.pool$ = null, this.score$ = 1;
        }
        onAwake() {
            this.addFollowWayPoints();
        }
        onEnable() {
            b.registerEvent$(B.Event$.GAME_PAUSED$, this.onGamePaused$, this), b.registerEvent$(B.Event$.GAME_RESUME$, this.onGameResume$, this);
        }
        onDisable() {
            b.releaseAllEvents$(this);
        }
        randomWayPoints$() {
            if (this._followWayPoints$) {
                let e = this.owner.transform,
                    t = [];
                t.push(e.position);
                let i = P + (T - P) * Math.random();
                x.setValue(i, 0, 0), C.rotateY$(x, new Laya.Vector3(0, 0, 0), toRadian(360 * Math.random()), x),
                    Laya.Vector3.add(x, e.position, x), t.push(x.clone()), this._followWayPoints$.wayPoints = t;
            }
        }
        stepUpdate() {
            if (curScene.isPaused) return;
            let e = Laya.CyzClassMap$.BattleScene.isPointInCamera(this.owner.transform.position);
            return e && this._followWayPoints$.done && this.randomWayPoints$(), e;
        }
        onCollision$(e, t, i) {}
        canCollision(e, t, i) {
            return (t.collisionGroup === B.OBJ_TYPE$.WALL$ || t.collisionGroup === B.OBJ_TYPE$.HOUSE$) && (this.randomWayPoints$(), !0);
        }
        recoverToPool$() {
            this.pool$ && this.pool$.recoverToPool$(this);
        }
        addFollowWayPoints() {
            this._followWayPoints$ = this.owner.addComponent(k), this._followWayPoints$.turnSpeed = 3;
        }
        onGamePaused$() {
            this._followWayPoints$ && (this._followWayPoints$.enabled = !1);
        }
        onGameResume$() {
            this._followWayPoints$ && (this._followWayPoints$.enabled = !0);
        }
    }
    class O {
        static initPool$(e) {
            this._boyPool$ = new m({
                poolSize: 80,
                resourceFileName: "Chicken.lh",
                poolSign: "man",
                gameObjectClass: M
            }), this._girlPool$ = new m({
                poolSize: 80,
                resourceFileName: "Pig.lh",
                poolSign: "woman",
                gameObjectClass: M
            }), this._humanGroup2Pool$ = new m({
                poolSize: 80,
                resourceFileName: "HumanGroup2.lh",
                poolSign: "human_group_2",
                gameObjectClass: M
            }), this._humanGroup3Pool$ = new m({
                poolSize: 80,
                resourceFileName: "HumanGroup3.lh",
                poolSign: "human_group_3",
                gameObjectClass: M
            }), this._boyPool$.loadPrototypeAndInitPool$(() => {
                this._girlPool$.loadPrototypeAndInitPool$(() => {
                    this._humanGroup2Pool$.loadPrototypeAndInitPool$(() => {
                        this._humanGroup3Pool$.loadPrototypeAndInitPool$(() => {
                            e();
                        });
                    });
                });
            });
        }
        static spawnBoy$() {
            let e = this._boyPool$.spawn$();
            return e.owner.transform.localScale = new Laya.Vector3(1, 1, 1), e.pool$ = this._boyPool$,
                e;
        }
        static spawnGirl$() {
            let e = this._girlPool$.spawn$();
            return e.owner.transform.localScale = new Laya.Vector3(1, 1, 1), e.pool$ = this._girlPool$,
                e;
        }
        static spawnHumanGroup2$() {
            let e = this._humanGroup2Pool$.spawn$();
            return e.owner.transform.localScale = new Laya.Vector3(1, 1, 1), e.pool$ = this._humanGroup2Pool$,
                e;
        }
        static spawnHumanGroup3$() {
            let e = this._humanGroup3Pool$.spawn$();
            return e.owner.transform.localScale = new Laya.Vector3(1, 1, 1), e.pool$ = this._humanGroup3Pool$,
                e;
        }
    }
    O._boyPool$ = null, O._girlPool$ = null, O._humanGroup2Pool$ = null, O._humanGroup3Pool$ = null;
    class N extends Laya.Script3D {
        static loadPrototypeAndInitPool$(e) {
            this._pool$.loadPrototypeAndInitPool$(e);
        }
        static spawn$() {
            return this._pool$.spawn$();
        }
        recoverToPool$() {
            N._pool$.recoverToPool$(this);
        }
        onCollision$(e, t, i) {
            if (t && t.collisionGroup === B.OBJ_TYPE$.DINOSAUR$) {
                let e = t;
                e.isPlayer && (Laya.SoundManager.playSound(B.Sound$.PICK_KEY$, 1), b.dispatchEvent$(B.Event$.PICKUP_KEY$, {
                    dinosaur: e,
                    key: this
                }), pgdk$.shakePhone$(!0), this.owner.removeSelf(), Laya.timer.once(1e3, this, function() {
                    this.recoverToPool$();
                }.bind(this)));
            }
        }
        onUpdate() {
            let e = this.owner.transform,
                t = e.rotationEuler;
            t.y -= 2, e.rotationEuler = t;
        }
    }
    N.option$ = {
        poolSize: 10,
        resourceFileName: "Key.lh",
        poolSign: "Key3D",
        gameObjectClass: N
    }, N._pool$ = new m(N.option$);
    class U extends Laya.Script3D {
        constructor() {
            super(), this._exp$ = 100;
        }
        get exp() {
            return this._exp$;
        }
        static loadPrototypeAndInitPool$(e) {
            this._pool$.loadPrototypeAndInitPool$(e);
        }
        static spawn() {
            return this._pool$.spawn$();
        }
        recoverToPool$() {
            U._pool$.recoverToPool$(this);
        }
        setExp(e) {
            this._exp$ = e;
        }
        onCollision$(e, t, i) {
            if (t && t.collisionGroup === B.OBJ_TYPE$.DINOSAUR$) {
                let i = t;
                i.addExp(this._exp$), Laya.SoundManager.playSound(B.Sound$.PICK_KEY$, 1), b.dispatchEvent$(B.Event$.PICKUP_MEAT$, {
                    dinosaur: i,
                    meat: this,
                    bodyData: e
                }), pgdk$.shakePhone$(!0), this.owner.removeSelf(), Laya.timer.once(1e3, this, () => {
                    this.recoverToPool$();
                });
            }
        }
        onUpdate() {
            let e = this.owner.transform,
                t = e.rotationEuler;
            t.y -= 2, e.rotationEuler = t;
        }
    }
    U.poolOption = {
        poolSize: 10,
        resourceFileName: "Meat.lh",
        poolSign: "Meat3D",
        gameObjectClass: U
    }, U._pool$ = new m(U.poolOption);
    class R extends d {
        constructor() {
            super(), this.winName$ = "登录加载";
        }
        onUILoad$() {
            super.onUILoad$(), this._progressUpdateTime$ = 200, this._progressTime$ = this._progressUpdateTime$,
                this.loadedCallback$ = this.args$, Laya.Browser.onVVMiniGame || "vivo" == conf.channel ? this.packages$ = ["models", "roles", "res"] : this.packages$ = ["models", "roles", "res", "sounds"],
                this.preloadModelIds$ = [], this._tipText$ = ["Loading..."],
                this._tipIndex$ = 0, this.progressLength$ = this.packages$.length + 1, this.label_tip$ = r.getChildDeep$(this.owner, "label_tip"),
                this.panel_loading$ = r.getChildDeep$(this.owner, "panel_loading"), this.panel_loading$.sW$ = this.panel_loading$.width,
                this.panel_loading$.p$ = 0, this.img_loading_icon$ = r.getChildDeep$(this.owner, "img_loading_icon"),
                this.refreshTipLabel$(), this.refreshProgressUI$(), this.startLoading$();
        }
        startLoading$() {
            this.loadSubPacks$();
        }
        refreshNextTipIndex$() {
            this._tipIndex$ = Math.min(this._tipIndex$ + 1, this._tipText$.length - 1);
        }
        refreshTipLabel$() {
            this.label_tip$.text = this._tipText$[this._tipIndex$];
        }
        refreshProgressUI$() {
            if (!this.panel_loading$) return;
            let e;
            1 == this.panel_loading$.p$ ? null //(e = 0, this.refreshNextTipIndex$(), this.refreshTipLabel$()) 
                :
                e = Math.min(this.panel_loading$.p$ + 5e-4 * Laya.timer.delta, 1),
                this.panel_loading$.p$ = e, this.panel_loading$.width = this.panel_loading$.sW$ * (.9 * e),
                this.img_loading_icon$.x = this.panel_loading$.x + this.panel_loading$.width + 50;
        }
        loadSubPacks$() {
            if ("undefined" == typeof tt) return Laya.Browser.onQGMiniGame ? (console.log("进入oppo平台"),
                void this.onloadedPacks$()) : void(Laya.Browser.onMiniGame || Laya.Browser.onQQMiniGame ? this.loadPacksWx$() : Laya.Browser.onVVMiniGame ? this.loadPacksVivo$() : this.onloadedPacks$());
            this.onloadedPacks$();
        }
        loadPacksVivo$() {
            if (null == this.vivoSubPackVersion$) {
                let e = qg.getSystemInfoSync();
                if (!e) return void Laya.timer.once(100, this, this.loadPacksVivo$);
                this.vivoSubPackVersion$ = e.platformVersionCode >= 1052;
            }
            if (this.vivoSubPackVersion$) {
                let e = this.packages$.shift();
                if (!e) return void this.onloadedPacks$();
                this.loadSinglePackVivo$(e);
            } else {
                let e = this.packages$.length;
                for (; --e > -1;) {
                    let t = this.packages$[e];
                    require(t);
                }
                this.onloadedPacks$();
            }
        }
        loadPacksWx$() {
            var e = this.packages$.shift();
            e ? this.loadSinglePackWx$(e) : this.onloadedPacks$();
        }
        loadSinglePackWx$(e) {
            wx.loadSubpackage({
                name: e,
                success: this.onLoadedSinglePack.bind(this),
                fail: function(e) {
                    console.log("分包加载失败！！！！！重新加载", e);
                }
            });
        }
        loadSinglePackVivo$(e) {
            console.log("tcy 加载分包" + e), qg.loadSubpackage({
                name: e,
                success: this.onLoadedSinglePack.bind(this),
                fail: function(e) {
                    console.log("tcy 分包加载失败！！！！！重新加载", e);
                }
            });
        }
        onLoadedSinglePack(e) {
            console.log("tcy loadSubpackage success"), this.loadSubPacks$();
        }
        onloadedPacks$() {
            this.preloadModels$();
        }
        preloadModels$() {
            u.prepareLoad$(this.preloadModelIds$, Laya.Handler.create(this, this.onModelsPreloaded$));
        }
        onModelsPreloaded$() {
            var e;
            this.initPools(), e = (() => {
                this.loadingComplete$();
            }), y.initParticles(() => {
                O.initPool$(() => {
                    N.loadPrototypeAndInitPool$(() => {
                        console.log(" loadGameObject(Key)"), U.loadPrototypeAndInitPool$(() => {
                            console.log("loadGameObject(Meat)"), e();
                        });
                    });
                });
            });
        }
        initPools() {
            p.initPool$();
        }
        loadingComplete$() {
            platform.getInstance().yadstartup("Super-Tornado-Io", () => {
                window.WebAudioEngine.pause = Laya.LocalStorage.setJSON("Super-Tornado-io-musicState", window.WebAudioEngine.pause) || false;
                window.yad.on(Laya.Event.MOUSE_DOWN, window.yad, () => {
                    platform.getInstance().navigate("GAME", "LOGO");
                });

                this.loadedCallback$ && this.loadedCallback$(), this.loadedCallback$ = void 0, Laya.timer.once(100, this, this.destroy$);
                GAMESDK.recordOpen();
            });
        }
        onUpdate() {
            this._progressTime$ += Laya.timer.delta, this._progressTime$ > this._progressUpdateTime$ && (this._progressTime$ = 0),
                this.refreshProgressUI$();
        }
    }
    R.url = "Prefab/Loading/LoginLoadingWindow.json", R.className$ = "LoginLoadingUI",
        R.uiConfig$ = {
            layer: e.LAYER_TOP$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class V extends Laya.Script {
        constructor() {
            super(), this.canShowBanner$ = !1, this.hasAutoShowBanner$ = !1, this.BOTTOM_LIMIT = 40;
        }
        onStart() {
            window.pgdk$ && pgdk$.onUIOpen$(this), this.boxBanner$ && (this.boxBanner$.alpha = 0),
                this.boxGrid$ && (this.boxGrid$.alpha = 0), this.autoShowBanner$ && (this.hasAutoShowBanner$ = !0,
                    Laya.timer.once(100, this, this.restoreBanner$, [!0])), this.monitorEvents$();
        }
        monitorEvents$() {}
        cancelEvents$() {}
        restoreBanner$(e) {
            (this.canShowBanner$ || e) && (this._createBannerByUI$(), this.canShowBanner$ = !0);
        }
        hideBanner$() {
            this.canShowBanner$ && this.boxBanner$ && window.pgdk$ && pgdk$.hideBanner$();
        }
        markNoShowBanner$() {
            this.canShowBanner$ = !1;
        }
        _createBannerByUI$() {
            if (!this.boxBanner$) return;
            Laya.stage.height > 1280 && "number" == typeof this.boxBanner$.bottom && this.boxBanner$.bottom < this.BOTTOM_LIMIT && (this.boxBanner$.bottom = this.BOTTOM_LIMIT);
            let e = this._getRect$(this.boxBanner$),
                t = {
                    top: this.top$,
                    bottom: this.bottom$,
                    left: this.left$,
                    right: this.right$
                };
            pgdk$.showBanner$(e, t);
        }
        hideGridAd$() {
            this.boxGrid$ && window.pgdk$ && pgdk$.hideGridAd$();
        }
        _createGridAdByUI$() {
            if (!this.boxGrid$) return;
            Laya.stage.height > 1280 && "number" == typeof this.boxGrid$.bottom && this.boxGrid$.bottom < this.BOTTOM_LIMIT && (this.boxGrid$.bottom = this.BOTTOM_LIMIT);
            let e = this._getRect$(this.boxGrid$),
                t = {
                    top: this.top$,
                    bottom: this.bottom$,
                    left: this.left$,
                    right: this.right$
                };
            pgdk$.showGridAd$(e, t);
        }
        _getRect$(e) {
            let t = e.localToGlobal(new Laya.Point(0, 0)),
                i = e.localToGlobal(new Laya.Point(e.width, e.height)),
                s = t.x,
                a = t.y,
                n = i.x - t.x,
                o = i.y - t.y,
                r = Laya.stage.width / Laya.Browser.clientWidth,
                $ = Laya.stage.height / Laya.Browser.clientHeight;
            return {
                left: s / r,
                top: a / $,
                width: n / r,
                height: o / $
            };
        }
        onEnable() {
            window.pgdk$ && pgdk$.onUIOpen$(this), this.autoShowBanner$ && (this.hasAutoShowBanner$ = !0,
                Laya.timer.once(100, this, this.restoreBanner$, [!0]));
        }
        onDisable() {
            Laya.timer.clearAll(this), this.hasAutoShowBanner$ = !1, this.hideBanner$(), this.hideGridAd$(),
                window.pgdk$ && pgdk$.onUIClose$(this);
        }
        onDestroy() {
            Laya.timer.clearAll(this), this.cancelEvents$(), this.hasAutoShowBanner$ = !1, this.hideBanner$(),
                this.hideGridAd$(), window.pgdk$ && pgdk$.onUIClose$(this);
        }
    }
    class H {
        constructor() {}
        static getLocalData$(e, i) {
            let s;
            return e += t.GAME_SIGN$, null != (s = H.localDataDic$[e]) ? s : (null != (s = Laya.LocalStorage.getItem(e)) && "null" !== s && "undefined" !== s && "" !== s || null == i ? "boolean" == typeof i ? s = H._toBoolean$(s, i) : "number" == typeof i ? s = H._toNumber$(s, i) : "object" == typeof i && (s = H._toJSON$(s, i)) : s = i,
                H.localDataDic$[e] = s, s);
        }
        static _toBoolean$(e, t) {
            return "boolean" == typeof e ? e : null == e || "" == e ? t : "false" != e && ("true" == e || void 0);
        }
        static _toNumber$(e, t) {
            let i = Number(e);
            return isNaN(i) ? t : i;
        }
        static _toJSON$(e, t) {
            try {
                let i = JSON.parse(e);
                return "object" == typeof i && i ? i : t;
            } catch (e) {
                return t;
            }
        }
        static setLocalData$(e, i) {
            e += t.GAME_SIGN$, H.localDataDic$[e] = i, "object" == typeof i && (i = JSON.stringify(i)),
                Laya.LocalStorage.setItem(e, i);
        }
        clear$() {
            H.localDataDic$ = {};
        }
    }
    H.localDataDic$ = {}, H.KEY$ = {
        ACCOUNT$: "account",
        PASSWORD$: "password",
        SOUND$: "sound",
        MUSIC$: "music",
        SOUND_SWITCH$: "sound_switch",
        MuisiC_SWITCH$: "music_switch",
        SHAKE$: "shake",
        KEY_NUM$: "key_num",
        BATTLECOUNT$: "battleCount",
        GUIDEDONE$: "guideDone",
        HAVESKIN$: "have_skin",
        FIGHTGUIDE$: "fightGuide",
        COIN$: "COIN",
        LEVEL$: "LEVEL",
        INDUCE_TIMES$: "induce_times",
        INDUCE_TIME$: "induce_time",
        INDUCE_CNT$: "induce_cnt",
        BEST_SCORE$: "best_score",
        CUR_SKIN_ID$: "cur_skin_id",
        TRYWEAPON$: "tryWeaponId",
        SHOP_NEED_COIN$: "shopNeedCoins",
        BATTLE_MODELID$: "battleModelId",
        TIPS_CNT$: "tipsCnt"
    };
    class G {
        constructor() {}
        setShake$(e) {
            H.setLocalData$(H.KEY$.SHAKE$, e);
        }
        getShake$() {
            return H.getLocalData$(H.KEY$.SHAKE$, !0);
        }
        changeShakeSwitch$() {
            H.setLocalData$(H.KEY$.SHAKE$, !this.getShake$());
        }
        setSoundSwitch$(e) {
            H.setLocalData$(H.KEY$.SOUND_SWITCH$, e);
        }
        getSoundSwitch$() {
            return H.getLocalData$(H.KEY$.SOUND_SWITCH$, !0);
        }
        setMusicSwitch$(e) {
            H.setLocalData$(H.KEY$.MuisiC_SWITCH$, e);
        }
        getMusicSwitch$() {
            return H.getLocalData$(H.KEY$.MuisiC_SWITCH$, !0);
        }
        clear$() {}
    }
    class W {
        constructor() {
            this._coin$ = void 0, this._level$ = void 0, this._battleCount$ = void 0, this._tipsCnt$ = void 0;
        }
        get tipsCnt$() {
            return null == this._tipsCnt$ && (this._tipsCnt$ = H.getLocalData$(H.KEY$.TIPS_CNT$, 1)),
                this._tipsCnt$;
        }
        addTipsCnt$(e) {
            this._tipsCnt$ += e, H.setLocalData$(H.KEY$.TIPS_CNT$, this._tipsCnt$);
        }
        spentTipsCnt$(e) {
            this._tipsCnt$ -= e;
            let t = Math.max(0, this._tipsCnt$);
            H.setLocalData$(H.KEY$.TIPS_CNT$, t);
        }
        get coin$() {
            return null == this._coin$ && (this._coin$ = H.getLocalData$(H.KEY$.COIN$, 0)),
                this._coin$;
        }
        get level$() {
            return null == this._level$ && (this._level$ = H.getLocalData$(H.KEY$.LEVEL$, 1)),
                this._level$;
        }
        get battleCount$() {
            return null == this._battleCount$ && (this._battleCount$ = H.getLocalData$(H.KEY$.BATTLECOUNT$, 0)),
                this._battleCount$;
        }
        setBattleCount$(e) {
            this._battleCount$ = e, H.setLocalData$(H.KEY$.BATTLECOUNT$, this._battleCount$);
        }
        onGetCoin$(e) {
            this._coin$ = this.coin$ + e, H.setLocalData$(H.KEY$.COIN$, this._coin$);
        }
        onSpendCoin$(e) {
            this._coin$ = this.coin$ - e, this._coin$ = Math.max(0, this._coin$), H.setLocalData$(H.KEY$.COIN$, this._coin$);
        }
        passLevel$() {
            this._level$ = this.level$ + 1, H.setLocalData$(H.KEY$.LEVEL$, this._level$);
        }
        clear$() {}
    }
    class z {
        constructor() {
            this.initData$();
        }
        initData$() {
            this.sceneLoaded$ = !1, this.fight_state$ = 0, this.roleCtr$ = void 0, this.controlMode$ = void 0,
                this.getedCoinCnt$ = 0, this._level$ = 0, this._curLevStar$ = 0, this._battleModelId$ = void 0,
                this._customData$ = void 0, this.levsCnt$ = t.LEVS_CNT$, this._curSelectLev$ = void 0,
                this._buildMap$ = {};
        }
        get customShowDatas$() {
            if (null == this._customData$) {
                let e;
                this._customData$ = [];
                let t, i = 0,
                    s = [];
                for (e = 1; e < this.levsCnt$; e++) t = this.getLevBattleData$(e), s.push(t), e % 20 == 0 && (this._customData$.push({
                    tag: Math.min(5, i),
                    levs: s
                }), s = [], i++);
            }
            return this._customData$;
        }
        get level$() {
            return this.curSelectLev$ ? this.curSelectLev$ : (0 == this._level$ && (this._level$ = H.getLocalData$(H.KEY$.LEVEL$, 20)),
                this._level$);
        }
        set curSelectLev$(e) {
            this._curSelectLev$ = e;
        }
        get curSelectLev$() {
            return this._curSelectLev$;
        }
        addBuildMap$(e) {
            let t, i, s = r.getPosIdx$(e.minX$),
                a = r.getPosIdx$(e.maxX$),
                n = r.getPosIdx$(e.minZ$),
                o = r.getPosIdx$(e.maxZ$);
            for (let r = s; r <= a; r++)
                for (let s = n; s <= o; s++)(i = this._buildMap$[r]) || (i = this._buildMap$[r] = {}),
                    (t = i[s]) || (t = i[s] = []), t.push(e);
        }
        getBuildsByPos$(e, t) {
            let i, s, a, n, o = r.getPosIdx$(e.x - t),
                $ = r.getPosIdx$(e.x + t),
                h = r.getPosIdx$(e.z - t),
                l = r.getPosIdx$(e.z + t),
                d = [];
            for (let e = o; e <= $; e++)
                for (let t = h; t <= l; t++)
                    if ((s = this._buildMap$[e]) && (i = s[t]))
                        for (n = i.length; --n > -1;)(a = i[n]).destroyed ? i.splice(n, 1) : d.indexOf(a) > -1 || d.push(a);
            return d;
        }
        getLevBattleData$(e) {
            let t = H.getLocalData$("levBattleData" + e, {
                failCnt: 0,
                isPass: !1,
                bestScore: 0,
                locked: !0
            });
            return 1 == e && (t.locked = !1), t.isPass && (t.failCnt = 0, t.locked = !1), t;
        }
        addLevFailCnt$(e) {
            let t = "levBattleData",
                i = H.getLocalData$(t + e, {
                    failCnt: 0,
                    isPass: !1,
                    bestScore: 0,
                    locked: !1
                });
            i.failCnt++, H.setLocalData$(t + e, i);
        }
        get curLevStar$() {
            return this._curLevStar$;
        }
        set curLevStar$(e) {
            this._curLevStar$ = e;
        }
        setLevBestScore$(e, t) {
            let i = "levBattleData",
                s = H.getLocalData$(i + e, {
                    failCnt: 0,
                    isPass: !1,
                    bestScore: 0,
                    locked: !1
                });
            s.bestScore ? s.bestScore < t && (s.bestScore = t) : s.bestScore = t, H.setLocalData$(i + e, s);
        }
        levelPass$() {
            let e = "levBattleData",
                t = H.getLocalData$(e + this.level$, {
                    failCnt: 0,
                    isPass: !1,
                    bestScore: 0,
                    locked: !1
                });
            t.isPass = !0, t.locked = !1, H.setLocalData$(e + this.level$, t), this._level$ = this.level$ + 1,
                H.setLocalData$(H.KEY$.LEVEL$, this._level$);
        }
        unlockLev$(e) {
            let i = e + 1;
            if (i > t.HAVE_OPEN_LEV$) return;
            let s = this.getLevBattleData$(i);
            s.locked = !1, H.setLocalData$("levBattleData" + i, s);
        }
        levelFail$() {}
        markSceneLoaded$() {
            this.sceneLoaded$ = !0;
        }
        setControlMode$(e) {
            e != this.controlMode$ && (this.controlMode$ = e, H.setLocalData$(H.KEY$.CONTROL_MODE$, e));
        }
        getControlMode$() {
            return void 0 !== this.controlMode$ ? this.controlMode$ : (this.controlMode$ = H.getLocalData$(H.KEY$.CONTROL_MODE$, t.CONTROL_MODE$.FLOAT$),
                void 0 !== this.controlMode$ ? this.controlMode$ : (H.setLocalData$(H.KEY$.CONTROL_MODE$, t.CONTROL_MODE$.FLOAT$),
                    this.controlMode$));
        }
        getCoin$() {
            this.getedCoinCnt$++;
        }
        get battleModelId$() {
            return null == this._battleModelId$ && (this._battleModelId$ = H.getLocalData$(H.KEY$.BATTLE_MODELID$, 1003)),
                this._battleModelId$;
        }
        set battleModelId$(e) {
            this._battleModelId$ = e, H.setLocalData$(H.KEY$.BATTLE_MODELID$, this._battleModelId$);
        }
        clear$() {
            this.sceneLoaded$ = !1, this.fight_state$ = 0, this.getedCoinCnt$ = 0, this._buildMap$ = {};
        }
    }
    class F {
        constructor() {
            this.initData$();
        }
        initData$() {
            this._curSkinGoodsId$ = void 0, this._skinGoodsIds$ = void 0, this._shopShowDatas$ = void 0,
                this._trySkinGoodId$ = void 0, this._lotteryNeedCoins$ = void 0;
        }
        get curSkinGoodsId$() {
            return null == this._curSkinGoodsId$ && (this._curSkinGoodsId$ = H.getLocalData$(H.KEY$.CUR_SKIN_ID$, 1001)),
                this._curSkinGoodsId$;
        }
        get trySkinGoodsId$() {
            return this._trySkinGoodId$;
        }
        set trySkinGoodsId$(e) {
            this._trySkinGoodId$ = e;
        }
        clearTrySkinId$() {
            this._trySkinGoodId$ = void 0;
        }
        set curSkinGoodsId$(e) {
            this._curSkinGoodsId$ = e, H.setLocalData$(H.KEY$.CUR_SKIN_ID$, this._curSkinGoodsId$);
        }
        get lotteryNeedCoin$() {
            if (null == this._lotteryNeedCoins$) {
                let e, t, i;
                for (e in this._lotteryNeedCoins$ = [], D.shop) e = Number(e), (i = D.shop[e]) && 1 == i.isShow && (t = i.buyValue1) > 0 && this._lotteryNeedCoins$.push(t);
            }
            return H.getLocalData$(H.KEY$.SHOP_NEED_COIN$, this._lotteryNeedCoins$);
        }
        set lotteryNeedCoin$(e) {
            this._lotteryNeedCoins$ = e, H.setLocalData$(H.KEY$.SHOP_NEED_COIN$, this._lotteryNeedCoins$);
        }
        get shopShowDatas$() {
            if (null == this._shopShowDatas$) {
                let e, t, i, s, a, n;
                for (e in this._shopShowDatas$ = [], D.shop) e = Number(e), (t = D.shop[e]) && 1 == t.isShow && (a = t.itemId,
                    i = (n = D.SpritePath[t.icon]).chs, s = t.buyValue1, this._shopShowDatas$.push({
                        id: e,
                        itemId: a,
                        skin: i,
                        coin: s
                    }));
            }
            return this._shopShowDatas$;
        }
        get skinGoodsIds$() {
            if (null == this._skinGoodsIds$) {
                this._skinGoodsIds$ = H.getLocalData$(H.KEY$.HAVESKIN$, [1001]);
                let e, t = this._skinGoodsIds$.length;
                for (; --t > -1;) "string" == typeof(e = this._skinGoodsIds$[t]) && (this._skinGoodsIds$[t] = Number(e));
            }
            return this._skinGoodsIds$;
        }
        isHaveSkin$(e) {
            return this.skinGoodsIds$.indexOf(e) > -1;
        }
        addSkin$(e) {
            this.isHaveSkin$(e) || (this._skinGoodsIds$ = this.skinGoodsIds$, this._skinGoodsIds$.push(e),
                H.setLocalData$(H.KEY$.HAVESKIN$, this._skinGoodsIds$), this.curSkinGoodsId$ = e);
        }
        getTrySkinId$() {
            let e, t = this.skinGoodsIds$,
                i = this.shopShowDatas$,
                s = [];
            for (var a in i)(e = i[a]).id && -1 == t.indexOf(e.id) && s.push(e.id);
            if (0 != s.length) return r.arrayRandom$(s);
        }
        getNoHaveSkinIds$() {
            let e, t = this.skinGoodsIds$,
                i = this.shopShowDatas$,
                s = [];
            for (var a in i)(e = i[a]).id && -1 == t.indexOf(e.id) && s.push(e.id);
            return 0 == s.length ? [] : s;
        }
        clear$() {
            this._curSkinGoodsId$ = 0, this._skinGoodsIds$ = [];
        }
    }
    class Y {
        constructor() {
            this.inited$ = !1, this.initedCB$ = void 0, window.dataMgr = this;
        }
        static getInstance$() {
            return null == Y.instance$ && (Y.instance$ = new Y()), Y.instance$;
        }
        get isInited$() {
            return this.inited$;
        }
        init$(e) {
            this.initedCB$ = e, this.initDatas$(), this.initComplete$();
        }
        initDatas$() {
            this.localData$ = new H(), this.settingData$ = new G(), this.userData$ = new W(),
                this.battleData$ = new z(), this.shopData$ = new F();
        }
        initComplete$() {
            this.inited$ = !0, this.initedCB$ && this.initedCB$();
        }
        clear$() {
            this.localData$ && this.localData$.clear$(), this.settingData$ && this.settingData$.clear$(),
                this.userData$ && this.userData$.clear$(), this.battleData$ && this.battleData$.clear$(),
                this.shopData$ && this.shopData$.clear$();
        }
    }
    Y.instance$ = void 0;
    class K extends Laya.Script3D {
        static remove$(e) {
            this.instance$ && (this.instance$._xa$.items$.remove$(e), this.instance$._xr$.items$.remove$(e),
                this.instance$._za$.items$.remove$(e), this.instance$._zr$.items$.remove$(e));
        }
        constructor() {
            super(), this._battleData$ = Y.getInstance$().battleData$, window.destroyableObjectOptimizer = this,
                K.instance$ = this, this._hasInit$ = !1, this._xa$ = {}, this._xr$ = {}, this._za$ = {},
                this._zr$ = {};
        }
        _init$() {
            this._hasInit$ || window.curScene && curScene.playerDino && !curScene.playerDino.isDied && curScene.destroyableSpr$ && (this._hasInit$ = !0,
                this._xa$.items$ = [], this._xr$.items$ = [], this._za$.items$ = [], this._zr$.items$ = [],
                this._needRefreshItems$ = [], this._sort$());
        }
        _sort$() {
            let e = curScene.destroyableSpr$.numChildren;
            for (var t = 0; t < e; t++) {
                let e = curScene.destroyableSpr$.getChildAt(t),
                    i = this._getBounds$(e);
                e.minX$ = i.min.x, e.minZ$ = i.min.z, e.maxX$ = i.max.x, e.maxZ$ = i.max.z, e.r$ = Math.sqrt(Math.pow(e.maxX$ - e.minX$, 2) + Math.pow(e.maxZ$ - e.minZ$, 2)),
                    this._xa$.items$.push(e), this._xr$.items$.push(e), this._za$.items$.push(e), this._zr$.items$.push(e),
                    e.showXa$ = !0, e.showXr$ = !0, e.showZa$ = !0, e.showZr$ = !0, this._battleData$.addBuildMap$(e);
            }
            this._xa$.items$.sort(this._sortXa$), this._xr$.items$.sort(this._sortXr$), this._za$.items$.sort(this._sortZa$),
                this._zr$.items$.sort(this._sortZr$), this._xa$.index$ = 0, this._xr$.index$ = 0,
                this._za$.index$ = 0, this._zr$.index$ = 0;
        }
        _sortXa$(e, t) {
            return e.minX$ - t.minX$;
        }
        _sortXr$(e, t) {
            return e.maxX$ - t.maxX$;
        }
        _sortZa$(e, t) {
            return e.minZ$ - t.minZ$;
        }
        _sortZr$(e, t) {
            return e.maxZ$ - t.maxZ$;
        }
        _getBounds$(e, t) {
            t || (t = {
                min: new Laya.Vector3(999999999, 999999999, 999999999),
                max: new Laya.Vector3(-999999999, -999999999, -999999999)
            }), e.meshRenderer && this._updateBounds$(t, e.meshRenderer.bounds);
            for (var i = 0; i < e.numChildren; i++) this._getBounds$(e.getChildAt(i), t);
            return t;
        }
        _updateBounds$(e, t) {
            e.min.x = Math.min(t._boundBox.min.x, e.min.x), e.min.y = Math.min(t._boundBox.min.y, e.min.y),
                e.min.z = Math.min(t._boundBox.min.z, e.min.z), e.max.x = Math.max(t._boundBox.max.x, e.max.x),
                e.max.y = Math.max(t._boundBox.max.y, e.max.y), e.max.z = Math.max(t._boundBox.max.z, e.max.z);
        }
        onUpdate() {
            if (this._init$(), !this._hasInit$) return;
            if (!curScene.playerDino || curScene.playerDino.isDied || !curScene.itemCache$) return;
            let e, t = curScene.playerDino.cameraScale$,
                i = curScene.playerDino.owner.transform.localPosition,
                s = i.x - 15 * t,
                a = i.x + 15 * t,
                n = i.z - 20 * t,
                o = i.z + 40 * t,
                r = this._xa$,
                $ = r.items$;
            for (;;) {
                let e = $[r.index$];
                if (!(e && e.minX$ < a)) {
                    if (e && e.minX$ > a && e.showXa$) {
                        e.showXa$ = !1, this._addRefreshSpr$(e);
                        let t = r.index$ + 1;
                        for (e = $[t]; e && e.minX$ > a && e.showXa$;) e.showXa$ = !1, this._addRefreshSpr$(e),
                            e = $[++t];
                        break;
                    }
                    break;
                }
                e.showXa$ = !0, r.index$++, this._addRefreshSpr$(e);
            }
            for (;;) {
                let e = $[r.index$];
                if (!(e && e.minX$ > a)) {
                    if (e && e.minX$ < a && !e.showXa$) {
                        e.showXa$ = !0, this._addRefreshSpr$(e);
                        let t = r.index$ - 1;
                        for (e = $[t]; e && e.minX$ < a && !e.showXa$;) e.showXa$ = !0, this._addRefreshSpr$(e),
                            e = $[--t];
                        break;
                    }
                    break;
                }
                e.showXa$ = !1, r.index$--, this._addRefreshSpr$(e);
            }
            for (r.index$ = Math.min(Math.max(0, r.index$), $.length - 1), $ = (r = this._xr$).items$;;) {
                let e = $[r.index$];
                if (!(e && e.maxX$ < s)) {
                    if (e && e.maxX$ > s && !e.showXr$) {
                        e.showXr$ = !0, this._addRefreshSpr$(e);
                        let t = r.index$ + 1;
                        for (e = $[t]; e && e.maxX$ > s && e.showXr$;) e.showXr$ = !0, this._addRefreshSpr$(e),
                            e = $[++t];
                        break;
                    }
                    break;
                }
                e.showXr$ = !1, r.index$++, this._addRefreshSpr$(e);
            }
            for (;;) {
                let e = $[r.index$];
                if (!(e && e.maxX$ > s)) {
                    if (e && e.maxX$ < s && e.showXr$) {
                        e.showXr$ = !1, this._addRefreshSpr$(e);
                        let t = r.index$ - 1;
                        for (e = $[t]; e && e.maxX$ < s && e.showXr$;) e.showXr$ = !1, this._addRefreshSpr$(e),
                            e = $[--t];
                        break;
                    }
                    break;
                }
                e.showXr$ = !0, r.index$--, this._addRefreshSpr$(e);
            }
            for (r.index$ = Math.min(Math.max(0, r.index$), $.length - 1), $ = (r = this._za$).items$;;) {
                let e = $[r.index$];
                if (!(e && e.minZ$ < o)) {
                    if (e && e.minZ$ > o && e.showZa$) {
                        e.showZa$ = !1, this._addRefreshSpr$(e);
                        let t = r.index$ + 1;
                        for (e = $[t]; e && e.minZ$ > o && e.showZa$;) e.showZa$ = !1, this._addRefreshSpr$(e),
                            e = $[++t];
                        break;
                    }
                    break;
                }
                e.showZa$ = !0, r.index$++, this._addRefreshSpr$(e);
            }
            for (;;) {
                let e = $[r.index$];
                if (!(e && e.minZ$ > o)) {
                    if (e && e.minZ$ < a && !e.showZa$) {
                        e.showZa$ = !0, this._addRefreshSpr$(e);
                        let t = r.index$ - 1;
                        for (e = $[t]; e && e.minZ$ < a && !e.showZa$;) e.showZa$ = !0, this._addRefreshSpr$(e),
                            e = $[--t];
                        break;
                    }
                    break;
                }
                e.showZa$ = !1, r.index$--, this._addRefreshSpr$(e);
            }
            for (r.index$ = Math.min(Math.max(0, r.index$), $.length - 1), $ = (r = this._zr$).items$;;) {
                let e = $[r.index$];
                if (!(e && e.maxZ$ < n)) {
                    if (e && e.maxZ$ > n && !e.showZr$) {
                        e.showZr$ = !0, this._addRefreshSpr$(e);
                        let t = r.index$ + 1;
                        for (e = $[t]; e && e.maxZ$ > n && e.showZr$;) e.showZr$ = !0, this._addRefreshSpr$(e),
                            e = $[++t];
                        break;
                    }
                    break;
                }
                e.showZr$ = !1, r.index$++, this._addRefreshSpr$(e);
            }
            for (;;) {
                let e = $[r.index$];
                if (!(e && e.maxZ$ > n)) {
                    if (e && e.maxZ$ < n && e.showZr$) {
                        e.showZr$ = !1, this._addRefreshSpr$(e);
                        let t = r.index$ - 1;
                        for (e = $[t]; e && e.maxZ$ < n && e.showZr$;) e.showZr$ = !1, this._addRefreshSpr$(e),
                            e = $[--t];
                        break;
                    }
                    break;
                }
                e.showZr$ = !0, r.index$--, this._addRefreshSpr$(e);
            }
            for (r.index$ = Math.min(Math.max(0, r.index$), $.length - 1); e = this._needRefreshItems$.shift();) this._updateShow$(e);
        }
        _addRefreshSpr$(e) {
            this._needRefreshItems$.push(e);
        }
        _updateShow$(e) {
            e.active = !!(e.showXa$ && e.showXr$ && e.showZa$ && e.showZr$);
        }
        print$() {
            let e, t = {},
                i = this._xa$.items$;
            for (var s = 0; s < i.length; s++)
                if ((e = i[s]).active) {
                    let i = t[e.name] || 0;
                    t[e.name] = ++i;
                }
            console.log("统计", t);
        }
    }
    class j {
        constructor() {
            this.inited$ = !1, this.initedCB$ = void 0, this._deltaTime$ = 0, this._timeScale$ = 1,
                this._maxDeltaTime$ = 1e3 * Laya.Scene3D.physicsSettings.fixedTimeStep;
        }
        static getInstance$() {
            return null == j.instance$ && (j.instance$ = new j()), j.instance$;
        }
        get isInited$() {
            return this.inited$;
        }
        get deltaTime$() {
            return this._deltaTime$ = Math.min(Laya.timer.delta * this._timeScale$, this._maxDeltaTime$),
                this._deltaTime$;
        }
        init$(e) {
            this.initedCB$ = e, this.initComplete$();
        }
        initComplete$() {
            this.inited$ = !0, this.initedCB$ && this.initedCB$();
        }
    }
    j.instance$ = void 0;
    class q extends Laya.Script3D {
        constructor() {
            super(), this.totalHp$ = 10, this._hp$ = 10, this._isDestoryed$ = !1, this._canHit$ = !0,
                this._shakeMaxOffset$ = 7, this._shakeCutSpeed$ = .08, this._shakeSpacing$ = 30,
                this._shakeCountT$ = 0;
        }
        setTotalHp$(e) {
            this.totalHp$ = e, this._hp$ = e;
        }
        onCollision$(e, t, i) {
            if (t && t.collisionGroup === B.OBJ_TYPE$.DINOSAUR$) {
                let s = t;
                this.hitNew(s, e, t, i);
            }
        }
        canDestroy(e) {
            return this._hp$ <= e.damage;
        }
        isToBigger(e) {
            return this._hp$ / e.damage >= 6;
        }
        hit(e, t, i, s) {
            if (this._isDestoryed$ || !this._canHit$) return;
            let a = e.damage,
                n = this._hp$,
                o = t.body;
            i.body;
            this._hp$ -= a, this._hp$ <= 0 ? (b.dispatchEvent$(B.Event$.DESTROY_DESTROYABLE_OBJECT$, {
                destroyableObject: this,
                dinosaur: e,
                bodyData: t
            }), s.removeBody(o), Laya.CyzClassMap$.BattleScene.isSpriteInCamera(this.owner) ? this.destroyFlyEffect$(e) : (K.remove$(this.owner),
                this.owner.destroy(!0))) : (this._canHit$ = !1, this.owner.timerOnce(150, this, () => {
                this._canHit$ = !0;
            }), this.hitEffect(n, e));
        }
        hitNew(e, t, i, s) {
            if (this._isDestoryed$ || !this._canHit$) return;
            let a = e.damage,
                n = this._hp$;
            this._hp$ -= a, this._hp$ <= 0 ? (b.dispatchEvent$(B.Event$.DESTROY_DESTROYABLE_OBJECT$, {
                destroyableObject: this,
                dinosaur: e,
                bodyData: this
            }), Laya.CyzClassMap$.BattleScene.isSpriteInCamera(this.owner) ? this.destroyFlyEffect$(e) : (K.remove$(this.owner),
                this.owner.destroy(!0))) : (this._canHit$ = !1, this.owner.timerOnce(150, this, () => {
                this._canHit$ = !0;
            }), this.hitEffect(n, e));
        }
        hitEffect(e, t) {
            let i = this.owner.transform.position.clone();
            i.y += 5, Laya.CyzClassMap$.BattleScene.isPointInCamera(i) && y.showBuildHitParticle$(this.owner.scene, i),
                b.dispatchEvent$(B.Event$.SHOW_HP_BAR$, {
                    hpBarOwner: this,
                    newProgress: this._hp$ / this.totalHp$,
                    oldProgress: e / this.totalHp$,
                    position: i
                }), this._playShakeAnim$(1 - this._hp$ / this.totalHp$), t.isPlayer && pgdk$.shakePhone$(!1);
        }
        _playShakeAnim$(e) {
            this._targetOffsetAngle$ = e * this._shakeMaxOffset$;
        }
        _refreshShakeAnim$() {
            if (null == this._targetOffsetAngle$ || 0 == this._targetOffsetAngle$) return;
            let e = j.getInstance$().deltaTime$;
            if (this._shakeCountT$ > 0) return void(this._shakeCountT$ -= e);
            this._shakeCountT$ += this._shakeSpacing$;
            let t = this.owner.transform.rotationEuler,
                i = this._shakeCutSpeed$ * e;
            this._targetOffsetAngle$ = Math.max(0, this._targetOffsetAngle$ - i);
            let s = Math.random() * Math.PI * 2;
            t.x = this._targetOffsetAngle$ * Math.cos(s), t.z = this._targetOffsetAngle$ * Math.sin(s),
                this.owner.transform.rotationEuler = t;
        }
        destroyFlyEffect$(e) {
            let i = this.owner.transform.position.clone(),
                s = this.owner.name;
            i.y += 5;
            let a = this.cloneDestroyableObject();
            this.owner.scene.addChild(a), e.isPlayer && console.log("摧毁:", s), e.isPlayer && pgdk$.shakePhone$(!1),
                this.createBuildTrail$(e, a, t.SCORE_DIC$[s]), K.remove$(this.owner), this.owner.destroy(!0);
        }
        createBuildTrail$(e, t, i) {
            e.addExp(i), b.dispatchEvent$(B.Event$.DESTROY_OBJ$, {
                score: i,
                obj: this.owner,
                dinosaur: e
            }), e.rollUp$(t, function() {
                t && t.destroy(!0);
            });
        }
        cloneDestroyableObject() {
            let e = this.owner,
                t = Laya.Sprite3D.instantiate(e, null, !0, e.transform.position, e.transform.rotation);
            return t;
        }
        onUpdate() {
            this._refreshShakeAnim$();
        }
    }
    class X extends d {
        constructor() {
            super(), this.winName$ = "战斗加载界面", this.tasks$ = [], this.taskCnt$ = 0, this.players$ = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
                this.status$ = 0, this._loadingOjbCnt$ = 0, this.minX = 99999, this.maxX = -99999,
                this.minZ = 99999, this.maxZ = -99999;
        }
        onUILoad$() {
            super.onUILoad$(), this.setNodes$(), this.initUI$(), this.refreshUI$();
        }
        setNodes$() {
            this._playerLabel$ = r.getChildDeep$(this.owner, "playerLabel"), this._iconList$ = r.getChildDeep$(this.owner, "iconList");
        }
        initUI$() {
            this._playerLabel$.text = "0/15", this._iconList$.renderHandler = new Laya.Handler(this, this.renderHandler$);
        }
        startLoading$() {
            curScene.ready$ = !1;
            let e = curScene.cityData$;
            this.tasks$.push([e.Road, 1002, void 0, !0]), this.tasks$.push([e.Grass, 1003, void 0, !0]),
                this.tasks$.push([e.Road_Arrow, 1007]), this.tasks$.push([e.Road_Bare, 1008, void 0, !0]),
                this.tasks$.push([e.Road_Crossing, 1009]), this.tasks$.push([e.Road_Lines, 1010, void 0, !0]),
                this.tasks$.push([e.Road_ParkingLines, 1011]), this.tasks$.push([e.Sidewalk, 1013, void 0, !0]),
                this.tasks$.push([e.Sidewalk_Corner, 1014]), this.tasks$.push([e.Sidewalk_Dip, 1015]),
                this.tasks$.push([e.Sidewalk_Grate, 1016]), this.tasks$.push([e.Sidewalk_Merger, 1017]),
                this.tasks$.push([e.Sidewalk_Panel, 1018]), this.tasks$.push([e.Sidewalk_Straight, 1019, void 0, !0]),
                this.tasks$.push([e.Sidewalk_Corner_Tu, 1025]), this.tasks$.push([e.Sidewalk_Dip_Corner, 1026]),
                this.tasks$.push([e.WaterEdge_Corner, 1020]), this.tasks$.push([e.WaterEdge_Pipe, 1021]),
                this.tasks$.push([e.WaterEdge_Straight, 1023, void 0, !0]), this.tasks$.push([e.WaterEdge_Corner_Tu, 1024]),
                this.tasks$.push([e.Tree, 1001, curScene.destroyableSpr$, !1, B.OBJ_TYPE$.OTHER_DESTROYABLE_OBJECT$, 50]),
                this.tasks$.push([e.CarBlue, 1051, curScene.destroyableSpr$, !1, B.OBJ_TYPE$.CAR$, 100]),
                this.tasks$.push([e.CarRed, 1052, curScene.destroyableSpr$, !1, B.OBJ_TYPE$.CAR$, 100]),
                this.tasks$.push([e.CarYellow, 1053, curScene.destroyableSpr$, !1, B.OBJ_TYPE$.CAR$, 100]),
                this.tasks$.push([e.Shop1, 1055, curScene.destroyableSpr$, !1, B.OBJ_TYPE$.HOUSE$, 400]),
                this.tasks$.push([e.Shop2, 1056, curScene.destroyableSpr$, !1, B.OBJ_TYPE$.HOUSE$, 400]),
                this.tasks$.push([e.Shop3, 1057, curScene.destroyableSpr$, !1, B.OBJ_TYPE$.HOUSE$, 400]),
                this.tasks$.push([e.Shop4, 1058, curScene.destroyableSpr$, !1, B.OBJ_TYPE$.HOUSE$, 400]),
                this.tasks$.push([e.Shop5, 1059, curScene.destroyableSpr$, !1, B.OBJ_TYPE$.HOUSE$, 400]),
                this.tasks$.push([e.Shop6, 1060, curScene.destroyableSpr$, !1, B.OBJ_TYPE$.HOUSE$, 400]),
                this.tasks$.push([e.HouseRed, 1061, curScene.destroyableSpr$, !1, B.OBJ_TYPE$.HOUSE$, 500]),
                this.tasks$.push([e.HouseGreen, 1062, curScene.destroyableSpr$, !1, B.OBJ_TYPE$.HOUSE$, 500]),
                this.tasks$.push([e.TownHouseGreen, 1063, curScene.destroyableSpr$, !1, B.OBJ_TYPE$.HOUSE$, 500]),
                this.tasks$.push([e.TownHouseBlue, 1064, curScene.destroyableSpr$, !1, B.OBJ_TYPE$.HOUSE$, 500]),
                this.tasks$.push([e.TownHouseYellow, 1065, curScene.destroyableSpr$, !1, B.OBJ_TYPE$.HOUSE$, 500]),
                this.tasks$.push([e.Station, 1066, curScene.destroyableSpr$, !1, B.OBJ_TYPE$.HOUSE$, 1e3]),
                this.tasks$.push([e.OfficeMediumBlue, 1070, curScene.destroyableSpr$, !1, B.OBJ_TYPE$.HOUSE$, 1e3]),
                this.tasks$.push([e.OfficeMediumBrown, 1071, curScene.destroyableSpr$, !1, B.OBJ_TYPE$.HOUSE$, 1e3]),
                this.tasks$.push([e.OfficeStepped, 1072, curScene.destroyableSpr$, !1, B.OBJ_TYPE$.HOUSE$, 1e3]),
                this.tasks$.push([e.OfficeLargeDark, 1067, curScene.destroyableSpr$, !1, B.OBJ_TYPE$.HOUSE$, 2e3]),
                this.tasks$.push([e.OfficeLargeBrown2, 1068, curScene.destroyableSpr$, !1, B.OBJ_TYPE$.HOUSE$, 2e3]),
                this.tasks$.push([e.OfficeLargeBrown, 1069, curScene.destroyableSpr$, !1, B.OBJ_TYPE$.HOUSE$, 2e3]),
                this.tasks$.push([e.Tower, 1073, curScene.destroyableSpr$, !1, B.OBJ_TYPE$.HOUSE$, 5e3]),
                this.tasks$.push([e.Windmill, 1074, curScene.destroyableSpr$, !1, B.OBJ_TYPE$.HOUSE$, 5e3]),
                this.tasks$.push([e.Stadium, 1075, curScene.destroyableSpr$, !1, B.OBJ_TYPE$.HOUSE$, 5e3]);
            let t = curScene.baseScene$.addChild(new Laya.Sprite3D());
            t.name = "Walls", this.tasks$.push([e.Wall, 1054, t, !1, B.OBJ_TYPE$.WALL$]),
                this.taskCnt$ = this.tasks$.length, console.log("开始加载", new Date());
        }
        renderHandler$(e, t) {
            let i = r.getChildDeep$(e, "icon"),
                s = r.getChildDeep$(e, "defaultIcon"),
                a = this.players$[t];
            a ? (s.visible = !1, i.visible = !0, i.skin = a) : (s.visible = !0, i.visible = !1);
        }
        loadingComplete$() {
            this.loadedCallback$ && this.loadedCallback$(), this.loadedCallback$ = void 0, Laya.timer.once(1e3, this, this.destroy$);
        }
        onUpdate() {
            switch (this.status$) {
                case 0:
                    window.curScene && curScene.cityData$ && (this.startLoading$(), this.status$ = 1);
                    break;

                case 1:
                    if (0 === this._loadingOjbCnt$)
                        if (0 === this.tasks$.length) this.status$ = 2;
                        else {
                            let e = this.tasks$.removeAt$(0);
                            this._createItems$(e[0], e[1], e[2], e[3], e[4], e[5]);
                        }
                    this.refreshUI$();
                    break;

                case 2:
                    this.loadCity$();
            }
        }
        loadCity$() {
            curScene.onCityLoaded$(), Laya.timer.once(500, this, this.doClose$);
            for (let e in curScene.itemCache$) {
                let t = curScene.itemCache$[e];
                t && Laya.StaticBatchManager.combine(t);
            }
            this.status$ = 3;
        }
        refreshUI$() {
            if (0 === this.status$) return;
            let e = Math.min(1, .1 + (this.taskCnt$ - this.tasks$.length) / this.taskCnt$),
                t = Math.floor(15 * e);
            this.players$ = curScene.icons$.slice(0, t), this._iconList$.array = this.players$,
                this._playerLabel$.text = t + "/15";
        }
        _createItems$(e, t, i, s = !1, a, n) {
            if (!e) return;
            let o, r, $, h;
            for (let s = 0, l = e.length; s < l; s += 9) {
                o = e[s], r = e[s + 1], $ = e[s + 2], this._loadingOjbCnt$++;
                let l = i;
                (h = u.create$(l || curScene.citySpr$, t, Laya.Handler.create(this, function(e) {
                    if (this._loadingOjbCnt$--, 1013 === e._modelId$) {
                        let t = e.sprite$.transform.localScale,
                            i = e.sprite$.meshRenderer.material;
                        i.tilingOffset.x = 2 * t.x, i.tilingOffset.y = 2 * t.z;
                    }
                    let t = e.sprite$.addComponent(q);
                    t.setTotalHp$(n), t.collisionGroup = a;
                }))).setLocalPosition$(o, r, $), h.setLocalRotation$(e[s + 3], e[s + 4], e[s + 5]),
                    h.setLocalScale$(e[s + 6], e[s + 7], e[s + 8]);
            }
        }
        _getItemParent$(e, t) {
            let i = 100 * Math.floor((e + 200) / 30) + Math.floor((t + 170) / 30);
            !curScene.itemCache$ && (curScene.itemCache$ = []);
            let s = curScene.itemCache$[i];
            return s || ((s = curScene.baseScene$.addChild(new Laya.Sprite3D())).activeX$ = !0,
                s.activeZ$ = !0, curScene.itemCache$[i] = s), s;
        }
    }
    X.url = "Prefab/Web/Battle/BattleLoadingWindow.json", X.className$ = "BattleLoadingUI",
        X.uiConfig$ = {
            layer: e.LAYER_TOP$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class Q extends X {}
    Q.url = "Prefab/Qq/Battle/BattleLoadingWindowQq.json", Q.className$ = "BattleLoadingUIQq",
        Q.uiConfig$ = {
            layer: e.LAYER_TOP$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class J extends Laya.Script {
        constructor() {
            super(), this.pgTopView$ = null, this.size$ = 5, this.isLimitArea$ = !1, this.isShowAd$ = !0,
                this.xAlign$ = "left", this.yAlign$ = "top", this.lay$ = "landscape", this.initData$();
        }
        initData$() {
            this.blockAd$ = void 0, this.isOver$ = !1;
        }
        onStart() {
            this.owner.bgColor = "", this.createBlockAd$();
        }
        createBlockAd$() {
            window.pgdk$ && (this.blockAd$ = pgdk$.platformHandler$.createBlockAd$(this, this.owner, this.isLimitArea$, this.size$, this.xAlign$, this.yAlign$, this.lay$, this.onBlcokAdLoaded$.bind(this)));
        }
        onBlcokAdLoaded$() {
            this.owner.destroyed || this.refreshAdShow$();
        }
        refreshAdShow$() {
            this.blockAd$ && (!this.isOver$ && this.isShowAd$ ? (this.blockAd$.show(), console.log("格子广告展示")) : this.blockAd$.hide());
        }
        onOverUI$(e) {
            e == this.pgTopView$ && this.onOverAd$();
        }
        onReshowUI$(e) {
            e == this.pgTopView$ && this.onRecoverAd$();
        }
        onOverAd$() {
            this.isOver$ = !0, this.refreshAdShow$();
        }
        onRecoverAd$() {
            this.isOver$ = !1, this.refreshAdShow$();
        }
        showAd$() {
            this.isShowAd$ = !0, this.refreshAdShow$();
        }
        hideAd$() {
            this.isShowAd$ = !1, this.refreshAdShow$();
        }
        onDestroy() {
            pgdk$.platformHandler$.destroyBlockAd$(this), this.blockAd$ && this.blockAd$.destroy(),
                this.blockAd$ = void 0;
        }
    }
    class Z extends Laya.Script {
        constructor() {
            super(), this._dot$ = null, this._ring$ = null, this._box$ = null, this._touchDownPos$ = null,
                this._saveRingPos$ = null, this._saveDotPos$ = null, this._direction$ = new Laya.Vector2(0, 0),
                this._strength$ = 0;
        }
        onAwake() {
            this._box$ = this.owner, this._ring$ ? this._ringRadius$ = this._ring$.displayWidth / 2 : this._ringRadius$ = this.ringSize / 2,
                this._initTouchEvent$(), this._hideRingDotWhenFollowMode$();
        }
        onStart() {
            this._ring$ && (this._saveRingPos$ = new Laya.Point(this._ring$.x, this._ring$.y)),
                this._dot$ && (this._saveDotPos$ = new Laya.Point(this._dot$.x, this._dot$.y));
        }
        getStrength() {
            return this._strength$;
        }
        getDirection() {
            return this._direction$;
        }
        _hideRingDotWhenFollowMode$() {
            this._setRingDotVisible$(!1);
        }
        _setRingDotVisible$(e) {
            this._dot$ && (this._dot$.visible = e), this._ring$ && (this._ring$.visible = e);
        }
        _initTouchEvent$() {
            this.owner.on(Laya.Event.MOUSE_DOWN, this, this._touchStartEvent$), this.owner.on(Laya.Event.MOUSE_MOVE, this, this._touchMoveEvent$),
                this.owner.on(Laya.Event.MOUSE_UP, this, this._touchEndEvent$), this.owner.on(Laya.Event.MOUSE_OUT, this, this._touchCancelEvent$);
        }
        _touchStartEvent$(e) {
            let t = this._box$.getMousePoint();
            this._touchDownPos$ = new Laya.Point(t.x, t.y), this._ring$ && this._ring$.pos(t.x, t.y),
                this._dot$ && this._dot$.pos(t.x, t.y), this._setRingDotVisible$(!0), this._strength$ = 0,
                b.dispatchEvent$(B.JoyStick$.DOWN$, this);
        }
        _touchMoveEvent$(e) {
            let t = this._box$.getMousePoint();
            if (!this._touchDownPos$ || this._touchDownPos$.x === t.x && this._touchDownPos$.y === t.y) return !1;
            let i = new Laya.Point(t.x - this._touchDownPos$.x, t.y - this._touchDownPos$.y),
                s = i.distance(0, 0),
                a = new Laya.Point();
            if (a.copy(i), a.normalize(), this._dot$)
                if (this._ringRadius$ > s) this._dot$.pos(t.x, t.y);
                else {
                    let e = this._touchDownPos$.x + a.x * this._ringRadius$,
                        t = this._touchDownPos$.y + a.y * this._ringRadius$;
                    this._dot$.pos(e, t);
                }
            this._direction$.setValue(a.x, -a.y), this._strength$ = Math.max(0, Math.min(s / this._ringRadius$, 1)),
                b.dispatchEvent$(B.JoyStick$.DIRECTION_CHANGE$, this);
        }
        _touchEndEvent$(e) {
            this._touchEndOrCancel$(e), b.dispatchEvent$(B.JoyStick$.UP$, this);
        }
        _touchCancelEvent$(e) {
            this._touchEndOrCancel$(e), b.dispatchEvent$(B.JoyStick$.CANCEL$, this);
        }
        _touchEndOrCancel$(e) {
            if (!this._touchDownPos$) return;
            let t = this._box$.getMousePoint();
            const i = new Laya.Point(t.x - this._touchDownPos$.x, t.y - this._touchDownPos$.y).distance(0, 0);
            this._ring$ && this._ring$.pos(this._saveRingPos$.x, this._saveRingPos$.y), this._dot$ && this._dot$.pos(this._saveDotPos$.x, this._saveDotPos$.y),
                this._setRingDotVisible$(!1), this._strength$ = Math.max(0, Math.min(i / this._ringRadius$, 1));
        }
    }
    class ee {
        static formatTime$(e, t = !0) {
            let i = Math.floor(e % 60),
                s = i < 10 ? "0" + i : i.toString(),
                a = Math.floor(e / 60) % 60,
                n = a < 10 ? "0" + a : a.toString(),
                o = Math.floor(Math.floor(e / 60) / 60),
                r = o < 10 ? "0" + o : o.toString();
            return t ? r + ":" + n + ":" + s : n + ":" + s;
        }
        static randomElementFromArray$(e, t = !1) {
            let i = Math.floor(Math.random() * e.length),
                s = e[i];
            return t && e.splice(i, 1), s;
        }
    }
    class te {
        static getWatchAdCDSec$() {
            return this._getSwitchItem$("watchAdCDSec$");
        }
        static getNotEnoughCoinAward$() {
            return this._getSwitchItem$("notEnoughCoinAward$");
        }
        static getDamageBase$() {
            return this._getSwitchItem$("damageBase$");
        }
        static getMoveSpeedBase$() {
            return this._getSwitchItem$("moveSpeedBase$");
        }
        static getEnemyLevelCtrl$() {
            return this._getSwitchItem$("enemyLevelCtrl$");
        }
        static getUpgradePricePerLv$() {
            return this._getSwitchItem$("upgradePricePerLv$");
        }
        static getUpgradePropertyFactors$() {
            return this._getSwitchItem$("upgradePropertyFactors$");
        }
        static getTotalRoundSec$() {
            return this._getSwitchItem$("totalRoundSec$");
        }
        static getKeyCountPerRound$() {
            return this._getSwitchItem$("keyCountPerRound$");
        }
        static getMeatCountPerRound$() {
            return this._getSwitchItem$("meatCountPerRound$");
        }
        static getFreeSpinMaxTimes$() {
            return this._getSwitchItem$("freeSpinMaxTimes$");
        }
        static getCoinBuyPagePrice$() {
            return this._getSwitchItem$("coinBuyPagePrice$");
        }
        static getAdBuyPagePrice$() {
            return this._getSwitchItem$("adBuyPagePrice$");
        }
        static getBestCoinAward$() {
            return this._getSwitchItem$("bestCoinAward$");
        }
        static getCoinAwardAmount$() {
            return this._getSwitchItem$("coinAwardAmount$");
        }
        static getSkinTryOutOdds$() {
            return this._getSwitchItem("skinTryOutOdds$");
        }
        static getSwitchSettings$() {
            return B.Ae$;
        }
        static _getSwitchItem$(e) {
            let t = this.getSwitchSettings$()[e];
            return void 0 === t && (t = B.Ae$[e]), t;
        }
    }
    te._cityBannerCasualBlock$ = !1;
    class ie extends Laya.Script {
        onAwake() {
            this._label$ = this.owner;
        }
        onEnable() {
            b.registerEvent$(B.Event$.ROUND_TIME_CHANGED$, this.refresh$, this), this.refresh$({
                totalSec: te.getTotalRoundSec$(),
                remainSec: te.getTotalRoundSec$()
            });
        }
        onDisable() {
            b.releaseAllEvents$(this);
        }
        refresh$(e) {
            this._label$.text = ee.formatTime$(e.remainSec, !1);
        }
    }
    var se = ["battleUI/icon_battle1.png", "battleUI/icon_battle2.png", "battleUI/icon_battle3.png"];
    class ae extends Laya.Script {
        constructor() {
            super(), this._list$ = null, this._itemsData$ = null;
        }
        onAwake() {
            this._list$ = this.owner, this.initList$();
        }
        onEnable() {
            b.registerEvent$(B.Event$.RANK_LIST_CHANGED$, this.setListData$, this);
        }
        onDisable() {
            b.releaseAllEvents$(this);
        }
        initList$() {
            this._list$.renderHandler = new Laya.Handler(this, this.updateItem$), this.setListData$([]);
        }
        updateItem$(e, t) {
            let i = r.getChildDeep$(e, "rankIcon"),
                s = r.getChildDeep$(e, "rankLabel"),
                a = r.getChildDeep$(e, "nameLabel"),
                n = r.getChildDeep$(e, "weightLabel"),
                o = this._itemsData$[t],
                $ = o.rank,
                h = o.name,
                l = o.weight,
                d = o.isDied,
                c = o.isPlayer;
            d ? (i.skin = "battleUI/icon_died.png", i.visible = !0, s.visible = !1) : $ <= 3 ? (i.skin = se[$ - 1],
                    i.visible = !0, s.visible = !1) : (i.visible = !1, s.visible = !0, s.text = $.toString()),
                r.setShowName$(a, h), n.text = Math.floor(l + 20) + "m";
            let g = c ? "#00FF00" : "#FFFFFF";
            a.color = g, s.color = g, n.color = g;
        }
        setListData$(e) {
            this._itemsData$ = e, this._list$.array = this._itemsData$, this._list$.refresh();
        }
    }
    class ne extends Laya.Vector2 {
        static length$(e) {
            return Math.sqrt(e.x * e.x + e.y * e.y);
        }
        static lengthSqr$(e) {
            return e.x * e.x + e.y * e.y;
        }
        static negate$(e, t) {
            return t.x = -e.x, t.y = -e.y, t;
        }
        static add$(e, t, i) {
            return i.x = e.x + t.x, i.y = e.y + t.y, i;
        }
        static subtract$(e, t, i) {
            return i.x = e.x - t.x, i.y = e.y - t.y, i;
        }
        static moveTowards$(e, t, i, s) {
            let a = t.x - e.x,
                n = t.y - e.y,
                o = a * a + n * n;
            if (0 == o || i >= 0 && o <= i * i) return t;
            let r = Math.sqrt(o);
            return s.setValue(e.x + a / r * i, e.y + n / r * i), s;
        }
        static angle$(e, t) {
            let i = this.lengthSqr$(e),
                s = this.lengthSqr$(t);
            if (0 === i || 0 === s) return console.warn("Can't get angle between zero vector"),
                0;
            let a = Laya.Vector2.dot(e, t) / Math.sqrt(i * s);
            return a = clamp(a, -1, 1), Math.acos(a);
        }
        static rotate$(e, t, i) {
            let s = e.x,
                a = e.y,
                n = Math.sin(t),
                o = Math.cos(t);
            return i.x = o * s - n * a, i.y = n * s + o * a, i;
        }
        static distanceSquared$(e, t) {
            let i = e.x - t.x,
                s = e.y - t.y;
            return i * i + s * s;
        }
        static distance$(e, t) {
            let i = e.x - t.x,
                s = e.y - t.y;
            return Math.sqrt(i * i + s * s);
        }
        static lerp$(e, t, i, s) {
            let a = e.x,
                n = e.y;
            s.x = a + i * (t.x - a), s.y = n + i * (t.y - n);
        }
    }
    var oe = "common/image_minimap_dir2.png",
        re = "common/image_minimap_dir1.png",
        $e = "common/image_minimap_dir3.png",
        he = "common/icon_battle_key.png",
        le = "common/icon_battle_meat.png",
        de = new Laya.Vector2();
    class ce extends Laya.Image {
        constructor() {
            super(), this._indicatePadding$ = 50, this._indicatesMap$ = new Map(), this._indicatesKeyMap$ = new Map(),
                this._indicatesMeatMap$ = new Map(), this._isLevelReady$ = !1;
        }
        onEnable() {
            b.registerEvent$(B.Event$.LEVEL_READY$, this._onLevelReady$, this), b.registerEvent$(B.Event$.DINOSAUR_KILL$, this._onDinosaurKilled$, this),
                b.registerEvent$(B.Event$.ADD_DINOSAUR_TO_SCENE$, this._onDinosaurAdded$, this),
                b.registerEvent$(B.Event$.PICKUP_KEY$, this._onPickupKey$, this), b.registerEvent$(B.Event$.PICKUP_MEAT$, this._onPickupMeat$, this),
                this.updateBoundingBox$();
        }
        onDisable() {
            this.clearTimer(this, this.onUpdate), b.releaseAllEvents$(this);
        }
        onDestroy() {
            console.log("销毁 TargetCompass");
        }
        _onDinosaurAdded$(e) {
            this.addDinosaur$(e);
        }
        _onDinosaurKilled$(e) {
            e = e.otherDinosaur;
            let t = this._indicatesMap$.get(e);
            t && (t.destroy(), this._indicatesMap$.delete(e));
        }
        onUpdate() {
            if (!this._isLevelReady$ || !curScene || !curScene.playerDino || curScene.playerDino.isDied) return;
            let e = this.getScreenPosition$(curScene.playerDino.owner.transform),
                t = curScene.dinosaurs;
            for (let i of t) {
                let t = this._indicatesMap$.get(i);
                t && this.checkDinosaur$(i, e, t);
            }
            this._indicatesKeyMap$.forEach((t, i) => {
                this.checkTransform$(i.owner.transform, e, t, !1);
            }), this._indicatesMeatMap$.forEach((t, i) => {
                this.checkTransform$(i.owner.transform, e, t, !1);
            });
        }
        addDinosaur$(e) {
            let t = Laya.Pool.getItemByCreateFun("TargetCompassIndicate", this.createIndicate$, this);
            t.icon$.skin = e.icon || "", t.icon$.visible = !0, t.active = !1, this.addChild(t),
                t.zOrder = 0, this._indicatesMap$.set(e, t);
        }
        addKey$(e) {
            let t = Laya.Pool.getItemByCreateFun("TargetCompassKeyIndicate", this.createKeyIndicate$, this);
            t.active = !1, t.icon$.visible = !1, this.addChild(t), t.zOrder = 2, this._indicatesKeyMap$.set(e, t);
        }
        addMeat$(e) {
            let t = Laya.Pool.getItemByCreateFun("TargetCompassMeatIndicate", this.createMeatIndicate$, this);
            t.active = !1, t.icon$.visible = !1, this.addChild(t), t.zOrder = 1, this._indicatesMeatMap$.set(e, t);
        }
        createIndicate$() {
            return this.createIndicateWithSkin$(oe);
        }
        createKeyIndicate$() {
            return this.createIndicateWithSkin$(he);
        }
        createMeatIndicate$() {
            return this.createIndicateWithSkin$(le);
        }
        createIndicateWithSkin$(e) {
            let t = new Laya.Sprite();
            t.width = t.height = 0;
            t.icon$ = t.addChild(new Laya.Image()),
                t.icon$.width = t.icon$.height = 70,
                t.icon$.anchorX = t.icon$.anchorY = .5;
            let i = new Laya.Sprite(),
                s = .5 * t.icon$.width;
            return i.graphics.drawCircle(s, s, s, "#000000"), t.icon$.mask = i, t.bg$ = t.addChild(new Laya.Image()),
                t.bg$.skin = e, t.bg$.anchorX = .4, t.bg$.anchorY = .5, t;
        }
        updateBoundingBox$() {
            let e = new Laya.Rectangle();
            e.x = this._indicatePadding$, e.y = this._indicatePadding$, e.width = this.width - 2 * this._indicatePadding$,
                e.height = this.height - 2 * this._indicatePadding$, this._boundingBox$ = e, this._boundingBoxLeft$ = this._boundingBox$.x,
                this._boundingBoxTop$ = this._boundingBox$.y, this._boundingBoxBottom$ = this._boundingBox$.bottom,
                this._boundingBoxRight$ = this._boundingBox$.right;
        }
        _onLevelReady$() {
            this.numChildren && this.removeChildren(0, this.numChildren - 1);
            let e = curScene.dinosaurs;
            for (let t of e) this.addDinosaur$(t);
            let t = curScene.keys$;
            for (let e of t) this.addKey$(e);
            let i = curScene.meats$;
            for (let e of i) this.addMeat$(e);
            this._isLevelReady$ = !0, Laya.timer.frameLoop(1, this, this.onUpdate);
        }
        _lineLineIntersection$(e, t, i, s, a, n, o, r) {
            if (e === i && t === s || a === o && n === r) return !1;
            let $ = (r - n) * (i - e) - (o - a) * (s - t);
            if (0 === $) return !1;
            let h = ((o - a) * (t - n) - (r - n) * (e - a)) / $,
                l = ((i - e) * (t - n) - (s - t) * (e - a)) / $;
            return !(h < 0 || h > 1 || l < 0 || l > 1) && {
                x: e + h * (i - e),
                y: t + h * (s - t)
            };
        }
        setIndicateVisible$(e, t) {
            e.active = t, e.visible = t;
        }
        getScreenPosition$(e) {
            return r.wordToStagePos$(curScene.camera, e.position);
        }
        _onPickupKey$(e) {
            let t = e.key,
                i = this._indicatesKeyMap$.get(t);
            i && (i.destroy(), this._indicatesKeyMap$.delete(t));
        }
        _onPickupMeat$(e) {
            let t = e.meat,
                i = this._indicatesMeatMap$.get(t);
            i && (i.destroy(), this._indicatesMeatMap$.delete(t));
        }
        checkDinosaur$(e, t, i) {
            if (this.checkTransform$(e.owner.transform, t, i, !0)) {
                let t = curScene.playerDino.level === e.level ? $e : curScene.playerDino.level < e.level ? re : oe;
                i.bg$.skin = t;
            }
        }
        checkTransform$(e, t, i, s) {
            let a = this.getScreenPosition$(e);
            if (this._boundingBox$.contains(a.x, a.y)) return this.setIndicateVisible$(i, !1), !1;
            let n = this._lineLineIntersection$(t.x, t.y, a.x, a.y,
                    this._boundingBoxLeft$, this._boundingBoxBottom$, this._boundingBoxLeft$, this._boundingBoxTop$) ||
                this._lineLineIntersection$(t.x, t.y, a.x, a.y,
                    this._boundingBoxRight$, this._boundingBoxBottom$, this._boundingBoxRight$, this._boundingBoxTop$) ||
                this._lineLineIntersection$(t.x, t.y, a.x, a.y,
                    this._boundingBoxLeft$, this._boundingBoxTop$, this._boundingBoxRight$, this._boundingBoxTop$) ||
                this._lineLineIntersection$(t.x, t.y, a.x, a.y,
                    this._boundingBoxLeft$, this._boundingBoxBottom$, this._boundingBoxRight$, this._boundingBoxBottom$);
            return n ? (this.setIndicateVisible$(i, !0), s && (ne.subtract$(a, t, de), (i.bg$ || i).rotation = toDegree(Math.atan2(de.y, de.x))),
                i.pos(n.x, n.y), !0) : (this.setIndicateVisible$(i, !1), !1);
        }
    }
    class ge extends Laya.Script {
        constructor() {
            super(), this.speed = .2, this._inAnim$ = !1, this._currentAnimValue$ = 0, this._progress$ = 0,
                this._animTo$ = 0, this._animDt$ = 0, this._animFrom$ = 0;
        }
        onAwake() {
            this._progressBar$ = this.owner;
        }
        reset() {
            this._inAnim$ = !1, this._currentAnimValue$ = 0, this._progress$ = 0, this._animTo$ = 0,
                this._animDt$ = 0, this._animFrom$ = 0;
        }
        setProgress(e) {
            this._progress$ = e;
        }
        setAnimationTo(e) {
            this._animTo$ = e, this._inAnim$ ? this._animFrom$ = this._currentAnimValue$ : this._animFrom$ = this._progress$,
                this._inAnim$ = !0, this._animDt$ = 0, this._progress$ = e;
        }
        getProgress() {
            return this._progress$;
        }
        onUpdate() {
            let e = Laya.timer.delta / 1e3;
            if (this._progressBar$)
                if (this._inAnim$) {
                    this._animDt$ += e, this._animDt$ > this.speed && (this._animDt$ = this.speed, this._inAnim$ = !1);
                    let t = this._animDt$ / this.speed;
                    this._currentAnimValue$ = this._animFrom$ + (this._animTo$ - this._animFrom$) * t,
                        this._setProgress(this._currentAnimValue$);
                } else this._setProgress(this._progress$);
        }
        _setProgress(e) {
            this._progressBar$ && (this._progressBar$.value = e);
        }
    }
    class ue extends Laya.Script {
        constructor() {
            super(), this.progressBar$ = null, this.expLabel$ = null;
        }
        onAwake() {
            this.progressBar$ = r.getChildDeep$(this.owner, "progressBar$"), this.expLabel$ = r.getChildDeep$(this.owner, "expLabel$"),
                this._animProgressBar$ = this.progressBar$.getComponent(ge), this.progressBar$.value = 0,
                this.expLabel$.text = "0";
        }
        onEnable() {
            b.registerEvent$(B.Event$.PLAYER_EXP_CHANGED$, this.refresh$, this);
        }
        onDisable() {
            b.releaseAllEvents$(this);
        }
        refresh$(e) {
            this.expLabel$.text = e.exp.toString();
            let t = (e.exp - e.prevLvExp) / (e.nextLvExp - e.prevLvExp);
            this._animProgressBar$.setAnimationTo(t);
        }
    }
    class pe {
        constructor() {}
        static removeArrayElement$(e, t) {
            if (e && e instanceof Array)
                for (var i = e.length; --i > -1;) e[i] == t && e.splice(i, 1);
        }
        static removeArrayElementAt$(e, t) {
            e && e instanceof Array && e.splice(t, 1);
        }
        static arrayContains$(e, t) {
            return !!(e && e instanceof Array) && -1 != e.indexOf(t);
        }
        static getChildDeep$(e, t, i) {
            var s = e.getChildByName(t);
            if (s) return s;
            if (i && e.name.startsWith(t)) return e;
            for (var a = 0; a < e._children.length; a++)
                if (s = pe.getChildDeep$(e._children[a], t, i)) return s;
        }
        static getChildArrayDeep$(e, t) {
            let i = [];
            e.name == t && i.push(e);
            let s, a = e._children.length;
            for (; --a > -1;)(s = pe.getChildArrayDeep$(e._children[a], t)) && i.pushAll$(s);
            return i;
        }
        static getAvater$(e) {
            if (!e || !e.getComponent) return null;
            let t = null;
            if (e.getComponent(Laya.Animator)) t = e;
            else {
                let i = e._children,
                    s = 0,
                    a = i.length;
                for (; s < a && !(t = pe.getAvater$(i[s])); s++);
            }
            return t;
        }
        static clamp$(e, t, i) {
            return Math.max(e, Math.min(t, i));
        }
        static formatDateStr$(e) {
            return e.format("yyyy-MM-dd hh:mm");
        }
        static getZeroTime$() {
            return Date.parse(new Date().toDateString());
        }
        static floatRange$(e, t) {
            return Math.random() * (t - e) + e;
        }
        static randomChance$(e) {
            return e >= Math.random();
        }
        static intRange$(e, t) {
            return Math.floor(Math.random() * (t - e) + e);
        }
        static getSkinPathById$(e) {
            var t = D.SpritePath[e];
            return t || (t = D.SpritePath[100]), t.chs;
        }
        static setImgColorFilter$(e, t) {
            var i = new Laya.ColorFilter(e);
            t.filters = [i];
        }
        static arrayRandom$(e) {
            return e[pe.intRange$(0, e.length)];
        }
        static shiftRandom$(e) {
            var t = pe.intRange$(0, e.length),
                i = e[t];
            return e.removeAt(t), i;
        }
        static randomIndexByWeight$(e, t) {
            if (!t) {
                t = 0;
                for (var i = 0; i < e.length; i++) t += e[i];
            }
            for (var s = pe.intRange$(0, t + 1), a = 0; a < e.length; a++)
                if ((s -= e[a]) <= 0) return a;
            return 0;
        }
        static getStrParam$(e) {
            var t = D.CommonParameter[e];
            return t ? t.Value : "";
        }
        static getNumberParam$(e) {
            return Number(pe.getStrParam$(e));
        }
        static sendParamHttp$(e, t, i) {
            var s = new Laya.HttpRequest();
            s._loadedSize = 0, s._totalSize = 5e6, s.once(Laya.Event.COMPLETE, pe, pe.onHttpCompelete$, [s, i]);
            for (key in t) e += pe.stringFormat$("&{0}={1}", [key, t[key]]);
            s.send(e, null, "get", "text");
        }
        static onHttpCompelete$(e, t) {
            t && t.runWith(e.data);
        }
        static setShowName$(e, t, i) {
            if (e) {
                var s;
                i || (e.text = "", i = e.textField.textWidth);
                var a = t.length;
                for (e.text = "", s = 0; s < a; s++)
                    if (e.text += t.charAt(s), e.textField.textWidth > i) return void(e.text = t.substring(0, s));
                e.text = t;
            }
        }
        static getHgLanguage$() {
            if ("undefined" != typeof hg) switch (hg.getSystemInfoSync().language) {
                case "hi":
                    return "hi";

                case "en-us":
                    return "en";

                case "id":
                    return "id";

                case "th":
                    return "th";

                case "vi":
                    return "vi";

                case "pt-br":
                    return "pt";

                default:
                    return "en";
            }
            return "en";
        }
        static getString$(e, t) {
            if (!D.GameText[e]) return e + t;
            let i = "chinese";
            if ("undefined" != typeof hg) switch (i = hg.getSystemInfoSync().language) {
                case "hi":
                    i = "hindi";
                    break;

                case "en-us":
                    i = "english";
                    break;

                case "id":
                    i = "indonisian";
                    break;

                case "th":
                    i = "thai";
                    break;

                case "vi":
                    i = "vietnamese";
                    break;

                case "pt-br":
                    i = "portuguese";
            }
            var s = D.GameText[e][i];
            return s ? t ? pe.stringFormat$(s, t) : s : D.GameText[0].chs;
        }
        static stringFormat$(e, t) {
            if (!e) return t;
            var i = e;
            if (t)
                for (var s = 0; s < t.length; s++) i = i.replaceAll("{" + s + "}", t[s]);
            return i;
        }
        static onButtonScaleEvent$(e, t, i, s) {
            !e.defaultScale && (e.defaultScale = {
                    scaleX: e.scaleX || 1,
                    scaleY: e.scaleY || 1
                }), e.on(Laya.Event.MOUSE_DOWN, pe, pe._onScaleBtnDown), e.on(Laya.Event.ROLL_OUT, pe, pe._onScaleBtnOut),
                e.on(Laya.Event.MOUSE_UP, pe, pe._onScaleBtnUp), e.on(Laya.Event.CLICK, pe, pe._onScaleBtnClick, [t, i]),
                e._sound = s;
        }
        static _onScaleBtnClick(e, i, s) {
            pe.shakePhone$();
            try {
                e && e[i] && e[i](s), Laya.CyzClassMap$.AudioManager.getInstance$().playSound$(s.target._sound || t.SOUND_ID$.CLICK_UI$);
            } catch (e) {
                console.log(e.stack);
            }
            s.stopPropagation();
        }
        static _onScaleBtnDown(e) {
            e.target.scale(1.1 * e.target.defaultScale.scaleX, 1.1 * e.target.defaultScale.scaleY),
                e.stopPropagation();
        }
        static _onScaleBtnOut(e) {
            e.currentTarget.scale(1 * e.target.defaultScale.scaleX, 1 * e.target.defaultScale.scaleY),
                e.stopPropagation();
        }
        static _onScaleBtnUp(e) {
            e.target.scale(1 * e.target.defaultScale.scaleX, 1 * e.target.defaultScale.scaleY),
                e.stopPropagation();
        }
        static onButtonEvent$(e, t, i) {
            e && (e.on(Laya.Event.MOUSE_DOWN, t, pe._onBtnDown), e.on(Laya.Event.ROLL_OUT, t, pe._onBtnOut),
                e.on(Laya.Event.MOUSE_UP, t, pe._onBtnUp), e.on(Laya.Event.CLICK, t, pe._onBtnClick, [t, i]));
        }
        static _onBtnClick(e, t, i) {
            pe.shakePhone$();
            try {
                e && e[t] && e[t](i);
            } catch (e) {
                console.log(e.stack);
            }
            i.stopPropagation();
        }
        static _onBtnDown(e) {
            e.stopPropagation();
        }
        static _onBtnOut(e) {
            e.stopPropagation();
        }
        static _onBtnUp(e) {
            e.stopPropagation();
        }
        static onEvent(e, t) {
            t.on(Laya.Event.MOUSE_DOWN, e, e.onMouseEventHandler), t.on(Laya.Event.ROLL_OUT, e, e.onMouseEventHandler),
                t.on(Laya.Event.MOUSE_UP, e, e.onMouseEventHandler), t.on(Laya.Event.CLICK, e, e.onMouseEventHandler);
        }
        static offEvent(e, t) {
            t.off(Laya.Event.MOUSE_DOWN, e, e.onMouseEventHandler), t.off(Laya.Event.ROLL_OUT, e, e.onMouseEventHandler),
                t.off(Laya.Event.MOUSE_UP, e, e.onMouseEventHandler), t.off(Laya.Event.CLICK, e, e.onMouseEventHandler);
        }
        static formatTime(e, t) {
            var i = Math.floor(e / 60);
            if (e %= 60, !t || i < 60) return pe.timeNumberFormat(i) + ":" + pe.timeNumberFormat(e);
            var s = Math.floor(i / 60);
            return i %= 60, s + ":" + pe.timeNumberFormat(i) + ":" + pe.timeNumberFormat(e);
        }
        static timeNumberFormat(e) {
            return (e < 10 ? "0" : "") + parseInt(e);
        }
        static isToDay$(e) {
            let t = new Date(),
                i = t.toDateString();
            return t.setTime(e), t.toDateString() == i;
        }
        static setVector3(e, t, i, s) {
            e.x = t, e.y = i, e.z = s;
        }
        static resetScale(e) {
            if (!e) return;
            let t = e.transform.localScale.clone();
            e.transform.localScale = new Laya.Vector3(0, 0, 0), e.transform.localScale = t;
            let i = e._children,
                s = i ? i.length : 0;
            for (; --s > -1;) pe.resetScale(i[s]);
        }
        static copyVector3(e, t) {
            t.x = e.x, t.y = e.y, t.z = e.z;
        }
        static getV3Length$(e) {
            return Math.sqrt(Math.pow(e.x, 2) + Math.pow(e.y, 2) + Math.pow(e.z, 2));
        }
        static isLineIntersect(e, t, i, s) {
            var a = this.cross(e, t, i),
                n = this.cross(e, t, s),
                o = this.cross(i, s, e),
                r = this.cross(i, s, t);
            return !(a * n > 0 || o * r > 0) && (0 !== a || 0 !== n || this.rectsIntersect(e, t, i, s));
        }
        static cross(e, t, i) {
            return (i.x - e.x) * (t.y - e.y) - (i.y - e.y) * (t.x - e.x);
        }
        static rectsIntersect(e, t, i, s) {
            return Math.min(e.y, t.y) <= Math.max(i.y, s.y) && Math.max(e.y, t.y) >= Math.min(i.y, s.y) && Math.min(e.x, t.x) <= Math.max(i.x, s.x) && Math.max(e.x, t.x) >= Math.min(i.x, s.x);
        }
        static isLineInCircle(e, t, i, s, a) {
            return !(!this.isInCircle$(e, i, s, a) && !this.isInCircle$(t, i, s, a)) || (e.x === t.x ? (n = 1,
                o = 0, r = -e.x) : e.y === t.y ? (n = 0, o = 1, r = -e.y) : (n = e.y - t.y, o = t.x - e.x,
                r = e.x * t.y - e.y * t.x), $ = n * i + o * s + r, !(($ *= $) > (n * n + o * o) * a * a) && (h = (i - e.x) * (t.x - e.x) + (s - e.y) * (t.y - e.y),
                l = (i - t.x) * (e.x - t.x) + (s - t.y) * (e.y - t.y), h > 0 && l > 0));
            var n, o, r, $, h, l;
        }
        static getPolygonColClosePos$(e, t, i) {
            let s, a, n, o, r, $, h, l = i.points,
                d = null;
            for (s = 0, a = l.length; s < a; s++)
                if (n = l[s], o = l[s == a - 1 ? 0 : s + 1],
                    this.isLineInCircle(n, o, e.x, e.y, t)) {
                    let t = new Laya.Point(n.x - o.x, n.y - o.y),
                        i = Math.sqrt(Math.pow(t.x, 2) + Math.pow(t.y, 2)),
                        s = ((e.x - n.x) * t.x + (e.y - n.y) * t.y) / i,
                        a = new Laya.Point();
                    Laya.Vector2.normalize(t, a);
                    let l = new Laya.Point(n.x + a.x * s, n.y + a.y * s),
                        c = Math.sqrt(Math.pow(l.x - o.x, 2) + Math.pow(l.y - o.y, 2));
                    $ = Math.abs(s) + c <= i + 1e-6 ? l : Math.abs(s) < c ? n : o, h = Math.pow($.x - e.x, 2) + Math.pow($.y - e.y, 2),
                        (null == d || h < r) && (d = $, r = h);
                }
            return d;
        }
        static getCircleColClosePos$(e, t, i) {
            if (Math.pow(e.x - i.cX, 2) + Math.pow(e.y - i.cY, 2) > Math.pow(t + i.r, 2)) return null;
            let s = new Laya.Vector2(e.x - i.cX, e.y - i.cY);
            return Laya.Vector2.normalize(s, s), s.x = s.x * i.r + i.cX, s.y = s.y * i.r + i.cY,
                s;
        }
        static isInCircle$(e, t, i, s) {
            return (e.x - t) * (e.x - t) + (e.y - i) * (e.y - i) <= s * s;
        }
        static getPolygonVertex$(e, i, s, a, n) {
            var o = Math.cos(s * t.RAD_1_ANGLE$),
                r = Math.sin(s * t.RAD_1_ANGLE$);
            if (a)
                for (var $, h, l, d = a.length; --d > -1;)($ = a[d]) && (h = $.x, l = $.y,
                    n[d] = {
                        x: e + h * o - l * r,
                        y: i + h * r + l * o
                    });
        }
        static isPointInPolygon$(e, t) {
            for (var i, s, a, n, o, r, $ = 0, h = t.length; --h > -1;) o = t[h], r = t[0 === h ? t.length - 1 : h - 1],
                i = (o.y - r.y) / (o.x - r.x), s = r.x <= e.x && e.x < o.x, a = o.x <= e.x && e.x < r.x,
                n = e.y < i * (e.x - r.x) + r.y, (s || a) && n && $++;
            return $ % 2 != 0;
        }
        static rotateVec2Angle$(e, i, s) {
            let a = s * t.RAD_1_ANGLE$;
            var n = Math.cos(a),
                o = Math.sin(a);
            return [e * n - i * o, e * o + i * n];
        }
        static checkTwoRectCollide$(e, t, i) {
            for (var s, a = 4; --a > -1;)
                for (s = 4; --s > -1;)
                    if (pe.isLineIntersect(e[a], e[0 === a ? 3 : a - 1], t[s], t[0 === s ? 3 : s - 1])) return !i || pe.getPoint$(e[a], e[0 === a ? 3 : a - 1], t[s], t[0 === s ? 3 : s - 1]);
            return !1;
        }
        static getPoint$(e, t, i, s) {
            let a = e.x,
                n = e.y,
                o = t.x,
                r = t.y,
                $ = i.x,
                h = i.y,
                l = s.x,
                d = s.y,
                c = ((o - a) * (h - n) - ($ - a) * (r - n)) / ((o - a) * (h - d) - ($ - l) * (r - n));
            return {
                x: $ + c * (l - $),
                y: h + c * (d - h)
            };
        }
        static checkCircleBoxCollide$(e, t, i, s) {
            if (s) {
                for (var a = s.length; --a > -1;)
                    if (pe.isLineInCircle(s[a], s[0 === a ? s.length - 1 : a - 1], e, t, i)) return !0;
                return pe.isPointInPolygon$({
                    x: e,
                    y: t
                }, s);
            }
            return !1;
        }
        static getBoxColliderVertexs$(e, t, i, s) {
            let a = [{
                    x: e.offsetX,
                    y: e.offsetY
                }, {
                    x: e.offsetX + e.w,
                    y: e.offsetY
                }, {
                    x: e.offsetX + e.w,
                    y: e.offsetY + e.h
                }, {
                    x: e.offsetX,
                    y: e.offsetY + e.h
                }],
                n = [];
            return pe.getPolygonVertex$(t, i, s, a, n), n;
        }
        static get3dX$(e) {
            return -e * t.SCENE_UI_RATE$;
        }
        static get3dY$(e) {
            return -e * t.SCENE_UI_RATE$;
        }
        static getWorldMatrix4x4$(e) {
            var t = new Laya.Vector3();
            Laya.Vector3.cross(Laya.Vector3._Up, e, t);
            var i = new Laya.Vector3();
            Laya.Vector3.cross(e, t, i);
            var s = new Laya.Matrix4x4(),
                a = s.elements;
            return a[0] = t.x, a[1] = t.y, a[2] = t.z, a[4] = i.x, a[5] = i.y, a[6] = i.z, a[8] = e.x,
                a[9] = e.y, a[10] = e.z, s;
        }
        static getColor16Str$(e, t, i) {
            return "#" + this.getColorValue16Str$(e) + this.getColorValue16Str$(t) + this.getColorValue16Str$(i);
        }
        static getColorValue16Str$(e) {
            let t = Math.floor(255 * e).toString(16);
            return 1 == t.length && (t = "0" + t), t;
        }
        static shakePhone$(e, t) {
            if (Laya.CyzClassMap$.AudioManager.getInstance$().getShakeSwitch$() && (t || !(Date.now() - 50 < this.lastShakeT)))
                if (this.lastShakeT = Date.now(),
                    window.wx) e ? wx.vibrateLong() : wx.vibrateShort();
                else if (window.qg) e ? qg.vibrateLong() : qg.vibrateShort();
            else {
                if (!window.navigator.vibrate) return;
                window.navigator.vibrate(500);
            }
        }
        static getPosIdx$(e) {
            return Math.floor(e / t.MAP_SPACE$);
        }
        static getChannel$() {
            switch (conf.channel) {
                case "wx":
                    return "Wx";

                case "oppo":
                    return "Oppo";

                case "vivo":
                    return "Vivo";

                case "qq":
                    return "Qq";

                case "tt":
                    return "Tt";
            }
            return "";
        }
        static dateFormat$(e, t) {
            let i;
            const s = {
                "y+": t.getFullYear().toString(),
                "M+": (t.getMonth() + 1).toString(),
                "d+": t.getDate().toString(),
                "h+": t.getHours().toString(),
                "m+": t.getMinutes().toString(),
                "s+": t.getSeconds().toString()
            };
            for (let t in s)(i = new RegExp("(" + t + ")").exec(e)) && (e = e.replace(i[1], 1 == i[1].length ? s[t] : s[t].padStart(i[1].length, "0")));
            return e;
        }
        static wordToStagePos$(e, t, i) {
            return i = i || new Laya.Vector2(), pe.vec4$ || (pe.vec4$ = new Laya.Vector4()),
                e.worldToViewportPoint(t, pe.vec4$), isNaN(pe.vec4$.x) || isNaN(pe.vec4$.y) ? (i.x = i.y = -1e3,
                    i) : (pe.isInViewPort$(e, t) ? (i.x = pe.vec4$.x, i.y = pe.vec4$.y) : (i.x = Laya.stage.width - pe.vec4$.x,
                    i.y = Laya.stage.height - pe.vec4$.y), i);
        }
        static isInViewPort$(e, t) {
            return pe.vec3$ || (pe.vec3$ = new Laya.Vector3()), pe.vec3_2$ || (pe.vec3_2$ = new Laya.Vector3()),
                e.transform.getForward(pe.vec3$), Laya.Vector3.subtract(t, e.transform.position, pe.vec3_2$),
                Laya.Vector3.dot(pe.vec3$, pe.vec3_2$) >= 0;
        }
        static getRoundPosition$(e, t, i) {
            let s = t + (i - t) * Math.random();
            return me.setValue(s, 0, 0), C.rotateY$(me, new Laya.Vector3(0, 0, 0), toRadian(360 * Math.random()), me),
                Laya.Vector3.add(me, e, me), me.clone();
        }
        static copyVector3Prop$(e, t, i, s, a) {
            let n = e[t];
            n.x = i, n.y = s, n.z = a, e[t] = n;
        }
    }
    var me = new Laya.Vector3();
    class _e {
        static createScoreText$(e, t, i, s) {
            let a = "+" + e;
            this._createScoreFontClip$(a, 40, "common/Number.png", "common/EXP.png", t, i, s);
        }
        static createBigScoreText$(e, t, i, s) {
            let a = "+" + e;
            this._createScoreFontClip$(a, 70, "common/Number2.png", "common/EXP1.png", t, i, s);
        }
        static createMessageText$(e, t, i, s) {
            this._createText$(e, 60, "#ff9000", t, i, s);
        }
        static clear$() {
            this._allTextSet$.forEach(e => {
                e.destroy(!0), Laya.Tween.clearAll(e);
            }), this._allTextSet$.clear();
        }
        static _createScoreFontClip$(e, t, i, s, a, n, o) {
            let r = new Laya.FontClip();
            r.skin = i, r.sheet = "+0123456789", r.scaleX = r.scaleY = t / 90, r.value = e;
            let $ = r.addChild(new Laya.Image(s));
            return $.scaleX = $.scaleY = .6, $.x = -110, $.y = 20, o.addChild(r), this.tweenText$(r, a, n),
                this.addText$(r), r;
        }
        static _createText$(e, t, i, s, a, n) {
            let o = new Laya.Text();
            return o.overflow = Laya.Text.HIDDEN, o.color = i, o.fontSize = t, o.bold = !0,
                o.italic = !0, o.strokeColor = "#000", o.stroke = 5, o.align = "center", o.text = e,
                o.cacheAs = "bitmap", n.addChild(o), this.tweenText$(o, s, a), this.addText$(o),
                o;
        }
        static tweenText$(e, t, i) {
            let s = pe.wordToStagePos$(i, t.transform.position);
            s.x -= .5 * e.displayWidth, s.y -= .5 * e.displayHeight, e.pos(s.x, s.y), e.alpha = 0,
                Laya.Tween.to(e, {
                    alpha: 1,
                    y: s.y - 80
                }, 300, null, Laya.Handler.create(this, () => {
                    Laya.Tween.to(e, {
                        y: s.y - 90
                    }, 500, null, Laya.Handler.create(this, () => {
                        Laya.Tween.to(e, {
                            alpha: 0
                        }, 500, null, Laya.Handler.create(this, () => {
                            this.destroyText$(e);
                        }));
                    }));
                }));
        }
        static addText$(e) {
            this._allTextSet$.add(e);
        }
        static destroyText$(e) {
            Laya.Tween.clearAll(e), e.destroy(!0), this._allTextSet$.delete(e);
        }
    }
    _e._allTextSet$ = new Set();
    new Laya.Vector3();
    class ye extends Laya.Box {
        constructor() {
            super(), this._linkToSprite3D = null, this._camera$ = null, this.initUI$();
        }
        static initPool$() {
            for (let e = 0; e < 10; e++) {
                let e = new ye();
                Laya.Pool.recover("NAME_AND_LEVEL", e);
            }
        }
        static getFromPoolOrCreate$() {
            return Laya.Pool.getItemByCreateFun("NAME_AND_LEVEL", function() {
                return new ye();
            }.bind(this), this);
        }
        initUI$() {
            this.nameBar$ = this.addChild(new Laya.Image()), this.nameBar$.height = 40, this.nameBar$.skin = "battleUI/back_accounts.png",
                this.nameLabel$ = this.nameBar$.addChild(new Laya.Label()), this.nameLabel$.color = "#FFFFFF",
                this.nameLabel$.fontSize = 26, this.nameLabel$.centerX = 0, this.nameLabel$.centerY = 0,
                this.lvBar$ = this.addChild(new Laya.Image()), this.lvBar$.height = 40, this.lvBar$.skin = "battleUI/back_accounts.png",
                this.lvBar$.y = 50, this.lvLabel$ = this.lvBar$.addChild(new Laya.Label()), this.lvLabel$.color = "#FFFFFF",
                this.lvLabel$.fontSize = 26, this.lvLabel$.centerX = 0, this.lvLabel$.centerY = 0,
                this.icon$ = this.addChild(new Laya.Image()), this.icon$.width = this.icon$.height = 70,
                this.icon$.anchorX = this.icon$.anchorY = .5;
            let e = .5 * this.icon$.width;
            this.icon$.y = 50, this.icon$.x = -e - 10;
            let t = new Laya.Sprite();
            t.graphics.drawCircle(e, e, e, "#000000"), this.icon$.mask = t;
        }
        recoverToPool$() {
            this.removeSelf(), this._camera$ = null, this._linkToSprite3D = null, Laya.Pool.recover("NAME_AND_LEVEL", this);
        }
        setLinkToSprite3D$(e) {
            this._linkToSprite3D = e;
        }
        setCamera$(e) {
            this._camera$ = e;
        }
        setIcon$(e) {
            this.icon$.skin = e;
        }
        setName$(e) {
            this.nameLabel$.text = e, this.callLater(function() {
                this.nameLabel$.destroyed || (this.nameBar$.width = this.nameLabel$.displayWidth + 30);
            }.bind(this));
        }
        setLevel$(e) {
            this.lvLabel$.text = "LV." + e, this.callLater(function() {
                this.lvLabel$.destroyed || (this.lvBar$.width = this.lvLabel$.displayWidth + 30);
            }.bind(this));
        }
        onEnable() {
            Laya.timer.loop(1e3 / 60, this, this.update$);
        }
        onDisable() {
            this.clearTimer(this, this.update$);
        }
        update$() {
            if (this._linkToSprite3D && this._camera$)
                if (this._linkToSprite3D.destroyed) this.recoverToPool$();
                else {
                    let e = r.wordToStagePos$(this._camera$, this._linkToSprite3D.transform.position);
                    this.pos(e.x - this.width / 2, e.y - this.height / 2);
                }
        }
    }
    class Se extends d {
        constructor() {
            super(), this.winName$ = "战斗界面", this._3DLayer$ = null, this._pauseButton$ = null,
                this._moveTipsNode$ = null, this._textEffectRefNode$ = null, this.quickClickResurgenceView$ = null,
                this.quickClickBiggerView$ = null, this._hpBars$ = new Map(), this._dinosaurNameLabels$ = new Map(),
                this._killTimes$ = 0, this._textEffects$ = [], this._isShowingTextEffect$ = !1;
        }
        onUILoad$() {
            super.onUILoad$(), this.initUI$(), this.monitorEvents$();
        }
        initUI$() {
            this._moveTipsNode$ = r.getChildDeep$(this.owner, "moveTipsNode$"), this._3DLayer$ = r.getChildDeep$(this.owner, "d3Layer$"),
                this._textEffectRefNode$ = r.getChildDeep$(this.owner, "textEffectAnchor$"), this.owner.guideHand && this.owner.guideHand.isPlaying && this.owner.guideHand.stop(),
                this._setMoveTipsNodeVisible$(!1);
        }
        monitorEvents$() {
            _e.clear$(), Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this._hideGudie$), b.registerEvent$(B.Event$.SHOW_HP_BAR$, this._onShowHpBar$, this),
                b.registerEvent$(B.Event$.ADD_DINOSAUR_TO_SCENE$, this._onAddDinosaurToScene$, this),
                b.registerEvent$(B.Event$.HUMAN_KILL$, this._onHumanKill$, this), b.registerEvent$(B.Event$.DESTROY_OBJ$, this._onObjDestroy$, this),
                b.registerEvent$(B.Event$.DINOSAUR_KILL$, this._onDinosaurKill$, this), b.registerEvent$(B.Event$.DINOSAUR_LEVEL_UP$, this._onDinosaurLevelUp$, this),
                b.registerEvent$(B.Event$.LEVEL_READY$, this._onLevelReady$, this), b.registerEvent$(B.Event$.START_PLAYING_LEVEL$, this._onStartPlayingLevel$, this),
                b.registerEvent$(B.Event$.BIGGER_START$, this._showBiggerStartEffect$, this), b.registerEvent$(B.Event$.SPEED_UP_START$, this._showSpeedUpStartEffect$, this),
                b.registerEvent$(B.Event$.PICKUP_KEY$, this._onPickKey$, this), b.registerEvent$(B.Event$.PICKUP_MEAT$, this._onPickMeat$, this),
                b.registerEvent$(B.Event$.SHOW_HOME_VIEW$, this._onShowHomeView$, this);
        }
        _onShowHomeView$() {
            this.doClose$();
        }
        playBgm$() {
            Laya._bgm$ ? Laya._bgm$.play() : Laya._bgm$ = Laya.SoundManager.playMusic(B.Sound$.CROWD_CHAOS$, 0);
        }
        stopBgm$() {
            Laya._bgm$ && Laya._bgm$.pause();
        }
        onDestroy() {
            b.releaseAllEvents$(this), this.stopBgm$(), super.onDestroy();
        }
        _showBiggerStartEffect$() {
            this._addTextEffect$(B.Ur$);
        }
        _showSpeedUpStartEffect$() {
            this._addTextEffect$(B.Vr$);
        }
        _showLevelUpEffect$() {
            this._addTextEffect$(B.Gr$);
        }
        onPauseClick$() {
            curScene.isPaused = !0;
        }
        _onShowHpBar$(e) {
            let t, i = e.newProgress,
                s = e.oldProgress,
                a = e.position,
                n = e.hpBarOwner,
                o = this._hpBars$.get(n);
            o ? s = (t = o.hpBar).progressBar$.value : (t = p.getFromPoolOrCreate$(), this._hpBars$.set(n, {
                hpBar: t,
                newProgress: i,
                oldProgress: s,
                position: a
            })), t && t.show(i, s, a, curScene._camera$, this._3DLayer$, function() {
                this._hpBars$.delete(n);
            }.bind(this));
        }
        initNameAndLevels$() {
            let e = curScene.dinosaurs;
            for (let t = 0; t < e.length; t++) this._onAddDinosaurToScene$(e[t]);
        }
        _onAddDinosaurToScene$(e) {
            if (!this._dinosaurNameLabels$.has(e)) {
                let t = ye.getFromPoolOrCreate$();
                t.setCamera$(curScene._camera$), t.setLinkToSprite3D$(e.nameLabelRef), t.setName$(e.name),
                    t.setIcon$(e.icon), t.setLevel$(e.level), this._3DLayer$.addChild(t), this._dinosaurNameLabels$.set(e, t);
            }
        }
        _onObjDestroy$(e) {
            let t = e.obj,
                i = e.score;
            e.dinosaur.isPlayer && _e.createScoreText$(i, t, curScene._camera$, this._3DLayer$);
        }
        _onHumanKill$(e) {
            let t = e.human;
            e.dinosaur.isPlayer && _e.createScoreText$(t.score$, t.owner, curScene._camera$, this._3DLayer$);
        }
        _onDinosaurKill$(e) {
            let t = e.otherDinosaur,
                i = e.dinosaur,
                s = this._dinosaurNameLabels$.get(t);
            s && s.recoverToPool$(), i.isPlayer ? (_e.createBigScoreText$(10 * t.level, i.owner, curScene._camera$, this._3DLayer$),
                this._showTextEffect$(), this.owner.kill && this.owner.kill.play(0, !1)) : t.isPlayer && (this._killTimes$ = 0);
        }
        _onDinosaurLevelUp$(e) {
            let t = this._dinosaurNameLabels$.get(e);
            t && t.setLevel$(e.level), e.isPlayer && this._showLevelUpEffect$();
        }
        _onLevelReady$() {
            this._setMoveTipsNodeVisible$(!0), this.owner.guideHand && this.owner.guideHand.play(0, !0),
                this.initNameAndLevels$();
        }
        _onStartPlayingLevel$() {
            this.playBgm$();
        }
        _hideGudie$() {
            this.owner.guideHand && this.owner.guideHand.isPlaying && this.owner.guideHand.stop(),
                this._setMoveTipsNodeVisible$(!1);
        }
        _setMoveTipsNodeVisible$(e) {
            this._moveTipsNode$.active = e, this._moveTipsNode$.visible = e;
        }
        _showTextEffect$() {
            let e = this._killTimes$ < B.Mr$.length ? B.Mr$[this._killTimes$] : B.Mr$[B.Mr$.length - 1];
            // if (this._killTimes$ < B.KillSounds$.length) {
            //     let e = B.KillSounds$[0];
            //     Laya.SoundManager.playSound(e);
            // } else 
            if (this._killTimes$ <= 3) {
                Laya.SoundManager.playSound(B.Sound$.BOMO$);
            }
            Laya.SoundManager.playSound(B.KillSounds$[0]);
            this._killTimes$++, this._addTextEffect$(e);
        }
        _addTextEffect$(e) {
            this._textEffects$.push(e), this._showTextEffectQueue$();
        }
        _showTextEffectQueue$() {
            if (0 === this._textEffects$.length || this._isShowingTextEffect$) return;
            this._isShowingTextEffect$ = !0;
            let e = this._textEffects$[0];
            this._textEffects$.splice(0, 1);
            let t = new Laya.Image();
            t.skin = e, t.anchorX = .5, t.anchorY = .5, t.pos(-500, 0), this._textEffectRefNode$.addChild(t),
                Laya.Tween.to(t, {
                    x: 0
                }, 200, Laya.Ease.backOut, Laya.Handler.create(this, function() {
                    t.timerOnce(1500, t, function() {
                        Laya.Tween.to(t, {
                            x: 500
                        }, 200, Laya.Ease.backOut, Laya.Handler.create(this, function() {
                            t.destroy(!0), this._isShowingTextEffect$ = !1, this._showTextEffectQueue$();
                        }.bind(this)));
                    }.bind(this));
                }.bind(this)));
        }
        _onPickKey$(e) {
            let {
                key: t
            } = e;
            _e.createMessageText$("Get the key", t.owner, curScene._camera$, this._3DLayer$);
        }
        _onPickMeat$(e) {
            let {
                dinosaur: t,
                meat: i
            } = e;
            if (t.isPlayer) {
                let e = "EXP+" + i.exp;
                _e.createMessageText$(e, i.owner, curScene._camera$, this._3DLayer$);
            }
        }
    }
    Se.url = "Prefab/Web/Battle/BattleWindow.json", Se.className$ = "BattleUI", Se.uiConfig$ = {
        layer: e.LAYER_MAINUI$,
        only: !0,
        needUISurrenal: !0,
        notClose: !1
    };
    class Le extends Se {}
    Le.url = "Prefab/Qq/Battle/BattleWindowQq.json", Le.className$ = "BattleUIQq", Le.uiConfig$ = {
        layer: e.LAYER_MAINUI$,
        only: !0,
        needUISurrenal: !0,
        notClose: !1
    };
    class we extends Laya.Script {
        constructor() {
            super(), this._initData$();
        }
        _initData$() {
            this._tipUILifeT$ = 2e3, this._tipUIPool$ = [];
        }
        onStart() {
            this._monitorEvents$();
        }
        _monitorEvents$() {
            b.registerEvent$(B.Event$.DINOSAUR_KILL$, this._onDinosaurKill$, this);
        }
        _cancel$Events$() {
            b.releaseAllEvents$(this);
        }
        _onDinosaurKill$(e) {
            let t = e.dinosaur,
                i = e.otherDinosaur;
            this._createTipUI$(t.icon, t.name, i.icon, i.name);
        }
        _createTipUI$(e, t, i, s) {
            let a = this._tipUIPool$.shift() || this.owner.addChild(this.tipPrefab$.create());
            a.inited$ || (a.inited$ = !0, a.label_killer$ = r.getChildDeep$(a, "label_killer"),
                    a.icon_killer$ = r.getChildDeep$(a, "icon_killer"), a.label_dead$ = r.getChildDeep$(a, "label_dead"),
                    a.icon_dead$ = r.getChildDeep$(a, "icon_dead")), r.setShowName$(a.label_killer$, t),
                r.setShowName$(a.label_dead$, s), a.icon_killer$.skin = e || this.defaultIcon$,
                a.icon_dead$.skin = i || this.defaultIcon$, a.show.play(0, !1), Laya.timer.once(this._tipUILifeT$, this, this._onUILifeOver$, [a], !1);
        }
        _onUILifeOver$(e) {
            this._tipUIPool$.push(e);
        }
        onDestroy() {
            Laya.timer.clear(this, this._onUILifeOver$), this._cancel$Events$();
        }
    }
    class Ce extends d {
        onUILoad$() {
            super.onUILoad$(), this._doshow$(this.args$);
        }
        static show(e) {
            l.getInstance$().openUI$(Laya.classWithChannel$("ToastUI"), void 0, e);
        }
        _doshow$(e) {
            Laya.timer.clearAll(this), this.zOrder = 1e5, this.msgLabel$ = r.getChildDeep$(this.owner, "LabelTips$"),
                this.bgImage$ = r.getChildDeep$(this.owner, "img_bg$"), this.msgLabel$.text = e,
                this.bgImage$.width = this.msgLabel$.textField.width + 100, this.owner.Show.play(0, !1),
                Laya.timer.once(3e3, this, this.doClose$);
        }
    }
    Ce.url = "Prefab/Web/Comp/ToastWindow.json", Ce.className$ = "ToastUI", Ce.uiConfig$ = {
        layer: e.LAYER_NORMAL$,
        only: !1,
        needUISurrenal: !0,
        notClose: !0
    };
    class fe {
        static setItem(e, t) {
            e = fe._getKey(e), Laya.LocalStorage.setJSON(e, t);
        }
        static getItem(e, t = null) {
            e = fe._getKey(e);
            let i = Laya.LocalStorage.getJSON(e);
            return null !== i && "" !== i && void 0 !== i || (i = t), i;
        }
        static removeItem(e) {
            e = fe._getKey(e), Laya.LocalStorage.removeItem(e);
        }
        static clear() {
            Laya.LocalStorage.clear();
        }
        static _getKey(e) {
            return "Super-Tornado-io-" + e;
        }
    }
    class ve {
        static load$(e, t, i = 0) {
            return fe.getItem(e, t) || {};
        }
        static save$(e, t, i = 0) {
            fe.setItem(e, t);
        }
    }
    class Ie {
        static get userInfo() {
            return this._userInfo;
        }
        static get gameData() {
            return this._gameData;
        }
        static get userId() {
            return this._userId;
        }
        static get shareAward() {
            return this._shareAward;
        }
        static saveData$(e = !1) {
            ve.save$("GameDataKey", this._gameData), e && console.log("saveData", this._gameData);
        }
        static setUserId$(e) {
            this._userId = e;
        }
        static saveExitTime$() {
            fe.setItem("exitTime", new Date().getTime());
        }
        static getExitTime$() {
            return fe.getItem("exitTime", 0);
        }
        static getNextMonday$() {
            let e = new Date();
            return e.setDate(e.getDate() + (8 - e.getDay()) % 7), e.setHours(0, 0, 0, 0), e.getTime();
        }
        static getGameDataItem$(e, t = null) {
            return this._gameData = ve.load$("GameDataKey"), void 0 !== this._gameData[e] ? this._gameData[e] : t;
        }
        static setGameDataItem$(e, t, i = !1) {
            this._gameData[e] = t, this.saveData$();
        }
    }
    Ie._userId = null, Ie._shareAward = {};
    var Ee = 400,
        De = 45,
        Ae = [{
            shortName: "Bronze",
            longName: "Strong bronze",
            icon: "battleUI/icon_rank_lv_01.png"
        }, {
            shortName: "Silver",
            longName: "Order silver",
            icon: "battleUI/icon_rank_lv_02.png"
        }, {
            shortName: "Gold",
            longName: "Glory gold",
            icon: "battleUI/icon_rank_lv_03.png"
        }, {
            shortName: "Platinum",
            longName: "Premium platinum",
            icon: "battleUI/icon_rank_lv_04.png"
        }, {
            shortName: "Diamond",
            longName: "Eternal Diamonds",
            icon: "battleUI/icon_rank_lv_05.png"
        }, {
            shortName: "Starshine",
            longName: "Master",
            icon: "battleUI/icon_rank_lv_06.png"
        }, {
            shortName: "King",
            longName: "Glory king",
            icon: "battleUI/icon_rank_lv_07.png"
        }, {
            shortName: "Dominate",
            longName: "The strongest master",
            icon: "battleUI/icon_rank_lv_08.png"
        }];
    class ke {
        static getRankInfoByExp$(e) {
            let t, i = 1,
                s = 0;
            for (;;) {
                let a = i * Ee;
                if (t = s + a, e < a || i >= De) {
                    let n = this.getRankNameByLevel$(i),
                        o = e / a;
                    return o > 1 && (o = 1), {
                        shortName: n.shortName,
                        longName: n.longName,
                        subLevel: n.subLevel,
                        icon: n.icon,
                        level: i,
                        startExp: s,
                        endExp: t,
                        progress: o
                    };
                }
                i++, e -= a, s = t;
            }
        }
        static getRankNameByLevel$(e) {
            e--;
            let t = Math.floor(e / 5),
                i = e % 5 + 1;
            t >= Ae.length && (t = Ae.length - 1);
            let s = Ae[t];
            return {
                shortName: s.shortName,
                longName: s.longName,
                icon: s.icon,
                subLevel: i
            };
        }
    }
    class Be extends Ie {
        static getCoin$() {
            return this.getGameDataItem$("coin", 0);
        }
        static setCoin$(e, t = !0) {
            this.setGameDataItem$("coin", e, t), b.dispatchEvent$(B.Event$.COIN_CHANGE$);
        }
        static addCoin$(e, t = !0) {
            let i = this.getCoin$();
            i += e, this.setCoin$(i, t);
        }
        static getKey$() {
            return this.getGameDataItem$("key", 0);
        }
        static setKey$(e) {
            this.setGameDataItem$("key", e, !0), b.dispatchEvent$(B.Event$.KEY_CHANGE$);
        }
        static addKey$(e) {
            let t = this.getKey$();
            t += e, this.setKey$(t);
        }
        static getUsingSkinId$() {
            return this.getGameDataItem$("usingSkinId", B.S.usingSkinId);
        }
        static setUsingSkinId$(e) {
            this.setGameDataItem$("usingSkinId", e, !0), b.dispatchEvent$(B.Event$.SKIN_ID_CHANGED$, e);
        }
        static getTryUseSkinId$() {
            return this.getGameDataItem$("tryuseSkinId", void 0);
        }
        static setTryUseSkinId$(e) {
            this.setGameDataItem$("tryuseSkinId", e, !0);
        }
        static isSkinUnlocked$(e) {
            let t = this.getGameDataItem$("unlockedSkins", B.S.unlockedSkins);
            return Array.isArray(t) && (t = B.S.unlockedSkins), !0 === t[e];
        }
        static isSkinExists$(e) {
            return B.jt.hasOwnProperty(e);
        }
        static unlockSkin$(e) {
            let t = this.getGameDataItem$("unlockedSkins", B.S.unlockedSkins);
            Array.isArray(t) && (t = B.S.unlockedSkins), this.isSkinUnlocked$(e) || (t[e] = !0),
                this.setGameDataItem$("unlockedSkins", t, !0), b.dispatchEvent$(B.Event$.SKIN_UNLOCKED$, e);
        }
        static getSkinUnlockStep$(e) {
            let t = this.getGameDataItem$("skinUnlockedStep", B.S.skinUnlockedStep);
            return void 0 === t[e] ? 0 : t[e];
        }
        static incSkinUnlockStep$(e) {
            let t = this.getGameDataItem$("skinUnlockedStep", B.S.skinUnlockedStep);
            return void 0 === t[e] ? t[e] = 1 : t[e] += 1, this.setGameDataItem$("skinUnlockedStep", t, !0),
                t[e] >= B.qt[e] && (this.unlockSkin$(e), !0);
        }
        static getExp$() {
            return this.getGameDataItem$("exp", 0);
        }
        static setExp$(e, t = !1) {
            let i = this.getExp$(),
                s = ke.getRankInfoByExp$(i);
            this.setGameDataItem$("exp", e, t);
            let a = ke.getRankInfoByExp$(e);
            b.dispatchEvent$(B.Event$.EXP_CHANGE$, {
                oldExp: i,
                oldRankInfo: s,
                newRankInfo: a
            }), s.level !== a.level && b.dispatchEvent$(B.Event$.RANK_LEVEL_CHANGE$, {
                oldRankInfo: s,
                newRankInfo: a
            });
        }
        static addExp$(e, t = !1) {
            let i = this.getExp$();
            i += e, this.setExp$(i, t);
        }
        static getDamageLevel$() {
            return this.getGameDataItem$("damageLevel", 1);
        }
        static setDamageLevel$(e, t = !1) {
            this.setGameDataItem$("damageLevel", e, t), b.dispatchEvent$(B.Event$.DAMAGE_LEVEL_CHANGE$);
        }
        static incDamageLevel$(e = !1) {
            let t = this.getDamageLevel$();
            t++, this.setDamageLevel$(t, e);
        }
        static getGrowthLevel$() {
            return this.getGameDataItem$("growthLevel", 1);
        }
        static setGrowthLevel$(e, t = !1) {
            this.setGameDataItem$("growthLevel", e, t), b.dispatchEvent$(B.Event$.GROWTH_LEVEL_CHANGE$);
        }
        static incGrowthLevel$(e = !1) {
            let t = this.getGrowthLevel$();
            t++, this.setGrowthLevel$(t, e);
        }
        static getMoveSpeedLevel$() {
            return this.getGameDataItem$("moveSpeedLevel", 1);
        }
        static setMoveSpeedLevel$(e, t = !1) {
            this.setGameDataItem$("moveSpeedLevel", e, t), b.dispatchEvent$(B.Event$.MOVE_SPEED_LEVEL_CHANGE$);
        }
        static incMoveSpeedLevel$(e = !1) {
            let t = this.getMoveSpeedLevel$();
            t++, this.setMoveSpeedLevel$(t, e);
        }
        static getSigninDays$() {
            return this.getGameDataItem$("signinDays", 0);
        }
        static setSigninDays$(e, t = !0) {
            this.setGameDataItem$("signinDays", e, t), b.dispatchEvent$(B.Event$.SIGNIN_SUCCEED$);
        }
        static incSigninDays$(e = !0) {
            let t = this.getSigninDays$();
            t++, this.setSigninDays$(t, e);
        }
        static getKillDino$() {
            return this.getGameDataItem$("killDinosaur", 0);
        }
        static setKillDinosaur$(e, t = !1) {
            this.setGameDataItem$("killDinosaur", e, t);
        }
        static addKillDinosaur$(e, t = !1) {
            let i = this.getKillDino$();
            i += e, this.setKillDinosaur$(i, t);
        }
        static getKillDinoDone$() {
            return this.getGameDataItem$("killDinosaurCompleted", !1);
        }
        static setKillDinoDone$(e = !0) {
            this.setKillDinosaur$(0, e);
        }
        static getDestroyCar$() {
            return this.getGameDataItem$("destroyCar", 0);
        }
        static setDestroyCar$(e, t = !1) {
            this.setGameDataItem$("destroyCar", e, t);
        }
        static addDestroyCar(e, t = !1) {
            let i = this.getDestroyCar$();
            i += e, this.setDestroyCar$(i, t);
        }
        static getDestroyCarDone$() {
            return this.getGameDataItem$("destroyCarCompleted", !1);
        }
        static setDestroyCarDone$(e = !0) {
            this.setDestroyCar$(0, e);
        }
        static getDestroyBuilding$() {
            return this.getGameDataItem$("destroyBuild", 0);
        }
        static setDestroyBuild$(e, t = !1) {
            this.setGameDataItem$("destroyBuild", e, t);
        }
        static addDestroyBuild$(e, t = !1) {
            let i = this.getDestroyBuilding$();
            i += e, this.setDestroyBuild$(i, t);
        }
        static getDestroyBuildingDone$() {
            return this.getGameDataItem$("destroyBuildCompleted", !1);
        }
        static setDestroyBuildingDone$(e = !0) {
            this.setDestroyBuild$(0, e);
        }
        static incBattleTimes$() {
            let e = this.getBattleTimes$();
            e++, this.setGameDataItem$("battleTimes", e, !1);
        }
        static getBattleTimes$() {
            return this.getGameDataItem$("battleTimes", 0);
        }
        static getBaozouTimes$() {
            return this.getGameDataItem$("burstTimes", 0);
        }
        static setBurstTimes$(e, t = !1) {
            this.setGameDataItem$("burstTimes", e, t);
        }
        static addBurstTimes$(e, t = !1) {
            let i = this.getBaozouTimes$();
            i += e, this.setBurstTimes$(i, t);
        }
        static getBaozouTimesDone$() {
            return this.getGameDataItem$("burstTimesCompleted", !1);
        }
        static setBaozouTimesDone$(e = !0) {
            this.setBurstTimes$(0, e);
        }
        static getWatchAdTimes$() {
            return this.getGameDataItem$("watchVideoAdTimes", 0);
        }
        static incWatchVideoAdTimes$() {
            let e = this.getWatchAdTimes$();
            e++, this.setGameDataItem$("watchVideoAdTimes", e, !1);
        }
        static getWatchAdTimesDone$() {
            return this.getGameDataItem$("watchVideoAdTimesCompleted", !1);
        }
        static setWatchVideo(e, t = !1) {
            this.setGameDataItem$("watchVideoAdTimes", e, t);
        }
        static setWatchAdTimesDone$(e = !0) {
            this.setWatchVideo(0, e);
        }
        static getUseCoin$() {
            return this.getGameDataItem$("useCoin", 0);
        }
        static addUseCoin$(e) {
            let t = this.getUseCoin$();
            t += e, this.setGameDataItem$("useCoin", t, !1);
        }
        static getUseCoinDone$() {
            return this.getGameDataItem$("useCoinDone", !1);
        }
        static setUseCoinDone$(e = !0) {
            this.setUseCoin$(0, e);
        }
        static setUseCoin$(e, t = !1) {
            this.setGameDataItem$("useCoin", e, t);
        }
        static getLv8Achieve$() {
            return this.getGameDataItem$("level8Achieve", 0);
        }
        static setLv8Achieve$(e, t = !1) {
            this.setGameDataItem$("level8Achieve", e, t);
        }
        static addLv8Achieve$(e, t = !1) {
            let i = this.getLv8Achieve$();
            i += e, this.setLv8Achieve$(i, t);
        }
        static getLv8AchieveDone$() {
            return this.getGameDataItem$("lv8AchieveDone", !1);
        }
        static setLv8AchieveDone$(e = !0) {
            this.setLv8Achieve$(0, e);
        }
        static getNum1Times$() {
            return this.getGameDataItem$("rank1Times", 0);
        }
        static setRank1Times$(e, t = !1) {
            this.setGameDataItem$("rank1Times", e, t);
        }
        static addRank1Times$(e, t = !1) {
            let i = this.getNum1Times$();
            i += e, this.setRank1Times$(i, t);
        }
        static getNum1TimesDone$() {
            return this.getGameDataItem$("rank1TimesCompleted", !1);
        }
        static setNum1TimesDone$(e = !0) {
            this.setRank1Times$(0, e);
        }
    }
    class be extends d {
        constructor() {
            super(), this.winName$ = "离线奖励";
        }
        static openIfNeed$(e) {
            let t = Be.getExitTime$(),
                i = new Date().getTime();
            t || (t = i);
            let s = clamp((i - t) / 1e3, 0, 7200),
                a = Math.round(.5 * s);
            if (a = Math.min(2e3, a), s < 120 || this._isOfflineAwardDialogShowing) console.log("离线时间较短, 直接保存离线收益到GamePlayerData", s, a.toString()),
                Be.addCoin$(a), e && e();
            else {
                this._isOfflineAwardDialogShowing = !0, be._onCloseCallback = e;
                let t = new be();
                t.setAward(a), t.popup();
            }
        }
        initData$() {
            this._award$ = this.args$;
        }
        onUILoad$() {
            super.onUILoad$(), this.doubleReceiveButton$ = r.getChildDeep$(this.owner, "doubleReceiveButton"),
                this.receiveButton$ = r.getChildDeep$(this.owner, "receiveButton"), this.coinImage$ = r.getChildDeep$(this.owner, "coinImage"),
                this.coinAmount$ = r.getChildDeep$(this.owner, "coinAmount"), this.coinAmount$.text = "+" + this._award$,
                this.doubleReceiveButton$.on(Laya.Event.CLICK, this, this.onDoubleClick$), this.receiveButton$.on(Laya.Event.CLICK, this, this.onReceiveClick$);
        }
        setAward(e) {}
        onClosed(e) {}
        onDoubleClick$() {
            let e = function(e) {
                e ? (Be.incWatchVideoAdTimes$(), this.receiveAward$(!0)) : Ce.show("视频未看完,无法获取三倍奖励~");
            }.bind(this);
            Dt.showVideoAd$(e);
        }
        onReceiveClick$() {
            this.receiveAward$(!1);
        }
        receiveAward$(e) {
            let t = this._award$;
            e && (t *= 3), Be.addCoin$(t), Laya.SoundManager.playSound(B.Sound$.COIN_AWARD$, 1),
                b.dispatchEvent$(B.Event$.COIN_FLY_EFFECT$, {
                    prototype: this.coinImage$,
                    startPos: this.coinImage$,
                    size: new Laya.Size(100, 100)
                }), this.doClose$();
        }
    }
    be.url = "Prefab/Web/Battle/OfflineAwardWindow.json", be.className$ = "OfflineAwardUI$",
        be.uiConfig$ = {
            layer: e.LAYER_NORMAL$,
            only: !1,
            needUISurrenal: !0,
            notClose: !0
        };
    class xe extends be {}
    xe.url = "Prefab/Qq/Battle/OfflineAwardWindowQq.json", xe.className$ = "OfflineAwardUIQq$",
        xe.uiConfig$ = {
            layer: e.LAYER_NORMAL$,
            only: !1,
            needUISurrenal: !0,
            notClose: !0
        };
    class Pe extends d {
        constructor() {
            super(), this.winName$ = "等级提升弹窗";
        }
        static openWithData$(e) {
            l.getInstance$().openUI$(Laya.classWithChannel$("RankUpUI"), void 0, e);
        }
        initData$() {
            this._data$ = this.args$;
        }
        onUILoad$() {
            super.onUILoad$(), this.setNodes$(), this.initUI$(), this.monitorBtns$();
        }
        setNodes$() {
            this.doubleReceiveButton$ = r.getChildDeep$(this.owner, "doubleReceiveButton"),
                this.receiveButton$ = r.getChildDeep$(this.owner, "receiveButton"), this.descLabel$ = r.getChildDeep$(this.owner, "descLabel"),
                this.coinLabel$ = r.getChildDeep$(this.owner, "coinLabel"), this.rankImage$ = r.getChildDeep$(this.owner, "rankImage"),
                this.coinImage$ = r.getChildDeep$(this.owner, "coinImage");
        }
        initUI$() {
            this.descLabel$.text = "Congratulations on your upgrade " + this._data$.newRankInfo.longName + this._data$.newRankInfo.subLevel,
                this.coinLabel$.text = this.getAward$(), this.rankImage$.skin = this._data$.newRankInfo.icon;
        }
        monitorBtns$() {
            this.doubleReceiveButton$.on(Laya.Event.CLICK, this, this.onDoubleClick$), this.receiveButton$.on(Laya.Event.CLICK, this, this.onReceiveClick$);
        }
        onDoubleClick$() {
            let e = function(e) {
                e ? (Be.incWatchVideoAdTimes$(), this.receiveAward$(!0)) : null;
            }.bind(this);
            Dt.showVideoAd$(e);
        }
        onReceiveClick$() {
            this.receiveAward$(!1);
        }
        receiveAward$(e) {
            let t = this.getAward$();
            e && (t *= 3), Be.addCoin$(t), Laya.SoundManager.playSound(B.Sound$.COIN_AWARD$, 1),
                b.dispatchEvent$(B.Event$.COIN_FLY_EFFECT$, {
                    prototype: this.coinImage$,
                    startPos: this.coinImage$,
                    size: new Laya.Size(100, 100)
                }), this.doClose$();
        }
        getAward$() {
            let e = this._data$.oldRankInfo,
                t = this._data$.newRankInfo;
            return Math.round((e.level + t.level) * (t.level - e.level + 1) * 15);
        }
    }
    Pe.url = "Prefab/Web/Battle/RankUpWindow.json", Pe.className$ = "RankUpUI$", Pe.uiConfig$ = {
        layer: e.LAYER_MAINUI$,
        only: !0,
        needUISurrenal: !0,
        notClose: !1
    };
    class Te extends Pe {}
    Te.url = "Prefab/Qq/Battle/RankUpWindowQq.json", Te.className$ = "RankUpUIQq$",
        Te.uiConfig$ = {
            layer: e.LAYER_MAINUI$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    var Me = 10;
    class Oe extends d {
        constructor() {
            super();
        }
        initData$() {
            this._data$ = this.args$, this._currentCD$ = Me;
        }
        onUILoad$() {
            super.onUILoad$(), this.resurgenceButton$ = r.getChildDeep$(this.owner, "resurgenceButton$"),
                this.skipButton$ = r.getChildDeep$(this.owner, "skipButton$"), this.cdLabel$ = r.getChildDeep$(this.owner, "cdLabel$"),
                this.resurgenceButton$.on(Laya.Event.CLICK, this, this.onResurgenceClick$), this.skipButton$.on(Laya.Event.CLICK, this, this.onSkipClick$),
                this.doCountDown$(), this.startCD$();
        }
        onDestroy() {
            b.releaseAllEvents$(this), super.onDestroy();
        }
        setSettlementData$(e) {
            this._data$ = e;
        }
        onSkipClick$() {
            this.showSettlementView$();
        }
        onResurgenceClick$() {
            this.stopCD$();
            let e = function(e) {
                e ? (Be.incWatchVideoAdTimes$(), this.doClose$(), b.dispatchEvent$(B.Event$.RESURGENCE$)) : (null,
                    this._currentCD$ = Me, this.startCD$());
            }.bind(this);
            Dt.showVideoAd$(e);
        }
        startCD$() {
            Laya.timer.loop(1e3, this, this.doCountDown$);
        }
        stopCD$() {
            Laya.timer.clear(this, this.doCountDown$);
        }
        doCountDown$() {
            this.destroyed || (this._currentCD$--, this._currentCD$ < 0 ? (Laya.timer.clear(this, this.doCountDown$),
                this.showSettlementView$(), Laya.SoundManager.playSound(B.Sound$.COUNT_DOWN$, 1)) : (Laya.SoundManager.playSound(B.Sound$.COUNT_DOWN$, 1),
                this.cdLabel$.text = this._currentCD$.toString()));
        }
        showSettlementView$() {
            this.stopCD$(), this.doClose$(), b.dispatchEvent$(B.Event$.SHOW_SETTLEMENT_VIEW$, this._data$);
        }
    }
    Oe.url = "Prefab/Web/Battle/ResurgenceWindow.json", Oe.className$ = "ResurgenceView$",
        Oe.uiConfig$ = {
            layer: e.LAYER_MAINUI$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class Ne extends Laya.Script {
        constructor() {
            super(), this.initData$();
        }
        initData$() {
            this.pgtopviewCtr$ = void 0, this.moveObjs$ = void 0, this.isPlayUpAnim$ = !1, this.delayMoveCountT$ = 1500,
                this.delayShowBannerT$ = 1e3, this.objMoveT$ = 400, this.objMoveCT$ = 0, this.completeCallback$ = void 0,
                this._maskBox$ = void 0;
        }
        static create$(e, t, i) {
            if (!pgdk$.btnMoveSwitch$()) return e.restoreBanner$(!0), void(i && i());
            let s = e.owner.addComponent(Ne);
            return s.setData$(e, t, i), s;
        }
        setData$(e, t, i) {
            this.pgtopviewCtr$ = e, this.moveObjs$ = t, this.completeCallback$ = i;
            let s, a = this.moveObjs$.length,
                n = Laya.stage.height - 150;
            for (; --a > -1;)(s = this.moveObjs$[a]).ty = s.y, Laya.Point.TEMP.setTo(0, n),
                s.parent.globalToLocal(Laya.Point.TEMP), s.centerY = s.bottom = s.top = NaN, s.y = s.sy = ((isNaN(s.anchorY) ? .5 : s.anchorY) - .5) * s.height + Laya.Point.TEMP.y,
                s.dy = s.ty - s.sy;
            this._maskBox$ = this.pgtopviewCtr$.owner.addChild(new Laya.Box()), this._maskBox$.left = this._maskBox$.right = this._maskBox$.top = this._maskBox$.bottom = 0,
                this._maskBox$.on(Laya.Event.MOUSE_DOWN, this, function() {});
        }
        onStart() {
            this.playMoveUpAnim$();
        }
        playMoveUpAnim$() {
            window.pgdk$ && pgdk$.hideBanner$(!0), this.isPlayUpAnim$ = !0;
        }
        refreshUpAnim$() {
            if (!this.isPlayUpAnim$) return;
            let e = Laya.timer.delta;
            if (this.delayShowBannerT$ > 0 && (this.delayShowBannerT$ -= e, this.delayShowBannerT$ <= 0 && this.restoreBanner$()),
                this.delayMoveCountT$ > 0) return void(this.delayMoveCountT$ -= e);
            this.objMoveCT$ += e;
            let t, i = Math.min(1, this.objMoveCT$ / this.objMoveT$),
                s = this.moveObjs$.length;
            for (; --s > -1;)(t = this.moveObjs$[s]).y = t.sy + t.dy * i;
            1 == i && this.onInduceComplete$();
        }
        onInduceComplete$() {
            this.isPlayUpAnim$ = !1, this.completeCallback$ && this.completeCallback$(), this.completeCallback$ = void 0,
                this._maskBox$ && this._maskBox$.destroy(), this._maskBox$ = void 0, this.destroy();
        }
        onUpdate() {
            this.refreshUpAnim$();
        }
        restoreBanner$() {
            this.pgtopviewCtr$.restoreBanner$(!0);
        }
    }
    class Ue extends Oe {
        constructor() {
            super();
        }
        initData$() {
            super.initData$(), this.delaySwitch$ = pgdk$.btnMoveSwitch$() && pgdk$.getPgCfg$("bannerSwitch");
        }
        initUI$() {
            super.initUI$(), this.initBanner$();
        }
        initBanner$() {
            // this.bannerCtrl$ = this.owner.getComponent(V), this.delaySwitch$ ? (window.pgdk$ && pgdk$.hideBanner$(),
            //     this.playBannerMoveAnim$()) : this.bannerCtrl$.restoreBanner$(!0);
        }
        playBannerMoveAnim$() {
            // this.isPlayBannerMoveAnim$ = !0, Ne.create$(this.bannerCtrl$, [this.skipButton$], this.onBannerMoveAnimComplete$.bind(this));
        }
        onBannerMoveAnimComplete$() {
            // this.isPlayBannerMoveAnim$ = !1;
        }
        onSkipClick$() {
            // this.isPlayBannerMoveAnim$ || 
            super.onSkipClick$();
        }
        onResurgenceClick$() {
            this.stopCD$();
            let e = function(e) {
                e ? (Be.incWatchVideoAdTimes$(), fe.setItem("LargerStart", !0), this.doClose$(),
                    b.dispatchEvent$(B.Event$.RESURGENCE$)) : (Ce.show("视频未看完,无法复活~"), this._currentCD$ = Ll,
                    this.startCD$());
            }.bind(this);
            Dt.showVideoAd$(e);
        }
    }
    Ue.url = "Prefab/Qq/Battle/ResurgenceWindowQq.json", Ue.className$ = "ResurgenceUIQq$",
        Ue.uiConfig$ = {
            layer: e.LAYER_MAINUI$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class Re extends Laya.Script {
        constructor() {
            super();
        }
        executeWhenSdkReady$(e, t) {
            "undefined" != typeof pgdk$ && pgdk$.isSdkReady$ ? t && t() : Laya.timer.once(100, this, this.executeWhenSdkReady$, [e, t], !0);
        }
        setWidget$(e, t, i, s, a) {
            "number" == typeof t && (e.top = t), "number" == typeof i && (e.bottom = i), "number" == typeof s && (e.left = s),
                "number" == typeof a && (e.right = a), "number" != typeof s && "number" != typeof a && (e.centerX = 0),
                "number" != typeof t && "number" != typeof i && (e.centerY = 0);
        }
        createBaseList$(e) {
            let t = new Laya.List();
            return t.repeatX = e ? 10 : 1, t.repeatY = e ? 1 : 10, e ? t.hScrollBarSkin = "common/hscroll.png" : t.vScrollBarSkin = "common/vscroll.png",
                t.scrollBar.visible = !1, this.setWidget$(t, 0, 0, 0, 0), t;
        }
        createLabel$(e, t, i, s) {
            let a = e.addChild(new Laya.Label());
            return s && (a.color = s), a.fontSize = t, a.lineHeight = t, a.font = "SimHei",
                a.text = i, a;
        }
        registerAdClickEvent$(e, t) {
            e.clickEvent$ && e.off(Laya.Event.CLICK, e, e.clickEvent$), e.clickEvent$ = function() {
                pgdk$.navigateToMiniProgram$(this.dataSource, t, void 0, function() {
                    e.dataSource = pgdk$.getRandomAd$(e.dataSource.dataType), pgdk$.recoverRandomAd$(e.dataSource),
                        e.refresh$ && e.refresh$();
                });
            }, e.on(Laya.Event.CLICK, e, e.clickEvent$);
        }
        createMask$(e, t) {
            if (!t) return;
            let i = new Laya.Image();
            return i.skin = t, i.width = e.width, i.height = e.height, i.left = i.right = i.top = i.bottom = 0,
                e.mask = i, i;
        }
        createBgNode$(e, t, i, s) {
            let a;
            if (void 0 === i && (i = 100), void 0 === s && (s = 100), t.startsWith("#"))(a = e.addChild(new Laya.Box())).width = i,
                a.height = s, 9 === t.length ? (a.bgColor = t.substring(0, 7), a.alpha = parseInt("0x" + t.substring(7)) / 255) : (a.bgColor = t,
                    a.alpha = .7);
            else {
                let n = t.split(";");
                (a = e.addChild(new Laya.Image())).width = i, a.height = s, a.skin = n[0], n[1] && (a.sizeGrid = n[1]);
            }
            return a;
        }
        static onButtonScaleEvent$(e, t, i, s) {
            !e.defaultScale && (e.defaultScale = {
                    scaleX: e.scaleX || 1,
                    scaleY: e.scaleY || 1
                }), e.on(Laya.Event.MOUSE_DOWN, Re, Re._onScaleBtnDown$), e.on(Laya.Event.ROLL_OUT, Re, Re._onScaleBtnOut$),
                e.on(Laya.Event.MOUSE_UP, Re, Re._onScaleBtnUp$), e.on(Laya.Event.CLICK, Re, Re._onScaleBtnClick$, [t, i]),
                e._sound = s;
        }
        static _onScaleBtnClick$(e, t, i) {
            window.pgdk$ && pgdk$.shakePhone$();
            try {
                e && e[t] && e[t](i), Laya.audioManager && Laya.audioManager.play_GameKey_Sound && Laya.audioManager.play_GameKey_Sound(i.target._sound);
            } catch (e) {}
            i.stopPropagation();
        }
        static _onScaleBtnDown$(e) {
            e.target.scale(1.1 * e.target.defaultScale.scaleX, 1.1 * e.target.defaultScale.scaleY),
                e.stopPropagation();
        }
        static _onScaleBtnOut$(e) {
            e.currentTarget.scale(1 * e.target.defaultScale.scaleX, 1 * e.target.defaultScale.scaleY),
                e.stopPropagation();
        }
        static _onScaleBtnUp$(e) {
            e.target.scale(1 * e.target.defaultScale.scaleX, 1 * e.target.defaultScale.scaleY),
                e.stopPropagation();
        }
        static openUI$(e, t) {
            Laya.loader.create(e, Laya.Handler.create(this, e => {
                let i = new Laya.Prefab();
                i.json = e;
                let s = i.create();
                Laya.stage.addChild(s), t && t(s);
            }));
        }
    }
    class Ve extends Laya.Script {
        constructor() {
            super(), this.forward = !0, this._lastStartIndex = -1, this.step = 1;
        }
        onStart() {
            this.scrolling = !1, Laya.timer.loop(2e3, this, this.scrollToNext), this.owner.scrollBar.on(Laya.Event.END, this, this.onScrollEnd);
        }
        scrollToNext() {
            if (this.scrolling) return;
            let e = this.owner.startIndex;
            this._lastStartIndex === e && (this.forward = !this.forward), this._lastStartIndex = e,
                e += this.forward ? this.step : -this.step, this.owner.tweenTo(e, 200), this.forward || 0 !== e || (this.forward = !0);
        }
        onScrollEnd() {
            this.scrolling = !1;
        }
        onMouseDown(e) {
            this.scrolling = !0, this.downScrollValue = this.owner.scrollBar.value;
        }
        onMouseUp(e) {
            this.scrolling && (this.scrolling = !1, this.downScrollValue != this.owner.scrollBar.value && this.mouseUpCallback$ && this.mouseUpCallback$());
        }
    }
    class He extends Laya.Image {
        setSkin(e) {
            this.schedualId && (clearTimeout(this.schedualId), this.schedualId = void 0), Array.isArray(e) ? (this.imgs$ = e,
                this.idx = -1, this.schedualId = setTimeout(this._changeSkin$.bind(this), 100)) : (this.imgs$ = void 0,
                this.skin = e);
        }
        _changeSkin$() {
            this.destroyed || this.imgs$ && 0 !== this.imgs$.length && (this.idx = (this.idx + 1) % this.imgs$.length,
                this.skin = this.imgs$[this.idx], this.schedualId = setTimeout(this._changeSkin$.bind(this), 100));
        }
    }
    class Ge extends Re {
        constructor() {
            super(), this.viewName$ = null, this.bgSkin$ = null, this.iconMask$ = null, this.iconBg$ = null,
                this.titleBg$ = null, this.titleColor$ = "#FFFFFF", this.columns$ = 3, this.rows$ = 0,
                this.spacingX$ = 10, this.spacingY$ = 10, this.dataType = "promotion", this.iconFrameSkin$ = "sdk/iconBorder.png;20,20,20,20",
                this.padding = 5, this.mouseUpCallback$ = void 0;
        }
        onStart() {
            this.owner.visible = !Laya.Browser.onIOS || "tt" != conf.channel, this.initUI$(),
                this.executeWhenSdkReady$(this, this.createAds$.bind(this));
        }
        initUI$() {
            this.owner.bgColor = "", this.owner.alpha = 1, this.ui$ = this.owner.addChild(new Laya.Box()),
                this.ui$.viewName$ = this.viewName$;
            let e = this.ui$.width = this.owner.width,
                t = this.ui$.height = this.owner.height;
            if (this.setWidget$(this.ui$, 0, 0, 0, 0), "number" == typeof top && "number" == typeof bottom && (t = Laya.stage.height - bottom - top),
                "number" == typeof left && "number" == typeof right && (e = Laya.stage.width - right - left),
                this.cellWidth = Math.floor((e - 10 - this.spacingX$ * (this.columns$ - 1)) / this.columns$),
                this.cellHeight = Math.floor(1.2 * this.cellWidth), this.rows$) {
                let e = (this.cellHeight + this.spacingY$) * this.rows$ - this.spacingY$ + 10;
                t > e && (t = e, this.ui$.bottom = NaN, this.ui$.height = t);
            }
            this.width$ = e, this.height$ = t, this.createBg$(), this.createList$(), this.titleBgList$ = this.titleBg$ ? this.titleBg$.split(",") : void 0;
            let i = this.list$.addComponent(Ve);
            i.step = 3, i.mouseUpCallback$ = this.onListMouseUp$.bind(this);
        }
        onListMouseUp$() {
            this.mouseUpCallback$ && this.mouseUpCallback$();
        }
        getTitleBg$(e) {
            return this.titleBgList$ ? this.titleBgList$[e % this.titleBgList$.length] : void 0;
        }
        createBg$() {
            if (!this.bgSkin$) return;
            let e;
            if (this.bgSkin$.startWith$("#"))(e = this.ui$.addChild(new Laya.Box())).width = this.width$,
                e.height = this.height$, e.bgColor = this.bgSkin$, e.alpha = .7;
            else {
                let t = this.bgSkin$.split(";");
                (e = this.ui$.addChild(new Laya.Image())).width = this.width$, e.height = this.height$,
                    e.skin = t[0], t[1] && (e.sizeGrid = t[1]);
            }
            this.setWidget$(e, 0, 0, 0, 0);
        }
        createList$() {
            this.list$ = this.ui$.addChild(this.createBaseList$(!1)), this.list$.repeatX = this.columns$,
                this.list$.repeatY = Math.ceil((this.height$ + this.spacingY$) / (this.cellHeight + this.spacingY$)),
                this.list$.name = "List", this.list$.spaceX = this.spacingX$, this.list$.spaceY = this.spacingY$,
                this.list$.anchorX = this.list$.anchorY = .5, this.list$.width = this.width$, this.list$.height = this.height$,
                this.setWidget$(this.list$, 5, 5, 5, 5), this.list$.renderHandler = new Laya.Handler(this, this.renderHandler$),
                this.list$.mouseHandler = new Laya.Handler(this, this.mouseHandler$), this.list$.itemRender = {
                    type: "Image",
                    props: {
                        width: this.cellWidth,
                        height: this.cellHeight
                    }
                }, this.createAds$();
        }
        mouseHandler$(e, t) {
            this.mouseCallback$ && this.mouseCallback$(e);
        }
        renderHandler$(e, t) {
            if (!e.inited$) {
                if (e.inited$ = !0, this.iconBg$) {
                    if (this.iconBg$.startWith$("#")) e.iconBg$ = e.iconBg$ || e.addChild(new Laya.Box()),
                        e.iconBg$.bgColor = this.iconBg$;
                    else {
                        e.iconBg$ = e.iconBg$ || e.addChild(new Laya.Image());
                        let t = this.iconBg$.split(";");
                        e.iconBg$.skin = t[0], e.iconBg$.sizeGrid = t[1];
                    }
                    e.iconBg$.width = this.cellWidth, e.iconBg$.height = this.cellHeight;
                }
                if (e.icon$ = e.icon$ || e.addChild(new He()), e.icon$.name = "GameIcon", e.icon$.width = e.icon$.height = this.iconBg$ ? this.cellWidth - 2 * this.padding : this.cellWidth,
                    e.icon$.top = this.iconBg$ ? this.padding : 0, e.icon$.centerX = 0, e.icon$.setSkin(e.dataSource.img),
                    this.iconMask$ && !e.icon$.mask) {
                    let t = new Laya.Image();
                    t.width = e.icon$.width, t.height = e.icon$.height, t.skin = this.iconMask$, e.icon$.mask = t;
                }
                if (this.iconFrameSkin$ && !e.iconFrame$) {
                    let t = this.iconFrameSkin$.split(";");
                    e.iconFrame$ = e.addChild(new Laya.Image(t[0])), e.iconFrame$.sizeGrid = t[1], e.iconFrame$.pos(e.icon$.x - 5, e.icon$.y - 5),
                        e.iconFrame$.size(e.icon$.width + 10, e.icon$.height + 25);
                }
                this.titleBg$ && (e.titleBg$ = e.titleBg$ || e.addChild(new Laya.Image()), e.titleBg$.bottom = 0,
                    e.titleBg$.left = e.titleBg$.right = 0, e.titleBg$.height = this.cellHeight - this.cellWidth,
                    e.titleBg$.skin = this.getTitleBg$(t));
                let i = this.cellHeight - this.cellWidth - 10;
                e.title$ = e.title$ || this.createLabel$(e, i, e.dataSource.title.substring(0, 6), this.titleColor$),
                    e.title$.anchorX = e.title$.anchorY = .5, e.title$.centerX = 0, this.setWidget$(e.title$, null, 5, null, null),
                    e.refresh$ = function() {
                        e.icon$.setSkin(e.dataSource.img), e.title$.text = e.dataSource.title.substring(0, 6);
                    };
            }
            e.refresh$(), this.registerAdClickEvent$(e, this.viewName$);
        }
        createAds$() {
            this.list$.array = window.pgdk$ && pgdk$.unsortedAds$(this.dataType);
        }
    }
    class We extends Re {
        static create$(e) {
            if (pgdk$.hideBanner$(), Laya.gameCenter2UI$) return Laya.stage.addChild(Laya.gameCenter2UI$),
                Laya.gameCenter2UI$.getComponent(We).closeCallback$ = e, Laya.gameCenter2UI$;
            let t = new Laya.Box();
            t.bgColor = "#406c99", t.name = "GameCenterUI", t.viewName$ = "游戏中心", t.zOrder = 999999999,
                t.width = 720, t.height = 1280, Laya.stage.addChild(t), Laya.gameCenter2UI$ = t;
            let i = t.addComponent(We);
            i.setWidget$(t, 0, 0, 0, 0), i.closeCallback$ = e;
        }
        constructor() {
            super(), this.titleBg$ = "sdk/4.png", this.closeCallback$ = void 0;
        }
        onStart() {
            this.initUI$();
        }
        onEnable() {
            this.reset$();
        }
        reset$() {
            this.canTrick$ = pgdk$.isGameCenterViewDelay$(), this.hasClick$ = !1, this.hasShowBanner$ = !1;
        }
        initUI$() {
            this.reset$(), this.createGridAds$(), this.createTxtContinue$(), this.createBannerBox$(),
                this.owner.addComponent(V).boxBanner$ = this.boxBanner$;
        }
        createBtnBack$() {}
        createBannerBox$() {
            this.boxBanner$ = this.owner.addChild(new Laya.Box()), this.boxBanner$.zOrder = 1,
                this.boxBanner$.left = this.boxBanner$.right = 0, this.boxBanner$.bottom = 10, this.boxBanner$.height = 220,
                this.boxBanner$.bgColor = "#FFFFFF";
        }
        createGridAds$() {
            this.list$ = this.owner.addChild(new Laya.Box()), this.list$.width = 640, this.list$.top = 100,
                this.list$.bottom = 200, this.list$.centerX = 0;
            let e = this.list$.addComponent(Ge);
            e.viewName$ = this.owner.viewName$, e.iconBg$ = "sdk/image_icon_bg.png;20,20,20,20",
                e.iconMask$ = "sdk/image_icon_bg.png", e.iconFrameSkin$ = "sdk/iconBorder.png;20,20,20,20",
                e.titleBg$ = this.titleBg$, e.spacingX$ = 60, e.spacingY$ = 20, e.columns$ = 2,
                e.padding = 8, e.mouseUpCallback$ = this.onAdGridMouseUp$.bind(this);
        }
        onAdGridMouseUp$() {
            if (pgdk$.dataHandler$.slideJumpSwitch$()) {
                let e = pgdk$.getRandomAd$("promotion");
                pgdk$.recoverRandomAd$(e), pgdk$.navigateToMiniProgram$(e, this.owner.viewName$);
            }
        }
        createTxtContinue$() {
            let e = this.createLabel$(this.owner, 40, "", "#FFFFFF");
            e.centerX = 0, e.underline = !0, e.text = "Continue", e.bottom = 80, e.on(Laya.Event.CLICK, this, function() {
                if (this.canTrick$)
                    if (this.hasClick$) {
                        if (!this.hasShowBanner$) return;
                        this._onClose$();
                    } else this.hasClick$ = !0, Laya.timer.once(1e3, this, this._showBanner$);
                else this._onClose$();
            }.bind(this));
        }
        _onClose$() {
            this.owner.removeSelf(), this.closeCallback$ && (this.closeCallback$(), this.closeCallback$ = void 0);
        }
        _showBanner$() {
            this.owner.getComponent(V).restoreBanner$(!0), this.hasShowBanner$ = !0, Laya.timer.once(1e3, this, this._hideBanner$);
        }
        _hideBanner$() {
            pgdk$.hideBanner$(!0);
        }
    }
    window.PgGameCenter2 = We;
    var ze = {
        killDinosaur: 0,
        destroyCar: 0,
        destroyBuild: 0,
        burstTimes: 0,
        watchVideoAdTimes: 0,
        useCoin: 0,
        rank1Times: 0
    };
    class Fe {
        static addStatisticsWithRoundStatistics$(e) {
            let t = this.loadData$();
            t.destroyCar += e.destroyCar, t.destroyBuild += e.destroyBuild, t.burstTimes += e.burstTimes,
                t.killDinosaur += e.killDinosaur, this.saveData$(t);
        }
        static getDestroyCar$() {
            return this.getItemData$("destroyCar");
        }
        static getDestroyBuilding$() {
            return this.getItemData$("destroyBuild");
        }
        static getBaozouTimes$() {
            return this.getItemData$("burstTimes");
        }
        static getKillDino$() {
            return this.getItemData$("killDinosaur");
        }
        static getUseCoin$() {
            return this.getItemData$("useCoin");
        }
        static getNum1Times$() {
            return this.getItemData$("rank1Times");
        }
        static getWatchAdTimes$() {
            return this.getItemData$("watchVideoAdTimes");
        }
        static getDestroyCarDone$() {
            return this.getCompleted$("destroyCar");
        }
        static getDestroyBuildingDone$() {
            return this.getCompleted$("destroyBuild");
        }
        static getBaozouTimesDone$() {
            return this.getCompleted$("burstTimes");
        }
        static getKillDinoDone$() {
            return this.getCompleted$("killDinosaur");
        }
        static getUseCoinDone$() {
            return this.getCompleted$("useCoin");
        }
        static getNum1TimesDone$() {
            return this.getCompleted$("rank1Times");
        }
        static getWatchAdTimesDone$() {
            return this.getCompleted$("watchVideoAdTimes");
        }
        static setDestroyCarDone$() {
            this.setCompleted$("destroyCar");
        }
        static setDestroyBuildingDone$() {
            this.setCompleted$("destroyBuild");
        }
        static setBaozouTimesDone$() {
            this.setCompleted$("burstTimes");
        }
        static setKillDinoDone$() {
            this.setCompleted$("killDinosaur");
        }
        static setUseCoinDone$() {
            this.setCompleted$("useCoin");
        }
        static setNum1TimesDone$() {
            this.setCompleted$("rank1Times");
        }
        static setWatchAdTimesDone$() {
            this.setCompleted$("watchVideoAdTimes");
        }
        static addUseCoin$(e) {
            let t = this.loadData$();
            t.useCoin += e, this.saveData$(t);
        }
        static incRank1Times$() {
            let e = this.loadData$();
            e.rank1Times++, this.saveData$(e);
        }
        static incWatchVideoAdTimes$() {
            let e = this.loadData$();
            e.watchVideoAdTimes++, this.saveData$(e);
        }
        static loadData$() {
            return ve.load$("todayStat", ze);
        }
        static saveData$(e) {
            ve.save$("todayStat", e);
        }
        static getItemData$(e) {
            let t = this.loadData$();
            return void 0 === t[e] ? 0 : t[e];
        }
        static getCompleted$(e) {
            let t = ve.load$("todayTaskCompleted", {});
            return void 0 !== t[e] && t[e];
        }
        static setCompleted$(e) {
            let t = ve.load$("todayTaskCompleted", {});
            t[e] = !0, ve.save$("todayTaskCompleted", t);
        }
    }
    class Ye {
        static showEffect$(e, t, i, s = 10, a) {
            if (!t || !i || i.destroyed || t.destroyed) return;
            let n = t instanceof Laya.Sprite ? t.localToGlobal(new Laya.Point(t.displayWidth / 2, t.displayHeight / 2)) : t,
                o = i instanceof Laya.Sprite ? i.localToGlobal(new Laya.Point(i.displayWidth / 2, i.displayHeight / 2)) : i,
                r = 360 / s,
                $ = 0,
                h = new Laya.Sprite();
            h.zOrder = 1e5, Laya.stage.addChild(h);
            for (let t = 0; t < s; t++) {
                let t;
                e instanceof Laya.Image ? (t = new Laya.Image()).skin = e.skin : (t = new Laya.Sprite()).texture = e.texture,
                    a && (t.width = a.width, t.height = a.height), h.addChild(t), t.pos(n.x, n.y), t.rotation = e.rotation,
                    t.scale(e.scaleX, e.scaleY);
                let i = new Laya.Vector2(100 + 200 * Math.random(), 0),
                    s = toRadian($);
                $ += r, ne.rotate$(i, s, i), ne.add$(n, i, i), Laya.Tween.to(t, {
                    x: i.x,
                    y: i.y
                }, 200 + 100 * Math.random(), Laya.Ease.linearNone, Laya.Handler.create(this, function() {
                    Laya.Tween.to(t, {
                        x: o.x,
                        y: o.y,
                        scaleX: 0,
                        scaleY: 0
                    }, 500 + 300 * Math.random(), Laya.Ease.strongOut);
                }.bind(this)));
            }
            s > 0 && Laya.timer.once(1100, this, function() {
                h.destroy(!0);
            }.bind(this));
        }
    }
    class Ke extends d {
        constructor() {
            super(), this.winName$ = "结算界面", this._data$ = null, this._waitEffect$ = !1;
        }
        initData$() {
            this._data$ = this.args$, this.haveClicked$ = !1;
        }
        onUILoad$() {
            super.onUILoad$(), this.setNodes$(), this.initUI$(), this.monitorBtns$(), this.monitorEvents$();
        }
        setNodes$() {
            this.rankProgressBar$ = r.getChildDeep$(this.owner, "rankProgressBar"), this.rankIcon$ = r.getChildDeep$(this.owner, "rankIcon"),
                this.rankLabel$ = r.getChildDeep$(this.owner, "rankLabel"), this.recevieButton$ = r.getChildDeep$(this.owner, "recevieButton"),
                this.doubleRecevieButton$ = r.getChildDeep$(this.owner, "doubleRecevieButton"), this.titleLabel0$ = r.getChildDeep$(this.owner, "titleLabel0"),
                this.img_pm = r.getChildDeep$(this.owner, "img_pm"),
                this.titleLabel$ = r.getChildDeep$(this.owner, "titleLabel"), this.pickCoinLabel$ = r.getChildDeep$(this.owner, "pickCoinLabel"),
                this.coinLabel$ = r.getChildDeep$(this.owner, "coinLabel"), this.pickCoinImage$ = r.getChildDeep$(this.owner, "pickCoinImage");
        }
        monitorBtns$() {
            this.recevieButton$.on(Laya.Event.CLICK, this, this.onReceiveCoinClick$),
                this.doubleRecevieButton$.on(Laya.Event.CLICK, this, this.onReceiveCoin3XClick$);
        }
        monitorEvents$() {
            b.registerEvent$(B.Event$.COIN_FLY_EFFECT$, this.showCoinFlyEffect$, this);
        }
        initUI$() {
            this._animProgressBar$ = this.rankProgressBar$.getComponent(ge), this._animProgressBar$.speed = .5,
                this.refreshUI$();
        }
        onDestroy() {
            b.releaseAllEvents$(this);
        }
        setSettlementData$(e) {
            this._waitEffect$ = !1, this._data$ = e, this.refreshUI$();
        }
        refreshUI$() {
            if (this._data$.rank == 1) {
                this.titleLabel0$.skin = "winUI/jieshu.png";
                this.img_pm.skin = "winUI/paiming1.png";
            } else {
                if (this._data$.rank == 2) {
                    this.img_pm.skin = "winUI/paiming2.png";
                } else if (this._data$.rank == 3) {
                    this.img_pm.skin = "winUI/paiming3.png";
                } else {
                    this.img_pm.skin = "winUI/paiming.png";
                }
                this.titleLabel0$.skin = "winUI/jieshu2.png";
            }
            this.titleLabel$.text = this._data$.rank, this.pickCoinLabel$.text = this._data$.pickUpCoin.toString(),
                this.coinLabel$.text = Be.getCoin$().toString(), this.refreshRankBox$();
        }
        refreshRankBox$() {
            this._waitEffect$ = !0;
            let e = this._data$.exp,
                t = Be.getExp$(),
                i = t + e,
                s = ke.getRankInfoByExp$(t),
                a = ke.getRankInfoByExp$(i);
            s.level == a.level ? (this.rankIcon$.skin = s.icon, this.rankLabel$.text = s.shortName + "x" + s.subLevel,
                this._animProgressBar$.setProgress(s.progress), this.owner.callLater(function() {
                    this._animProgressBar$.setAnimationTo(a.progress), this.owner.timerOnce(1e3 * this._animProgressBar$.speed + 100, this, function() {
                        this._waitEffect$ = !1, Be.addExp$(this._data$.exp);
                    }.bind(this));
                }.bind(this))) : (this.rankIcon$.skin = s.icon, this.rankLabel$.text = s.shortName + "x" + s.subLevel,
                this._animProgressBar$.setProgress(s.progress), this.owner.callLater(function() {
                    this._animProgressBar$.setAnimationTo(1), this.owner.timerOnce(1e3 * this._animProgressBar$.speed + 100, this, function() {
                        this.rankIcon$.skin = a.icon, this.rankLabel$.text = a.shortName + "x" + a.subLevel,
                            this._animProgressBar$.setProgress(0), this.owner.callLater(function() {
                                this._animProgressBar$.setAnimationTo(a.progress), this.owner.timerOnce(1e3 * this._animProgressBar$.speed + 100, this, function() {
                                    this._waitEffect$ = !1, Be.addExp$(this._data$.exp);
                                }.bind(this));
                            }.bind(this));
                    }.bind(this));
                }.bind(this)));
        }
        onReceiveCoin3XClick$() {
            let e = function(e) {
                e ? (Be.incWatchVideoAdTimes$(), this.showFlyEffectAndGoNextLevel$(3 * this._data$.pickUpCoin)) : null;
            }.bind(this);
            Dt.showVideoAd$(e);
        }
        onReceiveCoinClick$() {
            this._waitEffect$ || this.showFlyEffectAndGoNextLevel$(this._data$.pickUpCoin);
        }
        showFlyEffectAndGoNextLevel$(e) {
            this._waitEffect$ = !0,
                this.updatePlayerData$(e),
                this.coinLabel$.text = Be.getCoin$().toString(),
                Laya.SoundManager.playSound(B.Sound$.COIN_AWARD$, 1), b.dispatchEvent$(B.Event$.COIN_FLY_EFFECT$, {
                    prototype: this.pickCoinImage$,
                    startPos: this.pickCoinImage$,
                    size: new Laya.Size(100, 100)
                }), Laya.timer.once(1100, this, function() {
                    // if (this._waitEffect$ = !1, Be.getKey$() >= 3) {
                    //     // let e = Laya.Handler.create(this, this.closeAndGoHome$);
                    //     Laya.timer.clearAll(this),
                    //         this.closeAndGoHome$();
                    //     // l.getInstance$().openUI$(Laya.classWithChannel$("openChestUI"), null, {
                    //     //     closeHandler: e
                    //     // });
                    // } else 
                    // "Triceratops3", "Triceratops4", "Dilophosaurus3", "Dilophosaurus4"
                    if (Be.getKey$() >= 5) {
                        Be.unlockSkin$("Triceratops3");
                    }
                    if (Be.getKey$() >= 15) {
                        Be.unlockSkin$("Triceratops4");
                    }
                    if (Be.getKey$() >= 30) {
                        Be.unlockSkin$("Dilophosaurus3");
                    }
                    if (Be.getKey$() >= 50) {
                        Be.unlockSkin$("Dilophosaurus4");
                    }
                    this.closeAndGoHome$();
                }.bind(this));
        }
        updatePlayerData$(e) {
            Be.addCoin$(e), Be.addKey$(this._data$.pickUpKey), this.updateStatistics$();
        }
        updateStatistics$() {
            let e = this._data$.roundStatistics$;
            Be.addDestroyCar(e.destroyCar), Be.addDestroyBuild$(e.destroyBuild), Be.addBurstTimes$(e.burstTimes),
                Be.addKillDinosaur$(e.killDinosaur), 1 === this._data$.rank && (Be.addRank1Times$(1),
                    Fe.incRank1Times$()), this._data$.playerLevel >= 8 && Be.addLv8Achieve$(1), Be.saveData$(),
                Fe.addStatisticsWithRoundStatistics$(e);
        }
        closeAndGoHome$() {
            Laya.timer.clearAll(this), this.doClose$(), b.dispatchEvent$(B.Event$.SHOW_HOME_VIEW$);
        }
        showCoinFlyEffect$(e) {
            Ye.showEffect$(e.prototype, e.startPos, this.coinLabel$, e.count, e.size), this.coinLabel$.text = Be.getCoin$().toString();
        }
    }
    Ke.url = "Prefab/Web/Battle/SettlementWindow.json", Ke.className$ = "SettlementUI$",
        Ke.uiConfig$ = {
            layer: e.LAYER_MAINUI$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class je extends Ke {
        initData$() {
            super.initData$(), Be.incBattleTimes$(), Be.setTryUseSkinId$(void 0), this.delaySwitch$ = pgdk$.btnMoveSwitch$() && pgdk$.getPgCfg$("bannerSwitch"),
                Laya.showSignUI$ = !1;
        }
        initUI$() {
            super.initUI$(), this.initBanner$();
        }
        setNodes$() {
            super.setNodes$(), this.backMain$ = r.getChildDeep$(this.owner, "backMain"), this.videoCheck$ = r.getChildDeep$(this.owner, "videoCheck"),
                this.getCoinBtn$ = r.getChildDeep$(this.owner, "getCoinBtn"), this.moreGameBtn$ = r.getChildDeep$(this.owner, "moreGameBtn"),
                this.videoCheck$._clickHandler = new Laya.Handler(this, this.onCickCheckObx$);
        }
        monitorBtns$() {
            super.monitorBtns$(), this.backMain$.on(Laya.Event.CLICK, this, this.onReceiveCoinClick$),
                this.getCoinBtn$.on(Laya.Event.CLICK, this, this.onGetCoinClick$), this.moreGameBtn$.on(Laya.Event.CLICK, this, this.onMoreGameClick$);
        }
        onGetCoinClick$() {
            this.videoCheck$ && this.videoCheck$.selected ? this.onReceiveCoin3XClick$() : this.onReceiveCoinClick$();
        }
        onMoreGameClick$() {
            // pgdk$ && pgdk$.showAppBox$();
        }
        initBanner$() {
            // this.bannerCtrl$ = this.owner.getComponent(V), this.delaySwitch$ ? (window.pgdk$ && pgdk$.hideBanner$(),
            //     this.playBannerMoveAnim$()) : this.bannerCtrl$.restoreBanner$(!0);
        }
        playBannerMoveAnim$() {
            // this.isPlayBannerMoveAnim$ = !0, Ne.create$(this.bannerCtrl$, [this.recevieButton$, this.doubleRecevieButton$], this.onBannerMoveAnimComplete$.bind(this));
        }
        onBannerMoveAnimComplete$() {
            // this.isPlayBannerMoveAnim$ = !1;
        }
        onReceiveCoinClick$() {
            // this.isPlayBannerMoveAnim$ || 
            super.onReceiveCoinClick$();
        }
    }
    je.url = "Prefab/Qq/Battle/SettlementWindowQq.json", je.className$ = "SettlementUIQq$",
        je.uiConfig$ = {
            layer: e.LAYER_MAINUI$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class qe extends d {
        constructor() {
            super();
        }
        onAwake() {
            this.setNodes$();
        }
        setNodes$() {
            this.progressBar$ = r.getChildDeep$(this.owner, "taskBar"), this.actionButton$ = r.getChildDeep$(this.owner, "btn_action"),
                this.descLabel$ = r.getChildDeep$(this.owner, "descLabel"), this.awardLabel$ = r.getChildDeep$(this.owner, "awardLabel"),
                this.progressLabel$ = r.getChildDeep$(this.owner, "progressLabel"), this.coinImage$ = r.getChildDeep$(this.owner, "coinImage"),
                this._animProgressBar$ = this.progressBar$.getComponent(ge), this._animProgressBar$.speed = .6,
                this.actionButton$.on(Laya.Event.CLICK, this, this.actionButtonClick$);
        }
        setData$(e) {
            if (e.currStep > e.allStep && (e.currStep = e.allStep), this._data$ = e, this.descLabel$.text = e.desc,
                this.awardLabel$.text = e.rewardNum.toString(), e.done) this.actionButton$.mouseEnabled = !0,
                this.actionButton$.skin = "taskUI/btn_ok.png", this.progressLabel$.text = e.allStep + "/" + e.allStep,
                this._animProgressBar$.setProgress(1);
            else {
                this.progressLabel$.text = e.currStep + "/" + e.allStep, this.actionButton$.mouseEnabled = !0,
                    this.actionButton$.skin = e.currStep === e.allStep ? "taskUI/btn_draw.png" : "taskUI/btn_carryon.png";
                let t = e.currStep / e.allStep;
                t > 1 && (t = 1), this._animProgressBar$.setProgress(0), this.owner.callLater(function() {
                    this._animProgressBar$.setAnimationTo(t);
                }.bind(this));
            }
        }
        actionButtonClick$() {
            this._data$ && (this._data$.done || (this._data$.currStep === this._data$.allStep ? this.receiveAward$() : Ce.show("The goal is not yet complete, try it!")));
        }
        receiveAward$() {
            this._data$.onDone$(), Laya.SoundManager.playSound(B.Sound$.COIN_AWARD$, 1), b.dispatchEvent$(B.Event$.TASK_LIST_ITEM_COMPLETED$),
                b.dispatchEvent$(B.Event$.COIN_FLY_EFFECT$, {
                    prototype: this.coinImage$,
                    startPos: this.coinImage$,
                    size: new Laya.Size(100, 100)
                });
        }
    }
    class Xe extends d {
        constructor() {
            super();
        }
        onUILoad$() {
            super.onUILoad$(), this.setNodes$(), this.initList$(), this.refreshList$();
        }
        setNodes$() {
            this.closeButton$ = r.getChildDeep$(this.owner, "btn_exit$"), this.achieveList$ = r.getChildDeep$(this.owner, "achieveList$"),
                this.closeButton$.on(Laya.Event.CLICK, this, this.doClose$);
        }
        static hasWaitRecevieAwardItem$() {
            let e = this.buildListData$();
            for (let t = 0; t < e.length; t++) {
                let i = e[t];
                if (!i.done && i.currStep >= i.allStep) return !0;
            }
            return !1;
        }
        static buildListData$() {
            let e = [];
            for (let t = 0; t < B.Achivements$.length; t++) {
                let i = B.Achivements$[t],
                    s = i.getCurrStep$();
                s > i.allStep && (s = i.allStep), e.push({
                    index: t,
                    desc: i.desc,
                    rewardNum: i.rewardNum,
                    allStep: i.allStep,
                    currStep: s,
                    done: i.isDone$(),
                    onDone$: function() {
                        i.onDone$(), Be.addCoin$(i.rewardNum);
                    }.bind(this)
                });
            }
            return e;
        }
        onEnable() {
            b.registerEvent$(B.Event$.TASK_LIST_ITEM_COMPLETED$, this.refreshList$, this);
        }
        onDisable() {
            b.releaseAllEvents$(this);
        }
        initList$() {
            this.achieveList$.renderHandler = new Laya.Handler(this, this.updateList$);
        }
        updateList$(e, t) {
            let i = this._listData$[t];
            e.getComponent(qe).setData$(i);
        }
        refreshList$() {
            this._listData$ = Xe.buildListData$(), this.achieveList$.array = this._listData$,
                this.achieveList$.refresh();
        }
        sortListData$(e) {
            return e.sort((e, t) => {
                if (e.done && t.done) return e.index - t.index;
                if (e.done) return 1;
                if (t.done) return -1;
                let i = e.currStep >= e.allStep,
                    s = t.currStep >= t.allStep;
                return i && s ? e.index - t.index : i ? -1 : s ? 1 : e.index - t.index;
            });
        }
    }
    Xe.url = "Prefab/Web/Comp/AchieveListWindow.json", Xe.className$ = "AchieveListUI",
        Xe.uiConfig$ = {
            layer: e.LAYER_NORMAL$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class Qe extends Xe {}
    Qe.url = "Prefab/Qq/Comp/AchieveListWindowQq.json", Qe.className$ = "AchievementDialogUIQq$",
        Qe.uiConfig$ = {
            layer: e.LAYER_NORMAL$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class Je extends d {
        constructor() {
            super();
        }
        static open$() {
            new Je().popup();
        }
        onUILoad$() {
            super.onUILoad$(), this.coinAmount$ = r.getChildDeep$(this.owner, "coinAmount"),
                this.closeButton$ = r.getChildDeep$(this.owner, "btn_exit"), this.coinImage$ = r.getChildDeep$(this.owner, "coinImage"),
                this.watchAdAddCoinButton$ = r.getChildDeep$(this.owner, "watchAdAddCoinButton"),
                this.coinAmount$.text = te.getNotEnoughCoinAward$(), this.closeButton$.on(Laya.Event.CLICK, this, this.doClose$),
                this.watchAdAddCoinButton$.on(Laya.Event.CLICK, this, this.onWatchAdAddCoinClick$);
        }
        onWatchAdAddCoinClick$() {
            let e = function(e) {
                if (e) {
                    let e = te.getNotEnoughCoinAward$();
                    Be.addCoin$(e), Be.incWatchVideoAdTimes$(), Laya.SoundManager.playSound(B.Sound$.COIN_AWARD$, 1),
                        b.dispatchEvent$(B.Event$.COIN_FLY_EFFECT$, {
                            prototype: this.coinImage$,
                            startPos: this.coinImage$,
                            size: new Laya.Size(100, 100)
                        }), Laya.timer.once(1500, this, function() {
                            this.doClose$();
                        });
                } else null;
            }.bind(this);
            Dt.showVideoAd$(e);
        }
    }
    Je.url = "Prefab/Web/Comp/NotEnoughCoinDialog.json", Je.className$ = "NotEnoughCoinDialog",
        Je.uiConfig$ = {
            layer: e.LAYER_NORMAL$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class Ze extends Je {}
    Ze.url = "Prefab/Qq/Comp/NotEnoughCoinDialogQq.json", Ze.className$ = "NotEnoughCoinDialogQq$",
        Ze.uiConfig$ = {
            layer: e.LAYER_NORMAL$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class et {
        static spawnSkin$(e, t) {
            let i = this._prototypes$[e];
            if (i) {
                let s = this.clone$(i);
                s.initAnim(e), t(s);
            } else this.loadPrototypeSkin$(e, i => {
                let s = this.clone$(i);
                s.initAnim(e), t(s);
            });
        }
        static getSkinIndex$(e) {
            for (let t = 0; t < B.AllSkins$.length; t++)
                if (B.AllSkins$[t] === e) return t;
            return -1;
        }
        static getRandomSkinId$(e) {
            let t = [];
            for (let e = 0; e < B.AllSkins$.length; e++) Be.isSkinUnlocked$(B.AllSkins$[e]) || t.push(B.AllSkins$[e]);
            return e ? 0 === t.length ? ee.randomElementFromArray$(B.AllSkins$) : ee.randomElementFromArray$(t) : 0 === t.length ? null : ee.randomElementFromArray$(t);
        }
        static getBaseSkinUnlockedCount$() {
            return et.getUnlockedCount$(B.BaseSkins$);
        }
        static getBaseSkinLockedCount$() {
            return B.BaseSkins$.length - this.getBaseSkinUnlockedCount$();
        }
        static getInfrequentSkinUnlockedCount$() {
            return et.getUnlockedCount$(B.InfrequentSkins$);
        }
        static getInfrequentSkinLockedCount() {
            return B.InfrequentSkins$.length - this.getInfrequentSkinUnlockedCount$();
        }
        static getSkinProperty$(e) {
            return B.jt[e];
        }
        static getRandomAdvancedSkinId$() {
            let e = [];
            for (let t = 0; t < B.AdvancedSkins$.length; t++) Be.isSkinUnlocked$(B.AdvancedSkins$[t]) || e.push(B.AdvancedSkins$[t]);
            return 0 === e.length ? null : ee.randomElementFromArray$(e);
        }
        static loadPrototypeSkin$(e, t) {
            let i = this.getResourcePath$(e);
            Laya.Sprite3D.load(i, Laya.Handler.create(this, i => {
                i.transform.localPosition = new Laya.Vector3(0, 0, 0), i.addComponent(Laya.CyzClassMap$.AniMgr),
                    this._prototypes$[e] = i, t(i);
            }));
        }
        static clone$(e) {
            return Laya.Sprite3D.instantiate(e, null, !0, e.transform.position, e.transform.rotation).getComponent(Laya.CyzClassMap$.AniMgr);
        }
        static getResourcePath$(e) {
            return get3DResourcePath$(e) + ".lh";
        }
        static getUnlockedCount$(e) {
            let t = 0;
            for (let i = 0; i < e.length; i++) Be.isSkinUnlocked$(e[i]) && t++;
            return t;
        }
        static getRandomLockedSkins$(e) {
            let t = [];
            for (let e = 0; e < B.AllSkins$.length; e++) Be.isSkinUnlocked$(B.AllSkins$[e]) || t.push(B.AllSkins$[e]);
            if (t.length < e) return null;
            let i = [];
            for (let s = 0; s < e; s++) i.push(ee.randomElementFromArray$(t, !0));
            return i;
        }
    }
    et._prototypes$ = {};
    let it = new Laya.Vector3();
    class st {
        static createMix$(e, t, i) {
            let s = this._layerMap$.get(e);
            if (s) i && i(s);
            else if (t) Laya.Scene3D.load(t, Laya.Handler.create(this, t => {
                s = this.initScene3d$(e, t), i && i(s);
            }));
            else {
                let t = new Laya.Scene3D();
                s = this.initScene3d$(e, t);
                let a = new Laya.DirectionLight();
                a.color = new Laya.Vector3(.5, .5, .5), t.addChild(a), i && i(s);
            }
        }
        static destroyMix$(e) {
            let t = this._layerMap$.get(e);
            if (t) {
                let i = t.scene,
                    s = !0;
                this._layerMap$.forEach((t, a) => {
                    t.scene === i && a != e && (s = !1);
                }), s && t.scene.destroy(!0), this._layerMap$.delete(e), console.log("destroyMix", e, t);
            }
        }
        static add3DMixWith2DRefSprite$(e, t, i, s = new Laya.Vector3(0, 0, 0)) {
            let a = this._layerMap$.get(e);
            a && (a.scene.addChild(t), this._sync$(a, t, i, s));
        }
        static syncPos$(e, t, i, s = new Laya.Vector3(0, 0, 0)) {
            let a = this._layerMap$.get(e);
            a && this._sync$(a, t, i, s);
        }
        static _sync$(e, t, i, s) {
            let a = new Laya.Point(0, 0);
            a = i.localToGlobal(a), it.setValue(a.x, a.y, 0), e.camera.convertScreenCoordToOrthographicCoord(it, it),
                Laya.Vector3.add(it, s, it), t.transform.position = it;
        }
        static initScene3d$(e, t) {
            e.addChild(t);
            let i = new Laya.Camera();
            i.transform.translate(new Laya.Vector3(0, 0, 0)), i.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY,
                i.orthographic = !0, i.orthographicVerticalSize = 10, i.transform.rotationEuler = new Laya.Vector3(30, 0, 0),
                t.addChild(i);
            let s = {
                scene: t,
                camera: i
            };
            return this._layerMap$.set(e, s), s;
        }
    }
    st._layerMap$ = new Map();
    var at = get3DResourcePath$("UIScene.ls");
    class nt extends Laya.Script {
        constructor() {
            super(), this.starEffectUI$ = void 0;
        }
        onAwake() {
            this.previewBox$ = r.getChildDeep$(this.owner, "previewBox$"), this.coinImage$ = r.getChildDeep$(this.owner, "coinImage$"),
                this.coinLabel$ = r.getChildDeep$(this.owner, "coinLabel$"), this.chestImage$ = r.getChildDeep$(this.owner, "chestImage$"),
                this.backgroundImage$ = r.getChildDeep$(this.owner, "backgroundImage$"), this.effectStar$ = r.getChildDeep$(this.owner, "effectStar$"),
                this.resetGridItem$(), this.owner.on(Laya.Event.CLICK, this, this.onClick$);
        }
        onEnable() {
            b.registerEvent$(B.Event$.SKIN_UNLOCK_DIALOG_OPEN$, this.onSkinUnlockDialogOpen$, this),
                b.registerEvent$(B.Event$.SKIN_UNLOCK_DIALOG_CLOSE$, this.onSkinUnlockDialogClose$, this);
        }
        onDisable() {
            b.releaseAllEvents$(this);
        }
        onDestroy() {
            this.destroyPreview$();
        }
        refreshData$(e) {
            if (!e) return;
            this._data$ = e;
            let t = this._data$.isOpen,
                s = this._data$.coin;
            t ? (this.backgroundImage$.skin = "homeUI/neikuang.png", i === B.r$.COIN$ ? (this.destroyPreview$(),
                    this.coinImage$.visible = !0, this.coinLabel$.visible = !0, this.coinLabel$.text = s.toString()) : (this.coinImage$.visible = !1,
                    this.coinLabel$.visible = !1)) : (this.backgroundImage$.skin = "homeUI/neikuang.png",
                    this.coinImage$.visible = !1, this.coinLabel$.visible = !1, this.destroyPreview$()),
                this.backgroundImage$.visible = !t, this.chestImage$.visible = !t, this.chestImage$.scale(1, 1);
        }
        openChestWithAnim(e, t) {
            this.playParticleEffect$(e), Laya.Tween.to(this.chestImage$, {
                scaleX: 0,
                scaleY: 0
            }, 200, Laya.Ease.backIn, Laya.Handler.create(this, function() {
                this.backgroundImage$.skin = "homeUI/neikuang.png";
                let e = this._data$.type,
                    i = this._data$.coin,
                    s = this._data$.skinId;
                e === B.r$.COIN$ ? (this.coinImage$.visible = !0, this.coinLabel$.visible = !0,
                    this.coinLabel$.text = i.toString()) : (this.coinImage$.visible = !1, this.coinLabel$.visible = !1,
                    this.showSkinPreview$(s, t));
            }.bind(this)));
        }
        destroyPreview$() {
            this._preview$ && (this._preview$.destroy(!0), this._preview$ = null);
        }
        resetGridItem$() {
            this.backgroundImage$.skin = "homeUI/neikuang.png", this.backgroundImage$.visible = !0,
                this.coinImage$.visible = !1, this.coinLabel$.visible = !1, this.destroyPreview$();
        }
        showSkinPreview$(e, t) {
            st.createMix$(t, at, function() {
                et.spawnSkin$(e, e => {
                    this._preview = e.owner, this._preview && (this._preview.active = !1), this._preview.transform.localScale = new Laya.Vector3(.25, .25, .25),
                        st.add3DMixWith2DRefSprite$(t, this._preview, this.previewBox$);
                });
            }.bind(this));
        }
        playParticleEffect$(e) {
            if (this.starEffectUI$) this.starEffectUI$.starShow.play(0, !1);
            else {
                let e = "Prefab/Effect/ShowStar.json";
                l.getInstance$().createPrefab$(e, this.effectStar$, this.preCompelet$.bind(this));
            }
        }
        preCompelet$(e) {
            this.starEffectUI$ = e, e.starShow.play(0, !1);
        }
        onClick$() {
            if (Be.getKey$() > 0) {
                let {
                    isOpen: e,
                    index: t
                } = this._data$;
                e || b.dispatchEvent$(B.Event$.OPEN_CHEST$, t);
            }
        }
        onSkinUnlockDialogOpen$() {
            this._preview$ && (this._preview$.active = !1);
        }
        onSkinUnlockDialogClose$() {
            this._preview$ && (this._preview$.active = !0);
        }
    }
    class ot extends Laya.Script {
        constructor() {
            super(), this.keyItemEnabledImageResource$ = "chestUI/yaoshi1.png", this.keyItemDisableImageResource$ = "chestUI/yaoshi2.png",
                this._keyData$ = [!1, !1, !1];
        }
        onAwake() {
            this._list$ = this.owner, this._list$.renderHandler = new Laya.Handler(this, this.updateKeyItem$);
        }
        onEnable() {
            b.registerEvent$(B.GameEvent$.SET_NET_DATA$, this.refresh$, this), b.registerEvent$(B.Event$.KEY_CHANGE$, this.refresh$, this),
                this.refresh$();
        }
        onDisable() {
            b.releaseAllEvents$(this);
        }
        refresh$() {
            let e = Be.getKey$();
            this._keyData$[0] = e >= 1, this._keyData$[1] = e >= 2, this._keyData$[2] = e >= 3,
                this._list$.array = this._keyData$, this._list$.refresh();
        }
        updateKeyItem$(e, t) {
            let i = this._keyData$[t];
            e.getChildAt(0).skin = i ? this.keyItemEnabledImageResource$ : this.keyItemDisableImageResource$;
        }
    }
    var rt = get3DResourcePath$("UIScene.ls");
    class $t extends d {
        constructor() {
            super(), this.continueButton$ = null, this.addKeyButton$ = null, this.continueButton2$ = null,
                this.rewardPreview$ = null, this.keyList$ = null, this.tipImage$ = null, this.chestGrid$ = null,
                this._awardPreview$ = null, this._chestsData$ = [], this._bestAward$ = null, this._addedKey$ = !1;
        }
        static getChestSkinId$() {
            let e = et.getRandomAdvancedSkinId$();
            if (null === e) return null;
            let t = fe.getItem("lastChestSkinId", null);
            return Be.isSkinExists$(t) ? (null === t ? fe.setItem("lastChestSkinId", e) : Be.isSkinUnlocked$(t) || (e = t),
                e) : e;
        }
        onUILoad$() {
            super.onUILoad$(), this.setNodes$(), this._randomAward$(), this._resetUI$(), this._destroyAwardPreview$();
        }
        setNodes$() {
            this.tipImage$ = r.getChildDeep$(this.owner, "tipImage$"), this.keyList$ = r.getChildDeep$(this.owner, "keyList$"),
                this.chestGrid$ = r.getChildDeep$(this.owner, "chestGrid$"), this.continueButton$ = r.getChildDeep$(this.owner, "continueButton$"),
                this.addKeyButton$ = r.getChildDeep$(this.owner, "addKeyButton$"), this.continueButton2$ = r.getChildDeep$(this.owner, "continueButton2$"),
                this.rewardPreview$ = r.getChildDeep$(this.owner, "rewardPreview$"), this.btn_exit$ = r.getChildDeep$(this.owner, "btn_exit$"),
                this.chestGrid$.renderHandler = new Laya.Handler(this, this._updateChestItem$),
                this.continueButton$.on(Laya.Event.CLICK, this, this._continueClick$), this.addKeyButton$.on(Laya.Event.CLICK, this, this._addKeyClick$),
                this.continueButton2$.on(Laya.Event.CLICK, this, this._continueClick$), this.btn_exit$.on(Laya.Event.CLICK, this, this.doClose$);
        }
        _continueClick$() {
            this._destroyAwardPreview$(), this.doClose$();
        }
        giveAward$(e) {
            let t = e.type,
                i = e.coin,
                s = e.skinId;
            t === B.r$.COIN$ ? (Be.addCoin$(i), Laya.SoundManager.playSound(B.Sound$.COIN_AWARD$, 1)) : (Be.unlockSkin$(s),
                l.getInstance$().openUI$(Laya.classWithChannel$("skinUnlock"), null, {
                    skinId: s,
                    closeHandler: Laya.Handler.create(this, this.showModel$)
                }), $t.incUnlockSkinTimes$());
        }
        showModel$() {
            this._init3DPreview$();
        }
        static incUnlockSkinTimes$() {
            let e = ve.load$("unlockSkinTimes", {
                times: 0
            });
            e.times++, ve.save$("unlockSkinTimes", e);
        }
        static canUnlockSkinToday$() {
            return ve.load$("unlockSkinTimes", {
                times: 0
            }).times < 3;
        }
        static canOpenChest$(e) {
            return 0 === Be.getKey$() || 0 === e;
        }
        onEnable() {
            b.registerEvent$(B.Event$.OPEN_CHEST$, this._onChestOpen$, this), this.owner.timerOnce(100, this, this._init3DPreview$);
        }
        onDestroy() {
            b.releaseAllEvents$(this), st.destroyMix$(this.owner), super.onDestroy();
        }
        _randomAward$() {
            this._chestsData$ = [];
            let e = te.getCoinAwardAmount$().concat();
            for (let t = 0; t < 9; t++) this._chestsData$.push({
                index: t,
                isOpen: !1,
                type: B.r$.COIN$,
                coin: ee.randomElementFromArray$(e, !0)
            });
            let t = $t.getChestSkinId$();
            if (this._bestAward$ = null === t ? {
                    type: B.r$.COIN$,
                    coin: te.getBestCoinAward$()
                } : {
                    type: B.r$.SKIN$,
                    skinId: t
                }, this._bestAward$.type === B.r$.COIN$) {
                let e = randomRangeInt(0, 9);
                this._chestsData$[e].coin = te.getBestCoinAward$();
            } else if ($t.canUnlockSkinToday$()) {
                let e = randomRangeInt(0, 9);
                this._chestsData$[e].type = B.r$.SKIN$, this._chestsData$[e].skinId = t;
            }
            this.chestGrid$.array = this._chestsData$, this.chestGrid$.refresh();
        }
        _makeAwardPreview$() {
            this._destroyAwardPreview$(), this._bestAward$.type === B.r$.SKIN$ && this._makeBallPreview$(this._bestAward$.skinId);
        }
        _makeBallPreview$(e) {
            et.spawnSkin$(e, e => {
                this._awardPreview$ = e.owner, this._awardPreview$.transform.localScale = new Laya.Vector3(.3, .3, .3),
                    this._addToPreview$(), b.dispatchEvent$(B.Event$.SKIN_UNLOCK_DIALOG_CLOSE$);
            });
        }
        _addToPreview$(e = 0) {
            st.add3DMixWith2DRefSprite$(this.owner, this._awardPreview$, this.rewardPreview$, new Laya.Vector3(0, e, 0));
        }
        _destroyAwardPreview$() {
            this._awardPreview$ && (this._awardPreview$.destroy(!0), this._awardPreview$ = null);
        }
        _init3DPreview$() {
            st.createMix$(this.owner, rt, function() {
                this._makeAwardPreview$();
            }.bind(this));
        }
        _resetUI$() {
            this._addedKey$ = !1, this.keyList$.visible = !0, this.tipImage$.visible = !0, this.continueButton$.visible = !1,
                this.addKeyButton$.visible = !1, this.continueButton2$.visible = !1;
        }
        _addKeyClick$() {
            let e = function(e) {
                e ? (Be.addKey$(3), this._addedKey$ = !0, this.keyList$.visible = !0, this.tipImage$.visible = !0,
                    this.continueButton$.visible = !1, this.addKeyButton$.visible = !1, this.continueButton2$.visible = !1,
                    Laya.SoundManager.playSound(B.Sound$.PICK_KEY$, 1)) : null;
            }.bind(this);
            Dt.showVideoAd$(e);
        }
        _updateChestItem$(e, t) {
            let i = this._chestsData$[t];
            e.getComponent(nt).refreshData$(i);
        }
        _getRemainChest$() {
            let e = 0;
            for (let t = 0; t < this._chestsData$.length; t++) this._chestsData$[t].isOpen || e++;
            return e;
        }
        _onChestOpen$(e) {
            let t = this._chestsData$[e];
            if (t.isOpen) return;
            t.type != B.r$.COIN$ && this._destroyAwardPreview$(), t.isOpen = !0, this.giveAward$(t);
            let i = this.chestGrid$.getCell(e);
            if (i) {
                let e = i.getComponent(nt);
                e && e.openChestWithAnim($t._openChestParticleSettings, this.owner);
            }
            Be.addKey$(-1);
            let s = this._getRemainChest$();
            $t.canOpenChest$(s) && (this.keyList$.visible = !1, this.tipImage$.visible = !1,
                this._canAddKey$(s) ? this.continueButton2$.visible = !0 : (this.continueButton$.visible = !0,
                    this.addKeyButton$.visible = !0));
        }
        _canAddKey$(e) {
            return this._addedKey$ || 0 === e;
        }
    }
    $t.url = "Prefab/Web/Comp/OpenCheastWindow.json", $t.className$ = "OpenChestView",
        $t.uiConfig$ = {
            layer: e.LAYER_NORMAL$,
            only: !1,
            needUISurrenal: !0,
            notClose: !0
        };
    class ht extends $t {}
    ht.url = "Prefab/Qq/Comp/OpenCheastWindowQq.json", ht.className$ = "OpenChestViewQq$",
        ht.uiConfig$ = {
            layer: e.LAYER_NORMAL$,
            only: !1,
            needUISurrenal: !0,
            notClose: !0
        };
    var lt = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"];
    class dt extends d {
        constructor() {
            super();
        }
        onAwake() {
            this.setNodes$();
        }
        setNodes$() {
            this.dayLabel$ = r.getChildDeep$(this.owner, "day"), this.checkMask$ = r.getChildDeep$(this.owner, "getedMark"),
                this.checkImage$ = r.getChildDeep$(this.owner, "getedMark"), this.eggImage$ = r.getChildDeep$(this.owner, "eggImg"),
                this.coinImage$ = r.getChildDeep$(this.owner, "reward"), this.coinAmount$ = r.getChildDeep$(this.owner, "reward_cnt"),
                this.box$ = r.getChildDeep$(this.owner, "sign_1");
        }
        setData$(e) {
            this.dayLabel$.text = lt[e.day], this.checkMask$.visible = e.isChecked, this.checkImage$.visible = this.checkMask$.visible,
                6 === e.day ? (this.eggImage$.visible = !0, this.coinImage$.visible = !1, this.coinAmount$.visible = !1,
                    this.box$.width = 420, this.box$.skin = "sign7DayUI/changkuang.png", this.box$.x = 210,
                    this.eggImage$.centerX = 150) : (this.eggImage$.visible = !1, this.coinImage$.visible = !0,
                    this.box$.width = 120, this.coinAmount$.text = e.amount.toString(), this.coinAmount$.visible = !0);
        }
    }
    var ct = [{
        award: "coin",
        amount: 200
    }, {
        award: "coin",
        amount: 300
    }, {
        award: "coin",
        amount: 400
    }, {
        award: "coin",
        amount: 500
    }, {
        award: "coin",
        amount: 600
    }, {
        award: "coin",
        amount: 800
    }, {
        award: "egg",
        amount: 1
    }];
    class gt extends d {
        constructor() {
            super();
        }
        onUILoad$() {
            super.onUILoad$(), this.setNodes$(), this.initList$(), this.refreshList$();
        }
        setNodes$() {
            this.closeButton$ = r.getChildDeep$(this.owner, "btn_exit$"), this.recevieButton$ = r.getChildDeep$(this.owner, "btn_draw$"),
                this.signItem$ = r.getChildDeep$(this.owner, "signItem$"), this.itemsList$ = r.getChildDeep$(this.owner, "signList$"),
                this.closeButton$.on(Laya.Event.CLICK, this, this.doClose$), this.recevieButton$.on(Laya.Event.CLICK, this, this.onRecevieClick$);
        }
        static open$() {
            new gt().popup();
        }
        static todaySigned$() {
            return ve.load$("todaySigned", {
                signed: !1
            }).signed;
        }
        static buildListData$() {
            let e = Be.getSigninDays$() % ct.length,
                t = [];
            for (let i = 0; i < 7; i++) t.push({
                day: i,
                amount: ct[i].amount,
                isChecked: e > i
            });
            return t;
        }
        initList$() {
            this.itemsList$.renderHandler = new Laya.Handler(this, this.updateList$), this.itemsList$.vScrollBarSkin = "";
        }
        updateList$(e, t) {
            let i = this._listData$[t];
            e.getComponent(dt).setData$(i);
        }
        refreshList$() {
            this._listData$ = gt.buildListData$(), this.itemsList$.array = this._listData$,
                this.itemsList$.refresh();
        }
        onRecevieClick$() {
            if (gt.todaySigned$()) return this.doClose$(), void Ce.show("Signed in today!");
            this.receiveAward$(), this.refreshList$(), Laya.timer.once(1e3, this, function() {
                this.doClose$();
            }.bind(this));
        }
        setTodaySigned$() {
            let e = ve.load$("todaySigned", {
                signed: !1
            });
            e.signed = !0, ve.save$("todaySigned", e);
        }
        receiveAward$() {
            let e = Be.getSigninDays$() % ct.length,
                t = this._listData$[e],
                i = this.itemsList$.getCell(e).getComponent(dt);
            t.day !== this._listData$.length - 1 && (Be.addCoin$(t.amount), b.dispatchEvent$(B.Event$.COIN_FLY_EFFECT$, {
                prototype: i.coinImage$,
                startPos: i.coinImage$,
                size: new Laya.Size(100, 100),
                count: t.amount
            })), this.setTodaySigned$(), Be.incSigninDays$(), Laya.SoundManager.playSound(B.Sound$.COIN_AWARD$, 1);
        }
    }
    gt.url = "Prefab/Web/Comp/Sign7DayWindow.json", gt.className$ = "Sign7DayUI", gt.uiConfig$ = {
        layer: e.LAYER_NORMAL$,
        only: !0,
        needUISurrenal: !0,
        notClose: !1
    };
    class ut extends gt {}
    ut.url = "Prefab/Qq/Comp/Sign7DayWindowQq.json", ut.className$ = "SigninDialogUIQq$",
        ut.uiConfig$ = {
            layer: e.LAYER_NORMAL$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class pt extends Laya.Script {
        constructor() {
            super(), this.addProgressSpeed$ = .2, this.desProgressSpeed$ = .004, this.showAwardPercent$ = .8,
                this.hasTrigger$ = !1, this.onBtnClick$ = void 0, this.onTrigger$ = void 0, this.onAdClose$ = void 0;
        }
        onStart() {
            this.owner.zOrder = 88888888, this.progressVal$ = 0, 0 !== this.progress$._children.length ? (this.monitorBtns$(),
                conf && "qq" == conf.channel && pgdk$ && "zs" == pgdk$.channel$ && (this.addProgressSpeed$ = pgdk$.getClickAwardAdd$(),
                    this.desProgressSpeed$ = pgdk$.getClickAwardBack$(), this.showAwardPercent$ = pgdk$.getClickAwardPercent$())) : console.error("宝箱进度条必须包含子节点");
        }
        onUpdate() {
            this.progressVal$ > 0 && (this.progressVal$ -= this.desProgressSpeed$), this._updateProgress$();
        }
        _updateProgress$() {
            this.progressVal$ < 0 && (this.progressVal$ = 0), this.progressVal$ > 1 && (this.progressVal$ = 1),
                0 !== this.progress$._children.length && (this.progress$._children[0].width = this.progress$.width * this.progressVal$);
        }
        monitorBtns$() {
            Re.onButtonScaleEvent$(this.button$, this, "onClick$");
        }
        onClick$() {
            console.log("点击宝箱"), this.onBtnClick$ && this.onBtnClick$(), this.progressVal$ += this.addProgressSpeed$,
                Array.isArray(this.showAwardPercent$) ? this.progressVal$ >= this.showAwardPercent$[0] && this.progressVal$ <= this.showAwardPercent$[1] && (this.hasTrigger$ || (this.hasTrigger$ = !0,
                    this._onTrigger$())) : this.progressVal$ > this.showAwardPercent$ && (this.hasTrigger$ || (this.hasTrigger$ = !0,
                    this._onTrigger$()));
        }
        _onTrigger$() {
            if ("AppBox" === this.adType$) pgdk$.showAppBox$(this._onAdClose$.bind(this));
            else if ("video" === this.adType$) pgdk$.showVideoAd$();
            else {
                if ("banner" !== this.adType$) return void this._dispatchTriggerEvent$(); {
                    let e = this.owner.getComponent(V);
                    e && e.restoreBanner$ && e.restoreBanner$(!0);
                }
            }
            Laya.timer.once(1e3, this, this._dispatchTriggerEvent$);
        }
        _dispatchTriggerEvent$() {
            this.onTrigger$ && this.onTrigger$();
        }
        _onAdClose$() {
            this.onAdClose$ && this.onAdClose$();
        }
        restoreBanner$() {
            this.canShowBanner$ && this._createBannerByUI$();
        }
    }
    class mt extends d {
        constructor() {
            super(), this.winName = "宝箱界面";
        }
        initData$() {
            this.addNum$ = 100, this.closeBack$ = this.args$.closeHandler;
        }
        onUILoad$() {
            super.onUILoad$(), this.initUI$(), this.listenEvents$(), this.monitorBtns$();
        }
        initUI$() {
            this.btnContinue$ = r.getChildDeep$(this.owner, "BtnContinue"), this.labelAwardNum$ = r.getChildDeep$(this.owner, "LabelAwardNum"),
                this.labelAwardNum$.text = "+" + this.addNum$, this.initBoxClick$(), this.initBoxResult$();
        }
        monitorBtns$() {
            r.onButtonScaleEvent$(this.btnContinue$, this, "onClickContinue$");
        }
        onClickContinue$() {
            this.onInduceAdClose$();
        }
        initBoxClick$() {
            this.boxClick$.visible = !0;
        }
        initBoxResult$() {
            this.boxResult$.visible = !1;
        }
        listenEvents$() {
            let e = this.owner.getComponent(pt);
            e.onTrigger$ = this.onInduceTrigger$.bind(this), e.onAdClose$ = this.onInduceAdClose$.bind(this);
        }
        onInduceTrigger$() {
            this.boxClick$.visible = !1, this.boxResult$.visible = !0;
        }
        onInduceAdClose$() {
            this.getCoin$(), Laya.timer.once(1500, this, function() {
                this.closeBack$ && this.closeBack$.run(), this.doClose$();
            });
        }
        getCoin$() {
            Be.addCoin$(this.addNum$), Ce.show("Get " + this.addNum$ + " Coins");
            let e = r.getChildDeep$(this.owner, "iconImage");
            Laya.SoundManager.playSound(B.Sound$.COIN_AWARD$, 1), b.dispatchEvent$(B.Event$.COIN_FLY_EFFECT$, {
                prototype: e,
                startPos: e,
                size: new Laya.Size(100, 100)
            });
        }
    }
    mt.url = "Prefab/Qq/Comp/TreasureBoxQq.json", mt.className$ = "TreasureBoxUIQq$",
        mt.uiConfig$ = {
            layer: e.LAYER_NORMAL$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    var _t = get3DResourcePath$("UIScene.ls");
    class yt extends d {
        constructor() {
            super();
        }
        initData$() {
            this._skinId$ = this.args$.skinId, this.closeH$ = this.args$.closeH, this.isShowCheat$ = pgdk$ && pgdk$.isStartTrick$();
        }
        onUILoad$() {
            super.onUILoad$(), this.previewRoot$ = r.getChildDeep$(this.owner, "previewRoot"),
                this.cancleBtn$ = r.getChildDeep$(this.owner, "cancleBtn"), this.videoBtn$ = r.getChildDeep$(this.owner, "videoBtn"),
                this.videoImg$ = r.getChildDeep$(this.owner, "videoImg"), this.onOpened$(), this.monitorBtns$();
        }
        monitorBtns$() {
            this.videoBtn$.on(Laya.Event.CLICK, this, this.onVideoClick$), this.videoImg$.on(Laya.Event.CLICK, this, this.onVideoClick$),
                this.cancleBtn$.on(Laya.Event.CLICK, this, this.onCancleClick$);
        }
        onVideoClick$() {
            let e = function(e) {
                e ? (Be.setTryUseSkinId$(this._skinId$), this.onCloseClick$()) : (this.videoBtn$.visible = !1,
                    this.cancleBtn$.visible = !0, Ce.show("视频未看完,无法试用皮肤~"));
            }.bind(this);
            Dt.showVideoAd$(e);
        }
        onCancleClick$() {
            this.onCloseClick$();
        }
        onOpened$(e) {
            this.cancleBtn$.visible = !1, st.createMix$(Laya.Dialog.manager, _t, function() {
                et.spawnSkin$(this._skinId$, e => {
                    this._previewSkin$ = e, this._preview$ = e.owner, this._preview$.transform.localScale = new Laya.Vector3(.3, .3, .3),
                        st.add3DMixWith2DRefSprite$(Laya.Dialog.manager, this._preview$, this.previewRoot$),
                        pgdk$.shakePhone$(!0);
                });
            }.bind(this));
        }
        destroyPreview$() {
            this._preview$ && !this._preview$.destroyed && (this._preview$.destroy(!0), this._preview$ = null);
        }
        onDestroy(e) {
            this.destroyPreview$(), st.destroyMix$(Laya.Dialog.manager);
            let t = Laya.Handler.create(this, function() {
                this.closeH$ && this.closeH$.run();
            });
            this.isShowCheat$ ? l.getInstance$().openUI$(mt, null, {
                closeHandler: t
            }) : this.closeH$ && this.closeH$.run();
        }
        onCloseClick$() {
            this._preview$ && (this._preview$.destroy(!0), this._preview$ = null), this.doClose$();
        }
    }
    yt.url = "Prefab/Qq/Comp/SkinTryuseWindowQq.json", yt.className$ = "SkinTryUseUIQq$",
        yt.uiConfig$ = {
            layer: e.LAYER_NORMAL$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class St extends Laya.Script {
        constructor() {
            super(), this._initData$();
        }
        _initData$() {
            this.descStr$ = void 0, this.iconUrl$ = void 0;
        }
        onAwake() {
            this.setNodes$(), this.refreshUI$();
        }
        setNodes$() {
            this.descLabel$ = r.getChildDeep$(this.owner, "descLabel$"), this.iconImage$ = r.getChildDeep$(this.owner, "iconImage$");
        }
        setData$(e) {
            this.descStr$ = e.desc, this.iconUrl$ = e.icon, this.refreshUI$();
        }
        refreshUI$() {
            this.descStr$ && this.descLabel$ && (this.descLabel$.text = this.descStr$), this.iconUrl$ && this.iconImage$ && (this.iconImage$.skin = this.iconUrl$);
        }
    }
    var Lt = {
            coin: "common/image_jinbi.png",
            startSpeed: "turnTableUI/starSpeed.png",
            startBigger: "turnTableUI/starBig.png"
        },
        wt = [{
            type: "coin",
            award: 1e3,
            weight: 40
        }, {
            type: "startBigger",
            weight: 30
        }, {
            type: "coin",
            award: 3e3,
            weight: 10
        }, {
            type: "startSpeed",
            award: 50,
            weight: 20
        }, {
            type: "coin",
            award: 1e3,
            weight: 30
        }, {
            type: "startBigger",
            weight: 40
        }, {
            type: "coin",
            award: 3e3,
            weight: 10
        }, {
            type: "startSpeed",
            award: 50,
            weight: 20
        }];
    class Ct extends d {
        constructor() {
            super(), this._items$ = [], this._sumWeight$ = 0, this._isRunning$ = !1, this.loadItemCount$ = 8;
        }
        onUILoad$() {
            super.onUILoad$(), this.setUINode$(), this.calculateAwardsWeightValues$(), this.initSpin$(),
                this.refreshUI$();
        }
        setUINode$() {
            this.backButton$ = r.getChildDeep$(this.owner, "btn_exit$"), this.spinButton$ = r.getChildDeep$(this.owner, "btn_free$"),
                this.wheelImage$ = r.getChildDeep$(this.owner, "wheelBg$"), this.descLabel$ = r.getChildDeep$(this.owner, "descLabel$"),
                this.backButton$.on(Laya.Event.CLICK, this, this.doClose$), this.spinButton$.on(Laya.Event.CLICK, this, this.onSpinClick$);
        }
        static open$() {
            new Ct().open(!1);
        }
        static hasFreeSpinTimes$() {
            let e = te.getFreeSpinMaxTimes$();
            return Ct.getTodayFreeSpinTimes$() < e;
        }
        static getTodayFreeSpinTimes$() {
            return ve.load$("freeSpin", {
                times: 0
            }).times;
        }
        static incTodayFreeSpinTimes$() {
            let e = ve.load$("freeSpin", {
                times: 0
            });
            e.times++, ve.save$("freeSpin", e), b.dispatchEvent$(B.Event$.USE_FREE_SPIN_TIMES$);
        }
        refreshUI$() {
            let e = te.getFreeSpinMaxTimes$(),
                t = Ct.getTodayFreeSpinTimes$();
            this.descLabel$.text = "Free: " + (e - t) + "/" + e;
        }
        onSpinClick$() {
            if (this._isRunning$) return void Ce.show("In spins");
            let e = function(e) {
                    e ? (Be.incWatchVideoAdTimes$(), Ct.incTodayFreeSpinTimes$(), this.refreshUI$(),
                        this.startLottery$()) : null;
                }.bind(this),
                t = te.getFreeSpinMaxTimes$();
            Ct.getTodayFreeSpinTimes$() >= t ? Ce.show("No free spins now") : Dt.showVideoAd$(e);
        }
        initSpin$() {
            for (let e = 0; e < wt.length; e++) l.getInstance$().createPrefab$("Prefab/Web/Comp/itemBox.json", this.wheelImage$, this.loadPrefabBack$.bind(this));
        }
        loadPrefabBack$(e) {
            this.loadItemCount$--, this._items$.push(e), 0 == this.loadItemCount$ && this.setItemBox$();
        }
        setItemBox$() {
            let e, t = 0;
            for (let i = 0; i < wt.length; i++) {
                let s, a = wt[i];
                switch (a.type) {
                    case "coin":
                        s = "+" + a.award;
                        break;

                    case "startSpeed":
                        s = "Accelerated at the start";
                        break;

                    case "startBigger":
                        s = "Turn big at the start";
                }
                (e = this._items$[i]) && (e.getComponent(St).setData$({
                    icon: Lt[a.type],
                    desc: s
                }), e.rotation = t, e.pos(this.wheelImage$.width / 2, this.wheelImage$.height / 2)),
                t += 360 / wt.length;
            }
        }
        loadPrefab$(e) {
            return new Promise((t, i) => {
                Laya.loader.create(e, Laya.Handler.create(this, function() {
                    let i = Laya.loader.getRes(e);
                    t(i);
                }));
            });
        }
        calculateAwardsWeightValues$() {
            this._weightValues$ = [], this._sumWeight$ = 0;
            for (let e = 0; e < wt.length; e++) this._sumWeight$ += wt[e].weight;
            let e = 0;
            for (let t = 0; t < wt.length; t++) {
                let i = wt[t].weight + e;
                this._weightValues$.push({
                    from: e,
                    to: i
                }), e = i + 1;
            }
        }
        startLottery$() {
            if (this._isRunning$) return void Ce.show("In spins");
            this.backButton$.active = !1, this.backButton$.visible = !1, this._isRunning$ = !0;
            let e = this.wheelImage$.rotation + 360;
            Laya.Tween.to(this.wheelImage$, {
                rotation: e
            }, 500, Laya.Ease.cubicIn, Laya.Handler.create(this, this.tryKeepRun$)), this._startTime = new Date().getTime();
            let t = this.getAwardIndex$();
            this.stopToAwardIndex$(t);
        }
        tryKeepRun$() {
            if (this._isRunning$) {
                let e = this.wheelImage$.rotation + 360;
                Laya.Tween.to(this.wheelImage$, {
                    rotation: e
                }, 500, null, Laya.Handler.create(this, this.tryKeepRun$));
            }
        }
        getAwardIndex$() {
            let e = Math.floor(Math.random() * this._sumWeight$),
                t = 0;
            for (let i = 0; i < this._weightValues$.length; i++) {
                let s = this._weightValues$[i];
                if (e >= s.from && e < s.to) {
                    t = i;
                    break;
                }
            }
            return console.log("期望奖励结果", t), t;
        }
        stopToAwardIndex$(e) {
            let t = new Date().getTime(),
                i = Math.max(3 - (t - this._startTime) / 1e3, 0);
            Laya.timer.once(1e3 * i, this, function() {
                Laya.Tween.clearAll(this.wheelImage$);
                let t = 360 * (Math.ceil(this.wheelImage$.rotation / 360) + 1 + 1) + (360 - 360 / wt.length * e) - this.wheelImage$.rotation,
                    i = t / 360 * .5,
                    s = this.wheelImage$.rotation + t;
                Laya.Tween.to(this.wheelImage$, {
                    rotation: s
                }, 1e3 * i, Laya.Ease.cubicOut, Laya.Handler.create(this, this.showAward$, [e]));
            }.bind(this));
        }
        showAward$(e) {
            this._isRunning$ = !1, this.backButton$.active = !0, this.backButton$.visible = !0;
            let t = this._items$[e],
                i = wt[e];
            console.log("奖励结果", e, i);
            let {
                type: s,
                award: a
            } = i, n = r.getChildDeep$(t, "iconImage$");
            switch (s) {
                case "coin":
                    Be.addCoin$(a), Ce.show("Get " + a + " Coins"), Laya.SoundManager.playSound(B.Sound$.COIN_AWARD$, 1),
                        b.dispatchEvent$(B.Event$.COIN_FLY_EFFECT$, {
                            prototype: n,
                            startPos: n,
                            size: new Laya.Size(100, 100)
                        });
                    break;

                case "startSpeed":
                    Ce.show("Accelerated at the next round"), Laya.CyzClassMap$.MainUI.setSpeedStart();
                    break;

                case "startBigger":
                    Ce.show("Turn bigx3 at the next round"), Laya.CyzClassMap$.MainUI.setBiggerStart();
            }
        }
    }
    Ct.url = "Prefab/Web/Comp/SpinDialog.json", Ct.className$ = "SpinDialogUI", Ct.uiConfig$ = {
        layer: e.LAYER_NORMAL$,
        only: !1,
        needUISurrenal: !0,
        notClose: !0
    };
    class ft extends Ct {
        constructor() {
            super();
        }
        setUINode$() {
            super.setUINode$(), this.videoImg$ = r.getChildDeep$(this.owner, "videoImg");
        }
        onSpinClick$() {
            if (this._isRunning$) return void Ce.show("In spins");
            let e = function(e) {
                e ? (Be.incWatchVideoAdTimes$(), Ct.incTodayFreeSpinTimes$(), this.refreshUI$(),
                    this.startLottery$()) : null;
            }.bind(this);
            Ct.getTodayFreeSpinTimes$() < 1 ? e && e(!0) : (Ce.show("No free spins now"), Dt.showVideoAd$(e));
        }
        refreshUI$() {
            te.getFreeSpinMaxTimes$();
            let e = Ct.getTodayFreeSpinTimes$();
            this.videoImg$.visible = !(e < 1);
        }
    }
    ft.url = "Prefab/Qq/Comp/SpinDialogQq.json", ft.className$ = "SpinDialogUIQq$",
        ft.uiConfig$ = {
            layer: e.LAYER_NORMAL$,
            only: !1,
            needUISurrenal: !0,
            notClose: !0
        };
    class vt extends d {
        constructor() {
            super();
        }
        onUILoad$() {
            super.onUILoad$(), this.setNodes$(), this.initList$(), this.refreshList$();
        }
        setNodes$() {
            this.closeButton$ = r.getChildDeep$(this.owner, "btn_exit"), this.taskList$ = r.getChildDeep$(this.owner, "taskList"),
                this.closeButton$.on(Laya.Event.CLICK, this, this.doClose$);
        }
        static open$() {
            new vt().popup();
        }
        static hasWaitRecevieAwardItem$() {
            let e = this.buildListData$();
            for (let t = 0; t < e.length; t++) {
                let i = e[t];
                if (!i.done && i.currStep >= i.allStep) return !0;
            }
            return !1;
        }
        static buildListData$() {
            let e = [];
            for (let t = 0; t < B.Tasks$.length; t++) {
                let i = B.Tasks$[t],
                    s = i.getCurrStep$();
                s > i.allStep && (s = i.allStep), e.push({
                    index: t,
                    desc: i.desc,
                    rewardNum: i.rewardNum,
                    allStep: i.allStep,
                    currStep: s,
                    done: i.isDone$(),
                    onDone$: function() {
                        i.onDone$(), Be.addCoin$(i.rewardNum);
                    }.bind(this)
                });
            }
            return e;
        }
        onEnable() {
            b.registerEvent$(B.Event$.TASK_LIST_ITEM_COMPLETED$, this.refreshList$, this);
        }
        onDisable() {
            b.releaseAllEvents$(this);
        }
        initList$() {
            this.taskList$.renderHandler = new Laya.Handler(this, this.updateList$);
        }
        updateList$(e, t) {
            let i = this._listData$[t];
            e.getComponent(qe).setData$(i);
        }
        refreshList$() {
            this._listData$ = vt.buildListData$(), this.taskList$.array = this._listData$, this.taskList$.refresh();
        }
        sortListData$(e) {
            return e.sort((e, t) => {
                if (e.done && t.done) return e.index - t.index;
                if (e.done) return 1;
                if (t.done) return -1;
                let i = e.currStep >= e.allStep,
                    s = t.currStep >= t.allStep;
                return i && s ? e.index - t.index : i ? -1 : s ? 1 : e.index - t.index;
            });
        }
    }
    vt.url = "Prefab/Web/Comp/TaskListWindow.json", vt.className$ = "TaskListUI", vt.uiConfig$ = {
        layer: e.LAYER_NORMAL$,
        only: !0,
        needUISurrenal: !0,
        notClose: !1
    };
    class It extends vt {}
    It.url = "Prefab/Qq/Comp/TaskListWindowQq.json", It.className$ = "TaskDialogUIQq$",
        It.uiConfig$ = {
            layer: e.LAYER_NORMAL$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class Et extends d {
        constructor() {
            super(), this.winName = "宝箱界面";
        }
        initData$() {
            this.addNum$ = 100;
        }
        onUILoad$() {
            super.onUILoad$(), this.initUI$(), this.listenEvents$(), this.monitorBtns$(), this.monitorEvents$();
        }
        initUI$() {
            this.btnContinue$ = r.getChildDeep$(this.owner, "BtnContinue"), this.labelAwardNum$ = r.getChildDeep$(this.owner, "LabelAwardNum"),
                this.coinLabel$ = r.getChildDeep$(this.owner, "coinLabel"), this.coinLabel$.text = Be.getCoin$().toString(),
                this.labelAwardNum$.text = "+" + this.addNum$, this.initBoxClick$(), this.initBoxResult$();
        }
        monitorBtns$() {
            r.onButtonScaleEvent$(this.btnContinue$, this, "onClickContinue$");
        }
        onClickContinue$() {
            this.onInduceAdClose$();
        }
        initBoxClick$() {
            this.boxClick$.visible = !0;
        }
        initBoxResult$() {
            this.boxResult$.visible = !1;
        }
        listenEvents$() {
            this.owner.getComponent(pt).onTrigger$ = this.onInduceTrigger$.bind(this);
        }
        monitorEvents$() {
            b.registerEvent$(B.Event$.COIN_FLY_EFFECT$, this.showCoinFlyEffect$, this);
        }
        onInduceTrigger$() {
            this.boxClick$.visible = !1, this.boxResult$.visible = !0;
        }
        onInduceAdClose$() {
            this.getCoin$(), Laya.timer.once(1500, this, function() {
                this.doClose$();
            });
        }
        getCoin$() {
            Be.addCoin$(this.addNum$), Ce.show("Get " + this.addNum$ + " Coins");
            let e = r.getChildDeep$(this.owner, "iconImage");
            Laya.SoundManager.playSound(B.Sound$.COIN_AWARD$, 1), b.dispatchEvent$(B.Event$.COIN_FLY_EFFECT$, {
                prototype: e,
                startPos: e,
                size: new Laya.Size(100, 100)
            });
        }
        onDestroy() {
            b.releaseEvent$(B.Event$.COIN_FLY_EFFECT$, this.showCoinFlyEffect$, this);
        }
        showCoinFlyEffect$(e) {
            this.owner && !this.owner.destroyed && (Ye.showEffect$(e.prototype, e.startPos, this.coinLabel$, e.count, e.size),
                this.coinLabel$.text = Be.getCoin$().toString());
        }
    }
    Et.url = "Prefab/Qq/Comp/TreasureBox2Qq.json", Et.className$ = "TreasureBoxUI2Qq$",
        Et.uiConfig$ = {
            layer: e.LAYER_NORMAL$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class Dt extends Laya.Script {
        constructor() {
            super(), window.pgdk$ = this, this.app_version = 2, this.isShowExport$ = !0, this.isReport$ = !1;
        }
        onStart() {
            this._getParamData$();
        }
        unsortedAds$(e, t) {
            // let i = [];
            // if (pgdk$.isSdkReady$) {
            //     let s = [];
            //     t = t || 21;
            //     let a = pgdk$.getAds$(e);
            //     for (let e = 0; e < a.length; e++) s.push(a[e]);
            //     for (; s.length > 0 && --t > -1;) {
            //         let e = Math.floor(Math.random() * s.length);
            //         i.push(s.removeAt$(e));
            //     }
            //     for (let e = 0; e < t; e++) i.push(i[e]);
            // }
            // return i;
        }
        getAds$(e) {
            // return this.dataHandler$.getAds$(e);
        }
        getRandomAd$(e) {
            // if (this.isSdkReady$) return this._randomAdCache$ || (this._randomAdCache$ = [],
            //     this._randomAdCache$.pushAll$(this.getAds$(e))), this._randomAdCache$ && this._randomAdCache$.length > 0 && this._randomAdCache$.removeAt$(Math.floor(Math.random() * this._randomAdCache$.length));
        }
        recoverRandomAd$(e) {
            // e && this.isSdkReady$ && -1 === this._randomAdCache$.indexOf(e) && this._randomAdCache$.push(e);
        }
        isIOS$() {
            // if (this.platformHandler$ && this.platformHandler$.isIOS$) return this.platformHandler$.isIOS$();
        }
        shakePhone$(e, t) {
            // if (Laya.CyzClassMap$.AudioManager.getInstance$().getShakeSwitch$() && (t || !(Date.now() - 50 < this.lastShakeT))) if (this.lastShakeT = Date.now(),
            //     window.wx) e ? wx.vibrateLong() : wx.vibrateShort(); else if (window.qg) e ? qg.vibrateLong() : qg.vibrateShort(); else {
            //         if (!window.navigator.vibrate) return;
            //         window.navigator.vibrate(500);
            //     }
        }
        _getParamData$() {
            // if (!navigator.onLine) return void this.showToast$("断网状态下,会影响游戏体验哦~");
            // let e;
            // e = this.platformHandler$ ? this.platformHandler$.appId$ : "";
            // let t = new Laya.HttpRequest();
            // t.once(Laya.Event.COMPLETE, this, this._reciveParamData$), t.send("https://game.littleboy.net/api/gameparams.jsp?appid=" + e + "&version=" + this.app_version + "&t=" + Date.now(), null, "POST", "json", ["Content-Type", "application/x-www-form-urlencoded;charset=utf-8"]);
        }
        _reciveParamData$(e) {
            // e && e.data && (console.log("纯玩后台返回"), this.cfg$ = e.data, this.isParamGot$ = !0,
            //     this.replaceBannerWithGridAd$ = Math.random() < this.getPgCfg$("replaceBannerWithGridAdRate"),
            //     (Laya.Browser.onVVMiniGame || Laya.Browser.onQGMiniGame) && this.userReport$());
        }
        canTrick$() {
            // return !(this.dataHandler$ && !this.dataHandler$.canTrick$()) && (this.cfg$ && this.cfg$.cheat && (!Laya.Browser.onMiniGame || Laya.Browser.onIOS && this.cfg$.isCheatIOS || Laya.Browser.onAndroid && this.cfg$.isCheatAndroid));
        }
        getPgCfg$(e) {
            // try {
            //     return this.cfg$ && this.cfg$.cheat && this.cfg$[e];
            // } catch (e) {
            //     return;
            // }
        }
        isGameCenterViewDelay$() {
            // return this.canTrick$() && this.getPgCfg$("gameCenterViewDelayRate") > Math.random();
        }
        btnMoveSwitch$() {
            // if (this.dataHandler$ && this.dataHandler$.canTrick$()) return this.dataHandler$.btnMoveSwitch$();
        }
        starWatchVideoSwitch$() {
            // if (this.dataHandler$ && this.dataHandler$.canTrick$()) return this.dataHandler$.starWatchVideoSwitch$();
        }
        getClickAwardAdd$() {
            // if (this.dataHandler$ && this.dataHandler$.canTrick$()) return this.dataHandler$.getClickAwardAdd$();
        }
        getClickAwardBack$() {
            // return .005;
        }
        getClickAwardPercent$() {
            // if (this.dataHandler$ && this.dataHandler$.canTrick$()) return this.dataHandler$.getClickAwardPercent$();
        }
        isResultTrick$() {
            // return this.canTrick$() && this.getPgCfg$("isResultTrick") > Math.random();
        }
        isStartTrick$() {
            // return this.canTrick$() && this.getPgCfg$("isStartTrick") > Math.random();
        }
        isShowExit$() {
            // return this.canTrick$() && this.getPgCfg$("showExitRate") > Math.random();
        }
        isOpenSpinDialog$() {
            // return this.canTrick$() && this.getPgCfg$("openSpinDialogRate") > Math.random();
        }
        isBestExport$() {
            // return this.cfg$ && this.cfg$.isBestExport;
        }
        isShowFightBanner$() {
            // return this.canTrick$() && this.getPgCfg$("fightBannerShow");
        }
        isShowFightExport$() {
            // return this.cfg$ && this.cfg$.fightExportShow;
        }
        getConfig$(e) {
            // if (this.dataHandler$ && this.dataHandler$.getConfig$) return this.dataHandler$ && this.dataHandler$.getConfig$(e);
        }
        getPlatformUserId$() {
            // return this.platformHandler$ && this.platformHandler$.getUserId$();
        }
        shareGame$(e, t) {
            // this.platformHandler$ && this.platformHandler$.shareGame$ && this.platformHandler$.shareGame$(e, t);
        }
        showMoreGameBtn$() {
            // this.dataHandler$ && this.dataHandler$.createMoregameBtn$ && this.dataHandler$.createMoregameBtn$();
        }
        hideMoreGameBtn$() {
            // this.dataHandler$ && this.dataHandler$.hideMoregameBtn$ && this.dataHandler$.hideMoregameBtn$();
        }
        showBanner$(e, t) {
            // this.platformHandler$ && this.platformHandler$.showBanner$(e, t);
        }
        hideBanner$(e) {
            // if (e) {
            //     let e = this._getUis$()[this._getUis$().length - 1];
            //     e && e.markNoShowBanner$ && e.markNoShowBanner$();
            // }
            // this.platformHandler$ && this.platformHandler$.hideBanner$();
        }
        _getUis$() {
            // return this._uis$ || (this._uis$ = []), this._uis$;
        }
        onUIOpen$(e) {
            // if (-1 === this._getUis$().indexOf(e)) {
            //     this._getUis$().push(e);
            //     let t = this._getUis$()[this._getUis$().length - 2];
            //     t && t.hideBanner$ && t.hideBanner$(), t && t.hideGridAd$ && t.hideGridAd$();
            // }
        }
        onUIClose$(e) {
            // -1 !== this._getUis$().indexOf(e) && (this._getUis$().remove$(e), this.restoreBanner$(),
            //     this.restoreGridAd$());
        }
        restoreBanner$(e) {
            // let t = this._getUis$()[this._getUis$().length - 1];
            // t && t.restoreBanner$ && t.restoreBanner$(e);
        }
        preloadBanner$() {
            // this.platformHandler$.preLoadBanner$ && this.platformHandler$.preLoadBanner$();
        }
        showGridAd$(e, t) {
            // this.platformHandler$ && this.platformHandler$.showGridAd$(e, t);
        }
        hideGridAd$() {
            // this.platformHandler$ && this.platformHandler$.hideGridAd$();
        }
        restoreGridAd$() {
            // let e = this._getUis$()[this._getUis$().length - 1];
            // e && e.restoreGridAd$ && e.restoreGridAd$();
        }
        showInterstitialAd$() {
            // this.platformHandler$ && this.platformHandler$.showInterstitialAd$();
        }
        static showVideoAd$(e) {
            platform.getInstance().showReward(() => {
                e && e(!0);
            })
            // this.platformHandler$ ? this.platformHandler$ && this.platformHandler$.showVideoAd$(e) : e && e(!0);
        }
        showAppBox$(e) {
            // this.platformHandler$ && this.platformHandler$.showAppBox$ ? this.platformHandler$.showAppBox$(e) : e && e();
        }
        getNativeAdData$() {
            // return this.platformHandler$ && this.platformHandler$.getNativeAdData$();
        }
        nativeClick$(e, t) {
            // this.platformHandler$ && this.platformHandler$.nativeClick$ && this.platformHandler$ && this.platformHandler$.nativeClick$(e, t);
        }
        nativeShowClose$(e, t) {
            // this.platformHandler$ && this.platformHandler$.closeNativeAd$ && this.platformHandler$ && this.platformHandler$.closeNativeAd$(e, t);
        }
        reportMonitor$() {
            // this.platformHandler$ && this.platformHandler$.reportMonitor$();
        }
        getUserId$() {
            // this.platformHandler$ && this.platformHandler$.getUerId$();
        }
        showToast$(e) {
            // this.platformHandler$ && this.platformHandler$.showToast$ && this.platformHandler$ && this.platformHandler$.showToast$(e);
        }
        navigateToMiniProgram$(e, t, i, s) {
            // this.platformHandler$.navigate2Mini$(e, t, i, s);
        }
        startRecord$(e, t, i) {
            // this.platformHandler$ && this.platformHandler$.recorderStart$ && this.platformHandler$.recorderStart$(e, t, i);
        }
        stopRecord$(e) {
            // this.platformHandler$ && this.platformHandler$.recorderStop$ && this.platformHandler$.recorderStop$(e);
        }
        shareRecord$(e, t) {
            // this.platformHandler$ && this.platformHandler$.shareRecordVideo$ && this.platformHandler$.shareRecordVideo$(e, t);
        }
        reportLogin$() {
            // this.pgReporter$ && this.pgReporter$.login$();
        }
        reportShowAd$(e) {
            // this.pgReporter$ && this.pgReporter$.showAd$(e);
        }
        reportClickAd$(e) {
            // this.pgReporter$ && this.pgReporter$.clickAd$(e);
        }
        reportExport$(e, t) {
            // this.pgReporter$ && this.pgReporter$.export$(e, t);
        }
        reportLevelUp$(e) {
            // this.pgReporter$ && this.pgReporter$.levelUp$(e);
        }
        userReport$() {
            // if (!window.qg) return;
            // let e = this.cfg$.reportdata_rate;
            // e && Math.random() < e && (this.reportLogin$(), this.isReport$ = !0);
        }
    }
    class At extends Re {
        constructor() {
            super(), this.viewName$ = null, this.dialogBgSkin$ = "sdk/image_round_bg_blue.png;20,20,20,20",
                this.width$ = 500, this.height$ = 700, this.iconMask$ = "sdk/image_icon_bg.png",
                this.titleBg$ = null, this.titleColor$ = "#000000", this.hScrollBarSkin$ = "common/hscroll.png",
                this.showBanner$ = !1, this.listMargin$ = 2, this.canClose$ = !0;
        }
        onStart() {
            this.owner.visible = !Laya.Browser.onIOS || "tt" != conf.channel, this.owner.on(Laya.Event.CLICK, this, this.showUI$);
        }
        showUI$() {
            this.owner.visible && (this.ui$ ? (Laya.stage.addChild(this.ui$), this.initTrick$()) : this.initUI$());
        }
        initUI$() {
            this.titleBgList$ = this.titleBg$ && this.titleBg$.split(","), this.ui$ = new Laya.Box(),
                this.ui$.zOrder = 999999999, this.ui$.name = "PgViewIndex", this.setWidget$(this.ui$, 0, 0, 0, 0),
                Laya.stage.addChild(this.ui$), this.createBg$(), this.createDialogBg$(), this.createTitle$(),
                this.createCloseBtn$(), this.createGrid$(), this.initTrick$();
        }
        initTrick$() {
            if ("undefined" != typeof pgdk$) {
                if (this.canClose$ = !0, this.showBanner$) {
                    if (!this.boxBanner$) {
                        this.createBannerBox$(), this.dialogBg$.centerY = -100;
                        let e = this.ui$.addComponent(V);
                        e.boxBanner$ = this.boxBanner$, e.bottom$ = 0, e.autoShowBanner$ = !1, this.btnClose$.top = NaN,
                            this.btnClose$.right = NaN, this.btnClose$.centerX = 0;
                    }
                    this.btnClose$.centerY = this.height$ / 2 + 50, Laya.timer.callLater(this, function() {
                        this.ui$.getComponent(V).restoreBanner$(!0);
                    }.bind(this));
                }
            } else Laya.timer.once(100, this, this.initTrick$);
        }
        _showBanner$() {
            this.canClose$ = !0;
            let e = this.btnClose$.centerY;
            this.btnClose$.centerY = this.height$ / 2 + 50, Laya.Tween.from(this.btnClose$, {
                centerY: e
            }, 500, Laya.Ease.elasticInOut, null, 0), this.ui$.getComponent(V).restoreBanner$(!0);
        }
        createBannerBox$() {
            this.boxBanner$ = this.ui$.addChild(new Laya.Box()), this.boxBanner$.zOrder = 1,
                this.boxBanner$.left = this.boxBanner$.right = 0, this.boxBanner$.bottom = 10, this.boxBanner$.height = 220,
                this.boxBanner$.bgColor = "#FFFFFF";
        }
        getTitleBg$() {
            return this.titleBgList$ ? this.titleBgList$[Math.floor(Math.random() * this.titleBgList$.length)] : void 0;
        }
        createBg$() {
            let e = new Laya.Box();
            e.name = "ImageBg", e.bgColor = "#000000", this.setWidget$(e, 0, 0, 0, 0), e.alpha = .7,
                this.ui$.addChild(e);
        }
        createTitle$() {
            let e = new Laya.Image();
            e.skin = "sdk/index-hot.png", e.centerX = 0, e.top = 20, this.dialogBg$.addChild(e);
        }
        createCloseBtn$() {
            this.btnClose$ = new Laya.Image(), this.btnClose$.skin = "sdk/index-close.png",
                this.btnClose$.top = 5, this.btnClose$.right = 5, this.btnClose$.on(Laya.Event.CLICK, this, this.doClose$),
                this.dialogBg$.addChild(this.btnClose$);
        }
        doClose$() {
            this.canClose$ && (Laya.timer.clear(this, this._showBanner$), this.ui$.removeSelf());
        }
        createDialogBg$() {
            this.dialogBg$ = new Laya.Image(), this.dialogBg$.width = this.width$, this.dialogBg$.height = this.height$,
                this.dialogBg$.centerX = 0, this.dialogBg$.centerY = 0;
            let e = this.dialogBgSkin$.split(";");
            this.dialogBg$.skin = e[0], e[1] && (this.dialogBg$.sizeGrid = e[1]), this.ui$.addChild(this.dialogBg$);
        }
        createGrid$() {
            this.createGridBg$(), this.grid$ = new Laya.Box(), this.grid$.width = this.width$ - 2 * this.listMargin$,
                this.grid$.height = this.height$ - 80, this.grid$.centerX = 0, this.grid$.bottom = this.listMargin$,
                this.dialogBg$.addChild(this.grid$), this.comp = this.grid$.addComponent(Ge), this.comp.viewName$ = this.viewName$,
                this.comp.iconMask$ = this.iconMask$, this.comp.titleBg$ = this.titleBg$, this.comp.titleColor$ = this.titleColor$;
        }
        createGridBg$() {
            this.grid$ = new Laya.Image(), this.grid$.skin = "sdk/image_icon_bg.png", this.grid$.sizeGrid = "20,20,20,20",
                this.grid$.width = this.width$ - 2 * this.listMargin$, this.grid$.height = this.height$ - 80,
                this.grid$.centerX = 0, this.grid$.bottom = this.listMargin$, this.dialogBg$.addChild(this.grid$);
        }
    }
    class kt {
        static loadSoundManagerState$() {
            let e = fe.getItem("SoundManagerState", {
                soundMuted: !1,
                musicMuted: !1
            });
            this._soundMuted$ = e.soundMuted, this._musicMuted$ = e.musicMuted, Laya.SoundManager.soundMuted = this._soundMuted$,
                Laya.SoundManager.musicMuted = this._musicMuted$;
        }
        static setSoundMuted$(e) {
            this._soundMuted$ = e, Laya.SoundManager.soundMuted = this._soundMuted$, this.save$();
        }
        static setMusicMuted$(e) {
            this._musicMuted$ = e, Laya.SoundManager.musicMuted = this._musicMuted$, this.save$();
        }
        static setAllMuted$(e) {
            this._soundMuted$ = e, this._musicMuted$ = e, Laya.SoundManager.muted = e, this.save$();
        }
        static save$() {
            fe.setItem("SoundManagerState", {
                soundMuted: this._soundMuted$,
                musicMuted: this._musicMuted$
            });
        }
    }
    kt._soundMuted$ = !0, kt._musicMuted$ = !0;
    class Bt extends d {
        constructor() {
            super(), this._isOpen$ = !1;
        }
        onAwake() {
            let e = this.owner;
            this.vibrateButton$ = r.getChildDeep$(e, "vibrateBtn"), //this.soundButton$ = r.getChildDeep$(e, "soundBtn"),
                this.barBg$ = r.getChildDeep$(e, "barBg"), e.scale(0, 0), e.visible = !1, e.active = !1,
                r.onButtonScaleEvent$(this.barBg$, this, "onBarClick$"), // r.onButtonScaleEvent$(this.soundButton$, this, "onSoundClick$"),
                r.onButtonScaleEvent$(this.vibrateButton$, this, "onVibrateClick$"), this.refresh$();
        }
        onBarClick$() {}
        switchOpenAndClose$() {
            let e, t, i = this.owner;
            this._isOpen$ ? (e = 0, t = Laya.Ease.backIn) : (i.visible = !0, i.active = !0,
                i.scale(0, 0), e = 1, t = Laya.Ease.backOut), this._isOpen$ = !this._isOpen$, Laya.Tween.to(i, {
                scaleX: e,
                scaleY: e
            }, 200, t, Laya.Handler.create(this, function() {
                this._isOpen$ || (i.visible = !1, i.active = !1);
            }.bind(this)));
        }
        onSoundClick$() {
            kt.setAllMuted$(!Laya.SoundManager.muted), this.refresh$();
        }
        onVibrateClick$() {
            dataMgr.settingData$.changeShakeSwitch$(), dataMgr.settingData$.getShake$() && pgdk$.shakePhone$(!0),
                this.refresh$();
        }
        refresh$() {
            this.vibrateButton$.alpha = dataMgr.settingData$.getShake$() ? 1 : .7 //, this.soundButton$.alpha = Laya.SoundManager.muted ? .7 : 1;
        }
    }
    class bt extends Laya.Script {
        constructor() {
            super(), this._waitEffect$ = !1;
        }
        onAwake() {
            this.setNodes$();
        }
        setNodes$() {
            this.rankIcon = r.getChildDeep$(this.owner, "rankIcon"), this.rankLabel = r.getChildDeep$(this.owner, "rankLabel"),
                this.rankProBar = r.getChildDeep$(this.owner, "rankProBar"), this._animProgressBar$ = this.rankProBar.getComponent(ge),
                this.refreshRankBox();
        }
        refreshRankBox() {
            this._waitEffect$ = !0;
            let e = Be.getExp$(),
                t = ke.getRankInfoByExp$(e);
            this.rankIcon.skin = t.icon, this.rankLabel.text = t.shortName + "x" + t.subLevel,
                this._animProgressBar$.setProgress(t.progress), this.owner.callLater(function() {
                    this._animProgressBar$.setAnimationTo(t.progress), this.owner.timerOnce(1e3 * this._animProgressBar$.speed + 100, this, function() {
                        this._waitEffect$ = !1;
                    });
                }.bind(this));
        }
    }
    class xt extends Laya.Script {
        onAwake() {
            this._label$ = this.owner;
        }
        onEnable() {
            b.registerEvent$(B.GameEvent$.SET_NET_DATA$, this._refresh$, this), b.registerEvent$(B.Event$.COIN_CHANGE$, this._refresh$, this),
                b.registerEvent$(B.Event$.COIN_FLY_EFFECT$, this._showCoinFlyEffect$, this), this._refresh$();
        }
        onDisable() {
            b.releaseAllEvents$(this);
        }
        _refresh$() {
            this._label$.text = Be.getCoin$().toString();
        }
        _showCoinFlyEffect$(e) {
            Ye.showEffect$(e.prototype, e.startPos, this._label$, e.count, e.size);
        }
    }
    class Pt {
        constructor() {
            this.inited$ = !1, this.initedCB$ = void 0, this.soundDic$ = {}, this.soundIndex$ = 0,
                this.refreshMusicVolume$(), this.refreshSoundVolume$(), window.audioMgr = this;
        }
        static getInstance$() {
            return null == Pt.instance$ && (Pt.instance$ = new Pt()), Pt.instance$;
        }
        init$(e) {
            this.initedCB$ = e, this.inited$ ? this.initedCB$ && this.initedCB$() : (this.initComplete$(),
                Laya.timer.loop(1, this, this.refreshActList$));
        }
        get isInited$() {
            return this.inited$;
        }
        preloadWxSounds$() {
            if (!Laya.Browser.onMiniGame) return;
            let e = {
                    "sounds/CoinAward.mp3": 4,
                    "sounds/Destruction.mp3": 18,
                    "sounds/Eat.mp3": 16,
                    "sounds/Finish.mp3": 2,
                    "sounds/KeyCollect.mp3": 2,
                    "sounds/LevelUp.mp3": 4,
                    "sounds/bomb1.mp3": 4,
                    "sounds/click_ui.mp3": 6,
                    "sounds/kill_1.mp3": 2,
                    "sounds/kill_2.mp3": 2,
                    "sounds/kill_3.mp3": 2,
                    "sounds/kill_4.mp3": 2,
                    "sounds/kill_5.mp3": 2,
                    "sounds/kill_6.mp3": 2,
                    "sounds/kill_7.mp3": 2,
                    "sounds/kill_8.mp3": 2,
                    "sounds/kill_9.mp3": 2,
                    "sounds/kill_10.mp3": 2
                },
                t = [];
            for (let i in e) {
                let s = e[i];
                for (; --s > -1;) t.push(i);
            }
            Laya.MiniSound.preLoad(t, this.onPreloadedWxSounds$.bind(this));
        }
        onPreloadedWxSounds$() {
            Laya.WXSoundsLoaded$ = !0;
        }
        setSoundSwitch$(e) {
            Y.getInstance$().settingData$.setSoundSwitch$(e), Laya.SoundManager.soundMuted = !e;
        }
        getShakeSwitch$() {
            return Y.getInstance$().settingData$.getShake$();
        }
        setShakeSwitch$(e) {
            Y.getInstance$().settingData$.setShake$(e);
        }
        shakePhone$(e, t) {
            this.getShakeSwitch$() && window.pgdk$ && pgdk$.shakePhone$ && pgdk$.shakePhone$(e, t);
        }
        getSoundSwitch$() {
            return Y.getInstance$().settingData$.getSoundSwitch$();
        }
        setMusicSwitch$(e) {
            Y.getInstance$().settingData$.setMusicSwitch$(e), e ? (this._bgm$ && this._bgm$.play(),
                Laya.SoundManager.musicMuted = !1) : (this._bgm$ && this._bgm$.stop(), Laya.SoundManager.musicMuted = !0);
        }
        getMusicSwitch$() {
            return Y.getInstance$().settingData$.getMusicSwitch$();
        }
        initComplete$() {
            this.inited$ = !0, this.initedCB$ && this.initedCB$();
        }
        playMusic$(e) {
            Laya.stage.isVisibility ? this._playMusic$(e) : Laya.timer.once(1e3, this, this.playMusic$, [e]);
        }
        _playMusic$(e, t) {
            if (this.getMusicSwitch$()) {
                this.playMusicId$ = e;
                var i = D.musicBasic[e];
                if (i) {
                    var s = i.file;
                    (Laya.SoundManager._tMusic != s || t) && (Laya.Browser.onMiniGame ? (this._bgm$ || (this._bgm$ = wx.createInnerAudioContext()),
                            this._bgm$.src = s, this._bgm$.loop = !0, this._bgm$.play()) : this._bgm$ = Laya.SoundManager.playMusic(s, 0, void 0, this._bgm$ && this._bgm$.url === s ? this._bgm$.position : 0),
                        this.refreshMusicVolume$());
                }
            }
        }
        backPlayMusic() {
            this._playMusic$(this.playMusicId$, !0);
        }
        _getCurMusicConfig$() {
            return this._bgm$ ? D.musicBasic[this.playMusicId$] : null;
        }
        stopMusic() {
            Laya.Browser.onMiniGame ? this._bgm$ && this._bgm$.stop() : (Laya.SoundManager.stopMusic(),
                this._bgm$ = null);
        }
        resumeMusic() {
            this._bgm$ && this.playMusic$(this.playMusicId$);
        }
        refreshMusicVolume$() {
            this.setMusicVolume$(Number(H.getLocalData$(H.KEY$.MUSIC$, 1)));
        }
        refreshSoundVolume$() {
            this.soundVolume = Number(H.getLocalData$(H.KEY$.SOUND$, 1)), Laya.SoundManager.soundVolume = this.soundVolume;
        }
        refreshActList$() {
            this.refreshStopList$() || this.refreshPlayList$();
        }
        refreshStopList$() {
            if (!this.stopList$) return !1;
            if (this.lastStopT$ == Laya.timer.currTimer) return !1;
            if (0 == this.stopList$.length) return !1;
            let e = this.stopList$.shift();
            return this.stopSoundByIndex$(e), !0;
        }
        refreshPlayList$() {
            if (!this.playList$) return !1;
            if (this.lastPLaySoundT$ == Laya.timer.currTimer) return !1;
            if (0 == this.playList$.length) return !1;
            let e = this.playList$.shift();
            return this.playSound$(e.soundId, e.loop, e.isForce, e.index), !0;
        }
        playSound$(e, t, i, s) {
            if (!this.getSoundSwitch$() && !i) return;
            if (!Laya.stage.isVisibility) return;
            s = s || ++this.soundIndex$;
            let a = Laya.timer.currTimer;
            if (a == this.lastPLaySoundT$) return this.playList$ = this.playList$ || [], this.playList$.push({
                index: s,
                soundId: e,
                loop: t,
                isForce: i
            }), s;
            this.lastPLaySoundT$ = a;
            var n = D.musicBasic[e];
            let o, r, $;
            for (o in this.soundDic$)
                if (r = this.soundDic$[o]) {
                    if (r.url == n.file) return o;
                } else delete this.soundDic$[o];
            $ = Laya.SoundManager.playSound(n.file, t ? 0 : 1);
            var h = this.soundVolume;
            return Laya.SoundManager.setSoundVolume(n.musicPower * h, n.file), t && (this.soundDic$[s] = $),
                s;
        }
        stopSoundByIndex$(e) {
            let t = Laya.timer.currTimer;
            if (t == this.lastStopT$) return this.stopList$ = this.stopList$ || [], void this.stopList$.push(e);
            let i = this.soundDic$[e];
            if (i) this.lastStopT$ = t, i._audio && i._audio.destroy(), i.stop(), delete this.soundDic$[e];
            else {
                let t, i = this.playList$ ? this.playList$.length : 0;
                for (; --i > -1;)(t = this.playList$[i]).index == e && this.playList$.splice(i, 1);
            }
        }
        stopSound$(e) {
            if (Laya.stage.isVisibility) {
                var t = D.musicBasic[e];
                Laya.SoundManager.stopSound(t.file);
            }
        }
        setMusicVolume$(e) {
            this.musicVolume = e;
            var t = this._getCurMusicConfig$();
            t && this._musicVolume$(t.musicPower * this.musicVolume), Laya.SoundManager.musicVolume = (t ? t.musicPower : 1) * this.musicVolume;
        }
        _musicVolume$(e) {
            Laya.Browser.onMiniGame ? this._bgm$ && (this._bgm$.volume = e) : Laya.SoundManager._musicChannel && (Laya.SoundManager._musicChannel.volume = e);
        }
        musicCheck$() {
            Laya.SoundManager._musicChannel.isStopped && Laya.SoundManager._musicChannel.play();
        }
    }
    Pt.instance$ = void 0;
    const Tt = get3DResourcePath$("UIScene.ls");
    class Mt extends d {
        static setBiggerStart() {
            fe.setItem("LargerStart", !0);
        }
        static setSpeedStart() {
            fe.setItem("FasterStart", !0);
        }
        static setSkinTrial(e) {
            fe.setItem("SkinTrial", e);
        }
        constructor() {
            super(), this.winName$ = "主界面", this._settingsBarComponent$ = null, this.starEffectUI$ = void 0;
        }
        onUILoad$() {
            super.onUILoad$(), this.setNodes$(), this.initUI$(), this.monitorBtns$(), this.monitorEvents$();
        }
        playMusic$() {
            try {
                Pt.getInstance$().playMusic$(t.SOUND_ID$.MAIN_MUSIC$);
            } catch (e) {
                Laya.timer.once(100, this, this.playMusic$);
            }
        }
        setNodes$() {
            this.addCoinButton$ = r.getChildDeep$(this.owner, "addCoinButton$"), this.settingsButton$ = r.getChildDeep$(this.owner, "settingsButton"),
                this.playButton$ = r.getChildDeep$(this.owner, "playButton$"), this.largerToPlayButton$ = r.getChildDeep$(this.owner, "largerToPlayButton$"),
                this.tasksButton$ = r.getChildDeep$(this.owner, "tasksButton$"), this.spinButton$ = r.getChildDeep$(this.owner, "spinButton$"),
                this.shareButton$ = r.getChildDeep$(this.owner, "shareButton$"), this.achievementButton$ = r.getChildDeep$(this.owner, "achievementButton$"),
                this.signinButton$ = r.getChildDeep$(this.owner, "signinButton$"), this.damageLvButton$ = r.getChildDeep$(this.owner, "damageLvButton$"),
                this.speedLvButton$ = r.getChildDeep$(this.owner, "speedLvButton$"), this.growthLvButton$ = r.getChildDeep$(this.owner, "growthLvButton$"),
                this.skinsButton$ = r.getChildDeep$(this.owner, "skinsButton$"), this.moreGameButton$ = r.getChildDeep$(this.owner, "moreGameButton$"),
                this.moreGamePopupButton$ = r.getChildDeep$(this.owner, "moreGamePopupButton$"),
                this.achievementMedal$ = r.getChildDeep$(this.owner, "achievementMedal$"), this.taskMedal$ = r.getChildDeep$(this.owner, "taskMedal$"),
                this.signinMedal$ = r.getChildDeep$(this.owner, "signinMedal$"), this.spinMedal$ = r.getChildDeep$(this.owner, "spinMedal$"),
                this.damageLvLabel$ = r.getChildDeep$(this.owner, "damageLvLabel$"), this.damagePriceLabel$ = r.getChildDeep$(this.owner, "damagePriceLabel$"),
                this.speedLvLabel$ = r.getChildDeep$(this.owner, "speedLvLabel$"), this.speedPriceLabel$ = r.getChildDeep$(this.owner, "speedPriceLabel$"),
                this.growthLvLabel$ = r.getChildDeep$(this.owner, "growthLvLabel$"), this.growthPriceLabel$ = r.getChildDeep$(this.owner, "growthPriceLabel$"),
                this.settingsBar$ = r.getChildDeep$(this.owner, "settingsBar$"), this.haveCoin$ = r.getChildDeep$(this.owner, "haveCoin$"),
                this.previewRef$ = r.getChildDeep$(this.owner, "previewRef$");
        }
        initUI$() {
            this.achievementMedal$.visible = !1, this.taskMedal$.visible = !1, this.signinMedal$.visible = !1,
                this.spinMedal$.visible = !1, this._settingsBarComponent$ = this.settingsBar$.getComponent(Bt),
                this.refreshUI$(), Laya.gameOnshow$ || (Laya.gameOnshow$ = !0, Laya.timer.once(1500, this, this.gameOnshow$));
        }
        monitorBtns$() {
            r.onButtonScaleEvent$(this.addCoinButton$, this, "onAddCoinClick$"), r.onButtonScaleEvent$(this.settingsButton$, this, "onSettingsClick$"),
                r.onButtonScaleEvent$(this.playButton$, this, "onStartClick$"), r.onButtonScaleEvent$(this.largerToPlayButton$, this, "onBiggerToStartClick$"),
                r.onButtonScaleEvent$(this.tasksButton$, this, "onTasksClick$"), r.onButtonScaleEvent$(this.spinButton$, this, "onSpinClick$"),
                r.onButtonScaleEvent$(this.shareButton$, this, "onShareClick$"), r.onButtonScaleEvent$(this.achievementButton$, this, "onAchievementClick$"),
                r.onButtonScaleEvent$(this.signinButton$, this, "onSigninClick$"), r.onButtonScaleEvent$(this.damageLvButton$, this, "onDamageLvClick$"),
                r.onButtonScaleEvent$(this.speedLvButton$, this, "onSpeedLvClick$"), r.onButtonScaleEvent$(this.growthLvButton$, this, "onGrowthLvClick$"),
                r.onButtonScaleEvent$(this.skinsButton$, this, "onSkinClick$"), r.onButtonScaleEvent$(this.moreGameButton$, this, "onMoreGameClick$"),
                r.onButtonScaleEvent$(this.moreGamePopupButton$, this, "onMoreGameDialogClick$"),
                Mt._showTimes++, Laya.timer.once(500, this, function() {
                    this.init3DPreview$(function() {
                        this.destroyed || (this.makePreview$(Be.getUsingSkinId$()), this.refreshUI$());
                    }.bind(this));
                });
        }
        monitorEvents$() {
            b.registerEvent$(B.GameEvent$.GAME_IS_READY$, this.onGameReady$, this), b.registerEvent$(B.GameEvent$.GAME_ON_SHOW$, this.onGameShow$, this),
                b.registerEvent$(B.Event$.DAMAGE_LEVEL_CHANGE$, this.refreshUI$, this), b.registerEvent$(B.Event$.GROWTH_LEVEL_CHANGE$, this.refreshUI$, this),
                b.registerEvent$(B.Event$.MOVE_SPEED_LEVEL_CHANGE$, this.refreshUI$, this), b.registerEvent$(B.Event$.SIGNIN_SUCCEED$, this.refreshUI$, this),
                b.registerEvent$(B.Event$.SKIN_UNLOCKED$, this.refreshUI$, this), b.registerEvent$(B.Event$.TASK_LIST_ITEM_COMPLETED$, this.refreshUI$, this),
                b.registerEvent$(B.Event$.USE_FREE_SPIN_TIMES$, this.refreshUI$, this), b.registerEvent$(B.Event$.OPEN_SKIN_TRY_OUT_DIALOG$, this.destroyPreview$, this);
        }
        onDestroy() {
            this.destroyPreview$(), this.removeStarEffectUI$(), st.destroyMix$(this.previewRef$),
                b.releaseAllEvents$(this), Laya.timer.clearAll();
        }
        onGameShow$() {}
        onSkinClick$() {
            this.destroyPreview$(), st.destroyMix$(this.previewRef$);
            let e = Laya.Handler.create(this, function() {
                this.init3DPreview$(function() {
                    this.makePreview$(Be.getUsingSkinId$()), this.refreshUI$();
                }.bind(this));
            });
            l.getInstance$().openUI$(Laya.classWithChannel$("skinStore"), null, {
                closeHandler: e
            });
        }
        refreshUI$() {
            this.damageLvLabel$.text = "Lv." + Be.getDamageLevel$(), this.speedLvLabel$.text = "Lv." + Be.getMoveSpeedLevel$(),
                this.growthLvLabel$.text = "Lv." + Be.getGrowthLevel$(), this.damagePriceLabel$.text = this.getDamageUpgradePrice$().toString(),
                this.speedPriceLabel$.text = this.getSpeedUpgradePrice$().toString(), this.growthPriceLabel$.text = this.getGrowthUpgradePrice$().toString(),
                this.achievementMedal$.visible = Xe.hasWaitRecevieAwardItem$(), this.taskMedal$.visible = vt.hasWaitRecevieAwardItem$(),
                this.signinMedal$.visible = !gt.todaySigned$(), this.spinMedal$.visible = Ct.hasFreeSpinTimes$();
        }
        gameOnshow$() {
            let e = Be.getExitTime$(),
                t = new Date().getTime();
            e || (e = t);
            let i = clamp((t - e) / 1e3, 0, 7200),
                s = Math.round(.5 * i);
            s = Math.min(2e3, s), i < 120 ? (console.log("离线时间较短, 直接保存离线收益到GamePlayerData", i, s.toString()),
                Be.addCoin$(s)) : l.getInstance$().openUI$(Laya.classWithChannel$("offlineAward"), null, s);
        }
        init3DPreview$(e) {
            st.createMix$(this.previewRef$, Tt, e);
        }
        makePreview$(e) {
            this.destroyPreview$(), et.spawnSkin$(e, e => {
                this._previewSkin$ = e, this._preview3D$ = e.owner, this._preview3D$.transform.localScale = new Laya.Vector3(.4, .4, .4),
                    st.add3DMixWith2DRefSprite$(this.previewRef$, this._preview3D$, this.previewRef$);
            });
        }
        destroyPreview$() {
            this._preview3D$ && !this._preview3D$.destroyed && (this._preview3D$.destroy(!0),
                this._preview3D$ = null);
        }
        onStartClick$() {
            platform.getInstance().showInterstitial()
            this.openPlayingScene$();
        }
        onBiggerToStartClick$() {
            let e = function(e) {
                e ? (Be.incWatchVideoAdTimes$(), Mt.setBiggerStart(), this.openPlayingScene$()) : null;
            }.bind(this);
            Dt.showVideoAd$(e);
        }
        openPlayingScene$() {
            this.doClose$(), h.getInstance$().dispatchEvent$(c.ON_START_GAME$);
        }
        onGameReady$() {}
        onMoreGameClick$() {}
        onMoreGameDialogClick$() {}
        onTasksClick$() {
            l.getInstance$().openUI$(Laya.classWithChannel$("taskDialogUI"));
        }
        onSpinClick$() {
            l.getInstance$().openUI$(Laya.classWithChannel$("SpinDialogUI"));
        }
        onShareClick$() {
            pgdk$ && pgdk$.shareGame$();
        }
        onAchievementClick$() {
            l.getInstance$().openUI$(Laya.classWithChannel$("achieveDialogUI"));
        }
        onSigninClick$() {
            l.getInstance$().openUI$(Laya.classWithChannel$("sign7Day"));
        }
        onDamageLvClick$() {
            let e = this.getDamageUpgradePrice$();
            Be.getCoin$() >= e ? (Be.incDamageLevel$(), Be.addCoin$(-e), Be.addUseCoin$(e),
                this._showLevelUpEffect$(this.damageLvButton$)) : this.onAddCoinClick$();
        }
        onSpeedLvClick$() {
            let e = this.getSpeedUpgradePrice$();
            Be.getCoin$() >= e ? (Be.incMoveSpeedLevel$(), Be.addCoin$(-e), Be.addUseCoin$(e),
                this._showLevelUpEffect$(this.speedLvButton$)) : this.onAddCoinClick$();
        }
        onGrowthLvClick$() {
            let e = this.getGrowthUpgradePrice$();
            Be.getCoin$() >= e ? (Be.incGrowthLevel$(), Be.addCoin$(-e), Be.addUseCoin$(e),
                this._showLevelUpEffect$(this.growthLvButton$)) : this.onAddCoinClick$();
        }
        _showLevelUpEffect$(e) {
            if (this.effectStar$ = e, this.starEffectUI$) this.starEffectUI$.removeSelf(), e.addChild(this.starEffectUI$),
                this.starEffectUI$.starShow.play(0, !1);
            else {
                let t = "Prefab/Effect/ShowStar.json";
                l.getInstance$().createPrefab$(t, this.effectStar$, this.preCompelet$.bind(this, e));
            }
        }
        preCompelet$(e, t) {
            this.starEffectUI$ = t, t.starShow.play(0, !1);
        }
        removeStarEffectUI$() {
            this.starEffectUI$ && (this.starEffectUI$.destroy(), this.starEffectUI$ = void 0);
        }
        playParticleEffect$(e, t) {}
        getDamageUpgradePrice$() {
            return Be.getDamageLevel$() * te.getUpgradePricePerLv$().damage;
        }
        getSpeedUpgradePrice$() {
            return Be.getMoveSpeedLevel$() * te.getUpgradePricePerLv$().speed;
        }
        getGrowthUpgradePrice$() {
            return Be.getGrowthLevel$() * te.getUpgradePricePerLv$().growth;
        }
        onSettingsClick$() {
            this._settingsBarComponent$ && this._settingsBarComponent$.switchOpenAndClose$();
        }
        onAddCoinClick$() {
            l.getInstance$().openUI$(Laya.classWithChannel$("NotEnoughCoin"));
        }
    }
    Mt._isGameDateLoaded = !1, Mt._isGameReady = !1, Mt._showTimes = 0, Mt.url = "Prefab/Web/Main/MainWindow.json",
        Mt.className$ = "MainUI", Mt.uiConfig$ = {
            layer: e.LAYER_NORMAL$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class Ot extends Mt {
        constructor() {
            super();
        }
        initUI$() {
            super.initUI$(), Be.getBattleTimes$() > 1 && Laya.showSignUI$ && l.getInstance$().openUI$(Laya.classWithChannel$("sign7Day")),
                pgdk$ && pgdk$.isOpenSpinDialog$() && Laya.firstOpen$ && l.getInstance$().openUI$(Laya.classWithChannel$("SpinDialogUI")),
                Laya.firstOpen$ = !0;
        }
        openPlayingScene$() {
            this.destroyPreview$(), st.destroyMix$(this.previewRef$);
            let e = Laya.Handler.create(this, function() {
                    this.doClose$(), h.getInstance$().dispatchEvent$(c.ON_START_GAME$);
                }),
                t = this.getSkinTryUseId$();
            t ? l.getInstance$().openUI$(Laya.classWithChannel$("SkinTryUseUI"), null, {
                skinId: t,
                closeH: e
            }) : e && e.run();
        }
        getSkinTryUseId$() {
            let e = B.BaseSkins$.concat(B.AdvancedSkins$).concat(B.InfrequentSkins$),
                t = Be.getUsingSkinId$(),
                i = [];
            for (let s = 0; s < e.length; s++) {
                let a = e[s];
                Be.isSkinUnlocked$(a) || t !== a && i.push(a);
            }
            return r.arrayRandom$(i);
        }
        onMoreGameClick$() {
            pgdk$ && pgdk$.showAppBox$();
        }
    }
    Ot.url = "Prefab/Qq/Main/MainWindowQq.json", Ot.className$ = "MainUIQq$", Ot.uiConfig$ = {
        layer: e.LAYER_NORMAL$,
        only: !0,
        needUISurrenal: !0,
        notClose: !1
    };
    let Nt = "shopUI/imageTab1.png",
        Ut = "shopUI/imageTab2.png",
        Rt = ["shopUI/imageTitle1.png", "shopUI/imageTitle3.png", "shopUI/imageTitle5.png"],
        Vt = ["shopUI/imageTitle2.png", "shopUI/imageTitle4.png", "shopUI/imageTitle6.png"];
    class Ht extends Laya.Script {
        constructor() {
            super();
        }
        onAwake() {
            this.setNodes$();
        }
        setNodes$() {
            this.tabBar$ = r.getChildDeep$(this.owner, "tabBar$"), this.textImage$ = r.getChildDeep$(this.owner, "textImage$"),
                this.tabBar$.on(Laya.Event.CLICK, this, this.onClick$);
        }
        setData$(e, t) {
            this._index = e, this.tabBar$.skin = t ? Ut : Nt, this.textImage$.skin = t ? Rt[e] : Vt[e];
        }
        onClick$() {
            b.dispatchEvent$(B.Event$.SKIN_STORE_TAB_CLICK_EVENT$, this._index);
        }
    }
    var Gt, Wt, zt = get3DResourcePath$("UIScene.ls");
    class Ft extends Laya.Script {
        constructor() {
            super(), this._data$ = null, this._preview$ = null, this._mix3dParent$ = null;
        }
        onAwake() {
            this.progress$ = r.getChildDeep$(this.owner, "unlockPro$"), this.iconImage$ = r.getChildDeep$(this.owner, "iconImage$"),
                this.img_needKey = r.getChildDeep$(this.owner, "img_needKey"),
                this.progressLabel$ = r.getChildDeep$(this.owner, "progressLabel$"), this.backgroundImage$ = r.getChildDeep$(this.owner, "backgroundImage$"),
                this.previewBox$ = r.getChildDeep$(this.owner, "previewBox$"), this.owner.on(Laya.Event.CLICK, this, this.onClick$);
        }
        onEnable() {
            b.registerEvent$(B.Event$.SKIN_UNLOCK_DIALOG_OPEN$, this.onSkinUnlockDialogOpen$, this),
                b.registerEvent$(B.Event$.SKIN_UNLOCK_DIALOG_CLOSE$, this.onSkinUnlockDialogClose$, this),
                Laya.timer.loop(1e3 / 60, this, this.onUpdate);
        }
        onDisable() {
            b.releaseAllEvents$(this), Laya.timer.clearAll(this), this._preview$ && !this._preview$.destroyed && (this._preview$.destroy(!0),
                this._preview$ = null);
        }
        setGridItemData$(e, t) {
            this._data$ = e, this._mix3dParent$ = t, this.backgroundImage$.skin = e.isSelected ? "shopUI/back_frame2.png" : "shopUI/back_frame3.png",
                this.progress$.visible = !1, this.img_needKey.visible = false;
            if (e.isUnlock) {
                this.iconImage$.visible = !1, this.showSkinPreview$(e.skinId, t);
            } else {
                this.iconImage$.visible = !0, this.iconImage$.skin = e.isHighLight ? "shopUI/icon_shop_light.png" : "shopUI/icon_shop_dark.png";
                if (e.showProgress) {
                    this.progress$.visible = true;
                    let t = e.progressCurrent / e.progressTotal;
                    this.progress$.value !== t ? this.progress$.getComponent(ge).setAnimationTo(t) : this.progress$.value = e.progressCurrent / e.progressTotal,
                        this.progressLabel$.text = e.progressCurrent + "/" + e.progressTotal;
                }
                if (B.AdvancedSkins$.indexOf(e.skinId) > -1) {
                    this.img_needKey.visible = this.progress$.visible = true;
                    let t = Be.getKey$() / (B.AdvancedSkins$.indexOf(e.skinId) == 0 ? 5 :
                        B.AdvancedSkins$.indexOf(e.skinId) == 1 ? 15 :
                        B.AdvancedSkins$.indexOf(e.skinId) == 2 ? 30 : 50);
                    this.progress$.value !== t ? this.progress$.getComponent(ge).setAnimationTo(t) : this.progress$.value = e.progressCurrent / e.progressTotal,
                        this.progressLabel$.text = Be.getKey$() + "/" + (B.AdvancedSkins$.indexOf(e.skinId) == 0 ? 5 :
                            B.AdvancedSkins$.indexOf(e.skinId) == 1 ? 15 :
                            B.AdvancedSkins$.indexOf(e.skinId) == 2 ? 30 : 50);
                }
            }
        }
        showSkinPreview$(e, t) {
            this._preview$ ? this._preview$.active = !0 : st.createMix$(t, zt, function() {
                et.spawnSkin$(e, e => {
                    this._preview$ = e.owner, this._preview$.transform.localScale = new Laya.Vector3(.2, .2, .2),
                        st.add3DMixWith2DRefSprite$(t, this._preview$, this.previewBox$);
                });
            }.bind(this));
        }
        onClick$() {
            console.log("onClick", this._data$), this._data$ && this._data$.isUnlock && Be.setUsingSkinId$(this._data$.skinId);
        }
        onUpdate() {
            this._preview$ && st.syncPos$(this._mix3dParent$, this._preview$, this.previewBox$);
        }
        onSkinUnlockDialogOpen$() {
            this._preview$ && (this._preview$.active = !1);
        }
        onSkinUnlockDialogClose$() {
            this._preview$ && (this._preview$.active = !0);
        }
    }
    class Yt extends Laya.Script {
            constructor() {
                super(), this._data$ = null;
            }
            onAwake() {
                this.setNodes$(), this.initGrid$();
            }
            setNodes$() {
                this.grid$ = this.owner;
            }
            setPageData$(e) {
                this._data$ = e, this.grid$.array = this._data$.itemsData, this.grid$.refresh();
            }
            initGrid$() {
                this.grid$.renderHandler = new Laya.Handler(this, this.updateItem$);
            }
            updateItem$(e, t) {
                let i = this._data$.itemsData[t];
                e.getComponent(Ft).setGridItemData$(i, this._data$.mix3dParent);
            }
        }
        (Wt = Gt || (Gt = {}))[Wt.COIN = 0] = "COIN", Wt[Wt.KEY = 1] = "KEY", Wt[Wt.AD = 2] = "AD";
    var Kt = get3DResourcePath$("UIScene.ls");
    class jt extends d {
        constructor() {
            super(), this._saveMouseDownX$ = 0, this._savePage$ = 0, this._tabState$ = [!0, !1, !1],
                this._rolling$ = !1, this._currentRollStep$ = 0;
        }
        static canBuySkin$() {
            let e = Be.getCoin$();
            return e > jt.getCoinBuyPrice$() && et.getBaseSkinUnlockedCount$() > 0 || e > jt.getAdBuyPrice$() && et.getInfrequentSkinLockedCount() > 0;
        }
        static getSelectedPageIndex$() {
            return fe.getItem("SkinShopLastPageSelected", 0);
        }
        static getCoinBuyPrice$() {
            return this.getBuyPrice$(et.getBaseSkinUnlockedCount$(), te.getCoinBuyPagePrice$());
        }
        static getAdBuyPrice$() {
            let e = 0;
            for (let t = 0; t < B.InfrequentSkins$.length; t++) {
                let i = B.InfrequentSkins$[t];
                e += Be.getSkinUnlockStep$(i);
            }
            return this.getBuyPrice$(e, te.getAdBuyPagePrice$());
        }
        static getBuyPrice$(e, t) {
            return e < t.length ? t[e] : t[t.length - 1];
        }
        onAwake() {
            this.setNodes$(), this.initEvents$(), this.initTabList$(), this.initPageList$();
        }
        setNodes$() {
            this.damageProgressBar$ = r.getChildDeep$(this.owner, "damageProgressBar$"), this.speedProgressBar$ = r.getChildDeep$(this.owner, "speedProgressBar$"),
                this.backButton$ = r.getChildDeep$(this.owner, "btn_exit$"), this.randomBuyButton$ = r.getChildDeep$(this.owner, "randomBuyButton$"),
                this.watchAdButton$ = r.getChildDeep$(this.owner, "watchAdButton$"), this.adBuyButton$ = r.getChildDeep$(this.owner, "adBuyButton$"),
                this.watchAdCDLabel$ = r.getChildDeep$(this.owner, "watchAdCDLabel$"), this.coinBuyPriceLabel$ = r.getChildDeep$(this.owner, "coinBuyPriceLabel$"),
                this.adBuyPriceLabel$ = r.getChildDeep$(this.owner, "adBuyPriceLabel$"), this.watchAdTextImage$ = r.getChildDeep$(this.owner, "watchAdTextImage$"),
                this.watchAdIconImage$ = r.getChildDeep$(this.owner, "watchAdIconImage$"), this.keyTipsImage$ = r.getChildDeep$(this.owner, "keyTipsImage$"),
                this.lab_keyNum = r.getChildDeep$(this.owner, "lab_keyNum"),
                this.pageList$ = r.getChildDeep$(this.owner, "pageList$"), this.tabList$ = r.getChildDeep$(this.owner, "tabList$"),
                this.awardPreview$ = r.getChildDeep$(this.owner, "awardPreview$"), this._damageAnimProgressBar$ = this.damageProgressBar$.getComponent(ge),
                this._speedAnimProgressBar$ = this.speedProgressBar$.getComponent(ge);
        }
        onEnable() {
            b.registerEvent$(B.Event$.SKIN_ID_CHANGED$, this.refreshUI$, this), b.registerEvent$(B.Event$.SKIN_UNLOCKED$, this.refreshUI$, this),
                b.registerEvent$(B.Event$.SKIN_STORE_TAB_CLICK_EVENT$, this.tabItemClick$, this),
                Laya.timer.once(100, this, function() {
                    this.init3DPreview$(function() {
                        this.refreshUI$(), this.changeToPageIndex$(jt.getSelectedPageIndex$(), !1), this.loadNextWatchAdTime$();
                    }.bind(this));
                });
        }
        onDestroy() {
            this.destroyPreview$(), b.releaseAllEvents$(this), st.destroyMix$(this.owner);
        }
        onUpdate() {
            this.updateWatchAdCD$();
        }
        init3DPreview$(e) {
            st.createMix$(this.owner, Kt, e);
        }
        makePreview$(e) {
            this.destroyPreview$(), et.spawnSkin$(e, e => {
                this._preview$ = e.owner, this._preview$.transform.localScale = new Laya.Vector3(.3, .3, .3),
                    st.add3DMixWith2DRefSprite$(this.owner, this._preview$, this.awardPreview$);
            });
        }
        destroyPreview$() {
            this._preview$ && !this._preview$.destroyed && (this._preview$.destroy(!0), this._preview$ = null);
        }
        initEvents$() {
            this.backButton$.on(Laya.Event.CLICK, this, this.onBackButtonClick$), this.randomBuyButton$.on(Laya.Event.CLICK, this, this.onRandomBuyButtonClick$),
                this.watchAdButton$.on(Laya.Event.CLICK, this, this.onWatchAdButtonClick$), this.adBuyButton$.on(Laya.Event.CLICK, this, this.onAdBuyButtonClick$);
        }
        initPageList$() {
            this.pageList$.renderHandler = new Laya.Handler(this, this.updatePage$), this.pageList$.hScrollBarSkin = "",
                this.pageList$.on(Laya.Event.MOUSE_DOWN, this, this.onPageMouseDown$),
                this.pageList$.on(Laya.Event.MOUSE_UP, this, this.onPageMouseUp$)
            //, this.pageList$.on(Laya.Event.MOUSE_OUT, this, this.onPageMouseUp$);
        }
        initTabList$() {
            this.tabList$.renderHandler = new Laya.Handler(this, this.updateTabList$);
        }
        buildPageData$() {
            this._pageData$ = [this.getGridPageData$(B.BaseSkins$, !1), this.getGridPageData$(B.AdvancedSkins$, !1), this.getGridPageData$(B.InfrequentSkins$, !0)],
                this.pageList$.array = this._pageData$, this.pageList$.refresh();
        }
        getGridPageData$(e, t) {
            let i = {
                    mix3dParent: this.owner,
                    itemsData: []
                },
                s = Be.getUsingSkinId$();
            for (let a = 0; a < e.length; a++) {
                let n = e[a],
                    o = {
                        isUnlock: Be.isSkinUnlocked$(n),
                        skinId: n,
                        isSelected: s === n,
                        isHighLight: !1,
                        showProgress: t
                    };
                t && (o.progressTotal = B.qt[n], o.progressCurrent = Be.getSkinUnlockStep$(n)),
                    i.itemsData.push(o);
            }
            return i;
        }
        onBackButtonClick$() {
            this._rolling$ ? Ce.show("In spins") : this.doClose$();
        }
        refreshUI$() {
            this.buildPageData$(), this.refreshButtons$(), this.refreshTabList$();
            let e = Be.getUsingSkinId$();
            this.makePreview$(e), this.updateProperties$(e);
        }
        refreshTabList$() {
            this.tabList$.array = this._tabState$, this.tabList$.refresh();
        }
        refreshButtons$() {
            this._tabState$[0] ? (this.randomBuyButton$.visible = this.getLockedGridCount$(Gt.COIN) > 0,
                this.watchAdButton$.visible = !1, this.adBuyButton$.visible = !1, this.keyTipsImage$.visible = !1,
                this.coinBuyPriceLabel$.text = jt.getCoinBuyPrice$().toString()) : this._tabState$[1] ? (this.randomBuyButton$.visible = !1,
                this.watchAdButton$.visible = !1, this.adBuyButton$.visible = !1, this.keyTipsImage$.visible = !0, this.lab_keyNum.text = "" + Be.getKey$()
            ) : (this.randomBuyButton$.visible = !1,
                this.watchAdButton$.visible = this.getLockedGridCount$(Gt.AD) > 0, this.adBuyButton$.visible = this.getLockedGridCount$(Gt.AD) > 0,
                this.keyTipsImage$.visible = !1, this.adBuyPriceLabel$.text = jt.getAdBuyPrice$().toString());
        }
        getLockedGridCount$(e) {
            let t = this._pageData$[e].itemsData,
                i = [];
            for (let e = 0; e < t.length; e++) t[e].isUnlock || i.push(e);
            return i.length;
        }
        updateTabList$(e, t) {
            let i = this._tabState$[t];
            e.getComponent(Ht).setData$(t, i);
        }
        updatePage$(e, t) {
            if (this.isOpenUnlock$) return;
            let i = this._pageData$[t];
            e.getComponent(Yt).setPageData$(i);
        }
        onPageMouseDown$() {
            this._rolling$ || (this._saveMouseDownX$ = Laya.stage.mouseX, this._savePage$ = Math.round(this.pageList$.scrollBar.value / this.pageList$.width));
        }
        onPageMouseUp$() {
            if (this._rolling$) return;
            let e = Laya.stage.mouseX - this._saveMouseDownX$;
            if (Math.abs(e) > .1 * this.pageList$.width) {
                let t = e > 0 ? this._savePage$ - 1 : this._savePage$ + 1;
                t = clamp(t, 0, 2), this.changeToPageIndex$(t, !0);
            } else {
                let e = Math.round(this.pageList$.scrollBar.value / this.pageList$.width);
                this.changeToPageIndex$(e, !0);
            }
        }
        changeToPageIndex$(e, t) {
            for (let e = 0; e < 3; e++) this._tabState$[e] = !1;
            this._tabState$[e] = !0, t ? this.pageList$.tweenTo(e, 200, Laya.Handler.create(this, function() {
                this.refreshTabList$(), this.refreshButtons$(), fe.setItem("SkinShopLastPageSelected", e);
            }.bind(this))) : (this.pageList$.scrollTo(jt.getSelectedPageIndex$()), this.refreshTabList$(),
                this.refreshButtons$(), fe.setItem("SkinShopLastPageSelected", e));
        }
        onRandomBuyButtonClick$() {
            if (this._rolling$) return void Ce.show("In spins");
            let e = jt.getCoinBuyPrice$();
            Be.getCoin$() > e ? (Be.addCoin$(-e), this.startRoll$(Gt.COIN)) : this.openNoEnoughCoin$();
        }
        openNoEnoughCoin$() {
            b.dispatchEvent$(B.Event$.SKIN_UNLOCK_DIALOG_OPEN$);
            let e = Laya.Handler.create(this, function() {
                b.dispatchEvent$(B.Event$.SKIN_UNLOCK_DIALOG_CLOSE$);
            });
            l.getInstance$().openUI$(Laya.classWithChannel$("NotEnoughCoin"), null, {
                closeHandler: e
            });
        }
        onWatchAdButtonClick$() {
            if (this._rolling$) return void Ce.show("In spins");
            let e = new Date().getTime(),
                t = function(e) {
                    e ? (Be.incWatchVideoAdTimes$(), this.resetNextWatchAdTime$(), this.startRoll$(Gt.AD)) : null;
                }.bind(this);
            (-1 === this._nextWatchAdTime$ || -1 !== this._nextWatchAdTime$ && e > this._nextWatchAdTime$) && Dt.showVideoAd$(t);
        }
        onAdBuyButtonClick$() {
            if (this._rolling$) return void Ce.show("In spins");
            let e = jt.getAdBuyPrice$();
            Be.getCoin$() > e ? (Be.addCoin$(-e), this.startRoll$(Gt.AD)) : this.openNoEnoughCoin$();
        }
        startRoll$(e) {
            if (this._rolling$) return;
            this._rolling$ = !0, this._rollPageType$ = e;
            let t = this._pageData$[this._rollPageType$].itemsData;
            this._lockGrids$ = [];
            for (let e = 0; e < t.length; e++) t[e].isUnlock || this._lockGrids$.push(e);
            this._currentRollStep$ = 0, this._rollResultIndex$ = ee.randomElementFromArray$(this._lockGrids$),
                this._lastHighLightIndex$ = null, this.owner.timerLoop(200, this, this.rollStep$);
        }
        rollStep$() {
            let e = this._pageData$[this._rollPageType$].itemsData;
            if (this._currentRollStep$ < 6) {
                let t = ee.randomElementFromArray$(this._lockGrids$);
                t === this._lastHighLightIndex$ ? e[t].isHighLight = !e[t].isHighLight : (null !== this._lastHighLightIndex$ && (e[this._lastHighLightIndex$].isHighLight = !1),
                        e[t].isHighLight = !0), this._lastHighLightIndex$ = t, this.pageList$.array = this._pageData$,
                    this.pageList$.refresh(), this._currentRollStep$++, pgdk$.shakePhone$(!1), Laya.SoundManager.playSound(B.Sound$.POPUP$, 1);
            } else if (this._currentRollStep$ >= 6 && this._currentRollStep$ < 9) null !== this._lastHighLightIndex$ && (e[this._lastHighLightIndex$].isHighLight = !1,
                    this._lastHighLightIndex$ = null), e[this._rollResultIndex$].isHighLight = !e[this._rollResultIndex$].isHighLight,
                this.pageList$.array = this._pageData$, this.pageList$.refresh(), this._currentRollStep$++;
            else {
                let t = e[this._rollResultIndex$].skinId;
                e[this._rollResultIndex$].isHighLight = !1, this._rollPageType$ === Gt.AD ? Be.incSkinUnlockStep$(t) ? (this.openUnlockSkin$(t),
                        e[this._rollResultIndex$].isUnlock = !0) : (e[this._rollResultIndex$].progressCurrent = Be.getSkinUnlockStep$(t),
                        Laya.SoundManager.playSound(B.Sound$.PICK_KEY$, 1)) : (Be.unlockSkin$(t), this.openUnlockSkin$(t),
                        e[this._rollResultIndex$].isUnlock = !0), this.pageList$.array = this._pageData$,
                    this.pageList$.refresh(), this.pageList$.scrollBar.touchScrollEnable = !0, this._rolling$ = !1,
                    this._lastHighLightIndex$ = null, this.refreshButtons$(), this.owner.clearTimer(this, this.rollStep$);
            }
        }
        openUnlockSkin$(e) {
            this.isOpenUnlock$ = !0, b.dispatchEvent$(B.Event$.SKIN_UNLOCK_DIALOG_OPEN$);
            let t = Laya.Handler.create(this, function() {
                this.isOpenUnlock$ = !1, this.pageList$.refresh();
            });
            l.getInstance$().openUI$(Laya.classWithChannel$("skinUnlock"), null, {
                skinId: e,
                closeHandler: t
            });
        }
        loadNextWatchAdTime$() {
            this._nextWatchAdTime$ = fe.getItem("nextWatchAdTime", -1);
        }
        resetNextWatchAdTime$() {
            this._nextWatchAdTime$ = new Date().getTime() + 1e3 * te.getWatchAdCDSec$(), fe.setItem("nextWatchAdTime", this._nextWatchAdTime$);
        }
        updateWatchAdCD$() {
            let e = new Date().getTime();
            if (-1 === this._nextWatchAdTime$ || -1 !== this._nextWatchAdTime$ && e > this._nextWatchAdTime$) this.watchAdTextImage$.visible = !0,
                this.watchAdIconImage$.visible = !0, this.watchAdCDLabel$.visible = !1;
            else {
                let t = Math.floor((this._nextWatchAdTime$ - e) / 1e3);
                this.watchAdTextImage$.visible = !1, this.watchAdIconImage$.visible = !1, this.watchAdCDLabel$.visible = !0,
                    this.watchAdCDLabel$.text = ee.formatTime$(t, !1);
            }
        }
        tabItemClick$(e) {
            this.changeToPageIndex$(e, !0);
        }
        updateProperties$(e) {
            let t = et.getSkinProperty$(e);
            this._damageAnimProgressBar$.setAnimationTo(this.getProgress$(t.damage)), this._speedAnimProgressBar$.setAnimationTo(this.getProgress$(t.speed));
        }
        getProgress$(e) {
            return (e - 1) / 2 * .8 + .2;
        }
    }
    jt.url = "Prefab/Web/Shop/SkinStoreWindow.json", jt.className$ = "SkinStoreUI",
        jt.uiConfig$ = {
            layer: e.LAYER_NORMAL$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class qt extends jt {}
    qt.url = "Prefab/Qq/Shop/SkinStoreWindowQq.json", qt.className$ = "SkinStoreViewQq$",
        qt.uiConfig$ = {
            layer: e.LAYER_NORMAL$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    var Xt = get3DResourcePath$("UIScene.ls");
    class Qt extends d {
        constructor(e) {
            super();
        }
        initData$() {
            this._skinId$ = this.args$.skinId;
        }
        onUILoad$() {
            super.onUILoad$(), this.previewRoot$ = r.getChildDeep$(this.owner, "previewRoot"),
                this.closeButton$ = r.getChildDeep$(this.owner, "closeButton"), this.effectStar$ = r.getChildDeep$(this.owner, "effectStar"),
                this.closeButton$.on(Laya.Event.CLICK, this, this.onCloseClick$), this.loadStar$(),
                this.onOpened$();
        }
        loadStar$() {
            if (this.starEffectUI$) this.starEffectUI$.starShow.play(0, !1);
            else {
                let e = "Prefab/Effect/ShowStar.json";
                l.getInstance$().createPrefab$(e, this.effectStar$, this.preCompelet$.bind(this));
            }
        }
        preCompelet$(e) {
            this.starEffectUI$ = e, e.starShow.play(0, !1);
        }
        removeStarEffectUI$() {
            this.starEffectUI$ && (this.starEffectUI$.destroy(), this.starEffectUI$ = void 0);
        }
        static openWithSkinId$(e) {}
        onOpened$(e) {
            st.createMix$(Laya.Dialog.manager, Xt, function() {
                et.spawnSkin$(this._skinId$, e => {
                    this._preview$ = e.owner, this._preview$.transform.localScale = new Laya.Vector3(.3, .3, .3),
                        st.add3DMixWith2DRefSprite$(Laya.Dialog.manager, this._preview$, this.previewRoot$),
                        pgdk$.shakePhone$(!0), Laya.SoundManager.playSound(B.Sound$.SKIN_UNLOCK$, 1), b.dispatchEvent$(B.Event$.SKIN_UNLOCK_DIALOG_OPEN$);
                });
            }.bind(this));
        }
        onDestroy(e) {
            this.removeStarEffectUI$(), b.dispatchEvent$(B.Event$.SKIN_UNLOCK_DIALOG_CLOSE$),
                st.destroyMix$(Laya.Dialog.manager);
        }
        close(e) {}
        onCloseClick$() {
            this._preview$ && (this._preview$.destroy(!0), this._preview$ = null), Be.setUsingSkinId$(this._skinId$),
                this.doClose$();
        }
        playParticleEffect$() {
            let e = new Laya.Particle2D(this._openChestParticleSettings);
            e.emitter.start(.3), e.play(), e.pos(0, 0), this.previewRoot$.addChild(e);
        }
    }
    Qt.url = "Prefab/Web/Shop/SkinUnlockWindow.json", Qt.className$ = "SkinUnlockUI",
        Qt.uiConfig$ = {
            layer: e.LAYER_NORMAL$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class Jt extends Qt {}
    Jt.url = "Prefab/Qq/Shop/SkinUnlockWindowQq.json", Jt.className$ = "SkinUnlockDialogQq$",
        Jt.uiConfig$ = {
            layer: e.LAYER_NORMAL$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class Zt extends X {}
    Zt.url = "Prefab/Vivo/Battle/BattleLoadingWindowVivo.json", Zt.className$ = "BattleLoadingUIVivo",
        Zt.uiConfig$ = {
            layer: e.LAYER_TOP$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class ei extends Se {}
    ei.url = "Prefab/Vivo/Battle/BattleWindowVivo.json", ei.className$ = "BattleUIVivo",
        ei.uiConfig$ = {
            layer: e.LAYER_MAINUI$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class ti extends be {}
    ti.url = "Prefab/Vivo/Battle/OfflineAwardWindowVivo.json", ti.className$ = "OfflineAwardUIVivo$",
        ti.uiConfig$ = {
            layer: e.LAYER_NORMAL$,
            only: !1,
            needUISurrenal: !0,
            notClose: !0
        };
    class ii extends Pe {}
    ii.url = "Prefab/Vivo/Battle/RankUpWindowVivo.json", ii.className$ = "RankUpUIVivo$",
        ii.uiConfig$ = {
            layer: e.LAYER_MAINUI$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class si extends Oe {}
    si.url = "Prefab/Vivo/Battle/ResurgenceWindowVivo.json", si.className$ = "ResurgenceUIVivo$",
        si.uiConfig$ = {
            layer: e.LAYER_MAINUI$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class ai extends Re {
        constructor() {
            super(), this.dialogBgSkin$ = "sdk/NativeAd/ad-box.png;112,20,112,18", this.closeBtn$ = "sdk/NativeAd/ad-close.png",
                this.openAdBtn$ = "sdk/NativeAd/ad-btn-bg.png", this.adSignImg$ = "sdk/NativeAd/ad-text.png",
                this.width$ = 700, this.height$ = 600, this.isLandscape$ = !1, this.haveOpen$ = !1;
        }
        onStart() {
            if ("zs" == pgdk$.channel$) {
                if (this.zsConfig = pgdk$.getConfig$(), !this.zsConfig || !this.zsConfig.zs_version) return;
                if (this.zsConfig && this.zsConfig.zs_version && this.zsConfig.zs_version == window.app_version_vivo || (console.log("tcy 指色后台配置的版本号"),
                        console.log(JSON.stringify(this.zsConfig.zs_version)), "object" == typeof this.zsConfig && (this.zsConfig.zs_native_click_switch = 0)),
                    this.zsConfig && 0 == Number(this.zsConfig.zs_native_limit)) return void console.log("tcy 原生广告显示次数限制");
            }
            let e = window.pgdk$ && pgdk$.getPgCfg$("forcenative_rate"),
                t = Math.random();
            this.isForce$ = t < e, this.force_delayTime = window.pgdk$ && pgdk$.getPgCfg$("native_time");
            let i = pgdk$.getNativeAdData$();
            !i || i.length <= 0 || (console.log("tcy 原生数据" + JSON.stringify(i)), this.nativeAd = i[0],
                this.nativeObj$ = i[1], this.nativeAd ? Laya.timer.once(500, this, this.showUI$) : console.log("tcy 原生广告数据没拉取到"));
        }
        showUI$() {
            if (this.owner.destroyed) return;
            console.log("打开侧栏广告"), this.isReport$ = pgdk$.isReport$;
            let e = pgdk$.platformHandler$.curNativeId$;
            this.isReport$ && window.pgdk$ && pgdk$.reportShowAd$(e), this.ui$ ? Laya.stage.addChild(this.ui$) : this.initUI$();
        }
        initUI$() {
            console.log("tcy 展示原生广告"), this.ui$ = new Laya.Box(), this.ui$.zOrder = 999999999,
                this.ui$.name = this.viewName$, this.setWidget$(this.ui$, 0, 0, 0, 0), Laya.stage.addChild(this.ui$),
                this.createBgBox$(), this.createDialogBg$(), this.createAdImg$(), this.createAdDesc$(),
                this.createAdClick$(), this.createCloseBtn$(), this.ui$.visible = !1, this.setNativeAd$();
        }
        createBgBox$() {
            this.bgBox$ = new Laya.Box(), this.bgBox$.right = this.bgBox$.left = 0, this.bgBox$.top = this.bgBox$.bottom = 0,
                this.bgBox$.anchorX = this.bgBox$.anchorY = .5, this.bgBox$.bgColor = "#000000",
                this.bgBox$.alpha = .5, this.ui$.addChild(this.bgBox$);
        }
        createDialogBg$() {
            this.dialogBg$ = new Laya.Image(), this.isLandscape$ ? this.dialogBg$.left = this.dialogBg$.right = 250 : this.dialogBg$.width = this.width$,
                this.isLandscape$ ? this.dialogBg$.height = 430 : this.dialogBg$.height = this.height$,
                this.isLandscape$ || (this.dialogBg$.centerX = 0), this.isLandscape$ ? this.dialogBg$.centerY = -100 : this.dialogBg$.centerY = 0;
            let e = this.dialogBgSkin$.split(";");
            this.dialogBg$.skin = e[0], e[1] && (this.dialogBg$.sizeGrid = e[1]), this.ui$.addChild(this.dialogBg$);
        }
        createAdImg$() {
            this.adImg$ = new Laya.Image(), this.adImg$.left = 20, this.adImg$.right = 20, this.adImg$.top = 20,
                this.adImg$.bottom = 60, this.adImg$.anchorX = this.adImg$.anchorY = .5, this.dialogBg$.addChild(this.adImg$),
                this.adImg$.on(Laya.Event.CLICK, this, this.openAd$), this.nativeAdSign$ = new Laya.Image(),
                this.nativeAdSign$.skin = this.adSignImg$, this.nativeAdSign$.top = 0, this.nativeAdSign$.right = 0,
                this.adImg$ && this.adImg$.addChild(this.nativeAdSign$);
        }
        createAdDesc$() {
            this.desc$ = new Laya.Label(), this.desc$.text = this.descData$ || "", this.desc$.centerX = 0,
                this.desc$.bottom = 10, this.desc$.font = "SimHei", this.desc$.fontSize = 30, this.desc$.color = "#000000",
                this.dialogBg$.addChild(this.desc$);
        }
        createAdClick$() {
            let e = new Laya.Image();
            e.skin = this.openAdBtn$, e.bottom = -150, e.centerX = 0, this.dialogBg$.addChild(e);
            let t = new Laya.Label();
            t.centerX = t.centerY = 0, t.fontSize = 50, t.color = "#ffffff", t.font = "SimHei",
                t.scaleX = t.scaleY = 1.2, e.addChild(t), this.setDiffBtnImg$(e, t);
        }
        createCloseBtn$() {
            let e = new Laya.Image();
            e.skin = this.closeBtn$, e.scaleX = e.scaleY = 1.2, this.isLandscape$ ? e.left = 50 : e.left = 30,
                this.isLandscape$ ? e.top = 50 : e.top = 30, e.scaleX = e.scaleY = 1, e.on(Laya.Event.CLICK, this, this.doClose$),
                this.dialogBg$.addChild(e);
        }
        openAd$() {
            if (console.log("tcy 点击了下载"), this.haveOpen$) return;
            this.haveOpen$ = !0;
            let e = pgdk$.platformHandler$.curNativeId$;
            console.log("tcy 当前展示的原生广告id" + e), this.isReport$ && window.pgdk$ && pgdk$.reportClickAd$(e),
                console.log("tcy 大图点击" + this.nativeData.adId), this.nativeAd && pgdk$.nativeClick$(this.nativeData.adId, this.nativeObj$),
                console.log("tcy =======b1"), Laya.timer.once(1500, this, function() {
                    this.closeAd$();
                });
        }
        doClose$() {
            let e = Laya.LocalStorage.getItem("last_forceTime");
            if (this.isForce$) {
                if (!e) return void this.forceOpenAd$();
                if (new Date().getTime() - e > this.force_delayTime) return void this.forceOpenAd$();
                this.closeAd$();
            } else this.closeAd$();
        }
        forceOpenAd$() {
            this.openAd$(), Laya.LocalStorage.setItem("last_forceTime", new Date().getTime());
        }
        closeAd$() {
            pgdk$.nativeShowClose$(this.nativeData.adId, this.nativeObj$), this.ui$ && this.ui$.removeSelf(),
                this.nativeAd = void 0, this.nativeData = void 0;
        }
        setDiffBtnImg$(e, t) {
            "zs" == pgdk$.channel$ ? this.zsConfig && 0 == Number(this.zsConfig.zs_native_click_switch) ? (t.text = "Click to skip",
                e.on(Laya.Event.CLICK, this, this.closeAd$)) : this.zsConfig && 1 == Number(this.zsConfig.zs_native_click_switch) && (t.text = "Click to check it",
                e.on(Laya.Event.CLICK, this, this.openAd$)) : pgdk$.getPgCfg$("native_click_switch") && pgdk$.getPgCfg$("native_click_switch") && Math.random() < pgdk$.getPgCfg$("native_click_switch") ? (t.text = "点击跳过",
                e.on(Laya.Event.CLICK, this, this.openAd$)) : (t.text = "Click to check it", e.on(Laya.Event.CLICK, this, this.openAd$));
        }
        setNativeAd$() {
            console.log("tcy 原生广告数据");
            let e = this.nativeAd;
            if (e && e.imgUrlList)
                if (this.nativeData = e, console.log("tcy 结算界面广告"), console.log(JSON.stringify(e.imgUrlList)),
                    this.descData$ = e.desc, this.desc$ && (this.desc$.text = this.descData$), this.clickBtnTx$ = e.clickBtnTxt,
                    e.logoImg$) this.setNativeLogo$(e.logoImg$), this.nativeObj$.reportAdShow({
                    adId: this.nativeData.adId
                });
                else {
                    let t = this.arrayRandom(e.imgUrlList);
                    this.setNativeLogo$(t), this.nativeObj$.reportAdShow({
                        adId: this.nativeData.adId
                    });
                }
        }
        randomInt(e, t) {
            return Math.floor(Math.random() * (t - e) + e);
        }
        arrayRandom(e) {
            return e[this.randomInt(0, e.length)];
        }
        setNativeLogo$(e) {
            let t = this;
            Laya.loader.load(e, Laya.Handler.create(this, i => {
                t && !t.destroyed && (t.adImg$.skin = e, Laya.curNativeUrl = t.adImg$.skin, t.ui$.visible = !0);
            }));
        }
    }
    class ni extends Ke {}
    ni.url = "Prefab/Vivo/Battle/SettlementWindowVivo.json", ni.className$ = "SettlementUIVivo$",
        ni.uiConfig$ = {
            layer: e.LAYER_MAINUI$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class oi extends Xe {}
    oi.url = "Prefab/Vivo/Comp/AchieveListWindowVivo.json", oi.className$ = "AchievementDialogUIVivo$",
        oi.uiConfig$ = {
            layer: e.LAYER_NORMAL$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class ri extends Je {}
    ri.url = "Prefab/Vivo/Comp/NotEnoughCoinDialogVivo.json", ri.className$ = "NotEnoughCoinDialogVivo$",
        ri.uiConfig$ = {
            layer: e.LAYER_NORMAL$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class $i extends $t {}
    $i.url = "Prefab/Vivo/Comp/OpenCheastWindowVivo.json", $i.className$ = "OpenChestViewVivo$",
        $i.uiConfig$ = {
            layer: e.LAYER_NORMAL$,
            only: !1,
            needUISurrenal: !0,
            notClose: !0
        };
    class hi extends gt {}
    hi.url = "Prefab/Vivo/Comp/Sign7DayWindowVivo.json", hi.className$ = "SigninDialogUIVivo$",
        hi.uiConfig$ = {
            layer: e.LAYER_NORMAL$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class li extends Ct {
        onDestroy() {
            super.onDestroy();
            let e = l.getInstance$().getUI$(Laya.classWithChannel$("MainUI"));
            if (e && !e.owner.destroyed) {
                console.log("tcy 关闭商店弹窗,返回首页");
                let t = e.owner.getComponent(ai);
                t && (t.destroy(), t = void 0), e.owner.addComponent(ai);
            }
        }
    }
    li.url = "Prefab/Vivo/Comp/SpinDialogVivo.json", li.className$ = "SpinDialogUIVivo$",
        li.uiConfig$ = {
            layer: e.LAYER_NORMAL$,
            only: !1,
            needUISurrenal: !0,
            notClose: !0
        };
    class di extends vt {}
    di.url = "Prefab/Vivo/Comp/TaskListWindowVivo.json", di.className$ = "TaskDialogUIVivo$",
        di.uiConfig$ = {
            layer: e.LAYER_NORMAL$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class ci extends Mt {
        constructor() {
            super();
        }
        setNodes$() {
            super.setNodes$(), this.speedVideoImg$ = r.getChildDeep$(this.owner, "speedVideoImg"),
                this.damageVideoImg$ = r.getChildDeep$(this.owner, "damageVideoImg"), this.growthVideoImg$ = r.getChildDeep$(this.owner, "growthVideoImg");
        }
        monitorEvents$() {
            super.monitorEvents$(), b.registerEvent$(B.Event$.COIN_CHANGE$, this.refreshVideoImg$, this);
        }
        initUI$() {
            super.initUI$(), this.refreshVideoImg$();
        }
        refreshVideoImg$() {
            this.speedVideoImg$.visible = this.damageVideoImg$.visible = this.growthVideoImg$.visible = !1;
            let e = this.getDamageUpgradePrice$(),
                t = this.getSpeedUpgradePrice$(),
                i = this.getGrowthUpgradePrice$(),
                s = Be.getCoin$();
            this.damageVideoImg$.visible = e > s, this.speedVideoImg$.visible = t > s, this.growthVideoImg$.visible = i > s;
        }
        onDamageLvClick$() {
            let e = this.getDamageUpgradePrice$();
            if (Be.getCoin$() >= e) Be.incDamageLevel$(), Be.addCoin$(-e), Be.addUseCoin$(e),
                this._showLevelUpEffect$(this.damageLvButton$);
            else {
                let e = function(e) {
                    e ? (Be.incDamageLevel$(), this._showLevelUpEffect$(this.damageLvButton$)) : null;
                }.bind(this);
                Dt.showVideoAd$(e);
            }
            this.refreshVideoImg$();
        }
        onSpeedLvClick$() {
            let e = this.getSpeedUpgradePrice$();
            if (Be.getCoin$() >= e) Be.incMoveSpeedLevel$(), Be.addCoin$(-e), Be.addUseCoin$(e),
                this._showLevelUpEffect$(this.speedLvButton$);
            else {
                let e = function(e) {
                    e ? (Be.incMoveSpeedLevel$(), this._showLevelUpEffect$(this.speedLvButton$)) : null;
                }.bind(this);
                Dt.showVideoAd$(e);
            }
            this.refreshVideoImg$();
        }
        onGrowthLvClick$() {
            let e = this.getGrowthUpgradePrice$();
            if (Be.getCoin$() >= e) Be.incGrowthLevel$(), Be.addCoin$(-e), Be.addUseCoin$(e),
                this._showLevelUpEffect$(this.growthLvButton$);
            else {
                let e = function(e) {
                    e ? (Be.incGrowthLevel$(), this._showLevelUpEffect$(this.growthLvButton$)) : null;
                }.bind(this);
                Dt.showVideoAd$(e);
            }
            this.refreshVideoImg$();
        }
    }
    ci.url = "Prefab/Vivo/Main/MainWindowVivo.json", ci.className$ = "MainUIVivo$",
        ci.uiConfig$ = {
            layer: e.LAYER_NORMAL$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class gi extends jt {
        onDestroy() {
            super.onDestroy();
            let e = l.getInstance$().getUI$(Laya.classWithChannel$("MainUI"));
            if (e && !e.owner.destroyed) {
                console.log("tcy 关闭商店弹窗,返回首页");
                let t = e.owner.getComponent(ai);
                t && (t.destroy(), t = void 0), e.owner.addComponent(ai);
            }
        }
    }
    gi.url = "Prefab/Vivo/Shop/SkinStoreWindowVivo.json", gi.className$ = "SkinStoreViewVivo$",
        gi.uiConfig$ = {
            layer: e.LAYER_NORMAL$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class ui extends Qt {}
    ui.url = "Prefab/Vivo/Shop/SkinUnlockWindowVivo.json", ui.className$ = "SkinUnlockDialogVivo$",
        ui.uiConfig$ = {
            layer: e.LAYER_NORMAL$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class pi extends Re {
        constructor() {
            super(), this.viewName$ = null, this.direction$ = "horizontal", this.bgSkin$ = "#000000",
                this.iconBg$ = null, this.iconMask$ = null, this.showTitle$ = !0, this.titleBg$ = null,
                this.titleColor$ = "#FFFFFF", this.margin$ = 5, this.space$ = 5, this.dataType = "promotion",
                this.iconFrameSkin$ = "sdk/iconBorder.png;20,20,20,20", this.hScrollBarSkin$ = "common/hscroll.png",
                this.width = 720, this.height = 175, this.cellWidth = 140, this.cellHeight = 165,
                this.titleHeight$ = 25;
        }
        onStart() {
            this.owner.visible = !Laya.Browser.onIOS || "tt" != conf.channel, this.initUI$(),
                this.list$.addComponent(Ve), this.executeWhenSdkReady$(this, this.createAds$.bind(this));
        }
        initUI$() {
            "vertical" === this.direction$ ? (this.cellWidth = this.owner.width - 2 * this.margin$,
                    this.cellHeight = this.showTitle$ ? this.cellWidth + this.titleHeight$ : this.cellWidth) : (this.cellHeight = this.owner.height - 2 * this.margin$,
                    this.cellWidth = this.showTitle$ ? this.cellHeight - this.titleHeight$ : this.cellHeight),
                this.owner.bgColor = "", this.owner.alpha = 1, this.titleBgList$ = this.titleBg$ && this.titleBg$.split(","),
                this.ui$ = new Laya.Box(), this.ui$.width = this.owner.width, this.ui$.height = this.owner.height,
                this.setWidget$(this.ui$, 0, 0, 0, 0), this.owner.addChild(this.ui$), this.createBg$(),
                this.createList$();
        }
        getTitleBg$() {
            return this.titleBgList$ ? this.titleBgList$[Math.floor(Math.random() * this.titleBgList$.length)] : void 0;
        }
        createBg$() {
            if (!this.bgSkin$) return;
            let e = this.createBgNode$(this.ui$, this.bgSkin$, this.width$, this.height$);
            this.setWidget$(e, 0, 0, 0, 0);
        }
        createList$() {
            this.list$ = new Laya.List(), "vertical" === this.direction$ ? (this.list$.spaceY = this.space$,
                    this.list$.repeatX = 1, this.list$.repeatY = Math.ceil((this.ui$.height + 2 * this.margin$ + this.space$) / (this.space$ + this.cellHeight)),
                    this.list$.vScrollBarSkin = this.vScrollBarSkin$ || "common/vscroll.png") : (this.list$.spaceX = this.space$,
                    this.list$.repeatX = Math.ceil((this.ui$.width + 2 * this.margin$ + this.space$) / (this.space$ + this.cellWidth)),
                    this.list$.repeatY = 1, this.list$.hScrollBarSkin = this.hScrollBarSkin$ || "common/hscroll.png"),
                this.list$.scrollBar.visible = !1, this.list$.renderHandler = new Laya.Handler(this, this.renderHandler$),
                this.setWidget$(this.list$, this.margin$, this.margin$, this.margin$, this.margin$),
                this.ui$.addChild(this.list$), this.list$.itemRender = {
                    type: "Image",
                    props: {
                        width: this.cellWidth,
                        height: this.cellHeight
                    }
                };
        }
        renderHandler$(e, t) {
            let i = this;
            e.refresh$ = function() {
                i.renderIconBg$(e, t), i.renderIcon$(e, t), i.renderTitle$(e, t);
            }, e.refresh$(), i.registerAdClickEvent$(e, i.viewName$);
        }
        renderIconBg$(e, t) {
            this.iconBg$ && (this.iconBgNode$ = this.createBgNode$(e, this.iconBg$, this.cellWidth, this.cellHeight),
                this.iconBgNode$.zOrder = -1, this.setWidget$(this.iconBgNode$, 0, 0, 0, 0));
        }
        renderIcon$(e, t) {
            let i = e.getChildByName("GameIcon");
            if (!i) {
                if ((i = e.addChild(new He())).name = "GameIcon", this.iconBgNode$) {
                    let e = 5;
                    i.width = i.height = this.cellWidth - 2 * e, i.top = i.left = e;
                } else i.width = i.height = this.cellWidth;
                if (this.iconMask$) {
                    let e = new Laya.Image();
                    e.width = i.width, e.height = i.height, e.skin = this.iconMask$, i.mask = e;
                }
                if (this.iconFrameSkin$) {
                    let t = this.iconFrameSkin$.split(";");
                    this.iconFrame$ = e.addChild(new Laya.Image(t[0])), this.iconFrame$.sizeGrid = t[1],
                        this.iconFrame$.pos(i.x - 5, i.y - 5), this.iconFrame$.size(i.width + 10, i.height + 25);
                }
            }
            i.setSkin(e.dataSource.img);
        }
        renderTitle$(e, t) {
            if (!this.showTitle$) return;
            let i = e.getChildByName("GameTitleBg");
            i || ((i = e.addChild(new Laya.Image())).bottom = 0, i.name = "GameTitleBg", i.width = this.cellWidth,
                i.height = 25, i.skin = this.getTitleBg$());
            let s = i.getChildByName("GameTitle");
            s || ((s = this.createLabel$(i, 25, e.dataSource.title.substring(0, 6), this.titleColor$)).name = "GameTitle",
                s.anchorX = s.anchorY = .5, s.centerX = 0, this.setWidget$(s, null, 0, null, null));
            let a = e.dataSource.title;
            s.text = a, s.scaleX = s.scaleY = a.length > 5 ? 5 / a.length : 1;
        }
        createAds$() {
            this.list$.array = pgdk$.unsortedAds$(this.dataType);
        }
    }
    class mi extends X {
        onUILoad$() {
            super.onUILoad$(), this.list_showList$ = r.getChildDeep$(this.owner, "list_showList");
            platform.getInstance().initList(this.list_showList$);
        }

        loadCity$() {
            window.wx && !Laya.WXSoundsLoaded$ || super.loadCity$();
        }
    }
    mi.url = "Prefab/Wx/Battle/BattleLoadingWindowWx.json", mi.className$ = "BattleLoadingUIWx",
        mi.uiConfig$ = {
            layer: e.LAYER_TOP$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class _i extends Re {
        constructor() {
            super(), this.viewName$ = null, this.iconBg$ = null, this.iconMask$ = null, this.titleBg$ = null,
                this.showTitle$ = !0, this.isInCell$ = !1, this.isRotate$ = !0, this.titleColor$ = "#000000",
                this.dataType$ = "buoy", this.isChange$ = !1, this.iconFrameSkin$ = "sdk/iconBorder.png;20,20,20,20";
        }
        onStart() {
            pgdk$.isShowExport$ ? (this.owner.bgColor = "", this.owner.alpha = 1,
                this.executeWhenSdkReady$(this, this.initUI$.bind(this))) : this.owner.visible = !1;
        }
        initUI$() {
            this.ui$ = new Laya.Image(), this.owner.addChild(this.ui$);
            let e = pgdk$.getRandomAd$(this.dataType$);
            this.dataSource$ = e, this.dataSource$ && (this.ui$.skin = this.iconBg$, this.ui$.anchorX = this.ui$.anchorY = .5,
                this.ui$.width = this.owner.width, this.ui$.height = this.owner.height, this.setWidget$(this.ui$, 0, 0, 0, 0),
                this.createIcon$(), this.createTitle$(), this.createMask$(this.icon$, this.iconMask$),
                this.createIconFrame$(), this.initEvents$(), this.resetRotate$(), this.isChange$ && !this.isRotate$ && (this.timerChange$ = setInterval(function() {
                    this.changeAd$();
                }.bind(this), 3e3)));
        }
        onDestroy() {
            this.isChange$ && this.timerChange$ && clearInterval(this.timerChange$);
        }
        createIcon$() {
            this.icon$ = new Laya.Image(), this.ui$.addChild(this.icon$), this.isInCell$ ? (this.icon$.width = this.ui$.width - 50,
                this.icon$.height = this.ui$.height - 50, this.icon$.centerY = -5, this.icon$.centerX = 0,
                this.icon$.zOrder = -2) : (this.icon$.width = this.ui$.width - 10, this.icon$.height = this.icon$.width,
                this.setWidget$(this.icon$, 5, null, 5, 5)), this.changeAd$();
        }
        createIconFrame$() {
            if (this.iconFrameSkin$ && !this.iconFrame$) {
                let e = this.iconFrameSkin$.split(";");
                this.iconFrame$ = this.ui$.addChild(new Laya.Image(e[0])), this.iconFrame$.sizeGrid = e[1],
                    this.iconFrame$.pos(this.icon$.x - 5, this.icon$.y - 5), this.iconFrame$.size(this.icon$.width + 10, this.icon$.height + 25);
            }
        }
        createTitle$() {
            if (!this.showTitle$) return;
            this.titleBg$ && (this.titleBgImg$ = this.ui$.addChild(new Laya.Image()), this.titleBgImg$.bottom = 0,
                this.titleBgImg$.height = 40, this.titleBgImg$.right = this.titleBgImg$.left = 0,
                this.titleBgImg$.skin = this.titleBg$);
            let e = Math.max(15, this.owner.height - this.owner.width - 5);
            this.title$ = this.createLabel$(this.ui$, e, this.dataSource$.title.substring(0, 6), this.titleColor$),
                this.setWidget$(this.title$, null, 5, null, null);
        }
        onUpdate() {
            this.rotate$();
        }
        changeAd$() {
            if (pgdk$.recoverRandomAd$(this.dataSource$), this.dataSource$ = pgdk$.getRandomAd$(this.dataType$),
                this.dataSource$) {
                if (this.setIcon$(), !this.showTitle$) return;
                this.title$ && (this.title$.text = this.dataSource$.title.substring(0, 6));
            }
        }
        resetRotate$() {
            this.isRotate$ && (this.ui$.rotation = 0, this.rotateCnt = 0, this.rotateSpeed = 100,
                this.nextRotateTime = 2);
        }
        rotate$() {
            if (!this.ui$) return;
            if (!this.isRotate$) return;
            let e = Laya.timer.delta / 1e3;
            if (this.nextRotateTime > 0) this.nextRotateTime -= e;
            else {
                let t = this.ui$.rotation;
                this.ui$.rotation += this.rotateSpeed * e, this.ui$.rotation <= -5 ? (this.ui$.rotation = -5,
                    this.rotateSpeed = Math.abs(this.rotateSpeed)) : this.ui$.rotation >= 5 && (this.ui$.rotation = 5,
                    this.rotateSpeed = -Math.abs(this.rotateSpeed)), (t >= 0 && this.ui$.rotation <= 0 || t <= 0 && this.ui$.rotation >= 0) && (this.rotateCnt++,
                    this.rotateCnt >= 4 && (this.resetRotate$(), this.changeAd$()));
            }
        }
        click$() {
            pgdk$.navigateToMiniProgram$(this.dataSource$, this.viewName$, void 0, this.changeAd$.bind(this));
        }
        onRemoved$() {
            pgdk$.recoverRandomAd$(this.dataSource$);
        }
        initEvents$() {
            this.ui$.on(Laya.Event.REMOVED, this, this.onRemoved$), this.ui$.on(Laya.Event.CLICK, this, this.click$);
        }
        setIcon$() {
            let e, t = this.dataSource$.img;
            if (this.gif && this.gif.clearAnim(), "string" == typeof t) {
                let e = this;
                Laya.loader.load(t, Laya.Handler.create(this, i => {
                    e.icon$.skin = t;
                }));
            } else if (Object.keys(t).length)
                for (const i in t)
                    if (t.hasOwnProperty(i)) {
                        const s = t[i];
                        if ("gifData" === i && s && Object.keys(s).length) {
                            let t = new PgGifIcon$({
                                width: 150,
                                height: 150
                            });
                            this.gif = this.icon$.addChild(t), e = pgdk$.arrayRandom(s), this.gif.setImage(e);
                            break;
                        }
                        if ("array" === i && s && Object.keys(s).length) {
                            e = pgdk$.arrayRandom(s), this.icon$.skin = e.path;
                            break;
                        }
                    }
        }
    }
    class yi extends Se {
        monitorEvents$() {
            super.monitorEvents$(), h.getInstance$().addEventListener$(c.ON_EXIT_GAME$, this, this.onHideGame$),
                h.getInstance$().addEventListener$(c.ON_SHOW_GAME$, this, this.onShowGame$), h.getInstance$().addEventListener$(c.ON_VIDEO_HIDE$, this, this.onCloseVideo$),
                h.getInstance$().addEventListener$(c.ON_VIDEO_SHOW$, this, this.onShowVideo$);
        }
        initUI$() {
            super.initUI$(), r.getChildDeep$(this.owner, "SingleAd").visible = !!pgdk$.isShowFightExport$();
            let e = this.owner.getComponent(V);
            e && (pgdk$.isShowFightBanner$() ? e.restoreBanner$(!0) : pgdk$.hideBanner$());
        }
        onShowGame$() {
            Laya.timer.once(1, this, this.playBgm$);
        }
        onHideGame$() {
            this.stopBgm$();
        }
        onShowVideo$() {
            this.stopBgm$();
        }
        onCloseVideo$() {
            Laya.timer.once(1, this, this.playBgm$);
        }
        onDestroy() {
            super.onDestroy(), Laya.timer.clearAll(this), h.getInstance$().removeEventListener$(c.ON_EXIT_GAME$, this, this.onHideGame$),
                h.getInstance$().removeEventListener$(c.ON_SHOW_GAME$, this, this.onShowGame$),
                h.getInstance$().removeEventListener$(c.ON_VIDEO_HIDE$, this, this.onCloseVideo$),
                h.getInstance$().removeEventListener$(c.ON_VIDEO_SHOW$, this, this.onShowVideo$);
        }
    }
    yi.url = "Prefab/Wx/Battle/BattleWindowWx.json", yi.className$ = "BattleUIWx", yi.uiConfig$ = {
        layer: e.LAYER_MAINUI$,
        only: !0,
        needUISurrenal: !0,
        notClose: !1
    };
    class Si extends be {}
    Si.url = "Prefab/Wx/Battle/OfflineAwardWindowWx.json", Si.className$ = "OfflineAwardUIWx$",
        Si.uiConfig$ = {
            layer: e.LAYER_NORMAL$,
            only: !1,
            needUISurrenal: !0,
            notClose: !0
        };
    class Li extends Pe {}
    Li.url = "Prefab/Wx/Battle/RankUpWindowWx.json", Li.className$ = "RankUpUIWx$",
        Li.uiConfig$ = {
            layer: e.LAYER_MAINUI$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class wi extends Oe {
        onUILoad$() {
            super.onUILoad$(),
                this.list_showList$ = r.getChildDeep$(this.owner, "list_showList");
            platform.getInstance().initList(this.list_showList$);
        }

    }
    wi.url = "Prefab/Wx/Battle/ResurgenceWindowWx.json", wi.className$ = "ResurgenceUIWx$",
        wi.uiConfig$ = {
            layer: e.LAYER_MAINUI$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class Ci extends Ke {
        initData$() {
            super.initData$(), this.delaySwitch$ = pgdk$.btnMoveSwitch$() && pgdk$.getPgCfg$("bannerSwitch");
        }
        initUI$() {
            super.initUI$(), this.initBanner$(), this.owner.hand.play(0, !0);
            this.list_showList$ = r.getChildDeep$(this.owner, "list_showList");
            platform.getInstance().initList(this.list_showList$);
        }
        initBanner$() {
            // this.bannerCtrl$ = this.owner.getComponent(V), this.delaySwitch$ ? (window.pgdk$ && pgdk$.hideBanner$(),
            //     this.playBannerMoveAnim$()) : this.bannerCtrl$.restoreBanner$(!0);
        }
        playBannerMoveAnim$() {
            // this.isPlayBannerMoveAnim$ = !0, Ne.create$(this.bannerCtrl$, [this.recevieButton$, this.doubleRecevieButton$], this.onBannerMoveAnimComplete$.bind(this));
        }
        onBannerMoveAnimComplete$() {
            // this.isPlayBannerMoveAnim$ = !1;
        }
        onReceiveCoin3XClick$() {
            // this.isPlayBannerMoveAnim$ || 
            super.onReceiveCoin3XClick$();
        }
        onReceiveCoinClick$() {
            // this.isPlayBannerMoveAnim$ ||
            super.onReceiveCoinClick$();
        }
        closeAndGoHome$() {
            Laya.timer.clearAll(this), this.doClose$(),
                // We.create$(function () {
                b.dispatchEvent$(B.Event$.SHOW_HOME_VIEW$);
            // }.bind(this));
        }
    }
    Ci.url = "Prefab/Wx/Battle/SettlementWindowWx.json", Ci.className$ = "SettlementUIWx$",
        Ci.uiConfig$ = {
            layer: e.LAYER_MAINUI$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class fi extends Xe {}
    fi.url = "Prefab/Wx/Comp/AchieveListWindowWx.json", fi.className$ = "AchievementDialogUIWx$",
        fi.uiConfig$ = {
            layer: e.LAYER_NORMAL$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class vi extends Je {}
    vi.url = "Prefab/Wx/Comp/NotEnoughCoinDialogWx.json", vi.className$ = "NotEnoughCoinDialogWx$",
        vi.uiConfig$ = {
            layer: e.LAYER_NORMAL$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class Ii extends $t {}
    Ii.url = "Prefab/Wx/Comp/OpenCheastWindowWx.json", Ii.className$ = "OpenChestViewWx$",
        Ii.uiConfig$ = {
            layer: e.LAYER_NORMAL$,
            only: !1,
            needUISurrenal: !0,
            notClose: !0
        };
    class Ei extends gt {}
    Ei.url = "Prefab/Wx/Comp/Sign7DayWindowWx.json", Ei.className$ = "SigninDialogUIWx$",
        Ei.uiConfig$ = {
            layer: e.LAYER_NORMAL$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class Di extends Ct {}
    Di.url = "Prefab/Wx/Comp/SpinDialogWx.json", Di.className$ = "SpinDialogUIWx$",
        Di.uiConfig$ = {
            layer: e.LAYER_NORMAL$,
            only: !1,
            needUISurrenal: !0,
            notClose: !0
        };
    class Ai extends vt {}
    Ai.url = "Prefab/Wx/Comp/TaskListWindowWx.json", Ai.className$ = "TaskDialogUIWx$",
        Ai.uiConfig$ = {
            layer: e.LAYER_NORMAL$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class ki extends Re {
        static create(e) {
            // if (pgdk$.hideBanner$(), Laya.gameCenterUI$) return Laya.stage.addChild(Laya.gameCenterUI$),
            //     Laya.gameCenterUI$.getComponent(ki).closeCallback$ = e, Laya.gameCenterUI$;
            // let t = new Laya.Box();
            // t.bgColor = "#406c99", t.name = "GameCenterUI", t.viewName$ = "游戏中心", t.zOrder = 999999999,
            //     t.width = 720, t.height = 1280, Laya.stage.addChild(t), Laya.gameCenterUI$ = t;
            // let i = t.addComponent(ki);
            // i.setWidget$(t, 0, 0, 0, 0), i.closeCallback$ = e;
        }
        constructor() {
            super(), this.titleBg$ = "sdk/4.png", this.closeCallback$ = void 0;
        }
        onStart() {
            this.initUI$();
        }
        onEnable() {
            this.reset$();
        }
        reset$() {
            this.canTrick$ = pgdk$.isGameCenterViewDelay$(), this.hasClick$ = !1, this.hasShowBanner$ = !1;
        }
        initUI$() {
            this.reset$();
            let e = this.owner.addChild(new Laya.Image());
            e.skin = "sdk/title-friend.png", e.centerX = 0, e.top = 140, this.createListAds$(),
                this.createGridAds$(), this.createBtnContinue$(), this.createBannerBox$(), this.owner.addComponent(V).boxBanner$ = this.boxBanner$;
        }
        createBtnBack$() {}
        createBannerBox$() {
            this.boxBanner$ = this.owner.addChild(new Laya.Box()), this.boxBanner$.zOrder = 1,
                this.boxBanner$.left = this.boxBanner$.right = 0, this.boxBanner$.bottom = 10, this.boxBanner$.height = 220,
                this.boxBanner$.bgColor = "#FFFFFF";
        }
        createListAds$() {
            this.list$ = this.owner.addChild(new Laya.Box()), this.list$.top = 180, this.list$.width = 680,
                this.list$.height = 180, this.list$.centerX = 0;
            let e = this.list$.addComponent(pi);
            e.viewName$ = this.owner.viewName$, e.bgSkin$ = "#FFFFFFFF", e.titleColor$ = "#000000";
        }
        createGridAds$() {
            let e = this.owner.addChild(new Laya.Image());
            e.skin = "sdk/title-recommend.png", e.centerX = 0, e.top = 380, this.list$ = this.owner.addChild(new Laya.Box()),
                this.list$.width = 680, this.list$.top = 430, this.list$.bottom = 20, this.list$.centerX = 0;
            let t = this.list$.addComponent(Ge);
            t.viewName$ = this.owner.viewName$, t.iconBg$ = "sdk/image_icon_bg.png;20,20,20,20",
                t.iconMask$ = "sdk/image_icon_bg.png", t.iconFrameSkin$ = "sdk/iconBorder.png;20,20,20,20",
                t.titleBg$ = this.titleBg$, t.spacingY$ = 20, t.rows$ = 3, t.mouseUpCallback$ = this.onAdGridMouseUp$.bind(this);
        }
        onAdGridMouseUp$() {
            if (pgdk$.dataHandler$.slideJumpSwitch$()) {
                let e = pgdk$.getRandomAd$("promotion");
                pgdk$.recoverRandomAd$(e), pgdk$.navigateToMiniProgram$(e, this.owner.viewName$);
            }
        }
        createBtnContinue$() {
            let e = this.owner.addChild(new Laya.Image());
            e.skin = "sdk/btn-continue-new.png", e.centerX = 0, e.bottom = 80, e.on(Laya.Event.CLICK, this, function() {
                if (this.canTrick$)
                    if (this.hasClick$) {
                        if (!this.hasShowBanner$) return;
                        this._onClose$();
                    } else this.hasClick$ = !0, Laya.timer.once(1e3, this, this._showBanner$);
                else this._onClose$();
            }.bind(this));
        }
        _onClose$() {
            this.owner.removeSelf(), this.closeCallback$ && (this.closeCallback$(), this.closeCallback$ = void 0);
        }
        _showBanner$() {
            this.owner.getComponent(V).restoreBanner$(!0), this.hasShowBanner$ = !0, Laya.timer.once(1e3, this, this._hideBanner$);
        }
        _hideBanner$() {
            pgdk$.hideBanner$(!0);
        }
    }
    class Bi extends Mt {
        constructor() {
            super();
        }
        initData$() {
            let e = this.owner;
            super.initData$(), this.videoSwitch$ = pgdk$.starWatchVideoSwitch$() && Math.random() < pgdk$.getPgCfg$("homeVideoRate");
            this.soundButton$ = r.getChildDeep$(e, "soundBtn"), r.onButtonScaleEvent$(this.soundButton$, this, "onSoundClick$");
            this.soundButton$.skin = window.WebAudioEngine.pause ? "homeUI/btn_sound_off.png" : "homeUI/btn_sound_on.png";
        }
        onSoundClick$() {
            window.WebAudioEngine.pause = !window.WebAudioEngine.pause;
            this.soundButton$.skin = window.WebAudioEngine.pause ? "homeUI/btn_sound_off.png" : "homeUI/btn_sound_on.png";
            Laya.LocalStorage.setJSON("Super-Tornado-io-musicState", window.WebAudioEngine.pause)

        }
        onUILoad$() {
            super.onUILoad$(), this._autoShowIndex$();
        }
        onMoreGameClick$() {
            ki.create();
        }
        _autoShowIndex$() {
            // this.moreGamePopupButton$ && this.moreGamePopupButton$.getComponent(At).showUI$();
        }
        onClickStart$() {
            this.videoSwitch$ ? window.Dt.showVideoAd$(this.openPlayingScene$.bind(this)) : this.openPlayingScene$();
        }
    }
    Bi.url = "Prefab/Wx/Main/MainWindowWx.json", Bi.className$ = "MainUIWx$", Bi.uiConfig$ = {
        layer: e.LAYER_NORMAL$,
        only: !0,
        needUISurrenal: !0,
        notClose: !1
    };
    class bi extends jt {}
    bi.url = "Prefab/Wx/Shop/SkinStoreWindowWx.json", bi.className$ = "SkinStoreViewWx$",
        bi.uiConfig$ = {
            layer: e.LAYER_NORMAL$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class xi extends Qt {}
    xi.url = "Prefab/Wx/Shop/SkinUnlockWindowWx.json", xi.className$ = "SkinUnlockDialogWx$",
        xi.uiConfig$ = {
            layer: e.LAYER_NORMAL$,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class Pi {
        constructor() {
            this.inited$ = !1, this.initedCB$ = void 0, this.sceneMap$ = {};
        }
        static getInstance$() {
            return null == Pi.instance$ && (Pi.instance$ = new Pi()), Pi.instance$;
        }
        get isInited$() {
            return this.inited$;
        }
        init$(e) {
            this.initedCB$ = e, this.initComplete$();
        }
        openInitScene$() {}
        initComplete$() {
            this.openInitScene$(), this.inited$ = !0, this.initedCB$ && this.initedCB$();
        }
        openScene$(e, t, i, ...s) {
            Laya.Scene.open(e.url, !0, s, Laya.Handler.create(this, e => {
                t && t.run();
            }), i);
        }
        addScene$(e) {
            this.sceneMap$[e.constructor.className$] = e;
        }
        removeScene$(e) {
            delete this.sceneMap$[e.constructor.className$];
        }
        getScene$(e) {
            return this.sceneMap$[e.className$];
        }
    }
    Pi.instance$ = void 0;
    class Ti extends Laya.Scene {
        constructor() {
            super(), this._events$ = [], Pi.getInstance$().addScene$(this);
        }
        addEventListener$(e, t) {
            h.getInstance$().addEventListener$(e, this, t), this._events$.push({
                e: e,
                cn: t
            });
        }
        removeEventListener$(e, t) {
            for (var i, s = this._events$.length; --s > -1;)
                if ((i = this._events$[s]).e == e && i.cn == t) {
                    this._events$.removeAt(s);
                    break;
                }
        }
        removeAllEventListener$() {
            for (var e; this._events$.length;) e = this._events$.shift(), h.getInstance$().removeEventListener$(e.e, this, e.cn);
            this._events$ = [];
        }
        onDestroy() {
            Pi.getInstance$().removeScene$(this), this.removeAllEventListener$(), this.close();
        }
    }
    Ti.url = "", Ti.className$ = "";
    class Mi extends Laya.Script3D {
        constructor() {
            super(), this._tempVector3 = new Laya.Vector3(), this.yawPitchRoll = new Laya.Vector3(),
                this.resultRotation = new Laya.Quaternion(), this.tempRotationZ = new Laya.Quaternion(),
                this.tempRotationX = new Laya.Quaternion(), this.tempRotationY = new Laya.Quaternion(),
                this.rotaionSpeed = 6e-5, this.moveSpeed = .01, this.moveSpeedPower = 1, this.isClickShift = !1;
        }
        onAwake() {
            Laya.stage.on(Laya.Event.RIGHT_MOUSE_DOWN, this, this.mouseDown), Laya.stage.on(Laya.Event.RIGHT_MOUSE_UP, this, this.mouseUp),
                this.camera = this.owner;
        }
        _onDestroy() {
            Laya.stage.off(Laya.Event.RIGHT_MOUSE_DOWN, this, this.mouseDown), Laya.stage.off(Laya.Event.RIGHT_MOUSE_UP, this, this.mouseUp);
        }
        onUpdate(e) {
            var t = Laya.timer.delta;
            if (!isNaN(this.lastMouseX) && !isNaN(this.lastMouseY) && this.isMouseDown) {
                this.owner.scene;
                this.isClickShift && (this.moveSpeedPower = 5), Laya.KeyBoardManager.hasKeyDown(87) && this.moveForward(-this.moveSpeed * this.moveSpeedPower * t),
                    Laya.KeyBoardManager.hasKeyDown(83) && this.moveForward(this.moveSpeed * this.moveSpeedPower * t),
                    Laya.KeyBoardManager.hasKeyDown(65) && this.moveRight(-this.moveSpeed * this.moveSpeedPower * t),
                    Laya.KeyBoardManager.hasKeyDown(68) && this.moveRight(this.moveSpeed * this.moveSpeedPower * t),
                    Laya.KeyBoardManager.hasKeyDown(81) && this.moveVertical(this.moveSpeed * this.moveSpeedPower * t),
                    Laya.KeyBoardManager.hasKeyDown(69) && this.moveVertical(-this.moveSpeed * this.moveSpeedPower * t),
                    Laya.KeyBoardManager.hasKeyDown(16) && this.onShiftClick();
                var i = Laya.stage.mouseX - this.lastMouseX,
                    s = Laya.stage.mouseY - this.lastMouseY,
                    a = this.yawPitchRoll;
                a.x -= i * this.rotaionSpeed * t, a.y -= s * this.rotaionSpeed * t, this.updateRotation();
            }
            this.lastMouseX = Laya.stage.mouseX, this.lastMouseY = Laya.stage.mouseY;
        }
        mouseDown(e) {
            this.camera.transform.localRotation.getYawPitchRoll(this.yawPitchRoll), this.lastMouseX = Laya.stage.mouseX,
                this.lastMouseY = Laya.stage.mouseY, this.isMouseDown = !0;
        }
        mouseUp(e) {
            this.isMouseDown = !1;
        }
        moveForward(e) {
            this._tempVector3.x = 0, this._tempVector3.y = 0, this._tempVector3.z = e, this.camera.transform.translate(this._tempVector3);
        }
        moveRight(e) {
            this._tempVector3.y = 0, this._tempVector3.z = 0, this._tempVector3.x = e, this.camera.transform.translate(this._tempVector3);
        }
        moveVertical(e) {
            this._tempVector3.x = this._tempVector3.z = 0, this._tempVector3.y = e, this.camera.transform.translate(this._tempVector3, !1);
        }
        onShiftClick() {
            this.isClickShift = !0;
        }
        updateRotation() {
            Math.abs(this.yawPitchRoll.y) < 1.5 && (Laya.Quaternion.createFromYawPitchRoll(this.yawPitchRoll.x, this.yawPitchRoll.y, this.yawPitchRoll.z, this.tempRotationZ),
                this.tempRotationZ.cloneTo(this.camera.transform.localRotation), this.camera.transform.localRotation = this.camera.transform.localRotation);
        }
    }
    class Oi extends Laya.Script3D {
        constructor() {
            super(), this.initData$();
        }
        initData$() {
            this.camera_state$ = 0, this.moveProgressSpeed$ = .003, this.roleOffsetPos$ = new Laya.Vector3(0, 44, 22),
                this.roleWinOffsetPos$ = new Laya.Vector3(0, 30, 32), this.targetPos$ = new Laya.Vector3(-118, 88, -143),
                this.targetRot$ = new Laya.Vector3(-27, -139, 0), this.cameraPosIndex$ = 0, this._battleData$ = Y.getInstance$().battleData$,
                Y.getInstance$().battleData$.battleCamera$ = this, this._isStopBattleFollow$ = !1,
                this.isOpenScene$ = !0;
        }
        static create$(e, t, i) {
            let s = e.addChild(new Laya.Camera(0, .1, t));
            s.clearFlag = 2, Laya.Browser.onPC && s.addComponent(Mi);
            let a = s.addComponent(Oi);
            return a.setData$(i), a;
        }
        setData$(e) {
            this.initedCallback$ = e;
        }
        onStart() {
            this.monitorEvents$(), this.initedCallback$ && this.initedCallback$(), this.initedCallback$ = void 0,
                this.initPos$();
        }
        initPos$() {
            this.targetPos$.cloneTo(this.owner.transform.position), this.owner.transform.position = this.owner.transform.position,
                this.targetRot$.cloneTo(this.owner.transform.rotationEuler), this.owner.transform.rotationEuler = this.owner.transform.rotationEuler;
        }
        monitorEvents$() {
            h.getInstance$().addEventListener$(c.REST_FIGHT$, this, this.onrResetFight$), h.getInstance$().addEventListener$(c.ON_START_GAME$, this, this.onStartFight$),
                h.getInstance$().addEventListener$(c.FIGHT_WIN$, this, this.onFightWin$), h.getInstance$().addEventListener$(c.ASK_CHANGE_CAMERA_POS$, this, this.askChangeTargetPosIndex$),
                h.getInstance$().addEventListener$(c.OPEN_SHOP_SCENE$, this, this.onOpenShopScene$),
                h.getInstance$().addEventListener$(c.CLOSE_SHOP_SCENE$, this, this.onCloseShopScene$),
                h.getInstance$().addEventListener$(c.OPEN_TIPS_SCENE$, this, this.setTipCameraPos$),
                h.getInstance$().addEventListener$(c.CLOSE_TIPS_SCENE$, this, this.exieTipsCamera$);
        }
        cancelEvents$() {
            h.getInstance$().removeEventListener$(c.REST_FIGHT$, this, this.onrResetFight$),
                h.getInstance$().removeEventListener$(c.ON_START_GAME$, this, this.onStartFight$),
                h.getInstance$().removeEventListener$(c.FIGHT_WIN$, this, this.onFightWin$), h.getInstance$().removeEventListener$(c.ASK_CHANGE_CAMERA_POS$, this, this.askChangeTargetPosIndex$),
                h.getInstance$().removeEventListener$(c.OPEN_SHOP_SCENE$, this, this.onOpenShopScene$),
                h.getInstance$().removeEventListener$(c.CLOSE_SHOP_SCENE$, this, this.onCloseShopScene$),
                h.getInstance$().removeEventListener$(c.CLOSE_TIPS_SCENE$, this, this.exieTipsCamera$);
        }
        onOpenShopScene$() {
            this.owner.active = !1;
        }
        onCloseShopScene$() {
            this.owner.active = !0;
        }
        onrResetFight$() {
            this.camera_state$ = 0;
            let e = this.owner.transform.rotationEuler;
            e.z = 0, e.y = -180, e.x = 0, this.owner.transform.rotationEuler = e;
            let t = this.owner.transform.position;
            t.z = -50, t.x = 0, t.y = 0, this.owner.transform.position = t;
        }
        onStartFight$() {
            this.camera_state$ = 1;
        }
        onFightWin$() {
            this.camera_state$ = 2;
        }
        onUpdate() {
            1 != this.camera_state$ && 0 != this.camera_state$ && 3 != this.camera_state$ || this.refreshCameraPos$();
        }
        askChangeTargetPosIndex$(e) {
            this.cameraPosIndex$ = e.data % 4;
        }
        refreshTargetPos$() {
            if (this._isStopBattleFollow$) return;
            if (!this._battleData$.roleCtr$ || 1 != this._battleData$.fight_state$) return;
            let e = this._battleData$.roleCtr$;
            if (!e || !e.headCtrl$ || !e.headCtrl$.loaded$) return !1;
            let t = e.headCtrl$.sprite$.transform.position;
            return this.isOpenScene$ ? this.targetPos$.z = -23 : this.targetPos$.z = -9, this.targetPos$.x = t.x,
                this.targetPos$.y = t.y, !0;
        }
        setTipCameraPos$() {
            this._isStopBattleFollow$ = !0, this.targetPos$.z = -16.4, this.targetPos$.x = -1,
                this.targetPos$.y = -2.14, Laya.timer.frameLoop(1, this, this.tipCamera$);
        }
        tipCamera$() {
            if (1 != this.camera_state$ && 0 != this.camera_state$ && 3 != this.camera_state$) return;
            let e = j.getInstance$().deltaTime$,
                t = this.owner.transform.position;
            Laya.Vector3.lerp(t, this.targetPos$, Math.min(1, e * this.moveProgressSpeed$), t),
                this.owner.transform.position = t, this.owner.transform.position == this.targetPos$ && Laya.timer.clear(this, this.tipCamera$);
        }
        exieTipsCamera$() {
            this._isStopBattleFollow$ = !1, Laya.timer.clear(this, this.tipCamera$);
        }
        refreshCameraPos$() {
            if (!this.refreshTargetPos$()) return;
            let e = j.getInstance$().deltaTime$,
                t = this.owner.transform.position;
            Laya.Vector3.lerp(t, this.targetPos$, Math.min(1, e * this.moveProgressSpeed$), t),
                this.owner.transform.position = t;
        }
        shakeCamera$() {
            this.isShakeCamera$ || (this.isShakeCamera$ = !0, this.shakeOffset$ = .1, this.shakeT$ = 0);
        }
        refreshShakeCameraAnim$() {
            if (this.isShakeCamera$)
                if (this.shakeOffset$ -= this.shakeOffset$ * j.getInstance$().deltaTime$ * .002,
                    this.shakeT$ += j.getInstance$().deltaTime$, this.shakeT$ > 100 && (this.shakeT$ = 0,
                        this.shakeOffset$ = -this.shakeOffset$), Math.abs(this.shakeOffset$) < .001) {
                    let e = this.camera$.transform.position;
                    e.x = this.startCameraPos$.x, this.camera$.transform.position = e, this.isShakeCamera$ = !1;
                } else {
                    let e = this.camera$.transform.position;
                    e.x = this.startCameraPos$.x + this.shakeOffset$, this.camera$.transform.position = e;
                }
        }
        getScenePos$(e, t, i) {
            return (i = i || new Laya.Vector3()).y = t / this.viewParaY$, i.x = e / this.viewParaX$,
                i.z = 0, i;
        }
        onDestroy() {
            Laya.timer.clearAll(this), this.cancelEvents$();
        }
    }
    var Ni = new Laya.Vector3();
    class Ui extends Laya.Script3D {
        constructor() {
            super(), this.shake$ = 0, this.shakeAmount$ = .7, this.decreaseFactor$ = 1;
        }
        onAwake() {
            this._camTransform$ = this.owner.transform, this._originalPos$ = this._camTransform$.localPosition.clone();
        }
        onUpdate() {
            this.shake$ > 0 ? (Laya.Vector3.scale(this.randomInsideUnitSphere$(), this.shakeAmount$, Ni),
                Laya.Vector3.add(this._originalPos$, Ni, Ni), this._camTransform$.localPosition = Ni,
                this.shake$ -= Laya.timer.delta / 1e3 * this.decreaseFactor$) : (this.shake$ = 0,
                this._camTransform$.localPosition = this._originalPos$, this.enabled = !1);
        }
        randomInsideUnitSphere$() {
            return new Laya.Vector3(-.5 + Math.random(), -.5 + Math.random(), -.5 + Math.random());
        }
    }
    class Ri extends Laya.Script3D {
        onCollision$(e, t, i) {
            if (t) switch (t.collisionGroup) {
                case B.OBJ_TYPE$.HUMAN$:
                    let e = t.linkSprite3d.getComponent(M);
                    b.dispatchEvent$(B.Event$.HUMAN_KILL$, {
                        dinosaur: this.dinosaur,
                        human: e,
                        bodyData: t
                    });
                    break;

                case B.OBJ_TYPE$.DINOSAUR$:
                    let i = t.linkSprite3d.getComponent(Laya.CyzClassMap$.Dinosaur);
                    i && (this.dinosaur.level === i.level ? this.dinosaur.strikeBack() : this.dinosaur.level > i.level && b.dispatchEvent$(B.Event$.DINOSAUR_KILL$, {
                        dinosaur: this.dinosaur,
                        otherDinosaur: i,
                        bodyData: t
                    }));
            }
        }
    }
    var Vi = new Laya.Vector3(),
        Hi = new Laya.Quaternion();
    class Gi extends Laya.Script3D {
        constructor() {
            super(), this._enableTurn$ = !1, this._moveLerpSpeed$ = 5, this._turnLerpSpeed$ = 10,
                this.moveSpeed$ = 5, this._duration$ = 500, this._elapseTime$ = 0, this._movingDirection$ = null,
                this.enableLerpMoving$ = !1, this.enableLerpTurn$ = !1;
        }
        get movingDirection$() {
            return this._movingDirection$;
        }
        set movingDirection$(e) {
            this._movingDirection$ || (this._movingDirection$ = new Laya.Vector3()), Laya.Vector3.normalize(e, this._movingDirection$);
        }
        onEnable() {
            this._reset$();
        }
        _reset$() {
            this._elapseTime$ = 0;
        }
        onUpdate() {
            if (this._movingDirection$ && (-1 === this._duration$ || this._elapseTime$ < this._duration$)) {
                this._elapseTime$ += Laya.timer.delta;
                let e = Math.min(Laya.timer.delta / 1e3, 1 / 30);
                this._doMove$(e), this._enableTurn$ && this._doTurn$(e), -1 !== this._duration$ && this._elapseTime$ >= this._duration$ && (this.enabled = !1);
            }
        }
        _doMove$(e) {
            let t = this.owner.transform;
            Laya.Vector3.scale(this._movingDirection$, -this.moveSpeed$, Vi), Laya.Vector3.add(t.position, Vi, Vi),
                Vi.y = 0, this.enableLerpMoving$ ? A.moveLerp$(t, Vi, this._moveLerpSpeed$ * e) : t.position = Vi;
        }
        _doTurn$(e) {
            let t = this.owner.transform;
            Laya.Quaternion.rotationLookAt(this.movingDirection$, C.UnitY$, Hi), this.enableLerpTurn$ ? A.slerpRotationLookTo$(t, this.movingDirection$, this._turnLerpSpeed$ * e) : A.rotationLookTo$(t, this.movingDirection$);
        }
    }
    var Wi = new Laya.Vector3();
    class zi extends Laya.Script3D {
        constructor() {
            super(), this._r$ = 2, this.rollUpSprs$ = [], this.rollUpCallbacks$ = [], this.rolleUpObjPool$ = [],
                this.rollUpAnimT$ = 1e3, this.rollUpAnimRotateAngle$ = -900, this.rollUpAnimH$ = 10,
                this.rollUpAnimR$ = 3, this.collisionGroup = B.OBJ_TYPE$.DINOSAUR$, this.name = "Player",
                this.icon = void 0, this.level = 1, this.damageLv = 1, this.growthLv = 1, this.moveSpeedLv = 1,
                this.strikeBackSpeed = 12, this.strikeDuration = 200, this._skin$ = null, this._movingDir$ = new Laya.Vector3(0, 0, 0),
                this._moveToDirection$ = null, this._isStriking$ = !1, this._strikingCurrentMovingSpeed$ = new Laya.Vector3(),
                this._prevLvExp$ = 0, this._nextLvExp$ = 1, this._growth$ = 1, this._isSpeedUpStart$ = !1,
                this._isPlayer$ = !1, this._rotDinosaur$ = null, this._exp$ = 0, this._isDied$ = !1,
                this._skinId$ = "", this._damage$ = 1, this._dinosaurScale$ = 1, this._colW$ = 2,
                this._colL$ = 3, this._colMaxR$ = Math.sqrt(this._colW$ * this._colW$ + this._colL$ * this._colL$);
        }
        get isPlayer() {
            return this._isPlayer$;
        }
        get nameLabelRef() {
            return this._nameLabelRef;
        }
        get rotDinosaur() {
            return this._rotDinosaur$;
        }
        set rotDinosaur(e) {
            this._rotDinosaur$ = e;
        }
        get exp() {
            return this._exp$;
        }
        set exp(e) {
            this._exp$ = e, this.updateProperty(!1);
        }
        get isDied() {
            return this._isDied$;
        }
        get skinId() {
            return this._skinId$;
        }
        get damage() {
            return this._damage$;
        }
        get enemyDetector() {
            return this._enemyDetector;
        }
        get dinosaurScale$() {
            return this._dinosaurScale$;
        }
        get collisionRadius() {
            return 2 * this.dinosaurScale$;
        }
        static spawnDinosaur(e, t) {
            this._prototype ? this._prototype._cloneDinosaurFromPrototype$(e, t) : Laya.MeshSprite3D.load(get3DResourcePath$("DinoNode.lh"), Laya.Handler.create(this, i => {
                this._prototype = i.addComponent(zi), this._prototype._cloneDinosaurFromPrototype$(e, t);
            }));
        }
        setIsPlayer() {
            this._isPlayer$ = !0;
        }
        setRotDinosaur(e) {
            this._isPlayer$ = !1, this._rotDinosaur$ = e;
        }
        setPropertyLevels(e, t, i, s) {
            this.level = e, this.damageLv = t, this.growthLv = i, this.updateGrowth(), this.moveSpeedLv = s,
                this._exp$ = this.getExp(e - 1), this._prevLvExp$ = this._exp$, this._nextLvExp$ = this.getExp(e),
                this.updateProperty(!1);
        }
        updateProperty(e) {
            this.updateGrowth(), this._updateScaleByLevel$(e), this._updateMovingSpeed$(), this._updateDamage$();
        }
        onAwake() {
            this._moveToDirection$ = this.owner.addComponent(Gi), this._moveToDirection$.duration$ = -1,
                this._moveToDirection$.enabled = !1, this._moveToDirection$.enableLerpTurn$ = !0,
                this._moveToDirection$.enableLerpMoving$ = !0, this._updateMovingSpeed$(), this.setupChildren();
        }
        setupChildren() {
            this._crown$ = this.owner.getChildByName("Crown") || this.owner.addChild(new Laya.Sprite3D()),
                this._playerCircle$ = this.owner.getChildByName("PlayerCircle") || this.owner.addChild(new Laya.Sprite3D()),
                this._enemyDetector = this.owner.getChildByName("EnemyDetector") || this.owner.addChild(new Laya.Sprite3D()),
                this._nameLabelRef = this.owner.getChildByName("NameLabelRef") || this.owner.addChild(new Laya.Sprite3D()),
                this._enemyDetector.addComponent(Ri).dinosaur = this;
        }
        onStart() {
            this.setupSkin();
        }
        death() {
            this._isDied$ || (this.showCrown(!1), this._moveToDirection$.enabled = !1, this._rotDinosaur$ && (this._rotDinosaur$.enabled = !1),
                this._isDied$ = !0, this.stopRollUps$(), this.owner.timerOnce(100, this, () => {
                    this.isPlayer ? this.owner.active = !1 : this.owner.destroy(!0);
                }));
        }
        setMovingDirection(e) {
            this._isStriking$ || (this._moveToDirection$.enabled = !0), Laya.Vector3.normalize(e, this._movingDir$),
                this._moveToDirection$.movingDirection$ = this._movingDir$;
        }
        strikeBack(e) {
            if (!this._isStriking$) {
                if (this.owner.transform.getForward(Wi), e) {
                    let t = this.owner.transform.position,
                        i = new Laya.Vector3();
                    Laya.Vector3.subtract(e.owner.transform.position, t, i);
                    let s = new Laya.Vector3();
                    if (Laya.Vector3.scale(Wi, -1, s), Laya.Vector3.dot(i, s) < 0) return;
                }
                Laya.Vector3.scale(Wi, this.strikeBackSpeed, this._strikingCurrentMovingSpeed$),
                    this._isStriking$ = !0, this._moveToDirection$.enabled = !1, this._isPlayer$ && pgdk$.shakePhone$(!1),
                    this.owner.timerOnce(this.strikeDuration, this, () => {
                        this._isStriking$ = !1, this._moveToDirection$.enabled = !0;
                    });
            }
        }
        rollUp$(e, t) {
            let i = e.transform,
                s = i.position.clone(),
                a = i.getWorldLossyScale().clone();
            e.removeSelf();
            let n = this.rolleUpObjPool$.shift();
            n ? (n.transform.localPosition = new Laya.Vector3(0, 0, 0), n.transform.localRotationEuler = new Laya.Vector3(0, 0, 0),
                    n.transform.localScale = new Laya.Vector3(1, 1, 1)) : n = this.owner.addChild(new Laya.Sprite3D()),
                n.addChild(e), i.position = s;
            let o = i.localPosition,
                r = new Laya.Vector3();
            Laya.Vector3.normalize(o, r), i.rotationEuler = new Laya.Vector3(360 * Math.random(), 360 * Math.random(), 360 * Math.random()),
                i.setWorldLossyScale(a), n.rollT$ = 0, n.dir$ = r, n._spr$ = e, this.rollUpSprs$.push(n),
                this.rollUpCallbacks$.push(t);
        }
        stopRollUps$() {
            let e, t = this.rollUpCallbacks$.length;
            for (; --t > -1;)(e = this.rollUpCallbacks$[t]) && e();
            this.rollUpSprs$.length = this.rollUpCallbacks$.length = 0;
        }
        refreshRollUpAnims$() {
            let e, t, i, s, a, n, o = this.rollUpSprs$.length;
            if (0 == o) return;
            let r = j.getInstance$().deltaTime$;
            for (; --o > -1;) {
                (e = this.rollUpSprs$[o]).rollT$ += r;
                let $ = Math.min(1, e.rollT$ / this.rollUpAnimT$),
                    h = $;
                if ((i = (t = e.transform).localRotationEuler).y = h * this.rollUpAnimRotateAngle$,
                    t.localRotationEuler = i, (n = t.localScale).x = n.y = n.z = h > .9 ? 1 - 10 * (h - .9) : .5 + 7 * (.9 - h) / 9,
                    t.localScale = n, a = e._spr$.transform.localPosition, Laya.Vector3.scale(e.dir$, h * this.rollUpAnimR$ / n.x, a),
                    e._spr$.transform.localPosition = a, (s = t.localPosition).y = h * this.rollUpAnimH$,
                    t.localPosition = s, 1 == $) {
                    this.rolleUpObjPool$.push(e), this.rollUpSprs$.splice(o, 1);
                    let t = this.rollUpCallbacks$.splice(o, 1)[0];
                    t && t();
                }
            }
        }
        onUpdate() {
            if (this._isDied$ || curScene.isPaused) this._moveToDirection$.enabled = !1;
            else {
                if (this._moveToDirection$.enabled = !0, this._isStriking$) {
                    let e = Math.min(.001 * Laya.timer.delta, 1 / 30);
                    this._strikingBackMove$(e);
                }
                this._updateCrown$();
            }
            this._updatePlayerCircle$(), this.refreshRollUpAnims$();
        }
        _updateCrown$() {
            if (this._crown$ && this._crown$.active) {
                let e = this._crown$.transform,
                    t = e.rotationEuler;
                t.y -= 2, e.rotationEuler = t;
            }
        }
        _strikingBackMove$(e) {
            let t = this.owner.transform;
            Laya.Vector3.scale(this._strikingCurrentMovingSpeed$, e, Wi), Laya.Vector3.add(t.position, Wi, Wi),
                t.position = Wi;
        }
        onCollision$(e, t, i) {
            if (t) switch (t.collisionGroup) {
                case B.OBJ_TYPE$.HOUSE$:
                case B.OBJ_TYPE$.CAR$:
                case B.OBJ_TYPE$.OTHER_DESTROYABLE_OBJECT$:
                    break;

                case B.OBJ_TYPE$.HUMAN$:
                    let e = t.owner.getComponent(M);
                    b.dispatchEvent$(B.Event$.HUMAN_KILL$, {
                        dinosaur: this,
                        human: e,
                        bodyData: t
                    });
                    break;

                case B.OBJ_TYPE$.DINOSAUR$:
                    let i = t.owner.getComponent(zi);
                    i && !i._isDied && (this.level === i.level ? this.strikeBack(i) : this.level > i.level && b.dispatchEvent$(B.Event$.DINOSAUR_KILL$, {
                        dinosaur: this,
                        otherDinosaur: i,
                        bodyData: t
                    }));
            }
            this._rotDinosaur$ && this._rotDinosaur$.onCollision$(e, t, i);
        }
        showCrown(e) {
            this._crown$ && (this._crown$.active = e);
        }
        _showPlayerCircle$(e) {
            this._playerCircle$ && (this._playerCircle$.active = e);
        }
        _updatePlayerCircle$() {
            if (this.isPlayer) return;
            if (!curScene.playerDino || curScene.playerDino.isDied) return;
            let e;
            if (e = this.level > curScene.playerDino.level ? "RED" : this.level < curScene.playerDino.level ? "BLUE" : "WHITE",
                this.playerCircleColor$ !== e) {
                this.playerCircleColor$ = e;
                let t = this._playerCircle$.meshRenderer.material;
                switch (e) {
                    case "RED":
                        u.setMaterialColor$(t, .9, .25, 0, 1);
                        break;

                    case "BLUE":
                        u.setMaterialColor$(t, .15, .76, 1, 1);
                        break;

                    case "WHITE":
                        u.setMaterialColor$(t, 1, 1, 1, 1);
                }
            }
        }
        _getPlayerCircleMat$(e) {
            let t;
            switch (e) {
                case "RED":
                    (t = zi.CIRCLE_MAT_RED$) || ((t = this._playerCircle$.meshRenderer.material.clone()).albedoColor = new Laya.Vector4(.9, .25, 0, 1),
                        zi.CIRCLE_MAT_RED$ = t);
                    break;

                case "BLUE":
                    (t = zi.CIRCLE_MAT_BLUE$) || ((t = this._playerCircle$.meshRenderer.material.clone()).albedoColor = new Laya.Vector4(.15, .76, 1, 1),
                        zi.CIRCLE_MAT_BLUE$ = t);
                    break;

                case "WHITE":
                    (t = zi.CIRCLE_MAT_WHITE$) || ((t = this._playerCircle$.meshRenderer.material.clone()).albedoColor = new Laya.Vector4(1, 1, 1, 1),
                        zi.CIRCLE_MAT_WHITE$ = t);
            }
            return t;
        }
        addExp(e) {
            this._exp$ += e, this._exp$ >= this._nextLvExp$ && this.incLevel(), this.dispatchExp();
        }
        incLevel() {
            this.level++, this._updateLevelUp$();
        }
        setLevel(e) {
            this.level = e, this._exp$ = this.getExp(e - 1), this._prevLvExp$ = this._exp$,
                this._nextLvExp$ = this.getExp(e), this.dispatchExp(), this._updateLevelUp$();
        }
        setSpeedUpStart() {
            this._isSpeedUpStart$ = !0, this._updateMovingSpeed$();
        }
        dispatchExp() {
            if (b.dispatchEvent$(B.Event$.DINOSAUR_EXP_CHANGED$, this), this._isPlayer$) {
                let e = {
                    exp: this._exp$,
                    nextLvExp: this._nextLvExp$,
                    prevLvExp: this._prevLvExp$
                };
                b.dispatchEvent$(B.Event$.PLAYER_EXP_CHANGED$, e);
            }
        }
        _cloneDinosaurFromPrototype$(e, t) {
            let i = this.owner,
                s = Laya.Sprite3D.instantiate(i, null, !0, i.transform.position, i.transform.rotation).getComponent(zi);
            s._skinId$ = e, et.spawnSkin$(e, e => {
                s.setSkin(e), t(s);
            });
        }
        setSkin(e) {
            this._skin$ && (this._skin$.owner.removeSelf(), this._skin$ = null), this._skin$ = e;
        }
        setupSkin() {
            this._skin$ && this._skin$.owner.parent !== this.owner && this.owner.addChild(this._skin$.owner);
            let e = this._skin$.owner,
                t = pe.getChildDeep$(e, "Main");
            t && (t.active = !1);
        }
        _updateScaleByLevel$(e) {
            let t = .3 * (this.level - 1) + 1,
                i = this.owner.transform;
            e ? (Laya.Tween.clearAll(i), Laya.Tween.to(i, {
                localScaleX: t,
                localScaleY: t,
                localScaleZ: t
            }, 500)) : i.localScale = new Laya.Vector3(t, t, t), this._dinosaurScale$ = t;
        }
        getExp(e) {
            return e <= 0 ? 0 : Math.round(15 * e * e + 45 * e / this._growth$ - 20);
        }
        _updateLevelUp$() {
            this._prevLvExp$ = this.getExp(this.level - 1), this._nextLvExp$ = this.getExp(this.level),
                this._updateScaleByLevel$(!0), this._updateMovingSpeed$(), this._updateDamage$();
            let e = this.owner.transform;
            e.position.cloneTo(Wi), Wi.y = 2;
            let t = e.getWorldLossyScale().clone();
            Laya.Vector3.scale(t, 2, t), this.isPlayer && Laya.CyzClassMap$.BattleScene.isPointInCamera(Wi) && y.showLevelUpParticle$(this.owner.scene, Wi, t),
                b.dispatchEvent$(B.Event$.DINOSAUR_LEVEL_UP$, this);
        }
        _updateMovingSpeed$() {
            let e = te.getUpgradePropertyFactors$();
            if (this._moveToDirection$) {
                let t = this.moveSpeedLv * e.speed,
                    i = (te.getMoveSpeedBase$() + t) * this.owner.transform.getWorldLossyScale().x;
                i *= this._skin$.skinProperty.speed, this._isSpeedUpStart$ && (i *= 1.2), this._moveToDirection$.moveSpeed$ = i;
            }
        }
        _updateDamage$() {
            let e = te.getUpgradePropertyFactors$(),
                t = te.getDamageBase$();
            t += (this.level - 1) * e.damagePerLv, t += (this.damageLv - 1) * e.damage, t *= this._skin$.skinProperty.damage,
                t /= 2, this._damage$ = t;
        }
        updateGrowth() {
            let e = te.getUpgradePropertyFactors$(),
                t = this.growthLv - 1;
            this._growth$ = e.growth * t + 1;
        }
    }
    zi._prototype = null;
    class Fi extends Laya.Script3D {
        constructor() {
            super(), this._curFollowOffset$ = new Laya.Vector3(0, 60, -30), this.followOffset = new Laya.Vector3(0, 60, -30),
                this.enableLookAt = !0, this.enableFollow = !0, this.followLerpSpeed = 6, this._camera = null,
                this._lookAtTarget = null, this._followTarget = null, this._offset = new Laya.Vector3(),
                this._newPos = new Laya.Vector3();
        }
        init(e, t, i) {
            this._camera = e, this._followTarget = t, this._lookAtTarget = i, this.doUpdate(!1);
        }
        setFollowOffset$(e, t, i, s) {
            this.followOffset.x = e, this.followOffset.y = t, this.followOffset.z = i, s || (this._curFollowOffset$.x = e,
                this._curFollowOffset$.y = t, this._curFollowOffset$.z = i);
        }
        onLateUpdate() {
            this.doUpdate();
        }
        doUpdate(e = !0) {
            if (this._camera && this._followTarget && this._lookAtTarget) {
                let t = Laya.timer.delta / 1e3;
                Math.abs(this.followOffset.x - this._curFollowOffset$.x) > .1 && (this._curFollowOffset$.x += .05 * (this.followOffset.x - this._curFollowOffset$.x > 0 ? 1 : -1)),
                    Math.abs(this.followOffset.y - this._curFollowOffset$.y) > .1 && (this._curFollowOffset$.y += .05 * (this.followOffset.y - this._curFollowOffset$.y > 0 ? 1 : -1)),
                    Math.abs(this.followOffset.z - this._curFollowOffset$.z) > .1 && (this._curFollowOffset$.z += .05 * (this.followOffset.z - this._curFollowOffset$.z > 0 ? 1 : -1)),
                    this.enableFollow && (Laya.Vector3.subtract(this._followTarget.position, this._lookAtTarget.position, this._offset),
                        Laya.Vector3.normalize(this._offset, this._offset), Laya.Vector3.scale(this._offset, this._curFollowOffset$.z, this._offset),
                        Laya.Vector3.add(this._offset, this._curFollowOffset$, this._offset), Laya.Vector3.add(this._offset, this._followTarget.position, this._newPos),
                        e && Laya.Vector3.lerp(this._camera.position, this._newPos, t * this.followLerpSpeed, this._newPos),
                        this._camera.position = this._newPos), this.enableLookAt && this._camera.lookAt(this._lookAtTarget.position, C.UnitY$);
            }
        }
    }
    var Yi = new Laya.Vector3();
    class Ki extends Laya.Script3D {
        constructor() {
            super(), this._dinosaur$ = null, this._camera$ = null;
        }
        init(e, t) {
            this._camera$ = e, this._dinosaur$ = t;
        }
        onEnable() {
            b.registerEvent$(B.JoyStick$.DOWN$, this._onMouseDown$, this), b.registerEvent$(B.JoyStick$.UP$, this._onMouseUp$, this),
                b.registerEvent$(B.JoyStick$.DIRECTION_CHANGE$, this._onMouseMove$, this);
        }
        onDisable() {
            b.releaseAllEvents$(this);
        }
        _onMouseDown$() {}
        _onMouseUp$() {}
        _onMouseMove$(e) {
            if (this._canMove$()) {
                let t = e.getDirection();
                Yi.setValue(t.x, 0, -t.y), this._dinosaur$.setMovingDirection(Yi);
            }
        }
        _canMove$() {
            return !curScene.isPaused && !!this._dinosaur$ && !this._dinosaur$.isDied;
        }
    }
    let ji = 30,
        qi = 80,
        Xi = 1,
        Qi = 1600,
        Ji = new Laya.Vector3();
    class Zi extends Laya.Script3D {
        constructor() {
            super(), this._targetPosition = null, this._hitDestroyable = 0;
        }
        onAwake() {
            this._dinosaur = this.owner.getComponent(zi), this._dinosaur.setRotDinosaur(this);
        }
        onStart() {}
        _randomTargetPosition$() {
            let e = this.owner.transform,
                t = ji + (qi - ji) * Math.random();
            Ji.setValue(t, 0, 0), C.rotateY$(Ji, new Laya.Vector3(0, 0, 0), toRadian(360 * Math.random()), Ji),
                Laya.Vector3.add(Ji, e.position, Ji), Ji.y = 0, this._targetPosition = Ji.clone();
        }
        _targetToPlayer$() {
            this._targetPosition = curScene.playerDino.owner.transform.position.clone(), this._hitDestroyable = 0;
        }
        _findNewTarget$() {
            let e = !1;
            if (curScene && curScene.playerDino) {
                let t = te.getEnemyLevelCtrl$();
                if (Math.random() < t.toPlayerOdds$) this._dinosaur.level > curScene.playerDino.level && (e = !0);
                else {
                    let t = this.owner.transform.position,
                        i = curScene.playerDino.owner.transform.position;
                    Laya.Vector3.distanceSquared(t, i) > Qi && (e = !0);
                }
            }
            e ? this._targetToPlayer$() : this._randomTargetPosition$(), this._hitDestroyable = 0;
        }
        onUpdate() {
            this.refreshDir$();
        }
        refreshDir$() {
            if (this._dinosaur.isDied || curScene.isPaused) return;
            let e = this.owner.transform.position;
            (!this._targetPosition || Laya.Vector3.distanceSquared(e, this._targetPosition) < Xi) && this._findNewTarget$(),
                Laya.Vector3.subtract(e, this._targetPosition, Ji), this._dinosaur.setMovingDirection(Ji);
        }
        onCollision$(e, t, i) {
            if (t) switch (t.collisionGroup) {
                case B.OBJ_TYPE$.WALL$:
                    this._findNewTarget$();
                    break;

                case B.OBJ_TYPE$.DINOSAUR$:
                    this._randomTargetPosition$();
                    break;

                case B.OBJ_TYPE$.HOUSE$:
                case B.OBJ_TYPE$.CAR$:
                case B.OBJ_TYPE$.OTHER_DESTROYABLE_OBJECT$:
                    let e = t.owner.getComponent(q);
                    (this._hitDestroyable >= 3 || e && e.isToBigger(this._dinosaur)) && this._findNewTarget$(),
                        this._hitDestroyable++;
            }
        }
    }
    class es extends Laya.Script3D {
        constructor() {
            super(), window.cityOptimizer = this, this._hasInit$ = !1, this._xa$ = {}, this._xr$ = {},
                this._za$ = {}, this._zr$ = {};
        }
        _init$() {
            this._hasInit$ || window.curScene && curScene.playerDino && !curScene.playerDino.isDied && curScene.citySpr$ && (this._hasInit$ = !0,
                this._xa$.items$ = [], this._xr$.items$ = [], this._za$.items$ = [], this._zr$.items$ = [],
                this._needRefreshItems$ = [], this._sort$());
        }
        _sort$() {
            let e = curScene.citySpr$.numChildren;
            for (var t = 0; t < e; t++) {
                let e = curScene.citySpr$.getChildAt(t),
                    i = this._getBounds$(e);
                e.minX$ = i.min.x, e.minZ$ = i.min.z, e.maxX$ = i.max.x, e.maxZ$ = i.max.z, e.r$ = Math.sqrt(Math.pow(e.maxX$ - e.minX$, 2) + Math.pow(e.maxZ$ - e.minZ$, 2)),
                    this._xa$.items$.push(e), this._xr$.items$.push(e), this._za$.items$.push(e), this._zr$.items$.push(e),
                    e.showXa$ = !0, e.showXr$ = !0, e.showZa$ = !0, e.showZr$ = !0;
            }
            this._xa$.items$.sort(this._sortXa$), this._xr$.items$.sort(this._sortXr$), this._za$.items$.sort(this._sortZa$),
                this._zr$.items$.sort(this._sortZr$), this._xa$.index$ = 0, this._xr$.index$ = 0,
                this._za$.index$ = 0, this._zr$.index$ = 0;
        }
        _sortXa$(e, t) {
            return e.minX$ - t.minX$;
        }
        _sortXr$(e, t) {
            return e.maxX$ - t.maxX$;
        }
        _sortZa$(e, t) {
            return e.minZ$ - t.minZ$;
        }
        _sortZr$(e, t) {
            return e.maxZ$ - t.maxZ$;
        }
        _getBounds$(e, t) {
            t || (t = {
                min: new Laya.Vector3(999999999, 999999999, 999999999),
                max: new Laya.Vector3(-999999999, -999999999, -999999999)
            }), e.meshRenderer && this._updateBounds$(t, e.meshRenderer.bounds);
            for (var i = 0; i < e.numChildren; i++) this._getBounds$(e.getChildAt(i), t);
            return t;
        }
        _updateBounds$(e, t) {
            e.min.x = Math.min(t._boundBox.min.x, e.min.x), e.min.y = Math.min(t._boundBox.min.y, e.min.y),
                e.min.z = Math.min(t._boundBox.min.z, e.min.z), e.max.x = Math.max(t._boundBox.max.x, e.max.x),
                e.max.y = Math.max(t._boundBox.max.y, e.max.y), e.max.z = Math.max(t._boundBox.max.z, e.max.z);
        }
        onUpdate() {
            if (this._init$(), !this._hasInit$) return;
            if (!curScene.playerDino || curScene.playerDino.isDied || !curScene.itemCache$) return;
            let e, t = curScene.playerDino.cameraScale$,
                i = curScene.playerDino.owner.transform.localPosition,
                s = i.x - 15 * t,
                a = i.x + 15 * t,
                n = i.z - 20 * t,
                o = i.z + 40 * t,
                r = this._xa$,
                $ = r.items$;
            for (;;) {
                let e = $[r.index$];
                if (!(e && e.minX$ < a)) {
                    if (e && e.minX$ > a && e.showXa$) {
                        e.showXa$ = !1, this._addRefreshSpr$(e);
                        let t = r.index$ + 1;
                        for (e = $[t]; e && e.minX$ > a && e.showXa$;) e.showXa$ = !1, this._addRefreshSpr$(e),
                            e = $[++t];
                        break;
                    }
                    break;
                }
                e.showXa$ = !0, r.index$++, this._addRefreshSpr$(e);
            }
            for (;;) {
                let e = $[r.index$];
                if (!(e && e.minX$ > a)) {
                    if (e && e.minX$ < a && !e.showXa$) {
                        e.showXa$ = !0, this._addRefreshSpr$(e);
                        let t = r.index$ - 1;
                        for (e = $[t]; e && e.minX$ < a && !e.showXa$;) e.showXa$ = !0, this._addRefreshSpr$(e),
                            e = $[--t];
                        break;
                    }
                    break;
                }
                e.showXa$ = !1, r.index$--, this._addRefreshSpr$(e);
            }
            for (r.index$ = Math.min(Math.max(0, r.index$), $.length - 1), $ = (r = this._xr$).items$;;) {
                let e = $[r.index$];
                if (!(e && e.maxX$ < s)) {
                    if (e && e.maxX$ > s && !e.showXr$) {
                        e.showXr$ = !0, this._addRefreshSpr$(e);
                        let t = r.index$ + 1;
                        for (e = $[t]; e && e.maxX$ > s && e.showXr$;) e.showXr$ = !0, this._addRefreshSpr$(e),
                            e = $[++t];
                        break;
                    }
                    break;
                }
                e.showXr$ = !1, r.index$++, this._addRefreshSpr$(e);
            }
            for (;;) {
                let e = $[r.index$];
                if (!(e && e.maxX$ > s)) {
                    if (e && e.maxX$ < s && e.showXr$) {
                        e.showXr$ = !1, this._addRefreshSpr$(e);
                        let t = r.index$ - 1;
                        for (e = $[t]; e && e.maxX$ < s && e.showXr$;) e.showXr$ = !1, this._addRefreshSpr$(e),
                            e = $[--t];
                        break;
                    }
                    break;
                }
                e.showXr$ = !0, r.index$--, this._addRefreshSpr$(e);
            }
            for (r.index$ = Math.min(Math.max(0, r.index$), $.length - 1), $ = (r = this._za$).items$;;) {
                let e = $[r.index$];
                if (!(e && e.minZ$ < o)) {
                    if (e && e.minZ$ > o && e.showZa$) {
                        e.showZa$ = !1, this._addRefreshSpr$(e);
                        let t = r.index$ + 1;
                        for (e = $[t]; e && e.minZ$ > o && e.showZa$;) e.showZa$ = !1, this._addRefreshSpr$(e),
                            e = $[++t];
                        break;
                    }
                    break;
                }
                e.showZa$ = !0, r.index$++, this._addRefreshSpr$(e);
            }
            for (;;) {
                let e = $[r.index$];
                if (!(e && e.minZ$ > o)) {
                    if (e && e.minZ$ < a && !e.showZa$) {
                        e.showZa$ = !0, this._addRefreshSpr$(e);
                        let t = r.index$ - 1;
                        for (e = $[t]; e && e.minZ$ < a && !e.showZa$;) e.showZa$ = !0, this._addRefreshSpr$(e),
                            e = $[--t];
                        break;
                    }
                    break;
                }
                e.showZa$ = !1, r.index$--, this._addRefreshSpr$(e);
            }
            for (r.index$ = Math.min(Math.max(0, r.index$), $.length - 1), $ = (r = this._zr$).items$;;) {
                let e = $[r.index$];
                if (!(e && e.maxZ$ < n)) {
                    if (e && e.maxZ$ > n && !e.showZr$) {
                        e.showZr$ = !0, this._addRefreshSpr$(e);
                        let t = r.index$ + 1;
                        for (e = $[t]; e && e.maxZ$ > n && e.showZr$;) e.showZr$ = !0, this._addRefreshSpr$(e),
                            e = $[++t];
                        break;
                    }
                    break;
                }
                e.showZr$ = !1, r.index$++, this._addRefreshSpr$(e);
            }
            for (;;) {
                let e = $[r.index$];
                if (!(e && e.maxZ$ > n)) {
                    if (e && e.maxZ$ < n && e.showZr$) {
                        e.showZr$ = !1, this._addRefreshSpr$(e);
                        let t = r.index$ - 1;
                        for (e = $[t]; e && e.maxZ$ < n && e.showZr$;) e.showZr$ = !1, this._addRefreshSpr$(e),
                            e = $[--t];
                        break;
                    }
                    break;
                }
                e.showZr$ = !0, r.index$--, this._addRefreshSpr$(e);
            }
            for (r.index$ = Math.min(Math.max(0, r.index$), $.length - 1); e = this._needRefreshItems$.shift();) this._updateShow$(e);
        }
        _addRefreshSpr$(e) {
            this._needRefreshItems$.push(e);
        }
        _updateShow$(e) {
            e.active = !!(e.showXa$ && e.showXr$ && e.showZa$ && e.showZr$);
        }
    }
    class ts extends Laya.Script3D {
        onAwake() {
            this._battleData$ = Y.getInstance$().battleData$, Laya.timer.loop(200, this, this.checkHumanCollision$),
                Laya.timer.loop(100, this, this.checkDinoCollision$), Laya.timer.loop(100, this, this.checkHumanAndDinoCollision$),
                Laya.timer.loop(100, this, this.checkDinos$), Laya.timer.loop(100, this, this.checkKeysAndMeats$);
        }
        onDestroy() {
            Laya.timer.clearAll(this);
        }
        _init$() {
            if (this._hasInit$) return !0;
            if (!window.curScene || !curScene.baseScene$ || !curScene.ready$) return !1;
            if (this.walls = r.getChildDeep$(curScene.baseScene$, "Walls"), !this.walls || 0 === this.walls.numChildren) return !1;
            for (let e = this.walls.numChildren - 1; e >= 0; e--) {
                let t = this.walls.getChildAt(e);
                t.addComponent(q).collisionGroup = B.OBJ_TYPE$.WALL$;
                let i = t.transform,
                    s = i.getWorldLossyScale().x,
                    a = i.getWorldLossyScale().z,
                    n = i.position.x,
                    o = i.position.z;
                t.minX$ = n - s / 2, t.maxX$ = n + s / 2, t.minZ$ = o - a / 2, t.maxZ$ = o + a / 2,
                    t.r$ = Math.sqrt(Math.pow(t.maxX$ - t.minX$, 2) + Math.pow(t.maxZ$ - t.minZ$, 2));
            }
            return this._hasInit$ = !0, !0;
        }
        checkHumanCollision$() {
            if (!this._init$()) return;
            if (!window.curScene || curScene.isPaused || !curScene._humans$) return;
            let e, t, i, s, a = curScene._humans$;
            for (let n = a.length - 1; n >= 0; n--) {
                e = a[n];
                let o = !1;
                for (let i = (s = this._battleData$.getBuildsByPos$(e.owner.transform.position, e.collisionRadius)).length - 1; i >= 0; i--)
                    if (t = s[i],
                        this._isHumanCollision$(e, t)) {
                        e.randomWayPoints$(), o = !0;
                        break;
                    }
                for (let t = this.walls.numChildren - 1; t >= 0; t--)
                    if (i = this.walls.getChildAt(t),
                        this._isHumanCollision$(e, i)) {
                        this._extrudeWall$(e, i), e.randomWayPoints$(), o = !0;
                        break;
                    }
            }
        }
        _isHumanCollision$(e, t) {
            let i = t.getComponent(q);
            if (i.collisionGroup !== B.OBJ_TYPE$.WALL$ && i.collisionGroup !== B.OBJ_TYPE$.HOUSE$) return !1;
            let s = e.owner.transform.position,
                a = s.x,
                n = s.z;
            return !(a - 2 > t.maxX$ || a + 2 < t.minX$ || n - 2 > t.maxZ$ || n + 2 < t.minZ$);
        }
        canBorn$(e, t, i) {
            if (!this._init$()) return !0;
            if (!window.curScene || !curScene.ready$) return !0;
            let s, a, n = curScene.destroyableSpr$;
            this.walls = this.walls || r.getChildDeep$(curScene.baseScene$, "Walls");
            for (let a = n.numChildren - 1; a >= 0; a--)
                if (s = n.getChildAt(a), this._isRoleCollision$(e, t, i, s)) return !1;
            for (let s = this.walls.numChildren - 1; s >= 0; s--)
                if (a = this.walls.getChildAt(s),
                    this._isRoleCollision$(e, t, i, a)) return !1;
            return !0;
        }
        _isRoleCollision$(e, t, i, s) {
            let a = s.getComponent(q);
            return (a.collisionGroup === B.OBJ_TYPE$.WALL$ || a.collisionGroup === B.OBJ_TYPE$.HOUSE$) && !(e - i > s.maxX$ || e + i < s.minX$ || t - i > s.maxZ$ || t + i < s.minZ$);
        }
        checkDinoCollision$() {
            if (!this._init$()) return;
            if (!window.curScene || curScene.isPaused || !curScene.dinosaurs) return;
            let e, t, i, s, a, n = curScene.dinosaurs;
            this.walls = this.walls || r.getChildDeep$(curScene.baseScene$, "Walls");
            for (let o = n.length - 1; o >= 0; o--) {
                e = n[o];
                let r = !1;
                for (let s = (a = this._battleData$.getBuildsByPos$(e.owner.transform.position, e.collisionRadius)).length - 1; s >= 0; s--)
                    if (t = a[s],
                        this._isDinoCollision$(e, t)) {
                        i = t.getComponent(q), e.onCollision$(null, i), i.onCollision$(null, e), r = !0;
                        break;
                    }
                if (!r)
                    for (let t = this.walls.numChildren - 1; t >= 0; t--) s = this.walls.getChildAt(t),
                        this._isDinoCollision$(e, s) && (i = s.getComponent(q), e.onCollision$(null, i),
                            this._extrudeWall$(e, s));
            }
        }
        _extrudeWall$(e, t) {
            let i = e.owner.transform,
                s = i.position,
                a = e.collisionRadius || 2,
                n = 0,
                o = 0,
                r = s.x - a,
                $ = s.x + a,
                h = s.z - a,
                l = s.z + a;
            r < t.maxX$ && $ > t.minX$ && (n = t.maxX$ - r < $ - t.minX$ ? t.maxX$ - r : t.minX$ - $),
                h < t.maxZ$ && l > t.minZ$ && (o = t.maxZ$ - h < l - t.minZ$ ? t.maxZ$ - h : t.minZ$ - l),
                Math.abs(n) < Math.abs(o) ? s.x += n : s.z += o, i.position = s;
        }
        _isDinoCollision$(e, t) {
            let i = e.owner.transform.position,
                s = t.transform.position;
            if (Laya.Vector3.distance(s, i) > e.collisionRadius + t.r$) return !1;
            this._tempVertexs$ || (this._tempVertexs$ = [{}, {}, {}, {}]);
            let a = this._tempVertexs$[0];
            return a.x = t.minX$, a.y = t.maxZ$, (a = this._tempVertexs$[1]).x = t.maxX$, a.y = t.maxZ$,
                (a = this._tempVertexs$[2]).x = t.maxX$, a.y = t.minZ$, (a = this._tempVertexs$[3]).x = t.minX$,
                a.y = t.minZ$, !!r.checkCircleBoxCollide$(i.x, i.z, .5 * e.collisionRadius, this._tempVertexs$);
        }
        checkHumanAndDinoCollision$() {
            if (!this._init$()) return;
            if (!window.curScene || curScene.isPaused || !curScene._humans$ || !curScene.dinosaurs) return;
            let e, t, i = curScene._humans$,
                s = curScene.dinosaurs;
            for (let a = i.length - 1; a >= 0; a--) {
                e = i[a];
                for (let i = s.length - 1; i >= 0; i--)
                    if (t = s[i], this._isHumanAndDinoCollision$(e, t)) {
                        t.onCollision$(null, e);
                        break;
                    }
            }
        }
        _isHumanAndDinoCollision$(e, t) {
            let i = e.owner.transform.position,
                s = t.owner.transform.position,
                a = i.x - s.x,
                n = i.z - s.z;
            return Math.sqrt(a * a + n * n) <= t.collisionRadius + e.collisionRadius;
        }
        checkDinos$() {
            if (!this._init$()) return;
            if (!window.curScene || curScene.isPaused || !curScene.dinosaurs) return;
            let e, t, i = curScene.dinosaurs;
            for (let s = i.length - 1; s >= 1; s--) {
                e = i[s];
                for (let a = s - 1; a >= 0; a--)
                    if (t = i[a], this._isDinosCol$(e, t)) {
                        e.onCollision$(null, t), t.onCollision$(null, e);
                        break;
                    }
            }
        }
        _isDinosCol$(e, t) {
            let i = e.owner.transform.position,
                s = t.owner.transform.position,
                a = i.x - s.x,
                n = i.z - s.z;
            return Math.sqrt(a * a + n * n) <= e.collisionRadius + t.collisionRadius;
        }
        checkKeysAndMeats$() {
            if (!this._init$()) return;
            if (!window.curScene || curScene.isPaused || !curScene.dinosaurs || !curScene.keys$ || !curScene.meats$) return;
            let e, t, i, s = curScene.dinosaurs;
            for (let a = s.length - 1; a >= 0; a--) {
                e = s[a];
                for (let i = curScene.keys$.length - 1; i >= 0; i--)
                    if (t = curScene.keys$[i],
                        this._isKeysOrMeatsCol$(e, t)) {
                        t.onCollision$(null, e);
                        break;
                    }
                for (let t = curScene.meats$.length - 1; t >= 0; t--)
                    if (i = curScene.meats$[t],
                        this._isKeysOrMeatsCol$(e, i)) {
                        i.onCollision$(null, e);
                        break;
                    }
            }
        }
        _isKeysOrMeatsCol$(e, t) {
            let i = e.owner.transform.position,
                s = t.owner.transform.position,
                a = i.x - s.x,
                n = i.z - s.z;
            return Math.sqrt(a * a + n * n) < e.collisionRadius + 1;
        }
    }
    var is = 15,
        ss = 15,
        as = 40,
        ns = 5,
        os = new Laya.Vector3();
    class rs extends Ti {
        constructor() {
            super(), window.curScene = this;
        }
        get roundStatistics$() {
            return this._roundStatistics$;
        }
        get pickUpKey() {
            return this._pickUpKey$;
        }
        get camera() {
            return this._camera$;
        }
        get isPaused() {
            return this._isPaused$;
        }
        set isPaused(e) {
            this._isPaused$ = e, e ? b.dispatchEvent$(B.Event$.GAME_PAUSED$) : b.dispatchEvent$(B.Event$.GAME_RESUME$);
        }
        init$() {
            this.initData$(), this.refreshData$(), this.monitorEvents$(), this.preloadModels$(),
                this.initScene$(), Laya.timer.frameLoop(1, this, this.onUpdate);
        }
        preloadModels$() {
            let e = [];
            for (let t in D.PrefabsPath) e.push(Number(t));
            u.prepareLoad$(e);
        }
        initData$() {
            this.cameraArea$ = 1e3, this.battleData$ = Y.getInstance$().battleData$, this.battleData$.battleScene$ = this,
                this.starCtrl$ = void 0, this.customSceneSp$ = void 0, this.customCtr$ = void 0,
                this._resurgenceTimes$ = 0;
        }
        refreshData$() {
            this.playerDino = null, this.cameraRoot$ = null, this.dinosaurs = [], this.keys$ = [],
                this.meats$ = [], this._rotDinosaurInfo$ = [], this._remainSec$ = 90, this._totalSec$ = 90,
                this._playerDiedState$ = null, this._cameraShake$ = null, this._rotDinosaurs$ = [],
                this._humans$ = [], this.icons$ = [];
            let e = 0;
            for (; e < 15;) {
                let t = "tempHead/tempHead_" + Math.floor(44 * Math.random()) + ".jpg"; -
                1 === this.icons$.indexOf(t) && (this.icons$[e] = t, e++);
            }
            this.randomIcons$ = this.icons$.concat(), this._roundStatistics$ = {
                    killDinosaur: 0,
                    destroyBuild: 0,
                    destroyCar: 0,
                    burstTimes: 0
                }, this._pickUpKey$ = 0, this._camera$ = null, this._isPaused$ = !0, this._totalSec$ = te.getTotalRoundSec$(),
                this._remainSec$ = this._totalSec$, this._loadingOjbCnt$ = 0, this._cameraFollowLookAt$ = void 0,
                this._gameControl$ = void 0, this.itemCache$ = [], this.citySpr$ = void 0, this.destroyableSpr$ = void 0,
                this.battleData$.clear$();
        }
        monitorEvents$() {
            this.addEventListener$(c.ON_START_GAME$, this.startFight$), this.addEventListener$(c.FIGHT_FAIL$, this.gameFail$),
                this.addEventListener$(c.REST_FIGHT$, this.resetFight$);
        }
        gameOnshow$() {
            let e = Be.getExitTime$(),
                t = new Date().getTime();
            e || (e = t);
            let i = clamp((t - e) / 1e3, 0, 7200),
                s = Math.round(.5 * i);
            s = Math.min(2e3, s), i < 120 ? (console.log("离线时间较短, 直接保存离线收益到GamePlayerData", i, s.toString()),
                Be.addCoin$(s)) : l.getInstance$().openUI$(Laya.classWithChannel$("offlineAward"));
        }
        onUpdate() {
            if (this._isPaused$) return;
            let e = Laya.timer.delta / 1e3;
            this._remainSec$ -= e, this._remainSec$ < 0 && (this._remainSec$ = 0);
            let t = {
                totalSec: this._totalSec$,
                remainSec: this._remainSec$
            };
            b.dispatchEvent$(B.Event$.ROUND_TIME_CHANGED$, t), 0 === this._remainSec$ && (this._isPaused$ = !0,
                b.dispatchEvent$(B.Event$.ROUND_TIME_OUT$, this.playerDino), Laya.SoundManager.playSound(B.Sound$.FINISH$));
        }
        initLevel$(e) {
            this._bodyHumanLayer$ = this.baseScene$.addChild(new Laya.Sprite3D()), this._bodyHumanLayer$.name = "BoyHumanLayer",
                this._girlHumanLayer$ = this.baseScene$.addChild(new Laya.Sprite3D()), this._girlHumanLayer$.name = "GirHumanLayer",
                this._spawnPointsNode$ = this._getPositionListByName$("SpawnPoint"), this._setupCamera$(),
                this._addOcean$(), this._spawnPlayerDinosaur$(function() {
                    this._createHumans$(), this._prepareRotDinosaurInfo$(), this._spawnRotDinosaurs$(),
                        this._spawnKeyAndMeat$(), this._updateRankList$(), e && e();
                }.bind(this)), this.ready$ = !0;
        }
        _addOcean$() {
            let e = u.create$(this.baseScene$, 1027);
            e.setLocalPosition$(0, -4, 0), e.setLocalScale$(45, 1, 45);
        }
        _spawnKeyAndMeat$() {
            let e = this._getPositionListByName$("KeyMeatSpawnPoint");
            for (let t = 0; t < te.getKeyCountPerRound$(); t++) {
                let t = ee.randomElementFromArray$(e, !0);
                this._spawnKeyToPosition$(t);
            }
            for (let t = 0; t < te.getMeatCountPerRound$(); t++) {
                let t = ee.randomElementFromArray$(e, !0);
                this._spawnMeatToPosition$(t);
            }
        }
        _spawnKeyToPosition$(e) {
            let t = N.spawn$();
            t.owner.transform.position = e, this.baseScene$.addChild(t.owner), this.keys$.push(t);
        }
        _spawnMeatToPosition$(e) {
            let t, i = 1,
                s = U.spawn(),
                a = s.owner.transform;
            e.y = 3, a.position = e;
            let n = Math.random();
            n < .5 ? (t = 1, s.setExp(100)) : n >= .5 && n < .8 ? (t = 2, i = 1.5, s.setExp(200)) : (t = 3,
                    i = 2, s.setExp(300)), i *= 4.5, a.setWorldLossyScale(new Laya.Vector3(i, i, i)),
                this.baseScene$.addChild(s.owner), this.meats$.push(s);
        }
        getRandomIcon$() {
            return ee.randomElementFromArray$(this.randomIcons$, !0);
        }
        _prepareRotDinosaurInfo$() {
            let e = B.nicknames$.concat();
            for (let t = 0; t < 5; t++) {
                let t = ee.randomElementFromArray$(e, !0),
                    i = et.getRandomSkinId$(!0),
                    s = this._getRotDinosaurLevelWithPlayerCurrentLevel$(),
                    a = this._getRotDinosaurDamageLv$(),
                    n = this._getRotDinosaurGrowthLv$(),
                    o = this._getRotDinosaurSpeedLv$(),
                    r = this.getRandomIcon$();
                this._rotDinosaurInfo$.push({
                    nickname: t,
                    skinId: i,
                    level: s,
                    icon: r,
                    damageLv: a,
                    growthLv: n,
                    moveSpeedLv: o
                });
            }
        }
        _spawnRotDinosaurs$() {
            if (this.isPaused) return;
            if (!this.playerDino || this.playerDino.isDied) return;
            let e = this.playerDino.owner.transform.position,
                t = [];
            for (let i = 0; i < this._spawnPointsNode$.length; i++) {
                let s = this._spawnPointsNode$[i];
                Laya.Vector3.distanceSquared(e, s) > 900 && t.push(s);
            }
            let i = this._rotDinosaurInfo$.length;
            if ((i = Math.min(i, t.length)) > 0) {
                for (let e = 0; e < i; e++) {
                    let e = ee.randomElementFromArray$(t, !0),
                        i = this._rotDinosaurInfo$[0];
                    this._rotDinosaurInfo$.splice(0, 1), this._spawnRotDinosaurToPosition$(i, e, function() {}.bind(this));
                }
                this._updateRankList$();
            }
        }
        _spawnRotDinosaurToPosition$(e, t, i) {
            this._spawnDinosaurToPosition$(e.skinId, t, t => {
                t.owner.addComponent(Zi);
                let s = e.level,
                    a = te.getEnemyLevelCtrl$();
                Math.random() < a.resetLevelOdds$ && (s = this._getRotDinosaurLevelWithPlayerCurrentLevel$()),
                    t.setPropertyLevels(s, e.damageLv, e.growthLv, e.moveSpeedLv), t.name = e.nickname,
                    t.icon = e.icon, this._rotDinosaurs$.push(t), b.dispatchEvent$(B.Event$.ADD_DINOSAUR_TO_SCENE$, t),
                    i(t);
            });
        }
        _updateRankList$() {
            b.dispatchEvent$(B.Event$.RANK_LIST_CHANGED$, this._getRankListData$());
        }
        _getRankListData$() {
            let e = [];
            for (let t = 0, i = this._rotDinosaurs$.length; t < i; t++) {
                let i = this._rotDinosaurs$[t];
                e.push({
                    name: i.name,
                    isDied: i.isDied,
                    weight: i.exp,
                    isPlayer: !1,
                    dinosaur: i
                });
            }
            if (this.playerDino) e.push({
                name: this.playerDino.name,
                isDied: this.playerDino.isDied,
                weight: this.playerDino.exp,
                isPlayer: !0,
                dinosaur: this.playerDino
            });
            else if (this._playerDiedState$) {
                let t = this._playerDiedState$.dinosaur;
                e.push({
                    name: t.name,
                    isDied: t.isDied,
                    weight: t.exp,
                    isPlayer: !0,
                    dinosaur: t
                });
            }
            e.sort((e, t) => e.isDied && t.isDied ? t.weight - e.weight : e.isDied ? 1 : t.isDied ? -1 : t.weight - e.weight);
            for (let t = 0; t < e.length; t++) {
                let i = e[t].dinosaur;
                i && i.showCrown(0 == t);
            }
            let t = [],
                i = !1;
            for (let s = 0; s < 3; s++) {
                let a = e[s];
                if (!a) break;
                a.isPlayer && (i = !0), t.push({
                    rank: s + 1,
                    name: a.name,
                    weight: a.weight,
                    isDied: a.isDied,
                    isPlayer: a.isPlayer
                });
            }
            if (!i || t.length < 4)
                for (let s = 3; s < e.length; s++) {
                    let a = e[s];
                    if (!a) break;
                    let n = !1;
                    if (i ? n = !0 : a.isPlayer && (n = !0), n && t.push({
                            rank: s + 1,
                            name: a.name,
                            weight: a.weight,
                            isDied: a.isDied,
                            isPlayer: a.isPlayer
                        }), t.length >= 4) break;
                }
            return t;
        }
        _getRotDinosaurLevelWithPlayerCurrentLevel$() {
            if (!this.playerDino) return 1;
            let e, t = this.playerDino.level,
                i = te.getEnemyLevelCtrl$(),
                s = i.lessThenWeight$ + i.greatThenWeight$;
            return Math.random() * s <= i.lessThenWeight$ ? (e = t - Math.floor(i.maxLessThenPlayerLv$ * Math.random())) < 1 && (e = 1) : e = t + Math.floor(i.maxGreatThenPlayerLv$ * Math.random()),
                e;
        }
        _getRotDinosaurDamageLv$() {
            if (!this.playerDino) return 1;
            let e, t = Be.getDamageLevel$(),
                i = te.getEnemyLevelCtrl$();
            return (e = t - Math.floor(i.maxLessThenDamageLv$ * Math.random())) < 1 && (e = 1),
                e;
        }
        _getRotDinosaurSpeedLv$() {
            if (!this.playerDino) return 1;
            let e, t = Be.getMoveSpeedLevel$(),
                i = te.getEnemyLevelCtrl$();
            return (e = t - Math.floor(i.maxLessThenSpeedLv$ * Math.random())) < 1 && (e = 1),
                e;
        }
        _getRotDinosaurGrowthLv$() {
            if (!this.playerDino) return 1;
            let e, t = Be.getGrowthLevel$(),
                i = te.getEnemyLevelCtrl$();
            return (e = t - Math.floor(i.maxLessThenGrowthLv$ * Math.random())) < 1 && (e = 1),
                e;
        }
        _getPositionListByName$(e) {
            let t = this.cityData$[e],
                i = [];
            for (let e = 0; e < t.length; e += 3) i.push(new Laya.Vector3(t[e], t[e + 1], t[e + 2]));
            return i;
        }
        _spawnPlayerDinosaur$(e) {
            this._playerSkinId = Be.getTryUseSkinId$() || Be.getUsingSkinId$();
            let t = fe.getItem("SkinTrial", null);
            t && (console.log("发现皮肤试用"), fe.removeItem("SkinTrial"), this._playerSkinId = t);
            let i = [];
            for (let e = 0; e < this._spawnPointsNode$.length; e++) i.push(this._spawnPointsNode$[e]);
            this._spawnDinosaurFromRandomSpawnPoints$(i, t => {
                this.playerDino = t, t.setIsPlayer(), t.setPropertyLevels(1 + (fe.getItem("LargerStart", !1) ? 1 : 0), Be.getDamageLevel$(), Be.getGrowthLevel$(), Be.getMoveSpeedLevel$()),
                    fe.setItem("LargerStart", !1), this._setupCameraFollowLookAt$(t), this._setupGameControl$(t),
                    t.name = "Player", b.dispatchEvent$(B.Event$.ADD_DINOSAUR_TO_SCENE$, t), e(t);
            });
        }
        _setupGameControl$(e) {
            this._gameControl$ || (this._gameControl$ = this.baseScene$.addComponent(Ki)), this._gameControl$.init(this.cameraRoot$.transform, e);
        }
        _spawnDinosaurFromRandomSpawnPoints$(e, t) {
            let i = ee.randomElementFromArray$(e, !0);
            this._spawnDinosaurToPosition$(this._playerSkinId, i, e => {
                t(e);
            });
        }
        _spawnDinosaurToPosition$(e, t, i) {
            zi.spawnDinosaur(e, e => {
                this.baseScene$.addChild(e.owner), e.owner.transform.position = t, this.dinosaurs.push(e),
                    i(e);
            });
        }
        _setupCameraFollowLookAt$(e) {
            this._cameraFollowLookAt$ || (this._cameraFollowLookAt$ = e.owner.addComponent(Fi));
            let t = e.owner.transform;
            this._cameraFollowLookAt$.enableLookAt = !1, this._cameraFollowLookAt$.init(this.cameraRoot$.transform, t, t),
                this._updateCameraFollowLookAtOffset$();
        }
        _updateCameraFollowLookAtOffset$(e = !1) {
            if (!this.playerDino) return;
            let t = 30;
            this.playerDino.cameraScale$ = [1.2, 1.2, 1.47, 1.713, 1.93, 2.127, 2.3, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5][this.playerDino.level];
            let i = -(t *= this.playerDino.cameraScale$) / 2;
            this._cameraFollowLookAt$.setFollowOffset$(0, t, i, e);
        }
        _setupCamera$() {
            this.cameraRoot$ = new Laya.Sprite3D(), this.cameraRoot$.name = "MainCameraRoot",
                this.baseScene$.addChild(this.cameraRoot$), this._camera$ = new Laya.Camera(0, .1, this.cameraArea$),
                this._camera$.name = "Main Camera", this._camera$.transform.rotationEuler = new Laya.Vector3(-60, 180, 0),
                this._camera$.transform.localPosition = new Laya.Vector3(0, 0, 0), window.camera = this._camera$,
                this.cameraRoot$.addChild(this._camera$), this._cameraShake$ = this._camera$.addComponent(Ui),
                Laya.Browser.onPC && this._camera$.addComponent(Mi);
        }
        initScene$() {
            this.rootScene$ = this.addChild(new Laya.Scene3D()), this.rootScene$.ambientColor = new Laya.Vector3(.8, .8, .8);
            var e = new Laya.DirectionLight();
            e.color = new Laya.Vector3(.4, .4, .4), this.directionLight = e, e.transform.rotationEuler = new Laya.Vector3(300, 0, 0),
                this.rootScene$.addChild(e), window.directionLight = e;
        }
        startFight$(e) {
            l.getInstance$().openUI$(Laya.classWithChannel$("BattleUI")), this.resetFight$();
        }
        _goHomeScene$() {
            b.dispatchEvent$(B.Event$.SHOW_HOME_VIEW$);
        }
        _onPlayerDied$(e) {
            this._resurgenceTimes$ <= 1 ? this._showResurgence$(e) : this._showSettlement$(e);
        }
        _showResurgence$(e) {
            b.dispatchEvent$(B.Event$.SHOW_RESURGENCE_VIEW$, this._getSettlementData$(e));
        }
        _showSettlement$(e) {
            b.dispatchEvent$(B.Event$.SHOW_SETTLEMENT_VIEW$, this._getSettlementData$(e));
        }
        _onRoundTimeOut$(e) {
            b.dispatchEvent$(B.Event$.SHOW_SETTLEMENT_VIEW$, this._getSettlementData$(e));
        }
        _getSettlementData$(e) {
            return {
                roundStatistics$: curScene.roundStatistics$,
                exp: Math.round(e.exp),
                pickUpCoin: Math.round(e.exp / 2),
                rank: curScene._getPlayerRank$(),
                playerLevel: e.level,
                pickUpKey: curScene.pickUpKey
            };
        }
        _getPlayerRank$() {
            let e = this._getRankListData$();
            for (let t = 0; t < e.length; t++) {
                let i = e[t];
                if (i.isPlayer) return i.rank;
            }
            return ns;
        }
        _onStartPlayingLevel$() {
            this._isPaused$ = !1, this.baseScene$.timerLoop(2500, this, this._createHumans$),
                this.baseScene$.timerLoop(3e3, this, this._spawnRotDinosaurs$), this.baseScene$.timerLoop(200, this, this._checkOutOfHumansAndRotDinosaurs$);
        }
        _createHumans$() {
            let e = 15 - this._humans$.length;
            e = clamp(e, 0, 5);
            for (let t = 0; t < e; t++) this.spawnHumanRoundPlayer();
        }
        spawnHumanRoundPlayer() {
            if (this.playerDino) {
                let e = this.getRoundPlayerPosition$();
                e && this.randomSpawnHuman$(e);
            }
        }
        getRoundPlayerPosition$() {
            if (!this.playerDino) return null;
            let e = this.playerDino.owner.transform;
            for (let t = 0; t < 10; t++) {
                let t = r.getRoundPosition$(e.position, ss, as);
                if (t && this.canBorn$(t.x, t.z, 1.5)) return t;
            }
            return null;
        }
        randomSpawnHuman$(e) {
            let t, i, s;
            Math.random() < .5 ? ((i = O.spawnBoy$()).score$ = 2, t = this._bodyHumanLayer$,
                    s = .8) : ((i = O.spawnGirl$()).score$ = 4, t = this._girlHumanLayer$, s = .8),
                t.addChild(i.owner), i.collisionRadius = s, i.owner.transform.position = e, this._humans$.push(i);
        }
        resetFight$() {
            this.refreshData$(), this.createFightScene$();
        }
        createFightScene$() {
            this.baseScene$ && this.baseScene$.destroy(), this.baseScene$ = this.rootScene$.addChild(new Laya.Sprite3D()),
                this.cameraCtr$ && this.cameraCtr$.destroy(), this.cameraCtr$ = void 0, this.loadCity$(),
                this.citySpr$ = this.baseScene$.addChild(new Laya.Sprite3D()), this.destroyableSpr$ = this.baseScene$.addChild(new Laya.Sprite3D()),
                this.baseScene$.addComponent(es), this.baseScene$.addComponent(K), this.cityCollisions$ = this.baseScene$.addComponent(ts);
        }
        loadCity$() {
            console.log("开始游戏"), l.getInstance$().openUI$(Laya.classWithChannel$("BattleLoadingUI")),
                Laya.loader.create("mapData/city.json", Laya.Handler.create(this, this._onCityDataLoaded$), void 0, Laya.Loader.JSON);
        }
        _onCityDataLoaded$(e) {
            this.cityData$ = e;
        }
        _checkCityReady$() {
            0 === this._loadingOjbCnt$ && this.onCityLoaded$();
        }
        onCityLoaded$() {
            console.log("结束加载", new Date()), this.timer.clear(this, this._checkCityReady$),
                this.initLevel$(function() {
                    b.dispatchEvent$(B.Event$.LEVEL_READY$), curScene.startPlaying();
                }.bind(this)), this._onStartPlayingLevel$();
        }
        delayStartPlaying(e) {
            this.timerOnce(e, this, function() {
                curScene.startPlaying();
            }.bind(this));
        }
        startPlaying() {
            this.isPaused = !1, b.dispatchEvent$(B.Event$.START_PLAYING_LEVEL$);
        }
        _createTrees$(e) {
            let t, i, s, a;
            for (let n = 0, o = e.length; n < o; n += 3) t = e[n], i = e[n + 1], s = e[n + 2],
                (a = u.create$(this.baseScene$, 1001)).setLocalPosition$(t, i, s);
        }
        _createRoad$(e) {
            let t, i, s, a;
            for (let n = 0, o = e.length; n < o; n += 3) t = e[n], i = e[n + 1], s = e[n + 2],
                (a = u.create$(this.baseScene$, 1002)).setLocalPosition$(t, i, s);
        }
        createCamera$() {
            this.cameraCtr$ = Oi.create$(this.baseScene$, this.cameraArea$);
        }
        onLoadingComplete$() {
            this.askOpenMainUI$(this.init$.bind(this));
        }
        askOpenMainUI$(e) {
            l.getInstance$().openUI$(Laya.classWithChannel$("MainUI"), e);
        }
        askOpenWinUI$() {
            l.getInstance$().openUI$(Laya.classWithChannel$("WinUI"));
        }
        gameFail$() {
            if (2 == this.battleData$.fight_state$ || 3 == this.battleData$.fight_state$) return;
            this.battleData$.fight_state$ = 2;
            let e = l.getInstance$().getUI$(Laya.classWithChannel$("BattleUI"));
            e && e.doClose$(), Laya.timer.once(500, this, function() {
                this.askOpenFailUI$();
            });
        }
        askOpenFailUI$() {
            l.getInstance$().openUI$(Laya.classWithChannel$("FailUI"));
        }
        _checkOutOfHumansAndRotDinosaurs$() {
            if (this._isPaused$) return;
            let e = [];
            for (let t = 0, i = this._humans$.length; t < i; t++) {
                let i = this._humans$[t];
                i.stepUpdate() || e.push(i);
            }
            for (let t = 0; t < e.length; t++) {
                let i = e[t],
                    s = this.getRoundPlayerPosition$();
                s && (i.owner.transform.position = s, i.randomWayPoints$());
            }
        }
        onEnable() {
            b.registerEvent$(B.Event$.HUMAN_KILL$, this._onHumanKill$, this), b.registerEvent$(B.Event$.DINOSAUR_KILL$, this._onDinosaurKill$, this),
                b.registerEvent$(B.Event$.DINOSAUR_LEVEL_UP$, this._onDinosaurLevelUp$, this), b.registerEvent$(B.Event$.DESTROY_DESTROYABLE_OBJECT$, this._onDestroyDestroyableObject$, this),
                b.registerEvent$(B.Event$.START_PLAYING_LEVEL$, this._onStartPlayingLevel$, this),
                b.registerEvent$(B.Event$.RESURGENCE$, this._resurgence$, this), b.registerEvent$(B.Event$.QUICK_CLICK_RESURGENCE_SUCCESS$, this._resurgence$, this),
                b.registerEvent$(B.Event$.DINOSAUR_EXP_CHANGED$, this._updateRankList$, this), b.registerEvent$(B.Event$.PICKUP_KEY$, this._onPickKey$, this),
                b.registerEvent$(B.Event$.PICKUP_MEAT$, this._onPickMeat$, this), this.baseScene$ && (this.baseScene$.clearTimer(this, this._createHumans$),
                    this.baseScene$.clearTimer(this, this._spawnRotDinosaurs$), this.baseScene$.clearTimer(this, this._checkOutOfHumansAndRotDinosaurs$)),
                b.registerEvent$(B.Event$.PLAYER_DINOSAUR_KILL$, this._onPlayerDied$, this), b.registerEvent$(B.Event$.ROUND_TIME_OUT$, this._onRoundTimeOut$, this),
                b.registerEvent$(B.Event$.RETRY_LEVEL$, this._goHomeScene$, this), b.registerEvent$(B.Event$.RESURGENCE$, this.onResurgence$, this),
                b.registerEvent$(B.Event$.QUICK_CLICK_BIGGER_SUCCESS$, this.onQuickClickBiggerSuccess, this);
        }
        canBorn$(e, t, i) {
            return this.cityCollisions$ && this.cityCollisions$.canBorn$(e, t, i);
        }
        onResurgence$() {
            this._resurgenceTimes$++;
        }
        onQuickClickBiggerSuccess() {
            Mt.setBiggerStart(), this.delayStartPlaying(0);
        }
        smallCameraShake() {
            this._cameraShake$ && (this._cameraShake$.shakeAmount$ = Math.max(this._cameraShake$.shakeAmount$, .25),
                this._cameraShake$.shake$ = Math.max(this._cameraShake$.shake$, .3), this._cameraShake$.enabled = !0);
        }
        bigCameraShake() {
            this._cameraShake$ && (this._cameraShake$.shakeAmount$ = Math.max(this._cameraShake$.shakeAmount$, .5),
                this._cameraShake$.shake$ = Math.max(this._cameraShake$.shake$, .5), this._cameraShake$.enabled = !0);
        }
        _resurgence$() {
            this._playerDiedState$.dinosaur.owner.destroy(!0);
            let e = [];
            for (let t = 0; t < this._spawnPointsNode$.length; t++) e.push(this._spawnPointsNode$[t]);
            for (let t = 0; t < this._spawnPointsNode$.length; t++) {
                let i = this._spawnPointsNode$[t];
                Laya.Vector3.distanceSquared(this._playerDiedState$.position, i) > as * as && e.push(i);
            }
            let t = ee.randomElementFromArray$(e);
            this._spawnDinosaurToPosition$(this._playerSkinId, t, e => {
                this.playerDino = e, e.setIsPlayer(), e.setPropertyLevels(this._playerDiedState$.level, Be.getDamageLevel$(), Be.getGrowthLevel$(), Be.getMoveSpeedLevel$()),
                    e.exp = this._playerDiedState$.exp, this._setupCameraFollowLookAt$(e), this._setupGameControl$(e),
                    e.name = "Player", this._isPaused$ = !1, Laya.SoundManager.playSound(B.Sound$.LEVEL_UP$),
                    b.dispatchEvent$(B.Event$.ADD_DINOSAUR_TO_SCENE$, e);
            });
        }
        _onDinosaurLevelUp$(e) {
            e === this.playerDino && (this._updateCameraFollowLookAtOffset$(!0), this.bigCameraShake(),
                Laya.SoundManager.playSound(B.Sound$.LEVEL_UP$));
        }
        _onDestroyDestroyableObject$(e) {
            let t, i = e.destroyableObject,
                s = e.bodyData,
                a = e.dinosaur;
            if (this.updateDestroyStatistics(s), i.totalHp$ < 50) return;
            t = a.isPlayer ? Math.min(3, i.totalHp$ / 100) : Math.min(Math.min(3, i.totalHp$ / 100), is - this._humans$.length);
            let n = i.owner.transform.position;
            for (let e = 0; e < t; e++) {
                let e = this.getRoundPlayerPosition$(n, 0, 10);
                e && this.randomSpawnHuman$(e);
            }
            a === this.playerDino && (i.totalHp$ > 500 ? (this.bigCameraShake(), Laya.SoundManager.playSound(B.Sound$.BOMO$)) : (this.smallCameraShake(),
                Laya.SoundManager.playSound(B.Sound$.DESTRUCTION$)));
        }
        updateDestroyStatistics(e) {
            switch (e.collisionGroup) {
                case B.OBJ_TYPE$.HOUSE$:
                    this._roundStatistics$.destroyBuild++;
                    break;

                case B.OBJ_TYPE$.CAR$:
                    this._roundStatistics$.destroyCar++;
            }
        }
        _onHumanKill$(e) {
            let t = e.dinosaur,
                i = e.human;
            this._humans$.remove$(i), t.addExp(i.score$), t === this.playerDino && (Laya.SoundManager.playSound(B.Sound$.EAT$),
                pgdk$.shakePhone$(!1)), i.owner.transform.position.cloneTo(os), os.y = 3, rs.isPointInCamera(os) ? t.rollUp$(i.owner, function() {
                i.recoverToPool$();
            }) : i.recoverToPool$();
        }
        _onDinosaurKill$(e) {
            let t = e.dinosaur,
                i = e.otherDinosaur;
            t.addExp(10 * i.level), t === this.playerDino && Laya.SoundManager.playSound(B.Sound$.DESTRUCTION$);
            let s = this._rotDinosaurs$.indexOf(i); -
            1 !== s && this._rotDinosaurs$.splice(s, 1), -1 !== (s = this.dinosaurs.indexOf(i)) && this.dinosaurs.splice(s, 1),
                i.owner.transform.position.cloneTo(os), os.y = 7, i.isPlayer || this._rotDinosaurInfo$.push({
                    nickname: i.name,
                    skinId: i.skinId,
                    level: i.level,
                    icon: i.icon,
                    damageLv: i.damageLv,
                    growthLv: i.growthLv,
                    moveSpeedLv: i.moveSpeedLv
                }), i.death(), t === this.playerDino ? (this.smallCameraShake(), pgdk$.shakePhone$(!1),
                    this._roundStatistics$.killDinosaur++, this._roundStatistics$.killDinosaur >= 5 && this._roundStatistics$.burstTimes++) : i === this.playerDino && (this.savePlayerDiedState(),
                    this.bigCameraShake(), pgdk$.shakePhone$(!0), this._isPaused$ = !0, this.baseScene$.timerOnce(200, this, function() {
                        b.dispatchEvent$(B.Event$.PLAYER_DINOSAUR_KILL$, this.playerDino), Laya.SoundManager.playSound(B.Sound$.FAIL$),
                            this._cameraFollowLookAt$.destroy(), this._cameraFollowLookAt$ = null, this.playerDino = null;
                    }.bind(this)));
        }
        savePlayerDiedState() {
            this.playerDino && (this._playerDiedState$ = {
                level: this.playerDino.level,
                exp: this.playerDino.exp,
                position: this.playerDino.owner.transform.position,
                dinosaur: this.playerDino
            });
        }
        _onPickKey$(e) {
            let {
                bodyData: t,
                key: i
            } = e;
            this._pickUpKey$++;
            let s = this.keys$.indexOf(i); -
            1 !== s && this.keys$.splice(s, 1);
        }
        _onPickMeat$(e) {
            let {
                bodyData: t,
                meat: i
            } = e, s = this.meats$.indexOf(i); -
            1 !== s && this.meats$.splice(s, 1);
        }
        onDisable() {
            b.releaseAllEvents$(this);
        }
        static isPointInCamera(e) {
            return !(!curScene || !curScene._camera$) && curScene._camera$.boundFrustum.containsPoint(e) !== Laya.ContainmentType.Disjoint;
        }
        static isSpriteInCamera(e) {
            if (curScene && curScene.camera) {
                let t;
                return e instanceof Laya.MeshSprite3D ? t = e.meshRenderer : e instanceof Laya.SkinnedMeshSprite3D && (t = e.skinnedMeshRenderer), !!t && curScene._camera$.boundFrustum.containsBoundBox(t.bounds._boundBox) !== Laya.ContainmentType.Disjoint;
            }
            return !1;
        }
    }
    rs.url = "Scene/BattleScene.scene", rs.className = "BattleScene$";
    class $s extends Laya.Script {
        constructor() {
            super(), Laya.config$ = this, this.isCDN$ = !1;
        }
    }
    class hs extends rs {
        constructor() {
            super();
        }
        initData$() {
            super.initData$(), Laya.showSignUI$ = !0;
        }
    }
    hs.url = "Scene/BattleSceneQq.scene", hs.className = "BattleSceneQq$";
    class ls extends Laya.Script {
        constructor() {
            super(), this.isAdActive$ = !0, this._banners$ = [], this.MIN_BANNER_WIDTH$ = 300,
                this.MIN_BANNER_HEIGHT$ = 122, this._adLoadFailCnt$ = {}, this.blockAds$ = [];
        }
        onStart() {
            // "zs" === this.channel$ && this.uploadWhereFrom$(), this.initVideoAd$(), this.initInterstitialAd$(),
            //     this._refreshBanner$();
        }
        _getParamData$() {
            // if ("undefined" == typeof qq) return;
            // let e = null, t = new Laya.Handler(this, this._getOpenid);
            // qq.login({
            //     success: function (i) {
            //         e = i.code, t.runWith(e);
            //     }
            // });
        }
        _getOpenid(e) {
            // let t = new Laya.HttpRequest();
            // t.once(Laya.Event.COMPLETE, this, this._reciveParamData$), t.send("" + e, null, "POST", "json", ["Content-Type", "application/x-www-form-urlencoded;charset=utf-8"]);
        }
        _reciveParamData$(e) {
            // pgdk$.openid$ = e.data.openid, this._requsetMethon();
        }
        uploadWhereFrom$() {
            // this._getParamData$();
        }
        _requsetMethon() {
            // let e, t = qq.getLaunchOptionsSync();
            // e = t.referrerInfo.appId ? t.referrerInfo.appId : t.scene, new Laya.HttpRequest().send("" + this.appId$ + "&from_id=" + e + "&user_id=" + pgdk$.openid$, null, "GET", "json", ["Content-Type", "application/x-www-form-urlencoded;charset=utf-8"]);
        }
        onUpdate() {
            // this._refreshBanner$();
        }
        navigate2Mini$(e, t, i, s) {
            // if ("undefined" != typeof qq) switch (this.channel$) {
            //     case "zs":
            //         sdk.navigate2Mini(e, pgdk$.openid$, i, s);
            //         break;

            //     default:
            //         this._pgNav$(e, t, i, s);
            // } else console.warn("非微信环境，无法跳转", e);
        }
        _pgNav$(e, t, i, s) {
            // "undefined" != typeof qq ? qq.navigateToMiniProgram && e.appid && qq.navigateToMiniProgram({
            //     appId: e.appid,
            //     path: e.path,
            //     fail: function (e) {
            //         e && console.log(e.errMsg), e && e.errMsg && -1 !== e.errMsg.indexOf("cancel") && (console.debug("取消导出"),
            //             s && s());
            //     },
            //     success: function () {
            //         i && i();
            //     }
            // }) : console.warn("非微信环境，无法跳转", e);
        }
        showBanner$(e, t) {
            // this.isAdActive$ && (this._needBanner$ = !0, console.log(now$(), "显示广告"), "undefined" != typeof qq && qq.createBannerAd && (this._banners$.length >= 2 && this._hideBanner$(),
            //     this._banners$.length > 0 && (this._curBanner$ = this._banners$[0], this._curBanner$.startShowTime$ = Date.now(),
            //         this._curBanner$.rect$ = e, this._curBanner$.widget$ = t, this._curBanner$.show(),
            //         this._resizeBannerPos$(this._curBanner$, e, t)), this._createBanner$(!0, e, t)));
        }
        hideBanner$() {
            // this._needBanner$ = !1, this._hideBanner$();
        }
        _hideBanner$() {
            // if (console.log(Date.now(), "隐藏广告"), "undefined" == typeof qq) return;
            // if (!this._curBanner$) return;
            // if (0 === this._banners$.length) return;
            // let e = this._banners$.removeAt$(0);
            // if (e.hide(), this._banners$.length >= 1 && e.$showTime > 3e4) {
            //     console.log(Date.now(), "销毁广告");
            //     let e = [this._curBanner$.$id, !1, this._curBanner$.style.left, this._curBanner$.style.top, this._curBanner$.style.height];
            //     this._curBanner$.destroy(), this._curBanner$ = void 0, this.__createBanner$(e);
            // } else this._curBanner$ = void 0, this._banners$.push(e);
        }
        _createBanner$(e, t, i) {
            // if ("undefined" == typeof qq || !qq.createBannerAd) return;
            // if (this.bannerIds$.length <= 0) return;
            // let s = this.bannerIds$.removeAt$(Math.floor(Math.random() * this.bannerIds$.length));
            // this.__createBanner$([s, e, t, i]);
        }
        __createBanner$(e) {
            // if (!e) return;
            // console.log(now$(), "创建广告");
            // let t = e[0], i = e[1], s = e[2], a = e[3], n = qq.createBannerAd({
            //     adUnitId: t,
            //     style: {
            //         left: s.left,
            //         top: s.top,
            //         width: s.width
            //     }
            // });
            // n.id$ = t, n.onLoad$ = function () {
            //     this._onBannerLoad$(n, i, s, a);
            // }, n.onError$ = function (i) {
            //     this._adLoadFailCnt$[t] = (this._adLoadFailCnt$[t] || 0) + 1, console.warn("广告加载失败:", i),
            //         n.destroy && n.destroy(), this._adLoadFailCnt$[t] < 5 && setTimeout(this.__createBanner$.bind(this, e), 3e3, e);
            // }, n.onLoad(n.onLoad$.bind(this)), n.onError(n.onError$.bind(this)), n.onResize(function (e) {
            //     n.inited = !0, n.realHeight = e.height, n.realWidth = e.width;
            // });
        }
        _onBannerLoad$(e, t, i, s) {
            // this._needBanner$ && t && !this._curBanner$ ? (this._curBanner$ = e, this._curBanner$.startShowTime$ = Date.now(),
            //     this._curBanner$.rect$ = i, this._curBanner$.widget$ = s, this._curBanner$.show(),
            //     this._banners$.insert$(0, e), this._resizeBannerPos$(e, i, s)) : this._banners$.push(e);
        }
        _resizeBannerPos$(e, t, i) {
            // if (!e.inited) return;
            // if (t.width / t.height > e.realWidth / e.realHeight) {
            //     if (e.realHeight > t.height && e.realWidth > this.MIN_BANNER_WIDTH$) {
            //         let i = Math.max(this.MIN_BANNER_WIDTH$, e.realWidth / (e.realHeight / t.height));
            //         e.style.width = i;
            //     }
            // } else "undefined" != typeof cc ? e.style.width = Math.min(cc.view.getFrameSize().width, Math.max(this.MIN_BANNER_WIDTH$, t.width)) : "undefined" != typeof Laya && (e.style.width = Math.min(Laya.Browser.clientWidth, Math.max(this.MIN_BANNER_WIDTH$, t.width)));
            // let s = e.realHeight / e.realWidth * e.style.width;
            // "number" == typeof i.top && "number" != typeof i.bottom ? e.style.top = t.top : "number" != typeof i.top && "number" == typeof i.bottom ? e.style.top = t.top + t.height - s : e.style.top = t.top + t.height / 2 - s / 2,
            //     "number" == typeof i.left && "number" != typeof i.right ? e.style.left = t.left : "number" != typeof i.left && "number" == typeof i.right ? e.style.left = t.left + t.width - e.style.width : e.style.left = t.left + t.width / 2 - e.style.width / 2;
        }
        _refreshBanner$() {
            // this._needBanner$ && this._curBanner$ && (Date.now() - this._curBanner$.startShowTime$ > this.bannerShowSpacing$ ? (this.showBanner$(this._curBanner$.rect$, this._curBanner$.widget$),
            //     console.log(now$(), "刷新Banner")) : this._resizeBannerPos$(this._curBanner$, this._curBanner$.rect$, this._curBanner$.widget$));
        }
        initInterstitialAd$() {
            // this.createInterstitialAd$();
        }
        createInterstitialAd$() {
            // this.isAdActive$ ? "undefined" != typeof qq && qq.createInterstitialAd ? this.insertUnitId$ ? (this._curInterstitialAd$ = qq.createInterstitialAd({
            //     adUnitId: this.insertUnitId$
            // }), this._curInterstitialAd$.onClose(function () {
            //     this.createInterstitialAd$();
            // }.bind(this))) : console.warn(now$(), "未配置插屏广告ID") : console.warn(now$(), "非微信环境，无法创建插屏广告") : console.warn(now$(), "流量主未开通，无法创建插屏广告");
        }
        showInterstitialAd$() {
            // this.isAdActive$ ? "undefined" != typeof qq && qq.createInterstitialAd ? this._curInterstitialAd$ ? this._curInterstitialAd$ && this._curInterstitialAd$.show().catch(e => {
            //     console.error(e);
            // }) : console.warn(now$(), "请先使用initInterstitialAd$()，预加载插屏广告") : console.warn(now$(), "非微信环境，无法创建插屏广告") : console.warn(now$(), "流量主未开通，无法创建插屏广告");
        }
        initVideoAd$() {
            // this.hasVideoInit$ || (this._videoErrorTimes = 0, this._maxVideoErrorTimes = 5,
            //     this.createVideoAd$(), this.hasVideoInit$ = !0);
        }
        createVideoAd$() {
            // console.log("createVideoAd$"), this.isAdActive$ ? "undefined" != typeof qq && qq.createRewardedVideoAd ? this.videoUnitId$ ? this._videoAd$ || (this._videoAd$ = qq.createRewardedVideoAd({
            //     adUnitId: this.videoUnitId$
            // }), this._videoAd$.onLoad(function () {
            //     console.log(now$(), "激励式视频加载成功"), this._videoErrorTimes = 0;
            // }.bind(this)), this._videoAd$.onClose(function (e) {
            //     console.log(now$(), "激励式视频关闭"), this._videoCloseCallback$ && (this._videoCloseCallback$(!e || e.isEnded),
            //         this._videoCloseCallback$ = void 0);
            // }.bind(this)), this._videoAd$.onError(function (e) {
            //     console.log(now$(), "激励式视频加载失败"), this._videoErrorTimes++, this._videoErrorTimes >= this._maxVideoErrorTimes ? console.warn(now$(), "激励式视频加载失败次数过多, 停止重试。 ") : (console.warn(now$(), "激励式视频加载失败, 重试" + this._videoErrorTimes),
            //         console.warn(e), this._videoAd$.load());
            // }.bind(this)), this._videoAd$.load()) : console.warn(now$(), "未配置激励式视频ID") : console.warn(now$(), "非微信环境，无法创建激励式视频") : console.warn(now$(), "流量主未开通，无法创建激励式视频");
        }
        showVideoAd$(e) {
            // return this.isAdActive$ ? "undefined" != typeof qq && qq.createRewardedVideoAd ? void (this._videoAd$ ? !this._videoAd$ || this._videoErrorTimes >= this._maxVideoErrorTimes ? e && e(!1) : (this._videoCloseCallback$ = e,
            //     this._videoAd$.show()) : console.error(now$(), "请先使用initVideoAd$()，预加载激励式视频")) : (console.warn(now$(), "非微信环境，无法播放激励式视频。当做成功回调。"),
            //         void (e && e(!0))) : (console.warn(now$(), "流量主未开通，无法创建激励式视频。当做成功回调。"), void (e && e(!0)));
        }
        onOverUI$(e) {
            // let t, i = this.blockAds$.length;
            // for (; --i > -1;) (t = this.blockAds$[i]) && t.onOverUI$(e);
        }
        onReshowUI$(e) {
            // let t, i = this.blockAds$.length;
            // for (; --i > -1;) (t = this.blockAds$[i]) && t.onReshowUI$(e);
        }
        createBlockAd$(e, t, i, s, a, n, o, r) {
            // if (!window.qq) return;
            // if (!qq.createBlockAd) return;
            // let $, h, l, d, c = Laya.Browser.clientWidth / Laya.stage.width, g = Laya.Browser.clientHeight / Laya.stage.height;
            // if (i) if ("landscape" == o) {
            //     let e = t.width * t.globalScaleX * c;
            //     if ((s = Math.floor((e - 16) / 65)) <= 0) return;
            // } else if ("vertical" == o) {
            //     let e = t.height * t.globalScaleY * g;
            //     if ((s = Math.floor((e - 8) / 73.5)) <= 0) return;
            // }
            // if ("left" == a) l = isNaN(t.left) ? isNaN(t.right) ? isNaN(t.centerX) ? 0 != t.pivotX ? t.x - t.pivotX : t.x - t.anchorX * t.displayWidth : .5 * (t.parent.width - t.displayWidth) + t.centerX : t.right - t.displayWidth : t.left; else if ("right" == a) {
            //     let e = ("vertical" == o ? 65 : 49 * s + 16 * (1 + s)) / c / t.parent.globalScaleX;
            //     l = isNaN(t.left) ? isNaN(t.right) ? isNaN(t.centerX) ? 0 != t.pivotX ? t.x - t.pivotX + t.displayWidth - e : t.x - t.anchorX * t.displayWidth + displayWidth - e : .5 * (t.parent.width + t.displayWidth) + t.centerX - e : t.parent.width - t.right - e : t.left + t.displayWidth - e;
            // } else if ("center" == a) {
            //     let e = ("vertical" == o ? 65 : 49 * s + 16 * (1 + s)) / c / t.parent.globalScaleX;
            //     l = isNaN(t.left) ? isNaN(t.right) ? isNaN(t.centerX) ? 0 != t.pivotX ? t.x - t.pivotX + .5 * (t.displayWidth - e) : t.x - t.anchorX * t.displayWidth + .5 * (t.displayWidth - e) : .5 * (t.parent.width - e) + t.centerX : t.parent.width - t.right - .5 * (t.displayWidth + e) : t.left + .5 * (t.displayWidth - e);
            // }
            // if ("top" == n) d = isNaN(t.top) ? isNaN(t.bottom) ? isNaN(t.centerY) ? 0 != t.pivotY ? t.y - t.pivotY : t.y - t.anchorY * t.displayHeight : .5 * (t.parent.height - t.displayHeight) + t.centerY : t.parent.height - t.bottom - t.displayHeight : t.top; else if ("bottom" == n) {
            //     let e = ("vertical" == o ? 65.5 * s + 8 * (1 + s) : 85.5) / g / t.parent.globalScaleY;
            //     d = isNaN(t.top) ? isNaN(t.bottom) ? isNaN(t.centerY) ? 0 != t.pivotY ? t.y - t.pivotY + t.displayHeight - e : t.y - t.anchorY * t.displayHeight + displayHeight - e : .5 * (t.parent.height + t.displayHeight) + t.centerY - e : t.parent.height - t.bottom - e : t.top + t.displayHeight - e;
            // } else if ("center" == n) {
            //     let e = ("vertical" == o ? 65.5 * s + 8 * (1 + s) : 85.5) / g / t.parent.globalScaleY;
            //     d = isNaN(t.top) ? isNaN(t.bottom) ? isNaN(t.centerY) ? 0 != t.pivotY ? t.y - t.pivotY + .5 * (t.displayHeight - e) : t.y - t.anchorY * t.displayHeight + .5 * (t.displayHeight - e) : .5 * (t.parent.height - e) + t.centerY : t.parent.height - t.bottom - .5 * (t.displayHeight + e) : t.top + .5 * (t.displayHeight - e);
            // }
            // return Laya.Point.TEMP.setTo(l, d), t.parent.localToGlobal(Laya.Point.TEMP), $ = Math.max(16, Math.min(Laya.Point.TEMP.x * c, Laya.Browser.clientWidth - 65)),
            //     h = Math.max(16, Math.min(Laya.Point.TEMP.y * g, Laya.Browser.clientHeight - 85)),
            //     this._createBlockAd$(e, $, h, s, r, o);
        }
        _createBlockAd$(e, t, i, s, a, n) {
            // if (!window.qq) return;
            // let o = qq.createBlockAd({
            //     adUnitId: this.blockAdId$,
            //     style: {
            //         left: t,
            //         top: i
            //     },
            //     size: s,
            //     orientation: n
            // });
            // return o.onLoad(function (e) {
            //     console.log("=======================onLoad", e), a && a();
            // }), o.onResize(function (e) {
            //     console.log("=======================onResize", e);
            // }), o.onError(function (e) {
            //     console.log("=======================onError", e);
            // }), this.overBlockAd$(), this.blockAds$.push(e), o;
        }
        overBlockAd$() {
            // let e = this.blockAds$.length - 1;
            // if (e > -1) {
            //     let t = this.blockAds$[e];
            //     t && t.onOverAd$();
            // }
        }
        destroyBlockAd$(e) {
            // if (!e) return;
            // let t = this.blockAds$.indexOf(e);
            // t > -1 && this.blockAds$.splice(t, 1), this.rebackBlockAd$();
        }
        rebackBlockAd$() {
            // let e = this.blockAds$.length - 1;
            // if (e > -1) {
            //     let t = this.blockAds$[e];
            //     t && t.onRecoverAd$();
            // }
        }
        isAppBoxAvailable$() {
            // if (!window.qq) return !1;
            // let e = qq.getSystemInfoSync().AppPlatform;
            // return "qq" === e || "kg" === e || "qb" === e || "dm" === e || "yyb" === e || "sp" === e || "dj" === e || "ma" === e || "xw" === e || "wg" === e;
        }
        showAppBox$(e) {
            // if (console.log("请求显示盒子"), "undefined" == typeof qq || !qq.createAppBox) 
            // return console.warn("非手Q环境，或者非真机环境，无法显示盒子广告。直接回调关闭事件。"),
            //     void (e && e());
            // let t = this;
            // t.onAppBoxClose$ = e, t._appBox$ ? t._appBox$.show().then(function (e) {
            //     console.warn(now$(), "显示盒子广告", e), t._showInputBlock$(), t.overBlockAd$();
            // }) : (t._appBox$ = qq.createAppBox({
            //     adUnitId: "2a805ac2ad0fc78170b1cc9074f051f2"
            // }), t._appBox$.onClose(function () {
            //     console.warn(now$(), "盒子广告关闭"), t._hideInputBlock$(), t.rebackBlockAd$(), t.onAppBoxClose$ && t.onAppBoxClose$(),
            //         t.onAppBoxClose$ = void 0;
            // }), t._appBox$.load().then(function () {
            //     t._appBox$.show().then(function (e) {
            //         console.warn(now$(), "显示盒子广告", e), t._showInputBlock$(), t.overBlockAd$();
            //     });
            // }));
        }
        _showInputBlock$() {
            // if (console.log("显示盒子遮罩"), Laya.InputBlock$) Laya.InputBlock$.active = !0, Laya.InputBlock$.visible = !0; else {
            //     let e = new Laya.Box();
            //     e.zOrder = 999999999, e.left = 0, e.right = 0, e.top = 0, e.bottom = 0, e.mouseEnabled = !0,
            //         e.on(Laya.Event.CLICK, e, function () {
            //             console.log("点击了遮罩层");
            //         }), Laya.InputBlock$ = e, Laya.stage.addChild(e);
            // }
        }
        _hideInputBlock$() {
            // console.log("隐藏盒子遮罩"), Laya.InputBlock$ && (Laya.InputBlock$.active = !1, Laya.InputBlock$.visible = !1);
        }
    }
    class ds extends Laya.Script {
        constructor() {
            super(), this.appId$ = null;
        }
        onStart() {
            this.cfg$ = void 0, this.isParamGot$ = !1, this.appVersion$ = "1.0", "undefined" != typeof wx && this.login$(),
                this.loadCfg$();
        }
        loadCfg$() {
            zs.sdk.loadCfg(function(e) {
                console.log("指色后台开关拉取成功", e), this.isParamGot$ = !0, this.cfg$ = e;
            }.bind(this), function(e) {
                console.error("指色后台开关拉取失败", e);
            });
        }
        login$() {
            zs.sdk.login(function(e) {
                console.log("指色SDK登录成功", "openid=" + e), pgdk$ && (pgdk$.openid$ = e), zs.sdk.init(e);
            }.bind(this), function(e) {
                console.error("指色SDK登录失败", e);
            }.bind(this));
        }
        getConfig$() {
            if (this.isParamGot$) return this.cfg$;
        }
        canTrick$() {
            if (this.cfg$) {
                if (this.appVersion$ == this.cfg$.zs_version) return !1;
                if (1 !== this.cfg$.zs_switch) return !1;
                if (1 !== this.cfg$.zs_banner_city) return !1;
            }
            return !0;
        }
        btnMoveSwitch$() {
            return !!this.cfg$ && !!this.cfg$.zs_banner_vertical_enable;
        }
        getClickAwardAdd$() {
            return this.cfg$ && this.cfg$.zs_click_award_add ? Number(this.cfg$.zs_click_award_add) : .2;
        }
        getClickAwardBack$() {
            return this.cfg$ && this.cfg$.zs_click_award_back ? Number(this.cfg$.zs_click_award_back) : .004;
        }
        getClickAwardPercent$() {
            return this.cfg$ && this.cfg$.zs_click_award_percent ? JSON.parse(this.cfg$.zs_click_award_percent) : .8;
        }
    }
    class cs extends rs {
        constructor() {
            super();
        }
    }
    cs.url = "Scene/BattleSceneVivo.scene", cs.className = "BattleSceneVivo$";
    class gs extends Laya.Script {
        constructor() {
            super(), this.appId$ = null;
        }
        onStart() {
            console.log("tcy vivo........"), this.app_version_vivo = window.app_version_vivo = "3.0",
                navigator.onLine ? (this.cfg$ = void 0, this.getConf$ = !1, this.loadCfg$()) : pgdk$ && pgdk$.showToast$("断网状态下,会影响游戏体验哦~");
        }
        loadCfg$() {
            zs.sdk.loadCfg(function(e) {
                console.log("指色后台开关拉取成功", e), this.cfg$ = e, this.getConf$ = !0;
            }.bind(this), function(e) {
                console.error("指色后台开关拉取失败", e);
            });
        }
        getConfig$(e) {
            if (this.cfg$ && this.getConf$) return null == e ? this.cfg$ : this.cfg$[e];
        }
        login$() {
            zs.sdk.login(function(e) {
                console.log("指色SDK登录成功", "openid=" + e), pgdk$.openid$ = e;
            }, function(e) {
                console.error("指色SDK登录失败", e);
            });
        }
        canTrick$() {
            if (this.cfg$ && this.cfg$.zs_version != this.app_version_vivo) return !1;
        }
    }
    class us extends Laya.Script {
        constructor() {
            super(), this.sysInfo = {}, this.nativeAds$ = [], this.nativeIcons$ = [], this._banners$ = [],
                this.userId = "", this.channel$ = null, this.appId$ = null, this.isAdActive$ = null,
                this.nativeAdIds$ = [], this.bannerIds$ = [], this.isVideoActive$ = null, this.videoUnitId$ = null,
                this.isInsertActive$ = !0, this.insertUnitId$ = null, this.platformVersion = void 0,
                this.isOppo$ = !1, this.curNativeId$ = void 0, this.showBannerSpacingT$ = 1e4, this.lastShowBannerT$ = void 0,
                this.nativeCount$ = 0, this.bannerStatus$ = 0;
        }
        onStart() {
            this.canAdShow$();
        }
        canAdShow$() {
            if ("undefined" == typeof qg || !qg.getSystemInfoSync) return;
            let e = this;
            qg.getSystemInfo({
                success: function(t) {
                    console.log("handling success， brand = ${data.brand}"), e.platformVersion = t.platformVersionCode,
                        console.log("pppppp" + t.platformVersionCode), e.platformVersion >= 1031 ? e.init$() : (e.isAdActive$ = !1,
                            e.isVideoActive$ = !1);
                }
            });
        }
        init$() {
            console.log("tcy vivoSDK初始化"), navigator.onLine ? (this.getSceneInfo$(), this.curBannerAd$ = void 0,
                this.curVideoAd$ = void 0, this.curNativeAd$ = void 0, this._initVideo$(), this.createNativeAds$(),
                this.createNativeAds2$(), this._createInterstitialAd$(), this._createBanner$()) : pgdk$ && pgdk$.showToast$("断网状态下,会影响游戏体验哦~");
        }
        navigate2Mini$(e, t, i, s) {
            if (pgdk$.dataHandler$.navigate2Mini$) pgdk$.dataHandler$.navigate2Mini$(e, t, i, s);
            else {
                var a = e.extraData || {};
                a.from = this.appId$, qg.navigateToMiniGame({
                    pkgName: e.pkg_name,
                    path: e.path,
                    extraData: a
                });
            }
        }
        getSceneInfo$() {
            window.qg && qg.getSystemInfo({
                success: function(e) {
                    console.log("tcy 获取系统信息成功"), this.sysInfo = e;
                }.bind(this),
                fail: function(e) {
                    console.log("tcy 获取系统信息失败"), console.log(e);
                }.bind(this),
                complete: function(e) {
                    console.log("tcy 获取系统信息接口调用结束"), console.log(e);
                }.bind(this)
            });
        }
        _createBanner$() {
            if (this.bannerId$ = this.bannerIds$.reverse()[0], !window.qg) return;
            if (!this.isAdActive$) return void console.warn("tcy 广告组未开通，无法创建banner广告");
            if ("undefined" == typeof qg || !qg.createBannerAd) return void console.warn("tcy 非oppo环境，无法创建激banner广告");
            if (!this.bannerId$) return void console.warn("tcy 未配置banner广告ID");
            console.log(this.bannerId$), console.log(qg), console.log(window.qg), console.log("tcy 开始创建oppobanner广告"),
                this.lastBanner$ = this.curBannerAd$ || this.lastBanner$, this.curBannerAd$ = qg.createBannerAd({
                    posId: this.bannerId$,
                    style: {}
                });
            let e = this;
            this.curBannerAd$.onLoad(function() {
                console.log("tcy banner加载成功"), e.lastBanner$ && e.lastBanner$.destroy(), e.lastBanner$ = void 0,
                    0 == e.bannerStatus$ ? e.showBanner$() : e.hideBanner$();
            }), this.curBannerAd$.onError(function(t) {
                console.log("tcy banner加载失败"), console.log(t), e.curBannerAd$ = e.lastBanner$, 0 == e.bannerStatus$ ? e.showBanner$() : e.hideBanner$();
            });
        }
        showBanner$() {
            this._showBanner$();
        }
        _showBanner$() {
            if (!window.qg) return;
            this.bannerStatus$ = 0;
            let e = Laya.timer.currTimer,
                t = e - this.lastShowBannerT$;
            t <= this.showBannerSpacingT$ ? Laya.timer.once(t, this, this.showBanner$) : this.curBannerAd$ ? (this.curBannerAd$.show(),
                this.lastShowBannerT$ = e) : this._createBanner$();
        }
        hideBanner$() {
            window.qg && (this.bannerStatus$ = 1, Laya.timer.clear(this, this.showBanner$),
                this.curBannerAd$ && (this.curBannerAd$.hide(), this.lastBanner$ = this.curBannerAd$,
                    this.curBannerAd$ = void 0));
        }
        _initVideo$() {
            this._videoErrorTimes = 0, this._maxVideoErrorTimes = 5, this.curVideoAd$ = void 0,
                this.onVideoLoadOk = !1, this._createVideoAd$(), console.log("tcy 初始化视频广告");
        }
        _createVideoAd$() {
            window.qg && (this.isVideoActive$ ? "undefined" != typeof qg && qg.createRewardedVideoAd ? this.videoUnitId$ ? this.curVideoAd$ || (console.log("tcy 创建视频广告"),
                this.curVideoAd$ = qg.createRewardedVideoAd({
                    posId: this.videoUnitId$
                }), this.curVideoAd$.onLoad(function() {
                    this._videoErrorTimes = 0, this.onVideoLoadOk = !0, console.log("tcy 激励式视频加载成功");
                }.bind(this)), this.curVideoAd$.onClose(function(e) {
                    console.log("tcy 关闭视频"), this.curVideoAd$ = void 0, this.onVideoLoadOk = !1, Pt.getInstance$().backPlayMusic(),
                        this._videoCloseCallback$ && (console.log("tcy 关闭视频执行回调"), console.log(this._videoCloseCallback$),
                            this._videoCloseCallback$(!e || e.isEnded), this._videoCloseCallback$ = void 0);
                }.bind(this)), this.curVideoAd$.onError(function(e) {}.bind(this)), this.curVideoAd$.load()) : console.warn("tcy 未配置视频广告ID") : console.warn("tcy 非oppo环境，无法创建视频广告") : console.warn("tcy 广告组未开通，无法创建视频广告"));
        }
        showVideoAd$(e) {
            if (console.log(JSON.stringify(this.isAdActive$)), !this.isVideoActive$) return console.warn("tcy 广告组未开通，无法创建激励式视频。当做成功回调。"),
                void(e && e(!0));
            if ("undefined" == typeof qg || !qg.createRewardedVideoAd) return console.warn("tcy 非oppo环境，无法播放激励式视频。当做成功回调。"),
                void(e && e(!0));
            if (console.log("tcy 视频播放"), this.curVideoAd$ && this.onVideoLoadOk) {
                if (pgdk$.isReport$) {
                    let e = this.videoUnitId$;
                    pgdk$.reportShowAd$(e);
                }
                return this._videoCloseCallback$ = e, this.curVideoAd$.show(), void Pt.getInstance$().stopMusic();
            }
            return this.onVideoLoadOk ? !this.curVideoAd$ || this._videoErrorTimes >= this._maxVideoErrorTimes ? (this.showToast$("视频点击频繁，请稍后再试"),
                console.log("tcy 视频加载失败........."), this._initVideo$(), void(e && e(!1))) : void 0 : (this.showToast$("视频点击频繁，请稍后再试"),
                void this._initVideo$());
        }
        _shakePhone$() {
            qg.vibrateShort({
                success: function(e) {},
                fail: function(e) {},
                complete: function(e) {}
            });
        }
        _login$() {
            window.qg && qg.login({
                success: function(e) {
                    var t = JSON.stringify(e.data);
                    console.log("tcy 登录oppo"), console.log(JSON.stringify(t)), this.userId = t.uid;
                }.bind(this),
                fail: function(e) {
                    console.log(JSON.stringify(e));
                }.bind(this)
            });
        }
        getUerId$() {
            return this.userId;
        }
        showToast$(e) {
            window.qg && qg.showToast({
                message: e
            });
        }
        createNativeAds$() {
            if (console.log("tcy 平台版本号" + this.platformVersion), !this.platformVersion || this.platformVersion < 1053) return;
            let e = this.shiftRandom$(this.nativeAdIds$);
            this._createNativeAd$(e);
        }
        createNativeAds2$() {
            if (console.log("tcy 平台版本号" + this.platformVersion), !this.platformVersion || this.platformVersion < 1053) return;
            let e = this.shiftRandom$(this.nativeAdIds$);
            this._createNativeAd$(e);
        }
        _createNativeAd$(e) {
            if (console.log("tcy 创建原生广告"), !e) return;
            if (!window.qg) return;
            if (!this.isAdActive$) return void console.warn("tcy 广告组未开通，无法创建原生广告");
            if (!qg.createNativeAd) return void console.warn("tcy 非oppo环境，无法创建原生广告");
            if (console.log("tcy 原生广告id222"), console.log(JSON.stringify(e)), !e) return void console.warn("tcy 未配置原生广告ID");
            console.log("tcy 创建原生广告1"), console.log(JSON.stringify(e));
            let t = void 0;
            try {
                t = qg.createNativeAd({
                    posId: e
                });
            } catch (e) {
                console.log("tcy 原生广告load.....");
            }
            t.onLoad(function(i) {
                console.log("tcy 原生广告加载成功3=" + e), console.log(JSON.stringify(i)), 0 == this.nativeAds$.length ? (this.nativeAds$ = i.adList,
                    this.natvieObj$ = t, this.curNativeId$ = e, t.nativeId$ = e) : (this.nativeIcons$ = i.adList,
                    this.iconNativeObj$ = t, this.curNativeId$ = e, t.nativeId$ = e), this.loadNativelogo$();
            }.bind(this)), t.onError(function(t) {
                console.warn("tcy 原生广告加载失败4:"), console.warn(JSON.stringify(t)), Laya.timer.once(3e3, this, this._createNativeAd$, [e]);
            }.bind(this)), console.log("tcy 原生广告load2"), console.log(JSON.stringify(t)), t.load();
        }
        getNativeAdData$() {
            if (console.log("tcy 获取原生广告数据"), console.log(JSON.stringify(this.nativeAds$)), this.nativeAds$ || this.nativeIcons$) return this.nativeAds$ && 0 != this.nativeAds$.length ? this.nativeAds$ && [this.nativeAds$[0], this.natvieObj$] : this.nativeIcons$ && 0 != this.nativeIcons$.length ? this.nativeIcons$ && [this.nativeIcons$[0], this.iconNativeObj$] : void 0;
        }
        nativeReport$() {
            let e = pgdk$.getPgCfg$("reportNativeShow_time");
            this.nativeCount$ > 100 && (e = 1e4), e || (this.nativeCount$ += 1, Laya.report_time > 0 && clearTimeout(Laya.report_time),
                Laya.report_time = setTimeout(this.nativeReport$.bind(this), 500));
        }
        showAdReport$() {
            this.curNativeId$ && (this.natvieObj$, this.iconNativeObj$);
        }
        createPointNative$() {
            this.nativeCount$ = 0, this.nativeAdImg$ = new Laya.Image(), Laya.stage.addChild(this.nativeAdImg$),
                this.nativeAdImg$.width = 1, this.nativeAdImg$.height = 1, this.nativeAdImg$.left = 0,
                this.nativeAdImg$.top = 0;
        }
        createPointNativeAd$(e) {
            if (window.qg)
                if (this.isAdActive$)
                    if (qg.createNativeAd)
                        if (e) {
                            this.pointNative$ = void 0;
                            try {
                                this.pointNative$ = qg.createNativeAd({
                                    posId: e
                                });
                            } catch (e) {
                                console.log("tcy 原生广告load.....");
                            }
                            this.pointNative$.onLoad(function(e) {
                                let t = e.adList.pop(),
                                    i = function() {
                                        this.nativeAdImg$.skin = e.adList[0].imgUrlList[0], this.pointNative$ && this.pointNative$.reportAdShow({
                                            adId: e.adList[0].adId
                                        }), console.log("tcy 黑点img" + this.nativeAdImg$.skin), console.log("tcy 黑点img22" + e.adList[0].adId);
                                    }.bind(this);
                                if (t && t.icon) i(t.icon);
                                else if (t && t.logoUrl) i(t.logoUrl);
                                else if (t.imgUrlList && 0 != t.imgUrlList.length) {
                                    i(this.arrayRandom$(t.imgUrlList));
                                }
                            }.bind(this)), this.pointNative$.onError(function(t) {
                                Laya.timer.once(3e3, this, this.createPointNativeAd$, [e]);
                            }.bind(this)), this.pointNative$.load();
                        } else console.warn("tcy 未配置原生广告ID");
            else console.warn("tcy 非oppo环境，无法创建原生广告");
            else console.warn("tcy 广告组未开通，无法创建原生广告");
        }
        loadIconImg$() {
            if (!this.nativeAdImg$) return;
            let e = this.nativeAdIds$.clone$(); -
            1 != e.indexOf(this.curNativeId$) && e.removeAt$(e.indexOf(this.curNativeId$)),
                console.log("tcy 黑点");
            let t = this.arrayRandom(e);
            this.createPointNativeAd$(t);
        }
        randomInt(e, t) {
            return Math.floor(Math.random() * (t - e) + e);
        }
        arrayRandom(e) {
            return e[this.randomInt(0, e.length)];
        }
        shiftRandom$(e) {
            var t = this.randomInt(0, e.length),
                i = e[t];
            return e.removeAt$(t), i;
        }
        loadNativelogo$() {
            if (this.nativeAds$.length <= 0) return;
            this.nativeLogoArr = [];
            let e, t, i, s = this.nativeAds$.length;
            for (; --s > -1;)(e = this.nativeAds$[s]).imgUrlList && (t = e.imgUrlList, i = this.arrayRandom(t),
                this.setNativeLogo$(i, e));
            if (0 != this.nativeIcons$.length) {
                let s = this.nativeIcons$.length;
                for (; --s > -1;)(e = this.nativeIcons$[s]).imgUrlList && (t = e.imgUrlList, i = this.arrayRandom(t),
                    this.setNativeLogo$(i, e));
            }
        }
        setNativeLogo$(e, t) {
            Laya.loader.load(e, Laya.Handler.create(this, i => {
                t.logoImg$ = e;
            }));
        }
        nativeClick$(e, t) {
            t && (console.log("tcy 原生广告点击aaaa=" + e), t.reportAdShow({
                adId: e
            }), t.reportAdClick({
                adId: e
            }), console.log("tcy 原生广告点击bbbb=" + e), this.destroyAd$(t));
        }
        destroyAd$(e) {
            let t = e.nativeId$;
            return -1 == this.nativeAdIds$.indexOf(t) && this.nativeAdIds$.push(t), this.natvieObj$ === e ? (console.log("tcy 销毁 大图 " + t),
                this.natvieObj$ = void 0, this.nativeAds$ = [], void this.createNativeAds$()) : this.iconNativeObj$ === e ? (console.log("tcy 销毁 小图 " + t),
                this.iconNativeObj$ = void 0, this.nativeIcons$ = [], void this.createNativeAds2$()) : void console.error("tcy 销毁 异常 " + t);
        }
        closeNativeAd$(e, t) {
            t && this.nativeAds$.length > 0 && this.nativeIcons$.length > 0 && this.destroyAd$(t);
        }
        _createInterstitialAd$() {
            if (!window.qg) return;
            if (!this.isInsertActive$) return void console.warn("tcy 广告组未开通，无法创建插屏广告");
            if ("undefined" == typeof qg || !qg.createInterstitialAd) return void console.warn("tcy 非oppo环境，无法创建插屏广告");
            if (!this.insertUnitId$) return void console.warn("tcy 未配置插屏广告ID");
            let e;
            console.log("tcy 创建插屏广告");
            try {
                e = qg.createInterstitialAd({
                    posId: this.insertUnitId$
                });
            } catch (e) {
                console.log("tcy 插屏广告fail");
            }
            e.onClose(function() {
                e.destroy(), this.curInterstitialAd$ = null, this._createInterstitialAd$(), pgdk$.showBanner$(null, null);
            }), e.onLoad(function() {
                console.log("tcy 插屏广告加载成功"), this.curInterstitialAd$ = e;
            }.bind(this)), e.onError(function(e) {
                console.warn("tcy 插屏广告加载失败:"), console.warn(JSON.stringify(e)), Laya.timer.once(3e3, this, this._createInterstitialAd$);
            }.bind(this)), e.load();
        }
        showInterstitialAd$() {
            if (console.log(JSON.stringify(this.isInsertActive$)), this.isInsertActive$)
                if ("undefined" != typeof qg && qg.createInterstitialAd) {
                    if (console.log("tcy 展示插屏广告"), console.log(JSON.stringify(this.curInterstitialAd$)),
                        this.curInterstitialAd$) return pgdk$.hideBanner$(), this.curInterstitialAd$.show(),
                        this.curInterstitialAd$ = null, void this._createInterstitialAd$();
                    this.curInterstitialAd$ || this._createInterstitialAd$();
                } else console.warn("tcy 非oppo环境，无法展示插屏广告。");
            else console.warn("tcy 广告组未开通，无法创建插屏广告");
        }
    }
    class ps extends Laya.Script {
        constructor() {
            super(), this.host$ = "https://stat.littleboy.net/stat/report";
        }
        login$() {
            let e = "REG_DATE" + t.GAME_SIGN$,
                i = Laya.LocalStorage.getItem(e),
                s = "LAST_LOGIN_DATE" + t.GAME_SIGN$,
                a = Laya.LocalStorage.getItem(s),
                n = r.dateFormat$("yyyy-MM-dd", new Date()),
                o = "login";
            i ? a != n && (o = "active", a = n, Laya.LocalStorage.setItem(s, a)) : (o = "new",
                i = n, a = n, Laya.LocalStorage.setItem(e, i), Laya.LocalStorage.setItem(s, a));
            let $ = this._getAppId$(),
                h = this.host$ + "?type=user&appId=" + $ + "&loginType=" + o + "&regDate=" + i;
            this._send$(h);
        }
        showAd$(e) {
            let t = this._getAppId$(),
                i = this.host$ + "?type=ad&operate=show&appId=" + t + "&adId=" + e;
            this._send$(i);
        }
        clickAd$(e) {
            let t = this._getAppId$(),
                i = this.host$ + "?type=ad&operate=click&appId=" + t + "&adId=" + e;
            this._send$(i);
        }
        export$(e, t) {
            t = encodeURIComponent(t);
            let i = this._getAppId$(),
                s = this.host$ + "?type=export&appId=" + i + "&exportId=" + e + "&srcView=" + t;
            this._send$(s);
        }
        levelUp$(e) {
            let i = this._getAppId$(),
                s = Laya.LocalStorage.getItem("REG_DATE" + t.GAME_SIGN$) || r.dateFormat$("yyyy-MM-dd", new Date()),
                a = this.host$ + "?type=level&appId=" + i + "&regDate=" + s + "&level=" + e;
            this._send$(a);
        }
        _getAppId$() {
            return window.pgdk$ && pgdk$.platformHandler$ && pgdk$.platformHandler$.appId$ || "null";
        }
        _send$(e) {
            new Laya.HttpRequest().send(e, void 0, "GET", "txt");
        }
    }
    class ms extends rs {
        constructor() {
            super();
        }
        onLoadingComplete$() {
            super.onLoadingComplete$(), Pt.getInstance$().preloadWxSounds$();
        }
    }
    ms.url = "Scene/BattleSceneWx.scene", ms.className = "BattleSceneWx$";
    class _s extends Laya.Script {
        constructor() {
            super(), this._banners$ = [], this._gridAds$ = [], this.MIN_BANNER_WIDTH$ = 300,
                this.MIN_BANNER_HEIGHT$ = 122;
        }
        onStart() {
            this.initShare$(), this._initBgmEven$(), this.isVideoActive$ && this.initVideoAd$(),
                this.isInsertActive$ && this.initInterstitialAd$(), this._refreshBanner$();
        }
        onUpdate() {
            this._refreshBanner$(), this._refreshGridAd$();
        }
        initShare$() {
            if (this.shares = [{
                    title: "",
                    imageUrl: ""
                }, {
                    title: "",
                    imageUrl: ""
                }], !window.wx) return;
            let e = this.shares[Math.floor(this.shares.length * Math.random())];
            wx.onShareAppMessage(function() {
                return {
                    title: e.title,
                    imageUrl: e.imageUrl
                };
            }), window.wx && wx.showShareMenu(), window.wx && wx.updateShareMenu({
                withShareTicket: !0
            });
        }
        shareGame$(e, t) {
            if (!window.wx || !wx.shareAppMessage) return;
            let i = this.shares[Math.floor(this.shares.length * Math.random())],
                s = {
                    title: i.title,
                    imageUrl: i.imageUrl,
                    success: function(t) {
                        e && e(t);
                    },
                    fail: function(e) {
                        t && t(e);
                    }
                };
            wx.shareAppMessage(s);
        }
        _initBgmEven$() {
            if ("undefined" != typeof wx) {
                wx.onShow(function() {
                    h.getInstance$().dispatchEvent$(c.ON_SHOW_GAME$);
                });
                wx.onHide(function() {
                    Be.saveExitTime$(), h.getInstance$().dispatchEvent$(c.ON_EXIT_GAME$);
                });
            }
        }
        navigate2Mini$(e, t, i, s) {
            if ("undefined" != typeof wx) switch (this.channel$) {
                case "zs":
                    if (pgdk$.isBestExport$()) {
                        if (new Date().toDateString() == Laya.LocalStorage.getItem("jumpedAppidsT")) {
                            let t = Laya.LocalStorage.getItem("jumpedAppids"),
                                i = null != t && "" != t && "undefined" != t ? JSON.parse(t) : [];
                            if (i.indexOf(e.appid) > -1) {
                                let t, s = [],
                                    a = pgdk$.getAds$(e.dataType),
                                    n = a.length;
                                for (; --n > -1;) t = a[n], i.indexOf(t.appid) > -1 || s.push(t);
                                s.length > 0 && (e = s[Math.floor(Math.random() * s.length)]);
                            }
                        }
                    }
                    let a = s;
                    s = function() {
                        t && -1 !== t.indexOf("游戏中心") || ki.create(), a && a();
                    };
                    let n = i;
                    i = function() {
                        if (pgdk$.isBestExport$()) {
                            let t, i = new Date().toDateString();
                            if (i == Laya.LocalStorage.getItem("jumpedAppidsT")) {
                                let e = Laya.LocalStorage.getItem("jumpedAppids");
                                t = null != e && "" != e && "undefined" != e ? JSON.parse(e) : [];
                            } else t = [];
                            t.push(e.appid), Laya.LocalStorage.setItem("jumpedAppids", JSON.stringify(t)), Laya.LocalStorage.setItem("jumpedAppidsT", i);
                        }
                        n && n();
                    }, zs.sdk.navigate2Mini(e, pgdk$.openid$, i, s);
                    break;

                default:
                    this._pgNav$(e, t, i, s);
            } else console.warn("非微信环境，无法跳转", e);
        }
        _pgNav$(e, t, i, s) {
            "undefined" != typeof wx ? wx.navigateToMiniProgram && e.appid && wx.navigateToMiniProgram({
                appId: e.appid,
                path: e.path,
                fail: function(e) {
                    e && console.log(e.errMsg), e && e.errMsg && -1 !== e.errMsg.indexOf("cancel") && (console.debug("取消导出"),
                        s && s());
                },
                success: function() {
                    i && i();
                }
            }) : console.warn("非微信环境，无法跳转", e);
        }
        showBanner$(e, t, i) {
            this.isAdActive$ && (pgdk$.isParamGot$ ? pgdk$.replaceBannerWithGridAd$ ? this.showGridAd$(e, t) : (this._needBanner$ = !0,
                "undefined" != typeof wx && wx.createBannerAd && (this._banners$.length >= 2 && this._hideBanner$(),
                    this._banners$.length > 0 && (this._curBanner$ = this._banners$[0], this._curBanner$.startShowTime$ = Date.now(),
                        this._curBanner$.rect$ = e, this._curBanner$.widget$ = t, this._curBanner$.show(),
                        this._resizeBannerPos$(this._curBanner$, e, t), console.log(now$(), "显示广告", this._curBanner$.id$)),
                    (i || !this._curBanner$ || pgdk$.dataHandler$ || pgdk$.dataHandler$.canBannerRefresh$()) && this._createBanner$(!0, e, t))) : setTimeout(this.showBanner$.bind(this, e, t, i), 1e3));
        }
        preLoadBanner$() {
            this._banners$.length > 0 || this._createBanner$(!1, {
                left: 0,
                top: 0,
                width: 300
            }, {});
        }
        hideBanner$() {
            pgdk$.isParamGot$ ? pgdk$.replaceBannerWithGridAd$ ? this.hideGridAd$() : (this._needBanner$ = !1,
                this._hideBanner$()) : setTimeout(this.hideBanner$.bind(this), 1e3);
        }
        _hideBanner$() {
            if (console.log(Date.now(), "隐藏广告"), "undefined" == typeof wx) return;
            if (!this._curBanner$) return;
            if (0 === this._banners$.length) return;
            let e = this._banners$.removeAt$(0);
            e.hide(), this._curBanner$ = void 0, this._banners$.push(e);
        }
        _createBanner$(e, t, i) {
            if ("undefined" == typeof wx || !wx.createBannerAd) return;
            if (this.bannerIds$.length <= 0) return;
            let s = this.bannerIds$.removeAt$(Math.floor(Math.random() * this.bannerIds$.length));
            this.__createBanner$([s, e, t, i]);
        }
        __createBanner$(e) {
            if (!e) return;
            pgdk$.dataHandler$ && pgdk$.dataHandler$.addBannerCreateCnt$ && pgdk$.dataHandler$.addBannerCreateCnt$(),
                console.log(now$(), "创建广告");
            let t = e[0],
                i = e[1],
                s = e[2],
                a = e[3],
                n = wx.createBannerAd({
                    adUnitId: t,
                    style: {
                        left: s.left,
                        top: s.top,
                        width: s.width
                    }
                });
            n.id$ = t, n.onLoad$ = function() {
                this._onBannerLoad$(n, i, s, a);
            }.bind(this), n.onError$ = function(e) {
                console.warn("广告加载失败:", e), n.destroy && n.destroy(), h.getInstance$().dispatchEvent$(c.BANNER_ERROR$);
            }.bind(this), n.onLoad(n.onLoad$.bind(n)), n.onError(n.onError$.bind(n, e));
        }
        _onBannerLoad$(e, t, i, s) {
            e.showTime$ = 0, this._needBanner$ && t && !this._curBanner$ ? (this._curBanner$ = e,
                this._curBanner$.rect$ = i, this._curBanner$.widget$ = s, this._curBanner$.show(),
                this._banners$.insert$(0, e), this._resizeBannerPos$(e, i, s), console.log(now$(), "显示广告", this._curBanner$.id$)) : this._banners$.push(e);
        }
        _resizeBannerPos$(e, t, i) {
            if ((isNaN(e.style.top) || isNaN(e.style.left) || isNaN(e.style.width)) && (e.style.top = t.top,
                    e.style.left = t.left, e.style.width = t.width), t.width / t.height > e.style.realWidth / e.style.realHeight) {
                if (e.style.realHeight > t.height && e.style.realWidth > this.MIN_BANNER_WIDTH$) {
                    let i = Math.max(this.MIN_BANNER_WIDTH$, e.style.realWidth / (e.style.realHeight / t.height));
                    e.style.width = i;
                }
            } else "undefined" != typeof cc ? e.style.width = Math.min(cc.view.getFrameSize().width, Math.max(this.MIN_BANNER_WIDTH$, t.width)) : "undefined" != typeof Laya && (e.style.width = Math.min(Laya.Browser.clientWidth, Math.max(this.MIN_BANNER_WIDTH$, t.width)));
            let s = e.style.realHeight / e.style.realWidth * e.style.width;
            "number" == typeof i.top && "number" != typeof i.bottom ? e.style.top = t.top : "number" != typeof i.top && "number" == typeof i.bottom ? e.style.top = t.top + t.height - s : e.style.top = t.top + t.height / 2 - s / 2,
                "number" == typeof i.left && "number" != typeof i.right ? e.style.left = t.left : "number" != typeof i.left && "number" == typeof i.right ? e.style.left = t.left + t.width - e.style.width : e.style.left = t.left + t.width / 2 - e.style.width / 2;
        }
        _refreshBanner$(e) {
            if (this._curBanner$ && (this._curBanner$.showTime$ += Laya.timer.delta), this._needBanner$ && this._curBanner$) {
                let t = pgdk$.getPgCfg$("adIntervals") || 999999999;
                pgdk$.canTrick$() || (t = 3e4), e || this._curBanner$.showTime$ > t ? (this._curBanner$.showTime$ = 0,
                    this.showBanner$(this._curBanner$.rect$, this._curBanner$.widget$, e), console.log(now$(), "刷新Banner")) : this._resizeBannerPos$(this._curBanner$, this._curBanner$.rect$, this._curBanner$.widget$);
            }
        }
        initInterstitialAd$() {
            this.createInterstitialAd$();
        }
        createInterstitialAd$() {
            this.isAdActive$ ? "undefined" != typeof wx && wx.createInterstitialAd ? this.insertUnitId$ ? (this._curInterstitialAd$ = wx.createInterstitialAd({
                adUnitId: this.insertUnitId$
            }), this._curInterstitialAd$.onClose(function() {
                this.createInterstitialAd$();
            }.bind(this))) : console.warn(now$(), "未配置插屏广告ID") : console.warn(now$(), "非微信环境，无法创建插屏广告") : console.warn(now$(), "流量主未开通，无法创建插屏广告");
        }
        showInterstitialAd$() {
            this.isAdActive$ ? "undefined" != typeof wx && wx.createInterstitialAd ? this._curInterstitialAd$ ? this._curInterstitialAd$ && this._curInterstitialAd$.show().catch(e => {
                console.error(e);
            }) : console.warn(now$(), "请先使用initInterstitialAd$()，预加载插屏广告") : console.warn(now$(), "非微信环境，无法创建插屏广告") : console.warn(now$(), "流量主未开通，无法创建插屏广告");
        }
        initVideoAd$() {
            this.hasVideoInit$ || (this._videoErrorTimes = 0, this._maxVideoErrorTimes = 5,
                this.createVideoAd$(), this.hasVideoInit$ = !0);
        }
        createVideoAd$() {
            this.isAdActive$ ? "undefined" != typeof wx && wx.createRewardedVideoAd ? this.videoUnitId$ ? this._videoAd$ || (this._videoAd$ = wx.createRewardedVideoAd({
                adUnitId: this.videoUnitId$
            }), this._videoAd$.onLoad(function() {
                this._videoErrorTimes = 0, console.log(now$(), "激励式视频加载成功");
            }.bind(this)), this._videoAd$.onClose(function(e) {
                this._videoCloseCallback$ && (this._videoCloseCallback$(!e || e.isEnded), this._videoCloseCallback$ = void 0,
                    h.getInstance$().dispatchEvent$(c.ON_VIDEO_HIDE$));
            }.bind(this)), this._videoAd$.onError(function(e) {
                this._videoErrorTimes++, this._videoErrorTimes >= this._maxVideoErrorTimes ? console.warn(now$(), "激励式视频加载失败次数过多, 停止重试。 ") : (console.warn(now$(), "激励式视频加载失败, 重试" + this._videoErrorTimes),
                    console.warn(e), this._videoAd$.load());
            }.bind(this))) : console.warn(now$(), "未配置激励式视频ID") : console.warn(now$(), "非微信环境，无法创建激励式视频") : console.warn(now$(), "流量主未开通，无法创建激励式视频");
        }
        showVideoAd$(e) {
            return this.isAdActive$ ? "undefined" != typeof wx && wx.createRewardedVideoAd ? void(this._videoAd$ ? !this._videoAd$ || this._videoErrorTimes >= this._maxVideoErrorTimes ? e && e(!1) : (this._videoCloseCallback$ = e,
                h.getInstance$().dispatchEvent$(c.ON_VIDEO_SHOW$), this._videoAd$.show()) : console.error(now$(), "请先使用initVideoAd$()，预加载激励式视频")) : (console.warn(now$(), "非微信环境，无法播放激励式视频。当做成功回调。"),
                void(e && e(!0))) : (console.warn(now$(), "流量主未开通，无法创建激励式视频。当做成功回调。"), void(e && e(!0)));
        }
        createGridAd$(e, t, i) {
            if ("undefined" == typeof wx || !wx.createGridAd) return;
            if (!this.gridIds$ || this.gridIds$.length <= 0) return;
            let s = this.gridIds$.removeAt$(Math.floor(Math.random() * this.gridIds$.length));
            this._createGridAd$(s, e, t, i);
        }
        _createGridAd$(e, t, i, s) {
            if ("undefined" == typeof wx || !wx.createGridAd) return void console.warn(now$(), "非微信环境，无法创建格子广告");
            let a = wx.createGridAd({
                adUnitId: e,
                adTheme: "white",
                gridCount: 5,
                style: {
                    left: i.left,
                    top: i.top,
                    width: i.width,
                    opacity: .8
                }
            });
            a.id$ = e, a.onLoad(function() {
                console.log(now$(), "格子广告加载成功"), this._onGridAdLoad$(a, t, i, s);
            }.bind(this)), a.onError(function(n) {
                console.warn(now$(), "格子广告加载失败", n), a.destroy && a.destroy(), setTimeout(this._createGridAd$.bind(this, e, t, i, s), 3e3);
            }.bind(this));
        }
        _onGridAdLoad$(e, t, i, s) {
            e.showTime$ = 0, this._needGridAd$ && t && !this._curGridAd$ ? (this._curGridAd$ = e,
                this._curGridAd$.rect$ = i, this._curGridAd$.widget$ = s, this._curGridAd$.show(),
                this._gridAds$.insert$(0, e), this._resizeGridAd$(e, i, s), console.log(Date.now(), "显示格子广告", this._curGridAd$.id$)) : this._gridAds$.push(e);
        }
        showGridAd$(e, t) {
            this.isAdActive$ ? "undefined" != typeof wx && wx.createRewardedVideoAd ? (this._needGridAd$ = !0,
                this._gridAds$.length >= 2 && this._hideGridAd$(), this._gridAds$.length > 0 && (this._curGridAd$ = this._gridAds$[0],
                    this._curGridAd$.startShowTime$ = Date.now(), this._curGridAd$.rect$ = e, this._curGridAd$.widget$ = t,
                    this._curGridAd$.show(), this._resizeGridAd$(this._curGridAd$, e, t), console.log(Date.now(), "显示格子广告", this._curGridAd$.id$)),
                this.createGridAd$(!0, e, t)) : console.warn(now$(), "非微信环境，无法播放格子广告。当做成功回调。") : console.warn(now$(), "流量主未开通，无法创建格子广告。当做成功回调。");
        }
        hideGridAd$() {
            this._needGridAd$ = !1, this._hideGridAd$();
        }
        _hideGridAd$() {
            if (console.log(Date.now(), "隐藏格子广告"), "undefined" == typeof wx) return;
            if (!this._curGridAd$) return;
            if (0 === this._gridAds$.length) return;
            let e = this._gridAds$.removeAt$(0);
            e.hide();
            let t = pgdk$.getPgCfg$("adIntervals") || 999999999;
            if (t = 999999999, this._gridAds$.length >= 1 && e.showTime$ > 999999999) {
                console.log(Date.now(), "销毁格子广告");
                let t = e.id$,
                    i = e.rect$,
                    s = e.widget$;
                this._curGridAd$.destroy && this._curGridAd$.destroy(), this._curGridAd$ = void 0,
                    this._createGridAd$(t, !1, i, s);
            } else this._curGridAd$ = void 0, this._gridAds$.push(e);
        }
        _resizeGridAd$() {
            let e = this._curGridAd$,
                t = e.rect$,
                i = e.widget$;
            if (!t || !i) return;
            if ((isNaN(e.style.top) || isNaN(e.style.left) || isNaN(e.style.width)) && (e.style.top = t.top,
                    e.style.left = t.left, e.style.width = t.width), t.width / t.height > e.style.realWidth / e.style.realHeight) {
                if (e.style.realHeight > t.height && e.style.realWidth > this.MIN_BANNER_WIDTH$) {
                    let i = Math.max(this.MIN_BANNER_WIDTH$, e.style.realWidth / (e.style.realHeight / t.height));
                    e.style.width = i;
                }
            } else "undefined" != typeof cc ? e.style.width = Math.min(cc.view.getFrameSize().width, Math.max(this.MIN_BANNER_WIDTH$, t.width)) : "undefined" != typeof Laya && (e.style.width = Math.min(Laya.Browser.clientWidth, Math.max(this.MIN_BANNER_WIDTH$, t.width)));
            let s = e.style.realHeight / e.style.realWidth * e.style.width;
            "number" == typeof i.top && "number" != typeof i.bottom ? e.style.top = t.top : "number" != typeof i.top && "number" == typeof i.bottom ? e.style.top = t.top + t.height - s : e.style.top = t.top + t.height / 2 - s / 2,
                "number" == typeof i.left && "number" != typeof i.right ? e.style.left = t.left : "number" != typeof i.left && "number" == typeof i.right ? e.style.left = t.left + t.width - e.style.width : e.style.left = t.left + t.width / 2 - e.style.width / 2;
        }
        _refreshGridAd$() {
            this._curGridAd$ && (this._curGridAd$.showTime$ += Laya.timer.delta), this._needGridAd$ && this._curGridAd$ && this._resizeGridAd$();
        }
    }
    class ys extends Laya.Script {
        onStart() {
            void 0 !== zs.sdk ? (zs.sdk.loadAd(function(e) {
                console.log("指色广告数据拉取成功", e), pgdk$.isSdkReady$ = !0, this.data$ = e, this.formatData$();
            }.bind(this)), "undefined" != typeof wx && this.login$(), this.loadCfg$()) : console.error("指色SDK文件未正确引入");
        }
        loadCfg$() {
            zs.sdk.loadCfg(function(e) {
                console.log("指色后台开关拉取成功", e), this.cfg$ = e;
            }.bind(this), function(e) {
                console.error("指色后台开关拉取失败", e);
            });
        }
        login$() {
            zs.sdk.login(function(e) {
                console.log("指色SDK登录成功", "openid=" + e), pgdk$ && (pgdk$.openid$ = e), zs.sdk.init(e);
            }.bind(this), function(e) {
                console.error("指色SDK登录失败", e);
            }.bind(this));
        }
        formatData$() {
            for (const e in this.data$)
                if (this.data$.hasOwnProperty(e)) {
                    const t = this.data$[e];
                    for (let i = 0; i < t.length; i++) {
                        let s = t[i];
                        s.title = s.app_title, s.img = s.app_icon, s.dataType = e, s.app_icon_str && Array.isArray(s.app_icon_str) && (s.img = s.app_icon_str);
                    }
                }
        }
        getAds$(e) {
            return this.data$[e];
        }
        canTrick$() {
            if (this.cfg$) {
                if (1 !== this.cfg$.zs_switch) return !1;
                if (1 !== this.cfg$.zs_banner_city) return !1;
            }
            return !0;
        }
        treasurePageSwitch$() {
            if (this.cfg$) return this.cfg$.zs_click_award_num;
        }
        btnMoveSwitch$() {
            return !!this.cfg$ && !!this.cfg$.zs_banner_vertical_enable;
        }
        starWatchVideoSwitch$() {
            return !!this.cfg$ && !!this.cfg$.zs_start_video_switch;
        }
        slideJumpSwitch$() {
            return !!this.cfg$ && "1" == this.cfg$.zs_slide_jump_switch;
        }
    }
    class Ss {
        static init() {
            let e = Laya.ClassUtils.regClass;
            e("script/Module/Loading/View/LoginLoadingUI.js", R), e("script/sdk/view/PgTopView.js", V),
                e("script/Module/Battle/QqView/BattleLoadingUIQq.js", Q), e("script/sdk/view/PgQQBlockAd.js", J),
                e("script/battle/Joystick.js", Z), e("script/Widgets/TimeBar.js", ie), e("script/Widgets/RankList.js", ae),
                e("script/Module/Battle/View/TargetCompass.js", ce), e("script/Module/Battle/View/AnimProgressBar.js", ge),
                e("script/Widgets/ExpBar.js", ue), e("script/Module/Battle/QqView/BattleUIQq.js", Le),
                e("script/Widgets/KillTipUI.js", we), e("script/Module/Battle/QqView/OfflineAwardUIQq.js", xe),
                e("script/Module/Battle/QqView/RankUpUIQq.js", Te), e("script/Module/Battle/QqView/ResurgenceUIQq.js", Ue),
                e("script/Module/Battle/QqView/SettlementUIQq.js", je), e("script/Module/Battle/View/TaskListItemUI.js", qe),
                e("script/Module/Battle/QqView/AchievementDialogUIQq.js", Qe), e("script/Module/Battle/QqView/NotEnoughCoinDialogQq.js", Ze),
                e("script/Module/Battle/View/ChestGridItem.js", nt), e("script/Widgets/KeyList.js", ot),
                e("script/Module/Battle/QqView/OpenChestViewQq.js", ht), e("script/Module/Battle/View/SigninItemUI.js", dt),
                e("script/Module/Battle/QqView/SigninDialogUIQq.js", ut), e("script/Module/Battle/QqView/SkinTryUseUIQq.js", yt),
                e("script/Module/Battle/QqView/SpinDialogUIQq.js", ft), e("script/Module/Battle/QqView/TaskDialogUIQq.js", It),
                e("script/sdk/view/PgTreasureBox.js", pt), e("script/Module/Battle/QqView/TreasureBoxUI2Qq.js", Et),
                e("script/Module/Battle/QqView/TreasureBoxUIQq.js", mt), e("script/sdk/view/PgViewIndex.js", At),
                e("script/Widgets/SettingsBar.js", Bt), e("script/battle/RankUI.js", bt), e("script/Widgets/CoinLabel.js", xt),
                e("script/Module/Main/QqView/MainUIQq.js", Ot), e("script/Module/Battle/View/SkinStoreView/SkinStoreTabItem.js", Ht),
                e("script/Module/Battle/View/SkinStoreView/SkinStoreGridItem.js", Ft), e("script/Module/Battle/View/SkinStoreView/SkinStoreGridPage.js", Yt),
                e("script/Module/Battle/QqView/SkinStoreView/SkinStoreViewQq.js", qt), e("script/Module/Battle/QqView/SkinUnlockDialogUIQq.js", Jt),
                e("script/Module/Battle/VivoView/BattleLoadingUIVivo.js", Zt), e("script/Module/Battle/VivoView/BattleUIVivo.js", ei),
                e("script/Module/Battle/VivoView/OfflineAwardUIVivo.js", ti), e("script/Module/Battle/VivoView/RankUpUIVivo.js", ii),
                e("script/Module/Battle/VivoView/ResurgenceUIVivo.js", si), e("script/sdk/view/PgVivoNativeAd.js", ai),
                e("script/Module/Battle/VivoView/SettlementUIVivo.js", ni), e("script/Module/Battle/VivoView/AchievementDialogUIVivo.js", oi),
                e("script/Module/Battle/VivoView/NotEnoughCoinDialogVivo.js", ri), e("script/Module/Battle/VivoView/OpenChestViewVivo.js", $i),
                e("script/Module/Battle/VivoView/SigninDialogUIVivo.js", hi), e("script/Module/Battle/VivoView/SpinDialogUIVivo.js", li),
                e("script/Module/Battle/VivoView/TaskDialogUIVivo.js", di), e("script/Module/Main/VivoView/MainUIVivo.js", ci),
                e("script/Module/Battle/VivoView/SkinStoreView/SkinStoreViewVivo.js", gi), e("script/Module/Battle/VivoView/SkinUnlockDialogUIVivo.js", ui),
                e("script/Module/Battle/View/BattleLoadingUI.js", X), e("script/Module/Battle/View/BattleUI.js", Se),
                e("script/Module/Battle/View/OfflineAwardUI.js", be), e("script/Module/Battle/View/RankUpUI.js", Pe),
                e("script/Module/Battle/View/ResurgenceUI.js", Oe), e("script/Module/Battle/View/SettlementUI.js", Ke),
                e("script/Module/Battle/View/AchievementDialogUI.js", Xe), e("script/Module/Battle/View/NotEnoughCoinDialog.js", Je),
                e("script/Module/Battle/View/OpenChestView.js", $t), e("script/Module/Battle/View/SigninDialogUI.js", gt),
                e("script/Module/Battle/View/SpinDialogUI.js", Ct), e("script/Module/Battle/View/TaskDialogUI.js", vt),
                e("script/Module/Battle/View/Toast.js", Ce), e("script/Module/Main/View/MainUI.js", Mt),
                e("script/Module/Battle/View/SkinStoreView/SkinStoreView.js", jt), e("script/Module/Battle/View/SkinUnlockDialogUI.js", Qt),
                e("script/sdk/view/PgViewList.js", pi), e("script/Module/Battle/WxView/BattleLoadingUIWx.js", mi),
                e("script/sdk/view/PgSingleAd.js", _i), e("script/Module/Battle/WxView/BattleUIWx.js", yi),
                e("script/Module/Battle/WxView/OfflineAwardUIWx.js", Si), e("script/Module/Battle/WxView/RankUpUIWx.js", Li),
                e("script/Module/Battle/WxView/ResurgenceUIWx.js", wi), e("script/Module/Battle/WxView/SettlementUIWx.js", Ci),
                e("script/Module/Battle/WxView/AchievementDialogUIWx.js", fi), e("script/Module/Battle/WxView/NotEnoughCoinDialogWx.js", vi),
                e("script/Module/Battle/WxView/OpenChestViewWx.js", Ii), e("script/Module/Battle/WxView/SigninDialogUIWx.js", Ei),
                e("script/Module/Battle/WxView/SpinDialogUIWx.js", Di), e("script/Module/Battle/WxView/TaskDialogUIWx.js", Ai),
                e("script/Module/Main/WxView/MainUIWx.js", Bi), e("script/Module/Battle/WxView/SkinStoreView/SkinStoreViewWx.js", bi),
                e("script/Module/Battle/WxView/SkinUnlockDialogUIWx.js", xi), e("script/Module/Battle/Scene/BattleScene.js", rs),
                e("script/Manager/Config.js", $s), e("script/sdk/Pgdk.js", Dt), e("script/Module/Battle/Scene/BattleSceneQq.js", hs),
                e("script/sdk/platform/PgdkQQ.js", ls), e("script/sdk/data/PgdkDataZsQQ.js", ds),
                e("script/Module/Battle/Scene/BattleSceneVivo.js", cs), e("script/sdk/data/PgdkDataZsVivo.js", gs),
                e("script/sdk/platform/PgdkVivo.js", us), e("script/sdk/reporter/PgReporter.js", ps),
                e("script/Module/Battle/Scene/BattleSceneWx.js", ms), e("script/sdk/platform/PgdkWx.js", _s),
                e("script/sdk/data/PgdkDataZsWx.js", ys), e("script/Module/Battle/View/SpinItemUI.js", St);
        }
    }
    Ss.width = 640, Ss.height = 1136, Ss.scaleMode = "showall", Ss.screenMode = "none",
        Ss.alignV = "middle", Ss.alignH = "center", Ss.startScene = "Prefab/Wx/Battle/BattleWindowWx.scene",
        Ss.sceneRoot = "", Ss.debug = !1, Ss.stat = !1, Ss.physicsDebug = !1, Ss.exportSceneToJson = !0,
        Ss.init();
    class Ls {
        constructor() {
            this.maxLevel$ = t.HAVE_OPEN_LEV$, this.initConfig$();
        }
        initConfig$() {
            let e, t, i;
            for (e in D.custom) t = D.custom[e], (i = Number(t.level)) > this.maxLevel$ && (this.maxLevel$ = i);
        }
        getConfig$(e) {
            if (e > this.maxLevel$) {
                return e = Math.floor(Math.random() * this.maxLevel$) + 1, D.custom[e];
            }
            return D.custom[e];
        }
    }
    class ws {
        constructor() {
            this.showPages$ = [], this.showShopIds$ = [], this.showPageGoods$ = {}, this.videoShopConfigDic$ = {},
                this.boxRewardConfigs$ = [], this.roleboxRewardConfigs$ = [], this.buyConfigs$ = [],
                this.initConfig$();
        }
        initConfig$() {
            let e, t, i, s;
            for (e in D.shop)
                if (e = Number(e), (i = D.shop[e]) && 1 == i.isShow)
                    if ((s = this.showPageGoods$[i.page]) || (this.showPageGoods$[i.page] = s = []),
                        s.push(e), this.showShopIds$.contains$(e) || (this.showShopIds$.push(e), t = Number(i.page),
                            this.showPages$.contains$(t) || this.showPages$.push(t)), i.buyType == ws.BUY_TYPE$.BOX$) this.boxRewardConfigs$.push(i),
                        i.type == ws.GOODS$.WEAPON$ && this.roleboxRewardConfigs$.push(i);
                    else if (i.buyType == ws.BUY_TYPE$.BUY$) this.buyConfigs$.push(i);
            else if (i.buyType == ws.BUY_TYPE$.VIDEO$) {
                let e = this.videoShopConfigDic$[i.page];
                e || (this.videoShopConfigDic$[i.page] = e = []), e.push(i);
            }
        }
        getVideoShopConfig$(e) {
            return this.videoShopConfigDic$[e];
        }
        getAllBoxRewardShopConfigs$() {
            return this.boxRewardConfigs$;
        }
        getRoleBoxRewardShopConfigs() {
            return this.roleboxRewardConfigs$;
        }
        getbuyConfigs$() {
            return this.buyConfigs$;
        }
        getShopId$(e, t) {
            let i = this.showPageGoods$[e];
            if (!i) return;
            let s, a = i.length;
            for (; --a > -1;)
                if ((s = D.shop[i[a]]).itemId == t) return s.id;
        }
    }
    ws.SHOP_PAGE$ = {
        WEAPON$: 1,
        SHIELD$: 2
    }, ws.GOODS$ = {
        WEAPON$: 1,
        SHIELD$: 2
    }, ws.BUY_TYPE$ = {
        BUY$: 1,
        VIDEO$: 2
    };
    class Cs {
        constructor() {
            this.inited$ = !1, this.initedCB$ = void 0, this.customConfig$ = void 0, this.shopConfig$ = void 0;
        }
        static getInstance$() {
            return null == Cs.instance$ && (Cs.instance$ = new Cs()), Cs.instance$;
        }
        get isInited$() {
            return this.inited$;
        }
        init$(e) {
            this.initedCB$ = e, this.loadAllConfig();
        }
        loadAllConfig() {
            this.customConfig$ = new Ls(), this.shopConfig$ = new ws(), this.loadAllConfigComplete();
        }
        loadAllConfigComplete() {
            this.inited$ = !0, this.initedCB$ && this.initedCB$();
        }
    }
    Cs.instance$ = void 0;
    class fs {
        constructor() {
            this.inited$ = !1;
        }
        static getInstance$() {
            return fs.instance$ || (fs.instance$ = new fs()), fs.instance$;
        }
        preCompile22() {
            Laya.Shader3D.compileShader("BLINNPHONG", 0, 0, 8194, 8, 0), Laya.Shader3D.compileShader("BLINNPHONG", 0, 0, 8194, 8, 2),
                Laya.Shader3D.compileShader("BLINNPHONG", 0, 0, 8194, 8, 18), Laya.Shader3D.compileShader("BLINNPHONG", 0, 0, 8194, 40, 0),
                Laya.Shader3D.compileShader("BLINNPHONG", 0, 0, 8194, 40, 2), Laya.Shader3D.compileShader("BLINNPHONG", 0, 0, 8194, 40, 16),
                Laya.Shader3D.compileShader("BLINNPHONG", 0, 0, 8194, 40, 18), Laya.Shader3D.compileShader("BLINNPHONG", 0, 0, 8194, 72, 0),
                Laya.Shader3D.compileShader("BLINNPHONG", 0, 0, 8194, 72, 2), Laya.Shader3D.compileShader("BLINNPHONG", 0, 0, 8194, 104, 0),
                Laya.Shader3D.compileShader("BLINNPHONG", 0, 0, 8198, 8, 0), Laya.Shader3D.compileShader("BLINNPHONG", 0, 0, 8198, 8, 2),
                Laya.Shader3D.compileShader("BLINNPHONG", 0, 0, 8198, 8, 18), Laya.Shader3D.compileShader("BLINNPHONG", 0, 0, 8198, 40, 0),
                Laya.Shader3D.compileShader("BLINNPHONG", 0, 0, 8198, 40, 16), Laya.Shader3D.compileShader("BLINNPHONG", 0, 0, 8198, 40, 18),
                Laya.Shader3D.compileShader("BLINNPHONG", 0, 0, 8198, 72, 0), Laya.Shader3D.compileShader("BLINNPHONG", 0, 0, 8198, 72, 2),
                Laya.Shader3D.compileShader("BLINNPHONG", 0, 0, 8198, 104, 0), Laya.Shader3D.compileShader("PARTICLESHURIKEN", 0, 0, 8192, 67117064, 2),
                Laya.Shader3D.compileShader("PARTICLESHURIKEN", 0, 0, 8192, 67272712, 14), Laya.Shader3D.compileShader("Effect", 0, 0, 8192, 0, 10),
                console.debug("预编译完毕");
        }
        preCompile25$() {
            for (var e in this.shaderObj = {
                    BLINNPHONG: [{
                        defineNames: ["DIRECTIONLIGHT", "UV"],
                        passIndex: 0,
                        subShaderIndex: 0
                    }, {
                        defineNames: ["DIRECTIONLIGHT", "UV", "UV1"],
                        passIndex: 0,
                        subShaderIndex: 0
                    }, {
                        defineNames: ["DIFFUSEMAP", "DIRECTIONLIGHT", "UV"],
                        passIndex: 0,
                        subShaderIndex: 0
                    }, {
                        defineNames: ["GPU_INSTANCE", "DIRECTIONLIGHT", "UV"],
                        passIndex: 0,
                        subShaderIndex: 0
                    }, {
                        defineNames: ["GPU_INSTANCE", "DIFFUSEMAP", "DIRECTIONLIGHT", "UV"],
                        passIndex: 0,
                        subShaderIndex: 0
                    }],
                    Effect: [{
                        defineNames: ["ADDTIVEFOG", "MAINTEXTURE"],
                        passIndex: 0,
                        subShaderIndex: 0
                    }],
                    Unlit: [{
                        defineNames: ["ALPHATEST", "ALBEDOTEXTURE"],
                        passIndex: 0,
                        subShaderIndex: 0
                    }],
                    PARTICLESHURIKEN: [{
                        defineNames: ["DIFFUSEMAP", "SPHERHBILLBOARD", "COLOROVERLIFETIME", "SIZEOVERLIFETIMECURVE", "ROTATIONOVERLIFETIME", "ROTATIONOVERLIFETIMECONSTANT", "TEXTURESHEETANIMATIONCURVE", "SHAPE", "TINTCOLOR"],
                        passIndex: 0,
                        subShaderIndex: 0
                    }, {
                        defineNames: ["DIFFUSEMAP", "SPHERHBILLBOARD", "COLOROVERLIFETIME", "SHAPE"],
                        passIndex: 0,
                        subShaderIndex: 0
                    }, {
                        defineNames: ["DIFFUSEMAP", "HORIZONTALBILLBOARD", "COLOROVERLIFETIME", "SIZEOVERLIFETIMECURVE", "SHAPE", "TINTCOLOR"],
                        passIndex: 0,
                        subShaderIndex: 0
                    }, {
                        defineNames: ["DIFFUSEMAP", "SPHERHBILLBOARD", "SIZEOVERLIFETIMECURVE", "SHAPE", "TINTCOLOR"],
                        passIndex: 0,
                        subShaderIndex: 0
                    }, {
                        defineNames: ["DIFFUSEMAP", "ADDTIVEFOG", "SPHERHBILLBOARD", "SIZEOVERLIFETIMECURVE", "SHAPE", "TINTCOLOR"],
                        passIndex: 0,
                        subShaderIndex: 0
                    }, {
                        defineNames: ["DIFFUSEMAP", "ADDTIVEFOG", "SPHERHBILLBOARD", "COLOROVERLIFETIME", "SIZEOVERLIFETIMECURVE", "ROTATIONOVERLIFETIME", "ROTATIONOVERLIFETIMECONSTANT", "TINTCOLOR"],
                        passIndex: 0,
                        subShaderIndex: 0
                    }, {
                        defineNames: ["DIFFUSEMAP", "STRETCHEDBILLBOARD", "COLOROVERLIFETIME", "SHAPE", "TINTCOLOR"],
                        passIndex: 0,
                        subShaderIndex: 0
                    }, {
                        defineNames: ["DIFFUSEMAP", "SPHERHBILLBOARD", "COLOROVERLIFETIME", "SHAPE", "TINTCOLOR"],
                        passIndex: 0,
                        subShaderIndex: 0
                    }, {
                        defineNames: ["DIFFUSEMAP", "SPHERHBILLBOARD", "COLOROVERLIFETIME", "SIZEOVERLIFETIMECURVE", "ROTATIONOVERLIFETIME", "ROTATIONOVERLIFETIMECONSTANT", "TINTCOLOR"],
                        passIndex: 0,
                        subShaderIndex: 0
                    }, {
                        defineNames: ["DIFFUSEMAP", "SPHERHBILLBOARD", "SIZEOVERLIFETIMECURVE", "TINTCOLOR"],
                        passIndex: 0,
                        subShaderIndex: 0
                    }, {
                        defineNames: ["DIFFUSEMAP", "ADDTIVEFOG", "SPHERHBILLBOARD", "COLOROVERLIFETIME", "ROTATIONOVERLIFETIME", "ROTATIONOVERLIFETIMECONSTANT", "SHAPE", "TINTCOLOR"],
                        passIndex: 0,
                        subShaderIndex: 0
                    }]
                }, this.shaderObj) {
                let t = this.shaderObj[e];
                for (let i = 0; i < t.length; i++) {
                    let s = t[i],
                        a = new Laya.ShaderVariant(Laya.Shader3D.find(e), s.subShaderIndex, s.passIndex, s.defineNames);
                    Laya.Shader3D.debugShaderVariantCollection.add(a);
                }
            }
            Laya.Shader3D.debugShaderVariantCollection.compile(), console.log("预编译完毕");
        }
    }
    fs.instance$ = void 0;
    class vs {
        constructor() {
            b.registerEvent$(B.Event$.SHOW_SETTLEMENT_VIEW$, this.showSettlementView, this),
                b.registerEvent$(B.Event$.SHOW_RESURGENCE_VIEW$, this.showResurgenceView, this),
                b.registerEvent$(B.Event$.SHOW_HOME_VIEW$, this.showHomeView, this), b.registerEvent$(B.Event$.RANK_LEVEL_CHANGE$, this.showRankUpView, this);
        }
        static initInstance() {
            this.instance || (this.instance = new vs());
        }
        showSettlementView(e) {
            l.getInstance$().openUI$(Laya.classWithChannel$("SettlementUI"), void 0, e);
        }
        showResurgenceView(e) {
            l.getInstance$().openUI$(Laya.classWithChannel$("ResurgenceUI"), void 0, e);
        }
        showHomeView() {
            l.getInstance$().openUI$(Laya.classWithChannel$("MainUI"));
        }
        showRankUpView(e) {
            let t = e.oldRankInfo,
                i = e.newRankInfo;
            Pe.openWithData$({
                oldRankInfo: t,
                newRankInfo: i
            });
        }
    }
    vs.instance = null;
    class Is {
        constructor() {
            console.log("tcy =======GameManager"), this.inited$ = !1;
        }
        static getInstance$() {
            return null == Is.instance$ && (window.gameManager = Is.instance$ = new Is()), Is.instance$;
        }
        initManager$(e) {
            if (!this.inited$) return h.getInstance$().isInited$ ? Cs.getInstance$().isInited$ ? l.getInstance$().isInited$ ? Y.getInstance$().isInited$ ? window.curScene ? j.getInstance$().isInited$ ? Is.loadedPacks ? Pt.getInstance$().isInited$ ? void(Pi.getInstance$().isInited$ ? this.onInitedGame$() : Pi.getInstance$().init$(this.initManager$.bind(this, ["SceneManager"]))) : (console.log("tcy AudioManager", e),
                void Pt.getInstance$().init$(this.initManager$.bind(this, ["AudioManager"]))) : (console.log("tcy askLoadedPacks!!!!", e),
                void l.getInstance$().openUI$(Laya.classWithChannel$("LoginLoadingUI"), null, function() {
                    Is.loadedPacks = !0, Is.getInstance$().initManager$();
                }.bind(this))) : (console.log("tcy TimeManager", e), void j.getInstance$().init$(this.initManager$.bind(this, ["TimeManager"]))) : (console.log("tcy curScene", e),
                void Pi.getInstance$().openScene$(Laya.classWithChannel$("BattleScene"), Laya.Handler.create(this, this.initManager$, ["BattleScene"]))) : (console.log("tcy DataManager", e),
                void Y.getInstance$().init$(this.initManager$.bind(this, ["DataManager"]))) : (console.log("tcy UIManager", e),
                void l.getInstance$().init$(this.initManager$.bind(this, ["UIManager"]))) : (console.log("tcy ConfigManager", e),
                void Cs.getInstance$().init$(this.initManager$.bind(this, ["ConfigManager"]))) : (console.log("tcy EventManager", e),
                void h.getInstance$().init$(this.initManager$.bind(this, ["EventManager"])));
        }
        onInitedGame$() {
            vs.initInstance(), curScene.onLoadingComplete$();
        }
    }
    Is.instance$ = void 0;
    class Es {
        constructor(e) {
            this.arrayBuffer$ = e, this.index$ = 0, this.dv = new DataView(this.arrayBuffer$);
        }
        readByte$() {
            return this.dv.getInt8(this.index$++);
        }
        readShort$() {
            var e = this.dv.getInt16(this.index$);
            return this.index$ += 2, e;
        }
        readInt$() {
            var e = this.dv.getInt32(this.index$);
            return this.index$ += 4, e;
        }
        readUint$() {
            var e = this.dv.getUint32(this.index$);
            return this.index$ += 4, e;
        }
        readLong$() {
            var e = this.readInt$(),
                t = this.readUint$();
            return e * Math.POW_2_32 + t;
        }
        readFloat$() {
            var e = this.dv.getFloat32(this.index$);
            return this.index$ += 4, e;
        }
        readUTF$() {
            var e = this.readShort$();
            return this.readText$(e);
        }
        readText$(e) {
            for (var t = this.arrayBuffer$.slice(this.index$, this.index$ + e), i = new Uint8Array(t), s = "", a = e, n = 0, o = String.fromCharCode, r = 0, $ = i; r < a;)(n = $[r++]) < 128 ? 0 != n && (s += o(n)) : s += o(n < 224 ? (63 & n) << 6 | 127 & $[r++] : n < 240 ? (31 & n) << 12 | (127 & $[r++]) << 6 | 127 & $[r++] : (15 & n) << 18 | (127 & $[r++]) << 12 | $[r++] << 6 & 127 | 127 & $[r++]),
                0;
            return this.index$ += e, s;
        }
        readArrayBuffer$(e) {
            var t = this.arrayBuffer$.slice(this.index$, this.index$ + e);
            return this.index$ += e, t;
        }
    }
    class Ds {
        static initData$() {
            if (t.LOAD_DATA_JS$) {
                function dataload$() {
                    for (var e in D)
                        if ("properties" != e) {
                            var t = D[e],
                                i = D.properties[e];
                            if (i)
                                for (var s in t) {
                                    var a = t[s],
                                        n = {};
                                    n[i[0]] = s;
                                    for (var o = 1, r = i.length; o < r; o++) {
                                        var $ = a[o - 1];
                                        void 0 !== $ && (n[i[o]] = $);
                                    }
                                    t[s] = n;
                                }
                        }
                    onDataCompleted$();
                }
                dataload$();
            } else {
                function dataload$() {
                    for (var e, t, i, s, a, n, o, r = {}, $ = Laya.Loader.getRes("script/data.bin"), h = new Es($), l = h.readUTF$(), d = [], c = [];
                        "#" != l;) {
                        a = r[l] = {}, e = h.readByte$(), d.length = 0, c.length = 0;
                        for (var g = 0; g < e; g++) d.push(h.readUTF$()), c.push(h.readUTF$());
                        t = h.readShort$();
                        for (var u = 0; u < t; u++)
                            for (var p = 0; p < e; p++) {
                                switch (c[p]) {
                                    case "byte":
                                        i = h.readByte$();
                                        break;

                                    case "short":
                                        i = h.readShort$();
                                        break;

                                    case "int":
                                        i = h.readInt$();
                                        break;

                                    case "float":
                                        i = h.readFloat$();
                                        break;

                                    case "string":
                                        i = h.readUTF$();
                                        break;

                                    case "int[]":
                                        if (i = void 0, (n = h.readShort$()) > 0)
                                            for (i = [], o = 0; o < n; o++) i.push(h.readInt$());
                                        break;

                                    case "float[]":
                                        if (i = void 0, (n = h.readShort$()) > 0)
                                            for (i = [], o = 0; o < n; o++) i.push(h.readFloat$());
                                        break;

                                    default:
                                        console.error("DataInputStream缺失解析方法：" + c[p]);
                                }
                                0 == p && (s = a[i] = {}), s[d[p]] = i;
                            }
                        l = h.readUTF$();
                    }
                    D = r, Laya.Loader.clearRes("script/data.bin", !0), onDataCompleted$();
                }
                Laya.loader.load("script/data.bin", Handler.create(this, dataload$), null, Laya.Loader.BUFFER);
            }

            function onDataCompleted$() {
                ! function() {
                    var e = [];
                    for (var t in D.PrefabsPath) {
                        var i = D.PrefabsPath[t];
                        i.subModel ? i.subModel = i.subModel.split("#") : i.subModel = e, i.actionInShop ? i.actionInShop = i.actionInShop.split("#") : i.actionInShop = e;
                    }
                }(), D._inited = !0, h.getInstance$().dispatchEvent$(c.ON_DATA_LOAD$);
            }
        }
    }
    class As {
        constructor() {
            this.curPos$ = new Laya.Vector3();
        }
        static create$(e, t, i) {
            let s = new As();
            return s.init$(e, t, i), s;
        }
        init$(e, t, i) {
            this.targetUI = e, this.modelId = t, this.loadedHandler$ = i, this.uiData = g.getUIData$(e),
                this.modelCtr$ = u.create$(this.uiData.scene, this.modelId, Laya.Handler.create(this, this.onModelLoaded$)),
                Laya.timer.loop(1, this, this.updatePos$);
        }
        onModelLoaded$() {
            this.loadedHandler$ && this.loadedHandler$.runWith(this), this.loadedHandler$ = void 0;
        }
        playAnim$(e, t, i, s, a) {
            this.modelCtr$ && this.modelCtr$.playAnim$(e, t, i, s, a);
        }
        updatePos$() {
            this.modelCtr$ && (Laya.Point.TEMP.setTo(0, 0), this.targetUI.localToGlobal(Laya.Point.TEMP),
                this.curPos$ = g.get3DUIPos$(Laya.Point.TEMP.x, Laya.Point.TEMP.y, this.targetUI, this.curPos$),
                this.modelCtr$.setPosition$(this.curPos$.x, this.curPos$.y, this.curPos$.z));
        }
        dispose$() {
            Laya.timer.clearAll(this), this.modelCtr$ && this.modelCtr$.dispose$(), this.modelCtr$ = void 0,
                g.destroyUIModel$(this.targetUI, this.modelId);
        }
    }
    class ks extends d {
        constructor() {
            super(), this.winName$ = "提示页", this.labelTips$ = null;
        }
        onUILoad$() {
            super.onUILoad$(), this.labelTips$ = r.getChildDeep$(this.owner, "LabelTips"), this.labelTips$.text = this.args$,
                this.owner.Show.play(0, !1), Laya.timer.once(3e3, this, this.destroy);
        }
    }
    ks.url = "Prefab/Util/TipsWindow.json", ks.className$ = "Tips$", ks.uiConfig$ = {
        layer: e.LAYER_NORMAL$,
        only: !1,
        needUISurrenal: !1,
        notClose: !0
    };
    class Bs extends Laya.Script3D {
        constructor() {
            super(), this.skinId$ = null, this._anim$ = null;
        }
        get lastPlayingAnim() {
            return this._lastPlayingAnim$;
        }
        set lastPlayingAnim(e) {
            this._lastPlayingAnim$ = e;
        }
        get skinProperty() {
            return this._skinProperty$;
        }
        initAnim(e) {
            this.skinId$ = e, this._anim$ = findComponentByType$(this.owner, Laya.Animator),
                this._skinProperty$ = et.getSkinProperty$(this.skinId$), this._animMap$ = B.Li$[this._skinProperty$.type];
        }
        playAnim(e, t = !0, i = .05) {
            let s = this.getAnimName$(e);
            this._anim$.speed = this._getAnimSpeed$(e), this._lastPlayingAnim$ && t ? this._lastPlayingAnim$ !== e && (this._anim$.crossFade(s, i),
                this._lastPlayingAnim$ = e) : (this._anim$.play(s), this._lastPlayingAnim$ = e);
        }
        getAnimName$(e) {
            return this._animMap$[e].name;
        }
        _getAnimSpeed$(e) {
            return this._animMap$[e].speed;
        }
        playDefaultAnim() {
            findComponentByType$(this.owner, Laya.Animator) && ("FireDragon" === this.skinProperty.type ? this.playAnim(B.Anim$.Idle$) : this.playAnim(B.Anim$.Roar$));
        }
    }
    class bs {
        static init() {
            Laya.CyzClassMap$ = {}, Laya.CyzClassMap$.GameData = Be, Laya.CyzClassMap$.Dinosaur = zi,
                Laya.CyzClassMap$.AudioManager = Pt, Laya.CyzClassMap$.LocalData = H, Laya.CyzClassMap$.BaseWindow = d,
                Laya.CyzClassMap$.UIMode3D = As, Laya.CyzClassMap$.TipsUI = ks, Laya.CyzClassMap$.SettlementUI = Ke,
                Laya.CyzClassMap$.RankUpUI = Pe, Laya.CyzClassMap$.ToastUI = Ce, Laya.CyzClassMap$.NotEnoughCoin = Je,
                Laya.CyzClassMap$.offlineAward = be, Laya.CyzClassMap$.ResurgenceUI = Oe, Laya.CyzClassMap$.openChestUI = $t,
                Laya.CyzClassMap$.BattleScene = rs, Laya.CyzClassMap$.AniMgr = Bs, Laya.CyzClassMap$.MainUI = Mt,
                Laya.CyzClassMap$.sign7Day = gt, Laya.CyzClassMap$.taskDialogUI = vt, Laya.CyzClassMap$.achieveDialogUI = Xe,
                Laya.CyzClassMap$.skinStore = jt, Laya.CyzClassMap$.skinUnlock = Qt, Laya.CyzClassMap$.SpinDialogUI = Ct,
                Laya.CyzClassMap$.BattleUI = Se, Laya.CyzClassMap$.LoginLoadingUI = R, Laya.CyzClassMap$.BattleLoadingUI = X,
                Laya.CyzClassMap$.BattleSceneWx = ms, Laya.CyzClassMap$.MainUIWx = Bi, Laya.CyzClassMap$.BattleUIWx = yi,
                Laya.CyzClassMap$.SettlementUIWx = Ci, Laya.CyzClassMap$.BattleLoadingUIWx = mi,
                Laya.CyzClassMap$.offlineAwardWx = Si, Laya.CyzClassMap$.achieveDialogUIWx = fi,
                Laya.CyzClassMap$.NotEnoughCoinWx = vi, Laya.CyzClassMap$.sign7DayWx = Ei, Laya.CyzClassMap$.taskDialogUIWx = Ai,
                Laya.CyzClassMap$.SpinDialogUIWx = Di, Laya.CyzClassMap$.ResurgenceUIWx = wi, Laya.CyzClassMap$.skinStoreWx = bi,
                Laya.CyzClassMap$.skinUnlockWx = xi, Laya.CyzClassMap$.openChestUIWx = Ii, Laya.CyzClassMap$.RankUpUIWx = Li,
                Laya.CyzClassMap$.BattleSceneVivo = cs, Laya.CyzClassMap$.MainUIVivo = ci, Laya.CyzClassMap$.BattleUIVivo = ei,
                Laya.CyzClassMap$.SettlementUIVivo = ni, Laya.CyzClassMap$.BattleLoadingUIVivo = Zt,
                Laya.CyzClassMap$.offlineAwardVivo = ti, Laya.CyzClassMap$.achieveDialogUIVivo = oi,
                Laya.CyzClassMap$.NotEnoughCoinVivo = ri, Laya.CyzClassMap$.sign7DayVivo = hi, Laya.CyzClassMap$.taskDialogUIVivo = di,
                Laya.CyzClassMap$.SpinDialogUIVivo = li, Laya.CyzClassMap$.ResurgenceUIVivo = si,
                Laya.CyzClassMap$.skinStoreVivo = gi, Laya.CyzClassMap$.skinUnlockVivo = ui, Laya.CyzClassMap$.openChestUIVivo = $i,
                Laya.CyzClassMap$.RankUpUIVivo = ii, Laya.CyzClassMap$.BattleSceneQq = hs, Laya.CyzClassMap$.MainUIQq = Ot,
                Laya.CyzClassMap$.BattleUIQq = Le, Laya.CyzClassMap$.SettlementUIQq = je, Laya.CyzClassMap$.BattleLoadingUIQq = Q,
                Laya.CyzClassMap$.offlineAwardQq = xe, Laya.CyzClassMap$.achieveDialogUIQq = Qe,
                Laya.CyzClassMap$.NotEnoughCoinQq = Ze, Laya.CyzClassMap$.sign7DayQq = ut, Laya.CyzClassMap$.taskDialogUIQq = It,
                Laya.CyzClassMap$.SpinDialogUIQq = ft, Laya.CyzClassMap$.ResurgenceUIQq = Ue, Laya.CyzClassMap$.skinStoreQq = qt,
                Laya.CyzClassMap$.skinUnlockQq = Jt, Laya.CyzClassMap$.openChestUIQq = ht, Laya.CyzClassMap$.RankUpUIQq = Te,
                Laya.CyzClassMap$.SkinTryUseUIQq = yt, "undefined" != typeof tt || "tt" == conf.channel || Laya.Browser.onMiniGame || "wx" == conf.channel || Laya.Browser.onQGMiniGame || "oppo" == conf.channel || Laya.Browser.onVVMiniGame || "vivo" == conf.channel || Laya.Browser.onQQMiniGame || conf.channel,
                Laya.classWithChannel$ = function(e) {
                    return Laya.CyzClassMap$[e + r.getChannel$()] || Laya.CyzClassMap$[e];
                };
        }
    }
    Ss.width = 720, Ss.height = 1280, Ss.screenMode = Laya.Stage.SCREEN_NONE,
        Ss.alignV = Laya.Stage.ALIGN_CENTER, Ss.alignH = Laya.Stage.ALIGN_MIDDLE, Ss.sceneRoot = "",
        Ss.debug = !1, Ss.stat = !1, Ss.physicsDebug = !1, Ss.exportSceneToJson = !0, new class {
            constructor() {
                Laya3D.init(1280, 720, null, Laya.Handler.create(this, this.init));
            }
            init() {
                bs.init(), Laya.stage.screenMode = Ss.screenMode, Laya.stage.alignV = Ss.alignV,
                    Laya.stage.alignH = Ss.alignH, Laya.stage.bgColor = "#dbfbef", Laya.URL.exportSceneToJson = Ss.exportSceneToJson,
                    (Ss.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel();
                window.yad = platform.getInstance().createLogo();
                window.yad.centerX = 0;
                window.yad.bottom = 0;

                Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded),
                        Laya.ResourceVersion.FILENAME_VERSION),
                    window.onunload = function(e) {
                        h.getInstance$().dispatchEvent$(c.ON_EXIT_GAME$);
                    };
            }
            onPlfLoaded() {
                Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
            }
            onVersionLoaded() {
                Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
            }
            onConfigLoaded() {
                if (window.tt) {
                    let e = new Laya.Image("main/bg.png");
                    e.left = e.right = e.top = e.bottom = 0, Laya.stage.addChild(e), Laya.timer.once(1e3, this, function() {
                        Laya.stage.removeChild(e);
                    });
                }
                Ds.initData$(), g.init(), Is.getInstance$().initManager$();
            }
        }(), Laya.stage._setScreenSize = Laya.stage.setScreenSize, Laya.stage.setScreenSize = function(e, t, i) {
            if (!Laya.stage._isInputting()) {
                var s, a, n, o, r, $ = (a = {}, n = Laya.Browser.clientWidth * Laya.Browser.pixelRatio,
                    o = Laya.Browser.clientHeight * Laya.Browser.pixelRatio, r = s = o / n,
                    a.scaleMode = "showall", a.height = 1280, a.width = 720,
                    GameSetting.ratio = Laya.Browser.clientWidth / Laya.stage.width,
                    a.trueRate = r, a);
                this._scaleMode = $.scaleMode, this.designHeight = $.height, this.designWidth = $.width,
                    this._setScreenSize(e, t), i || Laya.timer.once(2e3, null, function() {
                        Laya.stage.setScreenSize(Laya.Browser.clientWidth * Laya.Browser.pixelRatio, Laya.Browser.clientHeight * Laya.Browser.pixelRatio, !0);
                    });
            }
        }, Laya.stage._changeCanvasSize();
}();
GAMESDK.startup()