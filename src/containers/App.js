import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions';

import TextArea from '../components/TextArea';
import Button from '../components/Button';
import InteractionText from '../components/InteractionText';

import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textContent: 'Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Quem manda na minha terra sou euzis! Diuretics paradis num copo é motivis de denguis.',
      highlightColor: 'yellowish',
      yellowContent: [],
      redContent: [],
      greenContent: [],
      yellowVisible: true,
      redVisible: false,
      greenVisible: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ textContent: event.target.value })
  }

  handleClick = property => {
    this.setState({ highlightColor: property })
  }

  handleFilter = property => {
    if(property === 'yellow'){
      this.setState({
        yellowVisible: true,
        redVisible: false,
        greenVisible: false,
      })
    }

    if(property === 'red'){
      this.setState({
        yellowVisible: false,
        redVisible: true,
        greenVisible: false,
      })
    }

    if(property === 'green'){
      this.setState({
        yellowVisible: false,
        redVisible: false,
        greenVisible: true,
      })
    }
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
      this.setState(prevState => ({ yellowContent : [...prevState.yellowContent, selectionContent] }));
    } 
    
    if(this.state.highlightColor === 'redish'){
      span.className = 'redish';
      this.setState(prevState => ({ redContent : [...prevState.redContent, selectionContent] }));
    } 
    
    if(this.state.highlightColor === 'greenish'){
      span.className = 'greenish';
      this.setState(prevState => ({ greenContent : [...prevState.greenContent, selectionContent] }));
    }

    span.textContent = selectionContent;

    let range = selection.getRangeAt(0);
    range.deleteContents();
    range.insertNode(span);
  }

  render() {
    console.log(this.handleFilter('redContent'));
    return (
      <div>
        <TextArea value={this.state.textContent} onChange={this.handleChange} />
        
        <Button onClick={() => this.handleClick('yellowish')} label="Yellow" />
        <Button onClick={() => this.handleClick('redish')} label="Red" />
        <Button onClick={() => this.handleClick('greenish')} label="Green" />

        <InteractionText 
          className={this.state.highlightColor === 'yellowish' ? 'yellowishSelection' : this.state.highlightColor === 'redish' ? 'redishSelection' : 'greenishSelection'}
          content={this.state.textContent}
          onInteract={() => this.insertHighlight()}
        />

        <Button onClick={() => this.handleFilter('yellow')} label="Show Yellow" />
        <Button onClick={() => this.handleFilter('red')} label="Show Red" />
        <Button onClick={() => this.handleFilter('green')} label="Show Green" />

        {this.state.yellowVisible &&
          <ul>
            {this.state.yellowContent.map(item =>
              <li key={item}>{item}</li>
            )}
          </ul>
        }

        {this.state.redVisible &&
          <ul>
            {this.state.redContent.map(item =>
              <li key={item}>{item}</li>
            )}
          </ul>
        }

        {this.state.greenVisible &&
          <ul>
            {this.state.greenContent.map(item =>
              <li key={item}>{item}</li>
            )}
          </ul>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  actions: () => bindActionCreators(Actions, dispatch)
 })

 export default connect(mapStateToProps, mapDispatchToProps)(App);
