# React Hot Component

Scaffolds a rapid development environment to create your React component packages quickly & efficiently using awesome [React Hot Loader](http://github.com/gaearon/react-hot-loader) implementation.

## What does it include?
- Ready-to-use [Gulpfile](http://gulpjs.com/) with tasks such as serve, test, build.
- [ES6](http://github.com/lukehoban/es6features) support via [Browserify](http://browserify.org/) & [Reactify](http://github.com/andreypopp/reactify)
- Integrated [Jest](http://facebook.github.io/jest/) testing

## How to install?
Install [Yeoman](http://yeoman.io/) and React Hot Component generator:

```bash
npm install -g yo
npm install -g generator-react-hot-component
```

Navigate to folder where you wish to scaffold the project and run:

```bash
yo react-hot-component
```

## Action!
Run ``gulp serve`` and open [http://localhost:3000](http://localhost:3000)

Optionally, ``gulp watch`` will run [JSHint](http://jshint.com/) to check your source files and will run tests when you modify the specs.

Finally run ``gulp build`` to generate distribution files.

Checkout [gulpfile.js](http://github.com/tameraydin/generator-react-hot-component/blob/master/app/templates/gulpfile.js) for stand-alone tasks.

## License

MIT [http://tameraydin.mit-license.org/](http://tameraydin.mit-license.org/)
