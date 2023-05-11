> [!TIP|style:flat||labelVisibility:hidden|iconVisibility:hidden] PQuery-Serein版是一个基于Serein面板js扩展插件开发的QQ群查询服务器信息的查询插件,省去了添加正则表达式的烦恼,只需要将PQuery-Serein版放置在Serein/plugins文件夹内,打开Serein即可在QQ群进行查询操作，PQuery-Serein版还支持私信机器人查询(与机器人不是好友则需要打开GoCq的允许临时对话)
## 前置组件
#### 必选
- [Serein](https://serein.cc/)
- [PQuery-LLSE版](https://www.minebbs.com/resources/pquery.4021/)

#### 可选
- [死亡榜/挖掘榜-LLSE版](https://www.minebbs.com/resources/2857)
- [PSign-LLSE版](https://www.minebbs.com/resources/psign.4137/)
- [PCsvip-LLSE版](https://www.minebbs.com/resources/pcsvip.4385/)
- [PTitle-LLSE版](https://www.minebbs.com/resources/ptitle.4048/)
- [OnlineTimer-LLS版](https://www.minebbs.com/resources/onlinetimer.2934/)
- [Ranking-LLSE版](https://www.minebbs.com/resources/2857/)

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
|`{PS.signcount}`|PSign签到次数|

## 配置文件说明

> [!ATTENTION] 更改配置文件请注意 JSON 文件格式，不推荐使用记事本修改或添加菜单文件解析

#### `config`文件

- 插件基础配置文件
- 路径: Serein/plugins/PQuery/config.json
```js
{
    "version": "1.1", //插件版本
    "GroupChat": { //QQ群指令
        "Cxcmd": "查询", //查询指令
        "Cwjcmd": "查玩家", //查询玩家指令
        "PHB": { //查询排行榜
            "module": true, //模块开关
            "PHBmenu": "排行榜菜单\n☆进服排行☆等级排行☆\n☆计分板排行☆money排行☆\n☆死亡排行☆挖掘排行☆\n☆时长排行☆签到排行☆", //排行榜菜单
            "Moneyranking": "Money排行",
            "JFBranking": "计分板排行",
            "JFranking": "进服排行",
            "DJranking": "等级排行",
            "SWranking": "死亡排行",
            "WJranking": "挖掘排行",
            "SCranking": "时长排行",
            "QDranking": "签到排行"
        }
    },
    "PrivateChat": { //私信指令
        "Cxcmd": "查询",
        "admin": [ //私信的管理员QQ号
            114514
        ],
        "Cwjcmd": "查玩家",
        "PHB": {
            "module": true,
            "PHBmenu": "排行榜菜单\n☆进服排行☆等级排行☆\n☆计分板排行☆money排行☆\n☆死亡排行☆挖掘排行☆\n☆时长排行☆签到排行☆",
            "JFBranking": "计分板排行",
            "Moneyranking": "Money排行",
            "JFranking": "进服排行",
            "DJranking": "等级排行",
            "SWranking": "死亡排行",
            "WJranking": "挖掘排行",
            "SCranking": "时长排行",
            "QDranking": "签到排行"
        }
    }
}
```

## API

> [!ATTENTION] PQuery-Serein版没有提供外接接口