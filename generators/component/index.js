var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting() {
    return this.prompt([{
      type: 'input',
      name: 'classname',
      message: 'Your components name',
      default: 'MyComponent',
    },
    {
      type: 'confirm',
      name: 'functional',
      message: 'Would you like your component to be functional?',
      default: false,
    }]).then((answers) => {
      this.log('Component name', answers.classname);
      this.log('Functional component', answers.functional);
      this.options = {
        functional: answers.functional,
        classname: answers.classname,
      };
    });
  }
  writing() {
    this.fs.copyTpl(
      this.templatePath('index.jsx'),
      this.destinationPath(`${this.options.classname}/index.jsx`),
      {
        functional: this.options.functional,
        classname: this.options.classname,
      },
    );
    this.fs.copyTpl(
      this.templatePath('styles.scss'),
      this.destinationPath(`${this.options.classname}/styles.scss`),
      {
        classname: this.options.classname,
      },
    );
    this.fs.copyTpl(
      this.templatePath('testComponent.jsx'),
      this.destinationPath(`${this.options.classname}/__tests__/testComponent.jsx`),
      {
        classname: this.options.classname,
      },
    );
  }
};
