/**
 * @Author 刚子 写于 二零一一年十月
 * @Website移动WEB开发社区 http://html5mobi.com 
 */
Ext.define('html5mobi.model.Discussion', {
    extend: 'Ext.data.Model',
    fields: [
        {name: "DiscussionID",   type: "int"},
        {name: "Name",           type: "string"},
        {name: "Memo",           type: "string"},
        {name: "Poto", type: "string", convert: function(value, record) {
            return Global.Website + '/uploads/' + value;
        }}
    ],
    proxy: {
        type: 'jsonp',
        url : Global.Website + '/discussions.json?page=1-100',
        reader: {
            type: 'json',
            successProperty: 'success',
            root: function(data) {
            	//console.log(data)
            	var array = []
            		fun = function(items){
	            		for(var i in items){
							var item = items[i],
								poto = item.FirstPhoto
							if(poto){
								var poto_array = poto.split('/')
								poto = poto_array[0] + '/t' + poto_array[1]
							}else{
								poto = 'userpics/html5.png'
							}
							var lastName = item.LastName?item.LastName:''
							var memo = item.CountComments + '&nbsp;评论&nbsp;&nbsp;' + item.CountViews + '&nbsp;浏览'
							array.push({DiscussionID:item.DiscussionID, Name : item.Name, Poto : poto, Memo:memo})
						}
            		}
            	fun(data.Announcements)
            	fun(data.Discussions)
				return array
            }
        }
    }
});
