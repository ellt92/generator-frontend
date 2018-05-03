const Generator = require("yeoman-generator");
const path = require("path");

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: "input",
        name: "source",
        message: "Your source directory name",
        default: "src"
      }
    ]).then(answers => {
      this.log("Source directory", answers.source);
      this.options = {
        source: answers.source
      };
    });
  }

  writing() {
    function addToSourceDir(file) {
      return path.join(this.options.source, file);
    }
    addToSourceDir.bind(this);
    this.fs.copyTpl(
      this.templatePath("index.jsx"),
      this.destinationPath(path.join(this.options.source, "index.jsx")),
      {}
    );
    this.fs.copyTpl(
      this.templatePath("routes.jsx"),
      this.destinationPath(path.join(this.options.source, "routes.jsx")),
      {}
    );
  }

  installPackages() {
    this.log("Installing node packages...");
    this.npmInstall(
      [
        "react",
        "react-dom",
        "prop-types",
        "react-router-dom",
        "react-router-config",
        "history"
      ],
      {
        save: true
      }
    );
  }
};
