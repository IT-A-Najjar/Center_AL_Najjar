import React, {Component} from "react";
import axios from "axios";
import {toast} from "react-toastify";


class Create extends Component{
    constructor(props) {
        super(props);
        this.state = {
            productName: null,
            productPrice: null,
            productPhoto:null,
        };
    }

    inputProductName=(event)=>{
        this.setState({
            productName: event.target.value,

        });
        // console.log(this.state.productName);
    };

    inputProductPrice=(event)=>{
        this.setState({
            productPrice: event.target.value,
        })
    };
    inputProductPhoto=(event)=>{
        this.setState({
            productPhoto: event.target.value,
        })
    };

    storeProductData=()=>{
        console.log("ksjdhxk");
        axios.post('/store/product/data',{
            productName: this.state.productName,
            productPrice: this.state.productPrice,
            productPhoto: this.state.productPhoto,
        }).then((responce)=>{
            console.log(responce.data);
            toast.success("Product saved Successfully");

            setInterval(()=>{
                location.reload();
            },2500);
        })
    }

    render() {
        return (
            <>
                <div className="row text-right mb-3 pb-3">
                    <button className="btn btn-info text-right col-3 offset-md-9"
                        data-bs-toggle="modal"
                        data-bs-target="#modalCreate"
                    >
                        Add New Product
                    </button>
                </div>
                <div className="modal fade" id="modalCreate" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                                            id="productName"
                                            placeholder="Name Product"
                                            onChange={this.inputProductName}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="number"
                                            className="form-control mb-3"
                                            id="productPrice"
                                            placeholder="Price Product"
                                            onChange={this.inputProductPrice}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="file"
                                            className="form-control mb-3"
                                            id="productPhoto"
                                            placeholder="Photo Product"
                                            onChange={this.inputProductPhoto}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <input
                                    type="button"
                                    className="btn btn-info"
                                    value="Save"
                                    onClick={this.storeProductData}
                                />
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Create;
