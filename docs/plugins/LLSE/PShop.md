:::tip
PShop是一个商店插件,服主可以在商店中添加固定的售卖物品和回收物品，支持addon物品，支持购买或出售清单邮件(与`PMail`插件对接)等
:::

## 前置组件
### 必选
#### LL2 
- [`LiteLoaderBDS`](https://www.minebbs.com/liteloader/) 
#### LL3
- [`LeviLamina`](https://www.minebbs.com/resources/levilamina.8049/) 
- [`LegacyScriptEngine`](https://www.minebbs.com/resources/legacyscriptengine.8048/) 
 - 此插件需要LL3的LSE-quickjs加载器下运行,使用前请确保您已安装了该加载器  

### 可选
- [`PVip`](https://www.minebbs.com/resources/pvip.4385/) 
- [`PLib`](https://www.minebbs.com/resources/plib.4523/)  
> LL2上使用PAPI的所需组件 
- [`BEPlaceholderAPI`](https://www.minebbs.com/resources/beplaceholderapi.4181/) 
> LL3上使用PAPI的所需组件 
- [`GMLIB`](https://www.minebbs.com/resources/gmlib.6636/) 
- [`GMLIB-LegacyRemoteCallApi`](https://www.minebbs.com/resources/gmlib-legacyremotecallapi-gmlib-remotecallapi.7159/) 

## 安装
#### LL2
- 首次安装,将文件`PSign.js`或`PSign.llse.js`解压到此路径下:`BDS/plugins/` 
 - 更新直接替换原来的文件,若旧插件的名称与新插件的名称不一致,请删除旧插件再解压 
#### LL3
- 将文件夹`PSign`解压到此路径下:`BDS/plugins/`  
 - 更新插件请将原来的文件夹删除  

## 配置文件说明
> 更改配置文件请注意 JSON 文件格式，不推荐使用记事本修改配置文件 


## 注册指令说明
`/shop` - 商店  
`/shopset` - 商店管理	

 

## 插件开发中~~·~~敬请期待