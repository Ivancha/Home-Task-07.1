define(["backbone","../../cart/Service"],function(e,t){return e.Model.extend({constructor:function(d,i){return d.added=t.has(d.id),e.Model.call(this,d,i)},toggle:function(){t.toggle(this.get("id")),this.set("added",t.has(this.get("id")))}})});