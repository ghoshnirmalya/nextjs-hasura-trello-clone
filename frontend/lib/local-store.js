export default class LocalStore {
  static set apiToken(token) {
    localStorage.setItem('AUTH-TOKEN', `Bearer ${token}`)
  }

  static get apiToken() {
    return localStorage.getItem('AUTH-TOKEN')
  }

  static clear() {
    localStorage.removeItem('AUTH-TOKEN')
  }
}
