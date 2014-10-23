game.module(
    'game.main'
).require(
    'engine.scene',
    'game.assets',
    'game.dice'
)
.body(function() {

game.HUMAN = true;
game.AI = false;

game.createScene('Main', {
    backgroundColor: 0xb9bec7,
    title: null,

    init: function() {
        this.title = new game.Sprite('title').addTo(this.stage);
        this.title.x = game.system.width / 2 - this.title.width / 2 + 10;
        this.title.y = -this.title.height;

        this.addTween(this.title, {y: 130}, 800, {delay: 100, easing: game.Tween.Easing.Back.Out}).start();
    },

    mouseup: function() {
        var self = this;
        this.addTween(this.title, {y: -this.title.height}, 400,
            {   delay: 50,
                easing: game.Tween.Easing.Back.In,
                onComplete: function() {
                    game.system.setScene('Menu');
                }
            }).start();
    }
});

game.createScene('Menu', {
	backgroundColor: 0xb9bec7,
		menu: null,
	init: function() {
			var self = this;
		this.menu = new game.Sprite('menu').addTo(this.stage);
		this.menu.x = 0;
		this.menu.y = -this.menu.height;
		this.addTween(this.menu, {y: 0}, 600, {delay: 400, easing: game.Tween.Easing.Quadratic.Out}).start();
			//Play Button
			this.playButton = new game.Sprite('playButton').addTo(this.stage);
			this.playButton.scale.x = this.playButton.scale.y = 0.8;
			this.playButton.position.set(50, 750);
			this.playButton.interactive = true;
			this.playButton.click = function() {
			self.addTween(self.menu, {y: -self.menu.height}, 400,
				{ delay: 50,
				easing: game.Tween.Easing.Back.In,
				onComplete: function() {
					game.system.setScene('Game');
				}
				}).start();};	
			//Question Button
			this.questionButton = new game.Sprite('questionButton').addTo(this.stage);
			this.questionButton.scale.x = this.questionButton.scale.y = 0.75;
			this.questionButton.position.set(250, 750);
			this.questionButton.interactive = true;
			this.questionButton.click = function() {
			self.addTween(self.menu, {y: -self.menu.height}, 400,
			{ delay: 50,
				easing: game.Tween.Easing.Back.In,
				onComplete: function() {
					game.system.setScene('Game');
				}
			}).start();};	
			//Web Linc Button
			this.webLincButton = new game.Sprite('webLincButton').addTo(this.stage);
			this.webLincButton.scale.x = this.webLincButton.scale.y = 2.55;
			this.webLincButton.position.set(450, 750);
			this.webLincButton.interactive = true;
			this.webLincButton.click = function() {
			self.addTween(self.menu, {y: -self.menu.height}, 400,
			{ delay: 50,
				easing: game.Tween.Easing.Back.In,
				onComplete: function() {
					game.system.setScene('Game');
				}
			}).start();};	
	}	
});

game.createScene('Game', {
    backgroundColor: 0xb9bec7,
    chipZone: 0,

    dice: null,

    canTap: false,
    turn: game.HUMAN,
    possession: game.HUMAN,
    turnOver: false,

    chip: null,

    init: function() {
        var self = this;
        var field = new game.Sprite('field').addTo(this.stage);
        field.x = 0;
        field.y = -field.height;
        this.addTween(field, {y: 0}, 600, {delay: 400, easing: game.Tween.Easing.Quadratic.Out}).start();

        this.chip = new game.Sprite('chip-home').addTo(this.stage);
        this.chip.scale.x = this.chip.scale.y = 0.7;
        this.chip.center();
        this.chip.y = -field.height/2 - (this.chip.height / 2);
        this.addTween(this.chip, {y: game.system.height / 2 - this.chip.height / 2}, 600,
            {delay: 400, easing: game.Tween.Easing.Quadratic.Out,
             onComplete: function() {
                 self.dice = new game.Dice();
                 self.addObject(self.dice);
                 self.showDice();
             }
            }).start();
    },

    enableInput: function() {
        this.canTap = true;
    },

    disableInput: function() {
        this.canTap = false;
    },

    mouseup: function() {
        if (!this.canTap) { return; }

        if (this.turnOver === true) {
            var self = this;
            this.turnOver = false;
            this.hideDice();
            this.addTimer(1000, function() {
                self.changeActivePlayer();
            });
            return;
        }

        if (this.turn == game.HUMAN) {
            // human player's turn
            this.rollDice();
        }
    },

    hideDice: function() {
        this.disableInput();
        this.dice.hide();
    },

    showDice: function() {
        this.disableInput();
        this.dice.show();

        var self = this;
        if (this.turn == game.HUMAN) {
            this.addTimer(500, function() {
                self.enableInput();
            });
        }

        if (this.turn == game.AI) {
            this.addTimer(1000, function() {
                self.rollDice();
            });
        }
    },

    changeActivePlayer: function() {
        if (this.turn === game.HUMAN) {
            this.turn = game.AI;
            this.dice.setAiPosition();
            this.showDice();
        } else {
            this.turn = game.HUMAN;
            this.dice.setPlayerPosition();
        }
    },

    rollDice: function() {
        this.disableInput();

        var self = this;
        this.dice.roll();
        // roll the dice for a second
        this.addTimer(1000, function() {
            self.dice.stopRoll();
            // brief pause before action is taken
            self.addTimer(250, function() {
                if (self.dice.value1 === self.dice.value2) {
                    // doubles? turn over
                    self.changePossession();
                } else if (self.turn === self.possession) {
                    self.advanceToken();
                } else {
                    self.endTurn();
                }
            });
        });
    },

    changePossession: function() {
        //this.possession = !this.possession;

    },

    advanceToken: function() {
        var self = this;
        var move = Math.max(this.dice.value1, this.dice.value2);
        this.chipZone += (this.possession == game.HUMAN) ? -move : move;
        var newpos = game.system.height * 0.5;

        if (this.chipZone > 0) {
            newpos += 15 + (this.chipZone - 1) * 45;
        } else if (this.chipZone < 0) {
            newpos += -15 + (this.chipZone + 1) * 45;
        }

        this.addTween(this.chip, {y: newpos}, 500, {
            easing: game.Tween.Easing.Quadratic.InOut,
            onComplete: function() {
                self.endTurn();
            }
        }).start();
    },

    endTurn: function() {
        if (this.turn == game.HUMAN) {
            this.turnOver = true;
            this.enableInput();
        } else {
            var self = this;
            this.addTimer(1000, function() {
                self.hideDice();
                self.addTimer(1000, function() {
                    self.changeActivePlayer();
                    self.showDice();
                });
            });
        }
    }
});

});
