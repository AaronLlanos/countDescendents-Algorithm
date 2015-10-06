// Inclusive recursive function counting all connected nodes.
function countDescendentsRecursion(n){
	if (n === null){
		return 0;
	}else{
		return 1+countDescendentsRecursion(n.firstChild)+countDescendentsRecursion(n.nextSibling);
	}
};

// Since we only want to find the descendents of the parent node, pass in parentNode.firstChild.
// If we passed in the parent node, it would count the parent node as a descendent which we do not want.
function countDescendents(n){
	if (n.firstChild === null)
		return 0;
	else
		return countDescendentsRecursion(n.firstChild);
}

// Self calling function
(function(){
	//Define parentNode to be the node to count all descendents. 
	var parentNode = document.getElementById("cont");
	var descendents = countDescendents(parentNode);
	
	console.log(descendents);
})();