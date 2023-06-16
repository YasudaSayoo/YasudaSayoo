(async (id, type='playlist') => {
  const data = await (
    await fetch(`https://api.injahow.cn/meting/?type=${type}&id=${id}`)
  ).json();

  const ap = new APlayer({
    container: document.getElementById("aplayer"),
    fixed: true,
    order: 'random',
    autoplay: true, //自动播放
    mutex: true,
    lrcType: 3, // 3: url, .lrc; 1: lrc string
    audio: data,
  });
})('2234987719');
