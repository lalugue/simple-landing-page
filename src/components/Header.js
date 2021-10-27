function Header(props) {
  return (
    <div>
      <h1>
        {props.text}
      </h1>
      <p>{props.subtext}</p>
    </div>
  );
}

export default Header;
