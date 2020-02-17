const fs = require("fs");
const matter = require('gray-matter');
const path = require('path');
const appDir = path.dirname(require.main.filename);


console.log(__dirname);

let writeManifest = () => {

	//get the posts from the posts directory
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

	//read the contents of a markdown file
	let getcontent = (filename) => {
		return new Promise((resolve, reject) => {
			fs.readFile(__dirname + '/../posts/' + filename, 'utf8', (err, data) => {
				return resolve(data);
			});
		});
	};


	getPosts()
		.then(async data => {
			let newData = {};
			for (var i = 0; i in data; i++) {

				let content = await getcontent(data[i])
				newData[i] = {
					uri: '/blog/' + data[i].split('.')[0],
					meta: matter(content)
				}
				delete newData[i].meta.content;
				// newData[i] = textData;
			}
			console.log(JSON.stringify(newData));
			fs.writeFile(__dirname + '/../assets/manifest.js', `export const manifest = ${JSON.stringify(newData)}`, err => {
				if (err) {
					throw err;
				}
			});
			return newData;
		})
		.catch(e => {
			console.log(e);
			return;
		});
}
writeManifest();

module.exports = writeManifest;