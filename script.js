// const fetchData = async () => {
// 	const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
// 	const options = {
// 		method: 'GET',
// 		headers: {
// 			'X-RapidAPI-Key': 'ed955a9d91msh5d13276616ce919p10efe9jsn933dd059153a',
// 			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 		}
// 	};

// 	try {
// 		const response = await fetch(url, options);
// 		const result = await response.text();
// 		console.log(result);
// 	} catch (error) {
// 		console.error(error);
// 	}
// };	
// fetchData();



const options = {
	method: 'GET',
	headers: {
	  'X-RapidAPI-Key': '437b10135bmshb0478c5e7099811p13057ajsnb0b12c29d544',
	  'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
  };
  
  const getWeather = (city) => {
	cityName.innerHTML = city;
  
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city,options)
	  .then(response => response.json())
	  .then((response) => {
		console.log(response);
		cloud_pct.innerHTML = response.cloud_pct;
		feels_like.innerHTML = response.feels_like;
		humidity.innerHTML = response.humidity;
		humidity2.innerHTML = response.humidity;
		max_temp.innerHTML = response.max_temp;
		min_temp.innerHTML = response.min_temp;
		sunrise.innerHTML = response.sunrise;
		sunset.innerHTML = response.sunset;
		temp.innerHTML = response.temp;
		temp2.innerHTML = response.temp;
		wind_degrees.innerHTML = response.wind_degrees;
		wind_speed.innerHTML = response.wind_speed;
		wind_speed2.innerHTML = response.wind_speed;
	  })
	  .catch(err => console.error(err));
  };


  
  const mumbaiweather = (city) => {
	const mumbaicloudpctElement = document.getElementById('mumbaicloudpct');
	const mumbaitempElement = document.getElementById('mumbaitemp');
	const mumbaihumidityElement = document.getElementById('mumbaihumidity');
	const mumbaimintempElement = document.getElementById('mumbaimintemp');
	const mumbaimaxtempElement = document.getElementById('mumbaimaxtemp');
	const mumbaifeelslikeElement = document.getElementById('mumbaifeelslike');
	const mumbaiwindspeedElement = document.getElementById('mumbaiwindspeed');
	const mumbaiwinddegreesElement = document.getElementById('mumbaiwinddegrees');
	const mumbaisunriseElement = document.getElementById('mumbaisunrise');
	const mumbaisunsetElement = document.getElementById('mumbaisunset');
	// Update other elements in a similar manner
  
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai' /*+ city*/, options) // Use the same API call as above but with Seattle instead of
	  .then(response => response.json())
	  .then((response) => {
		console.log(response);
		mumbaicloudpctElement.innerHTML = response.cloud_pct;
		mumbaitempElement.innerHTML = response.temp;
		mumbaihumidityElement.innerHTML = response.humidity;
		mumbaimintempElement.innerHTML = response.min_temp;
		mumbaimaxtempElement.innerHTML = response.max_temp;
		mumbaifeelslikeElement.innerHTML = response.feels_like;
		mumbaiwindspeedElement.innerHTML = response.wind_speed;
		mumbaiwinddegreesElement.innerHTML = response.wind_degrees;
		mumbaisunriseElement.innerHTML = response.sunrise;
		mumbaisunsetElement.innerHTML = response.sunset;
		// Update other elements similarly for other cities
	  })
	  .catch(err => console.error(err));
  };






  const delhiweather = (city) => {
	const delhicloudpctElement = document.getElementById('delhicloudpct');
	const delhitempElement = document.getElementById('delhitemp');
	const delhifeelslikeElement = document.getElementById('delhifeelslike');
	const delhihumidityElement = document.getElementById('delhihumidity');
	const delhimintempElement = document.getElementById('delhimintemp');
	const delhimaxtempElement = document.getElementById('delhimaxtemp');
	const delhiwindspeedElement = document.getElementById('delhiwindspeed');
	const delhiwinddegreesElement = document.getElementById('delhiwinddegrees');
	const delhisunriseElement = document.getElementById('delhisunrise');
	const delhisunsetElement = document.getElementById('delhisunset');
	// Update other elements in a similar manner
  
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi' /*+ city*/, options) // Use the same API call as above but with Seattle instead of
	  .then(response => response.json())
	  .then((response) => {
		console.log(response);
		delhicloudpctElement.innerHTML = response.cloud_pct;
		delhitempElement.innerHTML = response.temp;
		delhifeelslikeElement.innerHTML = response.feels_like;
		delhihumidityElement.innerHTML = response.humidity;
		delhimintempElement.innerHTML = response.min_temp;
		delhimaxtempElement.innerHTML = response.max_temp;
		delhiwindspeedElement.innerHTML = response.wind_speed;
		delhiwinddegreesElement.innerHTML = response.wind_degrees;
		delhisunriseElement.innerHTML = response.sunrise;
		delhisunsetElement.innerHTML = response.sunset;
		// Update other elements similarly for other cities
	  })
	  .catch(err => console.error(err));
  };
  






  const hyderabadweather = (city) => {
	const hyderabadpctElement = document.getElementById('hyderabadpct');
	const hyderabadtempElement = document.getElementById('hyderabadtemp');
	const hyderabadfeelslikeElement = document.getElementById('hyderabadfeelslike');
	const hyderabadhumidityElement = document.getElementById('hyderabadhumidity');
	const hyderabadmintempElement = document.getElementById('hyderabadmintemp');
	const hyderabadmaxtempElement = document.getElementById('hyderabadmaxtemp');
	const hyderabadwindspeedElement = document.getElementById('hyderabadwindspeed');
	const hyderabadwinddegreesElement = document.getElementById('hyderabadwinddegrees');
	const hyderabadsunriseElement = document.getElementById('hyderabadsunrise');
	const hyderabadsunsetElement = document.getElementById('hyderabadsunset');
	// Update other elements in a similar manner
  
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad' /*+ city*/, options) // Use the same API call as above but with Seattle instead of
	  .then(response => response.json())
	  .then((response) => {
		console.log(response);
		hyderabadpctElement.innerHTML = response.cloud_pct;
		hyderabadtempElement.innerHTML = response.temp;
		hyderabadfeelslikeElement.innerHTML = response.feels_like;
		hyderabadhumidityElement.innerHTML = response.humidity;
		hyderabadmintempElement.innerHTML = response.min_temp;
		hyderabadmaxtempElement.innerHTML = response.max_temp;
		hyderabadwindspeedElement.innerHTML = response.wind_speed;
		hyderabadwinddegreesElement.innerHTML = response.wind_degrees;
		hyderabadsunriseElement.innerHTML = response.sunrise;
		hyderabadsunsetElement.innerHTML = response.sunset;
		// Update other elements similarly for other cities
	  })
	  .catch(err => console.error(err));
  };







  const chennaiweather = (city) => {
	const chennaipctElement = document.getElementById('chennaipct');
	const chennaitempElement = document.getElementById('chennaitemp');
	const chennaifeelslikeElement = document.getElementById('chennaifeelslike');
	const chennaihumidityElement = document.getElementById('chennaihumidity');
	const chennaimintempElement = document.getElementById('chennaimintemp');
	const chennaimaxtempElement = document.getElementById('chennaimaxtemp');
	const chennaiwindspeedElement = document.getElementById('chennaiwindspeed');
	const chennaiwinddegreesElement = document.getElementById('chennaiwinddegrees');
	const chennaisunriseElement = document.getElementById('chennaisunrise');
	const chennaisunsetElement = document.getElementById('chennaisunset');
	// Update other elements in a similar manner
  
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai' /*+ city*/, options) // Use the same API call as above but with Seattle instead of
	  .then(response => response.json())
	  .then((response) => {
		console.log(response);
		chennaipctElement.innerHTML = response.cloud_pct;
		chennaitempElement.innerHTML = response.temp;
		chennaifeelslikeElement.innerHTML = response.feels_like;
		chennaihumidityElement.innerHTML = response.humidity;
		chennaimintempElement.innerHTML = response.min_temp;
		chennaimaxtempElement.innerHTML = response.max_temp;
		chennaiwindspeedElement.innerHTML = response.wind_speed;
		chennaiwinddegreesElement.innerHTML = response.wind_degrees;
		chennaisunriseElement.innerHTML = response.sunrise;
		chennaisunsetElement.innerHTML = response.sunset;
		// Update other elements similarly for other cities
	  })
	  .catch(err => console.error(err));
  };







  const puneweather = (city) => {
	const punepctElement = document.getElementById('punepct');
	const punetempElement = document.getElementById('punetemp');
	const punefeelslikeElement = document.getElementById('punefeelslike');
	const punehumidityElement = document.getElementById('punehumidity');
	const punemintempElement = document.getElementById('punemintemp');
	const punemaxtempElement = document.getElementById('punemaxtemp');
	const punewindspeedElement = document.getElementById('punewindspeed');
	const punewinddegreesElement = document.getElementById('punewinddegrees');
	const punesunriseElement = document.getElementById('punesunrise');
	const punesunsetElement = document.getElementById('punesunset');
	// Update other elements in a similar manner
  
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune' /*+ city*/, options) // Use the same API call as above but with Seattle instead of
	  .then(response => response.json())
	  .then((response) => {
		console.log(response);
		punepctElement.innerHTML = response.cloud_pct;
		punetempElement.innerHTML = response.temp;
		punefeelslikeElement.innerHTML = response.feels_like;
		punehumidityElement.innerHTML = response.humidity;
		punemintempElement.innerHTML = response.min_temp;
		punemaxtempElement.innerHTML = response.max_temp;
		punewindspeedElement.innerHTML = response.wind_speed;
		punewinddegreesElement.innerHTML = response.wind_degrees;
		punesunriseElement.innerHTML = response.sunrise;
		punesunsetElement.innerHTML = response.sunset;
		// Update other elements similarly for other cities
	  })
	  .catch(err => console.error(err));
  };







  const noidaweather = (city) => {
	const noidapctElement = document.getElementById('noidapct');
	const noidatempElement = document.getElementById('noidatemp');
	const noidafeelslikeElement = document.getElementById('noidafeelslike');
	const noidahumidityElement = document.getElementById('noidahumidity');
	const noidamintempElement = document.getElementById('noidamintemp');
	const noidamaxtempElement = document.getElementById('noidamaxtemp');
	const noidawindspeedElement = document.getElementById('noidawindspeed');
	const noidawinddegreesElement = document.getElementById('noidawinddegrees');
	const noidasunriseElement = document.getElementById('noidasunrise');
	const noidasunsetElement = document.getElementById('noidasunset');
	// Update other elements in a similar manner

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Noida' /*+ city*/, options) // Use the same API call as above but with Seattle instead of
	  .then(response => response.json())
	  .then((response) => {
		console.log(response);
		noidapctElement.innerHTML = response.cloud_pct;
		noidatempElement.innerHTML = response.temp;
		noidafeelslikeElement.innerHTML = response.feels_like;
		noidahumidityElement.innerHTML = response.humidity;
		noidamintempElement.innerHTML = response.min_temp;
		noidamaxtempElement.innerHTML = response.max_temp;
		noidawindspeedElement.innerHTML = response.wind_speed;
		noidawinddegreesElement.innerHTML = response.wind_degrees;
		noidasunriseElement.innerHTML = response.sunrise;
		noidasunsetElement.innerHTML = response.sunset;
		// Update other elements similarly for other cities
	  })
	  .catch(err => console.error(err));
  };


  



  const submitButton = document.getElementById('sumit');
  submitButton.addEventListener('click', (e) => {
	e.preventDefault();
	const cityInput = document.getElementById('city');
	const cityNameElement = document.getElementById('cityName');
  
	cityNameElement.innerHTML = cityInput.value; // Update the current city name
  
	// Update weather for the input city
	getWeather(cityInput.value);
  
	// Update weather for other cities
	mumbaiweather('Mumbai'); // You can replace 'Mumbai' with other cities
	delhiweather('Delhi'); // You can replace 'Mumbai' with other cities
	hyderabadweather('Hyderabad'); // You can replace 'Mumbai' with other cities
	chennaiweather('Chennai'); // You can replace 'Mumbai' with other cities
	puneweather('Pune'); // You can replace 'Mumbai' with other cities
	noidaweather('Noida'); // You can replace 'Mumbai' with other cities
	
	
	// Add more cities as needed
  });
  
  // Initial weather update for default city (Kolkata)
  getWeather('Kolkata');
  // Initial weather update for other cities
  mumbaiweather('Mumbai');
  delhiweather('Delhi');
  hyderabadweather('Hyderabad');
  chennaiweather('Chennai');
  puneweather('Pune');
  noidaweather('Noida');
  // Add more cities as needed
  
	










  