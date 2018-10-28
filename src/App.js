import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textContent: 'Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Quem manda na minha terra sou euzis! Diuretics paradis num copo é motivis de denguis.',
      highlightColor: 'yellowish',
      contentByColor: {
        yellow: [],
        red: [],
        green : [],
      }
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ textContent: event.target.value })
  }

  handleClick = (property) => {
    this.setState({ highlightColor: property })
  }

  getSelectedText() {
    let textSelection;
    textSelection = (document.all) ?
    document.getSelection.createRange().text :
    document.getSelection();
    return textSelection;
  }

  insertHighlight() {
    let selection = this.getSelectedText();
    let selectionContent = selection.toString();

    let span = document.createElement('SPAN');
    if(this.state.highlightColor === 'yellowish'){
      span.className = 'yellowish';
      this.setState({ contentByColor : { yellow: [...this.state.contentByColor.yellow, selectionContent] }});
    } else if(this.state.highlightColor === 'redish'){
      span.className = 'redish';
      this.setState({ contentByColor : { red: [...this.state.contentByColor.red, selectionContent] }});
    } else {
      span.className = 'greenish';
      this.setState({ contentByColor : { green: [...this.state.contentByColor.green, selectionContent] }});
    }

    span.textContent = selectionContent;

    let range = selection.getRangeAt(0);
    range.deleteContents();
    range.insertNode(span);
  }

  render() {
    return (
      <div>
        <textarea
          value={this.state.textContent} 
          onChange={this.handleChange}
        />
        
        <button onClick={() => this.handleClick('yellowish')}>Yellow</button>
        <button onClick={() => this.handleClick('redish')}>Red</button>
        <button onClick={() => this.handleClick('greenish')}>Green</button>

        <p onMouseUp={() => this.insertHighlight()}>{this.state.textContent}</p>
      </div>
    );
  }
}

export default App;
