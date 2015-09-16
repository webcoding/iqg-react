'use strict';

var React = require('react');

var AppActions = require('../actions/AppActions');

var View = React.createClass({
  getInitialState: function() {
    return {
    };
  },
  renderMap: function() {
    var data = this.props.data,
        params = this.props.params;

    var preLink = '#/brand/' + params.brand_id;
    if(!params.branch_id){
      preLink += '/branch/'
    }else{
      preLink += '/branch/' + params.branch_id + '/item/';
    }
    return data.map(function(item) {
      var link = "#detail/" + (item.id || item.type);
      return (
        <a className="link-block" href={link}>
          <div className="item">
            <span className="num">{item.value}</span>
            <span className="title">{item.name}</span>
          </div>
        </a>
      );
    });
  },
  render: function() {
    return (
      <div className="list-box">
        {this.renderMap()}
      </div>
    );
  }
});

module.exports = View;
