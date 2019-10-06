import './img-figure.scss'

import { uploadImg } from '../../../services/upload-img'
class ImgFigureView {
  constructor(node, view, getPos) {
    this.dom = document.createElement('figure')
    this.dom.setAttribute('class', 'ppNodesImgFigure')
    let { src, figcaption } = node.attrs
    // 默认图片
    let img = document.createElement('img')
    img.setAttribute(
      'src',
      src ||
        'https://image-static.segmentfault.com/399/445/3994459534-5c3185f0b6e3c_articlex'
    )
    img.addEventListener('click', async e => {
      let imgSrc = await uploadImg()
      view.dispatch(
        view.state.tr.setNodeMarkup(getPos(), null, {
          src: imgSrc
        })
      )
    })

    this.contentDOM = document.createElement('figcaption')
    this.contentDOM.innerText = figcaption
    this.dom.appendChild(img)
    this.dom.appendChild(this.contentDOM)
  }
}

export function imgFigure(node, view, getPos) {
  return new ImgFigureView(node, view, getPos)
}
