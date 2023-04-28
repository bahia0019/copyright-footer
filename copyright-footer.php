<?php
/**
 * Plugin Name:       Copyright Footer
 * Description:       Adds a footer with a Copyright date that updates every year automatically, with some additional options.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            William Bay
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       copyright-footer
 *
 * @package           copyright-footer
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function copyright_footer_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'copyright_footer_block_init' );



function copyright_footer_replace_year_filter( $block_content, $block ) {
    $year = date( 'Y' );
    $site_name = get_bloginfo( 'name' );
    
	if ( $block['blockName'] !== 'create-block//copyright-footer') {
        return $block_content;
    }

    $block_content = str_replace( "%SITENAME%", esc_html( $site_name ), $block_content );
    $block_content = str_replace( "%YEAR%", $year, $block_content );
    return $block_content;

}
add_filter( 'render_block', 'copyright_footer_replace_year_filter', 10, 2 );