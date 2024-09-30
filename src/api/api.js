
const apiKey = '1defafe9f67ed7217cf8038a900103ef';
const getWeather = async (city) => {
  return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
  .then((res) => res.json())
  .then((json) => {
      return json;
  })
}

export default getWeather;