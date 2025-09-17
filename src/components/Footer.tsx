import React from 'react';

const Footer = () => {
    return (
        <footer className="footer flex justify-between items-center m-10">
            <p>&copy; {new Date().getFullYear()} Konstantina Freri. All rights reserved.</p>
            <p>Designed and developed by ME :)</p>
        </footer>
    );
}

export default Footer;