import fetch from 'node-fetch';

// const response = await fetch('http://localhost:3000');
const response = await fetch('http://172.105.36.162/dockerized/');

try {
	for await (const chunk of response.body) {
		console.dir(chunk.toString());
		// console.log(JSON.stringify(chunk.toJSON()));
	}
} catch (err) {
	console.error(err.stack);
}