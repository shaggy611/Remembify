const express = require('express')
const app = express()
// const dotenv = require('dotenv').config();
// const notion = require('./notion')

const cors = require("cors");
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))


const dotenv = require('dotenv').config();
const { Client } = require('@notionhq/client');


const notion = new Client({ auth: process.env.NOTION_API_KEY })
const databaseId = process.env.NOTION_DATABASE_ID

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

async function getDatabase() {
    const response = await notion.databases.query({
        database_id: databaseId,
        filter: {
            property: "Module",
            rich_text: {
                contains: `${getRandomIntInclusive(1, 200)}`,
            },
        }
    });
    return response;

};




app.get('/', async (req, res) => {
    const data = await getDatabase()
    // data.then((info) => {
    //     const x = {
    //         eng: info.results[0].properties.Vocabulary.rich_text[0].plain_text,
    //         ukr: info.results[0].properties.Translation.rich_text[0].plain_text
    //     }
    //     console.log(x)
    //     res.send(x)
    // })
    const x = {
        eng: data.results[0].properties.Vocabulary.rich_text[0].plain_text,
        ukr: data.results[0].properties.Translation.rich_text[0].plain_text
    }
    console.log(x)
    res.json(x)

})

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Example app listening on port ${process.env.SERVER_PORT}`)
})

