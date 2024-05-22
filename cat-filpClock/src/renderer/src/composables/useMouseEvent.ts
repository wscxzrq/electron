// 鼠标穿透
export default () => {
  const mm = () => {
    const el = document.querySelector('#app')! as HTMLDivElement
    /**
     * 为什么使用 mouseenter 而不使用 mouseover
     * mouseenter 只会在元素自身触发，不会冒泡到祖先元素，一般用于精确判断鼠标是否进入某个元素，不包括其子元素
     * mouseover 会在元素自身与其子元素触发，一般用于判断鼠标是否进入某个元素，包括其子元素
     */
    el.addEventListener('mouseenter', () => {
      window.api.setIgnoreMouseEvents(false)
      console.log('禁止穿透')
    })

    document.body.addEventListener('mouseover', (event: MouseEvent) => {
      if (event.target === document.body) {
        console.log('开启穿透')
        window.api.setIgnoreMouseEvents(true)
      }
    })
  }

  return { mm }
}
