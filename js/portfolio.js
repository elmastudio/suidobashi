( function( $ ) {

	/*
	 * Resize portfolio-wrapper for full width on small screens.
	 */


	$( window ).load( function() {


		var portfolio_wrapper = $( '.jetpack-portfolio-shortcode ' );

		portfolio_wrapper.imagesLoaded( function() {
			if ( $( 'body' ).hasClass( 'rtl' ) ) {
				portfolio_wrapper.masonry( {
					itemSelector: '.jetpack-portfolio',
					gutter: '.jetpack-portfolio-gutter',
					isRTL: true
				} );
			} else {
				portfolio_wrapper.masonry( {
					itemSelector: '.jetpack-portfolio',
					gutter: '.jetpack-portfolio-gutter',
				} );
			}

			// Show the blocks
			$( '.jetpack-portfolio' ).animate( {
				'opacity' : 1
			}, 250 );
		} );



		// Layout posts that arrive via infinite scroll
		$( document.body ).on( 'post-load', function () {

			var new_items = $( '.infinite-wrap .jetpack-portfolio' );

			portfolio_wrapper.append( new_items );
			portfolio_wrapper.masonry( 'appended', new_items );

			// Force layout correction after 1500 milliseconds
			setTimeout( function () {

				portfolio_wrapper.masonry();

				// Show the blocks
				$( '.jetpack-portfolio' ).animate( {
					'opacity' : 1
				}, 250 );

			}, 1500 );

		} );

	} );

} )( jQuery );
