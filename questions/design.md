# Front-end System Design

reusable components,separation of concerns (view models from business logic), application state management, and basic n-tier computing concepts (front-end, middle-tier, back-end).

Api design => security - cache

- As a front-end Engineer you shouldn’t be surprised when asked to design the front end architecture of common applications.
- “ Design a site like Pinterest” or “tell me how you would build a shopping checkout service?”.
- System design interviews for folks working on the backend typically involve MapReduce, designing distributed key-value stores or require knowledge of CAP theorem and the likes.

# Areas to think about as a front-end Engineer

## Rendering(Client-side rendering, server-side rendering and universal rendering)

- **Server-side rendering:**
- Your internet speed
- The location of the server
- How many users are trying to access the site
- How optimed the website is,
- **Client-side rendering:**
  Now if you visit the URL, you would see the same content as you did the server-side example. The key difference is that if you were to click on the link the page to load more content, the browser will not make another request to the server. You are rendering items with the browser, so it will instead use JavaScript to load the new content and Vue.js will make sure that only the new content is rendered. Everything else will be left alone.
  This is much faster since you are only loading a very small section of the page to fetch the new content, instead of loading the entire page.
- **Universal Rendering:**
  Applications that have the ability to render both on the server and on the client are called universal apps. this is also very helpful with single page applications.

## **Layout:**

- if you’re designing a system used by multiple development teams, you need to think about building components and if you require teams to follow a consist markup to use said components.

## **State Management:**

- A passive or reactive programming model
- What are two-way data binding and one-way data flow, and how are they different? Two way data binding means that UI fields are bound to model data dynamically such that when a UI field changes, the model data changes with it and vice-versa. One way data flow means that the model is the single source of truth.
- How components related to each other for example Foo–> Bar or Foo –>Bar.

## **Async Flow:**

- Your components may need to communicate in real-time with the server. The design you propose should consider XHR vs bidirectional calls. If your interviewer asks you to support older browsers, your design will need to choose between hidden iFrames, script tags or XHR for messaging. If not, you could propose using websockets or you might decide server-sent events (SSE) are better.

## **Seperation of Concerns:**

- Model-View-Controller (MVC), Model-View-ViewModel (MVVM) and Model-View-Presenter (MVP) patterns.

## **Multi-Device Support:**

- Will your design use the same implementation for the web, mobile web, and hybrid apps or will they be separate implementations? If you were building a site like Pinterest, you might consider three columns on the web but only one column on mobile devices. How would your design handle this?

## **Asset-Delivery:**

- In large applications, it’s not uncommon to have independent teams owning their own codebases. These different codebases probably have dependencies on each other and each usually has their own pipeline to release changes to production. Your design should consider how assets are built with dependencies (code splitting), tested (unit and integration tests) and deployed. You should also think about how you will vend assets through a CDN(Content Delivery Networks) or inline them to reduce network latency.

Server side rendering application (multiple page application)=>
each time reload the page, the entire LOADED page html is fetched from the server. It load faster on the browser but it’s not interactive until javascript gets downloaded
Pages come up fast but take some time to become interactive.
client side rendering application =>
get html then js and then load the page in the browser. And after that js takes care of page reloading in the browser without fetching from server
Takes longer to come up but when it comes up it’s interactive

Single page application =>
An app that doesn’t need to reload during the time it’s used once it’s loaded.

responsive design vs adaptive design =>
Responsive means by changing the screen width the layout and elements smoothly change to look great on different screens, but adaptive is when by changing the screen width at some certain point layout starts to adapt the element’s width with the screen width.

Progressive web apps =>
Apps that you can install (Native web app) like mobile apps and can work offline. There is no client-server relation. (faster, better user experience)
