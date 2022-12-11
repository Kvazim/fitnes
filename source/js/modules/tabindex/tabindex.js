const removeTabIndex = (items) => {
  const regex = new RegExp(/\./);
  if (regex.test(items)) {
    document.querySelectorAll(items).forEach((item) => item.removeAttribute('tabindex'));
  } else {
    document.querySelectorAll(items.replace('', '.')).forEach((item) => item.removeAttribute('tabindex'));
  }
};


export {removeTabIndex};
