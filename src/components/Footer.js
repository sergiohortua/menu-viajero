// @flow
import * as React from "react";
import "../assets/components/Footer.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

type Props = {};
const Footer = (props: Props) => {
  return (
    <div className="App">
      <footer className="App-footer">
        <h3>Bogotá-Colombia </h3>
        <a target="_blank" href="https://api.whatsapp.com/send?phone=3125058310" >
          <WhatsAppIcon color='success' />
        </a>
      </footer>
    </div>
  );
};
export default Footer;
