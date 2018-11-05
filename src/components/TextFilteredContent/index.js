import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as Actions from "../../actions";

import Button from "../../styles/components/Button";
import DescriptionFilteredByColor from "../../styles/components/DescriptionFilteredByColor";

import AreaButtonsFilterByColor from "../../styles/containers/AreaButtonsFilterByColor";
import AreaFilteredText from "../../styles/containers/AreaFilteredText";

class TextFilteredContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeFilter: ""
    };
  }

  setActiveFilter(property) {
    this.setState({
      activeFilter: property
    });
  }

  render() {
    const {
      changeVisible,
      visible: { visible, selections }
    } = this.props;

    const colors = ["yellow", "red", "green"];

    return (
      <Fragment>
        <DescriptionFilteredByColor description="On the right there is the filter. If a user presses on red, all red text will appear in the box below:" />
        <AreaButtonsFilterByColor>
          {colors.map(item => (
            <Button
              background={item}
              onClick={() => {
                changeVisible(item);
                this.setActiveFilter(item);
              }}
              label={`Show ${item}`}
              key={item}
              activeFilter={item === this.state.activeFilter}
            />
          ))}
        </AreaButtonsFilterByColor>
        <AreaFilteredText>
          {visible && (
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {selections[visible].map(item => (
                <li
                  key={item}
                  style={{
                    backgroundColor:
                      (visible === "yellow" && "var(--color-primary)") ||
                      (visible === "red" && "var(--color-secondary)") ||
                      (visible === "green" && "var(--color-terciary)"),
                    color: "var(--color-text-default)",
                    padding: "5px",
                    marginBottom: "1px"
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </AreaFilteredText>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextFilteredContent);
