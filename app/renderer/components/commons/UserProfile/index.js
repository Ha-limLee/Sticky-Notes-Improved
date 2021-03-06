import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class UserProfile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userprofileImgPath: window.localStorage.getItem('userprofileImgPath')
    }
  }

  render () {
    // Set Profile Image to Image Frame
    let profileStyle
    if (this.state.userInformation) {
      profileStyle = {
        backgroundImage: 'url(' + this.state.userprofileImgPath + ')'
      }
    }

    // Set Profile Image Frame
    let profileImage = <div style={profileStyle} className='profile_img' />
    if (this.props.enableLink === 'true') {
      profileImage = (
        <Link to='/userprofile'>
          <div style={profileStyle} className='profile_img pointer' />
        </Link>
      )
    }

    return (
      <div className={'userprofile ' + this.props.type}>
        {profileImage}
      </div>
    )
  }
}
