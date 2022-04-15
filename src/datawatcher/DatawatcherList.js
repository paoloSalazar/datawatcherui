import React, { Component } from 'react';
import { GoTrashcan } from 'react-icons/go'
import DatawatcherTypesDataService from '../data/DatawatcherTypesDataService';
import { navigate } from '@reach/router'
import DatawatchersDataService from '../data/DatawatchersDataService';

class DatawatcherList extends Component {
  constructor (props) {
    super(props);
    this.deleteDatawatcher = this.deleteDatawatcher.bind(this);
    this.retrieveDatawatcherTypes = this.retrieveDatawatcherTypes.bind(this);
    
  }

  componentDidMount () {
    this.retrieveDatawatcherTypes();
  }

  deleteDatawatcher = (e, datawatcherid) => {
    e.preventDefault();
    DatawatchersDataService.delete(datawatcherid);
    navigate('/datawatchers');
  }

  retrieveDatawatcherTypes = () => {
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

  render() {
    const { datawatchers} = this.props;
    // let datawatcherTypes = this.state.datawatcherTypesList;
    let i = 1;
    const datawatchersList = datawatchers.map(item => {
      return(
        <tr key={item.watcherid}>
            <th scope="row">{i++}</th>
            <td>{item.watchername}</td>
            <td>{item.customer}</td>
            {/* <td>{item.watchertype}</td> */}
            
            <td>{this.state.datawatcherTypesList.filter(lt => lt.watchertypeid === item.watchertype)[0].classname}</td>
            <td>{item.active}</td>
            <td>
                <button 
                    className="btn btn-sm btn-outline-secondary"
                    title="Delete Datawatcher"
                    onClick={e => this.deleteDatawatcher(e, item.watcherid)}>
                    <GoTrashcan />
                </button>
            </td>
        </tr>
      );
    });

    return (
        <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Watcher Name</th>
                <th scope="col">Customer</th>
                <th scope="col">Watcher Type</th>
                <th scope="col">Active</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
                {datawatchersList}
            </tbody>
        </table>
    );
  }
}

export default DatawatcherList;
