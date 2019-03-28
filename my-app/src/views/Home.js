import React from 'react';
import PropTypes from 'prop-types';
import Table from '../components/Table.js';

const Home = (props) => {
  return (
      <React.Fragment>
        <h1>Home</h1>
        <Table media={this.props.media}/>
      </React.Fragment>
  );
};

Home.propTypes = {
  picArray: PropTypes.array,
};

export default Home;