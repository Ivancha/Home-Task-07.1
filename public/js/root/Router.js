define(["backbone"],function(t){return t.Router.extend({routes:{"":"root"},root:function(){this.navigate("products",{trigger:!0})}})});