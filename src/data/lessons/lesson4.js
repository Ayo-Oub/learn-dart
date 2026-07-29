export default {
  id: 4,
  slug: 'boucles',
  title: 'Les boucles',
  summary:
    "Répéter des actions automatiquement avec for, while et do-while.",
  duration: '13 min',

  objectives: [
    'Comprendre à quoi sert une boucle',
    'Écrire une boucle for pour répéter un nombre de fois connu',
    'Écrire une boucle while pour répéter tant qu\u2019une condition est vraie',
    'Connaître la différence entre while et do-while',
    "Utiliser break et continue pour contrôler une boucle",
  ],

  sections: [
    {
      id: 'pourquoi-des-boucles',
      heading: 'Pourquoi des boucles ?',
      content: `Une boucle permet de répéter un bloc de code plusieurs fois, sans avoir à
recopier ce bloc à la main. Plutôt que d'écrire cinq fois \`print(...)\`, on
écrit une seule boucle qui le fait cinq fois pour nous.`,
      code: `// Sans boucle
print('Ligne 1');
print('Ligne 2');
print('Ligne 3');

// Avec une boucle : même résultat, en moins de code
for (int i = 1; i <= 3; i++) {
  print('Ligne \$i');
}`,
    },
    {
      id: 'la-boucle-for',
      heading: 'La boucle for',
      content: `La boucle \`for\` est la plus utilisée quand on connaît à l'avance le
nombre de répétitions. Elle a trois parties, séparées par des points-virgules :

1. **L'initialisation** : \`int i = 0\` — le compteur de départ.
2. **La condition** : \`i < 5\` — tant qu'elle est vraie, la boucle continue.
3. **L'incrémentation** : \`i++\` — ce qui se passe à la fin de chaque tour.`,
      code: `for (int i = 0; i < 5; i++) {
  print('Tour numéro \$i');
}
// Affiche : Tour numéro 0, 1, 2, 3, 4`,
    },
    {
      id: 'la-boucle-while',
      heading: 'La boucle while',
      content: `\`while\` répète un bloc **tant que** sa condition reste vraie. Elle est
utile quand on ne sait pas à l'avance combien de tours seront nécessaires.

⚠️ Il faut toujours s'assurer que la condition finira par devenir fausse,
sinon la boucle tourne indéfiniment (boucle infinie).`,
      code: `int compteur = 0;

while (compteur < 3) {
  print('Compteur : \$compteur');
  compteur++;   // sans cette ligne, la boucle ne s'arrête jamais
}`,
    },
    {
      id: 'do-while',
      heading: 'do-while : au moins une fois',
      content: `\`do-while\` ressemble à \`while\`, mais la condition est vérifiée **après**
le bloc, pas avant. Résultat : le bloc s'exécute toujours au moins une fois,
même si la condition est fausse dès le départ.`,
      code: `int compteur = 10;

do {
  print('Passage numéro \$compteur');
  compteur++;
} while (compteur < 3);
// Affiche quand même "Passage numéro 10" une fois,
// même si la condition (10 < 3) est fausse dès le début`,
    },
    {
      id: 'break-continue',
      heading: 'Contrôler une boucle : break et continue',
      content: `Deux mots-clés permettent de modifier le déroulement d'une boucle :

- **break** : arrête complètement la boucle, immédiatement.
- **continue** : saute directement au tour suivant, sans exécuter le reste du bloc.`,
      code: `for (int i = 0; i < 10; i++) {
  if (i == 5) {
    break;   // on arrête tout dès que i vaut 5
  }
  print(i);
}
// Affiche : 0, 1, 2, 3, 4

for (int i = 0; i < 5; i++) {
  if (i == 2) {
    continue;   // on saute le 2, mais la boucle continue
  }
  print(i);
}
// Affiche : 0, 1, 3, 4`,
    },
  ],

  codeExample: `void main() {
  for (int i = 1; i <= 5; i++) {
    if (i % 2 == 0) {
      print('\$i est pair');
    } else {
      print('\$i est impair');
    }
  }
}`,

  keyPoints: [
    'for est idéal quand on connaît le nombre de répétitions à l\u2019avance.',
    'while répète tant qu\u2019une condition est vraie ; attention aux boucles infinies.',
    'do-while exécute le bloc au moins une fois, même si la condition est fausse.',
    'break arrête la boucle ; continue passe directement au tour suivant.',
  ],

  exercisePreview: {
    prompt:
      "Écris une boucle qui affiche les nombres de 1 à 10, mais qui saute le nombre 7.",
    hint: 'Utilise continue à l\u2019intérieur d\u2019un if qui teste si le nombre vaut 7.',
  },

  next: null,
}
