const fs = require("fs");
const matter = require("gray-matter");
const path = require("path");
const appDir = path.dirname(require.main.filename);
const shell = require("shelljs");
const postPath = "posts";


let manifestGenerator = () => {
  //get the posts from github
  let gitPosts = async () => {
    try {
      let pass = escape(process.env.PASS);
      let user = escape(process.env.USER);
      console.info('Fetching posts from repo');
      await shell.cd(__dirname + "/../");
      await shell.exec(`git clone https://${user}:${pass}@${process.env.REPO}`);

      console.info('Moving images to Nuxt static directory');
      await shell.mkdir(__dirname + '/../static/images/posts/');
      await shell.mkdir(__dirname + '/../posts/');
      await shell.mkdir(__dirname + '/../posts/images/');
      await shell.cp(__dirname + '/../posts/images/*', __dirname + '/../static/images/posts/');

      return;
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  //get the posts from the posts directory
  let getPosts = async () => {
    return await new Promise((resolve, reject) => {
      fs.readdir(__dirname + "/../posts/posts/", (err, data) => {
        if (err) {
          return reject(err);
        }
        return resolve(data);
      });
    });
  };

  //read the contents of a markdown file
  let getcontent = async filename => {
    return await new Promise((resolve, reject) => {
      fs.readFile(
        __dirname + "/../posts/posts/" + filename,
        "utf8",
        (err, data) => {
          if(err) {
            console.log(err);
          }
          return resolve(data);
        }
      );
    });
  };

  gitPosts()
    .then(() => {
      
      getPosts()
      .then(async data => {
        let newData = new Array;

        //place each post into our object
        for (var i = 0; i in data; i++) {

          //read the contents of the markdown file
          let content = await getcontent(data[i]);
          let metaData = await matter(content);
         
          //flatten, truncate, and format the data
          newData[i] = {
            uri: "/blog/" + data[i].split(".")[0],
            date: new Date(metaData.data.date),
            title: metaData.data.title,
            summary: metaData.data.summary,
            image: metaData.data.image ? metaData.data.image : false
          };
        }

        //Sort by date, newest first
        await newData.sort((a, b) => b.date - a.date)

        //Write a manifest for ALL pages, so we can add them to our 'routes' object in the nuxt.config.js file
        fs.writeFile(
          __dirname + `/../assets/manifest.js`,
          `export const manifest = ${JSON.stringify(newData)}`,
          err => {
            if (err) {
              throw err;
            }
          }
        );
        //return the full object
        return newData;
      })
      .then(async data => {
      
      var listPosition = -1;
      var lists = new Array;

      //split the data into multiple lists in an array, so we can write each list to its own JSON file
      for(var i=0; i in data; i++) {
        if (i % 9 === 0) {
          listPosition++;
          lists.push([listPosition]);
        }
        if(i + 1 < data.length) {
          lists[listPosition].push([i - (listPosition * 9)])
        }
        lists[listPosition][i - listPosition * 9] = data[i];
      }
      
      //write out the JSON files
      for (i in lists) {
        await fs.writeFile(
          __dirname + `/../assets/manifest-${i}.js`,
          `export const manifest = ${JSON.stringify(lists[i])}`,
          err => {
            if (err) {
              throw err;
            }
          }
        );
      }

      //return the un-truncated data for sitemap
      return data;
    }).catch(e => {
      console.error(e)
    });
  })
  .then(async () => {
    await fs.readdir(__dirname + `/../assets/`,(e,m) => {
      console.log(e,m)
    });
  })
    .catch(e => {
      console.log(e);
      return;
    });
};
manifestGenerator()
console.log(__dirname)

module.exports = manifestGenerator;
