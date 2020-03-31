export const playVideo = videoInfo => {
  window.WowzaPlayer.create(window.document.getElementById("streamPlayer"), {
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
