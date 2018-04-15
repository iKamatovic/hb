const write = (key, value) => {
  try {
    sessionStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
}

const read = (key) => {
  try {
    return sessionStorage.getItem(key);
  } catch (e) {
    return null;
  }
}

const remove = (key) => {
  try {
    return sessionStorage.removeItem(key);
  } catch (e) {
    return null;
  }
}

export const setToken = (token) => write('AUTH_TOKEN', token)

export const getToken = () => read('AUTH_TOKEN')

export const removeToken = (token) => remove('AUTH_TOKEN', token)

