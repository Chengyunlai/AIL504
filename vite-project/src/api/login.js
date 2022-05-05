import {requestService} from '/src/utils/request'

// 登录方法
export function userLogin(data) {
    return requestService({
        url: '/api/login',
        method: 'post',
        data: data,
    })
}