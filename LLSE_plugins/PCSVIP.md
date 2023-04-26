> [!TIP] PCsvip是我们接手苍山工作室的CSvip的后期维护插件,我们接手后对PCsvip进行了重新规划,将他视为前置插件使用，移除了多余的功能,开放多个外接接口实现多元化操作。

## 前置组件
#### 必选
- [LiteLoaderBDS](https://www.minebbs.com/liteloader/)

#### 可选&建议
- [PBind](https://www.minebbs.com/resources/pbind.4211/) 建议使用
- [PLib](https://www.minebbs.com/resources/plib-planet.4523/) 建议使用

## 注册指令说明
`/myvip` - 我的VIP 游戏内执行  
`/vipshop` - VIP商城	游戏内执行  
`/vipset` - VIP管理	游戏内执行  
`/viphelp` - 关于插件 游戏内执行  
`/vip add (玩家ID/QQ号) [天数]` - 控制台添加VIP	控制台操作，"[]"内为选填  
#### 示例
      `/vip add SUNSServer`
      `/vip add SUNSServer 7`

`/vip del (玩家ID/QQ号)`	控制台删除VIP	控制台操作，当玩家是VIP时输入会关掉VIP，当玩家不是VIP时会删除VIP数据
#### 示例
      `/vip del SUNSServer`

`/vip addtime (玩家ID/QQ号) (时长)`	控制台增加玩家时长	控制台操作，所有参数为必填
#### 示例
      `/vip addtime SUNSServer 7`

`/vip reducetime (玩家ID/QQ号)  (时长)`	控制台减少玩家时长	控制台操作，所有参数为必填，当减少时长大于剩余时长会自动取消玩家的VIP
#### 示例
      `/vip reducetime SUNSServer 7`

`/vip query (玩家ID/QQ号)` 控制台查询玩家VIP数据	控制台操作，所有参数为必填
#### 示例
      `/vip query SUNSServer`

## 配置文件说明

#### `config`文件

- 插件基础配置文件
- 路径: BDS/plugins/Planet/PCsvip/config.json
```js
{
    "version": "2.0.0", //插件版本
    "moneyswitch": 1, //经济开关(用于获取药水buff是否扣钱)已停止使用
    "money": 1, //经济模式(0为计分板，1为LLMoney)
    "score": "money", //计分板项目名称(默认为money)
    "buyswitch": 1, //购买/续费VIP开关(0为关闭，1为开启)
    "viptime": 7, //VIP默认时长(管理员手动添加的时长(单位:天))
    "viptitle": { //VIP称号(当没有安装PTitle插件时只有称号配置项没有其他配置项)
        "title": "至尊VIP"
    },
    "lizi": "minecraft:heart_particle", //vip默认粒子(根据MC原版的id来填写，可在PLib的lizi配置文件中复制lizimcid的配置项粘贴到这里)
    "vipblacklist": [], //VIP黑名单(禁止一些玩家购买VIP)
    "viplevel": { //VIP等级
        "exp": [
            0,
            100,
            300,
            600,
            1000
        ], //VIP等级的升级条件(经验)，每个参数代表了升级到该等级时所需要的经验值
        "expratio": { //VIP等级增加和减少的值(Beta 23.03.0725Q仅带有进入每日进入服务器增加经验)
            "up": 10,
            "down": 20
        }
    }
}
```

#### `storedata`文件

- VIP商店
- 路径: BDS/plugins/Planet/PCsvip/data/storedata.json
```js
{
    "vipgoods": [  //VIP商品
        {
            "name": "1天",  //商品名称
            "money": 195,  //商品价格
            "viptime": 1  //VIP时长
        }
    ],
    "lizigoods": [  //粒子商品
        {
            "mcid": "minecraft:heart_particle",  //粒子ID
            "money": 195  // 粒子价格
        }
    ]
}
```

#### `vipdata`文件

- VIP玩家数据
- 路径: BDS/plugins/Planet/PCsvip/data/vipdata.json
```js
{
    "SUNSServer": {  //玩家名称
        "vip": false, //玩家的VIP身份
        "liziswitch": false, //玩家粒子开关
        "lizimcid": "minecraft:heart_particle", //当前使用的粒子id
        "viplevel": 2, //玩家VIP等级
        "levelexp": "29/300", //玩家VIP等级经验(当前/下次升级所需)
        "integral": 1800, //VIP积分(目前是购买VIP获取)
        "viptitle": "至尊VIP", //VIP称号
        "viptime": null, //VIP总时长(null为玩家不是VIP，0为永久，大于0为实际天数)
        "gettime": "---", //玩家获取VIP的最初时间("---"为玩家不是VIP或永久)
        "jointime": "2023-3-21" //玩家上次加入的日期(以每日0点为重置点，用于增加VIP等级经验)
    }
    //注:玩家VIP倒计时计算方式是("当前时间与玩家上次获取VIP时间的时间差"-"玩家VIP拥有的总时长")
}
```

## API

#### 获取指定玩家VIP身份
`ll.import("vipplayer")(name)`

- 参数:
  - name: `String`  
    玩家名称
- 返回值: 玩家VIP身份
- 返回值类型: `Boolean`
  - 如果返回 `false` 则表示不是

#### 获取所有玩家VIP数据
`ll.import("PCsvip", "getall")()`

- 返回值: 所有VIP玩家数据  
- 返回值类型: `Object`
  - 如果返回 `{}` 则表示没有数据

#### 获取指定玩家原始VIP数据
`ll.import("PCsvip", "getvipdata")(name)`

- 参数:
  - name: `String`  
    玩家名称
- 返回值: 玩家是否是VIP
- 返回值类型: `Object`  
#### 数据属性
|属性|含义|类型|返回值示范|
|---|---|---|---|
|vip|VIP身份|`Boolean`|true|
|liziswitch|随身粒子开关|`Buulean`|true|
|lizinamcid|随身粒子MC代码|`String`|minecraft:heart_particle|
|viplevel|VIP等级|`Number`|1|
|levelexp|等级经验|`String`|40/100|
|integral|VIP积分|`Number`|40|
|viptitle|VIP称号|`String`|§cVIP|
|viptime|VIP有效时长|`Number`|1|
|gattime|VIP有效期内最早获取时间|`String`|2022-07-26 20:03:16|
  - 如果返回 `Null` 则表示没有数据  

#### 获取指定玩家中文VIP数据(新)
`ll.import("PCsvip", "getvipdataChinese")(name)`

- 参数:
  - realname: String  
    玩家的名字
- 返回值: 玩家是否是VIP
- 返回值类型: `Objevt`  

#### 数据属性
|属性|含义|类型|返回值示范|
|---|---|---|---|
|vip|VIP身份|`String`|是|
|liziswitch|随身粒子开关|`String`|开启
|lizinamcid|随身粒子MC代码|`String`|minecraft:heart_particle 或 爱心|
|viplevel|VIP等级|`String`|1级|
|levelexp|等级经验|`String`|40/100|
|upgrade|升级需要|`Number`|60|
|integral|VIP积分|`Number`|40|
|viptitle|VIP称号|`String`|§cVIP|
|viptime|VIP有效时长|`String`|1天|
|surplus|剩余时长|`String`|1天|
|gattime|VIP有效期内最早获取时间|`String`|2022-07-26 20:03:16|
  - 如果返回 `Null` 则表示没有数据  

#### 增加指定玩家VIP经验(暂时关闭)
`ll.import("PCsvip", "addviplevelexp")(name,exp)`

- 参数:
  - name: `String`  
    玩家的名字
  - exp: `Number`  
    要增加的经验值

#### 减少指定玩家VIP经验(暂时关闭)
`ll.import("PCsvip", "reduceviplevelexp")(name,exp)`
- 参数:
  - name: `String`  
    玩家的名字
  - exp: `Number`  
    要减少的经验值

#### 增加指定玩家VIP积分(新)
`ll.import("PCsvip", "addvipintegral")(name,int)`
- 参数:
  - name: `String` 
    玩家的名字
  - int: `Number`  
    要增加的积分

#### 减少指定玩家VIP积分(新)
`ll.import("PCsvip", "reducevipintegral")(name,int)`
- 参数:
  - name: `String` 
    玩家的名字
  - int: `Number`  
    要增加的积分

#### 增加指定玩家VIP时间(新)
`ll.import("PCsvip", "addviptime")(name,time)`
- 参数:
  - name: `String` 
    玩家的名字
  - time: `Number`  
    要增加的时间(单位:天)

#### 减少指定玩家VIP时间(新)
`ll.import("PCsvip", "reduceviptime")(name,time)`
- 参数:
  - name: `String` 
    玩家的名字
  - time: `Number`  
    要减少的时间(单位:天)