# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

(./screenshot-Desktop.jpg)
(./screenshot-Mobile.jpg)

### Links

- Solution URL: https://github.com/NazimAitali/time-tracking-dashboard.git
- Live Site URL: https://time-tracking-dashboard.netlify.app/

## My process

### Built with

- SASS preprocessor custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library

### What I learned

- Use mixines
- Use objects as an alternative to the switch

```sass
@mixin dimension($w, $h) {
  width: 1% * strip-unit($w);
  height: 1% * strip-unit($h);
}
 @include dimension(100, 100);
```

```js
const Switch = (menu, elem) => {
  const timeframes = {
    1: {
      current: elem.timeframes.daily.current,
      previous: elem.timeframes.daily.previous,
      text: "Yesterday",
    },
    2: {
      current: elem.timeframes.weekly.current,
      previous: elem.timeframes.weekly.previous,
      text: "Last Week",
    },
    3: {
      current: elem.timeframes.monthly.current,
      previous: elem.timeframes.monthly.previous,
      text: "Last Month",
    },
  };
  return timeframes[menu];
};
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued development

I would like to learn NextJS and React native

## Author

- GitHub- https://github.com/NazimAitali
- Frontend Mentor - https://www.frontendmentor.io/profile/NazimAitali
- Twitter - https://twitter.com/NazimAitali
- !linkedIn - https://www.linkedin.com/in/nazimaitali
