import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from 'react-router-dom';
import Totals from "./Totals";
import About from "./components/About";
import Item1 from './images/itm1.jpg'
import Item2 from './images/itm2.jpg'
import Item3 from './images/itm3.jpg'
import Item4 from './images/item4.jpg'
import Item5 from './images/item5.jpg'
import Item6 from './images/itm6.jpg'
import Product from './Product'

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      search: "",
      value: "Sort",
      productList: [
        {
          name: "ARENNE BOWLING/S", price: 2231, albumId: 1,
          title: 'Latte Calf Smooth Leather Top Bag with Buckle ', img: Item1
        },
        {
          name: "ARENE VARENNE CROSSBODY/S", price: 2300, albumId: 1,
          title: 'Blush Glossy Elaphe Bag with Stone Buckle', img: Item3
        },
        {
          name: "YELLOW TOP HANDLE BAG", price: 2600, albumId: 1,
          title: 'Yellow Smooth Leather Bag with Buckle', img: Item4
        },
        {
          name: "MADELINE TOP HANDLE/S", price: 2100, albumId: 2,
          title: 'Latte Calf Leather BoBag with Silver JC Logo', img: Item2
        },
        {
          name: "CUOIO LEATHER TOTE E/W", price: 4156, albumId: 1,
          title: 'Cuoio Leather Tote Bag with JC Emblem', img: Item5
        },
        {
          name: "KHAKI SUEDO SHOULDER/S", price: 2456, albumId: 1,
          title: "Khaki Suede Bag with JC Emblem", img: Item6
        }
      ],
      productLists: "",
    };

    this.calculateTotal = this.calculateTotal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { value, productList } = this.state;

    switch (value) {
      case "Low price":
        this.setState({
          productList: productList.sort((a, b) => (a.price > b.price ? 1 : -1))
        });
        break;
      case "High price":
        this.setState({
          productList: productList.sort((a, b) => (b.price > a.price ? 1 : -1))
        });
        break;
      case "A-Z":
        this.setState({
          productList: productList.sort(
            (a, b) => ((a.name) > (b.name) ? 1 : -1)
          )
        });
        break;
      case "Z-A":
        this.setState({
          productList: productList.sort(
            (a, b) => ((b.name) > (a.name) ? 1 : -1)
          )
        });
        break;
      default:
        this.setState({
          productList: productList
        })
        break;
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ productList: this.state.productList });
    }, 1000);
  }

  calculateTotal(price) {
    this.setState({
      total: this.state.total + price
    });
    console.log("total", this.state.total);
  }

  onchange = e => {
    this.setState({ search: e.target.value });
  };
  renderCountry = product => {
    // const { search ,productList,value} = this.state;
     product.title.toLowerCase();
    return (
      <Product
        name={product.name}
        price={product.price}
        info={product.info}
        albumId={product.albumId}
        title={product.title}
        url={product.url}
        img={product.img}
        handleTotal={this.calculateTotal}
      />
    )
  }

  render() {
    const { search, productList, value } = this.state;
    const filtereditems = productList.filter(product => {
      return product.name.toLowerCase().indexOf(search.toLowerCase()) == ! -1;
    });

    var products = this.state.productList.map(function (product) {
      // return (
      /* <div> */ 
      /* <Product
          name={product.name}
          price={product.price}
          info={product.info}
          albumId={product.albumId}
          title={product.title}
          url={product.url}
          img={product.img}
          handleTotal={component.calculateTotal}
        />
       */
      // </div>
      // );
    });


    return (

      <div >
        <h1>Handbags</h1>

        <Router>
          <div className="App">
            <ul className="App-header">
              <button class="about">
                <Link to="./productlist">Back</Link>
              </button>
              <button class="about">
                <Link to="./about">About Us</Link>
              </button>
              {/* <button onclick class="about">
                <Link to="./login">Logout</Link>
              </button> */}
              {/* <button class="about" onClick={()=>{this.props.history.push('./login')}}>Logout</button>  */}
            </ul>
            <Switch>
              <Route exact path='/totals' component={Totals}></Route>
              <Route exact path='/about' component={About}></Route>
              {/* <Route exact path='/login' component={Login}></Route> */}
              <Route exact path='/' component={ProductList}></Route>
            </Switch>
          </div>
        </Router>

        <form onSubmit={this.handleSubmit} class="form">
          <select class="select" value={value} onChange={this.handleChange}>
            <option value="Sort">Sort</option>
            <option value="Low price">Low Price</option>
            <option value="High price">High Price</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
          <input type="submit" value="Filter" class="info" onSubmit={this.handleSubmit} />
        </form>
        <div class="col-md-2">
          <input type="search" onChange={this.onchange} class="form-control" placeholder="Search" />
        </div>
        <hr />
        <div className="row">
          {filtereditems.map(item => {
            return this.renderCountry(item);
          })}
        </div>
        <hr />
        {products}
        <Totals total={this.state.total} />
      </div>
    );
  }
}

export default withRouter(ProductList);