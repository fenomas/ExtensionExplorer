
// controller for angular.js main page logic

function pageCtrl($scope) {
    
    $scope.headerURL = "tpl/header.html";
    $scope.navURL = "tpl/nav.html";
    $scope.bodyURL = "tpl/body.html";
    $scope.headerTitle = "Extension Explorer";
    $scope.dat = {}; // misc use
    
    $scope.sections = [
		"AppSkinInfo",
		"RunScript",
		"colorPicker",
		"HostEnvironment",
		"PlaceHolder", "PlaceHolder", "PlaceHolder", "PlaceHolder", "PlaceHolder", "PlaceHolder", 
		"PlaceHolder", "PlaceHolder", "PlaceHolder", "PlaceHolder", "PlaceHolder", "PlaceHolder", 
		"PlaceHolder", "PlaceHolder", "PlaceHolder", "PlaceHolder", "PlaceHolder", "PlaceHolder", 
    ];
    
    $scope.navTo = function (section) {
        $scope.headerTitle = section;
        // hack to avoid caching - remove later
        var bork = "?"+Math.random();
        $scope.bodyURL = "tpl/pages/"+section+".html"+bork;
    };
    
    // CSS settings to be changed based on container theme
    $scope.mainCSS = "css/main-dark.css";
    $scope.topcoatCSS = "topcoat/css/topcoat-mobile-dark.min.css";
    
}

// set up some extension management when main body loads
function onBodyLoaded() {
	if (window.__adobe_cep__) {
		new CSInterface().addEventListener(CSInterface.THEME_COLOR_CHANGED_EVENT, function(event) {
			setCSSbyThemeColor();
		});
		setCSSbyThemeColor();
	} else {
		// this is reached if we're not inside a CC tool container
	}
}


function setCSSbyThemeColor() {
	// Should get a latest HostEnvironment object from application.
    var skinInfo = JSON.parse(window.__adobe_cep__.getHostEnvironment()).appSkinInfo;
    
    var bgColor = skinInfo.panelBackgroundColor.color;
    var gray = (bgColor.red+bgColor.blue+bgColor.green)/3;
    
    // peek inside angular's scope to change the css settings
    var scope = angular.element(document).scope();
    
	scope.$apply(function(){
		if (gray > 128) {
		    scope.topcoatCSS = "topcoat/css/topcoat-mobile-light.min.css"; 
			scope.mainCSS = "css/main-light.css";
		} else {
		    scope.topcoatCSS = "topcoat/css/topcoat-mobile-dark.min.css"; 
			scope.mainCSS = "css/main-dark.css";
		}
    });
}



