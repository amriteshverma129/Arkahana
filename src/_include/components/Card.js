const {html} = require('common-tags');

function Card({title, link, linkText}){
   return html`
   <div>
   <h2 class="card_Title">${title}</h2>
   <a class="card_Link" href="${link}">${linkText}</a>
   </div>`
}

module.exports = Card;