// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require("vscode");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  //console.log("Congratulations, your extension 'extended-cursormove' is now active!");

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand("extension.smartHome.toggleCursorHome", function(editor, edit) {
      vscode.commands.executeCommand("cursorMove", {
        to: "wrappedLineStart",
        by: "line",
        select: false,
        value: 1
      });
    })
  );

}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;
