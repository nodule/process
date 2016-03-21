on.input.in = function() {
  process.nextTick(function() {
    output({ out: $.create(d) });
  }.bind({ d: $.in}));
};
