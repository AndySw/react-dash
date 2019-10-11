import JiraClient from 'jira-connector'
import React from 'react'

var Jira = new JiraClient({
  host: 'jira.wds.co',
  basic_auth: {
    base64: 'a3R3YWxsYm9hcmQ6OHluRWVINXRQUjQ='
  }
})

export default Jira
