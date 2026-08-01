const exercises8 = [
  {
    id: 'ex-8-1',
    lessonSlug: 'dictionnaires',
    title: 'Créer une Map',
    difficulty: 'facile',
    statement:
      "Crée une Map<String, int> associant 3 prénoms à leur âge. Affiche la Map entière avec print().",
    starterCode: `void main() {
  // À compléter
}`,
    solutionCode: `void main() {
  Map<String, int> ages = {
    'Ayoub': 25,
    'Sara': 22,
    'Karim': 30,
  };

  print(ages);   // {Ayoub: 25, Sara: 22, Karim: 30}
}`,
    hint: 'Une Map s\u2019écrit avec des paires clé: valeur entre accolades, séparées par des virgules.',
  },
  {
    id: 'ex-8-2',
    lessonSlug: 'dictionnaires',
    title: 'Lire une valeur',
    difficulty: 'facile',
    statement:
      "À partir de la Map capitales (pays -> capitale), affiche la capitale du Maroc et celle de la France.",
    starterCode: `void main() {
  Map<String, String> capitales = {
    'Maroc': 'Rabat',
    'France': 'Paris',
    'Espagne': 'Madrid',
  };

  // À compléter
}`,
    solutionCode: `void main() {
  Map<String, String> capitales = {
    'Maroc': 'Rabat',
    'France': 'Paris',
    'Espagne': 'Madrid',
  };

  print(capitales['Maroc']);    // Rabat
  print(capitales['France']);   // Paris
}`,
    hint: 'On accède à une valeur avec map[clé].',
  },
  {
    id: 'ex-8-3',
    lessonSlug: 'dictionnaires',
    title: 'Ajouter une paire',
    difficulty: 'facile',
    statement:
      "Pars d'une Map vide de type Map<String, int> représentant un stock. Ajoute trois produits avec leur quantité, puis affiche la Map.",
    starterCode: `void main() {
  Map<String, int> stock = {};

  // À compléter
}`,
    solutionCode: `void main() {
  Map<String, int> stock = {};

  stock['pommes'] = 10;
  stock['bananes'] = 5;
  stock['oranges'] = 8;

  print(stock);   // {pommes: 10, bananes: 5, oranges: 8}
}`,
    hint: 'map[nouvelleClé] = valeur; ajoute une nouvelle paire si la clé n\u2019existe pas encore.',
  },
  {
    id: 'ex-8-4',
    lessonSlug: 'dictionnaires',
    title: 'Modifier une valeur',
    difficulty: 'facile',
    statement:
      "À partir de la Map stock, diminue la quantité de 'pommes' de 3 unités, puis affiche la nouvelle valeur.",
    starterCode: `void main() {
  Map<String, int> stock = {'pommes': 10, 'bananes': 5};

  // À compléter
}`,
    solutionCode: `void main() {
  Map<String, int> stock = {'pommes': 10, 'bananes': 5};

  stock['pommes'] = stock['pommes']! - 3;

  print(stock['pommes']);   // 7
}`,
    hint: 'stock[\'pommes\']! force Dart à considérer que la valeur n\u2019est pas null (on sait que la clé existe).',
  },
  {
    id: 'ex-8-5',
    lessonSlug: 'dictionnaires',
    title: 'La clé existe-t-elle ?',
    difficulty: 'moyen',
    statement:
      "Écris une fonction qui prend une Map<String, int> et une clé (String), et affiche 'Trouvé : X' si la clé existe (avec sa valeur X), ou 'Clé introuvable' sinon.",
    starterCode: `void chercher(Map<String, int> map, String cle) {
  // À compléter
}

void main() {
  Map<String, int> ages = {'Ayoub': 25, 'Sara': 22};
  chercher(ages, 'Ayoub');
  chercher(ages, 'Karim');
}`,
    solutionCode: `void chercher(Map<String, int> map, String cle) {
  if (map.containsKey(cle)) {
    print('Trouvé : \${map[cle]}');
  } else {
    print('Clé introuvable');
  }
}

void main() {
  Map<String, int> ages = {'Ayoub': 25, 'Sara': 22};
  chercher(ages, 'Ayoub');   // Trouvé : 25
  chercher(ages, 'Karim');   // Clé introuvable
}`,
    hint: '.containsKey(cle) renvoie true ou false sans risquer de récupérer null.',
  },
  {
    id: 'ex-8-6',
    lessonSlug: 'dictionnaires',
    title: 'Retirer une entrée',
    difficulty: 'moyen',
    statement:
      "À partir d'une Map de 4 élèves et leur note, retire l'élève 'Karim' de la Map avec remove(), puis affiche la Map finale.",
    starterCode: `void main() {
  Map<String, int> notes = {
    'Ayoub': 15,
    'Sara': 18,
    'Karim': 9,
    'Yassine': 12,
  };

  // À compléter
}`,
    solutionCode: `void main() {
  Map<String, int> notes = {
    'Ayoub': 15,
    'Sara': 18,
    'Karim': 9,
    'Yassine': 12,
  };

  notes.remove('Karim');

  print(notes);   // {Ayoub: 15, Sara: 18, Yassine: 12}
}`,
    hint: 'map.remove(clé) retire complètement la paire correspondant à cette clé.',
  },
  {
    id: 'ex-8-7',
    lessonSlug: 'dictionnaires',
    title: 'Parcourir avec forEach',
    difficulty: 'moyen',
    statement:
      "À partir d'une Map<String, int> (prénom -> âge), utilise forEach pour afficher chaque paire sous la forme '{prénom} a {âge} ans'.",
    starterCode: `void main() {
  Map<String, int> ages = {'Ayoub': 25, 'Sara': 22, 'Karim': 30};

  // À compléter
}`,
    solutionCode: `void main() {
  Map<String, int> ages = {'Ayoub': 25, 'Sara': 22, 'Karim': 30};

  ages.forEach((nom, age) {
    print('$nom a $age ans');
  });
}`,
    hint: 'map.forEach((cle, valeur) => ...) reçoit les deux en même temps, sans boucle for-in classique.',
  },
  {
    id: 'ex-8-8',
    lessonSlug: 'dictionnaires',
    title: 'Parcourir avec entries',
    difficulty: 'moyen',
    statement:
      "Refais l'exercice précédent, mais cette fois avec une boucle for (var entree in map.entries), en utilisant entree.key et entree.value.",
    starterCode: `void main() {
  Map<String, int> ages = {'Ayoub': 25, 'Sara': 22, 'Karim': 30};

  // À compléter
}`,
    solutionCode: `void main() {
  Map<String, int> ages = {'Ayoub': 25, 'Sara': 22, 'Karim': 30};

  for (var entree in ages.entries) {
    print('\${entree.key} a \${entree.value} ans');
  }
}`,
    hint: 'map.entries donne une liste de paires ; chaque entree a une propriété .key et une propriété .value.',
  },
  {
    id: 'ex-8-9',
    lessonSlug: 'dictionnaires',
    title: 'La somme des valeurs',
    difficulty: 'difficile',
    statement:
      "À partir d'une Map<String, int> représentant un panier (produit -> prix), calcule et affiche la somme totale des prix grâce à .values et une boucle.",
    starterCode: `void main() {
  Map<String, int> panier = {
    'pain': 3,
    'lait': 8,
    'oeufs': 15,
  };

  // À compléter
}`,
    solutionCode: `void main() {
  Map<String, int> panier = {
    'pain': 3,
    'lait': 8,
    'oeufs': 15,
  };

  int total = 0;
  for (int prix in panier.values) {
    total += prix;
  }

  print(total);   // 26
}`,
    hint: 'panier.values donne uniquement les valeurs (les prix), sans les clés. On peut la parcourir avec for-in.',
  },
  {
    id: 'ex-8-10',
    lessonSlug: 'dictionnaires',
    title: 'Compter les occurrences',
    difficulty: 'difficile',
    statement:
      "À partir d'une liste de lettres, construis une Map<String, int> qui compte combien de fois chaque lettre apparaît dans la liste, puis affiche la Map.",
    starterCode: `void main() {
  List<String> lettres = ['a', 'b', 'a', 'c', 'b', 'a'];

  Map<String, int> compteur = {};

  // À compléter
}`,
    solutionCode: `void main() {
  List<String> lettres = ['a', 'b', 'a', 'c', 'b', 'a'];

  Map<String, int> compteur = {};

  for (String lettre in lettres) {
    if (compteur.containsKey(lettre)) {
      compteur[lettre] = compteur[lettre]! + 1;
    } else {
      compteur[lettre] = 1;
    }
  }

  print(compteur);   // {a: 3, b: 2, c: 1}
}`,
    hint: 'Pour chaque lettre, vérifie si elle existe déjà dans compteur : si oui, incrémente ; sinon, initialise à 1.',
  },
]

export default exercises8
