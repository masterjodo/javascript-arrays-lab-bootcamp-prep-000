var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
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

function removeLastKitten() {
  var newArray = kittens.slice(-1);
  return newArray;
}

function removeFirstKitten(array) {
  array.slice(0,1)
}
