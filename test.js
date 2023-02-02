//1부터 50의 자연수 중 짝수를 구하는 함수

const evenArr = [];
const test = (num) => {
  for (i = 1; i <= 50; i++) {
    console.log(num);
    num += 1;
    if (num % 2 === 0) {
      evenArr.push(num);
    }
  }
  return evenArr;
};

console.log(test(num));
