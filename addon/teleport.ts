import { TELEPORT_SPELL } from "../shared/packets/definitions";
import { TELEPORT_PACKET, TELEPORT_SPELL_PACKET } from "../shared/packets/implementations/teleport"
import { SCROLL_OF_KNOWLEDGE_AURA } from "../shared/scroll-of-knowledge";

let mainFrame = CreateFrame("Frame", "TeleportFrame", UIParent)
let minimapButton = CreateFrame("Button", "TeleportButton", Minimap)

export function Teleport() {
    createFrame()
    createMinimap()
}

OnCustomPacket(TELEPORT_SPELL, packet => {
    let spellPacket = new TELEPORT_SPELL_PACKET()
    spellPacket.Read(packet)

    if (spellPacket.getState() == 1) {
        mainFrame.Show()
        minimapButton.Show()

    } else {
        minimapButton.Hide()
        mainFrame.Hide()
    }
})

function isLearned() {
    let auras = []

    let status = false

    for (let i = 0; i < 41; i++) {
        let aura = UnitAura("player", i)[10]
        auras.push(aura)
    }

    auras.forEach((aura) => {
        if (aura == SCROLL_OF_KNOWLEDGE_AURA) {
            status = true
        }
    })

    return status
}

function createFrame() {
    mainFrame.SetSize(800, 375)
    mainFrame.SetPoint("CENTER")
    mainFrame.SetBackdrop({
        bgFile: "Interface\\AchievementFrame\\UI-Achievement-AchievementBackground",
        edgeFile: "Interface\\Tooltips\\ChatBubble-Backdrop",
        tile: false,
        tileSize: 0,
        edgeSize: 8,
        insets: { left: 4, right: 4, top: 4, bottom: 4 }
    })
    mainFrame.SetBackdropColor(1, 1, 1, 1)

    let titleText = mainFrame.CreateFontString("font-test", "OVERLAY")
    titleText.SetPoint("TOP", mainFrame, "TOP", 0, -20)
    titleText.SetFont("Fonts\\FRIZQT__.TTF", 25, "OUTLINE")
    titleText.SetText("Major Cities")
    titleText.SetTextColor(1, 0.82, 0)

    let CreateTeleportButton = function (parent, location) {
        let button = CreateFrame("Button", null, parent, "UIPanelButtonTemplate")
        button.SetSize(100, 30)
        button.SetPoint("BOTTOM", parent, "BOTTOM", 0, 10)
        button.SetText("Teleport")
        button.SetScript("OnClick", function () {
            mainFrame.Hide()
            let packet = new TELEPORT_PACKET()
            packet.setLocation(location)
            packet.Write().Send();
        })
    }

    let CreateCard = function (parent, xOffset, title, texturePath, description, index) {
        let Card = CreateFrame("Frame", null, parent)
        Card.SetSize(225, 275)
        Card.SetPoint("TOP", parent, "TOP", xOffset, -65)
        Card.SetBackdrop({
            bgFile: "Interface\\RAIDFRAME\\UI-RaidFrame-GroupBg",
            edgeFile: "Interface\\Tooltips\\UI-Tooltip-Border",
            tile: false,
            tileSize: 0,
            edgeSize: 12,
            insets: { left: 3, right: 3, top: 3, bottom: 3 }
        })
        Card.SetBackdropColor(1, 1, 1, 1)

        let cardTitle = Card.CreateFontString(null, "OVERLAY")
        cardTitle.SetPoint("TOP", Card, "TOP", 0, -10)
        cardTitle.SetFont("Fonts\\FRIZQT__.TTF", 16, "OUTLINE")
        cardTitle.SetText(title)
        cardTitle.SetTextColor(1, 0.82, 0)

        if (texturePath) {
            let image = Card.CreateTexture(null, "ARTWORK")
            image.SetSize(220, 180)
            image.SetPoint("CENTER", Card, "CENTER", 0, 5)
            image.SetTexture(texturePath)

            let innerCard = CreateFrame("Frame", null, Card)
            innerCard.SetSize(220, 65)
            innerCard.SetPoint("BOTTOM", image, "BOTTOM", 0, 0)
            innerCard.SetBackdrop({
                bgFile: "Interface\\ChatFrame\\ChatFrameBackground",
                edgeFile: null,
                tile: false,
                tileSize: 0,
                insets: { left: 0, right: 0, top: 0, bottom: 0 }
            })
            innerCard.SetBackdropColor(0, 0, 0, 0.7)

            let cardText = innerCard.CreateFontString(null, "OVERLAY", "GameFontNormal")
            cardText.SetPoint("CENTER", innerCard, "CENTER", 0, 0)
            cardText.SetSize(160, 100)
            cardText.SetText(description)
            cardText.SetJustifyH("CENTER")
            cardText.SetJustifyV("MIDDLE")
        }

        CreateTeleportButton(Card, index)
        return Card
    }

    if (UnitFactionGroup("player")[0] == "Alliance") {
        CreateCard(
            mainFrame,
            -250,
            "Stormwind",
            "Textures\\Stormwind_Map.blp",
            "The majestic human capital, known for its towering walls and bustling trade district.",
            1
        )

        CreateCard(
            mainFrame,
            0,
            "Ironforge",
            "Textures\\Ironforge_Map.blp",
            "The ancient dwarven city, carved into the heart of a mountain with a great central forge.",
            2
        )

        CreateCard(
            mainFrame,
            250,
            "Darnassus",
            "Textures\\Darnassus_Map.blp",
            "The serene elven city, nestled high in the trees and surrounded by lush nature.",
            3
        )
    } else {
        CreateCard(
            mainFrame,
            -250,
            "Orgrimmar",
            "Textures\\Orgrimmar_Map.blp",
            "The sprawling, heavily fortified capital of the Orcs, nestled in the harsh deserts of Durotar.",
            4
        )

        CreateCard(
            mainFrame,
            0,
            "Undercity",
            "Textures\\Undercity_Map.blp",
            "The shadowy, labyrinthine stronghold of the Forsaken, hidden beneath the ruined kingdom of Lordaeron.",
            5
        )

        CreateCard(
            mainFrame,
            250,
            "Thunder Bluff",
            "Textures\\ThunderBluff_Map.blp",
            "The peaceful, elevated city of the Tauren, built on towering mesas in the grassy plains of Mulgore.",
            6
        )
    }

    let closeButton = CreateFrame("Button", null, mainFrame, "UIPanelCloseButton")
    closeButton.SetPoint("TOPRIGHT", mainFrame, "TOPRIGHT", -4, -4)

    UISpecialFrames.push("TeleportFrame")

    if (!isLearned()) {
        mainFrame.Hide()
    }
}

function createMinimap() {
    minimapButton.SetSize(32, 32)
    minimapButton.SetFrameStrata("MEDIUM")
    minimapButton.SetFrameLevel(8)
    minimapButton.SetPoint("BOTTOMLEFT", Minimap, "BOTTOMLEFT", -2, 2)

    let minimapIcon = minimapButton.CreateTexture(null, "BACKGROUND")
    minimapIcon.SetTexture("Interface\\Icons\\INV_Misc_Rune_01")
    minimapIcon.SetSize(20, 20)
    minimapIcon.SetPoint("CENTER", minimapButton, "CENTER", -11, 11)

    let minimapBorder = minimapButton.CreateTexture(null, "OVERLAY")
    minimapBorder.SetTexture("Interface\\Minimap\\MiniMap-TrackingBorder")
    minimapBorder.SetSize(54, 54)
    minimapBorder.SetPoint("CENTER")

    let highlightTexture = minimapButton.CreateTexture(null, "HIGHLIGHT")
    highlightTexture.SetTexture("Interface\\Minimap\\UI-Minimap-ZoomButton-Highlight")
    highlightTexture.SetPoint("CENTER", minimapButton, "CENTER", -11, 11)
    highlightTexture.SetBlendMode("ADD")

    minimapButton.SetScript("OnClick", function (self, button) {
        if (!mainFrame.IsShown()) {
            mainFrame.Show()
        } else {
            mainFrame.Hide()
        }
    })

    minimapButton.SetScript("OnEnter", function (self) {
        GameTooltip.SetOwner(self, "ANCHOR_LEFT")
        GameTooltip.AddLine("Major Cities")
        GameTooltip.AddLine("Left-click to toggle the frame.", 1, 1, 1)
        GameTooltip.Show()
    })

    minimapButton.SetScript("OnLeave", function (self) {
        GameTooltip.Hide()
    })

    if (!isLearned()) {
        minimapButton.Hide()
    }
}