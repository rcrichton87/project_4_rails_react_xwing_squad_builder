AppliedUpgrade.destroy_all
Upgrade.destroy_all
PilotedShip.destroy_all
Pilot.destroy_all
Ship.destroy_all
Squad.destroy_all
User.destroy_all

user1 = User.create({email: "red5@yavin.com", password: 'iamajedi', password_confirmation: 'iamajedi'})
user2 = User.create({email: "v4der@empire.com", password: 'password', password_confirmation: 'password'})

squad1 = Squad.create({user_id: user1[:id], name: "Rogue Squadron", faction: "Rebel"})
squad2 = Squad.create({user_id: user1[:id], name: "The Force Awakens", faction: "Rebel"})

ship1 = Ship.create({name: "T-65 X-Wing", cost: 21, faction: "Rebel", stats: "3,2,3,2", upgrade_slots: "astromech,torpedo,modification"})
ship2 = Ship.create({name: "Y-Wing", cost: 18, faction: "Rebel", stats: "2,1,5,3", upgrade_slots: "astromech,torpedo,torpedo,modification,turret"})
ship3 = Ship.create({name: "TIE Fighter", cost: 12, faction: "Imperial", stats: "2,3,3,0", upgrade_slots: "modification"})
ship4 = Ship.create({name: "TIE Advanced", cost: 21, faction: "Imperial", stats: "2,3,3,2", upgrade_slots: "modification, missile"})

pilot1 = Pilot.create({name: "Wedge Antilles", cost: 8, pilot_skill: 9, ability: "When attacking, reduce the defender's agility by 1", ship_id: ship1[:id]})
pilot2 = Pilot.create({name: "Wes Jansen", cost: 8, pilot_skill: 8, ability: "After attacking, you may remove a focus, evade, or blue target lock token from the defender", ship_id: ship1[:id]})
pilot3 = Pilot.create({name: "Luke Skywalker", cost: 7, pilot_skill: 8, ability: "When defending, you may modify one focus result to an evade result", ship_id: ship1[:id]})
pilot4 = Pilot.create({name: "Rookie Pilot", cost: 0, pilot_skill: 2, ability: "No ability", ship_id: ship1[:id]})

pilot5 = Pilot.create({name: "Gold Squadron Pilot", cost: 0, pilot_skill: 2, ability: "No ability", ship_id: ship2[:id]})
pilot6 = Pilot.create({name: "'Dutch' Vander", cost: 4, pilot_skill: 6, ability: "When you acquire a target lock, another friendly ship at range 1-2 may also acquire a target lock", ship_id: ship2[:id]})

pilot7 = Pilot.create({name: "'Howlrunner'", cost: 6, pilot_skill: 8, ability: "When attacking, friendly ships at rande 1 may reroll one die.", ship_id: ship3[:id]})
pilot8 = Pilot.create({name: "Academy Pilot", cost: 0, pilot_skill: 1, ability: "No ability", ship_id: ship3[:id]})

pilot9 = Pilot.create({name: "Darth Vader", cost: 8, pilot_skill: 9, ability: "During your 'perform action' step, you make take two actions.", ship_id: ship4[:id]})
pilot9 = Pilot.create({name: "Tempest Squadron Pilot", cost: 0, pilot_skill: 2, ability: "No ability", ship_id: ship4[:id]})

piloted_ship1 = PilotedShip.create({squad_id: squad1[:id], pilot_id: pilot1[:id], ship_id: ship1[:id]})
piloted_ship2 = PilotedShip.create({squad_id: squad1[:id], pilot_id: pilot2[:id], ship_id: ship1[:id]})
piloted_ship3 = PilotedShip.create({squad_id: squad1[:id], pilot_id: pilot3[:id], ship_id: ship1[:id]})

astromech1 = Upgrade.create({name: "R2 Astromech", slot: "astromech", cost: 1, text: "You may treat all 1 and 2 speed manoeuvres as green manoeuvres"})
astromech2 = Upgrade.create({name: "R2-D2", slot: "astromech", cost: 4, text: "After performing a green manoeuvre, you may recover one shield"})
astromech3 = Upgrade.create({name: "M9-G8", slot: "astromech", cost: 3, text: "When a ship you have locked is attacking, you may choose 1 attack die. The attacker must reroll that die.  You can acquire target locks on other friendly ships."})

modification1 = Upgrade.create({name: "Integrated Astromech", slot: "modification", cost: 0, text: "When you are dealt a damage card, you may discard an equipped astromech upgrade to discard that damage card"})

torpedo1 = Upgrade.create({name: "Proton Torpedo", slot: "torpedo", cost: 4, text: "4 Dice Attack (Target Lock): Spend your target lock to perform this attack.  You may modify one focus result to a crit."})

applied_upgrade1 = AppliedUpgrade.create({piloted_ship_id: piloted_ship1[:id], upgrade_id: astromech1[:id]})
applied_upgrade2 = AppliedUpgrade.create({piloted_ship_id: piloted_ship1[:id], upgrade_id: modification1[:id]})
applied_upgrade3 = AppliedUpgrade.create({piloted_ship_id: piloted_ship3[:id], upgrade_id: astromech2[:id]})