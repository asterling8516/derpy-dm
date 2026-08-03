---
level: 7
tags:
  - level-7
  - save-dexterity
  - spell
url: https://derpydm.com/dd/spells/7th-level/delayed-blast-fireball
---
# Delayed Blast Fireball

**Delayed Blast Fireball**
_7th-level Evocation_
**Casting Time:** 1 action
**Attack/Save:** None
**Range:** 150 ft
**Components:** V S M (a ball of bat guano and sulfur)
**Duration:** 1 minute
**Damage/Effect:** 12d6 Fire damage, 1d6 Fire damage

*<p>A beam of yellow light flashes from you, then condenses at a chosen point within range as a glowing bead for the duration. When the spell ends, the bead explodes, and each creature in a 20-foot-radius Sphere centered on that point makes a Dexterity save. A creature takes Fire damage equal to the total accumulated damage on a failed save or half as much damage on a successful one.

The spell’s base damage is 12d6, and the damage increases by 1d6 whenever your turn ends and the spell hasn’t ended.

If a creature touches the glowing bead before the spell ends, that creature makes a Dexterity save. On a failed save, the spell ends, causing the bead to explode. On a successful save, the creature can throw the bead up to 40 feet. If the thrown bead enters a creature’s space or collides with a solid object, the spell ends, and the bead explodes.

When the bead explodes, flammable objects in the explosion that aren’t being worn or carried start burning.

***Using a Higher-Level Spell Slot.*** The base damage increases by 1d6 for each spell slot level above 7.</p>
<section class="secret" id="secret-ddbFormOfTheBeast">
<p>**Implementation Details**

The uses value of this spell tracks the rounds that have passed since the casting.

The **Increase Turn Counter** activity will increase that value by 1.

The **Explosion** activity calculates the total damage based on the  uses.</p>
</section>*