import React from 'react';
// Creating react components
// React components start with capital letters.

 class ShoppingList extends React.Component {
    render() {
      return (
        <div className="shopping-list">
          <h1>Shopping List for {this.props.name}</h1>
          <ul> <li>Instagram</li><li>WhatsApp</li><li>Oculus</li></ul>
        </div>
      );
    }
}
export default ShoppingList
