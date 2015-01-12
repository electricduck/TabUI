/*

     _____     _     _   _ ___ 
    |_   _|_ _| |__ | | | |_ _|
      | |/ _` | '_ \| | | || | 
      | | (_| | |_) | |_| || | 
      |_|\__,_|_.__/ \___/|___|
      
    tabui.js | main javascript

    Version: Git
     Author: Josh Robertson
    License: Public Domain
     Source: https://github.com/electricduck/TabUI
     
*/

$(document).ready(function ()
{
    $("#tab-btn-1").addClass("tab-active");
    $("#tab-content-1").addClass("tab-active");
    $("#tab-sidebar-1").addClass("tab-active");
    
    $("[id^=tab-btn]").click(function ()
	{
        $("[id^=tab-btn]").removeClass("tab-active");
		$("[id^=tab-content]").removeClass("tab-active");
        $("[id^=tab-sidebar]").removeClass("tab-active");
		var tabGoTo = $(this).prop('id');
		tabGoTo = tabGoTo.substring(8, 11);
		$("#tab-btn-" + tabGoTo).addClass("tab-active");
		$("#tab-content-" + tabGoTo).addClass("tab-active");
        $("#tab-sidebar-" + tabGoTo).addClass("tab-active");
    });
});