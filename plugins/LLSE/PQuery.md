## 插件说明
PQuery是一个支持正则表达式通过机器人在指定的QQ群内查询游戏数据的插件
2023年4月27日我们将发布支持Serein面板的PQuery插件,从此告别正则表达式的编写,只需安装Serein面板的js插件（PQuery.Serein.js）,目前该插件已发行开发测试版
## 前置组件
#### 必选
- [LiteLoaderBDS](https://www.minebbs.com/liteloader/)

#### 可选
- [死亡榜/挖掘榜](https://www.minebbs.com/resources/2857/)
- [PSign](https://www.minebbs.com/resources/psign.4137/)
- [PCsvip](https://www.minebbs.com/resources/pcsvip.4385/)
- [PTitle](https://www.minebbs.com/resources/ptitle.4048/)
- [OnlineTimer](https://www.minebbs.com/resources/onlinetimer.2934/)
- [Ranking](https://www.minebbs.com/resources/2857/)

## 配置文件说明

> [!ATTENTION] 更改配置文件请注意 JSON 文件格式，不推荐使用记事本修改或添加菜单文件解析

#### `config`文件

- 插件基础配置文件
- 路径: BDS/plugins/Planet/PQuery/config.json
```js
{
    "version": "v1.1.9 Beta 23.04.1006T 开发版",  //插件版本
    "scoreswitch": true,  //记分板开关
    "score": "money"  //记分板名称
}
```

#### `equipment`文件

- 玩家使用的设备
- 路径: BDS/plugins/Planet/PQuery/data/equipment.json
```js
{
    "SUNSServer": "Android",
    "MC Susu2990": "Win10"
}
```

#### `jointimes`文件

- 玩家进入服务器的次数
- 路径: BDS/plugins/Planet/PQuery/data/jointimes.json
```js
{
  "SUNSServer": 140,
  "MC Susu2990": 20
}
```

#### `level`文件

- 玩家游戏内的等级
- 路径: BDS/plugins/Planet/PQuery/data/level.json
```js
{
  "SUNSServer": 2,
  "MC Susu2990": 1
}
```

#### `moneydata`文件

- 玩家游戏内LLMoney余额
- 路径: BDS/plugins/Planet/PQuery/data/moneydata.json
```js
{
  "SUNSServer": 0,
  "MC Susu2990": 1000
}
```

#### `scoredata`文件

- 玩家游戏内LLMoney余额
- 路径: BDS/plugins/Planet/PQuery/data/scoredata.json
```js
{
  "SUNSServer": 3000,
  "MC Susu2990": 114514
}
```

## API

> [!ATTENTION] PQuery没有提供外接接口