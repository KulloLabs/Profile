import Header from "./components/Header"
import Footer from "./components/Footer"
import Profile from "./components/Profile"
import Teams from "./components/Teams"

const App = () => {
  return (
    <div className="flex flex-col">
        <Header/>
        <Profile/>
        <!--<Teams/> -->
        <Footer/>
    </div>
  )
}

export default App
