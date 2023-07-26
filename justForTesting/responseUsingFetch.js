import fetch from 'node-fetch';

async function main(params) {
	// const response = await fetch('http://localhost:3000');
	const response = await fetch('http://172.105.36.162/dockerized/');

	try {
		for await (const chunk of response.body) {
			try {
				console.dir(JSON.parse(chunk.toString()));
				if (JSON.parse(chunk.toString()).count == 5) {
					main();
				}
			} catch (e) {
				console.dir(chunk.toString());
			}

			// console.log(JSON.stringify(chunk.toJSON()));
		}
	} catch (err) {
		console.error(err.stack);
	}
}

main();