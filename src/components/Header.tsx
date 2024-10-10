import "./Header.css"

function Header() {
  return (
    <header>
        <img src="/troll_face.png" alt="Troll Face" className="header-img"/>
        <h2 className="header-title">Meme Generator</h2>
        <h4 className="header-desc">React Course - Project 3</h4>
    </header>
  );
}

export default Header;