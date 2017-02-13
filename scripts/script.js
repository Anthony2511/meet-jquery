/*
*
* src/js/script.js
*
* 13/02/2017
*/

const fHandleTab = function (oEvent) {
    let $this = $(this); // element sur lequel a lieu l'évenement

    oEvent.preventDefault();
    if ($this.parent().hasClass("active")) {
        return;
    } //element sur lequel on se trouve pas de class active
    $("ul.nav.nav-tabs .active").removeClass("active"); //recup nav tabs active
    $this.parent().addClass("active");
    $(".tab-pane.active").removeClass("active"); //selectionner tous les ele tab pane
    $('#${ $this.data( "tab-target" ) }').addClass("active");
};

$(function () {

    // 1. a with rel=external
    $('a[rel*="external"]').attr("target", "_new"); // recup tous les éléments rel=external

    // 2. tabs
    $("ul.nav.nav-tabs a").on("click", fHandleTab); // recup onglets
});