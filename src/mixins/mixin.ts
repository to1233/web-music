import { getCurrentInstance } from "vue";

export default  function () {

    const { proxy } = getCurrentInstance() as any;

    /**
     *  更新播放的歌曲信息
     * @param song 歌曲信息
     * @param currentSongList 当前歌曲集合
     */
    function playMusic(song : SongInfo, currentSongList) {
        const songTitle = getSongTitle(song.name);
        const singerName = getSingerName(song.name);
        const {id,url,pic,index,lyric  } = song;
        proxy.$store.dispatch('playMusic', {
            id,
            url,
            pic,
            index,
            songTitle,
            singerName,
            lyric,
            currentSongList,
        });
    }

    // 获取歌曲名
    function getSongTitle(str) {
        return str.split("-")[1];
    }

    // 获取歌手名
    function getSingerName(str) {
        return str.split("-")[0];
    }

    return {
        playMusic,
        getSongTitle,
        getSingerName
    };
}
