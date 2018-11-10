import axios from 'axios'

// export const IP = 'http://10.21.56.107:8080/';  //http://10.21.48.11:8080
export const IP = 'http://result.eolinker.com/xI7UEir31bb0ba7787da922392d7802652dc937dfbff047?uri=/'
// export const IP = 'http://192.168.0.4:8080/';  //http://10.21.48.11:8080

// export const IP = 'http://10.21.56.107:8080/';  //http://10.21.48.11:8080
// export const IP = '/anywork/'; //http://10.21.48.11:8080
// export const IP = 'http://192.168.0.4:8080/';  //http://10.21.48.11:8080

export const myAxios = axios.create({
  baseURL: IP
})
