/**
 * @Author 刚子 写于 二零一一年十月
 * @Website移动WEB开发社区 http://html5mobi.com 
 */
Ext.define('html5mobi.view.Setting', {
    extend: 'Ext.Panel',
    requires: [
        'Ext.Panel',
        'Ext.field.Slider',
        'Ext.field.Toggle'
    ],
    xtype : 'setting',
    config: {
    	layout:	{
    		layout:'vbox',
			pack: 'center'
		},
   		items : [
   			{	
   				xtype: 'togglefield',
                name : 'enable',
               	label: '图片模式',
			    listeners: {
			        change: function (slider, thumb, newValue, oldValue) {
			        }
			    }
   			}
    	]
    }
});