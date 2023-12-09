import { Howl, Howler } from "howler";
import { getTrackDetail, getTrackUrl } from "@/service";
// Howl 加载音乐 播放 暂停
// Howler 全局设置声音大小 播放速度
// 播放器的功能
// 定义一个属性保存播放歌单
// 定义一个方法更新播放歌单
export default class {
  constructor() {
    this.index = 0;
    this.tracks = [];
    // 播放循环模式 0列表循环 1单曲循环
    this.loopMode = 0;
    this.currentTrackDetail = {}
    this.howl = null;
  }
  replaceTracks(tracks, autoplayTrack) {
    this.tracks = tracks;
    // 指定从autoplayTrack开始播放
    if (autoplayTrack) {
      this.index = this.tracks.indexOf(autoplayTrack);
    }
    this.playTrack(this.tracks[this.index]);
  }
  // 播放歌曲的方法
  async playTrack(track) {
    const [getTrackUrlError, response] = await getTrackUrl(track);
    const [getTrackDetailError,res] = await getTrackDetail(track);
    if (getTrackUrlError) return alert("获取mp3URL异常");
    if (getTrackDetailError) return alert("获取歌曲详情异常");
    const mp3Url = response.data.data[0].url;
    this.currentTrackDetail = res.data.data[0].url
    if (mp3Url) return this.mountAudioSource(mp3Url, true);
    this.playNextTrack();
  }

  mountAudioSource(url, autoplay = false) {
    Howler.unload();
    this.howl = new Howl({
      src: [url],
      html5: true,
      format: ["mp3"],
    });
    console.log("mountAudioSource...", autoplay);
    if (autoplay) this.play();
    this.howl.on("end", () => this.playNextTrack());
  }
  play() {
    // if (!this._howl) return;
    // if (this._howl.playing()) return;
    console.log("play...");
    this.howl.play();
  }
  // 获取需要播放的trackid
  playNextTrack() {
    const nextTrack = this.getNextTrack();
    this.playTrack(nextTrack);
    console.log("nextTrack:", nextTrack);
  }
  getNextTrack() {
    if (this.loopMode === 1) return this.tracks[this.index];
    const currentTrackIsLast = this.index + 1 === this.tracks.length;
    if (currentTrackIsLast && this.loopMode === 0)
      return this.tracks[(this.index = 0)];
    return this.tracks[++this.index];
  }
  setRate(rate) {
    Howler.rate = rate;
  }
}
