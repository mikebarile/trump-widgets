import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currTab: 0};
    this.setCurrTab = this.setCurrTab.bind(this);
  }

  setCurrTab(currTab) {
    this.setState({currTab});
  }

  render() {
    const tabs = [
      {title: 'one', article: 'article one'},
      {title: 'two', article: '10 feeet higher'},
      {title: 'three', article: 'five'}
    ];
    const titles = tabs.map((tab, index) => (
      <li key={index} onClick={() => (this.setCurrTab(index))}><h1>{tab.title}</h1></li>
    ));
    const selectedArticle = tabs[this.state.currTab].article;
    return (
      <div>
        <ul>{titles}</ul>
        <br/>
        <article className="Small-Hands">
          {selectedArticle}
        </article>
      </div>
    );
  }
}

export default Tabs;
