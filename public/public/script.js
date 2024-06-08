(function () {
  var info = console.info;
  console.info = function (message) {
    if (!/Download the React DevTools/.test(message))
      info.apply(console, arguments);
  };
})();
