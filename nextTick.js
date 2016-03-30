module.exports = {
  name: "nextTick",
  ns: "process",
  description: "Takes the input and outputs it on nextTick",
  phrases: {
    active: "Ticking"
  },
  expose: ["process"],
  ports: {
    input: {
      "in": {
        title: "Input",
        type: "any",
        fn: function __IN__(data, source, state, input, $, output) {
          var r = function() {
            process.nextTick(function() {
              output({
                out: $.create(d)
              });
            }.bind({
              d: $.in
            }));
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      }
    },
    output: {
      out: {
        title: "Output",
        type: "any"
      }
    }
  },
  state: {}
}