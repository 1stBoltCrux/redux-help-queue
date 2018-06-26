import React from 'react';
import PropTypes from 'prop-types';

function Ticket(){
  return (
    <div>
      <style global jsx>{`
          div {
            background-color: red;
          }
        `}</style>
      <h3>3A - Thato & Haley</h3>
      <p><em>Firebase will not save record!</em></p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};


export default Ticket;
