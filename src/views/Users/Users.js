import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap'
import Jira from '../../Jira'
import JiraClient from 'jira-connector'


function UserRow (props) {
  const user = props.user
  const userLink = `/users/${user.id}`

  /* const getBadge = (status) => {
    return status === 'Active' ? 'success'
      : status === 'past' ? 'secondary'
        : status === 'Pending' ? 'warning'
          : status === 'Banned' ? 'danger'
            : 'primary'
  } */

  return (
    <tr key={user.id.toString()}>
      <th scope='row'><Link to={userLink}>{user.id}</Link></th>
      <td><Link to={userLink}>{user.name}</Link></td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.website}</td>
    </tr>
  )
}
// <td><Link to={userLink}><Badge color={getBadge(user.status)}>{user.status}</Badge></Link></td>



class Users extends Component {
     state = {
      users: []
    }

  componentDidMount () {
    fetch('https://jira.wds.co/rest/tempo-teams/2/team/12/member?type=member')
    //fetch('https://jsonplaceholder.typicode.com/users')    
      .then(res => res.json())
      .then((data) => {
        this.setState({ users: data })
        console.log("length : " + this.state.users.length)
        //console.log(this.state.users)
      })
      .catch(console.log)
  }

  render () {
    // const userList = usersData.filter((user) => user.id < 10)

    return (
      <div className='animated fadeIn'>
        <Row>
          <Col xl={6}>
            <Card>
              <CardHeader>
                <i className='fa fa-align-justify' /> Users <small className='text-muted'>example</small>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope='col'>id</th>
                      <th scope='col'>name</th>
                      <th scope='col'>username</th>
                      <th scope='col'>email</th>
                      <th scope='col'>website</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.users.map((user, index) =>
                      <UserRow key={index} user={user} />
                    )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Users
