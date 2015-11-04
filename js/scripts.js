window.onload = function()
{
	menuHandler();
	animations();
}

function menuHandler()
{
	var menuIconContainer = document.getElementById("menu-icon-container"),
		mainContainer = document.getElementById("main"),
		navList = document.getElementsByClassName("nav-ul")[0],
		navItems = document.getElementsByClassName("nav-li"),
		navItemsLength = navItems.length;
	
	// Click on Menu label or icon to expand
	menuIconContainer.addEventListener('click', function(e)
	{
		openCloseMenu();
	}, false);

	// Click outside menu to close
	mainContainer.addEventListener('click', function(e)
	{
		if(navList.className !== "nav-ul")
		{
			openCloseMenu();
		}
	}, false);

	function openCloseMenu()
	{
		if(navList.className === "nav-ul")
		{			
			for(var i = 0; i < navItemsLength; i++)
			{
				TweenLite.set(navItems[i], {height: "auto", display: "block", opacity: 1});
			}
			TweenLite.set(navList, {height: "auto", display: "block"});
			TweenLite.from(navItems, .2, {
				height: 0
			});
			navList.className = "nav-ul open";
		}
		else
		{
			TweenLite.to(navList, .2, {height: 0});
			for(var i = 0; i < navItemsLength; i++)
			{
				TweenLite.to(navItems[i], 0, {opacity: 0});
			}
			navList.className = "nav-ul";
		}
	}
}

function animations()
{
	var productFeatureBlur = document.getElementById('product-feature-blur');
	CSSPlugin.defaultForce3D = false;
	
	new Waypoint({
		element: productFeatureBlur,
		handler: function(direction)
		{
			if (direction === "down")
			{
				TweenLite.to(productFeatureBlur, 2, {
					css: {'opacity': '0'},
					ease: Power1.easeOut
				});
			}
			else
			{
				TweenLite.to(productFeatureBlur, 2, {
					css: {'opacity': '1'},
					ease: Power1.easeOut
				});
			}
		},
		offset: 600
	});

	new Waypoint({
		element: productFeatureBlur,
		handler: function(direction)
		{
			if (direction === "down")
			{
				TweenLite.to(productFeatureBlur, 2, {
					css: {'opacity': '1'},
					ease: Power1.easeOut
				});
			}
		},
		offset: 700
	});
}