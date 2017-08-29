<h1 align="center"><img height="30" src="https://github.com/dannyfritz/web-tech-and-dev-emoji/blob/master/images/react.png?raw=true">Styled Queries</h1>
<p align="center">
  A tool for use with <a href="https://github.com/styled-components/styled-components">styled-components</a>! Media queries for the component age.
</p>

<img src="/assets/demo.gif" align="center">

<h2>What's the point?</h2>

This tool offers predefined breakpoints for easy bootstrapping, along with the ability to inject your own configuration with a few lines of code. Theres also some really cool query-helpers to help you target different break points (i.e. `mobileOnly`, `tabletOnly`, `desktopOnly`).

<h2>Getting started</h2>
First things first, install the npm package via the npm cli.

```bash
  $ npm install --save styled-queries
```

<h2>Usage</h2>

Using Style Queries with your React-Styled project is extremely easy. Simply, `import` the `styled-queries` package into your React component of choice and use interpolation inside of your Styled tagged template to access the media query break points. The default import is an object containing functions returning media query wrappers. Here's an example:

```js
import React, { Component } from 'react';
import styled from 'styled-components';
import media from 'styled-queries';

const Div = styled.div`
  color: #fff !important;
  height: 100vh;
  ${media.sm`background: #90caf9;`}
  ${media.md`background: #e040fb;`}
  ${media.lg`background: #5c6bc0;`}
  ${media.xsOnly`font-family: comic-sans;`}
`;

export default () => (
  <Div>
    <h1>Hello, World!</h1>
  </Div>
)
```
<h3>Helper Queries</h3>

As you can see, the API provides `xOnly` helper-queries for all breakpoints automatically, even for ones you configure your self.