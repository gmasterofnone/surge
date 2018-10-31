import { mapQuestKey, googleKey, newsKey, googleMapKey } from './API_keys'
import { fetchRequest } from './API.js'

let uuidv4 = require("uuid/v4");

export const buildEvents =  async (location, topics) => {
  // const news =  await fetchNews(topics);
  const users = await addUsers()
  
  return users;
}

export const fetchNews = async topics => {
  const topicString = topics.map(topic => `%20${topic}%20`)
  const urlString = topicString.join('OR').slice(3, -3);
  const url = `https://newsapi.org/v2/everything?q=${urlString}&sortBy=popularity&apiKey=${newsKey}`
  const response =  await fetchRequest(url)

  const unresolvedPromises = response.articles.map(async article => ({
    id: uuidv4(),
    source: article.source.name,
    author: article.author,
    title: article.title,
    body: article.content.slice(0, -14),
    link: article.url,
    image: article.urlToImage,
    date: article.publishedAt
  }))
  return Promise.all(unresolvedPromises);
}

const addUsers = async news => {
  const url = 'https://randomuser.me/api/?results=100'
  const response = await fetchRequest(url)

  return response.results.map(user => {
    let fName, lName;
    fName = user.name.first[0].toUpperCase() + user.name.first.substr(1)
    lName = user.name.last[0].toUpperCase() + user.name.last.substr(1)
    return {
      name: `${fName} ${lName}`,
      id: uuidv4(),
      avatar: user.picture.large,
    }
  })
}





