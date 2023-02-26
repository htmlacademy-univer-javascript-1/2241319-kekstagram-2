function getRandom (min, max) {
  return Math.random()*(max-min)+min;
}

function getCommSize (comm, maxSize) {
  if (comm <= maxSize) {
    return true;
  }
  return false;
}

