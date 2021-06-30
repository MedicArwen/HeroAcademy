import { Hero } from "./BusinessLayer/Hero";

export const HEROES: Hero[] = [
    new Hero(
        'SuperMan',
        'Clark',
        'Kent',
        false,
        'superman.jpg',
        'Super Man, un alien venu d\'ailleurs',
        'Super Man, un alien venu d\'ailleurs. Un orphelin de krypton'
    ),
    new Hero(
        'Batman',
        'Bruce',
        'Wayne',
        false,
        'batman.jpg',
        'Un milliardaire de Gotham qui se déguise en chauve souris',
        'Un milliardaire de Gotham qui se déguise en chauve souris. Train limite parfois côté moralité. Il a même tué superman quelque part...'
    ),
    new Hero(
        'Captain America',
        'Steeve',
        'Rogers',
        false,
        'captain_america.jpg',
        'Un faible homme qui voulait être assez fort pour rejoindre l\'armée américaine ',
        'Un faible homme qui voulait être assez fort pour rejoindre l\'armée américaine. Il a fini congelé et traine ses guêtres bien après la seconde guerre mondiale.'
    ),
    new Hero(
        'Black Widow',
        'Natasha',
        'Romanoff',
        false,
        'black_widow.jpg',
        'Une espionne russe qui en remonterait à James Bond',
        'Une espionne russe qui en remonterait à James Bond. On aurait pu la croire vilaine, mais elle aide les gentils !'
    ),
    new Hero(
        'Wonder Woman',
        'Diana',
        'Prince',
        false,
        'wonder_woman.jpg',
        'Une amazone sortie de sa cambrousse',
        'Une amazone sortie de sa cambrousse. Un brin idéaliste avant de perdre son amour de pilote pendant la premiere guerre mondiale.'
    ),
    new Hero(
        'Mystique',
        'Raven',
        'Darkholme',
        true,
        'mystic.jpg',
        'Une métamorphe qui aime bien mettre le souk',
        'Une métamorphe qui aime bien mettre le souk, bleue des pieds à la tête.' 
    ),  
    new Hero(
        'Le Joker',
        'Jack',
        'Napier',
        true,
        'le_joker.jpg',
        'Un ancien mafieu tombé dans dans de l\'acide et devenu timbré',
        'Un ancien mafieu tombé dans dans de l\'acide et devenu timbré. Il a même rendu folle son psy, Harley...'
    )
  ];