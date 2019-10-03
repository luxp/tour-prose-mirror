import { EditorView } from 'prosemirror-view'
import { EditorState } from 'prosemirror-state'
import { defaultMarkdownSerializer } from 'prosemirror-markdown'
import { DOMParser } from 'prosemirror-model'
import { getSchema } from './schema/main'
import { getPlugins } from './plugins/main'

let schema = getSchema()
class ProseMirrorView {
  constructor(target, content) {
    this.view = new EditorView(target, {
      state: EditorState.create({
        doc: DOMParser.fromSchema(schema).parse(''),
        plugins: getPlugins({ schema })
      })
    })
  }

  get content() {
    return defaultMarkdownSerializer.serialize(this.view.state.doc || '')
  }
  focus() {
    this.view.focus()
  }
  destroy() {
    this.view.destroy()
  }
}

let view = new ProseMirrorView(document.getElementById('editor'), '')
