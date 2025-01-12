import { TELEPORT, TELEPORT_SPELL } from "../definitions";

export class TELEPORT_PACKET {
    private location: uint32 = 0;

    constructor() {}

    setLocation(id: uint32) {this.location = id}
    getLocation(): uint32 { return this.location }

    Read(packet: TSPacketRead) {
        this.location = packet.ReadUInt32();
    }

    Write(): TSPacketWrite {
        let packet = CreateCustomPacket(TELEPORT, 0);
        packet.WriteUInt32(this.location)
        return packet
    }
}

export class TELEPORT_SPELL_PACKET {
    private state: uint32 = 0;

    constructor() {}

    setState(status: uint32) {this.state = status}
    getState(): uint32 { return this.state }

    Read(packet: TSPacketRead) {
        this.state = packet.ReadUInt32();
    }

    Write(): TSPacketWrite {
        let packet = CreateCustomPacket(TELEPORT_SPELL, 0);
        packet.WriteUInt32(this.state)
        return packet
    }
}