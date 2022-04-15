import { Component } from "react";

import DatawatcherTypesDataService from "../data/DatawatcherTypesDataService";
import DatawatchersDataService from "../data/DatawatchersDataService";
import DatawatcherTypeError from "../datawatchertype/DatawatcherTypeError";
import DatawatcherTypeSuccess from "../datawatchertype/DatawatcherTypeSuccess";

class CreateDatawatcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            watchername: '',
            customer: '',
            active: 0,
            watchertype: 1,
            errorMessage: null,
            successMessage: null,
            datawatcherTypesList: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleWatcherTypeChange = this.handleWatcherTypeChange.bind(this);
        this.handleActiveChange = this.handleActiveChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
        this.retrieveDatawatcherTypes = this.retrieveDatawatcherTypes.bind(this);
    }

    componentDidMount () {
        this.retrieveDatawatcherTypes();
    }

    retrieveDatawatcherTypes () {
        DatawatcherTypesDataService.getAll()
        .then(response => {
          this.setState({
            datawatcherTypesList: response.data
          });
        })
        .catch(e => {
          console.log(e);
        });
    }

    handleChange (e) {
        const itemName = e.target.name;
        const itemValue = e.target.value;

        this.setState({[itemName]: itemValue});
    }
    
    handleWatcherTypeChange (e) {
        this.setState({watchertype: e.target.value});
    }

    handleActiveChange (e) {
        this.setState({active: e.target.value});
    }

    handleValidation() {
        let validForm = false;
        let watchername = this.state.watchername;
        let customer = this.state.customer;

        this.setState({
            successMessage: null  
         });

        if (watchername === '') {
            validForm = false;
            this.setState({
               errorMessage: 'Watcher Name should not be empty'    
            });
        } else if (customer === '') {
            validForm = false;
            this.setState({
               errorMessage: 'Customer should not be empty'     
            });
        } else {
            validForm = true;
        }

        return validForm;
    }

    handleSubmit (e) {
        var datawatcherInfo = {
            watchername: this.state.watchername,
            customer: this.state.customer,
            active: this.state.active,
            watchertype: this.state.watchertype,
        }
        if (this.handleValidation()) {
            DatawatchersDataService.create(datawatcherInfo)
            .catch(e => {
                console.log(e);
                this.setState({
                    errorMessage: 'Watcher ' + this.state.watchername + ' already exists.'
                });
            });
            this.setState({
                watchername: '',
                customer: '',
                active: 0,
                watchertype: '',
                errorMessage: null,
                successMessage: 'Datawatcher ' + this.state.watchername + ' has been registered'
            });
        }
        e.preventDefault();
    }

    render () {
        const datawatcherTypesList = this.state.datawatcherTypesList;

        return (
            <div className="container">
                <h2 className="text-center">Create Datawatcher</h2>
                <form onSubmit={this.handleSubmit}>
                    {this.state.errorMessage !== null ? (
                        <DatawatcherTypeError
                            theMessage={this.state.errorMessage}
                        />
                    ): null}
                    {this.state.successMessage !== null ? (
                        <DatawatcherTypeSuccess theMessage={this.state.successMessage}/>
                    ): null}
                    <div className="form-group mt-3">
                        <label htmlFor="watchername">Watcher Name:</label>
                        <input 
                            type="text" 
                            className="form-control bg-light" 
                            id="watchername" 
                            placeholder="Watcher Name" 
                            name="watchername" 
                            value={this.state.watchername}
                            onChange={this.handleChange}/>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="customer">Customer:</label>
                        <input 
                            type="text" 
                            className="form-control bg-light" 
                            id="customer" 
                            placeholder="Customer" 
                            name="customer" 
                            value={this.state.customer}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="active">Active:</label>
                        <select 
                            id="active" 
                            name="active"
                            className="form-select" 
                            aria-label="Active field"
                            value={this.state.active}
                            onChange={this.handleActiveChange}
                            >
                            <option key="1" value="1">Yes</option>
                            <option key="0" value="0">No</option>
                        </select>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="watchertype">Watcher Type:</label>
                        <select 
                            className="form-select" 
                            id="watchertype" 
                            name="watchertype"
                            aria-label="Default select example"
                            onChange={this.handleWatcherTypeChange}
                            value={this.state.watchertype}
                            >
                                
                            {datawatcherTypesList.map(
                                item => {
                                    return(
                                        <option key={item.watchertypeid} value={item.watchertypeid}>{item.classname}</option>
                                    );
                                }
                            )}
                        </select>
                    </div>
                    <div className="form-group mt-3">
                        <button type="submit" className="btn btn-dark">Create Datawatcher</button>
                    </div>
                </form>
            </div>
        );
    }
}


export default CreateDatawatcher;