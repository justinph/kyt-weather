
export default function extremes(forecastObj) {
  let min = 200;
  let max = -400;

  forecastObj.forEach((f) => {
    if (f.Temperature.Maximum.Value > max) {
      max = f.Temperature.Maximum.Value;
    }
    if (f.Temperature.Minimum.Value < min) {
      min = f.Temperature.Minimum.Value;
    }
  });
  return { min, max };
}
