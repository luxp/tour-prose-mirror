import { Schema } from 'prosemirror-model'

import { getNodes } from './nodes'
import { getMarks } from './marks'

export function getSchema() {
  return new Schema({
    nodes: getNodes(),
    marks: getMarks()
  })
}
