> [!TIP|style:flat||labelVisibility:hidden|iconVisibility:hidden] 这是一个基于Serein面板开发的账号绑定系统,配合服务端PBind插件进行数据调换,在QQ群或私聊中绑定、解绑、添加白名单、移除白名单等操作

## 前置组件
#### 必选
- [Serein](https://serein.cc/)
- [PBind-LLSE版](https://www.minebbs.com/resources/pbind.4211/)

## 配置文件说明

> [!ATTENTION] 更改配置文件请注意 JSON 文件格式，不推荐使用记事本修改或添加菜单文件解析

#### `config`文件

- 插件基础配置文件
- 路径: Serein/plugins/PBind/config.json
```js
{
  "version": "1.0", //插件版本
  "BDcmd": "绑定", //绑定指令
  "JBcmd": "解绑", //解绑指令
  "BDwjcmd": "绑定玩家", //绑定玩家指令
  "TJwhite": "添加白名单", //添加白名单指令
  "YCwhite": "移除白名单", //移除白名单指令
  "CXBind": "查询绑定", //查询绑定指令
  "PrivateChat": { //私信机器功能
    "module": false, //模块开关(true或false)
    "admin": [ //私信机器人的管理员身份
      1031648245
    ]
  }
}
```

#### `Playerdata`文件 与PBind-LLSE版共用

- 玩家数据、玩家绑定数据
- 路径: BDS/plugins/Planet/Player/Playerdata.json
```js
[
  {
    "qqid": 1031648245,
    "gameid": "SUNSServer",
    "xuid": 2535450402001250,
    "bindtime": "2023-04-23 23:26:21",
    "firstjoin": "2023-04-23 23:09:00"
  }
]
```

## API

> [!ATTENTION] PBind-Serein版没有提供外接接口