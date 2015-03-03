//This class will handle the phone object
function loadPhone() {
	var phone = new Sprite();
	phone.x = 100;
	phone.y = 500;
	phone.width = 25;
	phone.height = 25;
	phone.image = Textures.load("phone.png");
	phone.active = false;
	phone.ringing = false;
	var act = 0;

	var phoneRing = new Sprite();
	phoneRing.x = 100;
	phoneRing.y = 450;
	phoneRing.width = 25;
	phoneRing.height = 25;
	phoneRing.image = Textures.load("ringing_phone.png");
	phoneRing.visible = false;
	
	phone.time = 5;

	//used to count down until the phone rings
	phone.update = function(d) {
		if (phone.ringing == false) {
			phone.time -= (d*MSPF)/1000;
			if (phone.time <= 0) {
				phone.ringing = true;
				console.log("the phone is ring");
			}
		}

	};
	
	//what happens when the phone is ringing and the player arrives there
	phone.arrived = function(){
			//Time between phone calls
			phone.time = 10;
			phone.ringing = false;
	};
	
	//What do when clicked on
	phone.click = function() {
		character.moveTo(this.x, this.y);
		phone.active = true;
	};
	
	var phones = [phone, phoneRing];
	
	return phones;
}
