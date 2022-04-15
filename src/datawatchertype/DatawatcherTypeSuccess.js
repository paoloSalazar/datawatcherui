import React, {Component} from 'react';

class DatawatcherTypeSuccess extends Component {
    render() {
        const { theMessage } = this.props;

        return (
            <div className='col-12 alert alert-success px-3'>
                {theMessage}
            </div>
        );
    }
}

export default DatawatcherTypeSuccess;
