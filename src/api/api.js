
const apiKey = 'you need to put your key here';
const getWeather = async (city) => {
  return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
  .then((res) => res.json())
  .then((json) => {
      return json;
  })
}

export default getWeather;
