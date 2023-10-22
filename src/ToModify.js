// src/route/module/base-routes.js //修改登录后展示页
// src/route/module/main-routes.js //添加新页面内容
// src/mock/service/menuList.json //添加菜单
// src/mock/service/menuTree.json //添加菜单
// src/locale/lang/zh-CN/menu.js //添加菜单国际化中文名
// src/configure/pear.config.js //修改菜单风格及布局
// 去掉国际化 减少修改的地方
// 学习网可截图 https://gitee.com/macplus/WTS?_from=gitee_search#https://gitee.com/link?target=http%3A%2F%2Fwts.wcpknow.com

// createFile 生成3D图片。页面内容：文件拖拽上传框 结果展示区。
// cardList 主体方块布局 有图标按钮。
//  a 适合文档管理、信号灯 设备管理
// boxList 主体方块布局。视频课程 学习报告 算法管理 文字按钮
//  a 课程方块
//  b 算法方块
//  c 三段文字描述 方向：设备管理
// stateList 主体表格 带状态。适合预警Menu
//  a 三栏文字
//  b big icon
// tableList 主力page 带树结构 小图表 小表单
//  a 方块内有图片 标题 描述。偏向数据采集
//  b 方块内标题 说明 评分 按钮
// base-form 主体为上表单 下2列list
// more-form 主体两个card上下布局。上card为表单，下card为表格
//  a 用于系统扩展对接
//  b 用于设备对接
//  c 部门协同
//  d 发布活动信息
// step-form 主体为 3个步骤表单
// adv 主体为一条条的，每条包含头像 title desc 按钮。适合广告推送 帮助文档 系统升级等Menu。
//  b 使用指南 问题解答
//  c 适合系统升级
// history 主体为搜索 表格 按钮。适合历史记录。
// createReport 主体为表单 4列List
// dashboard 主体为4个图表
// detail 主体为大表单、大表单回填
// editor 主体为富文本编辑器
// exercise 主体为 计时 答题数 4个题目
// forum 主体为列表，有头像 文字 大图 评论 点赞。适合学习论坛
// map 主体为地图。适合有地图功能的Menu
// notice 有上数字提示 左列表 右表单。适合动态 客服Menu
// permission 适合权限管理Menu
// picWrap 适合装载截图的Menu
// function 功能page 语音识别口语等
// workerHistory 定制页面
// customerService 客服
// collapse 手风琴布局.
//  a 预案 方案 的展示与增删改发送
//  b 规则 的展示
//  c 适合展示几个按钮的开关
// description 描述列表。一个title 各个详细信息在下方展示
//  a多个。有前后数据对比。
//  b单个
//  c多个 底部有按钮
//  d item有两个按钮
//  a-base 操作日志
// itemShow 展示一条一条的数据。
//  补充数据条目的展现形式
// home 首页。实时数据 设备状态等信息
// xiezuo 主体穿梭框。适合跨部门协作发通知

// 用时间轴搞个东西
// 各个页面的按钮加弹窗。数据收集的新增按钮改为自动收集，提示为开始自动收集。
