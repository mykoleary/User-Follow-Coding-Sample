function hideModal(objId) {
	obj = jQuery('#' + objId);
	jQuery('#modalShade').hide();
	jQuery(obj).hide();
}
function hideModals() {
	jQuery('#modalShade').hide();
	jQuery('.modal').hide();
}
function showModal(objId) {
	obj = jQuery('#' + objId);
	jQuery( 'html, body' ).animate( { scrollTop: 0 }, 0 );
	jQuery('#modalShade').show();
	jQuery(obj).show();
} 
