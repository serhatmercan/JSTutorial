var massMark = 65,
    massJohn = 75,
    heightMark = 1.75,
    heightJohn = 1.85;

var bmiMark = massMark / (heightMark * heightMark),
	bmiJohn = massJohn / (heightJohn * heightJohn);

if (bmiMark > bmiJohn) {
	this.console.log("Mark's BMI higher than John's");
} else if (bmiMark === bmiJohn) {
	this.console.log("Mark's BMI is equal to John's");
} else {
	this.console.log("John's BMI higher than Mark's");
}
