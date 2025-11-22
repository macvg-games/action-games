! function() {
    const TAG = "GamemonetizeAdsInstance_AD_WEB";
    class GamemonetizeAdsInstance {
        constructor() {
            this.isInited = false;
            this.appName = "";
        }
        adsAsyncInit(appName, type, gamedistributionAppId) {
            this.route = [
                "https://www.yad.com/",
                "https://www.yiv.com/",
                "https://www.babygames.com/",
                "https://www.bestgames.com/",
                "https://cargames.com/",
                "https://www.yad.com/",
                "https://www.yad.com/",
                "https://www.yad.com/"
            ][type];
            this.appName = appName;
            this.getForgames();
            return new Promise((resolve, reject) => {
                window["SDK_OPTIONS"] = {
                    gameId: gamedistributionAppId,
                    onEvent: (event) => {
                        console.log("event.name ====", event);
                        switch (event.name) {
                            case "SDK_GAME_PAUSE":
                                window.WebAudioEngine && (window.WebAudioEngine.muted = true);
                                break;
                            case "SDK_GAME_START":
                                if (event.status === "success") {
                                    if (this.onSuccess) {
                                        this.onSuccess(false);
                                        this.onSuccess = null;
                                    }
                                    this.onComplete();
                                }
                                break;
                            case "SDK_READY":
                                resolve(this.isInited);
                                break;
                            default:
                                break;
                        }
                    }
                };
                this.init().then((isInited) => {
                    this.isInited = isInited;
                });
            });
        }
        init() {
            return new Promise((resolve, reject) => {
                var t = this;
                var ads = document.getElementById(TAG);
                if (ads && !this.isInited) {
                    ads = null;
                }
                if (!ads) {
                    function onLoaded() {
                        resolve(true);
                    }

                    function onError(e) {
                        console.log("onError", e);
                        reject(false);
                    }
                    const library = document.createElement("script");
                    library.onload = onLoaded.bind(this);
                    library.onerror = onError.bind(this);
                    library.type = "text/javascript";
                    library.async = false;
                    library.src = "patch/js/gm-sdk.js";
                    library.id = TAG;
                    document.head.appendChild(library);
                } else {
                    resolve(true);
                }
            });
        }
        onComplete() {

        }
        request() {
            return new Promise((resolve, reject) => {
                if (!this.isInited) {
                    resolve(false);
                    return;
                }
                this.onSuccess = resolve;
                window["sdk"].showBanner();
            });
        }
        showInterstitial(success) {
            this.request().then(() => {
                success && success()
            });
        }
        showReward(success, f) {
            this.request().then(() => {
                success && success()
            });
        }
        getForgames() {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", this.route + "forgame/games.json", true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
            xhr.responseType = "text";
            xhr.onerror = function(e) {};
            xhr.onabort = function(e) {};
            xhr.onprogress = function(e) {};
            xhr.onload = (e) => {
                var status = xhr.status !== undefined ? xhr.status : 200;
                if (status === 200 || status === 204 || status === 0) {
                    this.forgames = JSON.parse(xhr.responseText);
                } else {}
            };
            xhr.send();
        }
        
        navigate(screenName, buttonName, gameId) {
            gameId = gameId || "";
            let domain = document.referrer;
            var url = this.route;
            if (typeof gameId === 'undefined' || gameId == "" || gameId == "undefined") {} else {
                url = url + "?pic=" + gameId;
            }
            if (typeof domain === 'undefined' || domain == "" || domain == "undefined") {
                domain = "unknown";
            } else {
                domain = domain.split('/')[2];
            }
            if (url.indexOf("?") > -1) {
                url = url + "&";
            } else {
                url = url + "?";
            }
            url = url + "utm_source=" + domain + "&utm_medium=" + screenName + "-" + buttonName + "&utm_campaign=game-" + this.appName;
            try {
                if (window.op3n(url)) {} else {}
            } catch (error) {}
        }
    }
    var GamemonetizeAds = null;



    class WebAudioEngine {
        constructor() {
            this.beEnabled = false;
            this.isMuted = false;
            this.bePauseSound = false;
            this.bePauseMusic = false;
            this.tryToResumeIntervalId = -1;
            this.isVisibilityMuted = false;
            this.adShowing = false;
        }
        init() {
            return new Promise((resolve, reject) => {
                try {
                    this.musicAudio = new WebAudioContext();
                    this.soundAudio = new WebAudioContext();
                    window.document.addEventListener("mousedown", this.tryToResumeAudioContext.bind(this), true);
                    window.document.addEventListener("touchstart", this.tryToResumeAudioContext.bind(this), true);
                    window.document.addEventListener("visibilitychange", this.onVisibilitychange.bind(this));
                    this.tryToResumeIntervalId = setInterval(this.tryToResumeAudioContext.bind(this), 0.2e3);
                    this.musicAudio.getContext().onstatechange = this.onMusicStatechange.bind(this);
                    this.soundAudio.getContext().onstatechange = this.onSoundStatechange.bind(this);
                    this.beEnabled = true;
                    this.musicVolume = 60;
                    resolve(true);
                } catch (e) {
                    console.log("Web Audio API", e);
                    alert("Web Audio API is not supported in this browser");
                    resolve(false);
                }
            });
        }
        onVisibilitychange() {
            if (window.WebAudioEngine.adShowing) {
                return;
            }
            if (document.visibilityState == "hidden") {
                if (!this.isMuted) {
                    this.isVisibilityMuted = this.muted = true;
                }
            } else if (document.visibilityState == "visible") {
                if (this.isVisibilityMuted) {
                    this.isVisibilityMuted = this.muted = false;
                }
            }
        }
        onDBInstanceMuted() {
            // this.pauseMusic = DBInstance$1.musicMuted.value;
            // this.pauseSound = DBInstance$1.soundMuted.value;
        }
        tryToResumeAudioContext() {
            if (this.isMuted)
                return;

            if (this.musicAudio.isSuspend() && !this.bePauseMusic) {
                this.musicAudio.resume();
            }
            if (this.soundAudio.isSuspend() && !this.bePauseSound) {
                this.soundAudio.resume();
            }
            if (!this.musicAudio.isSuspend() || !this.soundAudio.isSuspend()) {
                window.document.removeEventListener("mousedown", this.tryToResumeAudioContext.bind(this), true);
                window.document.removeEventListener("touchstart", this.tryToResumeAudioContext.bind(this), true);
                clearInterval(this.tryToResumeIntervalId);
                this.tryToResumeIntervalId = -1;
            }
        }
        onMusicStatechange() {
            if (this.musicAudio.isSuspend() && !this.isMuted && !this.bePauseMusic && this.tryToResumeIntervalId === -1) {
                window.document.addEventListener("mousedown", this.tryToResumeAudioContext.bind(this), true);
                window.document.addEventListener("touchstart", this.tryToResumeAudioContext.bind(this), true);
                this.tryToResumeIntervalId = setInterval(this.tryToResumeAudioContext.bind(this), 0.2e3);
            }
        }
        onSoundStatechange() {
            if (this.soundAudio.isSuspend() && !this.isMuted && !this.bePauseSound && this.tryToResumeIntervalId === -1) {
                window.document.addEventListener("mousedown", this.tryToResumeAudioContext.bind(this), true);
                window.document.addEventListener("touchstart", this.tryToResumeAudioContext.bind(this), true);
                this.tryToResumeIntervalId = setInterval(this.tryToResumeAudioContext.bind(this), 0.2e3);
            }
        }
        set muted(b) {
            this.isMuted = b;
            if (this.isMuted) {
                this.musicAudio.suspend();
                this.soundAudio.suspend();
            } else {
                if (this.tryToResumeIntervalId == -1) {
                    this.tryToResumeIntervalId = setInterval(this.tryToResumeAudioContext.bind(this), 0.2e3);
                }

            }
        }

        get muted() {
            return this.isMuted;
        }

        set pause(b) {
            this.pauseSound = b;
            this.pauseMusic = b;
        }
        get pause() {
            return this.pauseSound || this.pauseMusic;
        }

        set pauseSound(b) {
            this.bePauseSound = b;
            if (this.bePauseSound) {
                this.soundAudio.suspend();
            } else {
                if (this.isMuted)
                    return;
                this.soundAudio.resume();
            }
        }
        get pauseSound() {
            return this.bePauseSound;
        }
        get pauseMusic() {
            return this.bePauseMusic;
        }
        set pauseMusic(b) {
            this.bePauseMusic = b;
            if (this.bePauseMusic) {
                this.musicAudio.suspend();
            } else {
                if (this.isMuted)
                    return;
                this.musicAudio.resume();
            }
        }
        stopAll() {
            this.musicAudio.stopAll();
            this.soundAudio.stopAll();
        }
        parse(url, data, onComplete) {
            this.soundAudio.parse(url, data);
        }
        playMusic(url) {
            this.musicAudio.stopAll();
            this.musicAudio.playMusic(url);
        }
        stopMusic() {
            this.musicAudio.stopAll();
        }
        stopSound(url) {
            this.soundAudio.stop(url);
        }
        set musicVolume(vlaue) {
            this.musicAudio.musicVolume = vlaue;
        }
        get musicVolume() {
            return this.musicAudio.musicVolume;
        }
        playSound(url, loop = false, singleton = false) {
            if (!this.beEnabled)
                return;
            this.soundAudio.play(url, loop, singleton);
        }
    }
    class WebAudioSource {}
    class WebAudioContext {
        constructor() {
            this.volume = 100;
            this._audioInstances = new Map();
            this._musicVolume = 100;
            window.AudioContext = window.AudioContext || window["webkitAudioContext"];
            this.context = new AudioContext();
        }
        getContext() {
            return this.context;
        }
        isSuspend() {
            return this.context.state === "suspended";
        }
        suspend() {
            this.context.suspend();
        }
        resume() {
            this.context.resume();
        }
        stopAll() {
            const values = this._audioInstances.values();
            for (const sound of values) {
                const instance = sound.instance;
                if (instance.source.buffer) {
                    try {
                        instance.source.stop(this.context.currentTime);
                    } catch (e) {
                        instance.source.disconnect();
                    }
                    instance.source.onended = (function() {});
                    instance.setup();
                }
            }
        }
        stop(url) {
            if (this._audioInstances.has(url)) {
                const sound = this._audioInstances.get(url);
                this._stopSound(sound);
            }
        }
        _stopSound(sound) {
            const instance = sound.instance;
            if (instance.source.buffer) {
                try {
                    instance.source.stop(this.context.currentTime);
                } catch (e) {
                    instance.source.disconnect();
                }
                instance.source.onended = (function() {});
                instance.setup();
            }
        }
        playMusic(url) {
            if (this._music) {
                this._stopSound(this._music);
            }
            if (this._audioInstances.has(url)) {
                this._music = this._audioInstances.get(url);
                this.musicVolume = this._musicVolume;
                this.play(url, true);
            } else {
                this.downloadArrayBuffer(url, () => {
                    this.playMusic(url);
                });
            }
        }
        stopMusic() {
            if (this._music) {
                this._stopSound(this._music);
            }
        }
        set musicVolume(vlaue) {
            this._musicVolume = vlaue;
            if (this._music) {
                this._music.instance.gain.gain.value = this._musicVolume / 100;
            }
        }
        get musicVolume() {
            return this._musicVolume;
        }
        play(url, loop = false, singleton = false) {
            if (this._audioInstances.has(url)) {
                const sound = this._audioInstances.get(url);
                const instance = sound.instance;
                if (singleton && !instance.ended)
                    return;
                this.stop(url);
                if (sound.buffer) {
                    try {
                        instance.playBuffer(this.context.currentTime, sound.buffer);
                        instance.source.loop = loop;
                    } catch (e) {
                        console.error("playBuffer error. Exception: " + e);
                    }
                }
            } else {
                this.downloadArrayBuffer(url, () => {
                    this.play(url, loop);
                });
            }
        }
        load(urls, onComplete) {
            let t = urls.length;
            let d = 0;
            for (let i = 0; i < urls.length; i++) {
                const url = urls[i];
                this.downloadArrayBuffer(url, () => {
                    d++;
                    if (d >= t) {
                        onComplete && onComplete();
                    }
                });
            }
        }
        setThreeD(url) {
            if (this._audioInstances.has(url)) {
                const sound = this._audioInstances.get(url);
                sound.instance.threeD = true;
            }
        }
        createSoundInstance() {
            let audioContext = this.context;
            const instance = {
                gain: audioContext.createGain(),
                panner: audioContext.createPanner(),
                threeD: false,
                ended: false,
                playBuffer: (function(delay, buffer, offset) {
                    this.source.buffer = buffer;
                    var chan = this;
                    this.ended = false;
                    this.source.onended = (function() {
                        chan.setup();
                        chan.ended = true;
                    });
                    this.source.start(delay, offset);
                }),
                setup: (function() {
                    this.source = audioContext.createBufferSource();
                    this.setupPanning();
                }),
                setupPanning: (function() {
                    if (this.threeD) {
                        this.source.disconnect();
                        this.source.connect(this.panner);
                        this.panner.connect(this.gain);
                    } else {
                        this.panner.disconnect();
                        this.source.connect(this.gain);
                    }
                })
            };
            instance.panner.rolloffFactor = 0;
            instance.gain.connect(this.context.destination);
            instance.setup();
            return instance;
        }
        parse(url, data, onComplete) {
            const sound = new WebAudioSource();
            sound.url = url;
            sound.instance = this.createSoundInstance();
            this._audioInstances.set(url, sound);
            this.context.decodeAudioData(data, function(buffer) {
                sound.buffer = buffer;
                onComplete && onComplete();
            }, function(e) {
                sound.error = true;
                onComplete && onComplete();
                console.log("Decode error." + sound.url);
            });
        }
        downloadArrayBuffer(url, onComplete) {
            if (this._audioInstances.has(url)) {
                onComplete && onComplete();
                return;
            }
            const t = this;
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = "arraybuffer";
            xhr.onload = function() {
                if (xhr.status === 200 || xhr.status === 0) {
                    t.parse(url, xhr.response, onComplete);
                } else {
                    throw "no response";
                }
            };
            xhr.onerror = function() {
                onComplete && onComplete();
                throw "no response";
            };
            xhr.ontimeout = function() {
                onComplete && onComplete();
            };
            xhr.onabort = function() {
                onComplete && onComplete();
            };
            xhr.send(null);
        }
    }

    const audioEngine = window.WebAudioEngine = new WebAudioEngine();


    // var WebAudioEngine$1 = 



    class platform {
        constructor() {
            this.canNavigateActive_ = false;
            this.screen_ = "";
            this.action_ = "";
            this.to_ = "";
            this.prompt_ = null;
            this.initialized_ = false;
            this.initData();

        }



        static getInstance() {
            if (!this._instance) {
                this._instance = new platform();
            }
            return this._instance;
        }
        initData() {
            let canvas = document.getElementById("layaCanvas");
            if (canvas) {
                canvas.addEventListener("mouseup", this.onNavigate_.bind(this));
                canvas.addEventListener("touchend", this.onNavigate_.bind(this));
            }
        }
        onNavigate_() {

            if (this.canNavigateActive_) {
                GAMESDK.moreGame();
            }
            this.canNavigateActive_ = false;
        }

        getStorageSync(key) {
            let value = null;
            try {
                let v = Laya.LocalStorage.getItem(key);
                value = JSON.parse(v);
            } catch (error) {

            }

            return value
        }
        setStorageSync(key, value) {
            return Laya.LocalStorage.setItem(key, JSON.stringify(value));
        }

        navigate(screen_, action_, to_) {
            if (this.canNavigateActive_ === false) {
                this.screen_ = screen_;
                this.action_ = action_;
                this.to_ = to_;
                this.canNavigateActive_ = true;
            }
        }

        onblur() {
            audioEngine.muted = true;
        }

        onfocus() {
            audioEngine.muted = false;
        }

        //插屏广告
        showInterstitial(complete) {

            GAMESDK.showAd({
                beforeShowAd: () => {
                    window.WebAudioEngine.adShowing = true;
                    this.onblur();
                    Laya.timer.scale = 0;
                    // window.document.getElementById("advertisement") && (window.document.getElementById("advertisement").style.display = "");
                },
                afterShowAd: () => {
                    window.focus();
                    this.onfocus();
                    window.WebAudioEngine.adShowing = false;
                    Laya.timer.scale = 1;
                    // window.document.getElementById("advertisement") && (window.document.getElementById("advertisement").style.display = "none");
                    complete && complete();
                }
            });



        }
        //复活
        showReward(success, failure) {
            // console.log("激励广告")
            GAMESDK.showAdOfEvent({
                onRewardBeforeBreak: () => {
                    window.WebAudioEngine.adShowing = true;
                    this.onblur();
                    Laya.timer.scale = 0;
                    // window.document.getElementById("advertisement") && (window.document.getElementById("advertisement").style.display = "");
                },
                onRewardAfterBreak: () => {
                    window.focus();
                    this.onfocus();
                    window.WebAudioEngine.adShowing = false;
                    Laya.timer.scale = 1;
                    // window.document.getElementById("advertisement") && (window.document.getElementById("advertisement").style.display = "none");
                    // complete && complete();
                },
                onRewardComplete: () => {

                    success && success();
                    success = null;
                },
                onRewardDismissed: () => {

                    if (failure) {
                        failure();
                        failure = null;
                    }
                    // else {
                    // if (event == YYG.Event.AD_SKIPPED) {
                    this.prompt("Please watch the ad completely, so that you can claim your reward.");
                    // }
                    // }
                }
            });

        }

        initList(appList) {


            appList.array = null;
        }
        prompt(msg, duration) {
            if (!this.prompt_) {
                this.prompt_ = document.createElement('div');
                this.prompt_.style.cssText = "font-family:siyuan;max-width:80%;min-width:320px;padding:10px 10px 10px 10px;min-height:40px;color: rgb(255, 255, 255);line-height: 20px;text-align:center;border-radius: 4px;position: fixed;top: 40%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.7);font-size: 16px;";
                document.body.appendChild(this.prompt_);
            }
            this.prompt_.innerHTML = msg;
            duration = isNaN(duration) ? 2000 : duration;
            this.prompt_.style.display = "inline";
            this.prompt_.style.opacity = '1';
            setTimeout(function() {
                var d = 0.5;
                this.prompt_.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
                this.prompt_.style.opacity = '0';
                this.prompt_.style.display = "none";
            }.bind(this), duration);
        }
        getForgames() {

            return null;
        }

        createLogo() {
            const yad = new Laya.Image();
            yad.skin = "yad.png";
            yad.zOrder = 2e5;
            Laya.stage.addChild(yad);
            return yad;
        }
        // yad.on(Laya.Event.MOUSE_DOWN, yad, () => { platform.getInstance().navigate("GAME", "LOGO"); });

        /**
         * 启动YAD——SDK
         * @param {*} name 
         * @param {*} complete 
         */
        yadstartup(name, complete) {
            if (this.initialized_) return;
            this.createNoVideo();
            this.createLoading();
            window.WebAudioEngine.init().then(() => {
                Laya.SoundManager.playMusic = function(url) {
                    window.WebAudioEngine && window.WebAudioEngine.playMusic(url);
                }
                Laya.SoundManager.playSound = function(url) {
                    window.WebAudioEngine && window.WebAudioEngine.playSound(url);
                }
                Laya.SoundManager.stopMusic = function(url) {
                    window.WebAudioEngine && window.WebAudioEngine.stopMusic();
                }
            })
            //临时锁死
            this.initialized_ = true;
            Laya.loader.load("cnf.json", Laya.Handler.create(this, (res) => {
                         this.initialized_ = true;
                         complete && complete();
            }))
        }

        /**
         * 启动CARGAMES——SDK
         * @param {*} name 
         * @param {*} complete 
         */
        cargamesstartup(name, complete) {
            if (this.initialized_) return;
            this.createNoVideo();
            this.createLoading();
            window.WebAudioEngine.init().then(() => {
                Laya.SoundManager.playMusic = function(url) {
                    window.WebAudioEngine && window.WebAudioEngine.playMusic(url);
                }
                Laya.SoundManager.playSound = function(url) {
                    window.WebAudioEngine && window.WebAudioEngine.playSound(url);
                }
                Laya.SoundManager.stopMusic = function(url) {
                    window.WebAudioEngine && window.WebAudioEngine.stopMusic();
                }
            })
            //临时锁死
            this.initialized_ = true;
            Laya.loader.load("cnf.json", Laya.Handler.create(this, (res) => {
                this.initialized_ = true;
                complete && complete();
            }))
        }

        //只能在Laya引擎使用
        createNoVideo() {
            if (!Laya.Prefab || !Laya.Script) {
                return;
            }
            let noVideoJson = {
                "x": 0,
                "type": "Box",
                "selectedBox": 3,
                "selecteID": 4,
                "searchKey": "Box",
                "props": {
                    "y": 0,
                    "x": 0,
                    "top": 0,
                    "right": 0,
                    "presetID": 1,
                    "preset": "laya/pages/Prefab/NoVideo.prefab",
                    "mouseEnabled": true,
                    "left": 0,
                    "isPresetRoot": true,
                    "bottom": 0
                },
                "nodeParent": -1,
                "maxID": 10,
                "label": "Box(NoVideo)",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 3,
                "child": [{
                    "x": 15,
                    "type": "Sprite",
                    "searchKey": "Sprite,spr_tip,spr_tip",
                    "props": {
                        "y": 300,
                        "x": 400,
                        "width": 740,
                        "var": "spr_tip",
                        "presetID": 2,
                        "preset": "laya/pages/Prefab/NoVideo.prefab",
                        "pivotY": 270,
                        "pivotX": 370,
                        "name": "spr_tip",
                        "height": 540
                    },
                    "nodeParent": 3,
                    "label": "spr_tip",
                    "isOpen": true,
                    "isDirectory": true,
                    "isAniNode": true,
                    "hasChild": true,
                    "compId": 4,
                    "child": [{
                            "x": 30,
                            "type": "Rect",
                            "searchKey": "Rect",
                            "props": {
                                "y": 0,
                                "x": 0,
                                "width": 740,
                                "presetID": 3,
                                "preset": "laya/pages/Prefab/NoVideo.prefab",
                                "height": 540,
                                "fillColor": "#000000"
                            },
                            "nodeParent": 4,
                            "label": "Rect(NoVideo)",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 6,
                            "child": []
                        },
                        {
                            "x": 30,
                            "type": "Label",
                            "searchKey": "Label",
                            "props": {
                                "y": 30,
                                "x": 0,
                                "width": 740,
                                "valign": "middle",
                                "text": "VIDEO",
                                "presetID": 4,
                                "preset": "laya/pages/Prefab/NoVideo.prefab",
                                "height": 76,
                                "fontSize": 80,
                                "color": "#ffffff",
                                "align": "center"
                            },
                            "nodeParent": 4,
                            "label": "Label(NoVideo)",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 7,
                            "child": []
                        },
                        {
                            "x": 30,
                            "type": "Label",
                            "searchKey": "Label",
                            "props": {
                                "y": 163,
                                "x": 0,
                                "width": 740,
                                "valign": "middle",
                                "text": "No Video Available",
                                "presetID": 5,
                                "preset": "laya/pages/Prefab/NoVideo.prefab",
                                "height": 170,
                                "fontSize": 40,
                                "color": "#ffffff",
                                "align": "center"
                            },
                            "nodeParent": 4,
                            "label": "Label(NoVideo)",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 8,
                            "child": []
                        },
                        {
                            "x": 30,
                            "type": "Label",
                            "searchKey": "Label",
                            "props": {
                                "y": 356,
                                "x": 0,
                                "width": 740,
                                "valign": "middle",
                                "text": "Click anywhere to close",
                                "presetID": 6,
                                "preset": "laya/pages/Prefab/NoVideo.prefab",
                                "height": 170,
                                "fontSize": 35,
                                "color": "#ffffff",
                                "align": "center"
                            },
                            "nodeParent": 4,
                            "label": "Label(NoVideo)",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 9,
                            "child": []
                        }
                    ]
                }],
                "animations": [{
                    "nodes": [],
                    "name": "ani1",
                    "id": 1,
                    "frameRate": 24,
                    "action": 0
                }]
            }
            class noVideoScript extends Laya.Script {
                constructor() {
                    super();
                }

                onEnable() {
                    this.owner.top = 0;
                    this.owner.bottom = 0;
                    this.owner.left = 0;
                    this.owner.right = 0;

                    this.spr_tip = this.owner.getChildByName("spr_tip");

                    if (this.owner.width > this.owner.height) {
                        this.spr_tip.scale(this.owner.height / 1920, this.owner.height / 1920);
                    } else {
                        this.spr_tip.scale(this.owner.width / 1080, this.owner.width / 1080);
                    }

                    this.spr_tip.pos(this.owner.width / 2, this.owner.height / 2);
                    this.owner.on(Laya.Event.CLICK, this, this.closePer);
                }

                closePer() {
                    platform.getInstance().closeNoVideo();
                }
            }
            let noVideoPer = new Laya.Prefab();
            // Laya.loader.load(noVideoJson, Laya.Handler.create(this, (obj) => {
            noVideoPer.json = noVideoJson;
            this.noVideoPer = noVideoPer.create();
            this.noVideoPer.zOrder = 199999;
            this.noVideoPer.addComponent(noVideoScript);
            // this.showNoVideo();
            // }))
        }


        showNoVideo() {
            this.noVideoPer && Laya.stage.addChild(this.noVideoPer);
        }

        closeNoVideo() {
            this.noVideoPer && this.noVideoPer.removeSelf();
        }


        createLoading() {
            if (!Laya.Prefab || !Laya.Script) {
                return;
            }
            let noVideoJson = {
                "x": 15,
                "type": "Box",
                "searchKey": "Box,box_clickLayer",
                "props": {
                    "var": "box_clickLayer",
                    "top": 0,
                    "right": 0,
                    "mouseEnabled": true,
                    "left": 0,
                    "bottom": 0
                },
                "nodeParent": 2,
                "label": "box_clickLayer",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 131,
                "child": [{
                        "x": 30,
                        "type": "Box",
                        "searchKey": "Box",
                        "props": {
                            "top": 0,
                            "right": 0,
                            "left": 0,
                            "bottom": 0,
                            "bgColor": "#000000",
                            "alpha": 0.5
                        },
                        "nodeParent": 131,
                        "label": "Box",
                        "isOpen": true,
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 132,
                        "child": []
                    },
                    {
                        "x": 30,
                        "type": "Label",
                        "searchKey": "Label",
                        "props": {
                            "y": 0,
                            "x": 0,
                            "valign": "middle",
                            "text": "LOADING\\nPLEASE WAIT…",
                            "right": 0,
                            "left": 0,
                            "fontSize": 50,
                            "color": "#ffffff",
                            "centerY": 0,
                            "align": "center"
                        },
                        "nodeParent": 131,
                        "label": "Label",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 133,
                        "child": []
                    }
                ]
            }
            class noVideoScript extends Laya.Script {
                constructor() {
                    super();
                }

                onEnable() {

                }

                closePer() {
                    platform.getInstance().closeNoVideo();
                }
            }
            let noVideoPer = new Laya.Prefab();
            // Laya.loader.load(noVideoJson, Laya.Handler.create(this, (obj) => {
            noVideoPer.json = noVideoJson;
            this.loadingPer = noVideoPer.create();
            this.loadingPer.zOrder = 199999;
            this.loadingPer.addComponent(noVideoScript);
            // this.showNoVideo();
            // }))
        }


        showLoading() {
            this.loadingPer && Laya.stage.addChild(this.loadingPer);
        }

        closeLoading() {
            this.loadingPer && this.loadingPer.removeSelf();
        }


    }
    platform._instance = null;
    window["platform"] = platform;
}()