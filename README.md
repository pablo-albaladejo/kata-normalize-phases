# kata-normalicer

sentence normalicer module.

## Usage

```js
const normalicer = require('kata-normalicer');

const locale = 'ES';
const sentence = 'De la casa de Juan a la casa de Pedro';

const characters = normalicer({
  sentence,
  locale,
});

console.log(characters) // ["LA", "CASA", "JUAN", "LA", "CASA", "PEDRO",]

```

---

# How to contribute

## Run test

`npm run test`

## Run test in watch mode

`npm run test:watch`

## Take in mind

Default locale to Spanish (ES)
