
export default({
    state: {

        /** 音乐信息 */
        songId: "",// 音乐ID
        songTitle: "", // 歌名
        songUrl: "", // 音乐url
        songPic: `/img/songPic/tubiao.jpg`, // 歌曲图标
        singerName: "", // 歌手名
        lyric: [], // 处理后的歌词数据

        /** 音乐播放信息*/
        isPlay: false, // 播放状态
        volume: 0, // 音量
        duration: 0, // 音乐时长
        currentTime: 0, // 当前音乐的播放位置
        changeTime: 0, // 指定播放时刻
        autoNext: true, // 用于触发自动播放下一首

        /**音乐列表信息 */
        currentPlayList: [], // 当前播放列表
        songDetails: null, // 单个歌单信息
        currentPlayIndex: -1, // 当前歌曲在歌曲列表的位置

        showAside: false, // 是否显示侧边栏
    },
    getters: {
        songId: (state :any ) => state.songId,
        songTitle: (state ) => state.songTitle,
        songUrl: (state ) => state.songUrl,
        songPic: (state ) => state.songPic,
        singerName: (state ) => state.singerName,
        lyric: (state ) => state.lyric,

        isPlay: (state ) => state.isPlay,
        playBtnIcon: (state ) => state.playBtnIcon,
        volume: (state ) => state.volume,
        duration: (state ) => state.duration,
        curTime: (state ) => state.curTime,
        changeTime: (state ) => state.changeTime,
        autoNext: (state ) => state.autoNext,

        currentPlayList: (state ) => state.currentPlayList,
        songDetails: (state ) => state.songDetails,
        currentPlayIndex: (state ) => state.currentPlayIndex,
        showAside: (state) =>state.showAside,

    },
    mutations: {
        setSongId: (state , songId) => {
            state.songId = songId;
        },
        setSongTitle: (state , songTitle) => {
            state.songTitle = songTitle;
        },
        setSongUrl: (state , songUrl) => {
            state.songUrl = songUrl;
        },
        setSongPic: (state , songPic) => {
            state.songPic = songPic;
        },
        setSingerName: (state , singerName) => {
            state.singerName = singerName;
        },
        setAutoNext: (state , autoNext) => {
            state.autoNext = autoNext;
        },
        setLyric: (state , lyric) => {
            state.lyric = lyric;
        },

        setIsPlay: (state , isPlay) => {
            state.isPlay = isPlay;
        },
        setPlayBtnIcon: (state , playBtnIcon) => {
            state.playBtnIcon = playBtnIcon;
        },
        setVolume: (state , volume) => {
            state.volume = volume;
        },
        setDuration: (state , duration) => {
            state.duration = duration;
        },
        setCurTime: (state , curTime) => {
            state.curTime = curTime;
        },
        setChangeTime: (state , changeTime) => {
            state.changeTime = changeTime;
        },

        setCurrentPlayList: (state , currentPlayList) => {
            state.currentPlayList = currentPlayList;
        },
        setSongDetails: (state , songDetails) => {
            state.songDetails = songDetails;
        },
        setCurrentPlayIndex: (state , currentPlayIndex) => {
            state.currentPlayIndex = currentPlayIndex;
        },
        setShowAside: (state, showAside) =>{
            state.showAside = showAside;
        }
    },
    actions: {
        playMusic: ({commit}, { id , url, pic, index, songTitle, singerName, lyric, currentSongList }) => {
            commit("setSongId", id);
            commit("setSongUrl", url);
            commit("setSongPic", pic);
            commit("setCurrentPlayIndex", index);
            commit("setSongTitle", songTitle);
            commit("setSingerName", singerName);
            commit("setLyric", lyric);
            commit("setCurrentPlayList", currentSongList);
        },


    },
});
