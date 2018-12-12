
import { prop, Typegoose, ModelType, InstanceType, pre } from "typegoose";
import mongoose, { Schema } from "mongoose";

/**
 * 
    plotId: number; //当前剧情id
    collectedScenes?: Array<string>; //收集场景
    fatigueValue?: number; //体力值
    gold?: string; //金币
    lastEntryTime?: string;
    hints?: number; //可用提示次数
    time?: number;  //经营模式剩余回合
    guPrice?: Array<number>; //经营模式古董价格
    guColl?: Array<number>;  //经营模式获得古董数量
    guEventList?: Array<any>; //经营模式事件存档
    sound?: boolean; //音效
    music?: boolean; //音乐
    isManage?: boolean; //是否开启经营模式
    isShowGuide?: boolean; //开始是否显示教程
    ending?: Array<string>; //完成结局
    pointHunag?: number;
    pointMu?: number;
 */

export class PlayerInfo extends Typegoose {
    @prop({ index: true })
    unionId?: String;
    @prop()
    plotId: Number;
    @prop()
    collectedScenes: Array<String>;
    @prop()
    fatigueValue: Number;
    @prop()
    gold: String;
    @prop()
    lastEntryTime: String;
    @prop()
    hints?: Number;
    @prop()
    time?: Number;
    @prop()
    guPrice?: Array<Number>;
    @prop()
    guColl?: Array<Number>;
    @prop()
    guEventList?: Array<any>;
    @prop()
    sound?: Boolean;
    @prop()
    music?: Boolean;
    @prop()
    isManage?: Boolean;
    @prop()
    isShowGuide?: Boolean;
    @prop()
    ending?: Array<string>;
    @prop()
    gameTime?: Number;
    @prop()
    pointHunag?: Number;
    @prop()
    pointMu?: Number;
}

const PlayerInfoModel = new PlayerInfo().getModelForClass(PlayerInfo, {
    schemaOptions: {
        timestamps: true,
    }
});

export default PlayerInfoModel;