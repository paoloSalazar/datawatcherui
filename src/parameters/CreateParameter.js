import { Component } from "react";
import ParametersDataService from "../data/ParametersDataService";
import DatawatcherTypeError from "../datawatchertype/DatawatcherTypeError";
import DatawatcherTypeSuccess from "../datawatchertype/DatawatcherTypeSuccess";


class CreateParameter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: '',
            name: '',
            value: '',
            errorMessage: null,
            successMessage: null,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
    }

    componentDidMount () {

    }

    handleChange (e) {
        const itemName = e.target.name;
        const itemValue = e.target.value;

        this.setState({[itemName]: itemValue});
    }
    
    handleValidation() {
        let validForm = false;
        let level = this.state.level;
        let name = this.state.name;
        let value = this.state.value;
        

        this.setState({
            successMessage: null  
         });

        if (level === '') {
            validForm = false;
            this.setState({
               errorMessage: 'Level should not be empty'    
            });
        } else if (name === '') {
            validForm = false;
            this.setState({
               errorMessage: 'Name should not be empty'     
            });
        } else if (value === '') {
            validForm = false;
            this.setState({
               errorMessage: 'Value should not be empty'     
            });
        } else {
            validForm = true;
        }

        return validForm;
    }

    handleSubmit (e) {
        var parameterInfo = {
            level: this.state.level,
            name: this.state.name,
            value: this.state.value
        }
        if (this.handleValidation()) {
            ParametersDataService.create(parameterInfo)
            .then(response => {
                this.setState({
                    level: '',
                    name: '',
                    value: '',
                    errorMessage: null,
                    successMessage: 'Parameter ' + this.state.level +'_'+this.state.name +' has been registered'
                });
            })
            .catch(e => {
                this.setState({
                    errorMessage: 'Parameter ' + this.state.level +'_'+this.state.name + ' already exists.',
                    successMessage: null,
                    level: this.state.level,
                    name: this.state.name,
                    value: this.state.value
                });
            });
        }
        e.preventDefault();
    }

    render () {
        return (
            <div className="container">
                <h2 className="text-center">Create Parameter</h2>
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
                        <label htmlFor="level">Level:</label>
                        <input 
                            type="text" 
                            className="form-control bg-light" 
                            id="level" 
                            placeholder="Level" 
                            name="level" 
                            value={this.state.level}
                            onChange={this.handleChange}/>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="name">Name:</label>
                        <input 
                            type="text" 
                            className="form-control bg-light" 
                            id="name" 
                            placeholder="Name" 
                            name="name" 
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="value">Name:</label>
                        <input 
                            type="text" 
                            className="form-control bg-light" 
                            id="value" 
                            placeholder="Value" 
                            name="value" 
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <button type="submit" className="btn btn-dark">Create Parameter</button>
                    </div>
                </form>
            </div>
        );
    }
}


export default CreateParameter;