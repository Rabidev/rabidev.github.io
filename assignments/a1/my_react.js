//Code for ClickButton ---------------------
const e = React.createElement;

class ClickButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You clicked the button.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Click this button'
    );
  }
}

const domContainer = document.querySelector('#button_container');
ReactDOM.render(e(ClickButton), domContainer);


//Code for My Name -------------------------
const name = 'Joe Rabideau';
const element = React.createElement("p", null, "My name is: ", name);
ReactDOM.render(element, document.getElementById('name_container'));


//Code for Unordered List-------------------
function UnorderedList(pizza) {
  const toppings = pizza.toppings;
  const listItems = toppings.map(topping => React.createElement("li", { key: topping.toString() }, topping));
  return React.createElement("ul", null, listItems);
}

const toppings = ["pepperoni", "sausage", "mushroom", "green pepper", "ham", "bacon", "onion", "pineapple"];
ReactDOM.render( React.createElement(UnorderedList, { toppings: toppings }), document.getElementById('unorderedlist_container'));