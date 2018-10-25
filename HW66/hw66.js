
var PotatoHead = {};
(function () {
    'use strict';

    var $pieces, $pallettepieces, $body, $selectedPiece, offset;

    PotatoHead.init = function () {
        $pieces = $('.piece');
        $body = $('body');
        // $pieces = $.extend(true, $pieces, $pallettepieces);
        bindUI();
    }

    function bindUI() {
        console.log('here');
        // $pallettepieces.mousedown(pallettepiece)
        $pieces.mousedown(pieceClick);
        $body.mousemove(pieceMove);
        $body.mouseup(pieceDrop);
    }

    // function pallettepiece(e){
    //     $selectedPiece = $(e.target).clone().css({ position: 'absolute', top: e.target.offsetTop, left: e.target.offsetTop }).appendTo($body);

    //     pieceClick(e);
    // }

    function pieceClick(e) {
        // console.log($body);
        $selectedPiece = $(e.target);
        offset = { x: e.offsetX, y: e.offsetY };
        // console.log($pieces);
        // console.log($selectedPiece);
    }

    function pieceMove(e) {
        if (!$selectedPiece) return;
        console.log(e);
        $selectedPiece.css({ top: e.clientY - offset.y, left: e.clientX - offset.x })
    }

    function pieceDrop(e) {
        $selectedPiece = undefined;
    }

    PotatoHead.save = function () {
        window.localStorage.setItem('data', 'hi');
    }

    PotatoHead.Recover = function () {

    }
}());

PotatoHead.init();
PotatoHead.save();