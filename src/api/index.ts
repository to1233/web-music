
import { service as  request , getBaseURL } from '@/utils/request';
import get = Reflect.get;
// 获取分页歌单
export function getSongList(data) {
    return request({
        url: 'songSheet/findPageSongList',
        method: 'get',
        params: data
    })
}

// 获取分页歌手

export function getSingerList(data){

    return request({
        url:'singer/findPageSinger',
        method: 'get',
        params: data
    })
}

export function findSheetInfoById(sheetId) {
    return request({
        url:`songSheet/findSheetInfoById/${sheetId}`,
        method: 'get',
    })
}

/**
 * 根据歌单id来查询出对应的歌曲集合
 * @param sheetId 歌单id
 */
export function  findSongListBySheetId(sheetId) {
    return request({
        url:`songSheet/findSongListBySheetId/${sheetId}`,
        method: 'get',
    })
}


/**
 * 查询对应的歌单评分
 * @param sheetId 歌单id
 */
export  function findRankBySheetId(sheetId) {
    return request({
        url:`songSheet/findRankBySheetId/${sheetId}`,
        method: 'get',
    })
}

/**
 * 用户登录
 * @param userInfo
 */
export function loginByUserName(userInfo) {
    return request({
        url: 'loginByUserName',
        method: 'post',
        data: userInfo,
    })
}


/**
 * 用户登录 手机登录
 * @param userInfo
 */
export function loginByPhone(userInfo) {
    return request({
        url: 'loginByPhone',
        method: 'post',
        data: userInfo,
    })
}

// 更新用户头像
export function uploadUrl(userId) {
    return `${getBaseURL()}/user/avatar/update?id=${userId}`;
}

/**
 * 注册信息
 */
export function  signUp(userInfo) {
    return request({
        url: 'signUp',
        method: 'post',
        data: userInfo,
    })
}

// 注销账户
export function  deleteUser(userId) {
    return request({
        url:`user/cancel/${userId}`,
        method: 'get'
    })

}

/**
 * 根据用户id来查询用户详情信息
 * @param id 用户id
 */
export function getUserId(id){
    return request({
        url: `user/detail/${id}`,
        method: 'get',
    })
}


/**
 * 更新用户信息
 * @param userInfo 待更新的用户信息
 */
export function updateUserMsg(userInfo) {
    return request({
        url: 'user/updateUserMsg',
        method : 'post',
        data: userInfo
    })
}

/**
 * 根据歌手id来查询歌手信息详情
 * @param singerId 歌手id
 */
export function getSingerInfoById(singerId) {
    return request({
        url:`singer/singerInfoById/${singerId}`,
        method: 'get',
    })
}

/**
 * 更新用户密码
 * @param passwordInfo
 */
export function updateUserPassword(passwordInfo) {
    return  request({
        url: 'user/updatePassword',
        method: 'post',
        data: passwordInfo
    })
}


/**
 * 获取用户收藏的歌曲列表
 * @param id 用户id
 */
export  function getUseCollSongList(id) {
    return  request({
        url: `user/getCollectInfo/${id}`,
        method: 'get'
    })
}

/**
 * 根据歌手名来查询歌曲集合
 * @param singerName 歌手名
 */
export function getSongOfSingerName(singerName) {
    return request({
        url: `song/singerName/${singerName}`,
        method: 'get'
    })
}

export function getSongOfSingerId(singerId) {
    return request({
        url: `song/singer/detail/${singerId}`,
        method: 'get'
    })
}



/**
 * 根据歌单名字来查询出对应的歌单信息
 * @param title
 */
export function getSongSheetOfLikeTitle(title) {
    return request({
        url: `songSheet/likeTitle/${title}`,
        method: 'get'
    })
}



/**
 * 获取图片的拼接前缀
 */
export function attachImageUrl(url) {
   return url ? `${getBaseURL()}/${url}` : "https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" ;
}
