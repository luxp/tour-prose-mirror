class ParagraphView {
  constructor(node) {
    this.dom = document.createElement('p')
    // contentDOM 实际渲染的地方
    this.contentDOM = document.createElement('div')
    this.dom.appendChild(this.contentDOM)
    if (node.content.size == 0) this.dom.classList.add('empty')
  }

  update(node) {
    if (node.type.name != 'paragraph') return false
    if (node.content.size > 0) this.dom.classList.remove('empty')
    else this.dom.classList.add('empty')
    return true
  }
}

export function paragraph(node) {
  return new ParagraphView(node)
}
