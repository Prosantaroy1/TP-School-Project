import { BsFacebook, BsYoutube } from "react-icons/bs";
import { TiSocialLinkedin,TiSocialTwitter } from "react-icons/ti";


const Footer = () => {
    return (
        <div className="bg-[#151617]">
            <footer className="footer container mx-auto p-10 py-32   text-white"> 
               <div>
                  <p className="text-2xl"><span className="text-4xl font-bold">TP SCHOOL</span>
                  <br/>Providing reliable tech since 2022 </p>
                  <p className="flex gap-6 text-3xl pt-4 items-center">
                    <a><BsFacebook/></a>
                    <a><BsYoutube/></a>
                    <a><TiSocialLinkedin/></a>
                    <a><TiSocialTwitter/></a>
                  </p>
                </div>
                <nav className="text-2xl">
                  <h6 className="footer-title text-3xl font-bold">Services</h6> 
                  <a className="link  link-hover">Web Development</a>
                  <a className="link  link-hover">Design</a>
                  <a className="link  link-hover">Marketing</a>
                  <a className="link  link-hover">Advertisement</a>
                </nav> 
                <nav className="text-2xl">
                  <h6 className="footer-title text-3xl font-bold">Company</h6> 
                  <a className="link link-hover">About us</a>
                  <a className="link link-hover">Contact</a>
                  <a className="link link-hover">Jobs</a>
                  <a className="link link-hover">Press kit</a>
                </nav> 
                <nav className="text-2xl">
                  <h6 className="footer-title text-3xl font-bold">Legal</h6> 
                  <a className="link link-hover">Terms of use</a>
                  <a className="link link-hover">Privacy policy</a>
                  <a className="link link-hover">Cookie policy</a>
                </nav>
              </footer>
        </div>
    );
};

export default Footer;