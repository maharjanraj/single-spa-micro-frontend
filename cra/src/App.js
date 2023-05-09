import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Page1 } from './components/page1';
import { Page2 } from './components/page2';

import './App.css';

function App(props) {
  return (
    <div>
      <div id='single-spa-application:mf'></div>
      <Router basename={props.basename}>
        <div>
          <ul>
            <li>
              <Link to='page1'>Page1</Link>
            </li>
            <li>
              <Link to='page2'>Page2</Link>
            </li>
          </ul>
          <Routes>
            <Route path='page1' element={<Page1 {...props} />} />
            <Route path='page2' element={<Page2 />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
