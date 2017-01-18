//
var staged_files = process.argv.slice(2);

var staged_js_files = staged_files.filter(filename => {
  return filename.startsWith("src/") && filename.endsWith(".js");
});

console.log(staged_js_files.join(" "));
