export default function UnreadBooks({ html, state }) {
  const { context = {} } = state
  const { unread = [] } = context
  const unreadBookItems = unread.map(book => `
  <li>
    <book-item
      title="${book.title}"
      author="${book.author}"
      isbn="${book.isbn}"
      ${book.read ? 'read' : ''}
    ></book-item>
  </li>
  `).join('\n')

  return html`
    <style>
      :host {
        display: grid;
        gap: 1rem;
        padding: var(--space-0);
      }
      :host > ul {
        list-style: '';
        display: grid;
        gap: 0.5rem;
      }

      :host > ul > li {
        display: flex;
        margin-bottom: var(--space--1);
      }
    </style>
    <h2>Books</h2>
    <ul>
      ${unreadBookItems}
    </ul>
  `
}

