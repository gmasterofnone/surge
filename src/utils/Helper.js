import { newsKey } from './API_keys'
import { fetchRequest } from './API.js'

let uuidv4 = require("uuid/v4");

export const checkUser = () => {
  return JSON.parse(localStorage.getItem('user'))
}

export const buildNews =  async (topic) => {
  const topics = await fetchNews(topic);
  const users = await addUsers(topics);
  const events = buildEvents(topics, users)
  return events;
}

export const fetchNews = async topic => {
  const url = `https://newsapi.org/v2/everything?q=${topic}&sortBy=popularity&apiKey=${newsKey}`
  const response =  await fetchRequest(url)
  return response.articles.map(article => {
    return {
      id: uuidv4(),
      source: article.source.name,
      author: article.author,
      title: article.title,
      body: article.description || article.content,
      link: article.url,
      image: article.urlToImage,
      date: convertDate(article.publishedAt),
      comments: []
    }
  })
}

const addUsers = async (topics) => {
  const url = 'https://randomuser.me/api/?results=100'
  const response = await fetchRequest(url)

  const users =  response.results.map(user => {
    let fName, lName;
    fName = user.name.first[0].toUpperCase() + user.name.first.substr(1)
    lName = user.name.last[0].toUpperCase() + user.name.last.substr(1)
    const randomDescription = topics[randomNumber(0, topics.length - 1)].body;
    const comment = randomDescription.slice(0, randomNumber(30, 70))
   
    return {
      name: `${fName} ${lName}`,
      id: uuidv4(),
      avatar: user.picture.large,
      comment,
    }
  })
  return users
}

export const buildEvents = (topics, users) => {
  const results =  topics.map( article => {
    let eventComments = 2;
    const numberOfComments = randomNumber(1, 20)
    while (eventComments < numberOfComments) {
      article.comments.push(users[randomNumber(0, users.length - 1)])
      eventComments++
    }
    return article  
  })
  return results
}

const randomNumber = (min, max) => {
  min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; 
}

// NOT MY CODE BELOW

const convertDate = string => {
  let date = new Date(string);
  let formatOptions = { 
        day:    '2-digit', 
        month:  '2-digit', 
        year:   'numeric',
        hour:   '2-digit', 
        minute: '2-digit',
        hour12: true 
      };
  let dateString = date.toLocaleDateString('en-US', formatOptions);
  dateString = dateString.replace(',', '')
                        .replace('PM', 'p.m.')
                        .replace('AM', 'a.m.');
 
  return dateString
}



