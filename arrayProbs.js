function printReverse(arr)
{
	for(var i=arr.length-1;i>=0;i--) 
	{
		console.log(arr[i]);
	}
}

printReverse([1,2,3,4]);
printReverse(["a", "b", "c"]);


function isUniform(arr1)
{
	var ele=arr1[0];
	for(var i=0;i<arr1.length;i++)
	{
		if(arr1[i]!==ele)
		{
			return false;
		}	
	}
	return true;
}

isUniform([1,1,1,1]);
isUniform([2,1,1,1]);


function sumArray(arr2)
{
	var sum=0;
	arr2.forEach(function(element)
	{
		sum+=element;
	});
	console.log(sum);
}

sumArray([1,2,3,4,5]);


function max(arr3)
{
	var max=arr3[0];
	arr3.forEach(function(element)
	{
		if(element>max)
			max=element;
	});
	console.log(max);
}

max([10,3,27,15,21]);