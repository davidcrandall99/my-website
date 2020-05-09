# www.davidcrandall.com

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
`PASS` -- the password or auth token for the github repo containing your posts. If the posts are public, this is not required. However, you will want to populate this variable if you want to store posts in a private repo.

## How Posts Work
This website takes advantage of a CI/CD pipeline, consisting of github actions and AWS code pipeline.

Posts are stored in an external repository, which as a `posts` directory inside of it. Inside the `posts` directory are `*.md` files, which use YAML frontmatter for most meta data, like date, tile, description, etc.

When running `npm run build`, `npm run start`, or `npm run generate`, the posts will be pulled from the private github repo, a JSON file consisting of all the post data will be generated - which will be used by our Vue pages/components. It defines the URI, description, etc. This file is used by `components/RecentPosts.vue` on runtime.

Finally, we parse the markdown files into html in our `blog/_post.vue` file

## How live updating works
Whenever the posts are updated, or whenever this repo is updated, all unit tests are run and static pages are generated and deployed to S3, all using AWS Codebuild.

This is how I am doing it -- you can abviously use Nuxt as a live server for dynamic content.
