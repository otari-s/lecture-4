let string = `hello world`;

function upperCase(str) {
  let result = str
    .trim()
    .split(` `)
    .filter((e) => e !== ``)
    .map((e) => e[0].toUpperCase() + e.slice(1))
    .join(` `);

  return result;
}
console.log(upperCase(string));

// ******************************************************

let str = `hello world `;

function changeValueOfString(string, valueToReplace, valueToReplaceWith) {
  const arr = string.split(` `).map((e) => {
    if (e.includes(valueToReplace)) {
      e = valueToReplaceWith;
    }

    return e;
  });
  return arr.join(` `);
}
console.log(changeValueOfString(str, `world`, `world!`));

// *********************************************************

const users = [
  { name: `Lahsa`, age: 30 },
  { name: `Saba`, age: 20 },
];

function sortUserWithAge(users) {
  return users.sort((a, b) => a.age - b.age);
}
console.log(sortUserWithAge(users));
