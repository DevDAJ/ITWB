import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-800 text-white text-center py-2">
      <p>&copy; {new Date().getFullYear()} LemonadeFox. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
