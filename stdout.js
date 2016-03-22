module.exports = {
  name: "stdout",
  ns: "process",
  description: "Provides stdout",
  phrases: {
    active: "Providing stdout"
  },
  expose: ["process"],
  ports: {
    input: {},
    output: {
      out: {
        title: "Stream",
        type: "Stream"
      }
    }
  },
  fn: function stdout(input, $, output, state, done, cb, on, process) {
    var r = function() {
      output.out = $.create(process.stdout);
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}