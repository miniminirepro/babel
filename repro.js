var
  babel = require("babel-core"),
  fs = require("fs"),
  path = require("path"),
  fsOpts = {encoding: "utf8"},
  inputFile = path.join(__dirname, "src", "input.js"),
  input,
  output,

input = fs.readFileSync(inputFile, fsOpts);

output = babel.transform(input, {
  // Remove this to avoid .babelrc reading.
  filename: inputFile,
}).code;

fs.writeFileSync(path.join(__dirname, "dist", "actual.js"), output, fsOpts);
