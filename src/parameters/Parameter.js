import { Component } from "react";
import {Link} from '@reach/router';
import { BiFolderPlus } from "react-icons/bi";
import ParametersDataService from "../data/ParametersDataService";
import ParametersList from "./ParametersList";


class Parameter extends Component {
    constructor(props) {
        super(props);
        this.state = {
          parametersList: []
        };
    }

    componentDidMount () {
      this.retrieveParameters();
    }

    retrieveParameters () {
      ParametersDataService.getAll()
      .then(response => {
        this.setState({
          parametersList: response.data
        });
      })
      .catch(e => {
        console.log(e);
      });
    }

    render () {
      const parametersList = this.state.parametersList;
      return (
          <div className="container mt-4">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <h1 className="font-weight-light text-center">
                    Parameters
                    <Link to="/createparameter" title="Create Parameter">
                      <BiFolderPlus />
                    </Link>
                  </h1>
                </div>
              </div>
              {this.state.parametersList && (
                <ParametersList parametersList={parametersList} />
              )}  
          </div>    

          
      );
    }
}

export default Parameter;