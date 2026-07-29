const exercises6 = [
  {
    id: 'ex-6-1',
    lessonSlug: 'listes',
    title: 'Créer et accéder',
    difficulty: 'facile',
    statement:
      "Crée une liste villes contenant au moins 4 String. Affiche le premier élément, le dernier élément, et la longueur de la liste.",
    starterCode: `void main() {
  List<String> villes = ['Oujda', 'Rabat', 'Fès', 'Agadir'];

  // À compléter
}`,
    solutionCode: `void main() {
  List<String> villes = ['Oujda', 'Rabat', 'Fès', 'Agadir'];

  print(villes[0]);                      // Oujda
  print(villes[villes.length - 1]);      // Agadir
  print(villes.length);                  // 4
}`,
    hint: 'Le dernier élément est toujours à l\u2019index villes.length - 1.',
  },
  {
    id: 'ex-6-2',
    lessonSlug: 'listes',
    title: 'La somme des notes',
    difficulty: 'facile',
    statement:
      "Crée une liste notes contenant 5 nombres entiers. Calcule et affiche leur somme grâce à une boucle for-in.",
    starterCode: `void main() {
  List<int> notes = [12, 15, 9, 18, 14];

  // À compléter
}`,
    solutionCode: `void main() {
  List<int> notes = [12, 15, 9, 18, 14];

  int somme = 0;
  for (int note in notes) {
    somme += note;
  }

  print(somme);   // 68
}`,
    hint: 'Initialise une variable somme = 0 avant la boucle, puis additionne chaque élément dedans.',
  },
  {
    id: 'ex-6-3',
    lessonSlug: 'listes',
    title: 'Ajouter et retirer',
    difficulty: 'facile',
    statement:
      "Pars d'une liste vide de String. Ajoute 'Rabat', 'Oujda' et 'Fès' avec add(). Retire ensuite 'Oujda' avec remove(). Affiche la liste finale.",
    starterCode: `void main() {
  List<String> villes = [];

  // À compléter
}`,
    solutionCode: `void main() {
  List<String> villes = [];

  villes.add('Rabat');
  villes.add('Oujda');
  villes.add('Fès');

  villes.remove('Oujda');

  print(villes);   // [Rabat, Fès]
}`,
    hint: 'List<String> villes = []; crée une liste vide qu\u2019on peut remplir avec .add().',
  },
  {
    id: 'ex-6-4',
    lessonSlug: 'listes',
    title: 'Insérer au bon endroit',
    difficulty: 'moyen',
    statement:
      "À partir de la liste [1, 2, 4, 5], utilise insert() pour ajouter le nombre 3 à la bonne position, afin d'obtenir [1, 2, 3, 4, 5].",
    starterCode: `void main() {
  List<int> nombres = [1, 2, 4, 5];

  // À compléter

  print(nombres);
}`,
    solutionCode: `void main() {
  List<int> nombres = [1, 2, 4, 5];

  nombres.insert(2, 3);

  print(nombres);   // [1, 2, 3, 4, 5]
}`,
    hint: 'insert(index, valeur) place valeur à cet index précis. Le 3 doit aller à l\u2019index 2 (après 1 et 2).',
  },
  {
    id: 'ex-6-5',
    lessonSlug: 'listes',
    title: 'Fusionner deux listes (spread)',
    difficulty: 'moyen',
    statement:
      "Crée deux listes de String : fruits et legumes. Utilise l'opérateur ... pour créer une nouvelle liste panier qui contient tous les éléments des deux, plus 'œuf' à la fin.",
    starterCode: `void main() {
  List<String> fruits = ['pomme', 'banane'];
  List<String> legumes = ['carotte', 'poireau'];

  // À compléter
}`,
    solutionCode: `void main() {
  List<String> fruits = ['pomme', 'banane'];
  List<String> legumes = ['carotte', 'poireau'];

  List<String> panier = [...fruits, ...legumes, 'œuf'];

  print(panier);   // [pomme, banane, carotte, poireau, œuf]
}`,
    hint: '...fruits insère tous les éléments de fruits directement dans la nouvelle liste, sans boucle.',
  },
  {
    id: 'ex-6-6',
    lessonSlug: 'listes',
    title: 'Le plus grand nombre',
    difficulty: 'moyen',
    statement:
      "Crée une liste d'au moins 5 nombres entiers. Sans utiliser de méthode toute faite, trouve et affiche le plus grand nombre grâce à une boucle.",
    starterCode: `void main() {
  List<int> nombres = [4, 17, 9, 25, 11];

  // À compléter
}`,
    solutionCode: `void main() {
  List<int> nombres = [4, 17, 9, 25, 11];

  int plusGrand = nombres[0];
  for (int nombre in nombres) {
    if (nombre > plusGrand) {
      plusGrand = nombre;
    }
  }

  print(plusGrand);   // 25
}`,
    hint: 'Commence avec plusGrand = nombres[0], puis compare chaque élément à ce qu\u2019on a déjà trouvé.',
  },
  {
    id: 'ex-6-7',
    lessonSlug: 'listes',
    title: 'Trier et inverser',
    difficulty: 'moyen',
    statement:
      "Crée une liste de nombres entiers dans le désordre. Trie-la avec sort(), affiche-la triée, puis affiche-la à l'envers grâce à reversed.",
    starterCode: `void main() {
  List<int> nombres = [15, 3, 42, 8, 23];

  // À compléter
}`,
    solutionCode: `void main() {
  List<int> nombres = [15, 3, 42, 8, 23];

  nombres.sort();
  print(nombres);                    // [3, 8, 15, 23, 42]
  print(nombres.reversed.toList());  // [42, 23, 15, 8, 3]
}`,
    hint: '.sort() modifie la liste directement ; .reversed renvoie un Iterable, on le transforme en liste avec .toList().',
  },
  {
    id: 'ex-6-8',
    lessonSlug: 'listes',
    title: 'Filtrer les nombres pairs',
    difficulty: 'difficile',
    statement:
      "Crée une liste de nombres entiers. Construis une nouvelle liste qui ne contient que les nombres pairs de la première, en la remplissant avec une boucle et .add(). Affiche la nouvelle liste jointe avec join(', ').",
    starterCode: `void main() {
  List<int> nombres = [1, 2, 3, 4, 5, 6, 7, 8];

  List<int> pairs = [];

  // À compléter
}`,
    solutionCode: `void main() {
  List<int> nombres = [1, 2, 3, 4, 5, 6, 7, 8];

  List<int> pairs = [];

  for (int nombre in nombres) {
    if (nombre % 2 == 0) {
      pairs.add(nombre);
    }
  }

  print(pairs.join(', '));   // 2, 4, 6, 8
}`,
    hint: 'Pour chaque élément, teste nombre % 2 == 0, et si c\u2019est vrai, ajoute-le à la liste pairs.',
  },
]

export default exercises6
