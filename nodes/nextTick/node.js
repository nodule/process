on.input.in = function() {
  process.nextTick(function() {
    output({ out: d });
  }.bind({ d: $.in}));
};
