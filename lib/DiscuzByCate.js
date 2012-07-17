/**
 * @Author 刚子 写于 二零一一年十月
 * @Website移动WEB开发社区 http://html5mobi.com 
 */
Ext.define('Ext.data.proxy.DiscuzByCate', {
    extend: 'Ext.data.proxy.JsonP',
    autoAppendParams: false,
    
    url: Global.Website + '/categories/',
    
    buildRequest: function(operation) {
        var request = this.callParent(arguments),
            filters = operation.filters || [],
            defCate = 'jquery-mobile'
        delete request.params.filters
        if(filters.length>0)
        	defCate = filters[0].value
        request.url = Global.Website + '/categories/'+ defCate +'.json'
        return request;
    }
});