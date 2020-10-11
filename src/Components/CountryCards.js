import React from 'react';
import CountryCard from './CountryCard';


class CountryCards extends React.Component {
  render(){
    let countries = ['Malaysia', 'Bangkok', 'Dubai', 'Paris'];
    let imageLinks = [
      'https://images.unsplash.com/photo-1532288191429-2093e0783809?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      'https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      'https://images.unsplash.com/photo-1571586100119-25470b1b8bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    ]
    return (
      <React.Fragment>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-3">
                <CountryCard cardImg={imageLinks[0]} countryName={countries[1]}></CountryCard>
            </div>
            <div className="col-md-3">
                 <CountryCard cardImg={imageLinks[1]} countryName={countries[2]}></CountryCard>
            </div>
            <div className="col-md-3">
             <CountryCard cardImg={imageLinks[2]} countryName={countries[3]}></CountryCard>               
            </div>
            <div className="col-md-3">
                <CountryCard cardImg={imageLinks[3]} countryName={countries[0]}>
            </CountryCard>
            </div>
          </div>
        </div>      
      </React.Fragment>
    );
  }
}

export default CountryCards;