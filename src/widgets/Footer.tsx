import {  } from 'react';

import './Footer.css'

const Footer: React.FC = () => {
  return (
    <footer className="Footer">
        <p>&copy; 2027 Federal Investigation Bureau. All rights reserved.</p>
        <div>
            <a href="#" className="social-link">Privacy Policy</a>
            <a href="#" className="social-link">Terms of Service</a>
            <a href="#" className="social-link">Contact Us</a>
        </div>
    </footer>
  );
}
export default Footer;