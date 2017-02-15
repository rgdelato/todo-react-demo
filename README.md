# DO NOT USE THIS AS YOUR BOILERPLATE

Just a demo project to show off some of the new technologies in the React ecosystem.

## Featuring...
+ [Webpack 2](https://webpack.js.org/)
+ [`create-react-app`](https://github.com/facebookincubator/create-react-app)'s presets for Babel and ESLint
+ [`prettier`](https://github.com/jlongster/prettier) running as a Git pre-commit hook (via [`husky`](https://github.com/typicode/husky)) and [`lint-staged`](https://github.com/okonet/lint-staged) for formatting
+ Routing with [`react-router`](https://github.com/ReactTraining/react-router/tree/v4) v4's `<Match>` component
+ CSS-in-JS with [`styled-components`](https://github.com/styled-components/styled-components)
  + Note: [`styled-classnames`](https://github.com/rgdelato/styled-classnames) is a quick hack I wrote that uses `styled-components` under the hood
+ Normal CSS run through [`postcss-nested`](https://github.com/postcss/postcss-nested) and [`autoprefixer`](https://github.com/postcss/autoprefixer)
+ Function-as-children pattern for managing data (see [`TodosData.js`](https://github.com/rgdelato/todo-react-demo/blob/master/src/components/TodosData.js))
+ Aliasing [`preact`](https://github.com/developit/preact) for `react` in production mode to remove 100KB off the file size
+ Running [`webpack-bundle-analyzer`](https://github.com/th0r/webpack-bundle-analyzer) to analyze the final JS bundle
+ Polyfilling old browsers with CDN-hosted [`Polyfill.io`](https://github.com/Financial-Times/polyfill-service) script

## Landmines
+ `create-react-app`'s Babel preset doesn't have a way to turn off compiling ES6 modules, so tree-shaking isn't currently enabled
+ `prettier` is still in beta and produces weird formatting sometimes
+ `react-router` v4 is still in beta, but is mostly pretty solid
+ `styled-components` has some minor bugs, new API is still being added, and it currently adds a lot to the bundle size
+ ESLint errors in the precommit hook don't prevent the commit (?)
+ Current npm scripts are written (poorly) in bash and will likely fail horribly on Windows
+ `Polyfill.io` is a third-party script and it sniffs the user-agent (to only send the necessary polyfills), both of which can be fragile

## More to test in another project...
+ Code splitting and pre-fetching the unloaded JS chunks.
+ Theming. `styled-components` has theming support, but I still need to actually put it through it's paces.
+ Forms. I think the eventual answer here will be uncontrolled inputs with something like [`form-serialize`](https://github.com/defunctzombie/form-serialize) on submit and a context hook to allow the form to know about it's inputs.
+ Shared state. The obvious answer is [`redux`](https://github.com/reactjs/redux), but there are a great many ways that `redux` code can be written and organized.
+ Server variables. The server will probably just inject a script tag that assigns a global variable.

## Aspirational
+ Figure out a way to pre-build server-rendered shells so users can load something immediately while the JS is parsing
+ Figure out a way to add in service worker to cache assets and reduce network calls on repeat visits (and pre-fetch JS in the background?)
