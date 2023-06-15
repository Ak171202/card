import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {
  var data = [{
    free: "summa",
    price: "$0",
    user: "multiuser",
    stor: "6gb",
    proj: "unlimited",
    access: "cummunity",
    size: "limited",
    line: "dedicated",
    dom: "subdomain",
    sts: "monthly"
  },
  {
    free: "summa2",
    price: "$0",
    user: "multiuser",
    stor: "6gb",
    proj: "unlimited",
    access: "cummunity",
    size: "unlimited",
    line: "dedicated",
    dom: "subdomain",
    sts: "monthly"
  },
  {
    free: "summa3",
    price: "$0",
    user: "multiuser",
    stor: "6gb",
    proj: "unlimited",
    access: "cummunity",
    size: "unlimited",
    line: "dedicated",
    dom: "subdomain",
    sts: "monthly"
  }]
  return (
    <div className="App">
      <div className='container-fluid'>
        <div className='row'>
          {/* <Card data={data}></Card> */}
          {
            data.map((obj)=>{
              return <Card data={obj}></Card>
            })
          }
          {/* <Card free="serious" price="$10" user="single-user" stor="10gb" proj="limited" access="private" size="unlimited" line="dedicated" dom="domain" sts="yearly" ></Card>
          <Card free="summa" price="$0" user="multiuser" stor="6gb" proj="unlimited" access="cummunity" size="unlimited" line="dedicated" dom="subdomain" sts="monthly" ></Card> */}

        </div>
      </div>
    </div>
  );
}

export default App;
