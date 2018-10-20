import React from 'react';
import PropTypes from 'prop-types';

class Profile extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { form } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    return <h1>Your Profile Page is here</h1>;
  }
}

Profile.propTypes = {
  form: PropTypes.object.isRequired,
};

export default Profile;
