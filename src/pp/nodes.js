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
  },
  keywords: {
    content: 'inline*',
    group: 'block',
    parseDOM: [
      {
        tag: 'p.ppNodesKeywords'
      }
    ],
    toDOM() {
      return ['p', { class: 'ppNodesKeywords' }, 0]
    }
  },
  englishKeywords: {
    content: 'inline*',
    group: 'block',
    parseDOM: [
      {
        tag: 'p.ppNodesEnglishKeywords'
      }
    ],
    toDOM() {
      return ['p', { class: 'ppNodesEnglishKeywords' }, 0]
    }
  }
}

export function getNodes() {
  return ppNodes
}
