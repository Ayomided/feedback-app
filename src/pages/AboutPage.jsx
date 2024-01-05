import Card from "../components/shared/Card"
import { Route, Routes } from "react-router-dom"
import { FaHeart } from "react-icons/fa"

function AboutPage() {
  return (
    <Card>
        <div className="about">
        <h1>About This Project</h1>
        <p>
            This is a React app to leave feedback for a product on our website
        </p>
        <Routes>
            <Route path='/withlove' element={<p>
                Made with <FaHeart size={12}/> in <i>London</i>. 
                <p>v1.0.0</p>
            </p>}/>
        </Routes>
        </div>
    </Card>
  )
}

export default AboutPage