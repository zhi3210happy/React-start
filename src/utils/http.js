import axios from 'axios'
import { clearToken, toLogin } from 'src/utils/token'

const config = {
	production: '/',
	development: 'proxy',
	testing: '/',
}
 
/**
 * 获取config配置中的请求前置路径
 */
const baseURL = config[process.env.NODE_ENV] === undefined ?
	config['development'] : config[process.env.NODE_ENV]

/**
 * 配置axios
 */
const http = axios.create({
	baseURL,
	header: {
		'Accept': 'application/json;version=3.0;compress=false',
		'Content-Type': 'application/json;charset=utf-8'
	}
})

/**
 * 请求拦截器，在发起请求之前
 */
http.interceptors.request.use(config => {
	return config
})

/**
 * 接口响应拦截器，在接口响应之后,
 * 返回的参数和code值可以根据需求自己修改
 */
http.interceptors.response.use(config => {
	// 响应正常
	if (config.data.resCode === 'xxxx') {
		return config.data.data
	}
	// 需要登录（没登录或登录过期）
	else if (config.data.resCode === 'xxxx' || config.data.resCode === 'xxxxx'){
		clearToken()
		toLogin()
		return false
	}
	// reject错误处理
	return Promise.reject({
		msg: config
	})
}, error => {
    // reject错误处理
	return Promise.reject({
		msg: '系统错误'
	})
})

export default http