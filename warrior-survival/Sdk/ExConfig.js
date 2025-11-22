window['projectVersion'] = '1.4.5'
window['v_release'] = '1.1.0'
window['v_releaseMark'] = '01'
window['Platform'] = "WECHAT"
window['appid'] = "wx5f8624d4c7b67927"
window['IsInWebTest'] = true
window['IsGM'] = true
window['isTestLog'] = true

/**gm服务器开关 */
window['IsGmFromSever'] = true

window['language'] = "ZH_CN" // "ZH_CN" // "EN"; 
window['httpResServerPath'] = "myurl://cdnminigame.lightlygame.com/shootking/WX11/";

window["useLuckCoin_power"] = true;
window["useCDKey"] = false
window["use2021NewYear"] = false
window["useNewYearKey"] = false

window["isOpenNewInGameGuide"] = true
window["shootMouseAim"] = false

window["useRate"] = false
window['EnableDataReport'] = true
window['LogModuleSW'] = true
    //是否开启引导
window['isGuidance'] = true

window['useGmCode'] = false


//是否显示隐私授权界面
window['AuthorizationInterface'] = false
    //是否显示客服


if (window['qq']) {
    window['Platform'] = "QQ"
    window['appid'] = "1112084894"
    window['IsInWebTest'] = false

    window['v_releaseMark'] = '05' //--05为qq渠道
    window['projectVersion'] = '1.1.1'
        // window['httpResServerPath'] = "myurl://dianli100.com/Hunter/V10/";
    window['httpResServerPath'] = "myurl://cdn-ndskqa.ylkjgame.com/qqv3/";
    window['EnableDataReport'] = false
    window['LogModuleSW'] = false
}

if (window['tt']) {

    window["useNewYearKey"] = true
    window['IsInWebTest'] = false
    window['Platform'] = "TT"
    window['projectVersion'] = '1.0.3'
    window['appid'] = "ttd7e1a15c48d98a6602"

    window["useCDKey"] = true

   // window['httpResServerPath'] = "myurl://games.cdn.data-eye.cn/qsll/tt/TT2/";

   window['httpResServerPath'] = "myurl://igame.chinanola.com/ndskqa/1.0.7/";
    //头条的appid，每次更新game.json时候要同步到这里
    window['ttappidList'] = []

    window['v_releaseMark'] = '04' //--04为字节跳动渠道
}


if (window['getAdapterInfo']) {
    window['Platform'] = 'KUAISHOU'
    window['IsInWebTest'] = true
    window["useNewYearKey"] = true
    window['projectVersion'] = '1.0.1'
    window["useCDKey"] = true
    window['IsGM'] = true
    window['v_releaseMark'] = '06' //--06为快手渠道
}

if (window['qg'] && window['qg'].setLoadingProgress) {
    //appkey=6L0Nrsalb2g4wG8c4Cg8Kk8cs
    window['Platform'] = 'OPPO'
    window['appid'] = "30623577"
    window['IsInWebTest'] = false
    window["useNewYearKey"] = false
    window['projectVersion'] = '1.1.7'
    window["useCDKey"] = false
    window['IsGM'] = false
    window['httpResServerPath'] = "myurl://cdnminigame.lightlygame.com/shootking/V11/";
    window['v_releaseMark'] = '07' //--07为oppo渠道
} else if (window['qg']) {
    //vivo
    window['Platform'] = 'VIVO'
    window['appid'] = "105505975"
    window['IsInWebTest'] = false
    window["useNewYearKey"] = false
    window['projectVersion'] = '1.0.4'
    window["useCDKey"] = false
    window['IsGM'] = false
    window['httpResServerPath'] = "myurl://cdnminigame.lightlygame.com/shootking/V11/";
    window['v_releaseMark'] = '10' //--10为vivo渠道
}




//原生平台判断
if (window.conchConfig) {
    var os = conchConfig.getOS();
    if (os == "Conch-android") {
        window['Platform'] = "ANDROID"
        window['projectVersion'] = bridge.call("getAppVersionName")
        window['IsInWebTest'] = false
        window['EnableDataReport'] = false



        if (window['ProjectSubCode'] == 'lr') {
            window['isGuidance'] = false
        }

        if (window['ProjectSubCode'] == "chop") { //狂热 英文版
            window['language'] = "EN"
            window['useGmCode'] = true
            window['useCDKey'] = false

            window['v_releaseMark'] = '08' //--08为狂热渠道
        }

        if (window['ProjectSubCode'] == "chuanqu") { // 传趣
            window['IsGmFromSever'] = false
            window['useGmCode'] = false
            window['v_releaseMark'] = '09' //--09为传趣渠道
            window['IsGM'] = false
        }

        if (window['ProjectSubCode'] == "laiwan") { //来玩
            window['AuthorizationInterface'] = true
            window['IsGmFromSever'] = false
            window['useGmCode'] = false
            window['v_releaseMark'] = '20'
            window['IsGM'] = false
            window['isGuidance'] = false
        }

        if (window['ProjectSubCode'] == "leyou") { //乐游
            window['AuthorizationInterface'] = true
            window['IsGmFromSever'] = false
            window['useGmCode'] = false
            window['v_releaseMark'] = '23'
            window['isGuidance'] = false

            window['IsGM'] = true
            window['IsInWebTest'] = false
            console.log('from leyou' + window['IsGM'] + " " + window['IsInWebTest'])
        }

        if (window['ProjectSubCode'] == "233") { //233
            window['AuthorizationInterface'] = true
            window['IsGmFromSever'] = false
            window['useGmCode'] = false
            window['v_releaseMark'] = '26'
            window['isGuidance'] = false

            window['IsGM'] = false
            window['IsInWebTest'] = false
            console.log('from leyou' + window['IsGM'] + " " + window['IsInWebTest'])
        }


    } else {
        window['Platform'] = "IOS"
        window["useRate"] = true
        window['projectVersion'] = bridge.call("getAppVersionName")
        window['IsGmFromSever'] = false
        window['v_releaseMark'] = '09' //--09为传趣渠道

        window['IsGM'] = false
        window['IsInWebTest'] = false

        window['EnableDataReport'] = false
        window['isGuidance'] = true

        //目前只在chop.io 测试版本开启
        if (window['ProjectSubCode'] == "chop") { //狂热 英文版
            window['useGmCode'] = true
            window['useCDKey'] = false
            window['language'] = "EN"
            window['v_releaseMark'] = '08' //--08为狂热渠道
        }
    }

}
//facebook instant
if (window['FBInstant']) {
    window['v_release'] = '1.0.0'
    window['Platform'] = "FBINSTANT"
    window['language'] = "EN"
    window['EnableDataReport'] = false
    window['v_releaseMark'] = '09' //--09为FB Isstant 渠道
    window['IsGM'] = false
    window["use2021NewYear"] = false

    window['IsInWebTest'] = false
    window['projectVersion'] = '1.0.0'
}

//console.log('exconfig window.h5api', window.h5api)

//4399 h5api 可用时机不确定，所以用工具强制修改
window.forceH54399=true;

//4399 
if (window.forceH54399) {
    //鼠标操作

    window['Platform'] = "H5_4399"
    window['language'] = "ZH_CN"
    window['EnableDataReport'] = false
    window['v_releaseMark'] = '25' //--09为FB Isstant 渠道
    window['IsGM'] = false
    window["use2021NewYear"] = false

    window['IsInWebTest'] = false
    window['projectVersion'] = '1.0.3'
    console.log('window.forceH54399', window.forceH54399)
}