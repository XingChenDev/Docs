> [!TIP|style:flat||labelVisibility:hidden|iconVisibility:hidden] PMail是一个服内的邮箱&邮件系统，支持玩家互发邮件，可附带附件(物品&经济&记分板)，也可由管理员使用自己或服务器的身份向进入过服务器（需要`PLib插件`）的所有玩家发送邮件，或添加自动邮件，玩家下次进服即可收到来自系统自动的邮件，我们还为PMail开通了导出接口供其他开发者使用，可通过第三方插件调用接口发送邮件等 。  

> [!ATTENTION] `PMail`将会在下个版本与`E-Mail`链接,当游戏内收到邮件时,所绑定的邮箱也会同步收到邮件,目前插件处于开发中,敬请期待
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

## 配置文件说明

> [!ATTENTION] 更改配置文件请注意 JSON 文件格式，不推荐使用记事本修改或添加菜单文件解析

#### `config`文件

- 插件基础配置文件
- 路径: BDS/plugins/Planet/PMail/config.json
```js
{
  "version": "1.0.0 Beta 23.04.1801G", //插件&配置文件版本
  "score": "money", //记分板项
  "firstemail": { //首次收到的邮件
    "module": true, //模块（true或false）
    "servername": "***服务器", //服务器名称
    "title": "欢迎进入服务器", //邮件标题
    "content": "欢迎来到***服务器(以下称为:本服),请自觉遵守本服游戏规则,切勿开挂等使用辅助工具,祝你游戏愉快\n\n\n---------***服务器", //邮件内容
    "annex": { //附件
      "module": false, //附件模块（true或false）
      "money": 0, //LLMoney
      "score": 100, //记分板
      "item": null, //物品
      "vip": null //VIP（需要PCsvip插件）
    },
    "received": [] //已收到默认邮件的玩家ID
  },
  "deadline": 7, //邮件有效期（0为永久有效）
  "email":{  //E-Mail邮件模块
    "module": true,  //模块开关（true或false）
    "service": "qq",  //邮件服务器（已知可以使用QQ邮箱或网易163游戏，QQ邮箱填写为:qq,网易163游戏填写为:163
    "user": "114514@qq.com",  //发送人邮箱号
    "pass": "************"  //SMTP服务授权码
  }
}
```

#### `inmailbox`文件

- 玩家收件箱
- 路径: BDS/plugins/Planet/PMail/inmailbox.json
```js
{
  "MC Susu2990": [
    {
      "mailid": "7270887ac65b4f428b1fa2d335a269da", //邮件唯一ID
      "id": "***服务器", //发件人ID
      "title": "测试邮件", //标题
      "content": "测试全部邮件", //内容
      "collect": null, //附件领取情况（若邮件为纯文字时，该项目为null）
      "annex": null, //附件
      "read": true, //已读情况（true或false）
      "sendtime": "2023-04-18 23:32:55", //邮件发送的时间
      "retmail": null //是否为回复邮件（null或"return"）
    }
  ]
}
```

#### `outmailbox`文件

- 玩家已发送邮件
- 路径: BDS/plugins/Planet/PMail/outmailbox.json
```js
{
  "SUNSServer": [
    {
      "mailid": "2dbc4e6b369d40e0b8398d873016a430", //邮件唯一ID
      "id": "所有玩家", //收件人ID
      "title": "测试邮件", //标题
      "content": "测试全部邮件", //内容
      "annex": null, //附件
      "sendtime": "2023-04-18 23:32:55" //邮件发送时间
    }
  ]
}
```

#### `automailbox`文件

- 自动发送邮件
- 路径: BDS/plugins/Planet/PMail/automailbox.json
```js
{
  "7270887ac65b4f428b1fa2d335a269da": { //邮件唯一ID
    "id": "***服务器", //自动发送邮件的发件人（管理员添加时所选身份决定）
    "title": "测试自动邮件", //自动发送邮件的标题
    "content": "测试系统自动发送邮件", //自动发送邮件的内容
    "annex": null, //自动发送邮件的附件
    "time": "2023-04-20 22:15:36", //自动发送邮件的添加时间
    "deadline": 7, //自动发送邮件的有效期
    "received": [
      "SUNSServer"
    ] //收到自动发送邮件的玩家ID
  }
}
```

#### `emailaddress` 文件

- 玩家绑定的接收邮箱地址
- 路径: BDS/plugins/Planet/PMail/emailaddress.json
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
|`%PM_Incount%`|玩家收件箱邮件总数量|`HeadShow`插件`%PM_Incount%`<br>`PQuery`插件`{PAPI.PM_Incount:pl}`|
|`%PM_Unread%`|玩家收件箱未读邮件数量|`HeadShow`插件`%PM_Unread%`<br>`PQuery`插件`{PAPI.PM_Unread:pl}`|
|`%PM_Outcount%`|玩家发件箱邮件总数量|`HeadShow`插件`%PM_Outcount%`<br>`PQuery`插件`{PAPI.PM_Outcount:pl}`|
## API
?> PMail提供了5个接口 

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
    const PMail = ll.import("PMail","getinmailbox");
    
    PMail("SUNSServer")
    ```

#### 获取指定玩家已发送邮件  

`ll.import("PMail","getoutmailbox")(name)`  

- 参数：
  - name : `String`  
    需要获取的玩家ID  
- 返回值: 玩家已发送邮件数据  
- 返回值类型: `Array<Object,Object,...>`  
  -  如果返回 `Null` 则表示没有数据    

- 示例：  
    ```js
    const PMail = ll.import("PMail","getoutmailbox");
    
    PMail("SUNSServer")
    ```

#### 获取指定玩家邮件数量 

`ll.import("PMail","getmailcount")(name)`

- 参数：
  - name : `String`  
    需要获取的玩家ID  
- 返回值: 玩家的邮件数量  
- 返回值类型: `String`

- 示例：  
    ```js
    const PMail = ll.import("PMail","getmailcount");
    
    PMail("SUNSServer")
    ```

#### 给指定玩家发送一条邮件

`ll.import("PMail","addnewmail")(name,id,title,content,[annex])`

- 参数:  
  - name: `String`  
    玩家ID  
  - id: `String`  
    发件人ID或名称
  - title: `String`  
    邮件的标题  
  - content: `String`  
    邮件的内容  
  - annex: `Object`   
    邮件的附件(可选参数)  
    以上四个附件内容都可以随意搭配，也可以只带一种附件

    | annex参数 | 参数含义           | 参数类型 |
    | --------- | ------------------ | -------- |
    | money: 100 | 附件LLMoney数量    | `Number` |
    | score: 100 | 附件记分板数量     | `Number` |
    | item:Null | 附件MC物品NBT JSON | `Object` |
    | vip: 7     | 附件VIP天数        | `Number` |

- 返回值: 邮件发送结果的对象  
- 返回值类型: `Object`

    | 属性      | 含义         | 类型      | 示范  |
    | --------- | ------------ | --------- | ----- |
    | .state    | 发送结果     | `Boolean` | true  |
    | .content  | 发送结果信息 | `String`  | 见下  |

  - 返回对象content的内容
    | 内容                               |
    | ---------------------------------- |
    | "要发送的邮件没有收件人"           |
    | "要发送的邮件没有收件人或不正确"   |
    | "必须填写发件人"     |
    | "发件人名字不能为空"     |
    | "要发送的邮件收件人不能是中文"     |
    | "邮件标题不能为空"                 |
    | "邮件内容不能为空"                 |
    | "错误,物品必须是NBT数据"           |
    | "错误,要邮寄的附件并不是MC物品NBT" |
    | "邮件发送成功"                     |

- 示例：  
    ```js
    const PMail = ll.import("PMail","addnewmail");
    
    // 只发送文字邮件
    PMail("SUNSServer","发件人","标题","内容")
    
    // 发送带附件的邮件
    PMail("SUNSServer","发件人","标题","内容",{money: 100})
    PMail("SUNSServer","发件人","内容",{money: 100,score: 100})
    PMail("SUNSServer","发件人","内容",{vip: 7})
    ```

#### 注册系统发件人 `1.0.5`版支持

`ll.import("PMail","regsystem")(name)`
> 这个接口主要是为了PMail筛选收件箱的系统发件人、避免玩家回复系统邮件

- 参数:  
  - name: `String`  
    要注册的系统发件人名称

- 返回值: 注册结果对象
- 返回值类型: `Object`

    | 属性      | 含义         | 类型      | 示范  |
    | --------- | ------------ | --------- | ----- |
    | .state    | 注册结果     | `Boolean` | true  |
    | .content  | 注册结果信息 | `String`  | 见下  |

  - 返回对象content的内容
    | 内容                               |
    | ---------------------------------- |
    | "注册系统发件人成功"           |
    | "要注册的系统发件人已存"   |

- 示例：  
    ```js
    const PMail = ll.import("PMail","regsystem");
    
    PMail("SUNSServer","系统")
    ```