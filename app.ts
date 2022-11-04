type CombinableType = number | string;
type ConversionType = "as-number" | "as-text";

function combine(
  n1: CombinableType,
  n2: CombinableType,
  resultConversion: ConversionType
) {
  let result;
  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
}

const combineAges = combine(20, 30, "as-number");
const combineNames = combine("Arpit", "Bhardwaj", "as-text");

console.log(combineAges);
console.log(combineNames);
