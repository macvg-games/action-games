"use strict";
let hasInitialised = !1,
    runtime = null;

function IsAbsoluteURL(t) {
    return /^(?:[a-z\-]+:)?\/\//.test(t) || "data:" === t.substr(0, 5) || "blob:" === t.substr(0, 5)
}

function IsRelativeURL(t) {
    return !IsAbsoluteURL(t)
}
async function LoadScripts(t) {
    if (1 === t.length) {
        const e = t[0];
        await
        import ((IsRelativeURL(e) ? "./" : "") + e)
    } else {
        const e = t.map(t => `import "${IsRelativeURL(t)?"./":""}${t}";`).join("\n"),
            r = URL.createObjectURL(new Blob([e], {
                type: "application/javascript"
            }));
        await
        import (r)
    }
}
async function InitRuntime(t) {
    if (hasInitialised) throw new Error("already initialised");
    hasInitialised = !0;
    const e = t.messagePort,
        r = t.baseUrl,
        i = t.exportType;
    self.devicePixelRatio = t.devicePixelRatio;
    const n = t.workerDependencyScripts.map(t => {
            let e = t;
            return t instanceof Blob ? URL.createObjectURL(t) : new URL(e, r).toString()
        }),
        o = [];
    self.runOnStartup = function(t) {
        if ("function" != typeof t) throw new Error("runOnStartup called without a function");
        o.push(t)
    };
    const s = t.engineScripts.map(t => new URL(t, r).toString());
    try {
        await LoadScripts([...n, ...s])
    } catch (t) {
        return void console.error("[C3 runtime] Failed to load all engine scripts in worker: ", t)
    }
    const a = t.projectScriptsStatus;
    self.C3_ProjectScriptsStatus = a;
    const c = t.mainProjectScript,
        p = t.projectScripts;
    for (let [t, r] of p)
        if (r || (r = t), t === c) try {
            await LoadScripts([r]), "preview" !== i || a[t] || ReportProjectMainScriptError(t, "main script did not run to completion", e)
        } catch (r) {
            ReportProjectMainScriptError(t, r, e)
        } else("scriptsInEvents.js" === t || t.endsWith("/scriptsInEvents.js")) && await LoadScripts([r]);
    if (t.runOnStartupFunctions = o, "preview" === i && "object" != typeof self.C3.ScriptsInEvents) {
        const t = "Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.";
        return console.error("[C3 runtime] " + t), void e.postMessage({
            type: "alert-error",
            message: t
        })
    }
    e.postMessage({
        type: "creating-runtime"
    }), runtime = self.C3_CreateRuntime(t), await self.C3_InitRuntime(runtime, t)
}

function ReportProjectMainScriptError(t, e, r) {
    console.error(`[Preview] Failed to load project main script (${t}): `, e);
    const i = `Failed to load project main script (${t}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`;
    r.postMessage({
        type: "alert-error",
        message: i
    })
}
self.addEventListener("message", t => {
    const e = t.data,
        r = e.type;
    if ("init-runtime" !== r) throw new Error(`unknown message '${r}'`);
    InitRuntime(e)
}), self.c3_import = (t =>
    import (t));