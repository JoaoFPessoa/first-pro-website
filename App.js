import GlobalStyles from './site-insitucional/src/styles/GlobalStyles'
import Routes from './site-insitucional/src/pages/Routes';
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
