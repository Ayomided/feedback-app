import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import { v4 as uuidv4 } from "uuid"
import AboutPage from "./pages/AboutPage"
import AboutIconLink from "./components/AboutIconLink"

function Home(){
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')){
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  return(
    <>
    <FeedbackForm handleAdd = {addFeedback}/>
    <FeedbackStats feedback={feedback} />
    <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    </>
  )
}

function App (){  

  return(
    <Router>
    <Header />
     <div className = 'container'>
      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route eaxct path='/about*' element={ <AboutPage/> } />
      </Routes>
      <AboutIconLink />
    </div> 
    </Router>
  )
}
export default App;
