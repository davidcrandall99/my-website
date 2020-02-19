---
title: "Using AWS on the cheap"
date: '02/18/2020'
summary: "If you're as shocked by your AWS bill as so many others, it's time to re-evaluate your infrastructure. Here are some tips and tricks to cut down on AWS costs"
---

Deploying a website or app to AWS is a job that can be done in thousands of ways. And, with the AWS Free Teir, for at least 12 months, you can deploy your apps without paying a dime.

However, if you're now outside that 12 month window or have decided to use resources outside the free teir, you understand just how expensive these services can be. AWS doesn't help wit their complicated billing system.

So if you're hit with an expensive AWS bill, it's time to evaluate your infrastructure, your workflows, and your overall setup and make sure you're saving wherever possibe. Follow these tips to avoid burning a bigger hole in your wallet.
___

## Tip #0: Understand how billing works in AWS
AWS bills like a *utility*, meaning you pay for what is used, and this is the most important thing to understand about AWS billing.

In a more 'traditional' webhost, you pay for a shared webserver, a set amount of storage, and some other features that run 24/7. This server is shared, meaning the physical resources are shared with other websites serviced by the same host.

In AWS, you pay for what is used. This is a little confusing at first, but think about it this way: what are all the things an application uses?
* **Storage** - your application takes up physical drive space. You will pay for how much space is used
* **Bandwidth** - your application might communicate with the internet, you'll pay for the I/O and payload
* **Processing** - your application runs on a machine in the cloud, which requires CPU/processing power
* **Memory** - your application requires RAM

These are just a few high-level items AWS will take into consideration for just about each service it offers. There are several other factors that inform cost. Think about how these resources amplify/multiply as more traffic/visitors hit your app.


## Tip #1: Turn off lower environments that are no longer in use

Most companies use mutliple environments, typically a staging and production environment. These typically exist alongside a QA evironment for blackbox testing, and a Dev environment for sandboxing ideas. That's 4 environments running constantly.

Now, think about how often your lower staging, qa, and dev environments are actually used. Do people use them after 6PM or before 8AM? If not, consider having these environments shut down during off hours.

If you're running a cloud app that costs you $1000/month just to run in production, you can assume you're paying 4x the amount running lower environments concurrently. You can save **thousands** just by creating a simple scheduler for environments to follow.

___

## Tip #2: Cache wisely

Many apps run in ECS containers, EC2 instances, on Lambdas, or in S3. Often times, we throw a load balancer in front of these resources, put a domain name in front of it, and start sending traffic to it.

Others will simply point route53 directly to an endpoint's IP -- which is probably not a good idea anyway.

Instead of pushing every request directly to your core application, consider using cloudfront and S3 as caching layers for your application and data. Cloudfront can cache (or not cache) based on myriad headers, cookies, and GET parameters. Take advantage of the flexibility here and create strict caching rules that give your app the flexibility to be dynamic where necessary, and static everywhere else.

And if you're worried about cache, you can integrate a command to invalidate cache for specific routes in your codebuild pipeline, or using a Lambda triggered by a cloudwatch event.
___

## Tip #3: Go static!

People have this misconception that static websites can't be dynamic, or are too difficult to manage. We often equate static websites with jekyll.rb sites, or literally hand-coded HTML webpages on an apache server.

That's not what I'm talking about. Not exactly.

If your application is basically a blog or website that relies on a database, you can still serve up a static website that updates itself in realtime. 

For example, this website is built with **Nuxt**, which uses VueJS, VueX, and Vue Router. This website uses a series of MD files as a database of content (though it could theoretically be any database), and uses **dynamic routes** for these blog posts. 

In my `nuxt.config.js` file, I run a function that puts all my possible routes into an array automatically, then places them in the `routes` array in my config:

**nuxt.config.js**
```
import {manifest} from './assets/manifest.js'; //my custom function that reads all my markdown files; this would be where you would hit your database to gather all your routes.

let urls = [];
for(var i = 0; i in manifest; i++) {
  urls.push(manifest[i].uri);
}

//now the nuxt config can begin

export default {
	
	 //all your typical nuxt config stuff here, then:
	 generate: {
  		routes: urls
 	}
}
```
The `generate.routes` object defines all the routes that will be built as **static pages** when running `npm run build`

Then, to make it update automatically, I use githooks to start a **CodeBuild job in AWS**, which uses a local `buildspec.yml` file, which runs my tests and builds my app, before deploying the compiled app in the `dist` directory to S3:

**buildspec.yml**

```
version: 0.2
phases:
  install: 
    commands:
      - npm i npm@latest -g
  pre_build:
    commands:
     - npm install --fix
     - npm test
  build:
    commands:
      - npm run build
artifacts:
  files:
    -  '**/*'
  base-directory: 'dist'
```

So what's happening here?

First, we enter the *install* phase, which installs nodejs.
Then, we enter the *pre_build* phase which installs the app and its depedencies, and attempts to fix any security vulnerabilities. After that, it runs our unit tests.
Then, if the unit tests succeed, we enter the *build* phase, where we actually build and compile our app.

The `artifacts` portion defines the **base directory** of our **compiled** app, which is the `dist` directory in nuxt, and which files within that folder to deploy. In this case, we list ALL files in the `dist` directory.

From here, you just need to hook this build into something. For me, it's a githook on commits to my `master` branch, but you can create a hook from just about anything. At my current job, we have a wordpress backend for one of our websites, and we do a similar sort of job whenever a post or page is published. So this concept can really be applied anywhere.

Now, I have a CMS powered webdsite that updates in realtime, but still has an effective cache policy and is served staticly.

___

## Tip #4 audit your database choice

Many apps I've worked with tend to use a database of some sort -- in most cases, it is a form a SQL data. And that's all well and good, but running SQL data in AWS can be costly when using services like **RDS**, when there are myriad ways to host data efficiently:

* You can host SQL data in S3, and lock it down not only by SQL credentials, but by IAM policies or VPC access.
* DynamoDB is not only cheaper than RDS, but faster for most basic use cases.
* Utilize a caching layer such as Redis or S3, or even Cloudfront

## Tip #5 reduce the frequency of your health checks

I remember once being surprised by a $40 bill due to a bunch of hits to a load balancer that I thought was cached in cloudfront with a TTL of at least 24 hours. With this setup, my origin / app should only be hit once per day, however, it was being hit once per minute with healthchecks.

What Amazon doesn't tell you outright is you pay both for the healthcheck AND the bandwith / resources your app uses when the healthcheck is made. I turned these healthchecks OFF entirely, because I have other, cheaper ways to monitor the health of my application. Turning off these healthchecks dropped my bill by $50 for that app.

That brings me to my next, and probably final tip to save cost:

## Tip #6 - don't use AWS for everything

AWS really is a one-stop-shop for all your cloud computing needs. It offers hundreds of services, tools, logging and monitoring features, premium support, etc. However, just because they offer it doesn't mean it will be the best or most cost efficient solution for you.

For example, tools like [link to="https://sentry.io/welcome/"]Sentry[/link] or Log Rocket