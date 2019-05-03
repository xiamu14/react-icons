const path = require('path');

module.exports = {
  id: "eva",
  name: "Eva Icons",
  contents: [
    {
      files: path.resolve(
        __dirname,
        "eva-icons/package/icons/outline/svg/*.svg"
      ),
      formatter: name => `Eva${name}`
    },
    {
      files: path.resolve(
        __dirname,
        "eva-icons/package/icons/fill/svg/*.svg"
      ),
      formatter: name => `Eva${name}`
    }
  ],
  projectUrl: "",
  license: "MIT",
  licenseUrl: ""
};