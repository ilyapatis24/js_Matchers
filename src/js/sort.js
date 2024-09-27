"use strict";
export default function sort(heroes) {
    return heroes.sort((first, second) => second.health - first.health);
}
