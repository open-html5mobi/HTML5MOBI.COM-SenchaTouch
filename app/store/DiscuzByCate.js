Ext.define('html5mobi.store.DiscuzByCate', {
    extend  : 'Ext.data.Store',
    model   : 'html5mobi.model.DiscuzByCate',
    requires: ['html5mobi.model.DiscuzByCate'],
    
    autoLoad    : true,
    remoteFilter: true
});