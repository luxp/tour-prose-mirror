class ImageView {
  constructor(node, view, getPos) {
    this.dom = document.createElement('img')
    this.dom.src = node.attrs.src
    this.dom.alt = node.attrs.alt
    this.dom.addEventListener('click', e => {
      e.preventDefault()
      let alt = prompt('New alt text:', '')
      if (alt)
        view.dispatch(
          view.state.tr.setNodeMarkup(getPos(), null, {
            src: node.attrs.src,
            alt
          })
        )
    })
    this.contentDOM = document.createElement('div')
  }

  stopEvent() {
    return true
  }
}

export function image(node, view, getPos) {
  return new ImageView(node, view, getPos)
}
