import { axios } from '@/utils'

function getSceneInfo (id) {
  return axios({
    url: '/api/getSceneInfo',
    params: {
      sceneId: id
    }
  })
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    })
}

function proxyWeather ({id}) {
  return axios({
    url: `/ele/view/${id}`
  })
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    })
}

export { getSceneInfo, proxyWeather }
