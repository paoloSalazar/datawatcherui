import React, { Component } from 'react';
import { GoTrashcan } from 'react-icons/go'
import DatawatcherTypesDataService from "../data/DatawatcherTypesDataService";
import { navigate } from '@reach/router'

class DatawatcherTypeList extends Component {
  constructor (props) {
    super(props);
    this.deleteDatawatcherType = this.deleteDatawatcherType.bind(this);
  }

  deleteDatawatcherType = (e, datawatchertypeid) => {
    e.preventDefault();
    DatawatcherTypesDataService.delete(datawatchertypeid);
    navigate('/datawatchertypes');
  }

  render() {
    const { datawatcherTypes } = this.props;
    let i = 1;
    const datawatcherTypesList = datawatcherTypes.map(item => {
      return(
        <tr key={item.watchertypeid}>
            <th scope="row">{i++}</th>
            <td>{item.shortname}</td>
            <td>{item.classname}</td>
            <td>{item.description}</td>
            <td>
                <button 
                    className="btn btn-sm btn-outline-secondary"
                    title="Delete Datawatcher Type"
                    onClick={e => this.deleteDatawatcherType(e, item.watchertypeid)}>
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
                <th scope="col">Short Name</th>
                <th scope="col">Class Name</th>
                <th scope="col">Description</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
                {datawatcherTypesList}
            </tbody>
        </table>
    );
  }
}

export default DatawatcherTypeList;
