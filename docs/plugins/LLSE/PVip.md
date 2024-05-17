:::tip
PVip是PCsvip的全新续作,作为前置插件的它拥有PCsvip全部功能,且提供多种兼容接口方便第三方插件调用。
:::

## 前置组件
### 必选
#### LL2 
- [LiteLoaderBDS](https://www.minebbs.com/liteloader/) 
#### LL3
- [LeviLamina](https://www.minebbs.com/resources/levilamina.8049/) 
- [LegacyScriptEngine](https://www.minebbs.com/resources/legacyscriptengine.8048/) 
 - 此插件需要LL3的LSE-quickjs加载器下运行,使用前请确保您已安装了该加载器 

### 可选
- [PLib 建议使用](https://www.minebbs.com/resources/plib-planet.4523/) 
> LL2上使用PAPI的所需组件 
 - [BEPlaceholderAPI](https://www.minebbs.com/resources/beplaceholderapi.4181/) 
> LL3上使用PAPI的所需组件 
 - [GMLIB](https://www.minebbs.com/resources/gmlib.6636/) 
 - [GMLIB-LegacyRemoteCallApi](https://www.minebbs.com/resources/gmlib-legacyremotecallapi-gmlib-remotecallapi.7159/) 

## 安装
#### LL2
- 首次安装,将文件`PVip.js`或`PVip.llse.js`解压到此路径下:`BDS/plugins/` 
 - 更新直接替换原来的文件,若旧插件的名称与新插件的名称不一致,请删除旧插件再解压 
#### LL3
- LL3 将文件夹`PVip`解压到此路径下:`BDS/plugins/` 
 - 更新插件请将原来的文件夹删除 

## 注册指令说明
`/vip` - 会员中心
`/myvip` - 我的会员 游戏内执行  
`/vipshop` - 会员商城	游戏内执行  
`/vipset` - 会员管理	游戏内执行  
`/vip add (玩家ID/QQ号) [天数]` - 控制台添加VIP	控制台操作，"[]"内为选填  
`/vip del (玩家ID/QQ号)`	控制台删除VIP	控制台操作，当玩家是VIP时输入会关掉VIP，当玩家不是VIP时会删除VIP数据  
`/vip addexp (玩家ID/QQ号) (经验)` 控制台增加玩家会员等级经验，所有参数为必填  
`/vip reduceexp (玩家ID/QQ号) (经验)` 控制台减少玩家会员等级经验，所有参数为必填  
`/vip addint (玩家ID/QQ号) (经验)` 控制台增加玩家会员积分，所有参数为必填  
`/vip reduceint (玩家ID/QQ号) (经验)` 控制台减少玩家会员积分，所有参数为必填  
`/vip addtime (玩家ID/QQ号) (时长)`	控制台增加玩家时长	控制台操作，所有参数为必填  
`/vip reducetime (玩家ID/QQ号)  (时长)`	控制台减少玩家时长	控制台操作，所有参数为必填，当减少时长大于剩余时长会自动取消玩家的VIP  
`/vip query (玩家ID/QQ号) [输出类型]` 控制台查询玩家VIP数据	控制台操作，所有参数为必填  
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
|`vip query 114514`|查询114514绑定的玩家的会员信息（默认为英文输出格式）|`vip query Steve cn`|查询Steve玩家的会员信息（输出格式为中文）|


## 配置文件说明 
> 更改配置文件请注意 JSON 文件格式，不推荐使用记事本修改配置文件

#### `config`文件 
- 插件基础配置文件 
- 路径: BDS/plugins/Planet/PVip/config.json 
> 最新版本不能使用旧版本的配置文件、PVip正确安装会自动更正不正确的配置项，无需手动修改 
```js
{
  "version": "v3.0.0", //插件版本
  "money": 0, //经济模式(0为计分板，1为LLMoney)
  "score": "money",
  "buy_switch": 1, //购买/续费VIP开关(0为关闭，1为开启)
  "title": [ //注册PAPI的变量返回值
    "至尊VIP", //玩家是VIP时的返回文本
    "非VIP" //玩家不是VIP时的返回完本
  ],
  "default_time": 7, //VIP默认时长(管理员手动添加的时长(单位:天))
  "default_lizi": "minecraft:arrow_spell_emitter", //vip默认粒子(根据MC原版的type来填写，可在PLib的lizi配置文件中复制type的配置项粘贴到这里)
  "blacklist": [], //VIP黑名单(禁止一些玩家购买VIP)
  "level": { // VIP等级
    "up": 10, // 每日首次登陆服务器所获得的当日经验
    "down": 20, //当玩家失去VIP后起,每日首次登陆服务器将会扣除所积累的经验
    // 每级经验与等级数量 数组内的数量表示了VIP最高等级,例如下面有5给数值表示了VIP等级最高为5级
    // 每个数值表示升级所需的经验,例如从1级升到2级需要300经验、2级升3级需要600经验以此类推
    // 1级必须为0,否则会报错
    "exp": [
      0,
      100,
      300,
      600,
      1000
    ]
  },
  "daily_points": 10, //每日会员玩家进入服务器增长的积分
  "custom_title_buff": [//会员玩家自定义称号允许使用的BUFF(后续可在会员配置中修改)
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
  "vip": [ // VIP商品
    {
      "name": "1天", // 商品名称
      "money": 195, // 商品价格
      "time": 1 // VIP时长
    }
  ],
  "lizi": [ // 粒子商品
    {
      "type": "minecraft:heart_particle", // 粒子type参数
      "money": 195 // 粒子价格
      "time": 7 // 粒子时长
    }
  ]
}
```

#### `vip`文件 
- 会员玩家数据 
- 路径: BDS/plugins/Planet/PCsvip/data/vip.json 
```js
{
  "SUNSServer": { // 玩家名称
    "vip": false, // 玩家的VIP身份
    "lizi_switch": false, //玩家粒子开关
    "lizi_type": "minecraft:heart_particle", // 当前使用的粒子type参数
    "evel": 2, // 玩家VIP等级
    "exp": "29/300", // 玩家VIP等级经验(当前/下次升级所需)
    "integral": 1800, // VIP积分(目前是购买VIP获取)
    "title": "至尊VIP", // VIP称号
    "time": null, // VIP总时长(null为玩家不是VIP，0为永久，大于0为实际天数)
    "get_time": "---", // 玩家获取VIP的最初时间("---"为玩家不是VIP或永久)
    "join_time": "2023-3-21" // 玩家上次加入的日期(以每日0点为重置点，用于增加VIP等级经验)
  }
  //注:玩家VIP倒计时计算方式是("当前时间与玩家上次获取VIP时间的时间差"-"玩家VIP拥有的总时长")
}
```

#### `lizi`文件 
- 会员玩家购买的粒子 
- 路径: BDS/plugins/Planet/PCsvip/data/lizi.json 
```js
"SUNSServer": [
        {
            "type": "minecraft:heart_particle", // 粒子的标准名
            "time": 172, // 粒子有效时间
            "get_time": "2023-05-08 23:43:04"  // 首次获取粒子的时间
        },
        {
            "type": "minecraft:arrow_spell_emitter",
            "time": 18,
            "get_time": "2023-07-05 20:59:23"
        }
    ]
```

## API
> 开发中