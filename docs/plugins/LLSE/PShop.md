:::tip
PShop是一个商店插件,服主可以在商店中添加固定的售卖物品和回收物品,支持addon物品,支持购买或出售清单邮件(与`PMail`插件对接)以及系统商店功能等
:::

## 前置组件
### 必选
#### LL2 
- [`LiteLoaderBDS`](https://www.minebbs.com/liteloader/) 
#### LL3
- [`LeviLamina`](https://www.minebbs.com/resources/levilamina.8049/) 
- [`LegacyScriptEngine`](https://www.minebbs.com/resources/legacyscriptengine.8048/) 
 - 此插件需要LL3的LSE-quickjs加载器下运行,使用前请确保您已安装了该加载器  

### 可选
- [`PVip`](https://www.minebbs.com/resources/pvip.4385/) 
- [`PMail`](https://www.minebbs.com/resources/pvip.4385/) 

## 安装
#### LL2
- 首次安装,将文件`PSign.js`解压到此路径下:`BDS/plugins/` 
 - 更新直接替换原来的文件,若旧插件的名称与新插件的名称不一致,请删除旧插件再解压 
#### LL3
- 将文件夹`PShop`解压到此路径下:`BDS/plugins/`  
 - 更新插件请在保存必要配置文件后将原来的文件夹删除  

## 注册指令说明
`/shop `商店  
`/shop或/shop gui` 打开总GUI  
`/shop buy` 打开购买菜单  
`/shop sell `打开出售菜单  
`/market `市场  
`/market或/market gui `打开总GUI  
`/market buy` 打开购买菜单  
`/market sell` 打开出售菜单  
`/market remove` 打开下架菜单  
`/market op` 打开op菜单​  

## 配置文件说明
> 更改配置文件请注意 JSON 文件格式,不推荐使用记事本修改配置文件 
#### `config.json`文件
```js
{
    "money": "llmoney", //经济系统 可选llmoney,score
    "moneyname": "money", //经济名称
    "moneyscore": "money", //经济计分板名称(仅在score模式有效)
    "VIPdiscount": true, //vip购买打折(需要对接PCsvip插件)
    "discount": 0.8, //折扣倍率( 0.8为八折(80%) )
    "shop": true, //商店是否启用
    "market": true //市场是否启用
}
```
#### `lang.json`文件
```js
{
    //就照着改呗
    "money.error": "经济系统配置错误！",
    "money.error.pl": "经济系统配置错误!请上报服务器管理员!",
    "gui.exit": "表单已关闭，未收到操作",
    "shop.buy.ok": "购买成功！",
    "shop.buy.no": "你没有那么多钱，你只有:",
    "shop.buy.noroom": "请先清理背包!",
    "shop.mustnum": "数量必须是整数而且不能是负数",
    "market.mustnum": "价格必须是整数而且不能是负数",
    "shop.sell.ok": "出售成功!",
    "shop.sell.no": "你没有那么多物品，你只有:",
    "shop.sell.no2": "你没有该物品！",
    "market.error.nocount": "你没有填入价格！",
    "market.buy.no": "你没有那么多钱，你只有:",
    "market.buy.no2": "请先清理背包！",
    "market.add.ok": "上架成功！",
    "market.buy.ok": "购买成功！",
    "market.reduce.ok": "下架成功！",
    "market.opmenu.noperm": "你无权操作！"
}
```
#### `shopdata.json`文件
```js
{
    "Buy": [//购买配置
        {
            "name": "示例",//名字
            "type": "group",//类别，仅有item和group可选
            "image": "",//图片，详见:https://picss.sunbangyan.cn/2023/12/08/18a7a3298b3b9741fd9febe1c6ffeec0.jpeg
            "data": [//数据,item模式使用[{数据}],group使用[{数据},{数据}]
                {
                    "name": "示例(苹果)",
                    "type": "item",
                    "image": "",
                    "data": [
                        {
                            "id": "minecraft:apple",//物品id,要有命名空间前缀
                            "aux": 0,//数据值
                            "money": 10//单个的价格
                        }
                    ]
                }
            ]
        }
    ],
    "Sell": [//出售配置,同Buy
        {
            "name": "示例",
            "type": "group",
            "image": "",
            "data": [
                {
                    "name": "示例(苹果)",
                    "type": "item",
                    "image": "",
                    "data": [
                        {
                            "id": "minecraft:apple",
                            "aux": 0,
                            "money": 10
                        }
                    ]
                }
            ]
        }
    ]
}
```

## 插件开发中~~·~~敬请期待