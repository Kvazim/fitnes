const changeTabs = (headerAtrr, tabsAtrr, tabsClass, contentSelector, activeClass, openClass) => {
  const header = document.querySelector(headerAtrr);
  const tabs = document.querySelectorAll(tabsAtrr);
  const contents = document.querySelectorAll(contentSelector);

  const closestTabsContent = () => {
    contents.forEach((item) => {
      item.classList.remove(openClass);
    });
    tabs.forEach((item) => {
      item.classList.remove(activeClass);
    });
  };

  const showTabsContent = (element) => {
    element.classList.add(activeClass);
    contents.forEach((item) => {
      if (item.dataset.tabsContent === element.dataset.tabsLink) {
        item.classList.add(openClass);
      }
    });
  };

  const onClickTabs = (e) => {
    e.preventDefault();
    const target = e.target;

    if (target.classList.contains(tabsClass.replace(/\./, '')) || target.parentNode.classList.contains(tabsClass.replace(/\./, ''))) {
      closestTabsContent();
      showTabsContent(target);
    }
  };

  header.addEventListener('click', onClickTabs);
};

// const changeTabs = (headerAtrr, tabsAtrr, tabsSelector, contentSelector, activeClass, openClass) => {
//   const header = document.querySelector(headerAtrr);
//   const tabs = document.querySelectorAll(tabsAtrr);
//   const tabsClass = document.querySelectorAll(tabsSelector);
//   const contents = document.querySelectorAll(contentSelector);

//   closestTabsContent(tabs, contents, activeClass, openClass);
//   // showTabsContent(tabs = [0], contents = [0], activeClass, openClass);

//   header.addEventListener('click', (e) => {
//     e.preventDefault();
//     const target = e.target;

//     if (target.classList.contains(tabsClass) || target.parentNode.classList.contains(tabsClass)) {

//     }
//   });
// };

export {changeTabs};
