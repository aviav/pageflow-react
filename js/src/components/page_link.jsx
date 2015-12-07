import React from 'react';

export default class PageLink extends React.Component {
  render() {
    return (
      <a href={this._href()} onClick={this._handleClick.bind(this)}>
        {this.props.children}
      </a>
    );
  }

  _href() {
    if (this._targetPage()) {
      return '#' + this._targetPage().permaId;
    }
    else {
      return '#missing';
    }
  }

  _handleClick(event) {
    if (this._targetPage()) {
      pageflow.slides.goToByPermaId(this._targetPage().permaId, {
        transition: this.props.pageLink.pageTransition
      });
    }
    event.preventDefault();
  }

  _targetPage() {
    return this.props.pageLink.targetPage;
  }
};
