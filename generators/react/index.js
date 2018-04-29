const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  writing() {
    this.fs.copyTpl(
      this.templatePath("index.jsx"),
      this.destinationPath("index.jsx"),
      {}
    );
    this.fs.copyTpl(
      this.templatePath("routes.jsx"),
      this.destinationPath("routes.jsx"),
      {}
    );
  }

  installPackages() {
    this.log("Installing node packages...");
    this.npmInstall(
      [
        "react",
        "react-dom",
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
