import { std } from "wow/wotlk";

const MODEL = std.CreatureOutfits.create().fromString(
    `
    Character\Human\male\humanmale.m2
    1 0
    10 18 8 3 1 8 1
    0
    0
    0
    0
    0
    0
    7478
    7477
    0
    0
    0
    0
    0
    0
    0
    `
)

export const ROBERT_STEELMAN = std.CreatureTemplates.create("magic-core", "robert-steelman")
    .Name.enGB.set("Robert Steelman")
    .Level.set(20)
    .FactionTemplate.STORMWIND.set()
    .UnitClass.WARRIOR.set()
    .Type.HUMANOID.set()
    .Rank.ELITE.set()
    .Models.addIds(MODEL.ID)
    .NPCFlags.QUEST_GIVER.set(true)
    .FlagsExtra.CANNOT_ENTER_COMBAT.set(true)
    .Spawns.add("magic-core", "robert-steelman", {map:0,x:-8630.144531,y:-552.395020,z:145.078461,o:1.791834})