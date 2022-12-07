import Link from "next/link";

const Navbar = () => {
  return ( 
    <div className="flex justify-between items-center p-[20px] bg-[#1b1c1f] ">
      <div className="text-[40px]">
        <Link href='/'><a className="text-[#eb2f06]">Arefin</a></Link>
      </div>

      <nav className="flex sm:justify-center space-x-4 ">
        <Link href='/'><a className="hover:text-[#eb2f06]">Home</a></Link>
        <Link href='#about'><a className="hover:text-[#eb2f06]">About</a></Link>
        <Link href='#services'><a className="hover:text-[#eb2f06]">Services</a></Link>
        <Link href='#resume'><a className="hover:text-[#eb2f06]">Resume</a></Link>
        <Link href='#portfolio'><a className="hover:text-[#eb2f06]">Portfolio</a></Link>
        <Link href='#reviews'><a className="hover:text-[#eb2f06]">Reviews</a></Link>
        <Link href='#contact'><a className="hover:text-[#eb2f06]">Contact</a></Link>
      </nav>
    </div>
   );
}
 
export default Navbar;