:::tip
PBank是一个银行系统插件,他支持玩家存钱、取钱、贷款、转账的操作,是一个货币流通的新鲜玩意儿,还有银行流水、银行账单邮件(与`PMail`插件对接)等
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
- [`PMail`](https://www.minebbs.com/resources/pmail.5820/) 
- [`PLib`](https://www.minebbs.com/resources/plib.4523/) 
> LL2上使用PAPI的所需组件 
- [`BEPlaceholderAPI`](https://www.minebbs.com/resources/beplaceholderapi.4181/) 
> LL3上使用PAPI的所需组件 
- [`GMLIB`](https://www.minebbs.com/resources/gmlib.6636/) 
- [`GMLIB-LegacyRemoteCallApi`](https://www.minebbs.com/resources/gmlib-legacyremotecallapi-gmlib-remotecallapi.7159/) 

## 安装
#### LL2
- 首次安装,将文件`PBank.js`或`PBank.llse.js`解压到此路径下:`BDS/plugins/` 
 - 更新直接替换原来的文件,若旧插件的名称与新插件的名称不一致,请删除旧插件再解压 
#### LL3
- 将文件夹`PBank`解压到此路径下:`BDS/plugins/` 
 - 更新插件请将原来的文件夹删除 


## 注册指令说明
`/bank` - 银行  
`/bankset` - 银行管理	

## 配置文件说明 
#### `config`文件 
- 插件基础配置文件 
- 路径: BDS/plugins/Planet/PBank/config.json 
```js
{
    "version": "0.0.0 Beta 23.05.1505E",  //插件版本
    "money": 1,   //经济模式(0为记分板,1为LLMoney)
    "score": "money",  //计分板名称
    "bankname": "花园银行",  //银行名称
    "save": {  //存款参数
        "maxfixedaccount": 3,  //最大定期存款账户数量
        "periodical": "3-7",  //收益天数 "-" 前表示最少，后表示最多
        "profittime": "03:00",  //定期存款每日获得收益的时间点
        "intrate": 0.25  //定期存款每日获得收益的利率（计算方式: 存100金币,每日可获得0.25金币的收益)
    }
}
```

#### `bankdata`文件 
- 银行账户数据文件 
- 路径: BDS/plugins/Planet/PBank/data/bankdata.json 
```js
{
    "SUNSServer": [  //玩家ID
        {
            "id": "85aa3cb45c2a435ea200aa397797b48f", //账户ID
            "type": "ordinary",  //账户类型（ordinary为普通账户,periodical为定期账户)
            "money": 1098989  //存款
        },
        {
            "id": "4a1b080c4478475f8604b084a7c52857",  //账户ID
            "type": "periodical",  //账户类型（ordinary为普通账户,periodical为定期账户)
            "money": 78617.49436874999,  //账户金币
            "day": 6,  //定期天数
            "addtime": "2023-05-14 23:47:05",  //添加时间
            "income": 0  //总收益金币
        },
        {
            "id": "068b23a0cc684f0ba1e8561837ad8c10",
            "type": "periodical",
            "money": 114,
            "day": 4,
            "addtime": "2023-05-14 23:49:09",
            "income": 0
        },
        {
            "id": "e6164d6b5b66496f910baacc159da9de",
            "type": "periodical",
            "money": 59600,
            "day": 7,
            "addtime": "2023-05-16 20:20:53",
            "income": 0
        }
    ]
}
```

## 插件开发中~~·~~敬请期待