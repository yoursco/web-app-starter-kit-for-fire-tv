(function(exports) {
    'use strict';

    //initialize the app
    var settings = {
        Model: JSONMediaModel,
        PlayerView: PlayerView,
        PlaylistView: PlaylistPlayerView,
        dataURL: "./assets/data.json",
        showSearch: false,
        displayButtons:false,
        appLogo: "./logo-circle.png"
    };

    exports.app = new App(settings);
}(window));
