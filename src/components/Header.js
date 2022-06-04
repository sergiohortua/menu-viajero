// @flow
import * as React from "react";
import "../assets/components/Header.css";
import logo from '../assets/img/WhatsApp Image 2022-06-01 at 7.05.57 PM.jpeg'

type Props = {};
const Header = (props: Props) => {
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src={logo} alt=""/>
      </header>
    </div>
  );
};
export default Header;
