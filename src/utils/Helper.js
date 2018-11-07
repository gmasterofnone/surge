import { newsKey } from './API_keys'
import { fetchRequest, fetchUsers } from './API.js'


let uuidv4 = require("uuid/v4");

export const checkUser = () => {
  return JSON.parse(localStorage.getItem('user'))
}

export const storeUser = user => {
  return localStorage.setItem('user', JSON.stringify(user))
}

export const buildNews =  async (topic) => {
  const topics = await fetchNews(topic);
  const users = await addUsers(topics);
  const events = buildEvents(topics, users)
  return events;
}

export const fetchNews = async topic => {
  const URLTopic = topic.replace(' ', '+')
  const url = `https://newsapi.org/v2/everything?q=${URLTopic}&sources=breitbart-news,fox-news,the-wall-street-journal,the-washington-times,the-american-conservative,the-washington-times,us&pageSize=7&sortBy=popularity&apiKey=${newsKey}`
  const response =  await fetchRequest(url)
  const { articles } = response;

  return articles.map(story => {
    const surge = randomNumber(0, 100)
    const attending = numberWithCommas(Math.round(surge * 135.5));
    return {
      id: uuidv4(),
      topic,
      surge,
      attending,
      source: story.source.name,
      author: story.author,
      title: story.title.split('-'),
      body: story.content.slice(0, -14),
      link: story.url,
      image: story.urlToImage,
      date: convertDate(story.publishedAt),
    }
  })
}

const addUsers = async (topics) => {
  const url = 'https://randomuser.me/api/1.1/?results=1000'
  const response = await fetchUsers(url)

  const users =  response.results.map(user => {
    let fName, lName;
    fName = user.name.first[0].toUpperCase() + user.name.first.substr(1)
    lName = user.name.last[0].toUpperCase() + user.name.last.substr(1)
    const randomDescription = topics[randomNumber(0, topics.length - 1)].body;
    const comment = randomDescription.slice(24, randomNumber(100, 180))
   
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
  topics.forEach(article => {
    article.comments = [];
    let eventComments = 2;
    while (eventComments < article.surge / 4) {
      article.comments.push(users[randomNumber(0, users.length - 1)])
      eventComments++
    }
  })
  return topics
}

export const randomNumber = (min, max) => {
  min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; 
}

export const numberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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




