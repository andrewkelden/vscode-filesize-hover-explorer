const vscode = require('vscode');
const { formatFileSize } = require('./formatFileSize');

/**
 * param {vscode.ExtensionContext} context
 */
async function activate() {
	console.log('Filesize Hover Explorer is activated');
	let decorator = await createDecoratorClass();

	const watcher = vscode.workspace.createFileSystemWatcher('**/*');
	watcher.onDidChange((uri) => decorator.onFileChanged(uri));
}

/**
 * Create a class that implements the FileDecorationProvider interface.
 * @returns {Promise<FileDecorationProvider>}
 */
async function createDecoratorClass() {
	class FileDecorationProvider {
		constructor() {
			this.disposables = [];
			this._onDidChangeFileDecorations = new vscode.EventEmitter();
			this.disposables.push(this._onDidChangeFileDecorations);
			this.disposables.push(vscode.window.registerFileDecorationProvider(this));
		}

		/**
		 * Creates a FileDecoration with the file size as a tooltip.
		 *
		 * @param {vscode.Uri} uri
		 * @returns vscode.FileDecoration
		 * @memberof FileDecorationProvider
		 **/
		async provideFileDecoration(uri) {
			const fileStats = await vscode.workspace.fs.stat(uri);

			if (fileStats.type === vscode.FileType.File) {
				return {
					tooltip: formatFileSize(fileStats.size),
				};
			}
		}

		// Add this new method
		onFileChanged(uri) {
			this._onDidChangeFileDecorations.fire([uri]);
		}

		// Add this getter
		get onDidChangeFileDecorations() {
			return this._onDidChangeFileDecorations.event;
		}

		dispose() {
			this.disposables.forEach((d) => d.dispose());
		}
	}
	return new FileDecorationProvider();
}

function deactivate() {}

module.exports = {
	activate,
	deactivate,
};
