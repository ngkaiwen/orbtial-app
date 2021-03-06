Todos = new Mongo.Collection('todos');

Lists = new Meteor.Collection('lists');

Router.configure({
    layoutTemplate: 'main'
});
Router.route('/', function () {
  this.render('home');
},{
    name: 'home'
});
Router.route('/register',function(){
    this.render('register');
},{
    name: 'register'
}
);
//sdfsdffdfs
Router.route('/login',function(){
    this.render('login');
},{
    name: 'login'
}
);
Router.route('/list/:_id', {
    name: 'listPage',
    template: 'listPage',
    data: function(){
        var currentList = this.params._id;
        var currentUser = Meteor.userId();
        return Lists.findOne({ _id: currentList, createdBy: currentUser });
    },
    onRun: function(){
        console.log("You triggered 'onRun' for 'listPage' route.");
        this.next();
    },
    onRerun: function(){
        console.log("You triggered 'onRerun' for 'listPage' route.");
    },
    onBeforeAction: function(){
        console.log("You triggered 'onBeforeAction' for 'listPage' route.");
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("login");
        }
    },
    onAfterAction: function(){
        console.log("You triggered 'onAfterAction' for 'listPage' route.");
    },
    onStop: function(){
        console.log("You triggered 'onStop' for 'listPage' route.");
    }
});
