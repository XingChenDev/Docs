:::tip
PSign是一个支持正则表达式通过控制台实现QQ群离线签到的插件。`1.1.0`版本改版后对PSign进行重要调整,同时支持`PMail`进行签到邮件的接收等
:::

## 前置组件
#### 必选
- [LiteLoaderBDS](https://www.minebbs.com/liteloader/)

#### 可选
- [PBind](https://www.minebbs.com/resources/pbind.4211/) 建议使用

## 配置文件说明

> [!ATTENTION] 更改配置文件请注意 JSON 文件格式，不推荐使用记事本修改或添加菜单文件解析

#### `config`文件

- 插件基础配置文件
- 路径: BDS/plugins/Planet/PSign/config.json
```js
{
  "version": "v1.1.4", // 插件版本
  "money": 0, // 经济模式(0为记分板,1为LLMoney)
  "score": "money", // 计分板名称
  "sign": { // 签到配置
    "switch": true, // 签到开关（是否启用签到功能）
    "vip_gain": true, // 会员加成（是否启用会员增益）
    "gui_arrange": 3, // 签到表单的物品暂时列数
  },
  "random_money": { // 随机经济
    "min_reward": 1000, // 最少
    "max_reward": 10000 // 最多
  },
  "reward": [ // 签到奖励（可自定义1-本月最大天数数量）不足本月最大天数数量系统会自动循环补齐
    "item_1",  // 物品_1 对应plugins/Planet/PSign/data/reward.json中的数组第一个
    "item_2",  // 物品_2 对应plugins/Planet/PSign/data/reward.json中的数组第二个
    "money_100", // 固定经济_100 100表示固定经济数量为100
    "money_200", // 固定经济_200 200表示固定经济数量为200
    "random_money",  // 随机经济
    "random_item" // 随机物品 在plugins/Planet/PSign/data/reward.json中数组中随机生成一个物品
  ],
  "addition": { // 累计签到奖励（按每月累计签到次数决定）
    "3": "item_1", // 当月累计签到3次 奖励物品_1 对应plugins/Planet/PSign/data/reward.json中的数组第一个
    "5": "money_100", // 当月累计签到5次 奖励固定经济_100 100表示固定经济数量为100
    "7": "item_2", // 当月累计签到7次 奖励物品_2 对应plugins/Planet/PSign/data/reward.json中的数组第二个
    "15": "itme_2", // 当月累计签到15次 奖励物品_2 对应plugins/Planet/PSign/data/reward.json中的数组第二个
    "30": "money_400" // 当月累计签到30次 奖励固定经济_400 400表示固定经济数量为400(若当月最大天数小于这个数,则会以实际天数与签到天数进行对比)
  }
}
```

#### `sign`文件

- 签到数据
- 路径: BDS/plugins/Planet/PSign/data/sign.json
```js
{
  "SUNSServer": { // 玩家ID
    "count": 12, // 总签到次数
    "weekly_count": 4, // 周签到次数
    "monthly_count": 4, // 月签到次数
    "contsign": 1, // 连续签到次数
    "reward":[], // 离线普通签到奖励(待PSign.Serein插件发布后该项生效)
    "sign_date": "2023-4-23" // 最后一次签到时间
  }
}
```

#### `reward`文件

- 奖励物品数据
- 路径: BDS/plugins/Planet/PSign/data/reward.json
```js
[
    "{\"Count\":64b,\"Damage\":0s,\"Name\":\"minecraft:cooked_chicken\",\"WasPickedUp\":0b}", // 物品NBT数据
    "{\"Count\":1b,\"Damage\":0s,\"Name\":\"minecraft:bread\",\"WasPickedUp\":0b}",
    "{\"Count\":1b,\"Damage\":0s,\"Name\":\"minecraft:apple\",\"WasPickedUp\":0b}",
    "{\"Count\":1b,\"Damage\":0s,\"Name\":\"minecraft:enchanted_golden_apple\",\"WasPickedUp\":0b}"
]
```

#### `statistics`文件（尚未启用）

- 连续签到统计及连签报告数据
- 路径: BDS/Plugins/Planet/PSign/data/statistics.json
```js
{}
```



## PAPI变量说明
-`v1.1.0`正式版开始支持  

> [!ATTENTION] 使用`BEPlaceholderAPI`公共变量需要安装`BEPlaceholderAPI`插件

|变量|注释|示例|
|---|---|---|
|`%player_sign_count%`|玩家总签到次数|`%player_sign_count%`|
|`%player_sign_weekly_count%`|玩家周签到次数|`%player_sign_weekly_count%`|
|`%player_sign_weekly_count%`|玩家月签到次数|`%player_sign_weekly_count%`|
|`%player_sign_cont%`|玩家连续签到次数|`%player_sign_cont%`|
|`%player_sign_date%`|玩家最后签到日期|`%player_sign_date%`|
|`%player_sign_time_diff%`|玩家签到时间差|`%player_sign_time_diff%`||

## API
> PSign提供了18个接口 包括9个新接口和9个兼容旧接口

#### 获取PSign插件版本

`ll.import("PSign","version")()`

- 返回值: `PSign插件版本` 
- 返回值类型: `String` 
 - 该接口仅在`1.1.0`版本后开放，若使用之前的旧版本请使用`ll.hasExported("PSign","version")`检查函数是否被导出，否则会报错

#### 获取指定玩家的签到数据

`ll.import("PSign", "player_data")(player)`

- 参数: 
  - player: `Player`
    玩家对象（可传递LL的`Player`对象或{realName: "Steve"}）
- 返回值: 玩家签到数据对象 
- 返回值类型: `Sign` 
 - 若返回 `null` 则表示没有签到数据

- Sign数据对象属性 

    | 属性     | 含义                 | 类型      | 示范       |
    | -------- | -------------------- | --------- | ---------- |
    | count    | 总签到次数           | `Number`  | 26         |
    | weekly_count | 周签到次数         | `Number`  | 4          |
    | monthly_count | 月签到次数         | `Number`  | 4         |
    | cont_sign | 连续签到次数         | `Number`  | 1          |
    | reward   | 离线签到普通奖励 | `Array`  | []          |
    | sign_date | 上次签到时间         | `String`  | "2024-3-17"|

#### 获取指定玩家签到总次数

`ll.import("PSign", "count")(name)`

- 参数: 
  - player: `Player`
    玩家对象（可传递LL的`Player`对象或{realName: "Steve"}）
- 返回值: 签到次数 
- 返回值类型: `Number` 

#### 获取指定玩家周签到次数

`ll.import("PSign", "weekly_count")(player)`

- 参数: 
  - player: `Player`
    玩家对象（可传递LL的`Player`对象或{realName: "Steve"}）
- 返回值: 周签到次数 
- 返回值类型: `Number` 


#### 获取指定玩家月签到次数

`ll.import("PSign", "monthly_count")(player)`

- 参数: 
  - player: `Player`
    玩家对象（可传递LL的`Player`对象或{realName: "Steve"}）
- 返回值: 月签到次数 
- 返回值类型: `Number` 

#### 获取指定玩家连续签到次数

`ll.import("PSign", "cont_sign")(player)`

- 参数: 
  - player: `Player`
    玩家对象（可传递LL的`Player`对象或{realName: "Steve"}）
- 返回值: 连续签到次数 
- 返回值类型: `Number` 

#### 获取指定玩家最后一次签到日期

`ll.import("PSign", "sign_date")(player)`

- 参数: 
  - player: `Player`
    玩家对象（可传递LL的`Player`对象或{realName: "Steve"}）
- 返回值: 最后一次签到日期 
- 返回值类型: `String` 

#### 获取指定玩家签到时间差

`ll.import("PSign", "time_diff")(player)`

- 参数: 
  - player: `Player`
    玩家对象（可传递LL的`Player`对象或{realName: "Steve"}）
- 返回值: 签到时间差 
- 返回值类型: `Number` 

#### 获取指定玩家未领取的离线签到奖励

`ll.import("PSign", "reward")(player)`

- 参数: 
  - player: `Player`
    玩家对象（可传递LL的`Player`对象或{realName: "Steve"}）
- 返回值: 离线签到奖励列表
- 返回值类型: `Array<String,String,...>`


### 以下是旧版本接口
- 为保证旧接口的兼容性,所有的数据对象旧属性均已保留
#### 获取所有玩家签到数据

`ll.import("PSign", "all")()`

- 返回值: 签到数据对象
- 返回值类型: `Object`
  - 数据详情,请结合`sign`文件与下方`玩家签到对象属性`

#### 获取指定玩家的签到数据

`ll.import("PSign", "playerdata")(name)`

- 参数: 
  - name: `String`
    玩家ID
- 返回值: 玩家签到对象
- 返回值类型: `Object`

- 玩家签到对象属性

    | 属性     | 含义                 | 类型      | 示范       |
    | -------- | -------------------- | --------- | ---------- |
    | count    | 总签到次数           | `Number`  | 26         |
    | weekly_count | 周签到次数         | `Number`  | 4          |
    | monthly_count | 月签到次数         | `Number`  | 4         |
    | cont_sign | 连续签到次数         | `Number`  | 1          |
    | reward   | 离线签到普通奖励 | `Array`  | []          |
    | sign_date | 上次签到时间         | `String`  | "2024-3-17"|
    | contsign | 连续签到次数         | `Number`  | 1          |
    | vipreward | 离线签到VIP奖励 | `Number`  | 0          |
    | signdate | 上次签到时间         | `String`  | "2024-4-23"|

  - 如果返回 `null` 则表示没有签到数据或没有填写玩家名字

#### 获取指定玩家的连续签到次数

`ll.import("PSign", "contsign")(name)`

- 参数: 
  - name: `String`
    玩家ID
- 返回值: 接口失效


#### 获取指定玩家未领取的离线签到奖励`1.1.0`版本后支持

`ll.import("PSign", "vipreward")(name)`

- 参数: 
  - name: `String`
    玩家ID
- 返回值: 接口失效

#### 获取指定玩家的离线签到奖励领取情况

`ll.import("PSign", "state")(name)`  

- 参数: 
  - name: `String`
    玩家ID
- 返回值: 接口失效

#### 获取指定玩家最后签到日期（新版）

`ll.import("PSign", "signdate")(name)`

- 参数: 
  - name: `String`
    玩家ID
- 返回值: 接口失效

#### 获取指定玩家签到时间差（新版）

`ll.import("PSign", "interval")(name)`

- 参数: 
  - name: `String`
    玩家ID
- 返回值: 接口失效

#### 获取指定玩家总签到次数

`ll.import("signcount")(name)`

- 参数: 
  - name: `String`
    玩家ID
- 返回值: 接口失效

#### 获取所有玩家签到数据

`ll.import("signdata")()`

- 返回值: 签到数据对象
- 返回值类型: `Object`
  - 数据详情,请结合`sign`文件上方`玩家签到对象属性`

