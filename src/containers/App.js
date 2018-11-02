
import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as Actions from "../actions";

import TextArea from "../components/TextArea/";
import Button from "../components/Button/";
import InteractionText from "../components/InteractionText/";

import "../App.css";

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
      setText,
      visible: { visible, selections, text, highlight }
    } = this.props;

    const colors = ["yellow", "red", "green"];

    return (
      <Fragment>
        <TextArea
          value={text}
          onChange={event => setText(event.target.value)}
        />

        {colors.map(item => (
          <Button
            background={item}
            onClick={() => setHighlight(item)}
            label={item}
            key={item}
          />
        ))}

        <InteractionText
          className={`${highlight}Selection`}
          content={text}
          onInteract={() => this.insertHighlight()}
        />

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
              <li key={item}>{item}</li>
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
