/**
 * @Author 刚子 写于 二零一一年十月
 * @Website移动WEB开发社区 http://html5mobi.com 
 */
Ext.define('html5mobi.view.DiscussionsPoto', {
    extend: 'Ext.dataview.ComponentView',
    xtype : 'discussions_poto',
    requires: [
        'html5mobi.view.DiscussionsPotoItem'
    ],

    config: {
    	ui   : 'loans',
        store: 'Discussions',
        defaultType: 'discussions_poto_item',
        deselectOnContainerClick: false,
        loadingText: Global.loadingText,
        scrollable:'vertical'
    }
});
