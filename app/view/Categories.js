/**
 * @Author 刚子 写于 二零一一年十月
 * @Website移动WEB开发社区 http://html5mobi.com 
 */
Ext.define('html5mobi.view.Categories', {
    extend: 'Ext.Container',
    requires: [
        'Ext.Container',
        'Ext.List',
        'html5mobi.store.DiscuzByCate'
    ],
    xtype : 'categories',
    config: {
    	layout:	{
			type: 'card'
		},
   		loadingText: Global.loadingText,
   		items : [
   			{
	            xtype : 'toolbar',
	            layout: { pack: 'center'},
	            ui: 'gray',
	            docked: 'top',
	            items:[
		            {
	                    xtype: 'segmentedbutton',
			            defaults: { flex: 1 },
		                style: 'width: 100%',
	                    items: [
	                        { text: 'jQueryMobile',pressed: true},
	                        { text: 'SenchaTouch'},
	                        { text: 'HTML5'}
	                    ]
		            }
                ]
	        },
	        {
	        	xtype: 'list',
	        	itemId: 'discuz_by_cate',
		    	itemTpl: '<div class="contact"><strong>{Name}</strong></div>',
		   		store: 'DiscuzByCate',
		   		deselectOnContainerClick: false,
		   		loadingText: Global.loadingText
	        },
	        {	
   				xtype:'discussions_poto',
   				store: 'DiscuzByCate',
   				itemId: 'discuz_poto_2'
   			},
   			{
   				xtype:'detail',
   				itemId: 'detail_by_cate'
   			}    
    	]
    }
});