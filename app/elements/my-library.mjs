export default function MyLibrary({ html, state }) {
  const { context, store } = state
  const { books = [] } = store
  const read = books.filter(book => book.read === true)
  const unread = books.filter(book => book.read === false)

  // Pass filtered data collections via context instead of passing props multiple levels
  context.read = read
  context.unread = unread

  return html`
    <style>
      :host {
        display: block;
      }
    </style>
    <h1 class="mb1">My Library</h1>
    <slot></slot>
  `
}
