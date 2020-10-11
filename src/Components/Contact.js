import React from 'react';

class Contact extends React.Component {
  render(){
    return(
     <React.Fragment>
      <div class="container m-3">
        <div class="row">
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1516405494317!2d78.45152401487655!3d17.404508888068392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97406a8572c3%3A0xa02e681b1a4add23!2sThe%20Golkonda%20Hotel!5e0!3m2!1sen!2sin!4v1602449625058!5m2!1sen!2sin" width="500" height="350" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
              </div>
            </div>
          </div>
          <div class="col-md-6"></div>
        </div>
      </div>
     </React.Fragment>
    );
  }
}

export default Contact;