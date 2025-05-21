import React, { useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";





function Navbar() {
  const navaitems = [
  'Nexus', 'Vault',  'Prolouge', 'About', 'Contact'
]
const toggleAudioIndicator = () => {}
  const audioElementRef = useRef(null) 
  const navContainerRef = useRef(null);
  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 z-50 top-4 h-16 border-0 transition-all duration-700 sm:inset-x-6 "
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2 ">
        <nav className="flex size-full items-center justify-between p-4 ">
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="" className="w-10" />
            <Button
              id="product-button"
              title="products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex items-center hidden justify-center gap-1 "
            />
          </div>
          <div className="flex h-full items-center ">
            <div className="hidden md:block ">
              {navaitems.map((item)=>(
                <a key={item} className="nav-hover-btn" href={`#${item.toLowerCase()}`} >{item}</a>
              ))}
            </div>
            <button onClick={toggleAudioIndicator}  className="ml-10 flex items-center space-x-0.5 ">
              <audio ref={audioElementRef} className="hidden " src="/audio/loop/mp3"></audio>
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
