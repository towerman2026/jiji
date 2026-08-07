/* ============ 论坛、任务悬赏、AI工具、个人中心 数据与渲染 ============ */

/* ============ 论坛数据 ============ */
let forumState = {
  officialPage: 1,
  userPage: 1,
  pageSize: 4
};

const forumOfficialPosts = [
  {id:'f_o_1',title:'【站务公告】平台功能更新说明 V2.0',content:'尊敬的用户，平台V2.0版本已正式上线！本次更新包含全新的内容推荐算法、优化的评论系统、以及全新的AI创作助手功能。我们致力于为您提供更好的使用体验。',author:'官方团队',avatar_color:'#e6002e',time:'2026-08-01',views:12856,replies:328,isOfficial:true,tags:['公告','更新']},
  {id:'f_o_2',title:'【金币系统】如何获取和使用金币',content:'金币系统已正式上线！用户可以通过以下方式获取金币：1.每日签到获得5-20金币；2.发布优质内容获得金币奖励；3.参与互动（点赞、评论、分享）获得金币；4.完成任务悬赏获得金币。金币可用于：1.解锁付费内容；2.使用AI创作工具；3.购买虚拟礼物；4.兑换周边商品。',author:'产品团队',avatar_color:'#9C27B0',time:'2026-07-30',views:25678,replies:1256,isOfficial:true,tags:['金币','教程']},
  {id:'f_o_3',title:'【赚钱攻略】创作者盈利模式全解析',content:'平台为创作者提供了多种盈利方式：1.内容分成：优质视频/文章可获得广告分成；2.付费内容：开通付费专栏，粉丝付费查看；3.直播打赏：直播时粉丝打赏的礼物可兑换收益；4.任务接单：在任务悬赏中心接单赚钱；5.品牌合作：粉丝达到一定量后可接商单。本帖详细解析每种方式的操作步骤和收益潜力。',author:'运营中心',avatar_color:'#FF9800',time:'2026-07-28',views:18932,replies:876,isOfficial:true,tags:['赚钱','攻略']},
  {id:'f_o_4',title:'【活动预告】创作大赛火热报名中',content:'第一届创作者大赛正式启动！总奖金池高达10万元，欢迎所有有创作热情的朋友踊跃报名。比赛分为影视解说、短剧创作、图文故事三个赛道。每个赛道设置：一等奖1名（10000元）、二等奖3名（3000元）、三等奖10名（1000元）、优秀奖50名（200元+平台流量扶持）。报名截止日期：2026年8月31日。',author:'活动运营',avatar_color:'#f44336',time:'2026-07-25',views:32456,replies:1024,isOfficial:true,tags:['活动','大赛']},
  {id:'f_o_5',title:'【板块说明】各功能区域使用指南',content:'平台主要板块功能说明：1.推荐首页：根据兴趣智能推荐内容；2.分类频道：按类型浏览不同内容（电影、短剧、综艺等）；3.树洞心语：分享心情和短故事的社区；4.论坛交流：长篇帖子讨论、话题交流；5.任务悬赏：发布任务、接单赚钱；6.一起做AI：AI工具创作内容；7.我要投稿：向平台投稿作品；8.个人中心：管理账号和内容。详细使用说明请查看对应板块的帮助文档。',author:'官方小助手',avatar_color:'#4CAF50',time:'2026-07-22',views:9876,replies:456,isOfficial:true,tags:['说明','指南']},
  {id:'f_o_6',title:'【教程】如何写出吸引人的标题',content:'标题是内容的第一印象，好的标题能带来10倍以上的点击量。技巧包括：1.数字法：如"3个技巧让你XXX"；2.悬念法：如"看完这个我惊呆了..."；3.痛点法：如"还在为XXX烦恼？"；4.共鸣法：如"程序员的日常"；5.利益法：如"免费分享XXX资源"。本帖提供了100+爆款标题模板供参考。',author:'内容学院',avatar_color:'#2196F3',time:'2026-07-20',views:15234,replies:678,isOfficial:true,tags:['教程','技巧']},
  {id:'f_o_7',title:'【教程】短视频制作完整流程',content:'从0到1制作一个优秀短视频的完整流程：1.选题策划：确定内容方向和目标受众；2.脚本编写：撰写分镜头脚本；3.拍摄技巧：光线、构图、角度的基本要点；4.剪辑软件：推荐PR、剪映、Final Cut等工具；5.后期调色：提升画面质感；6.字幕添加：方便观众观看；7.封面制作：吸引点击的封面图；8.发布优化：标题、标签、发布时间的选择。每一步都有详细讲解和推荐工具。',author:'视频学院',avatar_color:'#00BCD4',time:'2026-07-18',views:21567,replies:934,isOfficial:true,tags:['教程','视频']},
  {id:'f_o_8',title:'【安全提醒】谨防网络诈骗',content:'近期发现有不法分子冒充平台工作人员进行诈骗，请注意：1.官方工作人员不会向您索要任何密码或验证码；2.不要点击来历不明的链接；3.不要扫描陌生人发送的二维码；4.涉及金钱交易请通过官方渠道；5.如有疑问请通过官方客服电话核实。保护好账号和财产安全，人人有责！',author:'安全中心',avatar_color:'#FF5722',time:'2026-07-15',views:11234,replies:234,isOfficial:true,tags:['安全','提醒']},
  {id:'f_o_9',title:'【改版说明】评论区全新升级',content:'评论区进行了全面升级！新增功能包括：1.楼中楼回复：可以针对特定评论进行回复；2.评论点赞：为喜欢的评论点赞；3.评论收藏：收藏有价值的评论；4.图片评论：支持上传图片评论；5.表情符号：丰富的表情库；6.@功能：可以@其他用户；7.举报功能：举报违规内容。现在可以享受更好的互动体验了！',author:'技术团队',avatar_color:'#795548',time:'2026-07-12',views:8765,replies:567,isOfficial:true,tags:['改版','评论']},
  {id:'f_o_10',title:'【新手指南】注册账号后必做的10件事',content:'新用户注册后推荐完成以下操作：1.完善个人资料（头像、昵称、简介）；2.完成实名认证（解锁更多功能）；3.设置支付密码（保障账户安全）；4.添加兴趣标签（获得个性化推荐）；5.关注喜欢的创作者；6.发布第一条动态；7.完成新手任务（获得金币奖励）；8.加入感兴趣的讨论区；9.参与每日签到；10.下载APP客户端（随时随地使用）。',author:'官方小助手',avatar_color:'#3F51B5',time:'2026-07-10',views:13456,replies:789,isOfficial:true,tags:['新手','指南']}
];

const forumUserPosts = [
  {id:'f_u_1',title:'【功能建议】希望增加夜间模式',excerpt:'晚上看屏幕太亮了，强烈建议增加夜间模式功能，保护眼睛。很多APP都有这个功能了，希望平台也能跟进...',author:'护眼达人',avatar_color:'#4CAF50',time:'2026-08-05 14:32',replies:56,views:1234,likes:234},
  {id:'f_u_2',title:'【求资源】有没有好看的纪录片推荐？',excerpt:'最近迷上了纪录片，尤其是自然、历史类的，大家有没有什么好的推荐？最好是国内能看的到的...',author:'纪录片爱好者',avatar_color:'#FF9800',time:'2026-08-05 12:15',replies:89,views:2345,likes:67},
  {id:'f_u_3',title:'【话题讨论】AI会取代人类创作者吗？',excerpt:'最近AI生成内容越来越强了，从文章到视频都能做。大家觉得未来AI会完全取代人类创作者吗？还是会成为工具辅助？',author:'科技前沿',avatar_color:'#3F51B5',time:'2026-08-05 10:28',replies:234,views:5678,likes:456},
  {id:'f_u_4',title:'【功能建议】希望优化搜索功能',excerpt:'现在的搜索结果感觉不够精准，建议增加筛选条件，比如按时间、热度、类型等筛选，还有搜索记录功能...',author:'搜索小能手',avatar_color:'#00BCD4',time:'2026-08-05 09:45',replies:45,views:876,likes:89},
  {id:'f_u_5',title:'【求资源】求推荐几款好用的剪辑软件',excerpt:'刚入门视频剪辑，大家都用什么软件？免费付费都可以，主要是易用性高的，最好有教程的...',author:'剪辑新手',avatar_color:'#E91E63',time:'2026-08-04 20:15',replies:67,views:1567,likes:123},
  {id:'f_u_6',title:'【话题讨论】你们觉得最好的创作选题是什么？',excerpt:'做内容创作最难的就是选题了，大家都在做什么类型的内容？什么样的选题容易火？来交流一下...',author:'创作者小李',avatar_color:'#FF5722',time:'2026-08-04 16:42',replies:128,views:3456,likes:234},
  {id:'f_u_7',title:'【功能建议】希望增加合集功能',excerpt:'收藏的内容太多找不到，建议增加合集功能，可以把同一主题的内容收藏到一个合集里，方便查看...',author:'整理控',avatar_color:'#795548',time:'2026-08-04 14:20',replies:34,views:678,likes:56},
  {id:'f_u_8',title:'【求资源】有没有免费的音效素材网站？',excerpt:'做视频需要各种音效素材，比如转场音效、环境音、背景音乐等，大家知道哪些免费好用的音效网站吗？',author:'音效收集者',avatar_color:'#607D8B',time:'2026-08-04 11:30',replies:78,views:1890,likes:145},
  {id:'f_u_9',title:'【话题讨论】如何看待内容搬运现象？',excerpt:'现在很多平台都有内容搬运的问题，把别人的内容搬到自己账号上。大家怎么看这个现象？平台应该如何处理？',author:'原创作者',avatar_color:'#9C27B0',time:'2026-08-03 18:35',replies:312,views:8765,likes:567},
  {id:'f_u_10',title:'【功能建议】希望支持视频倍速播放',excerpt:'看教程视频的时候想快进，0.5/1.5/2倍速播放应该是基础功能吧，希望平台早日支持...',author:'学习达人',avatar_color:'#FFC107',time:'2026-08-03 15:20',replies:23,views:456,likes:78},
  {id:'f_u_11',title:'【求资源】求推荐几本写作入门的书',excerpt:'想提升自己的写作能力，特别是自媒体写作，有什么好书推荐吗？从入门到进阶都可以...',author:'写作爱好者',avatar_color:'#4CAF50',time:'2026-08-03 10:50',replies:45,views:1123,likes:98},
  {id:'f_u_12',title:'【话题讨论】做自媒体最大的困难是什么？',excerpt:'做自媒体半年了，感觉最大的困难是坚持和选题。大家做自媒体最大的困难是什么？又是怎么克服的？',author:'自媒体人',avatar_color:'#2196F3',time:'2026-08-02 20:00',replies:156,views:4567,likes:345}
];

/* ============ 任务悬赏数据 ============ */
const taskBounties = [
  {id:'t_1',title:'制作产品宣传封面图',description:'需要为一款手机产品制作5张宣传封面图，要求风格现代、有科技感。提供产品素材和参考图。',budget:'500',budget_type:'固定',deadline:'2026-08-15',status:'招募中',publisher:'品牌市场部',publisher_avatar:'#FF5722',requirements:'熟练使用Photoshop或其他设计软件，有产品设计经验优先',skills:['Photoshop','Illustrator','产品设计'],replies:12,views:234,publish_time:'2026-08-01'},
  {id:'t_2',title:'撰写产品使用文案',description:'为一款智能手表撰写使用说明文案，包括功能介绍、使用场景、卖点提炼等。',budget:'300',budget_type:'固定',deadline:'2026-08-20',status:'招募中',publisher:'产品运营',publisher_avatar:'#2196F3',requirements:'有电子产品文案撰写经验，了解智能穿戴设备',skills:['文案撰写','产品文案','科技产品'],replies:8,views:156,publish_time:'2026-07-30'},
  {id:'t_3',title:'短视频剪辑服务',description:'需要将一段30分钟的采访素材剪辑成3个5分钟的精彩片段，要求节奏紧凑、重点突出。',budget:'800',budget_type:'固定',deadline:'2026-08-12',status:'进行中',publisher:'自媒体工作室',publisher_avatar:'#4CAF50',requirements:'熟练使用Final Cut Pro或Premiere Pro，有短视频剪辑经验',skills:['视频剪辑','Final Cut','Premiere'],replies:56,views:876,publish_time:'2026-07-28'},
  {id:'t_4',title:'网站前端开发',description:'为一个小型企业官网进行前端开发，提供完整的设计稿，需要实现响应式布局。',budget:'2000',budget_type:'固定',deadline:'2026-09-01',status:'招募中',publisher:'企业IT部',publisher_avatar:'#9C27B0',requirements:'熟练掌握HTML/CSS/JavaScript，了解Vue或React框架',skills:['HTML','CSS','JavaScript','Vue'],replies:23,views:456,publish_time:'2026-07-25'},
  {id:'t_5',title:'英文翻译服务',description:'将一份中文产品说明书翻译成英文，约5000字，要求专业、准确。',budget:'400',budget_type:'按字数',deadline:'2026-08-18',status:'招募中',publisher:'外贸公司',publisher_avatar:'#FF9800',requirements:'英语专业八级或同等水平，有科技文档翻译经验',skills:['英语翻译','科技翻译','文档翻译'],replies:15,views:289,publish_time:'2026-07-22'},
  {id:'t_6',title:'APP界面设计',description:'为一款健身APP设计完整的UI界面，包括首页、训练页、个人中心等10个页面。',budget:'1500',budget_type:'固定',deadline:'2026-08-25',status:'招募中',publisher:'健身科技公司',publisher_avatar:'#f44336',requirements:'熟练使用Figma或Sketch，有移动端设计经验',skills:['Figma','Sketch','UI设计','移动端'],replies:34,views:678,publish_time:'2026-07-20'},
  {id:'t_7',title:'社交媒体推广',description:'为新开的电商店铺提供社交媒体推广方案和执行服务，包括微博、小红书、抖音等平台。',budget:'600',budget_type:'按效果',deadline:'2026-08-30',status:'招募中',publisher:'电商创业者',publisher_avatar:'#00BCD4',requirements:'有社交媒体运营经验，了解电商推广',skills:['社交媒体','推广','电商运营'],replies:19,views:345,publish_time:'2026-07-18'},
  {id:'t_8',title:'数据录入与整理',description:'将一份纸质文档的数据录入到Excel表格中，约1000条记录，需要核对准确。',budget:'200',budget_type:'固定',deadline:'2026-08-10',status:'招募中',publisher:'行政助理',publisher_avatar:'#795548',requirements:'熟练使用Excel，打字速度每分钟60字以上',skills:['Excel','数据录入','办公软件'],replies:67,views:1234,publish_time:'2026-07-15'}
];

/* ============ AI工具数据 ============ */
const aiTools = [
  {id:'ai_1',name:'AI智能瘦脸',desc:'一键瘦脸，自然不生硬，支持多种脸型调整',price:10,price_unit:'金币',category:'图像处理',author:'美妆达人小雅',author_avatar:'#FF6B6B',likes:1256,favorites:328,uses:8932,reviews:56,tags:['推荐','热门'],isVideo:false,views:23456,publish_time:'2026-08-01',image:'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI face slimming before after comparison, portrait photo, natural beauty effect, side by side comparison&image_size=landscape_4_3',params:[{name:'image',type:'upload',label:'上传图片'},{name:'strength',type:'slider',label:'瘦脸强度',min:1,max:10,default:5},{name:'smooth',type:'slider',label:'皮肤磨皮',min:0,max:10,default:3}]},
  {id:'ai_2',name:'AI证件照生成',desc:'上传一张照片，自动生成标准证件照，支持多种底色',price:8,price_unit:'金币',category:'图像处理',author:'摄影师阿强',author_avatar:'#4ECDC4',likes:986,favorites:245,uses:12567,reviews:42,tags:['摄影','实用'],isVideo:false,views:15678,publish_time:'2026-07-28',image:'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ID photo generation before after, standard document photo, blue background, professional portrait&image_size=landscape_4_3',params:[{name:'image',type:'upload',label:'上传照片'},{name:'bg_color',type:'select',label:'背景颜色',options:['白色','蓝色','红色','灰色']},{name:'size',type:'select',label:'尺寸规格',options:['一寸','二寸','小二寸']}]},
  {id:'ai_3',name:'AI文案生成',desc:'输入关键词，智能生成营销文案、朋友圈、小红书笔记',price:5,price_unit:'金币',category:'文案写作',author:'文案策划老王',author_avatar:'#45B7D1',likes:2341,favorites:678,uses:15234,reviews:128,tags:['推荐','文案'],isVideo:false,views:34567,publish_time:'2026-07-25',image:'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI copywriting generation before after, social media posts comparison, creative writing, marketing text&image_size=landscape_4_3',params:[{name:'prompt',type:'textarea',label:'输入主题'},{name:'style',type:'select',label:'文案风格',options:['小红书','朋友圈','公众号','短视频脚本']},{name:'length',type:'select',label:'文案长度',options:['短(50字)','中(200字)','长(500字)']}]},
  {id:'ai_4',name:'AI图片转视频',desc:'上传图片，一键生成动态短视频，支持多种特效',price:15,price_unit:'金币',category:'视频制作',author:'视频创作小能手',author_avatar:'#96CEB4',likes:1876,favorites:456,uses:6789,reviews:89,tags:['视频','热门'],isVideo:true,views:28901,publish_time:'2026-07-22',image:'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI image to video before after, static photo becomes motion video, animation effect comparison&image_size=landscape_4_3',params:[{name:'image',type:'upload',label:'上传图片'},{name:'duration',type:'select',label:'视频时长',options:['3秒','5秒','10秒']},{name:'effect',type:'select',label:'动画特效',options:['Ken Burns','推拉','缩放','抖动']}]},
  {id:'ai_5',name:'AI背景更换',desc:'智能识别主体，一键更换图片背景，支持多种场景',price:6,price_unit:'金币',category:'图像处理',author:'修图师小美',author_avatar:'#DDA0DD',likes:1567,favorites:389,uses:10234,reviews:67,tags:['推荐','修图'],isVideo:false,views:19876,publish_time:'2026-07-15',image:'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI background replacement before after, portrait with beach sunset background, transparent background comparison&image_size=landscape_4_3',params:[{name:'image',type:'upload',label:'上传图片'},{name:'bg_type',type:'select',label:'背景类型',options:['纯色','渐变','场景','透明']},{name:'quality',type:'select',label:'输出质量',options:['标准','高清','超清']}]},
  {id:'ai_6',name:'AI图片生成',desc:'上传参考图，输入关键词，生成高质量AI图像',price:12,price_unit:'金币',category:'图像生成',author:'AI画师',author_avatar:'#9C27B0',likes:2345,favorites:678,uses:15678,reviews:234,tags:['推荐','热门','新'],isVideo:false,views:34567,publish_time:'2026-08-02',image:'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI image generation, creative artwork, digital art, imaginative design, colorful&image_size=landscape_4_3',tool_type:'image_generate',params:[{name:'images',type:'multi_upload',label:'上传参考图(最多3张)',max:3},{name:'ratio',type:'ratio',label:'图片比例',options:['1:1','3:4','4:3','9:16','16:9','自定义']},{name:'custom_ratio',type:'custom_ratio',label:'自定义比例'},{name:'prompt',type:'textarea',label:'输入关键词',placeholder:'描述你想要生成的图片，越详细越好...'}]},
  {id:'ai_7',name:'AI文生视频',desc:'输入文字描述，生成精彩短视频，支持多种比例和清晰度',price:25,price_unit:'金币',category:'视频生成',author:'视频创作大师',author_avatar:'#FF5722',likes:3456,favorites:890,uses:8901,reviews:456,tags:['视频','热门','推荐'],isVideo:true,views:45678,publish_time:'2026-08-03',image:'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI text to video, video generation preview, cinematic scene, motion picture&image_size=landscape_4_3',tool_type:'text_to_video',params:[{name:'prompt',type:'textarea',label:'视频描述',placeholder:'详细描述你想要生成的视频内容...'},{name:'video_ratio',type:'video_ratio',label:'视频比例',options:['3:4','4:3','9:16','16:9','1:1']},{name:'resolution',type:'resolution',label:'清晰度',options:['标清','高清','超高清']},{name:'duration',type:'duration',label:'视频时长',options:['5s','8s']}]},
  {id:'ai_8',name:'AI首尾帧视频',desc:'上传首尾帧图片，AI自动生成中间过渡视频',price:20,price_unit:'金币',category:'视频生成',author:'动画制作人',author_avatar:'#4CAF50',likes:2890,favorites:765,uses:6789,reviews:345,tags:['视频','新'],isVideo:true,views:32100,publish_time:'2026-08-02',image:'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI frame to frame video, transition animation, first frame to last frame, smooth motion&image_size=landscape_4_3',tool_type:'frame_to_frame',params:[{name:'start_frame',type:'upload',label:'上传首帧'},{name:'end_frame',type:'upload',label:'上传尾帧'},{name:'video_ratio',type:'video_ratio',label:'视频比例',options:['3:4','4:3','9:16','16:9','1:1']},{name:'resolution',type:'resolution',label:'清晰度',options:['标清','高清','超高清']},{name:'duration',type:'duration',label:'视频时长',options:['5s','8s']}]},
  {id:'ai_9',name:'AI老照片修复',desc:'上传模糊老照片，AI智能修复恢复高清画质',price:15,price_unit:'金币',category:'图像修复',author:'修复专家',author_avatar:'#00BCD4',likes:1987,favorites:543,uses:9876,reviews:178,tags:['修复','经典'],isVideo:false,views:23456,publish_time:'2026-07-20',image:'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=old photo restoration before after comparison, damaged black and white photo restored to color, professional retouching&image_size=landscape_4_3',tool_type:'photo_restore',params:[{name:'image',type:'upload',label:'上传老照片'},{name:'restore_level',type:'select',label:'修复等级',options:['轻度修复','中度修复','重度修复']},{name:'colorize',type:'select',label:'是否上色',options:['保持黑白','智能上色']}]},
  {id:'ai_10',name:'AI动作模仿',desc:'上传视频和图片，AI模仿视频动作生成新视频',price:30,price_unit:'金币',category:'视频生成',author:'动作捕捉师',author_avatar:'#FF9800',likes:1567,favorites:432,uses:5432,reviews:289,tags:['视频','高级'],isVideo:true,views:28901,publish_time:'2026-07-30',image:'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI motion imitation, pose transfer, person motion tracking,动作模仿 before after&image_size=landscape_4_3',tool_type:'motion_imitation',params:[{name:'video',type:'upload_video',label:'上传参考视频'},{name:'image',type:'upload',label:'上传人物图片'},{name:'prompt',type:'textarea',label:'动作描述',placeholder:'描述你想要模仿的动作...'}]},
  {id:'ai_11',name:'AI声音克隆',desc:'上传声音样本，克隆音色进行AI配音',price:20,price_unit:'金币',category:'音频处理',author:'配音工作室',author_avatar:'#FFEAA7',likes:876,favorites:234,uses:4567,reviews:34,tags:['音频','高级'],isVideo:false,views:12345,publish_time:'2026-07-18',image:'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI voice cloning before after, voice waveform comparison, audio recording studio, sound cloning technology&image_size=landscape_4_3',tool_type:'voice_clone',params:[{name:'voice',type:'upload_audio',label:'上传声音样本'},{name:'duration',type:'duration_price',label:'选择时长',options:[{label:'5秒',price:5},{label:'10秒',price:8},{label:'30秒',price:15},{label:'60秒',price:25}]},{name:'text',type:'textarea',label:'要克隆的文字',placeholder:'输入要克隆的文字内容...'}]}
];

/* ============ 渲染：论坛页面 ============ */
function renderForumPage(){
  let html='<div class="forum-list-page">';
  
  // 官方公告区
  const officialTotalPages = Math.ceil(forumOfficialPosts.length / forumState.pageSize);
  const officialStart = (forumState.officialPage - 1) * forumState.pageSize;
  const officialPagePosts = forumOfficialPosts.slice(officialStart, officialStart + forumState.pageSize);
  
  html+='<div class="forum-section official-section">'+
    '<div class="forum-section-header">'+
      '<div class="forum-section-title">'+
        '<span class="forum-badge official">官方发布</span>'+
        '<h2>站内公告</h2>'+
      '</div>'+
      '<span class="forum-section-count">共 '+forumOfficialPosts.length+' 条</span>'+
    '</div>'+
    '<div class="forum-official-list">';
  
  officialPagePosts.forEach(function(post){
    html+='<div class="forum-official-card" onclick="showForumDetail(\''+post.id+'\',true)">'+
      '<div class="forum-official-header">'+
        '<span class="forum-tag official-tag">'+post.tags[0]+'</span>'+
        '<span class="forum-tag official-tag">'+post.tags[1]+'</span>'+
      '</div>'+
      '<h3 class="forum-official-title">'+post.title+'</h3>'+
      '<div class="forum-official-content">'+post.content.substring(0,100)+'...</div>'+
      '<div class="forum-official-meta">'+
        '<div class="forum-official-author">'+
          '<div class="forum-avatar" style="background:'+post.avatar_color+'">'+post.author.charAt(0)+'</div>'+
          '<span>'+post.author+'</span>'+
        '</div>'+
        '<div class="forum-official-stats">'+
          '<span>阅读 '+post.views.toLocaleString()+'</span>'+
          '<span>评论 '+post.replies+'</span>'+
          '<span>'+post.time+'</span>'+
        '</div>'+
      '</div>'+
    '</div>';
  });
  
  html+='</div>';
  
  // 官方区分页
  html+='<div class="forum-pagination-section">'+
    '<span class="forum-pagination-label">官方公告分页</span>'+
    '<div class="forum-pagination">';
  for(let i=1;i<=officialTotalPages;i++){
    html+='<button class="forum-page-btn '+(i===forumState.officialPage?'active':'')+'" onclick="changeForumPage(\'official\','+i+')">'+i+'</button>';
  }
  html+='</div></div>';
  html+='</div>';
  
  // 用户主题区
  const userTotalPages = Math.ceil(forumUserPosts.length / forumState.pageSize);
  const userStart = (forumState.userPage - 1) * forumState.pageSize;
  const userPagePosts = forumUserPosts.slice(userStart, userStart + forumState.pageSize);
  
  html+='<div class="forum-section user-section">'+
    '<div class="forum-section-header">'+
      '<div class="forum-section-title">'+
        '<span class="forum-badge user">用户主题</span>'+
        '<h2>热门讨论</h2>'+
      '</div>'+
      '<button class="forum-new-post-btn" onclick="showNewPostModal()">'+
        '<span>+</span> 发帖</button>'+
    '</div>'+
    '<div class="forum-user-list">';
  
  userPagePosts.forEach(function(post){
    html+='<div class="forum-user-item" onclick="showForumDetail(\''+post.id+'\',false)">'+
      '<div class="forum-user-avatar" style="background:'+post.avatar_color+'">'+post.author.charAt(0)+'</div>'+
      '<div class="forum-user-content">'+
        '<h4 class="forum-user-title">'+post.title+'</h4>'+
        '<p class="forum-user-excerpt">'+post.excerpt+'</p>'+
        '<div class="forum-user-meta">'+
          '<span class="forum-user-name">'+post.author+'</span>'+
          '<span class="forum-user-time">'+post.time+'</span>'+
        '</div>'+
      '</div>'+
      '<div class="forum-user-stats">'+
        '<div class="forum-stat-item">'+
          '<span class="forum-stat-value">'+post.replies+'</span>'+
          '<span class="forum-stat-label">回复</span>'+
        '</div>'+
        '<div class="forum-stat-item">'+
          '<span class="forum-stat-value">'+post.views+'</span>'+
          '<span class="forum-stat-label">浏览</span>'+
        '</div>'+
        '<div class="forum-stat-item">'+
          '<span class="forum-stat-value">'+post.likes+'</span>'+
          '<span class="forum-stat-label">点赞</span>'+
        '</div>'+
      '</div>'+
    '</div>';
  });
  
  html+='</div>';
  
  // 用户区分页
  html+='<div class="forum-pagination-section">'+
    '<span class="forum-pagination-label">用户讨论分页</span>'+
    '<div class="forum-pagination">';
  for(let i=1;i<=userTotalPages;i++){
    html+='<button class="forum-page-btn '+(i===forumState.userPage?'active':'')+'" onclick="changeForumPage(\'user\','+i+')">'+i+'</button>';
  }
  html+='</div></div>';
  html+='</div>';
  
  html+='</div>';
  
  $('categoryContent').innerHTML=html;
}

function changeForumPage(type,page){
  if(type==='official'){
    forumState.officialPage=page;
  }else{
    forumState.userPage=page;
  }
  renderForumPage();
  window.scrollTo({top:0,behavior:'smooth'});
}

/* ============ 渲染：任务悬赏页面 ============ */
function renderTaskPage(){
  let html='<div class="task-page-container">';
  
  html+='<div class="task-page-header">'+
    '<div class="task-stats">'+
      '<div class="task-stat-item">'+
        '<span class="task-stat-num">'+taskBounties.length+'</span>'+
        '<span class="task-stat-label">进行中任务</span>'+
      '</div>'+
      '<div class="task-stat-item">'+
        '<span class="task-stat-num">'+taskBounties.reduce(function(s,t){return s+parseFloat(t.budget)},0)+'</span>'+
        '<span class="task-stat-label">悬赏总额(元)</span>'+
      '</div>'+
      '<div class="task-stat-item">'+
        '<span class="task-stat-num">'+taskBounties.reduce(function(s,t){return s+t.replies},0)+'</span>'+
        '<span class="task-stat-label">接单人数</span>'+
      '</div>'+
    '</div>'+
    '<button class="task-publish-btn" onclick="showPublishTaskModal()">+ 发布任务</button>'+
  '</div>';
  
  html+='<div class="task-filter-bar">'+
    '<div class="task-filter-group">'+
      '<span class="task-filter-label">状态</span>'+
      '<button class="task-filter-btn active">全部</button>'+
      '<button class="task-filter-btn">招募中</button>'+
      '<button class="task-filter-btn">进行中</button>'+
      '<button class="task-filter-btn">已完成</button>'+
    '</div>'+
    '<div class="task-filter-group">'+
      '<span class="task-filter-label">排序</span>'+
      '<button class="task-filter-btn active">最新发布</button>'+
      '<button class="task-filter-btn">金额最高</button>'+
      '<button class="task-filter-btn">截止最近</button>'+
    '</div>'+
  '</div>';
  
  html+='<div class="task-list">';
  taskBounties.forEach(function(task){
    const statusClass=task.status==='招募中'?'open':'progress';
    const budgetText=task.budget_type==='按字数'?task.budget+'元/千字':task.budget+'元';
    
    html+='<div class="task-card" onclick="showTaskDetail(\''+task.id+'\')">'+
      '<div class="task-card-header">'+
        '<span class="task-status '+statusClass+'">'+task.status+'</span>'+
        '<span class="task-deadline">截止: '+task.deadline+'</span>'+
      '</div>'+
      '<h3 class="task-title">'+task.title+'</h3>'+
      '<p class="task-desc">'+task.description+'</p>'+
      '<div class="task-skills">'+task.skills.map(function(s){return '<span class="task-skill">'+s+'</span>'}).join('')+'</div>'+
      '<div class="task-card-footer">'+
        '<div class="task-budget">'+
          '<span class="task-budget-label">悬赏金额</span>'+
          '<span class="task-budget-value">'+budgetText+'</span>'+
        '</div>'+
        '<div class="task-meta">'+
          '<div class="task-publisher">'+
            '<div class="forum-avatar" style="background:'+task.publisher_avatar+'">'+task.publisher.charAt(0)+'</div>'+
            '<span>'+task.publisher+'</span>'+
          '</div>'+
          '<span class="task-replies">👥 '+task.replies+' 人接单</span>'+
        '</div>'+
      '</div>'+
    '</div>';
  });
  html+='</div>';
  
  html+='</div>';
  
  $('categoryContent').innerHTML=html;
}

/* ============ 渲染：AI工具页面 ============ */
function renderAIToolsPage(){
  let html='';
  
  html+='<div class="ai-page-header">'+
    '<div class="ai-page-headline">'+
      '<h2 class="ai-page-title">AI创作工坊</h2>'+
      '<p class="ai-page-desc">选择你喜欢的AI工具，一键生成精彩内容</p>'+
    '</div>'+
    '<div class="ai-coin-balance">'+
      '<span>我的金币</span>'+
      '<strong>128</strong>'+
      '<button class="ai-coin-btn">充值</button>'+
    '</div>'+
  '</div>';
  
  html+='<div class="ai-grid">';
  aiTools.forEach(function(tool){
    const authorInitial=tool.author.charAt(0);
    const tagsHtml=tool.tags.map(function(tag,i){
      const tagClass=tag==='推荐'?'ai-tag-recommend':(tag==='视频'?'ai-tag-video':'ai-tag-normal');
      return '<span class="ai-card-tag '+tagClass+'">'+tag+'</span>';
    }).join('');
    
    html+='<div class="ai-card" onclick="showAIToolDetail(\''+tool.id+'\')">'+
      '<div class="ai-card-image">'+
        '<img src="'+tool.image+'" alt="'+tool.name+'" loading="lazy">'+
        '<div class="ai-card-tags">'+tagsHtml+'</div>'+
        (tool.isVideo?'<div class="ai-card-video-badge">▶</div>':'')+
      '</div>'+
      '<div class="ai-card-body">'+
        '<h3 class="ai-card-title">'+tool.name+'</h3>'+
        '<div class="ai-card-meta">'+
          '<span class="ai-card-author-inline">'+
            '<span class="ai-author-avatar small" style="background:'+tool.author_avatar+'">'+authorInitial+'</span>'+
            '<span>'+tool.author+'</span>'+
          '</span>'+
        '</div>'+
        '<div class="ai-card-stats">'+
          '<span class="ai-stat-item">👁 '+formatNumber(tool.views)+'</span>'+
          '<span class="ai-stat-item">👍 '+formatNumber(tool.likes)+'</span>'+
          '<span class="ai-stat-item">⭐ '+formatNumber(tool.favorites)+'</span>'+
          '<span class="ai-stat-item">💬 '+tool.reviews+'</span>'+
        '</div>'+
      '</div>'+
    '</div>';
  });
  html+='</div>';
  
  $('categoryContent').innerHTML=html;
}

function formatNumber(num){
  if(num>=10000)return (num/10000).toFixed(1)+'w';
  if(num>=1000)return (num/1000).toFixed(1)+'k';
  return num.toString();
}

/* ============ 渲染：个人中心页面 ============ */
/* ============ 个人中心：扁平图标 ============ */
var PF_ICONS={
  history:'M13 3a9 9 0 00-9 9H1l3.9 3.9.1.1L9 12H6a7 7 0 117 7 6.9 6.9 0 01-4.9-2l-1.4 1.4A9 9 0 1013 3zm-1 5v5l4.3 2.5.7-1.2-3.5-2.1V8H12z',
  post:'M3 17.25V21h3.75L17.8 9.94l-3.75-3.75L3 17.25zM20.7 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z',
  comment:'M20 2H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2zM7 9h10v2H7V9zm6 5H7v-2h6v2zm4-6H7V6h10v2z',
  star:'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z',
  bell:'M12 22a2 2 0 002-2h-4a2 2 0 002 2zm6-6V11a6 6 0 00-5-5.91V4a1 1 0 10-2 0v1.09A6 6 0 006 11v5l-2 2v1h16v-1l-2-2z',
  setting:'M19.14 12.94a7.07 7.07 0 000-1.88l2.03-1.58a.5.5 0 00.12-.64l-1.92-3.32a.5.5 0 00-.61-.22l-2.39.96a7.03 7.03 0 00-1.62-.94l-.36-2.54a.5.5 0 00-.5-.42h-3.84a.5.5 0 00-.5.42l-.36 2.54c-.58.24-1.12.55-1.62.94l-2.39-.96a.5.5 0 00-.61.22L2.65 8.84a.5.5 0 00.12.64l2.03 1.58a7.07 7.07 0 000 1.88L2.77 14.5a.5.5 0 00-.12.64l1.92 3.32a.5.5 0 00.61.22l2.39-.96c.5.39 1.04.7 1.62.94l.36 2.54a.5.5 0 00.5.42h3.84a.5.5 0 00.5-.42l.36-2.54c.58-.24 1.12-.55 1.62-.94l2.39.96a.5.5 0 00.61-.22l1.92-3.32a.5.5 0 00-.12-.64l-2.03-1.56zM12 15.5A3.5 3.5 0 1112 8.5a3.5 3.5 0 010 7z',
  heart:'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5A5.5 5.5 0 016.5 3c1.74 0 3.41.81 4.5 2.09A6 6 0 0117.5 3 5.5 5.5 0 0122 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
  reply:'M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z',
  sys:'M11 7h2v2h-2V7zm0 4h2v6h-2v-6zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18a8 8 0 110-16 8 8 0 010 16z',
  fans:'M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z',
  box:'M20 6h-8l-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2z'
};
function pfIco(k,cls){
  return '<svg class="'+(cls||'nav-ico')+'" viewBox="0 0 24 24"><path d="'+(PF_ICONS[k]||'')+'"/></svg>';
}
function pfLS(key){
  try{const s=localStorage.getItem(key);const v=s?JSON.parse(s):[];return Array.isArray(v)?v:[];}catch(e){return [];}
}
/* 从站点真实数据里取样，方便预览效果 */
function pfSample(n){
  let pool=[];
  try{
    if(typeof articles!=='undefined')pool=pool.concat(articles);
    if(typeof guas!=='undefined')pool=pool.concat(guas);
    if(typeof videos!=='undefined')pool=pool.concat(videos);
  }catch(e){}
  return pool.slice(0,n);
}
function pfEmpty(ico,text,btn,hash){
  return '<div class="profile-empty">'+
    pfIco(ico,'profile-empty-ico')+
    '<p style="color:#8a7a6a;font-size:14px;margin-bottom:18px">'+text+'</p>'+
    (btn?'<button class="profile-empty-btn" onclick="window.location.hash=\''+hash+'\'">'+btn+'</button>':'')+
  '</div>';
}
/* ---- Tab 1 浏览历史 ---- */
function pfTabHistory(){
  const list=getHistory();
  let h='<div class="profile-section-title">浏览历史'+
    (list.length?'<span class="sec-act" onclick="pfClearHistory()">清空记录</span>':'')+'</div>';
  if(!list.length)return h+pfEmpty('history','暂无浏览记录','去首页看看','#/home');
  h+='<div class="pf-list">';
  list.slice(0,30).forEach(function(it){
    const t=new Date(it.time||Date.now());
    const ts=t.toLocaleString('zh-CN',{month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit'});
    h+='<div class="pf-row" onclick="window.location.hash=\'#'+it.url+'\'">'+
      '<div class="pf-row-body">'+
        '<div class="pf-row-title">'+(it.title||'未命名')+'</div>'+
        '<div class="pf-row-meta"><span class="pf-badge">'+(it.type||'内容')+'</span>'+
          '<span class="dot"></span><span>'+ts+'</span></div>'+
      '</div></div>';
  });
  return h+'</div>';
}
function pfClearHistory(){
  if(!confirm('确定清空全部浏览记录？'))return;
  try{localStorage.removeItem('browseHistory');}catch(e){}
  pfSwitch('history');
}
/* ---- Tab 2 我的发布 ---- */
function pfTabPosts(){
  let list=pfLS('myPosts');
  if(!list.length){
    list=pfSample(4).map(function(x,i){
      return {title:x.title,excerpt:x.excerpt||x.subtitle||'',cover:x.cover||'',
              views:x.views||0,likes:20+i*13,comments:3+i*5,
              time:'0'+(3+i)+'-1'+i+' 1'+i+':2'+i,
              status:i===3?'审核中':'已发布',url:'#/article/'+x.id};
    });
  }
  let h='<div class="profile-section-title">我的发布'+
    '<span class="sec-act" onclick="showNewPostModal()">+ 发布新帖</span></div>';
  if(!list.length)return h+pfEmpty('post','还没有发布过内容','立即发帖','#/category/极极论坛');
  h+='<div class="pf-list">';
  list.forEach(function(p,i){
    const badge=p.status==='审核中'?'<span class="pf-badge wait">审核中</span>':'<span class="pf-badge ok">已发布</span>';
    h+='<div class="pf-row">'+
      (p.cover?'<div class="pf-row-thumb"><img src="'+p.cover+'" alt="" loading="lazy"></div>':'')+
      '<div class="pf-row-body" onclick="window.location.hash=\''+(p.url||'#/home')+'\'">'+
        '<div class="pf-row-title">'+p.title+'</div>'+
        (p.excerpt?'<div class="pf-row-excerpt">'+p.excerpt+'</div>':'')+
        '<div class="pf-row-meta">'+badge+
          '<span class="dot"></span><span>'+(p.views||0)+' 浏览</span>'+
          '<span class="dot"></span><span>'+(p.likes||0)+' 赞</span>'+
          '<span class="dot"></span><span>'+(p.comments||0)+' 评论</span>'+
          '<span class="dot"></span><span>'+(p.time||'')+'</span>'+
        '</div>'+
      '</div>'+
      '<div class="pf-row-actions">'+
        '<button class="pf-mini-btn" onclick="alert(\'编辑功能开发中\')">编辑</button>'+
        '<button class="pf-mini-btn danger" onclick="pfDelPost('+i+')">删除</button>'+
      '</div></div>';
  });
  return h+'</div>';
}
function pfDelPost(i){
  if(!confirm('确定删除这条发布？'))return;
  const list=pfLS('myPosts');
  if(list.length>i){list.splice(i,1);try{localStorage.setItem('myPosts',JSON.stringify(list));}catch(e){}}
  pfSwitch('posts');
}
/* ---- Tab 3 我的评论 ---- */
function pfTabComments(){
  let list=pfLS('myComments');
  if(!list.length){
    list=pfSample(4).map(function(x,i){
      return {text:['说得太对了，我也是这么想的。','这个资源刚看完，质量确实不错，感谢分享。',
                    '前排围观，等更新。','有没有后续进展？想知道结果。'][i],
              source:x.title,likes:5+i*7,time:'0'+(4+i)+'-2'+i+' 0'+i+':3'+i,
              url:'#/article/'+x.id};
    });
  }
  let h='<div class="profile-section-title">我的评论<span class="sec-act">共 '+list.length+' 条</span></div>';
  if(!list.length)return h+pfEmpty('comment','还没有发表过评论','去逛逛','#/home');
  h+='<div class="pf-list">';
  list.forEach(function(c,i){
    h+='<div class="pf-row">'+
      '<div class="pf-row-body" onclick="window.location.hash=\''+(c.url||'#/home')+'\'">'+
        '<div class="pf-row-title" style="-webkit-line-clamp:3">'+(c.text||'')+'</div>'+
        '<div class="pf-quote">原文：'+(c.source||'已删除的内容')+'</div>'+
        '<div class="pf-row-meta"><span>'+(c.likes||0)+' 赞</span>'+
          '<span class="dot"></span><span>'+(c.time||'')+'</span></div>'+
      '</div>'+
      '<div class="pf-row-actions">'+
        '<button class="pf-mini-btn danger" onclick="pfDelComment('+i+')">删除</button>'+
      '</div></div>';
  });
  return h+'</div>';
}
function pfDelComment(i){
  if(!confirm('确定删除这条评论？'))return;
  const list=pfLS('myComments');
  if(list.length>i){list.splice(i,1);try{localStorage.setItem('myComments',JSON.stringify(list));}catch(e){}}
  pfSwitch('comments');
}
/* ---- Tab 4 我的收藏 ---- */
function pfTabFav(){
  let list=pfLS('myFavorites');
  if(!list.length){
    list=pfSample(5).map(function(x){
      return {title:x.title,excerpt:x.excerpt||x.subtitle||'',cover:x.cover||'',
              type:x.category||'内容',views:x.views||0,
              url:(x.excerpt!==undefined?'#/article/':'#/video/')+x.id};
    });
  }
  let h='<div class="profile-section-title">我的收藏<span class="sec-act">共 '+list.length+' 项</span></div>';
  if(!list.length)return h+pfEmpty('star','收藏夹还是空的','去发现好内容','#/home');
  h+='<div class="pf-list">';
  list.forEach(function(f,i){
    h+='<div class="pf-row">'+
      (f.cover?'<div class="pf-row-thumb"><img src="'+f.cover+'" alt="" loading="lazy"></div>':'')+
      '<div class="pf-row-body" onclick="window.location.hash=\''+(f.url||'#/home')+'\'">'+
        '<div class="pf-row-title">'+f.title+'</div>'+
        (f.excerpt?'<div class="pf-row-excerpt">'+f.excerpt+'</div>':'')+
        '<div class="pf-row-meta"><span class="pf-badge">'+(f.type||'内容')+'</span>'+
          '<span class="dot"></span><span>'+(f.views||0)+' 浏览</span></div>'+
      '</div>'+
      '<div class="pf-row-actions">'+
        '<button class="pf-mini-btn danger" onclick="pfDelFav('+i+')">取消收藏</button>'+
      '</div></div>';
  });
  return h+'</div>';
}
function pfDelFav(i){
  const list=pfLS('myFavorites');
  if(list.length>i){list.splice(i,1);try{localStorage.setItem('myFavorites',JSON.stringify(list));}catch(e){}}
  pfSwitch('fav');
}
/* ---- Tab 5 消息通知 ---- */
function pfNotifData(){
  const s=pfSample(3);
  const t=function(i){return s[i]?s[i].title:'一条内容';};
  return [
    {k:'like',ico:'heart',text:'<strong>吃瓜小分队</strong> 赞了你的帖子「'+t(0)+'」',time:'3 分钟前',unread:true},
    {k:'reply',ico:'reply',text:'<strong>夜色温柔</strong> 回复了你的评论：说得有道理，我补充两点…',time:'1 小时前',unread:true},
    {k:'fans',ico:'fans',text:'<strong>老陈不加班</strong> 关注了你',time:'今天 09:24',unread:true},
    {k:'sys',ico:'sys',text:'你的投稿「'+t(1)+'」已通过审核，奖励 20 金币',time:'昨天 21:10',unread:false},
    {k:'like',ico:'heart',text:'<strong>七月的风</strong> 等 12 人赞了你的评论',time:'昨天 15:02',unread:false},
    {k:'sys',ico:'sys',text:'等级提升到 LV.8，解锁「自定义头像框」权限',time:'08-02',unread:false}
  ];
}
function pfTabNotif(){
  const list=pfNotifData();
  const unread=list.filter(function(x){return x.unread;}).length;
  let h='<div class="profile-section-title">消息通知'+
    '<span class="sec-act" onclick="pfReadAll()">全部标为已读'+(unread?'（'+unread+'）':'')+'</span></div>';
  h+='<div class="pf-list">';
  list.forEach(function(n){
    const read=pfIsRead(n.text);
    h+='<div class="pf-notif'+((n.unread&&!read)?' unread':'')+'" onclick="pfReadOne(this)">'+
      '<div class="pf-notif-ico '+n.k+'">'+pfIco(n.ico,'')+'</div>'+
      '<div class="pf-notif-body">'+
        '<div class="pf-notif-text">'+n.text+'</div>'+
        '<div class="pf-notif-time">'+n.time+'</div>'+
      '</div></div>';
  });
  return h+'</div>';
}
function pfIsRead(){try{return localStorage.getItem('notifAllRead')==='1';}catch(e){return false;}}
function pfReadAll(){
  try{localStorage.setItem('notifAllRead','1');}catch(e){}
  pfSwitch('notif');
  const b=document.querySelector('.profile-nav-badge');
  if(b)b.remove();
}
function pfReadOne(el){if(el)el.classList.remove('unread');}
/* ---- Tab 6 账号设置 ---- */
function pfTabSettings(){
  const u=getUserState();
  const sw=function(id,on){
    return '<button class="pf-switch'+(on?' on':'')+'" id="'+id+'" onclick="this.classList.toggle(\'on\')"></button>';
  };
  const item=function(label,hint,ctrl){
    return '<div class="pf-set-item"><div><div class="pf-set-label">'+label+'</div>'+
      (hint?'<div class="pf-set-hint">'+hint+'</div>':'')+'</div>'+ctrl+'</div>';
  };
  let h='<div class="profile-section-title">账号设置</div><div class="pf-settings">';
  h+='<div class="pf-set-group"><div class="pf-set-group-title">基本资料</div>'+
    item('昵称','其他用户看到的名字','<input class="pf-set-input" id="setName" value="'+(u.username||'塔先生')+'" maxlength="16">')+
    item('个性签名','最多 60 字','<input class="pf-set-input" id="setBio" placeholder="还没有签名" maxlength="60">')+
    item('邮箱','用于找回密码','<input class="pf-set-input" id="setMail" type="email" placeholder="you@example.com">')+
  '</div>';
  h+='<div class="pf-set-group"><div class="pf-set-group-title">消息与隐私</div>'+
    item('回复提醒','有人回复我的帖子或评论时通知我',sw('swReply',true))+
    item('点赞提醒','收到点赞时通知我',sw('swLike',true))+
    item('系统公告','审核结果、活动与等级变动',sw('swSys',true))+
    item('公开浏览历史','允许他人查看我看过的内容',sw('swHistory',false))+
    item('公开收藏夹','允许他人查看我的收藏',sw('swFav',false))+
  '</div>';
  h+='<div class="pf-set-group"><div class="pf-set-group-title">安全</div>'+
    item('修改密码','建议定期更换','<button class="pf-mini-btn" onclick="alert(\'请前往邮箱验证后修改\')">修改</button>')+
    item('登录设备','查看并移除已登录的设备','<button class="pf-mini-btn" onclick="alert(\'当前仅本机登录\')">查看</button>')+
    item('注销账号','注销后数据不可恢复','<button class="pf-mini-btn danger" onclick="alert(\'请联系客服办理\')">注销</button>')+
  '</div>';
  h+='<button class="pf-save-btn" onclick="pfSaveSettings()">保存设置</button></div>';
  return h;
}
function pfSaveSettings(){
  const n=document.getElementById('setName');
  const v=n?n.value.trim():'';
  if(!v){alert('昵称不能为空');if(n)n.focus();return;}
  try{
    const u=getUserState();u.username=v;
    localStorage.setItem('userState',JSON.stringify(u));
  }catch(e){}
  alert('设置已保存');
  renderProfilePage();
}
/* ---- Tab 调度 ---- */
var PF_TABS=[
  {k:'history', label:'浏览历史', ico:'history', fn:pfTabHistory},
  {k:'posts',   label:'我的发布', ico:'post',    fn:pfTabPosts},
  {k:'comments',label:'我的评论', ico:'comment', fn:pfTabComments},
  {k:'fav',     label:'我的收藏', ico:'star',    fn:pfTabFav},
  {k:'notif',   label:'消息通知', ico:'bell',    fn:pfTabNotif},
  {k:'set',     label:'账号设置', ico:'setting', fn:pfTabSettings}
];
var pfActiveTab='history';
function pfSwitch(k){
  pfActiveTab=k;
  const box=document.getElementById('pfContent');
  const tab=PF_TABS.filter(function(t){return t.k===k;})[0]||PF_TABS[0];
  if(box)box.innerHTML=tab.fn();
  document.querySelectorAll('.profile-nav-item').forEach(function(el){
    el.classList.toggle('active',el.getAttribute('data-tab')===k);
  });
  if(box)box.scrollIntoView({behavior:'smooth',block:'nearest'});
}
function renderProfilePage(){
  const userData=getUserState();
  const history=getHistory();
  const myPosts=getMyPosts();
  const myComments=getMyComments();
  const unread=pfIsRead()?0:3;

  let html='';
  html+='<div class="profile-header">'+
    '<div class="profile-avatar">'+(userData.username||'用').charAt(0)+'</div>'+
    '<div class="profile-info">'+
      '<h2 class="profile-name">'+(userData.username||'塔先生')+'</h2>'+
      '<div class="profile-level">'+
        '<span class="level-badge">LV.'+(userData.level||8)+'</span>'+
        '<span class="level-progress"><div class="level-bar" style="width:68%"></div></span>'+
        '<span class="level-exp">6800/10000</span>'+
      '</div>'+
      '<div class="profile-stats">'+
        '<div class="profile-stat"><span class="profile-stat-num">'+myPosts+'</span><span class="profile-stat-label">发布</span></div>'+
        '<div class="profile-stat"><span class="profile-stat-num">'+myComments+'</span><span class="profile-stat-label">评论</span></div>'+
        '<div class="profile-stat"><span class="profile-stat-num">'+history.length+'</span><span class="profile-stat-label">浏览</span></div>'+
        '<div class="profile-stat"><span class="profile-stat-num">128</span><span class="profile-stat-label">金币</span></div>'+
      '</div>'+
    '</div>'+
  '</div>';

  html+='<div class="profile-nav">';
  PF_TABS.forEach(function(t){
    const badge=(t.k==='notif'&&unread)?'<span class="profile-nav-badge">'+unread+'</span>':'';
    html+='<button class="profile-nav-item'+(t.k===pfActiveTab?' active':'')+'" '+
      'data-tab="'+t.k+'" onclick="pfSwitch(\''+t.k+'\')">'+
      pfIco(t.ico)+'<span>'+t.label+'</span>'+badge+'</button>';
  });
  html+='</div>';

  const cur=PF_TABS.filter(function(t){return t.k===pfActiveTab;})[0]||PF_TABS[0];
  html+='<div class="profile-content" id="pfContent">'+cur.fn()+'</div>';

  $('categoryContent').innerHTML=html;
}

/* ============ 辅助函数 ============ */
function getUserState(){
  try{
    const saved=localStorage.getItem('userState');
    return saved?JSON.parse(saved):{username:'塔先生',level:8};
  }catch(e){return {username:'塔先生',level:8};}
}

function getHistory(){
  try{
    const saved=localStorage.getItem('browseHistory');
    return saved?JSON.parse(saved):[];
  }catch(e){return [];}
}

function getMyPosts(){
  try{
    const saved=localStorage.getItem('myPosts');
    return saved?JSON.parse(saved).length:0;
  }catch(e){return 0;}
}

function getMyComments(){
  try{
    const saved=localStorage.getItem('myComments');
    return saved?JSON.parse(saved).length:0;
  }catch(e){return 0;}
}

/* ============ 论坛状态 ============ */
let forumInteractionState = {};

/* ============ 全页面详情 ============ */
function showForumDetail(id,isOfficial){
  const post=isOfficial?forumOfficialPosts.find(function(p){return p.id===id}):forumUserPosts.find(function(p){return p.id===id});
  if(!post)return;
  
  // 初始化或获取交互状态
  if(!forumInteractionState[id]){
    forumInteractionState[id] = {liked:false, favorited:false, likes: post.likes || 0};
  }
  const state = forumInteractionState[id];
  
  const contentEl=$('categoryContent');
  
  let html='<div class="forum-detail-page">'+
    '<div class="forum-detail-header">'+
      '<button class="forum-detail-back-btn" onclick="renderForumPage()">← 返回列表</button>'+
    '</div>'+
    '<div class="forum-detail-body">';
  
  if(isOfficial){
    html+='<article class="forum-article">'+
      '<div class="forum-article-header">'+
        '<div class="forum-article-meta">'+
          '<div class="forum-official-author">'+
            '<div class="forum-avatar" style="background:'+post.avatar_color+'">'+post.author.charAt(0)+'</div>'+
            '<span class="forum-detail-author">'+post.author+'</span>'+
          '</div>'+
          '<span class="forum-detail-time">'+post.time+'</span>'+
          '<span class="forum-detail-views">阅读 '+post.views.toLocaleString()+'</span>'+
        '</div>'+
        '<div class="forum-detail-tags">'+
          (post.tags||[]).map(function(t){return '<span class="forum-tag">'+t+'</span>'}).join('')+
        '</div>'+
      '</div>'+
      '<h1 class="forum-article-title">'+post.title+'</h1>'+
      '<div class="forum-article-content">'+post.content+'</div>'+
    '</article>';
  }else{
    html+='<article class="forum-article">'+
      '<div class="forum-article-header">'+
        '<div class="forum-article-meta">'+
          '<div class="forum-official-author">'+
            '<div class="forum-avatar" style="background:'+post.avatar_color+'">'+post.author.charAt(0)+'</div>'+
            '<span class="forum-detail-author">'+post.author+'</span>'+
          '</div>'+
          '<span class="forum-detail-time">'+post.time+'</span>'+
          '<span class="forum-detail-views">阅读 '+post.views+'</span>'+
          '<span class="forum-detail-likes">'+(post.likes||0)+' 点赞</span>'+
        '</div>'+
      '</div>'+
      '<h1 class="forum-article-title">'+post.title+'</h1>'+
      '<div class="forum-article-content">'+post.excerpt+'</div>'+
    '</article>';
  }
  
  html+='<div class="forum-article-actions">'+
    '<button class="forum-action-btn'+(state.liked?' active':'')+'" onclick="toggleForumLike(\''+id+'\')" id="likeBtn_'+id+'">'+
      (state.liked?'❤️':'👍')+' '+(state.likes)+'</button>'+
    '<button class="forum-action-btn'+(state.favorited?' active':'')+'" onclick="toggleForumFavorite(\''+id+'\')" id="favBtn_'+id+'">'+
      (state.favorited?'⭐️':'⭐')+' '+(state.favorited?'已收藏':'收藏')+'</button>'+
    '<button class="forum-action-btn" onclick="shareForumPost(\''+id+'\')">🔗 分享</button>'+
  '</div>';
  
  html+='<div class="forum-comments-section">'+
    '<h3 class="forum-comments-title">全部评论 ('+(post.replies||0)+')</h3>'+
    '<div class="forum-comment-input">'+
      '<textarea id="commentInput_'+id+'" placeholder="写下你的评论..."></textarea>'+
      '<button class="forum-comment-btn" onclick="submitForumComment(\''+id+'\')">发表评论</button>'+
    '</div>'+
    '<div class="forum-comments-list">';
  
  for(let i=0;i<Math.min(5,post.replies||0);i++){
    const commentLiked = forumInteractionState[id+'_c'+i] ? forumInteractionState[id+'_c'+i].liked : false;
    const commentLikes = forumInteractionState[id+'_c'+i] ? forumInteractionState[id+'_c'+i].likes : 128;
    html+='<div class="forum-comment-item">'+
      '<div class="forum-avatar small" style="background:#e0e0e0;color:#666">用</div>'+
      '<div class="forum-comment-body">'+
        '<div class="forum-comment-meta">'+
          '<span class="forum-comment-author">用户'+(i+1)+'</span>'+
          '<span class="forum-comment-time">2小时前</span>'+
        '</div>'+
        '<p class="forum-comment-content">这是一个很棒的帖子，非常感谢分享！期待更多这样的内容。</p>'+
        '<div class="forum-comment-actions">'+
          '<button onclick="toggleCommentLike(\''+id+'\','+i+')" class="'+(commentLiked?'liked':'')+'">'+
            (commentLiked?'❤️':'👍')+' '+commentLikes+'</button>'+
          '<button>🚫 举报</button>'+
          '<button>💬 回复</button>'+
        '</div>'+
      '</div>'+
    '</div>';
  }
  
  html+='</div></div>'+
    '</div>'+
  '</div>';
  
  contentEl.innerHTML=html;
  window.scrollTo(0,0);
}

function toggleForumLike(id){
  if(!forumInteractionState[id]){
    forumInteractionState[id] = {liked:false, favorited:false, likes:0};
  }
  forumInteractionState[id].liked = !forumInteractionState[id].liked;
  if(forumInteractionState[id].liked){
    forumInteractionState[id].likes++;
  }else{
    forumInteractionState[id].likes--;
  }
  showForumDetail(id, forumOfficialPosts.some(function(p){return p.id===id}));
}

function toggleForumFavorite(id){
  if(!forumInteractionState[id]){
    forumInteractionState[id] = {liked:false, favorited:false, likes:0};
  }
  forumInteractionState[id].favorited = !forumInteractionState[id].favorited;
  showForumDetail(id, forumOfficialPosts.some(function(p){return p.id===id}));
}

function shareForumPost(id){
  alert('分享链接已复制到剪贴板！\n帖子ID: ' + id);
}

function submitForumComment(id){
  const input = document.getElementById('commentInput_'+id);
  if(input && input.value.trim()){
    alert('评论发布成功！');
    input.value = '';
  }else{
    alert('请输入评论内容');
  }
}

function toggleCommentLike(postId, commentIdx){
  const stateKey = postId + '_c' + commentIdx;
  if(!forumInteractionState[stateKey]){
    forumInteractionState[stateKey] = {liked:false, likes:128};
  }
  forumInteractionState[stateKey].liked = !forumInteractionState[stateKey].liked;
  if(forumInteractionState[stateKey].liked){
    forumInteractionState[stateKey].likes++;
  }else{
    forumInteractionState[stateKey].likes--;
  }
  showForumDetail(postId, forumOfficialPosts.some(function(p){return p.id===postId}));
}

function showTaskDetail(id){
  const task=taskBounties.find(function(t){return t.id===id});
  if(!task)return;
  
  const budgetText=task.budget_type==='按字数'?task.budget+'元/千字':task.budget+'元';
  const contentEl=$('categoryContent');
  
  let html='<div class="task-detail-container">'+
    '<button class="task-detail-back-btn" onclick="renderTaskPage()">← 返回列表</button>'+
    '<div class="task-detail-page">'+
      '<div class="task-detail-main">'+
        '<div class="task-detail-header">'+
          '<span class="task-status '+(task.status==='招募中'?'open':'progress')+'">'+task.status+'</span>'+
          '<span class="task-detail-deadline">📅 截止: '+task.deadline+'</span>'+
        '</div>'+
        '<h1 class="task-detail-title">'+task.title+'</h1>'+
        '<div class="task-detail-budget-row">'+
          '<div class="task-detail-budget">'+
            '<span class="task-detail-budget-label">悬赏金额</span>'+
            '<span class="task-detail-budget-value">'+budgetText+'</span>'+
          '</div>'+
          '<div class="task-detail-stats">'+
            '<span>👁 '+task.views+' 浏览</span>'+
            '<span>💬 '+task.replies+' 接单</span>'+
          '</div>'+
        '</div>'+
        '<div class="task-detail-section">'+
          '<h3>任务描述</h3>'+
          '<p>'+task.description+'</p>'+
        '</div>'+
        '<div class="task-detail-section">'+
          '<h3>技能要求</h3>'+
          '<div class="task-skills">'+
            task.skills.map(function(s){return '<span class="task-skill-tag">'+s+'</span>'}).join('')+
          '</div>'+
          '<p class="task-requirements">'+task.requirements+'</p>'+
        '</div>'+
        '<div class="task-detail-section">'+
          '<h3>发布者信息</h3>'+
          '<div class="task-publisher">'+
            '<div class="forum-avatar" style="background:'+task.publisher_avatar+'">'+task.publisher.charAt(0)+'</div>'+
            '<div class="task-publisher-info">'+
              '<span class="task-publisher-name">'+task.publisher+'</span>'+
              '<span class="task-publisher-time">发布于 '+task.publish_time+'</span>'+
            '</div>'+
          '</div>'+
        '</div>'+
        '<div class="task-detail-actions">'+
          '<button class="task-apply-btn" onclick="alert(\'申请已提交！\')">立即接单</button>'+
          '<button class="task-contact-btn">📞 联系发布者</button>'+
          '<button class="task-favorite-btn">⭐ 收藏任务</button>'+
        '</div>'+
      '</div>'+
      '<div class="task-detail-sidebar">'+
        '<div class="task-sidebar-card">'+
          '<h4>任务进度</h4>'+
          '<div class="task-progress">'+
            '<div class="progress-bar">'+
              '<div class="progress-fill" style="width:'+(task.status==='进行中'?'60%':'20%')+'"></div>'+
            '</div>'+
            '<span>'+task.replies+' 人已申请</span>'+
          '</div>'+
        '</div>'+
        '<div class="task-sidebar-card">'+
          '<h4>相关任务推荐</h4>'+
          '<div class="task-related-list">';
  
  taskBounties.filter(function(t){return t.id!==id}).slice(0,3).forEach(function(t){
    html+='<div class="task-related-item" onclick="showTaskDetail(\''+t.id+'\')">'+
      '<span class="task-related-status '+(t.status==='招募中'?'open':'progress')+'">'+t.status+'</span>'+
      '<span class="task-related-title">'+t.title+'</span>'+
      '<span class="task-related-budget">'+t.budget+'元</span>'+
    '</div>';
  });
  
  html+='</div>'+
        '</div>'+
        '<div class="task-sidebar-card">'+
          '<h4>评论与评价</h4>'+
          '<div class="task-comments-list">';
  
  for(let i=0;i<Math.min(3,task.replies);i++){
    html+='<div class="task-comment-item">'+
      '<div class="forum-avatar small" style="background:#ccc">接</div>'+
      '<div class="task-comment-body">'+
        '<div class="task-comment-meta">'+
          '<span class="task-comment-author">接单者'+(i+1)+'</span>'+
          '<span class="task-comment-time">3天前</span>'+
        '</div>'+
        '<p class="task-comment-content">已提交作品，期待审核！</p>'+
      '</div>'+
    '</div>';
  }
  
  html+='</div>'+
        '</div>'+
      '</div>'+
    '</div>'+
  '</div>';
  
  contentEl.innerHTML=html;
  window.scrollTo(0,0);
}

function showAIToolDetail(id){
  const tool=aiTools.find(function(t){return t.id===id});
  if(!tool)return;
  
  const authorInitial=tool.author.charAt(0);
  
  // 生成参数配置表单
  let paramsHtml='';
  let totalPrice=tool.price;
  
  if(tool.params){
    tool.params.forEach(function(param){
      switch(param.type){
        case 'upload':
          paramsHtml+='<div class="ai-param-item">'+
            '<label class="ai-param-label">'+param.label+'</label>'+
            '<div class="ai-param-upload" onclick="this.querySelector(\'input\').click()">'+
              '<input type="file" style="display:none" accept="image/*" onchange="previewUpload(this)">'+
              '<div class="ai-upload-placeholder">'+
                '<span class="ai-upload-icon-sm">📷</span>'+
                '<span>点击上传或拖拽图片到此处</span>'+
              '</div>'+
            '</div>'+
          '</div>';
          break;
          
        case 'multi_upload':
          paramsHtml+='<div class="ai-param-item">'+
            '<label class="ai-param-label">'+param.label+'</label>'+
            '<div class="ai-multi-upload">'+
              '<div class="ai-upload-grid" id="multiUploadGrid">';
          for(let i=0;i<param.max;i++){
            paramsHtml+='<div class="ai-upload-slot" onclick="this.querySelector(\'input\').click()">'+
              '<input type="file" style="display:none" accept="image/*" onchange="previewMultiUpload(this, '+param.max+')">'+
              '<div class="ai-upload-placeholder-sm">'+
                '<span class="ai-upload-icon-sm">📷</span>'+
                '<span>参考图'+(i+1)+'</span>'+
              '</div>'+
            '</div>';
          }
          paramsHtml+='</div>'+
            '<div class="ai-upload-hint">最多上传 '+param.max+' 张参考图</div>'+
          '</div>'+
        '</div>';
          break;
          
        case 'upload_video':
          paramsHtml+='<div class="ai-param-item">'+
            '<label class="ai-param-label">'+param.label+'</label>'+
            '<div class="ai-param-upload" onclick="this.querySelector(\'input\').click()">'+
              '<input type="file" style="display:none" accept="video/*">'+
              '<div class="ai-upload-placeholder">'+
                '<span class="ai-upload-icon-sm">🎬</span>'+
                '<span>点击上传视频文件</span>'+
              '</div>'+
            '</div>'+
          '</div>';
          break;
          
        case 'upload_audio':
          paramsHtml+='<div class="ai-param-item">'+
            '<label class="ai-param-label">'+param.label+'</label>'+
            '<div class="ai-param-upload" onclick="this.querySelector(\'input\').click()">'+
              '<input type="file" style="display:none" accept="audio/*">'+
              '<div class="ai-upload-placeholder">'+
                '<span class="ai-upload-icon-sm">🎤</span>'+
                '<span>点击上传音频文件（建议10-30秒）</span>'+
              '</div>'+
            '</div>'+
          '</div>';
          break;
          
        case 'textarea':
          paramsHtml+='<div class="ai-param-item">'+
            '<label class="ai-param-label">'+param.label+'</label>'+
            '<textarea class="ai-param-textarea" placeholder="'+(param.placeholder||'请输入...')+'" rows="4"></textarea>'+
          '</div>';
          break;
          
        case 'select':
          let optionsHtml=param.options.map(function(opt){
            return '<option value="'+opt+'">'+opt+'</option>';
          }).join('');
          paramsHtml+='<div class="ai-param-item">'+
            '<label class="ai-param-label">'+param.label+'</label>'+
            '<select class="ai-param-select">'+optionsHtml+'</select>'+
          '</div>';
          break;
          
        case 'slider':
          paramsHtml+='<div class="ai-param-item">'+
            '<label class="ai-param-label">'+param.label+' <span class="ai-param-value">'+param.default+'</span></label>'+
            '<input type="range" class="ai-param-slider" min="'+param.min+'" max="'+param.max+'" value="'+param.default+'">'+
          '</div>';
          break;
          
        case 'ratio':
        case 'video_ratio':
          let ratios=param.options;
          paramsHtml+='<div class="ai-param-item">'+
            '<label class="ai-param-label">'+param.label+'</label>'+
            '<div class="ai-ratio-selector">';
          ratios.forEach(function(ratio,idx){
            const isActive=idx===0?' active':'';
            const dimensions=getRatioDimensions(ratio);
            paramsHtml+='<div class="ai-ratio-item'+isActive+'" onclick="selectRatio(this, \''+ratio+'\')">'+
              '<div class="ai-ratio-preview" style="width:'+dimensions.w+'px;height:'+dimensions.h+'px"></div>'+
              '<span class="ai-ratio-label">'+ratio+'</span>'+
            '</div>';
          });
          paramsHtml+='</div>'+
          '</div>';
          // 自定义比例输入框
          if(param.type==='ratio'){
            paramsHtml+='<div class="ai-param-item ai-custom-ratio-item" style="display:none">'+
              '<label class="ai-param-label">自定义比例 (宽:高)</label>'+
              '<div class="ai-custom-ratio-input">'+
                '<input type="number" placeholder="宽" min="1">'+
                '<span>:</span>'+
                '<input type="number" placeholder="高" min="1">'+
              '</div>'+
            '</div>';
          }
          break;
          
        case 'resolution':
          let resolutions=param.options;
          paramsHtml+='<div class="ai-param-item">'+
            '<label class="ai-param-label">'+param.label+'</label>'+
            '<div class="ai-option-group">';
          resolutions.forEach(function(res,idx){
            const isActive=idx===0?' active':'';
            paramsHtml+='<div class="ai-option-btn'+isActive+'" onclick="selectOption(this, \''+res+'\')">'+res+'</div>';
          });
          paramsHtml+='</div>'+
          '</div>';
          break;
          
        case 'duration':
          let durations=param.options;
          paramsHtml+='<div class="ai-param-item">'+
            '<label class="ai-param-label">'+param.label+'</label>'+
            '<div class="ai-option-group">';
          durations.forEach(function(dur,idx){
            const isActive=idx===0?' active':'';
            paramsHtml+='<div class="ai-option-btn'+isActive+'" onclick="selectOption(this, \''+dur+'\')">'+dur+'</div>';
          });
          paramsHtml+='</div>'+
          '</div>';
          break;
          
        case 'duration_price':
          let durPriceOptions=param.options;
          paramsHtml+='<div class="ai-param-item">'+
            '<label class="ai-param-label">'+param.label+' <span class="ai-param-value" id="durationPrice">'+durPriceOptions[0].price+' 金币</span></label>'+
            '<div class="ai-option-group">';
          durPriceOptions.forEach(function(opt,idx){
            const isActive=idx===0?' active':'';
            paramsHtml+='<div class="ai-option-btn'+isActive+'" onclick="selectDurationPrice(this, '+opt.price+')">'+
              '<span>'+opt.label+'</span>'+
              '<span class="ai-option-price">'+opt.price+'金币</span>'+
            '</div>';
          });
          paramsHtml+='</div>'+
          '</div>';
          // 更新总价
          totalPrice=durPriceOptions[0].price;
          break;
          
        case 'custom_ratio':
          paramsHtml+='<div class="ai-param-item" id="customRatioItem" style="display:none">'+
            '<label class="ai-param-label">自定义比例</label>'+
            '<div class="ai-custom-ratio-input">'+
              '<input type="number" placeholder="宽" min="1" oninput="updateCustomRatio(this)">'+
              '<span>:</span>'+
              '<input type="number" placeholder="高" min="1" oninput="updateCustomRatio(this)">'+
            '</div>'+
          '</div>';
          break;
      }
    });
  }
  
  let html='<div class="modal-overlay" onclick="closeModal()">'+
    '<div class="ai-detail-container" onclick="event.stopPropagation()">'+
      // 顶部导航
      '<div class="ai-detail-header">'+
        '<button class="ai-detail-close" onclick="closeModal()">← 返回</button>'+
        '<div class="ai-detail-tools">'+
          '<button class="ai-detail-tool-btn">📋 分享</button>'+
          '<button class="ai-detail-tool-btn">🔗 API调用</button>'+
          '<button class="ai-detail-tool-btn primary">💰 充值金币</button>'+
        '</div>'+
      '</div>'+
      // 主体双栏
      '<div class="ai-detail-body">'+
        // 左侧参数区
        '<div class="ai-detail-left">'+
          '<div class="ai-detail-tool-info">'+
            '<h2 class="ai-detail-tool-name">'+tool.name+'</h2>'+
            '<div class="ai-detail-tool-tags">'+
              tool.tags.map(function(t,i){
                const cls=t==='推荐'?'ai-tag-recommend':(t==='视频'?'ai-tag-video':'ai-tag-normal');
                return '<span class="ai-card-tag '+cls+'">'+t+'</span>';
              }).join('')+
            '</div>'+
          '</div>'+
          '<div class="ai-detail-tabs">'+
            '<button class="ai-tab-btn active">'+tool.category+'</button>'+
            '<button class="ai-tab-btn">参数</button>'+
            '<button class="ai-tab-btn">API</button>'+
            '<button class="ai-tab-btn">工作流</button>'+
          '</div>'+
          '<div class="ai-detail-author">'+
            '<div class="ai-author-avatar" style="background:'+tool.author_avatar+'">'+authorInitial+'</div>'+
            '<div class="ai-author-info">'+
              '<span class="ai-author-name">'+tool.author+'</span>'+
              '<span class="ai-author-time">'+tool.publish_time+' 更新</span>'+
            '</div>'+
            '<button class="ai-follow-btn">+ 关注</button>'+
          '</div>'+
          '<div class="ai-detail-params">'+paramsHtml+'</div>'+
          '<div class="ai-detail-footer">'+
            '<div class="ai-detail-price">'+
              '<span class="ai-price-label">预估</span>'+
              '<span class="ai-price-value" id="aiTotalPrice">'+totalPrice+' '+tool.price_unit+'</span>'+
            '</div>'+
            '<button class="ai-detail-run-btn" onclick="runAITool(\''+tool.id+'\')">'+
              '<span>▶</span> 立即运行'+
            '</button>'+
          '</div>'+
        '</div>'+
        // 右侧结果展示区
        '<div class="ai-detail-right">'+
          '<div class="ai-detail-result-header">'+
            '<span class="ai-result-title">效果预览</span>'+
            '<div class="ai-result-nav">'+
              '<button class="ai-nav-btn">‹</button>'+
              '<span>1/1</span>'+
              '<button class="ai-nav-btn">›</button>'+
            '</div>'+
          '</div>'+
          '<div class="ai-detail-result-area">'+
            '<img src="'+tool.image+'" alt="效果预览">'+
          '</div>'+
          '<div class="ai-detail-tabs bottom">'+
            '<button class="ai-tab-btn active">作品</button>'+
            '<button class="ai-tab-btn">评论</button>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>';
  
  const modal=document.createElement('div');
  modal.className='modal-root';
  modal.innerHTML=html;
  document.body.appendChild(modal);
}

// 辅助函数：获取比例预览尺寸
function getRatioDimensions(ratio){
  const map={
    '1:1':{w:30,h:30},
    '3:4':{w:24,h:32},
    '4:3':{w:32,h:24},
    '9:16':{w:18,h:32},
    '16:9':{w:32,h:18},
    '5:4':{w:25,h:20}
  };
  return map[ratio]||map['1:1'];
}

// 选择比例
function selectRatio(el, ratio){
  const parent=el.parentElement;
  parent.querySelectorAll('.ai-ratio-item').forEach(function(item){
    item.classList.remove('active');
  });
  el.classList.add('active');
  // 如果选择自定义，显示自定义输入
  if(ratio==='自定义'){
    const customItem=document.getElementById('customRatioItem');
    if(customItem)customItem.style.display='block';
    const customRatioItem=document.querySelector('.ai-custom-ratio-item');
    if(customRatioItem)customRatioItem.style.display='block';
  }else{
    const customItem=document.getElementById('customRatioItem');
    if(customItem)customItem.style.display='none';
    const customRatioItem=document.querySelector('.ai-custom-ratio-item');
    if(customRatioItem)customRatioItem.style.display='none';
  }
}

// 选择选项
function selectOption(el, value){
  const parent=el.parentElement;
  parent.querySelectorAll('.ai-option-btn').forEach(function(btn){
    btn.classList.remove('active');
  });
  el.classList.add('active');
}

// 选择时长和价格
function selectDurationPrice(el, price){
  const parent=el.parentElement;
  parent.querySelectorAll('.ai-option-btn').forEach(function(btn){
    btn.classList.remove('active');
  });
  el.classList.add('active');
  // 更新显示的价格
  const durationPrice=document.getElementById('durationPrice');
  if(durationPrice){
    durationPrice.textContent=price+' 金币';
  }
  // 更新总价
  const totalPrice=document.getElementById('aiTotalPrice');
  if(totalPrice){
    totalPrice.textContent=price+' 金币';
  }
}

// 预览上传图片
function previewUpload(input){
  const file=input.files[0];
  if(!file)return;
  const reader=new FileReader();
  reader.onload=function(e){
    const placeholder=input.parentElement.querySelector('.ai-upload-placeholder');
    if(placeholder){
      placeholder.innerHTML='<img src="'+e.target.result+'" style="max-width:100%;max-height:100%;border-radius:8px">';
    }
  };
  reader.readAsDataURL(file);
}

// 预览多图上传
function previewMultiUpload(input, maxCount){
  const file=input.files[0];
  if(!file)return;
  const reader=new FileReader();
  reader.onload=function(e){
    const slot=input.parentElement;
    const placeholder=slot.querySelector('.ai-upload-placeholder-sm');
    if(placeholder){
      placeholder.innerHTML='<img src="'+e.target.result+'" style="max-width:100%;max-height:100%;border-radius:6px">';
    }
    slot.classList.add('has-image');
  };
  reader.readAsDataURL(file);
}

// 更新自定义比例
function updateCustomRatio(input){
  const w=input.parentElement.querySelector('input:first-child').value;
  const h=input.parentElement.querySelector('input:last-child').value;
  if(w&&h){
    console.log('自定义比例: '+w+':'+h);
  }
}

// 运行AI工具
function runAITool(id){
  const tool=aiTools.find(function(t){return t.id===id});
  if(!tool)return;
  
  // 检查必要参数
  const firstUpload=document.querySelector('.ai-param-upload input[type="file"]');
  const firstTextarea=document.querySelector('.ai-param-textarea');
  
  // 根据工具类型检查必填项
  if(tool.tool_type==='image_generate'){
    // 图片生成需要关键词
    const prompt=document.querySelector('.ai-param-textarea');
    if(prompt&&!prompt.value.trim()){
      alert('请输入关键词描述你想要生成的图片');
      return;
    }
  }else if(tool.tool_type==='text_to_video'){
    // 文生视频需要描述
    const prompt=document.querySelector('.ai-param-textarea');
    if(prompt&&!prompt.value.trim()){
      alert('请输入视频描述');
      return;
    }
  }else if(tool.tool_type==='motion_imitation'){
    // 动作模仿需要视频和图片
    const videoInput=document.querySelector('.ai-param-upload input[accept="video/*"]');
    const imageInput=document.querySelectorAll('.ai-param-upload input[accept="image/*"]')[0];
    if(videoInput&&!videoInput.files.length){
      alert('请上传参考视频');
      return;
    }
    if(imageInput&&!imageInput.files.length){
      alert('请上传人物图片');
      return;
    }
  }else{
    // 其他工具需要上传图片或声音
    if(firstUpload&&!firstUpload.files.length){
      const isAudio=firstUpload.accept==='audio/*';
      const isVideo=firstUpload.accept==='video/*';
      alert(isAudio?'请上传声音样本':(isVideo?'请上传视频文件':'请上传图片'));
      return;
    }
  }
  
  // 显示运行中状态
  const runBtn=document.querySelector('.ai-detail-run-btn');
  if(runBtn){
    runBtn.innerHTML='<span class="loading-spinner"></span> 处理中...';
    runBtn.classList.add('processing');
  }
  
  // 模拟处理
  setTimeout(function(){
    alert('AI处理完成！结果已保存到个人中心。');
    closeModal();
  },1500);
}

/* ============ 投稿页面 ============ */
const submitCategories=[
  {key:'article',name:'图文投稿',icon:'📝',desc:'发布文章、故事、评论等内容',color:'#FF6B6B'},
  {key:'video',name:'视频投稿',icon:'🎬',desc:'上传短视频、解说、剪辑作品',color:'#4ECDC4'},
  {key:'image',name:'摄影作品',icon:'📷',desc:'分享摄影、插画、设计作品',color:'#45B7D1'},
  {key:'audio',name:'音频投稿',icon:'🎵',desc:'上传音频、播客、配音作品',color:'#96CEB4'},
  {key:'novel',name:'小说连载',icon:'📚',desc:'发布长篇小说、连载故事',color:'#FFEAA7'},
  {key:'review',name:'影评剧评',icon:'⭐',desc:'分享影视评论、观后感',color:'#DDA0DD'}
];

const submitGuide=[
  {title:'投稿规范',content:'请确保内容原创，遵守社区规则，禁止发布违法违规内容。图片、视频请保证清晰度，文字请无错别字。'},
  {title:'内容要求',content:'文章不少于500字，视频时长1-30分钟，图片分辨率不低于1080P，音频时长10-60分钟。'},
  {title:'审核流程',content:'提交后1-3个工作日完成审核，审核通过后将在对应板块展示，优质内容将获得推荐位。'},
  {title:'收益说明',content:'优质内容可获得金币奖励，金币可用于解锁付费内容、购买虚拟礼物，或申请提现。'}
];

const hotSubmissions=[
  {id:'s_1',type:'图文',title:'如何拍出电影感的短视频',author:'摄影达人小林',time:'2小时前',views:'1.2w',likes:328},
  {id:'s_2',type:'视频',title:'这部电影的隐藏细节你发现了吗？',author:'影视解说王',time:'5小时前',views:'8.9k',likes:512},
  {id:'s_3',type:'摄影',title:'城市夜景拍摄技巧分享',author:'光影记录者',time:'1天前',views:'5.6k',likes:234},
  {id:'s_4',type:'小说',title:'重生之都市修仙 第一章',author:'网文新人',time:'2天前',views:'3.2k',likes:156}
];

function renderSubmitPage(){
  let html='';
  
  html+='<div class="submit-page">'+
    '<div class="submit-hero">'+
      '<div class="submit-hero-content">'+
        '<h1 class="submit-title">我要投稿</h1>'+
        '<p class="submit-desc">分享你的才华，让更多人看到你的作品</p>'+
        '<div class="submit-stats">'+
          '<div class="submit-stat">'+
            '<span class="submit-stat-num">12,586</span>'+
            '<span class="submit-stat-label">本月投稿</span>'+
          '</div>'+
          '<div class="submit-stat">'+
            '<span class="submit-stat-num">8,932</span>'+
            '<span class="submit-stat-label">审核通过</span>'+
          '</div>'+
          '<div class="submit-stat">'+
            '<span class="submit-stat-num">¥25,680</span>'+
            '<span class="submit-stat-label">创作者收益</span>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>';
  
  html+='<div class="submit-section">'+
    '<h2 class="submit-section-title">选择投稿类型</h2>'+
    '<div class="submit-categories">';
  
  submitCategories.forEach(function(cat){
    html+='<div class="submit-category-card" onclick="openSubmitForm(\''+cat.key+'\')">'+
      '<div class="submit-category-icon" style="background:'+cat.color+'20;color:'+cat.color+'">'+cat.icon+'</div>'+
      '<h3 class="submit-category-name">'+cat.name+'</h3>'+
      '<p class="submit-category-desc">'+cat.desc+'</p>'+
      '<button class="submit-category-btn">立即投稿 →</button>'+
    '</div>';
  });
  
  html+='</div></div>';
  
  html+='<div class="submit-section">'+
    '<h2 class="submit-section-title">投稿指南</h2>'+
    '<div class="submit-guide-grid">';
  
  submitGuide.forEach(function(guide,i){
    html+='<div class="submit-guide-card">'+
      '<div class="submit-guide-num">'+(i+1)+'</div>'+
      '<h3 class="submit-guide-title">'+guide.title+'</h3>'+
      '<p class="submit-guide-content">'+guide.content+'</p>'+
    '</div>';
  });
  
  html+='</div></div>';
  
  html+='<div class="submit-section">'+
    '<h2 class="submit-section-title">热门投稿作品</h2>'+
    '<div class="submit-hot-list">';
  
  hotSubmissions.forEach(function(item){
    html+='<div class="submit-hot-item">'+
      '<div class="submit-hot-rank">'+(hotSubmissions.indexOf(item)+1)+'</div>'+
      '<div class="submit-hot-info">'+
        '<span class="submit-hot-type">'+item.type+'</span>'+
        '<h4 class="submit-hot-title">'+item.title+'</h4>'+
        '<div class="submit-hot-meta">'+
          '<span>'+item.author+'</span>'+
          '<span>🕐 '+item.time+'</span>'+
          '<span>👁 '+item.views+'</span>'+
          '<span>👍 '+item.likes+'</span>'+
        '</div>'+
      '</div>'+
    '</div>';
  });
  
  html+='</div></div>';
  
  html+='<div class="submit-section submit-cta">'+
    '<div class="submit-cta-card">'+
      '<h3>准备好开始创作了吗？</h3>'+
      '<p>立即投稿，让你的作品被更多人看到</p>'+
      '<button class="submit-cta-btn" onclick="openSubmitForm(\'article\')">开始投稿 →</button>'+
    '</div>'+
  '</div>';
  
  html+='</div>';
  
  $('categoryContent').innerHTML=html;
}

function openSubmitForm(type){
  const cat=submitCategories.find(function(c){return c.key===type});
  if(!cat)return;
  
  let html='<div class="modal-overlay" onclick="closeModal()">'+
    '<div class="modal-content submit-modal" onclick="event.stopPropagation()">'+
      '<div class="modal-header">'+
        '<h3>'+cat.icon+' 发布'+cat.name+'</h3>'+
        '<button class="modal-close" onclick="closeModal()">×</button>'+
      '</div>'+
      '<div class="modal-body">'+
        '<div class="submit-form">'+
          '<div class="form-group">'+
            '<label>标题</label>'+
            '<input type="text" placeholder="请输入作品标题（不超过50字）">'+
          '</div>'+
          '<div class="form-group">'+
            '<label>分类</label>'+
            '<select>'+
              '<option>请选择分类</option>'+
              '<option>原创</option>'+
              '<option>转载</option>'+
              '<option>翻译</option>'+
            '</select>'+
          '</div>'+
          '<div class="form-group">'+
            '<label>封面/缩略图</label>'+
            '<div class="form-upload" onclick="this.querySelector(\'input\').click()">'+
              '<input type="file" style="display:none" accept="image/*">'+
              '<span>📷 点击上传封面</span>'+
            '</div>'+
          '</div>';
  
  if(type==='video'||type==='audio'){
    html+='<div class="form-group">'+
      '<label>上传'+(type==='video'?'视频':'音频')+'</label>'+
      '<div class="form-upload large" onclick="this.querySelector(\'input\').click()">'+
        '<input type="file" style="display:none" accept="'+(type==='video'?'video/*':'audio/*')+'">'+
        '<span>'+(type==='video'?'🎬':'🎵')+' 点击上传'+(type==='video'?'视频':'音频')+'文件</span>'+
      '</div>'+
      '<p class="form-hint">支持 MP4、MOV、MP3、WAV 等格式，文件大小不超过500MB</p>'+
    '</div>';
  }else if(type==='image'){
    html+='<div class="form-group">'+
      '<label>上传图片</label>'+
      '<div class="form-upload large" onclick="this.querySelector(\'input\').click()">'+
        '<input type="file" style="display:none" accept="image/*" multiple>'+
        '<span>🖼️ 点击上传图片（支持多选，最多9张）</span>'+
      '</div>'+
    '</div>';
  }else{
    html+='<div class="form-group">'+
      '<label>正文内容</label>'+
      '<textarea placeholder="请输入作品正文内容..."></textarea>'+
    '</div>';
  }
  
  html+='<div class="form-group">'+
    '<label>标签</label>'+
    '<input type="text" placeholder="输入标签，多个标签用逗号分隔">'+
  '</div>';
  
  html+='<div class="form-group checkbox-group">'+
    '<label class="checkbox-label">'+
      '<input type="checkbox">'+
      '<span>原创声明：本作品为本人原创，不存在版权争议</span>'+
    '</label>'+
  '</div>';
  
  html+='<div class="form-group checkbox-group">'+
    '<label class="checkbox-label">'+
      '<input type="checkbox">'+
      '<span>同意《平台内容发布协议》和《版权声明》</span>'+
    '</label>'+
  '</div>';
  
  html+='<button class="submit-form-btn" onclick="alert(\'投稿成功！审核结果将在1-3个工作日内通知。\');closeModal()">提交投稿</button>'+
        '</div>'+
      '</div>'+
    '</div>';
  
  const modal=document.createElement('div');
  modal.className='modal-root';
  modal.innerHTML=html;
  document.body.appendChild(modal);
}

/* ===== 发帖编辑器：工具函数 ===== */
function edTa(){return document.querySelector('.post-content-input');}
function edSync(){
  const t=edTa(),c=document.getElementById('edCount');
  if(t&&c)c.innerHTML='<strong>'+t.value.length+'</strong> / 5000 字';
}
function edWrap(a,b){
  const t=edTa();if(!t)return;
  b=b||a;
  const s=t.selectionStart,e=t.selectionEnd;
  const sel=t.value.substring(s,e)||'文字';
  t.value=t.value.substring(0,s)+a+sel+b+t.value.substring(e);
  t.focus();t.setSelectionRange(s+a.length,s+a.length+sel.length);
  edSync();
}
function edPrefix(p){
  const t=edTa();if(!t)return;
  const v=t.value,s=t.selectionStart,e=t.selectionEnd;
  const ls=v.lastIndexOf('\n',Math.max(0,s-1))+1;
  let le=v.indexOf('\n',e);if(le<0)le=v.length;
  const block=v.substring(ls,le)||'内容';
  const out=block.split('\n').map(function(l,idx){
    const pre=(p==='1. ')?((idx+1)+'. '):p;
    return l.indexOf(pre)===0?l:pre+l;
  }).join('\n');
  t.value=v.substring(0,ls)+out+v.substring(le);
  t.focus();t.setSelectionRange(ls,ls+out.length);
  edSync();
}
function edInsert(s){
  const t=edTa();if(!t)return;
  const a=t.selectionStart,b=t.selectionEnd;
  t.value=t.value.substring(0,a)+s+t.value.substring(b);
  t.focus();t.setSelectionRange(a+s.length,a+s.length);
  edSync();
}
function edEmojiToggle(btn){
  const p=document.getElementById('edEmojiPanel');if(!p)return;
  const open=!p.classList.contains('open');
  p.classList.toggle('open',open);
  if(btn)btn.classList.toggle('is-active',open);
}
function edPickEmoji(e){
  edInsert(e);
  const p=document.getElementById('edEmojiPanel');
  if(p)p.classList.remove('open');
  const b=document.getElementById('edEmojiBtn');
  if(b)b.classList.remove('is-active');
}
function edPreviewToggle(btn){
  const t=edTa(),p=document.getElementById('edPreview');
  if(!t||!p)return;
  const show=p.style.display==='none';
  if(show){
    p.innerHTML=edRender(t.value)||'<span style="color:#8a7a6a">暂无内容，先写点什么吧</span>';
    p.style.display='block';t.style.display='none';
    if(btn)btn.classList.add('is-active');
  }else{
    p.style.display='none';t.style.display='block';
    if(btn)btn.classList.remove('is-active');
  }
}
function edEsc(s){
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
function edRender(src){
  let h=edEsc(src||'');
  h=h.replace(/```([\s\S]*?)```/g,function(m,c){
    return '<pre style="background:#f5f0e8;padding:12px;border-radius:8px;overflow:auto"><code>'+c+'</code></pre>';
  });
  h=h.replace(/^##\s?(.+)$/gm,'<h3 style="margin:14px 0 8px;font-size:18px">$1</h3>');
  h=h.replace(/^&gt;\s?(.+)$/gm,'<blockquote style="margin:10px 0;padding:8px 12px;border-left:3px solid #ffc200;color:#6b5a48">$1</blockquote>');
  h=h.replace(/^-\s(.+)$/gm,'<li>$1</li>');
  h=h.replace(/^\d+\.\s(.+)$/gm,'<li>$1</li>');
  h=h.replace(/(<li>[\s\S]*?<\/li>)/g,'<ul style="margin:8px 0 8px 20px">$1</ul>');
  h=h.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>');
  h=h.replace(/\*(.+?)\*/g,'<em>$1</em>');
  h=h.replace(/~~(.+?)~~/g,'<del>$1</del>');
  h=h.replace(/__(.+?)__/g,'<u>$1</u>');
  h=h.replace(/`([^`\n]+)`/g,'<code style="background:#f5f0e8;padding:2px 5px;border-radius:4px">$1</code>');
  h=h.replace(/!\[(.*?)\]\((.+?)\)/g,'<img src="$2" alt="$1">');
  h=h.replace(/\[(.+?)\]\((.+?)\)/g,'<a href="$2" target="_blank" rel="noopener" style="color:#c49000">$1</a>');
  return h.replace(/\n{2,}/g,'<br><br>').replace(/\n/g,'<br>');
}
function edToolbar(){
  const I=function(p){return '<svg viewBox="0 0 24 24"><path d="'+p+'"/></svg>';};
  const P={
    quote:'M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z',
    ul:'M4 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm0-6a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm0 12a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM8 19h13v-2H8v2zm0-6h13v-2H8v2zm0-8v2h13V5H8z',
    ol:'M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h13V5H7zm0 14h13v-2H7v2zm0-6h13v-2H7v2z',
    link:'M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z',
    img:'M21 19V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2zM8.5 13.5l2.5 3L14.5 12l4.5 6H5l3.5-4.5z',
    code:'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
    emoji:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z',
    eye:'M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12.5a5 5 0 110-10 5 5 0 010 10zm0-8a3 3 0 100 6 3 3 0 000-6z'
  };
  const btn=function(t,ttl,cls,extra){
    return '<button type="button" class="editor-tool'+(cls||'')+'" title="'+ttl+'"'+(extra||'')+'>'+t+'</button>';
  };
  return '<div class="editor-toolbar">'+
    btn('<b>B</b>','加粗','',' onclick="edWrap(\'**\')"')+
    btn('<i>I</i>','斜体','',' onclick="edWrap(\'*\')"')+
    btn('<u>U</u>','下划线','',' onclick="edWrap(\'__\')"')+
    btn('<s>S</s>','删除线','',' onclick="edWrap(\'~~\')"')+
    '<span class="editor-tool-sep"></span>'+
    btn('H2','标题',' editor-tool-text',' onclick="edPrefix(\'## \')"')+
    btn(I(P.quote),'引用','',' onclick="edPrefix(\'&gt; \')"')+
    btn(I(P.ul),'无序列表','',' onclick="edPrefix(\'- \')"')+
    btn(I(P.ol),'有序列表','',' onclick="edPrefix(\'1. \')"')+
    '<span class="editor-tool-sep"></span>'+
    btn(I(P.link),'插入链接','',' onclick="edWrap(\'[\',\'](https://)\')"')+
    btn(I(P.img),'插入图片','',' onclick="edInsert(\'\\n![图片描述](图片地址)\\n\')"')+
    btn(I(P.code),'代码块','',' onclick="edInsert(\'\\n```\\n代码\\n```\\n\')"')+
    '<span class="editor-tool-sep"></span>'+
    btn(I(P.emoji),'表情','',' id="edEmojiBtn" onclick="edEmojiToggle(this)"')+
    btn(I(P.eye),'预览','',' onclick="edPreviewToggle(this)"')+
  '</div>';
}
function edEmojiPanel(){
  const G={
    '常用':['😀','😂','🤣','😊','😍','🥰','😘','😜','🤔','😅','😭','😱','😡','🥺','😴','🤗','👍','👎','🙏','👏','💪','🤝','✌️','🤞'],
    '心情':['❤️','💔','💯','🔥','✨','🎉','🎊','⭐','🌟','💥','💫','🌈','☀️','🌙','⚡','❄️','🍀','🌸','🎁','🏆','🥇','💎','👑','🎯'],
    '吃瓜':['🍉','🍿','👀','🤫','🤐','🙈','📢','🗣️','💬','❓','❗','‼️','🔍','📌','🚨','⚠️','🤯','😏','🫢','🧐','📸','🎬','📺','🎭']
  };
  let h='<div class="emoji-panel" id="edEmojiPanel">';
  Object.keys(G).forEach(function(k){
    h+='<div class="emoji-panel-title">'+k+'</div><div class="emoji-grid">';
    G[k].forEach(function(e){
      h+='<button type="button" class="emoji-btn" onclick="edPickEmoji(\''+e+'\')">'+e+'</button>';
    });
    h+='</div>';
  });
  return h+'</div>';
}
function showNewPostModal(){
  const html='<div class="modal-overlay" onclick="closeModal()">'+
    '<div class="modal-content post-modal" onclick="event.stopPropagation()">'+
      '<div class="modal-header">'+
        '<h3>发布新帖</h3>'+
        '<button class="modal-close" onclick="closeModal()">×</button>'+
      '</div>'+
      '<div class="modal-body">'+
        '<div class="post-form">'+
          '<input type="text" class="post-title-input" placeholder="请输入帖子标题（建议 5-40 字）..." maxlength="60">'+
          '<div class="post-form-row">'+
            '<select class="post-category-select">'+
              '<option>选择分类</option>'+
              '<option>话题讨论</option>'+
              '<option>影评剧评</option>'+
              '<option>资源共享</option>'+
              '<option>新人报道</option>'+
              '<option>吃瓜爆料</option>'+
              '<option>树洞心语</option>'+
            '</select>'+
            '<input type="text" class="post-tag-input" placeholder="标签，用逗号分隔（选填）">'+
          '</div>'+
          '<div style="position:relative">'+
            '<div class="editor-wrap">'+
              edToolbar()+
              '<textarea class="post-content-input" maxlength="5000" oninput="edSync()" placeholder="分享你的故事、想法或问题…&#10;&#10;支持 **加粗**、*斜体*、## 标题、&gt; 引用、- 列表、`代码`"></textarea>'+
              '<div class="post-preview" id="edPreview" style="display:none;border:none;border-radius:0"></div>'+
              '<div class="editor-footer">'+
                '<span class="editor-count" id="edCount"><strong>0</strong> / 5000 字</span>'+
                '<span>支持 Markdown 语法</span>'+
              '</div>'+
            '</div>'+
            edEmojiPanel()+
          '</div>'+
          '<div class="post-form-actions">'+
            '<div class="post-actions-left">'+
              '<button type="button" class="post-image-btn" onclick="edInsert(\'\\n![图片描述](图片地址)\\n\')">'+
                '<svg viewBox="0 0 24 24"><path d="M21 19V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2zM8.5 13.5l2.5 3L14.5 12l4.5 6H5l3.5-4.5z"/></svg>添加图片'+
              '</button>'+
              '<button type="button" class="post-image-btn" onclick="edEmojiToggle(document.getElementById(\'edEmojiBtn\'))">'+
                '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>插入表情'+
              '</button>'+
            '</div>'+
            '<button class="post-submit-btn" onclick="submitNewPost()">发布帖子</button>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>';

  const modal=document.createElement('div');
  modal.className='modal-root';
  modal.innerHTML=html;
  document.body.appendChild(modal);

  const p=document.getElementById('edEmojiPanel');
  if(p){p.style.top='48px';p.style.left='12px';}
  const ti=modal.querySelector('.post-title-input');
  if(ti)ti.focus();
}
function submitNewPost(){
  const t=document.querySelector('.post-title-input');
  const c=edTa();
  if(!t||!t.value.trim()){alert('请填写帖子标题');if(t)t.focus();return;}
  if(!c||!c.value.trim()){alert('内容还是空的，写点什么吧');if(c)c.focus();return;}
  alert('发布成功！');
  closeModal();
}

function showPublishTaskModal(){
  let html='<div class="modal-overlay" onclick="closeModal()">'+
    '<div class="modal-content task-post-modal" onclick="event.stopPropagation()">'+
      '<div class="modal-header">'+
        '<h3>发布任务</h3>'+
        '<button class="modal-close" onclick="closeModal()">×</button>'+
      '</div>'+
      '<div class="modal-body">'+
        '<div class="task-post-form">'+
          '<input type="text" class="task-post-title" placeholder="任务标题">'+
          '<textarea class="task-post-desc" placeholder="详细描述任务内容、要求、交付标准等..."></textarea>'+
          '<div class="task-post-row">'+
            '<input type="text" placeholder="悬赏金额（元）">'+
            '<select>'+
              '<option>固定金额</option>'+
              '<option>按时间计费</option>'+
              '<option>按效果付费</option>'+
            '</select>'+
          '</div>'+
          '<div class="task-post-row">'+
            '<input type="date">'+
            '<input type="text" placeholder="联系方式">'+
          '</div>'+
          '<div class="task-post-skills">'+
            '<span>技能标签：</span>'+
            '<input type="text" placeholder="输入技能后按回车添加">'+
          '</div>'+
          '<button class="task-post-submit" onclick="alert(\'任务发布成功！\');closeModal()">发布任务</button>'+
        '</div>'+
      '</div>'+
    '</div>';
  
  const modal=document.createElement('div');
  modal.className='modal-root';
  modal.innerHTML=html;
  document.body.appendChild(modal);
}

function closeModal(){
  const modal=document.querySelector('.modal-root');
  if(modal)modal.remove();
}

/* ============ 更新分类配置 ============ */
const EXTENDED_CATEGORY_CONFIG={
  '论坛':{title:'论坛',subtitle:'与志同道合的朋友交流互动',type:'forum'},
  '任务悬赏':{title:'任务悬赏',subtitle:'发布任务，赚取奖励',type:'task'},
  '一起做AI':{title:'一起做AI',subtitle:'AI科技前沿，科技改变未来生活',type:'ai'},
  '个人中心':{title:'个人中心',subtitle:'管理你的账号和内容',type:'profile'},
  '我要投稿':{title:'我要投稿',subtitle:'分享你的精彩内容，让更多人看到',type:'submit'}
};

/* 将新的渲染函数暴露到全局 */
window.renderForumPage=renderForumPage;
window.renderTaskPage=renderTaskPage;
window.renderAIToolsPage=renderAIToolsPage;
window.renderProfilePage=renderProfilePage;
window.renderSubmitPage=renderSubmitPage;
window.openSubmitForm=openSubmitForm;
window.showForumDetail=showForumDetail;
window.showTaskDetail=showTaskDetail;
window.showAIToolDetail=showAIToolDetail;
window.showNewPostModal=showNewPostModal;
window.showPublishTaskModal=showPublishTaskModal;
window.closeModal=closeModal;
window.changeForumPage=changeForumPage;
window.toggleForumLike=toggleForumLike;
window.toggleForumFavorite=toggleForumFavorite;
window.shareForumPost=shareForumPost;
window.submitForumComment=submitForumComment;
window.toggleCommentLike=toggleCommentLike;
window.EXTENDED_CATEGORY_CONFIG=EXTENDED_CATEGORY_CONFIG;
window.selectRatio=selectRatio;
window.selectOption=selectOption;
window.selectDurationPrice=selectDurationPrice;
window.previewUpload=previewUpload;
window.previewMultiUpload=previewMultiUpload;
window.updateCustomRatio=updateCustomRatio;
window.runAITool=runAITool;
window.edTa=edTa;
window.edSync=edSync;
window.edWrap=edWrap;
window.edPrefix=edPrefix;
window.edInsert=edInsert;
window.edEmojiToggle=edEmojiToggle;
window.edPickEmoji=edPickEmoji;
window.edPreviewToggle=edPreviewToggle;
window.edRender=edRender;
window.edToolbar=edToolbar;
window.edEmojiPanel=edEmojiPanel;
window.submitNewPost=submitNewPost;
window.pfIco=pfIco;
window.pfSwitch=pfSwitch;
window.pfClearHistory=pfClearHistory;
window.pfDelPost=pfDelPost;
window.pfDelComment=pfDelComment;
window.pfDelFav=pfDelFav;
window.pfReadAll=pfReadAll;
window.pfReadOne=pfReadOne;
window.pfSaveSettings=pfSaveSettings;
