
    function sleep(duration) {
      return new Promise(function(resolve, reject) {
          setTimeout(resolve,duration);
      })
  }

async function foo(name) {
  console.log("a");
  await sleep(2000)
  console.log("b");
  console.log(name);
}
async function foo1() {
  await foo("c")
  await foo('d')
}
foo1()