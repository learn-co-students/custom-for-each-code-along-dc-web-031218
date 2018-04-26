function forEach(iterable, callback) {
  for (let i = 0, l = Object.values(iterable).length; i < l; i++) {
      const element = Object.values(iterable)[i];
      callback(element, i, iterable);
    }
}
