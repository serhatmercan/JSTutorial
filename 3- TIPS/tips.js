function tipCalculator(bill) {
	if (bill < 50) {
		bill = bill * 0.2;
	} else if (50 <= bill && bill < 200) {
		bill = bill * 0.15;
	} else {
		bill = bill * 0.1;
	}
	return bill;
}

var bills = [124, 48, 268],
	tips = [],
	amounts = [];

tips[0] = tipCalculator(bills[0]);
tips[1] = tipCalculator(bills[1]);
tips[2] = tipCalculator(bills[2]);
console.log(tips);
 
amounts[0] = bills[0] + tips[0];
amounts[1] = bills[1] + tips[1];
amounts[2] = bills[2] + tips[2];
console.log(amounts);
