function unroll(squareArray) {
  const arr = [];

  while (squareArray.length) {
    arr.push(
      ...squareArray.shift(),
      ...squareArray.map((i) => i.pop()),
      ...(squareArray.pop() || []).reverse(),
      ...squareArray.map((i) => i.shift()).reverse()
    );
  }
  return arr;
}

module.exports = unroll;
