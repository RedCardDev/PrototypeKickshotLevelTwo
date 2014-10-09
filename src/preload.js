KickShot.Preload = function(game) {

};

KickShot.Preload.prototype = {
    preload: function() {
        this.stage.backgroundColor = '#B4D9E7';
        this.preloadBar = this.add.sprite((KickShot.GAME_WIDTH-311)/2,
            (KickShot.GAME_HEIGHT-27)/2, 'preloaderBar');
        this.load.setPreloadSprite(this.preloadBar);

        this.load.image('field', 'assets/images/blank_field.png');
    },

    create: function() {
        this.state.start('Game');
    }
};
