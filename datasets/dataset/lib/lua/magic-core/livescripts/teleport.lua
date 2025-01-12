local ____lualib = require("lualib_bundle")
local __TS__New = ____lualib.__TS__New
local ____exports = {}
local ____definitions = require("shared.packets.definitions")
local TELEPORT = ____definitions.TELEPORT
local ____teleport = require("shared.packets.implementations.teleport")
local TELEPORT_PACKET = ____teleport.TELEPORT_PACKET
local TELEPORT_SPELL_PACKET = ____teleport.TELEPORT_SPELL_PACKET
function ____exports.teleport(events)
    events.CustomPacket:OnReceive(
        TELEPORT,
        function(opcode, packet, player)
            if not player then
                return
            end
            if not player:HasAura(80908) then
                return
            end
            local parsed = __TS__New(TELEPORT_PACKET)
            parsed:Read(packet)
            repeat
                local ____switch6 = parsed:getLocation()
                local ____cond6 = ____switch6 == 1
                if ____cond6 then
                    player:Teleport(
                        0,
                        -8833.379883,
                        628.627991,
                        94.006599,
                        1.06535
                    )
                    break
                end
                ____cond6 = ____cond6 or ____switch6 == 2
                if ____cond6 then
                    player:Teleport(
                        0,
                        -4918.879883,
                        -940.406006,
                        501.563995,
                        5.42347
                    )
                    break
                end
                ____cond6 = ____cond6 or ____switch6 == 3
                if ____cond6 then
                    player:Teleport(
                        1,
                        9949.55957,
                        2284.209961,
                        1341.394165,
                        1.59587
                    )
                    break
                end
                ____cond6 = ____cond6 or ____switch6 == 4
                if ____cond6 then
                    player:Teleport(
                        1,
                        1629.359985,
                        -4373.390137,
                        31.256399,
                        3.54839
                    )
                    break
                end
                ____cond6 = ____cond6 or ____switch6 == 5
                if ____cond6 then
                    player:Teleport(
                        0,
                        1584.069946,
                        241.987,
                        -52.1534,
                        0.049647
                    )
                    break
                end
                ____cond6 = ____cond6 or ____switch6 == 6
                if ____cond6 then
                    player:Teleport(
                        1,
                        -1277.369995,
                        124.804001,
                        131.287003,
                        5.22274059587
                    )
                    break
                end
            until true
        end
    )
    events.Spell:OnApply(
        80908,
        function(spell)
            local player = ToPlayer(spell:GetCaster())
            if not player then
                return
            end
            local packet = __TS__New(TELEPORT_SPELL_PACKET)
            packet:setState(1)
            packet:Write():SendToPlayer(player)
        end
    )
    events.Spell:OnRemove(
        80908,
        function(spell)
            local player = ToPlayer(spell:GetCaster())
            if not player then
                return
            end
            local packet = __TS__New(TELEPORT_SPELL_PACKET)
            packet:setState(0)
            packet:Write():SendToPlayer(player)
        end
    )
end
return ____exports
