//Temorary data
const Applist = [
  {
    Name: "Naad Borole",
    From: "naad.borole2000@gmail.com",
    To: "hod@firstyear.com",
    Status: "Pending",
    DateFrom: "2020-06-14",
    DateTo: "2020-06-17",
    Subject: "Leave for Medical reasons",
    Reason:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis sollicitudin nunc ut laoreet. Suspendisse sed nulla a ligula hendrerit dapibus. Morbi gravida viverra dolor, a varius nibh pellentesque in. Nullam porttitor rhoncus nisl, sed porttitor ex porttitor nec. Ut vitae placerat tortor. Mauris bibendum sit amet augue quis rutrum. Nam tempus tellus vel arcu varius, a placerat odio elementum. Donec molestie enim leo. Sed rhoncus massa mi, id fringilla libero faucibus id. Morbi tincidunt mauris a ipsum porttitor, vitae congue magna venenatis. Aliquam tempus eros nec blandit laoreet. Ut augue lectus, aliquam eu fringilla a, scelerisque non massa. Morbi facilisis metus at enim posuere, bibendum placerat lectus sodales.",
    Type: "Medical",
  },
  {
    Name: "Naad Borole",
    From: "naad.borole2000@gmail.com",
    To: "hod@firstyear.com",
    Status: "Rejected",
    DateFrom: "2020-06-14",
    DateTo: "2020-06-17",
    Subject: "Requesting leave for personal reasons",
    Reason: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis sollicitudin nunc ut laoreet. Suspendisse sed nulla a ligula hendrerit dapibus. Morbi gravida viverra dolor, a varius nibh pellentesque in. Nullam porttitor rhoncus nisl, sed porttitor ex porttitor nec. Ut vitae placerat tortor. Mauris bibendum sit amet augue quis rutrum. Nam tempus tellus vel arcu varius, a placerat odio elementum. Donec molestie enim leo. Sed rhoncus massa mi, id fringilla libero faucibus id. Morbi tincidunt mauris a ipsum porttitor, vitae congue magna venenatis. Aliquam tempus eros nec blandit laoreet. Ut augue lectus, aliquam eu fringilla a, scelerisque non massa. Morbi facilisis metus at enim posuere, bibendum placerat lectus sodales.",
    Type: "Other",
  },
  {
    Name: "Naad Borole",
    From: "naad.borole2000@gmail.com",
    To: "hod@firstyear.com",
    Status: "Approved",
    DateFrom: "2020-06-14",
    DateTo: "2020-06-17",
    Subject: "Requesting leave for personal reasons",
    Reason: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis sollicitudin nunc ut laoreet. Suspendisse sed nulla a ligula hendrerit dapibus. Morbi gravida viverra dolor, a varius nibh pellentesque in. Nullam porttitor rhoncus nisl, sed porttitor ex porttitor nec. Ut vitae placerat tortor. Mauris bibendum sit amet augue quis rutrum. Nam tempus tellus vel arcu varius, a placerat odio elementum. Donec molestie enim leo. Sed rhoncus massa mi, id fringilla libero faucibus id. Morbi tincidunt mauris a ipsum porttitor, vitae congue magna venenatis. Aliquam tempus eros nec blandit laoreet. Ut augue lectus, aliquam eu fringilla a, scelerisque non massa. Morbi facilisis metus at enim posuere, bibendum placerat lectus sodales.",
    Type: "Other",
  },
  {
    Name: "Aniket Rathod",
    From: "naad.borole2000@gmail.com",
    To: "hod@firstyear.com",
    Status: "Pending",
    DateFrom: "2020-06-14",
    DateTo: "2020-06-17",
    Subject: "Leave for Medical reasons",
    Reason:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis sollicitudin nunc ut laoreet. Suspendisse sed nulla a ligula hendrerit dapibus. Morbi gravida viverra dolor, a varius nibh pellentesque in. Nullam porttitor rhoncus nisl, sed porttitor ex porttitor nec. Ut vitae placerat tortor. Mauris bibendum sit amet augue quis rutrum. Nam tempus tellus vel arcu varius, a placerat odio elementum. Donec molestie enim leo. Sed rhoncus massa mi, id fringilla libero faucibus id. Morbi tincidunt mauris a ipsum porttitor, vitae congue magna venenatis. Aliquam tempus eros nec blandit laoreet. Ut augue lectus, aliquam eu fringilla a, scelerisque non massa. Morbi facilisis metus at enim posuere, bibendum placerat lectus sodales.",
    Type: "Medical",
  }
];

let currstartind = 0;

function updateUIList(Applist, indexstart){
    indexstart = Math.min(Applist.length-1, indexstart);
    indexEnd = Math.min(indexstart+2, Applist.length-1);
    let entrynum = 1;
    $('#entry1').show();
    $('#entry2').show();
    $('#entry3').show();
    for(let i = indexstart; i<=indexEnd; i++){
      let obj = Applist[i];
      $("#name"+entrynum).html(obj.Name);
      $("#email"+entrynum).html(obj.From);
      $("#from"+entrynum).html(obj.DateFrom);
      $("#to"+entrynum).html(obj.DateTo);
      $("#Type"+entrynum).html(obj.Type);
      $("#Status"+entrynum).html(obj.Status);
      $("#Status"+entrynum).removeClass("text-info");
      $("#Status"+entrynum).removeClass("text-danger");
      $("#Status"+entrynum).removeClass("text-success");
      switch(obj.Status){
        case "Approved":{
          $("#Status"+entrynum).addClass("text-success");
        } break;
        case "Pending":{
          $("#Status"+entrynum).addClass("text-info");
        } break;
        case "Rejected":{
          $("#Status"+entrynum).addClass("text-danger");
        } break;
      }
      entrynum++;
    }
    if(entrynum < 4){
      for(let i=entrynum; i<=3; i++){
        $("#entry"+i).hide();
      }
    }
}

$("#prev").attr("disabled", true);
if(Applist.length-1 <= currstartind+2){
  $("#next").attr("disabled", true);
}


function prev(){
  currstartind -= 3;
  currstartind = Math.max(0, currstartind);
  updateUIList(Applist, currstartind);
  if(currstartind == 0){
    $("#prev").attr("disabled", true);
  }
  else{
    $("#prev").attr("disabled", false);
  }
  if(currstartind < Applist.length){
    $("#next").attr("disabled", false);
  }
}

function next(){
  currstartind += 3;
  currstartind = Math.min(Applist.length-1, currstartind);
  updateUIList(Applist, currstartind);
  if(currstartind == Applist.length-1){
    $("#next").attr("disabled", true);
  }
  else{
    $("#next").attr("disabled", false);
  }
  if(currstartind>=2){
    $("#prev").attr("disabled", false);
  }
}

window.onload(updateUIList(Applist, 0));