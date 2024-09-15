//1
const successPromise = new Promise((resolve, reject) => {
  resolve("Success!");
});
successPromise.then((resolve) => {
  console.log(resolve);
});

//2
function fullName(firstName, lastName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fullName = `${firstName} ${lastName}`;
      resolve(fullName);
    }, 1000);
  });
}
fullName("Chaim", "Erenfeld").then((resolve) => {
  console.log(resolve);
});

//3
function multiplyByTwo(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 500);
  });
}
function addFive(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num + 5);
    }, 500);
  });
}
function subtractTen(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num - 10);
    }, 500);
  });
}
multiplyByTwo(10)
  .then((resolve) => {
    return addFive(resolve);
  })
  .then((resolve) => {
    return subtractTen(resolve);
  })
  .then((result) => {
    console.log(result);
  });

//4
const divide = (n1, n2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = n1 / n2;
      if (n2 != 0) resolve(result);
      else reject("לא ניתן לחלק באפס");
    }, 500);
  });
};
divide(10, 10)
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((reject) => {
    console.log(reject);
  });

//5
//.2
async function awaitFullName() {
  console.log(await fullName("d", "g"));
}
awaitFullName();
//.3
async function calculations(num) {
  const result = await multiplyByTwo(num).then(addFive).then(subtractTen);
  console.log(result);
}
