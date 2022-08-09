var coll = document.getElementsByClassName("collapsible");
var c;

for (c = 0; c < coll.length; c++)
{
	coll[c].addEventListener("click", function()
	{
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.maxHeight)
		{
			content.style.maxHeight = null;
		}
		else
		{
			content.style.maxHeight = content.scrollHeight + "px";
		}
	});
}