import { TELEPORT } from "../shared/packets/definitions";
import { TELEPORT_PACKET, TELEPORT_SPELL_PACKET } from "../shared/packets/implementations/teleport";

export function teleport(events: TSEvents) {
    events.CustomPacket.OnReceive(TELEPORT, (opcode, packet, player) => {
        if (!player) {
            return
        }

        if(!player.HasAura(UTAG('magic-core', 'SCROLL_OF_KNOWLEDGE_AURA'))){
            return
        }

        let parsed = new TELEPORT_PACKET();
        parsed.Read(packet)

        switch (parsed.getLocation()) {
            case 1.0: // Stormwind
                player.Teleport(0, -8833.379883, 628.627991, 94.006599, 1.065350)
                break;
            case 2.0: // Ironforge
                player.Teleport(0, -4918.879883, -940.406006, 501.563995, 5.423470)
                break;
            case 3.0: // Darnassus
                player.Teleport(1, 9949.559570, 2284.209961, 1341.394165, 1.595870)
                break;
            case 4.0: // Orgrimmar
                player.Teleport(1, 1629.359985, -4373.390137, 31.256399, 3.548390)
                break;
            case 5.0: // Undercity
                player.Teleport(0, 1584.069946, 241.987000, -52.153400, 0.049647)
                break;
            case 6.0: // Thunder Bluff
                player.Teleport(1, -1277.369995, 124.804001, 131.287003, 5.222740595870)
                break;
        }
    })

    events.Spell.OnApply(UTAG('magic-core', 'SCROLL_OF_KNOWLEDGE_AURA'), (spell) => {
        const player = ToPlayer(spell.GetCaster())

        if (!player) {
            return
        }

        let packet = new TELEPORT_SPELL_PACKET()
        packet.setState(1)
        packet.Write().SendToPlayer(player)
    })

    events.Spell.OnRemove(UTAG('magic-core', 'SCROLL_OF_KNOWLEDGE_AURA'), (spell) => {
        const player = ToPlayer(spell.GetCaster())

        if (!player) {
            return
        }

        let packet = new TELEPORT_SPELL_PACKET()
        packet.setState(0)
        packet.Write().SendToPlayer(player)
    })
}
