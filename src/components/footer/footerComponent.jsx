import React from "react";
import "./footerStyle.css";

const FooterPanel = () => {
  return (
    <div>
      <div className="py-2 text-center footer-style">© David Saidon &nbsp;{new Date().getFullYear()}</div>
    </div>
  );
};

export default FooterPanel;