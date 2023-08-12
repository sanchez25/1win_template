$.fn.moreNav = function() {
	var nav = $(this);
	
	function setMoreNav() {
		
		var nav_width = nav.outerWidth(),
			nav_elem_width = 0,
			more_link = $('<li class="more"><a href="#">Еще</a><ul></ul></li>'),
			class_nav_item = 'nav-item',
			class_nav_item_more = 'nav-item-more';
		
		if( nav.find('.more').length > 0 ) {
			nav.append(nav.find('.more ul li'));
			nav.find('.more').remove();
		} 
		
		$.each(nav.find('li'), function(i, elem){
			var elem_width = $(elem).outerWidth();
			
			nav_elem_width += elem_width;
		});
		
		if( nav_elem_width > nav_width ) {
			nav.append(more_link);
			nav_width -= more_link.outerWidth();
			
			nav_elem_width = 0;
			
			$.each(nav.find('li'), function(i, elem){
				var elem_width = $(elem).outerWidth();
				
				nav_elem_width += elem_width;
				
				if( !$(elem).is('.more') ) {
					if( nav_elem_width < nav_width ) {
						$(elem).addClass(class_nav_item).removeClass(class_nav_item_more);
					} else {
						$(elem).addClass(class_nav_item_more).removeClass(class_nav_item);
					}
				}
			});
		}
		
		more_link.find('ul').append($('.' + class_nav_item_more));
		
	}
	setMoreNav();
	$(window).resize(function(){
		setMoreNav();
	});
};