module.exports = {
  name: "stdin",
  ns: "process",
  description: "Provides stdin",
  phrases: {
    active: "Providing stdin"
  },
  expose: ["process"],
  ports: {
    input: {
      encoding: {
        title: "Encoding",
        type: "string",
        "default": "utf-8"
      }
    },
    output: {
      out: {
        title: "Stream",
        type: "Stream"
      }
    }
  },
  fn: function stdin(input, $, output, state, done, cb, on, process) {
    var r = function() {
      process.stdin.resume();
      process.stdin.setEncoding($.encoding);
      output.out = $.create(process.stdin);
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}