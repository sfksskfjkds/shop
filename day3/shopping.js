var shopList = (function(){

    return {
        init:function(ele){
            if(typeof ele == 'string'){
                ele = document.querySelector(ele);
            }
            this.$ele = ele;
            this.getShopListData();
        },
        event:function(){
            var _this = this;

        },
        //获取商品数据
        getShopListData:function(){
            var _this = this;
            var params = {
                success:function(data){
                    data = JSON.parse(data);
                    console.log(11);
                    _this.shopList = data.data;
                }
            }
            sendAjax('shopping.json',params);
        },
        //把商品数据渲染到页面中
        insertShopList:function(){

        },
        //添加商品到本地数据库
        addCar:function(){

        }

    }


}())