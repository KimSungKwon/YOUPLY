import axios from 'axios'

const client = axios.create();

/*
 *   외부 back end 서버 사용
 */
client.defaults.baseURL = 'https://youply.kro.kr/'

export default client;