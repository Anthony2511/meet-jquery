/*
*
* src/js/script.js
*
* 13/02/2017
*/
let $trombinoFigures;

const fHandleTab = function( oEvent ) {
    let $this = $( this ); // element sur lequel a lieu l'évenement

    oEvent.preventDefault();
    if ( $this.parent().hasClass( "active" ) ) {
        return;
    }//element sur lequel on se trouve pas de class active
    $( "ul.nav.nav-tabs .active" ).removeClass( "active" );//recup nav tabs active
    $this.parent().addClass( "active" );
    $( ".tab-pane.active" ).removeClass( "active" );//selectionner tous les ele tab pane
    $( `#${ $this.data( "tab-target" ) }` ).addClass( "active" );
};

const fHandleTrombino = function() {
      $trombinoFigures.filter( ":visible" ).fadeOut( function() {
          let $next = $( this ).next();

          if ( $next.length === 0 ) {
            $next = $trombinoFigures.first();
          }
          $next.fadeIn();
    } );
};

$( function() {

    // 1. a with rel=external
    $( 'a[rel*="external"]' ).attr( "target", "_new" ); // recup tous les éléments rel=external

    // 2. tabs
    $( "ul.nav.nav-tabs a" ).on( "click", fHandleTab ); // recup onglets

    //3. trombinoscope
    $trombinoFigures = $( "#trombino figure" );
    $trombinoFigures.hide().first().show(); //masquer tous les éle, recup le 1er
    setInterval( fHandleTrombino, 1000 );

} );
