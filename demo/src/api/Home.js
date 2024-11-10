import request from '@/utils/request'

export const recommendMusic = params => request({
    url: '/personalized',
    params,
})


export const searchMusic = params => request({
    url: '/search?keywords',
    params,
})