// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { format } from 'path';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "testextension" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.disable', () => {
		// The code you place here will be executed every time your command is executed
		vscode.window.showInformationMessage('DEACTIVATED auto-formatting');

		vscode.workspace.getConfiguration().update("editor.formatOnSave", false, true)
		vscode.workspace.getConfiguration().update("editor.formatOnPaste", false, true)
		vscode.workspace.getConfiguration().update("editor.formatOnType", false, true)
	});

	let disposable2 = vscode.commands.registerCommand('extension.enable', () => {

		vscode.workspace.getConfiguration().update("editor.formatOnSave", true, true)
		vscode.workspace.getConfiguration().update("editor.formatOnPaste", true, true)
		vscode.workspace.getConfiguration().update("editor.formatOnType", true, true)
		vscode.window.showInformationMessage('ACTIVATED auto-formatting');

	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(disposable2);
}


// this method is called when your extension is deactivated
export function deactivate() { }