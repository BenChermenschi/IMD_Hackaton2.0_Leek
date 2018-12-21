/* DROPDOWN MENU */

var mobileIcon = document.querySelector('.dropdown_menu'); // Selecting menu icon
var check = true; // Looking if dropdown is already selected or not

mobileIcon.addEventListener('click', function() { // Click Event

    // Selecting mobile navigation
    var navigation = document.querySelector('.mobile_navigation');
    var hamburger = document.querySelector('.dropdown_menu');

    // Creating transitions for mobile navigation
    navigation.style.WebkitTransition = "all .3s";
    navigation.style.transition = "all .3s";

    // Selecting all mobile menu icon elements
    var navLine1 = document.querySelector('#menu_line_1');
    var navLine2 = document.querySelector('#menu_line_2');
    var navLine3 = document.querySelector('#menu_line_3');

    // Creating transitions for mobile menu icon
    navLine1.style.WebkitTransition = "all .3s";
    navLine1.style.transition = "all .3s";
    navLine2.style.WebkitTransition = "all .3s";
    navLine2.style.transition = "all .3s";
    navLine3.style.WebkitTransition = "all .3s";
    navLine3.style.transition = "all .3s";


    if (check === true) {

        // Create fixed position for icon and navigation
        mobileIcon.style.position = "fixed";

        navigation.style.height = "100vh";
        navigation.style.position = "fixed";
        navigation.style.paddingTop = "6em";

        navLine1.style.transform = "rotate(-45deg)";
        navLine1.style.top = "10px";
        
        navLine2.style.opacity = "0"; // Remove 2nd line
        navLine3.style.transform = "rotate(45deg)";
        navLine3.style.bottom = "10px";
        

        check = false;

    } else {

        // Removing fixed position from icon en navigation
        mobileIcon.style.position = "absolute";

        navigation.style.height = "0";
        navigation.style.paddingTop = "0";

        navLine1.style.transform = "rotate(0deg)";
        navLine1.style.top = "0px";
        
        navLine2.style.opacity = "1"; // Show 2nd line
        navLine3.style.transform = "rotate(0deg)";
        navLine3.style.bottom = "0px";
        

        check = true;

    }

    // Mobile navigation close onclick links
    navigationLinks = $('.mobile_navigation_link');
    navigationLinks.on('click', function() {
        // Removing fixed position from icon en navigation

        mobileIcon.style.opacity = "0";
        navigation.style.opacity = "0";

        setTimeout (function() {
            mobileIcon.style.position = "absolute";
            navigation.style.position = "absolute";

            navigation.style.height = "0";
            navigation.style.paddingTop = "0";


            navLine1.style.transform = "rotate(0deg)";
            navLine1.style.top = "0px";
            
            navLine2.style.opacity = "1"; // Show 2nd line
            navLine3.style.transform = "rotate(0deg)";
            navLine3.style.bottom = "0px";
            
        }, 200);

        setTimeout(function() {
            mobileIcon.style.opacity = "1";
            navigation.style.opacity = "1";
        }, 450);


        check = true;
    });

});