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
	
	menuIconContainer.addEventListener('click', function(e)
	{
		openCloseMenu();
	}, false);
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
			navList.style.display = "block";
			for(var i = 0; i < navItemsLength; i++)
			{
				navItems[i].style.display =  "block";
			}
			navList.className = "nav-ul open";
		}
		else
		{
			navList.style.display = "";
			for(var i = 0; i < navItemsLength; i++)
			{
				navItems[i].style.display =  "";
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