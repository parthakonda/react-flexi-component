import React from "react";
import PropTypes from "prop-types";

class TextField extends React.Component {
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <label>{this.props.name}</label>
        <input
          type="text"
          name={this.props.name}
          onChange={this.props.onChange}
        ></input>
      </React.Fragment>
    );
  }
}

// Adding validation for props
TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};
export default TextField;
