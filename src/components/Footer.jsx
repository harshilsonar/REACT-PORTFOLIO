import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-6 border-t">
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-sm text-gray-600">© 2025 Your Name. All rights reserved.</p>
        <div className="flex gap-4 text-sm">
          <a href="https://github.com/harshilsonar" className="hover:text-blue-600"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/harshil-sonar-b32273341/" className="hover:text-blue-600"><FaLinkedin /> </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
