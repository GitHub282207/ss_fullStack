# 学习系统
    客户？
    需求 存储同学信息 OA办公系统
  - 学籍
   1. 同学的信息登录及完善系统
        原型设计表单 xiaopiu
   2. 照片上传功能
        云开发的文件上传
   
  - 项目形式
   1. 小程序 用户端
     vant + 云开发  
     微信/QQ小程序
   2. pc 端的Admin 后台系统
     VUE + ElementUI
     分班级 分页 列表
     详情

   - 功能要求 细分
     1. 角色区分 role字段 -1>1>2>3>4>5 数字越大 权限越大
       Admin/Teacher/StuAdmin/Student|TryStudent
        user表 _id uid(学号 10000) pro_num has_resume
        has_job shixi_danwei zhuanzheng_danwei
        shixi_paymeng zhuanzheng_paymeng score（荣誉机制）banji can_waibao
        ban
         bid bname
     2. 试听功能|邀请 运营相关 分享
       生成图功能 百度一下 https://juejin.im/post/6844903663840788493
     3. 学习跟进系统
       - github 提交 图
       收集用户的github账号 shunwuyu
       https://github.com/${shunwuyu}
       position-relative   -> 图片
         爬虫
       - 主动提交
        1. 每个人都一张图 新的要覆盖旧的
         gitPic _id url uid banji
        2. ts 标红
        3. 列表 班级
      - 文章
       articles
         _id uid title desc ts is_top love_num url(文章地址)
         love_num 怎么计算
         user love_num 0 articles count save
         > 0 写文章时+1
         post_article 
      - 项目
      - leetcode 算法 GitHub
      - 外包
       计时计件系统 启动倒计时2小时为工作单元
       提交代码记录
       付费记录
       开源出去

    
