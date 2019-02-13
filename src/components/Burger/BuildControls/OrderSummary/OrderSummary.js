import React, { Component } from "react";
import Aux from "../../../../hoc/Aux/Aux";
import Button from "../../../UI/Button/Button";

class OrderSummary extends Component {
  // shouldComponentUpdate(nextProps) {}
  componentWillUpdate() {
    console.log("[OrderSummary] WillUpdate");
  }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {this.props.ingredients[igKey]}
      </li>
    ));
    return (
      <Aux>
        <h3>Yor Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total price: {this.props.price.toFixed(2)} Euro</strong>
        </p>
        <p>Continue to checkout?</p>
        <Button clicked={this.props.purchaseCanceled} btnType={"Danger"}>
          CANCEL
        </Button>
        <Button clicked={this.props.purchaseContinued} btnType={"Success"}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
