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
- [PVip_old 为使用旧接口的插件而制作](https://sunsserver.lanzn.com/iJdYP1zydl5a)
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
|`vip query 114514`|查询114514绑定的玩家的会员信息（默认为英文输出格式）|`vip query Steve chn`|查询Steve玩家的会员信息（输出格式为中文）|


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
- 路径: BDS/plugins/Planet/PVip/data/storedata.json 
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
- 路径: BDS/plugins/Planet/PVip/data/vip.json 
```js
{
  "SUNSServer": { // 玩家名称
    "vip": false, // 玩家的VIP身份
    "lizi_switch": false, //玩家粒子开关
    "lizi_type": "minecraft:heart_particle", // 当前使用的粒子type参数
    "level": 2, // 玩家VIP等级
    "exp": "29/300", // 玩家VIP等级经验(当前/下次升级所需)
    "integral": 1800, // VIP积分(目前是购买VIP获取)
    "title": "至尊VIP", // VIP称号
    "time": null, // VIP总时长(null为玩家不是VIP，0为永久，大于0为实际天数)
    "get_time": "---", // 玩家获取VIP的最初时间("---"为玩家不是VIP或永久)
    "join_time": "2023-3-21", // 玩家上次加入的日期(以每日0点为重置点，用于增加VIP等级经验)
    "black_list": false // 是否存在VIP黑名单中
  }
  //注:玩家VIP倒计时计算方式是("当前时间与玩家上次获取VIP时间的时间差"-"玩家VIP拥有的总时长")
}
```

#### `lizi`文件 
- 会员玩家购买的粒子 
- 路径: BDS/plugins/Planet/PVip/data/lizi.json 
```js
{
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
}
```

## 模块化
> PVip全新版本开启了VIP模块化,直接将PVip的模块插件放置在指定文件夹中，通过PVip的`vipmod`指令打开VIP模块中心进行调用<br>PVip模块可使用`LiteLoaderBDS`或`LegacyScriptEngine`所有的API,理论上它也可以是一个插件加载器（但不建议在PVip的模块中安装`LiteLoaderBDS`或`LegacyScriptEngine`的插件）
- 路径: BDS/plugins/Planet/PVip/module/
- 表单模块格式 
```js
{ // PVip调用模块的main默认函数
  // 默认函数的名字可随意编辑,导出对象必须存在main这个参数,否则PVip提示错误或功能缺失
  // PVip调用模块时会传递一个玩家对象的参数
  // 模块开发时可以使用玩家PVip的接口获取PVip玩家相关的数据进行操作
  // 玩家对象参数可以不用使用

  function main(player) { // 默认函数（这是一个表单函数)
    let fm = mc.newSimpleForm();
    fm.setTitle("表单模块");
    player.sendForm(fm, (player, id) => { });
  }
  // 模块导出 {name: 模块名称, version: 模块版本, main:表单}
  module.exports = { name: "表单模块", version: "0.0.0", main: main }
}
```
- 非表单模块 
```js
{ // PVip调用模块的main默认函数
  // 这个函数是必须存在,否则PVip提示错误或功能确实
  // PVip调用模块时会传递一个玩家对象的参数,模块开发时可以使用玩家PVip的接口获取PVip玩家相关的数据进行操作
  // 玩家对象参数可以不用使用

  function main() { // 默认函数（这是一个表单函数)
    log("PVip的非表单模块")
  }

  module.exports = { name: "非表单模块", version: "0.0.0", main: main }
}
```

## PAPI变量说明
> 使用`BEPlaceholderAPI`公共变量需要安装`BEPlaceholderAPI`或`GMLIB-LegacyRemoteCallApi`插件

|变量|注释|
|---|---|
|`%player_vip%`|玩家VIP身份<br>根据`config`文件中的`title`显示|`ChatEX`插件`%player_vip%`<br>`GwChat`插件`%player_vip%`| 
|`%player_vip_time_left%`|玩家VIP剩余时长|`ChatEX`插件`%player_vip_time_left%`<br>`GwChat`插件`%player_vip_time_left%`| 
|`%player_vip_title%`|玩家VIP称号<br>若安装了`PTitle`不建议使用该变量|`ChatEX`插件`%player_vip%`<br>`GwChat`插件`%player_vip%`|

## API
> PVip提供了11个接口，PCsvip旧接口请查[PCsvip](./PCSVIP.md)文档<br>若使用的是PCsvip接口推荐安装[PVip_old](https://sunsserver.lanzn.com/iJdYP1zydl5a)

#### 获取PVip插件版本
`ll.import("PVip", "version")()` 

- 返回值: `PVip插件版本` 
- 返回值类型: `String` 
 - 该接口仅在`PVip`发布后开放，若使用之前的旧版本请使用`ll.hasExported("PVip","version")`检查函数是否被导出，否则会报错

#### 获取指定玩家VIP数据
`ll.import("PVip", "get_vip")(.[player])` 

- 参数
  - player: `Player`或`String`或`null`
    (可选参数)玩家对象 或 玩家名称
- 返回值: 玩家VIP数据 或 VIP所有数据
- 返回值类型: `Array<VIP,VIP,...>` 或 `Object` 
 - 若获取指定玩家的VIP返回`Null`则表示没有数据

- VIP数据对象属性

    | 属性 | 含义 | 类型 | 示范 |
    | ---------- | --------- | --------- | --------- |
    | vip | VIP身份 | `Boolean` | `true` |
    | lizi_switch | 随身粒子开关 | `Boolean` | `true` |
    | lizi_type | 当前使用的粒子type参数 | `String` | "minecraft:heart_particle" |
    | level | VIP等级 | `Number` | `2` |
    | exp | VIP经验 | `String` | "29/300" |
    | integral | VIP积分 | `Number` | `1800` |
    | title | VIP称号 | `String` | "至尊VIP" |
    | time | VIP时长 | `Number`或`null` | `1`或`null` |
    | get_time | 获取VIP时间 | `String` | "2024-05-18 15:53:08"或"---" |
    | join_time | 进服日期 | `String` | "2024-3-17" |
    | black_list | 是否存在于<br>VIP黑名单中 | `Boolean` | `false`|

#### 获取指定玩家VIP身份
`ll.import("PVip", "get_status")(player)` 

- 参数
  - player: `Player`或`String`
    玩家对象 或 玩家名称
- 返回值: 玩家VIP身份 或 VIP所有数据 
- 返回值类型: `Boolean` 

#### 获取VIP玩家剩余时长 
`ll.import("PVip", "vip_time_left")(player)` 

- 参数
 - player: `Player`或`String`
    玩家对象 或 玩家名称
- 返回值: 剩余时长（单位: 天） 
- 返回值类型: `Number`
 - 返回值为`0`时表示无数据、时长为永久、不是会员

#### 添加一个VIP
`ll.import("PVip", "add_vip")(player, .[time, integral])` 

- 参数
 - player: `Player`或`String`
    玩家对象 或 玩家名称
 - time: `Number` 
    (可选参数)VIP时长 
 - integral: `Number` 
    (可选参数)VIP积分 
- 返回值: 是否添加成功 
- 返回值类型: `Boolean` 

#### 删除一个VIP
`ll.import("PVip", "del_vip")(player)` 

- 参数
 - player: `Player`或`String`
    玩家对象 或 玩家名称
- 返回值: 是否删除成功 
- 返回值类型: `Boolean` 
 - 执行的玩家是VIP会关闭VIP 
 - 执行的玩家不是VIP会删除VIP数据 

#### 添加指定玩家VIP时长
`ll.import("PVip", "add_time")(player, time)` 

- 参数
 - player: `Player`或`String`
    玩家对象 或 玩家名称
 - time: `Number` 
    VIP时长 
- 返回值: 是否添加成功 
- 返回值类型: `Boolean` 
 - 被执行时长的玩家必须是获得过VIP的玩家 
 - 执行后玩家当前不是VIP身份会自动开通VIP身份，类似`ll.import("PVip", "add_vip")(player)`API  

#### 减少指定玩家VIP时长
`ll.import("PVip", "reduce_time")(player, time)` 

- 参数
 - player: `Player`或`String`
    玩家对象 或 玩家名称
 - time: `Number` 
    VIP时长 
- 返回值: 是否减少成功 
- 返回值类型: `Boolean` 
 - 被执行的玩家必须是获得过VIP的玩家 
 - 执行后玩家当前剩余时长小于被减少的时长会自动关闭VIP，类似执行一次`ll.import("PVip", "del_vip")(player)` 

#### 增加指定玩家增加VIP经验 
`ll.import("PVip", "add_exp")(player, exp)` 

- 参数
 - player: `Player`或`String`
    玩家对象 或 玩家名称
 - exp: `Number` 
    VIP经验 
- 返回值: 是否添加成功 
- 返回值类型: `Boolean`
 - 被执行的玩家必须是获得过VIP的玩家 

#### 减少指定玩家VIP经验 
`ll.import("PVip", "reduce_exp")(player, exp)` 

- 参数
 - player: `Player`或`String`
    玩家对象 或 玩家名称
 - exp: `Number` 
    VIP经验 
- 返回值: 是否减少成功 
- 返回值类型: `Boolean`
 - 被执行的玩家必须是获得过VIP的玩家 

#### 增加指定玩家VIP积分 
`ll.import("PVip", "add_integral")(player, integral)` 

- 参数
 - player: `Player`或`String`
    玩家对象 或 玩家名称
 - integral: `Number` 
    VIP积分 
- 返回值: 是否添加成功 
- 返回值类型: `Boolean`
 - 被执行的玩家必须是获得过VIP的玩家 

#### 减少指定玩家VIP积分 
`ll.import("PVip", "reduce_integral")(player, integral)` 

- 参数
 - player: `Player`或`String`
    玩家对象 或 玩家名称
 - integral: `Number` 
    VIP积分 
- 返回值: 是否减少成功 
- 返回值类型: `Boolean`
 - 被执行的玩家必须是获得过VIP的玩家 