const removeTabIndex = (items) => {
    console.log(items);
    if (items.test(/\./)) {
        console.log('ku');
    }
    console.log(document.querySelectorAll(items || items.replace('', '.')));
    document.querySelectorAll(items).forEach((item) => item.removeAttribute('tabindex'));
}

export {removeTabIndex};
