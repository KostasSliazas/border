(function () {
  'use strict'
  function Arrows (number) {
    this.number = number
  }

  Arrows.prototype.up = function up (y) {
    this.number = y
    return (this.number += 1)
  }

  Arrows.prototype.dn = function dn (y) {
    this.number = y
    return (this.number -= 1)
  }
  const lg = new Arrows(0)
  document.addEventListener('click', updateArrows)
  document.addEventListener('change', updateArrows)

  function updateArrows (e) {
    if (e.target.parentElement.className === 'arows' && typeof e.target.parentElement.getElementsByTagName('input')[0] !== 'undefined') {
      if (e.target.tagName === 'DIV' || e.target.tagName === 'SELECT') {
        const g = Number(e.target.parentElement.getElementsByTagName('input')[0].value)
        if (e.target.className === 'uarrow' && g < 100) {
          e.target.parentElement.getElementsByTagName('input')[0].value = lg.up(g)
        }
        if (e.target.className === 'darrow' && g > 0) {
          e.target.parentElement.getElementsByTagName('input')[0].value = lg.dn(g)
        }
      }
      e.target.parentElement.getElementsByTagName('input')[0].value = e.target.parentElement.getElementsByTagName('input')[0].value.length > 0 && Number.isInteger(+e.target.parentElement.getElementsByTagName('input')[0].value) ? e.target.parentElement.getElementsByTagName('input')[0].value : 0
      borders()
    }
  }
  borders()

  function borders () {
    const bo = document.getElementById('borders')
    const bos = document.getElementById('botext')
    const ge = document.getElementsByClassName('arows')
    const arr = []
    for (let i = 0; i < ge.length; i++) {
      arr.push(ge[i].getElementsByTagName('input')[0].value)
    }
    bo.style.borderStyle = 'solid'
    bo.style.borderColor = '#643678'
    bo.style.borderLeftWidth = arr[1] + 'px'
    bo.style.borderRightWidth = arr[2] + 'px'
    bo.style.borderBottomWidth = arr[3] + 'px'
    bo.style.borderTopWidth = arr[0] + 'px'
    bo.style.borderLeftColor = document.getElementById('leftc').value || '#000'
    bo.style.borderRightColor = document.getElementById('rightc').value || '#000'
    bo.style.borderBottomColor = document.getElementById('bottomc').value || '#000'
    bo.style.borderTopColor = document.getElementById('topc').value || '#000'
    const string = '.element {\n' +
          'border-left:' + bo.style.borderLeft + ';' +
          '\nborder-right:' + bo.style.borderRight + ';' +
          '\nborder-top:' + bo.style.borderTop + ';' +
          '\nborder-bottom:' + bo.style.borderBottom + ';\n}'
    bos.innerText = string
  }

  document.getElementById('botext').addEventListener('click', function (e) {
    try {
      document.execCommand('copy')
    } catch {
      throw new Error('error: not copied')
    }
  })
}())
