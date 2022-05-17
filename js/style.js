var formEl = document.querySelector(".form");
var formInputEl = document.querySelector(".form-control");
var getWalkEl = document.querySelector(".walk_result");
var getBikeEl = document.querySelector(".bike_result");
var getCarEl = document.querySelector(".car_result");
var getPlaneEl = document.querySelector(".plane_result");
var walkSpeedEl = 3.6;
var bikeSpeedEl = 20.1;
var carSpeedEl = 70;
var planeSpeedEl = 800;

formEl.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Hallu");
  console.log(formInputEl.value);
  getWalkEl.textContent = normalizeTime(
    calculateTime(formInputEl.value, walkSpeedEl)
  );
  getBikeEl.textContent = normalizeTime(
    calculateTime(formInputEl.value, bikeSpeedEl)
  );
  getCarEl.textContent = normalizeTime(
    calculateTime(formInputEl.value, carSpeedEl)
  );
  getPlaneEl.textContent = normalizeTime(
    calculateTime(formInputEl.value, planeSpeedEl)
  );
  if (formInputEl.value - 0 < 0) {
    alert("Masofani musbat sonda kiriting");
    return;
  }
});

// console.log(calculateTime(10, 5));
function calculateTime(distance, speed) {
  if (!distance < 0) {
    console.error("Masofa mavjud emas: distance > 0");
    return;
  }
  if (!speed || speed < 0) {
    console.error("Tezlik mavjud emas: speed > 0");
    return;
  }
  return distance / speed;
}
function normalizeTime(time) {
  time = Number(time);
  if (isNaN(time)) {
    console.error("Vaqt sonlarda ifodalanishi kerak");
    return;
  }
  const hour = Math.floor(time);
  time -= hour;
  const timeInMinute = time * 60;
  const minute = Math.floor(timeInMinute);
  const second = Math.round((timeInMinute - minute) * 60);

  return `${hour} soat ${minute} minut ${second} sekunt`;
}

console.log(normalizeTime("4.24"));
// console.log(normalizeTime("2.4a"));
