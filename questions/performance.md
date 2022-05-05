# WEB Performance

## Critical rendering path:

steps between receiving the HTML, CSS, and JavaScript turn them into rendered pixels

## Service Workers:

- A service worker is a script that your browser runs in the background, separate from a web page, opening the door to features that don't need a web page or user interaction. (api - netwrok requests)

## Image optimizations:

reducing the file size of your images as much as possible without sacrificing quality
1.Name your images descriptively and in plain language.
2.Optimize your alt attributes carefully.
3.Choose your image dimensions and product angles wisely.
4.Reduce the file size of your images.
5.Choose the right file type.
6.Optimize your thumbnails.

## Lazy loading and bundle splitting:

- Lazy, or "on demand", loading - This speeds up the initial load of the application.

## General implications of HTTP/2 and server-push:

- HTTP/2 Server Push allows an HTTP/2-compliant server to send resources to a HTTP/2-compliant client before the client requests them. It is, for the most part, a performance technique that can be helpful in loading resources pre-emptively.

## When to prefetch and preload resources:

- Resource Prioritization

## Reduce browser reflows and to promote and element to the GPU(graphics processing unit):

2. Minimize the number of css rules
3. Minimize DOM depths
4. Remove Complex Animations from the flow

## Differences between the browser layout, compositing and painting:

- **Layout:** Browser will determine how much space each element takes up and where to place it.
- **Painting:** This is the process of filling in pixels. It involves drawing out elements.
- **Compositing:** Browser draws element to the screen in the correct order so the page renders correctly.

CDNs, Caching, Load balancing => to control traffic to multiple servers., Minify files, Resize images or right formats and right quality, Code splitting, Make fewer HTTP requests, Put CSS at the top, Move scripts to the bottom, Make JavaScript and CSS external, Remove duplicate scripts and files, Refactor your code

Performance tab - start recording then perform what you are inspecting.
What are some ways you may improve your website's scrolling performance?
Make the loading less costly, less animation, resize images, or use right format

SEO stands for “search engine optimization.” In simple terms, it means the process of improving your site to increase its visibility for relevant searches
