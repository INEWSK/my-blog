var web_style = $("#web_style").val();
var valine_appId = $("#valine_appid").val();
var valine_appKey = $("#valine_appKey").val();

new Valine({
  el: "#vcomments", // Valine 初始化掛載器
  appId: valine_appId,
  appKey: valine_appKey,
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
    $("#bodyx").attr("data-theme", "light");
    $("#update_style").attr("checked", false);
  } else {
    $("#footer").attr("style", "");
    $(".flink").attr("style", "");
    $(".ba").attr("style", "");
    $("#bodyx").attr("data-theme", "dark");
    $("#update_style").attr("checked", true);
  }
}

function isMobile() {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
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

// 文章時間提醒
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

// 返回頂部按鈕
$(function () {
  if (isMobile()) return;
  var $btn = $(".back-to-top-btn");
  $(document).scroll(function () {
    if ($(this).scrollTop() < 300) {
      $btn.fadeOut();
    } else {
      $btn.fadeIn();
    }
  });
  // scroll body to top on click
  $btn.on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });
});

// fancybox
$(function () {
  $(".posts img")
    .not("[hidden]")
    .each(function () {
      var $image = $(this);
      var alt = $image.attr("title");
      var src = $image.attr("src");
      $imageWrapLink = $image.wrap('<a href="' + src + '"></a>').parent("a");
      $imageWrapLink.attr("data-fancybox", "images");
      if (alt) {
        $imageWrapLink.attr("data-caption", alt);
      }
    });

  $().fancybox({
    selector: '[data-fancybox="images"]',
    thumbs: false,
    hash: true,
    loop: false,
    fullScreen: false,
    slideShow: false,
    protect: true,
  });
});

// 圖片懶加載
$(async function () {
  $(".posts img").each(function () {
    var $image = $(this);
    var src = $image.attr("src");
    var sizes = "auto";

    $image.addClass("lazyload");
    $image.attr({ "data-src": src, "data-sizes": sizes }).removeAttr("src");
  });
});

setInterval("blogRuntime()", 250);

if (window.console && window.console.log) {
  console.log(
    "\n %c Web %c  https://inewsk.me Last Update: 04-04-2022 \n",
    "margin: 1em 0; padding: 5px 10px; background: #6d9ee7; color: #fff",
    "margin: 1em 0; padding: 5px 0px; background: #3d3d3d;"
  );
}
