import './App.css'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Header/>
    <Container>
      <main className='py-3'>
        Welcome
      </main>
    </Container>
    <Footer/>
    </>
  );
}

export default App;
