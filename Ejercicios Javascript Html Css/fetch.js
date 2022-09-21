//debemos importar con npm i node-fetch@2;

const fetch = require("node-fetch");
const { jason } = require("./datos para consumir/array_datos");

const callApi = async function() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // const data = await response.text();
    const data = await response.json();

    console.log(data);
    //console.log(response);
};
callApi();