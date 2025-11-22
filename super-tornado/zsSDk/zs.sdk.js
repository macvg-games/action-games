window.conf = {
    appId: "wx2f07a323668d0943",
    secret: "QCes5UK6HaYtHJdS",
    uploadLog: "true",
    channel: "wx"
};

var sdkStorage = {},
    setStorageSync = function(n, e) {
        sdkStorage[n] = e;
    },
    getStorageSync = function(n) {
        return sdkStorage[n];
    },
    getCache = function(n, e) {
        if (e) {
            var t = getStorageSync(n + "_time");
            return null == t || Date.now() - Number(t) < e ? getStorageSync(n) : null;
        }
        return getStorageSync(n);
    },
    setCache = function(n, e) {
        setStorageSync(n, e), setStorageSync(n + "_time", Date.now());
    },
    object2Query = function(n) {
        var e = [];
        for (var t in n) e.push(t + "=" + n[t]);
        return e.join("&");
    },
    request = function(n, e, t, o, a, i) {
        // var s = new XMLHttpRequest();
        // s.onreadystatechange = function() {
        //     if (4 == s.readyState) {
        //         var n = s.responseText;
        //         if (s.status >= 200 && s.status < 400) {
        //             var e = {};
        //             try {
        //                 e = JSON.parse(n);
        //             } catch (e) {
        //                 console.error("json parse error ", n), a && a(e);
        //             }
        //             o && o(e);
        //         } else console.error("error ", n), a && a(n);
        //     }
        // }, s.timeout = 3e3, s.ontimeout = function(n) {
        //     console.error("error ", n), a && a(n);
        // }, s.open(t, n, !0), "POST" == t ? (s.open("POST", n), s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), 
        // s.send(object2Query(e))) : s.send();
    },
    md5 = function(n) {
        var e, t, o, a, i, s, r, c, u, d = function(n, e) {
                return n << e | n >>> 32 - e;
            },
            f = function(n, e) {
                var t, o, a, i, s;
                return a = 2147483648 & n, i = 2147483648 & e, s = (1073741823 & n) + (1073741823 & e),
                    (t = 1073741824 & n) & (o = 1073741824 & e) ? 2147483648 ^ s ^ a ^ i : t | o ? 1073741824 & s ? 3221225472 ^ s ^ a ^ i : 1073741824 ^ s ^ a ^ i : s ^ a ^ i;
            },
            l = function(n, e, t, o, a, i, s) {
                return n = f(n, f(f(function(n, e, t) {
                    return n & e | ~n & t;
                }(e, t, o), a), s)), f(d(n, i), e);
            },
            p = function(n, e, t, o, a, i, s) {
                return n = f(n, f(f(function(n, e, t) {
                    return n & t | e & ~t;
                }(e, t, o), a), s)), f(d(n, i), e);
            },
            g = function(n, e, t, o, a, i, s) {
                return n = f(n, f(f(function(n, e, t) {
                    return n ^ e ^ t;
                }(e, t, o), a), s)), f(d(n, i), e);
            },
            h = function(n, e, t, o, a, i, s) {
                return n = f(n, f(f(function(n, e, t) {
                    return e ^ (n | ~t);
                }(e, t, o), a), s)), f(d(n, i), e);
            },
            m = function(n) {
                var e, t = "",
                    o = "";
                for (e = 0; e <= 3; e++) t += (o = "0" + (n >>> 8 * e & 255).toString(16)).substr(o.length - 2, 2);
                return t;
            },
            _ = Array();
        for (_ = function(n) {
                for (var e, t = n.length, o = t + 8, a = 16 * ((o - o % 64) / 64 + 1), i = Array(a - 1), s = 0, r = 0; r < t;) s = r % 4 * 8,
                    i[e = (r - r % 4) / 4] = i[e] | n.charCodeAt(r) << s, r++;
                return s = r % 4 * 8, i[e = (r - r % 4) / 4] = i[e] | 128 << s, i[a - 2] = t << 3,
                    i[a - 1] = t >>> 29, i;
            }(n = function(n) {
                n = n.replace(/\x0d\x0a/g, "\n");
                for (var e = "", t = 0; t < n.length; t++) {
                    var o = n.charCodeAt(t);
                    o < 128 ? e += String.fromCharCode(o) : o > 127 && o < 2048 ? (e += String.fromCharCode(o >> 6 | 192),
                        e += String.fromCharCode(63 & o | 128)) : (e += String.fromCharCode(o >> 12 | 224),
                        e += String.fromCharCode(o >> 6 & 63 | 128), e += String.fromCharCode(63 & o | 128));
                }
                return e;
            }(n)), s = 1732584193, r = 4023233417, c = 2562383102, u = 271733878, e = 0; e < _.length; e += 16) t = s,
            o = r, a = c, i = u, s = l(s, r, c, u, _[e + 0], 7, 3614090360), u = l(u, s, r, c, _[e + 1], 12, 3905402710),
            c = l(c, u, s, r, _[e + 2], 17, 606105819), r = l(r, c, u, s, _[e + 3], 22, 3250441966),
            s = l(s, r, c, u, _[e + 4], 7, 4118548399), u = l(u, s, r, c, _[e + 5], 12, 1200080426),
            c = l(c, u, s, r, _[e + 6], 17, 2821735955), r = l(r, c, u, s, _[e + 7], 22, 4249261313),
            s = l(s, r, c, u, _[e + 8], 7, 1770035416), u = l(u, s, r, c, _[e + 9], 12, 2336552879),
            c = l(c, u, s, r, _[e + 10], 17, 4294925233), r = l(r, c, u, s, _[e + 11], 22, 2304563134),
            s = l(s, r, c, u, _[e + 12], 7, 1804603682), u = l(u, s, r, c, _[e + 13], 12, 4254626195),
            c = l(c, u, s, r, _[e + 14], 17, 2792965006), s = p(s, r = l(r, c, u, s, _[e + 15], 22, 1236535329), c, u, _[e + 1], 5, 4129170786),
            u = p(u, s, r, c, _[e + 6], 9, 3225465664), c = p(c, u, s, r, _[e + 11], 14, 643717713),
            r = p(r, c, u, s, _[e + 0], 20, 3921069994), s = p(s, r, c, u, _[e + 5], 5, 3593408605),
            u = p(u, s, r, c, _[e + 10], 9, 38016083), c = p(c, u, s, r, _[e + 15], 14, 3634488961),
            r = p(r, c, u, s, _[e + 4], 20, 3889429448), s = p(s, r, c, u, _[e + 9], 5, 568446438),
            u = p(u, s, r, c, _[e + 14], 9, 3275163606), c = p(c, u, s, r, _[e + 3], 14, 4107603335),
            r = p(r, c, u, s, _[e + 8], 20, 1163531501), s = p(s, r, c, u, _[e + 13], 5, 2850285829),
            u = p(u, s, r, c, _[e + 2], 9, 4243563512), c = p(c, u, s, r, _[e + 7], 14, 1735328473),
            s = g(s, r = p(r, c, u, s, _[e + 12], 20, 2368359562), c, u, _[e + 5], 4, 4294588738),
            u = g(u, s, r, c, _[e + 8], 11, 2272392833), c = g(c, u, s, r, _[e + 11], 16, 1839030562),
            r = g(r, c, u, s, _[e + 14], 23, 4259657740), s = g(s, r, c, u, _[e + 1], 4, 2763975236),
            u = g(u, s, r, c, _[e + 4], 11, 1272893353), c = g(c, u, s, r, _[e + 7], 16, 4139469664),
            r = g(r, c, u, s, _[e + 10], 23, 3200236656), s = g(s, r, c, u, _[e + 13], 4, 681279174),
            u = g(u, s, r, c, _[e + 0], 11, 3936430074), c = g(c, u, s, r, _[e + 3], 16, 3572445317),
            r = g(r, c, u, s, _[e + 6], 23, 76029189), s = g(s, r, c, u, _[e + 9], 4, 3654602809),
            u = g(u, s, r, c, _[e + 12], 11, 3873151461), c = g(c, u, s, r, _[e + 15], 16, 530742520),
            s = h(s, r = g(r, c, u, s, _[e + 2], 23, 3299628645), c, u, _[e + 0], 6, 4096336452),
            u = h(u, s, r, c, _[e + 7], 10, 1126891415), c = h(c, u, s, r, _[e + 14], 15, 2878612391),
            r = h(r, c, u, s, _[e + 5], 21, 4237533241), s = h(s, r, c, u, _[e + 12], 6, 1700485571),
            u = h(u, s, r, c, _[e + 3], 10, 2399980690), c = h(c, u, s, r, _[e + 10], 15, 4293915773),
            r = h(r, c, u, s, _[e + 1], 21, 2240044497), s = h(s, r, c, u, _[e + 8], 6, 1873313359),
            u = h(u, s, r, c, _[e + 15], 10, 4264355552), c = h(c, u, s, r, _[e + 6], 15, 2734768916),
            r = h(r, c, u, s, _[e + 13], 21, 1309151649), s = h(s, r, c, u, _[e + 4], 6, 4149444226),
            u = h(u, s, r, c, _[e + 11], 10, 3174756917), c = h(c, u, s, r, _[e + 2], 15, 718787259),
            r = h(r, c, u, s, _[e + 9], 21, 3951481745), s = f(s, t), r = f(r, o), c = f(c, a),
            u = f(u, i);
        return (m(s) + m(r) + m(c) + m(u)).toLowerCase();
    },
    isFun = function(n) {
        return "function" == typeof n;
    },
    buildSign = function(n, e) {
        e = e || !0;
        for (var t = Object.keys(n).sort(), o = "", a = 0; a < t.length; a++) o += t[a] + ":" + n[t[a]];
        e && (o += conf.secret);
        var i = md5(o);
        return i = i.toLowerCase();
    },
    sdk = null;

if ("wx" === conf.channel) {
    var tjconf = {
        app_key: conf.appId,
        getLocation: !1
    };
    sdk = function() {
        var n = {},
            e = function(n, e) {
                if ("3" == n.app_type) {
                    var t = getStorageSync(n.appid);
                    setStorageSync(n.appid, null == t ? 1 : Number(t) + 1);
                }
                var o, a, i, s, r, c;
                "undefined" != typeof wx && (o = n.app_id, a = e, i = Math.round(new Date().getTime() / 1e3).toString(),
                    s = {
                        user_id: a,
                        from_id: conf.appId,
                        to_id: o,
                        timestamp: i
                    }, r = buildSign(s), c = Object.assign({}, s, {
                        sign: r
                    }), request("", c, "POST", function() {}, function() {
                        console.log("appad_new/collect fail");
                    }, function() {
                        console.log("appad_new/collect complete");
                    }));
            };
        n.userId = null, n.srcAppId = "", n.launchScene = "", n.init = function(n) {
            console.log("zsAdSdk.init"),
                function() {
                    function o(r, c, g) {
                        function t() {
                            return new Promise(function(n, e) {
                                let t = wx.getStorageSync("tjxx");
                                if (void 0 !== t.openid)
                                    for (g in t) r[g] = t[g];
                                if ("" == r.cd) n("");
                                else {
                                    l++;
                                    wx.request({
                                        url: "",
                                        data: r,
                                        header: {
                                            se: u || "",
                                            op: d || "",
                                            img: _ || ""
                                        },
                                        method: "POST",
                                        success: function(e) {
                                            wx.setStorageSync("tjxx", e.data), clearTimeout(a), !0, void 0 !== e.data.rtime && parseInt(e.data.rtime) > 0 ? a = setTimeout(function() {
                                                o(r, n, 2);
                                            }, 1e3 * parseInt(e.data.rtime)) : void 0 !== t.rtime && parseInt(t.rtime) > 0 && (a = setTimeout(function() {
                                                o(r, n, 2);
                                            }, 1e3 * parseInt(t.rtime)));
                                        },
                                        fail: function() {
                                            !0, void 0 !== t.rtime && parseInt(t.rtime) > 0 && (clearTimeout(a), a = setTimeout(function() {
                                                o(r, n, 2);
                                            }, 1e3 * parseInt(t.rtime)));
                                        }
                                    });
                                }
                            });
                        }
                        r.rq_c = l, r.cd = v, r.ifo = i, r.ak = e.app_key, r.uu = s, r.v = n, r.st = Date.now(),
                            r.ev = c, r.wsr = p, r.ufo = function(n) {
                                if (void 0 === n || "" === n) return "";
                                var e = {};
                                for (var t in n) "rawData" != t && "errMsg" != t && (e[t] = n[t]);
                                return e;
                            }(r.ufo), r.ec = f, void 0 === g ? wx.Queue.push(t) : t();
                    }

                    function c(n) {
                        var e = {};
                        for (var t in n) e[t] = n[t];
                        return e;
                    }
                    wx.Queue = new function() {
                        this.concurrency = 200, this.queue = [], this.tasks = [], this.activeCount = 0;
                        var n = this;
                        this.push = function(e) {
                            this.tasks.push(new Promise(function(t, o) {
                                var a = function() {
                                    n.activeCount++, e().then(function(n) {
                                        t(n);
                                    }).then(function() {
                                        n.next();
                                    });
                                };
                                n.activeCount < n.concurrency ? a() : n.queue.push(a);
                            })), console.log("3");
                        }, this.all = function() {
                            return console.log("4"), Promise.all(this.tasks);
                        }, this.next = function() {
                            console.log("5"), n.activeCount--, n.queue.length > 0 && n.queue.shift()();
                        };
                    }(), wx.Queue.all();
                    var n = "1.0.0",
                        e = tjconf;
                    "" === e.app_key && console.error("请在配置文件中填写您的app_key"), e.app_key = e.app_key.replace(/\s/g, "");
                    var a, i = "",
                        s = function() {
                            var n = "";
                            try {
                                n = wx.getStorageSync("h_stat_uuid"), wx.setStorageSync("h_ifo", !0);
                            } catch (e) {
                                n = "uuid_getstoragesync";
                            }
                            if (n) i = !1;
                            else {
                                n = function() {
                                    function e() {
                                        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
                                    }
                                    return e() + e() + e() + e() + e() + e() + e() + e();
                                }(), i = !0;
                                try {
                                    wx.setStorageSync("h_stat_uuid", n);
                                } catch (n) {
                                    wx.setStorageSync("h_stat_uuid", "uuid_getstoragesync");
                                }
                            }
                            return n;
                        }(),
                        r = {},
                        u = "",
                        d = "",
                        f = 0,
                        l = "",
                        p = wx.getLaunchOptionsSync(),
                        g = Date.now(),
                        h = (Date.now(),
                            Math.floor(1e7 * Math.random()), Date.now(), Math.floor(1e7 * Math.random()), 0),
                        m = "",
                        _ = "",
                        v = "",
                        q = !0,
                        S = ["h_SendEvent", "h_OnShareAppMessage", "h_ShareAppMessage", "h_SendSession", "h_SendOpenid"];
                    Promise.all([new Promise(function(n, e) {
                        "" == v && wx.login({
                            success: function(e) {
                                v = e.code, console.log(v + "---------"), n("");
                            }
                        });
                    }), new Promise(function(n, e) {
                        wx.getNetworkType({
                            success: function(e) {
                                n(e);
                            },
                            fail: function() {
                                n("");
                            }
                        });
                    }), new Promise(function(n, t) {
                        e.getLocation ? wx.getLocation({
                            success: function(e) {
                                n(e);
                            },
                            fail: function() {
                                n("");
                            }
                        }) : wx.getSetting({
                            success: function(e) {
                                e.authSetting["scope.userLocation"] ? (wx.getLocation({
                                    success: function(e) {
                                        n(e);
                                    },
                                    fail: function() {
                                        n("");
                                    }
                                }), n("")) : n("");
                            },
                            fail: function() {
                                n("");
                            }
                        });
                    })]).then(function(n) {
                        "" !== n[2] ? (r.lat = n[2].latitude || "", r.lng = n[2].longitude || "", r.spd = n[2].speed || "") : (r.lat = "",
                            r.lng = "", r.spd = ""), "" !== n[1] ? r.nt = n[1].networkType || "" : r.nt = "";
                        var e = c(r);
                        "" !== n[0] && (e.ufo = n[0], m = n[0]), o(e, "init");
                    }), wx.onShow(function(n) {
                        l = 0, p = n, h = Date.now(), q || ("" + Date.now() + Math.floor(1e7 * Math.random()),
                            i = !1, wx.setStorageSync("h_ifo", !1)), q = !1;
                        var e = c(r),
                            t = c(r);
                        e.sm = h - g, n.query.h_share_src && n.shareTicket && "1044" === n.scene ? (t.tp = "h_share_click",
                                new Promise(function(n, e) {
                                    "1044" == p.scene ? wx.getShareInfo({
                                        shareTicket: p.shareTicket,
                                        success: function(e) {
                                            n(e);
                                        },
                                        fail: function() {
                                            n("");
                                        }
                                    }) : n("");
                                }).then(function(n) {
                                    t.ct = n, o(t, "event");
                                })) : n.query.h_share_src && (t.tp = "h_share_click", t.ct = "1", o(t, "event")),
                            o(e, "show");
                    }), wx.onHide(function() {
                        var n = c(r);
                        n.dr = Date.now() - h, "" === m ? wx.getSetting({
                            success: function(e) {
                                e.authSetting["scope.userInfo"] ? wx.getUserInfo({
                                    success: function(e) {
                                        n.ufo = e, m = e, _ = function(n) {
                                            for (var e = "", t = 0; t < n.length; t++) n[t].length > e.length && (e = n[t]);
                                            return e;
                                        }(e.userInfo.avatarUrl.split("/")), o(n, "hide");
                                    }
                                }) : o(n, "hide");
                            }
                        }) : o(n, "hide");
                    }), wx.onError(function(n) {
                        var e = c(r);
                        e.tp = "h_error_message", e.ct = n, f++, o(e, "event");
                    });
                    for (var w = {
                            h_SendEvent: function(n, e) {
                                var t = c(r);
                                "" !== n && "string" == typeof n && n.length <= 255 ? (t.tp = n, "string" == typeof e && e.length <= 255 ? (t.ct = String(e),
                                    o(t, "event")) : "object" == (void 0 === e ? "undefined" : _typeof(e)) ? (JSON.stringify(e).length >= 255 && console.error("自定义事件参数不能超过255个字符"),
                                    t.ct = JSON.stringify(e), o(t, "event")) : void 0 === e || "" === e ? o(t, "event") : console.error("事件参数必须为String,Object类型,且参数长度不能超过255个字符")) : console.error("事件名称必须为String类型且不能超过255个字符");
                            },
                            h_OnShareAppMessage: function(n) {
                                wx.updateShareMenu({
                                    withShareTicket: !0,
                                    complete: function() {
                                        wx.onShareAppMessage(function() {
                                            var e = n(),
                                                t = "",
                                                a = "";
                                            t = void 0 !== e.success ? e.success : "", a = void 0 !== e.fail ? e.fail : "";
                                            var i;
                                            i = void 0 !== p.query.h_share_src ? void 0 !== e.query ? (p.query.h_share_src.indexOf(s),
                                                e.query + "&h_share_src=" + p.query.h_share_src + "," + s) : (p.query.h_share_src.indexOf(s),
                                                "h_share_src=" + p.query.h_share_src + "," + s) : void 0 !== e.query ? e.query + "&h_share_src=" + s : "h_share_src=" + s;
                                            var u = c(r);
                                            return e.query = i, u.ct = e, u.tp = "h_share_chain", o(u, "event"), e.success = function(n) {
                                                u.tp = "h_share_status", o(u, "event"), "" !== t && t(n);
                                            }, e.fail = function(n) {
                                                u.tp = "h_share_fail", o(u, "event"), "" !== a && a(n);
                                            }, e;
                                        });
                                    }
                                });
                            },
                            h_ShareAppMessage: function(n) {
                                var e = n,
                                    t = "",
                                    a = "";
                                t = void 0 !== e.success ? e.success : "", a = void 0 !== e.fail ? e.fail : "";
                                var i;
                                i = void 0 !== p.query.h_share_src ? void 0 !== e.query ? (p.query.h_share_src.indexOf(s),
                                        e.query + "&h_share_src=" + p.query.h_share_src + "," + s) : (p.query.h_share_src.indexOf(s),
                                        "h_share_src=" + p.query.h_share_src + "," + s) : void 0 !== e.query ? e.query + "&h_share_src=" + s : "h_share_src=" + s,
                                    e.query = i;
                                var u = c(r);
                                u.ct = e, u.tp = "h_share_chain", o(u, "event"), e.success = function(n) {
                                    u.tp = "h_share_status", o(u, "event"), "" !== t && t(n);
                                }, e.fail = function(n) {
                                    u.tp = "h_share_fail", o(u, "event"), "" !== a && a(n);
                                }, wx.updateShareMenu({
                                    withShareTicket: !0,
                                    complete: function() {
                                        wx.shareAppMessage(e);
                                    }
                                });
                            },
                            h_SendSession: function(n) {
                                if ("" !== n && n) {
                                    var e = c(r);
                                    e.tp = "session", e.ct = "session", u = n, "" === m ? wx.getSetting({
                                        success: function(n) {
                                            n.authSetting["scope.userInfo"] ? wx.getUserInfo({
                                                success: function(n) {
                                                    e.ufo = n, o(e, "event");
                                                }
                                            }) : o(e, "event");
                                        }
                                    }) : (e.ufo = m, "" !== m && (e.gid = ""), o(e, "event"));
                                } else console.error("请传入从后台获取的session_key");
                            },
                            h_SendOpenid: function(n) {
                                if ("" !== n && n) {
                                    d = n;
                                    var e = c(r);
                                    e.tp = "openid", e.ct = "openid", o(e, "event");
                                } else console.error("openID不能为空");
                            }
                        }, y = 0; y < S.length; y++) ! function(n, e) {
                        Object.defineProperty(wx, n, {
                            value: e,
                            writable: !1,
                            enumerable: !0,
                            configurable: !0
                        });
                    }(S[y], w[S[y]]);
                    try {
                        var k = wx.getSystemInfoSync();
                        r.br = k.brand || "", r.md = k.model, r.pr = k.pixelRatio, r.sw = k.screenWidth,
                            r.sh = k.screenHeight, r.ww = k.windowWidth, r.wh = k.windowHeight, r.lang = k.language,
                            r.wv = k.version, r.sv = k.system, r.wvv = k.platform, r.fs = k.fontSizeSetting,
                            r.wsdk = k.SDKVersion, r.bh = k.benchmarkLevel || "", r.bt = k.battery || "", r.wf = k.wifiSignal || "",
                            r.lng = "", r.lat = "", r.nt = "", r.spd = "", r.ufo = "";
                    } catch (n) {}
                }();
        };
        var t = [1011, 1012, 1013, 1025, 1031, 1032, 1047, 1048, 1049, 1124, 1125, 1126];
        return n.adCbList = [], n.inAdRequest = !1, n.isFromLink = function() {
            return this.launchInfo && t.indexOf(this.launchInfo.scene) >= 0 ? (console.log("open by code"), !0) : null != this.launchInfo && null != this.launchInfo.query && null != this.launchInfo.query.customLink;
        }, n.loadAd = function(e) {
            var t = getCache("zsAd", 6e5);
            if (t) e(t);
            else if (this.inAdRequest) this.adCbList.push(e);
            else {
                this.inAdRequest = !0, this.adCbList.push(e);
                var o = Math.round(new Date().getTime() / 1e3).toString(),
                    a = {
                        appid: conf.appId,
                        timestamp: o
                    },
                    i = buildSign(a),
                    s = Object.assign({}, a, {
                        sign: i
                    });
                request("", s, "POST", function(e) {
                    for (var t in n.inAdRequest = !1, e.data) {
                        var o = e.data[t];
                        Array.isArray(o) && o.sort(function() {
                            return Math.random() > .5 ? 1 : -1;
                        });
                    }
                    var a = {
                        more: e.data["position-1"] || [],
                        promotion: e.data["position-2"] || [],
                        indexFloat: e.data["position-3"] || [],
                        banner: e.data["position-4"] || [],
                        indexLeft: e.data["position-7"] || [],
                        gameFloat: e.data["position-8"] || [],
                        endPage: e.data["position-9"] || [],
                        indexLeftFloat: e.data["position-11"] || [],
                        backAd: e.data["position-12"] || [],
                        iosLinkAd: e.data["position-13"] || []
                    };
                    setCache("zsAd", a);
                    for (var i = 0; i < n.adCbList.length; i++) isFun(n.adCbList[i]) && n.adCbList[i](a);
                    n.adCbList = [];
                }, function(e) {
                    n.inAdRequest = !1, console.log("requestAdData fail");
                    for (var t = {
                            more: [],
                            promotion: [],
                            indexFloat: [],
                            banner: [],
                            indexLeft: [],
                            gameFloat: [],
                            endPage: [],
                            indexLeftFloat: [],
                            backAd: [],
                            iosLinkAd: []
                        }, o = 0; o < n.adCbList.length; o++) isFun(n.adCbList[o]) && n.adCbList[o](t);
                    n.adCbList = [];
                }, function(n) {
                    console.log("requestAdData complete");
                });
            }
        }, n.navigate2Mini = function(n, t, o, a, i) {
            var s = n;
            if ("undefined" == typeof wx) return isFun(a) && a(), void(isFun(i) && i());
            s.extraData = s.extraData || {}, wx.navigateToMiniProgram({
                appId: s.appid,
                path: s.link_path,
                extraData: s.extraData,
                success: function(n) {
                    e(s, t), o && isFun(o) && o();
                },
                fail: function(n) {
                    a && isFun(a) && a();
                },
                complete: function(n) {
                    isFun(i) && i();
                }
            });
        }, n.login = function(n, e) {
            wx.login({
                success: function(t) {
                    t.code ? function(n, e, t) {
                        request("", t, "POST", function(t) {
                            200 != t.code ? e(t.msg) : n(t.data.openid);
                        }, function(n) {
                            e(n);
                        }, function(n) {
                            console.log("requestAdData complete");
                        });
                    }(n, e, {
                        code: t.code,
                        appid: conf.appId
                    }) : e && e("微信登陆失败");
                },
                fail: function() {
                    e && e("微信登陆失败");
                },
                complete: function() {}
            });
        }, n.loadCfg = function(n, e) {
            var t = 0;
            if ("undefined" != typeof wx) {
                var o = wx.getLaunchOptionsSync();
                t = o && o.scene || 0;
            }
            request("", {
                appid: conf.appId,
                scene: t
            }, "POST", function(t) {
                200 != t.code ? e(t.msg) : n(t.data);
            }, function(n) {
                e(n);
            }, function(n) {
                console.log("loadCfg complete");
            });
        }, n;
    }();
} else sdk = "oppo" === conf.channel ? function() {
    var n = {};
    return n.userId = null, n.init = function(e) {
        this.userId = e,
            function() {
                if (null != n.userId) {
                    if ("undefined" != typeof qg) {
                        var e = qg.getLaunchOptionsSync(),
                            t = e && e.referrerInfo ? e.referrerInfo.extraData : null;
                        if (t && t.from) {
                            var o = {
                                from_id: t.from,
                                oppo_id: conf.appId,
                                user_id: n.userId,
                                from_path: t.path ? t.path : "0",
                                from_page: e.referrerInfo.package ? e.referrerInfo.package : "0"
                            };
                            request("", o, "POST", function() {
                                console.log("oppo_in success");
                            }, function() {
                                console.log("oppo_in fail");
                            }, function() {
                                console.log("oppo_in complete");
                            });
                        }
                    }
                } else console.error("userId is null");
            }();
    }, n.cfgCbList = [], n.inCfgRequest = !1, n.adCbList = [], n.inAdRequest = !1, n.loadAd = function(e) {
        var t = getCache("zsAd", 6e5);
        if (t) e(t);
        else if (this.inAdRequest) this.adCbList.push(e);
        else {
            this.inAdRequest = !0, this.adCbList.push(e);
            request("", {
                apk_id: conf.appId
            }, "POST", function(e) {
                n.inAdRequest = !1, e.data.sort(function() {
                    return Math.random() > .5 ? 1 : -1;
                });
                for (var t = 0; t < e.data.length; ++t) e.data[t].app_icon = e.data[t].link_img,
                    e.data[t].app_title = e.data[t].link_name, e.data[t].app_desc = e.data[t].link_name,
                    e.data[t].app_desc = e.data[t].link_des, e.data[t].link_id = e.data[t].id, e.data[t].pkg_name = e.data[t].link_page,
                    e.data[t].path = e.data[t].link_path;
                var o = {
                    promotion: e.data
                };
                setCache("zsAd", o);
                for (var a = 0; a < n.adCbList.length; a++) isFun(n.adCbList[a]) && n.adCbList[a](o);
                n.adCbList = [];
            }, function(e) {
                n.inAdRequest = !1, console.log("requestAdData fail");
                for (var t = {
                        promotion: []
                    }, o = 0; o < n.adCbList.length; o++) isFun(n.adCbList[o]) && n.adCbList[o](t);
                n.adCbList = [];
            }, function(n) {
                console.log("requestAdData complete");
            });
        }
    }, n.navigate2Mini = function(n, e, t, o, a) {
        var i = n,
            s = i.extraData || {};
        s.from = conf.appId, qg.navigateToMiniGame({
            pkgName: i.pkg_name,
            path: i.path,
            extraData: s,
            success: function() {
                ! function(n, e) {
                    n = {
                        apk_id: conf.appId,
                        link_id: n.link_id,
                        user_id: e
                    };
                    request("", n, "POST", function() {
                        console.log("uploadNavigateEvent success");
                    }, function() {
                        console.log("uploadNavigateEvent fail");
                    }, function() {
                        console.log("uploadNavigateEvent complete");
                    });
                }(i, e), console.log("targetMini:", i), isFun(t) && t();
            },
            fail: function() {
                isFun(o) && o();
            }
        }), console.log("navigateData:" + JSON.stringify(s));
    }, n.login = function(n, e) {
        qg.login({
            success: function(t) {
                0 == t.code ? function(n, e, t) {
                    request("", t, "POST", function(t) {
                        200 != t.code ? e(t.msg) : n(t.data.user_id);
                    }, function(n) {
                        e(n);
                    }, function(n) {
                        console.log("requestAdData complete");
                    });
                }(n, e, {
                    code: t.data.token,
                    apk_id: conf.appId
                }) : e && e("oppo登陆失败");
            },
            fail: function() {
                e && e("oppo登陆失败");
            },
            complete: function() {}
        });
    }, n.loadCfg = function(n, e) {
        request("", {
            apk_id: conf.appId
        }, "POST", function(t) {
            200 != t.code ? e(t.msg) : n(t.data);
        }, function(n) {
            e(n);
        }, function(n) {
            console.log("loadCfg complete");
        });
    }, n.isExportValid = function() {
        return !0;
    }, n.isFromLink = function() {
        return !1;
    }, n;
}() : "vivo" === conf.channel ? function() {
    var n = {},
        e = function(n, e, t) {
            request("", t, "POST", function(t) {
                200 != t.code ? e(t.msg) : n(t.data.user_id);
            }, function(n) {
                e(n);
            }, function(n) {
                console.log("zsLogin complete");
            });
        };
    return n.cfgCbList = [], n.inCfgRequest = !1, n.adCbList = [], n.inAdRequest = !1,
        n.loadAd = function(e) {
            var t = getCache("zsAd", 6e5);
            if (t) e(t);
            else if (this.inAdRequest) this.adCbList.push(e);
            else {
                this.inAdRequest = !0, this.adCbList.push(e);
                request("", {
                    apk_id: conf.appId
                }, "POST", function(e) {
                    n.inAdRequest = !1, e.data.sort(function() {
                        return Math.random() > .5 ? 1 : -1;
                    });
                    for (var t = 0; t < e.data.length; ++t) e.data[t].app_icon = e.data[t].link_img,
                        e.data[t].app_title = e.data[t].link_name, e.data[t].app_desc = e.data[t].link_name,
                        e.data[t].app_desc = e.data[t].link_des, e.data[t].link_id = e.data[t].id, e.data[t].pkg_name = e.data[t].link_page,
                        e.data[t].path = e.data[t].link_path;
                    var o = {
                        promotion: e.data
                    };
                    setCache("zsAd", o);
                    for (var a = 0; a < n.adCbList.length; a++) isFun(n.adCbList[a]) && n.adCbList[a](o);
                    n.adCbList = [];
                }, function(e) {
                    n.inAdRequest = !1, console.log("requestAdData fail");
                    for (var t = {
                            promotion: []
                        }, o = 0; o < n.adCbList.length; o++) isFun(n.adCbList[o]) && n.adCbList[o](t);
                    n.adCbList = [];
                }, function(n) {
                    console.log("requestAdData complete");
                });
            }
        }, n.navigate2Mini = function(n, e, t, o, a) {
            var i = n,
                s = i.extraData || {};
            s.from = conf.appId, qg.navigateToMiniGame({
                pkgName: i.pkg_name,
                path: i.path,
                extraData: s,
                success: function() {
                    ! function(n, e) {
                        n = {
                            apk_id: conf.appId,
                            link_id: n.link_id,
                            user_id: e
                        };
                        request("", n, "POST", function() {
                            console.log("uploadNavigateEvent success");
                        }, function() {
                            console.log("uploadNavigateEvent fail");
                        }, function() {
                            console.log("uploadNavigateEvent complete");
                        });
                    }(i, e), console.log("targetMini:", i), isFun(t) && t();
                },
                fail: function() {
                    isFun(o) && o();
                }
            }), console.log("navigateData:" + JSON.stringify(s));
        }, n.login = function(n, t) {
            console.log("zsSdk.login..", "vivo平台版本为：" + qg.getSystemInfoSync().platformVersionCode),
                qg.getSystemInfoSync().platformVersionCode >= 1053 ? qg.login().then(o => {
                    if (o.data.token) {
                        var a = JSON.stringify(o.data);
                        console.log(a), e(n, t, {
                            code: o.data.token,
                            apk_id: conf.appId
                        });
                    }
                }, n => {
                    failedHandler && failedHandler.runWith(JSON.stringify(n)), console.log("vivo login fail", JSON.stringify(n));
                }) : qg.authorize({
                    type: "code",
                    success: function(o) {
                        console.log(o), e(n, t, {
                            code: o.code,
                            apk_id: conf.appId
                        });
                    },
                    fail: function(n, e) {
                        failedHandler && failedHandler.runWith(JSON.stringify(e)), console.log("vivo login fail", JSON.stringify(n));
                    }
                });
        }, n.loadCfg = function(n, e) {
            request("", {
                apk_id: conf.appId
            }, "POST", function(t) {
                200 != t.code ? e(t.msg) : n(t.data);
            }, function(n) {
                e(n);
            }, function(n) {
                console.log("loadCfg complete");
            });
        }, n;
}() : "tt" == conf.channel ? function() {
    var n = {};
    return n.userId = null, n.srcAppId = "", n.init = function(e) {
        if (console.log("zsAdSdk.init"), this.userId = e, "undefined" == typeof tt) this.srcAppId = "0";
        else {
            var t = tt.getLaunchOptionsSync();
            this.launchScene = t.scene ? t.scene : "", this.srcAppId = t.referrerInfo && t.referrerInfo.appId ? t.referrerInfo.appId : "0";
        }! function() {
            if (conf.uploadLog)
                if (null != n.userId) {
                    if ("undefined" != typeof tt) {
                        var e = tt.getLaunchOptionsSync(),
                            t = {
                                appid: conf.appId,
                                from_id: n.srcAppId,
                                user_id: n.userId,
                                from_path: e.query ? e.query : "0"
                            };
                        request("", t, "POST", function() {}, function() {
                            console.log('jrtt_jump/index" fail');
                        }, function() {
                            console.log('jrtt_jump/index" complete');
                        });
                    }
                } else console.error("userId is null");
        }();
    }, n.adCbList = [], n.inAdRequest = !1, n.loadAd = function(e) {
        var t = getCache("zsAd", 1e3);
        if (t) e(t);
        else if (this.inAdRequest) this.adCbList.push(e);
        else {
            this.inAdRequest = !0, this.adCbList.push(e);
            var o = Math.round(new Date().getTime() / 1e3).toString(),
                a = {
                    apk_id: conf.appId,
                    timestamp: o
                },
                i = buildSign(a),
                s = Object.assign({}, a, {
                    sign: i
                });
            request("", s, "POST", function(e) {
                n.inAdRequest = !1, e.data.sort(function() {
                    return Math.random() > .5 ? 1 : -1;
                }), console.log("res.data", e.data);
                for (var t = 0; t < e.data.length; ++t) e.data[t].app_icon = e.data[t].link_img,
                    e.data[t].app_title = e.data[t].link_name, e.data[t].app_desc = e.data[t].link_name,
                    e.data[t].app_desc = e.data[t].link_des, e.data[t].link_id = e.data[t].id, e.data[t].app_id = e.data[t].link_appid,
                    e.data[t].pkg_name = e.data[t].link_page, e.data[t].path = e.data[t].link_path;
                var o = {
                    promotion: e.data
                };
                setCache("zsAd", o);
                for (var a = 0; a < n.adCbList.length; a++) isFun(n.adCbList[a]) && n.adCbList[a](o);
                n.adCbList = [];
            }, function(e) {
                n.inAdRequest = !1, console.log("requestAdData fail");
                for (var t = {
                        promotion: []
                    }, o = 0; o < n.adCbList.length; o++) isFun(n.adCbList[o]) && n.adCbList[o](t);
                n.adCbList = [];
            }, function(n) {
                console.log("requestAdData complete");
            });
        }
    }, n.showMoreGamesModal = function(n, e) {
        if ("undefined" == typeof tt || "function" != typeof tt.showMoreGamesModal) return;
        tt.offNavigateToMiniProgram(), tt.offMoreGamesModalClose(), tt.onMoreGamesModalClose(function(n) {
            console.log("modal closed", n);
        }), tt.onNavigateToMiniProgram(function(t) {
            t && (console.log("是否有跳转的小游戏", t), 0 == t.errCode ? isFun(n) && n() : isFun(e) && e());
        });
        const t = tt.getSystemInfoSync();
        var o = {};
        o.appId = conf.appId, "ios" !== t.platform && tt.showMoreGamesModal({
            appLaunchOptions: [{
                extraData: o
            }],
            success(n) {
                console.log("showMoreGamesModal success", n.errMsg);
            },
            fail(n) {
                console.log("showMoreGamesModal fail", n.errMsg);
            }
        });
    }, n.login = function(n, e) {
        tt.login({
            force: !1,
            success: function(t) {
                console.log(t), t.code || t.anonymousCode ? function(n, e, t) {
                    request("", t, "POST", function(t) {
                        200 != t.code ? e(t.msg) : n(t.data.openid);
                    }, function(n) {
                        e(n);
                    }, function(n) {
                        console.log("requestAdData complete");
                    });
                }(n, e, {
                    appid: conf.appId,
                    code: t.code || "",
                    anonymous_code: t.anonymousCode
                }) : e && e("头条登陆失败");
            },
            fail: function() {
                e && e("头条登陆失败");
            },
            complete: function() {}
        });
    }, n.loadCfg = function(n, e) {
        request("", {
            apk_id: conf.appId
        }, "POST", function(t) {
            200 != t.code ? e(t.msg) : n(t.data);
        }, function(n) {
            e(n);
        }, function(n) {
            console.log("loadCfg complete");
        });
    }, n;
}() : "qq" == conf.channel ? function() {
    var n = {};
    n.userId = null, n.srcAppId = "", n.launchScene = "", n.init = function(e) {
        if (console.log("zsAdSdk.init"), this.userId = e, "undefined" == typeof qq) this.launchScene = 1038,
            this.srcAppId = "";
        else {
            var t = qq.getLaunchOptionsSync();
            this.launchScene = t.scene ? t.scene : "", this.srcAppId = t.referrerInfo && t.referrerInfo.appId ? t.referrerInfo.appId : "",
                console.debug("来路统计" + this.srcAppId);
        }! function() {
            if (null != n.userId) {
                var e = {
                    appid: conf.appId,
                    from_id: n.srcAppId ? n.srcAppId : n.launchScene,
                    user_id: n.userId
                };
                request("", e, "POST", function() {
                    console.log("qq_jump/index  --\x3e success");
                }, function() {
                    console.log("qq_jump/index  --\x3e fail");
                }, function(n) {
                    console.log("qq_jump/index  --\x3e complete", n);
                });
            } else console.error("userId is null");
        }();
    }, n.cfgCbList = [], n.inCfgRequest = !1, n.loadCfg = function(n, e) {
        var t = Math.round(new Date().getTime() / 1e3).toString(),
            o = {
                apk_id: conf.appId,
                timestamp: t
            },
            a = buildSign(o),
            i = Object.assign({}, o, {
                sign: a
            });
        request("", i, "POST", function(t) {
            200 != t.code ? e(t.msg) : n(t.data);
        }, function(n) {
            e(n);
        }, function(n) {
            console.log("post loadConfig complete");
        });
    }, n.adCbList = [], n.inAdRequest = !1, n.loadAd = function(e) {
        var t = getCache("zsAd", 1e3);
        if (t) e(t);
        else if (this.inAdRequest) this.adCbList.push(e);
        else {
            this.inAdRequest = !0, this.adCbList.push(e);
            var o = Math.round(new Date().getTime() / 1e3).toString(),
                a = {
                    apk_id: conf.appId,
                    timestamp: o
                },
                i = buildSign(a),
                s = Object.assign({}, a, {
                    sign: i
                });
            request("", s, "POST", function(e) {
                if (e.data) {
                    n.inAdRequest = !1, e.data.sort(function() {
                        return Math.random() > .5 ? 1 : -1;
                    }), console.log("res.data", e.data);
                    for (var t = 0; t < e.data.length; ++t) e.data[t].app_icon = e.data[t].link_img,
                        e.data[t].app_title = e.data[t].link_name, e.data[t].app_desc = e.data[t].link_name,
                        e.data[t].app_desc = e.data[t].link_des, e.data[t].link_id = e.data[t].id, e.data[t].app_id = e.data[t].link_appid,
                        e.data[t].pkg_name = e.data[t].link_page, e.data[t].path = e.data[t].link_path;
                    var o = {
                        promotion: e.data
                    };
                    setCache("zsAd", o);
                    for (var a = 0; a < n.adCbList.length; a++) isFun(n.adCbList[a]) && n.adCbList[a](o);
                    n.adCbList = [];
                }
            }, function(e) {
                n.inAdRequest = !1, console.log("requestAdData fail");
                for (var t = {
                        promotion: []
                    }, o = 0; o < n.adCbList.length; o++) isFun(n.adCbList[o]) && n.adCbList[o](t);
                n.adCbList = [];
            }, function(n) {
                console.log("requestAdData complete");
            });
        }
    };
    var e = [];
    n.isFromLink = function() {
        return this.launchInfo && e.indexOf(this.launchInfo.scene) >= 0 ? (console.log("open by code"), !0) : null != this.launchInfo && null != this.launchInfo.query && null != this.launchInfo.query.customLink;
    }, n.login = function(n, e) {
        qq.login({
            success: function(t) {
                t.code ? function(n, e, t) {
                    request("", t, "POST", function(t) {
                        200 != t.code ? e(t.msg) : n(t.data.openid);
                    }, function(n) {
                        e(n);
                    }, function(n) {
                        console.log("requestAdData complete");
                    });
                }(n, e, {
                    code: t.code,
                    appid: conf.appId
                }) : e && e("QQ登陆失败");
            },
            fail: function() {
                e && e("QQ登陆失败");
            },
            complete: function() {}
        });
    }, n.launchInfo = null;
    return "undefined" == typeof qq || (n.launchInfo = qq.getLaunchOptionsSync(), console.debug("scene:" + n.launchInfo.scene),
        n.isFromLink() && console.debug("open by link")), n;
}() : function() {
    var n = {
        loadAd: function(n) {},
        navigate2Mini: function(n, e, t, o, a) {},
        login: function(n, e) {},
        loadCfg: function(n, e) {}
    };
    return n;
}();

var runningEnv = "undefined" != typeof window ? window : global;

runningEnv.zs = runningEnv.zs || {}, runningEnv.zs.sdk = sdk,
    function() {
        var n = sdk;
        "undefined" != typeof module && "object" == typeof exports ? module.exports = n : "function" == typeof define && (define.amd || define.cmd) ? define(function() {
            return n;
        }) : this.moduleName = n;
    }.call(function() {
        return this || ("undefined" != typeof window ? window : global);
    });