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
import DescriptionFilteredByColor from "../components/DescriptionFilteredByColor";

import AreaButtonsInteraction from "../containers/AreaButtonsInteraction";
import AreaButtonsFilterByColor from "../containers/AreaButtonsFilterByColor";
import AreaFilteredText from "../containers/AreaFilteredText";
import ContentTexts from "../containers/ContentTexts";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: "yellow",
      activeFilter: ""
    };
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

  setActive(property) {
    this.setState({
      active: property
    });
  }

  setActiveFilter(property) {
    this.setState({
      activeFilter: property
    });
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
          <DescriptionTextArea description="Hello, welcome to the highlighter. Please insert any text in the box below:" />
          <TextArea
            value={text}
            onChange={event => changeText(event.target.value)}
          />
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
        </ContentTexts>
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
