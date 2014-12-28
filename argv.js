module.exports = {
  name: "argv",
  ns: "process",
  description: "Provides argv",
  phrases: {
    active: "Providing argv"
  },
  expose: ["process"],
  ports: {
    input: {},
    output: {
      out: {
        title: "Argv",
        type: "array"
      }
    }
  },
  fn: function argv(input, output, state, done, cb, on, process) {
    var r = function() {
      output.out = process.argv;
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}