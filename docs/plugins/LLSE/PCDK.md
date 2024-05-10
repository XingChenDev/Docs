:::tip
PCDK是一个MC服内的兑换码插件,支持限时兑换码、物品、VIP、称号等等
:::

> PCdk是一个MC服内的兑换码插件,支持使用兑换码获取`LLMoney`经济、计分板经济、物品、VIP(需要`PCsvip`插件)、称号(需要`PTitle`插件),同时支持使用兑换码后获得内容邮件、管理员添加兑换码后的邮件(需要`PMail`插件与`PLib`插件),上述所需插件可选装,不影响其他功能

## 前置组件
### 必选
#### LL2 
- [LiteLoaderBDS](https://www.minebbs.com/liteloader/) 
#### LL3
- [LeviLamina](https://www.minebbs.com/resources/levilamina.8049/) 
- [LegacyScriptEngine](https://www.minebbs.com/resources/legacyscriptengine.8048/) 
 - 此插件需要LL3的LSE-quickjs加载器下运行,使用前请确保您已安装了该加载器 

### 可选
- [PMail](https://www.minebbs.com/resources/pmail.5820/) 
- [PLib 建议使用](https://www.minebbs.com/resources/plib-planet.4523/) 
> LL2上使用PAPI的所需组件 
 - [BEPlaceholderAPI](https://www.minebbs.com/resources/beplaceholderapi.4181/) 
> LL3上使用PAPI的所需组件 
 - [GMLIB](https://www.minebbs.com/resources/gmlib.6636/) 
 - [GMLIB-LegacyRemoteCallApi](https://www.minebbs.com/resources/gmlib-legacyremotecallapi-gmlib-remotecallapi.7159/) 

## 安装
#### LL2
- 首次安装,将文件`PCdk.js`或`PCdk.llse.js`解压到此路径下:`BDS/plugins/` 
 - 更新直接替换原来的文件,若旧插件的名称与新插件的名称不一致,请删除旧插件再解压 
#### LL3
- 将文件夹`PCdk`解压到此路径下:`BDS/plugins/` 
 - 更新插件请将原来的文件夹删除 


## 注册指令说明
`/cdk` - 兑换码  
`/cdkset` - 兑换码管理	

## 配置文件说明

#### `config`文件

- 插件基础配置文件
- 路径: BDS/plugins/Planet/PCdk/config.json
```js
{
    "version": "v1.0.1", //插件版本
    "score": "money",  //记分板项
    "cdkfunc": { //兑换码功能
        "switch": false  //兑换码开关（管理员执行`cdk`时无视此项）
    }
}
```

#### `cdkdata.json`文件

- 兑换码数据
- 路径: BDS/plugins/Planet/PCdk/data/cdkdata.json
- `1.0.1`版
```js
{
    "测试": {  //兑换码ID
        //兑换码模式
        //前者表示模式,后者表示参数
        //前者: 0为指定玩家、1为指定次数、2为只能使用一次、3为可使用无限次
        //后者只有个两种状态分别是玩家名字与指定次数
        "type": [1, 2],  
        "content": {  //兑换码内容&奖励
            "item": "{\"Count\":1b,\"Damage\":0s,\"Name\":\"minecraft:apple\",\"WasPickedUp\":0b}",  //物品的NBT参数(物品数量以所选物品堆叠数为准)
            "money": 20,  //LLMoney
            "score": 20,  //计分板
            "vip": 3,  //VIP天数
            //称号 [称号名称, 出售条件, 删除条件, 称号价值, 称号Buff, Buff等级, 称号有效期]
            "title": ["§6测试",0,  0, 0,null, null,  0]
        },
        "cdktime": 6,  //兑换码的有效期
        "addtime": "2023-05-07 15:47:47",  //兑换码的添加时间
        "already": ["SUNSServer"]  //使用过兑换码的玩家ID
    }
}
```
- `1.0.0`版
```js
{
    "测试": {  //兑换码ID
        "type": 2,  //兑换码模式(玩家ID为指定玩家、1为只能使用一次、2为可使用无限次)
        "content": {  //兑换码内容&奖励
            "iteminfo": "{\"Count\":1b,\"Damage\":0s,\"Name\":\"minecraft:apple\",\"WasPickedUp\":0b}",  //物品的NBT参数(物品数量固定为1)
            "score": 20,  //计分板
            "money": 20,  //LLMoney
            "vip": 3,  //VIP天数
            //称号 [称号名称, 出售条件, 删除条件, 称号价值, 称号Buff, Buff等级, 称号有效期]
            "title":{
                 "chname":"§6测试",
                 "chsell":0, 
                 "chdele": 0,
                "chmoney": 0,
                 "chbuff":null,
                 "chtime": 0
            }
        },
        "cdktime": 6,  //兑换码的有效期
        "addtime": "2023-05-07 15:47:47",  //兑换码的添加时间
        "already": ["SUNSServer"]  //使用过兑换码的玩家ID
    }
}
```

## API

> PCdk没有提供外接接口