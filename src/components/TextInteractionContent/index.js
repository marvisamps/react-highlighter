import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as Actions from "../../actions";

import ButtonMarker from "../../styles/components/ButtonMarker";
import InteractionText from "../../styles/components/InteractionText";
import DescriptionInteractionText from "../../styles/components/DescriptionInteractionText";
import AreaButtonsInteraction from "../../styles/containers/AreaButtonsInteraction";

class TextInteractionContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: "yellow"
    };
  }

  setActive(property) {
    this.setState({
      active: property
    });
  }

  getSelectedText = () =>
    document.all
      ? document.getSelection.createRange().text
      : document.getSelection();

  insertHighlight() {
    const selection = this.getSelectedText();
    const selectionContent = selection.toString();

    const span = document.createElement("SPAN");
    span.className = this.props.visible.highlight;
    span.textContent = selectionContent;

    this.props.setContent(this.props.visible.highlight, selectionContent);

    const range = selection.getRangeAt(0);
    range.deleteContents();
    range.insertNode(span);
  }

  render() {
    const {
      setHighlight,
      visible: { text, highlight }
    } = this.props;

    const colors = ["yellow", "red", "green"];

    return (
      <Fragment>
        <DescriptionInteractionText description="Now select any color and mark the txt. Pick your color:" />
        <AreaButtonsInteraction>
          {colors.map(item => (
            <ButtonMarker
              background={item}
              onClick={() => {
                setHighlight(item);
                this.setActive(item);
              }}
              key={item}
              active={item === this.state.active}
            />
          ))}
        </AreaButtonsInteraction>
        <InteractionText
          className={`${highlight}Selection`}
          content={text}
          onInteract={() => this.insertHighlight()}
        />
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
)(TextInteractionContent);
