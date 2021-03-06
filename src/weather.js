'use strict';
const weather = document.querySelector('.js-weather');
const weatherIcon = document.querySelector('.js-weather-icon');
const API_KEY = 'ae2a87cc9eabbefa22e82e38fb9a37fc';
const COORDS = 'coords';

function getWeather(lat, lon) {
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
	) // 백틱 조심
		.then((response) => {
			return response.json();
		})
		.then((json) => {
			const weatherObj = json.weather['0'];
			const iconId = weatherObj.icon;
			const iconUrl = `https://openweathermap.org/img/wn/${iconId}@2x.png`;
			const temperature = json.main.temp;
			const place = json.name;
			weatherIcon.style.backgroundImage = `url(${iconUrl})`;
			weather.innerText = `${place} \n ${temperature} ℃`;
		});
}

function saveCoords(coordsObj) {
	localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	const coordsObj = {
		latitude: latitude,
		longitude: longitude,
	};
	saveCoords(coordsObj);
	getWeather(latitude, longitude);
}

function handleGeoError() {
	console.log("Can't access geo location!");
}

function askForCoords() {
	navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
	const loadedCoords = localStorage.getItem(COORDS);
	if (loadedCoords === null) {
		askForCoords();
	} else {
		const parseCoords = JSON.parse(loadedCoords);
		getWeather(parseCoords.latitude, parseCoords.longitude);
	}
}

function weatherInit() {
	loadCoords();
}

export default weatherInit;
