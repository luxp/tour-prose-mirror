let mdMarks = {
  em: {
    parseDOM: [
      { tag: 'i' },
      { tag: 'em' },
      { style: 'font-style', getAttrs: value => value == 'italic' && null }
    ],
    toDOM() {
      return ['em']
    }
  },

  strong: {
    parseDOM: [
      { tag: 'b' },
      { tag: 'strong' },
      {
        style: 'font-weight',
        getAttrs: value => /^(bold(er)?|[5-9]\d{2,})$/.test(value) && null
      }
    ],
    toDOM() {
      return ['strong']
    }
  },

  link: {
    attrs: {
      href: {},
      title: { default: null }
    },
    inclusive: false,
    parseDOM: [
      {
        tag: 'a[href]',
        getAttrs(dom) {
          return {
            href: dom.getAttribute('href'),
            title: dom.getAttribute('title')
          }
        }
      }
    ],
    toDOM(node) {
      return ['a', node.attrs]
    }
  },

  code: {
    parseDOM: [{ tag: 'code' }],
    toDOM() {
      return ['code']
    }
  }
}

export function getMarks() {
  return mdMarks
}
