## 插件说明
PStop是一个可在游戏内、控制台输入指令来进行对非管理员(OP)玩家的进服拦截,使用场景多用于维护服务器

## 前置组件
#### 必选
- [LiteLoaderBDS](https://www.minebbs.com/liteloader/)

#### 可选
- [PCsvip](https://www.minebbs.com/resources/pcsvip.4385/)

## 配置文件说明

!> 更改配置文件请注意 JSON 文件格式，不推荐使用记事本修改或添加菜单文件解析

#### `config`文件

- 插件基础配置文件
- 路径: BDS/Plugins/Planet/PStop/config.json
```js
{
   "money": 0,//经济模式（0为计分板，1为LLMoney），可在线使用pstop指令进行更改支持热载
    "score": "money",//计分板项的名称（默认为money，根据自己的积分项更改），可在线使用pstop指令进行更改支持热载
    "maintainswitch": 0,//维护系统开关（0为关闭维护，1为开启维护）
    "maintaininfo": "预计两小时后开服，请耐心等待。。。",//维护信息（玩家被踢出服务器的提.提示信息）
    "maintaincom": {//维护补偿    可在线使用pstop指令进行更改支持热载
        "maintaincomswitch": true,//补偿开关（true为开，false为关）
        "maintaincomtype": "money",//补偿类型（money为金币补偿，item为物品补偿）
        "maintaincommoney": 10000,//经济补偿金额
        "maintaincomitem": "minecraft:apple",//物品补偿type信息
        "maintaincomitemqty": 1//物品补偿数量
    },
    "receiveplayer": []//已领取补偿的玩家名单（每次开启维护时会重置）
}
```
## API

!> PStop没有提供外接接口