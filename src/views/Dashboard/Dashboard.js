import React, { Component } from 'react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import {
  // eslint-disable-next-line
  Badge,
  // eslint-disable-next-line
  Button,
  // eslint-disable-next-line
  ButtonDropdown,
  // eslint-disable-next-line
  ButtonGroup,
  // eslint-disable-next-line
  ButtonToolbar,
  Card,
  CardBody,
  // eslint-disable-next-line
  CardFooter,
  CardHeader,
  // eslint-disable-next-line
  CardTitle,
  Col,
  // eslint-disable-next-line
  Dropdown,
  // eslint-disable-next-line
  DropdownItem,
  // eslint-disable-next-line
  DropdownMenu,
  // eslint-disable-next-line
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle } from '@coreui/coreui/dist/js/coreui-utilities'
//import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

//import JiraConfig from '../../JiraConfig'

//const Widget03 = lazy(() => import('../../views/Widgets/Widget03'));

import state from './Posts'
import PostsData from './PostsData'

const brandPrimary = getStyle('--primary')
//const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
//const brandWarning = getStyle('--warning')
//const brandDanger = getStyle('--danger')







// Card Chart 1
const cardChartData1 = {
  labels: ['title', 'id', 'userId'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [({ PostsData })],
    },
  ],
};

const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}



//data: fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}$/..url..`)



// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [5, 59, 84, 84, 51, 55, 40, 59, 84, 84, 51, 55],
    },
  ],
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 3
const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40, 80, 45, 34, 12, 40],
    },
  ],
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 4
const cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
    },
  ],
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};




// Main Chart

const doughnut1 = {
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [
    {
      data: [5,35,89],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ]
    }]
}


const doughnut2 = {
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ]
    }]
}


const doughnut3 = {
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [
    {
      data: [200, 150, 70],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ]
    }]
}



const doughnut4 = {
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [
    {
      data: [400, 250, 100],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ]
    }]
}

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">

                <div className="text-value">11</div>
                <div>Device Tickets</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData2} options={cardChartOpts2} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-primary">
              <CardBody className="pb-0">

                <div className="text-value">40</div>
                <div>Device Tickets</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData1} options={cardChartOpts1} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-warning">
              <CardBody className="pb-0">

                <div className="text-value">40</div>
                <div>Device Tickets</div>
              </CardBody>
              <div className="chart-wrapper" style={{ height: '70px' }}>
                <Line data={cardChartData3} options={cardChartOpts3} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-danger">
              <CardBody className="pb-0">
                <div className="text-value">98</div>
                <div>Device Tickets</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Bar data={cardChartData4} options={cardChartOpts4} height={70} />
              </div>
            </Card>
          </Col>
        </Row>



        <Row>
          <Col>
            <Card>
              <CardHeader>
                Stats {' & '} Figures
              </CardHeader>
              <CardBody>
    <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
            <CardHeader>
              Doughnut Chart
              <div className='card-header-actions'>
                <a href='https://jira.wds.co' className='card-header-action'>
                  <small className='text-muted'>jira</small>
                </a>
              </div>
            </CardHeader>
            <CardBody>
              <div className='chart-wrapper'>
                <Doughnut data={doughnut1} />
              </div>
            </CardBody>
          </Card>
          </Col>


          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-success">
            <CardHeader>
              Doughnut Chart
              <div className='card-header-actions'>
                <a href='https://jira.wds.co' className='card-header-action'>
                  <small className='text-muted'>jira</small>
                </a>
              </div>
            </CardHeader>
            <CardBody>
              <div className='chart-wrapper'>
                <Doughnut data={doughnut2} />
              </div>
            </CardBody>
          </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-primary">
            <CardHeader>
              Doughnut Chart
              <div className='card-header-actions'>
                <a href='https://jira.wds.co' className='card-header-action'>
                  <small className='text-muted'>jira</small>
                </a>
              </div>
            </CardHeader>
            <CardBody>
              <div className='chart-wrapper'>
                <Doughnut data={doughnut3} />
              </div>
            </CardBody>
          </Card>
          </Col>


          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-secondary">
            <CardHeader>
              Doughnut Chart
              <div className='card-header-actions'>
                <a href='https://jira.wds.co' className='card-header-action'>
                  <small className='text-muted'>jira</small>
                </a>
              </div>
            </CardHeader>
            <CardBody>
              <div className='chart-wrapper'>
                <Doughnut data={doughnut4} />
              </div>
            </CardBody>
          </Card>
          </Col>
    </Row>



                <br />
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                  <tr>
                    <th className="text-center"><i className="icon-people"></i></th>
                    <th>User</th>
                    <th className="text-center">Country</th>
                    <th>Usage</th>
                    <th className="text-center"></th>
                    <th>Activity</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'https://jira.wds.co/secure/useravatar?ownerId=helderv&avatarId=15055'} className="img-avatar" alt="admin@example.com" />
                        <span className="avatar-status badge-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Helder Vieira</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <i className="flag-icon flag-icon-gb h4 mb-0" title="uk" id="uk"></i>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>50%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <Progress className="progress-xs" color="success" value="50" />
                    </td>

                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>10 sec ago</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'https://jira.wds.co/secure/useravatar?ownerId=paul.briston&avatarId=15103'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        <span className="avatar-status badge-danger"></span>
                      </div>
                    </td>
                    <td>
                      <div>Paul Briston</div>
                      <div className="small text-muted">

                        <span>Recurring</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <i className="flag-icon flag-icon-gb h4 mb-0" title="uk" id="uk"></i>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>10%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <Progress className="progress-xs" color="info" value="10" />
                    </td>

                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>5 minutes ago</strong>
                    </td>
                  </tr>

                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
