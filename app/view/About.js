/**
 * @Author 刚子 写于 二零一一年十月
 * @Website移动WEB开发社区 http://html5mobi.com 
 */

Ext.define('html5mobi.view.About', {
    extend: 'Ext.Container',
    xtype: 'about',
    requires: [
    	'Ext.Container'
    ],
    config: {
    	cls: 'detail-card',
        styleHtmlContent: true,
        html: '<p style="margin:5px"><Strong>开发者：</Strong>刚子</p>' +
        	  '<p style="margin:5px"><Strong>项目名称：</Strong>“移动Web开发社区”客户端开源项目。</p>' +
        	  '<p style="margin:5px"><Strong>技术平台：</Strong>Sencha Touch 2 pr1</p>'+
        	  '<p style="margin:5px"><Strong>版本：</Strong>1.0</p>'+
        	  '<p style="margin:5px"><Strong>操作技巧：</Strong>点击左上角Logo，切换讨论列表视图。</p>'+
        	  '<p style="margin:5px;text-decoration: underline;"><Strong>社区介绍：</Strong>专注移动Web开发，做最开放的社区 html5mobi.com。</p>'+
        	  '<p style="margin:5px"><Strong>关注我们：</Strong>交流群 136741401  ，微博 http://weibo.com/html5mobi，邮箱 html5mobi@gmail.com。</p>',
        loadingText: Global.loadingText,
        scrollable:'vertical'
    }
});