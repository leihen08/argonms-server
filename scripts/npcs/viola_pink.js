/*
 * ArgonMS MapleStory server emulator written in Java
 * Copyright (C) 2011-2012  GoldenKevin
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * a pile of pink flowers (NPC 1063000)
 * Hidden Street: The Deep Forest of Patience <Step 2> (Map 105040311)
 *
 * Completes John's Pink Flower Basket (Quest 2052) and gives mineral ores
 * as a reward if the quest is completed and the player successfully reached the
 * end.
 *
 * @author GoldenKevin (content from KiniroMS r227)
 */

if (player.isQuestActive(2052)) {
	player.gainItem(4031025, 10);
} else {
	let rewards = [4010003, 4010000, 4010002, 4010005, 4010004, 4010001];
	player.gainItem(rewards[Math.floor(Math.random() * rewards.length)], 2);
}
player.changeMap(105040300);