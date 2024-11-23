
// LiteLoader-AIDS automatic generated
/// <reference path="e:\llse/dts/llaids/src/index.d.ts"/> 

if (!File.exists("./plugins/Planet/PVip/module/vip_test_form.js")) {
    throw new Error("这是PVip插件的扩展模块,无法直接在运行在LiteLoaderBDS和LeviLamina中,请按照教程按照到PVip的模块中");
};
module.exports = {
    name: "PVip测试表单模块", // 模块名称
    version: "0.0.1", // 模块版本
    author: "Planet工作室", // 开发者
    type: "main_form", // 模块类型
    text: "测试表单模块", // 注册按钮时的按钮名称（辅助类型的模块可忽略）
    path: "", // 注册按钮时的按钮贴图（辅助类型的模块可忽略）
    /**
        * 被调用的默认函数
        * @param {Player} player 玩家
        * @param {Object.<string, number | string>} data 懒得去研究，直接写Object.<>
        * @param {function(Player):void} up_form 上级表单函数
        */
    main(player, data, up_form) {
        let fm = mc.newSimpleForm();
        fm.setTitle("测试表单")
        if (data.vip)
            fm.setContent("我是VIP\n\n点击确定关闭\n点击×返回");
        else
            fm.setContent("我不是VIP\n\n点击确定关闭\n点击×返回");
        fm.addButton("确定");
        player.sendForm(fm, (player, id) => {
            if (id == null)
                up_form(player)
        })
    }
};