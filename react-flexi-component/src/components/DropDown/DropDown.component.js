import React from "react";
import PropTypes from "prop-types";

class DropDown extends React.Component {
  render() {
    return (
      <React.Fragment>
        <label>{this.props.label}</label>
        <select name={this.props.name} onChange={this.props.onChange}>
          {this.props.values.map(function(name, index) {
            return <option value={name}>{name}</option>;
          })}
        </select>
      </React.Fragment>
    );
  }
}

// Adding validation for props
DropDown.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired
};
export default DropDown;
