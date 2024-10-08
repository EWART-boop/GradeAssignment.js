const prompt = require("prompt-sync")({signint:true});
let grade = prompt("Enter your grade: ");
if (grade >= 90 && grade <= 100){
    console.log("Excellent");
}else if (grade >= 80){
    console.log("Good");
}else if (grade >= 70 && grade <= 79){
    console.log("Fair");
}else{
    console.log("Needs improvements")
}
