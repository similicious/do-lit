import { html, css, LitElement } from 'lit';

class TodoList extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        box-sizing: border-box;
      }
      ul,
      li {
        margin: 0;
        padding: 0;
        display: block;
      }

      li {
        list-style: none;
        margin-bottom: 0.5rem;
      }
    `;
  }

  static get properties() {
    return {
      items: { state: true },
    };
  }

  connectedCallback() {
    super.connectedCallback();

    this.items = [
      {
        description: 'Auto putzen',
        done: false,
      },
      {
        description: 'Zähne putzen',
        done: true,
      },
    ];
  }

  render() {
    return html`
      <ul>
        ${this.items.map(
          (item) =>
            html`<li><todo-list-item .item=${item}></todo-list-item></li>`
        )}
      </ul>

      <todo-item-add @addTodo=${this.todoAdded}></todo-item-add>
    `;
  }

  todoAdded(e) {
    this.items = [...this.items, { description: e.description, done: false }];
  }
}

customElements.define('todo-list', TodoList);
