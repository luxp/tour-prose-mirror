import { Schema } from 'prosemirror-model'

import { getNodes as getMdNodes, getMarks as getMdMarks } from './markdown/main'
import { getNodes as getPpNodes } from './pp/main'

export function getSchema() {
  return new Schema({
    nodes: {
      ...getMdNodes(),
      ...getPpNodes()
    },
    marks: getMdMarks()
  })
}
