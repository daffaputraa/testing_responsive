import { arrow } from "../assets"

const ButtonPrimary = () => {
  return (
    <button className="bg-blue-500 font-poppins text-white text-base font-medium px-[30px] py-[15px] flex items-center gap-2">
        Try For Free
        <img src={arrow} alt="" srcset="" />
    </button>
  )
}

export default ButtonPrimary