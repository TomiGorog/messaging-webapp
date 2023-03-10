import 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore' ;
import Signin from './components/Signin';
import Signup from './components/Signup';


function App() {

  return (
    <>
   <h1>Start</h1>
   <Signin />
   <Signup />
    </>
  )
}

export default App
