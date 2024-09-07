:::tip
PStore是一个集成商城系统，它拥有系统商店（购买/回收）、交易所（跨服联网交易）、玩家商店（玩家创建小店售卖一些物品）、拍卖场等诸多隶属于商店类型的功能，插件目前处于开发阶段，已发布支持不发功能的开发版，服主可通过`星辰开发组资源交流群`中进行下载测试
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
- [`PLib`](https://www.minebbs.com/resources/plib.4523/)  
- [`PMail`](https://www.minebbs.com/resources/pvip.4385/)  

## 安装
#### LL2
- 首次安装,将文件`PSign.js`解压到此路径下:`BDS/plugins/`  
 - 更新直接替换原来的文件,若旧插件的名称与新插件的名称不一致,请删除旧插件再解压 
#### LL3
- 将文件夹`PShop`解压到此路径下:`BDS/plugins/`  
 - 更新插件请在保存必要配置文件后将原来的文件夹删除  

## 注册指令说明
`/pstore` - 商城系统主表单 
`/sshop` - 系统商店 
`/wshop` - 交易所（跨服交易）
`/pshop` - 玩家商店（小店）

## 配置文件说明
> 更改配置文件请注意 JSON 文件格式,不推荐使用记事本修改配置文件 
#### `config.json`文件

- 插件基础配置文件
- 路径: BDS/Plugins/Planet/PStore/config.json
```js
{
    "version": "v0.0.1 Beta 24.07.03000", // 插件版本
    "system_shop": {  // 商店对象（system_shop、world_shop、player_shop必须存在，否则部分功能缺失）
        "names": "系统商店", // 商店名称
        "module": true, // 商店开关
        "image": "", // 商店贴图，用于pstore指令的图标显示，后期会涉及自动为菜单插件添加按钮
        "money": 0, // 商店的经济模式（0为记分板，1为LLMoney）
        "score": "money", // 记分板名称
        "vip_discount": 95, // VIP折扣
        "buy": true, // 购买开关
        "sell": true // 出售（回收）开关
    },
    "world_shop": { // 本商店数据均为云端数据,本地无配置文件
        "names": "交易所",
        "module": true,
        "image": "",
        "money": 0,
        "score": "money",
        "exchange_rate": 1.5, // 货币汇率
        "tax_rate": 0.05, // 交易所税费
        "server_key": "world" // 跨服同步密钥（两个服务器填写相同的跨服同步密钥即可实现交易所跨服）
    },
    "player_shop": {
        "names": "玩家商店",
        "module": true,
        "image": "",
        "money": 0,
        "score": "money",
        "vip_discount": 95
    },
    "zdysd": {
        "names": "自定义商城1",
        "module": true,
        "image": "",
        "money": 2, // 经济模式（2为自定义获取货币的方式，如击杀玩家、击杀NPC等，更多功能开发中）
        "vip_discount": 95,
        "economic acquisition methods": [
            "kill_npc", // 击杀npc
            "kill_player" // 击杀玩家
        ]
    }
}
```
#### `system_shop.json`文件

- 系统商店配置文件
- 路径: BDS/Plugins/Planet/PStore/data/system_shop.json.json
```js
{
"buy": [ // 购买物品数据
        {
            "name": "食物", // 商品（分类）名称
            "image": "textures/items/apple", // 商品（分类）贴图（允许使用网络地址，但不一定会显示）
            "goods": [ // 带goods则为分类，在goods的数组中增加商品即可，不允许套娃）
                {
                    "name": "苹果", // 商品（分类）名称
                    "image": "textures/items/apple",  // 商品（分类）贴图（允许使用网络地址，但不一定会显示）
                    "type": "minecraft:apple", // 商品的type值
                    "aux": 0, // 商品的数据值
                    "money": 10, // 售价
                    "discount": 100, // 折扣（该折扣与VIP折扣同时享受，100为不打折超过100可以为涨价）
                    "quota": 700 // 每日限购
                }
            ]
        },
        {
            "name": "附魔苹果",
            "image": "textures/items/apple_golden",
            "type": "minecraft:enchanted_golden_apple",
            "aux": 0,
            "money": 100,
            "discount": 100,
            "quota": 10000
        }
    ],
"sell": [
    {
        "name": "食物",
        "image": "textures/items/apple",
        "goods": [
            {
                "name": "苹果", // 商品（分类）名称
                "image": "textures/items/apple",  // 商品（分类）贴图（允许使用网络地址，但不一定会显示）
                "type": "minecraft:apple", // 商品的type值
                "aux": 0, // 商品的数据值
                "money": 10, // 回收价格
                "discount": 100, // 折扣（该折扣与VIP折扣同时享受，超过100可以为降收益）
                "quota": 10 // 每日限售
            }
        ]
    },
    {
        "name": "附魔苹果",
        "image": "textures/items/apple_golden",
        "type": "minecraft:enchanted_golden_apple",
        "aux": 0,
        "money": 100,
        "discount": 100,
        "quota": 10000
    }
],
"quota": { // 每日限购记录
    "f51b1b61-410d-3ebe-8421-d0fd842460ba": { // 玩家的uuid值 
        "time": "2024-07-16", // 限购的日期（以玩家每日首次上线的日期为初（若每日00:00后还在服务器中，则需要重新进入服务器即可）
        "buy": {
            "minecraft:apple": 200 // 限购商品的type值 ：今日已购买次数
        },
        "sell": {
            "minecraft:apple": 10 // 限售商品的type值 ：今日已出售次数
        }
    }
}
}
```