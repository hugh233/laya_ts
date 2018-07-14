
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui.battle {
    export class AccountViewUI extends View {
		public mpTextResult:Laya.Label;
		public mpBtnBack:Laya.Button;
		public mpBtnAgain:Laya.Button;
		public mpNumScore:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1080,"height":1920},"child":[{"type":"Image","props":{"skin":"battle/Bg_Answer_01.png"}},{"type":"Label","props":{"y":500,"x":562,"width":600,"var":"mpTextResult","text":"You Win!","skewX":-10,"overflow":"visible","height":200,"fontSize":150,"color":"#d6de1a","bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Button","props":{"y":1500,"x":270,"width":400,"var":"mpBtnBack","height":200,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":100,"x":200,"width":400,"skin":"battle/Box_Answer_03.png","sizeGrid":"21,19,20,23","height":200,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":100,"x":200,"width":400,"valign":"middle","text":"返回大厅","height":200,"fontSize":80,"anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Button","props":{"y":1500,"x":800,"width":400,"var":"mpBtnAgain","height":200,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":100,"x":200,"width":400,"skin":"battle/Box_Answer_03.png","sizeGrid":"21,19,20,23","height":200,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":100,"x":200,"width":400,"valign":"middle","text":"再来一局","height":200,"fontSize":80,"anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Label","props":{"y":850,"x":540,"var":"mpNumScore","text":"1200","fontSize":200,"color":"#ee0e0b","bold":true,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.battle.AccountViewUI.uiView);

        }

    }
}

module ui.battle {
    export class BattleViewUI extends View {
		public mpImgBg:Laya.Image;
		public mpBoxSelf:Laya.Box;
		public mpImgSelf:Laya.Image;
		public mpNumSelf:Laya.Label;
		public mpNameSelf:Laya.Label;
		public mpBoxEnemy:Laya.Box;
		public mpImgEnemy:Laya.Image;
		public mpNumEnemy:Laya.Label;
		public mpImgExit:Laya.Image;
		public mpImgBgTime:Laya.Image;
		public mpTextTime:Laya.Label;
		public mpBoxText:Laya.Box;
		public mpBoxImg:Laya.Box;
		public mpBgSelf:Laya.Image;
		public mpProSelf:Laya.Image;
		public mpBgEnemy:Laya.Image;
		public mpProEnemy:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1080,"height":1920},"child":[{"type":"Image","props":{"width":1080,"var":"mpImgBg","skin":"battle/Bg_Answer_01.png","height":1920}},{"type":"Box","props":{"y":80,"x":48,"width":350,"var":"mpBoxSelf","height":200},"child":[{"type":"Image","props":{"y":75,"var":"mpImgSelf","skin":"battle/Box_Answer_TouXiang2.png","anchorY":0.5,"anchorX":0},"child":[{"type":"Label","props":{"y":85,"x":225,"var":"mpNumSelf","text":"1000","fontSize":50,"color":"#0bc2fb","bold":true,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":160,"x":70,"var":"mpNameSelf","text":"是我","overflow":"hidden","fontSize":30,"color":"#f8f1f1","anchorY":0,"anchorX":0.5}}]}]},{"type":"Box","props":{"y":80,"x":1030,"width":350,"var":"mpBoxEnemy","height":200,"anchorY":0,"anchorX":1},"child":[{"type":"Image","props":{"y":0,"x":350,"var":"mpImgEnemy","skin":"battle/Box_Answer_TouXiang1.png","anchorY":0,"anchorX":1},"child":[{"type":"Label","props":{"y":85,"x":90,"var":"mpNumEnemy","text":"1000","fontSize":50,"color":"#a44185","bold":true,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":160,"x":235,"text":"不是我","overflow":"hidden","name":"mpNameEnemy","fontSize":30,"color":"#f8f1f1","anchorY":0,"anchorX":0.5}}]},{"type":"Image","props":{"y":178,"x":30,"var":"mpImgExit","skin":"battle/Om_Answer_QiQuan.png"}}]},{"type":"Image","props":{"y":170,"x":540,"var":"mpImgBgTime","skin":"battle/Box_Answer_ShiJian.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":113,"x":113,"var":"mpTextTime","text":"10","fontSize":80,"color":"#f80d09","bold":true,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":1670,"x":540,"width":900,"var":"mpBoxText","height":1200,"anchorY":1,"anchorX":0.5},"child":[{"type":"Box","props":{"y":0,"x":450,"name":"mpBoxTitle"},"child":[{"type":"Label","props":{"wordWrap":true,"width":900,"text":"”老铁，666“ 故事起源什么季节？","overflow":"visible","name":"mpTextTitle","height":200,"fontSize":50,"color":"#d43230","anchorY":0,"anchorX":0.5,"align":"center"}}]},{"type":"Button","props":{"y":200,"x":450,"width":900,"name":"mpBtn0","height":200,"anchorY":0,"anchorX":0.5},"child":[{"type":"Image","props":{"width":900,"skin":"battle/Box_Answer_03.png","sizeGrid":"22,18,18,22","name":"mpImg","height":200}},{"type":"Label","props":{"y":100,"x":450,"width":900,"valign":"middle","text":"春季","name":"mpText","height":200,"fontSize":50,"color":"#050404","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Button","props":{"y":440,"x":450,"width":900,"name":"mpBtn1","height":200,"anchorY":0,"anchorX":0.5},"child":[{"type":"Image","props":{"width":900,"skin":"battle/Box_Answer_03.png","sizeGrid":"22,18,18,22","name":"mpImg","height":200}},{"type":"Label","props":{"y":100,"x":450,"width":900,"valign":"middle","text":"春季","name":"mpText","height":200,"fontSize":50,"color":"#050404","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Button","props":{"y":680,"x":450,"width":900,"name":"mpBtn2","height":200,"anchorY":0,"anchorX":0.5},"child":[{"type":"Image","props":{"width":900,"skin":"battle/Box_Answer_03.png","sizeGrid":"22,18,18,22","name":"mpImg","height":200}},{"type":"Label","props":{"y":100,"x":450,"width":900,"valign":"middle","text":"春季","name":"mpText","height":200,"fontSize":50,"color":"#050404","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Button","props":{"y":920,"x":450,"width":900,"name":"mpBtn3","height":200,"anchorY":0,"anchorX":0.5},"child":[{"type":"Image","props":{"width":900,"skin":"battle/Box_Answer_03.png","sizeGrid":"22,18,18,22","name":"mpImg","height":200}},{"type":"Label","props":{"y":100,"x":450,"width":900,"valign":"middle","text":"春季","name":"mpText","height":200,"fontSize":50,"color":"#050404","anchorY":0.5,"anchorX":0.5,"align":"center"}}]}]},{"type":"Box","props":{"y":1670,"x":540,"width":900,"var":"mpBoxImg","height":1300,"anchorY":1,"anchorX":0.5},"child":[{"type":"Box","props":{"y":0,"x":450,"name":"mpBoxTitle"},"child":[{"type":"Image","props":{"width":900,"skin":"battle/Icon_Hamburger_10.png","name":"mpImgTitle","height":500,"anchorY":0,"anchorX":0.5}},{"type":"Label","props":{"y":500,"wordWrap":true,"width":900,"text":"老铁，这个是什么","overflow":"visible","name":"mpTextTitle","height":200,"fontSize":50,"color":"#d43230","anchorY":0,"anchorX":0.5,"align":"center"}}]},{"type":"Button","props":{"y":750,"x":225,"width":400,"name":"mpBtn0","height":200,"anchorY":0,"anchorX":0.5},"child":[{"type":"Image","props":{"width":400,"skin":"battle/Box_Answer_03.png","sizeGrid":"22,18,18,22","name":"mpImg","height":200}},{"type":"Label","props":{"y":100,"x":200,"width":400,"valign":"middle","text":"汉堡","name":"mpText","height":200,"fontSize":30,"color":"#050404","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Button","props":{"y":750,"x":675,"width":400,"name":"mpBtn1","height":200,"anchorY":0,"anchorX":0.5},"child":[{"type":"Image","props":{"width":400,"skin":"battle/Box_Answer_03.png","sizeGrid":"22,18,18,22","name":"mpImg","height":200}},{"type":"Label","props":{"y":100,"x":200,"width":400,"valign":"middle","text":"汉堡","name":"mpText","height":200,"fontSize":30,"color":"#050404","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Button","props":{"y":1000,"x":225,"width":400,"name":"mpBtn2","height":200,"anchorY":0,"anchorX":0.5},"child":[{"type":"Image","props":{"width":400,"skin":"battle/Box_Answer_03.png","sizeGrid":"22,18,18,22","name":"mpImg","height":200}},{"type":"Label","props":{"y":100,"x":200,"width":400,"valign":"middle","text":"汉堡","name":"mpText","height":200,"fontSize":30,"color":"#050404","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Button","props":{"y":1000,"x":675,"width":400,"name":"mpBtn3","height":200,"anchorY":0,"anchorX":0.5},"child":[{"type":"Image","props":{"width":400,"skin":"battle/Box_Answer_03.png","sizeGrid":"22,18,18,22","name":"mpImg","height":200}},{"type":"Label","props":{"y":100,"x":200,"width":400,"valign":"middle","text":"汉堡","name":"mpText","height":200,"fontSize":30,"color":"#050404","anchorY":0.5,"anchorX":0.5,"align":"center"}}]}]},{"type":"Image","props":{"y":1670,"x":48,"width":36,"var":"mpBgSelf","skin":"battle/Bar_Answer_01.png","sizeGrid":"39,12,34,15","height":1200,"anchorY":1,"anchorX":0.5},"child":[{"type":"Image","props":{"y":1200,"x":18,"width":36,"var":"mpProSelf","skin":"battle/Bar_Answer_02.png","sizeGrid":"39,12,32,14","height":450,"anchorY":1,"anchorX":0.5}}]},{"type":"Image","props":{"y":1670,"x":1030,"width":36,"var":"mpBgEnemy","skin":"battle/Bar_Answer_01.png","sizeGrid":"39,12,34,15","height":1200,"anchorY":1,"anchorX":0.5},"child":[{"type":"Image","props":{"y":1200,"x":18,"width":36,"var":"mpProEnemy","skin":"battle/Bar_Answer_03.png","sizeGrid":"39,12,32,14","height":450,"anchorY":1,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.battle.BattleViewUI.uiView);

        }

    }
}

module ui.battle {
    export class ComboViewUI extends View {
		public mpImgCount:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":500,"height":130},"child":[{"type":"HBox","props":{"width":500,"height":130},"child":[{"type":"Image","props":{"skin":"battle/Txt_Answer_QingSong.png","height":130}},{"type":"Image","props":{"var":"mpImgCount","skin":"battle/Nub_Answer_1_4.png"}},{"type":"Image","props":{"skin":"battle/Txt_Answer_Lian.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.battle.ComboViewUI.uiView);

        }

    }
}

module ui.battle {
    export class MatchViewUI extends View {
		public mpBoxEnemy:Laya.Box;
		public mpImgEnemy:Laya.Image;
		public mpTextEnemy:Laya.Label;
		public mpBoxSelf:Laya.Box;
		public mpIconSelf:Laya.Image;
		public mpTextSelf:Laya.Label;
		public mpTextVs:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1080,"height":1920},"child":[{"type":"Box","props":{"y":0,"x":540,"width":1080,"var":"mpBoxEnemy","height":800,"anchorY":0,"anchorX":0.5},"child":[{"type":"Image","props":{"y":400,"x":540,"var":"mpImgEnemy","skin":"battle/Icon_Hamburger_04.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":500,"x":540,"var":"mpTextEnemy","text":"上西楼","fontSize":30,"color":"#ad312f","anchorY":0,"anchorX":0.5,"align":"center"}}]},{"type":"Box","props":{"y":1920,"x":540,"width":1080,"var":"mpBoxSelf","height":800,"anchorY":1,"anchorX":0.5},"child":[{"type":"Image","props":{"y":400,"x":540,"var":"mpIconSelf","skin":"battle/Icon_Hamburger_01.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":500,"x":540,"var":"mpTextSelf","text":"月如钩","fontSize":30,"color":"#d43937","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Label","props":{"y":960,"x":540,"var":"mpTextVs","text":"VS","skewY":-20,"skewX":-20,"fontSize":150,"color":"#dd403d","bold":true,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.battle.MatchViewUI.uiView);

        }

    }
}

module ui.battle {
    export class RoundBroadcastViewUI extends View {
		public mpImgBgScore:Laya.Image;
		public mpTextTitle:Laya.Label;
		public mpTextType:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":360},"child":[{"type":"Box","props":{"width":720,"height":360},"child":[{"type":"Image","props":{"y":360,"x":360,"skin":"battle/Box_Answer_04.png","anchorY":1,"anchorX":0.5}},{"type":"Image","props":{"y":130,"x":360,"var":"mpImgBgScore","skin":"battle/Box_Answer_05.png","anchorY":1,"anchorX":0.5},"child":[{"type":"Image","props":{"y":32,"x":195,"skin":"battle/Txt_Answer_Sbjf.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Label","props":{"y":360,"x":360,"width":600,"var":"mpTextTitle","text":"第几题","overflow":"hidden","height":150,"fontSize":120,"color":"#f4e7e7","bold":true,"anchorY":1,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":200,"x":360,"width":350,"var":"mpTextType","text":"数学","height":60,"fontSize":50,"color":"#f3e7e7","anchorY":1,"anchorX":0.5,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.battle.RoundBroadcastViewUI.uiView);

        }

    }
}

module ui.battle {
    export class SmartBattleUI extends View {
		public mpImgEnemy:Laya.Image;
		public mpImgSelf:Laya.Image;
		public mpListView:Laya.List;
		public mpTextTitle:Laya.Label;
		public mpNumSelf:Laya.Label;
		public mpNumEnemy:Laya.Label;
		public mpTextRound:Laya.Label;
		public mpTextTime:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":640,"height":1136},"child":[{"type":"Image","props":{"y":100,"x":540,"var":"mpImgEnemy","skin":"battle/enemy.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":100,"x":100,"var":"mpImgSelf","skin":"battle/self.png","anchorY":0.5,"anchorX":0.5}},{"type":"List","props":{"y":1036,"x":320,"width":500,"var":"mpListView","repeatY":4,"repeatX":1,"height":500,"anchorY":1,"anchorX":0.5},"child":[{"type":"Box","props":{"y":50,"x":250,"width":400,"name":"render","height":80,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":40,"x":200,"width":400,"text":"label","name":"mpTextItem","height":80,"fontSize":70,"color":"#b93230","bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"}}]}]},{"type":"Label","props":{"y":368,"x":320,"wordWrap":true,"width":600,"var":"mpTextTitle","text":"每四个人中就会有一个人单身","overflow":"visible","fontSize":80,"color":"#ab1210","bold":true,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":47,"x":101,"var":"mpNumSelf","text":"40","fontSize":40,"color":"#c81411","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":53,"x":538,"var":"mpNumEnemy","text":"0","fontSize":40,"color":"#dd2623","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":225,"x":320,"var":"mpTextRound","text":"第几回合","fontSize":50,"color":"#a32623","bold":true,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":97,"x":317,"var":"mpTextTime","text":"10","name":"mpTextTime","fontSize":100,"color":"#e81612","anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.battle.SmartBattleUI.uiView);

        }

    }
}

module ui.expand {
    export class ExpandPageUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":300,"height":300},"child":[{"type":"Box","props":{},"child":[{"type":"Image","props":{"y":110,"x":150,"skin":"battle/Icon_Hamburger_01.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":250,"x":150,"text":"name","name":"name","fontSize":50,"color":"#de2623","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.expand.ExpandPageUI.uiView);

        }

    }
}

module ui.main {
    export class MainViewUI extends View {
		public mpTextScore:Laya.Label;
		public mpTextGold:Laya.Label;
		public mpTextTest:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1080,"height":1920},"child":[{"type":"Label","props":{"y":400,"x":540,"var":"mpTextScore","text":"排位模式","fontSize":100,"color":"#e71d1a","bold":true,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":600,"x":540,"var":"mpTextGold","text":"赏金模式","fontSize":100,"color":"#e71d1a","bold":true,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":750,"x":540,"var":"mpTextTest","text":"测试","fontSize":100,"color":"#e71d1a","bold":true,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.main.MainViewUI.uiView);

        }

    }
}

module ui.test {
    export class TestPageUI extends View {
		public btn:Laya.Button;
		public clip:Laya.Clip;
		public combobox:Laya.ComboBox;
		public tab:Laya.Tab;
		public list:Laya.List;
		public btn2:Laya.Button;
		public check:Laya.CheckBox;
		public radio:Laya.RadioGroup;
		public box:Laya.Box;

        public static  uiView:any ={"type":"View","child":[{"props":{"x":0,"y":0,"skin":"comp/bg.png","sizeGrid":"30,4,4,4","width":600,"height":400},"type":"Image"},{"props":{"x":41,"y":56,"skin":"comp/button.png","label":"点我赋值","width":150,"height":37,"sizeGrid":"4,4,4,4","var":"btn"},"type":"Button"},{"props":{"x":401,"y":56,"skin":"comp/clip_num.png","clipX":10,"var":"clip"},"type":"Clip"},{"props":{"x":220,"y":143,"skin":"comp/combobox.png","labels":"select1,select2,selecte3","selectedIndex":1,"sizeGrid":"4,20,4,4","width":200,"height":23,"var":"combobox"},"type":"ComboBox"},{"props":{"x":220,"y":96,"skin":"comp/tab.png","labels":"tab1,tab2,tab3","var":"tab"},"type":"Tab"},{"props":{"x":259,"y":223,"skin":"comp/vscroll.png","height":150},"type":"VScrollBar"},{"props":{"x":224,"y":223,"skin":"comp/vslider.png","height":150},"type":"VSlider"},{"type":"List","child":[{"type":"Box","child":[{"props":{"skin":"comp/label.png","text":"this is a list","x":26,"y":5,"width":78,"height":20,"fontSize":14,"name":"label"},"type":"Label"},{"props":{"x":0,"y":2,"skin":"comp/clip_num.png","clipX":10,"name":"clip"},"type":"Clip"}],"props":{"name":"render","x":0,"y":0,"width":112,"height":30}}],"props":{"x":452,"y":68,"width":128,"height":299,"vScrollBarSkin":"comp/vscroll.png","repeatX":1,"var":"list"}},{"props":{"x":563,"y":4,"skin":"comp/btn_close.png","name":"close"},"type":"Button"},{"props":{"x":41,"y":112,"skin":"comp/button.png","label":"点我赋值","width":150,"height":66,"sizeGrid":"4,4,4,4","labelSize":30,"labelBold":true,"var":"btn2"},"type":"Button"},{"props":{"x":220,"y":188,"skin":"comp/checkbox.png","label":"checkBox1","var":"check"},"type":"CheckBox"},{"props":{"x":220,"y":61,"skin":"comp/radiogroup.png","labels":"radio1,radio2,radio3","var":"radio"},"type":"RadioGroup"},{"type":"Panel","child":[{"props":{"skin":"comp/image.png"},"type":"Image"}],"props":{"x":299,"y":223,"width":127,"height":150,"vScrollBarSkin":"comp/vscroll.png"}},{"props":{"x":326,"y":188,"skin":"comp/checkbox.png","label":"checkBox2","labelColors":"#ff0000"},"type":"CheckBox"},{"type":"Box","child":[{"props":{"y":70,"skin":"comp/progress.png","width":150,"height":14,"sizeGrid":"4,4,4,4","name":"progress"},"type":"ProgressBar"},{"props":{"y":103,"skin":"comp/label.png","text":"This is a Label","width":137,"height":26,"fontSize":20,"name":"label"},"type":"Label"},{"props":{"y":148,"skin":"comp/textinput.png","text":"textinput","width":150,"name":"input"},"type":"TextInput"},{"props":{"skin":"comp/hslider.png","width":150,"name":"slider"},"type":"HSlider"},{"props":{"y":34,"skin":"comp/hscroll.png","width":150,"name":"scroll"},"type":"HScrollBar"}],"props":{"x":41,"y":197,"var":"box"}}],"props":{"width":600,"height":400}};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.test.TestPageUI.uiView);

        }

    }
}
