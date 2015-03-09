//This class will handle the phone object
function loadPhone() {
	var phone = new Sprite();
	phone.x = 100;
	phone.y = 500;
	phone.width = 70;
	phone.height = 50;
	phone.image = Textures.load("Actual_Phone.png");
	phone.active = false;
	phone.ringing = false;
	phone.visible = true;
	var act = 0;

	var phoneRing = new Sprite();
	phoneRing.x = 100;
	phoneRing.y = 500;
	phoneRing.width = 70;
	phoneRing.height = 50;
	phoneRing.image = Textures.load("phone_ring_ani.png");
	phoneRing.addAnimations(["ring"],[5]);
	phoneRing.visible = false;
	phoneRing.frameWidth = 70;
	phoneRing.frameHeight = 50;
	phoneRing.frameCount = 21;
	phoneRing.frameRate = 15;
	phoneRing.moveRate = 15;
	
	phoneRing.animation = "ring";

	phone.time = 3 + Math.floor(Math.random() * 5);
	phone.timeInterval = 10;
	phone.pauseTime = false;

	// phone.happy = 3;
	// phone.alarm = false;

	//used to count down until the phone rings
	phone.update = function(d) {
		this.frameRate = 0;
		if (!phone.pauseTime) {
			if (phone.ringing == false) {
				phone.time -= (d * MSPF) / 1000;
				phone.visible = true;
				if (phone.time <= 0) {
					phone.ringing = true;
					sArray[0].play();
					phone.visible = false;
					this.frameRate = this.moveRate;
					this.frameRate = 0;
					phone.alarm = true;
					// console.log("the phone is ring");
				}
			}
			// else {
				//if (phone.alarm) {
					// phone.happy -= (d * MSPF) / 1000;
					// if (phone.happy <= 0) {
						// lives.val--;
						// phone.time = 5 + Math.floor(Math.random() * phone.timeInterval);
						//phone.ringing = false;
						// phone.alarm = false;
					// }
				// }
			// }
		}
	};

	//what happens when the phone is ringing and the player arrives there
	phone.arrived = function() {
		//Time between phone calls
		phone.time = 5 + Math.floor(Math.random() * phone.timeInterval);
		sArray[0].pause();
		sArray[0].currentTime = 0;
		phone.ringing = false;
		phone.alarm = false;
	};
	
	phone.pause = function(){
		phone.visible = true;
		this.frameRate = 0;
		//phoneRing.visible = false;
		phone.pauseTime = true;
	};
	
	phone.resume = function(){
		if(phone.ringing){
			//phoneRing.visible = true;
			this.framRate = this.moveRate;
		}
		phone.pauseTime = false;
	};

	//What do when clicked on
	phone.click = function() {
		character.moveTo(this.x, this.y);
		phone.active = true;
	};

	//set the phone to the start state of the new level
	phone.newLevel = function(level) {
		phone.time = 3 + Math.floor(Math.random() * 5);
		phone.timeInterval = 10 - (2 * level);
		phone.ringing = false;
		phone.active = false;
		phone.visible = true;
		phone.pauseTime = false;
	};

	var phones = [phone, phoneRing];

	return phones;
}
