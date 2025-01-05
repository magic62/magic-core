import { std } from "wow/wotlk";

export const SHADOW_BLAST  = std.Spells.create("magic-core", "shadow-blast")
    .Name.enGB.set("Shadow Blast")
    .Icon.setPath("spell_shadow_chilltouch")
    .Description.enGB.set("Instantly blast the target for $s1 Shadow damage.")
    .CastTime.set(0) // Instant
    .Range.setSimple(0, 20)
    .Visual.set(71)
    .Cooldown.Time.set(8000) // 8 sec
    .Mana.CostPercent.set(17) // 17% base mana
    .SchoolMask.set("SHADOW")
    .PreventionType.set("SILENCE")
    .FacingCasterFlags.set("SPELL_FACING_FLAG_INFRONT")
    .InterruptFlags.set(["ON_MOVEMENT", "ON_INTERRUPT"])
    .Effects.addMod(eff => eff
        .Type.SCHOOL_DAMAGE.set()
        .DamageBase.set(46)
        .DamageDieSides.set(4)
        // 47 48 49 50
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
    )