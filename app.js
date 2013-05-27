$(function() {
  var Model = function(){
    //var self = this;
    this.selected = ko.observable(1);
    this.sadMeVidis= ko.computed(function() {
      console.log(this.selected());
      return this.selected() == 1;
    }, this);
    this.clickMe = function() {
      //self.sadMeVidis(!self.sadMeVidis());

      console.log(this.selected());
    };
    this.items= ko.observableArray([{id: 1, name: 'item 1'}, {id:2, name:'item 2'}]);
    
    return this;
  };
  ko.applyBindings(new Model());
}
  );