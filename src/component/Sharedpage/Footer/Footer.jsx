import { BsFacebook, BsYoutube } from "react-icons/bs";
import { TiSocialLinkedin,TiSocialTwitter } from "react-icons/ti";


const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-[#151617] text-white"> 
               <div>
                  <p className="text-xl"><span className="text-3xl font-bold">TP SCHOOL</span>
                  <br/>Providing reliable tech since 2022 </p>
                  <p className="flex gap-6 text-3xl pt-4 items-center">
                    <a><BsFacebook/></a>
                    <a><BsYoutube/></a>
                    <a><TiSocialLinkedin/></a>
                    <a><TiSocialTwitter/></a>
                  </p>
                </div>
                <nav>
                  <h6 className="footer-title text-2xl font-bold">Services</h6> 
                  <a className="link  link-hover">Web Development</a>
                  <a className="link  link-hover">Design</a>
                  <a className="link  link-hover">Marketing</a>
                  <a className="link  link-hover">Advertisement</a>
                </nav> 
                <nav>
                  <h6 className="footer-title text-2xl font-bold">Company</h6> 
                  <a className="link link-hover">About us</a>
                  <a className="link link-hover">Contact</a>
                  <a className="link link-hover">Jobs</a>
                  <a className="link link-hover">Press kit</a>
                </nav> 
                <nav>
                  <h6 className="footer-title text-2xl font-bold">Legal</h6> 
                  <a className="link link-hover">Terms of use</a>
                  <a className="link link-hover">Privacy policy</a>
                  <a className="link link-hover">Cookie policy</a>
                </nav>
              </footer>
        </div>
    );
};

export default Footer;