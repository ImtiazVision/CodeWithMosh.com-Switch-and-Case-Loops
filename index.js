let role = "moderator";

switch (role) {
	case 'guest':
		console.log('Guest User');
		break;
	case 'moderator':
		console.log('Moderator User');
		break;
	default:
		console.log("Unknown User");

}

if (role === 'guest') console.log('Guest User');
else if (role === 'moderator') console.log("Moderator User");
else console.log("Unknown User");


/* For Loops */

// let i = 0 is the initialization | i < 5 is the condition | i++ is incrementation by 1
for (let i = 0; i <= 5; i++) {
	console.log("Hello World", i);
	if (i % 2 == 0) console.log(i); // output all even numbers
	if (i % 2 !== 0) console.log(i); // output all odd numbers
}

for (let i = 6; i >= 1; i--) {       // i-- is decrementation by 1
	if (i % 2 == 0) console.log(i);
}

/* While Loops */

let i = 0;  // we initialize i variable externally and outside of the loop function. i has a global scope which means it is accessible globally/outside of for loop and inside of for loop as well//

while (i <= 5) {  // this is the condition//
	if (i % 2 !== 0) console.log(i);
	i++; // this is the incrementation by 1
}

/* Do-While Loops */

let i = 0;

do {
	if (i % 2 !== 0) console.log(i);
	i++;
} while (i <= 5);


