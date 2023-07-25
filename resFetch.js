import fetch from 'node-fetch';

const response = await fetch('http://localhost:3000');

try {
	for await (const chunk of response.body) {
		console.dir(chunk.toString());
		// console.log(JSON.stringify(chunk.toJSON()));
	}
} catch (err) {
	console.error(err.stack);
}