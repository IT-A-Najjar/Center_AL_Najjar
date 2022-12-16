import React, {Component} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


class Update extends Component{
    constructor(props) {
        super(props);
        this.state = {
            productName: null,
            productPrice: null,
        };
    }

    inputProductName=(event)=>{
        this.setState({
            productName: event.target.value,
        });
    };

    inputProductPrice=(event)=>{
      this.setState({
          productPrice: event.target.value,
      })
    };

    updateProductData=()=>{
        axios
            .post("/update/product/data",{
                productId: this.props.id,
                productName: this.state.productName,
                productPrice: this.state.productPrice,
            }).then(()=>{
                toast.success("employee Updated Successfully");
                setTimeout(()=>{
                    location.reload();
                },2500);
        });
    };

    static getDerivedStateFromProps(props, current_state) {
        let productUpdate = {
            productName: null,
            productPrice: null,
        };

        //updating data from input.

        if (
            current_state.productName &&
            current_state.productName !==
            props.productData.name
        ) {
            return null;
        }
        if (
            current_state.productPrice &&
            current_state.productPrice !==
            props.productData.price
        ) {
            return null;
        }

        //updating data from props below

        if (
            current_state.productName !==
            props.productData.name ||
            current_state.productName ===
            props.productData.name
        ) {
            productUpdate.productName =
                props.productData.name;
        }
        if (
            current_state.productPrice !==
            props.productData.price ||
            current_state.productPrice ===
            props.productData.price
        ) {
            productUpdate.productPrice =
                props.productData.price;
        }
        return productUpdate;
    }

    render() {
        return(
            <>
                <div className="modal fade" id={"up"+ this.props.id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form action="" className="form">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control mb-3"
                                            id="employeeName"
                                            value={this.state.productName ?? " "}
                                            onChange={this.inputProductName}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="number"
                                            className="form-control mb-3"
                                            id="employeeSalary"
                                            value={this.state.productPrice ?? " "}
                                            onChange={this.inputProductPrice}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary" value="Update" onClick={this.updateProductData}>submit</button>
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Update;
