/**
 * @Author 刚子 写于 二零一一年十月
 * @Website移动WEB开发社区 http://html5mobi.com 
 */
Ext.define('html5mobi.view.DiscussionsList', {
    extend: 'Ext.List',
    xtype : 'discussions_list',
    config: {
    	itemTpl: '<div class="contact"><strong>{Name}</strong></div>',
   		store: 'Discussions',
   		loadingText: Global.loadingText
    }
});