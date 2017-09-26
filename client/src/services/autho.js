import api from '@/services/autho'

export default () => {
  register(credentials) {
    return api().post('register', credentials);
  }
}
