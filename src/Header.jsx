import React, {useState,useEffect,useRef} from "react";
function Header () {
  const [menu, setMenu] = useState([]);
  const menuRef = useRef(null);

  const handleMenu = (event) => {
    if (menu.length === 0) {
      event.stopPropagation();
      setMenu(["Home", "About", "Contact us"]);
    } else {
      setMenu([]);
    }
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenu([]);
    }
  };

  useEffect(() => {
    if (menu.length > 0) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [menu]);
  return(
    <>
    <header>
      <div className="inner-header">
          <div className="logo-container"><a href="#">my-logo-here</a></div>
        <div className="navContainer">
          <ul className="nav">
          <a href="#"><li>Home</li></a>
          <a href="#"><li>About</li></a>
          <a href="#"><li>Contact us</li></a>
          </ul>
        </div>
        <div className="hamMenu">
            <div onClick={handleMenu}>
              <hr />
              <hr />
              <hr />
            </div>
        </div>
    </div>
    </header>
    <ol className="menuItems" ref={menuRef}>{  
    menu.map((item,index)=><a href="#"><li key={index} className="menuItem">{item}</li></a>)}</ol>
    </>
  )

}

export default Header