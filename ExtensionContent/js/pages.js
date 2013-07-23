

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


function runScriptCtrl($scope) {
    
	$scope.scriptText = "$.colorPicker(-1);";
	$scope.scriptOutput = "";
	$scope.showOutput = false;
    
    $scope.run = function() {
        try {
	        new CSInterface().evalScript( $scope.scriptText, function(e) {
	        	if (e) {
	        		$scope.scriptOutput = e.toString();
	        	}
	        } );
        } catch(e) {
        	$scope.scriptOutput = e.toString();
        }
        $scope.showOutput = ($scope.scriptOutput);
    };
    
}



