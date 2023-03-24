import 'firebase/firestore';
import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthPage } from './components/Auth';
import NewsHome from './components/NewsHome';
import ProtectedRoutes from './components/ProtectedRoutes';
import SavedArticles from './components/SavedArticles';
import { AuthContext } from './contexts/authContext';


function App() {

  const { status, userId } = useContext(AuthContext)

  if (status === 'checking') return <p className="loading"><span>Checking credentials, wait a moment...</span></p>

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={status === 'authenticated' && userId ? <NewsHome /> : <AuthPage />} />
        <Route element={<ProtectedRoutes />} >
          <Route path="/news" element={<NewsHome />} />
          <Route path="/saved" element={<SavedArticles />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
