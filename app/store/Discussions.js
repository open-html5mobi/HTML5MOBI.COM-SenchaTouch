/**
 * @Author 刚子 写于 二零一一年十月
 * @Website移动WEB开发社区 http://html5mobi.com 
 */
Ext.define('html5mobi.store.Discussions', {
    extend  : 'Ext.data.Store',
    model   : 'html5mobi.model.Discussion',
    requires: ['html5mobi.model.Discussion'],
    
    autoLoad    : true,
    remoteFilter: false,
     pageSize: 10,
                    remoteFilter: true,
                    clearOnPageLoad: false
});