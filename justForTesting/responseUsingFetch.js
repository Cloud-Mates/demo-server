import fetch from 'node-fetch';
import fs from "fs";

async function main(params) {
	// const response = await fetch('http://localhost:3000');
	const response = await fetch('http://172.105.36.162/dockerized/');

	try {
		for await (const chunk of response.body) {
			try {
				const data = JSON.parse(chunk.toString());
				console.dir(data);
				fs.appendFileSync("justForTesting/data.txt", `data: ${data.data}  ||  time: ${data.time} \n`);
				if (data.count == 5) {
					main();
				}
			} catch (e) {
				console.dir(chunk.toString());
			}
		}
	} catch (err) {
		console.error(err.stack);
	}
}

main();