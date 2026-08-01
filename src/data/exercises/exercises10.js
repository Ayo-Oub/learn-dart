const exercises10 = [
  {
    id: 'ex-10-1',
    lessonSlug: 'poo-classes',
    title: 'Ta première classe : TodoItem',
    difficulty: 'facile',
    statement:
      "Crée une classe TodoItem avec deux attributs : title (String) et done (bool). Ajoute un constructeur avec la syntaxe this. Instancie une tâche et affiche son titre.",
    starterCode: `class TodoItem {
  // À compléter
}

void main() {
  // Instancie une tâche et affiche son titre
}`,
    solutionCode: `class TodoItem {
  String title;
  bool done;

  TodoItem(this.title, this.done);
}

void main() {
  TodoItem task = TodoItem('Réviser Dart', false);

  print(task.title);   // Réviser Dart
}`,
    hint: 'Un constructeur avec this.title, this.done assigne automatiquement les paramètres reçus aux attributs.',
  },
  {
    id: 'ex-10-2',
    lessonSlug: 'poo-classes',
    title: 'Fiche produit',
    difficulty: 'facile',
    statement:
      "Crée une classe Product avec les attributs name (String), price (double) et inStock (bool). Instancie deux produits différents et affiche leur nom et leur prix.",
    starterCode: `class Product {
  // À compléter
}

void main() {
  // Instancie deux produits
}`,
    solutionCode: `class Product {
  String name;
  double price;
  bool inStock;

  Product(this.name, this.price, this.inStock);
}

void main() {
  Product headphones = Product('Casque audio', 250, true);
  Product keyboard = Product('Clavier mécanique', 400, false);

  print('\${headphones.name} : \${headphones.price} DH');
  print('\${keyboard.name} : \${keyboard.price} DH');
}`,
    hint: 'Chaque instanciation Product(...) crée un objet indépendant avec ses propres valeurs.',
  },
  {
    id: 'ex-10-3',
    lessonSlug: 'poo-classes',
    title: 'Une méthode sur User',
    difficulty: 'moyen',
    statement:
      "Crée une classe User avec les attributs firstName et lastName (String). Ajoute une méthode fullName() qui renvoie le prénom et le nom réunis par un espace. Instancie un utilisateur et affiche son nom complet.",
    starterCode: `class User {
  // À compléter
}

void main() {
  // Instancie un utilisateur et affiche fullName()
}`,
    solutionCode: `class User {
  String firstName;
  String lastName;

  User(this.firstName, this.lastName);

  String fullName() {
    return '$firstName $lastName';
  }
}

void main() {
  User user = User('Ayoub', 'Amrani');

  print(user.fullName());   // Ayoub Amrani
}`,
    hint: 'Une méthode déclarée dans la classe peut utiliser directement les attributs (firstName, lastName) sans les recevoir en paramètre.',
  },
  {
    id: 'ex-10-4',
    lessonSlug: 'poo-classes',
    title: 'Article de panier avec remise',
    difficulty: 'moyen',
    statement:
      "Crée une classe CartItem avec les attributs name (String) et price (double). Ajoute une méthode applyDiscount(double percentage) qui réduit price du pourcentage donné, en modifiant directement l'attribut avec this.",
    starterCode: `class CartItem {
  // À compléter
}

void main() {
  CartItem item = CartItem('Veste', 350);
  item.applyDiscount(20);
  print(item.price);
}`,
    solutionCode: `class CartItem {
  String name;
  double price;

  CartItem(this.name, this.price);

  void applyDiscount(double percentage) {
    this.price = this.price - (this.price * percentage / 100);
  }
}

void main() {
  CartItem item = CartItem('Veste', 350);
  item.applyDiscount(20);
  print(item.price);   // 280.0
}`,
    hint: 'this.price = this.price - (this.price * percentage / 100); modifie directement l\u2019attribut de l\u2019objet.',
  },
  {
    id: 'ex-10-5',
    lessonSlug: 'poo-classes',
    title: 'Liste de tâches (List<TodoItem>)',
    difficulty: 'moyen',
    statement:
      "En réutilisant la classe TodoItem (title, done), crée une List<TodoItem> avec 4 tâches. Utilise where() pour compter combien sont encore à faire (done == false).",
    starterCode: `class TodoItem {
  String title;
  bool done;

  TodoItem(this.title, this.done);
}

void main() {
  List<TodoItem> todos = [
    TodoItem('Réviser Dart', true),
    TodoItem('Préparer le TP', false),
    TodoItem('Corriger les copies', false),
    TodoItem('Répondre aux emails', false),
  ];

  // À compléter
}`,
    solutionCode: `class TodoItem {
  String title;
  bool done;

  TodoItem(this.title, this.done);
}

void main() {
  List<TodoItem> todos = [
    TodoItem('Réviser Dart', true),
    TodoItem('Préparer le TP', false),
    TodoItem('Corriger les copies', false),
    TodoItem('Répondre aux emails', false),
  ];

  int remainingCount = todos.where((todo) => todo.done == false).length;

  print(remainingCount);   // 3
}`,
    hint: 'Une classe peut être utilisée comme type de liste, exactement comme List<int> ou List<String>.',
  },
  {
    id: 'ex-10-6',
    lessonSlug: 'poo-classes',
    title: 'Total du panier (List<CartItem>)',
    difficulty: 'difficile',
    statement:
      "En réutilisant la classe CartItem (name, price), crée une List<CartItem> avec 3 articles. Utilise map() pour extraire les prix, puis fold() pour calculer le total du panier.",
    starterCode: `class CartItem {
  String name;
  double price;

  CartItem(this.name, this.price);
}

void main() {
  List<CartItem> cart = [
    CartItem('T-shirt', 90),
    CartItem('Casquette', 60),
    CartItem('Chaussures', 420),
  ];

  // À compléter
}`,
    solutionCode: `class CartItem {
  String name;
  double price;

  CartItem(this.name, this.price);
}

void main() {
  List<CartItem> cart = [
    CartItem('T-shirt', 90),
    CartItem('Casquette', 60),
    CartItem('Chaussures', 420),
  ];

  List<double> prices = cart.map((item) => item.price).toList();
  double total = prices.fold(0, (accumulator, current) => accumulator + current);

  print(total);   // 570.0
}`,
    hint: 'map((item) => item.price) extrait le prix de chaque objet ; fold(0, ...) additionne ensuite tous les prix.',
  },
  {
    id: 'ex-10-7',
    lessonSlug: 'poo-classes',
    title: 'Profil utilisateur avec badge',
    difficulty: 'difficile',
    statement:
      "Crée une classe User avec les attributs username (String) et score (int). Ajoute une méthode getBadge() qui renvoie 'Or' si score >= 80, 'Argent' si score >= 50, sinon 'Bronze'. Instancie 3 utilisateurs et affiche le badge de chacun.",
    starterCode: `class User {
  // À compléter
}

void main() {
  List<User> users = [
    User('ayoub25', 92),
    User('sara_b', 65),
    User('karim.k', 30),
  ];

  // Affiche le badge de chaque utilisateur
}`,
    solutionCode: `class User {
  String username;
  int score;

  User(this.username, this.score);

  String getBadge() {
    if (score >= 80) {
      return 'Or';
    } else if (score >= 50) {
      return 'Argent';
    } else {
      return 'Bronze';
    }
  }
}

void main() {
  List<User> users = [
    User('ayoub25', 92),
    User('sara_b', 65),
    User('karim.k', 30),
  ];

  for (User user in users) {
    print('\${user.username} : \${user.getBadge()}');
  }
  // ayoub25 : Or
  // sara_b : Argent
  // karim.k : Bronze
}`,
    hint: 'getBadge() peut utiliser directement this.score (ou simplement score) sans le recevoir en paramètre.',
  },
]

export default exercises10
