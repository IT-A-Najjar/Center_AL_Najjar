import React, {Component} from "react";
import axios from "axios";
import {toast} from "react-toastify";

class Delete extends Component{
    constructor(props) {
        super(props);

    }

    deleteProductData = (product) => {
        axios.delete('/centeralnajjar/delete/product/data/' + product).then(()=>{
            toast.error("product Delete successfully");

            setTimeout(()=>{
                location.reload();
            },2500)
        })
    }

    render() {
        return (
            <>
                <div className="modal fade" id={"de"+ this.props.id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <h3>هل انت متاكد من الحذف</h3>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal"
                                    onClick={() => {
                                        this.deleteProductData(this.props.id);
                                    }}
                                >
                                    Yes
                                </button>
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Delete;
