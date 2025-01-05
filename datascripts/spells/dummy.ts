import { std } from "wow/wotlk";

const DUMMY_SPELL = std.Spells.create("magic-core", "dummy-spell")
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