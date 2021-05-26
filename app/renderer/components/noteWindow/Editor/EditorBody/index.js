import React, { Component } from 'react'

export default class EditorBody extends Component {
  constructor (props) {
    super()
    this.text = ''
    this.textareaRef = React.createRef()
  }

  _saveData = () => {
    // window.localStorage.setItem(this.props.id, this.textareaRef.current.innerHTML)
    window.localStorage.setItem(this.props.id, this.textareaRef.current.innerHTML)
  }

  // load text
  componentDidMount () {
    window.addEventListener('beforeunload', this._saveData)

    const prevText = window.localStorage.getItem(this.props.id)
    if (prevText) {
      this.setState({
        text: prevText
      })
    }
    this.textareaRef.current.innerHTML = prevText
    console.log('in EditorBody', this.props.id)
  }

  render () {
    return (
      <div className='editor_body'>
        <span
          className='textarea'
          role='textbox'
          // onBlur={handleChange}
          contentEditable
          ref={this.textareaRef}
        />
        {/* <button onClick={getText}>log</button> */}
      </div>
    )
  }
}