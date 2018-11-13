import { mockUsers } from './mockUsers'

export const fetchRequest = async url => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch(error) {
    console.log(error.message)
  }
}

export const fetchUsers = async url => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch(error) {
    console.log('this')
    return mockUsers;
  }
}


