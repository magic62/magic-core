import { std } from "wow/wotlk";
import { GENERIC_LOCK } from "../global/objects";
import { THE_HILLS_OF_ELWYNN_2, VOID_CRYSTAL } from "../quests/the-hills-of-elwynn";

const DEMONIC_CRYSTAL = std.GameObjectTemplates.Chests.create("magic-core", "demonic-crystal")
    .Name.enGB.set("Demonic Crystal")
    .Display.set(6706)
    .IsConsumable.set(1)
    .Quest.set(THE_HILLS_OF_ELWYNN_2.ID)
    .Lock.set(GENERIC_LOCK.ID)
    .Loot.modRef((loot) => {
        loot
            .addItem(VOID_CRYSTAL.ID, 100, 1, 1, true)
    })
    .Spawns.add("magic-core", "demonic-crystal", {map:0,x:-8555.381836,y:-562.688293,z:144.965317,o:3.362628}, 10)