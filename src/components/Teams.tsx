import avatar from "./images/avatar.png"
import twitter from "./images/twitterwhite.svg"


const TeamList = [
  {
    Name: "Luthfi Quartziosa Sulistiyo",
    Role: "Project Management"
  },
  {
    Name: "Akiid Nasaka",
    Role: "Project Operation"
  },
  {
    Name: "Muhammad Azhar",
    Role: "Project Finance"
  }
]

const TeamsItems = (): any => {
  return (
    TeamList.map(item =>
      <li className="flec w-64 p-2">
        <div className="flex flex-col text-center items-center p-4 rounded-xl border-black bg-[#283043]">
          <img className="top-0 w-32" src={avatar} alt="" />
          <h3 className="underline font-poppins text-gray-200 pt-4">{item.Name}</h3>
          <p className="font-poppins text-sm font-thin text-gray-200 pt-1">{item.Role}</p>
          <a className="pt-4" href="https://github.com/KulloLabs"><img className="fill-white" alt="" src={twitter}/></a>
        </div>
      </li>

      )
  )
}


const Teams = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <h3 className="underline underline-offset-1 font-poppins text-4xl font-normal" >Teams</h3>

        <section className="">
          <ul className="flex flex-col sm:flex-row justify-center items-center">
            <TeamsItems/>
          </ul>
        </section>
    </div>
  )
}

export default Teams