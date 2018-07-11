// Dom7
var $$ = Dom7;

// Theme
var theme = 'ios';

// Init App
var app = new Framework7({
  id: 'com.drec.app',
  root: '#drec',
  theme: 'ios',
  panel: { swipe: 'left' },
  routes: routes,
  statusbar: { iosOverlaysWebview: true },
  precompileTemplates: true,
  template7Pages: true,
});

var mainView = app.views.create('.view-main', {
  url: '/login/'
});
/*
var template = $$('#navBar').html();
Template7.registerHelper('if', function (condition, options) {

});
// compile it with Template7
var compiledTemplate = Template7.compile(template);
// Now we may render our compiled template by passing required context
var context = {
    menu: true,
    title: 'Title',
    loggedIn: true,
    logo: false,
};
var html = compiledTemplate(context);
*/
app.on('tabShow', function (obj) {
    //alert(JSON.stringify(obj.f7TabRoute.route.tab.id));
    if(obj.f7TabRoute.route.tab.id == 'tab1'){

      $$('.searchBtn, .searchBtn-label').removeClass('showElement');
      $$('.menuBtn, .notfBtn, .logo').addClass('showElement');
      $$('.title').css({'left':'0'});
      $$('.logo').css({'left':'0'});

    }else if(obj.f7TabRoute.route.tab.id == 'tab2'){

      $$('.menuBtn, .notfBtn, .logo').removeClass('showElement');
      $$('.searchBtn, .searchBtn-label').addClass('showElement');

    }else if(obj.f7TabRoute.route.tab.id == 'tab3'){
      $$('.menuBtn, .notfBtn, .logo').removeClass('showElement');
      $$('.searchBtn, .searchBtn-label').addClass('showElement');

    }else if(obj.f7TabRoute.route.tab.id == 'tab4'){
      $$('.menuBtn, .notfBtn, .logo').removeClass('showElement');
      $$('.searchBtn, .searchBtn-label').addClass('showElement');

    }

});