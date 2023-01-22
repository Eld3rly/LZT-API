# LZT-API | [Lolzteam](https://zelenka.guru) api

## Installation

```bash
npm i lzt-api
```
or
```bash
yarn add lzt-api
```

## Usage

```ts
import LZTAPI from 'lzt-api';

const api = new LZTAPI("YOUR_API_KEY");

const me = await api.Users.getUser();

console.log(`+ ${me.user.username}`)
console.log(`ID ${me.user.user_id}`)
console.log(`Group ${me.user.user_title}`)
console.log(`Likes ${me.user.user_like_count}`)
console.log(`Link ${me.user.links.permalink}`)
```

```
eld3rly@wha [00:00:00] [main *]
-> % npm start
+ cloudyn
ID 5848375
Group Местный
Likes 91
Link https://zelenka.guru/cloudyn/
```

## Some info

At the moment, the library is under development, so not all methods available in the [LZT API](https://github.com/NztForum/Lolzteam-Public-API/blob/master/docs/api.markdown) will be available in the library.

Also, at the moment, there is no support for all [market methods](https://github.com/NztForum/Lolzteam-Public-API/blob/master/docs/market_api.markdown), because the author does not have access to it yet, but it will be added soon.

The library documentation is also under development, but you can always participate in its development by simply creating a PR with documentation for the method.