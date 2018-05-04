const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: "input",
        name: "classname",
        message: "Your components name",
        default: "MyComponent"
      },
      {
        type: "confirm",
        name: "functional",
        message: "Would you like your component to be functional?",
        default: false
      },
      {
        type: "confirm",
        name: "container",
        message: "Would you like your component to be a container?",
        when: answers => !answers.functional,
        default: false
      }
    ]).then(answers => {
      this.log("Component name", answers.classname);
      this.log("Functional component", answers.functional);
      this.options = {
        functional: answers.functional,
        container: answers.container,
        classname: answers.classname
      };
    });
  }
  writing() {
    this.fs.copyTpl(
      this.templatePath("index.jsx"),
      this.destinationPath(`${this.options.classname}/index.jsx`),
      {
        functional: this.options.functional,
        container: this.options.container,
        classname: this.options.classname
      }
    );
    this.fs.copyTpl(
      this.templatePath("styles.scss"),
      this.destinationPath(`${this.options.classname}/styles.scss`),
      {
        classname: this.options.classname
      }
    );
    this.fs.copyTpl(
      this.templatePath(
        this.options.container ? "testContainer.jsx" : "testContainer.jsx"
      ),
      this.destinationPath(
        `${this.options.classname}/__tests__/${this.options.classname}.test.jsx`
      ),
      {
        classname: this.options.classname
      }
    );
  }
};
