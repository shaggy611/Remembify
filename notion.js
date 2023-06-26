// const dotenv = require('dotenv').config();
// const { Client } = require('@notionhq/client');


// const notion = new Client({ auth: process.env.NOTION_API_KEY })
// const databaseId = process.env.NOTION_DATABASE_ID

// async function getDatabase() {
//     const response = await notion.databases.query({
//         database_id: databaseId
//     });

//     const x = JSON.stringify(response)
//     console.log(x)

//     return x;

//     // console.log(response)


//     // Object.entries(response.properties).forEach(([propertyName, propertyValue]) => {
//     //     console.log(`${propertyName}: ${propertyValue.type}`);
//     // });

// };

module.exports = {
    getDatabase
}