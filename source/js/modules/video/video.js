const createVideo = (container, link) => {
  const video = document.querySelector(container);

  const onClickPlayVideo = () => {
    video.innerHTML = '';

    const iframe = `<iframe class="video__link" width="364" height="228" src="${link}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    video.insertAdjacentHTML('beforeend', iframe);
  };

  video.addEventListener('click', onClickPlayVideo);
};

export {createVideo};
