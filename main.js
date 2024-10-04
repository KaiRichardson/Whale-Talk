const input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];
const resultArray = [];
let resultString = "";

for (let i = 0; i < input.length; i++) {
	console.log(i, input[i]);

	for (let j = 0; j < vowels.length; j++) {
		if (input[i] === vowels[j]) {
			console.log("match");
			if (input[i] === "e" || input[i] === "u") {
				resultArray.push(vowels[j]);
			}
			resultArray.push(vowels[j]);
		}
	}
}

console.log("resultArray:", resultArray);
resultString = resultArray.join("").toUpperCase();
console.log("resultString:", resultString);
