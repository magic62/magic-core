import { SQL, std } from "wow/wotlk";

export const ENRAGED_SHADOW = std.CreatureTemplates.create("magic-core", "enraged-shadow")
    .Name.enGB.set("Enraged Shadow")
    .Level.set(11)
    .FactionTemplate.NEUTRAL_HOSTILE.set()
    .UnitClass.WARRIOR.set()
    .Type.DEMON.set()
    .Rank.ELITE.set()
    .Models.addIds(1132)
    .Gold.set(35, 45)
    .NormalLoot.set(2004)
    .NormalLoot.modRefCopy((loot) => {
        loot

        .addItem(2459, 5, 1, 1) // Swiftness Potion

        SQL.creature_loot_template.query({ Entry: loot.ID, Item: 2589 }).delete()
    })

    .Spawns.add("magic-core", "enraged-shadow", {map:0,x:-8553.983398,y:-568.923340,z:145.059967,o:2.875681})