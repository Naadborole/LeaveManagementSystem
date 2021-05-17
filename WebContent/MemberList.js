var arrData = [
    {
        FirstName : "Aniket",
        LastName: "Rathod",
        Email : "abr63499@gmail.com",
        TotalLeaves : 10
    },
    {
        FirstName : "Naad",
        LastName: "Borole",
        Email : "naadborole2000@gmail.com",
        TotalLeaves : 20
    },
    {
        FirstName : "om",
        LastName: "shende",
        Email : "omshende2308@gmail.com",
        TotalLeaves : 20
    }
];
insertList();
function insertList()
{
    for(var i = 0 ; i < arrData.length ; i++)
    {
        /*document.getElementById("memberName").innerHTML = arrData[i].FirstName+" "+arrData[i].LastName;
        document.getElementById("memberEmail").innerHTML = arrData[i].Email;
        document.getElementById("Leaves").innerHTML = "Total Leaves Available : " + arrData[i].TotalLeaves;*/
        /*$("#memberName").html(arrData[i].FirstName + " " + arrData[i].LastName);
        $("#memberEmail").html(arrData[i].Email);
        $("#Leaves").html("Total Leaves available : " + arrData[i].TotalLeaves);*/
        var div1 = document.createElement('div');
        div1.className = 'card card-pad h-auto w-75 mx-auto card-shadow';
        //div1.style.borderColor = "#e00";   
        div1.innerHTML = '<div class="row-flex"><div class="col-md-8"><h4 class="card-title" id="memberName">'+arrData[i].FirstName+" "+arrData[i].LastName+'</h4><h5 class="card-subtitle mb-2 text-muted" id="memberEmail">'+arrData[i].Email+'</h5> </div><div class="col-md-4 my-auto"><h4 class="card-title" id="Leaves">Total Leaves available :  '+ arrData[i].TotalLeaves+'</h4></div></div>';
        $(".col-md").append(div1);
        $(".col-md").append('<br/>')
        //div1.appendTo('.col-md');
        //elements = elements.add('<div class="">'+x+'</div>');
    }
}

