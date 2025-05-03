import { std } from "wow/wotlk";

export const DUMMY_SPELL = std.Spells.create("magic-core", "dummy-spell")
    .Name.enGB.set("Magic Core - Dummy")
    .Duration.setSimple(30000) // 30 sec
    .Range.setSimple(0, 25)
    .Attributes.IS_HIDDEN_FROM_LOG.set(true)
    .Attributes.HIDE_FROM_AURA_BAR.set(true)
    .Effects.addMod(eff => eff
        .Type.APPLY_AURA.set()
        .Aura.DUMMY.set()
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
    )

    // When a creature is hit by this dummy spell, make them say something
    .InlineScripts.OnAfterCast((spell) => {
        let target = spell.GetTarget()

        // Verify spell has a target
        if(!target) {
            return
        }

        // Verify target is a creature
        if(!target.IsCreature()) {
            return
        }

        let creature = ToCreature(target)

        // Verify creature exists
        if(!creature) {
            return
        }

        // Make creature speak
        creature.SendUnitSay("I have been hit by a dummy spell!", 0)
    })