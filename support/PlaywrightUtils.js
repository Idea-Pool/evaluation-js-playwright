/* eslint-disable no-undef */
exports.isInViewport = async element => {
    const visibleRatio = await new Promise(resolve => {
        const observer = new IntersectionObserver(entries => {
            resolve(entries[0].intersectionRatio);
            observer.disconnect();
        });
        observer.observe(element);
        // Firefox doesn't call IntersectionObserver callback unless
        // there are rafs.
        requestAnimationFrame(() => { });
    });
    return visibleRatio;
};