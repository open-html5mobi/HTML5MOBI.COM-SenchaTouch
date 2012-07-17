/**
 * @Author 刚子 写于 二零一一年十月
 * @Website移动WEB开发社区 http://html5mobi.com 
 */
Ext.define('html5mobi.view.DiscussionsPotoItem', {
    extend: 'Ext.dataview.DataItem',
    xtype : 'discussions_poto_item',
    requires: ['Ext.Img'],

    config: {
        dataMap: {
            getName: {
                setHtml: 'Name'
            },

            getMemo: {
                setHtml: 'Memo'
            },

            getPoto: {
                setSrc: 'Poto'
            }
        },

        baseCls: Ext.baseCSSPrefix + 'list-item',

        name: {
            cls: 'name'
        },

        memo: {
            cls: 'use'
        },

        poto: {
            docked: 'left'
        },

        layout: {
            type: 'vbox',
            pack: 'center'
        }
    },

    applyName: function(config) {
        return Ext.factory(config, Ext.Component, this.getName());
    },

    updateName: function(newName) {
        if (newName) {
            this.add(newName);
        }
    },

    applyMemo: function(config) {
        return Ext.factory(config, Ext.Component, this.getMemo());
    },

    updateMemo: function(newMemo) {
        if (newMemo) {
            this.add(newMemo);
        }
    },

    applyPoto: function(config) {
        return Ext.factory(config, Ext.Img, this.getPoto());
    },

    updatePoto: function(newPoto) {
        if (newPoto) {
            this.add(newPoto);
        }
    }

    
});