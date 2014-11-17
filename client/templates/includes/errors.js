Template.errors.helpers({
    errors: function() {
        return Errors.find();
    }
});

// remove each error a few seconds after you render it.
Template.error.rendered = function() {
    var error = this.data;
    Meteor.setTimeout(function() {
        Errors.remove(error._id);
    }, 3000);
};
a
