'use strict';

var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var _ = require('lodash');

var ReactHotComponentGenerator = yeoman.generators.Base.extend({
  initializing: function() {
    this.log(yosay(
      'Thanks for using React Hot Component! Your project will be ready in seconds...'
    ));
  },

  prompting: function() {
    var done = this.async();

    var prompts = [{
      type: 'string',
      name: 'compName',
      message: 'What is the name of your component/package? ',
      default: 'my-react-component'
    },{
      type: 'string',
      name: 'compDesc',
      message: 'A description for your component: ',
      default: 'My very own react component'
    },{
      type: 'string',
      name: 'compAuthor',
      message: 'Your name: ',
      default: 'You'
    },{
      type: 'string',
      name: 'compLicense',
      message: 'License type: ',
      default: 'MIT'
    },{
      type: 'confirm',
      name: 'compTravis',
      message: 'Do you want .travis.yml to be included? ',
      default: true
    }];

    this.prompt(prompts, function(props) {
      var name = _.deburr(props.compName);

      this.compName = _.kebabCase(name);
      this.compNameCamelCase = _.capitalize(_.camelCase(name));
      this.compDesc = _.deburr(props.compDesc);
      this.compAuthor = _.deburr(props.compAuthor);
      this.compLicense = _.deburr(props.compLicense);
      this.compTravis = props.compTravis;
      done();
    }.bind(this));
  },

  writing: {
    app: function() {
      this.dest.mkdir('src');
      this.dest.mkdir('__tests__');
    },
    projectfiles: function() {
      this.copy('_nvmrc', '.nvmrc');
      this.copy('_gitignore', '.gitignore');
      this.copy('_npmignore', '.npmignore');
      if (this.compTravis) {
        this.copy('_travis.yml', '.travis.yml');
      }
      this.copy('_package.json', 'package.json');
      this.copy('_gulpfile.js', 'gulpfile.js');
      this.copy('_README.md', 'README.md');

      this.copy('index.html', 'index.html');
      this.copy('demo.js', 'demo.js');
      this.copy('preprocessor.js', 'preprocessor.js');
      this.copy('server.js', 'server.js');
      this.copy('webpack.config.js', 'webpack.config.js');


      this.copy('src/index.js', 'src/index.js');
      this.copy('src/subComponent.js', 'src/subComponent.js');
      this.copy('src/anotherSubComponent.js', 'src/anotherSubComponent.js');

      this.copy('__tests__/subComponent-test.js', '__tests__/subComponent-test.js');
    }
  },

  end: function() {
    this.log(yosay(
      'Almost done! Need help? Check out ' + chalk.red('http://github.com/tameraydin/react-hot-component')
    ));

    this.installDependencies({
      bower: false,
      npm: true
    });
  }
});

module.exports = ReactHotComponentGenerator;