import "./Header.css"

function Header(props) {
  return (
    <div className="Header">
      <h1>
        {props.text}
      </h1>
      <p>{props.subtext}</p>
    </div>
  );
}

export default Header;
