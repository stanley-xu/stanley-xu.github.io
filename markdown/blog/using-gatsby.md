---
title: "Foray into Front-end Development with Gatsby"
date: "2019-10-26"
---

*This site was built with Gatsby.*

I finally decided to take the plunge into modern web development after hearing good things about Gatsby.
I've also wanted to build a portfolio website and deploy it onto Github Pages.
Since Gatsby produces static sites, it'd be a perfect choice!

Throughout this process, I've learned a few interesting things.

## What Gatsby *really* is

At surface level, Gatsby is a *static-site generator*.
But what makes it special is how it does this:
1. Server-side rendering (SSR) at **build time**
2. Route-based code splitting
3. High performance browser APIs

## What's SSR anyway?

For me, it helps to think about what client-side rendering is in comparison. Plain old React relies on JavaScript running on a user's browser to render content on the page or the DOM.
These apps can require some initial loading time when they're first loaded because the JS must be parsed and evaluated.

Now, imagine if we do this loading in advance and serve users the final copy of the DOM--that's essentially what Gatsby does. The idea of server-side rendering is to use a server to first generate HTML on a server before serving it to the client over the network.

Traditional web development relied on SSR at *request time*, which means the server does work on every web request made to it; which could mean clicking a button or link! Now imagine the complexity involved when you need to service many thousands of users...

## Build time SSR

Gatsby is unique in that it offers *build-time* SSR, in contrast to *per-request* SSR.

This means that we can render the final HTML for clients during development. This completely avoids waiting for JS to load, waiting for server responses on each request, and scaling issues inherent with multi-threaded web servers.

Not to mention, deploying plain static content are much cheaper than using VMs.

## And more!

Gatsby leverages Webpack to optimize splitting the JS bundle. For instance, certain routes in your website may share dependencies like `react-dom` and some are unique to others (`Formik` for forms). The bundle is split so that the browser only downloads what the page needs.

There's much more to say about Gatsby, and the way it transforms markdown, data, and React into these optimized websites.

---
Many other techniques used by Gatsby help, check out this [post](https://www.gatsbyjs.org/blog/2019-04-02-behind-the-scenes-what-makes-gatsby-great/) for more.

Having gone through the tutorial for Gatsby, I feel it left a big impression on me. It helped slingshot me into the world of front-end development and taught me about UI, React, GraphQL, and even Markdown.

I left with many more questions and newfound interest in an area I'm only beginning to know. I highly encourage anyone interested in React, Gatsby, or even web design in general to try the tutorial!

Some more things that I find cool about Gatsby:
- [Gatsby's data layer](https://www.gatsbyjs.org/docs/why-gatsby-uses-graphql/)
- [Gatsby's lifecycle](https://www.gatsbyjs.org/docs/gatsby-lifecycle-apis/#bootstrap-sequence)
