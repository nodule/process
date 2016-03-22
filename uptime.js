module.exports = {
  name: "uptime",
  ns: "process",
  description: "Number of seconds Node has been running",
  phrases: {
    active: "Determining uptime"
  },
  expose: ["process"],
  ports: {
    input: {},
    output: {
      out: {
        title: "Output",
        type: "any"
      }
    }
  },
  fn: function uptime(input, $, output, state, done, cb, on, process) {
    var r = function() {
      output.out = $.create(process.uptime());
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}