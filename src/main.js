import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div id="buttons">
      <div class="without-transition">
        <h3>Without transition</h3>
        <button class="counter" type="button"></button><!--
        --><button class="delete" type="button">Delete</button>
      </div>
      <div class="with-transition">
        <h3>With transition</h3>
        <button class="counter" type="button"></button><!--
        --><button class="delete" type="button">Delete</button>
      </div>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

for (const el of document.querySelectorAll('.counter')) {
  setupCounter(el)
}
