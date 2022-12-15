const hoursMS = 1000 * 60 * 60;
const minsMS = 1000 * 60;

export function displayTime(time) {
  const hours = Math.floor(time / hoursMS);
  const minutes = Math.floor((time % hoursMS) / minsMS);
  const seconds = Math.floor((time % minsMS) / 1000);
  return `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
}