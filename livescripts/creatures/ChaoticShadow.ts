const CHAOTIC_SHADOW = GetID("creature_template", "magic-core", "chaotic-shadow")
const SHADOW_BLAST = GetID("Spell", "magic-core", "shadow-blast")

// All relevant scripts for the Chaotic Shadow creature

export function ChaoticShadow(events: TSEvents) {
   
    // Whenever a Chaotic Shadow dies
    events.Creature.OnDeath(CHAOTIC_SHADOW, (creature, killer) => {
        

        // Check to make sure creature and killer exist
        if(!creature || !killer) {
            return
        }

        // Convert killer to a player unit
        let player = ToPlayer(killer)

        if(!player) {
            return
        }

        // Check if player is level 10 or below
        if(player.GetLevel() <= 10) {
            
            // Check if player has already learned spell
            if(player.HasSpell(SHADOW_BLAST)) {
                return
            }

            // Teach player spell
            player.LearnSpell(SHADOW_BLAST)
        }
    })
}