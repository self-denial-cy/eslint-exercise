const str = 'test ESLint rule';

console.log(str);
console.log(new Set());

function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// 需要 @babel/eslint-parser 来解析
async function asyncPrint(value, ms) {
  await timeout(ms);
  console.log(value);
  return value;
}

asyncPrint('hello world', 50).then((r) => r);
