export const playVideo = videoInfo => {
  console.log(window.WowzaPlayer);
  window.WowzaPlayer.create("streamPlayer", {
    license: "PLAY2-3z9m4-kcyBU-Jk3Vz-wyVjN-DuHYn",
    sources: [
      {
        sourceURL: videoInfo.streamlink
      }
    ],
    title: videoInfo.title,
    description: videoInfo.description,
    autoPlay: false,
    mute: false,
    volume: 75
  });
};
