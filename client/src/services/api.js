import axios from 'axios'

export default () => {
  return axios.create({
    baseURI: `http://localhost:4700/http://localhost:4700/`
  })
}
