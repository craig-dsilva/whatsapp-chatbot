# whatsapp-chatbot

This is a script which creates a chatbot to automatically send messages via WhatsApp. It reads data from `data.json` and sends the message accordingly. 

For e.g.  If I run the script, it sends a message `Hello, {name} from {country}` to the contact provided in `data.json`.

It's using the [Whapi](https://whapi.cloud/) API.

## How to install
- Create `.env` file and add a variable named `token` with the token (The token is generated from [Whapi](https://whapi.cloud/)) as it's value. 
- Run `npm install` to install dependencies.

## How to use
- Change the data in `data.json` as you wish.
- Run `npm start` or `node index.js` to send a message.