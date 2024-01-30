const request = require("request");
const data = require("./data.json");
require("dotenv").config();

request(
  {
    method: "POST",
    url: "https://gate.whapi.cloud/messages/text",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authorization: `Bearer ${process.env.token}`,
    },
    body: {
      typing_time: 0,
      to: data.contact,
      body: `Hello, ${data.name} from ${data.country}`,
    },
    json: true,
  },
  (error, response, body) => {
    if (error) throw new Error(error);

    console.log(body);
  }
);
