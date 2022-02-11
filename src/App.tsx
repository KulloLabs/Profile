import Header from "./components/Header"
import Footer from "./components/Footer"
import Profile from "./components/Profile"

const App = () => {
  return (
    <div className="flex flex-col">
        <Header/>
        <Profile/>
        <Footer/>
    </div>
  )
}

export default App