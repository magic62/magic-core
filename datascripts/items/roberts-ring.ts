import { std } from "wow/wotlk";

export const ROBERTS_RING = std.Items.create("magic-core", "roberts-ring")
    .Name.enGB.set("Robert's Ring")
    .Bonding.BINDS_ON_PICKUP.set()
    .ItemLevel.set(10)
    .Quality.GREEN.set()
    .Material.JEWELRY.set()
    .InventoryType.FINGER.set()
    .Class.MISC.set()
    .Stats.addStamina(1)
    .Stats.addSpirit(1)
    .DisplayInfo.set(9842)
    .Price.PlayerSellPrice.set(87)