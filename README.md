# DO NOT USE THIS AS YOUR BOILERPLATE

Just a demo project to show off some of the latest-and-greatest tech in the React ecosystem.

## Featuring...
+ Webpack 2
+ `create-react-app`'s presets for Babel and ESLint
+ `prettier` running as a Git pre-commit hook (via `husky`)
+ Routing with `react-router` v4
+ CSS-in-JS with `styled-components`
+ Normal CSS run through PostCSS's `autoprefixer`
+ Function-as-children pattern for managing data

## Landmines
+ `prettier` is still in beta, and is still a little buggy
+ `react-router` v4 is still in beta, but mostly pretty solid
+ `styled-components` is still a little buggy and new API is still being added
+ ESLint errors don't prevent the commit for some reason?
+ npm scripts are written in bash and will probably fail horribly on Windows

## TODO:
+ Forms. I think the eventual answer here will be uncontrolled inputs, so we may have to write an uncontrolled form library ourselves. :(
+ Code splitting and pre-fetching non-critical JS chunks in the background
+ Theming. `styled-components` has theming support, but I need to actually put it through it's paces.
+ Shared state. The obvious answer is `redux`, but there are many ways that `redux` code can be written and organized.
+ Server variables. The server will probably just inject a script tag that assigns a global variable.

## Aspirational
+ Figure out a way to build server-rendered (non-specific) shells
+ Figure out a way to add in service worker to cache assets and reduce network calls on repeat visits
