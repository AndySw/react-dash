import React from 'react'
import { Component } from 'react'
import JiraClient from 'jira-connector'
import Jira from './Jira'
import UrlConf from './UrlConf'
import axios from 'axios'

class TestData extends Component {
  constructor (props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      members: []
    }
  }

  componentDidMount () {
    axios
      .get('https://jira.wds.co/rest/tempo-teams/2/team/12/member?type=member')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            members: result.members
          })
        },
        // Note: handle errors here
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  render () {
    const { error, isLoaded, members } = this.state
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <ul>
          {members.map(member => (
            <li key={member.name}>
              {member.name}
            </li>
          ))}
        </ul>
      )
    }
  }
}
export default TestData
