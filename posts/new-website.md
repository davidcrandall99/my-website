---
title: "My new website"
date: 02/17/2020
summary: "I recently decided to rebuild my website using Nuxt, and I'm thrilled with the setup"
---

Recently, I decided to rebuild my website from scratch. For years, davidcrandall.com has been used for a number of things:
showcasing my photgraphy, my website portfolio, my graphic design, my music, etc.

At one point, the website was a static html website generated with jekyll.rb - but jekyll was slow and integrating with other frameworks was kind of a pain. Special workarounds were needed if you wanted to have anything written in ```{{ curly brackets }}```

Then, for years, I had been on Wordpress. And I really enjoyed that.

Wordpress was easy to update, there were loads of free plugins that did all kinds of cool stuff, and I could get a website up and running in minutes if I didn't care about customizing anything. But...I DO care about customizing things. And if you've ever developed a premium wordpress theme, you know it is extremely tedious balancing PHP, CSS, and the wordpress Codex when trying to develop anything scalable.

Not to mention the myriad security vulnerabilities I had to worry about, database backups, and all this overhead that comes with maintaining a wordpress site. It took all the fun out of working on my website.

SO, I decided to rebuild the entire damn thing using technologies I love and use every day: JavaScript, ES6, VueJS, Express, CI/CD pipelines, etc.

## How it works

First, there's the app itself, which is a simple nuxt app with some key differences.

1. A 'posts' directory, containing markdown files of blog posts (including this one!)
2. A 'manifest' function that creates JSON from the markdown data
3. Dynamically generated routes from the manifest in the `nuxt.config.js` file, so blog posts generate static html files on `npm run build`
4. Githooks and Github Actions to test and deploy my work to s3

At the end of the day, I can write a blog post, commit it to my `master` brach and it'll be live in a matter of minutes.

I'll share more later with a tutorial/steps on how it all works.

For now, <a href="https://github.com/davidcrandall99/my-website" target="_blank" rel="noopener">check out the gitub repo</a>