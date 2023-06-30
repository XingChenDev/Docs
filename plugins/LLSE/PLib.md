> [!TIP|style:flat||labelVisibility:hidden|iconVisibility:hidden
] PLib是Planet工作室插件的一个前置插件之一，主要供应“P”系列插件共享数据的对接。

## 前置组件
#### 必选
- [LiteLoaderBDS](https://www.minebbs.com/liteloader/)

#### 可选
- [PBind](https://www.minebbs.com/resources/pbind.4211/) 

## 注册指令说明
`/plib` - 数据库 当前仅支持查看日新玩家及历史新玩家

## 配置文件说明

> [!ATTENTION] 更改配置文件请注意 JSON 文件格式，不推荐使用记事本修改或添加菜单文件解析

#### `config`文件

- 插件基础配置文件
- 路径: BDS/plugins/Planet/PLibrary/config.json
```js
{
    "version": "v1.0.6",  //插件版本
    "historydata": 102,  //历史玩家数量
    "dailyadddata": 102  //当日玩家数量
}
```

#### `buffdata`文件 该文件已内置到插件中，
`1.0.8`将删除原有的`buffdata`文件

- BUFF数据
- 路径: BDS/plugins/Planet/PLibrary/buffdata.json
```js
// 因数据较多,本文档仅展示一条
[
  {
    "buffname": "伤害吸收", //BUFF的中文名称
    "buffmcid": "absorption", //BUFF的MCID
    "numberid": 22, //BUFF的数字ID
    "path": "textures/ui/absorption_effect" //BUFF的贴图路径
  }
]
```

#### `lizidata`文件

- 粒子数据
- 路径: BDS/plugins/Planet/PLibrary/lizidata.json
```js
// 因数据较多,本文档仅展示一条
[
  {
    "liziname": "黑药水气泡", //粒子的中文名称
    "lizimcid": "minecraft:arrow_spell_emitter" //粒子的标准类型名
  }
]
```

#### `itemdata`文件 v1.0.6版本后

- 物品数据
- 路径: BDS/plugins/Planet/PLibrary/itemdata.json
```js
[
    {
        "type": "minecraft:test",
        "chinese": "示范",
        "path": "textures/items/apple.png"
    }
]
```

#### ~~`iteminfodata`文件已弃用~~

- 物品数据
- 路径: BDS/plugins/Planet/PLibrary/iteminfodata.json
```js
//因数据较多,本文档仅展示一条
{
  "minecraft:acacia_boat": { //物品标准类型名
    "type": "minecraft:acacia_boat", //物品标准类型名
    "chinese": "金合欢木船", //物品的中文名称
    "path": "textures/items/boat_oak.png" //物品的贴图路径
  }
}
```
#### `Playerdata`文件 v1.0.5版本后

- 进入过服务器的玩家数据&PBind绑定数据
- 路径: BDS/plugins/Planet/Player/Playerdata.json
```js
[
  {
    "qqid": 413831175, //QQ号
    "gameid": "SUNSServer", //游戏ID
    "xuid": 2535450402001250, //Xuid
    "bindtime": "2023-04-23 23:09:27", //绑定时间
    "firstjoin": "2023-04-23 23:09:00" //第一次进服时间
  }
]
```

#### `db文件(NewPlayer)` v1.0.6版本后

- 记录日新增玩家的库，可通过游戏内指令`/plib`打开进行查看每日的新增用户及加入时间
- 路径: BDS/plugins/Planet/PLibrary/NewPlayer
## 注册PAPI变量

> [!ATTENTION] 使用`BEPlaceholderAPI`公共变量需要安装`BEPlaceholderAPI`插件

|变量|注释|使用示范|
|----|----|----|
|`PL_history`|总玩家人数|yoyo的侧边栏 `{bep.PL_history}`|
|`PL_dailyadd`|总玩家人数|yoyo的侧边栏 `{bep.PL_dailyadd}`|

  - 详细使用方式已目标插件为准


## API
?> PLib提供了4个接口 

#### 获取BUFF库数据

`ll.import("PLib", "buffdata")()`

- 返回值: `BUFF库数据列表`
- 返回值类型: `Array<Object,Object,...>`
  - 如果返回 "[]" 则表示没有数据

#### 获取指定BUFF的对象数据 `1.0.8`正式版新增

`ll.import("PLib", "buffinfo")(buff)`

- 参数  
  - buff: `String`  
    BUFF的英文ID
- 返回值: BUFF数据对象
- 返回值类型: `Object`
  - 如果返回 `null` 则表示没有数据对象

- BUFF数据对象属性

    | 属性 | 含义 | 类型 | 示范 |
    | --------- | --------- | --------- | --------- |
    | .buffname | BUFF的中文名称 | `String` | "伤害吸收" |
    | .buffmcid | BUFF的MCID | `String` | "absorption" |
    | .numberid | BUFF的数字ID | `Number` | `22` |
    | .path     | BUFF的贴图路径 | `String` | "textures/ui/absorption_effect" 本项为空则表示没有路径 |


#### 获取粒子库数据

`ll.import("PLib", "lizidata")()`

- 返回值: 粒子库数据列表
- 返回值类型: `Array<Object,Object,...>`
  - 如果返回 "[]" 则表示没有数据
    
#### 获取指定粒子的数据对象 `1.0.8`正式版新增

`ll.import("PLib", "liziinfo")(lizi)`

- 对象
  - lizi: `String`  
    粒子的英文ID(标准名)
- 返回值: 粒子数据对象
- 返回值类型: `Object`
  - 如果返回 `null` 则表示没有数据对象

- 粒子数据对象属性

    | 属性 | 含义 | 类型 | 示范 |
    | --------- | --------- | --------- | --------- |
    | .liziname | 粒子的中文名称 | `String` | "黑药水气泡" |
    | .lizimcid | 粒子的标准类型名 | `String` | "minecraft:arrow_spell_emitter" |

#### 获取指定物品数据

`ll.import("PLib, "iteminfo")(item)`

- 参数
  - item: `String`
    物品标准类型名
- 返回值 物品对象
- 返回类型 `Object`
    
    | 属性 | 含义 | 类型 | 示范 |
    | --------- | --------- | --------- | --------- |
    | .type | 物品标准类型名 | `String` | "minecraft:apple" |
    | .chinese | 物品的中文名称 | `String` | "苹果" |
    | .path | 物品的贴图路径 | `String` | "textures/items/apple.png" 本项为空则表示没有路径 |

  - 如果返回 `null` 则表示没有数据

- 示范
```js
{
    const PLib = ll.import("PLib","iteminfo")
       
    //获取苹果的中文名称(使用对象属性时,请先加判断)
    PLib("minecraft:apple").chinese
}
   ```

#### 获取玩家信息数据

`ll.import("PLib", "getplayer")()`

- 返回值 本服务器所有玩家数据
- 返回值类型 `Array<Object,Object,...>`
  - 如果返回 "[]" 则表示没有数据

    | 属性 | 含义 | 类型 | 示范 |
    | ---------- | --------- | --------- | --------- |
    | .qqid | 绑定的QQ | `Number` | `114514` |
    | .gameid | 游戏ID | `String` | "SUNSServer" |
    | .xuid | XUID | `Number` | `253***************50` |
    | .bindtime | 绑定的时间     | `String` | "2022-11-23 14:31:40" |
    | .firstjion | 第一次进服时间 | `String` | "2022-11-23 03:43:34" |
