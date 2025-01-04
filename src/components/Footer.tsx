import { FaFacebook, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
    return (
      <footer className="bg-gray-950 text-gray-300 py-8 pt-20">
        {/* Top Section */}
        <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-2">
          {/* Contact Section */}
          <div>
            <h4 className="font-bold text-lg mb-2">Contact the Publisher</h4>
            <p className ="text-sm">mike@runo.com</p>
            <p className ="text-sm">+944 450 904 505</p>
          </div>
  
          {/* Explore Section */}
          <div>
            <h4 className="font-bold text-lg mb-2">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>About</li>
              <li>Partners</li>
              <li>Job Opportunities</li>
              <li>Advertise</li>
              <li>Membership</li>
            </ul>
          </div>
  
          {/* Headquarters Section */}
          <div>
            <h4 className="font-bold text-lg mb-2">Headquarter</h4>
            <p className ="text-sm">191 Middleville Road,</p>
            <p className ="text-sm">NY 1001, Sydney</p>
            <p className ="text-sm">Australia</p>
          </div>
  
          {/* Connections Section */}
          <div>
            <h4 className="font-bold text-lg mb-2">Connections</h4>
            <div className="flex space-x-4">
              {/* Replace # with actual links */}
              <a href="#"  className="hover:text-white"><FaFacebook />

              </a>
              <a href="#" className="hover:text-white"><FaTwitter />
              </a>
              <a href="#" className="hover:text-white"><FaYoutube />

              </a>
              <a href="#" className="hover:text-white"><FaPinterest />
              </a>
              <a href="#" className="hover:text-white"><RiInstagramFill />
              </a>
            </div>
          </div>
        </div>
  
        {/* Bottom Bar */}
        <div className="bg-gray-800 mt-8 py-4  ">
          <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center text-sm">
            <p>2021 | RUNO Publisher Studio</p>
            <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">
              Subscribe Now
            </button>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  