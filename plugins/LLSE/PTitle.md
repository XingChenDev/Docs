> [!TIP|style:flat||labelVisibility:hidden|iconVisibility:hidden] PTitle是一个可高度自定义的称号系统插件,他支持玩家定制称号、带buff效果的称号、限时称号等,开放了外接接口,可通过接口对PTitle进行操作,例如: 获取指定玩家当前佩戴的称号、删除指定玩家指定称号等等

## 前置组件
#### 必选
- [LiteLoaderBDS](https://www.minebbs.com/liteloader/)

## 注册指令说明
`/ch` - 我的称号  
`/chshop` - 称号商城  
`/dech` - 删除称号  
`/chset` - 称号设置  

## 聊天界面变量
| 变量     | 注释    | 变量     | 注释    |
| --------| -------- | -------- | -------- |
| `{score}` | 计分板   | `{money}`  | LLMoney |
| `{world}` | 玩家所在的世界维度 | `{vip}` | 玩家是否拥有VIP身份(需要安装PCsvip插件) |
| `{ping}` | 玩家实时延迟 | `{os}` | 玩家设备系统 |
| `{time}`| 当前时间 | `{name}` | 玩家ID |
| `{msg}` | 玩家发送的消息|

## 配置文件说明

> [!NOTE] 更改配置文件请注意 JSON 文件格式，不推荐使用记事本修改或添加菜单文件解析

#### `config`文件

```js
{
    "version": "v1.1.0",  //配置文件版本
    "money": 0,  //经济模式(0为计分板，1为LLMoney)
    "score": "money",  //计分板项(经济模式为计分板时生效)
    "defaulch": "§f萌新求饶",  //默认的称号
    "language": "zh_CN",  //默认的语言
    "chat": {  //聊天界面
        "switch": true,  //开关(true为开，false为关)
        "msg1": "§l§3[记分板money:{score}]§1[{os}]§6[{ping}ms]§7{time}§r[§2{world}§r]<§3{name}§r> {msg}",  //未佩戴称号时的游戏聊天界面
        "msg2": "§l§3[记分板money:{score}]§1[{os}]§6[{ping}ms]§7{time}§r[§2{world}§r]<[{ch}§r]§3{name}§r> {msg}",  //佩戴称号时的游戏聊天界面
        "log1": "{name}",  //未佩戴称号时的控制台输出
        "log2": "[{ch}]{name}",  //佩戴称号时的控制台输出
        "team1": "§r[§c队内聊天§r]<{name}> {msgs}",  //未佩戴称号时的队内聊天界面
        "team2": "§r[§c队内聊天§r]<[{ch}§r]{name}> {msgs}"  //佩戴称号时的队内聊天界面
    },
    "chset": {  //称号设置
        "buych": true,  //购买称号(true为开，false为关)
        "sellch": true,  //出售称号(true为开，false为关)
        "delch": true,  //删除称号(true为开，false为关)
        "customize": true,  //定制称号(true为开，false为关)
        "discount": 95,  //出售称号时的折扣
        "vipdiscount": 90  //VIP玩家购买称号时的折扣
    },
    "customize": {  //定制称号配置项
        "sort": "个人称号",  //定制称号的分类
        "suffix": "№.",  //定制称号的后缀
        "quantity": 10,  //定制称号的字数
        "sell": false,  //定制称号的出售条件
        "dele": false  //定制称号的删除条件
    },
    "grade": [  //品阶&等级
        {
            "name": "普通",  //中文名
            "id": "§f",  //颜色代码
            "customize": true,  //定制是否可选(true为允许定制称号时选择，false则反)
            "money": 1000,  //定制称号时的价格
            "level": 1  //等级(对应着bufflist配置项中的level项)
        }
    ],
    "bufflist": [  //buff列表(定制称号时可选的)
        {
            "buffmcid": "speed",  //buff的MCID
            "level": 3,  //所属等级
            "rank": 0,  //buff等级
            "money": 200  //定制称号时的价格
        }
    ]
}
```

#### `language`文件

- 语言菜单的配置文件
- 路径: BDS/plugins/Planet/PTitle/lang/language.json
```js
{"lang": [  //注意:若要添加新的语言菜单，那么请先配置好语言配置文件，否则会出错
        {
            "language": "zh_CN",  //类型
            "chinese": "简体中文",  //中文名称
            "english": "Simplified Chinese"  //英文名称
        },
        {
            "language": "en_US",
            "chinese": "英语(美国)",
            "english": "English(USA)"
        }
    ]
    "SUNSServer":"zh_CN"  //玩家使用的语言
}
```

#### `titlesort`文件 原(`storesortdata`)

- 称号商店分类的配置文件
- 路径: BDS/plugins/Planet/PTitle/data/store/titlesort.json
```js
{
    "sort": [
        "个人称号",
        "西游记称号"
    ]
}
```

#### `title`文件 原(`storechdata`)

- 称号商店商品的配置文件
- 路径: BDS/plugins/Planet/PTitle/data/store/title.json
```js
{
    "goods": [
        {
            "sort": "个人称号",//称号所属分类
            "title": "萌新求饶",//称号
            "sell": false,//出售条件(false为禁止，true为允许)
            "dele": false,//删除条件(false为禁止，true为允许)
            "money": 0,//称号售价(0为免费，大于0为收费)
            "buff": null,//称号buff加成 (null为无加成，根据Minecraft Wiki上的药水buff的ID进行设置)
            "time": 0,//称号有效时长 (0为永久，大于0为有效时长)
            "selltime": 0,//称号售卖时长 (0为长期，大于0为倒计时)
            "addtime": "2022-07-27 02:34:39" (添加称号时的时间)
        },
        {
            "sort": "西游记称号",
            "title": "§6天蓬元帅",
            "sell": true,
            "dele": true,
            "money": 99999,
            "buff": "absorption",
            "time": 0,
            "selltime": 0,
            "addtime": "2022-07-28 02:34:39"
        }
    ]
}
```

#### `customize`文件

- 玩家定制称号的记录文件
- 路径: BDS/plugins/Planet/PTitle/data/store/customize.json
```js
{
    "customize": [
        {
            "name": "SUNSServer",
            "customize": "§1测试称号§r№.1"
        }
    ]
}
```

#### `titlesort`文件 原(`playersortdata`)

- 玩家称号分类文件
- 路径: BDS/plugins/Planet/PTitle/data/player/titlesort.json
```js
{
    "SUNSServer": [
        "个人称号",
        "西游记称号"
    ]
}
```

#### `title`文件 原(`playerchdata`)

- 玩家称号数据
- 路径: BDS/plugins/Planet/PTitle/data/player/title.json
```js
{  
    "SUNSServer": [
        {
            "sort": "个人称号",
            "title": "§f萌新求饶",
            "sell": false,
            "dele": false,
            "money": 0,
            "buff": null,
            "rank": 0,
            "time": 0,
            "gattime": "2023-04-09 13:04:27"
        }
    ]
}
```

#### `weartitle`文件

- 玩家当前佩戴的称号
- 路径: BDS/plugins/Planet/PTitle/data/player/weartitle.json
```js
{
  "SUNSServer": "§1测试称号§r№.1"
}
```

## API

#### 获取玩家当前佩戴称号
`ll.import("getwearch")(name)`  
`ll.import("PTitle", "getwearch")(name)`

- 参数:
  - name: `String`  
    玩家名称
- 返回值: 佩戴的称号  
- 返回值类型: `String`  
  - 如果返回 `Null` 则表示玩家没有佩戴称号或没有数据

#### 设置玩家当前佩戴称号
`ll.import("setwearch")(name,title)`  
`ll.import("PTitle","setwearch")(name,title)`

- 参数:
  - name: `String`  
    玩家名称
  - title: `String`  
    要佩戴的称号
- 返回值: 是否佩戴成功
- 返回值类型: `Boolean`
   注: 设置佩戴称号不会判断玩家是否拥有

- 示例：  
    ```js
    const PTitle = ll.import("PTitle", "setwearch");
    
    // 给玩家佩戴一个称号<测试称号>
    PTitle("SUNSServer","测试称号")
    ```


#### 给玩家添加一个个人分类称号
`ll.import("ptitleaddpersonalch")(name, title, sell, dele, money, buff, rank, time)`  
`ll.import("PTitle", "addpersonalch")(name, title, sell, dele, money, buff, rank, time)`

- 参数:
  - name: `String`  
    玩家名称  
  - title: `String`  
    要添加的称号  
  - sell: `Boolean`  
    出售条件 注: `true`或`false`
  - dele: `Boolean`  
    删除条件 注: `true`或`false`
  - money: `Number`  
    称号价值 注: `0`为免费
  - buff: `String`  
    称号所带的buff 注: 无buff可填`null`
  - rank: `String`  
    称号buff的等级 注: 无buff可填`null`
  - time: `Number`  
    称号有效时间 注: `0`为永久
- 返回值: 添加情况  
- 返回值类型: `Boolean`  
  - 如果返回 `false` 则表示已添加


- 示例：  
    ```js
    const PTitle = ll.import("PTitle", "addpersonalch");
    
    // 给玩家一个个人分类称号<测试称号>,无法出售、允许删除、无buff、限时7天
    PTitle("SUNSServer","测试称号",false,true,0,null,null,7)
    ```

#### 给玩家添加一个团队分类称号
`ll.import("ptitleaddteamchdata")(name, title, sell, dele, money, buff, rank, time)`  
`ll.import("PTitle", "addteamch")(name, title, sell, dele, money, buff, rank, time)`

- 参数:
  - name: `String`  
    玩家名称  
  - title: `String`  
    要添加的称号  
  - sell: `Boolean`  
    出售条件 注: `true`或`false`
  - dele: `Boolean`  
    删除条件 注: `true`或`false`
  - money: `Number`  
    称号价值 注: `0`为免费
  - buff: `String`  
    称号所带的buff 注: 无buff可填`null`
  - rank: `String`  
    称号buff的等级 注: 无buff可填`null`
  - time: `Number`  
    称号有效时间 注: `0`为永久
- 返回值: 添加情况  
- 返回值类型: `Boolean`  
  - 如果返回 `false` 则表示已添加

- 示例：  
    ```js
    const PTitle = ll.import("PTitle", "addteamch");
    
    // 给玩家一个团队分类称号<测试称号>,无法出售、允许删除、无buff、限时7天
    PTitle("SUNSServer","测试称号",false,true,0,null,null,7)
    ```

#### 删除玩家一个称号
`ll.import("ptitledelch")(name,title)`  
`ll.import("PTitle", "delch")(name,title)`

- 参数: 
  - name: `String`  
    玩家名称
  - title: `String`  
    要删除的称号
- 返回值: 删除情况  
- 返回值类型: `Boolean`  
  - 如果返回 `false` 则表示删除失败或称号不存在


- 示例：  
    ```js
    const PTitle = ll.import("PTitle", "delch");
    
    // 删除玩家称号<测试称号>
    PTitle("SUNSServer","测试称号")
    ```

#### 获取玩家所有称号
`ll.import("playerchdata")(name)`  
`ll.import("PTitle", "chdata")(name)`

- 参数: 
  - name: `String`  
    玩家名称
- 返回值: 玩家的称号数据
- 返回值类型: `Array<Object,Object,...>`  
  - 如果返回 `Null` 则表示玩家没有称号数据

| 属性   | 含义           | 类型   | 返回值示范 |
| ------ | ------------- | --------- | ----- |
|.sort   | 称号所属分类   | `String` |	个人称号  |
|.title  | 称号           | `String` |	萌新求饶  |
|.sell   | 出售条件        | `Boolean`|	false  |
|.dele   | 删除条件       | `Boolean`|	false  |
|.money	 | 称号价值       | `Number` |	0  |
|.buff   | 称号绑定的buff | `String` |	null  |
|.rank   | buff等级      | `Number` |	0  |
|.time   | 有效时长      | `Number` |	0  |
|.gattime|	获取称号时间 | `String` |	2022-08-03 20:25:43|