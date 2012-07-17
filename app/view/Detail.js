/**
 * @Author 刚子 写于 二零一一年十月
 * @Website移动WEB开发社区 http://html5mobi.com 
 */
Ext.define('html5mobi.view.Detail', {
    extend: 'Ext.DataView',
    xtype: 'detail',
    requires: [
    	'Ext.DataView',
    	'Ext.XTemplate'
    ],
    config: {
    	cls: 'detail-card',
        styleHtmlContent: true,
        store: null,
        itemTpl: '<h1 style="text-align:center">{Name}</h1><p style="text-align:center">{Body}</p>',
        loadingText: Global.loadingText,
        scrollable:'vertical'
    }
});