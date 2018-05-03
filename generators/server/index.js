const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  writing() {
    this.fs.copyTpl(
      this.templatePath("server.js"),
      this.destinationPath("server.js"),
      {}
    );
    this.fs.copyTpl(
      this.templatePath("webpackDevServer.js"),
      this.destinationPath("config/webpackDevServer.js"),
      {}
    );
  }

  updatePackageScripts() {
    this.log("Updating package scripts...");
    this.fs.extendJSON(this.destinationPath("package.json"), {
      scripts: {
        start: "./node_modules/.bin/babel-node ./server.js"
      }
    });
  }

  installPackages() {
    this.log("Installing node packages...");
    this.npmInstall(["express", "webpack-dev-middleware"], { save: true });
  }
};
