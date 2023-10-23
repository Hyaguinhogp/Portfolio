import { Toaster } from 'react-hot-toast';
import Routes from './routes';
import { Global } from './styles/global';
import Background from './components/Background';

function App() {
  return (
    <>
      <Routes />
      <Toaster />
      <Global />
    </>
  );
}

export default App;
