const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  writing() {
    this.log("Writing eslintrc file...");
    this.fs.copyTpl(
      this.templatePath("eslintrc.json"),
      this.destinationPath(".eslintrc.json"),
      {}
    );
  }

  updatePackageScripts() {
    this.log("Updating package scripts...");
    this.fs.extendJSON(this.destinationPath("package.json"), {
      scripts: {
        lint: "./node_modules/.bin/eslint --ext .js,.jsx .",
        "lint-fix": "./node_modules/.bin/eslint --ext .js,.jsx --fix ."
      }
    });
  }

  installPackages() {
    this.log("Installing node packages...");
    this.npmInstall(
      [
        "babel-eslint",
        "eslint",
        "prettier",
        "eslint-config-airbnb",
        "eslint-config-prettier",
        "eslint-plugin-prettier",
        "eslint-import-resolver-babel-module",
        "eslint-plugin-import",
        "eslint-plugin-jest",
        "eslint-plugin-jsx-a11y",
        "eslint-plugin-react"
      ],
      {
        save: true
      }
    );
  }
};
