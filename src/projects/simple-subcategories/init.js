(function(exports) {
    'use strict';

    //initialize the app
    var settings = {
        Model: YoursMediaModel,
        PlayerView: PlayerView,
        PlaylistView: PlaylistPlayerView,
        dataURL: "http://localhost:5000/yours-app-ea7c8/us-central1/users/:userid/movies",
        showSearch: false,
        displayButtons:false,
        appLogo: "./assets/logo-circle.png"
    };

    exports.app = new App(settings);
}(window));
