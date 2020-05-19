import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 0,
    };
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
  }

  add() {
    this.setState({
      qty: this.state.qty + 1
    });
    this.props.handleTotal(this.props.price)
    console.log("handleTotaly", this.props.handleTotal);
    console.log("handle price", this.props.price);
    console.log("qty", this.state.qty)
  }

  subtract() {
    this.setState({
      qty: this.state.qty - 1
    });
    this.props.handleTotal(-this.props.price);
  }

  render() {

    return (
      <>
        <div class="new">
          <img src={this.props.img} alt={this.props.title} />
          <h5 class="add">{this.props.name}</h5>
          <h5 class="add">{this.props.title}: Rs.{this.props.price}</h5>
          <h5 class="add">Qty: {this.state.qty}</h5>
          <div className="row btn-toolbar">
            <p class="add"> Add To cart: <button className="btn btn-dark" onClick={this.add}>+1 </button>
              <button className="btn btn-dark" onClick={this.subtract} disabled={this.state.qty < 1}> -1</button></p>
          </div>
          <div >
          </div>
        </div>

      </>
    )
  }
}

export default Product;
