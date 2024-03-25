:::tip
PQuery是一个支持正则表达式通过机器人在指定的QQ群内查询游戏数据的插件
2023年4月27日我们发布支持Serein面板的PQuery插件,从此告别正则表达式的编写,只需安装Serein面板的js插件（PQuery.Serein.js）,目前该插件已发行开发测试版，
PQuery停更
:::

## 前置组件
#### 必选
- [LiteLoaderBDS](https://www.minebbs.com/liteloader/)

#### 可选
- [死亡榜/挖掘榜](https://www.minebbs.com/resources/2857/)
- [PSign](https://www.minebbs.com/resources/psign.4137/)
- [PCsvip](https://www.minebbs.com/resources/pcsvip.4385/)
- [PTitle](https://www.minebbs.com/resources/ptitle.4048/)
- [OnlineTimer](https://www.minebbs.com/resources/onlinetimer.2934/)
- [Ranking](https://www.minebbs.com/resources/ranking.3568/)

## 注册指令说明
`cx` - 查询（游戏内）  
- 示范
`cx` 查询自己  `cx 114514` QQ号查询   `cx SUNSServer` 游戏名称查询  

`cwj` - 查玩家（游戏内）
`phb` - 排行榜（游戏内、控制台）  
`my` - 查询（控制台）  
- 示范
`my SUNSServer`、`my 114514`

## 查询信息变量
| 变量     | 注释    | 变量     | 注释    | 变量     | 注释    |
| --------| -------- | -------- | -------- | -------- | -------- |
|`{name}`|玩家名字|`{score}`|计分板|`{money}`|LLMoney|
|`{equipment}`|使用的设备| `{level}` |经验等级|`{joind}`|进入次数|
|`{time}`|当前系统时间|`{date}`|当前系统日期|`{dead}`|死亡榜/挖掘榜(死亡次数)|
|`{destroy}`|死亡榜/挖掘榜(挖掘次数)|`{RK.chat}`|Ranking发言次数|`{RK.ct}`|Ranking使用图腾次数|
|`{RK.destroy}`|Ranking挖掘次数|`{RK.dropitem}`|Ranking挖掘次数|`{RK.eat}`|Ranking摄食次数|
|`{RK.jump}`|Ranking跳跃次数|`{RK.mobdie}`|Ranking击杀次数|`{RK.time}`|Ranking在线时间|
|`{RK.place}`|Ranking放置次数|`{RK.playerdie}`|Ranking死亡次数|`{PT.ch}`|PTitle当前佩戴称号|
|`{OL.time}`|OnlineTimer在线时间|`{OL.last}`|OnlineTimer最后登陆时间|`{PC.vip}`|PCsvip会员身份|
|`{PS.signcount}`|PSign签到次数|`{PB.qq}`|PBind绑定的QQ|`{PB.xuid}`|PBind绑定的xuid|
|`{PB.bindtime}`|PBind绑定的时间|`{PB.firstjoin}`|PBind首次入服时间|

#### `1.2.1`版本后(在线查询支持%%包含变量 支持PAPI公共变量)
> [!ATTENTION] 使用`BEPlaceholderAPI`公共变量需要安装`BEPlaceholderAPI`插件

| 变量     | 注释    | 变量     | 注释    | 变量     | 注释    |
| --------| -------- | -------- | -------- | -------- | -------- |
|`%name%`|玩家名字|`%score%`|计分板|`%money%`|LLMoney|
|`%equipment%`|使用的设备| `%level%` |经验等级|`%joind%`|进入次数|
|`%time%`|当前系统时间|`%date%`|当前系统日期|`%dead%`|死亡榜/挖掘榜(死亡次数)|
|`%destroy%`|死亡榜/挖掘榜(挖掘次数)|`%RK.chat%`|Ranking发言次数|`%RK.ct%`|Ranking使用图腾次数|
|`%RK.destroy%`|Ranking挖掘次数|`%RK.dropitem%`|Ranking挖掘次数|`%RK.eat%`|Ranking摄食次数|
|`%RK.jump%`|Ranking跳跃次数|`%RK.mobdie%`|Ranking击杀次数|`%RK.time%`|Ranking在线时间|
|`%RK.place%`|Ranking放置次数|`%RK.playerdie%`|Ranking死亡次数|`%PT.ch%`|PTitle当前佩戴称号|
|`%OL.time%`|OnlineTimer在线时间|`%OL.last%`|OnlineTimer最后登陆时间|`%PC.vip%`|PCsvip会员身份|
|`%PS.signcount%`|PSign签到次数|`%PB.qq%`|PBind绑定的QQ|`%PB.xuid%`|PBind绑定的xuid|
|`%PB.bindtime%`|PBind绑定的时间|`%PB.firstjoin%`|PBind首次入服时间|

## 配置文件说明

> [!ATTENTION] 更改配置文件请注意 JSON 文件格式，不推荐使用记事本修改配置文件

#### `config`文件

- 插件基础配置文件
- 路径: BDS/plugins/Planet/PQuery/config.json
```js
{
  "version": "v1.1.9 Beta 23.04.1006T 开发版", //插件版本
  "scoreswitch": true, //记分板开关
  "score": "money" //记分板名称
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