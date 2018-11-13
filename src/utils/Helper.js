import { newsKey, googleKey, ipKey } from './API_keys'
import { fetchRequest, fetchUsers } from './API.js'
import { mockUsers } from './mockUsers'


let uuidv4 = require("uuid/v4");

export const checkUser = () => {
  return JSON.parse(localStorage.getItem('user'))
}

export const storeUser = user => {
  return localStorage.setItem('user', JSON.stringify(user))
}

export const buildNews =  async (topic) => {
  const location = await getUserLocation();
  const venues = await getLocalVenues(location);
  const topics = await fetchNews(topic);
  const users = await addUsers(topics);
  const articles = addSocial(topics, users)
  const events = buildEvents(venues, articles)
  return events;
}

export const getUserLocation = async () => {
  const url = `http://api.ipstack.com/check?access_key=${ipKey}`
  const response = await fetchUsers(url)
  return { lat: response.latitude, lon: response.longitude }
}

export const getLocalVenues = async location => {
  const url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.lat},${location.lon}&radius=50000&rankby=prominence&type=city_hall&key=${googleKey}`;
  const response =  await fetchRequest(url)
  return response.results
}

export const fetchNews = async topic => {
  const URLTopic = topic.replace(' ', '+')
  const url = `https://newsapi.org/v2/everything?q=${URLTopic}&sources=breitbart-news,fox-news,the-wall-street-journal,the-washington-times,the-american-conservative,the-washington-times,us&pageSize=7&sortBy=popularity&apiKey=${newsKey}`
  const response =  await fetchRequest(url)
  const { articles } = response;

  return articles.map(story => {
    let surge
    if (randomNumber(0, 4) === 0 ) {
      surge = 100;
    } else {
      surge = randomNumber(23, 100)
    }
    const attending = numberWithCommas(surge * randomNumber(55, 392));
    return {
      id: uuidv4(),
      topic,
      surge,
      attending,
      favorite: false,
      source: story.source.name,
      author: story.author,
      title: story.title.split(' - '),
      body: story.content.slice(0, -14),
      link: story.url,
      image: story.urlToImage,
      date: convertDate(story.publishedAt),
    }
  })
}

const addUsers = (topics) => {
  // const url = 'https://randomuser.me/api/1.1/?results=1000'
  const response = mockUsers;

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

export const addSocial = (topics, users) => {
  topics.forEach(article => {
    article.comments = [];
    let eventComments = 0;
    while (eventComments < article.surge / randomNumber(7, 10)) {
      article.comments.push(users[randomNumber(0, users.length - 1)])
      eventComments++
    }
  })
  return topics
}

export const buildEvents = (venues, articles) => {
  articles.forEach(article => {
    if (article.surge === 100) {
      const randomVenue = venues[randomNumber(0, venues.length)]
      const { lat, lng } = randomVenue.geometry.location;
      const map = `http://maps.googleapis.com/maps/api/staticmap?size=600x300&style=visibility:on
        &style=feature:water%7Celement:geometry%7Cvisibility:on
        &style=feature:landscape%7Celement:geometry%7Cvisibility:on
        &markers=icon:https://www.dropbox.com/s/vp2bfkh2wb1237b/surge.png?raw=1%7C${lat},${lng}
        &zoom=10
        &key=AIzaSyBGVFK7tEQpovztJTCkzUehZpobDuUNTXQ`

      let date = new Date();
      date.setDate((date.getDate() + randomNumber(1, 14)));
      date.setHours(((date.getHours() - randomNumber(1, 5))))
      date.setMinutes(0)
      date.setSeconds(0)

      const event = {
        map,
        name: randomVenue.name,
        address: randomVenue.vicinity,
        date: date.toLocaleString([], {
          month: 'long', 
          day: '2-digit', 
          hour: '2-digit', 
          minute:'2-digit'
        })
      }
      article.event = event;
      console.log(article)  
    }
  })
  
  return articles;
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
