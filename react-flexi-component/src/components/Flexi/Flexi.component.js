import React from "react";
import PropTypes from "prop-types";

import { DropDown, TextField } from "..";

class Flexi extends React.Component {
  constructor(props) {
    super(props);
    this.data = {}; // For tempory storage
  }

  onSubmit = () => {
    this.props.onSubmit(this.data); // dont edit this line
  };

  handleOnChange = key => {
    // For updating the data dynamically
    return event => {
      this.data[key] = event.target.value;
    };
  };

  handleComponentRender(item) {
    let self = this; // FYI: for closure parent object in callback
    let componentToBeRendered;
    item.onChange = this.handleOnChange(item.name);
    switch (item.type.toLowerCase()) {
      case "textfield":
        componentToBeRendered = <TextField {...item}></TextField>;
        break;
      case "dropdown":
        componentToBeRendered = <DropDown {...item}></DropDown>;
        break;
      // FYI: we can extend further with more component types here
      // case "anothercomponent":
      //   othercomponent
      default:
        componentToBeRendered = <React.Fragment></React.Fragment>;
    }

    return (
      <React.Fragment>
        {componentToBeRendered}
        {item.children && item.children.items ? (
          <React.Fragment>
            {item.children.items.map((nestedItem, index) => {
              this.data[nestedItem.name] = "";
              let nestedComponent = self.handleComponentRender(nestedItem);
              return nestedComponent;
            })}
          </React.Fragment>
        ) : (
          <React.Fragment></React.Fragment>
        )}
      </React.Fragment>
    );
  }

  render() {
    return (
      <form>
        {Array.isArray(this.props.config.items)
          ? this.props.config.items.map((item, index) => {
              this.data[item.name] = "";
              let componentToBeRendered = this.handleComponentRender(item);
              return componentToBeRendered;
            })
          : ""}
        <button type="button" onClick={this.onSubmit}>
          Submit
        </button>
      </form>
    );
  }
}

// Adding validation for props
// Note: Since it is `FlexiConfig` we don't need to do
// validation full in here (seperation of concerns)
Flexi.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  config: PropTypes.object.isRequired
};

export default Flexi;
