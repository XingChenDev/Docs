> [!TIP|style:flat||labelVisibility:hidden|iconVisibility:hidden] PLib是Planet工作室插件的一个前置插件之一，主要供应“P”系列插件共享数据的对接。

## 前置组件
#### 必选
- [LiteLoaderBDS](https://www.minebbs.com/liteloader/)

#### 可选
- [PBind](https://www.minebbs.com/resources/pbind.4211/) 

## 配置文件说明

> [!ATTENTION] 更改配置文件请注意 JSON 文件格式，不推荐使用记事本修改或添加菜单文件解析

#### `buffdata`文件

- BUFF数据
- 路径: BDS/plugins/Planet/PLibrary/buffdata.json
```js
// 因数据较多,本文档仅展示一条
[ 
    {
        "buffname": "伤害吸收",  //buff的中文名称
        "buffmcid": "absorption",  //buff的MCID
        "path": "textures/ui/absorption_effect"  //buff的贴图路径
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
        "liziname": "黑药水气泡",  //粒子的中文名称
        "lizimcid": "minecraft:arrow_spell_emitter"  //粒子的标准类型名
    }
]
```

#### `iteminfodata`文件

- 物品数据
- 路径: BDS/plugins/Planet/PLibrary/iteminfodata.json
```js
//因数据较多,本文档仅展示一条
{
     "minecraft:acacia_boat": {  //物品标准类型名
        "type": "minecraft:acacia_boat",  //物品标准类型名
        "chinese": "金合欢木船",  //物品的中文名称
        "path": "textures/items/boat_oak.png"  //物品的贴图路径
    }
}
```

#### `Playerdata`文件 v1.0.5版本后

- 进入过服务器的玩家数据&PBind绑定数据
- 路径: BDS/plugins/Planet/Player/Playerdata.json
```js
[
    {
        "qqid": "413831175",  //QQ号
        "gameid": "SUNSServer",  //游戏ID
        "xuid": "2535450402001250",  //Xuid
        "bindtime": "2023-04-23 23:09:27",  //绑定时间
        "firstjoin": "2023-04-23 23:09:00"  //第一次进服时间
    }
]
```

## API
?> PLib提供了4个接口 

#### 获取buff库数据
`ll.import("PLib","buffdata")()`

- 返回值: buff库数据列表
- 返回值类型: Array<Object,Object,...>
  - 如果返回 "[]" 则表示没有数据
    
    | 属性      | 含义           | 类型     | 示范                           |
    | --------- | -------------- | -------- | ------------------------------ |
    | .buffname | buff的中文名称 | `String` | "伤害吸收"                     |
    | .buffmcid | buff的MCID     | `String` | "absorption"                   |
    | .path     | buff的贴图路径 | `String` | "textures/ui/absorption_effect" 本项为空则表示没有路径|


#### 获取粒子库数据

`ll.import("PLib","lizidata")()`

- 返回值: 粒子库数据列表
- 返回值类型: Array<Object,Object,...>
  - 如果返回 "[]" 则表示没有数据
    
    | 属性      | 含义             | 类型     | 示范                            |
    | --------- | ---------------- | -------- | ------------------------------- |
    | .liziname | 粒子的中文名称   | `String` | "黑药水气泡"                    |
    | .lizimcid | 粒子的标准类型名 | `String` | "minecraft:arrow_spell_emitter" |

#### 获取指定物品数据

`ll.import("PLib, "iteminfo")(item)`

- 参数
  - item: String
    物品标准类型名
- 返回值 物品对象
- 返回类型 Object
    
    | 属性      | 含义           | 类型     | 示范                     |
    | --------- | -------------- | -------- | ------------------------ |
    | .type     | 物品标准类型名 | `String` | "minecraft:apple"        |
    | .chinese  | 物品的中文名称 | `String` | "苹果"                   |
    | .path     | 物品的贴图路径 | `String` | "textures/items/apple.png" 本项为空则表示没有路径|

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
- 返回值类型 Array<Object,Object,...>
  - 如果返回 "[]" 则表示没有数据

    | 属性       | 含义           | 类型     | 示范                  |
    | ---------- | -------------- | -------- | --------------------- |
    | .qqid      | 绑定的QQ       | `Number` | "114514"              |
    | .gameid    | 游戏ID         | `String` | "SUNSServer"          |
    | .xuid      | XBOXid         | `Number` | 253***************50  |
    | .bindtime  | 绑定的时间     | `String` | "2022-11-23 14:31:40" |
    | .firstjion | 第一次进服时间 | `String` | "2022-11-23 03:43:34" |