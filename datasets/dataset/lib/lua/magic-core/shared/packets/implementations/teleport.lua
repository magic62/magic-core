local ____lualib = require("lualib_bundle")
local __TS__Class = ____lualib.__TS__Class
local ____exports = {}
local ____definitions = require("shared.packets.definitions")
local TELEPORT = ____definitions.TELEPORT
local TELEPORT_SPELL = ____definitions.TELEPORT_SPELL
____exports.TELEPORT_PACKET = __TS__Class()
local TELEPORT_PACKET = ____exports.TELEPORT_PACKET
TELEPORT_PACKET.name = "TELEPORT_PACKET"
function TELEPORT_PACKET.prototype.____constructor(self)
    self.location = 0
end
function TELEPORT_PACKET.prototype.setLocation(self, id)
    self.location = id
end
function TELEPORT_PACKET.prototype.getLocation(self)
    return self.location
end
function TELEPORT_PACKET.prototype.Read(self, packet)
    self.location = packet:ReadUInt32()
end
function TELEPORT_PACKET.prototype.Write(self)
    local packet = CreateCustomPacket(TELEPORT, 0)
    packet:WriteUInt32(self.location)
    return packet
end
____exports.TELEPORT_SPELL_PACKET = __TS__Class()
local TELEPORT_SPELL_PACKET = ____exports.TELEPORT_SPELL_PACKET
TELEPORT_SPELL_PACKET.name = "TELEPORT_SPELL_PACKET"
function TELEPORT_SPELL_PACKET.prototype.____constructor(self)
    self.state = 0
end
function TELEPORT_SPELL_PACKET.prototype.setState(self, status)
    self.state = status
end
function TELEPORT_SPELL_PACKET.prototype.getState(self)
    return self.state
end
function TELEPORT_SPELL_PACKET.prototype.Read(self, packet)
    self.state = packet:ReadUInt32()
end
function TELEPORT_SPELL_PACKET.prototype.Write(self)
    local packet = CreateCustomPacket(TELEPORT_SPELL, 0)
    packet:WriteUInt32(self.state)
    return packet
end
return ____exports
