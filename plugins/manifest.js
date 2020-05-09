const fs = require("fs");
const matter = require("gray-matter");
const path = require("path");
const appDir = path.dirname(require.main.filename);
const shell = require("shelljs");
const postPath = "posts";

console.log(__dirname);

let writeManifest = () => {
  //get the posts from github
  let gitPosts = async () => {
    try {
      await shell.mkdir(__dirname + "/../");
      await shell.cd(__dirname + "/../");
      await shell.exec(`git clone https://davidcrandall99:${process.env.PASS}@github.com/davidcrandall99/posts`);
      return;
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  //get the posts from the posts directory
  let getPosts = () => {
    return new Promise((resolve, reject) => {
      fs.readdir(__dirname + "/../posts/posts/", (err, data) => {
        if (err) {
          return reject(err);
        }
        return resolve(data);
      });
    });
  };

  //read the contents of a markdown file
  let getcontent = filename => {
    return new Promise((resolve, reject) => {
      fs.readFile(
        __dirname + "/../posts/posts/" + filename,
        "utf8",
        (err, data) => {
          return resolve(data);
        }
      );
    });
  };

  gitPosts()
    .then(() => {
      getPosts().then(async data => {
        let newData = {};
        console.log(data);
        for (var i = 0; i in data; i++) {
          let content = await getcontent(data[i]);
          newData[i] = {
            uri: "/blog/" + data[i].split(".")[0],
            meta: matter(content)
          };
          delete newData[i].meta.content;
          // newData[i] = textData;
        }
        console.log(JSON.stringify(newData));
        fs.writeFile(
          __dirname + "/../assets/manifest.js",
          `export const manifest = ${JSON.stringify(newData)}`,
          err => {
            if (err) {
              throw err;
            }
          }
        );
        return newData;
      });
    })
    .catch(e => {
      console.log(e);
      return;
    });
};
writeManifest();

module.exports = writeManifest;
