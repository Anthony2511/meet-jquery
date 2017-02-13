/* Anthony/meet-jquery
*
* /src/js/script.js - Main Script
*
* 13/02/2017
*/
let $tabs;

const fHandleTab = function( oEvent) { // element click
    oEvent.preventDefault();
    let $elt = oEvent.currentTarget; // récupérer lien courant
    // vérifier si lien active
    if ( $elt.parentNode.classList.contains( "active" ) ) { // 4 méthodes ( add, remove, toggle, contain)
        return;
    }

    //remove class active from old active
    document.querySelector( "ul.nav.nav-tabs .active" ).classList.remove( "active" );
    // ajouter class active
    $elt.parentNode.classList.add( "active" );
    //suprrimer la class de le old tab content
    document.querySelector( ".tab-pane.active" ).classList.remove( "active" );
    //envoyer class acvite sur current tab target
    document.getElementById( $elt.getAttribute( "data-tab-target" ) ).classList.add( "active" );
};

window.addEventListener( "load", function() {

    // 1. a with rel=external opens in new window
     Array.from( document.querySelectorAll( 'a[rel*="external"]' ) ).forEach( function( $elt ) {
         $elt.setAttribute( "target", "_new" );
    } );

    // 2. handle tabs
    Array.from( document.querySelectorAll( "ul.nav.nav-tabs a" ) ).forEach( function( $elt ) {
        $elt.addEventListener( "click", fHandleTab ); // si on déclare la function ici il va créer 4 functions pour le nombre de liens
    } );

} );
