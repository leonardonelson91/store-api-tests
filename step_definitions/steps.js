const { I } = inject();

let endpoint;
let payload;

Given('I want all the products', () => {
  endpoint = '/products';
});

Given('I want a product with id {int}', (id) => {
  endpoint = '/products/' + id;
});

When('I send a GET request', () => {
  I.sendGetRequest(endpoint);
});

Then('all the products must be returned', () => {
  I.seeResponseCodeIs(200);
});

Then('the product must be returned', () => {
  I.seeResponseCodeIs(200);
  I.seeResponseEquals({
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
  });
});



Given('I want to create a new product', () => {
  endpoint = '/products';
  payload = {
      "title": "Relogio",
      "price": 1305.5,
      "description": "Lindo relogio de ouro",
      "image": "https://lojavivara.vtexassets.com/arquivos/ids/311373/Relogio-Movado-Bold-Verso-Masculino-3600861-m6190601_set.jpg?v=1752778749",
      "category": "acessorios"
  };
});

When('I send a POST request', () => {
  I.sendPostRequest(endpoint, payload);
});

Then('the product must be created', () => {
  I.seeResponseCodeIs(200);
  I.seeResponseContainsJson(payload);
});
