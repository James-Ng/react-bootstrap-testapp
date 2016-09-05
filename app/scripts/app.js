var React = window.React = require('react'),
    ReactDOM = require("react-dom"),
    mountNode = document.getElementById("section2");

var List = React.createClass({
  render: function() {
    var createItem = function(itemText) {
      return <div className="col-md-3 item">
          <img src={itemText.src} className="img-responsive" />
          <h5>{itemText.title}</h5>
          <p>
              {itemText.des}
          </p>
      </div>;
    };
    return <div>{this.props.items.map(createItem)}</div>;
  }
});
var TestApp = React.createClass({
  getInitialState: function() {
    return {items: [{"src" : "images/react.svg", "title": "Lorem ipsum", "des": "Lorem ipsum dolor sit Lorem ipsum"},
    {"src" : "images/react.svg", "title": "Lorem ipsum", "des": "Lorem ipsum dolor sit Lorem ipsum"},
    {"src" : "images/react.svg", "title": "Lorem ipsum", "des": "Lorem ipsum dolor sit Lorem ipsum"},
  {"src" : "images/react.svg", "title": "Lorem ipsum", "des": "Lorem ipsum dolor sit Lorem ipsum"},
{"src" : "images/react.svg", "title": "Lorem ipsum", "des": "Lorem ipsum dolor sit Lorem ipsum"},
{"src" : "images/react.svg", "title": "Lorem ipsum", "des": "Lorem ipsum dolor sit Lorem ipsum"},
{"src" : "images/react.svg", "title": "Lorem ipsum", "des": "Lorem ipsum dolor sit Lorem ipsum"},
{"src" : "images/react.svg", "title": "Lorem ipsum", "des": "Lorem ipsum dolor sit Lorem ipsum"},
{"src" : "images/react.svg", "title": "Lorem ipsum", "des": "Lorem ipsum dolor sit Lorem ipsum"},
{"src" : "images/react.svg", "title": "Lorem ipsum", "des": "Lorem ipsum dolor sit Lorem ipsum"},
{"src" : "images/react.svg", "title": "Lorem ipsum", "des": "Lorem ipsum dolor sit Lorem ipsum"},
{"src" : "images/react.svg", "title": "Lorem ipsum", "des": "Lorem ipsum dolor sit Lorem ipsum"}]};
  },
  render: function() {
    return (
      <div>
        <div className="container">
            <div className="row">
              <List items={this.state.items} />

              </div>
            </div>

      </div>
    );
  }
});


ReactDOM.render(<TestApp />, mountNode);
