import banner from "./images/banner.svg"

const Profile = () => {
  return (
    <div className="flex flex-col justify-between sm:flex-row sm:py-10">
      <div className="flex flex-col max-w-xl p-4 sm:p-8 space-y-8">
        <h3 className="font-acuminpro text-md sm:text-4xl ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Amet tellus cras adipiscing enim eu. Risus pretium quam vulputate dignissim suspendisse in. Quam pellentesque nec nam aliquam sem.
        </h3>

        <hr className="opacity-0" />


        <h3 className="flex flex-row font-poppins text-4xl font-normal space-x-1">
          <a className="underline underline-offset-4" href="mailto:info@kullolabs.com">More Info</a><p className="text-slate-200"> // </p> <a className="underline underline-offset-4" href="https://github.com/KulloLabs">Github</a>
        </h3>

        <hr className="opacity-0" />

        <div className="flex flex-row space-x-1">
          <p className="font-poppins text-lg font-light">
            Maintained by <a className="underline underline-offset-4" href="https://www.instagram.com/luthfiquart/">@Luthfiquart</a>.
          </p>
        </div>
      </div>

      <div className="flex max-w-[100] p-4 sm:p-8">
        <img className="sm:w-fit" alt="" src={banner}/>
      </div>
  </div>
  )
}

export default Profile