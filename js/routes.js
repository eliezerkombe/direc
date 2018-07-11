var routes = [
  // Index page
  {
    path: '/main/',
    url: './pages/main.html',
    on: {
        pageBeforeIn: function (event, page) {
          $$('.title').addClass('forceCenterNavLabel');
          $$('.logo').addClass('forceCenterNavLabel');
        },
    },
    tabs: [
      {
        path: '/',
        id: 'tab1',
        content: '<div class="page-content">'+
                    '<div class="block">'+
                        '<div class="profile-wrapper">'+
                           '<div class="profile-image" style="background:'+bgColor[1]+'">'+fullnameInitial+'</div>'+
                           '<div class="profile-fullname">'+fullname+'</div>'+
                           '<div class="profile-username">'+username+'</div>'+
                           '<div class="profile-qr"><img src="img/qr.png"></div>'+
                        '</div'+
                    '</div>'+
                  '</div>'+
                '</div>',

      },
      {
        path: '/tab2/',
        id: 'tab2',
        content: '<div class="page-content">'+
                    '<div class="block">'+
                      '<div class="list media-list">'+
                        '<ul>'+
                          '<li>'+
                            '<a href="/receipt/" class="item-link item-content">'+
                              '<div class="item-inner">'+
                                '<div class="item-title-row">'+
                                  '<div class="item-title">Barnes and Nobles</div>'+
                                  '<div class="item-after">17:14</div>'+
                                '</div>'+
                                '<div class="item-subtitle">2 items purchased</div>'+
                              '</div>'+
                            '</a>'+
                          '</li>'+
                          '<li>'+
                            '<a href="#" class="item-link item-content">'+
                              '<div class="item-inner">'+
                                '<div class="item-title-row">'+
                                  '<div class="item-title">Walmart</div>'+
                                  '<div class="item-after">yesterday</div>'+
                                '</div>'+
                                '<div class="item-subtitle">3 items purchased</div>'+
                              '</div>'+
                            '</a>'+
                          '</li>'+
                          '<li>'+
                            '<a href="#" class="item-link item-content">'+
                              '<div class="item-inner">'+
                                '<div class="item-title-row">'+
                                  '<div class="item-title">Kroger</div>'+
                                  '<div class="item-after">3 days ago</div>'+
                                '</div>'+
                                '<div class="item-subtitle">1 items purchased</div>'+
                              '</div>'+
                            '</a>'+
                          '</li>'+
                          '<li>'+
                            '<a href="#" class="item-link item-content">'+
                              '<div class="item-inner">'+
                                '<div class="item-title-row">'+
                                  '<div class="item-title">Walgreens</div>'+
                                  '<div class="item-after">1 week ago</div>'+
                                '</div>'+
                                '<div class="item-subtitle">5 items purchased</div>'+
                              '</div>'+
                            '</a>'+
                          '</li>'+
                          '<li>'+
                            '<a href="#" class="item-link item-content">'+
                              '<div class="item-inner">'+
                                '<div class="item-title-row">'+
                                  '<div class="item-title">Walmart</div>'+
                                  '<div class="item-after">2 weeks ago</div>'+
                                '</div>'+
                                '<div class="item-subtitle">2 items purchased</div>'+
                              '</div>'+
                            '</a>'+
                          '</li>'+
                        '</ul>'+
                      '</div>'+
                    '</div>'+
                  '</div>',
      },
      {
        path: '/tab3/',
        id: 'tab3',
        content: '<div class="page-content">'+
                    '<div class="block">'+
                      '<div class="list media-list">'+
                          '<div class="card">'+
                            '<div class="card-header coupon-header">Barnes and nobles</div>'+
                            '<div class="card-content card-content-padding">'+
                                '<h2>BUY 1 Fresh Baked Cookie Get 1 Free</h2>'+
                                '<h4>USE ON YOUR NEXT VISIT!</h4>'+
                                '<p>Starting tomorrow & extending through May 31, 2018 use this coupon to purchase any 1 fresh baked cookie and get one free!</p>'+
                                '<p>To redeem: Present this coupon in the Cafe</p>'+
                                '<div class="barcode">'+
                                  '<div>'+
                                    '<img src="img/barcode.png">'+
                                  '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="card-footer">Visit our website</div>'+
                          '</div>'+
                          '<div class="card">'+
                            '<div class="card-header coupon-header">Panera Bread</div>'+
                            '<div class="card-content card-content-padding">'+
                                '<h2>BUY 1 Coffee and Get 1 Free pas</h2>'+
                                '<h4>USE ON YOUR NEXT VISIT!</h4>'+
                                '<p>Starting tomorrow & extending through June 10th, 2018 use this coupon to purchase a coffee and get one free!</p>'+
                                '<p>To redeem: Present this coupon to the cashier</p>'+
                                '<div class="barcode">'+
                                  '<div>'+
                                    '<img src="img/barcode.png">'+
                                  '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="card-footer">Visit our website</div>'+
                          '</div>'+
                      '</div>'+
                    '</div>'+
                  '</div>',
      },
      {
        path: '/tab4/',
        id: 'tab4',
        content: '<div class="page-content">'+
                    '<div class="block">'+
                      '<div class="card card-header-pic">'+
                        '<div style="background-image:url(img/macys.jpg)" class="card-header align-items-flex-end">Labor day weekend promo</div>'+
                        '<div class="card-content card-content-padding">'+
                          '<p class="date">Posted on January 21, 2015</p>'+
                          '<p>Macys Labor day weekend promo</p>'+
                        '</div>'+
                        '<div class="card-footer"><a href="#" class="link card-link"><i class="icon f7-icons ios-only">star</i></a><a href="#" class="link card-link">Read more</a></div>'+
                      '</div>'+
                      '<div class="card card-header-pic">'+
                        '<div style="background-image:url(img/jcpenney.jpg)" class="card-header align-items-flex-end">Labor day weekend promo 25% off</div>'+
                        '<div class="card-content card-content-padding">'+
                          '<p class="date">Posted on January 21, 2015</p>'+
                          '<p>JCPenney Labor day weekend promo</p>'+
                        '</div>'+
                        '<div class="card-footer"><a href="#" class="link card-link"><i class="f7-icons">star</i></a><a href="#" class="link card-link">Read more</a></div>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                '</div>',
      },
      {
        path: '/tab5/',
        id: 'tab5',
        content: '<div class="page-content">'+
                    '<div class="block">'+
                      '<p>Tab 5 content</p>'+
                      '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p>'+
                      '<p>Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus sed, sint facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequuntur deleniti.</p>'+
                      '<p>Totam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque, est animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet unde delectus a maiores nihil dolores? Natus, perferendis.</p>'+
                    '</div>'+
                  '</div>'+
                '</div>',
      },
    ],
  },
  {
    path: '/search/',
    url: './pages/search.html',
    on: {
        pageBeforeIn: function (event, page) {
          app.panel.close('left');
          $$('.logo').removeClass('showElement');

          $('.receiptSearchTab').on('click', function (e){
            $('.tab-link').removeClass('button-active');
            $(this).addClass('button-active');
            $('.tab-content').removeClass('showElement').addClass('hideElement');
            $('.receiptSearchContent').addClass('showElement');

          });
          $('.couponSearchTab').on('click', function (e){
            $('.tab-link').removeClass('button-active');
            $(this).addClass('button-active');
            $('.tab-content').removeClass('showElement').addClass('hideElement');
            $('.couponSearchContent').addClass('showElement');
          });
          $('.promoSearchTab').on('click', function (e){
            $('.tab-link').removeClass('button-active');
            $(this).addClass('button-active');
            $('.tab-content').removeClass('showElement').addClass('hideElement');
            $('.promoSearchContent').addClass('showElement');
          });
        },
    },
  },
  {
    path: '/notifications/',
    url: './pages/notifications.html',
    on: {
        pageBeforeIn: function (event, page) {
          $$('.title').removeClass('forceCenterNavLabel');
          $$('.logo').removeClass('forceCenterNavLabel');
        }
      },
  },
  {
    path: '/about/',
    url: './pages/about.html',
    on: {
        pageBeforeIn: function (event, page) {
          app.panel.close('left');
          $$('.title').removeClass('forceCenterNavLabel');
          $$('.logo').removeClass('forceCenterNavLabel');
        }
    },
  },
  {
    path: '/token-balance/',
    url: './pages/token-balance.html',
    on: {
        pageBeforeIn: function (event, page) {
          app.panel.close('left');
          $$('.title').removeClass('forceCenterNavLabel');
          $$('.logo').removeClass('forceCenterNavLabel');
        }
    },
  },
  {
    path: '/receipt/',
    url: './pages/receipt.html',
    on: {
        pageBeforeIn: function (event, page) {
          app.panel.close('left');
          $$('.title').removeClass('forceCenterNavLabel');
          $$('.logo').removeClass('forceCenterNavLabel');
        }
    },
  },
  {
    path: '/help/',
    url: './pages/help.html',
    on: {
        pageBeforeIn: function (event, page) {
          app.panel.close('left');
          $$('.title').removeClass('forceCenterNavLabel');
          $$('.logo').removeClass('forceCenterNavLabel');
        }
    },
  },
  {
    path: '/settings/',
    url: './pages/settings.html',
    on: {
        pageBeforeIn: function (event, page) {
          app.panel.close('left');
          $$('.title').removeClass('forceCenterNavLabel');
          $$('.logo').removeClass('forceCenterNavLabel');
        }
    },
  },
  {
    path: '/login/',
    url: './pages/login-screen.html',
    on: {
        pageBeforeIn: function (event, page) {
          app.panel.close('left');
          $$('.title').removeClass('forceCenterNavLabel');
          $$('.logo').removeClass('forceCenterNavLabel');
        }
    },
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
    on: {
        pageBeforeIn: function (event, page) {
          app.panel.close('left');
          $$('.title').removeClass('forceCenterNavLabel');
          $$('.logo').removeClass('forceCenterNavLabel');
        }
    },
  },
];
