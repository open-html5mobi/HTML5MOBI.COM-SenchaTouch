/**
 * @Author 刚子 写于 二零一一年十月
 * @Website移动WEB开发社区 http://html5mobi.com 
 */
Ext.define('html5mobi.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        profile: Ext.os.deviceType.toLowerCase()
    },
    
    views : [
        'Main',
        'Detail',
        'Categories'
    ],
    
    stores: [
        'Discussions',
        'DiscuzByCate'
    ],
    
    refs: [
        {
            ref     : 'main',
            selector: 'mainview',
            autoCreate: true
        },
        {
            ref : 'discussions',
            selector: 'discussions'
        },
        {
        	ref : 'headToolbar',
        	selector : 'toolbar[itemId="headToolbar"]'
        },
        {
        	ref : 'detail',
        	selector : 'detail'
        },
        {
        	ref : 'categories',
        	selector : 'categories'
        },
        {
        	ref : 'detailByCate',
        	selector : 'detail[itemId="detail_by_cate"]'
        },
        {	
        	ref : 'discussionsList',
        	selector : 'discussions_list'
        }
    ],

    init: function() {
        this.getMainView().create({
        	dockedItems: {
				xtype: "toolbar",
				itemId: 'headToolbar',
				height : 37,
				dock: "top",
				ui   : 'green',
				layout: { pack: 'center' },
				items: [
                    {
                        xtype: 'title',
                        title: '<img src="resource/logo.png" id="logo" title="点击切换视图"/>',
                        style: 'padding-top:0px;',
                        layout: { pack: 'center' }
                    },
                    { xtype: 'spacer'},
                    {
						itemId: 'back',
			            ui: 'default',
			            text: '回退',
			            scope: this,
			            handler: function(){
			            	this.onBack()
			            }
		            }
                ]
			}
		});
		
        this.control({
        	'discussions_list': {
                select: this.onDiscussionsListTap,
                itemtap: this.doItemDeSelect
        	},
        	'discussions_poto[itemId="discuz_poto_1"]': {
                select: this.onDiscussionsListTap,
                itemtap: this.doItemDeSelect
        	},
        	'mainview': {
        		activeitemchange: this.mainTabChange
        	},
        	// segmentedbutton组件toggle事件不能获取text值，目前对item监听
        	'button[text="jQueryMobile"]': {
        		tap: this.onCategoriesTap
        	},
        	'button[text="SenchaTouch"]': {
        		tap: this.onCategoriesTap
        	},
        	'button[text="HTML5"]': {
        		tap: this.onCategoriesTap
        	},
        	// --end
        	'discussions_poto[itemId="discuz_poto_2"]': {
                select: this.onCateListTap,
                itemtap: this.doItemDeSelect
        	},
        	'list[itemId="discuz_by_cate"]': {
                select: this.onCateListTap,
                itemtap: this.doItemDeSelect
        	}
        })
        
        var $this = this
        // 回退按钮显示操作
        $this.showBackButton()
        // Logo事件
        Ext.get('logo').on(this.getClickEvent(), function(){$this.logoClick()}) 
        //
        //console.log(this.getDiscussionsList().getScrollable())
        this.getDiscussionsList().on('scroll', function(scroller, pos) {
        	console.log(scroller)
        });
    },
    
    // 取消列表选择，找ST2源代码才发现滴，官方文档deselect方法调用失效。
    doItemDeSelect: function(dv, ix, item, e){
    	setTimeout(function(){
    		item.removeCls([dv.getPressedCls(), dv.getSelectedCls()])
    	},500);
    },
    // 分类选择处理函数
	onCategoriesTap: function(button){
		var urlMap = {'ext-button-1':'jquery-mobile', 'ext-button-2':'sencha-touch', 'ext-button-3':'html5'}
		var store   = this.getDiscuzByCateStore(),
            filters = []
        filters.push(new Ext.util.Filter({
                property: 'cate',
                value   : urlMap[button.id]
        }))
        store.clearFilter()
        store.filter(filters)
        if(this.CURR_VIEW_INDEX.CATEGORIES){
	        this.getCategories().setActiveItem(this.CURR_VIEW_INDEX.CATEGORIES,{
					type : 'slide',
					direction : 'left'
			})
        }
	},
    // 操作系统的单击事件 tap or click
    getClickEvent: function(){
    	this.getClickEvent = this.getProfile() == 'phone' ? function(){return 'tap'} : function(){return 'click'}
        return this.getClickEvent()
    },
    // 点击LOGO，改变讨论列表的视图
    CURR_VIEW_INDEX: {
    	DISCUSSIONS: 0,
    	CATEGORIES: 1
    },
    logoClick: function(){
    	var currMainItem = this.getMain().getActiveItem().itemId
    	if(currMainItem=='1'){
    		var id = this.getDiscussions().getActiveItem().getId()
    			active = (id == 'ext-discussions_list-1') ? 1 : 0
    		 this.CURR_VIEW_INDEX.DISCUSSIONS = active
    		 this.getDiscussions().setActiveItem(active,{
				type : 'slide',
				direction : 'left'
			})
    	}else if(currMainItem=='2'){
    		var id = this.getCategories().getActiveItem().getId()
    			active = (id == 'ext-list-1') ? 1 : 0
    		 this.CURR_VIEW_INDEX.CATEGORIES = active
    		 this.getCategories().setActiveItem(active,{
				type : 'slide',
				direction : 'left'
			})
    	}
    },
    // 主选项卡改变业务处理
	mainTabChange : function(containerThis, value, oldValue, eOpts){
		this.showBackButton(value.itemId)
	},
    
    // 保存操作记录    		
    ACTION_MAP: {},
    // 为 ACTION_MAP 变量设置操作记录，通常是在点击列表时调用
    setActionLog: function(currPanel, currItem){
    	var itemId = this.getMain().getActiveItem().itemId
    	if(!this.ACTION_MAP[itemId])
    		this.ACTION_MAP[itemId] = []
    	this.ACTION_MAP[itemId].push({panel: currPanel, item: currItem})
    	this.showBackButton()
    },
    // 根据ActionMap的操作记录，决定是否显示Back按钮
    showBackButton: function(mainActiveItemId){
    	var itemId = mainActiveItemId ? mainActiveItemId : this.getMain().getActiveItem().itemId,
    		actionArray = this.ACTION_MAP[itemId],
    		backButton = this.getHeadToolbar().getAt(2)
    	if(actionArray && actionArray.length>0)
    		backButton.setHidden(false)
    	else
    		backButton.setHidden(true)
    },
    // 点击Back按钮处理
    onBack: function(){
    	var currMainItem = this.getMain().getActiveItem().itemId
    		actionArray = this.ACTION_MAP[currMainItem]
    	if(actionArray){
    		var obj = actionArray.pop(),
    			panel = obj.panel,
    			item = obj.item
    		panel.setActiveItem(item,{
				type : 'slide',
				direction : 'left'
			})
    	}
    	this.showBackButton()
    },
    
    // 帖子详细信息
    getDetailStore: function(DiscussionID){
    	return {
	        autoLoad: true,
	        fields: ['Name', 'Body'],
	        proxy: {
	            type: 'jsonp',
	            url: Global.Website + '/discussion.json?DiscussionID='+DiscussionID,
	            reader: {
	                type: 'json',
	                root: function(data) {
	                	var Body = data.Discussion.Body
	                	data.Discussion.Body = Body.replace(new RegExp('\/uploads', 'g'),Global.Website+'/uploads')
		            	return data.Discussion
		            }
	            }
	        }
	    }
    },
    // 讨论列表点击事件处理
    onDiscussionsListTap: function(target, data) {
    	var $this = this
    	this.setActionLog(this.getDiscussions(), this.getDiscussions().getActiveItem())
    	//console.log(this.ACTION_MAP)
    	var view = this.getDetail()
		if (!view) {
            this.getDetailView().create();
       	}
        view = this.getDetail()
        view.setStore(this.getDetailStore(data.getData().DiscussionID))
        $this.getDiscussions().setActiveItem(2,{
			type : 'slide',
			direction : 'left'
		})
	},
	 // 分类列表点击事件处理
    onCateListTap: function(target, data) {
    	var $this = this
    	this.setActionLog(this.getCategories(), this.getCategories().getActiveItem())
    	//console.log(this.ACTION_MAP)
    	var view = this.getDetailByCate()
		if (!view) {
            this.getDetailByCate().create();
       	}
        view = this.getDetailByCate()
        view.setStore(this.getDetailStore(data.getData().DiscussionID))
        $this.getCategories().setActiveItem(2,{
			type : 'slide',
			direction : 'left'
		})
	}
})