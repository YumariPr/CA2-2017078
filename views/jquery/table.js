//The code used throughout the program was part facilitated by the teacher, the use of a template and code managed by me.
//Yumari Peña. Student number 2017078.

function draw_table()
{
	$("#results").empty();
	$.getJSONuncached = function (url)
	{
		return $.ajax(
		{
			url: url,
			type: 'GET',
			cache: false,
			success: function (html)
			{
				$("#results").append(html);
				select_row();
			}
		});
	};
    $.getJSONuncached("/get/html")
    //$.getJSONuncached("/get/html" + '.env')
};

function select_row()
{
	$("#menuTable tbody tr[id]").click(function ()
	{
		$(".selected").removeClass("selected");
		$(this).addClass("selected");
		var section = $(this).prevAll("tr").children("td[colspan='3']").length - 1;
		var entree = $(this).attr("id") - 1;
		delete_row(section, entree);
	})
};

function delete_row(sec, ent)
{
	$("#delete").click(function ()
	{
		$.ajax(
		{
			url: "/post/delete",
			type: "POST",
			data:
			{
				section: sec,
				entree: ent
			},
			cache: false,
			success: setTimeout(draw_table, 1000)
		})
	})
};

$(document).ready(function ()
{
	draw_table();
});

function createPtable(formulario){
    let productList = '';
  //  $.each(formulario, function(index){

        $.ajax(
		{
			url: "https://3000-c436533f-e8d7-4bf5-8430-d4f4f3497532.ws-us02.gitpod.io/",
			type: "POST",
			data:
			{
				item: formulario.item.value,
				price: formulario.price.value
			},
			dataType: 'json',
			success: function(formulario){

            }
		})
        //productList += '<tr id="'+data[index]._id+'">'
   // })

};
/*function update_row(sec, ent)
{
    $("#update").click(function()){
        $.jax(
            {
                url: "/post/update",
                type: "POST",
                data:
                {
                    section: sec,
                    entree: ent
                },
                cache: false,
                success: setTimeout(draw_table, 1000)
            })
    })

};*/
/*
function productList(){
    $.ajax({
        url:'',
        type: 'GET',
        dataType:'jason',
        cache: false,
        success: function(data){
            createPtable(data);
        }
    });
}

function createPtable(){
    let productList = '';
    $.each(data, function(index){
        productList += '<tr id="'+data[index]._id+'">'
    })

}
*/