import qs from 'qs'
//移动端js调用原生skd，根据需要引入
// import sdk from 'xxx'

const token = '_app_token_'

/**
 * token的操作方法，设置、获取、删除
 */
export const getToken = e => localStorage.getItem(token)
export const setToken = e => localStorage.setItem(token, e)
export const clearToken = e => localStorage.removeItem(token)

/**
 * 移动端示例，根据需要自行更改
 * 初始化token 
 * @returns {Promise<any>} resolve: 成功 reject: 失败
 */
export const initToken = async e => {
	return new Promise((resolve, reject) => {
		if (window.isApp) {
			sdk.getToken({
				callback(res) {
					if (res.token && String(res.token).length > 20) {
						setToken(res.token)
						resolve()
					} else {
						reject()
					}
				}
			})
		}
		else {
			const token = getToken()
			if (token && String(token).length > 20) {
				resolve()
			}
			else {
				reject()
			}
		}
	})
}

/**
 * 移动端示例，根据需要自行更改
 * 跳转到登录页面
 * app：打开原生登录模块
 * h5: 跳转到通用登录页面
 */
export const toLogin = e => {
	if (window.isApp) {
		sdk.openLogin({
			success(res) {
				setToken(res.token)
				window.location.reload()
			},
			cancel() {
				sdk.closeWindow()
			}
		})
	}
	else {
		const search = qs.stringify({
			redirect: window.location.href
		})
		window.location.href = '/m/login/?' + search
	}
}