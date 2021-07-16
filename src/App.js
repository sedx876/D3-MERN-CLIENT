import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import CharacterScreen from './screens/CharacterScreen'
import Character from './components/Character'

function App() {
  return (
    <Router>
    <Header/>
    
      <main className='py-3'>
        <Container>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/character/:id' component={CharacterScreen} />
        {/* <Route path='/character' component={Character} /> */}
        </Container>
      </main>
      
    
    <Footer/>
    </Router>
  );
}

export default App;
