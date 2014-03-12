on.input.in = function() {
  process.nextTick(function() {
    output({ out: this.data });
  }.bind({ data: data }));
};
