import { html, css, LitElement } from 'lit';

class TodoListItem extends LitElement {
  static get styles() {
    return css`
      :host {
        padding: 1rem;
        background-color: #eee;
        display: block;
        box-sizing: border-box;
      }
    `;
  }
  static get properties() {
    return {
      item: { type: Object },
    };
  }

  render() {
    return html`
      <input type="checkbox" .checked=${this.item.done} />
      ${this.item.description}
    `;
  }
}

customElements.define('todo-list-item', TodoListItem);
