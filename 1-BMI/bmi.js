var massMark = 65,
    massJohn = 75,
    heightMark = 1.75,
    heightJohn = 1.85;
    
var bmiMark = massMark / ( heightMark * heightMark ),
    bmiJohn = massJohn / ( heightJohn * heightJohn );
    
var result = ( bmiMark > bmiJohn );

this.console.log("Is Mark's BMI higher than John's ? " + result);
