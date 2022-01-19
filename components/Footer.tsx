import { useState } from "react";

function Footer() {
  return (
    <div className=" bg-slate-100/90">
      <div className=" max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-lg p-12 gap-10  text-gray-500 ">
        <div className="footer-container">
          <h5 className="font-bold">ABOUT</h5>
          <p>How airbnb works</p>
          <p>Neswroom</p>
          <p>Investor</p>
          <p>Airbnb plus</p>
          <p>Airbnb luxe</p>
        </div>
        <div className="footer-container">
          <h5 className="font-bold">COMMUNITY</h5>
          <p>This is not real site</p>
          <p>Sike gatchi</p>
          <p>Just for fun</p>
          <p>Referrals</p>
        </div>
        <div className="footer-container">
          <h5 className="font-bold">HOST</h5>
          <p>From Milind Jamnekar</p>
          <p>Present</p>
          <p>a Airbnb clone</p>
        </div>
        <div className="footer-container">
          <h5 className="font-bold">SUPPORT</h5>
          <p>Help Center</p>
          <p>Trust and sefty</p>
          <p>This is easter egg 🥚</p>
          <p>Of this site</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
