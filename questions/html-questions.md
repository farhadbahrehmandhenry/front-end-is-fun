- How do you serve a page with content in multiple languages?
  - lang property => lang="fr"
- Consider HTML5 as an open web platform. What are the building blocks of HTML5?
  - semantic tags
- Describe the difference between `<script>`, `<script async>` and `<script defer>`.
  - script => html executes until scrit - script download and execute - html resume
  - script async - html executes and once it hits js, in continues with html and js - then it pauses
    html and execte the js
  - script defer - same as async but it executes the js at the end
- What is progressive rendering?
  - the technique of sequentially rendering parts of the web page on the server-side and send it to the client in portions without waiting for the entire page to be rendered
- Have you used different HTML templating languages before?
  - handlebar - react jsx -
- What are empty elements in HTML

  - they dont have end tag

- DOM
  parentElement parentNode
  children childNodes
  firstElementChild firstChild
  lastElementChild lastChild
  previousElementSibling previousSibling
  nextElementSibling nextSibling
  hasChildNodes

  - selector: getElementById, getElementByTagName, querySelector, querySelectorAll;
  - navigation: children (elements): childNodes (nodes) , firstElementChild, lastElementChild, parentElement, previousElementSibling, nextElementSibling;
  - attributes: classList, clientHeight, clientWidth, childElementCount, setAttribute(attrName, value) removeAttribute(attrName) removeAttribute(attrName), getBoundingClientRect;
  - manipulation

    - createElement(‘div’), append, prepend, el.cloneNode(true), remove(), insertBefore(newNode, beforeNode), insertAfter(newNode, afterNode);

  - Document Fragment — creates a virtual copy of a document, that can store multiple elements. a minimal document object that has no parent.
    It helps with reflow. Reflow causes change of layout which is quite costly to render, so document fragment which is a fragment of document can help.
  - event delegation
    - bubbling
    - capturng

- accessiblity
  Use headers <h1>,<h2>,<h3>… ;
  Use <img alt=””;
  Use roles like <ul role=”list”><li role=”listitem”>, <dialog role=”dialog”. Find the whole list here;

- Responsive web
  Use <picture> <source srcset=”” media=”” > to specify images for different screen sizes;
  Responsive font sizes: em and rem ;
  Use media queries;
  vmin
  %

html5 - latest documentation of html - everyone is using html5 because it's the latest documentation

- block elements - takes up the entire width
- inline block - takes up only as much as its width - width and height and margin and padding won't work and respected
- div - division element
- <hr> - horizontal line
- <br> - line break
- <sup></sup> - elevates above the baseline
- <sub></sub> - lowers under the baseline

2. document.documentElement <HTML>
3. document.body (if it is inside body) document.head (if it is inside head)
4. parentNode
5. previousSibling <==DIV==> nextSibling
6. firstChild <==(childNodes)==> lastChild

elem.childNodes[0] === elem.firstChild
elem.childNodes[elem.childNodes.length - 1] === elem.lastChild

1. We can use for ..of to iterate over it.

- for (let node of document.body.childNodes){
  alert(node);//shows all the nodes from collection
  }

2. Array methods won’t work, because it’s not an array:

- Alert(document.body.childNodes.filter); // undefined (there's no filter method!)
- Alert( Array.from(document.body.childNodes).filter ); // now it's there

## SUMMARY

- Given a DOM node, we can go to its immediate neighbours using navigation properties.
- There are two main sets of them:
- For all nodes: parentNode, childNodes, firstChild, lastChild, previousSibling, nextSibling.
- For element nodes only: parentElement, children, firstElementChild, lastElementChild, previousElementSibling, nextElementSibling.

formData api =>
https://www.learnwithjason.dev/blog/get-form-values-as-json
https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects

<progress id="progress" value="40" max="100">40</progress>

An iframe is used to display a web page within a web page.

<iframe src="URL"></iframe>

What is an image map? => you can set some clickable areas on an image that can open another page

p:nth-child(odd) => Selects every <p> element that is the second child of its parent
p:nth-child(even) => Selects every <p> element that is the second child of its parent
p::after => Insert something after the content of each <p>
:not(p)=> Selects every element that is not a <p> element

element => <div></div>
parentElement
children
firstElementChild
lastElementChild
previousElementSibling
nextElementSibling

node => result of document.quer....
childNodes
firstChild
lastChild
hasChildNodes()
nextSibling
previousSibling
parentNode

create elements =>
element.cloneNode(true) clones an element and returns the resulting node.
document.createElement(element(p or h1)) creates a new element node.
document.createTextNode(text) creates a new text node. It’s a text
element.appendChild(new el) to append created element
element.after(new el)
element.before(new el)

remove elements =>
parentElement.removeChild(node) To remove an HTML element, you must select the parent of the element

replace elements =>
element.replaceChild(newNode, oldNode)

Traverse the dome => (WEB API)
getElementsByName()
getElementById()
getElementsByTagName()
getElementsByClassName()
querySelector => document.querrSelector(‘.class’) => first that matches
querySelectorAll => all

See if element is active =>
var dummyEl = document.getElementById('myID');
var isFocused = (document.activeElement === dummyEl);

e.target.getAttribute(‘....’)

Svg => vector base - modify in css and script
Canvas => pixel base - modify in script

<script defer> => tells the browser not to wait for the script and continue process the html.
<script async> =>not browser not other scripts wait for this script
