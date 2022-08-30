/** @type {import('next').NextConfig} */
const fs = require('fs')
const password = fs.readFileSync("./secrets/mongodbPassword").toString()

module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'picsum.photos',
      'miro.medium.com',
      'lh3.googleusercontent.com',
      'static01.nyt.com',
      'coffeebros.com',
    ],
  },
  env: {
    mongodb_url: "mongodb+srv://metamarket-manager:password@metamarket.7yypa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority".replace(/password/, password)
  },
};
