- What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?
  - resetting - changing all of browser default style on elements
  - normalizing - keep all the halpful browser's style and remove the rest
- Describe Floats and how they work.
  - floadt allows the element position on left or right side of texts.
- How would you approach fixing browser-specific styling issues?
  - use the separate style sheet for that browsr
- CSS preprocessors?
  - like sass
    - nested element in tree like format
- pseudo-elements
  - pseudo-element is a keyword added to a selector that lets you style a specific part of the selected element(s)
    p::first-line
- What's the difference between the "nth-of-type()" and "nth-child()" selectors?
  - p:nth-child(2) doesnt care about the tag and picks the second child that is p
  - p:nth-of-type(2) this is the second p under oarent
- How is clearfix css property useful?
  - overflow
- pseudo class
  - :active
- What is the difference between CSS Grid and Flexbox?
  - grid 2d - flexbox 1d
- render path => DOM, CSS, Layout, Paint

- cascade => order matters - what comes after overrides the rests
- specifity => if we have two different style for one element the one
  that is more specific will be used by browser
  !important is stronger than inline style, inline style is stronger than id, id is stronger than class, class is stronger than tag name

- units

  - absolute units
    - px
  - relative units
    - em => it's relative to the element font size and font size is reletive to parent element fon't size - in this way we can maintain the shape and look of elements in different sizes
      - when we have nested elements it'll shrink or extend exponentially
    - rem => it's reletive to html font-size - (default 20px)

- immediate adjasont selector => div + p
- direct child element => div > p
- attribute selector => input[type="text"], div[data-id="2"]

- display
  - display: block => takes all the available width
  - display: inline => takes only as much as the width of element - width and height and margin and padding won't work and respected
  - display: inline-block => inline but width and height and margin and padding will work and respected
- alpha channel => rgba()

transform

- transform-origin

background: "./aaaa" no-repeat center/cover - or separately

- flex
  - flex-basis => min width or height based on flex-direction
  - flex-grow => this will take space if additional space is available - we can set on all children and they will
    take up equally or proportionally based on flex-grow value
  - flex-shrink => same as flex-grow but the other way around
  - flex => flex: flex-grow flex-shrink flex-basis

[title~=flower] => Selects all elements with a title attribute containing the word "flower"
[lang|=en] Selects all elements with a lang attribute value starting with "en"
a[href^="https"] Selects every <a> element whose href attribute value begins with "https"
p:empty Selects every <p> element that has no children (including text nodes)
p:first-of-type Selects every <p> element that is the first <p> element of its parent
input:in-range Selects input elements with a value within a specified range
p:last-of-type Selects every <p> element that is the last <p> element of its parent
p:nth-last-of-type(2) Selects every <p> element that is the second <p> element of its parent, counting from the last child

Position =>
Default is static. Top, left, bottom, right, won't affect the element unless we change the position
Position relative => it’s relative to its own original position. You can set top, left, right, bottom then
Position fixed => it’s fixed relative to the screen. Stays fixed no matter what.
Position absolute => it’s relative to it’s positioned parent(slap to it). If the parent is not positioned it will be reactive to the body.
Position sticky => it’s relative until it meets a threshold and then it’s fixed.

:root {--blue: #1e90ff;}
color: var(--blue)

sass => A css extension that makes css more efficient. They took out semicolons and curly braces to make it faster. Indentation to select nested elements. styles can be reused easier. Less code to write.

@mixin name {property: value;}
selector {@include mixin-name;}

@mixin bordered($color, $width) {border: $width solid $color;}
.myArticle {@include bordered(blue, 1px);}

3 ways for css=>
Inline : style attribute
Internal: style tag in head tag
External: in css file and import in link tag
