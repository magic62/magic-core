import { std } from "wow/wotlk";
import { ROBERT_STEELMAN } from "../creatures/robert-steelman";
import { ENRAGED_SHADOW } from "../creatures/enraged-shadow";
import { ROBERTS_RING } from "../items/roberts-ring";

export const SHADOW_ESSENCE = std.Items.create("magic-core", "shadow-essence")
    .Name.enGB.set("Shadow Essence")
    .DisplayInfo.set(37755)
    .Bonding.QUEST_ITEM.set()
    .Class.QUEST.set()
    .Quality.WHITE.set()
    .MaxStack.set(5)

const THE_HILLS_OF_ELWYNN_1 = std.Quests.create("magic-core", "hills-of-elwynn-1")
    .Name.enGB.set("The Hills of Elwynn")
    .PickupText.enGB.set("")
    .ObjectiveText.enGB.set("Collect 5 Shadow Essence from Chaotic Shadows and return to Robert Steelman in Elwynn Forest.")
    .IncompleteText.enGB.set("")
    .CompleteText.enGB.set("")
    .CompleteLogText.enGB.set("Return to Robert Steelman in Elwynn Forest.")

    .AreaSort.set(12) // Elwynn 
    .QuestLevel.set(10)

    .Objectives.Item.add(SHADOW_ESSENCE.ID, 5)

    .Rewards.Difficulty.set(5)
    .Rewards.Money.set(150)
    .Rewards.Reputation.add(72, 50)

    .Questgiver.addCreatureBoth(ROBERT_STEELMAN.ID)

    .Flags.SHARABLE.set(true)

/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

export const VOID_CRYSTAL = std.Items.create("magic-core", "void-crystal")
    .Name.enGB.set("Void Crystal")
    .DisplayInfo.set(6689)
    .Bonding.QUEST_ITEM.set()
    .Class.QUEST.set()
    .Quality.WHITE.set()
    .MaxStack.set(1)

export const THE_HILLS_OF_ELWYNN_2 = std.Quests.create("magic-core", "hills-of-elwynn-2")
    .Name.enGB.set("The Hills of Elwynn")
    .PickupText.enGB.set("")
    .ObjectiveText.enGB.set("Kill the Enraged Shadow and collect a Void Crystal, then return to Robert Steelman in Elwynn Forest.")
    .IncompleteText.enGB.set("")
    .CompleteText.enGB.set("")
    .CompleteLogText.enGB.set("Return to Robert Steelman in Elwynn Forest.")

    .AreaSort.set(12) // Elwynn 
    .QuestLevel.set(10)

    .Objectives.Entity.add(ENRAGED_SHADOW.ID, 1)
    .Objectives.Item.add(VOID_CRYSTAL.ID, 1)

    .Rewards.Item.add(ROBERTS_RING.ID, 1)
    .Rewards.Difficulty.set(6)
    .Rewards.Reputation.add(72, 100)

    .Questgiver.addCreatureBoth(ROBERT_STEELMAN.ID)

    .Flags.SHARABLE.set(true)

/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

THE_HILLS_OF_ELWYNN_1.NextQuest.set(THE_HILLS_OF_ELWYNN_2.ID)
THE_HILLS_OF_ELWYNN_2.PrevQuest.set(THE_HILLS_OF_ELWYNN_1.ID)

// Scripts

const PATH = std.ScriptPaths.create([
    { map: 0, x: -8631.564453, y: -541.971313, z: 145.244995, o: 1.689732 },
    { map: 0, x: -8619.862305, y: -530.378662, z: 146.077347, o: 0.759035 },
    { map: 0, x: -8615.967773, y: -498.720703, z: 149.589035, o: 1.355938 },
])

const ACTION_LIST = std.TimedActionListBuilder.create(ROBERT_STEELMAN.ID, 0, true)
    .addAction(0, script => script
        .Action.setPlayEmote(4) // Cheer
        .Target.setSelf()
    )
    .addAction(0, script => script
        .Action.setTalk({ enGB: "Good work!" }, 0)
        .Target.setSelf()
    )
    .addAction(2500, script => script
        .Action.setWpStart(true, PATH.ID, false, 0, 0, "PASSIVE")
        .Target.setSelf()
    )

ROBERT_STEELMAN.Scripts.onRewardQuest(THE_HILLS_OF_ELWYNN_2.ID, 0, 0, script => script
    .Action.setCallTimedActionlist(ACTION_LIST.ID, 0, 1)
    .Target.setSelf()
)

ROBERT_STEELMAN.Scripts.onWaypointEnded(0, PATH.ID, script => script
    .Action.setTalk({ enGB: "This lake is nice!" }, 0)
    .Target.setSelf()
    .then()
    .Action.setForceDespawn(5000, 5)
    .Target.setSelf()
)