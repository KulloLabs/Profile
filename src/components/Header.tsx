import logo from "./images/header.svg"
import github from "./images/github.svg"
import twitter from "./images/twitter.svg"
import email from "./images/email.svg"

const Header = () => {
  return (
    <header>
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="flex p-4 sm:p-8">
          <img src={logo}/>
        </div>

        <div className="flex flex-row space-x-6 p-4 sm:p-8 hover:cursor-pointer">
          <a href="mailto:info@kullolabs.com"><img src={email}/></a>
          <a href="https://github.com/KulloLabs" target="_blank"><img src={github}/></a>
          <a href="https://github.com/KulloLabs" target="_blank"><img src={twitter}/></a>
        </div>
      </div>
    </header>
  )
}

export default Header