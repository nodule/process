module.exports = {
  name: "stderr",
  ns: "process",
  description: "Provides stderr",
  phrases: {
    active: "Providing stderr"
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
  fn: function stderr(input, $, output, state, done, cb, on, process) {
    var r = function() {
      output.out = $.create(process.stderr);
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}