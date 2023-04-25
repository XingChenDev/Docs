## 插件说明
PSign是一个支持正则表达式通过控制台实现QQ群离线签到的插件。

## 前置组件
#### 必选
- [LiteLoaderBDS](https://www.minebbs.com/liteloader/)

#### 可选
- [PBind](https://www.minebbs.com/resources/pbind.4211/) 建议使用

## 配置文件说明

!> 更改配置文件请注意 JSON 文件格式，不推荐使用记事本修改或添加菜单文件解析

#### `config`文件

- 插件基础配置文件
- 路径: BDS/plugins/Planet/PSign/config.json
```js
{
    "version": "v1.0.9",  //插件版本
    "money": 0,  //经济模式(0为记分板,1为LLMoney)
    "score": "money",  //
    "sign": {
        "breakoffsign": true,  //离线断签开关（true为开,false为关），用于检测玩家上次入服时间有没有超过指定时长从而禁止离线签到
        "breakoffsignday": 3,  //离线断签时长
        "switch": true,//签到开关（true为开,false为关），可在线使用签到设置进行变更
        "addition": true,//连续签到翻倍开关（true为开,false为关），可在线使用签到设置进行变更
        "fixed": 0,//签到固定奖励值(0为随机奖励，大于0为固定奖励)
        "minreward": 1000,//签到的经济最小奖励值，可在线使用签到设置进行变更(该参数不能大于最大值)
        "maxreward": 10000,//签到的经济最大奖励值，可在线使用签到设置进行变更(该参数不能小于最小值)
        "vipfixed": 0,//会员签到固定奖励值(0为随机奖励，大于0为固定奖励)
        "vipminreward": 10000,//会员签到的经济最小奖励值，可在线使用签到设置进行变更(该参数不能大于最大值)
        "vipmaxreward": 100000//会员签到的经济最大奖励值，可在线使用签到设置进行变更(该参数不能小于最小值)
    
    }
}
```

#### `signdata`文件

- 签到数据
- 路径: BDS/plugins/Planet/PSign/data/signdata.json
```js
{
     "SUNSServer": {  //玩家ID
        "state": false,  //离线签到奖励领取情况
        "count": 12,  //总签到次数
        "contsign": 1,  //连续签到次数
        "reward": 0,  //离线签到奖励
        "signdate": "2023-4-23"  //上次签到时间
    }
}
```

## API

!> PSign提供了8个接口

#### 获取所有玩家签到数据
`ll.import("PSign", "all")()`

- 返回值: 签到数据对象
- 返回值类型: Object
  - 数据请看上面的`signdata`配置文件数据

#### 获取指定玩家的签到数据
`ll.import("PSign", "playerdata")(name)`

- 参数: 
  - name: String
    玩家ID
- 返回值: 玩家签到对象
- 返回值类型: Object

    | 属性     | 含义                 | 类型      | 示范       |
    | -------- | -------------------- | --------- | ---------- |
    | state    | 离线签到奖励领取情况 | `Boolean` | true       |
    | count    | 总签到次数           | `Number`  | 24         |
    | contsign | 连续签到次数         | `Number`  | 1          |
    | reward   | 离线签到奖励         | `Number`  | 0          |
    | signdate | 上次签到时间         | `String`  | "2023-4-23"|

  - 如果返回 null 则表示没有签到数据或没有填写玩家名字

#### 获取指定玩家的离线签到奖励领取情况
`ll.import("PSign", "state")(name)`

- 参数: 
  - name: String
    玩家ID
- 返回值: 领取情况
- 返回值类型: Boolean
  - 如果返回 null 则表示没有签到数据或没有填写玩家名字

#### 获取指定玩家签到总次数
`ll.import("PSign", "count")(name)`

- 参数: 
  - name: String
    玩家ID
- 返回值: 签到次数
- 返回值类型: Number
  - 如果返回 null 则表示没有签到数据或没有填写玩家名字

#### 获取指定玩家的连续签到次数
`ll.import("PSign", "contsign")(name)`

- 参数: 
  - name: String
    玩家ID
- 返回值: 连续签到次数
- 返回值类型: Number
  - 如果返回 null 则表示没有签到数据或没有填写玩家名字

#### 获取指定玩家未领取的离线签到奖励
`ll.import("PSign", "reward")(name)`

- 参数: 
  - name: String
    玩家ID
- 返回值: 未领取的签到奖励
- 返回值类型: Number
  - 如果返回 null 则表示没有签到数据或没有填写玩家名字

#### 获取指定玩家最后签到日期（新版）
`ll.import("PSign", "signdate")(name)`

- 参数: 
  - name: String
    玩家ID
- 返回值: 最后签到时间
- 返回值类型: String
  - 如果返回 null 则表示没有签到数据或没有填写玩家名字

#### 获取指定玩家签到时间差（新版）
`ll.import("PSign", "interval")(name)`

- 参数: 
  - name: String
    玩家ID
- 返回值: 时间差
- 返回值类型: Number
  - 如果返回 null 则表示没有签到数据或没有填写玩家名字