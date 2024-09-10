// plugins/touch-detection.js
export default ({ app }, inject) => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    inject('isTouchDevice', isTouchDevice);
}