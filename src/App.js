import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import CharacterScreen from './screens/CharacterScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'


function App() {
  return (
    <Router>
    <Header/>
    
      <main className='py-3'>
        <Container>
          <Route exact path='/' component={HomeScreen}/>
          <Route path='/character/:id' component={CharacterScreen}/>
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
        </Container>
      </main>
      
    
    <Footer/>
    </Router>
  );
}

export default App;
