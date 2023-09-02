import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

function App() {
  let apiKey = process.env.REACT_APP_NEWS_API
  const [progress,setProgress] = useState(0)
  
  return (
    <div>
      <Router>
      <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={progress}
        // height={3}
      />
      <Routes>
        <Route 
        path='/'
        element={
          <News apiKey={apiKey} setProgress={setProgress} category='general'/>
        }
        />
        <Route 
        path='/business'
        element={
          <News apiKey={apiKey} setProgress={setProgress} category='business'/>
        }
        />
        <Route 
        path='/entertainment'
        element={
          <News apiKey={apiKey} setProgress={setProgress} category='entertainment'/>
        }
        />
        <Route 
        path='/health'
        element={
          <News apiKey={apiKey} setProgress={setProgress} category='health'/>
        }
        />
        <Route 
        path='/science'
        element={
          <News apiKey={apiKey} setProgress={setProgress} category='science'/>
        }
        />
        <Route 
        path='/sports'
        element={
          <News apiKey={apiKey} setProgress={setProgress} category='sports'/>
        }
        />
        <Route 
        path='/technology'
        element={
          <News apiKey={apiKey} setProgress={setProgress} category='technology'/>
        }
        />

      </Routes>
      </Router>
    </div>
  );
}

export default App;
