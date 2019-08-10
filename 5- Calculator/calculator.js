var oJohn = {
	aBills: [24, 48, 268, 180, 42],
	iRate: 0,
	aTips: [],
	aAmounts: [],
	calcTip: function(){
		for(var i = 0; i < this.aBills.length; i++){
			if( this.aBills[i] < 50 ){
				this.iRate = 0.2;
			}else if( this.aBills[i] < 100 ){
				this.iRate = 0.15;	
			}else{
				this.iRate = 0.1;
			}
			this.aTips.push(this.aBills[i] * this.iRate);
			this.aAmounts.push(this.aBills[i] + (this.aBills[i] * this.iRate));
		}
	}
};

function calcAvg(aTips){
	var sum = 0;
	for(var i=0; i<aTips.length; i++){
		sum += aTips[i]; 
	}
	return sum / aTips.length;
}

oJohn.calcTip();
console.log(oJohn);

var iAvg = calcAvg(oJohn.aTips);
console.log(iAvg); 
