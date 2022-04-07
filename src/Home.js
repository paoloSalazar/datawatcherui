import React, { Component } from 'react';

class Home extends Component {
  render() {

    const biggerLead = {
      fontSize: 1.4 + 'em',
      fontWeight: 200
    };

    return (
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-10 col-md-10 col-lg-8 col-xl-7">
            <div
              className="display-4 text-primary mt-3 mb-2"
              style={{
                fontSize: 2.8 + 'em'
              }}
            >
              Datawatcher APP
            </div>
            <p className="lead" style={biggerLead}>
              Datawatcher is a service that runs in background and monitor files.
            </p>

          </div>
        </div>
      </div>
    );
  }
}

export default Home;
