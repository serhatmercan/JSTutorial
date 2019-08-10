var oJohn = {
	fullName: "John XXX",
	mass: 68,
	height: 1.81,
	calcBMI: function(){
		this.bmi = this.mass / (this.height * this.height); 
		return this.bmi;
	}
};

var oMark = {
	fullName: "Mark YYY",
	mass: 61,
	height: 1.72,
	calcBMI: function(){
		this.bmi = this.mass / (this.height * this.height); 
		return this.bmi;
	}
};

if(oJohn.calcBMI() > oMark.calcBMI()){
	console.log(oJohn.fullName + " has a higher BMI of " + oJohn.bmi); 	
}else if(oJohn.bmi == oMark.bmi){
	console.log("They have the same BMI."); 
}else{
	console.log(oMark.fullName + " has a higher BMI of " + oMark.bmi); 
}
