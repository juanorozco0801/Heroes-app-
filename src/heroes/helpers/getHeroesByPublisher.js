import { heroes } from "../data/heroes";


export const getHeroesByPublisher = ( publisher ) => {

    const validPublishers =['DC Comics', 'Marvel Comics'];

    if ( !validPublishers.includes( publisher ) ) {
        throw new Error(`Publisher "${ publisher }" is not a publisher`);
    }

    return heroes.filter(heroe => heroe.publisher === publisher)





}