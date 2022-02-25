import Counter from "./counter/Counter";
import "./Fruit.css";
function Fruit(props) {
  const {img, title, uom, perUnit, packSize, total} = props.fruit
  return (
      <div className="fruit">
      <div className="rasm">
        <img src={img} alt={title} />
      </div>
      <div className="details">
        <div className="top">
          <h3>{title}</h3>
          <Counter/>
        </div>
        <div className="bottom">
          <div>
            <p className="title">UOM</p>
            <p className="value">{uom}</p>
          </div>
          <div>
            <p className="title">PACK SIZE</p>
            <p className="value">{packSize}</p>
          </div>
          <div>
            <p className="title">PER UNIT</p>
            <p className="value">{perUnit}</p>
          </div>
          <div>
            <p className="title">TOTAL</p>
            <p className="value">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fruit;
