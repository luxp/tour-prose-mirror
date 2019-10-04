import { keymap } from 'prosemirror-keymap'
import { history } from 'prosemirror-history'
import { baseKeymap } from 'prosemirror-commands'
import { Plugin } from 'prosemirror-state'
import { dropCursor } from 'prosemirror-dropcursor'
import { gapCursor } from 'prosemirror-gapcursor'
import { menuBar } from 'prosemirror-menu'

import { buildMenuItems } from './menu'
import {
  getInputRules as getMdInputRules,
  buildKeymap as buildMdKeymap
} from '../markdown/main'

export function getPlugins(params = {}) {
  let { schema } = params
  let plugins = [
    getMdInputRules(schema),
    keymap(buildMdKeymap(schema)),
    keymap(baseKeymap),
    dropCursor(),
    gapCursor()
  ]
  if (params.menuBar !== false)
    plugins.push(
      menuBar({
        floating: params.floatingMenu !== false,
        content: params.menuContent || buildMenuItems(params.schema).fullMenu
      })
    )
  if (params.history !== false) plugins.push(history())

  return plugins.concat(
    new Plugin({
      props: {
        attributes: { class: 'ProseMirror-example-setup-style' }
      }
    })
  )
}
