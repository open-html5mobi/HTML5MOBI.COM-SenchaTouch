/**
 * @Author 刚子 写于 二零一一年十月
 * @Website移动WEB开发社区 http://html5mobi.com 
 */
Ext.define('html5mobi.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype   : 'mainview',
    requires: [
        'Ext.tab.Panel',
        'html5mobi.view.Discussions',
        'html5mobi.view.Categories',
        'html5mobi.view.Setting',
        'html5mobi.view.Detail',
        'html5mobi.view.About'
    ],
    config: {
    	tabBar: {
	 		height : 45,
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },
        fullscreen: true,
        items: [
           {
				title : '最新讨论',
				itemId: '1',
				iconCls: 'home',
				xtype: 'discussions'
           },
           {
           		title : '分类',
           		iconCls: 'favorites',
           		itemId: '2',
				xtype: 'categories'
           },
           {
           		title : '关于',
           		iconCls: 'info',
           		itemId: '3',
           		xtype: 'about'
           }
        ]
    }
});

