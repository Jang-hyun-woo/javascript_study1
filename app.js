let age = 32;
let userName = "HyunWoo";
let hobbies = ["Sports", "Cooking", "reading", 1];
let job = {
  title: "Developer",
  place: "New York",
  salary: 50000,
};

let totalAdultYears;

function calculateAdultYear(userAge) {
  let result;
  result = userAge - 18;
  return result;
}

totalAdultYears = calculateAdultYear(32);
alert(totalAdultYears);

age = 45;
totalAdultYears = calculateAdultYear(age);
console.log(totalAdultYears);

console.log(totalAdultYears);

let person = {
  //속성
  name: "hyunwoo",
  //메소드
  greet() {
    console.log("Hello!");
  },
};

person.greet();
