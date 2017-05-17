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
ship5 = Ship.create({name: "YT-1300", cost: 38, faction: "Rebel", stats: "3,1,8,5", upgrade_slots: "missile,crew,crew,title,modification"})
ship6 = Ship.create({name: "T-70 X-Wing", cost: 24, faction: "Rebel", stats: "3,2,3,3", upgrade_slots: "astromech,torpedo,modification,tech"})

pilot1 = Pilot.create({name: "Wedge Antilles", cost: 8, pilot_skill: 9, ability: "When attacking, reduce the defender's agility by 1", ship_id: ship1[:id], ept: true})
pilot2 = Pilot.create({name: "Wes Jansen", cost: 8, pilot_skill: 8, ability: "After attacking, you may remove a focus, evade, or blue target lock token from the defender", ship_id: ship1[:id], ept: true})
pilot3 = Pilot.create({name: "Luke Skywalker", cost: 7, pilot_skill: 8, ability: "When defending, you may modify one focus result to an evade result", ship_id: ship1[:id], ept: true})
pilot4 = Pilot.create({name: "Rookie Pilot", cost: 0, pilot_skill: 2, ability: "No ability", ship_id: ship1[:id], ept:false})

pilot5 = Pilot.create({name: "Gold Squadron Pilot", cost: 0, pilot_skill: 2, ability: "No ability", ship_id: ship2[:id], ept: false})
pilot6 = Pilot.create({name: "'Dutch' Vander", cost: 4, pilot_skill: 6, ability: "When you acquire a target lock, another friendly ship at range 1-2 may also acquire a target lock", ship_id: ship2[:id], ept: false})

pilot7 = Pilot.create({name: "'Howlrunner'", cost: 6, pilot_skill: 8, ability: "When attacking, friendly ships at rande 1 may reroll one die.", ship_id: ship3[:id], ept: true})
pilot8 = Pilot.create({name: "Black Squadron Pilot", cost: 2, pilot_skill: 4, ability: "No ability", ship_id: ship3[:id], ept: true})
pilot9 = Pilot.create({name: "Academy Pilot", cost: 0, pilot_skill: 1, ability: "No ability", ship_id: ship3[:id], ept: false})

pilot10 = Pilot.create({name: "Darth Vader", cost: 8, pilot_skill: 9, ability: "During your 'perform action' step, you make take two actions.", ship_id: ship4[:id], ept: true})
pilot11 = Pilot.create({name: "Tempest Squadron Pilot", cost: 0, pilot_skill: 2, ability: "No ability", ship_id: ship4[:id], ept: false})

pilot12 = Pilot.create({name: "Resistance Sypathizer", cost: 0, pilot_skill: 3, ability: "No ability", ship_id: ship5[:id], ept: false})
pilot13 = Pilot.create({name: "Rey", cost: 7, pilot_skill: 8, ability: "When attacking or defending, if the enemy ship is inside your firing arc, you may reroll up to 2 of your blank results.", ship_id: ship5[:id], ept: true})

pilot14 = Pilot.create({name: "Poe Dameron", cost: 9, pilot_skill: 9, ability: "While attacking or defending, if you have a focus token, you may change 1 of your focus results to a hit or evade result.", ship_id: ship6[:id], ept: true})
pilot15 = Pilot.create({name: "Blue Squadron Novice", cost: 0, pilot_skill: 2, ability: "No ability", ship_id: ship6[:id], ept: true})

piloted_ship1 = PilotedShip.create({squad_id: squad1[:id], pilot_id: pilot1[:id], ship_id: ship1[:id]})
piloted_ship2 = PilotedShip.create({squad_id: squad1[:id], pilot_id: pilot2[:id], ship_id: ship1[:id]})
piloted_ship3 = PilotedShip.create({squad_id: squad1[:id], pilot_id: pilot3[:id], ship_id: ship1[:id]})

astromech1 = Upgrade.create({name: "R2 Astromech", slot: "astromech", cost: 1, text: "You may treat all 1 and 2 speed manoeuvres as green manoeuvres"})
astromech2 = Upgrade.create({name: "R2-D2", slot: "astromech", cost: 4, text: "After performing a green manoeuvre, you may recover one shield"})
astromech3 = Upgrade.create({name: "M9-G8", slot: "astromech", cost: 3, text: "When a ship you have locked is attacking, you may choose 1 attack die. The attacker must reroll that die.  You can acquire target locks on other friendly ships."})

modification1 = Upgrade.create({name: "Integrated Astromech", slot: "modification", cost: 0, text: "When you are dealt a damage card, you may discard an equipped astromech upgrade to discard that damage card."})
modification2 = Upgrade.create({name: "Engine Upgrade", slot: "modification", cost: 4, text: "Your action bar gains the boost action."})

torpedo1 = Upgrade.create({name: "Proton Torpedo", slot: "torpedo", cost: 4, text: "4 Dice Attack (Target Lock): Spend your target lock to perform this attack.  You may modify one focus result to a crit."})

ept1 = Upgrade.create({name: "Predator", slot: "elite pilot talent", cost: 3, text: "When attacking, you may reroll 1 attack die. If the defender's pilot skill value is 2 or lower, you may instead reroll up to 2 attack dice."})
ept2 = Upgrade.create({name: "Crack Shot", slot: "elite pilot talent", cost: 1, text: "When attacking a ship inside your firing arc, at the start of the 'Compare Results' step, you may discard this card to cancel 1 of the defender’s evade results"})
ept3 = Upgrade.create({name: "Veteran Instincts", slot: "elite pilot talent", cost: 1, text: "Increase your Pilot Skill by 2"})

applied_upgrade1 = AppliedUpgrade.create({piloted_ship_id: piloted_ship1[:id], upgrade_id: astromech1[:id]})
applied_upgrade2 = AppliedUpgrade.create({piloted_ship_id: piloted_ship1[:id], upgrade_id: modification1[:id]})
applied_upgrade3 = AppliedUpgrade.create({piloted_ship_id: piloted_ship3[:id], upgrade_id: astromech2[:id]})
applied_upgrade4 = AppliedUpgrade.create({piloted_ship_id: piloted_ship1[:id], upgrade_id: ept1[:id]})