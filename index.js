'use strict';

import bgInit from './src/bg.js';
import clockInit from './src/clock.js';
import greetingInit from './src/greeting.js';
import todoInit from './src/todo.js';
import weatherInit from './src/weather.js';

function mainInit() {
	bgInit();
	clockInit();
	greetingInit();
	todoInit();
	weatherInit();
}

mainInit();
