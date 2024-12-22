import { std } from "wow/wotlk";
import { CURSED_PUMPKIN } from "../items/cursed-pumpkin";
import { GENERIC_LOCK } from "../global/objects";

const SPOOKY_CHEST = std.GameObjectTemplates.Chests.create("magic-core", "spooky-chest")
    .Name.enGB.set("Spooky Chest")
    .Display.set(259)
    .IsConsumable.set(1)
    .Lock.set(GENERIC_LOCK.ID)
    .Loot.modRef((loot) => {
        loot
            .addItem(CURSED_PUMPKIN.ID, 100, 1, 1)
    })
    .Spawns.add("magic-core", "spooky-chest", {map:0,x:-8625.041016,y:-551.101379,z:144.956497,o:1.829948}, 10)