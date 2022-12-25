'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }
  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { 
        onClick: () => this.setState({ liked: true })
      },
      'Like'
    );
  }
}

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

class ShoppingListLinux extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement("div", {
      className: "shopping-list"
    },
    React.createElement("h1", null, "Shopping List for ", "props.name"),
    React.createElement("ul", null, 
    React.createElement("li", null, "Instagram"), 
    React.createElement("li", null, "WhatsApp"), 
    React.createElement("li", null, "Oculus")));
  }
}

//ON LINUX
// const domContainer = document.querySelector('#root');
// const root = ReactDOM.createRoot(domContainer);
// root.render(e(LikeButton));

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<LikeButton />);
root.render(e(ShoppingListLinux))
