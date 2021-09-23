import logo from './logo.svg';
import './App.css';
import CssBaseLine from '@material-ui/core/CssBaseline'
import { Container } from '@material-ui/core';
import { HomePage } from './pages/homePage';
function App() {
  return (
    <>
      <CssBaseLine />
      <Container disableGutters={true} >
        <HomePage />
      </Container>
    </>
  );
}

export default App;
