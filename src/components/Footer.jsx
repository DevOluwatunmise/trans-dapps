import Logo from "../assets/logo.png";
import Image from "next/image";

const Footer = () => {

  const date = new Date()

  const year = date.getFullYear()

  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
      {/* <Image */}
        {/* // src={logo}alt='Hayzed logo'className='w-32 cursor-pointer' width={205} height={25}/> */}
        <Image src={Logo} alt="logo" className="w-32 cursor-pointer width={205} height={25}" />
        </div>
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
          <p className="text-white text-base text-center mx-2 cursor-pointer">
            Wallet
          </p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">
            Privacy
          </p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">
            Explorer
          </p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">
            Send
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col mt-5">
        <p className="text-white text-sm text-center">Come join us</p>
        <p className="text-white text-sm text-center">tunmisedare@gmail.com</p>
      </div>
      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />
      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
        <p className="text-white text-sm text-center">&#169;Tumins-Ng {year} </p>
        <p className="text-white text-sm text-center">All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;