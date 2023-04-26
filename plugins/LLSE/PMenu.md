> [!TIP] PMenu是一个多功能的菜单插件，支持玩家菜单、OP菜单、VIP菜单等等，支持在线编辑、添加、删除菜单或菜单内容的操作。

## 配置文件说明

> [!ATTENTION] 更改配置文件请注意 JSON 文件格式，不推荐使用记事本修改或添加菜单文件解析

#### `config`文件

- 插件基础配置文件
- 路径：BDS/plugins/Planet/PMENU/config.json
```js
{
    "version": "v1.0.6",//配置文件版本
    "money": 0,//经济模式（0为计分板，1为LLMoney）
    "score": "money",//计分板项名称
    "item": "minecraft:clock",//打开菜单的物品type信息
    "main": "main"//主菜单文件名称
}
```

#### `main`文件

- 主菜单数据
- 路径：BDS/plugins/Planet/PMENU/packs/main.json
```js
{
    "title": "服务器菜单",//菜单标题
    "content": "选择:",//菜单提示
    "buttons": [//菜单中的按钮（oplist配置项仅需要填写在type项为“opcm”和"opfm"的菜单中）
        {
            "images": true,//是否打开按钮贴图
            "image": "textures/items/apple",//按钮贴图路径（可使用Minecraft本地路径，或网络链接）
            "money": 0,//是否需要付费（0为不需要，大于0为需要）
            "text": "获取一个苹果",//按钮的文字描述
            "command": "give @s apple",//执行的指令（type为comm时输入需要执行的指令，为form是输入二级菜单名）
            "type": "comm"//执行类型（有四个类型（comm为命令，form为二级菜单，opcm为管理员命令，opfm为管理员二级菜单））
        },
        {
            "images": false,
            "image": "textures/items/apple",
            "money": 0,
            "text": "发送一句你好",
            "command": "msg @a 你好",
            "type": "comm"
        },
        {
            "images": false,
            "image": "textures/items/apple",
            "money": 10,
            "text": "花10金币发送一句你好",
            "command": "msg @a 你好",
            "type": "comm"
        },
        {
            "images": false,
            "image": "textures/items/apple",
            "money": 0,
            "text": "二级菜单",
            "command": "menutow",
            "type": "form"
        },
        {
            "images": false,
            "image": "textures/items/apple",
            "money": 0,
            "text": "管理员二级菜单",
            "command": "opmenutow",
            "type": "opfm",
            "oplist": []//op列表（指定op才能使用的按钮，可多填，(例如：“SUNSServer”,"MC Susu2990","aaaa")注意JSON的格式即可）
        },
        {
            "images": false,
            "image": "textures/items/apple",
            "money": 0,
            "text": "管理员发送一个标题",
            "command": "title @a title 一个标题",
            "type": "opcm",
            "oplist": []
        }
    ]
}
```

## API
?>PMenu仅提供一个API接口,用于需要对物品进行扣除的插件以做到不会误扣效果,例如PMail的发送邮件

#### 获取菜单物品

`ll.import("PMenu","iteminfo")()`

- 返回值: 设置的打开菜单的物品
- 返回值类型: `String`