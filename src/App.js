import GlobalStyles from './styles/GlobalStyles'
import Routes from './pages/Routes';
import {
  BrowserRouter as Router
} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <GlobalStyles />
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
