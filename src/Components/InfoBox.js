import React from 'react';

class InfoBox extends React.Component {
  render(){
    return(
      <React.Fragment>
        <section className="p-3 bg-dark text-white mt-3">
          <div className="container">
            <div className="row">
              <div className='col text-center'>
                <h5 className="display-4"> Best Chinese Food in Hyderabad</h5>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis metus turpis, sit amet dapibus erat vestibulum et. Duis sed interdum est. Vivamus ac dignissim arcu, eu sagittis augue. </p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default InfoBox;
