import { std } from "wow/wotlk";
import { CORRUPTED_GUARD, CORRUPTED_MEDALLION } from "../creatures/corrupted-guard";

const SECURING_THE_LAND = std.Quests.create("magic-core", "securing-the-land")
    .Name.enGB.set("Securing the Land")
    .PickupText.enGB.set("$N, we need you to secure this area! Slay the corrupted guards that appeared.$B$BGrab their medallions while you're at it.")
    .ObjectiveText.enGB.set("Go out into Dun Morogh and slay 10 Corrupted Guards, collect 5 of their medallions, and return to Senir Whitebeard in Kharanos.")
    .IncompleteText.enGB.set("We need your help, $c!")
    .CompleteText.enGB.set("You have done well today. Keep up the good work around here.")
    .CompleteLogText.enGB.set("Return to Senir Whitebeard at Kharanos in Dun Morogh.")

    .AreaSort.set(1)
    .QuestLevel.set(15)

    .Objectives.Entity.add(CORRUPTED_GUARD.ID, 10)
    .Objectives.Item.add(CORRUPTED_MEDALLION.ID, 5)

    .Rewards.Difficulty.set(5)
    .Rewards.Money.set(400)
    .Rewards.Reputation.add(47, 50)

    .Questgiver.addCreatureBoth(1252)

    .Flags.SHARABLE.set(true)