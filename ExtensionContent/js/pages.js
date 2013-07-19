

// miscellaneous JS needed by subpages



function colorPickerCtrl($scope) {
    
	$scope.pickedColor = "--";
    
    $scope.pick = function() {
        var color = "unset";
        
        try {
	        new CSInterface().evalScript('$.colorPicker(-1)', function(e) {  
	        	color = e;
	        } );
        } catch(e) {
            color = "Try this in a CC app.";
        }
        $scope.pickedColor = color;
    };
    
}



