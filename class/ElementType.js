export class ElementType {
    /** Type of the mob/attacks
     *
     * @param {string} idType
     * @param {string} name
     * @param {string[]} strongAgainst
     * @param {string[]} weakAgainst
     * @param {string[]} immune
     * @param {ElementTypeCollection} typeCollection
     */
    constructor(idType, name, strongAgainst, weakAgainst, immune, typeCollection) {
        this.idType = idType;
        this.name = name;
        this.strongAgainst = strongAgainst;
        this.weakAgainst = weakAgainst;
        this.immune = immune;
        this.typeCollection = typeCollection;
    }
}
