var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var newArray = kittens.concat(name)
  return newArray;
}

function prependKitten(name) {
  var newArray = [name];
  return newArray.concat(kittens)
}

/*function removeLastKitten() {
  var newArray = kittens.slice(-1);
  return newArray;
}
*/
function removeLastKitten() {
  var newArray =  kittens.slice(0,1)
  return newArray;
}
