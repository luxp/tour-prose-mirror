import { EditorView } from 'prosemirror-view'
import { EditorState } from 'prosemirror-state'
import { DOMParser } from 'prosemirror-model'
import { getSchema } from './schema'
import { getPlugins } from './plugins/main'
import { getNodeViews } from './node-views'

let schema = getSchema()
class ProseMirrorView {
  constructor(target, content) {
    this.view = new EditorView(target, {
      state: EditorState.create({
        doc: DOMParser.fromSchema(schema).parse(''),
        plugins: getPlugins({ schema })
      }),
      nodeViews: getNodeViews()
    })
  }
}

let view = new ProseMirrorView(document.getElementById('editor'), '')
