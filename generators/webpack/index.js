const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: "input",
        name: "source",
        message: "Your source directory name",
        default: "src"
      },
      {
        type: "input",
        name: "entry",
        message: "Your entry file name",
        default: "index.jsx"
      },
      {
        type: "input",
        name: "destination",
        message: "Your build directory name",
        default: "dist"
      },
      {
        type: "input",
        name: "title",
        message: "Your websites title",
        default: "Website"
      }
    ]).then(answers => {
      this.log("Source directory", answers.source);
      this.log("Entry file", answers.entry);
      this.log("Build directory", answers.destination);
      this.log("Website title", answers.title);
      this.options = {
        source: answers.source,
        entry: answers.entry,
        destination: answers.destination,
        title: answers.title
      };
    });
  }

  writing() {
    const webpackDev = "webpack.config.dev.js";
    const webpackProd = "webpack.config.prod.js";
    const webpackShared = "webpack.shared.js";
    const webpackDevServer = "webpackDevServer.js";
    const indexHtml = "index.html";

    this.log("Writing webpack files...");
    this.log(this.options);
    this.fs.copyTpl(
      this.templatePath(webpackDev),
      this.destinationPath(`config/${webpackDev}`),
      {
        source: this.options.source,
        entry: this.options.entry,
        destination: this.options.destination,
        title: this.options.title
      }
    );
    this.fs.copyTpl(
      this.templatePath(webpackProd),
      this.destinationPath(`config/${webpackProd}`),
      {
        source: this.options.source,
        entry: this.options.entry,
        destination: this.options.destination
      }
    );
    this.fs.copyTpl(
      this.templatePath(webpackShared),
      this.destinationPath(`config/${webpackShared}`),
      {
        source: this.options.source
      }
    );
    this.fs.copyTpl(
      this.templatePath(webpackDevServer),
      this.destinationPath(`config/${webpackDevServer}`),
      {}
    );
    this.fs.copyTpl(
      this.templatePath(indexHtml),
      this.destinationPath(`${this.options.source}/${indexHtml}`),
      {
        title: this.options.title
      }
    );
  }

  updatePackageScripts() {
    this.log("Updating package scripts...");
    this.fs.extendJSON(this.destinationPath("package.json"), {
      scripts: {
        watch:
          "./node_modules/.bin/webpack --watch --config config/webpack.config.dev.js --progress --mode development",
        build:
          "./node_modules/.bin/webpack --config config/webpack.config.prod.js --progress --mode production"
      },
      babel: {
        presets: ["react", "env", "stage-0"]
      }
    });
  }

  installPackages() {
    this.log("Installing node packages...");
    this.npmInstall(
      [
        "webpack",
        "webpack-cli",
        "webpack-dev-middleware",
        "webpack-hot-middleware",
        "webpack-manifest-plugin",
        "html-webpack-plugin",
        "babel-cli",
        "babel-loader",
        "babel-plugin-module-resolver",
        "babel-polyfill",
        "babel-preset-env",
        "babel-preset-react",
        "babel-preset-stage-0",
        "babel-loader",
        "css-loader",
        "sass-loader",
        "style-loader",
        "file-loader"
      ],
      {
        save: true
      }
    );
  }
};
