const createVideo = (DATA) => {
  const {DATA_CONTAINER, VIDEO_URL} = DATA;
  const video = document.querySelector(DATA_CONTAINER);

  const onClickPlayVideo = () => {
    video.innerHTML = '';

    const iframe = `<iframe class="video__link" width="364" height="228" src="${VIDEO_URL}" title="Бесплатные интерактивные онлайн-курсы" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    video.insertAdjacentHTML('beforeend', iframe);
  };

  video.addEventListener('click', onClickPlayVideo);
};

export {createVideo};
