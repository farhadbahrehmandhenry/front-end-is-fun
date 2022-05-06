- How many resources will a browser download from a given domain at a time?
  - six
- Name 3 ways to decrease page load (perceived or actual load time).
  - Optimize Your Images
  - css at the top
  - script at the buttom
  - put css and js in separate files
- What does CORS stand for and what issue does it address?
  - Cross-origin resource sharing
  - resourses are only avalable to defined domaines
  - Access-Control-Allow-Origin (Cross-Origin Resource Sharing — CORS) Defines a list of domains that can access the API of the origin domain;
- lazyload
  - Lazy loading a webpage reduces page weight, allowing for a quicker page load
  - unnessecary resources will loaded later
- Explain the difference between cookies, session storage, and local storage?

  - localStorage - browser storage that does not expire
    - setItem, getItem, removeItem, clear
  - session - browser storage that expires after session ends - when the tab is closed, it's gone
    - setItem, getItem, removeItem, clear
  - cookie - stores some information of websites including your preferences in your local browser - and
    that website will identify you

- performance =>

  - optimize the order of downloding the resources (most important first)
  - minimize the number of sources
  - outside packages
  - reduce DOM depth
  - optimize CSS selectors
  - if high details and resolution — PNG
  - if geometry shapes — SVG
  - if text logo — use font text
  - if photo — JPEG

- Workers

  - Service Worker — interceptor to build an offline app;
  - Web Worker — perform heavy tasks on background;

CI/CD =>
Continuous integration, continuous delivery
a bridge between development and operation. Circleci, github actions
Continuous integration => tested, and merged
Continuous delivery => the deployed app is reliable and according to standards

Analyze code =>
Look at read me, Package.json, and folder structure, and browse the files to get familiar.

Virtual machines => machines that can host servers, apps, .., but they were too big and slow. In one virtual machine maybe multiple applications can run. They have their own operating system - we have a limit of the number of vms based on memory and cpu.
Container => only one app can run and it’s faster - they have the host operating system.
Docker => a tool to make it easier to create, deploy, and run applications by using containers, and enables you to make sure your app works everywhere in the same way without being worried about dependencies or versions.

Kubernetes =>
Helps with microservice application when you have multiple services on different containers

security =>
save users privacy by Bcrypt users passwords
Authentication and authorization (tokens)
Secure app from Injection - Never trust any input (Cross site scripting, Insecure-deserialization, sql, nosql injection)
Install safe packages and avoid installing random packages
Environment variables for secrets (how to import from .env)
Use https
Access control => cors (cross-origin resource sharing)=> give access to those who are authorised. Some domains can access the server others get cors error
Backup
Follow same-origin policy =>for example when you visit a website you actually send the js and in js may a request has been put to send a request to amazon to hack your account. So same origin policy makes sure to not send a request from a js that is downloaded from another source

Sdlc => analysis - plan - design - implement - test - maintain

Scrum => one type of agile methodology that has sprints usually each two weeks - for projects that have less clear requirements

how I work under pressure - plan - break down - tackle
My working style - have a to do list to keep track of what I need to do - might be a daily or weekly or monthly
