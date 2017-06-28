const compose = () => {
  const funcs = Array.protoype.slice.call(arguments);

  return funcs.reduce(function(f,g) {
    return function() {
      return f(g.apply(this, arguments));
    };
  });
}

export default compose;
