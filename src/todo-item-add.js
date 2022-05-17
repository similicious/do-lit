import { LitElement, html, css } from 'lit';

class TodoItemAdd extends LitElement {
  static get styles() {
    return css`
      input,
      button {
        border-radius: 2px;
        border: darkgrey 1px solid;
        padding: 0.5rem;
        outline: none;
      }
    `;
  }

  render() {
    return html`
      <input type="text" />
      <button @click=${this.addTodo}>➕</button>
    `;
  }

  addTodo() {
    const value = this.renderRoot.querySelector('input').value;
    this.dispatchEvent(new TodoAddedEvent(value));
  }
}

class TodoAddedEvent extends Event {
  constructor(description) {
    super('addTodo');
    this.description = description;
  }
}

customElements.define('todo-item-add', TodoItemAdd);
