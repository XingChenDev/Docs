!> 由于2.0.0修改了部分config配置文件，所以使用了旧版本的服主请删除PCsvip的config文件，最好把data文件也删掉，不确定会不会出现什么幺蛾子

> PCsvip 2.0 beta 23.03.0680L 开发版，已在QQ群内测，快加群一起参与测试吧

## 支持的功能
1.支持在线添加和删除VIP(v1.0.2首发支持)
2.支持离线添加和删除VIP(v1.0.2首发支持)
3.支持VIP时限(v1.0.2首发支持)
4.支持VIP黑名单(v1.0.2首发支持)
5.支持VIP进服特殊提醒，购买、续费、即将到期特殊提醒
6.支持VIP等级系统(计划中)
7.支持VIP积分系统(计划中)
8.支持VIP积分商城(计划中)

## 对接插件
1.与`PTitle`对接(可获得VIP称号，购买称号打折等)(由于PTitle插件将进行第三次重做，以上功能将会在下个版本上线)    
2.由`PQuery`对接(可显示VIP标识、VIP玩家进服提醒等)(已支持)  
3.由`PMenu`对接(可支持设置仅VIP才能打开的菜单或指令)(已支持)  
4.由`PStop`对接(可支持维护奖励翻倍等)(已支持)  
5.由`PSign`对接(可支持VIP玩家额外签到奖励)(已支持)  
6.由`PCdk`对接(可支持兑换码兑换VIP)(已支持，暂不支持PCsvip2.0.0)  

## 指令说明

`/myvip`	我的VIP 游戏内执行	
`/vipshop`	VIP商城	游戏内执行	
`/vipset`	VIP管理	游戏内执行	
`/viphelp`	关于插件 游戏内执行	
`/vip add (玩家ID/QQ号) [天数]`	控制台添加VIP	控制台操作，"[]"内为选填
通过QQ号添加需要安装PBind

`/vip add SUNSServer`

`/vip add SUNSServer 7`

`/vip del (玩家ID/QQ号)`	控制台删除VIP	控制台操作，当玩家是VIP时输入会关掉VIP，当玩家不是VIP时会删除VIP数据

`/vip del SUNSServer`

`/vip addtime (玩家ID/QQ号) (时长)`	控制台增加玩家时长	控制台操作，所有参数为必填
通过QQ号添加需要安装PBind

`/vip addtime SUNSServer 7`

`/vip reducetime (玩家ID/QQ号)  (时长)`	控制台减少玩家时长	控制台操作，所有参数为必填，当减少时长大于剩余时长会自动取消玩家的VIP
通过QQ号减少需要安装PBind

`/vip reducetime SUNSServer 7`

`/vip query (玩家ID/QQ号)` 控制台查询玩家VIP数据	控制台操作，所有参数为必填
通过QQ号查询需要安装PBind

`/vip query SUNSServer`

## 配置文件说明

config.json

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

storedata.json

```js
{
    "SUNSServer": {
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

buyvipdata.json

```js
{
    "vipgoods": [ //VIP商品
        {
            "name": "1天",
            "money": 195,
            "viptime": 1
        }
    ],
    "lizigoods": [ //粒子商品
        {
            "mcid": "minecraft:heart_particle",
            "money": 195
        }
    ]
}
```

## API
#### 获取指定玩家VIP身份(新)
`ll.import("vipplayer")(realname)`
- 参数:
  - realname: String
    玩家的名字
- 返回值: 玩家是否是VIP
- 返回值类型: Boolean
  - 如果返回 "0" 则表示不是，返回 "1" 则表示是

获取所有玩家VIP数据(新)
`ll.import("PCsvip", "getall")()`
- 返回值: 玩家是否是VIP
- 返回值类型: Boolean
  - 如果返回 "{}" 则表示没有数据

获取指定玩家原始VIP数据(新)
`ll.import("PCsvip", "getvipdata")(realname)`
- 参数:
  - realname: String
    玩家的名字
- 返回值: 玩家是否是VIP
- 返回值类型: Boolean
  - 如果返回 "null" 则表示没有数据
数据属性

|属性|含义|返回值示范|
|---|---|---|
|vip|VIP身份|true|
|liziswitch|随身粒子开关|true|
|lizinamcid|随身粒子MC代码|minecraft:heart_particle|
|viplevel|VIP等级|1|
|levelexp|等级经验|40/100|
|integral|VIP积分|40|
|viptitle|VIP称号|§cVIP|
|viptime|VIP有效时长|1|
|gattime|VIP有效期内最早获取时间|2022-07-26 20:03:16|

#### 获取指定玩家中文VIP数据(新)
`ll.import("PCsvip", "getvipdataChinese")(realname)`
- 参数:
  - realname: String
    玩家的名字
- 返回值: 玩家是否是VIP
- 返回值类型: Boolean
  - 如果返回 "null" 则表示没有数据
    数据属性

|属性|含义|返回值示范|
|---|---|---|
|vip|VIP身份|是|
|liziswitch|随身粒子开关|开启
|lizinamcid|随身粒子MC代码|minecraft:heart_particle 或 爱心|
|viplevel|VIP等级|1级|
|levelexp|等级经验|40/100|
|upgrade|升级需要|60|
|integral|VIP积分|40|
|viptitle|VIP称号|§cVIP|
|viptime|VIP有效时长|1天|
|surplus|剩余时长|1天|
|gattime|VIP有效期内最早获取时间|2022-07-26 20:03:16|

#### 增加指定玩家VIP经验(暂时关闭)
`ll.import("PCsvip", "addviplevelexp")(realname,levelexp)`
- 参数:
  - realname: String
    玩家的名字
  - levelexp: String
    要增加的经验值

#### 减少指定玩家VIP经验(暂时关闭)
`ll.import("PCsvip", "reduceviplevelexp")(realname,levelexp)`
- 参数:
  - realname: String
    玩家的名字
  - levelexp: String
    要减少的经验值

#### 增加指定玩家VIP积分(新)
`ll.import("PCsvip", "addvipintegral")(realname,integral)`
- 参数:
  - realname: String
    玩家的名字
  - integral: String
    要增加的积分

#### 减少指定玩家VIP积分(新)
`ll.import("PCsvip", "reducevipintegral")(realname,integral)`
- 参数:
  - realname: String
    玩家的名字
  - integral: String
    要增加的积分

#### 增加指定玩家VIP时间(新)
`ll.import("PCsvip", "addviptime")(realname,time)`
- 参数:
  - realname: String
    玩家的名字
  - time: String
    要增加的时间(单位:天)

#### 减少指定玩家VIP时间(新)
`ll.import("PCsvip", "reduceviptime")(realname,time)`
- 参数:
  - realname: String
    玩家的名字
  - time: String
    要减少的时间(单位:天)

#### 获取玩家VIP身份(旧)
`ll.import("vipplayer")(realname)`
- 参数:
  - realname: String
    玩家的名字
- 返回值: 玩家是否是VIP
- 返回值类型: Boolean
  - 如果返回 "0" 则表示不是，返回 "1" 则表示是

#### 获取玩家VIP数据(旧)
`ll.import("vipplayer")(realname)`
- 参数:
  - realname: String
    玩家的名字
- 返回值: 玩家的VIP数据
- 返回值类型: Array
  - 如果返回 Null 则表示没有数据

#### 数据属性

|属性|含义|返回值示范|
|---|---|---|
liziswitch|随身粒子开关|true
liziname|随身粒子中文名|爱心
lizinamcid|随身粒子MC代码|minecraft:heart_particle
viptime|VIP有效时长|1
gattime|VIP有效期内最早获取时间|2022-07-26 20:03:16

#### 给予玩家VIP(旧)
`ll.import("addvip")(realname, viptime)`
- 参数:
  - realname: String
    玩家的名字
  - viptime: String
    给予VIP时长
- 返回值: 是否给予VIP成功
- 返回值类型: Boolean
  - 如果返回 "1" 则表示给予VIP成功

#### 删除玩家VIP
`ll.import("delvip")(realname)`
- 参数:
  - realname: String
    玩家的名字
- 返回值: 是否删除VIP成功
- 返回值类型: Boolean
  - 如果返回 "0" 则表示不是VIP，返回 "1" 则表示删除成功