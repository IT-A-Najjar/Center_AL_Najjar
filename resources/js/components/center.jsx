import React, {Component} from "react";
import  ReactDOM  from "react-dom";
import axios from "axios";
import Card from "./products/card";
import {ToastContainer} from "react-toastify";
import Create from "./products/model/Create";

class Center extends Component{
    constructor(props) {
        super(props);
        this.state={
            products: [],
        }
    }
    componentDidMount() {
        this.getProductsList();
    }
    getProductsList() {
        let set=this;
        axios("/get/products/list").then(function (response) {
            set.setState({
                products: response.data,
            });
        });
    };
    render() {
        return(
            <div className="container py-5">
                <div className="row text-center py-3">
                    <div className="col-lg-6 m-auto">
                        <ToastContainer />
                        <h1 className="h1">Featured Product</h1>
                        <p>
                            Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident.
                        </p>
                        <Create/>
                    </div>
                </div>
                <div className="row">
                    {this.state.products.map(function (x,i){
                        return <Card key={i} data={x} />
                    })}
                </div>
            </div>
        );
    }
}
export default Center;
