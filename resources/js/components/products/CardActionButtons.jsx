import React, {Component} from "react";
import axios from "axios";
import View from "./model/View";
import Update from "./model/Update";
import Delete from "./model/Delete";

class CardActionButtons extends Component{
    constructor(props) {
        super(props);
        this.state={
            name: null,
            price: null,
        }
    }

    getProductDetails=(id)=>{
        axios
            .post("/centeralnajjar/get/individual/product/details",{
                productId: id,
            })
            .then((response) => {
                this.setState({
                    name: response.data.name,
                    price: response.data.price,
                });
                console.log(response.data);
            });
    }

    render() {
        return(
            <>
                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target={"#v"+ this.props.id}
                            onClick={()=>{
                                this.getProductDetails(this.props.id);
                            }}
                    >
                        view
                    </button>
                    <View id={this.props.id} productData={this.state}/>
                    <button type="button" className="btn btn-danger" data-bs-toggle="modal"
                            data-bs-target={"#up"+ this.props.id}
                            onClick={()=>{
                                this.getProductDetails(this.props.id);
                            }}
                    >
                        update
                    </button>
                    <Update id={this.props.id} productData={this.state}/>
                    <button type="button" className="btn btn-secondary" data-bs-toggle="modal"
                            data-bs-target={"#de"+ this.props.id}
                            onClick={()=>{
                                this.getProductDetails(this.props.id);
                            }}
                    >
                        Delete
                    </button>
                    <Delete id={this.props.id} productData={this.state} />
                </div>
            </>
        );
    }
}

export default CardActionButtons;
