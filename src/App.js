import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <div className='container-fluid'>
      <div className='row'>
      <Card free="summa" price="$0" user="multiuser" stor="6gb" proj="unlimited" access="cummunity" size="unlimited" line="dedicated" dom="subdomain" sts="monthly" ></Card>
      <Card free="serious" price="$10" user="single-user" stor="10gb" proj="limited" access="private" size="unlimited" line="dedicated" dom="domain" sts="yearly" ></Card>
      <Card free="summa" price="$0" user="multiuser" stor="6gb" proj="unlimited" access="cummunity" size="unlimited" line="dedicated" dom="subdomain" sts="monthly" ></Card>
      
      </div>
      </div>
    </div>
  );
}

export default App;
