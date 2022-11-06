import './App.css';
import {Routes , Route} from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundry/ErrorBoundary';

import Navbar from './components/Navbar/Navbar';
import ErrorExample from './pages/ErrorExample';
import Home from './pages/Home';
import Repo from './pages/Repo';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="App">
      {/* <ErrorExample/> */}
      <ErrorBoundary>

      
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/error-example' element={<ErrorExample/>}/>


      <Route path='/repo/:username' element={<Repo/>}/>

      <Route path='*' element={<NotFound/>}/>


      {/* <Route path='/learn' element={<Learn/>}/> */}

        
      </Routes>
      </ErrorBoundary>

    </div>

  );
}

export default App;
