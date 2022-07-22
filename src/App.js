import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from "./components/Trending"
import "./style/landingPage.css"

function App() {
  return (
    <div>
      {/* Intro Start */}
      <div className='myBg'>
        <NavigationBar />
        <Intro />
      </div>
      {/* Intro End */}

      {/* Treinding Start */}
      <div className='trending'>
        <Trending />
      </div>
      {/* Trending End */}
    </div>
  );
}

export default App;
