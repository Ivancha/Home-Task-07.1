define(["backbone","../cart/Service","./ItemView","./Model"],function(n,e,t,i){return n.Router.extend({initialize:function(n){this.container=n.container},routes:{cart:"index"},index:function(){var n=new i;n.fetch({data:e._data}).done(function(){var e=new t({model:n});this.container.show(e)}.bind(this))}})});