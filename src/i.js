class Player {
    constructor() {}
    // 装载音乐资源
    mountAudioSource(trackMp3Url, autoplay) {}
    // 替换播放列表
    // 如果不指定播放哪首歌曲（trackid）那么默认从第一首播放 否值传入trackid指定歌曲播放
    replaceTracks(tracks, autoplayTrack) {}
    //
    async replaceCurrentTrack(track) {}
    getNextTrack() {}
    playNextTrack() {}
    // 播放音乐资源
    play() {}
  }
  export default Player;