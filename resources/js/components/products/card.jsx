import React,{Component} from "react";
import CardActionButtons from "./CardActionButtons";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


class Card extends Component{
    constructor(props) {
            super(props);
    }

    render(){
        return(
            <>
                <div className="col-12 col-md-4 mb-4">
                    <div className="card h-100">
                        <a href="shop-single.html">
                            <img src={"/ProductImages/"+this.props.data.photo} className="card-img-top" alt="..."/>
                        </a>
                        <div className="card-body">
                            <ul className="list-unstyled d-flex justify-content-between">
                                <li>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-muted fa fa-star"></i>
                                    <i className="text-muted fa fa-star"></i>
                                </li>
                                <li className="text-muted text-right">${this.props.data.price}</li>
                            </ul>
                            <a href="shop-single.html" className="h2 text-decoration-none text-dark">{this.props.data.name}</a>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia
                                deserunt.
                            </p>
                            <CardActionButtons id={this.props.data.id}/>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Card;
