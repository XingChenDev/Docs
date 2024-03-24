:::tip
PStop是一个可在游戏内、控制台输入指令来进行对非管理员(OP)玩家的进服拦截,使用场景多用于维护服务器
:::

## 前置组件
#### 必选
- [LiteLoaderBDS](https://www.minebbs.com/liteloader/)

#### 可选
- [PCsvip](https://www.minebbs.com/resources/pcsvip.4385/)

## 注册指令说明
`/pstop` - 普通玩家: 反馈%&举报  OP玩家和控制台: 维护服务器（游戏内、控制台）  
- 控制台使用示范  
`pstop on` - 开启维护并使用上次维护的信息  
`pstop on 维护了，快出去` - 开启维护，使用输入的维护信息  
`pstop off` - 关闭维护

## 配置文件说明

> [!ATTENTION] 更改配置文件请注意 JSON 文件格式，不推荐使用记事本修改或添加菜单文件解析

#### `config`文件

- 插件基础配置文件
- 路径: BDS/Plugins/Planet/PStop/config.json
```js
{
    "version": "v1.0.8",
    "score": "money", // 计分板项的名称（默认为money，根据自己的积分项更改），可在线使用pstop指令进行更改支持热载
    "maintain":{
        "switch": false; // 维护系统开关（0为关闭维护，1为开启维护）
        "content": "预计两小时后开服，请耐心等待。。。" //维护信息（玩家被踢出服务器的提.提示信息）
    },
    "compensate": { //维护补偿    可在线使用pstop指令进行更改支持热载
        "switch": true, //补偿开关（是否启用维护补偿）
        "money": 100, // 补偿LLMoney数量
        "score": 1000, // 补偿计分板数量
        "item": "{\"Count\":1b,\"Damage\":0s,\"Name\":\"minecraft:apple\",\"WasPickedUp\":0b}", // 补偿物品的NBT值
        "vip": 0 // 补偿VIP天数（仅限PCsvip插件被加载）
    },
    "receive_players": [] //已领取补偿的玩家名单（每次开启维护时会重置）
}
```

#### `report`文件

- 维护与举报文件
- 路径: BDS/Plugins/Planet/PStop/config.json
```js
{   
    "2024-03-13 21:21:41": { // 反馈&举报时间
        "type": "bug", // 数据类型（bug为反馈，report为举报）
        "name": "SUNSServer", // 反馈玩家
        "content": "反馈bug，测试反馈bug", // 反馈&举报内容
        "strtime": "2024-03-13 21:21:41" // 时间
    },
    "2024-03-15 21:30:12": {
        "type": "report", // 数据类型
        "name": "MC Susu2990", // 被举报的玩家
        "content": "举报玩家，测试举报玩家", // 反馈&举报内容
        "form": "SUNSServer", // 举报的玩家
        "strtime": "2024-03-13 21:30:12" // 时间
    }
}
```



## API

> [!ATTENTION] PStop没有提供外接接口