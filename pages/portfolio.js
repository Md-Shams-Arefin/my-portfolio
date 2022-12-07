import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="bg-[#0f1013] sm:p-[100px] pt-[20px]">
      <div>
        <h2 className="sm:text-[90px] text-[60px] text-[#333] text-center">
          Portfolio
        </h2>
        <p className="text-[#eb2f06] text-[30px] text-center">My Projects</p>
      </div>

      <div className="mb-[50px]">
        <ul className="flex justify-center space-x-4">
          <li className="text-[#F79F1F] hover:text-[#eb2f06] cursor-pointer">
            All
          </li>
          <li className="text-[#F79F1F] hover:text-[#eb2f06] cursor-pointer">
            Design
          </li>
          <li className="text-[#F79F1F] hover:text-[#eb2f06] cursor-pointer">
            Development
          </li>
        </ul>

      </div>
      <div className="grid sm:grid-cols-3 grid-cols-1 sm:mb-[30px] p-[20px]">
        <div className="sm:mb-[40px] mb-[20px]">
          <Image
            className="object-contain"
            src="/img/portfolio1.jpg"
            width={356}
            height={356}
          />
        </div>
        <div className="sm:mb-[40px] mb-[20px]">
          <Image
            className="object-contain "
            src="/img/portfolio2.jpg"
            width={356}
            height={356}
          />
        </div>
        <div className="sm:mb-[40px] mb-[20px]">
          <Image src="/img/portfolio3.jpg" width={356} height={356} />
        </div>

        <div className="sm:mb-[40px] mb-[20px]">
          <Image src="/img/portfolio4.jpg" width={356} height={356} />
        </div>
        <div className="sm:mb-[40px] mb-[20px]">
          <Image src="/img/portfolio5.jpg" width={356} height={356} />
        </div>
        <div className="sm:mb-[40px] mb-[20px]">
          <Image src="/img/portfolio6.jpg" width={356} height={356} />
        </div>
      </div>

      <div className="text-center mt-[10px] pb-[60px]">
        <a className="border-[2px] border-[#eb2f06] rounded-full p-[10px] hover:bg-[#eb2f06] hover:text-white cursor-pointer">
          More Projects
        </a>
      </div>

    </div>
  );
};

export default Portfolio;
