import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    console.log(this.props.monsters);
    console.log("render from cardlist");
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, email, id } = monster;
          return <Card name={name} email={email} id={id} />;
        })}
      </div>
    );
  }
}
export default CardList;
