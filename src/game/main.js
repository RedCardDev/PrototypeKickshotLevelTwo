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

//START MENU
game.createScene('Menu', {
	backgroundColor: 0xb9bec7,
		menu: null,
	init: function() {
		var self = this;
		this.menu = new game.Sprite('menu').addTo(this.stage);
		this.menu.x = 0;
		this.menu.y = -this.menu.height;
		this.addTween(this.menu, {y: 0}, 600, {delay: 400, easing: game.Tween.Easing.Quadratic.Out,
             onComplete: function() {
			 
			 	//Play Button
				self.playButton = new game.Sprite('playButton').addTo(self.stage);
				self.playButton.scale.x = self.playButton.scale.y = 0.8;
				self.playButton.position.set(-600, 750);
				var tween = new game.Tween(self.playButton.position);
				tween.to({x: 125 }, 750);
				tween.easing('Quadratic.InOut');
				tween.start();
				self.playButton.interactive = true;
				self.playButton.click = function() {
					self.addTween(self.playButton, {x: 700}, 750,
					{ easing: game.Tween.Easing.Quadratic.In,
					  onComplete: self.nextScene.bind(self)
				    }).start();
					
					self.addTween(self.webLincButton, {x: 1100}, 750,
					{ easing: game.Tween.Easing.Quadratic.In }).start();
				};
				
				//Web Linc Button
				self.webLincButton = new game.Sprite('webLincButton').addTo(self.stage);
				self.webLincButton.scale.x = self.webLincButton.scale.y = 2.55;
				self.webLincButton.position.set(-200, 750);
				var tween3 = new game.Tween(self.webLincButton.position);
				tween3.to({x: 375 }, 750);
				tween3.easing('Quadratic.InOut');
				tween3.start();
				self.webLincButton.interactive = true;
				self.webLincButton.click = function() {
					self.addTween(self.playButton, {x: 700}, 750,
					{ easing: game.Tween.Easing.Quadratic.In }).start();
					
					self.addTween(self.webLincButton, {x: 1100}, 750,
					{ easing: game.Tween.Easing.Quadratic.In,
					  onComplete: self.nextScene.bind(self)
				    }).start();
				};
			}
            }).start();
		},

    nextScene: function() {
		this.addTween(this.menu, {y: -this.menu.height}, 400,
			{ delay: 400, easing: game.Tween.Easing.Quadratic.Out,
			  onComplete: function() { game.system.setScene('Game'); }
			}).start();
    }
});

//Card Pick Menu
game.createScene('CardPick', {
	backgroundColor: 0xb9bec7,
		cardPick: null,
	init: function() {
		var self = this;
		this.cardPick = new game.Sprite('cardPickBackground').addTo(this.stage);
		this.cardPick.x = 0;
		this.cardPick.y = -this.cardPick.height;
		this.cardPick.scale.x = this.cardPick.scale.y = 1.7;
		this.addTween(this.cardPick, {y: 0}, 600, {delay: 400, easing: game.Tween.Easing.Quadratic.Out,
             onComplete: function() {
			 	//Use Card Button
				self.useCardButton = new game.Sprite('useCardButton').addTo(self.stage);
				self.useCardButton.scale.x = self.useCardButton.scale.y = 1.3;
				self.useCardButton.position.set(-600, 730);
				var tween = new game.Tween(self.useCardButton.position);
				tween.to({x: 100 }, 650);
				tween.easing('Quadratic.InOut');
				tween.start();
				self.useCardButton.interactive = true;
				self.useCardButton.click = function() {
					self.addTween(self.useCardButton, {x: 900}, 700,
					{ easing: game.Tween.Easing.Quadratic.In,
					  onComplete: self.nextScene.bind(self)
				    }).start();
					
					self.addTween(self.tradeButton, {x: 1000}, 750,
					{ easing: game.Tween.Easing.Quadratic.In }).start();
					
					self.addTween(self.skipButton, {x: 1100}, 750,
					{ easing: game.Tween.Easing.Quadratic.In }).start();
					
					self.addTween(self.mainViewButton, {x: 1200}, 750,
					{ easing: game.Tween.Easing.Quadratic.In }).start();
				};
				
				//Trade Card Button
				self.tradeButton = new game.Sprite('tradeButton').addTo(self.stage);
				self.tradeButton.scale.x = self.tradeButton.scale.y = 1.3;
				self.tradeButton.position.set(-600, 730);
				var tween = new game.Tween(self.tradeButton.position);
				tween.to({x: 350 }, 650);
				tween.easing('Quadratic.InOut');
				tween.start();
				self.tradeButton.interactive = true;
				self.tradeButton.click = function() {
					self.addTween(self.tradeButton, {x: 900}, 700,
					{ easing: game.Tween.Easing.Quadratic.In,
					  onComplete: self.nextScene.bind(self)
				    }).start();
					
					self.addTween(self.useCardButton, {x: 1000}, 750,
					{ easing: game.Tween.Easing.Quadratic.In }).start();
					
					self.addTween(self.skipButton, {x: 1100}, 750,
					{ easing: game.Tween.Easing.Quadratic.In }).start();
					
					self.addTween(self.mainViewButton, {x: 1200}, 750,
					{ easing: game.Tween.Easing.Quadratic.In }).start();
				};
				
				//Skip Button
				self.skipButton = new game.Sprite('skipButton').addTo(self.stage);
				self.skipButton.scale.x = self.skipButton.scale.y = 1.3;
				self.skipButton.position.set(-600, 830);
				var tween = new game.Tween(self.skipButton.position);
				tween.to({x: 100 }, 850);
				tween.easing('Quadratic.InOut');
				tween.start();
				self.skipButton.interactive = true;
				self.skipButton.click = function() {
					self.addTween(self.skipButton, {x: 900}, 900,
					{ easing: game.Tween.Easing.Quadratic.In,
					  onComplete: self.nextScene.bind(self)
				    }).start();
					
					self.addTween(self.tradeButton, {x: 1000}, 750,
					{ easing: game.Tween.Easing.Quadratic.In }).start();
					
					self.addTween(self.useCardButton, {x: 1100}, 750,
					{ easing: game.Tween.Easing.Quadratic.In }).start();
					
					self.addTween(self.mainViewButton, {x: 1200}, 750,
					{ easing: game.Tween.Easing.Quadratic.In }).start();
				};
				
				//Main View Button
				self.mainViewButton = new game.Sprite('mainViewButton').addTo(self.stage);
				self.mainViewButton.scale.x = self.mainViewButton.scale.y = 1.3;
				self.mainViewButton.position.set(-600, 830);
				var tween = new game.Tween(self.mainViewButton.position);
				tween.to({x: 350 }, 850);
				tween.easing('Quadratic.InOut');
				tween.start();
				self.mainViewButton.interactive = true;
				self.mainViewButton.click = function() {
					self.addTween(self.mainViewButton, {x: 900}, 900,
					{ easing: game.Tween.Easing.Quadratic.In,
					  onComplete: self.nextScene.bind(self)
				    }).start();
					
					self.addTween(self.tradeButton, {x: 1000}, 750,
					{ easing: game.Tween.Easing.Quadratic.In }).start();
					
					self.addTween(self.skipButton, {x: 1100}, 750,
					{ easing: game.Tween.Easing.Quadratic.In }).start();
					
					self.addTween(self.useCardButton, {x: 1200}, 750,
					{ easing: game.Tween.Easing.Quadratic.In }).start();
				};
			}
            }).start();
		},

    nextScene: function() {
		this.addTween(this.cardPick, {y: -this.cardPick.height}, 400,
			{ delay: 400, easing: game.Tween.Easing.Quadratic.Out,
			  onComplete: function() { game.system.setScene('Game'); }
			}).start();
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
				 
				 //Card Pick Menu Button
				self.menuButton = new game.Sprite('menuButton').addTo(self.stage);
				self.menuButton.scale.x = self.menuButton.scale.y = 0.4;
				self.menuButton.position.set(-200, 860);
				var tween3 = new game.Tween(self.menuButton.position);
				tween3.to({x: 540 }, 750);
				tween3.easing('Quadratic.InOut');
				tween3.start();
				self.menuButton.interactive = true;
				self.menuButton.click = function() {
					self.addTween(self.menuButton, {x: 1100}, 750,
					{ easing: game.Tween.Easing.Quadratic.In,
					  onComplete: self.nextScene.bind(self)
				    }).start();
				};
             }
            }).start();
   },			
			nextScene: function() {
				this.addTween(this.menuButton, {y: -this.menuButton.height}, 400,
				{ delay: 400, easing: game.Tween.Easing.Quadratic.Out,
				  onComplete: function() { game.system.setScene('CardPick'); }
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
