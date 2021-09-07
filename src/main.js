'use strict';

import bgInit from './bg.js';
import clockInit from './clock.js';
import greetingInit from './greeting.js';
import todoInit from './todo.js';
import weatherInit from './weather.js';

export default function main() {
	bgInit();
	clockInit();
	greetingInit();
	todoInit();
	weatherInit();
}

main();
