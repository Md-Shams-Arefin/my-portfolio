import Image from "next/image";
const About = () => {
  return (
    <div className="sm:mt-[50px] bg-[#1b1c1f] sm:p-[100px] grid grid-cols-1 sm:grid-cols-2">
      <div >
        <Image src="/img/about_dark.jpg" width={400} height={525}/>
      </div>
      
      <div className="pl-[20px] px-[20px] pb-[50px]">
        <h2 className="sm:text-[90px] text-[60px] text-[#333] text-center">About me</h2>
        <p className="text-[#eb2f06] text-[30px] text-center">i´m Arefin</p>
        <p className="text-[#ccc]">
          I am a programmer and designer of websites and mobile applications with
          more than five years of experience, as I possess the skill, creativity
          and innovation in my field of work, and this is what makes me
          distinguished from others and people love to deal with me
        </p>
        <div>
          <ul className="grid sm:grid-cols-2 grid-cols-1">
            <li className="pt-[10px] pb-[10px]"><span className="text-[#eb2f06]">Name: </span> Shamsul Arefin</li>
            <li className="pt-[10px] pb-[10px]"><span className="text-[#eb2f06]">Age: </span> 26</li>
            <li className="pt-[10px] pb-[10px]"><span className="text-[#eb2f06]">Email: </span> arefin.semicolonit@gmail.com</li>
            <li className="pt-[10px] pb-[10px]"><span className="text-[#eb2f06]">Address: </span> Jessore,Khulna,Bangladesh</li>
          </ul>
        </div>

        <div className="mt-[30px] sm:text-start text-center">
          <a className="border-[2px] border-[#eb2f06] rounded-full p-[10px] hover:bg-[#eb2f06] hover:text-white cursor-pointer">Download CV</a>
        </div>
      </div>
    </div>
  );
};

export default About;
