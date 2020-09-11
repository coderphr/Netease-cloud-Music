export function debounce(fn,delay) {
  let timer = null;
  return function() {
    let _this = this;
    let _args = arguments;
    if(timer) clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(_this,_args)
    },delay)
  }
}