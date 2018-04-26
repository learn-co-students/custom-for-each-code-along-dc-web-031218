function forEach(iterable, callback) {
  if (Array.isArray(iterable)) {
    for (const i in iterable) {
      callback(iterable[i]);
    }
  } else {
    for (const key in iterable) {
      callback(iterable[key]);
    }
  }
}
