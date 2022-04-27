import { App, Modal, Setting, Plugin, Editor, MarkdownView } from "obsidian";

// sorry if this is poorly made, im only 16 and new to typescript ;)

export default class supersub extends Plugin {
	async onload() {
		console.log('Loaded SuperSub')
		this.addCommand({
			id: "add-superscript",
			name: "Add Superscript",
			hotkeys: [{modifiers: ["Ctrl"], key: "ArrowUp"}],
			editorCallback: (editor: Editor, view: MarkdownView) => {
				const sel = editor.getSelection()
				const cursor = editor.getCursor()
				if(sel.length > 0){
					// change selection into superscript
					editor.replaceSelection(`<sup>${sel}</sup>`)
				} else if (sel.length == 0) {
					// nothing selected
					editor.replaceSelection(`<sup></sup>`)
					cursor.ch += 5;
					editor.setCursor(cursor)
				}
				return;
			}
		})
		
		this.addCommand({
			id: "add-subscript",
			name: "Add Subscript",
			hotkeys: [{modifiers: ["Ctrl"], key: "ArrowDown"}],
			editorCallback: (editor: Editor, view: MarkdownView) => {
				const sel = editor.getSelection()
				const cursor = editor.getCursor()
				if(sel.length > 0){
					// change the selection into a subscript
					editor.replaceSelection(`<sub>${sel}</sub>`)
				} else if (sel.length == 0) {
					// nothing selected
					editor.replaceSelection(`<sub></sub>`)
					cursor.ch += 5;
					editor.setCursor(cursor)
				}
				return;
			}
		})
	}

	async onunload() {
		console.log("unloading plugin")
	}
}