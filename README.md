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
# if possible: nvm use 0.10
yo react-hot-component
```

## Usage
Run ``gulp serve`` and open [http://localhost:3000](http://localhost:3000)

Optionally, ``gulp watch`` will run [JSHint](http://jshint.com/) to check your source files and will run tests when you modify the specs.

You can seperately execute your test specs with ``gulp test``. **Please be sure that your Node.js version is ``~0.10`` since Jest might be buggy with newer versions**.

Finally run ``gulp build`` to generate distribution files.

Checkout [gulpfile.js](http://github.com/tameraydin/react-hot-component/blob/master/app/templates/_gulpfile.js) for stand-alone tasks.

## License

MIT [http://tameraydin.mit-license.org/](http://tameraydin.mit-license.org/)
