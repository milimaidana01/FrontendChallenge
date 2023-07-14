import "./styles.css";


function Header() {
  return (
    <div className="header">
        <div className="headerLeft">
        <div>Municipio</div>
        <img className="arrow" src="https://i.ibb.co/87W3DMp/Polygon-2.png"/>
        <div>Oganismo</div>
        </div>
        <div className="headerRight">
        <img className="arrow" src="https://i.ibb.co/87W3DMp/Polygon-2.png"/>
        <img className="arrow" src="https://i.ibb.co/87W3DMp/Polygon-2.png"/>
        <img className="arrow" src="https://i.ibb.co/87W3DMp/Polygon-2.png"/>
        <img className="arrow" src="https://i.ibb.co/87W3DMp/Polygon-2.png"/>
        </div>
    </div>
  );
}

export default Header;
