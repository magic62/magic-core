import { SQL, std } from "wow/wotlk";
import { SHADOW_ESSENCE } from "../quests/the-hills-of-elwynn";

const CHAOTIC_SHADOW = std.CreatureTemplates.create("magic-core", "chaotic-shadow")
    .Name.enGB.set("Chaotic Shadow")
    .Level.set(9, 10)
    .FactionTemplate.NEUTRAL_HOSTILE.set()
    .UnitClass.WARRIOR.set()
    .Type.DEMON.set()
    .Rank.NORMAL.set()
    .Models.addIds(1132)
    .Gold.set(20, 30)
    .NormalLoot.set(2004)
    .NormalLoot.modRefCopy((loot) => {
        loot

        .addItem(SHADOW_ESSENCE.ID, 100, 1, 1, true)

        SQL.creature_loot_template.query({ Entry: loot.ID, Item: 2589 }).delete()
    })

const SPAWNS = [
    {map:0,x:-8538.237305,y:-529.262268,z:144.827927,o:2.624370},
    {map:0,x:-8575.406250,y:-519.342529,z:145.277298,o:2.907114},
    {map:0,x:-8586.920898,y:-548.972717,z:146.395294,o:4.391516},
    {map:0,x:-8588.276367,y:-593.622131,z:145.898911,o:4.941290},
    {map:0,x:-8623.899414,y:-585.059814,z:145.160980,o:2.887475},
    {map:0,x:-8653.880859,y:-582.708557,z:144.702362,o:2.172762},
    {map:0,x:-8670.924805,y:-554.947937,z:150.462326,o:2.180616},
    {map:0,x:-8686.597656,y:-523.808655,z:157.027557,o:1.933216},
    {map:0,x:-8669.287109,y:-497.986481,z:147.435577,o:0.401689},
]

CHAOTIC_SHADOW.Spawns.add("magic-core", "chaotic-shadow", SPAWNS, (spawn) => {
    spawn
        .MovementType.RANDOM_MOVEMENT.set()
        .WanderDistance.set(5)
})