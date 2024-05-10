:::tip
PChat插件是一个专注于MC消息处理的插件，他可以配合Emoji材质包实现原生Emoji表情转义，同时使用PChat-Serein版可支持QQ群与MC无缝表情包转义，未来还会增加更多聊天交互方式，让MC与QQ群跟贴近
:::
 
## 前置组件
### 必选
#### LL2 
- [LiteLoaderBDS](https://www.minebbs.com/liteloader/) 
#### LL3
- [LeviLamina](https://www.minebbs.com/resources/levilamina.8049/) 
- [LegacyScriptEngine](https://www.minebbs.com/resources/legacyscriptengine.8048/) 
 - 此插件需要LL3的LSE-quickjs加载器下运行,使用前请确保您已安装了该加载器 

### 可选
- [PLib 建议使用](https://www.minebbs.com/resources/plib-planet.4523/) 
> LL2上使用PAPI的所需组件 
 - [BEPlaceholderAPI](https://www.minebbs.com/resources/beplaceholderapi.4181/) 
> LL3上使用PAPI的所需组件 
 - [GMLIB](https://www.minebbs.com/resources/gmlib.6636/) 
 - [GMLIB-LegacyRemoteCallApi](https://www.minebbs.com/resources/gmlib-legacyremotecallapi-gmlib-remotecallapi.7159/) 

## 安装
#### LL2
- 首次安装,将文件`PChat.js`或`PChat.llse.js`解压到此路径下:`BDS/plugins/` 
 - 更新直接替换原来的文件,若旧插件的名称与新插件的名称不一致,请删除旧插件再解压 
#### LL3
- LL3 将文件夹`PChat`解压到此路径下:`BDS/plugins/` 
 - 更新插件请将原来的文件夹删除 

## 注册指令说明
`chat` - 聊天(通过控制台向服务器内发送消息)

## PAPI变量说明 

> 使用`BEPlaceholderAPI`公共变量需要安装`BEPlaceholderAPI`或`GMLIB-LegacyRemoteCallApi`插件

|变量|注释|示例|
|---|---|---|
| `%emoji_log%` | 转换及艾特的聊天消息并输出到控制台 |`ChatEX`插件`%emoji_log%`<br>`GwChat`插件`%emoji_log%`| 
| `%emoji_game%` | 转换Emoji表情为font及艾特的聊天消息并输出到游戏中 |`ChatEX`插件`%emoji_game%`<br>`GwChat`插件`%emoji_game%`| 
| `%face_msg%` | 转换Emoji表情为QQFace及艾特的聊天消息并输出到控制台 |`ChatEX`插件`%face_msg%`<br>`GwChat`插件`%face_msg%`|

## 群服聊天交互方法
> 使用Serein面板并安装PChat-Serein版