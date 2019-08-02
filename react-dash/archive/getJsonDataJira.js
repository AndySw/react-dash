const base64 = require('base-64');

constructor(props)
{
   super(props);
   isLoaded: false,
   jiraData: []
}

componentDidMount()
{
   let headers = new Headers();
   headers.append("Content-Type", "application/json");
   headers.append("Accept", "application/json");
   headers.append('Authorization', 'Basic ' + 
   base64.encode('hiddenusername:hiddenpassword'));

   fetch('https://jira.wds.co/', {method:'GET', headers: headers})
   .then(res => res.json())
   .then(res => {
      this.setState(
      {
        isLoaded: true,
        tableHeight: height + "px",
        jiraData: res
      });

    });

}


render()
{
  var { isLoaded, jiraData } = this.state;
  //Checking whether there is data in my array 
  const emptyOrNot = !!jiraData.length && !!jiraData.length ? <p>not empty</p> : <p>empty</p>
}

return(
 <div className="App">
 {emptyOrNot}
 </div>
)
