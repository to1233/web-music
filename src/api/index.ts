
import { service as  request , getBaseURL } from '@/utils/request';
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
 * 获取图片的拼接前缀
 */
export function attachImageUrl(url) {
   return url ? `${getBaseURL()}/${url}` : "https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" ;
}
