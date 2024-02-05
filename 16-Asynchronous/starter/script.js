'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// url = https://countries-api-836d.onrender.com/countries/

const request = new XMLHttpRequest(); // Old school way of XML HTTP Request!
request.open(
  'GET',
  'https://countries-api-836d.onrender.com/countries/name/india'
);
request.send(); // We have to also send the request to the above url

// So to actually see the data..we need a Callback function..So for this we use event listners..with load event..

request.addEventListener('load', function () {
  // console.log(request.responseText);
  // console.log(this.responseText); // We can use this..or prev line also..
  // Also responseText returns response in text format

  // Now in the console the data we have is in the form of json..Now we need to convert this into js object
  // JSON => Big string of Text

  const [data, data2] = JSON.parse(this.responseText);
  console.log(data, data2);

  const html = `
    <article class="country">
          <img class="country__img" src="${data2.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data2.name}</h3>
            <h4 class="country__region">${data2.region}</h4>
            <p class="country__row"><span>👫</span>${data2.population} people</p>
            <p class="country__row"><span>🗣️</span>${data2.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data2.currencies[0].name}</p>
          </div>
        </article>
    `;
    countriesContainer.insertAdjacentElement('beforeend', html);
    countriesContainer.style.opacity = 1;
    // countriesContainer.appendChild(html);
});
