var eslint = require("eslint");
var test = require("tape");

test("load config in eslint to validate all rule syntax is correct", function (t) {
  var CLIEngine = eslint.CLIEngine;

  var cli = new CLIEngine({
    useEslintrc: false,
    configFile: "eslintrc.json",
  });

  var code = "const foo = 1;\n/**\n* Test function\n* @method bar\n* @returns {void}\n*/\nconst bar = () => {};\nbar(foo);\n";

  t.equal(cli.executeOnText(code).errorCount, 0);
  t.end();
});
