// Simulated API for Little Lemon booking system
window.fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random < 0.5) {
      result.push(i + ":00");
    }
    if (random < 0.5) {
      result.push(i + ":30");
    }
    random = seededRandom(random);
  }
  return result;
};

window.submitAPI = function (formData) {
  return true;
};

function seededRandom(seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return (s = (s * a) % m) / m;
}
