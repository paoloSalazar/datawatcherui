import { Component } from "react";
import {Link} from '@reach/router';
import { BiFolderPlus } from "react-icons/bi";

import DatawatcherTypesDataService from "../data/DatawatcherTypesDataService";
import DatawatcherTypeList from "./DatawatcherTypeList";

class DatawatcherType extends Component {
    constructor(props) {
        super(props);
        this.state = {
          datawatcherTypesList: []
        };
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

    render () {
      const datawatcherTypesList = this.state.datawatcherTypesList;
      return (
          <div className="container mt-4">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <h1 className="font-weight-light text-center">
                    Datawatcher Types
                    <Link to="/createdatawatchertype" title="Create Datawatcher Type">
                      <BiFolderPlus />
                    </Link>
                  </h1>
                </div>
              </div>
              {this.state.datawatcherTypesList && (
                <DatawatcherTypeList datawatcherTypes={datawatcherTypesList} />
              )}  
          </div>    

          
      );
    }
}

export default DatawatcherType;