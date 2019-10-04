import { EditorView } from 'prosemirror-view'
import { EditorState } from 'prosemirror-state'
import { DOMParser } from 'prosemirror-model'
import { getSchema } from './schema'
import { getPlugins } from './plugins/main'
import { getNodeViews } from './node-views'

let schema = getSchema()
let target = document.getElementById('editor')
let view = new EditorView(target, {
  state: EditorState.create({
    doc: DOMParser.fromSchema(schema).parse(''),
    plugins: getPlugins({ schema })
  }),
  nodeViews: getNodeViews(),
  dispatchTransaction(transaction) {
    let newState = view.state.apply(transaction)
    console.log(JSON.stringify(newState.toJSON(), null, 2))
    view.updateState(newState)
  }
})
