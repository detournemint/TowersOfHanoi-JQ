(function (root) {
  var Hanoi = root.Hanoi = (root.Hanoi || {});

	var UI = Hanoi.UI = function(game) {
		this.game = game
		this.firstClick = undefined
	}

	UI.prototype.start = function() {
		this.render();
		this.setClickCallbacks();
	}

	UI.prototype.render = function() {
		var that = this;
		console.log(this.game.towers)
	  this.game.towers.forEach(function(tower, index) {
	  	tower.forEach(function(disc) {
				console.log(disc)
				var $new_div = $("<div></div>");
						$new_div.addClass("disc");
						$new_div.attr('id', "disc" + disc);
	  		var $tower = $(".tower[data=\"" + (index + 1) + "\"]");
				$tower.prepend($new_div);
	  	})
	  });
	}

	UI.prototype.setClickCallbacks = function(){
		var that = this;
		$('.tower').click(function(event){
			if (that.firstClick === undefined) {
				that.firstClick = this.id - 1
			} else {
			if (that.game.move(that.firstClick, this.id - 1) === true)
			{
				$('.disc').remove();
				that.firstClick = undefined
				that.render();
				if (that.game.isWon()){
					alert('YOU WIN!')
					location.reload();
				}

			}
			}});
		}








})(this);