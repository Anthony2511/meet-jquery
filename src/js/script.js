/*
 *
 * src/js/script.js
 *
 * 13/02/2017
 */

const rEmailValidation = /([\w-\.]+)@((?:[\w]+\.)+)([a-z]{2,})/i;

let $trombinoFigures, $commentForm, $emailInput, $nameInput, $commentTextarea;

const fHandleTab = function (oEvent) {
    let $this = $(this); // element sur lequel a lieu l'évenement

    oEvent.preventDefault();
    if ($this.parent().hasClass("active")) {
        return;
    }//element sur lequel on se trouve pas de class active
    $("ul.nav.nav-tabs .active").removeClass("active");//recup nav tabs active
    $this.parent().addClass("active");
    $(".tab-pane.active").removeClass("active");//selectionner tous les ele tab pane
    $(`#${ $this.data("tab-target") }`).addClass("active");
};

const fHandleTrombino = function () {
    $trombinoFigures.filter(":visible").fadeOut(function () {
        let $next = $(this).next();

    if ($next.length === 0) {
        $next = $trombinoFigures.first();
    }
    $next.fadeIn();
    } );
};

const fCheckEmail = function() {
    let sEmail = ( $emailInput.val() || "" ).trim(),
        bIsValid = rEmailValidation.test( sEmail );

    $emailInput.parents( ".control-group" ).toggleClass( "error", !bIsValid );
    return bIsValid;
};

const fCheckName = function() {
    let sName = ( $nameInput.val() || "" ).trim(),
        bIsValid = sName.length > 4;

    $nameInput.parents( ".control-group" ).toggleClass( "error", !bIsValid );
    return bIsValid;
};
const fCheckComment = function() {
    let sComment = ( $commentTextarea.val() || "" ).trim(),
        bIsValid = sComment.length > 10 && sComment.length < 140;

    $commentTextarea.parents( ".control-group" ).toggleClass( "error", !bIsValid );
    return bIsValid;
};

const fHandleFormValidation = function () {
    let aChecks = [ fCheckEmail(), fCheckName(), fCheckComment() ],
        bAllisOk;

    bAllisOk = aChecks.reduce( function( bPrevious, bCurrent ) {
        return bPrevious && bCurrent;
    }, true );

    if ( bAllisOk ) {
        return true;
    }

    window.alert( "Veuillez remplir correctement les champs" );
    return false;
};

$(function () {

    // 1. a with rel=external
    $('a[rel*="external"]').attr("target", "_new"); // recup tous les éléments rel=external

    // 2. tabs
    $("ul.nav.nav-tabs a").on("click", fHandleTab); // recup onglets

    //3. trombinoscope
    $trombinoFigures = $("#trombino figure");
    $trombinoFigures.hide().first().show(); //masquer tous les éle, recup le 1er
    setInterval(fHandleTrombino, 1000);

    //4. form validation
    ( $commentForm = $( "form" ) ).on("submit", fHandleFormValidation );
    ( $emailInput = $( "#inputEmail" ) ).on( "blur", fCheckEmail );
    ( $nameInput = $( "#inputName" ) ).on( "blur", fCheckName );
    ( $commentTextarea = $( "#inputComment" ) ).on( "blur", fCheckComment );
});
