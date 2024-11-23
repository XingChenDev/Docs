// LiteLoader-AIDS automatic generated
/// <reference path="e:\llse/dts/llaids/src/index.d.ts"/> 

if (!File.exists("./plugins/Planet/PVip/module/vip_test_form.js")) {
    throw new Error("这是PVip插件的扩展模块,无法直接在运行在LiteLoaderBDS和LeviLamina中,请按照教程按照到PVip的模块中");
};
module.exports = {
    name: "PVip测试非表单模块", // 模块名称
    version: "0.0.1", // 模块版本
    author: "Planet工作室", // 开发者
    type: "main_form", // 模块类型
    text: "测试非表单模块", // 注册按钮时的按钮名称（辅助类型的模块可忽略）
    path: "", // 注册按钮时的按钮贴图（辅助类型的模块可忽略）
    /** 
     * 被调用的默认函数
     */
    main() {
        log("PVip的非表单模块");
    }
};