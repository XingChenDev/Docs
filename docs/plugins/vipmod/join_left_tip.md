:::tip
进服&离开提示文本修改模块，他可以在不修改PVip的代码的情况下，更改进入服务器和离开服务器的提示文本，也可以关闭提醒
:::

## 前置组件
### 必选
- [`PVip` `3.2.0`及以上版本](https://www.minebbs.com/resources/pvip-vip.4385)  
 - 请正确安装模块到指定路径，该模块不能直接在直接在运行在`LiteLoaderBDS-LLSE`和`LeviLamina`的`LegacyScriptEngine`中
 

## 安装
- 将文件夹`vip_join_left_tip.js`解压到此路径下:`BDS/plugins/Planet/PVip/module` 
 - 更新插件请将原来的文件夹删除 

## 配置文件说明 
> 更改配置文件请注意 JSON 文件格式，不推荐使用记事本修改配置文件  
- 该模块没有单独的config文件，但是在PVip的config文件中添加了修改项  
```js
{
    "JL": {
        "chat_remind":true, // 聊天框提醒
        "tip_remind":true, // 屏幕上放的提醒
        "console_remind":true, // 控制台输出的提醒
        "join": "尊贵的VIP玩家%player.realName%高调的进入了服务器", // 进入服务器的提示文本（可使用PAPI所有变量）
        "left": "尊贵的VIP玩家%player.realName%高调的离开了服务器" // 离开服务器的提示文本（可使用PAPI所有变量）
    }
}
```