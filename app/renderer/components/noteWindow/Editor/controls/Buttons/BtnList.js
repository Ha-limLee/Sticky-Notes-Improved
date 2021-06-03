import React, { Component } from 'react'
import { ListOrderedIcon, ListUnorderedIcon } from '@primer/octicons-react'
import { btnClassNameRaw } from '../config'

class BtnOList extends Component {
  clickHandler () {
    document.execCommand('insertOrderedList', false, '')
  }

  render () {
    const doClick = this.clickHandler
    return (
      <div className={btnClassNameRaw} onClick={doClick}>
        <ListOrderedIcon size={16} />
      </div>
    )
  }
}
class BtnUList extends Component {
  clickHandler () {
    document.execCommand('insertUnorderedList', false, '')
  }

  render () {
    const doClick = this.clickHandler
    return (
      <div className={btnClassNameRaw} onClick={doClick}>
        <ListUnorderedIcon size={16} />
      </div>
    )
  }
}

export { BtnOList, BtnUList }