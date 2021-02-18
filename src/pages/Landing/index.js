import React, { Component } from 'react'
import API from "../../utils/API"
import "../../App"
import EmpCard from "../../components/EmpCard"


class index extends Component {

    state = {
        emp: [],
        filterEmp: [],
        empName: [],
        sortedNames: "descending",
        search: "",
    };

    componentDidMount() {
        API.getManyEmployees().then(results => {
            console.log(results.data.results)
            this.setState({
                emp: results.data.results,
                filterEmp: results.data.results
            });
        })
    }
    search = e => {

    }

    handleInputChange = event => {
        const filterText = event.target.value
        const filteredResult = this.state.emp.filter(input => {
            let people = Object.values(input).join("").toLowerCase()
            return people.indexOf(filterText.toLowerCase()) !== -1;
        });
        console.log(filteredResult)
        this.setState({
            filterEmp: filteredResult
        })
    }

    sortByName = () => {
        const employees = this.state.emp
        if (this.state.sortedNames === "descending") {
            employees.sort((a, b) => {
                if (a.name.first > b.name.first) {
                    return -1
                } else if (a.name.first < b.name.first) {
                    return 1
                } else {
                    return 0
                }
            })
            this.setState({
                empName: employees
            })
            this.setState({
                sortedNames: "ascending"
            })
        } else {
            employees.sort((a, b) => {
                if (a.name.first < b.name.first) {
                    return -1
                } else if (a.name.first > b.name.first) {
                    return 1
                } else {
                    return 0
                }
            })
            this.setState({
                empName: employees
            })
            this.setState({
                sortedNames: "descending"
            })
        }
    };


    render() {
        return (

            <div>

                <div className="navbar-expand-lg navbar-light bg-dark">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <button className="btn btn-success" onClick={this.sortByName}>Sort by First Name</button>
                                </li>
                            </ul>
                            <div>
                                <input type="text" name="search" placeholder="Search by Name" onChange={e => this.handleInputChange(e)} />
                            </div>

                        </div>




                    </div>
                </div>


                <div className="container">
                    <div className="jumbotron row">
                        <h1 className="display-4 text-center">Employee Tracker!</h1>
                    </div>
                    <div className="row row-cols-1 row-cols-md-4">
                        {this.state.filterEmp.map(e => <EmpCard data={e} key={e.cell} />)}
                    </div>
                </div>
            </div>

        )
    }
}

export default index