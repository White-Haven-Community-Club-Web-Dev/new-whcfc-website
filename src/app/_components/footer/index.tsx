import { FaFacebook, FaInstagram } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <p>67 Prince William Ct,</p>
            <p>Scarborough, ON</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>(416) 558-1330</p>
            <p>fcwhitehaven@gmail.com</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow us</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61565831557507" target="_blank" rel="noopener noreferrer" 
                 className="text-2xl hover:text-blue-400">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/fcwhitehaven" target="_blank" rel="noopener noreferrer"
                 className="text-2xl hover:text-pink-400">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}