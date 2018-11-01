import { newsKey } from './API_keys'
import { fetchRequest } from './API.js'

let uuidv4 = require("uuid/v4");

export const buildNews =  async (topic) => {
  const result = await fetchNews(topic)
  return result
}

export const fetchNews = async topic => {
  const url = `https://newsapi.org/v2/everything?q=${topic}&sortBy=popularity&apiKey=${newsKey}`
  const response =  await fetchRequest(url)
  return response.articles.map(article => ({
    id: uuidv4(),
    source: article.source.name,
    author: article.author,
    title: article.title,
    body: article.description.slice(0, -14),
    link: article.url,
    image: article.urlToImage,
    date: article.publishedAt
  }))
}

// const addUsers = async news => {
//   const url = 'https://randomuser.me/api/?results=100'
//   const response = await fetchRequest(url)

//   return response.results.map(user => {
//     let fName, lName;
//     fName = user.name.first[0].toUpperCase() + user.name.first.substr(1)
//     lName = user.name.last[0].toUpperCase() + user.name.last.substr(1)
//     return {
//       name: `${fName} ${lName}`,
//       id: uuidv4(),
//       avatar: user.picture.large,
//     }
//   })
// }





