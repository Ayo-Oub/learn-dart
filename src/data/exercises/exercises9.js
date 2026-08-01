const exercises9 = [
  {
    id: 'ex-9-1',
    lessonSlug: 'iteration-avancee',
    title: 'Doubler chaque nombre',
    difficulty: 'facile',
    statement:
      "À partir d'une liste de nombres entiers, utilise map() pour créer une nouvelle liste où chaque nombre est doublé.",
    starterCode: `void main() {
  List<int> numbers = [1, 2, 3, 4, 5];

  // À compléter
}`,
    solutionCode: `void main() {
  List<int> numbers = [1, 2, 3, 4, 5];

  // Multiplie chaque élément par 2
  List<int> doubled = numbers.map((number) => number * 2).toList();

  print(doubled);   // [2, 4, 6, 8, 10]
}`,
    hint: '.map((number) => number * 2) transforme chaque élément ; ajoute .toList() pour obtenir une vraie liste.',
  },
  {
    id: 'ex-9-2',
    lessonSlug: 'iteration-avancee',
    title: 'Les mots en majuscules',
    difficulty: 'facile',
    statement:
      "À partir d'une liste de String, utilise map() pour créer une nouvelle liste avec chaque mot en majuscules (toUpperCase()).",
    starterCode: `void main() {
  List<String> words = ['dart', 'flutter', 'react'];

  // À compléter
}`,
    solutionCode: `void main() {
  List<String> words = ['dart', 'flutter', 'react'];

  // Transforme chaque mot en majuscules
  List<String> uppercased = words.map((word) => word.toUpperCase()).toList();

  print(uppercased);   // [DART, FLUTTER, REACT]
}`,
    hint: 'word.toUpperCase() renvoie le mot en majuscules ; combine-le avec map().',
  },
  {
    id: 'ex-9-3',
    lessonSlug: 'iteration-avancee',
    title: 'Filtrer les majeurs',
    difficulty: 'moyen',
    statement:
      "À partir d'une liste d'âges, utilise where() pour créer une nouvelle liste contenant uniquement les âges supérieurs ou égaux à 18.",
    starterCode: `void main() {
  List<int> ages = [15, 22, 18, 30, 9, 17];

  // À compléter
}`,
    solutionCode: `void main() {
  List<int> ages = [15, 22, 18, 30, 9, 17];

  // Garde uniquement les âges majeurs
  List<int> adultAges = ages.where((age) => age >= 18).toList();

  print(adultAges);   // [22, 18, 30]
}`,
    hint: '.where((age) => age >= 18) garde uniquement les éléments qui vérifient la condition.',
  },
  {
    id: 'ex-9-4',
    lessonSlug: 'iteration-avancee',
    title: 'Le produit de tous les nombres',
    difficulty: 'moyen',
    statement:
      "À partir d'une liste de nombres entiers, utilise reduce() pour calculer le produit de tous les éléments (leur multiplication).",
    starterCode: `void main() {
  List<int> numbers = [1, 2, 3, 4];

  // À compléter
}`,
    solutionCode: `void main() {
  List<int> numbers = [1, 2, 3, 4];

  // Multiplie tous les éléments entre eux
  int product = numbers.reduce((accumulator, current) => accumulator * current);

  print(product);   // 24
}`,
    hint: 'reduce() combine deux éléments à la fois ; remplace + par * pour un produit au lieu d\u2019une somme.',
  },
  {
    id: 'ex-9-5',
    lessonSlug: 'iteration-avancee',
    title: 'La somme des notes suffisantes',
    difficulty: 'moyen',
    statement:
      "À partir d'une liste de notes, garde uniquement celles supérieures ou égales à 10 avec where(), puis calcule leur somme avec fold().",
    starterCode: `void main() {
  List<int> scores = [12, 8, 15, 9, 18, 6];

  // À compléter
}`,
    solutionCode: `void main() {
  List<int> scores = [12, 8, 15, 9, 18, 6];

  // Garde les notes suffisantes, puis additionne-les
  List<int> passingScores = scores.where((score) => score >= 10).toList();
  int total = passingScores.fold(0, (accumulator, current) => accumulator + current);

  print(total);   // 45
}`,
    hint: 'Combine .where() pour filtrer et .fold(0, ...) pour additionner le résultat.',
  },
  {
    id: 'ex-9-6',
    lessonSlug: 'iteration-avancee',
    title: 'Tous majeurs ou au moins un mineur ?',
    difficulty: 'difficile',
    statement:
      "À partir d'une liste d'âges, affiche true/false pour indiquer si tous sont majeurs (every()), puis affiche true/false pour indiquer si au moins un est mineur (any()).",
    starterCode: `void main() {
  List<int> ages = [22, 30, 17, 25];

  // À compléter
}`,
    solutionCode: `void main() {
  List<int> ages = [22, 30, 17, 25];

  // Vérifie si tous les âges sont majeurs
  bool allAdults = ages.every((age) => age >= 18);
  print(allAdults);   // false

  // Vérifie si au moins un âge est mineur
  bool hasMinor = ages.any((age) => age < 18);
  print(hasMinor);    // true
}`,
    hint: 'every() = tous vérifient la condition ; any() = au moins un la vérifie.',
  },
  {
    id: 'ex-9-7',
    lessonSlug: 'iteration-avancee',
    title: 'Liste de produits : les noms affichés',
    difficulty: 'facile',
    statement:
      "Une app e-commerce reçoit une liste de produits sous forme de List<Map<String, dynamic>>. Utilise map() pour extraire uniquement les noms des produits, prêts à être affichés dans une liste déroulante (ListView).",
    starterCode: `void main() {
  List<Map<String, dynamic>> products = [
    {'name': 'Casque audio', 'price': 250},
    {'name': 'Clavier mécanique', 'price': 400},
    {'name': 'Souris sans fil', 'price': 120},
  ];

  // À compléter
}`,
    solutionCode: `void main() {
  List<Map<String, dynamic>> products = [
    {'name': 'Casque audio', 'price': 250},
    {'name': 'Clavier mécanique', 'price': 400},
    {'name': 'Souris sans fil', 'price': 120},
  ];

  // Extrait uniquement le champ 'name' de chaque produit
  List<String> productNames = products.map((product) => product['name'] as String).toList();

  print(productNames);   // [Casque audio, Clavier mécanique, Souris sans fil]
}`,
    hint: "product['name'] accède au champ name de la Map ; as String précise le type attendu pour Dart.",
  },
  {
    id: 'ex-9-8',
    lessonSlug: 'iteration-avancee',
    title: 'Panier : les articles en stock',
    difficulty: 'facile',
    statement:
      "Une liste de produits contient un champ inStock (bool). Utilise where() pour ne garder que les produits disponibles, comme le ferait un écran de boutique qui masque les articles en rupture.",
    starterCode: `void main() {
  List<Map<String, dynamic>> products = [
    {'name': 'Casque audio', 'inStock': true},
    {'name': 'Clavier mécanique', 'inStock': false},
    {'name': 'Souris sans fil', 'inStock': true},
  ];

  // À compléter
}`,
    solutionCode: `void main() {
  List<Map<String, dynamic>> products = [
    {'name': 'Casque audio', 'inStock': true},
    {'name': 'Clavier mécanique', 'inStock': false},
    {'name': 'Souris sans fil', 'inStock': true},
  ];

  // Garde uniquement les produits disponibles
  List<Map<String, dynamic>> availableProducts =
      products.where((product) => product['inStock'] == true).toList();

  print(availableProducts.map((product) => product['name']).toList());
  // [Casque audio, Souris sans fil]
}`,
    hint: "product['inStock'] == true garde uniquement les produits dont ce champ vaut true.",
  },
  {
    id: 'ex-9-9',
    lessonSlug: 'iteration-avancee',
    title: 'Panier : le total à payer',
    difficulty: 'moyen',
    statement:
      "Un panier contient une liste d'articles avec un prix (price) et une quantité (quantity). Calcule le total à payer avec fold(), comme sur l'écran de checkout d'une app d'achat.",
    starterCode: `void main() {
  List<Map<String, dynamic>> cart = [
    {'name': 'T-shirt', 'price': 90, 'quantity': 2},
    {'name': 'Casquette', 'price': 60, 'quantity': 1},
    {'name': 'Chaussettes', 'price': 25, 'quantity': 3},
  ];

  // À compléter
}`,
    solutionCode: `void main() {
  List<Map<String, dynamic>> cart = [
    {'name': 'T-shirt', 'price': 90, 'quantity': 2},
    {'name': 'Casquette', 'price': 60, 'quantity': 1},
    {'name': 'Chaussettes', 'price': 25, 'quantity': 3},
  ];

  // Additionne (prix x quantité) pour chaque article
  int total = cart.fold(0, (accumulator, item) => accumulator + (item['price'] as int) * (item['quantity'] as int));

  print(total);   // 315
}`,
    hint: 'Dans le fold, calcule item[\'price\'] * item[\'quantity\'] pour chaque article avant de l\u2019additionner.',
  },
  {
    id: 'ex-9-10',
    lessonSlug: 'iteration-avancee',
    title: 'Todo list : les tâches restantes',
    difficulty: 'facile',
    statement:
      "Une liste de tâches (todos) a un champ done (bool). Utilise where() pour compter combien de tâches ne sont pas encore terminées, comme le badge d'une app de todo list.",
    starterCode: `void main() {
  List<Map<String, dynamic>> todos = [
    {'title': 'Réviser Dart', 'done': true},
    {'title': 'Préparer le TP', 'done': false},
    {'title': 'Corriger les copies', 'done': false},
  ];

  // À compléter
}`,
    solutionCode: `void main() {
  List<Map<String, dynamic>> todos = [
    {'title': 'Réviser Dart', 'done': true},
    {'title': 'Préparer le TP', 'done': false},
    {'title': 'Corriger les copies', 'done': false},
  ];

  // Garde uniquement les tâches non terminées, puis compte-les
  int remainingCount = todos.where((todo) => todo['done'] == false).length;

  print(remainingCount);   // 2
}`,
    hint: 'where(...).length compte directement le nombre d\u2019éléments filtrés, sans .toList().',
  },
  {
    id: 'ex-9-11',
    lessonSlug: 'iteration-avancee',
    title: 'Formulaire : tous les champs sont-ils remplis ?',
    difficulty: 'moyen',
    statement:
      "Un formulaire d'inscription a plusieurs champs sous forme de List<String>. Utilise every() pour vérifier qu'aucun champ n'est vide, avant d'activer le bouton 'Valider'.",
    starterCode: `void main() {
  List<String> formFields = ['Ayoub', 'ayoub@email.com', '0600000000'];

  // À compléter
}`,
    solutionCode: `void main() {
  List<String> formFields = ['Ayoub', 'ayoub@email.com', '0600000000'];

  // Vérifie qu'aucun champ n'est vide
  bool isFormValid = formFields.every((field) => field.isNotEmpty);

  print(isFormValid);   // true : le bouton Valider peut être activé
}`,
    hint: 'field.isNotEmpty renvoie true si le champ n\u2019est pas une chaîne vide ; every() vérifie que c\u2019est vrai pour tous.',
  },
  {
    id: 'ex-9-12',
    lessonSlug: 'iteration-avancee',
    title: 'Notifications : y a-t-il du nouveau ?',
    difficulty: 'moyen',
    statement:
      "Une liste de notifications a un champ read (bool). Utilise any() pour savoir s'il faut afficher un point rouge sur l'icône de notifications (au moins une non lue).",
    starterCode: `void main() {
  List<Map<String, dynamic>> notifications = [
    {'message': 'Nouveau message', 'read': true},
    {'message': 'Commande expédiée', 'read': false},
    {'message': 'Promo du jour', 'read': true},
  ];

  // À compléter
}`,
    solutionCode: `void main() {
  List<Map<String, dynamic>> notifications = [
    {'message': 'Nouveau message', 'read': true},
    {'message': 'Commande expédiée', 'read': false},
    {'message': 'Promo du jour', 'read': true},
  ];

  // Vérifie s'il existe au moins une notification non lue
  bool hasUnread = notifications.any((notification) => notification['read'] == false);

  print(hasUnread);   // true : on affiche le point rouge
}`,
    hint: 'any((notification) => notification[\'read\'] == false) suffit dès qu\u2019une seule correspond.',
  },
  {
    id: 'ex-9-13',
    lessonSlug: 'iteration-avancee',
    title: 'Contacts : recherche par nom',
    difficulty: 'moyen',
    statement:
      "Une liste de contacts contient des noms. Simule une barre de recherche : utilise where() pour ne garder que les contacts dont le nom contient une chaîne saisie par l'utilisateur (insensible à la casse).",
    starterCode: `void main() {
  List<String> contacts = ['Ayoub Amrani', 'Sara Benali', 'Yassine Ayoub'];
  String query = 'ayoub';

  // À compléter
}`,
    solutionCode: `void main() {
  List<String> contacts = ['Ayoub Amrani', 'Sara Benali', 'Yassine Ayoub'];
  String query = 'ayoub';

  // Garde les contacts dont le nom contient la recherche, sans tenir compte de la casse
  List<String> results = contacts
      .where((contact) => contact.toLowerCase().contains(query.toLowerCase()))
      .toList();

  print(results);   // [Ayoub Amrani, Yassine Ayoub]
}`,
    hint: 'toLowerCase() sur les deux côtés avant contains() rend la recherche insensible à la casse.',
  },
  {
    id: 'ex-9-14',
    lessonSlug: 'iteration-avancee',
    title: 'Utilisateurs : la moyenne des scores',
    difficulty: 'difficile',
    statement:
      "Une liste d'utilisateurs contient chacun un score. Utilise map() pour extraire les scores, puis fold() pour calculer leur moyenne, comme un écran de classement (leaderboard).",
    starterCode: `void main() {
  List<Map<String, dynamic>> users = [
    {'username': 'ayoub25', 'score': 82},
    {'username': 'sara_b', 'score': 91},
    {'username': 'karim.k', 'score': 76},
  ];

  // À compléter
}`,
    solutionCode: `void main() {
  List<Map<String, dynamic>> users = [
    {'username': 'ayoub25', 'score': 82},
    {'username': 'sara_b', 'score': 91},
    {'username': 'karim.k', 'score': 76},
  ];

  // Extrait uniquement les scores, puis calcule leur somme
  List<int> scores = users.map((user) => user['score'] as int).toList();
  int total = scores.fold(0, (accumulator, current) => accumulator + current);
  double average = total / scores.length;

  print(average);   // 83.0
}`,
    hint: 'Sépare le problème en deux étapes : map() pour extraire les scores, puis fold() pour les additionner.',
  },
  {
    id: 'ex-9-15',
    lessonSlug: 'iteration-avancee',
    title: 'Panier : appliquer une remise aux articles chers',
    difficulty: 'difficile',
    statement:
      "Dans un panier, applique une remise de 20% uniquement aux articles dont le prix dépasse 100 DH, grâce à map() combiné à une condition ternaire à l'intérieur. Affiche les nouveaux prix.",
    starterCode: `void main() {
  List<Map<String, dynamic>> cart = [
    {'name': 'T-shirt', 'price': 90},
    {'name': 'Veste', 'price': 350},
    {'name': 'Casquette', 'price': 60},
    {'name': 'Chaussures', 'price': 420},
  ];

  // À compléter
}`,
    solutionCode: `void main() {
  List<Map<String, dynamic>> cart = [
    {'name': 'T-shirt', 'price': 90},
    {'name': 'Veste', 'price': 350},
    {'name': 'Casquette', 'price': 60},
    {'name': 'Chaussures', 'price': 420},
  ];

  // Applique 20% de remise seulement si le prix dépasse 100 DH
  List<double> discountedPrices = cart.map((item) {
    int price = item['price'] as int;
    return price > 100 ? price * 0.8 : price.toDouble();
  }).toList();

  print(discountedPrices);   // [90.0, 280.0, 60.0, 336.0]
}`,
    hint: 'À l\u2019intérieur du map(), tu peux utiliser un bloc { } avec plusieurs lignes, pas seulement une expression courte.',
  },
]

export default exercises9
