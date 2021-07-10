//import logo from './logo.svg';
import './App.css';
import Title from './Title';
import { Cards } from './Cards.js';

function App() {
  return (
  <>  
    <div className="main">
      {/* title section */}
      <Title/>
      <div className="cont">
      <div className="container">
        {/* cards section */}
        <div className="shadow">
        {/* shadow on hover */}
          <Cards/>
        </div>
      </div>
      </div>
    </div>
  </>  
  );
}

export default App;
