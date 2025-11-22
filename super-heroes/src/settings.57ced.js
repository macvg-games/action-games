window._CCSettings = {
    platform: "web-mobile",
    groupList: ["default", "BG", "UI", "Player", "Enemy", "Wall", "oBullet", "Food", "Skill"],
    collisionMatrix: [
        [false],
        [false, false],
        [false, false, false],
        [false, false, false, false, false, true, true, true, false],
        [false, false, false, false, false, true, true, true, false],
        [false, false, false, true, true, false, false],
        [false, false, false, true, true, false, false],
        [false, false, false, true, true, false, false, false],
        [false, false, false, false, false, false, false, false, false]
    ],
    hasResourcesBundle: true,
    hasStartSceneBundle: false,
    remoteBundles: [],
    subpackages: [],
    launchScene: "db://assets/scenes/main.fire",
    orientation: "landscape",
    jsList: [],
    bundleVers: {
        internal: "d0832",
        prefab: "933ba",
        resources: "3046d",
        textures: "010a9",
        main: "75853"
    }
};