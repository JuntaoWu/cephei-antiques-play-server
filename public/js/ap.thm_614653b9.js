window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/components/CubeStopItemSkin.exml'] = window.CubeStopItemSkin = (function (_super) {
	__extends(CubeStopItemSkin, _super);
	function CubeStopItemSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 143;
		this.width = 137;
		this.elementsContent = [this._Image1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.img"],[0],this._Image1,"source");
	}
	var _proto = CubeStopItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.height = 143;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 137;
		return t;
	};
	return CubeStopItemSkin;
})(eui.Skin);generateEUI.paths['resource/components/InputItemSkin.exml'] = window.InputItemSkin = (function (_super) {
	__extends(InputItemSkin, _super);
	function InputItemSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Label1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this._Label1,"text");
	}
	var _proto = InputItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "input-item";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.horizontalCenter = 0;
		t.size = 60;
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		return t;
	};
	return InputItemSkin;
})(eui.Skin);generateEUI.paths['resource/components/ManageGameItemSkin.exml'] = window.ManageGameItemSkin = (function (_super) {
	__extends(ManageGameItemSkin, _super);
	function ManageGameItemSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.res"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.isSelected"],[0],this._Label1,"visible");
	}
	var _proto = ManageGameItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "manage-card2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.bottom = 20;
		t.horizontalCenter = 0;
		t.text = "已选择";
		return t;
	};
	return ManageGameItemSkin;
})(eui.Skin);generateEUI.paths['resource/components/QuestionSelectItemSkin.exml'] = window.QuestionSelectItemSkin = (function (_super) {
	__extends(QuestionSelectItemSkin, _super);
	function QuestionSelectItemSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Label1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.fontSize"],[0],this._Label1,"size");
		eui.Binding.$bindProperties(this, ["hostComponent.data.option"],[0],this._Label1,"text");
	}
	var _proto = QuestionSelectItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.scale9Grid = new egret.Rectangle(45,43,224,37);
		t.source = "option-bg";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "FangSong";
		t.horizontalCenter = 0;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 90;
		return t;
	};
	return QuestionSelectItemSkin;
})(eui.Skin);generateEUI.paths['resource/components/SceneDetailsItemSkin.exml'] = window.SceneDetailsItemSkin = (function (_super) {
	__extends(SceneDetailsItemSkin, _super);
	function SceneDetailsItemSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.width = 300;
		this.elementsContent = [this._Image1_i(),this._Label1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.scale"],[0],this._Image1,"scaleX");
		eui.Binding.$bindProperties(this, ["hostComponent.data.scale"],[0],this._Image1,"scaleY");
		eui.Binding.$bindProperties(this, ["hostComponent.data.res"],[0],this._Image1,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this._Label1,"text");
	}
	var _proto = SceneDetailsItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 45;
		t.horizontalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.bold = true;
		t.bottom = 0;
		t.fontFamily = "SimSun";
		t.horizontalCenter = 0;
		t.size = 40;
		t.textColor = 0x020202;
		return t;
	};
	return SceneDetailsItemSkin;
})(eui.Skin);generateEUI.paths['resource/components/SwitchItemSkin.exml'] = window.SwitchItemSkin = (function (_super) {
	__extends(SwitchItemSkin, _super);
	function SwitchItemSkin() {
		_super.call(this);
		this.skinParts = ["buttonImg"];
		
		this.height = 139;
		this.width = 187;
		this.elementsContent = [this.buttonImg_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.img"],[0],this.buttonImg,"source");
	}
	var _proto = SwitchItemSkin.prototype;

	_proto.buttonImg_i = function () {
		var t = new eui.Image();
		this.buttonImg = t;
		t.height = 139;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 187;
		return t;
	};
	return SwitchItemSkin;
})(eui.Skin);generateEUI.paths['resource/containers/ApLoadingUI.exml'] = window.ApLoadingUI = (function (_super) {
	__extends(ApLoadingUI, _super);
	var ApLoadingUI$Skin1 = 	(function (_super) {
		__extends(ApLoadingUI$Skin1, _super);
		function ApLoadingUI$Skin1() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ApLoadingUI$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "btn-anonymouslogin";
			t.percentWidth = 100;
			return t;
		};
		return ApLoadingUI$Skin1;
	})(eui.Skin);

	var ApLoadingUI$Skin2 = 	(function (_super) {
		__extends(ApLoadingUI$Skin2, _super);
		function ApLoadingUI$Skin2() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ApLoadingUI$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "btn-wxlogin";
			t.percentWidth = 100;
			return t;
		};
		return ApLoadingUI$Skin2;
	})(eui.Skin);

	function ApLoadingUI() {
		_super.call(this);
		this.skinParts = ["loadingBackground","loadingText","labelText","loadingLabel","progressBg","progressBar","groupLoading","btnAnonymousLogin","btnLogin"];
		
		this.width = 720;
		this.elementsContent = [this.loadingBackground_i(),this.groupLoading_i(),this.btnAnonymousLogin_i(),this.btnLogin_i()];
	}
	var _proto = ApLoadingUI.prototype;

	_proto.loadingBackground_i = function () {
		var t = new eui.Image();
		this.loadingBackground = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "background";
		t.top = 0;
		return t;
	};
	_proto.groupLoading_i = function () {
		var t = new eui.Group();
		this.groupLoading = t;
		t.width = 720;
		t.elementsContent = [this.loadingLabel_i(),this.progressBg_i(),this.progressBar_i()];
		return t;
	};
	_proto.loadingLabel_i = function () {
		var t = new eui.Group();
		this.loadingLabel = t;
		t.horizontalCenter = 0;
		t.elementsContent = [this.loadingText_i(),this.labelText_i()];
		return t;
	};
	_proto.loadingText_i = function () {
		var t = new eui.Label();
		this.loadingText = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.left = 0;
		t.text = "数据加载中，请等待...";
		t.textColor = 0xfdb449;
		t.verticalCenter = 0;
		return t;
	};
	_proto.labelText_i = function () {
		var t = new eui.Label();
		this.labelText = t;
		t.fontFamily = "Arial";
		t.text = "Loading...";
		t.textColor = 0x000000;
		t.x = 316;
		return t;
	};
	_proto.progressBg_i = function () {
		var t = new eui.Image();
		this.progressBg = t;
		t.height = 60;
		t.source = "progress-bg";
		t.width = 720;
		return t;
	};
	_proto.progressBar_i = function () {
		var t = new eui.Image();
		this.progressBar = t;
		t.height = 60;
		t.source = "progress";
		t.width = 720;
		return t;
	};
	_proto.btnAnonymousLogin_i = function () {
		var t = new eui.Button();
		this.btnAnonymousLogin = t;
		t.visible = false;
		t.width = 720;
		t.skinName = ApLoadingUI$Skin1;
		return t;
	};
	_proto.btnLogin_i = function () {
		var t = new eui.Button();
		this.btnLogin = t;
		t.visible = false;
		t.width = 720;
		t.skinName = ApLoadingUI$Skin2;
		return t;
	};
	return ApLoadingUI;
})(eui.Skin);generateEUI.paths['resource/containers/DeveloperWindow.exml'] = window.DeveloperWindow = (function (_super) {
	__extends(DeveloperWindow, _super);
	var DeveloperWindow$Skin3 = 	(function (_super) {
		__extends(DeveloperWindow$Skin3, _super);
		function DeveloperWindow$Skin3() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = DeveloperWindow$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-back-other";
			return t;
		};
		return DeveloperWindow$Skin3;
	})(eui.Skin);

	function DeveloperWindow() {
		_super.call(this);
		this.skinParts = ["closeButton","scrollGroup"];
		
		this.elementsContent = [this._Image1_i(),this._Group2_i(),this.scrollGroup_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.titleRes"],[0],this._Image4,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.appVersion"],[0],this._Label3,"text");
	}
	var _proto = DeveloperWindow.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "background";
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.width = 720;
		t.elementsContent = [this._Image2_i(),this.closeButton_i(),this._Group1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "head-bg";
		t.width = 720;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.verticalCenter = 0;
		t.x = 35;
		t.skinName = DeveloperWindow$Skin3;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Label1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "title-bg";
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "SimSun";
		t.horizontalCenter = 0;
		t.size = 50;
		t.text = "制作人员";
		t.textColor = 0x020202;
		t.verticalCenter = 0;
		return t;
	};
	_proto.scrollGroup_i = function () {
		var t = new eui.Scroller();
		this.scrollGroup = t;
		t.bottom = 30;
		t.horizontalCenter = 0;
		t.scrollPolicyH = "off";
		t.top = 150;
		t.width = 640;
		t.viewport = this._Group4_i();
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Image5_i(),this._Label2_i(),this._Label3_i(),this._Image6_i(),this._Image7_i(),this._Group3_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "logo";
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "版本信息";
		t.textColor = 0x603811;
		t.y = 240;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 35;
		t.textColor = 0x603811;
		t.y = 290;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "company_logo";
		t.y = 340;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "company";
		t.y = 650;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 780;
		t.elementsContent = [this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Label7_i(),this._Label8_i(),this._Label9_i(),this._Label10_i(),this._Label11_i(),this._Label12_i(),this._Label13_i(),this._Label14_i(),this._Label15_i(),this._Label16_i()];
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "联系我们";
		t.textColor = 0x603811;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "13880988238";
		t.textColor = 0x603811;
		t.y = 50;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "office@hzsdgames.com";
		t.textColor = 0x603811;
		t.y = 100;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "——制作组——";
		t.textColor = 0x603811;
		t.y = 170;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "制作人：";
		t.textColor = 0x603811;
		t.y = 230;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "黄一鸣";
		t.textColor = 0x603811;
		t.y = 290;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "策划、文案：";
		t.textColor = 0x603811;
		t.y = 350;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "东方遥、袁皓明、周晨顺";
		t.textColor = 0x603811;
		t.y = 400;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "程序：";
		t.textColor = 0x603811;
		t.y = 460;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "吴俊涛、陈伦森、昊天";
		t.textColor = 0x603811;
		t.y = 520;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "美术：";
		t.textColor = 0x603811;
		t.y = 580;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.lineSpacing = 5;
		t.size = 35;
		t.text = "唐煌、暗黑熊、王书纪";
		t.textColor = 0x603811;
		t.y = 640;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.lineSpacing = 5;
		t.size = 35;
		t.text = "《古董局中局》是著名作家马伯庸创作的长篇小说作品，由马伯庸和中联百文保留其小说所有权利";
		t.textAlign = "center";
		t.textColor = 0x603811;
		t.verticalAlign = "middle";
		t.width = 654;
		t.y = 700;
		return t;
	};
	return DeveloperWindow;
})(eui.Skin);generateEUI.paths['resource/containers/GameScreen.exml'] = window.GameScreen = (function (_super) {
	__extends(GameScreen, _super);
	var GameScreen$Skin4 = 	(function (_super) {
		__extends(GameScreen$Skin4, _super);
		function GameScreen$Skin4() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = GameScreen$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-back-game";
			return t;
		};
		return GameScreen$Skin4;
	})(eui.Skin);

	var GameScreen$Skin5 = 	(function (_super) {
		__extends(GameScreen$Skin5, _super);
		function GameScreen$Skin5() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = GameScreen$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-manage";
			return t;
		};
		return GameScreen$Skin5;
	})(eui.Skin);

	var GameScreen$Skin6 = 	(function (_super) {
		__extends(GameScreen$Skin6, _super);
		function GameScreen$Skin6() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = GameScreen$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-picture";
			return t;
		};
		return GameScreen$Skin6;
	})(eui.Skin);

	var GameScreen$Skin7 = 	(function (_super) {
		__extends(GameScreen$Skin7, _super);
		function GameScreen$Skin7() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
		}
		var _proto = GameScreen$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.scale9Grid = new egret.Rectangle(45,43,224,37);
			t.source = "option-bg";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.anchorOffsetX = 0;
			t.bold = true;
			t.fontFamily = "FangSong";
			t.horizontalCenter = 0;
			t.size = 45;
			t.text = "重置";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return GameScreen$Skin7;
	})(eui.Skin);

	var GameScreen$Skin8 = 	(function (_super) {
		__extends(GameScreen$Skin8, _super);
		function GameScreen$Skin8() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
		}
		var _proto = GameScreen$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.scale9Grid = new egret.Rectangle(45,43,224,37);
			t.source = "option-bg";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.anchorOffsetX = 0;
			t.bold = true;
			t.fontFamily = "FangSong";
			t.horizontalCenter = 0;
			t.size = 45;
			t.text = "确认";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		return GameScreen$Skin8;
	})(eui.Skin);

	var GameScreen$Skin9 = 	(function (_super) {
		__extends(GameScreen$Skin9, _super);
		function GameScreen$Skin9() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Group1_i()];
		}
		var _proto = GameScreen$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-tips";
			return t;
		};
		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.name = "hintGroup";
			t.x = 5;
			t.elementsContent = [this._Image2_i(),this._BitmapLabel1_i()];
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "tips-ellipse";
			return t;
		};
		_proto._BitmapLabel1_i = function () {
			var t = new eui.BitmapLabel();
			t.font = "hintCardNumber_fnt";
			t.horizontalCenter = 0;
			t.name = "hintCards";
			t.text = "10";
			t.textAlign = "center";
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			t.x = 200;
			return t;
		};
		return GameScreen$Skin9;
	})(eui.Skin);

	var GameScreen$Skin10 = 	(function (_super) {
		__extends(GameScreen$Skin10, _super);
		function GameScreen$Skin10() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = GameScreen$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-help";
			return t;
		};
		return GameScreen$Skin10;
	})(eui.Skin);

	function GameScreen() {
		_super.call(this);
		this.skinParts = ["btnBack","btnManage","btnPicture","fatigueValue","no_btnmanage","sceneBg","sceneAddGroup","sceneGroup","huangAndMubar","pkBarGroup","scrollGroup","bottomGroup","plotSelectList","btnReset","btnConfirm","footGroup","textGroup","miniGame","btnTips","btnHelp","questionGroup"];
		
		this.elementsContent = [this._Group2_i(),this._Group4_i(),this.textGroup_i(),this.questionGroup_i(),this._Group9_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.showScene"],[0],this._Group4,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.description"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.question"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.showReset"],[0],this._Group6,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.questionRes"],[0],this._Image12,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.showMiniGame"],[0],this.miniGame,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.showPoints"],[0],this._Group7,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.points"],[0],this._Label3,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.showTransition"],[0],this._Group9,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.transitionText"],[0],this._Label4,"text");
	}
	var _proto = GameScreen.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.width = 720;
		t.elementsContent = [this._Image1_i(),this.btnBack_i(),this.btnManage_i(),this.btnPicture_i(),this._Group1_i(),this.no_btnmanage_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "head-bg";
		t.width = 720;
		return t;
	};
	_proto.btnBack_i = function () {
		var t = new eui.Button();
		this.btnBack = t;
		t.verticalCenter = 0;
		t.x = 20;
		t.skinName = GameScreen$Skin4;
		return t;
	};
	_proto.btnManage_i = function () {
		var t = new eui.Button();
		this.btnManage = t;
		t.verticalCenter = 0.5;
		t.visible = false;
		t.x = 108;
		t.skinName = GameScreen$Skin5;
		return t;
	};
	_proto.btnPicture_i = function () {
		var t = new eui.Button();
		this.btnPicture = t;
		t.verticalCenter = 1;
		t.x = 204;
		t.skinName = GameScreen$Skin6;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.verticalCenter = 15;
		t.x = 300;
		t.elementsContent = [this._Image2_i(),this.fatigueValue_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "tili";
		return t;
	};
	_proto.fatigueValue_i = function () {
		var t = new eui.Label();
		this.fatigueValue = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49;
		t.size = 60;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xf7f7f7;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 115;
		return t;
	};
	_proto.no_btnmanage_i = function () {
		var t = new eui.Image();
		this.no_btnmanage = t;
		t.source = "no_btnmanage";
		t.x = 108;
		t.y = 16;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		this._Group4 = t;
		t.top = 135;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 720;
		t.elementsContent = [this._Image3_i(),this.sceneGroup_i(),this.pkBarGroup_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 590;
		t.horizontalCenter = 0;
		t.source = "s0";
		t.width = 720;
		return t;
	};
	_proto.sceneGroup_i = function () {
		var t = new eui.Group();
		this.sceneGroup = t;
		t.touchEnabled = false;
		t.elementsContent = [this.sceneBg_i(),this.sceneAddGroup_i()];
		return t;
	};
	_proto.sceneBg_i = function () {
		var t = new eui.Image();
		this.sceneBg = t;
		t.height = 590;
		t.horizontalCenter = 0;
		t.source = "s0";
		t.width = 720;
		return t;
	};
	_proto.sceneAddGroup_i = function () {
		var t = new eui.Group();
		this.sceneAddGroup = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		return t;
	};
	_proto.pkBarGroup_i = function () {
		var t = new eui.Group();
		this.pkBarGroup = t;
		t.width = 720;
		t.y = 5;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Group3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.left = 20;
		t.source = "img-h";
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.right = 20;
		t.source = "img-m";
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.width = 490;
		t.y = 10;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this.huangAndMubar_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(66,3,397,23);
		t.source = "bar-bg";
		t.percentWidth = 100;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.left = 19;
		t.source = "huangyanyan";
		t.width = 150;
		t.y = 29;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.right = 19;
		t.source = "munai";
		t.width = 150;
		t.y = 29;
		return t;
	};
	_proto.huangAndMubar_i = function () {
		var t = new eui.Group();
		this.huangAndMubar = t;
		t.horizontalCenter = 0;
		t.width = 450;
		t.y = 2;
		t.elementsContent = [this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.maxWidth = 450;
		t.name = "huangyanyan";
		t.source = "h-bar";
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.maxWidth = 450;
		t.name = "munai";
		t.right = -1;
		t.source = "m-bar";
		return t;
	};
	_proto.textGroup_i = function () {
		var t = new eui.Group();
		this.textGroup = t;
		t.bottom = 0;
		t.top = 725;
		t.elementsContent = [this._Image11_i(),this.scrollGroup_i(),this.footGroup_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(90,70,540,422);
		t.source = "game-bg";
		t.width = 720;
		return t;
	};
	_proto.scrollGroup_i = function () {
		var t = new eui.Scroller();
		this.scrollGroup = t;
		t.bottom = 372;
		t.horizontalCenter = 0;
		t.top = 25;
		t.width = 640;
		t.viewport = this._Group5_i();
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Label1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.lineSpacing = 10;
		t.textColor = 0x000000;
		t.width = 640;
		t.y = 15;
		return t;
	};
	_proto.footGroup_i = function () {
		var t = new eui.Group();
		this.footGroup = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.minHeight = 200;
		t.elementsContent = [this._Label2_i(),this.bottomGroup_i(),this.plotSelectList_i(),this._Group6_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.lineSpacing = 10;
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 640;
		t.y = 20;
		return t;
	};
	_proto.bottomGroup_i = function () {
		var t = new eui.Group();
		this.bottomGroup = t;
		t.bottom = 130;
		t.horizontalCenter = 0;
		t.top = 80;
		return t;
	};
	_proto.plotSelectList_i = function () {
		var t = new eui.List();
		this.plotSelectList = t;
		t.bottom = 20;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 640;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.columnWidth = 640;
		t.orientation = "columns";
		t.requestedColumnCount = 1;
		t.verticalGap = 20;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		this._Group6 = t;
		t.bottom = 20;
		t.horizontalCenter = 0;
		t.width = 640;
		t.elementsContent = [this.btnReset_i(),this.btnConfirm_i()];
		return t;
	};
	_proto.btnReset_i = function () {
		var t = new eui.Button();
		this.btnReset = t;
		t.left = 10;
		t.percentWidth = 45;
		t.skinName = GameScreen$Skin7;
		return t;
	};
	_proto.btnConfirm_i = function () {
		var t = new eui.Button();
		this.btnConfirm = t;
		t.right = 10;
		t.percentWidth = 45;
		t.skinName = GameScreen$Skin8;
		return t;
	};
	_proto.questionGroup_i = function () {
		var t = new eui.Group();
		this.questionGroup = t;
		t.top = 135;
		t.visible = true;
		t.width = 720;
		t.elementsContent = [this._Group8_i()];
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Image12_i(),this.miniGame_i(),this.btnTips_i(),this.btnHelp_i(),this._Group7_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		this._Image12 = t;
		t.width = 720;
		return t;
	};
	_proto.miniGame_i = function () {
		var t = new ap.MiniGame();
		this.miniGame = t;
		t.height = 600;
		t.width = 720;
		return t;
	};
	_proto.btnTips_i = function () {
		var t = new eui.Button();
		this.btnTips = t;
		t.bottom = 35;
		t.left = 30;
		t.skinName = GameScreen$Skin9;
		return t;
	};
	_proto.btnHelp_i = function () {
		var t = new eui.Button();
		this.btnHelp = t;
		t.bottom = 35;
		t.right = 30;
		t.skinName = GameScreen$Skin10;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		this._Group7 = t;
		t.bottom = 50;
		t.horizontalCenter = 0;
		t.elementsContent = [this._Image13_i(),this._Label3_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "tips-bg";
		t.width = 480;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.bottom = 10;
		t.horizontalCenter = 0;
		t.maxWidth = 450;
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.top = 10;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		this._Group9 = t;
		t.bottom = 0;
		t.top = 135;
		t.elementsContent = [this._Image14_i(),this._Label4_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(90,70,540,422);
		t.source = "game-bg";
		t.width = 720;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		this._Label4 = t;
		t.horizontalCenter = 0;
		t.size = 60;
		t.textColor = 0x020202;
		t.verticalCenter = 0;
		return t;
	};
	return GameScreen;
})(eui.Skin);generateEUI.paths['resource/containers/M14.exml'] = window.M14Skin = (function (_super) {
	__extends(M14Skin, _super);
	function M14Skin() {
		_super.call(this);
		this.skinParts = ["no1","no2","no3","no4","no5","no6","no7","no8"];
		
		this.height = 591;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
	}
	var _proto = M14Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "M14_bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 591;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 720;
		t.elementsContent = [this.no1_i(),this.no2_i(),this.no3_i(),this.no4_i(),this.no5_i(),this.no6_i(),this.no7_i(),this.no8_i()];
		return t;
	};
	_proto.no1_i = function () {
		var t = new eui.Image();
		this.no1 = t;
		t.anchorOffsetX = 84.5;
		t.anchorOffsetY = 64.5;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1_png";
		t.x = 85.5;
		t.y = 250;
		return t;
	};
	_proto.no2_i = function () {
		var t = new eui.Image();
		this.no2 = t;
		t.anchorOffsetX = 84.5;
		t.anchorOffsetY = 64.5;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "2_png";
		t.x = 270.5;
		t.y = 100;
		return t;
	};
	_proto.no3_i = function () {
		var t = new eui.Image();
		this.no3 = t;
		t.anchorOffsetX = 84.5;
		t.anchorOffsetY = 64.5;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "3_png";
		t.x = 85.5;
		t.y = 100;
		return t;
	};
	_proto.no4_i = function () {
		var t = new eui.Image();
		this.no4 = t;
		t.anchorOffsetX = 84.5;
		t.anchorOffsetY = 64.5;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "4_png";
		t.x = 450.5;
		t.y = 100;
		return t;
	};
	_proto.no5_i = function () {
		var t = new eui.Image();
		this.no5 = t;
		t.anchorOffsetX = 84.5;
		t.anchorOffsetY = 64.5;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "5_png";
		t.x = 450.5;
		t.y = 250;
		return t;
	};
	_proto.no6_i = function () {
		var t = new eui.Image();
		this.no6 = t;
		t.anchorOffsetX = 84.5;
		t.anchorOffsetY = 64.5;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "6_png";
		t.x = 270.5;
		t.y = 250;
		return t;
	};
	_proto.no7_i = function () {
		var t = new eui.Image();
		this.no7 = t;
		t.anchorOffsetX = 84.5;
		t.anchorOffsetY = 64.5;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "7_png";
		t.x = 630.5;
		t.y = 100;
		return t;
	};
	_proto.no8_i = function () {
		var t = new eui.Image();
		this.no8 = t;
		t.anchorOffsetX = 84.5;
		t.anchorOffsetY = 64.5;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "8_png";
		t.x = 630.5;
		t.y = 250;
		return t;
	};
	return M14Skin;
})(eui.Skin);generateEUI.paths['resource/containers/M15.exml'] = window.M15 = (function (_super) {
	__extends(M15, _super);
	var M15$Skin11 = 	(function (_super) {
		__extends(M15$Skin11, _super);
		function M15$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = M15$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "yes";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return M15$Skin11;
	})(eui.Skin);

	var M15$Skin12 = 	(function (_super) {
		__extends(M15$Skin12, _super);
		function M15$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = M15$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "yes";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return M15$Skin12;
	})(eui.Skin);

	var M15$Skin13 = 	(function (_super) {
		__extends(M15$Skin13, _super);
		function M15$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = M15$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "yes";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return M15$Skin13;
	})(eui.Skin);

	var M15$Skin14 = 	(function (_super) {
		__extends(M15$Skin14, _super);
		function M15$Skin14() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = M15$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "yes";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return M15$Skin14;
	})(eui.Skin);

	function M15() {
		_super.call(this);
		this.skinParts = ["button1","button2","button3","button4"];
		
		this.height = 591;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this.button1_i(),this.button2_i(),this.button3_i(),this.button4_i()];
	}
	var _proto = M15.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "m15";
		t.verticalCenter = 0;
		return t;
	};
	_proto.button1_i = function () {
		var t = new eui.Button();
		this.button1 = t;
		t.height = 100;
		t.label = "110";
		t.width = 200;
		t.x = 100;
		t.y = 150;
		t.skinName = M15$Skin11;
		return t;
	};
	_proto.button2_i = function () {
		var t = new eui.Button();
		this.button2 = t;
		t.height = 100;
		t.label = "SOS";
		t.width = 200;
		t.x = 400;
		t.y = 150;
		t.skinName = M15$Skin12;
		return t;
	};
	_proto.button3_i = function () {
		var t = new eui.Button();
		this.button3 = t;
		t.height = 100;
		t.label = "救命";
		t.width = 200;
		t.x = 100;
		t.y = 300;
		t.skinName = M15$Skin13;
		return t;
	};
	_proto.button4_i = function () {
		var t = new eui.Button();
		this.button4 = t;
		t.height = 100;
		t.label = "995";
		t.width = 200;
		t.x = 400;
		t.y = 300;
		t.skinName = M15$Skin14;
		return t;
	};
	return M15;
})(eui.Skin);generateEUI.paths['resource/containers/M17.exml'] = window.M17 = (function (_super) {
	__extends(M17, _super);
	function M17() {
		_super.call(this);
		this.skinParts = ["di","jian","mao","ji"];
		
		this.height = 591;
		this.width = 720;
		this.elementsContent = [this._Group1_i(),this.di_i(),this.jian_i(),this.mao_i(),this.ji_i()];
	}
	var _proto = M17.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "m17";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "nono";
		t.x = 122;
		t.y = 51;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "nono";
		t.x = 243;
		t.y = 50;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "nono";
		t.x = 363;
		t.y = 50;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "nono";
		t.x = 484;
		t.y = 50;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "nono";
		t.x = 200;
		t.y = 320;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "nono";
		t.x = 400;
		t.y = 320;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 34;
		t.anchorOffsetY = 40.5;
		t.source = "b";
		t.x = 176;
		t.y = 105;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 49.5;
		t.anchorOffsetY = 49;
		t.source = "c";
		t.x = 297;
		t.y = 105;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 49.5;
		t.source = "d";
		t.x = 416;
		t.y = 105;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 49;
		t.source = "a";
		t.x = 538;
		t.y = 105;
		return t;
	};
	_proto.di_i = function () {
		var t = new eui.Image();
		this.di = t;
		t.anchorOffsetX = 34;
		t.anchorOffsetY = 40.5;
		t.source = "b";
		t.x = 176;
		t.y = 105;
		return t;
	};
	_proto.jian_i = function () {
		var t = new eui.Image();
		this.jian = t;
		t.anchorOffsetX = 49.5;
		t.anchorOffsetY = 49;
		t.source = "c";
		t.x = 297;
		t.y = 105;
		return t;
	};
	_proto.mao_i = function () {
		var t = new eui.Image();
		this.mao = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 49.5;
		t.source = "d";
		t.x = 416;
		t.y = 105;
		return t;
	};
	_proto.ji_i = function () {
		var t = new eui.Image();
		this.ji = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 49;
		t.source = "a";
		t.x = 538;
		t.y = 105;
		return t;
	};
	return M17;
})(eui.Skin);generateEUI.paths['resource/containers/M2.exml'] = window.M2Skin = (function (_super) {
	__extends(M2Skin, _super);
	function M2Skin() {
		_super.call(this);
		this.skinParts = ["BG","white1","black1","red1","yellow1","blue1","red2","red3","blue2","black2","yellow3","white5","blue4","black6","yellow4","white6","black7","blue7","red5","white2","blue3","black3","yellow2","black4","red4","white3","white4","black5","blue8","white7","black8","red8","yellow7","yellow8","yellow9","blue9","red9","yellow5","white8","yellow6","blue5","blue6","red6","red7","black9","white9","row1_1","row2_1","row3_1","row1_2","row2_2","row3_2","column1_2","column2_2","column3_2","column1_1","column2_1","column3_1"];
		
		this.height = 591;
		this.width = 720;
		this.elementsContent = [this.BG_i(),this._Group1_i(),this._Group2_i(),this._Image1_i()];
	}
	var _proto = M2Skin.prototype;

	_proto.BG_i = function () {
		var t = new eui.Image();
		this.BG = t;
		t.horizontalCenter = 0;
		t.source = "M2bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 516;
		t.horizontalCenter = 0;
		t.verticalCenter = -6;
		t.width = 516;
		t.elementsContent = [this.white1_i(),this.black1_i(),this.red1_i(),this.yellow1_i(),this.blue1_i(),this.red2_i(),this.red3_i(),this.blue2_i(),this.black2_i(),this.yellow3_i(),this.white5_i(),this.blue4_i(),this.black6_i(),this.yellow4_i(),this.white6_i(),this.black7_i(),this.blue7_i(),this.red5_i(),this.white2_i(),this.blue3_i(),this.black3_i(),this.yellow2_i(),this.black4_i(),this.red4_i(),this.white3_i(),this.white4_i(),this.black5_i(),this.blue8_i(),this.white7_i(),this.black8_i(),this.red8_i(),this.yellow7_i(),this.yellow8_i(),this.yellow9_i(),this.blue9_i(),this.red9_i(),this.yellow5_i(),this.white8_i(),this.yellow6_i(),this.blue5_i(),this.blue6_i(),this.red6_i(),this.red7_i(),this.black9_i(),this.white9_i()];
		return t;
	};
	_proto.white1_i = function () {
		var t = new eui.Image();
		this.white1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bai_png";
		t.x = 173;
		t.y = 2;
		return t;
	};
	_proto.black1_i = function () {
		var t = new eui.Image();
		this.black1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "hei_png";
		t.x = 229;
		t.y = 2;
		return t;
	};
	_proto.red1_i = function () {
		var t = new eui.Image();
		this.red1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "hong_png";
		t.x = 285;
		t.y = 2;
		return t;
	};
	_proto.yellow1_i = function () {
		var t = new eui.Image();
		this.yellow1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "huang_png";
		t.x = 173;
		t.y = 58;
		return t;
	};
	_proto.blue1_i = function () {
		var t = new eui.Image();
		this.blue1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "lan_png";
		t.x = 173;
		t.y = 114;
		return t;
	};
	_proto.red2_i = function () {
		var t = new eui.Image();
		this.red2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "hong_png";
		t.x = 229;
		t.y = 58;
		return t;
	};
	_proto.red3_i = function () {
		var t = new eui.Image();
		this.red3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "hong_png";
		t.x = 285;
		t.y = 58;
		return t;
	};
	_proto.blue2_i = function () {
		var t = new eui.Image();
		this.blue2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "lan_png";
		t.x = 229;
		t.y = 114;
		return t;
	};
	_proto.black2_i = function () {
		var t = new eui.Image();
		this.black2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "hei_png";
		t.x = 285;
		t.y = 114;
		return t;
	};
	_proto.yellow3_i = function () {
		var t = new eui.Image();
		this.yellow3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "huang_png";
		t.x = 173;
		t.y = 175;
		return t;
	};
	_proto.white5_i = function () {
		var t = new eui.Image();
		this.white5 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bai_png";
		t.x = 229;
		t.y = 175;
		return t;
	};
	_proto.blue4_i = function () {
		var t = new eui.Image();
		this.blue4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "lan_png";
		t.x = 285;
		t.y = 175;
		return t;
	};
	_proto.black6_i = function () {
		var t = new eui.Image();
		this.black6 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "hei_png";
		t.x = 173;
		t.y = 231;
		return t;
	};
	_proto.yellow4_i = function () {
		var t = new eui.Image();
		this.yellow4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "huang_png";
		t.x = 229;
		t.y = 231;
		return t;
	};
	_proto.white6_i = function () {
		var t = new eui.Image();
		this.white6 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bai_png";
		t.x = 285;
		t.y = 231;
		return t;
	};
	_proto.black7_i = function () {
		var t = new eui.Image();
		this.black7 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "hei_png";
		t.x = 173;
		t.y = 287;
		return t;
	};
	_proto.blue7_i = function () {
		var t = new eui.Image();
		this.blue7 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "lan_png";
		t.x = 229;
		t.y = 287;
		return t;
	};
	_proto.red5_i = function () {
		var t = new eui.Image();
		this.red5 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "hong_png";
		t.x = 285;
		t.y = 287;
		return t;
	};
	_proto.white2_i = function () {
		var t = new eui.Image();
		this.white2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bai_png";
		t.x = 2;
		t.y = 175;
		return t;
	};
	_proto.blue3_i = function () {
		var t = new eui.Image();
		this.blue3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "lan_png";
		t.x = 58;
		t.y = 175;
		return t;
	};
	_proto.black3_i = function () {
		var t = new eui.Image();
		this.black3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "hei_png";
		t.x = 114;
		t.y = 175;
		return t;
	};
	_proto.yellow2_i = function () {
		var t = new eui.Image();
		this.yellow2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "huang_png";
		t.x = 2;
		t.y = 231;
		return t;
	};
	_proto.black4_i = function () {
		var t = new eui.Image();
		this.black4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "hei_png";
		t.x = 58;
		t.y = 231;
		return t;
	};
	_proto.red4_i = function () {
		var t = new eui.Image();
		this.red4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "hong_png";
		t.x = 114;
		t.y = 231;
		return t;
	};
	_proto.white3_i = function () {
		var t = new eui.Image();
		this.white3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bai_png";
		t.x = 2;
		t.y = 287;
		return t;
	};
	_proto.white4_i = function () {
		var t = new eui.Image();
		this.white4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bai_png";
		t.x = 58;
		t.y = 287;
		return t;
	};
	_proto.black5_i = function () {
		var t = new eui.Image();
		this.black5 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "hei_png";
		t.x = 114;
		t.y = 287;
		return t;
	};
	_proto.blue8_i = function () {
		var t = new eui.Image();
		this.blue8 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "lan_png";
		t.x = 173;
		t.y = 348;
		return t;
	};
	_proto.white7_i = function () {
		var t = new eui.Image();
		this.white7 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bai_png";
		t.x = 229;
		t.y = 348;
		return t;
	};
	_proto.black8_i = function () {
		var t = new eui.Image();
		this.black8 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "hei_png";
		t.x = 285;
		t.y = 348;
		return t;
	};
	_proto.red8_i = function () {
		var t = new eui.Image();
		this.red8 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "hong_png";
		t.x = 173;
		t.y = 403;
		return t;
	};
	_proto.yellow7_i = function () {
		var t = new eui.Image();
		this.yellow7 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "huang_png";
		t.x = 229;
		t.y = 403;
		return t;
	};
	_proto.yellow8_i = function () {
		var t = new eui.Image();
		this.yellow8 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "huang_png";
		t.x = 285;
		t.y = 403;
		return t;
	};
	_proto.yellow9_i = function () {
		var t = new eui.Image();
		this.yellow9 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "huang_png";
		t.x = 173;
		t.y = 458;
		return t;
	};
	_proto.blue9_i = function () {
		var t = new eui.Image();
		this.blue9 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "lan_png";
		t.x = 229;
		t.y = 458;
		return t;
	};
	_proto.red9_i = function () {
		var t = new eui.Image();
		this.red9 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "hong_png";
		t.x = 285;
		t.y = 458;
		return t;
	};
	_proto.yellow5_i = function () {
		var t = new eui.Image();
		this.yellow5 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "huang_png";
		t.x = 344;
		t.y = 175;
		return t;
	};
	_proto.white8_i = function () {
		var t = new eui.Image();
		this.white8 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bai_png";
		t.x = 400;
		t.y = 175;
		return t;
	};
	_proto.yellow6_i = function () {
		var t = new eui.Image();
		this.yellow6 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "huang_png";
		t.x = 456;
		t.y = 175;
		return t;
	};
	_proto.blue5_i = function () {
		var t = new eui.Image();
		this.blue5 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "lan_png";
		t.x = 344;
		t.y = 231;
		return t;
	};
	_proto.blue6_i = function () {
		var t = new eui.Image();
		this.blue6 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "lan_png";
		t.x = 400;
		t.y = 231;
		return t;
	};
	_proto.red6_i = function () {
		var t = new eui.Image();
		this.red6 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "hong_png";
		t.x = 456;
		t.y = 231;
		return t;
	};
	_proto.red7_i = function () {
		var t = new eui.Image();
		this.red7 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "hong_png";
		t.x = 344;
		t.y = 287;
		return t;
	};
	_proto.black9_i = function () {
		var t = new eui.Image();
		this.black9 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "hei_png";
		t.x = 400;
		t.y = 287;
		return t;
	};
	_proto.white9_i = function () {
		var t = new eui.Image();
		this.white9 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bai_png";
		t.x = 456;
		t.y = 287;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 591;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 720;
		t.elementsContent = [this.row1_1_i(),this.row2_1_i(),this.row3_1_i(),this.row1_2_i(),this.row2_2_i(),this.row3_2_i(),this.column1_2_i(),this.column2_2_i(),this.column3_2_i(),this.column1_1_i(),this.column2_1_i(),this.column3_1_i()];
		return t;
	};
	_proto.row1_1_i = function () {
		var t = new eui.Image();
		this.row1_1 = t;
		t.height = 55;
		t.rotation = 90;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "shang_png";
		t.width = 90;
		t.x = 87;
		t.y = 212.5;
		return t;
	};
	_proto.row2_1_i = function () {
		var t = new eui.Image();
		this.row2_1 = t;
		t.height = 55;
		t.rotation = 90;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "shang_png";
		t.width = 90;
		t.x = 87;
		t.y = 271.5;
		return t;
	};
	_proto.row3_1_i = function () {
		var t = new eui.Image();
		this.row3_1 = t;
		t.height = 55;
		t.rotation = 90;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "shang_png";
		t.width = 90;
		t.x = 87;
		t.y = 328.5;
		return t;
	};
	_proto.row1_2_i = function () {
		var t = new eui.Image();
		this.row1_2 = t;
		t.height = 55;
		t.rotation = 270;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "shang_png";
		t.width = 90;
		t.x = 635;
		t.y = 256.5;
		return t;
	};
	_proto.row2_2_i = function () {
		var t = new eui.Image();
		this.row2_2 = t;
		t.height = 55;
		t.rotation = 270;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "shang_png";
		t.width = 90;
		t.x = 635;
		t.y = 315.5;
		return t;
	};
	_proto.row3_2_i = function () {
		var t = new eui.Image();
		this.row3_2 = t;
		t.height = 55;
		t.rotation = 270;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "shang_png";
		t.width = 90;
		t.x = 635;
		t.y = 372.5;
		return t;
	};
	_proto.column1_2_i = function () {
		var t = new eui.Image();
		this.column1_2 = t;
		t.height = 55;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "shang_png";
		t.width = 90;
		t.x = 279;
		t.y = 554;
		return t;
	};
	_proto.column2_2_i = function () {
		var t = new eui.Image();
		this.column2_2 = t;
		t.height = 55;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "shang_png";
		t.width = 90;
		t.x = 336;
		t.y = 554;
		return t;
	};
	_proto.column3_2_i = function () {
		var t = new eui.Image();
		this.column3_2 = t;
		t.height = 55;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "shang_png";
		t.width = 90;
		t.x = 394;
		t.y = 554;
		return t;
	};
	_proto.column1_1_i = function () {
		var t = new eui.Image();
		this.column1_1 = t;
		t.height = 55;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "xia_png";
		t.width = 90;
		t.x = 280;
		t.y = 3;
		return t;
	};
	_proto.column2_1_i = function () {
		var t = new eui.Image();
		this.column2_1 = t;
		t.height = 55;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "xia_png";
		t.width = 90;
		t.x = 336;
		t.y = 3;
		return t;
	};
	_proto.column3_1_i = function () {
		var t = new eui.Image();
		this.column3_1 = t;
		t.height = 55;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "xia_png";
		t.width = 90;
		t.x = 393;
		t.y = 3;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.rotation = 0;
		t.scaleX = -1;
		t.source = "kuang_png";
		t.verticalCenter = -3;
		return t;
	};
	return M2Skin;
})(eui.Skin);generateEUI.paths['resource/containers/M24.exml'] = window.M24 = (function (_super) {
	__extends(M24, _super);
	function M24() {
		_super.call(this);
		this.skinParts = ["zhu","yi","ti","jiao","jia","hei","he","bai"];
		
		this.height = 591;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this.zhu_i(),this.yi_i(),this.ti_i(),this.jiao_i(),this.jia_i(),this.hei_i(),this.he_i(),this.bai_i()];
	}
	var _proto = M24.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "M24_bg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.zhu_i = function () {
		var t = new eui.Image();
		this.zhu = t;
		t.source = "word_zhu";
		t.x = 80;
		t.y = 350;
		return t;
	};
	_proto.yi_i = function () {
		var t = new eui.Image();
		this.yi = t;
		t.source = "word_yi";
		t.x = 530;
		t.y = 225;
		return t;
	};
	_proto.ti_i = function () {
		var t = new eui.Image();
		this.ti = t;
		t.source = "word_ti";
		t.x = 390;
		t.y = 350;
		return t;
	};
	_proto.jiao_i = function () {
		var t = new eui.Image();
		this.jiao = t;
		t.source = "word_jiao";
		t.x = 390;
		t.y = 225;
		return t;
	};
	_proto.jia_i = function () {
		var t = new eui.Image();
		this.jia = t;
		t.source = "word_jia";
		t.x = 530;
		t.y = 350;
		return t;
	};
	_proto.hei_i = function () {
		var t = new eui.Image();
		this.hei = t;
		t.source = "word_hei";
		t.x = 80;
		t.y = 225;
		return t;
	};
	_proto.he_i = function () {
		var t = new eui.Image();
		this.he = t;
		t.source = "word_he";
		t.x = 220;
		t.y = 350;
		return t;
	};
	_proto.bai_i = function () {
		var t = new eui.Image();
		this.bai = t;
		t.source = "word_bai";
		t.x = 220;
		t.y = 225;
		return t;
	};
	return M24;
})(eui.Skin);generateEUI.paths['resource/containers/M3_2.exml'] = window.M3_2Skin = (function (_super) {
	__extends(M3_2Skin, _super);
	var M3_2Skin$Skin15 = 	(function (_super) {
		__extends(M3_2Skin$Skin15, _super);
		function M3_2Skin$Skin15() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = M3_2Skin$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "key2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return M3_2Skin$Skin15;
	})(eui.Skin);

	var M3_2Skin$Skin16 = 	(function (_super) {
		__extends(M3_2Skin$Skin16, _super);
		function M3_2Skin$Skin16() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = M3_2Skin$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "key1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return M3_2Skin$Skin16;
	})(eui.Skin);

	function M3_2Skin() {
		_super.call(this);
		this.skinParts = ["darkBg","turnOnLight","dark","brightBg","turnOffLight","bright","wordList1","word1","wordList2","word2","wordList3","word3","wordList4","word4"];
		
		this.height = 591;
		this.width = 720;
		this.elementsContent = [this.dark_i(),this.bright_i(),this.word1_i(),this.word2_i(),this.word3_i(),this.word4_i()];
	}
	var _proto = M3_2Skin.prototype;

	_proto.dark_i = function () {
		var t = new eui.Group();
		this.dark = t;
		t.height = 591;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 720;
		t.elementsContent = [this.darkBg_i(),this.turnOnLight_i()];
		return t;
	};
	_proto.darkBg_i = function () {
		var t = new eui.Image();
		this.darkBg = t;
		t.height = 591;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg2_png";
		t.verticalCenter = 0;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.turnOnLight_i = function () {
		var t = new eui.Button();
		this.turnOnLight = t;
		t.label = "";
		t.x = 576;
		t.y = 0;
		t.skinName = M3_2Skin$Skin15;
		return t;
	};
	_proto.bright_i = function () {
		var t = new eui.Group();
		this.bright = t;
		t.height = 591;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 720;
		t.elementsContent = [this._Group1_i(),this.turnOffLight_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 591;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 720;
		t.elementsContent = [this.brightBg_i()];
		return t;
	};
	_proto.brightBg_i = function () {
		var t = new eui.Image();
		this.brightBg = t;
		t.height = 591;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg1_png";
		t.verticalCenter = 0;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.turnOffLight_i = function () {
		var t = new eui.Button();
		this.turnOffLight = t;
		t.label = "";
		t.x = 576;
		t.y = 0;
		t.skinName = M3_2Skin$Skin16;
		return t;
	};
	_proto.word1_i = function () {
		var t = new eui.Scroller();
		this.word1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 140;
		t.width = 100;
		t.x = 103;
		t.y = 214;
		t.viewport = this.wordList1_i();
		return t;
	};
	_proto.wordList1_i = function () {
		var t = new eui.List();
		this.wordList1 = t;
		t.itemRendererSkinName = M3_2_List;
		return t;
	};
	_proto.word2_i = function () {
		var t = new eui.Scroller();
		this.word2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 140;
		t.width = 100;
		t.x = 217;
		t.y = 214;
		t.viewport = this.wordList2_i();
		return t;
	};
	_proto.wordList2_i = function () {
		var t = new eui.List();
		this.wordList2 = t;
		t.itemRendererSkinName = M3_2_List;
		return t;
	};
	_proto.word3_i = function () {
		var t = new eui.Scroller();
		this.word3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 140;
		t.width = 100;
		t.x = 333;
		t.y = 214;
		t.viewport = this.wordList3_i();
		return t;
	};
	_proto.wordList3_i = function () {
		var t = new eui.List();
		this.wordList3 = t;
		t.itemRendererSkinName = M3_2_List;
		return t;
	};
	_proto.word4_i = function () {
		var t = new eui.Scroller();
		this.word4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 140;
		t.width = 100;
		t.x = 446;
		t.y = 214;
		t.viewport = this.wordList4_i();
		return t;
	};
	_proto.wordList4_i = function () {
		var t = new eui.List();
		this.wordList4 = t;
		t.itemRendererSkinName = M3_2_List;
		return t;
	};
	return M3_2Skin;
})(eui.Skin);generateEUI.paths['resource/containers/M5.exml'] = window.M5Skin = (function (_super) {
	__extends(M5Skin, _super);
	function M5Skin() {
		_super.call(this);
		this.skinParts = ["BG","Start","cube1","cube2","cube3","cube4","cube5","cube6","End","cube7","cube8","cube9","cube10","cube11","Group"];
		
		this.height = 591;
		this.width = 720;
		this.elementsContent = [this.BG_i(),this.Group_i()];
	}
	var _proto = M5Skin.prototype;

	_proto.BG_i = function () {
		var t = new eui.Image();
		this.BG = t;
		t.horizontalCenter = 0;
		t.source = "M5_bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.Group_i = function () {
		var t = new eui.Group();
		this.Group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 480;
		t.horizontalCenter = -3;
		t.verticalCenter = 2;
		t.width = 480;
		t.elementsContent = [this.Start_i(),this.cube1_i(),this.cube2_i(),this.cube3_i(),this.cube4_i(),this.cube5_i(),this.cube6_i(),this.End_i(),this.cube7_i(),this.cube8_i(),this.cube9_i(),this.cube10_i(),this.cube11_i()];
		return t;
	};
	_proto.Start_i = function () {
		var t = new eui.Image();
		this.Start = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "M5_2_png";
		t.x = 0;
		t.y = 240;
		return t;
	};
	_proto.cube1_i = function () {
		var t = new eui.Image();
		this.cube1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "M5_1_png";
		t.x = 120;
		t.y = 0;
		return t;
	};
	_proto.cube2_i = function () {
		var t = new eui.Image();
		this.cube2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "M5_3_png";
		t.x = 240;
		t.y = 0;
		return t;
	};
	_proto.cube3_i = function () {
		var t = new eui.Image();
		this.cube3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "M5_8_png";
		t.x = 360;
		t.y = 0;
		return t;
	};
	_proto.cube4_i = function () {
		var t = new eui.Image();
		this.cube4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "M5_9_png";
		t.x = 120;
		t.y = 120;
		return t;
	};
	_proto.cube5_i = function () {
		var t = new eui.Image();
		this.cube5 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "M5_9_png";
		t.x = 120;
		t.y = 360;
		return t;
	};
	_proto.cube6_i = function () {
		var t = new eui.Image();
		this.cube6 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "M5_9_png";
		t.x = 240;
		t.y = 240;
		return t;
	};
	_proto.End_i = function () {
		var t = new eui.Image();
		this.End = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "M5_6_png";
		t.x = 240;
		t.y = 120;
		return t;
	};
	_proto.cube7_i = function () {
		var t = new eui.Image();
		this.cube7 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "M5_7_png";
		t.x = 0;
		t.y = 120;
		return t;
	};
	_proto.cube8_i = function () {
		var t = new eui.Image();
		this.cube8 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "M5_4_png";
		t.x = 0;
		t.y = 360;
		return t;
	};
	_proto.cube9_i = function () {
		var t = new eui.Image();
		this.cube9 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "M5_4_png";
		t.x = 360;
		t.y = 120;
		return t;
	};
	_proto.cube10_i = function () {
		var t = new eui.Image();
		this.cube10 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "M5_5_png";
		t.x = 120;
		t.y = 240;
		return t;
	};
	_proto.cube11_i = function () {
		var t = new eui.Image();
		this.cube11 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "M5_9_png";
		t.x = 360;
		t.y = 360;
		return t;
	};
	return M5Skin;
})(eui.Skin);generateEUI.paths['resource/containers/M6.exml'] = window.M6Skin = (function (_super) {
	__extends(M6Skin, _super);
	var M6Skin$Skin17 = 	(function (_super) {
		__extends(M6Skin$Skin17, _super);
		function M6Skin$Skin17() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = M6Skin$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "ha1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return M6Skin$Skin17;
	})(eui.Skin);

	var M6Skin$Skin18 = 	(function (_super) {
		__extends(M6Skin$Skin18, _super);
		function M6Skin$Skin18() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = M6Skin$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "ha2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return M6Skin$Skin18;
	})(eui.Skin);

	var M6Skin$Skin19 = 	(function (_super) {
		__extends(M6Skin$Skin19, _super);
		function M6Skin$Skin19() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = M6Skin$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "ha3_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return M6Skin$Skin19;
	})(eui.Skin);

	var M6Skin$Skin20 = 	(function (_super) {
		__extends(M6Skin$Skin20, _super);
		function M6Skin$Skin20() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = M6Skin$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "ha4_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return M6Skin$Skin20;
	})(eui.Skin);

	var M6Skin$Skin21 = 	(function (_super) {
		__extends(M6Skin$Skin21, _super);
		function M6Skin$Skin21() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = M6Skin$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "ha5_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return M6Skin$Skin21;
	})(eui.Skin);

	function M6Skin() {
		_super.call(this);
		this.skinParts = ["button1","button2","button3","button4","button5"];
		
		this.height = 591;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i()];
	}
	var _proto = M6Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 146;
		t.width = 146;
		t.x = 200;
		t.y = 40;
		t.elementsContent = [this.button1_i()];
		return t;
	};
	_proto.button1_i = function () {
		var t = new eui.Button();
		this.button1 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = M6Skin$Skin17;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 146;
		t.width = 146;
		t.x = 500;
		t.y = 40;
		t.elementsContent = [this.button2_i()];
		return t;
	};
	_proto.button2_i = function () {
		var t = new eui.Button();
		this.button2 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = M6Skin$Skin18;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 146;
		t.width = 146;
		t.x = 350;
		t.y = 180;
		t.elementsContent = [this.button3_i()];
		return t;
	};
	_proto.button3_i = function () {
		var t = new eui.Button();
		this.button3 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = M6Skin$Skin19;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 146;
		t.width = 146;
		t.x = 200;
		t.y = 320;
		t.elementsContent = [this.button4_i()];
		return t;
	};
	_proto.button4_i = function () {
		var t = new eui.Button();
		this.button4 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = M6Skin$Skin20;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 146;
		t.width = 146;
		t.x = 500;
		t.y = 320;
		t.elementsContent = [this.button5_i()];
		return t;
	};
	_proto.button5_i = function () {
		var t = new eui.Button();
		this.button5 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = M6Skin$Skin21;
		return t;
	};
	return M6Skin;
})(eui.Skin);generateEUI.paths['resource/containers/M9.exml'] = window.M9 = (function (_super) {
	__extends(M9, _super);
	function M9() {
		_super.call(this);
		this.skinParts = ["bg","ren","bushu"];
		
		this.height = 591;
		this.width = 720;
		this.elementsContent = [this.bg_i(),this.ren_i(),this._Label1_i(),this.bushu_i()];
	}
	var _proto = M9.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0;
		t.source = "bg3";
		t.verticalCenter = 0;
		return t;
	};
	_proto.ren_i = function () {
		var t = new eui.Image();
		this.ren = t;
		t.anchorOffsetX = 28;
		t.anchorOffsetY = 56;
		t.source = "ren";
		t.x = 427;
		t.y = 169;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.height = 30;
		t.text = "剩余步数：";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 176;
		t.x = 100;
		t.y = 520;
		return t;
	};
	_proto.bushu_i = function () {
		var t = new eui.Label();
		this.bushu = t;
		t.height = 30;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 231;
		t.y = 520;
		return t;
	};
	return M9;
})(eui.Skin);generateEUI.paths['resource/containers/ManageWindow.exml'] = window.ManageWindow = (function (_super) {
	__extends(ManageWindow, _super);
	var ManageWindow$Skin22 = 	(function (_super) {
		__extends(ManageWindow$Skin22, _super);
		function ManageWindow$Skin22() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = ManageWindow$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-back-other";
			return t;
		};
		return ManageWindow$Skin22;
	})(eui.Skin);

	var ManageWindow$Skin23 = 	(function (_super) {
		__extends(ManageWindow$Skin23, _super);
		function ManageWindow$Skin23() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = ManageWindow$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-plot";
			return t;
		};
		return ManageWindow$Skin23;
	})(eui.Skin);

	var ManageWindow$Skin24 = 	(function (_super) {
		__extends(ManageWindow$Skin24, _super);
		function ManageWindow$Skin24() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = ManageWindow$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-picture";
			return t;
		};
		return ManageWindow$Skin24;
	})(eui.Skin);

	var ManageWindow$Skin25 = 	(function (_super) {
		__extends(ManageWindow$Skin25, _super);
		function ManageWindow$Skin25() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ManageWindow$Skin25.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "tutorial";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ManageWindow$Skin25;
	})(eui.Skin);

	var ManageWindow$Skin26 = 	(function (_super) {
		__extends(ManageWindow$Skin26, _super);
		function ManageWindow$Skin26() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ManageWindow$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "yes";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ManageWindow$Skin26;
	})(eui.Skin);

	var ManageWindow$Skin27 = 	(function (_super) {
		__extends(ManageWindow$Skin27, _super);
		function ManageWindow$Skin27() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ManageWindow$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "no";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ManageWindow$Skin27;
	})(eui.Skin);

	function ManageWindow() {
		_super.call(this);
		this.skinParts = ["closeButton","btnPlot","btnPicture","btnTutorial","juese","yes","no","option","eventGroup","bao1","gu1","coll1","bao2","gu2","coll2","bao3","gu3","coll3","bao4","gu4","coll4","clock","gold","gameTrueFalse","gameList","miniGameGroup","text1","setMiniGame","text2"];
		
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group9_i(),this.text2_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.yes_text"],[0],this.yes,"label");
		eui.Binding.$bindProperties(this, ["hostComponent.no_text"],[0],this.no,"label");
		eui.Binding.$bindProperties(this, ["hostComponent.description"],[0],this.text1,"text");
	}
	var _proto = ManageWindow.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "background";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.width = 720;
		t.elementsContent = [this._Image2_i(),this.closeButton_i(),this.btnPlot_i(),this.btnPicture_i(),this.btnTutorial_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "head-bg";
		t.width = 720;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.verticalCenter = 0;
		t.x = 35;
		t.skinName = ManageWindow$Skin22;
		return t;
	};
	_proto.btnPlot_i = function () {
		var t = new eui.Button();
		this.btnPlot = t;
		t.verticalCenter = 0;
		t.x = 152;
		t.skinName = ManageWindow$Skin23;
		return t;
	};
	_proto.btnPicture_i = function () {
		var t = new eui.Button();
		this.btnPicture = t;
		t.verticalCenter = 1;
		t.x = 252;
		t.skinName = ManageWindow$Skin24;
		return t;
	};
	_proto.btnTutorial_i = function () {
		var t = new eui.Button();
		this.btnTutorial = t;
		t.verticalCenter = 1;
		t.x = 358;
		t.skinName = ManageWindow$Skin25;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.bottom = 1;
		t.horizontalCenter = 0;
		t.top = 135;
		t.width = 720;
		t.elementsContent = [this._Image3_i(),this.eventGroup_i(),this._Group8_i(),this.miniGameGroup_i(),this.text1_i(),this.setMiniGame_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(90,70,540,422);
		t.source = "game-bg";
		t.top = 0;
		return t;
	};
	_proto.eventGroup_i = function () {
		var t = new eui.Group();
		this.eventGroup = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.top = 0;
		t.elementsContent = [this._Image4_i(),this.juese_i(),this._Image5_i(),this.option_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "s4";
		return t;
	};
	_proto.juese_i = function () {
		var t = new eui.Image();
		this.juese = t;
		t.horizontalCenter = 0;
		t.source = "s60";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game-bg";
		t.top = 566;
		t.x = 0;
		return t;
	};
	_proto.option_i = function () {
		var t = new eui.Group();
		this.option = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 129;
		t.horizontalCenter = 0;
		t.width = 720;
		t.elementsContent = [this.yes_i(),this.no_i()];
		return t;
	};
	_proto.yes_i = function () {
		var t = new eui.Button();
		this.yes = t;
		t.bottom = 0;
		t.left = 0;
		t.width = 360;
		t.skinName = ManageWindow$Skin26;
		return t;
	};
	_proto.no_i = function () {
		var t = new eui.Button();
		this.no = t;
		t.bottom = 0;
		t.right = 0;
		t.width = 360;
		t.skinName = ManageWindow$Skin27;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 20;
		t.elementsContent = [this._Image6_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i(),this._Group7_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "icon-group";
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.width = 60;
		t.x = 415;
		t.y = 4;
		t.elementsContent = [this._Image7_i(),this.bao1_i(),this.gu1_i(),this.coll1_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "mu";
		t.x = -75;
		t.y = 0;
		return t;
	};
	_proto.bao1_i = function () {
		var t = new eui.Image();
		this.bao1 = t;
		t.source = "mu_gao";
		t.visible = false;
		t.x = -81;
		t.y = -6;
		return t;
	};
	_proto.gu1_i = function () {
		var t = new eui.BitmapLabel();
		this.gu1 = t;
		t.font = "hintCardNumber_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "6";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 40;
		return t;
	};
	_proto.coll1_i = function () {
		var t = new eui.BitmapLabel();
		this.coll1 = t;
		t.font = "hintCardNumber_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.width = 60;
		t.x = 75;
		t.y = 5;
		t.elementsContent = [this._Image8_i(),this.bao2_i(),this.gu2_i(),this.coll2_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "shu";
		t.x = -74;
		t.y = -6;
		return t;
	};
	_proto.bao2_i = function () {
		var t = new eui.Image();
		this.bao2 = t;
		t.source = "shu_gao";
		t.visible = false;
		t.x = -79;
		t.y = -11;
		return t;
	};
	_proto.gu2_i = function () {
		var t = new eui.BitmapLabel();
		this.gu2 = t;
		t.font = "hintCardNumber_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "2";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 40;
		return t;
	};
	_proto.coll2_i = function () {
		var t = new eui.BitmapLabel();
		this.coll2 = t;
		t.font = "hintCardNumber_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "2";
		t.textAlign = "center";
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.width = 60;
		t.x = 585;
		t.y = 6;
		t.elementsContent = [this._Image9_i(),this.bao3_i(),this.gu3_i(),this.coll3_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "qing";
		t.x = -70;
		t.y = -2;
		return t;
	};
	_proto.bao3_i = function () {
		var t = new eui.Image();
		this.bao3 = t;
		t.source = "qing_gao";
		t.visible = false;
		t.x = -76;
		t.y = -8;
		return t;
	};
	_proto.gu3_i = function () {
		var t = new eui.BitmapLabel();
		this.gu3 = t;
		t.font = "hintCardNumber_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "3";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 40;
		return t;
	};
	_proto.coll3_i = function () {
		var t = new eui.BitmapLabel();
		this.coll3 = t;
		t.font = "hintCardNumber_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "3";
		t.textAlign = "center";
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.width = 60;
		t.x = 245;
		t.y = 5;
		t.elementsContent = [this._Image10_i(),this.bao4_i(),this.gu4_i(),this.coll4_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "yu";
		t.x = -79;
		t.y = 0;
		return t;
	};
	_proto.bao4_i = function () {
		var t = new eui.Image();
		this.bao4 = t;
		t.source = "yu_gao";
		t.visible = false;
		t.x = -85;
		t.y = -6;
		return t;
	};
	_proto.gu4_i = function () {
		var t = new eui.BitmapLabel();
		this.gu4 = t;
		t.font = "hintCardNumber_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "4";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 40;
		return t;
	};
	_proto.coll4_i = function () {
		var t = new eui.BitmapLabel();
		this.coll4 = t;
		t.font = "hintCardNumber_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "4";
		t.textAlign = "center";
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 85;
		t.elementsContent = [this._Image11_i(),this.clock_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "icon-clock";
		t.verticalCenter = 0;
		t.x = 5;
		return t;
	};
	_proto.clock_i = function () {
		var t = new eui.Label();
		this.clock = t;
		t.height = 40;
		t.text = "24";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 90;
		t.x = 70;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.right = 0;
		t.y = 85;
		t.elementsContent = [this._Image12_i(),this.gold_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "icon-money";
		t.verticalCenter = 0;
		t.x = 5;
		return t;
	};
	_proto.gold_i = function () {
		var t = new eui.Label();
		this.gold = t;
		t.height = 40;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 5;
		t.width = 90;
		t.x = 75;
		return t;
	};
	_proto.miniGameGroup_i = function () {
		var t = new eui.Group();
		this.miniGameGroup = t;
		t.horizontalCenter = 0;
		t.y = 180;
		t.elementsContent = [this.gameTrueFalse_i(),this.gameList_i()];
		return t;
	};
	_proto.gameTrueFalse_i = function () {
		var t = new eui.Group();
		this.gameTrueFalse = t;
		return t;
	};
	_proto.gameList_i = function () {
		var t = new eui.List();
		this.gameList = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 640;
		t.y = 120;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.columnWidth = 300;
		t.orientation = "columns";
		t.requestedColumnCount = 2;
		t.verticalGap = 40;
		return t;
	};
	_proto.text1_i = function () {
		var t = new eui.Label();
		this.text1 = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 35;
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 670;
		t.y = 800;
		return t;
	};
	_proto.setMiniGame_i = function () {
		var t = new eui.Button();
		this.setMiniGame = t;
		t.alpha = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.top = 566;
		t.width = 720;
		return t;
	};
	_proto.text2_i = function () {
		var t = new eui.Label();
		this.text2 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.text = "";
		t.top = 726;
		return t;
	};
	return ManageWindow;
})(eui.Skin);generateEUI.paths['resource/containers/MiniGameCubeStop.exml'] = window.MiniGameCubeStop = (function (_super) {
	__extends(MiniGameCubeStop, _super);
	function MiniGameCubeStop() {
		_super.call(this);
		this.skinParts = ["buttonList"];
		
		this.elementsContent = [this._Image1_i(),this.buttonList_i()];
	}
	var _proto = MiniGameCubeStop.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "m20-bg";
		return t;
	};
	_proto.buttonList_i = function () {
		var t = new eui.List();
		this.buttonList = t;
		t.height = 480;
		t.horizontalCenter = 10;
		t.width = 540;
		t.y = 35;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 60;
		t.orientation = "rows";
		t.requestedColumnCount = 3;
		t.verticalGap = 3;
		return t;
	};
	return MiniGameCubeStop;
})(eui.Skin);generateEUI.paths['resource/containers/MiniGameFloorSwitch.exml'] = window.MiniGameFloorSwitch = (function (_super) {
	__extends(MiniGameFloorSwitch, _super);
	function MiniGameFloorSwitch() {
		_super.call(this);
		this.skinParts = ["buttonList"];
		
		this.elementsContent = [this._Image1_i(),this.buttonList_i()];
	}
	var _proto = MiniGameFloorSwitch.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "m18-bg";
		return t;
	};
	_proto.buttonList_i = function () {
		var t = new eui.List();
		this.buttonList = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 5;
		t.orientation = "columns";
		t.requestedColumnCount = 3;
		t.verticalGap = 5;
		return t;
	};
	return MiniGameFloorSwitch;
})(eui.Skin);generateEUI.paths['resource/containers/MiniGameInput.exml'] = window.MiniGameInput = (function (_super) {
	__extends(MiniGameInput, _super);
	function MiniGameInput() {
		_super.call(this);
		this.skinParts = ["inputItemList","answerInput"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = MiniGameInput.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.elementsContent = [this.inputItemList_i(),this.answerInput_i()];
		return t;
	};
	_proto.inputItemList_i = function () {
		var t = new eui.List();
		this.inputItemList = t;
		t.horizontalCenter = 0;
		t.maxWidth = 640;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 20;
		t.orientation = "columns";
		t.requestedColumnCount = 4;
		t.verticalGap = 20;
		return t;
	};
	_proto.answerInput_i = function () {
		var t = new eui.TextInput();
		this.answerInput = t;
		t.alpha = 0;
		t.bottom = 0;
		t.height = 75;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return MiniGameInput;
})(eui.Skin);generateEUI.paths['resource/containers/MiniGameJigsawM08.exml'] = window.MiniGameJigsawM08 = (function (_super) {
	__extends(MiniGameJigsawM08, _super);
	function MiniGameJigsawM08() {
		_super.call(this);
		this.skinParts = ["jigsawImgGroup1","jigsawImgGroup2","jigsawImgGroup3","jigsawImgGroup4","jigsawImgGroup5","jigsawImgGroup6","jigsawImgGroup7","jigsawImgGroup8","jigsawImgGroup9"];
		
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group2_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.step"],[0],this._Label2,"text");
	}
	var _proto = MiniGameJigsawM08.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "m08-bg";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -2;
		t.y = 31;
		t.elementsContent = [this.jigsawImgGroup1_i(),this.jigsawImgGroup2_i(),this.jigsawImgGroup3_i(),this.jigsawImgGroup4_i(),this.jigsawImgGroup5_i(),this.jigsawImgGroup6_i(),this.jigsawImgGroup7_i(),this.jigsawImgGroup8_i(),this.jigsawImgGroup9_i()];
		return t;
	};
	_proto.jigsawImgGroup1_i = function () {
		var t = new eui.Group();
		this.jigsawImgGroup1 = t;
		t.x = 0;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.name = "jigsawImg";
		t.source = "m08_2";
		t.verticalCenter = 0;
		return t;
	};
	_proto.jigsawImgGroup2_i = function () {
		var t = new eui.Group();
		this.jigsawImgGroup2 = t;
		t.x = 165;
		t.elementsContent = [this._Image3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.name = "jigsawImg";
		t.source = "m08_5";
		t.verticalCenter = 0;
		return t;
	};
	_proto.jigsawImgGroup3_i = function () {
		var t = new eui.Group();
		this.jigsawImgGroup3 = t;
		t.x = 330;
		t.y = 0;
		t.elementsContent = [this._Image4_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.name = "jigsawImg";
		t.source = "m08_8";
		t.verticalCenter = 0;
		return t;
	};
	_proto.jigsawImgGroup4_i = function () {
		var t = new eui.Group();
		this.jigsawImgGroup4 = t;
		t.y = 165;
		t.elementsContent = [this._Image5_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.name = "jigsawImg";
		t.source = "m08_4";
		t.verticalCenter = 0;
		return t;
	};
	_proto.jigsawImgGroup5_i = function () {
		var t = new eui.Group();
		this.jigsawImgGroup5 = t;
		t.x = 165;
		t.y = 165;
		t.elementsContent = [this._Image6_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.name = "jigsawImg";
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.jigsawImgGroup6_i = function () {
		var t = new eui.Group();
		this.jigsawImgGroup6 = t;
		t.x = 330;
		t.y = 165;
		t.elementsContent = [this._Image7_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.name = "jigsawImg";
		t.source = "m08_7";
		t.verticalCenter = 0;
		return t;
	};
	_proto.jigsawImgGroup7_i = function () {
		var t = new eui.Group();
		this.jigsawImgGroup7 = t;
		t.y = 330;
		t.elementsContent = [this._Image8_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.name = "jigsawImg";
		t.source = "m08_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.jigsawImgGroup8_i = function () {
		var t = new eui.Group();
		this.jigsawImgGroup8 = t;
		t.x = 165;
		t.y = 330;
		t.elementsContent = [this._Image9_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.name = "jigsawImg";
		t.source = "m08_3";
		t.verticalCenter = 0;
		return t;
	};
	_proto.jigsawImgGroup9_i = function () {
		var t = new eui.Group();
		this.jigsawImgGroup9 = t;
		t.x = 330;
		t.y = 330;
		t.elementsContent = [this._Image10_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.name = "jigsawImg";
		t.source = "m08_6";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 15;
		t.horizontalCenter = 0;
		t.elementsContent = [this._Label1_i(),this._Label2_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = -50;
		t.text = "剩余步数：";
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.horizontalCenter = 40;
		t.y = 0;
		return t;
	};
	return MiniGameJigsawM08;
})(eui.Skin);generateEUI.paths['resource/containers/MiniGameJigsawM16.exml'] = window.MiniGameJigsawM16 = (function (_super) {
	__extends(MiniGameJigsawM16, _super);
	function MiniGameJigsawM16() {
		_super.call(this);
		this.skinParts = ["jigsawImgGroup1","jigsawImgGroup2","jigsawImgGroup3","jigsawImgGroup4"];
		
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
	}
	var _proto = MiniGameJigsawM16.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "m16-bg";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 470;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 15;
		t.elementsContent = [this.jigsawImgGroup1_i(),this.jigsawImgGroup2_i(),this.jigsawImgGroup3_i(),this.jigsawImgGroup4_i()];
		return t;
	};
	_proto.jigsawImgGroup1_i = function () {
		var t = new eui.Group();
		this.jigsawImgGroup1 = t;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.name = "jigsawImg";
		t.rotation = 0;
		t.source = "m16_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 235;
		t.name = "border";
		t.source = "m16_choose";
		t.visible = false;
		t.width = 319;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.left = 40;
		t.name = "jigsawMove";
		t.source = "m16_move";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.name = "jigsawTrans";
		t.right = 40;
		t.source = "m16_trans";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.jigsawImgGroup2_i = function () {
		var t = new eui.Group();
		this.jigsawImgGroup2 = t;
		t.x = 320;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.name = "jigsawImg";
		t.rotation = 180;
		t.source = "m16_2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 235;
		t.name = "border";
		t.source = "m16_choose";
		t.visible = false;
		t.width = 319;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.left = 40;
		t.name = "jigsawMove";
		t.source = "m16_move";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.name = "jigsawTrans";
		t.right = 40;
		t.source = "m16_trans";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.jigsawImgGroup3_i = function () {
		var t = new eui.Group();
		this.jigsawImgGroup3 = t;
		t.y = 235;
		t.elementsContent = [this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.name = "jigsawImg";
		t.rotation = 180;
		t.source = "m16_3";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 235;
		t.name = "border";
		t.source = "m16_choose";
		t.visible = false;
		t.width = 319;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.left = 40;
		t.name = "jigsawMove";
		t.source = "m16_move";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.name = "jigsawTrans";
		t.right = 40;
		t.source = "m16_trans";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.jigsawImgGroup4_i = function () {
		var t = new eui.Group();
		this.jigsawImgGroup4 = t;
		t.x = 320;
		t.y = 235;
		t.elementsContent = [this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.name = "jigsawImg";
		t.rotation = 180;
		t.source = "m16_4";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.height = 235;
		t.name = "border";
		t.source = "m16_choose";
		t.visible = false;
		t.width = 319;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.left = 40;
		t.name = "jigsawMove";
		t.source = "m16_move";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.name = "jigsawTrans";
		t.right = 40;
		t.source = "m16_trans";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	return MiniGameJigsawM16;
})(eui.Skin);generateEUI.paths['resource/containers/MiniGameM42.exml'] = window.MiniGameM42 = (function (_super) {
	__extends(MiniGameM42, _super);
	var MiniGameM42$Skin28 = 	(function (_super) {
		__extends(MiniGameM42$Skin28, _super);
		function MiniGameM42$Skin28() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
			];
		}
		var _proto = MiniGameM42$Skin28.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "btn-back";
			return t;
		};
		return MiniGameM42$Skin28;
	})(eui.Skin);

	var MiniGameM42$Skin29 = 	(function (_super) {
		__extends(MiniGameM42$Skin29, _super);
		function MiniGameM42$Skin29() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
			];
		}
		var _proto = MiniGameM42$Skin29.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "btn-left";
			return t;
		};
		return MiniGameM42$Skin29;
	})(eui.Skin);

	var MiniGameM42$Skin30 = 	(function (_super) {
		__extends(MiniGameM42$Skin30, _super);
		function MiniGameM42$Skin30() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
			];
		}
		var _proto = MiniGameM42$Skin30.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "btn-right";
			return t;
		};
		return MiniGameM42$Skin30;
	})(eui.Skin);

	var MiniGameM42$Skin31 = 	(function (_super) {
		__extends(MiniGameM42$Skin31, _super);
		function MiniGameM42$Skin31() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
			];
		}
		var _proto = MiniGameM42$Skin31.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "btn-ED";
			return t;
		};
		return MiniGameM42$Skin31;
	})(eui.Skin);

	var MiniGameM42$Skin32 = 	(function (_super) {
		__extends(MiniGameM42$Skin32, _super);
		function MiniGameM42$Skin32() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
			];
		}
		var _proto = MiniGameM42$Skin32.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "btn-confirm";
			return t;
		};
		return MiniGameM42$Skin32;
	})(eui.Skin);

	var MiniGameM42$Skin33 = 	(function (_super) {
		__extends(MiniGameM42$Skin33, _super);
		function MiniGameM42$Skin33() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
			];
		}
		var _proto = MiniGameM42$Skin33.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "btn-reset";
			return t;
		};
		return MiniGameM42$Skin33;
	})(eui.Skin);

	function MiniGameM42() {
		_super.call(this);
		this.skinParts = ["btnBack","jigsawGroup","btnLeft","btnRight","btnED","btnConfirm","btnReset","btnGroup","jigsawResult"];
		
		this.currentState = "up";
		this.elementsContent = [this._Group2_i()];
		this.states = [
			new eui.State ("down",
				[
				])
			,
			new eui.State ("up",
				[
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.showTipsImg"],[0],this._Group1,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.question"],[0],this._Label2,"text");
	}
	var _proto = MiniGameM42.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.width = 720;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this.btnBack_i(),this.jigsawGroup_i(),this.btnGroup_i(),this.jigsawResult_i(),this._Label2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "m42-bg";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.source = "m42-tips";
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.lineSpacing = 5;
		t.right = 0;
		t.text = "六乾离九是朝宗，坤宫坎脉一和通。天三地八为朋友，天七地四气相通。离九来龙定震穴，原由地八是乾宫。坎水朝时来到兑，巽龙入脉是坤宫。后天来龙先天向，生成推照互相融。";
		t.textColor = 0x020202;
		t.width = 249;
		t.y = 130;
		return t;
	};
	_proto.btnBack_i = function () {
		var t = new eui.Button();
		this.btnBack = t;
		t.right = 50;
		t.y = 20;
		t.skinName = MiniGameM42$Skin28;
		return t;
	};
	_proto.jigsawGroup_i = function () {
		var t = new eui.Group();
		this.jigsawGroup = t;
		t.x = -25;
		t.y = -60;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "ED-bg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.name = "jigsaw01";
		t.rotation = 0;
		t.source = "ED-01";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.name = "jigsaw02";
		t.rotation = -45;
		t.source = "ED-02";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.name = "jigsaw03";
		t.rotation = -90;
		t.source = "ED-03";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.name = "jigsaw04";
		t.rotation = 45;
		t.source = "ED-04";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.name = "jigsaw05";
		t.rotation = 90;
		t.source = "ED-05";
		t.verticalCenter = 0;
		return t;
	};
	_proto.btnGroup_i = function () {
		var t = new eui.Group();
		this.btnGroup = t;
		t.width = 720;
		t.y = 20;
		t.elementsContent = [this.btnLeft_i(),this.btnRight_i(),this.btnED_i(),this.btnConfirm_i(),this.btnReset_i()];
		return t;
	};
	_proto.btnLeft_i = function () {
		var t = new eui.Button();
		this.btnLeft = t;
		t.x = 85;
		t.y = 335;
		t.skinName = MiniGameM42$Skin29;
		return t;
	};
	_proto.btnRight_i = function () {
		var t = new eui.Button();
		this.btnRight = t;
		t.x = 300;
		t.y = 335;
		t.skinName = MiniGameM42$Skin30;
		return t;
	};
	_proto.btnED_i = function () {
		var t = new eui.Button();
		this.btnED = t;
		t.right = 50;
		t.skinName = MiniGameM42$Skin31;
		return t;
	};
	_proto.btnConfirm_i = function () {
		var t = new eui.Button();
		this.btnConfirm = t;
		t.right = 50;
		t.y = 210;
		t.skinName = MiniGameM42$Skin32;
		return t;
	};
	_proto.btnReset_i = function () {
		var t = new eui.Button();
		this.btnReset = t;
		t.right = 50;
		t.y = 330;
		t.skinName = MiniGameM42$Skin33;
		return t;
	};
	_proto.jigsawResult_i = function () {
		var t = new eui.Group();
		this.jigsawResult = t;
		t.bottom = 50;
		t.horizontalCenter = 0;
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "ED-bg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.name = "jigsaw01";
		t.rotation = -90;
		t.source = "ED-01";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.name = "jigsaw02";
		t.rotation = 45;
		t.source = "ED-02";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.name = "jigsaw03";
		t.rotation = -135;
		t.source = "ED-03";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.name = "jigsaw04";
		t.rotation = 180;
		t.source = "ED-04";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.name = "jigsaw05";
		t.rotation = -45;
		t.source = "ED-05";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.bottom = 40;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.lineSpacing = 10;
		t.size = 40;
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 640;
		return t;
	};
	return MiniGameM42;
})(eui.Skin);generateEUI.paths['resource/containers/MiniGameM8_2.exml'] = window.MiniGameM8_2 = (function (_super) {
	__extends(MiniGameM8_2, _super);
	function MiniGameM8_2() {
		_super.call(this);
		this.skinParts = ["jigsawGroup"];
		
		this.currentState = "up";
		this.elementsContent = [this._Group2_i()];
		this.states = [
			new eui.State ("down",
				[
				])
			,
			new eui.State ("up",
				[
				])
		];
	}
	var _proto = MiniGameM8_2.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.width = 720;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this.jigsawGroup_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "m8.2-bg";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.right = 20;
		t.elementsContent = [this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "m8.2_00";
		t.y = 30;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = -50;
		t.horizontalCenter = 0;
		t.source = "m8.2-tips";
		return t;
	};
	_proto.jigsawGroup_i = function () {
		var t = new eui.Group();
		this.jigsawGroup = t;
		t.width = 720;
		t.y = 20;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Label1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 72;
		t.anchorOffsetY = 91;
		t.name = "jigsaw06";
		t.source = "m8.2_06";
		t.x = 75;
		t.y = 90;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 72;
		t.anchorOffsetY = 91;
		t.name = "jigsaw05";
		t.source = "m8.2_05";
		t.x = 215;
		t.y = 90;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 72;
		t.anchorOffsetY = 92;
		t.name = "jigsaw04";
		t.source = "m8.2_04";
		t.x = 75;
		t.y = 275;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 72;
		t.anchorOffsetY = 91;
		t.name = "jigsaw03";
		t.source = "m8.2_03";
		t.x = 215;
		t.y = 275;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 72;
		t.anchorOffsetY = 91;
		t.name = "jigsaw02";
		t.source = "m8.2_02";
		t.x = 75;
		t.y = 460;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 72;
		t.anchorOffsetY = 92;
		t.name = "jigsaw01";
		t.source = "m8.2_01";
		t.x = 215;
		t.y = 460;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 12;
		t.text = "1";
		t.x = 515;
		t.y = 185;
		return t;
	};
	return MiniGameM8_2;
})(eui.Skin);generateEUI.paths['resource/containers/MiniGameSelect.exml'] = window.MiniGameSelect = (function (_super) {
	__extends(MiniGameSelect, _super);
	function MiniGameSelect() {
		_super.call(this);
		this.skinParts = ["buttonList"];
		
		this.elementsContent = [this.buttonList_i()];
	}
	var _proto = MiniGameSelect.prototype;

	_proto.buttonList_i = function () {
		var t = new eui.List();
		this.buttonList = t;
		t.bottom = 20;
		t.width = 640;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.columnWidth = 300;
		t.horizontalGap = 15;
		t.orientation = "columns";
		t.requestedColumnCount = 2;
		t.verticalGap = 15;
		return t;
	};
	return MiniGameSelect;
})(eui.Skin);generateEUI.paths['resource/containers/NewPlayerGuide.exml'] = window.NewPlayerGuide = (function (_super) {
	__extends(NewPlayerGuide, _super);
	var NewPlayerGuide$Skin34 = 	(function (_super) {
		__extends(NewPlayerGuide$Skin34, _super);
		function NewPlayerGuide$Skin34() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = NewPlayerGuide$Skin34.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-back-other";
			return t;
		};
		return NewPlayerGuide$Skin34;
	})(eui.Skin);

	var NewPlayerGuide$Skin35 = 	(function (_super) {
		__extends(NewPlayerGuide$Skin35, _super);
		function NewPlayerGuide$Skin35() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = NewPlayerGuide$Skin35.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-plot";
			return t;
		};
		return NewPlayerGuide$Skin35;
	})(eui.Skin);

	var NewPlayerGuide$Skin36 = 	(function (_super) {
		__extends(NewPlayerGuide$Skin36, _super);
		function NewPlayerGuide$Skin36() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = NewPlayerGuide$Skin36.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-picture";
			return t;
		};
		return NewPlayerGuide$Skin36;
	})(eui.Skin);

	var NewPlayerGuide$Skin37 = 	(function (_super) {
		__extends(NewPlayerGuide$Skin37, _super);
		function NewPlayerGuide$Skin37() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NewPlayerGuide$Skin37.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "tutorial";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NewPlayerGuide$Skin37;
	})(eui.Skin);

	var NewPlayerGuide$Skin38 = 	(function (_super) {
		__extends(NewPlayerGuide$Skin38, _super);
		function NewPlayerGuide$Skin38() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = NewPlayerGuide$Skin38.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-plot";
			return t;
		};
		return NewPlayerGuide$Skin38;
	})(eui.Skin);

	var NewPlayerGuide$Skin39 = 	(function (_super) {
		__extends(NewPlayerGuide$Skin39, _super);
		function NewPlayerGuide$Skin39() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NewPlayerGuide$Skin39.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "yes";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.horizontalCenter = 0;
			t.text = "有些道理";
			t.verticalCenter = 0;
			return t;
		};
		return NewPlayerGuide$Skin39;
	})(eui.Skin);

	var NewPlayerGuide$Skin40 = 	(function (_super) {
		__extends(NewPlayerGuide$Skin40, _super);
		function NewPlayerGuide$Skin40() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NewPlayerGuide$Skin40.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "no";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.horizontalCenter = 0;
			t.text = "不予苟同";
			t.verticalCenter = 0;
			return t;
		};
		return NewPlayerGuide$Skin40;
	})(eui.Skin);

	function NewPlayerGuide() {
		_super.call(this);
		this.skinParts = ["btnPicture","eventGroup","gu1","coll1","gu2","coll2","gu3","coll3","gu4","coll4","btnSkip","moneyGroup","bao1","bao2","bao3","bao4","antiGroup","clockGroup","group1","group2","group3","group4","group5","btnPlotGroup","dialog","dialogGroup","btnNext","yes","no","optionGroup"];
		
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group9_i(),this._Group41_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.showAntiEllipse"],[0],this._Group14,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.dialogImg"],[0],this._Image68,"source");
	}
	var _proto = NewPlayerGuide.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "background";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.width = 720;
		t.elementsContent = [this._Image2_i(),this._Button1_i(),this._Button2_i(),this.btnPicture_i(),this._Button3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "head-bg";
		t.width = 720;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.verticalCenter = 0;
		t.x = 35;
		t.skinName = NewPlayerGuide$Skin34;
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		t.verticalCenter = 0;
		t.x = 152;
		t.skinName = NewPlayerGuide$Skin35;
		return t;
	};
	_proto.btnPicture_i = function () {
		var t = new eui.Button();
		this.btnPicture = t;
		t.verticalCenter = 1;
		t.x = 252;
		t.skinName = NewPlayerGuide$Skin36;
		return t;
	};
	_proto._Button3_i = function () {
		var t = new eui.Button();
		t.verticalCenter = 1;
		t.x = 358;
		t.skinName = NewPlayerGuide$Skin37;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.bottom = 1;
		t.horizontalCenter = 0;
		t.top = 135;
		t.width = 720;
		t.elementsContent = [this._Image3_i(),this.eventGroup_i(),this._Group8_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(90,70,540,422);
		t.source = "game-bg";
		t.top = 0;
		return t;
	};
	_proto.eventGroup_i = function () {
		var t = new eui.Group();
		this.eventGroup = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.top = 0;
		t.elementsContent = [this._Image4_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "s4";
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 20;
		t.elementsContent = [this._Image5_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i(),this._Group7_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "icon-group";
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.width = 60;
		t.x = 415;
		t.y = 4;
		t.elementsContent = [this._Image6_i(),this.gu1_i(),this.coll1_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "mu";
		t.x = -75;
		t.y = 0;
		return t;
	};
	_proto.gu1_i = function () {
		var t = new eui.BitmapLabel();
		this.gu1 = t;
		t.font = "hintCardNumber_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "5";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 40;
		return t;
	};
	_proto.coll1_i = function () {
		var t = new eui.BitmapLabel();
		this.coll1 = t;
		t.font = "hintCardNumber_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.width = 60;
		t.x = 75;
		t.y = 5;
		t.elementsContent = [this._Image7_i(),this.gu2_i(),this.coll2_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "shu";
		t.x = -74;
		t.y = -6;
		return t;
	};
	_proto.gu2_i = function () {
		var t = new eui.BitmapLabel();
		this.gu2 = t;
		t.font = "hintCardNumber_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "5";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 40;
		return t;
	};
	_proto.coll2_i = function () {
		var t = new eui.BitmapLabel();
		this.coll2 = t;
		t.font = "hintCardNumber_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "2";
		t.textAlign = "center";
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.width = 60;
		t.x = 585;
		t.y = 6;
		t.elementsContent = [this._Image8_i(),this.gu3_i(),this.coll3_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "qing";
		t.x = -70;
		t.y = -2;
		return t;
	};
	_proto.gu3_i = function () {
		var t = new eui.BitmapLabel();
		this.gu3 = t;
		t.font = "hintCardNumber_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "5";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 40;
		return t;
	};
	_proto.coll3_i = function () {
		var t = new eui.BitmapLabel();
		this.coll3 = t;
		t.font = "hintCardNumber_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "3";
		t.textAlign = "center";
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.width = 60;
		t.x = 245;
		t.y = 5;
		t.elementsContent = [this._Image9_i(),this.gu4_i(),this.coll4_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "yu";
		t.x = -79;
		t.y = 0;
		return t;
	};
	_proto.gu4_i = function () {
		var t = new eui.BitmapLabel();
		this.gu4 = t;
		t.font = "hintCardNumber_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "5";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 40;
		return t;
	};
	_proto.coll4_i = function () {
		var t = new eui.BitmapLabel();
		this.coll4 = t;
		t.font = "hintCardNumber_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "4";
		t.textAlign = "center";
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 85;
		t.elementsContent = [this._Image10_i(),this._Label1_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "icon-clock";
		t.verticalCenter = 0;
		t.x = 5;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 40;
		t.text = "24";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 90;
		t.x = 70;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.right = 0;
		t.y = 85;
		t.elementsContent = [this._Image11_i(),this._Label2_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "icon-money";
		t.verticalCenter = 0;
		t.x = 5;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.height = 40;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 5;
		t.width = 90;
		t.x = 75;
		return t;
	};
	_proto._Group41_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.width = 720;
		t.elementsContent = [this._Rect1_i(),this.btnSkip_i(),this.moneyGroup_i(),this.antiGroup_i(),this.clockGroup_i(),this.group1_i(),this.group2_i(),this.group3_i(),this.group4_i(),this.group5_i(),this.btnPlotGroup_i(),this.dialogGroup_i(),this.btnNext_i(),this.optionGroup_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.4;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.btnSkip_i = function () {
		var t = new eui.Image();
		this.btnSkip = t;
		t.right = 0;
		t.source = "skip-btn";
		t.y = 60;
		return t;
	};
	_proto.moneyGroup_i = function () {
		var t = new eui.Group();
		this.moneyGroup = t;
		t.right = 23;
		t.y = 229;
		t.elementsContent = [this._Image12_i(),this._Label3_i(),this._Image13_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "icon-money";
		t.verticalCenter = 0;
		t.x = 5;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.height = 40;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 5;
		t.width = 90;
		t.x = 75;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(29,28,14,14);
		t.source = "ellipse";
		t.top = 0;
		return t;
	};
	_proto.antiGroup_i = function () {
		var t = new eui.Group();
		this.antiGroup = t;
		t.horizontalCenter = 0;
		t.y = 155;
		t.elementsContent = [this._Image14_i(),this._Group10_i(),this._Group11_i(),this._Group12_i(),this._Group13_i(),this._Group14_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "icon-group";
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.width = 60;
		t.x = 415;
		t.y = 4;
		t.elementsContent = [this._Image15_i(),this.bao1_i(),this._BitmapLabel1_i(),this._BitmapLabel2_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "mu";
		t.x = -75;
		t.y = 0;
		return t;
	};
	_proto.bao1_i = function () {
		var t = new eui.Image();
		this.bao1 = t;
		t.source = "mu_gao";
		t.visible = false;
		t.x = -81;
		t.y = -6;
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "hintCardNumber_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "5";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 40;
		return t;
	};
	_proto._BitmapLabel2_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "hintCardNumber_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 0;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.width = 60;
		t.x = 75;
		t.y = 5;
		t.elementsContent = [this._Image16_i(),this.bao2_i(),this._BitmapLabel3_i(),this._BitmapLabel4_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "shu";
		t.x = -74;
		t.y = -6;
		return t;
	};
	_proto.bao2_i = function () {
		var t = new eui.Image();
		this.bao2 = t;
		t.source = "shu_gao";
		t.visible = false;
		t.x = -79;
		t.y = -11;
		return t;
	};
	_proto._BitmapLabel3_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "hintCardNumber_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "5";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 40;
		return t;
	};
	_proto._BitmapLabel4_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "hintCardNumber_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "2";
		t.textAlign = "center";
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.width = 60;
		t.x = 585;
		t.y = 6;
		t.elementsContent = [this._Image17_i(),this.bao3_i(),this._BitmapLabel5_i(),this._BitmapLabel6_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "qing";
		t.x = -70;
		t.y = -2;
		return t;
	};
	_proto.bao3_i = function () {
		var t = new eui.Image();
		this.bao3 = t;
		t.source = "qing_gao";
		t.visible = false;
		t.x = -76;
		t.y = -8;
		return t;
	};
	_proto._BitmapLabel5_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "hintCardNumber_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "5";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 40;
		return t;
	};
	_proto._BitmapLabel6_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "hintCardNumber_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "3";
		t.textAlign = "center";
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.width = 60;
		t.x = 245;
		t.y = 5;
		t.elementsContent = [this._Image18_i(),this.bao4_i(),this._BitmapLabel7_i(),this._BitmapLabel8_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "yu";
		t.x = -79;
		t.y = 0;
		return t;
	};
	_proto.bao4_i = function () {
		var t = new eui.Image();
		this.bao4 = t;
		t.source = "yu_gao";
		t.visible = false;
		t.x = -85;
		t.y = -6;
		return t;
	};
	_proto._BitmapLabel7_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "hintCardNumber_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "5";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 40;
		return t;
	};
	_proto._BitmapLabel8_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "hintCardNumber_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "4";
		t.textAlign = "center";
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		this._Group14 = t;
		t.height = 100;
		t.width = 584;
		t.y = -10;
		t.elementsContent = [this._Image19_i(),this._Image20_i(),this._Image21_i(),this._Image22_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(29,28,14,14);
		t.source = "ellipse";
		t.top = 0;
		t.width = 75;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.scale9Grid = new egret.Rectangle(29,28,14,14);
		t.source = "ellipse";
		t.top = 0;
		t.width = 75;
		t.x = 163;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.scale9Grid = new egret.Rectangle(29,28,14,14);
		t.source = "ellipse";
		t.top = 0;
		t.width = 75;
		t.x = 333;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(29,28,14,14);
		t.source = "ellipse";
		t.top = 0;
		t.width = 75;
		return t;
	};
	_proto.clockGroup_i = function () {
		var t = new eui.Group();
		this.clockGroup = t;
		t.x = 23;
		t.y = 229;
		t.elementsContent = [this._Image23_i(),this._Label4_i(),this._Image24_i()];
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.source = "icon-clock";
		t.verticalCenter = 0;
		t.x = 5;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.height = 40;
		t.text = "24";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 90;
		t.x = 70;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(29,28,14,14);
		t.source = "ellipse";
		t.top = 0;
		return t;
	};
	_proto.group1_i = function () {
		var t = new eui.Group();
		this.group1 = t;
		t.horizontalCenter = 0;
		t.y = 300;
		t.elementsContent = [this._Group15_i(),this._Group16_i(),this._Group17_i(),this._Group18_i()];
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Image25_i(),this._Image26_i()];
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "manage-card2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "shuhua(4)";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.x = 270;
		t.elementsContent = [this._Image27_i(),this._Image28_i()];
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "manage-card2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "shuhua(4)";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.y = 290;
		t.elementsContent = [this._Image29_i(),this._Image30_i()];
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "manage-card2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "shuhua(5)";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group18_i = function () {
		var t = new eui.Group();
		t.x = 270;
		t.y = 290;
		t.elementsContent = [this._Image31_i(),this._Image32_i()];
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "manage-card2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "shuhua(4)";
		t.verticalCenter = 0;
		return t;
	};
	_proto.group2_i = function () {
		var t = new eui.Group();
		this.group2 = t;
		t.horizontalCenter = 0;
		t.y = 300;
		t.elementsContent = [this._Group19_i(),this._Group20_i(),this._Group21_i(),this._Group22_i()];
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Image33_i(),this._Image34_i()];
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "manage-card2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "shuhua(6)";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group20_i = function () {
		var t = new eui.Group();
		t.x = 270;
		t.elementsContent = [this._Image35_i(),this._Image36_i()];
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "manage-card2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image36_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "shuhua(4)";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group21_i = function () {
		var t = new eui.Group();
		t.y = 290;
		t.elementsContent = [this._Image37_i(),this._Image38_i()];
		return t;
	};
	_proto._Image37_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "manage-card2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image38_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "shuhua(5)";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group22_i = function () {
		var t = new eui.Group();
		t.x = 270;
		t.y = 290;
		t.elementsContent = [this._Image39_i(),this._Image40_i()];
		return t;
	};
	_proto._Image39_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "manage-card2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image40_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "shuhua(4)";
		t.verticalCenter = 0;
		return t;
	};
	_proto.group3_i = function () {
		var t = new eui.Group();
		this.group3 = t;
		t.horizontalCenter = 0;
		t.y = 300;
		t.elementsContent = [this._Group23_i(),this._Group24_i(),this._Group25_i(),this._Group26_i()];
		return t;
	};
	_proto._Group23_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Image41_i(),this._Image42_i()];
		return t;
	};
	_proto._Image41_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "manage-card2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image42_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "shuhua(1)";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group24_i = function () {
		var t = new eui.Group();
		t.x = 270;
		t.elementsContent = [this._Image43_i(),this._Image44_i()];
		return t;
	};
	_proto._Image43_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "manage-card2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image44_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "shuhua(4)";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group25_i = function () {
		var t = new eui.Group();
		t.y = 290;
		t.elementsContent = [this._Image45_i(),this._Image46_i()];
		return t;
	};
	_proto._Image45_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "manage-card2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image46_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "shuhua(7)";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group26_i = function () {
		var t = new eui.Group();
		t.x = 270;
		t.y = 290;
		t.elementsContent = [this._Image47_i(),this._Image48_i()];
		return t;
	};
	_proto._Image47_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "manage-card2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image48_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "muqi(4)";
		t.verticalCenter = 0;
		return t;
	};
	_proto.group4_i = function () {
		var t = new eui.Group();
		this.group4 = t;
		t.horizontalCenter = 0;
		t.y = 300;
		t.elementsContent = [this._Group27_i(),this._Group28_i(),this._Group29_i(),this._Group30_i()];
		return t;
	};
	_proto._Group27_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Image49_i(),this._Image50_i()];
		return t;
	};
	_proto._Image49_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "manage-card2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image50_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "shuhua(1)";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group28_i = function () {
		var t = new eui.Group();
		t.x = 270;
		t.elementsContent = [this._Image51_i(),this._Image52_i()];
		return t;
	};
	_proto._Image51_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "manage-card2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image52_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "shuhua(4)";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group29_i = function () {
		var t = new eui.Group();
		t.y = 290;
		t.elementsContent = [this._Image53_i(),this._Image54_i()];
		return t;
	};
	_proto._Image53_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "manage-card2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image54_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "qingtong(5)";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group30_i = function () {
		var t = new eui.Group();
		t.x = 270;
		t.y = 290;
		t.elementsContent = [this._Image55_i(),this._Image56_i()];
		return t;
	};
	_proto._Image55_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "manage-card2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image56_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "yu(4)";
		t.verticalCenter = 0;
		return t;
	};
	_proto.group5_i = function () {
		var t = new eui.Group();
		this.group5 = t;
		t.horizontalCenter = 0;
		t.y = 300;
		t.elementsContent = [this._Group31_i(),this._Group32_i(),this._Group33_i(),this._Group34_i(),this._Group35_i(),this._Group36_i(),this._Group37_i(),this._Group38_i(),this._Group39_i(),this._Label14_i()];
		return t;
	};
	_proto._Group31_i = function () {
		var t = new eui.Group();
		t.name = "card1";
		t.elementsContent = [this._Image57_i(),this._Label5_i()];
		return t;
	};
	_proto._Image57_i = function () {
		var t = new eui.Image();
		t.name = "img";
		t.source = "manage-card2";
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 60;
		t.text = "真";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group32_i = function () {
		var t = new eui.Group();
		t.name = "card2";
		t.x = 215;
		t.elementsContent = [this._Image58_i(),this._Label6_i()];
		return t;
	};
	_proto._Image58_i = function () {
		var t = new eui.Image();
		t.name = "img";
		t.source = "manage-card2";
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 60;
		t.text = "假";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group33_i = function () {
		var t = new eui.Group();
		t.name = "card3";
		t.x = 430;
		t.elementsContent = [this._Image59_i(),this._Label7_i()];
		return t;
	};
	_proto._Image59_i = function () {
		var t = new eui.Image();
		t.name = "img";
		t.source = "manage-card2";
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 60;
		t.text = "真";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group34_i = function () {
		var t = new eui.Group();
		t.name = "card4";
		t.y = 280;
		t.elementsContent = [this._Image60_i(),this._Label8_i()];
		return t;
	};
	_proto._Image60_i = function () {
		var t = new eui.Image();
		t.name = "img";
		t.source = "manage-card2";
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 60;
		t.text = "假";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group35_i = function () {
		var t = new eui.Group();
		t.name = "card5";
		t.x = 215;
		t.y = 280;
		t.elementsContent = [this._Image61_i(),this._Label9_i()];
		return t;
	};
	_proto._Image61_i = function () {
		var t = new eui.Image();
		t.name = "img";
		t.source = "manage-card2";
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 60;
		t.text = "真";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group36_i = function () {
		var t = new eui.Group();
		t.name = "card6";
		t.x = 430;
		t.y = 280;
		t.elementsContent = [this._Image62_i(),this._Label10_i()];
		return t;
	};
	_proto._Image62_i = function () {
		var t = new eui.Image();
		t.name = "img";
		t.source = "manage-card2";
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 60;
		t.text = "真";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group37_i = function () {
		var t = new eui.Group();
		t.name = "card7";
		t.y = 560;
		t.elementsContent = [this._Image63_i(),this._Label11_i()];
		return t;
	};
	_proto._Image63_i = function () {
		var t = new eui.Image();
		t.name = "img";
		t.source = "manage-card2";
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 60;
		t.text = "真";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group38_i = function () {
		var t = new eui.Group();
		t.name = "card8";
		t.x = 215;
		t.y = 560;
		t.elementsContent = [this._Image64_i(),this._Label12_i()];
		return t;
	};
	_proto._Image64_i = function () {
		var t = new eui.Image();
		t.name = "img";
		t.source = "manage-card2";
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 60;
		t.text = "真";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group39_i = function () {
		var t = new eui.Group();
		t.name = "card9";
		t.x = 430;
		t.y = 560;
		t.elementsContent = [this._Image65_i(),this._Label13_i()];
		return t;
	};
	_proto._Image65_i = function () {
		var t = new eui.Image();
		t.name = "img";
		t.source = "manage-card2";
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 60;
		t.text = "假";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "找出两个假古董。";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.y = 850;
		return t;
	};
	_proto.btnPlotGroup_i = function () {
		var t = new eui.Group();
		this.btnPlotGroup = t;
		t.height = 135;
		t.x = 152;
		t.elementsContent = [this._Button4_i(),this._Image66_i()];
		return t;
	};
	_proto._Button4_i = function () {
		var t = new eui.Button();
		t.verticalCenter = 0;
		t.skinName = NewPlayerGuide$Skin38;
		return t;
	};
	_proto._Image66_i = function () {
		var t = new eui.Image();
		t.height = 135;
		t.scale9Grid = new egret.Rectangle(29,28,14,14);
		t.source = "ellipse";
		t.width = 90;
		t.x = -15;
		t.y = 0;
		return t;
	};
	_proto.dialogGroup_i = function () {
		var t = new eui.Group();
		this.dialogGroup = t;
		t.bottom = 0;
		t.elementsContent = [this._Image67_i(),this._Image68_i(),this.dialog_i()];
		return t;
	};
	_proto._Image67_i = function () {
		var t = new eui.Image();
		t.source = "dialog-box";
		return t;
	};
	_proto._Image68_i = function () {
		var t = new eui.Image();
		this._Image68 = t;
		t.x = 50;
		t.y = 50;
		return t;
	};
	_proto.dialog_i = function () {
		var t = new eui.Label();
		this.dialog = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 90;
		t.lineSpacing = 10;
		t.textColor = 0x000000;
		t.top = 50;
		t.width = 470;
		t.x = 50;
		return t;
	};
	_proto.btnNext_i = function () {
		var t = new eui.Button();
		this.btnNext = t;
		t.alpha = 0;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.top = 135;
		t.width = 720;
		return t;
	};
	_proto.optionGroup_i = function () {
		var t = new eui.Group();
		this.optionGroup = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.width = 720;
		t.elementsContent = [this._Image69_i(),this._Image70_i(),this._Group40_i(),this._Label16_i(),this.yes_i(),this.no_i()];
		return t;
	};
	_proto._Image69_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "s60";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image70_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game-bg";
		t.top = 566;
		t.x = 0;
		return t;
	};
	_proto._Group40_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 810;
		t.elementsContent = [this._Image71_i(),this._Label15_i()];
		return t;
	};
	_proto._Image71_i = function () {
		var t = new eui.Image();
		t.height = 190;
		t.source = "dialog-box";
		t.width = 300;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.lineSpacing = 5;
		t.size = 25;
		t.text = "点击一下对话选项，受影响的古董将会亮起，然后再次点击该对话选项，亮起的古董价值或数量发生变化";
		t.textColor = 0x020202;
		t.width = 259;
		t.x = 20;
		t.y = 12;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "许兄，其实人生的道理就是福兮祸所伏，你认为呢？";
		t.textAlign = "center";
		t.textColor = 0x020202;
		t.width = 680;
		t.y = 775;
		return t;
	};
	_proto.yes_i = function () {
		var t = new eui.Button();
		this.yes = t;
		t.bottom = 0;
		t.left = 0;
		t.width = 360;
		t.skinName = NewPlayerGuide$Skin39;
		return t;
	};
	_proto.no_i = function () {
		var t = new eui.Button();
		this.no = t;
		t.bottom = 0;
		t.right = 0;
		t.width = 360;
		t.skinName = NewPlayerGuide$Skin40;
		return t;
	};
	return NewPlayerGuide;
})(eui.Skin);generateEUI.paths['resource/containers/PopupWindow.exml'] = window.PopupWindow = (function (_super) {
	__extends(PopupWindow, _super);
	var PopupWindow$Skin41 = 	(function (_super) {
		__extends(PopupWindow$Skin41, _super);
		function PopupWindow$Skin41() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = PopupWindow$Skin41.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-cancel-mini";
			return t;
		};
		return PopupWindow$Skin41;
	})(eui.Skin);

	var PopupWindow$Skin42 = 	(function (_super) {
		__extends(PopupWindow$Skin42, _super);
		function PopupWindow$Skin42() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = PopupWindow$Skin42.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-confirm-mini";
			return t;
		};
		return PopupWindow$Skin42;
	})(eui.Skin);

	function PopupWindow() {
		_super.call(this);
		this.skinParts = ["textMsg","textIconGroup","textGroup","closeButton","btnConfirm"];
		
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.textGroup_i(),this.closeButton_i(),this.btnConfirm_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.msg"],[0],this._Group1,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.msg"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.hasCancel"],[0],this.closeButton,"visible");
	}
	var _proto = PopupWindow.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "popup-bg";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.bottom = 150;
		t.horizontalCenter = 0;
		t.top = 60;
		t.width = 510;
		t.elementsContent = [this._Label1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.maxWidth = 500;
		t.size = 40;
		t.textAlign = "left";
		t.textColor = 0x020202;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.textGroup_i = function () {
		var t = new eui.Group();
		this.textGroup = t;
		t.horizontalCenter = 0;
		t.verticalCenter = -50;
		t.elementsContent = [this.textMsg_i(),this.textIconGroup_i()];
		return t;
	};
	_proto.textMsg_i = function () {
		var t = new eui.Label();
		this.textMsg = t;
		t.bold = true;
		t.maxWidth = 550;
		t.right = 45;
		t.size = 40;
		t.textAlign = "left";
		t.textColor = 0x020202;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.textIconGroup_i = function () {
		var t = new eui.Group();
		this.textIconGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.right = 0;
		t.source = "money";
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 45;
		t.left = 45;
		t.skinName = PopupWindow$Skin41;
		return t;
	};
	_proto.btnConfirm_i = function () {
		var t = new eui.Button();
		this.btnConfirm = t;
		t.bottom = 45;
		t.right = 45;
		t.skinName = PopupWindow$Skin42;
		return t;
	};
	return PopupWindow;
})(eui.Skin);generateEUI.paths['resource/containers/SceneDetailsWindow.exml'] = window.SceneDetailsWindow = (function (_super) {
	__extends(SceneDetailsWindow, _super);
	var SceneDetailsWindow$Skin43 = 	(function (_super) {
		__extends(SceneDetailsWindow$Skin43, _super);
		function SceneDetailsWindow$Skin43() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = SceneDetailsWindow$Skin43.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-back-other";
			return t;
		};
		return SceneDetailsWindow$Skin43;
	})(eui.Skin);

	function SceneDetailsWindow() {
		_super.call(this);
		this.skinParts = ["btnBack","sceneList","scrollGroup"];
		
		this.elementsContent = [this._Image1_i(),this._Group2_i(),this._Group3_i(),this.scrollGroup_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.titleRes"],[0],this._Image4,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.title"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.collectedText"],[0],this._Label2,"text");
	}
	var _proto = SceneDetailsWindow.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "background";
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.width = 720;
		t.elementsContent = [this._Image2_i(),this.btnBack_i(),this._Group1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "head-bg";
		return t;
	};
	_proto.btnBack_i = function () {
		var t = new eui.Button();
		this.btnBack = t;
		t.verticalCenter = 0;
		t.x = 35;
		t.skinName = SceneDetailsWindow$Skin43;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Label1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "title-bg";
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 50;
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 165;
		t.elementsContent = [this._Image5_i(),this._Label2_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "text3";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.bold = true;
		t.fontFamily = "SimSun";
		t.size = 35;
		t.textColor = 0x332d27;
		t.verticalCenter = 0;
		t.x = 300;
		return t;
	};
	_proto.scrollGroup_i = function () {
		var t = new eui.Scroller();
		this.scrollGroup = t;
		t.bottom = 20;
		t.horizontalCenter = 0;
		t.top = 220;
		t.width = 640;
		t.viewport = this.sceneList_i();
		return t;
	};
	_proto.sceneList_i = function () {
		var t = new eui.List();
		this.sceneList = t;
		t.width = 640;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.columnWidth = 300;
		t.horizontalGap = 15;
		t.orientation = "rows";
		t.requestedColumnCount = 2;
		t.verticalGap = 40;
		return t;
	};
	return SceneDetailsWindow;
})(eui.Skin);generateEUI.paths['resource/containers/SceneSummaryWindow.exml'] = window.SceneSummaryWindow = (function (_super) {
	__extends(SceneSummaryWindow, _super);
	var SceneSummaryWindow$Skin44 = 	(function (_super) {
		__extends(SceneSummaryWindow$Skin44, _super);
		function SceneSummaryWindow$Skin44() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = SceneSummaryWindow$Skin44.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-back-other";
			return t;
		};
		return SceneSummaryWindow$Skin44;
	})(eui.Skin);

	var SceneSummaryWindow$Skin45 = 	(function (_super) {
		__extends(SceneSummaryWindow$Skin45, _super);
		function SceneSummaryWindow$Skin45() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = SceneSummaryWindow$Skin45.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-scene-bg";
			return t;
		};
		return SceneSummaryWindow$Skin45;
	})(eui.Skin);

	var SceneSummaryWindow$Skin46 = 	(function (_super) {
		__extends(SceneSummaryWindow$Skin46, _super);
		function SceneSummaryWindow$Skin46() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = SceneSummaryWindow$Skin46.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-scene-person";
			return t;
		};
		return SceneSummaryWindow$Skin46;
	})(eui.Skin);

	var SceneSummaryWindow$Skin47 = 	(function (_super) {
		__extends(SceneSummaryWindow$Skin47, _super);
		function SceneSummaryWindow$Skin47() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = SceneSummaryWindow$Skin47.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-scene-props";
			return t;
		};
		return SceneSummaryWindow$Skin47;
	})(eui.Skin);

	function SceneSummaryWindow() {
		_super.call(this);
		this.skinParts = ["btnBack","btnSceneBg","btnScenePerson","btnSceneProps"];
		
		this.elementsContent = [this._Image1_i(),this._Group2_i(),this._Group6_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.collectedText"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.finishText"],[0],this._Label2,"text");
	}
	var _proto = SceneSummaryWindow.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "background";
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.width = 720;
		t.elementsContent = [this._Image2_i(),this.btnBack_i(),this._Group1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "head-bg";
		t.width = 720;
		return t;
	};
	_proto.btnBack_i = function () {
		var t = new eui.Button();
		this.btnBack = t;
		t.verticalCenter = 0;
		t.x = 35;
		t.skinName = SceneSummaryWindow$Skin44;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "title-bg";
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "title-scene";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 200;
		t.elementsContent = [this._Group3_i(),this._Group4_i(),this._Group5_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.elementsContent = [this.btnSceneBg_i(),this.btnScenePerson_i(),this.btnSceneProps_i()];
		return t;
	};
	_proto.btnSceneBg_i = function () {
		var t = new eui.Button();
		this.btnSceneBg = t;
		t.horizontalCenter = 0;
		t.skinName = SceneSummaryWindow$Skin45;
		return t;
	};
	_proto.btnScenePerson_i = function () {
		var t = new eui.Button();
		this.btnScenePerson = t;
		t.horizontalCenter = 0;
		t.y = 250;
		t.skinName = SceneSummaryWindow$Skin46;
		return t;
	};
	_proto.btnSceneProps_i = function () {
		var t = new eui.Button();
		this.btnSceneProps = t;
		t.horizontalCenter = 0;
		t.y = 500;
		t.skinName = SceneSummaryWindow$Skin47;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.maxWidth = 720;
		t.y = 780;
		t.elementsContent = [this._Image5_i(),this._Label1_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "text1";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.bold = true;
		t.fontFamily = "SimSun";
		t.size = 50;
		t.textColor = 0x836134;
		t.verticalCenter = 0;
		t.x = 390;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.maxWidth = 720;
		t.y = 880;
		t.elementsContent = [this._Image6_i(),this._Label2_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "text2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.bold = true;
		t.fontFamily = "SimSun";
		t.size = 50;
		t.textColor = 0x560000;
		t.verticalCenter = 0;
		t.x = 320;
		return t;
	};
	return SceneSummaryWindow;
})(eui.Skin);generateEUI.paths['resource/containers/SettingWindow.exml'] = window.SettingWindow = (function (_super) {
	__extends(SettingWindow, _super);
	var SettingWindow$Skin48 = 	(function (_super) {
		__extends(SettingWindow$Skin48, _super);
		function SettingWindow$Skin48() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = SettingWindow$Skin48.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-back-other";
			return t;
		};
		return SettingWindow$Skin48;
	})(eui.Skin);

	function SettingWindow() {
		_super.call(this);
		this.skinParts = ["closeButton","scrollGroup","music_icon","music_text","music","sound_icon","sound_text","sound"];
		
		this.elementsContent = [this._Image1_i(),this._Group2_i(),this.scrollGroup_i(),this._Image5_i(),this._Image6_i(),this.music_i(),this.sound_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.titleRes"],[0],this._Image4,"source");
	}
	var _proto = SettingWindow.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "background";
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.width = 720;
		t.elementsContent = [this._Image2_i(),this.closeButton_i(),this._Group1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "head-bg";
		t.width = 720;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.verticalCenter = 0;
		t.x = 35;
		t.skinName = SettingWindow$Skin48;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Label1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "title-bg";
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "SimSun";
		t.horizontalCenter = 0;
		t.size = 50;
		t.text = "设置";
		t.textColor = 0x020202;
		t.verticalCenter = 0;
		return t;
	};
	_proto.scrollGroup_i = function () {
		var t = new eui.Scroller();
		this.scrollGroup = t;
		t.bottom = 30;
		t.horizontalCenter = 0;
		t.top = 150;
		t.visible = false;
		t.width = 640;
		t.viewport = this._Group3_i();
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "company_logo";
		t.y = 238;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "company";
		t.y = 560;
		return t;
	};
	_proto.music_i = function () {
		var t = new eui.Group();
		this.music = t;
		t.x = 102;
		t.y = 800;
		t.elementsContent = [this._Image7_i(),this.music_icon_i(),this.music_text_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "music";
		t.x = 125;
		t.y = 0;
		return t;
	};
	_proto.music_icon_i = function () {
		var t = new eui.Image();
		this.music_icon = t;
		t.source = "music_open";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.music_text_i = function () {
		var t = new eui.Image();
		this.music_text = t;
		t.source = "text_open";
		t.x = 152;
		t.y = 60;
		return t;
	};
	_proto.sound_i = function () {
		var t = new eui.Group();
		this.sound = t;
		t.x = 376;
		t.y = 800;
		t.elementsContent = [this.sound_icon_i(),this._Image8_i(),this.sound_text_i()];
		return t;
	};
	_proto.sound_icon_i = function () {
		var t = new eui.Image();
		this.sound_icon = t;
		t.source = "sound_open";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "sound";
		t.x = 118;
		t.y = 0;
		return t;
	};
	_proto.sound_text_i = function () {
		var t = new eui.Image();
		this.sound_text = t;
		t.source = "text_open";
		t.x = 144;
		t.y = 60;
		return t;
	};
	return SettingWindow;
})(eui.Skin);generateEUI.paths['resource/containers/skins_list/M3_2_List.exml'] = window.M3_2_List = (function (_super) {
	__extends(M3_2_List, _super);
	function M3_2_List() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 140;
		this.width = 74;
		this.elementsContent = [this._Image1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.image"],[0],this._Image1,"source");
	}
	var _proto = M3_2_List.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return M3_2_List;
})(eui.Skin);generateEUI.paths['resource/containers/skins_list/shop_list.exml'] = window.shop_list = (function (_super) {
	__extends(shop_list, _super);
	function shop_list() {
		_super.call(this);
		this.skinParts = ["effect","pay_money","pay"];
		
		this.height = 417;
		this.width = 311;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this.effect_i(),this.pay_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.res"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.effect"],[0],this.effect,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.money"],[0],this.pay_money,"text");
	}
	var _proto = shop_list.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "power_bg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.y = 50;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 181;
		t.x = 59;
		t.y = 208;
		return t;
	};
	_proto.effect_i = function () {
		var t = new eui.Label();
		this.effect = t;
		t.anchorOffsetX = 0;
		t.size = 25;
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 235;
		t.x = 36;
		t.y = 268;
		return t;
	};
	_proto.pay_i = function () {
		var t = new eui.Group();
		this.pay = t;
		t.height = 75;
		t.width = 231;
		t.x = 41;
		t.y = 299.5;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this.pay_money_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pay_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pay";
		t.x = 100;
		t.y = 21.5;
		return t;
	};
	_proto.pay_money_i = function () {
		var t = new eui.Label();
		this.pay_money = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33;
		t.scaleX = 1;
		t.scaleY = 1;
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 162;
		t.x = 33;
		t.y = 21.5;
		return t;
	};
	return shop_list;
})(eui.Skin);generateEUI.paths['resource/containers/StartScreen.exml'] = window.StartScreen = (function (_super) {
	__extends(StartScreen, _super);
	var StartScreen$Skin49 = 	(function (_super) {
		__extends(StartScreen$Skin49, _super);
		function StartScreen$Skin49() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = StartScreen$Skin49.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-resume";
			return t;
		};
		return StartScreen$Skin49;
	})(eui.Skin);

	var StartScreen$Skin50 = 	(function (_super) {
		__extends(StartScreen$Skin50, _super);
		function StartScreen$Skin50() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = StartScreen$Skin50.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-newgame";
			return t;
		};
		return StartScreen$Skin50;
	})(eui.Skin);

	var StartScreen$Skin51 = 	(function (_super) {
		__extends(StartScreen$Skin51, _super);
		function StartScreen$Skin51() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = StartScreen$Skin51.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-manage-start";
			return t;
		};
		return StartScreen$Skin51;
	})(eui.Skin);

	var StartScreen$Skin52 = 	(function (_super) {
		__extends(StartScreen$Skin52, _super);
		function StartScreen$Skin52() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = StartScreen$Skin52.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-dev";
			return t;
		};
		return StartScreen$Skin52;
	})(eui.Skin);

	var StartScreen$Skin53 = 	(function (_super) {
		__extends(StartScreen$Skin53, _super);
		function StartScreen$Skin53() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = StartScreen$Skin53.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-picture-start";
			return t;
		};
		return StartScreen$Skin53;
	})(eui.Skin);

	var StartScreen$Skin54 = 	(function (_super) {
		__extends(StartScreen$Skin54, _super);
		function StartScreen$Skin54() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = StartScreen$Skin54.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-store";
			return t;
		};
		return StartScreen$Skin54;
	})(eui.Skin);

	var StartScreen$Skin55 = 	(function (_super) {
		__extends(StartScreen$Skin55, _super);
		function StartScreen$Skin55() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = StartScreen$Skin55.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-share";
			return t;
		};
		return StartScreen$Skin55;
	})(eui.Skin);

	var StartScreen$Skin56 = 	(function (_super) {
		__extends(StartScreen$Skin56, _super);
		function StartScreen$Skin56() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = StartScreen$Skin56.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-setting";
			return t;
		};
		return StartScreen$Skin56;
	})(eui.Skin);

	function StartScreen() {
		_super.call(this);
		this.skinParts = ["btnResumeGame","btnNewGame","btnManage","btnDev","no_manage","btnPicture","btnStore","btnShare","btnSetting","navigationBar"];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Group1_i(),this.navigationBar_i()];
	}
	var _proto = StartScreen.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "background";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "logo";
		t.y = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 440;
		t.elementsContent = [this.btnResumeGame_i(),this.btnNewGame_i(),this.btnManage_i(),this.btnDev_i(),this.no_manage_i()];
		return t;
	};
	_proto.btnResumeGame_i = function () {
		var t = new eui.Button();
		this.btnResumeGame = t;
		t.left = 17;
		t.skinName = StartScreen$Skin49;
		return t;
	};
	_proto.btnNewGame_i = function () {
		var t = new eui.Button();
		this.btnNewGame = t;
		t.left = 17;
		t.y = 163;
		t.skinName = StartScreen$Skin50;
		return t;
	};
	_proto.btnManage_i = function () {
		var t = new eui.Button();
		this.btnManage = t;
		t.left = 17;
		t.visible = false;
		t.y = 318;
		t.skinName = StartScreen$Skin51;
		return t;
	};
	_proto.btnDev_i = function () {
		var t = new eui.Button();
		this.btnDev = t;
		t.left = 17;
		t.y = 475;
		t.skinName = StartScreen$Skin52;
		return t;
	};
	_proto.no_manage_i = function () {
		var t = new eui.Image();
		this.no_manage = t;
		t.source = "no_manage";
		t.x = 17;
		t.y = 318;
		return t;
	};
	_proto.navigationBar_i = function () {
		var t = new eui.Group();
		this.navigationBar = t;
		t.height = 170;
		t.horizontalCenter = 0;
		t.width = 665;
		t.y = 1180;
		t.elementsContent = [this.btnPicture_i(),this.btnStore_i(),this.btnShare_i(),this.btnSetting_i()];
		return t;
	};
	_proto.btnPicture_i = function () {
		var t = new eui.Button();
		this.btnPicture = t;
		t.bottom = 20;
		t.left = 17;
		t.skinName = StartScreen$Skin53;
		return t;
	};
	_proto.btnStore_i = function () {
		var t = new eui.Button();
		this.btnStore = t;
		t.bottom = 20;
		t.x = 175;
		t.skinName = StartScreen$Skin54;
		return t;
	};
	_proto.btnShare_i = function () {
		var t = new eui.Button();
		this.btnShare = t;
		t.bottom = 20;
		t.right = 160;
		t.skinName = StartScreen$Skin55;
		return t;
	};
	_proto.btnSetting_i = function () {
		var t = new eui.Button();
		this.btnSetting = t;
		t.bottom = 20;
		t.right = 0;
		t.skinName = StartScreen$Skin56;
		return t;
	};
	return StartScreen;
})(eui.Skin);generateEUI.paths['resource/containers/StoreWindow.exml'] = window.StoreWindow = (function (_super) {
	__extends(StoreWindow, _super);
	var StoreWindow$Skin57 = 	(function (_super) {
		__extends(StoreWindow$Skin57, _super);
		function StoreWindow$Skin57() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = StoreWindow$Skin57.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-back-game";
			return t;
		};
		return StoreWindow$Skin57;
	})(eui.Skin);

	function StoreWindow() {
		_super.call(this);
		this.skinParts = ["btnBack","shoplist","scrollGroup","gold","note"];
		
		this.elementsContent = [this._Image1_i(),this._Group2_i(),this.scrollGroup_i(),this._Image3_i(),this.gold_i(),this.note_i()];
	}
	var _proto = StoreWindow.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "background";
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.width = 720;
		t.elementsContent = [this._Image2_i(),this.btnBack_i(),this._Group1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "head-bg";
		t.width = 720;
		return t;
	};
	_proto.btnBack_i = function () {
		var t = new eui.Button();
		this.btnBack = t;
		t.verticalCenter = 0;
		t.x = 20;
		t.skinName = StoreWindow$Skin57;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Label1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "SimSun";
		t.size = 60;
		t.text = "商城";
		t.textColor = 0x000000;
		return t;
	};
	_proto.scrollGroup_i = function () {
		var t = new eui.Scroller();
		this.scrollGroup = t;
		t.anchorOffsetY = 0;
		t.height = 1022;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 223;
		t.viewport = this.shoplist_i();
		return t;
	};
	_proto.shoplist_i = function () {
		var t = new eui.List();
		this.shoplist = t;
		t.itemRendererSkinName = shop_list;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.columnWidth = 311;
		t.orientation = "rows";
		t.requestedColumnCount = 2;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "money";
		t.x = 378;
		t.y = 158;
		return t;
	};
	_proto.gold_i = function () {
		var t = new eui.Label();
		this.gold = t;
		t.height = 60;
		t.horizontalCenter = -40;
		t.size = 40;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xe0af1a;
		t.verticalAlign = "middle";
		t.width = 180;
		t.y = 150;
		return t;
	};
	_proto.note_i = function () {
		var t = new eui.Label();
		this.note = t;
		t.height = 500;
		t.horizontalCenter = 0;
		t.size = 100;
		t.text = "金币不足";
		t.textAlign = "center";
		t.textColor = 0xff0202;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 500;
		return t;
	};
	return StoreWindow;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.percentHeight = 100;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.percentHeight = 100;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);