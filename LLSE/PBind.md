> [!TIP] PBind是一个账号绑定插件，设计之初是因为Serein面板没有绑定账号功能及查服正则换行的不支持，在1.0.6版本后进行了改名，他可以是一个前置插件，有3个导出函数接口。

## 前置组件
#### 必选
- [LiteLoaderBDS](https://www.minebbs.com/liteloader/)

## 配置文件说明

> [!NOTE] 更改配置文件请注意 JSON 文件格式，不推荐使用记事本修改或添加菜单文件解析

#### `Playerdata`文件

- 玩家数据、玩家绑定数据
- 路径: BDS/plugins/Planet/Player/Playerdata.json
```js
[
    {
        "qqid": "1031648245",
        "gameid": "SUNSServer",
        "xuid": "2535450402001250",
        "bindtime": "2023-04-23 23:26:21",
        "firstjoin": "2023-04-23 23:09:00"
    }
]
```

## API

#### 通过QQ号获取账号对象
`ll.import("PBind","qqdata")(qq)`

- 参数
  - qq: `Number`
    5-10位数QQ号
- 返回值: 账号对象
- 返回值类型 `Object`
  - 如果返回 `Null` 则表示QQ号没有账号对象或没有被绑定

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
  - 如果返回 `Null` 则表示没有账号对象

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
  - 如果返回 `Null` 则表示没有账号对象

- 示例：  
  ```js
  const PBind = ll.import("PBind","xuiddata");
  
  // 通过xuid获取绑定QQ(使用对象属性时,请先加判断)
  PBind(2535450402001250).qqid
  // 通过xuid获取绑定时间(使用对象属性时,请先加判断)
  PBind(2535450402001250).bindtime
  ```

- #### 账号对象-属性
  | 属性            | 含义           | 类型     | 示范                  |
  | --------------- | -------------- | -------- | --------------------- |
  | PBind.qqid      | 绑定的QQ       | `Number` | 114514                |
  | PBind.gameid    | 游戏ID         | `String` | "SUNSServer"          |
  | PBind.xuid      | XBOXid         | `Number` | 253***************50  |
  | PBind.bindtime  | 绑定的时间     | `String` | "2022-11-23 14:31:40" |
  | PBind.firstjion | 第一次进服时间 | `String` | "2022-11-23 03:43:34" |