import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

class Totals extends React.Component {
  constructor(props) {
    super(props);
    this.state={
            
            }
  }
  
  render() {
    let total =(this.props.total).toFixed(2);
    let tax = (this.props.total * 0.15).toFixed(2);
    let totalIncTax = (+total + +tax).toFixed(2);
     let mystyle = {
    marginTop: "20px"
    };
    return (

      <div class="total" className="col-sm-6">
        <div style={{ "marginTop": "30px", "backgroundColor": "floralwhite", "padding": "10px" }}>
          <h3 className="row" style={{ fontWeight: 400 }}>
            <span className="col-3">Total Price::</span>
            <span className="col-3 text-right">Rs.{total}</span>
          </h3>
          <h3 className="row" style={{ fontWeight: 400 }}>
            <span className="col-3">Tax (15%):</span>
            <span className="col-3 text-right">Rs.{tax}</span>
          </h3>
          <h3 className="row" >
            <span className="col-3">Total inc tax:</span>
            <span className="col-3 text-right">Rs.{totalIncTax}</span>
          </h3>

        </div>
      
      </div>

    );
  }
}
export default Totals;