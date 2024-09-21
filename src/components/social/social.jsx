import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import './index.css';

function Social({ theme }) {
    return ( 
        <ul className={`list-unstyled d-flex column-gap-16 social ${theme === 'dark' ? '-dark' : ''}`}>
            <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="fs-20">
                    <FaFacebookF />
                </a>
            </li>
            <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="fs-20">
                    <FaTwitter />
                </a>
            </li>
            <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="fs-20">
                    <FaInstagram />
                </a>
            </li>
            <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="fs-20">
                    <FaLinkedinIn />
                </a>
            </li>
            <li>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="fs-20">
                    <FaPinterestP />
                </a>
            </li>
        </ul>
    );
}

export default Social;