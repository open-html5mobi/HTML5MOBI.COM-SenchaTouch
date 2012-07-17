/**
 * @Author 刚子 写于 二零一一年十月
 * @Website移动WEB开发社区 http://html5mobi.com 
 */
var Global = {
	Author : '刚子',
	Website : 'http://html5mobi.com',
	Title : '移动Web开发社区',
	loadingText : '努力加载中...'
}
Ext.Loader.setConfig({ enabled: true })
Ext.Loader.setPath('Ext.data.proxy.DiscuzByCate', 'lib/DiscuzByCate.js')
Ext.ClassManager.setAlias('Ext.data.proxy.DiscuzByCate', 'proxy.DiscuzByCate')
Ext.application({
    name: 'html5mobi',
    controllers: ['Main'],
    models     : ['Discussion'/**,'DiscuzByCate'**/]
});
