let ppNodes = {
  abstract: {
    content: 'inline*',
    group: 'block',
    parseDOM: [{ tag: 'p.ppNodesAbstract' }],
    toDOM() {
      return ['p', { class: 'ppNodesAbstract' }, 0]
    }
  },
  englishAbstract: {
    content: 'inline*',
    group: 'block',
    parseDOM: [{ tag: 'p.ppNodesEnglishAbstract' }],
    toDOM() {
      return ['p', { class: 'ppNodesEnglishAbstract' }, 0]
    }
  }
}

export function getNodes() {
  return ppNodes
}
