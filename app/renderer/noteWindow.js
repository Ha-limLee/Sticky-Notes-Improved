import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/commons/Header'
import Editor from './components/noteWindow/Editor'

export default class App extends Component {
  constructor (props) {
    super()
  }

  setTitle (title) {
    document.title = title
  }

  render () {
    const onChangeHandler = () => {
      this.setTitle('Sticky Note')
    }
    return (
      <div>
        <Header
          title='안녕하세요.'
          editable='true'
          onChange={onChangeHandler}
        />
        <Editor />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)