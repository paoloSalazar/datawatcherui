import { Link } from "@reach/router";
import { Component } from "react";
import { BiFolderPlus } from "react-icons/bi";

import DatawatchersDataService from "../data/DatawatchersDataService";
import DatawatcherTypesDataService from "../data/DatawatcherTypesDataService";
import DatawatcherList from "./DatawatcherList";


class Datawatcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
          datawatchersList: [],
          datawatcherTypesList: []
        };
    }

    componentDidMount () {
        this.retrieveDatawatchers();
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

    retrieveDatawatchers () {
        DatawatchersDataService.getAll()
        .then(response => {
          this.setState({
            datawatchersList: response.data
          });
        })
        .catch(e => {
          console.log(e);
        });
    }

    render () {
        const datawatchersList = this.state.datawatchersList;
        const datawatcherTypesList = this.state.datawatcherTypesList;
        return (
            <div className="container mt-4">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <h1 className="font-weight-light text-center">
                      Datawatchers
                      <Link to="/createdatawatcher" title="Create Datawatcher">
                        <BiFolderPlus />
                      </Link>
                    </h1>
                  </div>
                </div> 
                {this.state.datawatchersList && (
                    <DatawatcherList datawatchers={datawatchersList} datawatcherTypes={datawatcherTypesList} />
                )}  
            </div>    
  
            
        );
      }

}

export default Datawatcher;