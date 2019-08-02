import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import JiraClient from 'jira-connector'

const DEFAULT_QUERY = 'redux'

const url = 'https://jira.wds.co/rest/api/2/'
const PATH_SEARCH = '/search'
const PARAM_SEARCH = 'query='

class UrlConf extends Component {
  constructor (props) {
    super(props)

    this.state = {

      result: null,
      searchTerm: DEFAULT_QUERY

    }
    this.setJiraData = this.setJiraData.bind(this)
  }

  setJiraData (result) {
    this.setState({ result })
  }

  componentDidMount () {
    const { searchTerm } = this.state

    fetch(`${url}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
      .then(response => response.json())
      .then(result => this.setJiraData(result))
      .catch(error => error)
  }
}

export default UrlConf
