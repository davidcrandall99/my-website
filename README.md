# davidcrandall.com

> The code for my website. It's a work in progress.

## Build Setup
This is a nuxt project, so running standard nuxt commands will work here
``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Environment Variables
`PASS` -- the password or auth token for the github repo containing your posts. If the posts are public, this is not required. However, you will want to populate this variable if you want to store posts in a private or public repo. **You should generate a random token and not use your personal admin password here, or create a seperate github account for automation**

`USER` -- The username of the gitub account that will access the posts repo

`REPO` -- The URL of the repo **without https://**, i.e, `github.com/user/reponame`

You will notice in the `.github/workflows/nodejs.yml`, these variables are appended using Github Secrets.

## How Posts Work

Posts are stored in an external repository, which has a `posts` directory inside of it. 
Inside the `posts` directory are `*.md` files. These files use YAML frontmatter for most meta data, like date, tile, description, etc.

### Diving in further

When running `npm run build`, `npm run start`, or `npm run generate` using the environment variables above, the posts will be pulled from the private github repo you choose. The md files are parsed and converted to JSON objects for displaying the content in components and pages.

This is not liquid, so you will want to make sure to include, at a minimum, a title, description, date, and uri slug in the YAML front matter of the `md` file.

You can see each piece of data used in `components/RecentPosts.vue`, `components/AllPosts.vue`, and `pages/blog/_post.vue`, or view the `manifest` files generated in the `assets` directory after running `npm run buld`.

## How live updating works
This website takes advantage of a CI/CD pipeline, consisting of github actions and AWS code pipeline.

Whenever the posts are updated, or whenever this repo is updated, all unit tests are run and static pages are generated and deployed to S3, all using AWS Codebuild.
This is how I am doing it -- you can obviously use Nuxt as a live server for dynamic content.
