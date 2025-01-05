import { std } from "wow/wotlk";

const CREATE_IRON = std.Spells.create("magic-core", "create-iron")
    .Name.enGB.set("Create Iron")
    .Icon.setPath("inv_ingot_iron")
    .Description.enGB.set("Create an iron bar.")
    .CastTime.setSimple(5000) // 5 sec
    .Range.set(1)
    .Visual.set(4439)
    .Cooldown.Time.set(15000) // 15 sec
    .InterruptFlags.set("ON_MOVEMENT")
    .Attributes.IS_HIDDEN_FROM_LOG.set(true)
    .Effects.addMod(eff => eff
        .Type.CREATE_ITEM.set()
        .Item.set(3575) // Iron Bar
        .ItemCount.set(0) // 1 Iron Bar
        .ImplicitTargetA.UNIT_CASTER.set()
    )