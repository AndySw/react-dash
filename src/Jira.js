import JiraClient from 'jira-connector'
import React from 'react'
import UrlConf from './UrlConf'

var Jira = new JiraClient({
  host: 'https://jira.wds.co/rest/api/2/',
  protocol: 'https',
  basic_auth: {
    username: 'ktwallboard',
    password: '8ynEeH5tPR4'
  }
})

export default Jira
