import { SQL, std } from "wow/wotlk";
import { DUMMY_SPELL } from "../spells/dummy";

export const CORRUPTED_MEDALLION = std.Items.create("magic-core", "corrupted-medallion")
    .Name.enGB.set("Corrupted Medallion")
    .DisplayInfo.set(6337)
    .Bonding.QUEST_ITEM.set()
    .Class.QUEST.set()
    .Quality.WHITE.set()
    .MaxStack.set(5)

const MODEL = std.CreatureOutfits.create().fromString(
    `
    Character\Dwarf\male\dwarfmale.m2
    3 0
    2 5 2 6 7 2 1
    0
    0
    0
    0
    0
    0
    2966
    2965
    0
    0
    3195
    0
    0
    0
    0
    `)

export const CORRUPTED_GUARD = std.CreatureTemplates.create("magic-core", "corrupted-guard")
    .Name.enGB.set("Corrupted Guard")
    .Level.set(15)
    .FactionTemplate.NEUTRAL_HOSTILE.set()
    .UnitClass.WARRIOR.set()
    .Type.HUMANOID.set()
    .Stats.HealthMod.set(1.25)
    .Stats.DamageMod.set(1.25)
    .Rank.NORMAL.set()
    .Gold.set(50, 60)

    .NormalLoot.set(94)
    .NormalLoot.modRefCopy((loot) => {
        loot
            .addItem(3195, 100, 1, 1)
            .addItem(CORRUPTED_MEDALLION.ID, 100, 1, 1, true)

        SQL.creature_loot_template.query({ Entry: loot.ID, Item: 2070 }).delete()
    })

    .Models.addIds(MODEL.ID)

    .Scripts.onSpellhit(DUMMY_SPELL.ID, 0, 5000, 5000, script => script
        .Action.setTalk({enGB: "I have been hit by a dummy spell!"}, 0)
        .Target.setSelf()
        .Chance.set(50)
    )

const SPAWNS = [
    {map:0,x:-5709.107910,y:-549.013062,z:398.620911,o:4.522612},
    {map:0,x:-5710.433594,y:-564.098145,z:399.851990,o:4.679688},
    {map:0,x:-5717.640625,y:-575.993774,z:400.333923,o:4.063153},
    {map:0,x:-5728.870605,y:-568.708984,z:398.765625,o:2.511992},
    {map:0,x:-5733.115234,y:-554.763855,z:398.353088,o:0.949049},
]

CORRUPTED_GUARD.Spawns.add("magic-core", "corrupted-guard", SPAWNS, (spawn) => {
    spawn
        .MovementType.RANDOM_MOVEMENT.set()
        .WanderDistance.set(5)
})