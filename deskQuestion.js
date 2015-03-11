function loadDeskQ() {
	var deskQ = new Sprite();
	deskQ.x = 650;
	deskQ.y = 250;
	deskQ.width = 150;
	deskQ.height = 150;
	deskQ.answered = false;
	deskQ.visible = false;

	var questions = [{image: "deskQ1.png", outcomes: [-1, 0, -1]}, {image: "deskQ2.png", outcomes: [0, -1, -1]}];
	deskQ.current;
	
	deskQ.pickQuestion = function(){
		deskQ.current = questions[Math.floor(Math.random() * 2)];
		deskQ.image = Textures.load(this.current.image);
	};
	
	deskQ.click = function() {
		var dy = gInput.mouse.y - this.y;
		if (dy >= 75 && dy <= 99) {
			console.log("you picked A");
			lives += this.current.outcomes[0];
			deskQ.visible = false;
			deskQ.answered = true;
			customers.pop();
			people.change();
		}
		if (dy >= 100 && dy <= 124) {
			console.log("you picked B");
			lives += this.current.outcomes[1];
			deskQ.visible = false;
			deskQ.answered = true;
			customers.pop();
			people.change();
		}
		if (dy >= 125 && dy <= 150) {
			console.log("you picked C");
			lives += this.current.outcomes[2];
			deskQ.visible = false;
			deskQ.answered = true;
			customers.pop();
			people.change();
		}
	};

	return deskQ;
}