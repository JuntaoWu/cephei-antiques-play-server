/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "cert.pem",
    "revision": "12d569806c04069d2d7ef7baa8d72fea"
  },
  {
    "url": "images/icons-192.png",
    "revision": "c14c655f8f406ecef2ab61713cd9b2fe"
  },
  {
    "url": "images/icons-512.png",
    "revision": "98ed5ce171929aab0653a755f13ea3c1"
  },
  {
    "url": "index.html",
    "revision": "4cc64570defc4ce009d55e1893d61614"
  },
  {
    "url": "js/assetsmanager.min_e1440ef3.js",
    "revision": "a1c87284cbf20835d61566be2294fbd6"
  },
  {
    "url": "js/default.thm_494817ee.js",
    "revision": "c2afc1172043dfb09d9a56b48083cc96"
  },
  {
    "url": "js/dragonBones.min_6252b9c4.js",
    "revision": "8e2f39e62dbea0106e177ec0748aaca7"
  },
  {
    "url": "js/egret.min_40e267ce.js",
    "revision": "584a8b97b0dbdab1c8ef825168fc6dec"
  },
  {
    "url": "js/egret.web.min_29018c52.js",
    "revision": "9010cc6e29c92a01064f64113c96ae78"
  },
  {
    "url": "js/eui.min_9cf92601.js",
    "revision": "83a29edcc9a222d4687c9d40d2b6070f"
  },
  {
    "url": "js/game.min_45aa06f6.js",
    "revision": "9b128bc335b0ced149a2cc7724688ec8"
  },
  {
    "url": "js/lodash.min_fca082dd.js",
    "revision": "01cab91737db40659a75ab627660da58"
  },
  {
    "url": "js/main.min_c373077f.js",
    "revision": "f01cba565883800492f731adb11de48a"
  },
  {
    "url": "js/promise.min_83a6a5d.js",
    "revision": "1db72e0812aeb36ffec5285a2e14959f"
  },
  {
    "url": "js/puremvc.min_15c0395c.js",
    "revision": "d4b787e02731d8f1e018dbdd976ba053"
  },
  {
    "url": "js/tween.min_6c5a88f9.js",
    "revision": "20f8a48b4726c837db3d3cb6dfeaf8b1"
  },
  {
    "url": "key.pem",
    "revision": "67c0e2a5b583f067cbd0cd51c1bbfa46"
  },
  {
    "url": "manifest.json",
    "revision": "f59e43e65cac2035974cb42edfdc916a"
  },
  {
    "url": "manifest.pwa.json",
    "revision": "c2d054146353c61cb96947fc28c2e4dc"
  },
  {
    "url": "miniGame/resource/assets/ani/jiemi_ske.json",
    "revision": "4440ef931e72c99107a5e7d5c94f402c"
  },
  {
    "url": "miniGame/resource/assets/ani/jiemi_tex.json",
    "revision": "0536a20363c8fc7934e1566db212999f"
  },
  {
    "url": "miniGame/resource/assets/ani/jiemi_tex.png",
    "revision": "50d27594fd3ee9d4373e572618ef1f2b"
  },
  {
    "url": "miniGame/resource/assets/background/background.png",
    "revision": "d6e26a12901e99ea0986afc2235401da"
  },
  {
    "url": "miniGame/resource/assets/Button/button_down.png",
    "revision": "878334d13048afd6b6b061e8b156dadb"
  },
  {
    "url": "miniGame/resource/assets/Button/button_up.png",
    "revision": "a6341a65c7155a4edbbf1f39bc7932d9"
  },
  {
    "url": "miniGame/resource/assets/CheckBox/checkbox_select_disabled.png",
    "revision": "dd9aa43f0bf6cbb969f7cfa238734ee9"
  },
  {
    "url": "miniGame/resource/assets/CheckBox/checkbox_select_down.png",
    "revision": "71e5f029838a1b6ffc11198097555e4b"
  },
  {
    "url": "miniGame/resource/assets/CheckBox/checkbox_select_up.png",
    "revision": "68a00c5f12172b1a2f658925d69a998b"
  },
  {
    "url": "miniGame/resource/assets/CheckBox/checkbox_unselect.png",
    "revision": "2ffa97740e6d6ea0b005b4465255b098"
  },
  {
    "url": "miniGame/resource/assets/game/bar-bg.png",
    "revision": "4a1fe4d0ff9e0416a468ca1091064c15"
  },
  {
    "url": "miniGame/resource/assets/game/bar-icon.json",
    "revision": "ccb0ae5c8382126e9dce66cc0a6c3914"
  },
  {
    "url": "miniGame/resource/assets/game/bar-icon.png",
    "revision": "84625b74af430e61d7ae445326e4af5c"
  },
  {
    "url": "miniGame/resource/assets/game/game-bg.png",
    "revision": "1bd61c0ce04d08de374dc841b57c7ec9"
  },
  {
    "url": "miniGame/resource/assets/game/game-btn.json",
    "revision": "4f075e8a93d843690e338ddfa4e87597"
  },
  {
    "url": "miniGame/resource/assets/game/game-btn.png",
    "revision": "d043158aacc90bbe93c73e9e2ecc35e0"
  },
  {
    "url": "miniGame/resource/assets/game/head-bg.png",
    "revision": "44b81535634465e16e8ce2655616a4a3"
  },
  {
    "url": "miniGame/resource/assets/game/heart.png",
    "revision": "6d14c294f1c694e4738cee80541f9be4"
  },
  {
    "url": "miniGame/resource/assets/game/heiban.png",
    "revision": "56776d3c9dfba9b547ed8c71c342c39d"
  },
  {
    "url": "miniGame/resource/assets/game/hintCardNumber.png",
    "revision": "914e999987344f524e9170e52b3ad52b"
  },
  {
    "url": "miniGame/resource/assets/game/input-bg.png",
    "revision": "b43cd8562fae8906e3d21972acc2c94a"
  },
  {
    "url": "miniGame/resource/assets/game/input-item.png",
    "revision": "ed4997c85fe9cea19d98ac30030aa8b2"
  },
  {
    "url": "miniGame/resource/assets/game/no_btnmanage.png",
    "revision": "6ff54bf279effc6bfa5fbc860f722d47"
  },
  {
    "url": "miniGame/resource/assets/game/no.png",
    "revision": "2d3a4c5d150f53ea032a355d7d53a01b"
  },
  {
    "url": "miniGame/resource/assets/game/option-bg.png",
    "revision": "2dba9c7d0c2753ac224200efc6e273a5"
  },
  {
    "url": "miniGame/resource/assets/game/tili.png",
    "revision": "d18ff5c5cb01ed1eaf29293ab80a9623"
  },
  {
    "url": "miniGame/resource/assets/game/tips-ellipse.png",
    "revision": "fc27623b3bf6a82c27bfbcbbcc093250"
  },
  {
    "url": "miniGame/resource/assets/game/yes.png",
    "revision": "ec1489f61c875d9e52019cef4a3c1f95"
  },
  {
    "url": "miniGame/resource/assets/ItemRenderer/selected.png",
    "revision": "94efb85255bad50f4b5c1b44f7190d0d"
  },
  {
    "url": "miniGame/resource/assets/M14/1.png",
    "revision": "fb0501872003af683d0b808b292bd375"
  },
  {
    "url": "miniGame/resource/assets/M14/2.png",
    "revision": "dd8091b1349f82ed6a34d8cd0cd92778"
  },
  {
    "url": "miniGame/resource/assets/M14/3.png",
    "revision": "b4db79d654fbe6135699d748cd044b88"
  },
  {
    "url": "miniGame/resource/assets/M14/4.png",
    "revision": "c9f6cc82277778e13d5d139975166797"
  },
  {
    "url": "miniGame/resource/assets/M14/5.png",
    "revision": "d28e88f554283865bd88fb3c4df27c1f"
  },
  {
    "url": "miniGame/resource/assets/M14/6.png",
    "revision": "490d803242d706a94b72c987bf2ced60"
  },
  {
    "url": "miniGame/resource/assets/M14/7.png",
    "revision": "adf92b88e617772d7a4268e22a8c4dc4"
  },
  {
    "url": "miniGame/resource/assets/M14/8.png",
    "revision": "d1b0907832239ac7b25cf5d7a1d04bd1"
  },
  {
    "url": "miniGame/resource/assets/M14/M14_bg.png",
    "revision": "30fe3f18152cddb390c2fc66191a73af"
  },
  {
    "url": "miniGame/resource/assets/M14/m14.png",
    "revision": "f722987f2b917e97a0f05d215d278e44"
  },
  {
    "url": "miniGame/resource/assets/M17/a.png",
    "revision": "d29b10d8403077f89743fda3b1fb0f0f"
  },
  {
    "url": "miniGame/resource/assets/M17/b.png",
    "revision": "23bf8d0916a5931168ac4538506343c4"
  },
  {
    "url": "miniGame/resource/assets/M17/c.png",
    "revision": "030b9e40cd1021ea6604b0dbdc8e7022"
  },
  {
    "url": "miniGame/resource/assets/M17/d.png",
    "revision": "235a92c2f2cfbc39245fea170529e3cd"
  },
  {
    "url": "miniGame/resource/assets/M17/M17_bg.png",
    "revision": "213fd17d0319a942b3b6de335539d20d"
  },
  {
    "url": "miniGame/resource/assets/M17/nono.png",
    "revision": "519b5c36dfce4d7fbc7118d0dc670d44"
  },
  {
    "url": "miniGame/resource/assets/M17/yy.png",
    "revision": "6548258231b0877cf757c1188ef48927"
  },
  {
    "url": "miniGame/resource/assets/M2/bai.png",
    "revision": "ca3474c4514570488103fe63fc1ed5c6"
  },
  {
    "url": "miniGame/resource/assets/M2/hei.png",
    "revision": "b4d4d7de6082412174565f52458b84ea"
  },
  {
    "url": "miniGame/resource/assets/M2/hong.png",
    "revision": "13b33c9109b3c03b7a319776821be530"
  },
  {
    "url": "miniGame/resource/assets/M2/huang.png",
    "revision": "f01d4dc3a5df1eb4eece377094fe8767"
  },
  {
    "url": "miniGame/resource/assets/M2/kuang.png",
    "revision": "5a44dc7ba4d95c0e53e75ac17e701b89"
  },
  {
    "url": "miniGame/resource/assets/M2/lan.png",
    "revision": "a1ab1c401418078a09dda9a2e8048076"
  },
  {
    "url": "miniGame/resource/assets/M2/M2bg.png",
    "revision": "5adae4f4733b7de8d8369283546ebac1"
  },
  {
    "url": "miniGame/resource/assets/M24/M24_bg.png",
    "revision": "6e2fd79692ce9ae1bafbfb84f68fc21d"
  },
  {
    "url": "miniGame/resource/assets/M24/word_bai.png",
    "revision": "8b099eadf175387a1222b069efb53b00"
  },
  {
    "url": "miniGame/resource/assets/M24/word_he.png",
    "revision": "1a0ec7b82c821211351d8e5f39aeb587"
  },
  {
    "url": "miniGame/resource/assets/M24/word_hei.png",
    "revision": "11ad2e93ca9950cac1e6fd00b11a541f"
  },
  {
    "url": "miniGame/resource/assets/M24/word_jia.png",
    "revision": "ff3b25100a72cf7f7f8904861d14aec1"
  },
  {
    "url": "miniGame/resource/assets/M24/word_jiao.png",
    "revision": "1cec377e23b75829957f2d83e2be2374"
  },
  {
    "url": "miniGame/resource/assets/M24/word_ti.png",
    "revision": "62202b71cd46745175cb67453ba02a2f"
  },
  {
    "url": "miniGame/resource/assets/M24/word_yi.png",
    "revision": "8fcf877bf03100c7102f4d410a575b9b"
  },
  {
    "url": "miniGame/resource/assets/M24/word_zhu.png",
    "revision": "9edb7b942fdb736fd56b708b57eb179d"
  },
  {
    "url": "miniGame/resource/assets/M3/bg1.png",
    "revision": "ada92a7dd37da67cfdaff6a811c364d7"
  },
  {
    "url": "miniGame/resource/assets/M3/bg2.png",
    "revision": "587cfaeab08232fbbcc877dbad104076"
  },
  {
    "url": "miniGame/resource/assets/M3/key1.png",
    "revision": "3db577734a289690bb13789022268843"
  },
  {
    "url": "miniGame/resource/assets/M3/key2.png",
    "revision": "6a40ca4cd3e6f94facb3d37ca9ad909b"
  },
  {
    "url": "miniGame/resource/assets/M3/shang.png",
    "revision": "e219e28908612b5a999cbb5af4d52e42"
  },
  {
    "url": "miniGame/resource/assets/M3/trunoff.png",
    "revision": "f33533eadcad43298d0fb373dc01501f"
  },
  {
    "url": "miniGame/resource/assets/M3/turnon.png",
    "revision": "fee1a0f28e9221f780d6514fac3d18ef"
  },
  {
    "url": "miniGame/resource/assets/M3/word_guo.png",
    "revision": "477de361d09d3d5e24d452d8aeab93c5"
  },
  {
    "url": "miniGame/resource/assets/M3/word_ren.png",
    "revision": "a69c73e345b0bd35f85b272c98b5870a"
  },
  {
    "url": "miniGame/resource/assets/M3/word_shi.png",
    "revision": "d44aa8a00cb4421b110452b615f7c7b3"
  },
  {
    "url": "miniGame/resource/assets/M3/word_xin.png",
    "revision": "938f5f609c496c4f0f10f1e4f3315692"
  },
  {
    "url": "miniGame/resource/assets/M3/xia.png",
    "revision": "7693d5cbd1b8e34fb021afd36d5f166e"
  },
  {
    "url": "miniGame/resource/assets/M5/M5_1.png",
    "revision": "46697961e9c90d7ccb5e0100bbfc032c"
  },
  {
    "url": "miniGame/resource/assets/M5/M5_2.png",
    "revision": "feba6dd6b55c263fbd33834dcac32fc8"
  },
  {
    "url": "miniGame/resource/assets/M5/M5_3.png",
    "revision": "bfc53e94155e4127fafb4170d17b91f6"
  },
  {
    "url": "miniGame/resource/assets/M5/M5_4.png",
    "revision": "99ea5503dcc6f83fa65928ebf9d8d65a"
  },
  {
    "url": "miniGame/resource/assets/M5/M5_5.png",
    "revision": "c2698c61fb10b9367b41667e37f59cff"
  },
  {
    "url": "miniGame/resource/assets/M5/M5_6.png",
    "revision": "c119eceaae9d1d322e56898fe7f50eda"
  },
  {
    "url": "miniGame/resource/assets/M5/M5_7.png",
    "revision": "fe86b1375406024e304364d1f8e4b402"
  },
  {
    "url": "miniGame/resource/assets/M5/M5_8.png",
    "revision": "a5b12071e5aed89cb794939d65f1346a"
  },
  {
    "url": "miniGame/resource/assets/M5/M5_9.png",
    "revision": "5aea63b28f8eab89507de2faf38b67d2"
  },
  {
    "url": "miniGame/resource/assets/M5/M5_bg.png",
    "revision": "9df015f8ca82337cd791b638553e537b"
  },
  {
    "url": "miniGame/resource/assets/M6/bg.png",
    "revision": "260e66b17bfa22d06e478ad8033f37a8"
  },
  {
    "url": "miniGame/resource/assets/M6/ha1.png",
    "revision": "2a0b7b921d0fa2d3dc683a07440d9f24"
  },
  {
    "url": "miniGame/resource/assets/M6/ha2.png",
    "revision": "99d6d68d797188ad5f4f6eebb5f6de46"
  },
  {
    "url": "miniGame/resource/assets/M6/ha3.png",
    "revision": "601755492accb9b3a0bab92433f59b2a"
  },
  {
    "url": "miniGame/resource/assets/M6/ha4.png",
    "revision": "b79aeb1171e19c9653ac893adea04b80"
  },
  {
    "url": "miniGame/resource/assets/M6/ha5.png",
    "revision": "8746d1fc3e5acb680a94d013d4c68f8d"
  },
  {
    "url": "miniGame/resource/assets/M9/bg.png",
    "revision": "fc77094efaef5b9af70122b1cb8c9d30"
  },
  {
    "url": "miniGame/resource/assets/M9/ren.png",
    "revision": "44783eef8b2d70e84f281898d19ca9dc"
  },
  {
    "url": "miniGame/resource/assets/manage/btn-plot.png",
    "revision": "6457bd11ba5775f2f2cc2a1cc4d00d95"
  },
  {
    "url": "miniGame/resource/assets/manage/dialog-box.png",
    "revision": "39bbbd6fbc8e707bdac85338e223f8d4"
  },
  {
    "url": "miniGame/resource/assets/manage/ellipse.png",
    "revision": "85cae3aa861ee8d017a3ddddb8eae6d7"
  },
  {
    "url": "miniGame/resource/assets/manage/icon-clock.png",
    "revision": "a1179e4ed57dbc4ff66d3701b2fc903b"
  },
  {
    "url": "miniGame/resource/assets/manage/icon-group.png",
    "revision": "ef2ea328a53e328e992f7aabbe659603"
  },
  {
    "url": "miniGame/resource/assets/manage/icon-money.png",
    "revision": "fb26242fa71615d617e0380e39e84fbb"
  },
  {
    "url": "miniGame/resource/assets/manage/manage-antiqe.json",
    "revision": "8616705e0f168a87ddc3d47edc2dd7a4"
  },
  {
    "url": "miniGame/resource/assets/manage/manage-antiqe.png",
    "revision": "f24328e9df748b30cb6e1bfa8164cb4b"
  },
  {
    "url": "miniGame/resource/assets/manage/manage-card1.png",
    "revision": "c49b2b8a984cd9c5980585154050cff1"
  },
  {
    "url": "miniGame/resource/assets/manage/manage-card2.png",
    "revision": "e978da409b0eb44a165e7afdc0a716ef"
  },
  {
    "url": "miniGame/resource/assets/manage/manage-errer.png",
    "revision": "fa549328ae0a9afb1a93115ded9a0ea4"
  },
  {
    "url": "miniGame/resource/assets/manage/manage-right.png",
    "revision": "b23e77961a109665bf7f65d190403826"
  },
  {
    "url": "miniGame/resource/assets/manage/money.png",
    "revision": "fbb4fb4ba595fa32f409017cf9a41b92"
  },
  {
    "url": "miniGame/resource/assets/manage/mu_gao.png",
    "revision": "1d8f32c80f574b5e7dedea4f846da11a"
  },
  {
    "url": "miniGame/resource/assets/manage/mu.png",
    "revision": "0bfe5ef80b24c74a21631da888337a5b"
  },
  {
    "url": "miniGame/resource/assets/manage/qing_gao.png",
    "revision": "d0ee2a81c8fe2c88e8e1fbb93a746c15"
  },
  {
    "url": "miniGame/resource/assets/manage/qing.png",
    "revision": "dc1217c696152013ed8e10381830519b"
  },
  {
    "url": "miniGame/resource/assets/manage/shu_gao.png",
    "revision": "cb02fc993272e4a95fba4c0a7a51fe23"
  },
  {
    "url": "miniGame/resource/assets/manage/shu.png",
    "revision": "a4f041ada04f7ca7b685a38f1372fff2"
  },
  {
    "url": "miniGame/resource/assets/manage/skip-btn.png",
    "revision": "1e0599ab0d803d5d5e95cff1fd129e5d"
  },
  {
    "url": "miniGame/resource/assets/manage/tutorial.png",
    "revision": "5a2bcccddc4fa021518be2447210b69b"
  },
  {
    "url": "miniGame/resource/assets/manage/yu_gao.png",
    "revision": "37833e757ffb87e82ee9178ecae5948f"
  },
  {
    "url": "miniGame/resource/assets/manage/yu.png",
    "revision": "e5018a58ee7d18a9b80d2c8a48b0c4d5"
  },
  {
    "url": "miniGame/resource/assets/Panel/border.png",
    "revision": "a4ff3e088a39fef12556e404e768244a"
  },
  {
    "url": "miniGame/resource/assets/Panel/btn-cancel.png",
    "revision": "efa7c53342ede179d5c77ca0b187f20b"
  },
  {
    "url": "miniGame/resource/assets/Panel/btn-confirm.png",
    "revision": "23ff0ea822c4fd7da419381f1a5c37e6"
  },
  {
    "url": "miniGame/resource/assets/Panel/header.png",
    "revision": "46c313e8c024d3bf069767075842b713"
  },
  {
    "url": "miniGame/resource/assets/Panel/not-get.png",
    "revision": "256665242f08b4fcccf357d2ce55418d"
  },
  {
    "url": "miniGame/resource/assets/Panel/popup-bg.png",
    "revision": "e89524c692a58f268fc83858cadea3f7"
  },
  {
    "url": "miniGame/resource/assets/Panel/scene-btn.json",
    "revision": "87eb888c6ad499f25946253883fa0bba"
  },
  {
    "url": "miniGame/resource/assets/Panel/scene-btn.png",
    "revision": "c0a82ce8f0459a4420df1103972e8fcc"
  },
  {
    "url": "miniGame/resource/assets/Panel/scene-text.json",
    "revision": "c36755375614d560a3e934d6f3361a26"
  },
  {
    "url": "miniGame/resource/assets/Panel/scene-text.png",
    "revision": "bab74356000bfa69c41653c93c25d665"
  },
  {
    "url": "miniGame/resource/assets/ProgressBar/progress-bg.png",
    "revision": "73e740df3c719c94f7d01880122ff1b8"
  },
  {
    "url": "miniGame/resource/assets/ProgressBar/progress.png",
    "revision": "db3c2ee2cf4f1ef094a6c6accb9c530f"
  },
  {
    "url": "miniGame/resource/assets/ProgressBar/thumb_pb.png",
    "revision": "903295905d99cabc4c2b679959d55373"
  },
  {
    "url": "miniGame/resource/assets/ProgressBar/track_pb.png",
    "revision": "60e6154d678d5e516dfe3f84b47dd894"
  },
  {
    "url": "miniGame/resource/assets/questions/answer_right.png",
    "revision": "2244b42630186fd1475fd8c714f352af"
  },
  {
    "url": "miniGame/resource/assets/questions/m01.png",
    "revision": "ca9025834e8f637160a152f8a6ef76e7"
  },
  {
    "url": "miniGame/resource/assets/questions/m04.png",
    "revision": "d2d97791040acffb59205ae5694b3ab7"
  },
  {
    "url": "miniGame/resource/assets/questions/M07.png",
    "revision": "fe076b27a4768722a3a6fab0dc59d533"
  },
  {
    "url": "miniGame/resource/assets/questions/m08-bg.png",
    "revision": "201110a2a64e7aa5b80835d9e8cdf190"
  },
  {
    "url": "miniGame/resource/assets/questions/m08-item.json",
    "revision": "c0483cf3c45d32f94092cd8cdb09d48c"
  },
  {
    "url": "miniGame/resource/assets/questions/m08-item.png",
    "revision": "8c164a912e4308049ef9760dbc2f9f02"
  },
  {
    "url": "miniGame/resource/assets/questions/m10.png",
    "revision": "1be1716c33ee7da252b2b69789492fdd"
  },
  {
    "url": "miniGame/resource/assets/questions/M11.png",
    "revision": "f34f728cf263bc4b5d89e662fa27dad5"
  },
  {
    "url": "miniGame/resource/assets/questions/m12.png",
    "revision": "256ac75bef93653e822734e197576553"
  },
  {
    "url": "miniGame/resource/assets/questions/m13.png",
    "revision": "5c5bea6bdb444107f456415a28881723"
  },
  {
    "url": "miniGame/resource/assets/questions/m15.png",
    "revision": "df70c4b2e6df4b4e033a414bfa1c4c72"
  },
  {
    "url": "miniGame/resource/assets/questions/m16-bg.png",
    "revision": "7315d7f9736cde8ce0f111015c30c5d1"
  },
  {
    "url": "miniGame/resource/assets/questions/m16-item.json",
    "revision": "a8d5d53baa7e7dcb56a8e9144014c5fc"
  },
  {
    "url": "miniGame/resource/assets/questions/m16-item.png",
    "revision": "e1012001e3645127e35bae08c65294ef"
  },
  {
    "url": "miniGame/resource/assets/questions/m17.png",
    "revision": "88cb69d8b61d938519c54ffb856a3cff"
  },
  {
    "url": "miniGame/resource/assets/questions/m18-bg.png",
    "revision": "a414539720e8c6c3bba44df2feb7d763"
  },
  {
    "url": "miniGame/resource/assets/questions/m18-item.json",
    "revision": "b75d3d52f294d48337b92373ec1b893c"
  },
  {
    "url": "miniGame/resource/assets/questions/m18-item.png",
    "revision": "3f3e2c7293fd499975b9a747327c3ffb"
  },
  {
    "url": "miniGame/resource/assets/questions/m19.png",
    "revision": "58ac37fcf2cdbcbd1773228e6002ce6b"
  },
  {
    "url": "miniGame/resource/assets/questions/m20-bg.png",
    "revision": "6bba3c280958954b130f6b2c8dc591c6"
  },
  {
    "url": "miniGame/resource/assets/questions/m20-item.json",
    "revision": "6ed70faa9bed62f6f56e2e4492253f17"
  },
  {
    "url": "miniGame/resource/assets/questions/m20-item.png",
    "revision": "10e6530febd1a72a95a241ebd161b31d"
  },
  {
    "url": "miniGame/resource/assets/questions/m21.png",
    "revision": "f84a67f37097e2af7972710ab296a23a"
  },
  {
    "url": "miniGame/resource/assets/questions/m22.png",
    "revision": "4e5ea96b641559f95d2c9e5f5ffda5b2"
  },
  {
    "url": "miniGame/resource/assets/questions/m23.png",
    "revision": "5f9de9e52e1d95cc2d9e76dff7f4a219"
  },
  {
    "url": "miniGame/resource/assets/questions/m42-bg.png",
    "revision": "acc64cb05cf2362fe52b5cce7d510735"
  },
  {
    "url": "miniGame/resource/assets/questions/m42-item.json",
    "revision": "877a805d59231e4f715e8b0e54f479dc"
  },
  {
    "url": "miniGame/resource/assets/questions/m42-item.png",
    "revision": "e8679a60bfe4e49717173d42ba3fcc79"
  },
  {
    "url": "miniGame/resource/assets/questions/m42-tips.png",
    "revision": "af0ac660029c8a7ad4bf06af01c589f7"
  },
  {
    "url": "miniGame/resource/assets/questions/m8.2/m8.2_00.png",
    "revision": "12526bff02887ff7dd56a4850cd3d15b"
  },
  {
    "url": "miniGame/resource/assets/questions/m8.2/m8.2_01.png",
    "revision": "2d1864f5323272352d048ce16ead6a35"
  },
  {
    "url": "miniGame/resource/assets/questions/m8.2/m8.2_02.png",
    "revision": "17571f88914f52861d670b559ab81679"
  },
  {
    "url": "miniGame/resource/assets/questions/m8.2/m8.2_03.png",
    "revision": "bd1f3297947e05a2e2e4e278e3a6b51a"
  },
  {
    "url": "miniGame/resource/assets/questions/m8.2/m8.2_04.png",
    "revision": "a8a01fbfcd283e7b26f1c5541a7d4899"
  },
  {
    "url": "miniGame/resource/assets/questions/m8.2/m8.2_05.png",
    "revision": "0a1c8dbbdde8dc2e2969e1f0efd0799c"
  },
  {
    "url": "miniGame/resource/assets/questions/m8.2/m8.2_06.png",
    "revision": "521050a40bf3e49436423bdbc5e384d4"
  },
  {
    "url": "miniGame/resource/assets/questions/m8.2/m8.2-bg.png",
    "revision": "7237ba72db32b0f31ecff0da672d7e2a"
  },
  {
    "url": "miniGame/resource/assets/questions/m8.2/m8.2-tips.png",
    "revision": "fb8efc27ed56e41bc64356fa0ed1e754"
  },
  {
    "url": "miniGame/resource/assets/RadioButton/radiobutton_select_disabled.png",
    "revision": "725d226305491301ca8cce8aa68d08d6"
  },
  {
    "url": "miniGame/resource/assets/RadioButton/radiobutton_select_down.png",
    "revision": "725d226305491301ca8cce8aa68d08d6"
  },
  {
    "url": "miniGame/resource/assets/RadioButton/radiobutton_select_up.png",
    "revision": "bf16aacfe9b30037835e1c6482eee507"
  },
  {
    "url": "miniGame/resource/assets/RadioButton/radiobutton_unselect.png",
    "revision": "cd40270b37ab3a5248ea2c61f883934c"
  },
  {
    "url": "miniGame/resource/assets/scene/s0.png",
    "revision": "4f7d357fd19d888ac57da3046e67b515"
  },
  {
    "url": "miniGame/resource/assets/scene/s1.png",
    "revision": "f434293265c21d76f27f5eae5522f092"
  },
  {
    "url": "miniGame/resource/assets/scene/s10.png",
    "revision": "1cd5c35b1701c4b3553be13925f25cc3"
  },
  {
    "url": "miniGame/resource/assets/scene/s11.jpg",
    "revision": "a6119f43a3c9068d062946ba966ab5a1"
  },
  {
    "url": "miniGame/resource/assets/scene/s12.jpg",
    "revision": "5004f787747d8ab8af0fd77f0e61118f"
  },
  {
    "url": "miniGame/resource/assets/scene/s13.jpg",
    "revision": "fa469113e3d8ac8435ea3b4b7b0b6e46"
  },
  {
    "url": "miniGame/resource/assets/scene/s14.png",
    "revision": "bf0dd83fae5480f8d995750a956111b5"
  },
  {
    "url": "miniGame/resource/assets/scene/s15.png",
    "revision": "e059579fcb9f128951a8fdd99f4f4887"
  },
  {
    "url": "miniGame/resource/assets/scene/s16.png",
    "revision": "ea6ed352b75153d194c57edea3dfae29"
  },
  {
    "url": "miniGame/resource/assets/scene/s17.png",
    "revision": "4765fecb1c41ef8506543a00553a4e14"
  },
  {
    "url": "miniGame/resource/assets/scene/s18.png",
    "revision": "aea1b2530662cdaccef86b3c63eebfb0"
  },
  {
    "url": "miniGame/resource/assets/scene/s19.png",
    "revision": "a9b82bf48c403778320d58b000003ccf"
  },
  {
    "url": "miniGame/resource/assets/scene/s2.jpg",
    "revision": "4600a7592cdb2eb682a796600b383932"
  },
  {
    "url": "miniGame/resource/assets/scene/s20.jpg",
    "revision": "9db07b02acfcd26218bb77e2bb3b8fd5"
  },
  {
    "url": "miniGame/resource/assets/scene/s21.png",
    "revision": "2c0f7b9a37989a02615c5cdfb8ea4116"
  },
  {
    "url": "miniGame/resource/assets/scene/s22.png",
    "revision": "5a9c5186a8e8bc57b27a9620c69faf10"
  },
  {
    "url": "miniGame/resource/assets/scene/s23.jpg",
    "revision": "49d4bd74b1389ed490311fd72a0344bd"
  },
  {
    "url": "miniGame/resource/assets/scene/s24.png",
    "revision": "9c76fbf66002e1443c97b94c0c5f0c8d"
  },
  {
    "url": "miniGame/resource/assets/scene/s25.jpg",
    "revision": "65ca812b9a640d639fce67e54eef9706"
  },
  {
    "url": "miniGame/resource/assets/scene/s26.jpg",
    "revision": "f371a9934b5981dcaa59b3f1620dc492"
  },
  {
    "url": "miniGame/resource/assets/scene/s27.jpg",
    "revision": "9c4992c81e0f1067467243409a854a97"
  },
  {
    "url": "miniGame/resource/assets/scene/s28.jpg",
    "revision": "c59ff7fe9a57bebc2e51ce7ffda331d5"
  },
  {
    "url": "miniGame/resource/assets/scene/s29.jpg",
    "revision": "dd966bbc21f0ed00b4d35a041caa0ace"
  },
  {
    "url": "miniGame/resource/assets/scene/s3.png",
    "revision": "3b396e2c6582d2de2880d46c6f8ac8c1"
  },
  {
    "url": "miniGame/resource/assets/scene/s30.png",
    "revision": "b66acbefe7d5724554a514a385c9a8cf"
  },
  {
    "url": "miniGame/resource/assets/scene/s31.jpg",
    "revision": "7193c75b04384596e2de093ed311c459"
  },
  {
    "url": "miniGame/resource/assets/scene/s32.jpg",
    "revision": "7a55e0d7eb6d8b1a1478c703f0bc4eb8"
  },
  {
    "url": "miniGame/resource/assets/scene/s33.jpg",
    "revision": "caf140dde9cd2709120cf152aa8b2771"
  },
  {
    "url": "miniGame/resource/assets/scene/s35.jpg",
    "revision": "f5ac23837f8c12377224558c5a130b2c"
  },
  {
    "url": "miniGame/resource/assets/scene/s38.jpg",
    "revision": "9ce3247ce55bdceb0cc576f5e2a252ce"
  },
  {
    "url": "miniGame/resource/assets/scene/s39.jpg",
    "revision": "26a2f55e9a8bc8b27236abb779ef019d"
  },
  {
    "url": "miniGame/resource/assets/scene/s4.jpg",
    "revision": "36295e1388b1e627982c711bfde609e8"
  },
  {
    "url": "miniGame/resource/assets/scene/s43.jpg",
    "revision": "b2c433773923855e2e83b93f0f69db1f"
  },
  {
    "url": "miniGame/resource/assets/scene/s44.jpg",
    "revision": "6bacb64143c942bc4cd231457fbf9d5b"
  },
  {
    "url": "miniGame/resource/assets/scene/s49.jpg",
    "revision": "0b0fe775caa754f8f74d334f24f9997f"
  },
  {
    "url": "miniGame/resource/assets/scene/s5.jpg",
    "revision": "217797d3fa8b71257ea83529bccfa014"
  },
  {
    "url": "miniGame/resource/assets/scene/s50.jpg",
    "revision": "5aa16c792120c42730079d1e48c9bce3"
  },
  {
    "url": "miniGame/resource/assets/scene/s53.png",
    "revision": "5d2a0788422bc0d7dc5bf9fe58dee90d"
  },
  {
    "url": "miniGame/resource/assets/scene/s54.jpg",
    "revision": "4cdb191259e1af8f1e10884a8680b825"
  },
  {
    "url": "miniGame/resource/assets/scene/s55.jpg",
    "revision": "c056856c4d6df3cf3a0f671ba385c65a"
  },
  {
    "url": "miniGame/resource/assets/scene/s56.png",
    "revision": "9c46721bacc8d2c31948595d7efd4daf"
  },
  {
    "url": "miniGame/resource/assets/scene/s58.png",
    "revision": "52afe2c17c227bfa52ea249b0b0d014b"
  },
  {
    "url": "miniGame/resource/assets/scene/s59.jpg",
    "revision": "a690b9382315cf157d19828f789eecce"
  },
  {
    "url": "miniGame/resource/assets/scene/s6.jpg",
    "revision": "9b1b92cf8e2bffdef1249e5f829d6098"
  },
  {
    "url": "miniGame/resource/assets/scene/s60.png",
    "revision": "1efb09c366e88218c4eeedfbd704c927"
  },
  {
    "url": "miniGame/resource/assets/scene/s61.jpg",
    "revision": "c9d1d45ee24b994f034ecec8dad7f916"
  },
  {
    "url": "miniGame/resource/assets/scene/s62.jpg",
    "revision": "66151a4c007203307915e1c7bbd681f8"
  },
  {
    "url": "miniGame/resource/assets/scene/s63.jpg",
    "revision": "b1ac1fce1906bda4ed5a0dd59ee7d066"
  },
  {
    "url": "miniGame/resource/assets/scene/s64.jpg",
    "revision": "94b4efcaeb591f27ff0d3ca0ddde8b27"
  },
  {
    "url": "miniGame/resource/assets/scene/s65.jpg",
    "revision": "3b16e7be841136ec4c0e6ebbca1aefbf"
  },
  {
    "url": "miniGame/resource/assets/scene/s66.jpg",
    "revision": "af3a255f19f8b1e248c12b24fbf0f7d5"
  },
  {
    "url": "miniGame/resource/assets/scene/s67.jpg",
    "revision": "8e5f2df7e899739831042a6037d8f1e5"
  },
  {
    "url": "miniGame/resource/assets/scene/s7.png",
    "revision": "a011687e51832abeb806335fc6a8a166"
  },
  {
    "url": "miniGame/resource/assets/scene/s8.png",
    "revision": "76f02c268a12b850b7384e9c84329b0c"
  },
  {
    "url": "miniGame/resource/assets/scene/s9.png",
    "revision": "2318b5ce69e351a286807fbd2e23a0eb"
  },
  {
    "url": "miniGame/resource/assets/scene/s99.png",
    "revision": "924f68d8cb5a7891500d21e722f69d81"
  },
  {
    "url": "miniGame/resource/assets/ScrollBar/roundthumb.png",
    "revision": "5f550ff68f1240501f035fdc0eda0843"
  },
  {
    "url": "miniGame/resource/assets/ScrollBar/track_sb.png",
    "revision": "541048214115efe2a7a2750cde6b4e54"
  },
  {
    "url": "miniGame/resource/assets/setting/company_logo.png",
    "revision": "859d6ae3d41f111fb6eee59ae8455769"
  },
  {
    "url": "miniGame/resource/assets/setting/company.png",
    "revision": "6eae8f10566f013b55b84ef6019e848c"
  },
  {
    "url": "miniGame/resource/assets/setting/music_close.png",
    "revision": "9f8eb9ceb7af3b7eb08fa66cdebebbf9"
  },
  {
    "url": "miniGame/resource/assets/setting/music_open.png",
    "revision": "2a45f2bb46fc71aa37e92d5a79315998"
  },
  {
    "url": "miniGame/resource/assets/setting/music.png",
    "revision": "1cb0d727238619d47d987b07c5e7f125"
  },
  {
    "url": "miniGame/resource/assets/setting/sound_close.png",
    "revision": "e60c88942b4e4ec7c5c41fa4f1035700"
  },
  {
    "url": "miniGame/resource/assets/setting/sound_open.png",
    "revision": "f29e51548335c3a115af8040981fb160"
  },
  {
    "url": "miniGame/resource/assets/setting/sound.png",
    "revision": "9f88d0102203326d86754ec622081356"
  },
  {
    "url": "miniGame/resource/assets/setting/text_close.png",
    "revision": "d75b92ea05a4b7f93a42ef01ccfff7d3"
  },
  {
    "url": "miniGame/resource/assets/setting/text_open.png",
    "revision": "1d530c4b7731d9fc9508346040ebac09"
  },
  {
    "url": "miniGame/resource/assets/shop/note_bg.png",
    "revision": "217703d3ce8d970e72ae8122826a39b7"
  },
  {
    "url": "miniGame/resource/assets/shop/note_prop.png",
    "revision": "44131e65e8e68bf0566b9c89fe7b536a"
  },
  {
    "url": "miniGame/resource/assets/shop/pay_bg.png",
    "revision": "b9b7dd4c28097f04eb8150830873b39d"
  },
  {
    "url": "miniGame/resource/assets/shop/pay.png",
    "revision": "71716f5c8d0fb9a436722cd4ae906e55"
  },
  {
    "url": "miniGame/resource/assets/shop/power_bg.png",
    "revision": "69150e3cdb88dd8dd753441373f96a2d"
  },
  {
    "url": "miniGame/resource/assets/shop/power_large.png",
    "revision": "0321440212216dc60f2ee945fb4dc7bf"
  },
  {
    "url": "miniGame/resource/assets/shop/power_medium.png",
    "revision": "950e30cde8cd6a814068f1f50e2010bd"
  },
  {
    "url": "miniGame/resource/assets/shop/power_small.png",
    "revision": "52d9b1767796a7746f1f56cbb3575369"
  },
  {
    "url": "miniGame/resource/assets/Slider/thumb.png",
    "revision": "ac46ad4174244342194e74667d57cf1d"
  },
  {
    "url": "miniGame/resource/assets/Slider/track.png",
    "revision": "541048214115efe2a7a2750cde6b4e54"
  },
  {
    "url": "miniGame/resource/assets/Slider/tracklight.png",
    "revision": "5f550ff68f1240501f035fdc0eda0843"
  },
  {
    "url": "miniGame/resource/assets/start/logo.png",
    "revision": "7417e95ce0a86d1f0043bfd070ee6f5f"
  },
  {
    "url": "miniGame/resource/assets/start/no_manage.png",
    "revision": "8dac39c9c56faf9de0804f027e3f46da"
  },
  {
    "url": "miniGame/resource/assets/start/start-btn.json",
    "revision": "78ef4a02fd8249c8b15bf24e40195c2d"
  },
  {
    "url": "miniGame/resource/assets/start/start-btn.png",
    "revision": "f2519c51a5133ad7ae77adb389c2ef43"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/handle.png",
    "revision": "1b0a0f006c66a7264ab62a897076bd12"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/off.png",
    "revision": "808df10161bd36abd6600f16e131aca3"
  },
  {
    "url": "miniGame/resource/assets/ToggleSwitch/on.png",
    "revision": "1dccf23d316f65d77c6497d3de987b1d"
  },
  {
    "url": "miniGame/resource/config/chapter-plot.json",
    "revision": "46b91088ac598b6c1fd26e2ba4758068"
  },
  {
    "url": "miniGame/resource/config/guide.json",
    "revision": "194100f4e65fce4d0731d17e86a4789a"
  },
  {
    "url": "miniGame/resource/config/manage-change.json",
    "revision": "b4553c447e3fc5638b08a54e2a6c38bf"
  },
  {
    "url": "miniGame/resource/config/manage-event.json",
    "revision": "76254efa29447039ada353bb18cb335f"
  },
  {
    "url": "miniGame/resource/config/plot-options.json",
    "revision": "c3902dc963ff836cbff8442408e636af"
  },
  {
    "url": "miniGame/resource/config/question.json",
    "revision": "3cb2bbe44e987208d4d1a385e02d2064"
  },
  {
    "url": "miniGame/resource/config/scene.json",
    "revision": "656551af34aa1289d09982d24fa8de69"
  },
  {
    "url": "miniGame/resource/config/select-options.json",
    "revision": "e4ac16a7de6025308e6230ef48c4869e"
  },
  {
    "url": "miniGame/resource/config/shop.json",
    "revision": "6c780e5e402dbbab3593d68a977f3beb"
  },
  {
    "url": "miniGame/resource/default.res.json",
    "revision": "c085fded789a26360bb096a40adf921b"
  },
  {
    "url": "miniGame/resource/default.thm.json",
    "revision": "b4e17a6bc523bdf25a29861a25e4c2bd"
  },
  {
    "url": "resource/assets/bg.jpg",
    "revision": "bfbd6002c35cd2bfa99ec5333c2e28f7"
  },
  {
    "url": "resource/assets/Button/button_down.png",
    "revision": "878334d13048afd6b6b061e8b156dadb"
  },
  {
    "url": "resource/assets/Button/button_up.png",
    "revision": "a6341a65c7155a4edbbf1f39bc7932d9"
  },
  {
    "url": "resource/assets/CheckBox/checkbox_select_disabled.png",
    "revision": "dd9aa43f0bf6cbb969f7cfa238734ee9"
  },
  {
    "url": "resource/assets/CheckBox/checkbox_select_down.png",
    "revision": "71e5f029838a1b6ffc11198097555e4b"
  },
  {
    "url": "resource/assets/CheckBox/checkbox_select_up.png",
    "revision": "68a00c5f12172b1a2f658925d69a998b"
  },
  {
    "url": "resource/assets/CheckBox/checkbox_unselect.png",
    "revision": "2ffa97740e6d6ea0b005b4465255b098"
  },
  {
    "url": "resource/assets/egret_icon.png",
    "revision": "d7c7550013fbcae72390f7ce17c78e19"
  },
  {
    "url": "resource/assets/game/btn-finish.png",
    "revision": "8215d848f8d6067147c385af9bdd664c"
  },
  {
    "url": "resource/assets/game/game-bg.png",
    "revision": "5e6c44abe7070990f22cc26f4f12b5ea"
  },
  {
    "url": "resource/assets/game/game-btn.json",
    "revision": "d8c0a8dfb8f10167c90b2fc785011f0b"
  },
  {
    "url": "resource/assets/game/game-btn.png",
    "revision": "59f0c6bb0c4440d61db181a4714d1179"
  },
  {
    "url": "resource/assets/game/input-bg.png",
    "revision": "b43cd8562fae8906e3d21972acc2c94a"
  },
  {
    "url": "resource/assets/game/input-item.png",
    "revision": "ed4997c85fe9cea19d98ac30030aa8b2"
  },
  {
    "url": "resource/assets/game/option-bg.png",
    "revision": "bbf5acc49807e9ffe708d0ad222ad8c1"
  },
  {
    "url": "resource/assets/ItemRenderer/selected.png",
    "revision": "94efb85255bad50f4b5c1b44f7190d0d"
  },
  {
    "url": "resource/assets/M14/1.png",
    "revision": "fb0501872003af683d0b808b292bd375"
  },
  {
    "url": "resource/assets/M14/2.png",
    "revision": "dd8091b1349f82ed6a34d8cd0cd92778"
  },
  {
    "url": "resource/assets/M14/3.png",
    "revision": "b4db79d654fbe6135699d748cd044b88"
  },
  {
    "url": "resource/assets/M14/4.png",
    "revision": "c9f6cc82277778e13d5d139975166797"
  },
  {
    "url": "resource/assets/M14/5.png",
    "revision": "d28e88f554283865bd88fb3c4df27c1f"
  },
  {
    "url": "resource/assets/M14/6.png",
    "revision": "490d803242d706a94b72c987bf2ced60"
  },
  {
    "url": "resource/assets/M14/7.png",
    "revision": "adf92b88e617772d7a4268e22a8c4dc4"
  },
  {
    "url": "resource/assets/M14/8.png",
    "revision": "d1b0907832239ac7b25cf5d7a1d04bd1"
  },
  {
    "url": "resource/assets/M14/M14_bg.png",
    "revision": "30fe3f18152cddb390c2fc66191a73af"
  },
  {
    "url": "resource/assets/M2/bai.png",
    "revision": "ca3474c4514570488103fe63fc1ed5c6"
  },
  {
    "url": "resource/assets/M2/hei.png",
    "revision": "b4d4d7de6082412174565f52458b84ea"
  },
  {
    "url": "resource/assets/M2/hong.png",
    "revision": "13b33c9109b3c03b7a319776821be530"
  },
  {
    "url": "resource/assets/M2/huang.png",
    "revision": "f01d4dc3a5df1eb4eece377094fe8767"
  },
  {
    "url": "resource/assets/M2/kuang.png",
    "revision": "a297020a91b9790839e5d4eff52e435c"
  },
  {
    "url": "resource/assets/M2/lan.png",
    "revision": "a1ab1c401418078a09dda9a2e8048076"
  },
  {
    "url": "resource/assets/M2/M2bg.png",
    "revision": "5adae4f4733b7de8d8369283546ebac1"
  },
  {
    "url": "resource/assets/M3/bg1.png",
    "revision": "f537daf02ffbcf47563ed492d6c7db72"
  },
  {
    "url": "resource/assets/M3/bg2.png",
    "revision": "1d3a84051e77b1223c3ff9c5d876a502"
  },
  {
    "url": "resource/assets/M3/shang.png",
    "revision": "e219e28908612b5a999cbb5af4d52e42"
  },
  {
    "url": "resource/assets/M3/trunoff.png",
    "revision": "f33533eadcad43298d0fb373dc01501f"
  },
  {
    "url": "resource/assets/M3/turnon.png",
    "revision": "fee1a0f28e9221f780d6514fac3d18ef"
  },
  {
    "url": "resource/assets/M3/word_guo.png",
    "revision": "477de361d09d3d5e24d452d8aeab93c5"
  },
  {
    "url": "resource/assets/M3/word_ren.png",
    "revision": "a69c73e345b0bd35f85b272c98b5870a"
  },
  {
    "url": "resource/assets/M3/word_shi.png",
    "revision": "d44aa8a00cb4421b110452b615f7c7b3"
  },
  {
    "url": "resource/assets/M3/word_xin.png",
    "revision": "938f5f609c496c4f0f10f1e4f3315692"
  },
  {
    "url": "resource/assets/M3/xia.png",
    "revision": "7693d5cbd1b8e34fb021afd36d5f166e"
  },
  {
    "url": "resource/assets/M5/M5_1.png",
    "revision": "46697961e9c90d7ccb5e0100bbfc032c"
  },
  {
    "url": "resource/assets/M5/M5_2.png",
    "revision": "feba6dd6b55c263fbd33834dcac32fc8"
  },
  {
    "url": "resource/assets/M5/M5_3.png",
    "revision": "bfc53e94155e4127fafb4170d17b91f6"
  },
  {
    "url": "resource/assets/M5/M5_4.png",
    "revision": "99ea5503dcc6f83fa65928ebf9d8d65a"
  },
  {
    "url": "resource/assets/M5/M5_5.png",
    "revision": "c2698c61fb10b9367b41667e37f59cff"
  },
  {
    "url": "resource/assets/M5/M5_6.png",
    "revision": "c119eceaae9d1d322e56898fe7f50eda"
  },
  {
    "url": "resource/assets/M5/M5_7.png",
    "revision": "fe86b1375406024e304364d1f8e4b402"
  },
  {
    "url": "resource/assets/M5/M5_8.png",
    "revision": "a5b12071e5aed89cb794939d65f1346a"
  },
  {
    "url": "resource/assets/M5/M5_9.png",
    "revision": "5aea63b28f8eab89507de2faf38b67d2"
  },
  {
    "url": "resource/assets/M5/M5_bg.png",
    "revision": "9df015f8ca82337cd791b638553e537b"
  },
  {
    "url": "resource/assets/M6/bg.png",
    "revision": "260e66b17bfa22d06e478ad8033f37a8"
  },
  {
    "url": "resource/assets/M6/ha1.png",
    "revision": "2a0b7b921d0fa2d3dc683a07440d9f24"
  },
  {
    "url": "resource/assets/M6/ha2.png",
    "revision": "99d6d68d797188ad5f4f6eebb5f6de46"
  },
  {
    "url": "resource/assets/M6/ha3.png",
    "revision": "601755492accb9b3a0bab92433f59b2a"
  },
  {
    "url": "resource/assets/M6/ha4.png",
    "revision": "b79aeb1171e19c9653ac893adea04b80"
  },
  {
    "url": "resource/assets/M6/ha5.png",
    "revision": "8746d1fc3e5acb680a94d013d4c68f8d"
  },
  {
    "url": "resource/assets/Panel/border.png",
    "revision": "a4ff3e088a39fef12556e404e768244a"
  },
  {
    "url": "resource/assets/Panel/header.png",
    "revision": "46c313e8c024d3bf069767075842b713"
  },
  {
    "url": "resource/assets/ProgressBar/thumb_pb.png",
    "revision": "903295905d99cabc4c2b679959d55373"
  },
  {
    "url": "resource/assets/ProgressBar/track_pb.png",
    "revision": "60e6154d678d5e516dfe3f84b47dd894"
  },
  {
    "url": "resource/assets/questions/m01.png",
    "revision": "ca9025834e8f637160a152f8a6ef76e7"
  },
  {
    "url": "resource/assets/questions/m02.png",
    "revision": "5378d2378af4d236c29853aab7553b41"
  },
  {
    "url": "resource/assets/questions/m03.png",
    "revision": "abfb8ebe61d2e1e74b1d1ff4f8347df5"
  },
  {
    "url": "resource/assets/questions/m04.png",
    "revision": "d2d97791040acffb59205ae5694b3ab7"
  },
  {
    "url": "resource/assets/questions/m05.png",
    "revision": "261a079f9d2ddd70f72b2e91d6b98203"
  },
  {
    "url": "resource/assets/questions/m06.png",
    "revision": "fa7958dcf4dbc4eb48f74a4f40c5a941"
  },
  {
    "url": "resource/assets/questions/M07.png",
    "revision": "fe076b27a4768722a3a6fab0dc59d533"
  },
  {
    "url": "resource/assets/questions/m08-bg.png",
    "revision": "201110a2a64e7aa5b80835d9e8cdf190"
  },
  {
    "url": "resource/assets/questions/m08-item.json",
    "revision": "c0483cf3c45d32f94092cd8cdb09d48c"
  },
  {
    "url": "resource/assets/questions/m08-item.png",
    "revision": "8c164a912e4308049ef9760dbc2f9f02"
  },
  {
    "url": "resource/assets/questions/M08.png",
    "revision": "806a2c070e3ceba51f8840f06ba2fe6b"
  },
  {
    "url": "resource/assets/questions/M09.png",
    "revision": "60df3ba949dd649e59d77484b439f20f"
  },
  {
    "url": "resource/assets/questions/m10.png",
    "revision": "1be1716c33ee7da252b2b69789492fdd"
  },
  {
    "url": "resource/assets/questions/M11.png",
    "revision": "a62761c30fde85e1c7d03d883a77b210"
  },
  {
    "url": "resource/assets/questions/m12.png",
    "revision": "256ac75bef93653e822734e197576553"
  },
  {
    "url": "resource/assets/questions/m15.png",
    "revision": "df70c4b2e6df4b4e033a414bfa1c4c72"
  },
  {
    "url": "resource/assets/questions/m16-bg.png",
    "revision": "7315d7f9736cde8ce0f111015c30c5d1"
  },
  {
    "url": "resource/assets/questions/m16-item.json",
    "revision": "0a8f37b38f177b89c9c6e5b761f6cac4"
  },
  {
    "url": "resource/assets/questions/m16-item.png",
    "revision": "39cffdb0027e0997cc493b6f9537419d"
  },
  {
    "url": "resource/assets/questions/m16.png",
    "revision": "7315d7f9736cde8ce0f111015c30c5d1"
  },
  {
    "url": "resource/assets/questions/m17.png",
    "revision": "b1fdddbecd89afcf67569413e0214d51"
  },
  {
    "url": "resource/assets/questions/m18-bg.png",
    "revision": "a414539720e8c6c3bba44df2feb7d763"
  },
  {
    "url": "resource/assets/questions/m18-item.json",
    "revision": "b75d3d52f294d48337b92373ec1b893c"
  },
  {
    "url": "resource/assets/questions/m18-item.png",
    "revision": "3f3e2c7293fd499975b9a747327c3ffb"
  },
  {
    "url": "resource/assets/questions/m18.png",
    "revision": "5f455b7a6f7427cf7be54e1909f63cac"
  },
  {
    "url": "resource/assets/questions/m19.png",
    "revision": "08dc357aa04ecde32e1e8e6c639b47d4"
  },
  {
    "url": "resource/assets/questions/m20-bg.png",
    "revision": "ec8a7fe4c996d729fb2b97b1b1bda0c8"
  },
  {
    "url": "resource/assets/questions/m20-item.json",
    "revision": "6ed70faa9bed62f6f56e2e4492253f17"
  },
  {
    "url": "resource/assets/questions/m20-item.png",
    "revision": "10e6530febd1a72a95a241ebd161b31d"
  },
  {
    "url": "resource/assets/questions/m20.png",
    "revision": "f8e0c98e1097305e9b50680385b3ad42"
  },
  {
    "url": "resource/assets/questions/m21.png",
    "revision": "f84a67f37097e2af7972710ab296a23a"
  },
  {
    "url": "resource/assets/questions/m22.png",
    "revision": "4e5ea96b641559f95d2c9e5f5ffda5b2"
  },
  {
    "url": "resource/assets/questions/M24.png",
    "revision": "edf58ff7036a29a81e2818ef7f0ea3fc"
  },
  {
    "url": "resource/assets/questions/m42-item.json",
    "revision": "24410ac66ea6add1cba0431cc12a5b06"
  },
  {
    "url": "resource/assets/questions/m42-item.png",
    "revision": "e0ea6589aae58695d1c99bcb5350c001"
  },
  {
    "url": "resource/assets/questions/m42-tips.png",
    "revision": "2c997d8305de23c1056362a17698f6d9"
  },
  {
    "url": "resource/assets/questions/m42.png",
    "revision": "acc64cb05cf2362fe52b5cce7d510735"
  },
  {
    "url": "resource/assets/RadioButton/radiobutton_select_disabled.png",
    "revision": "725d226305491301ca8cce8aa68d08d6"
  },
  {
    "url": "resource/assets/RadioButton/radiobutton_select_down.png",
    "revision": "725d226305491301ca8cce8aa68d08d6"
  },
  {
    "url": "resource/assets/RadioButton/radiobutton_select_up.png",
    "revision": "bf16aacfe9b30037835e1c6482eee507"
  },
  {
    "url": "resource/assets/RadioButton/radiobutton_unselect.png",
    "revision": "cd40270b37ab3a5248ea2c61f883934c"
  },
  {
    "url": "resource/assets/ScrollBar/roundthumb.png",
    "revision": "5f550ff68f1240501f035fdc0eda0843"
  },
  {
    "url": "resource/assets/ScrollBar/track_sb.png",
    "revision": "541048214115efe2a7a2750cde6b4e54"
  },
  {
    "url": "resource/assets/Slider/thumb.png",
    "revision": "ac46ad4174244342194e74667d57cf1d"
  },
  {
    "url": "resource/assets/Slider/track.png",
    "revision": "541048214115efe2a7a2750cde6b4e54"
  },
  {
    "url": "resource/assets/Slider/tracklight.png",
    "revision": "5f550ff68f1240501f035fdc0eda0843"
  },
  {
    "url": "resource/assets/ToggleSwitch/handle.png",
    "revision": "1b0a0f006c66a7264ab62a897076bd12"
  },
  {
    "url": "resource/assets/ToggleSwitch/off.png",
    "revision": "808df10161bd36abd6600f16e131aca3"
  },
  {
    "url": "resource/assets/ToggleSwitch/on.png",
    "revision": "1dccf23d316f65d77c6497d3de987b1d"
  },
  {
    "url": "resource/config/question.json",
    "revision": "1e1345bb40e043e1a81891ac50901b13"
  },
  {
    "url": "resource/config/select-options.json",
    "revision": "e4ac16a7de6025308e6230ef48c4869e"
  },
  {
    "url": "resource/default.res.json",
    "revision": "4bfa2e5191a7896692f79052bd1238f8"
  },
  {
    "url": "resource/default.thm.json",
    "revision": "48fa83a32e022be2e9e46e2dbfad66ea"
  },
  {
    "url": "stylesheets/style.css",
    "revision": "d88b6fc51036cea4ea659b304568e088"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
