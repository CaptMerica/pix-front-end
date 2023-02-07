// npm modules
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import QuestionsList from './pages/QuestionsList/QuestionList'
import QuestionDetails from './components/QuestionDetails/QuestionDetails'
import QuoteList from './pages/QuoteList/QuoteList'
import NewQuote from './pages/NewQuote/NewQuote'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as questionService from './services/questionService'
import * as quoteService from './services/quoteService'

// styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  const [questions, setQuestions] = useState([])
  const [quotes, setQuotes] = useState([])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  useEffect(() => {
    const fetchAllQuestions = async () => {
      const data = await questionService.index()
      setQuestions(data)
    }
    fetchAllQuestions()
  }, [])
  
  useEffect(() => {
    const fetchAllQuotes = async () => {
      const data = await quoteService.index()
      setQuotes(data)
    }
    fetchAllQuotes()
  }, [])

  const handleAddQuote = async (quoteData) => {
    const newQuote = await quoteService.create(quoteData)
    setQuotes([newQuote, ...quotes])
    navigate('/quotes')
  }

  const handleUpdateQuote = async (quoteData) => {
    const updatedQuote = await quoteService.update(quoteData)
    setQuotes(quotes.map((b) => quoteData._id === b._id ? updatedQuote : b))
    navigate('/quotesU')
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route 
          path="/quotes"
          element={<QuoteList
            quotes={quotes}
            user={user}
          />}
        />
        <Route 
          path="/quotes/new"
          element={
            <ProtectedRoute user={user}>
              <NewQuote handleAddQuote={handleAddQuote} />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/questions" 
          element={<QuestionsList 
          questions={questions} />} 
          />
          <Route 
          path="/questions/:id" 
          element={<QuestionDetails 
          questions={questions} />} 
          />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
