const exercises5 = [
  {
    id: 'ex-5-1',
    lessonSlug: 'fonctions',
    title: 'Addition simple',
    difficulty: 'facile',
    statement:
      "Écris une fonction addition(int a, int b) qui renvoie la somme des deux nombres, avec la syntaxe classique (type de retour + return).",
    starterCode: `int addition(int a, int b) {
  // À compléter
}

void main() {
  print(addition(4, 6));
}`,
    solutionCode: `int addition(int a, int b) {
  return a + b;
}

void main() {
  print(addition(4, 6));   // 10
}`,
    hint: 'Type de retour int, nom addition, deux paramètres int a et int b.',
  },
  {
    id: 'ex-5-2',
    lessonSlug: 'fonctions',
    title: 'Nombre pair ?',
    difficulty: 'facile',
    statement:
      "Écris une fonction estPair(int nombre) qui renvoie true si le nombre est pair, false sinon.",
    starterCode: `bool estPair(int nombre) {
  // À compléter
}

void main() {
  print(estPair(4));
  print(estPair(7));
}`,
    solutionCode: `bool estPair(int nombre) {
  return nombre % 2 == 0;
}

void main() {
  print(estPair(4));   // true
  print(estPair(7));   // false
}`,
    hint: 'Un nombre est pair si nombre % 2 == 0.',
  },
  {
    id: 'ex-5-3',
    lessonSlug: 'fonctions',
    title: 'Paramètres positionnels : le plus grand',
    difficulty: 'facile',
    statement:
      "Écris une fonction plusGrand(int a, int b) avec des paramètres positionnels, qui renvoie le plus grand des deux nombres.",
    starterCode: `int plusGrand(int a, int b) {
  // À compléter
}

void main() {
  print(plusGrand(7, 12));
}`,
    solutionCode: `int plusGrand(int a, int b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

void main() {
  print(plusGrand(7, 12));   // 12
}`,
    hint: "L'ordre des paramètres compte : plusGrand(7, 12) donne a = 7 et b = 12.",
  },
  {
    id: 'ex-5-4',
    lessonSlug: 'fonctions',
    title: 'Paramètre optionnel : salutation',
    difficulty: 'moyen',
    statement:
      "Écris une fonction saluer avec un paramètre obligatoire prenom (String) et un paramètre optionnel [langue] (String, valeur par défaut 'fr'). Si langue vaut 'en', affiche 'Hello {prenom}', sinon affiche 'Bonjour {prenom}'.",
    starterCode: `void saluer(String prenom, [String langue = 'fr']) {
  // À compléter
}

void main() {
  saluer('Ayoub');
  saluer('Ayoub', 'en');
}`,
    solutionCode: `void saluer(String prenom, [String langue = 'fr']) {
  if (langue == 'en') {
    print('Hello \$prenom');
  } else {
    print('Bonjour \$prenom');
  }
}

void main() {
  saluer('Ayoub');         // Bonjour Ayoub
  saluer('Ayoub', 'en');   // Hello Ayoub
}`,
    hint: 'Un paramètre entre crochets [ ] est optionnel et peut avoir une valeur par défaut.',
  },
  {
    id: 'ex-5-5',
    lessonSlug: 'fonctions',
    title: 'Paramètres nommés : fiche produit',
    difficulty: 'moyen',
    statement:
      "Écris une fonction afficherProduit avec des paramètres nommés : nom (String, required), prix (double, required), et enPromo (bool, valeur par défaut false). Si enPromo vaut true, affiche le prix avec 10% de réduction, sinon le prix normal.",
    starterCode: `void afficherProduit({required String nom, required double prix, bool enPromo = false}) {
  // À compléter
}

void main() {
  afficherProduit(nom: 'Clavier', prix: 200);
  afficherProduit(nom: 'Souris', prix: 100, enPromo: true);
}`,
    solutionCode: `void afficherProduit({required String nom, required double prix, bool enPromo = false}) {
  if (enPromo) {
    double prixReduit = prix * 0.9;
    print('\$nom : \$prixReduit DH (promo)');
  } else {
    print('\$nom : \$prix DH');
  }
}

void main() {
  afficherProduit(nom: 'Clavier', prix: 200);
  afficherProduit(nom: 'Souris', prix: 100, enPromo: true);
}`,
    hint: 'Une réduction de 10% revient à multiplier le prix par 0.9.',
  },
  {
    id: 'ex-5-6',
    lessonSlug: 'fonctions',
    title: 'Convertir en syntaxe fléchée',
    difficulty: 'facile',
    statement:
      "Réécris ces trois fonctions classiques en syntaxe fléchée (=>) :\n\nint carre(int n) {\n  return n * n;\n}\n\nbool estMajeur(int age) {\n  return age >= 18;\n}\n\nString crier(String texte) {\n  return texte.toUpperCase();\n}",
    starterCode: `int carre(int n) {
  return n * n;
}

bool estMajeur(int age) {
  return age >= 18;
}

String crier(String texte) {
  return texte.toUpperCase();
}`,
    solutionCode: `int carre(int n) => n * n;

bool estMajeur(int age) => age >= 18;

String crier(String texte) => texte.toUpperCase();`,
    hint: 'Remplace { return expression; } par => expression; (sans le mot-clé return, sans accolades).',
  },
  {
    id: 'ex-5-7',
    lessonSlug: 'fonctions',
    title: 'Un callback simple',
    difficulty: 'moyen',
    statement:
      "Écris une fonction executerAction(String prenom, void Function(String) action) qui appelle action avec prenom. Dans main(), appelle-la avec une fonction anonyme qui affiche 'Salut {nom} !'.",
    starterCode: `void executerAction(String prenom, void Function(String) action) {
  // À compléter
}

void main() {
  // Appelle executerAction avec une fonction anonyme
}`,
    solutionCode: `void executerAction(String prenom, void Function(String) action) {
  action(prenom);
}

void main() {
  executerAction('Ayoub', (nom) {
    print('Salut \$nom !');
  });
}`,
    hint: "action(prenom) exécute la fonction reçue en paramètre, en lui passant prenom.",
  },
  {
    id: 'ex-5-8',
    lessonSlug: 'fonctions',
    title: 'forEach avec une lambda',
    difficulty: 'moyen',
    statement:
      "À partir d'une liste de fruits, utilise .forEach() avec une fonction anonyme en syntaxe fléchée pour afficher 'J'aime le {fruit}' pour chaque élément.",
    starterCode: `void main() {
  List<String> fruits = ['pomme', 'banane', 'orange'];

  // À compléter
}`,
    solutionCode: `void main() {
  List<String> fruits = ['pomme', 'banane', 'orange'];

  fruits.forEach((fruit) => print('J\\'aime le \$fruit'));
}`,
    hint: '.forEach() attend une fonction avec un seul paramètre : (element) => ...',
  },
  {
    id: 'ex-5-9',
    lessonSlug: 'fonctions',
    title: 'Le compteur (closure)',
    difficulty: 'difficile',
    statement:
      "Écris une fonction creerCompteur() qui renvoie une fonction sans paramètre. Chaque appel de cette fonction renvoyée doit incrémenter et afficher un compteur interne, indépendant à chaque nouvel appel de creerCompteur().",
    starterCode: `Function creerCompteur() {
  // À compléter
}

void main() {
  var compteur1 = creerCompteur();
  compteur1();   // devrait afficher 1
  compteur1();   // devrait afficher 2

  var compteur2 = creerCompteur();
  compteur2();   // devrait afficher 1
}`,
    solutionCode: `Function creerCompteur() {
  int compte = 0;

  return () {
    compte++;
    print(compte);
  };
}

void main() {
  var compteur1 = creerCompteur();
  compteur1();   // 1
  compteur1();   // 2

  var compteur2 = creerCompteur();
  compteur2();   // 1 (indépendant de compteur1)
}`,
    hint: "Déclare compte à l'intérieur de creerCompteur(), avant de renvoyer la fonction anonyme : elle s'en souviendra.",
  },
  {
    id: 'ex-5-10',
    lessonSlug: 'fonctions',
    title: 'Un multiplicateur sur mesure (closure)',
    difficulty: 'difficile',
    statement:
      "Écris une fonction creerMultiplicateur(int facteur) qui renvoie une fonction int Function(int) multipliant n'importe quel nombre par facteur. Utilise-la pour créer un double et un triple.",
    starterCode: `Function creerMultiplicateur(int facteur) {
  // À compléter
}

void main() {
  var doubler = creerMultiplicateur(2);
  var tripler = creerMultiplicateur(3);

  print(doubler(5));   // devrait afficher 10
  print(tripler(5));   // devrait afficher 15
}`,
    solutionCode: `Function creerMultiplicateur(int facteur) {
  return (int nombre) => nombre * facteur;
}

void main() {
  var doubler = creerMultiplicateur(2);
  var tripler = creerMultiplicateur(3);

  print(doubler(5));   // 10
  print(tripler(5));   // 15
}`,
    hint: 'La fonction renvoyée doit "se souvenir" de facteur : c\u2019est exactement ce que fait une closure.',
  },
]

export default exercises5