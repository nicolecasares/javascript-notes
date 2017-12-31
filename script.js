

// Into to javascript

//    js is a lightweight (does not use much memory), 
      // cross-platform (used on multiple platforms and systems),
      // object-oriented computer program language. 


// variables and data types

	//variables are a way to store or contain data 
	// store var so we can use it over and over again
	// var message = 'hello'

	// Primitive Data Types (Primative means they are not objects)
	// 1. Number
	// 2. String
	// 3. Boolean
	// 4. Undefined: type of value which does not have a value yet
	// 5. Null: also means 'non-existent'.

	//Javascript has dynamic typesing
		//do not have no manualy difine data type 
		// js figures out the data type of the var on its own and on the fly
		// can chage data type later in the code 
		// can be helpful and the creater of hard to find bugs 


// Variable Mutation and Type Coercion 
	
	// examle of Type Coercion 

	//var name = 'Nicole';
	//var age = 28;

	//console.log(name + age);

	//the resule is that the number 28 is now a string
	//this is called type coercion 
	// type coercion just means JS atomatically converts the number into a string
	// this happens with other data types 
	// when mixing diffrent data types JS tries to figure out which var it has to convert
	// then converts them all to the same data type 
	// does not alway happen 

	// can define variable w/o diving a value
	// ex

	 // var job, name, isHappy, age;

	// if you log in the console you will get a value of undifined 

	// after you decalar the var you dont need var to set the value 

	// ex

	 // job = 'developer';
	 // name = 'Nicole';
	 // isHappy = true;
	 // age = 43;



	 // console.log(name + ' works as a ' + job + ' and she is ' + isHappy);

	 // exapmle above is console all values as a string (type coercion)


	 // We can change the values of variables is is called Variable Mutation 

	 // age = 'thirty six';
	 // job = 'artist';

	 //  console.log(name + 'is' + age + ' years old ' + ' she works as a ' + job + '.' + ' Is she happy? ' + isHappy);

	  // the vars are now mutated into something else. 
	  // code is read in a sequence from top to botton and that is why we can change them this way



//Operators lecture

	// var now = 2017;
	// var birthYear = now - 28;

	// console.log(birthYear);

	// birthYear = now - 26 * 2;

	// console.log(birthYear);


	//operator precedence - what operators are exicuted first.
	// resource for operator precedence 
	// codingheroes.io/resources 
	// this link has a operator precedence table 

////////////////////////////////////
// if/else Statments Lecture 


	//If/else statment is one of the control structers of JS
	//Control Structers allow us to only execute only parts of our code or exicute parts multiple times 


	//can only have an if to work 

	// var name = 'Nicole';
	// var age = 28;
	// var isMarried = 'no';


	//ex of if/else statment 

// 	if(isMarried === 'yes'){
// 		console.log('how nice for ' + name);
// 	}else {

// 	}console.log('Thats ok too ' + name);


// isMarried = true;


	// if(isMarried){
	// 	alert('That is nice '+ name );
	// }else{
	// 	alert('That is nice too '+ name);
	// }

	// // == does type coertion 
	// // === does not 

 // 	if(23 == '23'){
 // 		console.log('pring something ...');
 // 	}


 // 	if(23 === '23'){
 // 		console.log('will this work');	
 // 	}

////////////////////////////////////////////////
// Boolean locic and switch statments


	// var age = 16;

	// if(age <= 19){
	// 	console.log('Nicole is a child');
	// }else{
	// 	console.log('Nicole is a women')
	// }



	// Boolean Logic 

		//AND(&&) = True is ALL are True
		//OR(||) = True if ONE is true 
		// Not(!) = inverts true and false value 

	//Switch Statments

		//great to use when you have a lot of cases 

		//ex

		// var job = 'doctor';

		// job = prompt('What does John do for a living?')

		// switch(job){
		// 	case 'teacher' :
		// 		console.log('John teachers kids');
		// 		break;
		// 	case 'programmer':
		// 		console.log('John plays with the computer');
		// 		break;
		// 	case ('doctor') :
		// 		console.log('John plays with peoples lives');
		// 		break;
		// 	default:
		// 		console.log('John is doing something else.');
		// }


		//break breaks you out of the switch statment

		// var hogwartsHouse = 'Hufflepuff';

		// hogwartsHouse = prompt('What is your Hogwarts House?');

		// switch(hogwartsHouse){
		// 	case 'Hufflepuff':
		// 		console.log('10 points to Hufflepuff!');
		// 		break;
		// 	case 'Gryffindor':
		// 		console.log('10 points to Gryffindor!');
		// 		break;
		// 	case 'Slytherin':
		// 		console.log('10 points to Slytherin!');
		// 		break;
		// 	case 'Ravenclaw':
		// 		console.log('10 points to Ravenclaw!');
		// 		break;
		// 	default:
		// 		console.log('I curse you!!!');
		// }

////////////////////////////////////
// Coding Challenge

	

// var ageJohn = 21;
// var heightJohn = 170;
// var john = (ageJohn + heightJohn);

// var ageMike = 24;
// var heightMike = 160;
// var mike = (ageMike + heightMike);

// var ageJill = 25;
// var heightJill = 150;
// var jill = (ageJill + heightJill);


// if (john > mike && john > jill) {
//     alert('john wins!');
// }else if(mike > john && mike > jill){
// 	alert('Mike wins!');
// }else if(jill > mike && jill > john){
// 	alert('Jill wins!');
// }else if(john = mike && jill > john && jill > mike){
// 	alert('John and Mike tie!');
// }else{
// 	alert('It is a tie!')
// }



//Function Lecture 


		//what are functions are code we want to use over and over
		//functions are like containers that hold code and we pass arguments into them and the function returns a result 
		//Functions are like machines, they recieve input, do stuff with it and then return something else 

		//DRY = dont repeat yourself



		//example 

		// function calculateAge(yearOfBirth){
		// 	var age = 2018 - yearOfBirth;
		// 	return age;
		// }


		 // var ageJohn = calculateAge(1920);
		//1920 is passing the info I want to pass
		// we called or executed the function with agument of 1920

		// var ageNicole = calculateAge(1989);
		// var ageMonica = calculateAge(1992);
		
		// alert(ageJohn);

		//now we can use function as many times as we like 
		//functions can call other functions
		//functions do not have to return anything 





		//example

		//paramenters are name and year	
		// function yearsUntilRetirment(name, year){
		// 	var age = calculateAge(year);
		// 	var retirment = 65 - age; 
		// 	if(retirment >= 0){
		// 	console.log(name + ' retires in '+retirment + (' years.'));
		// 	}else{
		// 		console.log(name + 'is already retired');
		// 	}
		// }


		// yearsUntilRetirment('John', 1990);
		// yearsUntilRetirment('Nicole', 1920);

		// function calculateAge(yearOfBirth){
		// 	var age = 2018 - yearOfBirth;
		// 	return age;
		// }


		// function legalDrinkingAge(name, yearOfBirth){
		// 	var age = calculateAge(yearOfBirth)
		// 	var legalAge = 21 
		// 	if (age < 21){
		// 		console.log(name + ' you are too young for this booze');
		// 	}else{
		// 		console.log(name + ' can I buy you a drink?')
		// 	}
		// }

		// legalDrinkingAge('Nicole', 1920);
		// legalDrinkingAge('Kelly', 20012);



/////////////////////////////////////////////////
//Statments and Expressions Lecture 

	
	// ex of a function statment

	// function someFun(parameter){
		//code
	//}

	//ex of a funtion Expression  

	//var someFun = function{
		//code
	//}

	//The diffrence between a Statment and a Expresstion 
	// is exprestion produces a varlue and outcome
	//A Stament just perfomes a action 


	//EX of Expresstion is 
	// 3 + 4;
	// var x = 3;

	//this prduces and output and outcome 


	//Statments performs a action but no imidiate value 

	 //if (x === 5){
	 	//do something
	 //}


////////////////////////////////////////////
// Lecture on Arrays 


	//var names = ['Nicole', 'Monica', 'Kathleen'];
	// this is an array with 3 strings 

	//var years = new Array(1990, 1969, 1948);
	//this is a second way to write an array 


	// How do we access the arrays

	//console.log(names);
	//console.log(years);
	//so access a specific item 
	//console.log(names[0]);
	//0 is always the first item 

	//to mutate an array 
	//names[1] = 'Kelly';
	//console.log(names);

	//we can mix ass many data types as you like

	//var mixedArrayEx = ['Nicole', 28, true, 'apple'];

	//console.log(mixedArrayEx);


	//there are functions specific to arrays
		//.push
		//.upshift
		//.pop
		//.shift
		//.indexOf

	//push - adds an element at the end of an array
		//mixedArrayEx.push('pink');
		//console.log(mixedArrayEx);

	//unshift- adds an element at the begining of an array
		//mixedArrayEx.unshift('Ms.');
		//console.log(mixedArrayEx); 

	//pop()- removes an element from the end
		//mixedArrayEx.pop();
		//console.log(mixedArrayEx);
		//removes pink
	//shift -removes the first element of an array
		//mixedArrayEx.shift(names);
		//console.log(mixedArrayEx);
		//removes Ms.

	//indexOf - returns the position of the element that we passed into it 
		//alert(mixedArrayEx.indexOf('Nicole'));
		//returns 0


	//indexOf is a great way to find out if or if not a element in a array 

		//ex.

	// if(mixedArrayEx.indexOf('apple') === -1){
	// 	console.log('Nicole does not like apples');
	// }else{
	// 	console.log('Nicole likes apples');
	// }

		//if element is not in array -1 is returned 
		


///////////////////////////////////////////////////////////
//Object and Properties Lecture 

		//objects have key value pairs 
		//this means each value has a name with is them the key
		//we use objects to group together variables that have no particular order
		//ojects- order does not matter
		//arrays- order matters 


		// var nicole = {
		// 	name: 'Nicole',
		// 	lastName: 'Casares',
		// 	yearOfBirth: 1990,
		// 	isMarried: false,
		// 	cats: ['Cloud','Cocoa','Rain','Zues'],
		// 	job: 'artist',
		// };

		// console.log(nicole);
		 


		// to read a value out of an object 2 ways
		// 1. use dot notation 
		// 2. use [] and pass as a string


		// console.log(nicole.isMarried);

		// console.log(nicole['lastName']);


		// to change something in the object

		// nicole.lastName = 'Gonzalez';
		// nicole['job'] = 'programmer';

		// console.log(nicole);

		// var xyz = 'job';
		// console.log(nicole[xyz]);
		//this will log programmer in the console 
		//this works bc xyv var/container we stored job
		//this was repaced
		//this is data mutation


////////////////////////////////////////////////////////////////////
//Objects and Methods Lecture


	//obects can hold other objects, arrays and functions

	// var albert = new Object();

	// albert.name = 'Albert';
	// albert.lastName = 'Gonzalez';
	// albert['isMarried'] = false;

	// console.log(albert);

	//v1.0

	// var nicole = {
	// 	name: 'Nicole',
	// 	lastName: 'Casares',
	// 	yearOfBirth: 1990,
	// 	isMarried: false,
	// 	job: 'artist',
	// 	family: ['Albert', 'Rain', 'Zues', 'Cocoa', 'Cloud'],
	// 	calculateAge: function () {
	// 		return 2016 - this.yearOfBirth; 
	// 	}
	// };

		//this object is holding a object expression 


	//This Notes
		//this.yearOfBirth
		//referse to nicole //this object nicole

	// var age = nicole.calculateAge();
	// nicole.age = age;

	//	console.log(nicole);

	//here I am adding a function to a key/var age and then adding that key into the object nicole
	//why did we not add the age into the object automatically, we can ...

	//v2.0
	var nicole = {
		name: 'Nicole',
		lastName: 'Casares',
		yearOfBirth: 1990,
		isMarried: false,
		job: 'artist',
		family: ['Albert', 'Rain', 'Zues', 'Cocoa', 'Cloud'],
		calculateAge: function () {
			this.age = 2018 - this.yearOfBirth; 
		}
	};

	nicole.calculateAge();
	console.log(nicole);
	//execute function then console log the object


	//This notes
	//instead of this we could have used nicole but then it would not be as flexible 
	







//////////////////////////////////////////////////////
// These are notes for loops

// // console.log(nicole.calculateAge(1990));

// console.log(nicole.calculateAge());

// for (var i = 0; i < 10; i++){
// 	console.log(i);
// };


// var fruit = ['apples', 'grapes', 'oranges', 'peaches', 'cucumber'];


// for (var i = 0; i < fruit.length ; i++){
// 	console.log(fruit[i]);
// };

// // to console log from the opposit direction

// for (var i = fruit.length - 1; i >= 0; i--){
// 	console.log(fruit[i]);
// };



// These are notes while loops


// var fruit = ['apples', 'grapes', 'oranges', 'peaches', 'cucumber'];


// var i = 0; 

// while (i < fruit.length){
// 	console.log(fruit[i]);
// 	i++;
// }


// break is to finish loop 
// continue is quit current iteration of loop and continue with the next one


// break example

// for (var i = 1; i <= 5; i++ ){
// 	console.log(i);

// 	if (i === 3){
// 		break;
// 	}
// }

// continue example in this exapmle 3 will be skips and the loop will continoue

// for (var i = 1; i <= 5; i++ ){

// 	if (i === 3){
// 		continue;
// 	}
// 	console.log(i);

// }



// This is coding challege number 2



// 1. create an arrary with some years where persons where born

// var yearBorn = [1989, 1990, 1991, 1992];

// console.log(yearBorn);

// create an empty array

// var ages =  [];

// use a loop to fill the empty array with the ages of the persons

// for (var i = 0; i < yearBorn.length; i++) {
// 	ages[i] = 2017 - yearBorn[i];
// }

// for (i = 0; i< ages.length; i++){
// 	if (ages[i] >= 18) {
// 		console.log('person ' + (i + 1) + ' is ' + ages[i] + 'years old, and full age.')
// 	} else {
// 		console.log('person ' + (i + 1) + ages[i] + ' is ' + 'not of full age.')
// 	}
// }


// var monica = {
// 	name: 'Monica',
// 	lastName: 'Casares',
// 	yearOfBirth: 1920,
// 	partner: 'Dustin',
// 	favoritFood: ['apples', 'grapes', 'potatos', 'butter'],
// 	age: function() {
// 		return 2017 - this.yearOfBirth;

// 	},
// 	retired: function(){
// 		if (this.age() < 65) {
// 			console.log('not retired');
// 		} else{
// 			console.log('retired')
		 
// 	} 
// 		}

// };

// monica.lastName = 'LULU'

// monica.favoritFood.push('cake'); 

// console.log(monica.age());
// console.log(monica.retired());
// console.log(monica);


// this about pushing javascript calender
































































