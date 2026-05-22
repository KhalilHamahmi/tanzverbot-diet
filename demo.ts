import { Sex, calcDateOnDiet } from "./tanzverbot_diet.ts";

const fromWeight = 78.0;
const toWeight = 90.0;
const height = 1.88;
const age = 38;
const sex = Sex.Male;
const days = calcDateOnDiet(fromWeight, toWeight, height, age, sex);
//console.log(`You need to diet for ${days} days to reach your target.`);
const avarageWeightGainPerDay = (toWeight - fromWeight) / days;
console.log(
  `You need to diet for ${days} days to reach your target, with an avarage weight gain of ${avarageWeightGainPerDay.toFixed(
    2,
  )} kg per day.`,
); 
