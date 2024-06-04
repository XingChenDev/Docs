:::tip
以下是“P”系列插件在PAPI中注册的变量说明及使用方法
:::

## 前置组件
### 必选
> LL2上使用PAPI的所需组件 
- [`BEPlaceholderAPI`](https://www.minebbs.com/resources/beplaceholderapi.4181/) 
> LL3上使用PAPI的所需组件 
- [`GMLIB`](https://www.minebbs.com/resources/gmlib.6636/) 
- [`GMLIB-LegacyRemoteCallApi`](https://www.minebbs.com/resources/gmlib-legacyremotecallapi-gmlib-remotecallapi.7159/) 

## 推荐插件
- [`PChat`](https://www.minebbs.com/resources/pchat.6818/) 
- [`GwChat`](https://www.minebbs.com/threads/gwchat-papi.25536/) 


## PChat - 聊天消息处理插件 
> `v1.0.0` 正式版及以上

|变量|注释|
|---|---|
| `%emoji_log%` | 转换及艾特的聊天消息并输出到控制台 | 
| `%emoji_game%` | 转换Emoji表情为font及艾特的聊天消息并输出到游戏中 |
| `%face_msg%` | 转换Emoji表情为QQFace及艾特的聊天消息并输出到控制台 |


## PCsvip - 会员系统 
> `v2.0.0 Beta 23.05.0915O` 至 `2.0.0 Beta 24.02.1204A`  
> `PCsvip`已停止更新及后期维护,`PVip`已接管`PCsvip`继续推送 

|变量|注释|
|`%PC_Vip%`|玩家VIP身份<br>根据`config`文件中的`viptitle`显示|
|`%PC_Surplus%`|玩家VIP剩余时长|
|`%PC_Title%`|玩家VIP称号<br>若安装了`PTitle`不建议使用该变量|

## PLib - 插件数据库 
> `v1.1.0` 正式版及以上

|变量|注释|
|----|----|
|`%server_history%`|总玩家人数|
|`%server_daily_add%`|总玩家人数|


## PMail - 邮箱&邮件系统 
> `v1.1.0` 正式版及以上 

|变量|注释|
|---|---|
|`%player_mail_in_count%`|玩家收件箱邮件总数量|
|`%player_unread_count%`|玩家收件箱未读邮件数量|
|`%player_sent_mail_count%`|玩家发件箱邮件总数量|


## PSign - 签到插件 
> `v1.1.0` 正式版及以上 

|变量|注释|
|---|---|
|`%player_sign_count%`|玩家总签到次数|
|`%player_sign_weekly_count%`|玩家周签到次数|
|`%player_sign_weekly_count%`|玩家月签到次数|
|`%player_sign_cont%`|玩家连续签到次数|
|`%player_sign_date%`|玩家最后签到日期|
|`%player_sign_time_diff%`|玩家签到时间差|

## PTitle - 称号系统 
> `PTitle`在LL3上的PAPI变量需要安装[`GwChat`](https://www.minebbs.com/threads/gwchat-papi.25536/)   
> `GwChat`插件（PTitle 当前不支持LL3的PAPI,临时魔改`GwChat`插件   
> `v3.0.0` 正式版及以上

|变量|注释|
|---|---|
|`%player_title%`|玩家当前佩戴称号 

> `v2.0.0 Beta 23.05.0617M` 测试版至 `2.0.5` 正式版 

|变量|注释|
|---|---|
|`%PT_Wearch%`|玩家当前佩戴称号|


## PVip - VIP插件
> `v3.0.0` 正式版及以上 

|变量|注释|
|---|---|
|`%player_vip%`|玩家VIP身份<br>根据`config`文件中的`title`显示|
|`%player_vip_time_left%`|玩家VIP剩余时长|
|`%player_vip_title%`|玩家VIP称号<br>若安装了`PTitle`不建议使用该变量|