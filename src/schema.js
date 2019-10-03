import { Schema } from 'prosemirror-model'

import { getNodes as getMdNodes, getMarks as getMdMarks } from './markdown/main'

export function getSchema() {
  return new Schema({
    nodes: getMdNodes(),
    marks: getMdMarks()
  })
}
