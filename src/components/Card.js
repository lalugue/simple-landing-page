import "./Card.css"

function Card(props) {
  return (
    <div className={props.classProp}>
      <h1>
        {props.text}
      </h1>
      <p>{props.subtext}</p>
    </div>
  );
}

export default Card;
