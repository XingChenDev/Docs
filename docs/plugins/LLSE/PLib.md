:::tip
PLib是Planet工作室插件的一个前置插件之一，主要供应“P”系列插件共享数据的对接。
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
> LL2上使用PAPI的所需组件 
- [`BEPlaceholderAPI`](https://www.minebbs.com/resources/beplaceholderapi.4181/) 
> LL3上使用PAPI的所需组件 
- [`GMLIB`](https://www.minebbs.com/resources/gmlib.6636/) 
- [`GMLIB-LegacyRemoteCallApi`](https://www.minebbs.com/resources/gmlib-legacyremotecallapi-gmlib-remotecallapi.7159/) 

## 安装
#### LL2
- 首次安装,将文件`PLib.js`或`PLib.llse.js`解压到此路径下:`BDS/plugins/` 
 - 更新直接替换原来的文件,若旧插件的名称与新插件的名称不一致,请删除旧插件再解压 
#### LL3
- LL3 将文件夹`PLib`解压到此路径下:`BDS/plugins/` 
 - 更新插件请将原来的文件夹删除 

## 注册指令说明
`/plib` - 数据库 当前仅支持查看日新玩家及历史新玩家

## 配置文件说明

> [!ATTENTION] 更改配置文件请注意 JSON 文件格式，不推荐使用记事本修改配置文件

#### `config`文件

- 插件基础配置文件
- 路径: BDS/plugins/Planet/PLibrary/config.json
```js
{
    "version": "v1.1.0",  // 插件版本
    "history_data": 102,  // 历史玩家数量
    "daily_add_data": 102  // 当日新增玩家数量
}
```

#### `lizi`文件

- 粒子数据
- 路径: BDS/plugins/Planet/PLibrary/data/lizi.json
```js
// 因数据较多,本文档仅展示一条
[
  {
    "names": "黑药水气泡", // 粒子的中文名称
    "name":"arrow_spell_emitter", // 粒子的英文名称
    "type": "minecraft:arrow_spell_emitter" // 粒子的标准类型名
  }
]
```

#### `item`文件 v1.0.6版本后

- 物品数据
- 路径: BDS/plugins/Planet/PLibrary/data/item.json
```js
[
    {
        "names": "示范", // 物品的中文名称
        "name": "test", // 物品的英文名称
        "type": "minecraft:test", // 物品的类型名称
        "path": "textures/items/apple.png" // 物品贴图地址
    }
]
``` 

#### `bind`文件 v1.0.5版本后 原 `Playerdata`

- 进入过服务器的玩家数据&PBind绑定数据
- 路径: BDS/plugins/Planet/Player/data/bind.json
```js
[
  {
    "qq": 4*******5, // QQ号
    "name": "SUNSServer", // 游戏ID
    "channel": 1, // 频道ID
    "xuid": 253**********250, // xuid
    "bind_time": "2024-03-17 23:09:27", // 绑定时间
    "first_join": "2023-03-17 23:09:00" // 首次进服时间
  }
]
```

#### `db文件(NewPlayer)` v1.0.6版本后

- 记录日新增玩家的库，可通过游戏内指令`/plib`打开进行查看每日的新增用户及加入时间
- 路径: BDS/plugins/Planet/PLibrary/NewPlayer

## API
> PLib提供了20个接口 其中PLib新接口5个，旧版本兼容接口及PBind兼容接口15个

#### 获取PLib插件版本

`ll.import("PLib","version")()`

- 返回值: `PLib插件版本` 
- 返回值类型: `String` 
 - 该接口仅在`1.1.0`版本后开放，若使用之前的旧版本请使用`ll.hasExported("PLib","version")`检查函数是否被导出，否则会报错

#### 获取Bind数据

`ll.import("PLib", "bind")(.[bind,type])`
- 参数  
  - bind: `String`  
    （可选参数）要查询的绑定
  - type: `String`
    （可选参数）要查询的`bind`参数类型
    若查询的game_name则不需要填写，其他类型为`qq`,`channel`,`xuid`
- 返回值: 所有Bind数据或指定Bind数据对象
- 返回值类型: `Array<Bind,Bind,...>`或`Bind`
  - 如果要获取所有Bind列表,`bind`参数不需要填写,如果获取指定Bind对象,返回 `null` 则表示没有数据对象

- Bind数据对象属性

    | 属性 | 含义 | 类型 | 示范 |
    | ---------- | --------- | --------- | --------- |
    | qq | 绑定的QQ | `Number` | `114514` |
    | channel | 频道ID | `Number` | `1` |
    | name | 游戏ID | `String` | "SUNSServer" |
    | xuid | XUID | `Number` | `253***************50` |
    | bind_time | 绑定的时间     | `String` | "2022-11-23 14:31:40" |
    | first_jion | 第一次进服时间 | `String` | "2022-11-23 03:43:34" |

#### 获取BUFF数据

`ll.import("PLib", "buff")(.[buff])`

- 参数  
  - buff: `String`  
    （可选参数）BUFF的英文ID
- 返回值: 所有Buff数据或指定Buff数据对象
- 返回值类型: `Array<Buff,Buff,...>`或`Buff`
  - 如果要获取所有Buff列表,`buff`参数不需要填写,如果获取指定Buff对象,返回 `null` 则表示没有数据对象

- Buff数据对象属性

    | 属性 | 含义 | 类型 | 示范 |
    | --------- | --------- | --------- | --------- |
    | names | BUFF的中文名称 | `String` | "伤害吸收" |
    | name | BUFF的MCID | `String` | "absorption" |
    | number_id | BUFF的数字ID | `Number` | `22` |
    | path | BUFF的贴图路径 | `String` | "textures/ui/absorption_effect" 本项为空则表示没有路径 |

#### 获取Lizi数据

`ll.import("PLib", "lizi")(.[lizi])`

- 参数  
  - lizi: `String`  
    （可选参数）Lizi的名称、类型名称、数字ID
- 返回值: 所有Lizi数据或指定Lizi数据对象
- 返回值类型: `Array<Lizi,Lizi,...>`或`Lizi`
  - 如果要获取所有Lizi列表,`lizi`参数不需要填写,如果获取指定Lizi对象,返回 `null` 则表示没有数据对象

- Lizi数据对象属性

    | 属性 | 含义 | 类型 | 示范 |
    | --------- | --------- | --------- | --------- |
    | names | 粒子的中文名称 | `String` | "黑药水气泡" |
    | name | 粒子的标准类型名 | `String` | "arrow_spell_emitter" |
    | type | 粒子的标准类型名 | `String` | "minecraft:arrow_spell_emitter" |

#### 获取Item数据

`ll.import("PLib","item")(.[item])`

- 参数  
  - item: `String`  
    （可选参数）Item的名称、类型名称
- 返回值: 所有Item数据或指定Item数据对象
- 返回值类型: `Array<Item,Item,...>`或`Item`
  - 如果要获取所有Item列表,`item`参数不需要填写,如果获取指定Item对象,返回 `null` 则表示没有数据对象
  - PLib返回的`Item`并非LLSE原生返回的`Item`

- Item数据对象属性

    | 属性 | 含义 | 类型 | 示范 |
    | --------- | --------- | --------- | --------- | 
    | names | 物品的中文名称 | `String` | "苹果" | 
    | name | 物品的英文名称 | `String` | "apple" |
    | type | 物品标准类型名 | `String` | "minecraft:apple" |
    | path | 物品的贴图路径 | `String` | "textures/items/apple.png" 本项为空则表示没有路径 |
 

### 以下是旧版本接口
- 为保证旧接口的兼容性,所有的数据对象旧属性均已保留
#### 获取BUFF库数据

`ll.import("PLib", "buffdata")()` 
`ll.import("buffdata")()`

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
    | names | BUFF的中文名称 | `String` | "伤害吸收" |
    | name | BUFF的MCID | `String` | "absorption" |
    | number_id | BUFF的数字ID | `Number` | `22` |
    | path     | BUFF的贴图路径 | `String` | "textures/ui/absorption_effect" 本项为空则表示没有路径 |
    |以下是为了旧接口的兼容而保留||||
    | buffname | BUFF的中文名称 | `String` | "伤害吸收" |
    | buffmcid | BUFF的MCID | `String` | "absorption" |
    | numberid | BUFF的数字ID | `Number` | `22` |


#### 获取粒子库数据

`ll.import("PLib", "lizidata")()` 
`ll.import("lizidata")()`

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
    | names | 粒子的中文名称 | `String` | "黑药水气泡" |
    | name | 粒子的标准类型名 | `String` | "arrow_spell_emitter" |
    | type | 粒子的标准类型名 | `String` | "minecraft:arrow_spell_emitter" |
    |以下是为了旧接口的兼容而保留||||
    | liziname | 粒子的中文名称 | `String` | "黑药水气泡" |
    | lizimcid | 粒子的标准类型名 | `String` | "minecraft:arrow_spell_emitter" |

#### 获取物品库数据

`ll.import("PLib", "alliteminfo")()` 
`ll.import("itemallinfodata")()`


- 返回值: 物品库数据列表
- 返回值类型: `Array<Object,Object,...>`
  - 如果返回 "[]" 则表示没有数据

#### 获取指定物品数据

`ll.import("PLib, "iteminfo")(item)` 
`ll.import("iteminfodata")(item)`

- 参数
  - item: `String`
    物品标准类型名
- 返回值 物品对象
- 返回类型 `Object`

- 物品数据对象属性

    | 属性 | 含义 | 类型 | 示范 |
    | --------- | --------- | --------- | --------- |
    | names | 物品的中文名称 | `String` | "苹果" | 
    | name | 物品的英文名称 | `String` | "apple" |
    | type | 物品标准类型名 | `String` | "minecraft:apple" |
    | path | 物品的贴图路径 | `String` | "textures/items/apple.png" 本项为空则表示没有路径 |
    |以下是为了旧接口的兼容而保留||||
    | chinese | 物品的中文名称 | `String` | "苹果" |

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
`ll.import("PLibplayer")()`

- 返回值 本服务器所有玩家数据
- 返回值类型 `Array<Object,Object,...>`
  - 如果返回 "[]" 则表示没有数据

- 玩家数据属性

    | 属性 | 含义 | 类型 | 示范 |
    | ---------- | --------- | --------- | --------- |
    | qq | 绑定的QQ | `Number` | `114514` |
    | channel | 频道ID | `Number` | `1` |
    | name | 游戏ID | `String` | "SUNSServer" |
    | bind_time | 绑定的时间     | `String` | "2022-11-23 14:31:40" |
    | first_jion | 第一次进服时间 | `String` | "2022-11-23 03:43:34" |
    |以下是为了旧接口的兼容而保留||||
    | qqid | 绑定的QQ | `Number` | `114514` |
    | gameid | 游戏ID | `String` | "SUNSServer" |
    | xuid | XUID | `Number` | `253***************50` |
    | bindtime | 绑定的时间     | `String` | "2022-11-23 14:31:40" |
    | firstjion | 第一次进服时间 | `String` | "2022-11-23 03:43:34" |


### 兼容PBind接口

#### 通过QQ号获取账号对象

`ll.import("PBind","qqdata")(qq)`

- 参数
  - qq: `Number`  
    5-10位数QQ号
- 返回值: 账号对象
- 返回值类型 `Object`
  - 如果返回 `null` 则表示QQ号没有账号对象或没有被绑定

- 示例：  
    ```js
    const PBind = ll.import("PBind","qqdata");
    
    // 通过QQ获取账号(使用对象属性时,请先加判断)
    PBind(114514).gameid
    // 通过QQ获取绑定时间(使用对象属性时,请先加判断)
    PBind(114514).bindtime
    ```

#### 通过玩家游戏ID获取账号对象

`ll.import("PBind","gameiddata")(gameid)`

- 参数  
  - gameid: `String`
- 返回值: 账号对象
- 返回值类型 `Object`
  - 如果返回 `null` 则表示没有账号对象

- 示例：  
  ```js
  const PBind = ll.import("PBind","gameiddata");

  // 通过账号获取绑定QQ(使用对象属性时,请先加判断)
  PBind("SUNSServer").qqid
  // 通过账号获取xuid(使用对象属性时,请先加判断)
  PBind("SUNSServer").xuid
  ```

#### 通过玩家XUID获取账号对象

`ll.import("PBind","xuiddata")(xuid)`

- 参数
  - xuid: `Number`
- 返回值: 账号对象
- 返回值类型 `Object`
  - 如果返回 `null` 则表示没有账号对象

- 示例：  
  ```js
  const PBind = ll.import("PBind","xuiddata");
  
  // 通过xuid获取绑定QQ(使用对象属性时,请先加判断)
  PBind(2535450402001250).qqid
  // 通过xuid获取绑定时间(使用对象属性时,请先加判断)
  PBind(2535450402001250).bindtime
  ```

- 账号对象-属性

    | 属性 | 含义 | 类型 | 示范 |
    | ---------- | --------- | --------- | --------- |
    | qq | 绑定的QQ | `Number` | `114514` |
    | channel | 频道ID | `Number` | `1` |
    | name | 游戏ID | `String` | "SUNSServer" |
    | bind_time | 绑定的时间     | `String` | "2022-11-23 14:31:40" |
    | first_jion | 第一次进服时间 | `String` | "2022-11-23 03:43:34" |
    |以下是为了旧接口的兼容而保留||||
    | qqid | 绑定的QQ | `Number` | `114514` |
    | gameid | 游戏ID | `String` | "SUNSServer" |
    | xuid | XUID | `Number` | `253***************50` |
    | bindtime | 绑定的时间     | `String` | "2022-11-23 14:31:40" |
    | firstjion | 第一次进服时间 | `String` | "2022-11-23 03:43:34" |