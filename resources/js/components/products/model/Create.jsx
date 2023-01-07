import React, {Component} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import Card from "../card";


class Create extends Component{
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            type: [],
            productName: null,
            productPrice: null,
            productItem: null,
            productType: null,
            productPhoto:null,

        };
    }
    componentDidMount() {
        this.getItemstList();
        this.getTypeList();
    }
    getItemstList() {
        let set=this;
        axios("/centeralnajjar/get/items/list").then(function (response) {
            set.setState({
                items: response.data,
            });
        });
    };
    getTypeList() {
        let set=this;
        axios("/centeralnajjar/get/types/list").then(function (response) {
            set.setState({
                type: response.data,
            });
        });
    };

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
    inputProductItem=(event)=>{
        this.setState({
            productItem: event.target.value,
        })
    }
    inputProductType=(event)=>{
        this.setState({
            productType: event.target.value,
        })
        console.log(event.target.value)
    }
    inputProductPhoto=(event)=>{
        this.setState({
            productPhoto: event.target.files[0],
        })
    };


    storeProductData=(e)=>{
        e.preventDefault();
        const url ='/centeralnajjar/store/product/data'
        const data=new FormData();
        data.append('productName',this.state.productName);
        data.append('productPrice',this.state.productPrice);
        data.append('productItem',this.state.productItem);
        data.append('productType',this.state.productType);
        data.append('productPhoto',this.state.productPhoto);
        axios.post(url,data).then((response)=>{
            console.log(response.data);
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
                                <form action="" className="form" onSubmit={this.storeProductData}>
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
                                        <select
                                            className="form-control mb-3"
                                            id="productItem"
                                            placeholder="Item Product"
                                            onChange={this.inputProductItem}
                                        >
                                            <option>
                                                اختر الصنف
                                            </option>
                                            {this.state.items.map(function (data,id){
                                                return <>
                                                    <option value={data.id}>
                                                        {data.name_item}
                                                    </option>
                                                </>
                                            })}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <select
                                            className="form-control mb-3"
                                            id="productType"
                                            placeholder="Type Product"
                                            onChange={this.inputProductType}
                                        >
                                            <option>
                                                اختر النوع
                                            </option>
                                            {this.state.type.map(function (data,id){
                                                return <>
                                                    <option value={data.id}>
                                                        {data.name_type}
                                                    </option>
                                                </>
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-auto">
                                        <input type="file"
                                               className="form-control"
                                               onChange={this.inputProductPhoto}
                                        />
                                    </div>
                                    <div className="modal-footer">
                                        <input
                                            type="submit"
                                            className="btn btn-info"
                                            value="Save"

                                        />
                                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Create;
