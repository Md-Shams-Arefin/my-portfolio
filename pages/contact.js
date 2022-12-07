const Contact = () => {
  return (
    <div className=" bg-[#0f1013] sm:p-[100px] pt-[20px]">
      <div>
        <h2 className="sm:text-[90px] text-[60px] text-[#333] text-center">Contact</h2>
        <p className="text-[#eb2f06] text-[30px] text-center">Send Message</p>
      </div>
      <div className="m-[50px] grid grid-cols-1 sm:grid-cols-2">
        <div className="order-2 sm:order-1">
          <div>
            <h5 className="text-[20px] text-[#eb2f06]">Location</h5>
            <address className="text-[#aaa]">205 Fairview St. Rochester, NY 14606</address>
          </div>

          <div>
            <h5 className="text-[20px] text-[#eb2f06]">Email</h5>
            <a className="text-[#aaa]">arefin.semicolonit@gmail.com</a>
          </div>

          <div>
            <h5 className="text-[20px] text-[#eb2f06]">Phone</h5>
            <a className="text-[#aaa]">+2 651 976 468</a>
          </div>
          <div>
            <h5 className="text-[20px] text-[#eb2f06]">Social Links</h5>
            <div>
              <a className="text-[#aaa]">facebook</a>
              <a className="text-[#aaa]">twitter</a>
              <a className="text-[#aaa]">instagram</a>
              <a className="text-[#aaa]">linkedin</a>
            </div>
          </div>
        </div>

        <div className="order-1 sm:order-2">
          <form className="flex flex-col">
            <input placeholder="Name" className="bg-[#222] w-[100%] h-[45px] p-[8px] border-[3px] border-[#0f1013]"/>
            <input placeholder="Email" className="bg-[#222] w-[100%] h-[45px] p-[8px] border-[3px] border-[#0f1013]"/>
            <input placeholder="Message" className="bg-[#222] w-[100%] h-[85px] p-[8px] border-[3px] border-[#0f1013]"/>
            <div className="mt-[10px] text-center mb-[20px]">
               <button className="mt-[10px] border-[2px] border-[#eb2f06] rounded-full p-[10px] hover:bg-[#eb2f06] sm:w-[30%] w-[50%] hover:text-white  text-[#aaa]">Send Message</button>     
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
