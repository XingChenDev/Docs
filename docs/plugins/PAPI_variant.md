:::tip
以下是“P”系列插件在PAPI中注册的变量说明及使用方法
:::

## 前置组件
### 必选
> LL2上使用PAPI的所需组件 
 - [BEPlaceholderAPI](https://www.minebbs.com/resources/beplaceholderapi.4181/) 
> LL3上使用PAPI的所需组件 
 - [GMLIB](https://www.minebbs.com/resources/gmlib.6636/) 
 - [GMLIB-LegacyRemoteCallApi](https://www.minebbs.com/resources/gmlib-legacyremotecallapi-gmlib-remotecallapi.7159/) 

### PBank - 银行插件 

### PChat - 聊天消息处理插件 

### PCsvip - 会员系统（已停更，项目转移至PVip） 

### PLib - 插件数据库 

### PMail - 邮箱&邮件系统 

### PSign - 签到插件 
-`v1.1.0`正式版开始支持  

|变量|注释|示例|
|---|---|---|
|`%player_sign_count%`|玩家总签到次数|`%player_sign_count%`|
|`%player_sign_weekly_count%`|玩家周签到次数|`%player_sign_weekly_count%`|
|`%player_sign_weekly_count%`|玩家月签到次数|`%player_sign_weekly_count%`|
|`%player_sign_cont%`|玩家连续签到次数|`%player_sign_cont%`|
|`%player_sign_date%`|玩家最后签到日期|`%player_sign_date%`|
|`%player_sign_time_diff%`|玩家签到时间差|`%player_sign_time_diff%`|

### PTitle - 称号系统 
> `PTitle`在LL3上的PAPI变量需要安装[GwChat](https://www.minebbs.com/threads/gwchat-papi.25536/)
- `v2.0.0 Beta 23.05.0617M`开始支持 

|变量|注释|示例|
|---|---|---|
|`%PT_Wearch%`|玩家当前佩戴称号|`HeadShow`插件`%PT_Wearch%`<br>`PQuery`插件`%PT_Wearch%`|
|`%player_title%`|玩家当前佩戴称号|`HeadShow`插件`%player_title%`<br>`GwChat`插件`%player_title%`|


### PVip - VIP插件
- `3.0.0`开始支持

|变量|注释|使用示例|
|---|---|---|
|`%player_vip%`|玩家VIP身份<br>根据`config`文件中的`title`显示|`HeadShow`插件: `%player_vip%`<br>`PQuery`插件: `%player_vip%`<br>`ChatEX`插件: `%player_vip%`<br>`GwChat`插件: `%player_vip%`| 
|`%player_vip_time_left%`|玩家VIP剩余时长|`HeadShow`插件: `%player_vip_time_left%`<br>`PQuery`插件: `%player_vip_time_left%`<br>`ChatEX`插件: `%player_vip_time_left%`<br>`GwChat`插件: `%player_vip_time_left%`| 
|`%player_vip_title%`|玩家VIP称号<br>若安装了`PTitle`不建议使用该变量|`HeadShow`插件: `%player_vip_title%`<br>`PQuery`插件: `%player_vip_title%`<br>`ChatEX`插件: `%player_vip_title%`<br>`GwChat`插件: `%player_vip_title%`|