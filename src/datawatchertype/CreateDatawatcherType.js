import { Component } from "react";

import DatawatcherTypesDataService from "../data/DatawatcherTypesDataService";
import DatawatcherTypeError from "./DatawatcherTypeError";
import DatawatcherTypeSuccess from "./DatawatcherTypeSuccess";

class CreateDatawatcherType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shortname: '',
            classname: '',
            description: '',
            errorMessage: null,
            successMessage: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
    }

    handleChange (e) {
        const itemName = e.target.name;
        const itemValue = e.target.value;

        this.setState({[itemName]: itemValue});
    }

    handleValidation() {
        let validForm = false;
        let shortname = this.state.shortname;
        let className = this.state.classname;
        let description = this.state.description;

        this.setState({
            successMessage: null  
         });

        if (shortname === '') {
            validForm = false;
            this.setState({
               errorMessage: 'Short Name should not be empty'    
            });
        } else if (className === '') {
            validForm = false;
            this.setState({
               errorMessage: 'Class Name should not be empty'     
            });
        } else if (description === '') {
            validForm = false;
            this.setState({
               errorMessage: 'Description should not be empty'     
            });
        } else {
            validForm = true;
        }

        return validForm;
    }

    handleSubmit (e) {
        var datawatcherTypeInfo = {
            shortname: this.state.shortname,
            classname: this.state.classname,
            description: this.state.description
        }
        if (this.handleValidation()) {
            DatawatcherTypesDataService.create(datawatcherTypeInfo)
            .catch(e => {
                this.setState({
                    errorMessage: 'Class Name ' + this.state.classname + ' already exists.'
                });
            });
            this.setState({
                shortname: '',
                classname: '',
                description: '',
                errorMessage: null,
                successMessage: 'Datawatcher Type ' + this.state.classname + ' has been registered'
            });
        }
        
        e.preventDefault();
    }

    render () {
        return (
            <div className="container">
                <h2 className="text-center">Create Datawatcher Type</h2>
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
                        <label htmlFor="shortname">Short Name:</label>
                        <input 
                            type="text" 
                            className="form-control bg-light" 
                            id="shortname" 
                            placeholder="Short Name" 
                            name="shortname" 
                            value={this.state.shortname}
                            onChange={this.handleChange}/>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="classname">Class Name:</label>
                        <input 
                            type="text" 
                            className="form-control bg-light" 
                            id="classname" 
                            placeholder="Class Name" 
                            name="classname" 
                            value={this.state.classname}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="description">Description:</label>
                        <input 
                            type="text" 
                            className="form-control bg-light" 
                            id="description" 
                            placeholder="Description" 
                            name="description" 
                            value={this.state.description}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <button type="submit" className="btn btn-dark">Create Datawatcher Type</button>
                    </div>
                </form>
            </div>
        );
    }
}


export default CreateDatawatcherType;