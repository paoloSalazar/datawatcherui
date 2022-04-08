import React, { Component } from 'react';

class DatawatcherTypeList extends Component {
  constructor (props) {
    super(props);
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
