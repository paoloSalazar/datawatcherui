import { Component } from "react";
import {Link} from '@reach/router';
import { BiFolderPlus } from "react-icons/bi";


class Parameter extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount () {

    }

    retrieveParameters () {
      
    }

    render () {
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
              {/* {this.state.datawatcherTypesList && (
                <DatawatcherTypeList datawatcherTypes={datawatcherTypesList} />
              )}   */}
          </div>    

          
      );
    }
}

export default Parameter;