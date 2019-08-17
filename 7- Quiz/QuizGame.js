(function() {
	var totalScore = 0;
	// Create a Question Structure
	function Question(question, answers, correct) {
		this.question = question;
		this.answers = answers;
		this.correct = correct;
	}
	// Create a Question Prototype
	Question.prototype.displayQuestion = function() {
		// Display Question
		console.log(this.question);
		for (var i = 0; i < this.answers.length; i++) {
			console.log(i + " : " + this.answers[i]);
		}
	};
	// Create a Answer Prototype
	Question.prototype.checkAnswer = function(ans) {
		if (ans === this.correct) {
			totalScore++;
			console.log("Correct Answer");
		} else {
			console.log("Wrong Answer! Try Again.");
		}
		console.log("Your point is " + totalScore);
	};
	// Create a Questions
	var q1 = new Question("What\'s admin name ?", ["Serhat", "Serroli", "Other"], 0);
	var q2 = new Question("What\'s admin birth year?", [1990, 1994, 1998], 1);
	var q3 = new Question("What\'s admin favorite football club?", ["Giresun", "Sakarya", "Fenerbahçe"], 2);
	// Create a Questions Array
	var questions = [q1, q2, q3];

	function nextQuestion() {
		// Create a Random Number
		var rndNmb = Math.floor(Math.random() * questions.length);
		// Call Display Question's Function
		questions[rndNmb].displayQuestion();
		// Prompt Answer 
		var answer = prompt("Please select the correct answer");
		// Check Question Answer 
		if (answer !== "exit") {
			questions[rndNmb].checkAnswer(parseInt(answer));
			nextQuestion();
		}
	}

	nextQuestion();

})();
