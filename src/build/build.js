({
    paths: {
        "requireLib": "../../../node_modules/requirejs/require",
        "jquery": "../../../bower_components/jquery/dist/jquery"
    },
    baseUrl: "../assets/js",
    dir: "../../dist/scripts",
    removeCombined: true,
    generateSourceMaps: false,
    findNestedDependencies: true,
    preserveLicenseComments: true,
    modules: [
        {
            name: "main",
            include: ["requireLib", "jquery"],
            create: true
        }
    ],
    optimize: "uglify2", 
    skipDirOptimize: false
})
