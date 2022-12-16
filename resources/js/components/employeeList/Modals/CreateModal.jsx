import axios from "axios";
import React, { Component } from "react";
import { toast } from "react-toastify";

class CreateModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employeeName: null,
            employeeSalary: null,
        };
    }

    //update employee name state
    inputEmployeeName = (event) => {
        this.setState({
            employeeName: event.target.value,
        });
    };

    //update employee salary state
    inputEmployeeSalary = (event) => {
        this.setState({
            employeeSalary: event.target.value,
        });
    };

    //storing
    storeEmployeeData = () => {
        axios
            .post('store/employee/data', {
                employeeName: this.employeeName,
                employeeSalary: this.employeeSalary,
            })
            .then(() => {
                toast.success("employee is add successfully");
                setTimeout(() => {
                    location.reload();
                }, 2500);
            });
    };

    render() {
        return (
            <>
                <div className="row text-right md-3 pd-3">
                    <button
                        className="btn btn-info text-right col-3 offset-md-9"
                        data-toggle="modal"
                        data-target="#creata"
                    >
                        Add New Employee
                    </button>
                </div>
                <div
                    className="modal fade"
                    id="creata"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5
                                    className="modal-title"
                                    id="exampleModalLabel"
                                >
                                    Employee Details
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form action="" className="form">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control mb-3"
                                            id="employeeName"
                                            placeholder="name employee"
                                            onChange={this.inputEmployeeName}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="number"
                                            className="form-control mb-3 pd-3"
                                            id="employeeSalary"
                                            placeholder="salary"
                                            onChange={this.inputEmployeeSalary}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <input
                                    className=" btn btn-primary"
                                    type="button"
                                    value="save"
                                    onClick={this.storeEmployeeData}
                                />
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CreateModal;
