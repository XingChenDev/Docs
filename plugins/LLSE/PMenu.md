:::tip
PMenu是一个多功能的菜单插件，支持玩家菜单、OP菜单、VIP菜单等等，支持在线编辑、添加、删除菜单或菜单内容的操作。
:::

## 前置组件
### 必选
#### LL2 
- [`LiteLoaderBDS`](https://www.minebbs.com/liteloader/) 
#### LL3
- [`LeviLamina`](https://www.minebbs.com/resources/levilamina.8049/) 
- [`LegacyScriptEngine`](https://www.minebbs.com/resources/legacyscriptengine.8048/) 
 - 此插件需要LL3的LSE-quickjs加载器下运行,使用前请确保您已安装了该加载器 

#### 可选
- [`PVip`](https://www.minebbs.com/resources/pvip.4385/) 
- [`PLib`](https://www.minebbs.com/resources/plib.4523/)  

## 安装
#### LL2
- 首次安装,将文件`PMenu.js`或`PMenu.llse.js`解压到此路径下:`BDS/plugins/` 
 - 更新直接替换原来的文件,若旧插件的名称与新插件的名称不一致,请删除旧插件再解压 
#### LL3
- 将文件夹`PMenu`解压到此路径下:`BDS/plugins/` 
 - 更新插件请将原来的文件夹删除 

## 注册指令说明
`/cd`或`/menu` - 菜单  
`/cd set`或`/menu set` - 菜单设置

## 配置文件说明 
> 更改配置文件请注意 JSON 文件格式，不推荐使用记事本修改配置文件 


#### `config`文件 
- 插件基础配置文件 
- 路径：BDS/plugins/Planet/PMENU/config.json 
```js
{
    "version": "v1.1.6", //配置文件版本
    "money": 0, //经济模式（0为计分板，1为LLMoney）
    "score": "money", //计分板项名称
    "item": "minecraft:clock", //打开菜单的物品type信息
    "main": "main", //主菜单文件名称
    "intercept": 1, // 玩家使用指令拦截模式（0为不拦截，1为全部拦截，2为仅拦截菜单文件中的指令）
    "shield": ["minecraft:ender_chest"]  //需要屏蔽掉可交互的方块（填写放的type标准名）
}
```

#### `main`文件 
- 主菜单数据 
- 路径：BDS/plugins/Planet/PMENU/packs/main.json 
```js
{
    "title": "服务器菜单", //菜单标题
    "content": "选择:", //菜单提示
    "buttons": [ //菜单中的按钮（oplist配置项仅需要填写在type项为“opcm”和"opfm"的菜单中）
        {
            "images": true, //是否打开按钮贴图
            "image": "textures/items/apple", //按钮贴图路径（可使用Minecraft本地路径，或网络链接）
            "money": 0, //是否需要付费（0为不需要，大于0为需要）
            "text": "获取一个苹果", //按钮的文字描述
            "command": "give @s apple", //执行的指令（type为comm时输入需要执行的指令，为form是输入二级菜单名）
            "type": "comm" //执行类型（有四个类型（comm为命令，form为二级菜单，opcm为管理员命令，opfm为管理员二级菜单））
        },
        {
            "images": false,
            "image": "textures/items/apple",
            "money": 0,
            "text": "管理员二级菜单",
            "command": "opmenutow",
            "type": "opfm",
            "oplist": [] //op列表（指定op才能使用的按钮，可多填，(例如：“SUNSServer”,"MC Susu2990","aaaa")注意JSON的格式即可）
        }
    ]
}
```

## API
>PMenu提供了2个API接口, 

#### 获取PMenu插件版本

`ll.import("PMenu","version")()`

- 返回值: `PMenu插件版本` 
- 返回值类型: `String` 
 - 该接口仅在`1.1.6`版本后开放，若使用之前的旧版本请使用`ll.hasExported("PMenu","version")`检查函数是否被导出，否则会报错

#### 获取菜单物品

`ll.import("PMenu","iteminfo")()`

- 返回值: 打开菜单的物品
- 返回值类型: `String`