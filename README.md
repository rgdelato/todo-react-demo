# DO NOT USE THIS AS YOUR BOILERPLATE

Just a demo project to show off some of the latest-and-greatest tech in the React ecosystem.

## Featuring...
+ Webpack 2
+ `create-react-app`'s presets for Babel and ESLint
+ `prettier` running as a Git pre-commit hook (via `husky`)
+ Routing with `react-router` v4's `<Match>` component
+ CSS-in-JS with `styled-components`
+ Normal CSS run through PostCSS's `autoprefixer`
+ Function-as-children pattern for managing data (see `TodosData.js`)

## Landmines
+ `create-react-app`'s Babel preset doesn't have a way to turn off compiling ES6 modules, so tree-shaking isn't currently enabled
+ `prettier` is still in beta, and is still pretty buggy
+ `react-router` v4 is still in beta, but is mostly pretty solid
+ `styled-components` has some minor bugs and new API is still being added
+ ESLint errors don't prevent the commit for some reason?
+ Current npm scripts are written poorly in bash and will probably fail horribly on Windows

## TODO:
+ Actual forms. I think the eventual answer here will be uncontrolled inputs with something like `form-serialize` on submit and a context hook to allow the form to know about it's inputs, so we may have to write an uncontrolled form library ourselves. :(
+ Code splitting and pre-fetching the other JS chunks.
+ Theming. `styled-components` has theming support, but I still need to actually put it through it's paces.
+ Shared state. The obvious answer is `redux`, but there are many ways that `redux` code can be written and organized.
+ Server variables. The server will probably just inject a script tag that assigns a global variable.

## Aspirational
+ Figure out a way to pre-build server-rendered shells so users can load something immediately while the JS is parsing
+ Figure out a way to add in service worker to cache assets and reduce network calls on repeat visits (and pre-fetch JS in the background?)
