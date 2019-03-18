
/*
    常用工具函数
*/

export interface Point {
    x:number;
    y:number;
}

export interface EffectConfig {
    name:string;
    hurt_one_blood?:boolean;///单次气血伤害(伤害值由effect决定)
    hurt_one_magic?:boolean;///单次魔法伤害(伤害值由effect决定)
    add_one_blood?:number;///单次气血增加
    add_one_magic?:number;///单次魔法增加
    hurt_continue_blood?:boolean;///持续气血伤害(每秒)(伤害值由effect决定)
    hurt_continue_magic?:boolean;///持续魔法伤害(每秒)(伤害值由effect决定)
    add_continue_blood?:number;///持续气血增加(每秒)
    add_continue_magic?:number;///持续魔法增加(每秒)
    continue_time?:number;////持续时间(秒)
    add_one_physics_attack?:number;///单次物理攻击增加
    add_one_magic_attack?:number;///单次魔法攻击增加
    add_one_physics_defense?:number;////单次物理防御增加
    add_one_magic_defense?:number;/////单次魔法防御增加
    minus_one_physics_attack?:number;///单次物理攻击减少
    minus_one_magic_attack?:number;///单次魔法攻击减少
    minus_one_physics_defense?:number;////单次物理防御减少
    minus_one_magic_defense?:number;/////单次魔法防御减少
    attack_l:number;////效果攻击距离
    type:'attack'|'assist'|'hinder';//效果类型（攻击、辅助、障碍）
}

export interface PetConfig {
    name:string;
    blood:number;//气血量
    magic:number;//魔法量
    blood_limit:number;//气血上限
    magic_limit:number;//魔法上限
    physics_attack:number;//物理攻击
    magic_attack:number;//魔法攻击
    physics_defense:number;//物理防御
    magic_defense:number;//魔法防御
    life_time:number;//存活秒数
    cd_time:number;//攻击CD时间
}

export interface ArmsConfig {
    name:string;
    physics_attack:number;//物理攻击增量
    magic_attack:number;//魔法攻击增量
    has_blood:number;//需要气血量
    has_magic:number;//需要魔法量
    arms_type:'knife'|'staff'|'stick';//武器类别(刀，法杖，棍)
}

export interface ClothesConfig {
    name:string;
    blood_limit:number;//气血增量
    magic_limit:number;//魔法增量
    physics_defense:number;//物理防御
    magic_defense:number;//魔法防御
    has_physics_attack:number;//需要物理攻击
    has_magic_attack:number;//需要魔法攻击
}

export interface HelmetConfig {
    name:string;
    blood_limit:number;//气血增量
    magic_limit:number;//魔法增量
    physics_defense:number;//物理防御
    magic_defense:number;//魔法防御
    has_physics_attack:number;//需要物理攻击
    has_magic_attack:number;//需要魔法攻击
}

export interface JewelryConfig {
    name:string;
    blood_limit:number;//气血增量
    magic_limit:number;//魔法增量
    physics_attack:number;//物理攻击增加
    magic_attack:number;//魔法攻击增加
    physics_defense:number;//物理防御
    magic_defense:number;//魔法防御
    speed:number;//速度增加
    has_physics_attack:number;//需要物理攻击
    has_magic_attack:number;//需要魔法攻击
}

export interface NecklaceConfig {
    name:string;
    blood_limit:number;//气血增量
    magic_limit:number;//魔法增量
    physics_attack:number;//物理攻击增加
    magic_attack:number;//魔法攻击增加
    physics_defense:number;//物理防御
    magic_defense:number;//魔法防御
    speed:number;//速度增加
    has_physics_attack:number;//需要物理攻击
    has_magic_attack:number;//需要魔法攻击
}

export interface ShoesConfig {
    name:string;
    blood_limit:number;//气血增量
    magic_limit:number;//魔法增量
    speed:number;//速度增量
    physics_defense:number;//物理防御
    magic_defense:number;//魔法防御
    has_physics_attack:number;//需要物理攻击
    has_magic_attack:number;//需要魔法攻击
}

export interface ResInfo {
    name:string;
    type:'equipment'|'drug'|'skill_book';
    config:{};
}

export interface DrugConfig {
    name:string;
    blood:number;///气血增加
    magic:number;///魔法增加
    effect_name:string;////产生effect的名字，没有为空串
    explain:string;////effect说明，没有就是空串
    pet_config?:PetConfig;////如果是召唤宠物有此配置
    effect_config?:EffectConfig;////effect的配置
}

export interface SkillBookConfig {
    name:string;
    blood:number;///气血增加
    magic:number;///魔法增加
    consume_magic:number;///消耗魔法
    cd:number;//CD秒数
    effect_name:string;////产生effect的名字，没有为空串
    explain:string;////effect说明，没有就是空串
    arms_limit:'knife'|'staff'|'stick';////释放效果的武器类型限制
    pet_config?:PetConfig;////如果是召唤宠物有此配置
    effect_config?:EffectConfig;////effect的配置
}

export function get_l(pot1:Point,pot2:Point):number {
    let x0:number = pot1.x;
    let y0:number = pot1.y;
    let x1:number = pot2.x;
    let y1:number = pot2.y;
    return Math.sqrt((x0 - x1)*(x0 - x1) + (y0 - y1)*(y0 - y1));
}

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}