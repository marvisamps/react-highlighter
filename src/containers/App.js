import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as Actions from "../actions";

import TextArea from "../components/TextArea";
import Button from "../components/Button";
import ButtonMarker from "../components/ButtonMarker";
import InteractionText from "../components/InteractionText";
import DescriptionTextArea from "../components/DescriptionTextArea";
import DescriptionInteractionText from "../components/DescriptionInteractionText";

import AreaButtonsInteraction from "../containers/AreaButtonsInteraction";
import ContentTexts from "../containers/ContentTexts";

class App extends Component {
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
      changeVisible,
      setHighlight,
      changeText,
      visible: { visible, selections, text, highlight }
    } = this.props;

    const colors = ["yellow", "red", "green"];

    return (
      <Fragment>
        <ContentTexts>
          <DescriptionTextArea description="Hello, welcome to the our text marker. Please insert any text in the box below:" />
          <TextArea
            value={text}
            onChange={event => changeText(event.target.value)}
          />
          <DescriptionInteractionText description="Now select any color and mark the txt. Pick your color:" />
          <AreaButtonsInteraction>
            {colors.map(item => (
              <ButtonMarker
                background={item}
                onClick={() => setHighlight(item)}
                key={item}
              />
            ))}
          </AreaButtonsInteraction>
          <InteractionText
            className={`${highlight}Selection`}
            content={text}
            onInteract={() => this.insertHighlight()}
          />
        </ContentTexts>

        {colors.map(item => (
          <Button
            background={item}
            onClick={() => changeVisible(item)}
            label={`Show ${item}`}
            key={item}
          />
        ))}

        {visible && (
          <ul>
            {selections[visible].map(item => (
              <li key={item} style={{ backgroundColor: visible }}>
                {item}
              </li>
            ))}
          </ul>
        )}
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
)(App);
