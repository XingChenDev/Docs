import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.JkBXQW4V.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"plugins/LLSE/PMail.md","filePath":"plugins/LLSE/PMail.md","lastUpdated":1711362551000}'),l={name:"plugins/LLSE/PMail.md"},n=t(`<div class="tip custom-block"><p class="custom-block-title"></p><p>PMail是一个服内的邮箱&amp;邮件系统，支持玩家互发邮件，可附带附件(物品&amp;经济&amp;记分板)，也可由管理员使用自己或服务器的身份向进入过服务器（需要<code>PLib插件</code>）的所有玩家发送邮件，或添加自动邮件，玩家下次进服即可收到来自系统自动的邮件，我们还为PMail开通了导出接口供其他开发者使用，可通过第三方插件调用接口发送邮件等 。</p></div><blockquote><p>[!ATTENTION] <code>PMail</code>将会在下个版本与<code>E-Mail</code>链接,当游戏内收到邮件时,所绑定的邮箱也会同步收到邮件,目前插件处于开发中,敬请期待</p></blockquote><h2 id="前置组件" tabindex="-1">前置组件 <a class="header-anchor" href="#前置组件" aria-label="Permalink to &quot;前置组件&quot;">​</a></h2><h4 id="必选" tabindex="-1">必选 <a class="header-anchor" href="#必选" aria-label="Permalink to &quot;必选&quot;">​</a></h4><ul><li><a href="https://www.minebbs.com/liteloader/" target="_blank" rel="noreferrer">LiteLoaderBDS</a></li></ul><h4 id="可选" tabindex="-1">可选 <a class="header-anchor" href="#可选" aria-label="Permalink to &quot;可选&quot;">​</a></h4><ul><li><a href="https://www.minebbs.com/resources/pcsvip.4385/" target="_blank" rel="noreferrer">PCsvip</a></li><li><a href="https://www.minebbs.com/resources/pbind.4211/" target="_blank" rel="noreferrer">PBind</a> 建议使用</li><li><a href="https://www.minebbs.com/resources/plib-planet.4523/" target="_blank" rel="noreferrer">PLib</a> 建议使用</li><li><a href="https://www.minebbs.com/resources/beplaceholderapi.4181/" target="_blank" rel="noreferrer">BEPlaceholderAPI</a></li></ul><h2 id="注册指令说明" tabindex="-1">注册指令说明 <a class="header-anchor" href="#注册指令说明" aria-label="Permalink to &quot;注册指令说明&quot;">​</a></h2><p><code>/mail</code> - 邮箱<br><code>/mailset</code> - 邮箱设置 <code>/sendmail</code> - 发送测试电子邮件（控制台操作 格式: sendmail <a href="mailto:stardevel@outlook.com" target="_blank" rel="noreferrer">stardevel@outlook.com</a>）</p><h2 id="配置文件说明" tabindex="-1">配置文件说明 <a class="header-anchor" href="#配置文件说明" aria-label="Permalink to &quot;配置文件说明&quot;">​</a></h2><blockquote><p>[!ATTENTION] 更改配置文件请注意 JSON 文件格式，不推荐使用记事本修改配置文件</p></blockquote><h4 id="config文件" tabindex="-1"><code>config</code>文件 <a class="header-anchor" href="#config文件" aria-label="Permalink to &quot;\`config\`文件&quot;">​</a></h4><ul><li>插件基础配置文件</li><li>路径: BDS/plugins/Planet/PMail/config.json</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0.0 Beta 23.04.1801G&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//插件&amp;配置文件版本</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;score&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;money&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//记分板项</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;firstemail&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//首次收到的邮件</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;module&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//模块（true或false）</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;servername&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;***服务器&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//服务器名称</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;欢迎进入服务器&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//邮件标题</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;content&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;欢迎来到***服务器(以下称为:本服),请自觉遵守本服游戏规则,切勿开挂等使用辅助工具,祝你游戏愉快</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\n\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">---------***服务器&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//邮件内容</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;annex&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//附件</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;module&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//附件模块（true或false）</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;money&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//LLMoney</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;score&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//记分板</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;item&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//物品</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;vip&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //VIP（需要PCsvip插件）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;received&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [] </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//已收到默认邮件的玩家ID</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;deadline&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//邮件有效期（0为永久有效）</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;email&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:{  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//E-Mail邮件模块</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;module&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//模块开关（true或false）</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;host&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;smtp.qq.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//设置服务</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;port&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">465</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//端口</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;sercure&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//是否使用TLS</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;user&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;114514@qq.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//发送人邮箱号</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;pass&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;************&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //SMTP服务授权码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="inmailbox文件" tabindex="-1"><code>inmailbox</code>文件 <a class="header-anchor" href="#inmailbox文件" aria-label="Permalink to &quot;\`inmailbox\`文件&quot;">​</a></h4><ul><li>玩家收件箱</li><li>路径: BDS/plugins/Planet/PMail/inmailbox.json</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;MC Susu2990&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;mailid&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;7270887ac65b4f428b1fa2d335a269da&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//邮件唯一ID</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;***服务器&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//发件人ID</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;测试邮件&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//标题</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;content&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;测试全部邮件&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//内容</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;collect&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//附件领取情况（若邮件为纯文字时，该项目为null）</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;annex&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//附件</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;read&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//已读情况（true或false）</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;sendtime&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2023-04-18 23:32:55&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//邮件发送的时间</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;retmail&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //是否为回复邮件（null或&quot;return&quot;）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="outmailbox文件" tabindex="-1"><code>outmailbox</code>文件 <a class="header-anchor" href="#outmailbox文件" aria-label="Permalink to &quot;\`outmailbox\`文件&quot;">​</a></h4><ul><li>玩家已发送邮件</li><li>路径: BDS/plugins/Planet/PMail/outmailbox.json</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;SUNSServer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;mailid&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2dbc4e6b369d40e0b8398d873016a430&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//邮件唯一ID</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;所有玩家&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//收件人ID</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;测试邮件&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//标题</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;content&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;测试全部邮件&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//内容</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;annex&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//附件</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;sendtime&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2023-04-18 23:32:55&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //邮件发送时间</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="automailbox文件" tabindex="-1"><code>automailbox</code>文件 <a class="header-anchor" href="#automailbox文件" aria-label="Permalink to &quot;\`automailbox\`文件&quot;">​</a></h4><ul><li>自动发送邮件</li><li>路径: BDS/plugins/Planet/PMail/automailbox.json</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;7270887ac65b4f428b1fa2d335a269da&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//邮件唯一ID</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;***服务器&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//自动发送邮件的发件人（管理员添加时所选身份决定）</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;测试自动邮件&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//自动发送邮件的标题</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;content&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;测试系统自动发送邮件&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//自动发送邮件的内容</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;annex&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//自动发送邮件的附件</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;time&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2023-04-20 22:15:36&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//自动发送邮件的添加时间</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;deadline&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//自动发送邮件的有效期</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;received&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;SUNSServer&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ] </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//收到自动发送邮件的玩家ID</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="emailaddress-文件" tabindex="-1"><code>emailaddress</code> 文件 <a class="header-anchor" href="#emailaddress-文件" aria-label="Permalink to &quot;\`emailaddress\` 文件&quot;">​</a></h4><ul><li>玩家绑定的接收邮箱地址</li><li>路径: BDS/plugins/Planet/PMail/emailaddress.json</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;SUNSServer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;licheng1117@outlook.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;玩家名称&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;邮箱地址&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="papi变量说明" tabindex="-1">PAPI变量说明 <a class="header-anchor" href="#papi变量说明" aria-label="Permalink to &quot;PAPI变量说明&quot;">​</a></h2><p>-<code>v1.0.9</code>正式版开始支持</p><blockquote><p>[!ATTENTION] 使用<code>BEPlaceholderAPI</code>公共变量需要安装<code>BEPlaceholderAPI</code>插件</p></blockquote><table><thead><tr><th>变量</th><th>注释</th><th>示例</th></tr></thead><tbody><tr><td><code>%PM_Incount%</code></td><td>玩家收件箱邮件总数量</td><td><code>HeadShow</code>插件<code>%PM_Incount%</code><br><code>PQuery</code>插件<code>%PM_Incount%</code></td></tr><tr><td><code>%PM_Unread%</code></td><td>玩家收件箱未读邮件数量</td><td><code>HeadShow</code>插件<code>%PM_Unread%</code><br><code>PQuery</code>插件<code>%PM_Unread%</code></td></tr><tr><td><code>%PM_Outcount%</code></td><td>玩家发件箱邮件总数量</td><td><code>HeadShow</code>插件<code>%PM_Outcount%</code><br><code>PQuery</code>插件<code>%PM_Outcount%</code></td></tr></tbody></table><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><blockquote><p>PMail提供了5个接口</p></blockquote><h4 id="获取指定玩家收件箱" tabindex="-1">获取指定玩家收件箱 <a class="header-anchor" href="#获取指定玩家收件箱" aria-label="Permalink to &quot;获取指定玩家收件箱&quot;">​</a></h4><p><code>ll.import(&quot;PMail&quot;,&quot;getinmailbox&quot;)(name)</code></p><ul><li><p>参数：</p><ul><li>name : <code>String</code><br> 需要获取的玩家ID</li></ul></li><li><p>返回值: 玩家的收件箱数据</p></li><li><p>返回值类型: <code>Array&lt;Object,Object,...&gt;</code></p><ul><li>如果返回 <code>Null</code> 则表示没有数据</li></ul></li><li><p>示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> PMail</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ll.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;PMail&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;getinmailbox&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PMail</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SUNSServer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></li></ul><h4 id="获取指定玩家已发送邮件" tabindex="-1">获取指定玩家已发送邮件 <a class="header-anchor" href="#获取指定玩家已发送邮件" aria-label="Permalink to &quot;获取指定玩家已发送邮件&quot;">​</a></h4><p><code>ll.import(&quot;PMail&quot;,&quot;getoutmailbox&quot;)(name)</code></p><ul><li><p>参数：</p><ul><li>name : <code>String</code><br> 需要获取的玩家ID</li></ul></li><li><p>返回值: 玩家已发送邮件数据</p></li><li><p>返回值类型: <code>Array&lt;Object,Object,...&gt;</code></p><ul><li>如果返回 <code>Null</code> 则表示没有数据</li></ul></li><li><p>示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> PMail</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ll.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;PMail&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;getoutmailbox&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PMail</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SUNSServer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></li></ul><h4 id="获取指定玩家邮件数量" tabindex="-1">获取指定玩家邮件数量 <a class="header-anchor" href="#获取指定玩家邮件数量" aria-label="Permalink to &quot;获取指定玩家邮件数量&quot;">​</a></h4><p><code>ll.import(&quot;PMail&quot;,&quot;getmailcount&quot;)(name)</code></p><ul><li><p>参数：</p><ul><li>name : <code>String</code><br> 需要获取的玩家ID</li></ul></li><li><p>返回值: 玩家的邮件数量</p></li><li><p>返回值类型: <code>String</code></p></li><li><p>示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> PMail</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ll.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;PMail&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;getmailcount&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PMail</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SUNSServer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></li></ul><h4 id="给指定玩家发送一条邮件" tabindex="-1">给指定玩家发送一条邮件 <a class="header-anchor" href="#给指定玩家发送一条邮件" aria-label="Permalink to &quot;给指定玩家发送一条邮件&quot;">​</a></h4><p><code>ll.import(&quot;PMail&quot;,&quot;addnewmail&quot;)(name,id,title,content,[annex])</code></p><ul><li><p>参数:</p><ul><li><p>name: <code>String</code><br> 玩家ID</p></li><li><p>id: <code>String</code><br> 发件人ID或名称</p></li><li><p>title: <code>String</code><br> 邮件的标题</p></li><li><p>content: <code>String</code><br> 邮件的内容</p></li><li><p>annex: <code>Object</code><br> 邮件的附件(可选参数)<br> 以上四个附件内容都可以随意搭配，也可以只带一种附件</p><table><thead><tr><th>annex参数</th><th>参数含义</th><th>参数类型</th></tr></thead><tbody><tr><td>money: 100</td><td>附件LLMoney数量</td><td><code>Number</code></td></tr><tr><td>score: 100</td><td>附件记分板数量</td><td><code>Number</code></td></tr><tr><td>item:Null</td><td>附件MC物品NBT JSON</td><td><code>Object</code></td></tr><tr><td>vip: 7</td><td>附件VIP天数</td><td><code>Number</code></td></tr></tbody></table></li></ul></li><li><p>返回值: 邮件发送结果的对象</p></li><li><p>返回值类型: <code>Object</code></p><table><thead><tr><th>属性</th><th>含义</th><th>类型</th><th>示范</th></tr></thead><tbody><tr><td>.state</td><td>发送结果</td><td><code>Boolean</code></td><td>true</td></tr><tr><td>.content</td><td>发送结果信息</td><td><code>String</code></td><td>见下</td></tr></tbody></table><ul><li>返回对象content的内容 <table><thead><tr><th>内容</th></tr></thead><tbody><tr><td>&quot;要发送的邮件没有收件人&quot;</td></tr><tr><td>&quot;要发送的邮件没有收件人或不正确&quot;</td></tr><tr><td>&quot;必须填写发件人&quot;</td></tr><tr><td>&quot;发件人名字不能为空&quot;</td></tr><tr><td>&quot;要发送的邮件收件人不能是中文&quot;</td></tr><tr><td>&quot;邮件标题不能为空&quot;</td></tr><tr><td>&quot;邮件内容不能为空&quot;</td></tr><tr><td>&quot;错误,物品必须是NBT数据&quot;</td></tr><tr><td>&quot;错误,要邮寄的附件并不是MC物品NBT&quot;</td></tr><tr><td>&quot;邮件发送成功&quot;</td></tr></tbody></table></li></ul></li><li><p>示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> PMail</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ll.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;PMail&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;addnewmail&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 只发送文字邮件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PMail</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SUNSServer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;发件人&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;标题&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;内容&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 发送带附件的邮件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PMail</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SUNSServer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;发件人&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;标题&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;内容&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,{money: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PMail</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SUNSServer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;发件人&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;内容&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,{money: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,score: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PMail</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SUNSServer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;发件人&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;内容&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,{vip: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div></li></ul><h4 id="注册系统发件人-1-0-5版支持" tabindex="-1">注册系统发件人 <code>1.0.5</code>版支持 <a class="header-anchor" href="#注册系统发件人-1-0-5版支持" aria-label="Permalink to &quot;注册系统发件人 \`1.0.5\`版支持&quot;">​</a></h4><p><code>ll.import(&quot;PMail&quot;,&quot;regsystem&quot;)(name)</code></p><blockquote><p>这个接口主要是为了PMail筛选收件箱的系统发件人、避免玩家回复系统邮件</p></blockquote><ul><li><p>参数:</p><ul><li>name: <code>String</code><br> 要注册的系统发件人名称</li></ul></li><li><p>返回值: 注册结果对象</p></li><li><p>返回值类型: <code>Object</code></p><table><thead><tr><th>属性</th><th>含义</th><th>类型</th><th>示范</th></tr></thead><tbody><tr><td>.state</td><td>注册结果</td><td><code>Boolean</code></td><td>true</td></tr><tr><td>.content</td><td>注册结果信息</td><td><code>String</code></td><td>见下</td></tr></tbody></table><ul><li>返回对象content的内容 <table><thead><tr><th>内容</th></tr></thead><tbody><tr><td>&quot;注册系统发件人成功&quot;</td></tr><tr><td>&quot;要注册的系统发件人已存&quot;</td></tr></tbody></table></li></ul></li><li><p>示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> PMail</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ll.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;PMail&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;regsystem&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PMail</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SUNSServer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;系统&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></li></ul>`,48),h=[n];function k(p,e,d,E,r,o){return a(),i("div",null,h)}const c=s(l,[["render",k]]);export{g as __pageData,c as default};