import React from 'react';

class CountryCard extends React.Component {
  render(){
    return(
        <React.Fragment>
          <div className='card'>
             <img src={this.props.cardImg} alt="" className='img-fluid'/>
              <div className='card-body'>
                <p className='h4'>{this.props.countryName}</p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula diam commodo, egestas dui eu, tincidunt augue.</p>
                <button className='btn btn-dark btn-sm'>Read More</button>
              </div>
             </div> 
        </React.Fragment>
    );
  }
}

export default CountryCard;