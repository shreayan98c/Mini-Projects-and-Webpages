var moviesDB = [
	{
	rating: 5,
	name: "In Bruges",
	hasWatched: true
	},
	{
	name: "Frozen",
	rating: 4.5,
	hasWatched: false
	},
	{
	name: "Mad Max Fury Road",
	rating: 4.5,
	hasWatched: true
	},
	{
	name: "Les Miserables",
	rating: 3.5,
	hasWatched: false
	}
];

for(var i=0; i<moviesDB.length;i++)
{
	if(moviesDB[i].hasWatched===true)
		console.log("You have watched \"" + moviesDB[i].name + "\" - " + moviesDB[i].rating + " stars");
	else
		console.log("You have not seen \"" + moviesDB[i].name + "\" - " + moviesDB[i].rating + " stars");

}