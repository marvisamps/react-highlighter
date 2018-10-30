import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textContent: 'Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Quem manda na minha terra sou euzis! Diuretics paradis num copo é motivis de denguis.',
      highlightColor: 'yellowish',
      yellowContent: {
        active: true,
        content: [],
      },
      redContent: {
        active: false,
        content: [],
      },
      greenContent: {
        active: false,
        content: [],
      },
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ textContent: event.target.value })
  }

  handleClick = (property) => {
    this.setState({ highlightColor: property })
  }

  handleFilter = (p1, p2, p3) => {
    this.setState({ 
      yellowContent: { active: true },
      redContent: { active: false },
      greenContent: { active: false },
    })
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
      this.setState(prevState => ({ yellowContent : { content: [...prevState.yellowContent.content, selectionContent] }}));
    } 
    
    if(this.state.highlightColor === 'redish'){
      span.className = 'redish';
      this.setState(prevState => ({ redContent : { content: [...prevState.redContent.content, selectionContent] }}));
    } 
    
    if(this.state.highlightColor === 'greenish'){
      span.className = 'greenish';
      this.setState(prevState => ({ greenContent : { content: [...prevState.greenContent.content, selectionContent] }}));
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

        <p 
          onMouseUp={() => this.insertHighlight()}
          className={this.state.highlightColor === 'yellowish' ? 'yellowishSelection' : this.state.highlightColor === 'redish' ? 'redishSelection' : 'greenishSelection'}
        >
          {this.state.textContent}
        </p>

        <button onClick={() => this.handleFilter(this.yellowContent, this.redContent, this.greenContent)}>Show Yellow</button>
        <button onClick={() => this.handleFilter(this.redContent,this.yellowContent,this.greenContent)}>Show Red</button>
        <button onClick={() => this.handleFilter('greenContent','redContent','yellowContent')}>Show Green</button>

        {/* <ul>
          {this.state.yellowContent.active === 'true' &&
            {this.state.yellowContent.content.map(item =>
              <li>{item}</li>
            )}
          }
        </ul> */}
      </div>
    );
  }
}

export default App;
