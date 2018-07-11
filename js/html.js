var fullname = 'John Doe';
var username = 'johndoe';
fullnameInitial = fullname.charAt(0);
var rootUrl = document.location.pathname.split('index.html')[0];

var bgColorArray = ['green', 'orange', 'purple', 'brown', 'blueviolet'];
var bgColor = shuffle(bgColorArray);

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
}

function printNavBar(left, title, right){

	var menuBtn =	'<a href="#" class="link icon-only panel-open" data-panel="left">'+
	                  '<i class="icon f7-icons ios-only">menu</i>'+
	                  '<i class="icon material-icons md-only">menu</i>'+
	                '</a>';
	var backBtn =	'<a href="#" class="link back">'+
		              '<i class="icon icon-back"></i>'+
		              '<span class="ios-only">Back</span>'+
		            '</a>';
    var alertBtn = 	'<a href="/about/" class="tab-link">'+
                      '<i class="icon f7-icons ios-only">bell<span class="badge color-red"></span></i>'+
                      '<i class="icon material-icons md-only">bell<span class="badge color-red"></span></i>'+
                    '</a>';
    var logo = '';


    //CONDITIONAL VARS
    var loggedIn = (localStorage.access_token) ? true : false;
	var topLeftBtn = (left == 'menu') ? menuBtn : backBtn;
	var ttl = (title == 'logo') ? logo : title;
	var topRightBtn = (right == 'notifications' && loggedIn == true) ? alertBtn : '';

	var navBar =  '<div class="navbar">'+
                    '<div class="navbar-inner sliding">'+
                      '<div class="left">'+
                        topLeftBtn+
                      '</div>'+
                      '<div class="title">'
        				ttl+
       	    		  '</div>'+
                      '<div class="right">'+
                        topRightBtn+
                      '</div>'+
                    '</div>'+
                  '</div>';

    return navBar;

}

function printPageContent(pageName){

	var exploreHtml = '<div class="page-content">'+
	                    '<div class="block">'+
	                      '<p>Explore Page</p>'+
	                      '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p>'+
	                      '<p>Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus sed, sint facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequuntur deleniti.</p>'+
	                      '<p>Totam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque, est animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet unde delectus a maiores nihil dolores? Natus, perferendis.</p>'+
	                    '</div>'+
	                  '</div>';

    var homeHtml = '<div class="page-content">'+
                    '<div class="block">'+
                      '<p>Home Page</p>'+
                      '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p>'+
                      '<p>Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus sed, sint facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequuntur deleniti.</p>'+
                      '<p>Totam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque, est animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet unde delectus a maiores nihil dolores? Natus, perferendis.</p>'+
                    '</div>'+
                  '</div>';
    
    var profileHtml = '<div class="page-content">'+
	                    '<div class="block">'+
	                      '<p>Profile Page</p>'+
	                      '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p>'+
	                      '<p>Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus sed, sint facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequuntur deleniti.</p>'+
	                      '<p>Totam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque, est animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet unde delectus a maiores nihil dolores? Natus, perferendis.</p>'+
	                    '</div>'+
	                  '</div>';

    var searchHtml = '<div class="page-content">'+
	                    '<div class="block">'+
	                      '<p>Search Page</p>'+
	                      '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p>'+
	                      '<p>Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus sed, sint facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequuntur deleniti.</p>'+
	                      '<p>Totam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque, est animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet unde delectus a maiores nihil dolores? Natus, perferendis.</p>'+
	                    '</div>'+
	                  '</div>';

    var challengeHtml = '<div class="page-content">'+
		                    '<div class="block">'+
		                      '<p>Challenge Page</p>'+
		                      '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p>'+
		                      '<p>Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus sed, sint facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequuntur deleniti.</p>'+
		                      '<p>Totam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque, est animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet unde delectus a maiores nihil dolores? Natus, perferendis.</p>'+
		                    '</div>'+
		                  '</div>';

    var notificationsHtml = '<div class="page-content">'+
			                    '<div class="block">'+
			                      '<p>Settings Page</p>'+
			                      '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p>'+
			                      '<p>Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus sed, sint facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequuntur deleniti.</p>'+
			                      '<p>Totam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque, est animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet unde delectus a maiores nihil dolores? Natus, perferendis.</p>'+
			                    '</div>'+
			                '</div>';

	var settingsHtml = '<div class="page-content">'+
		                    '<div class="block">'+
		                      '<p>Settings Page</p>'+
		                      '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p>'+
		                      '<p>Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus sed, sint facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequuntur deleniti.</p>'+
		                      '<p>Totam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque, est animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet unde delectus a maiores nihil dolores? Natus, perferendis.</p>'+
		                    '</div>'+
		                  '</div>';

    var messagesHtml = '<div class="page-content">'+
		                    '<div class="block">'+
		                      '<p>Messages Page</p>'+
		                      '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p>'+
		                      '<p>Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus sed, sint facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequuntur deleniti.</p>'+
		                      '<p>Totam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque, est animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet unde delectus a maiores nihil dolores? Natus, perferendis.</p>'+
		                    '</div>'+
		                  '</div>';

	var helpHtml = '<div class="page-content">'+
						'<div class="block">'+
						  '<p>Help Page</p>'+
						  '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p>'+
						  '<p>Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus sed, sint facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequuntur deleniti.</p>'+
						  '<p>Totam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque, est animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet unde delectus a maiores nihil dolores? Natus, perferendis.</p>'+
						'</div>'+
					'</div>';

	var aboutHtml = '<div class="page-content">'+
						'<div class="block">'+
						  '<p>About Page</p>'+
						  '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p>'+
						  '<p>Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus sed, sint facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequuntur deleniti.</p>'+
						  '<p>Totam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque, est animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet unde delectus a maiores nihil dolores? Natus, perferendis.</p>'+
						'</div>'+
					'</div>';

	return content;

}



