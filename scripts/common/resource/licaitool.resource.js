/************************************************************************
 * 类名  :  fuzhutool.resource.ts
 * 描述  :
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/3/18
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../btop/btop.hui.d.ts"/>
;
(function () {
    // 理财工具主页
    btop.hui.ResourceManager.access({
        pageCode: "BLT001",
        description: "",
        id: "btop.bui.LiCaiToolMainPage",
        path: {
            html: "pages/liCaiTool/liCaiToolMainPage/liCaiToolMainPage.html",
            js: "pages/liCaiTool/liCaiToolMainPage/LiCaiToolMainPage.js",
            css: ["pages/liCaiTool/liCaiToolMainPage/liCaiToolMainPage.css"]
        }
    });
    // 1 利率主页
    btop.hui.ResourceManager.access({
        pageCode: "BLT001",
        description: "",
        id: "btop.bui.LiLvMainPage",
        path: {
            html: "pages/liCaiTool/liLvPage/liLvMainPage/liLvMainPage.html",
            js: "pages/liCaiTool/liLvPage/liLvMainPage/LiLvMainPage.js",
            css: ["pages/liCaiTool/liLvPage/liLvMainPage/liLvMainPage.css"]
        }
    });
    //1.1 存款利率
    btop.hui.ResourceManager.access({
        pageCode: "BLT001",
        description: "",
        id: "btop.bui.CunKuanLiLvPage",
        path: {
            html: "pages/liCaiTool/liLvPage/cunKuanLiLvPage/cunKuanLiLvPage.html",
            js: "pages/liCaiTool/liLvPage/cunKuanLiLvPage/CunKuanLiLvPage.js",
            css: ["pages/liCaiTool/liLvPage/cunKuanLiLvPage/cunKuanLiLvPage.css"]
        }
    });
    //1.2 贷款利率
    btop.hui.ResourceManager.access({
        pageCode: "BLT001",
        description: "",
        id: "btop.bui.DaiKuanLiLvPage",
        path: {
            html: "pages/liCaiTool/liLvPage/daiKuanLiLvPage/daiKuanLiLvPage.html",
            js: "pages/liCaiTool/liLvPage/daiKuanLiLvPage/DaiKuanLiLvPage.js",
            css: ["pages/liCaiTool/liLvPage/daiKuanLiLvPage/daiKuanLiLvPage.css"]
        }
    });
    //1.3 外汇存款利率
    btop.hui.ResourceManager.access({
        pageCode: "BLT001",
        description: "",
        id: "btop.bui.WaiHuiLiLvPage",
        path: {
            html: "pages/liCaiTool/liLvPage/waiHuiLiLvPage/waiHuiLiLvPage.html",
            js: "pages/liCaiTool/liLvPage/waiHuiLiLvPage/WaiHuiLiLvPage.js",
            css: ["pages/liCaiTool/liLvPage/waiHuiLiLvPage/waiHuiLiLvPage.css"]
        }
    });
    //1.4 节售汇牌价
    btop.hui.ResourceManager.access({
        pageCode: "BLT001",
        description: "",
        id: "btop.bui.JieShouHuiPaiJiaPage",
        path: {
            html: "pages/liCaiTool/liLvPage/jieShouHuiPaiJiaPage/jieShouHuiPaiJiaPage.html",
            js: "pages/liCaiTool/liLvPage/jieShouHuiPaiJiaPage/JieShouHuiPaiJiaPage.js",
            css: ["pages/liCaiTool/liLvPage/jieShouHuiPaiJiaPage/jieShouHuiPaiJiaPage.css"]
        }
    });
    //1.4 节售汇牌价历史
    btop.hui.ResourceManager.access({
        pageCode: "BLT001",
        description: "",
        id: "btop.bui.JieShouHuiPaiJiaLiShiPage",
        path: {
            html: "pages/liCaiTool/liLvPage/jieShouHuiPaiJiaLiShiPage/jieShouHuiPaiJiaLiShiPage.html",
            js: "pages/liCaiTool/liLvPage/jieShouHuiPaiJiaLiShiPage/JieShouHuiPaiJiaLiShiPage.js",
            css: ["pages/liCaiTool/liLvPage/jieShouHuiPaiJiaLiShiPage/jieShouHuiPaiJiaLiShiPage.css"]
        }
    });
    // 2 风险测评主页
    btop.hui.ResourceManager.access({
        pageCode: "BLT001",
        description: "",
        id: "btop.bui.FengXianCePingMainPage",
        path: {
            html: "pages/liCaiTool/fengXianCePingPage/fengXianCePingMainPage/fengXianCePingMainPage.html",
            js: "pages/liCaiTool/fengXianCePingPage/fengXianCePingMainPage/FengXianCePingMainPage.js",
            css: ["pages/liCaiTool/fengXianCePingPage/fengXianCePingMainPage/fengXianCePingMainPage.css"]
        }
    });
    // 2.1 基金风险测评主页
    btop.hui.ResourceManager.access({
        pageCode: "BLT001",
        description: "",
        id: "btop.bui.JiJinFengXianCePingMainPage",
        path: {
            html: "pages/liCaiTool/fengXianCePingPage/jiJinFengXianCePingPage/jiJinFengXianCePingMainPage/jiJinFengXianCePingMainPage.html",
            js: "pages/liCaiTool/fengXianCePingPage/jiJinFengXianCePingPage/jiJinFengXianCePingMainPage/JiJinFengXianCePingMainPage.js",
            css: ["pages/liCaiTool/fengXianCePingPage/jiJinFengXianCePingPage/jiJinFengXianCePingMainPage/jiJinFengXianCePingMainPage.css"]
        }
    });
    // 2.1.1理财风险测问题
    btop.hui.ResourceManager.access({
        pageCode: "BLT001",
        description: "",
        id: "btop.bui.JiJinQuestionPage",
        path: {
            html: "pages/liCaiTool/fengXianCePingPage/jiJinFengXianCePingPage/jiJinQuestionPage/jiJinQuestionPage.html",
            js: "pages/liCaiTool/fengXianCePingPage/jiJinFengXianCePingPage/jiJinQuestionPage/JiJinQuestionPage.js",
            css: ["pages/liCaiTool/fengXianCePingPage/jiJinFengXianCePingPage/jiJinQuestionPage/jiJinQuestionPage.css"]
        }
    });
    // 2.2 理财风险测评主页
    btop.hui.ResourceManager.access({
        pageCode: "BLT001",
        description: "",
        id: "btop.bui.LiCaiFengXianCePingMainPage",
        path: {
            html: "pages/liCaiTool/fengXianCePingPage/liCaiFengXianCePingPage/liCaiFengXianCePingMainPage/liCaiFengXianCePingMainPage.html",
            js: "pages/liCaiTool/fengXianCePingPage/liCaiFengXianCePingPage/liCaiFengXianCePingMainPage/LiCaiFengXianCePingMainPage.js",
            css: ["pages/liCaiTool/fengXianCePingPage/liCaiFengXianCePingPage/liCaiFengXianCePingMainPage/liCaiFengXianCePingMainPage.css"]
        }
    });
    // 2.2.1基金风险测问题
    btop.hui.ResourceManager.access({
        pageCode: "BLT001",
        description: "",
        id: "btop.bui.LiCaiQuestionPage",
        path: {
            html: "pages/liCaiTool/fengXianCePingPage/liCaiFengXianCePingPage/liCaiQuestionPage/liCaiQuestionPage.html",
            js: "pages/liCaiTool/fengXianCePingPage/liCaiFengXianCePingPage/liCaiQuestionPage/LiCaiQuestionPage.js",
            css: ["pages/liCaiTool/fengXianCePingPage/liCaiFengXianCePingPage/liCaiQuestionPage/liCaiQuestionPage.css"]
        }
    });
    //3.1 计算器主页
    btop.hui.ResourceManager.access({
        pageCode: "BLT001",
        description: "",
        id: "btop.bui.CalculatorMainPage",
        path: {
            html: "pages/liCaiTool/calculatorPage/calculatorMainPage/calculatorMainPage.html",
            js: "pages/liCaiTool/calculatorPage/calculatorMainPage/CalculatorMainPage.js",
            css: ["pages/liCaiTool/calculatorPage/calculatorMainPage/calculatorMainPage.css"]
        }
    });
    //3.1.1 活期存款计算器
    btop.hui.ResourceManager.access({
        pageCode: "BLT001",
        description: "",
        id: "btop.bui.HuoQiCunKuanPage",
        path: {
            html: "pages/liCaiTool/calculatorPage/huoQiCunKuanPage/huoQiCunKuanPage.html",
            js: "pages/liCaiTool/calculatorPage/huoQiCunKuanPage/HuoQiCunKuanPage.js",
            css: ["pages/liCaiTool/calculatorPage/huoQiCunKuanPage/huoQiCunKuanPage.css"]
        }
    });
    //3.1.2 整存整取计算器
    btop.hui.ResourceManager.access({
        pageCode: "BLT001",
        description: "",
        id: "btop.bui.ZhengCunZhengQuPage",
        path: {
            html: "pages/liCaiTool/calculatorPage/zhengCunZhengQuPage/zhengCunZhengQuPage.html",
            js: "pages/liCaiTool/calculatorPage/zhengCunZhengQuPage/ZhengCunZhengQuPage.js",
            css: ["pages/liCaiTool/calculatorPage/zhengCunZhengQuPage/zhengCunZhengQuPage.css"]
        }
    });
    //3.1.3 零存整取计算器
    btop.hui.ResourceManager.access({
        pageCode: "BLT001",
        description: "",
        id: "btop.bui.LingCunZhengQuPage",
        path: {
            html: "pages/liCaiTool/calculatorPage/lingCunZhengQuPage/lingCunZhengQuPage.html",
            js: "pages/liCaiTool/calculatorPage/lingCunZhengQuPage/LingCunZhengQuPage.js",
            css: ["pages/liCaiTool/calculatorPage/lingCunZhengQuPage/lingCunZhengQuPage.css"]
        }
    });
    //3.1.4 存本取息计算器
    btop.hui.ResourceManager.access({
        pageCode: "BLT001",
        description: "",
        id: "btop.bui.CunBenQuXiPage",
        path: {
            html: "pages/liCaiTool/calculatorPage/cunBenQuXiPage/cunBenQuXiPage.html",
            js: "pages/liCaiTool/calculatorPage/cunBenQuXiPage/CunBenQuXiPage.js",
            css: ["pages/liCaiTool/calculatorPage/cunBenQuXiPage/cunBenQuXiPage.css"]
        }
    });
    //3.1.5 整存零取计算器
    btop.hui.ResourceManager.access({
        pageCode: "BLT001",
        description: "",
        id: "btop.bui.ZhengCunLingQuPage",
        path: {
            html: "pages/liCaiTool/calculatorPage/zhengCunLingQuPage/zhengCunLingQuPage.html",
            js: "pages/liCaiTool/calculatorPage/zhengCunLingQuPage/ZhengCunLingQuPage.js",
            css: ["pages/liCaiTool/calculatorPage/zhengCunLingQuPage/zhengCunLingQuPage.css"]
        }
    });
    //3.1.6 教育储蓄计算器
    btop.hui.ResourceManager.access({
        pageCode: "BLT001",
        description: "",
        id: "btop.bui.JiaoYuChuXuPage",
        path: {
            html: "pages/liCaiTool/calculatorPage/jiaoYuChuXuPage/jiaoYuChuXuPage.html",
            js: "pages/liCaiTool/calculatorPage/jiaoYuChuXuPage/JiaoYuChuXuPage.js",
            css: ["pages/liCaiTool/calculatorPage/jiaoYuChuXuPage/jiaoYuChuXuPage.css"]
        }
    });
    //3.1.7 定活两便计算器
    btop.hui.ResourceManager.access({
        pageCode: "BLT001",
        description: "",
        id: "btop.bui.DingHuoLiangBianPage",
        path: {
            html: "pages/liCaiTool/calculatorPage/dingHuoLiangBianPage/dingHuoLiangBianPage.html",
            js: "pages/liCaiTool/calculatorPage/dingHuoLiangBianPage/DingHuoLiangBianPage.js",
            css: ["pages/liCaiTool/calculatorPage/dingHuoLiangBianPage/dingHuoLiangBianPage.css"]
        }
    });
    //3.1.8 整存整取自动转存计算器
    btop.hui.ResourceManager.access({
        pageCode: "BLT001",
        description: "",
        id: "btop.bui.ZhengCunZhengQuZiDongZhuanCunPage",
        path: {
            html: "pages/liCaiTool/calculatorPage/zhengCunZhengQuZiDongZhuanCunPage/zhengCunZhengQuZiDongZhuanCunPage.html",
            js: "pages/liCaiTool/calculatorPage/zhengCunZhengQuZiDongZhuanCunPage/ZhengCunZhengQuZiDongZhuanCunPage.js",
            css: ["pages/liCaiTool/calculatorPage/zhengCunZhengQuZiDongZhuanCunPage/zhengCunZhengQuZiDongZhuanCunPage.css"]
        }
    });
    //3.1.9 组合存款计算器
    btop.hui.ResourceManager.access({
        pageCode: "BLT001",
        description: "",
        id: "btop.bui.ZuHeCunKuanPage",
        path: {
            html: "pages/liCaiTool/calculatorPage/zuHeCunKuanPage/zuHeCunKuanPage.html",
            js: "pages/liCaiTool/calculatorPage/zuHeCunKuanPage/ZuHeCunKuanPage.js",
            css: ["pages/liCaiTool/calculatorPage/zuHeCunKuanPage/zuHeCunKuanPage.css"]
        }
    });
    //3.2.1 贷款计算器计算器
    btop.hui.ResourceManager.access({
        pageCode: "BLT001",
        description: "",
        id: "btop.bui.DaiKuanCalculatorPage",
        path: {
            html: "pages/liCaiTool/calculatorPage/daiKuanCalculatorPage/daiKuanCalculatorPage.html",
            js: "pages/liCaiTool/calculatorPage/daiKuanCalculatorPage/DaiKuanCalculatorPage.js",
            css: ["pages/liCaiTool/calculatorPage/daiKuanCalculatorPage/daiKuanCalculatorPage.css"]
        }
    });
    // 3.2.2 提前还贷计算器
    btop.hui.ResourceManager.access({
        pageCode: "BLT001",
        description: "",
        id: "btop.bui.TiQianHuanDaiPage",
        path: {
            html: "pages/liCaiTool/calculatorPage/tiQianHuanDaiPage/tiQianHuanDaiPage.html",
            js: "pages/liCaiTool/calculatorPage/tiQianHuanDaiPage/TiQianHuanDaiPage.js",
            css: ["pages/liCaiTool/calculatorPage/tiQianHuanDaiPage/tiQianHuanDaiPage.css"]
        }
    });
    //3.2.3 贷款金额计算器
    btop.hui.ResourceManager.access({
        pageCode: "BLT001",
        description: "",
        id: "btop.bui.DaiKuanJinEPage",
        path: {
            html: "pages/liCaiTool/calculatorPage/daiKuanJinEPage/daiKuanJinEPage.html",
            js: "pages/liCaiTool/calculatorPage/daiKuanJinEPage/DaiKuanJinEPage.js",
            css: ["pages/liCaiTool/calculatorPage/daiKuanJinEPage/daiKuanJinEPage.css"]
        }
    });
    //3.2.4 组合贷款提前还款计算器
    btop.hui.ResourceManager.access({
        pageCode: "BLT001",
        description: "",
        id: "btop.bui.ZuHeDaiKuanTiQianHuanDaiPage",
        path: {
            html: "pages/liCaiTool/calculatorPage/zuHeDaiKuanTiQianHuanDaiPage/zuHeDaiKuanTiQianHuanDaiPage.html",
            js: "pages/liCaiTool/calculatorPage/zuHeDaiKuanTiQianHuanDaiPage/ZuHeDaiKuanTiQianHuanDaiPage.js",
            css: ["pages/liCaiTool/calculatorPage/zuHeDaiKuanTiQianHuanDaiPage/zuHeDaiKuanTiQianHuanDaiPage.css"]
        }
    });
    //3.2.5 贷款期限计算器
    btop.hui.ResourceManager.access({
        pageCode: "BLT001",
        description: "",
        id: "btop.bui.DaiKuanQiXianPage",
        path: {
            html: "pages/liCaiTool/calculatorPage/daiKuanQiXianPage/daiKuanQiXianPage.html",
            js: "pages/liCaiTool/calculatorPage/daiKuanQiXianPage/DaiKuanQiXianPage.js",
            css: ["pages/liCaiTool/calculatorPage/daiKuanQiXianPage/daiKuanQiXianPage.css"]
        }
    });
    //3.3.6 住房组合计算器
    btop.hui.ResourceManager.access({
        pageCode: "BLT001",
        description: "",
        id: "btop.bui.ZhuFangZuHePage",
        path: {
            html: "pages/liCaiTool/calculatorPage/zhuFangZuHePage/zhuFangZuHePage.html",
            js: "pages/liCaiTool/calculatorPage/zhuFangZuHePage/ZhuFangZuHePage.js",
            css: ["pages/liCaiTool/calculatorPage/zhuFangZuHePage/zhuFangZuHePage.css"]
        }
    });
    //3.3.1 计算器
    btop.hui.ResourceManager.access({
        pageCode: "BLT001",
        description: "",
        id: "btop.bui.CommonCalculatorPage",
        path: {
            html: "pages/liCaiTool/calculatorPage/commonCalculatorPage/commonCalculatorPage.html",
            js: "pages/liCaiTool/calculatorPage/commonCalculatorPage/CommonCalculatorPage.js",
            css: ["pages/liCaiTool/calculatorPage/commonCalculatorPage/commonCalculatorPage.css"]
        }
    });
    //3.4.1 货币时间价值计算器
    btop.hui.ResourceManager.access({
        pageCode: "BLT001",
        description: "",
        id: "btop.bui.HuoBiShiJianJiaZhiCalculator",
        path: {
            html: "pages/liCaiTool/calculatorPage/huoBiShiJianJiaZhiCalculator/huoBiShiJianJiaZhiCalculator.html",
            js: "pages/liCaiTool/calculatorPage/huoBiShiJianJiaZhiCalculator/HuoBiShiJianJiaZhiCalculator.js",
            css: ["pages/liCaiTool/calculatorPage/huoBiShiJianJiaZhiCalculator/huoBiShiJianJiaZhiCalculator.css"]
        }
    });
    //3.5.1 外币兑换
    btop.hui.ResourceManager.access({
        pageCode: "BLT001",
        description: "",
        id: "btop.bui.WaiHuiDuiHuanCalculator",
        path: {
            html: "pages/liCaiTool/calculatorPage/waiHuiDuiHuanCalculator/waiHuiDuiHuanCalculator.html",
            js: "pages/liCaiTool/calculatorPage/waiHuiDuiHuanCalculator/WaiHuiDuiHuanCalculator.js",
            css: ["pages/liCaiTool/calculatorPage/waiHuiDuiHuanCalculator/waiHuiDuiHuanCalculator.css"]
        }
    });
    //4  基金净值
    btop.hui.ResourceManager.access({
        pageCode: "BLT001",
        description: "",
        id: "btop.bui.JiJinJingZhiMainPage",
        path: {
            html: "pages/liCaiTool/jiJinJingZhiPage/jiJinJingZhiMainPage/jiJinJingZhiMainPage.html",
            js: "pages/liCaiTool/jiJinJingZhiPage/jiJinJingZhiMainPage/JiJinJingZhiMainPage.js",
            css: ["pages/liCaiTool/jiJinJingZhiPage/jiJinJingZhiMainPage/jiJinJingZhiMainPage.css"]
        }
    });
    //5  理财产品比较器
    btop.hui.ResourceManager.access({
        pageCode: "BLT001",
        description: "",
        id: "btop.bui.LiCaiChanPinBiJiaoQiMainPage",
        path: {
            html: "pages/liCaiTool/liCaiChanPinBiJiaoQiPage/liCaiChanPinBiJiaoQiMainPage/liCaiChanPinBiJiaoQiMainPage.html",
            js: "pages/liCaiTool/liCaiChanPinBiJiaoQiPage/liCaiChanPinBiJiaoQiMainPage/LiCaiChanPinBiJiaoQiMainPage.js",
            css: ["pages/liCaiTool/liCaiChanPinBiJiaoQiPage/liCaiChanPinBiJiaoQiMainPage/liCaiChanPinBiJiaoQiMainPage.css"]
        }
    });
})();
//# sourceMappingURL=licaitool.resource.js.map