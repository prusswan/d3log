
$(function() {
	Profile.initialize();
});

var Profile = {

	/**
	 * ID of last hero played.
	 */
	lastHero: 0,

	/**
	 * List of all heroes.
	 */
	heroes: [],

	/**
	 * Base URL of the profile.
	 */
	baseUrl: '',
	
	/**
	 * First ajax flag (to suppress first ajax call)
	 */
	suppressAjaxLoad: false,

	/**
	 * Setup events.
	 */
	initialize: function() {
		$('#stats-toggle').live('click', Profile.toggleDetailedStats);
		$('#bonuses a').live('click', Profile.switchActiveGearBonus);
		$('#bonuses-toggle').live('click', Profile.toggleGearBonuses);
		$('#stats-menu a').live('click', Profile.viewStats);
		$('.profile-wrapper .tab-menu').delegate('li.tab-disabled a', 'mouseover', function() {
			var $this = $(this),
				message = MsgProfile.tooltip.friends.notAuthenticated;
			if (message) {
				Tooltip.show(this, message);
			}
		});
		
		$('.hero-tabs a').live('click', function(e) {
			e.preventDefault();
			e.stopPropagation();
			
			var node = $(e.currentTarget);
			var heroId = node.attr("href");
			
			Profile.loadHero(heroId, node, true);
		});	
		
	},

	/**
	 * Find a hero within the heroes list.
	 *
	 * @param id
	 * @return object|null
	 */
	getHero: function(id) {
		var heroes = Profile.heroes;

		for (var i = 0, l = heroes.length; i <= l; i++) {
			if (heroes[i].id == id) {
				return heroes[i];
			}
		}

		return null;
	},

	/**
	 * Load a hero's character profile via AJAX and update the URL with the history API.
	 *
	 * @param id
	 */
	loadHero: function(id, linkNode, addHistory) {
		id = id || Profile.lastHero;

		var hero = Profile.getHero(id),
			url = Profile.baseUrl + 'hero/' + id;

		if (!hero) {
			return false;
		}

		if (!window.history.pushState) {
			location.href = url;
			return false;
		}

		linkNode.addClass("loading");
		
		$.ajax({
			url: url + '.frag',
			type: 'GET',
			cache: true,
			dataType: 'html',
			success: function(response) {
				$('#profile-body').html(response);				
			}
		});		
		
		if (addHistory) {
			window.history.pushState(hero, hero.name, url);
		}
	},

	/**
	 * Toggle the display of hidden gear bonuses.
	 *
	 * @param e
	 */
	toggleGearBonuses: function(e) {
		e.preventDefault();
		e.stopPropagation();

		var node = $(e.currentTarget),
			target = $('#bonuses');

		target.find('li').show();
		node.hide();
	},

	/**
	 * Toggle the detailed statistics.
	 *
	 * @param e
	 */
	toggleDetailedStats: function(e) {
		e.preventDefault();
		e.stopPropagation();

		var node = $(e.currentTarget),
			target = $('#stats');

		target.toggle();
		node.toggleClass('opened');
		node.find('span').toggle();
	},

	/**
	 * Changes the active gear bonus
	 */
	switchActiveGearBonus: function(e) {
		e.preventDefault();
		e.stopPropagation();

		var node = $(e.currentTarget),
		    parent = $('#bonuses');

		//toggle radio display
		$('.active', parent).removeClass('active');
		$('.bonus-radio', node).addClass('active');

		var nodeData = node.data("bonus-index");

		var gearLabels = $('#gear-labels');
		gearLabels.find('.bonus-value').hide();
		gearLabels.find('.bonus-' + nodeData).show();

	},

	/**
	 * Toggle between the hero and follower stats.
	 *
	 * @param e
	 */
	viewStats: function(e) {
		var node = $(e.currentTarget);

		$('#stats-menu a').removeClass('menu-active');
		node.addClass('menu-active');

		$('.stats-wrapper').hide();
		$('#stats-' + node.data('slug')).show();
	},
	/**
	 * Bind history for ajax calls
	 * 
	 */	
	bindHistory: function() {
		//bind history for back button for supported browsers
		if (window.history.pushState) {
			window.onpopstate = function(event) {
				if (window.history.state) {
					var historyData = window.history.state;
					if (Profile.suppressAjaxLoad) {
						Profile.suppressAjaxLoad = false;
					} else {
						var heroId = historyData.id;
						Profile.loadHero(heroId, $('a[href="' + heroId + '"]'), false);
					}
				}
			}
		}		
	}

};