var johnTeamAvgScores = ( 89 + 120 + 103 ) / 3,
    mikeTeamAvgScores = ( 116 + 94 + 123 ) / 3,
    maryTeamAvgScores = ( 97 + 134 + 105 ) / 3;
    
if(johnTeamAvgScores > mikeTeamAvgScores && johnTeamAvgScores > maryTeamAvgScores){
	console.log("John's team wins " + johnTeamAvgScores + " points");
}else if(mikeTeamAvgScores > maryTeamAvgScores){
	console.log("Mike's team wins " + mikeTeamAvgScores + " points");
}else if(johnTeamAvgScores === mikeTeamAvgScores && mikeTeamAvgScores === maryTeamAvgScores){
	console.log("There is a draw. Team's average score is " + johnTeamAvgScores );
}else{
	console.log("Mary's team wins " + maryTeamAvgScores + " points");		
}
