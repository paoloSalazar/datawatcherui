import React, { Component } from 'react';
import { GoTrashcan } from 'react-icons/go'
import ParametersDataService from '../data/ParametersDataService';
import { navigate } from '@reach/router'

class ParametersList extends Component {
  constructor (props) {
    super(props);
    this.deleteParameter = this.deleteParameter.bind(this);
  }

  deleteParameter = (e, level, name) => {
    e.preventDefault();
    ParametersDataService.delete(level, name);
    navigate('/parameters');
  }

  render() {
    const { parametersList } = this.props;
    let i = 1;
    const parametersListMap = parametersList.map(item => {
      return(
        <tr key={item.level+"_"+item.name}>
            <th scope="row">{i++}</th>
            <td>{item.level}</td>
            <td>{item.name}</td>
            <td>{item.value}</td>
            <td>
                <button 
                    className="btn btn-sm btn-outline-secondary"
                    title="Delete Parameter"
                    onClick={e => this.deleteParameter(e, item.level, item.name)}>
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
                <th scope="col">Level</th>
                <th scope="col">Name</th>
                <th scope="col">Value</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
                {parametersListMap}
            </tbody>
        </table>
    );
  }
}

export default ParametersList;
