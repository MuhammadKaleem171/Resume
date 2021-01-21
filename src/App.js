import Header from './Components/Header/Header';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import MainPage from './Pages/Mainpage/MainPage'
import history from './Components/History/history';
import Resume from './Pages/Resume/Resume';
import Project from './Pages/Project/Project';
import './App.css'
function App() {
  return (
    <Router history={history}>
      
    <Header/>
    < Route  exact path='/'  component={ MainPage}/>
    < Route  path='/Resume'  component={Resume}/>
    <Route path='/Project' component={Project}/>

    </Router>
  )
}

export default App;
