import 'firebase/firestore';
import { useContext } from 'react';
import { AuthPage } from './components/Auth';
import { HomePage } from './components/Home';

import { AuthContext } from './contexts/authContext';


function App() {

  const { status, userId } = useContext(AuthContext)

  if (status === 'checking') return <p className="loading"><span>Checking credentials, wait a moment...</span></p>
  return (
    <>
  {
            (status === 'authenticated' && userId)
                ? <HomePage />
                : <AuthPage />
        }
    </>
  )
}

export default App
