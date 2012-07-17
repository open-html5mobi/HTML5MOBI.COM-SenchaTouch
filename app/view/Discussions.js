/**
 * @Author 刚子 写于 二零一一年十月
 * @Website移动WEB开发社区 http://html5mobi.com 
 */
Ext.define('html5mobi.view.Discussions', {
    extend: 'Ext.Container',
    requires: [
        'Ext.Container',
        'html5mobi.view.DiscussionsList',
        'html5mobi.view.DiscussionsPoto',
        'html5mobi.view.Detail'
    ],
    xtype : 'discussions',
    config: {
    	layout:	{
			type: 'card'
		},
   		loadingText: Global.loadingText,
   		items : [
   			{	
   				xtype:'discussions_list'
   			},
   			{	
   				xtype:'discussions_poto',
   				itemId: 'discuz_poto_1'
   			},
   			{
   				xtype:'detail'
   			}
    	]
    }
});