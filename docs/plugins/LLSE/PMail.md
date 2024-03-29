:::tip
PMail是一个服内的邮箱&邮件系统，支持玩家互发邮件，可附带附件(物品&经济&记分板)，也可由管理员使用自己或服务器的身份向进入过服务器的所有玩家（需要`PLib`插件）发送邮件，或添加自动邮件，玩家下次进服即可收到来自系统自动的邮件，我们还为PMail开通了导出接口供其他开发者使用，可通过第三方插件调用接口发送邮件等 。
PMail已接入E-Mail模块，可以实现对现实邮箱的交互（详细使用方法后面会出一期视屏），PMail使用的是Nodejs的`nodemailer`模块，使用STMP服务器来发送电子邮件
::: 

## 前置组件
#### 必选
- [LiteLoaderBDS](https://www.minebbs.com/liteloader/)

#### 可选
- [PCsvip](https://www.minebbs.com/resources/pcsvip.4385/)
- [PBind](https://www.minebbs.com/resources/pbind.4211/) 建议使用
- [PLib](https://www.minebbs.com/resources/plib-planet.4523/) 建议使用
- [BEPlaceholderAPI](https://www.minebbs.com/resources/beplaceholderapi.4181/)

## 注册指令说明
`/mail` - 邮箱  
`/mailset` - 邮箱设置
`/sendmail` - 发送测试电子邮件（控制台操作 格式: sendmail stardevel@outlook.com）
## 配置文件说明

> [!ATTENTION] 更改配置文件请注意 JSON 文件格式，不推荐使用记事本修改配置文件

#### `config`文件

- 插件基础配置文件
- 路径: BDS/plugins/Planet/PMail/config.json
```js
{
    "version": "v1.1.0", // 插件版本
    "score": "money", // 计分板名称
    "initial_mail": { // 初始化（默认）邮件
        "module": true, // 模块开关（true为开false为关）
        "server_name": "插件开发服务器", // 服务器名称
        "title": "欢迎进入服务器", // 邮件标题
        "content": "欢迎来到插件开发服务器(以下称为:本服),请自觉遵守本服游戏规则,切勿开挂等使用辅助工具,祝你游戏愉快", // 邮件内容
        "annex": { // 附件
            "module": false,// 模块开关（true为开false为关）
            "item": "{\"Count\":1b,\"Damage\":0s,\"Name\":\"minecraft:apple\",\"WasPickedUp\":0b}", // 物品NBT数据
            "money": 0, // LLMoney数量
            "score": 100, // 计分板数量
            "vip": 0 // 会员时长（需要PCsvip插件）
        },
        "received": [ // 已收到默认邮件的玩家名称
            "SUNSServer"
        ]
    },
    "mail_retention": 7, // 邮件保留时长（用于删除过期邮件让配置文件不臃肿）
    "email": { // E-Mail模块
        "module": true, // 模块开关（true为开false为关）
        "host": "smtp.qq.com", // 邮箱服务器
        "port": 465, // 端口
        "sercure": true, // 是否使用TLS
        "user": "114514@qq.com", // 邮箱地址
        "pass": "****************" // SMTP服务授权码
    }
}
```

#### `mail_in`文件（原`inmailbox`）

- 玩家收件箱
- 路径: BDS/plugins/Planet/PMail/data/mail_in.json
```js
{
  "MC Susu2990": [
    {
      "mail_id": "7270887ac65b4f428b1fa2d335a269da", //邮件唯一ID
      "id": "***服务器", // 发件人名称
      "title": "测试邮件", // 邮件标题
      "content": "邮件内容", // 邮件内容
      "collect": false, // 附件领取情况
      "annex": { // 附件
        "item":null, // 物品NBT数据（null为无）
        "money":null, // LLMoney数量（null为无）
        "score":null, // 计分板数量（null为无）
        "vip":null, // 会员时长（null为无）
      }, 
      "read": true, // 已读情况（true是已读,false是未读）
      "send_time": "2024-03-29 23:32:00", // 邮件发送的时间
      "return_mail": false // 是否为回复邮件（false为不是,true为是）
    }
  ]
}
```

#### `sent_mail`文件（原 `outmailbox`）

- 玩家已发送邮件
- 路径: BDS/plugins/Planet/PMail/data/sent_mail.json
```js
{
  "SUNSServer": [
    {
      "mailid": "2dbc4e6b369d40e0b8398d873016a430", //邮件唯一ID
      "id": "***服务器", // 发件人名称
      "title": "测试邮件", // 邮件标题
      "content": "邮件内容", // 邮件内容
      "annex": { // 附件
        "item":null, // 物品NBT数据（null为无）
        "money":null, // LLMoney数量（null为无）
        "score":null, // 计分板数量（null为无）
        "vip":null, // 会员时长（null为无）
      }, 
      "send_time": "2024-03-29 23:32:00" //邮件发送时间
    }
  ]
}
```

#### `auto_sent_mail`文件（原`automailbox`）

- 自动发送邮件
- 路径: BDS/plugins/Planet/PMail/data/auto_sent_mail.json
```js
{
  "7270887ac65b4f428b1fa2d335a269da": { //邮件唯一ID
    "id": "***服务器", // 发件人名称（管理员添加时所选身份决定）
    "title": "测试自动邮件", // 邮件标题
    "content": "测试系统自动发送邮件", // 邮件内容
    "annex": { // 附件
        "item":null, // 物品NBT数据（null为无）
        "money":null, // LLMoney数量（null为无）
        "score":null, // 计分板数量（null为无）
        "vip":null, // 会员时长（null为无）
      }, "time": "2024-03-29 23:32:00", // 添加时间
    "deadline": 7, // 有效期
    "received": [ // 收到自动发送邮件的玩家ID
      "SUNSServer"
    ] 
  }
}
```

#### `email_address` 文件（原`emailaddress`）

- 玩家绑定的接收邮箱地址
- 路径: BDS/plugins/Planet/PMail/data/email_address.json
```js
{
    "SUNSServer": "licheng1117@outlook.com",
    "玩家名称":"邮箱地址"
}
```

## PAPI变量说明
-`v1.0.9`正式版开始支持  

> [!ATTENTION] 使用`BEPlaceholderAPI`公共变量需要安装`BEPlaceholderAPI`插件

|变量|注释|示例|
|---|---|---|
|`%player_mail_in_count%`|玩家收件箱邮件总数量| `%player_mail_in_count%` |
|`%player_unread_count%`|玩家收件箱未读邮件数量| `%player_unread_count%` |
|`%player_sent_mail_count%`|玩家发件箱邮件总数量| `%player_sent_mail_count%` |

## API
> PMail提供了11个接口 其中新接口6个，旧版本兼容接口5个
 
#### 获取PMail插件版本

`ll.import("PMail","version")()`

- 返回值: `PMail插件版本` 
- 返回值类型: `String` 
 - 该接口仅在`1.1.0`版本后开放，若使用之前的旧版本请使用`ll.hasExported("PMail","version")`检查函数是否被导出，否则会报错

#### 获取玩家收件箱 

`ll.import("PMail","mail_in")(.[player])`

- 参数
  - player: `Player`或`String`
    (可选参数)玩家对象 或 玩家名称
- 返回值: 玩家收件箱数据 或 收件箱所有数据
- 返回值类型: `Array<Mail,Mail,...>` 或 `Object` 
 - 若获取指定玩家的收件箱返回`Null`则表示没有数据

- Mail数据对象属性

    | 属性 | 含义 | 类型 | 示范 |
    | ---------- | --------- | --------- | --------- |
    | mail_id | 邮件唯一ID | `String` | "7270887ac65b4f428b1fa2d335a269da" |
    | id | 发件人名称 | `String` | `***服务器` |
    | title | 邮件标题 | `String` | "测试邮件" |
    | content | 邮件内容 | `String` | "邮件内容 |
    | collect | 附件领取状态 | `Boolean` | `false` |
    | annex | 附件 | `Object` | `{"item":null,"money":null,"score":null,"vip":null}` |
    | read | 已读状态 | `Boolean` | `false` |
    | send_time | 邮件发送的时间 | `String` | "2024-03-29 23:32:00" |
    | return_mail | 是否为回复邮件 | `Boolean` | `false` |

#### 获取玩家收件箱数量

`ll.import("PMail", "mail_in_count")(player)` 

- 参数
  - player: `Player`或`String` 
    玩家对象 或 玩家名称
- 返回值: 收件箱数量
- 返回值类型: `Number` 
 

#### 获取玩家已发件箱

`ll.import("PMail", "sent_mail")(.[player])` 

- 参数
  - player: `Player`或`String`
    (可选参数)玩家对象 或 玩家名称
- 返回值: 玩家发件箱数据 或 发件箱所有数据
- 返回值类型: `Array<Mail,Mail,...>` 或 `Object` 
 - 若获取指定玩家的发件箱返回`Null`则表示没有数据

- Mail数据对象属性

    | 属性 | 含义 | 类型 | 示范 |
    | ---------- | --------- | --------- | --------- |
    | mail_id | 邮件唯一ID | `String` | "7270887ac65b4f428b1fa2d335a269da" |
    | id | 收件人名称 | `String` | `***服务器` |
    | title | 邮件标题 | `String` | "测试邮件" |
    | content | 邮件内容 | `String` | "邮件内容 | 
    | annex | 附件 | `Object` | `{"item":null,"money":null,"score":null,"vip":null}` |
    | read | 已读状态 | `Boolean` | `false` |
    | send_time | 邮件发送的时间 | `String` | "2024-03-29 23:32:00" | 

#### 获取玩家发件箱数量

`ll.import("PMail", "sent_mail_count")(player)` 

- 参数
  - player: `Player`或`String` 
    玩家对象 或 玩家名称
- 返回值: 发件箱数量
- 返回值类型: `Number` 

#### 发送E-Mail到指定电子邮箱

`ll.import("PMail", "send_email")(address, html, to_name, form_name, title, content)`

- 参数
  - address: `String` 
    接收电子邮件地址 
  - html: `HTML`或`Null` 
    HTML语言的数据 或 无效值（必填） 
  - to_name: `String` 
    玩家名称 
  - for_name: `String` 
    发送者名称
  - title: `String` 
    邮件标题 
  - conteng: `String` 
    邮件内容
- 返回值: 邮件发送结果的对象  
- 返回值类型: `Object` 

- 返回值对象属性

    | 属性 | 含义 | 类型 | 示范 |
    | ---- | ----- | ----- |
    | state    | 发送结果     | `Boolean` | true |
    | content  | 发送结果信息 | `String`  | "接收地址不是邮箱地址" | 

### 以下是旧版本接口
- 为保证旧接口的兼容性,所有的数据对象旧属性均已保留

#### 获取指定玩家收件箱  

`ll.import("PMail","getinmailbox")(name)`

- 参数：
  - name : `String`  
    需要获取的玩家ID  
- 返回值: 玩家的收件箱数据  
- 返回值类型: `Array<Object,Object,...>`  
  -  如果返回 `Null` 则表示没有数据  

- 示例：  
    ```js
    const PMail = ll.import("PMail", "getinmailbox"); 
    PMail("SUNSServer")
    ```

#### 获取指定玩家已发送邮件  

`ll.import("PMail", "getoutmailbox")(name)`  

- 参数：
  - name : `String`  
    需要获取的玩家ID  
- 返回值: 玩家已发送邮件数据  
- 返回值类型: `Array<Object,Object,...>`  
  -  如果返回 `Null` 则表示没有数据    

- 示例：  
    ```js
    const PMail = ll.import("PMail", "getoutmailbox");
    PMail("SUNSServer")
    ```

#### 获取指定玩家邮件数量 

`ll.import("PMail", "getmailcount")(name)`

- 参数：
  - name : `String`  
    需要获取的玩家ID  
- 返回值: 玩家的邮件数量  
- 返回值类型: `String`

- 示例：  
    ```js
    const PMail = ll.import("PMail", "getmailcount");
    
    PMail("SUNSServer")
    ```

#### 给指定玩家发送一条邮件

`ll.import("PMail", "addnewmail")(player, id, title, content, .[annex])`

- 参数:  
  - player: `Player` 或 `String`  
    玩家对象或玩家名称  
  - id: `String`  
    发件人名称 
  - title: `String`  
    邮件的标题  
  - content: `String`  
    邮件的内容  
  - annex: `Object`   
    邮件的附件(可选参数)  
    以上四个附件内容都可以随意搭配，也可以只带一种附件

    | annex参数 | 参数含义           | 参数类型 |
    | --------- | ------------------ | -------- |
    | money | 附件LLMoney数量    | `Number` |
    | score | 附件记分板数量     | `Number` |
    | item | 附件物品NBT JSON | `String` |
    | vip | 附件会员天数        | `Number` |

- 返回值: 邮件发送结果的对象  
- 返回值类型: `Object`

    | 属性      | 含义         | 类型      | 示范  |
    | --------- | ------------ | --------- | ----- |
    | .state    | 发送结果     | `Boolean` | true  |
    | .content  | 发送结果信息 | `String`  | "要发送的邮件没有收件人"  |

- 示例：  
    ```js
    const PMail = ll.import("PMail", "addnewmail");
    // 只发送文字邮件
    PMail("SUNSServer","发件人","标题","内容")
    // 发送带附件的邮件
    PMail("SUNSServer","发件人","标题","内容",{money: 100})
    PMail("SUNSServer","发件人","内容",{money: 100,score: 100})
    PMail("SUNSServer","发件人","内容",{vip: 7})
    ```

#### 注册系统发件人 `1.0.5`版支持

`ll.import("PMail", "regsystem")(name)`
> 这个接口主要是为了PMail筛选收件箱的系统发件人、避免玩家回复系统邮件

- 参数:  
  - name: `String`  
    要注册的系统发件人名称

- 返回值: 注册结果对象
- 返回值类型: `Object`

    | 属性      | 含义         | 类型      | 示范  |
    | --------- | ------------ | --------- | ----- |
    | .state    | 注册结果     | `Boolean` | true  |
    | .content  | 注册结果信息 | `String`  | "注册系统发件人成功"  | 

- 示例：  
    ```js
    const PMail = ll.import("PMail", "regsystem"); 
    PMail("SUNSServer","系统")
    ```