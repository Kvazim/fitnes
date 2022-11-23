// const DATA_VIDEO = {
//   width: '364px',
//   height: '228px',
//   src: 'https://www.youtube.com/watch?v=9TZXsZItgdw',
//   title: 'Бесплатные интерактивные онлайн-курсы',
//   frameborder: '0',
//   allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
//   allowfullscreen: 'true',
//   DATA_CONTAINER: '[data-video]',
// };

const createVideo = (DATA) => {
  // const {width, height, src, title, frameborder, allow, allowfullscreen, DATA_CONTAINER} = DATA_VIDEO;
  const {DATA_CONTAINER, VIDEO_URL} = DATA;
  const video = document.querySelector(DATA_CONTAINER);

  const onClickPlayVideo = () => {
    video.innerHTML = '';
    // const iframe = document.createElement('iframe');

    // iframe.setAttribute('allowfullscreen', allowfullscreen);
    // iframe.setAttribute('allow', allow);
    // iframe.setAttribute('src', src);
    // iframe.setAttribute('frameborder', frameborder);
    // iframe.setAttribute('width', width);
    // iframe.setAttribute('height', height);
    // iframe.setAttribute('height', title);
    // iframe.classList.add('video__link');
    const iframe = `<iframe class="video__link" width="364" height="228" src="${VIDEO_URL}" title="Бесплатные интерактивные онлайн-курсы" frameborder="0" sandbox="allow-same-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>`;
    video.insertAdjacentHTML('beforeend', iframe);
    // video.append(iframe);
  };

  video.addEventListener('click', onClickPlayVideo);
};

export {createVideo};
