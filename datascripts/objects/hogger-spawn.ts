import { std } from "wow/wotlk";
import { GENERIC_LOCK } from "../global/objects";

const HOGGER_SPAWN = std.GameObjectTemplates.Goobers.create("magic-core", "hogger-spawn")
    .Name.enGB.set("Hogger Spawn")
    .Display.set(259)
    .Lock.set(GENERIC_LOCK.ID)
    .Spawns.add("magic-core", "hogger-spawn", {map:0,x:-8560.737305,y:-569.358459,z:144.901733,o:1.979676}, 10)

    // Spawn Hogger and attack player after opening
    .InlineScripts.OnGossipHello((obj, player) => {
        const HOGGER = 448

        // Verify object and player exist
        if(!obj || !player) {
            return
        }

        // Despawn the object
        obj.Despawn(true, 3000, 5)

        // Spawn Hogger
        let hoggerSpawn = player.SpawnCreature(HOGGER, -8564.903320, -560.793457, 146.221924, 6.127250, 4, 0)

        // Verify Hogger was actually spawned
        if(!hoggerSpawn) {
            return
        }

        // Start attacking player
        hoggerSpawn.AttackStart(player)
    })