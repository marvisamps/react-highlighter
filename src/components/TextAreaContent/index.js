import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { changeText } from "../../actions";

import DescriptionTextArea from "../../styles/components/DescriptionTextArea";
import TextArea from "../../styles/components/TextArea";

class TextAreaContent extends Component {
  render() {
    const {
      changeText,
      visible: { text }
    } = this.props;

    return (
      <Fragment>
        <DescriptionTextArea description="Hello, welcome to the highlighter. Please insert any text in the box below:" />
        <TextArea
          value={text}
          onChange={event => changeText(event.target.value)}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(changeText, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextAreaContent);
