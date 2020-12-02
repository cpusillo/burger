$(document).ready (function(){

$(function(){
    $.ajax("/burgers",{
    type: "GET",
    }).then(function(data){
        let eatBurger = $("#eat-burger");
        let deleteBurger = $("#delete-burger");

        let burgers = data.burgers;
        let length = burgers.length;

        let ul_elem_eat = $("#eat-burger")
        let ul_elem_del = $("#delete-burger")

        for (var i = 0; i < length; i++) {
            if (burgers[i].devoured === 0){
            ul_elem_eat.append("<li>"+
            "<button data-burgerid='"+
            burgers[i].id+"' class='btn btn-danger eat'>Eat!</button>"
            +burgers[i].burger_name+"</li>")
        }
        else {
            ul_elem_del.append("<li>"+
            "<button data-burgerid='"+
            burgers[i].id+"' class='btn btn-danger eat'>Delete!</button>"
            +burgers[i].burger_name+"</li>")
        }
          }
    })
})
});
