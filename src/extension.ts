import * as vscode from 'vscode';

let toggled = true;

export function activate(context: vscode.ExtensionContext) {
	console.log('"vscode-toggle-extension" is now active!');

	setToggleValue(toggled);

	let disposable = vscode.commands.registerCommand('vscode-toggle-extension.testCommand', () => {
		setToggleValue();
	});

	context.subscriptions.push(disposable);
}

function setToggleValue(value?: boolean) {
	if(value === undefined) {
		toggled = !toggled;
		value = toggled;
	}
	
	vscode.commands.executeCommand(
		"setContext",
		"testCtx",
		value
	);
}

export function deactivate() {}
