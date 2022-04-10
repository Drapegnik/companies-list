# companies-list

[![code style": prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## getting started

```
make install
make dev
```

## demo

[![application screenshot](https://res.cloudinary.com/dzsjwgjii/image/upload/v1649628087/companies-list-safari.png)](https://companies-list-drapegnik.vercel.app/)

[![perfomance metrics](https://res.cloudinary.com/dzsjwgjii/image/upload/v1649628087/companies-list-lighthouse.png)](https://pagespeed.web.dev/report?url=https%3A%2F%2Fcompanies-list-drapegnik.vercel.app%2F&form_factor=mobile)

## scripts

- `make install`
- `make dev`
- `make build`
- `make lint`

## api

> `GET /api/companies`:

```json
[
  {
    "id": 0,
    "name": "Dickinson LLC",
    "logoUrl": "https://robohash.org/0",
    "type": 3,
    "address": {
      "city": "East Andreannehaven",
      "country": "Macedonia",
      "lat": "14.7599",
      "lng": "157.8082"
  }
},
```
