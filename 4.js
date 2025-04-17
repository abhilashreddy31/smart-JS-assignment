var globalVar = "I'm global";

function scopeTest() {
  var functionVar = "I'm local";
  if (true) {
    let blockVar = "I'm block-scope";
    console.log(blockVar);
  }
  console.log(globalVar);
  console.log(functionVar);
}

scopeTest();
