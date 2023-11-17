export default function MyBook({html, state}) {
  const { attrs } = state
  const { author='', title='', isbn='' } = attrs
  const checked = Object.keys(attrs).includes('read')
    ? 'checked'
    : ''

  return `
<style>
 :host > form {
   display: flex;
   flex-grow: 1;
   flex-direction: column;
 }
 :host > form > label {
   display: flex;
   flex-grow: 1;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   gap: var(--space-0);
   padding: var(--space--1);
   border: 1px solid var(--fore);
   border-radius: 2px;
 }
 :host > form > label > h5 {
   min-width: 3rem;
   flex-grow: 0;
 }

 :host > form > label > input {
   flex-grow: 1;
   padding: var(--space--4);
 }
</style>
<form action="/books" method="post">
  <label>
    <h5>Title</h5>
    <input type="text" value="${title}">
  </label>
  <label>
    <h5>Author</h5>
    <input type="text" value="${author}">
  </label>
  <label>
    <h5>ISBN</h5>
    <input type="text" value="${isbn}">
  </label>
  <label>
    <h5>Read</h5>
    <input type="checkbox" ${checked}>
  </label>
</form>
  `
}
