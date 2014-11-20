game.module(
	'game.cardMenu'
).require(
	'engine.scene'
).body(function() {

game.createClass('CardMenu', {
	useCardButton: null,
	tradeButton: null,
	skipButton: null,
	mainViewButton: null,
	rightArrow: null,
	leftArrow: null,
	card1: null,
	card2: null,
	card3: null,
	textbox: null,

	init: function() {
		this.card1 = new game.Sprite('card1').addTo(game.scene.stage);
        this.card2 = new game.Sprite('card2').addTo(game.scene.stage);
		this.card3 = new game.Sprite('card3').addTo(game.scene.stage);
		
		this.textbox = new game.Sprite('textbox').addTo(game.scene.stage);
	
		this.rightArrow = new game.Sprite('rightArrow').addTo(game.scene.stage);
        this.leftArrow = new game.Sprite('leftArrow').addTo(game.scene.stage);
		this.useCardButton = new game.Sprite('useCardButton').addTo(game.scene.stage);
        this.tradeButton = new game.Sprite('tradeButton').addTo(game.scene.stage);
		this.skipButton = new game.Sprite('skipButton').addTo(game.scene.stage);
        this.mainViewButton = new game.Sprite('mainViewButton').addTo(game.scene.stage);
	},
	
	show: function() {
		var self = this;
		
		//Temp cards
		//Card 1
		self.card1.scale.x = self.card1.scale.y = 0.08;
		self.card1.position.set(-550, 125);
		var tween = new game.Tween(self.card1.position);
		tween.to({x: 80 }, 650);
		tween.easing('Quadratic.InOut');
		tween.start();
		/*self.card1.interactive = true;
		self.card1.click = function() {
			// NOTE: no hide needed for arrow
			self.hide(function() {
				// TODO: arrow mechanics here
			});
		};*/
		
		//Card 2
		self.card2.scale.x = self.card2.scale.y = 0.2;
		self.card2.position.set(-550, 20);
		var tween = new game.Tween(self.card2.position);
		tween.to({x: 200 }, 650);
		tween.easing('Quadratic.InOut');
		tween.start();
		/*self.card2.interactive = true;
		self.card2.click = function() {
			// NOTE: no hide needed for arrow
			self.hide(function() {
				// TODO: arrow mechanics here
			});
		};*/
		
		//Card 3
		self.card3.scale.x = self.card3.scale.y = 0.08;
		self.card3.position.set(-550, 125);
		var tween = new game.Tween(self.card3.position);
		tween.to({x: 470 }, 650);
		tween.easing('Quadratic.InOut');
		tween.start();
		/*self.card3.interactive = true;
		self.card3.click = function() {
			self.hide(function() {
				// TODO: arrow mechanics here
			});
		};
		*/
		
		//Textbox
		//TODO: text box window functionality and association with displayed card		
		self.textbox.scale.x = self.textbox.scale.y = 0.9;
		self.textbox.position.set(-550, 360);
		var tween = new game.Tween(self.textbox.position);
		tween.to({x: 30 }, 650);
		tween.easing('Quadratic.InOut');
		tween.start();

		//Right Arrow Button
		self.rightArrow.scale.x = self.rightArrow.scale.y = 0.3;
		self.rightArrow.position.set(-550, 150);
		var tween = new game.Tween(self.rightArrow.position);
		tween.to({x: 560 }, 650);
		tween.easing('Quadratic.InOut');
		tween.start();
		self.rightArrow.interactive = true;
		self.rightArrow.click = function() {
			// NOTE: no hide needed for arrow
			self.hide(function() {
				// TODO: arrow mechanics here
			});
		};
		
		//Left Arrow Button
		self.leftArrow.scale.x = self.leftArrow.scale.y = 0.3;
		self.leftArrow.position.set(-550, 150);
		var tween = new game.Tween(self.leftArrow.position);
		tween.to({x: 0 }, 650);
		tween.easing('Quadratic.InOut');
		tween.start();
		self.leftArrow.interactive = true;
		self.leftArrow.click = function() {
			// NOTE: no hide needed for arrow
			self.hide(function() {
				// TODO: arrow mechanics here
			});
		};
		
		//Use Card Button
		self.useCardButton.scale.x = self.useCardButton.scale.y = 1.3;
		self.useCardButton.position.set(-600, 730);
		var tween = new game.Tween(self.useCardButton.position);
		tween.to({x: 100 }, 650);
		tween.easing('Quadratic.InOut');
		tween.start();
		self.useCardButton.interactive = true;
		self.useCardButton.click = function() {
			self.hide(function() {
				// TODO: specific use card mechanics here
			});
		};
		
		//Trade Card Button
		self.tradeButton.scale.x = self.tradeButton.scale.y = 1.3;
		self.tradeButton.position.set(-600, 730);
		var tween = new game.Tween(self.tradeButton.position);
		tween.to({x: 350 }, 650);
		tween.easing('Quadratic.InOut');
		tween.start();
		self.tradeButton.interactive = true;
		self.tradeButton.click = function() {
			// NOTE: may not always need to hide when trade is clicked
			self.hide(function() {
				// TODO: trade card mechanics here
			});
		};
		
		//Skip Button
		self.skipButton.scale.x = self.skipButton.scale.y = 1.3;
		self.skipButton.position.set(-600, 830);
		var tween = new game.Tween(self.skipButton.position);
		tween.to({x: 100 }, 850);
		tween.easing('Quadratic.InOut');
		tween.start();
		self.skipButton.interactive = true;
		self.skipButton.click = function() {
			self.hide(function() {
				// TODO: skip turn mechanics here
			});
		};
		
		//Main View Button
		self.mainViewButton.scale.x = self.mainViewButton.scale.y = 1.3;
		self.mainViewButton.position.set(-600, 830);
		var tween = new game.Tween(self.mainViewButton.position);
		tween.to({x: 350 }, 850);
		tween.easing('Quadratic.InOut');
		tween.start();
		self.mainViewButton.interactive = true;
		self.mainViewButton.click = function() {
			self.hide(function() {});
		};
	},
	
	hide: function(completeFunc) {
		var self = this;
		
		game.scene.addTween(self.card1, {x: 900}, 750,
		{ easing: game.Tween.Easing.Quadratic.In }).start();
		
		game.scene.addTween(self.card2, {x: 900}, 750,
		{ easing: game.Tween.Easing.Quadratic.In }).start();
		
		game.scene.addTween(self.card3, {x: 900}, 750,
		{ easing: game.Tween.Easing.Quadratic.In }).start();
		
		game.scene.addTween(self.leftArrow, {x: 900}, 750,
		{ easing: game.Tween.Easing.Quadratic.In }).start();
		
		game.scene.addTween(self.rightArrow, {x: 900}, 750,
		{ easing: game.Tween.Easing.Quadratic.In }).start();
		
		game.scene.addTween(self.useCardButton, {x: 900}, 750,
		{ easing: game.Tween.Easing.Quadratic.In,
		  onComplete: completeFunc
		}).start();
		
		game.scene.addTween(self.tradeButton, {x: 900}, 750,
		{ easing: game.Tween.Easing.Quadratic.In }).start();
		
		game.scene.addTween(self.skipButton, {x: 900}, 750,
		{ easing: game.Tween.Easing.Quadratic.In }).start();
		
		game.scene.addTween(self.mainViewButton, {x: 900}, 750,
		{ easing: game.Tween.Easing.Quadratic.In }).start();
		
		game.scene.addTween(self.textbox, {x: 900}, 750,
		{ easing: game.Tween.Easing.Quadratic.In }).start();
	}
});

});