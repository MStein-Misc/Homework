
(function () {
    'use strict';
    let list;
    $.getJSON('vidList.json', data => {
        const ul = $('#vidList');
        list = data;
        data.forEach(x => {
            ul.append(`<li>${x.Name}</li>`);
        });
    })
    $('li').click(e => {

        $(this).append(`<video src="${list[e.target.textContent][url]}" controls></video>`)
    })
}());

function ji(){
    this.k ='l';
}
function name(params) {

}
/**
 * @param  {string} args
 * @param {ji} number
 * 
 */
var a = function (args, number) {
    number = new ji();

};
a