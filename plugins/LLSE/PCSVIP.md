> [!TIP|style:flat||labelVisibility:hidden|iconVisibility:hidden] PCsvip是我们接手苍山工作室的CSvip的后期维护插件,我们接手后对PCsvip进行了重新规划,将他视为前置插件使用，移除了多余的功能,开放多个外接接口实现多元化操作。

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
`/vip del (玩家ID/QQ号)`	控制台删除VIP	控制台操作，当玩家是VIP时输入会关掉VIP，当玩家不是VIP时会删除VIP数据  
`/vip addexp (玩家ID/QQ号) (经验)` 控制台增加玩家会员等级经验，所有参数为必填  
`/vip reduceexp (玩家ID/QQ号) (经验)` 控制台减少玩家会员等级经验，所有参数为必填  
`/vip addint (玩家ID/QQ号) (经验)` 控制台增加玩家会员积分，所有参数为必填  
`/vip reduceint (玩家ID/QQ号) (经验)` 控制台减少玩家会员积分，所有参数为必填  
`/vip addtime (玩家ID/QQ号) (时长)`	控制台增加玩家时长	控制台操作，所有参数为必填  
`/vip reducetime (玩家ID/QQ号)  (时长)`	控制台减少玩家时长	控制台操作，所有参数为必填，当减少时长大于剩余时长会自动取消玩家的VIP  
`/vip query (玩家ID/QQ号)` 控制台查询玩家VIP数据	控制台操作，所有参数为必填  
### 指令示范
|指令模板|模板说明|指令模板|模板说明|
|--|--|--|--|
|`vip add 114514`|将114514绑定的玩家添加为会员,时间为默认|`vip add Steve 6`|将Steve玩家添加为会员,时间为6天|
|`vip del 114514`|移除114514绑定的玩家的会员|`vip del Steve`|移除Steve玩家的会员|
|`vip addexp 114514 100`|给114514绑定的玩家增加100exp会员等级经验|`vip addexp Steve 100`|给Steve玩家增加100exp会员等级经验|
|`vip reduceexp 114514 100`|减少114514绑定的玩家100exp会员等级经验|`vip reduceexp Steve 100`|减少Steve玩家100exp会员等级经验|
|`vip addint 114514 100`|给114514绑定的玩家增加100会员积分|`vip addint Steve 100`|给Steve玩家增加100会员积分|
|`vip reduceint 114514 100`|减少114514绑定的玩家100会员积分|`vip reduceint Steve 100`|减少Steve玩家100会员积分|
|`vip addtime 114514 10`|给114514绑定的玩家增加10天会员时间|`vip addtime Steve 100`|给Steve玩家增加10天会员时间|
|`vip reducetime 114514 100`|减少114514绑定的玩家10天会员时间|`vip reducetime Steve 100`|减少Steve玩家10天会员时间|
|`vip query 114514`|查询114514绑定的玩家的会员信息|`vip query Steve`|查询Steve玩家的会员信息|


## 配置文件说明

#### `config`文件

- 插件基础配置文件
- 路径: BDS/plugins/Planet/PCsvip/config.json
> 最新版本不能使用旧版本的配置文件、PCsvip正确安装会自动更正不正确的配置项，无需手动修改
- `2.0.0  Beta 23.07.0402N`
```js
{
  "version": "v2.0.0 Beta 23.07.0402N", //插件版本
  "money": 0, //经济模式(0为计分板，1为LLMoney)
  "score": "money",
  "buyswitch": 1, //购买/续费VIP开关(0为关闭，1为开启)
  "viptime": 7, //VIP默认时长(管理员手动添加的时长(单位:天))
  "viptitle": [ //注册PAPI的变量返回值
    "至尊VIP", //玩家是VIP时的返回文本
    "非VIP" //玩家不是VIP时的返回完本
  ],
  "lizi": "minecraft:arrow_spell_emitter", //vip默认粒子(根据MC原版的id来填写，可在PLib的lizi配置文件中复制lizimcid的配置项粘贴到这里)
  "blacklist": [], //VIP黑名单(禁止一些玩家购买VIP)
  "viplevel": { //VIP等级
    //每级经验与等级数量 数组内的数量表示了VIP最高等级,例如下面有5给数值表示了VIP等级最高为5级
    //每个数值表示升级所需的经验,例如从1级升到2级需要300经验、2级升3级需要600经验以此类推
    //1级必须为0,否则会报错
    "exp": [
      0,
      100,
      300,
      600,
      1000
    ],
    "expratio": { //升级、降级的经验
      "up": 10, //每日首次登陆服务器所获得的当日经验
      "down": 20 //当玩家失去VIP后起,每日首次登陆服务器将会扣除所积累的经验
    }
  },
  "upintegral": 10, //每日会员玩家进入服务器增长的积分
  "customtitlebuff": [//会员玩家自定义称号允许使用的BUFF(后续可在会员配置中修改)
        "absorption",
        "conduit_power",
        "haste"
    ]
}
```

#### `storedata`文件

- 会员商店
- 路径: BDS/plugins/Planet/PCsvip/data/storedata.json
```js
{
  "vipgoods": [ //VIP商品
    {
      "name": "1天", //商品名称
      "money": 195, //商品价格
      "viptime": 1 //VIP时长
    }
  ],
  "lizigoods": [ //粒子商品
    {
      "mcid": "minecraft:heart_particle", //粒子ID
      "money": 195 // 粒子价格
    }
  ]
}
```

#### `vipdata`文件

- 会员玩家数据
- 路径: BDS/plugins/Planet/PCsvip/data/vipdata.json
```js
{
  "SUNSServer": { //玩家名称
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


#### `lizidata`文件

- 会员玩家购买的粒子
- 路径: BDS/plugins/Planet/PCsvip/data/lizidata.json
```js
"SUNSServer": [
        {
            "mcid": "minecraft:heart_particle", //粒子的标准名
            "time": 172, //粒子有效时间
            "gettime": "2023-05-08 23:43:04"  //首次获取粒子的时间
        },
        {
            "mcid": "minecraft:arrow_spell_emitter",
            "time": 18,
            "gettime": "2023-07-05 20:59:23"
        }
    ]
```

## API
?> PCsvip提供了10个接口

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
`ll.import("PCsvip",
"getvipdata")(name)`

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
|gattime|VIP有效期内最早获取时间|`String`|2022-07-26 20: 03: 16|
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
|gattime|VIP有效期内最早获取时间|`String`|2022-07-26 20: 03: 16|
  - 如果返回 `Null` 则表示没有数据  

#### 增加指定玩家VIP经验
`ll.import("PCsvip", "addviplevelexp")(name,exp)`

- 参数:
  - name: `String`  
    玩家的名字
  - exp: `Number`  
    要增加的经验值
- 返回值: 增加成功对象  
- 返回值类型: `Objevt`

    | 属性      | 含义         | 类型      | 示范  |
    | --------- | ------------ | --------- | ----- |
    | .state    | 增加结果     | `Boolean` | true  |
    | .content  | 增加结果信息 | `String`  | 见下  |

  - 返回对象content的内容
    | 内容                               |
    | ---------------------------------- |
    | "要增加经验的会员没填名称"           |
    | "要增加经验的玩家还不是会员"   |
    | "要增的加经验没有填"     |
    | "要增的加经验不是纯数字"     |
    | "要增的加经验范围不正确,强制范围为1-100000"                 |
    | "经验增加成功"                 |

#### 减少指定玩家VIP经验(减少经验不能大于20)
`ll.import("PCsvip", "reduceviplevelexp")(name,exp)`
- 参数:
  - name: `String`  
    玩家的名字
  - exp: `Number`  
    要减少的经验值
- 返回值: 减少成功对象  
- 返回值类型: `Objevt`

    | 属性      | 含义         | 类型      | 示范  |
    | --------- | ------------ | --------- | ----- |
    | .state    | 减少结果     | `Boolean` | true  |
    | .content  | 减少结果信息 | `String`  | 见下  |

  - 返回对象content的内容
    | 内容                               |
    | ---------------------------------- |
    | "要减少经验的会员没填名称"          |
    | "要减少经验的玩家还不是会员"   |
    | "要减少的经验没有填"     |
    | "要减少的经验不是纯数字"     |
    | "要减少的经验范围不正确,强制范围为1-20"     |
    | "当前会员的等级经验已扣完,无法继续操作"                 |
    | "经验减少成功"                 |


#### 增加指定玩家VIP积分
`ll.import("PCsvip", "addvipintegral")(name,int)`
- 参数:
  - name: `String` 
    玩家的名字
  - int: `Number`  
    要增加的积分
- 返回值: 增加成功对象
- 返回值类型: `Objevt`

    | 属性      | 含义         | 类型      | 示范  |
    | --------- | ------------ | --------- | ----- |
    | .state    | 减少结果     | `Boolean` | true  |
    | .content  | 减少结果信息 | `String`  | 见下  |

  - 返回对象content的内容
    | 内容                               |
    | ---------------------------------- |
    | "要增加积分的会员没填名称"          |
    | "要增加积分的玩家还不是会员"   |
    | "要增加的积分没有填"     |
    | "要增加的积分不是纯数字"     |
    | "要增加的积分范围不正确,强制范围为1-100000"     |
    | "积分增加成功"                 |

#### 减少指定玩家VIP积分
`ll.import("PCsvip", "reducevipintegral")(name,int)`
- 参数:
  - name: `String` 
    玩家的名字
  - int: `Number`  
    要减少的积分
- 返回值: 增加成功对象
- 返回值类型: `Objevt`

    | 属性      | 含义         | 类型      | 示范  |
    | --------- | ------------ | --------- | ----- |
    | .state    | 减少结果     | `Boolean` | true  |
    | .content  | 减少结果信息 | `String`  | 见下  |

  - 返回对象content的内容
    | 内容                               |
    | ---------------------------------- |
    | "要减少积分的会员没填名称"          |
    | "要减少积分的玩家还不是会员"   |
    | "要减少的积分没有填"     |
    | "要减少的积分不是纯数字"     |
    | "要减少的积分范围不正确,强制范围为1-100000"     |
    | "该会员的积分不足,无法扣除"     |
    | "积分减少成功"                 |

#### 增加指定玩家VIP时间
`ll.import("PCsvip", "addviptime")(name,time)`
- 参数:
  - name: `String` 
    玩家的名字
  - time: `Number`  
    要增加的时间(单位:天)
- 返回值: 增加成功对象
- 返回值类型: `Objevt`

    | 属性      | 含义         | 类型      | 示范  |
    | --------- | ------------ | --------- | ----- |
    | .state    | 增加结果     | `Boolean` | true  |
    | .content  | 增加结果信息 | `String`  | 见下  |

  - 返回对象content的内容
    | 内容                               |
    | ---------------------------------- |
    | "要增加时间的会员没填名称"          |
    | "要增加时间的玩家还不是会员"   |
    | "要增加时间的玩家是永久会员,无法操作"    |
    | "要增加的时间没有填"     |
    | "要增加的时间不是纯数字"     |
    | "要增加的时间范围不正确,强制范围为1-100000"     |
    | "会员时间增加成功"                 |

#### 减少指定玩家VIP时间
`ll.import("PCsvip", "reduceviptime")(name,time)`
- 参数:
  - name: `String` 
    玩家的名字
  - time: `Number`  
    要减少的时间(单位:天)
- 返回值: 增加成功对象
- 返回值类型: `Objevt`

    | 属性      | 含义         | 类型      | 示范  |
    | --------- | ------------ | --------- | ----- |
    | .state    | 减少结果     | `Boolean` | true  |
    | .content  | 减少结果信息 | `String`  | 见下  |

  - 返回对象content的内容
    | 内容                               |
    | ---------------------------------- |
    | "要减少时间的会员没填名称"          |
    | "要减少时间的玩家还不是会员"   |
    | "要减少时间的玩家是永久会员,无法操作"    |
    | "要减少的时间没有填"     |
    | "要减少的时间不是纯数字"     |
    | "要减少的时间范围不正确,强制范围为1-100000"     |
    | "要减少时间的玩家是剩余天数不足以抵扣"     |
    | "会员时间减少成功"                 |