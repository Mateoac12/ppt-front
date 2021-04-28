import axios from "axios"
import { loginPath } from 'config/config'

export const PostLogin = ({ username, password }) => {
  return axios.post(loginPath, {
    username,
    password
  }).then(({ data }) => data)
}