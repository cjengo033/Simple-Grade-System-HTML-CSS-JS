var total = 4;
var finalAverage = 0;
var result = 0;

function submitButton(){
	var a = parseInt(document.getElementById('programmingSubject').value);
	var b = parseInt(document.getElementById('mathSubject').value);
	var c = parseInt(document.getElementById('programmingSubject').value);
	var d = parseInt(document.getElementById('databaseSubject').value);
	finalAverage =  a + b + c +d;
	result = finalAverage / total;
	if (result == 100)
	{
			return document.getElementById('result').innerHTML = "Your final average is: " + result + " & your letter grade is A+"; 
	}
	else if (result >= 90)
	{
			return document.getElementById('result').innerHTML = "Your final average is: " + result + " & your letter grade is A"; 
	}
	else if (result >= 80)
	{	
			return document.getElementById('result').innerHTML = "Your final average is: " + result + " & your letter grade is B"; 
	}
	else if (result >= 70)
	{
		return document.getElementById('result').innerHTML = "Your final average is: " + result + " & your letter grade is C";
	}

		else if (result >= 60)
	{
		return document.getElementById('result').innerHTML = "Your final average is: " + result + " & your letter grade is D";
	}

		else  (result < 59)
	{
		return document.getElementById('result').innerHTML = "Your final average is: " + result + " & your letter grade is F";
	}
	
}
