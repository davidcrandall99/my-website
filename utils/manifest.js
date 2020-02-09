const fs = require("fs");
var path = require('path');
var appDir = path.dirname(require.main.filename);
console.log(__dirname);

let writeManifest = () => {
	let getPosts = () => {
		return new Promise((resolve, reject) => {
			fs.readdir(__dirname + '/../posts/', (err, data) => {
				if (err) {
					return reject(err);
				}
				return resolve(data);
			});
		});
	}

	getPosts().then(data => {

		// creates output like
		// { '0': 'post.md', '1': 'post2.md' }

		let output = {};
		for (var i = 0; i in data; i++) {
			output[i] = data[i]
		}
		return output;

	}).then(data => {
		/* 
		creates an object like:
		 { '0': { url: 'post' }, '1': { url: 'post2' } }
		*/
		let output = `export const manifest = {`;
		for (var i = 0; i in data; i++) {
			let filename = data[i];

			//sets url to name of markdown file
			let url = filename.split('.')[0];

			//make sure the last object does not have trailing comma
			let comma = '';
			if (i < Object.keys(data).length - 1) {
				comma = ','
			}

			output += `
			"${i}" : {
				'url': '${url}'
			}${comma}`;
		}
		output += '\n};'

		fs.writeFile(__dirname + '/../assets/manifest.js', output, err => {
			if (err) {
				throw err;
			}
		});
		return output;


	}).catch(e => {
		console.log(e);
		return;
	});
}
writeManifest();

module.exports = writeManifest;