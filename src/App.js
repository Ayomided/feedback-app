import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./pages/AboutPage"
import { FeedbackProvider } from "./context/FeedbackContext"
import AboutIconLink from "./components/AboutIconLink"

function Home(){
  return(
    <>
    <FeedbackForm />
    <FeedbackStats />
    <FeedbackList />
    </>
  )
}

function App (){  

  return(
    <FeedbackProvider>
    <Router>
    <Header />
     <div className = 'container'>
      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route eaxct path='/about/*' element={ <AboutPage/> } />
      </Routes>
      <AboutIconLink />
    </div> 
    </Router>
    </FeedbackProvider>
  )
}
export default App;

// TODO: Update README with learning so far with this app
// adding it to chore