import './keywords.scss'
class KeywordsView {
  constructor(node, options = {}) {
    this.dom = document.createElement('p')
    let { title, placeholder } = options
    this.dom.setAttribute('class', 'ppNodesKeywords')
    this.dom.setAttribute('contenteditable', 'true')
    this.dom.innerHTML = `<div class="keywordsTitle" contenteditable="false">${title}</div><span class="placeholder" contenteditable="false">${placeholder}</span>`

    // contentDOM 实际渲染的地方
    this.contentDOM = document.createElement('span')
    this.dom.appendChild(this.contentDOM)
    if (node.content.size == 0) this.dom.classList.add('empty')
  }

  update(node) {
    let { type } = node
    if (!['keywords', 'englishKeywords'].includes(type.name)) {
      return false
    }
    if (node.content.size > 0) {
      this.dom.classList.remove('empty')
    } else {
      this.dom.classList.add('empty')
    }
    return true
  }
}

export function keywords(node) {
  return new KeywordsView(node, {
    title: '关键词：',
    placeholder: '关键词1，关键词2，关键词3（以逗号，分隔）'
  })
}

export function englishKeywords(node) {
  return new KeywordsView(node, {
    title: 'Keywords：',
    placeholder: 'keywords1,keywords2,keywords3（以逗号，分隔）'
  })
}
