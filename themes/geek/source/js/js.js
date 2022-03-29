var web_style = $("#web_style").val();

new Valine({
  el: "#vcomments", // Valine 初始化掛載器
  appId: "vMDW05AHkvrzuuVo7Pgjri0P-MdYXbMMI",
  appKey: "fzfb2UU4VBfXr3bH0h2CeUTf",
  placeholder: "ヾﾉ≧∀≦)o 嗨！有什麼想說嗎？",
  avatar: "mp", //https://valine.js.org/avatar.html
  lang: "zh-TW",
  visitor: true,
  requiredFields: ["nick", "mail"],
  serverURLs: "https://vmdw05ah.api.lncldglobal.com",
  emojiCDN: "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@latest/Heybox/", // emoji CDN
  emojiMaps: {
    emoji1: "expression_cube.png",
    emoji2: "expression_cube_bingbujiandan.png",
    emoji3: "expression_cube_bizui.png",
    emoji4: "expression_cube_cangsang.png",
    emoji5: "expression_cube_dalian.png",
    emoji6: "expression_cube_doge.png",
    emoji7: "expression_cube_gandong.png",
    emoji8: "expression_cube_guai.png",
    emoji9: "expression_cube_gugu.png",
    emoji10: "expression_cube_han.png",
    emoji11: "expression_cube_hbi.png",
    emoji12: "expression_cube_heirenwenhao.png",
    emoji13: "expression_cube_huaji.png",
    emoji14: "expression_cube_jiayou.png",
    emoji15: "expression_cube_jingya.png",
    emoji16: "expression_cube_kaixin.png",
    emoji17: "expression_cube_ku.png",
    emoji18: "expression_cube_kun.png",
    emoji19: "expression_cube_kuqi.png",
    emoji20: "expression_cube_nu.png",
    emoji21: "expression_cube_penshui.png",
    emoji22: "expression_cube_qiliang.png",
    emoji23: "expression_cube_shengqi.png",
    emoji24: "expression_cube_shuijiao.png",
    emoji25: "expression_cube_tanqi.png",
    emoji26: "expression_cube_tanshou.png",
    emoji27: "expression_cube_tu.png",
    emoji28: "expression_cube_wa.png",
    emoji29: "expression_cube_weiqu.png",
    emoji30: "expression_cube_weixiao.png",
    emoji31: "expression_cube_wulianku.png",
    emoji32: "expression_cube_xia.png",
    emoji33: "expression_cube_xiaocry.png",
    emoji34: "expression_cube_xihuan.png",
    emoji35: "expression_cube_xuexi.png",
    emoji36: "expression_cube_yun.png",
    emoji37: "expression_cube_zan.png",
    emoji38: "expression_heyboxgirl.png",
    emoji39: "expression_heyboxgirl_v2.png",
    emoji40: "expression_heygirl.png",
    emoji41: "expression_heygirl_aidao.png",
    emoji42: "expression_heygirl_baipiaoguai.png",
    emoji43: "expression_heygirl_chi.png",
    emoji44: "expression_heygirl_chigua.png",
    emoji45: "expression_heygirl_eihei.png",
    emoji46: "expression_heygirl_haha.png",
    emoji47: "expression_heygirl_haixiu.png",
    emoji48: "expression_heygirl_henaicha.png",
    emoji49: "expression_heygirl_huaji.png",
    emoji50: "expression_heygirl_jing.png",
    emoji51: "expression_heygirl_jixialai.png",
    emoji52: "expression_heygirl_kaikele.png",
    emoji53: "expression_heygirl_ku.png",
    emoji54: "expression_heygirl_kujiuruhou.png",
    emoji55: "expression_heygirl_nielian.png",
    emoji56: "expression_heygirl_qiaokaixin.png",
    emoji57: "expression_heygirl_qiehua.png",
    emoji58: "expression_heygirl_rua.png",
    emoji59: "expression_heygirl_toukan.png",
    emoji60: "expression_heygirl_tu.png",
    emoji61: "expression_heygirl_wuyu.png",
    emoji62: "expression_heygirl_xihuan.png",
    emoji63: "expression_heygirl_yiwen.png",
    emoji64: "expression_heygirl_zhe.png",
    emoji65: "expression_heziji_1.png",
    emoji66: "expression_heziji_10.png",
    emoji67: "expression_heziji_11.png",
    emoji68: "expression_heziji_12.png",
    emoji69: "expression_heziji_13.png",
    emoji70: "expression_heziji_14.png",
    emoji71: "expression_heziji_15.png",
    emoji72: "expression_heziji_16.png",
    emoji73: "expression_heziji_17.png",
    emoji74: "expression_heziji_18.png",
    emoji75: "expression_heziji_19.png",
    emoji76: "expression_heziji_2.png",
    emoji77: "expression_heziji_20.png",
    emoji78: "expression_heziji_21.png",
    emoji79: "expression_heziji_22.png",
    emoji80: "expression_heziji_23.png",
    emoji81: "expression_heziji_24.png",
    emoji82: "expression_heziji_25.png",
    emoji83: "expression_heziji_26.png",
    emoji84: "expression_heziji_27.png",
    emoji85: "expression_heziji_28.png",
    emoji86: "expression_heziji_29.png",
    emoji87: "expression_heziji_3.png",
    emoji88: "expression_heziji_30.png",
    emoji89: "expression_heziji_31.png",
    emoji90: "expression_heziji_32.png",
    emoji91: "expression_heziji_4.png",
    emoji92: "expression_heziji_5.png",
    emoji93: "expression_heziji_6.png",
    emoji94: "expression_heziji_7.png",
    emoji95: "expression_heziji_8.png",
    emoji96: "expression_heziji_9.png",
  },
  recordIP: false,
});

document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll("pre").forEach((block) => {
    hljs.highlightBlock(block);
  });
});

function setCookie(key, value) {
  localStorage.setItem(key, value);
}

function getCookie(key) {
  var data = localStorage.getItem(key);
  return data;
}

function updateStyle() {
  if (getCookie("style") == "white") {
    $("#footer").attr("style", "color: #51525d;");
    $(".flink").attr("style", "color: #51525d;");
    $(".ba").attr("style", "color: #51525d;");
    $("#bodyx").attr("class", "bg_white");
    $("#update_style").attr("checked", false);
  } else {
    $("#footer").attr("style", "");
    $(".flink").attr("style", "");
    $(".ba").attr("style", "");
    $("#bodyx").attr("class", "bg_black");
    $("#update_style").attr("checked", true);
  }
}

// 博客運行時間統計
function blogRuntime() {
  var now = new Date();
  var grt = new Date("05/10/2019 18:00:00"); //起始時間 "MM/DD/YYYY"
  now.setTime(now.getTime() + 250);
  days = (now - grt) / 1000 / 60 / 60 / 24;
  dnum = Math.floor(days);
  hours = (now - grt) / 1000 / 60 / 60 - 24 * dnum;
  hnum = Math.floor(hours);
  if (String(hnum).length == 1) {
    hnum = "0" + hnum;
  }
  minutes = (now - grt) / 1000 / 60 - 24 * 60 * dnum - 60 * hnum;
  mnum = Math.floor(minutes);
  if (String(mnum).length == 1) {
    mnum = "0" + mnum;
  }
  seconds =
    (now - grt) / 1000 - 24 * 60 * 60 * dnum - 60 * 60 * hnum - 60 * mnum;
  snum = Math.round(seconds);
  if (String(snum).length == 1) {
    snum = "0" + snum;
  }
  document.getElementById("timeDate").innerHTML =
    "本博客已運行時間 " + dnum + " 天 ";
  document.getElementById("times").innerHTML =
    hnum + " 小時 " + mnum + " 分 " + snum + " 秒";
}

// GET DATA FROM LOCALSTORAGE
if (getCookie("style") == null) {
  setCookie("style", web_style);
  updateStyle();
} else if (getCookie("style") == "white") {
  setCookie("style", "white");
  updateStyle();
  console.log("setting white style");
} else if (getCookie("style") == "black") {
  setCookie("style", "black");
  updateStyle();
}

$("#update_style").change(function () {
  var checked = $("#update_style").is(":checked");
  if (checked) {
    setCookie("style", "black");
    updateStyle();
  } else {
    setCookie("style", "white");
    updateStyle();
  }
});

// 文章過期提醒
if (typeof pub_date != "undefined") {
  var now = Date.now();
  var interval = parseInt(now - pub_date);
  if (interval >= 3600 * 24 * 90 * 1000) {
    var days = parseInt(interval / (24 * 60 * 60 * 1000));
    $(".day_num").text(days);
  } else {
    $(".post-overdue-notice").remove();
  }
}

setInterval("blogRuntime()", 250);

if (window.console && window.console.log) {
  console.log(
    "\n %c Web %c  https://inewsk.me Last Update: 03-29-2022 \n",
    "margin: 1em 0; padding: 5px 10px; background: #6d9ee7; color: #fff",
    "margin: 1em 0; padding: 5px 0px; background: #3d3d3d;"
  );
}
