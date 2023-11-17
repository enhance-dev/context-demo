export default function ContextHeading({ html, state }) {
  const { context } = state
  const { heading='Default heading' } = context
  return html`
<style>
  :host > h1 {
    font-size: 1.5rem;
  }
</style>
<h1>${heading}</h1>
  `
}
