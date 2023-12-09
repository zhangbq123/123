// import  "axios";
import {co} from "@/utils/index"
import request from "@/utils/request"


export const getArtistList=(data)=>{
    return request.post(`/artist/list?timestamp=${Date.now()}`,data)
}

// 获取轮播图数据
export const getBanner=(type)=>{
    return request.post(`/banner?type=${type}`)
}
export const getHomePage=()=>{
    return request.post(`/homepage/block/page`)
}
// 获取首页所有信息
export const getHomePageData = () => co(request.post("/homepage/block/page"));

export const getHomepageDragonBall = () =>
  co(request.get("/homepage/dragon/ball"));

export const hotDetail = () => co(request.post("/search/hot/detail"));

/**
 * 
 * @returns 
 * 
 */

export const getCaptcha = (params)=>{
    return co(request.get("/captcha/sent",{params}))
}


export const loginCellphone = (data)=>{
    return co(request.post("/login/cellphone",data))
}
export const getCountry = ()=>{
    return co(request.post('/countries/code/list'))
}

export const getMusic = (id)=>{
    return co(request.post(`playlist/track/all?id=${id}`))
}
export const getDetails = (id)=>{
    return co(request.post(`/user/detail?uid=${id}`))
}
export const topMv = (params) =>{
     return co(request.post(`/top/mv?timestamp=${Date.now()}`,params))
 }

export const getmvDetail = (mvid) =>{
    return co(request.post(`/mv/detail?mvid=${mvid}`))
}
export const getMvdice = (id) =>{
    return co(request.post(`/mv/url?id=${id}`))
}

export const getTrackUrl = (track) => {
    return co(request.post(`/song/url/v1?${Date.now()}`, { id: track, level: "standard" }));
  };

export const getTrackDetail = (ids) =>
     co(request.get('/song/detail/',{params:{ ids }}));
