const exercises11 = [
  // ---- Constructeur par défaut ----
  {
    id: 'ex-11-1',
    lessonSlug: 'constructeurs',
    title: 'Un constructeur classique',
    difficulty: 'facile',
    statement:
      "Crée une classe Product avec les attributs name (String) et price (double), et un constructeur avec la syntaxe this. Instancie un produit et affiche son nom.",
    starterCode: `class Product {
  // À compléter
}

void main() {
  // Instancie un produit et affiche son nom
}`,
    solutionCode: `class Product {
  String name;
  double price;

  Product(this.name, this.price);
}

void main() {
  Product product = Product('Casque audio', 250);
  print(product.name);   // Casque audio
}`,
    hint: 'Product(this.name, this.price); assigne directement les paramètres reçus aux attributs.',
  },
  {
    id: 'ex-11-2',
    lessonSlug: 'constructeurs',
    title: 'Valeurs par défaut sans constructeur écrit',
    difficulty: 'facile',
    statement:
      "Crée une classe AppSettings avec deux attributs, darkMode (bool) et language (String), initialisés directement avec des valeurs par défaut (sans écrire de constructeur). Instancie-la avec AppSettings() et affiche ses attributs.",
    starterCode: `class AppSettings {
  // À compléter : attributs avec valeur par défaut, sans constructeur
}

void main() {
  // Instancie avec AppSettings()
}`,
    solutionCode: `class AppSettings {
  bool darkMode = false;
  String language = 'fr';
}

void main() {
  // Aucun constructeur écrit : Dart fournit AppSettings() automatiquement
  AppSettings settings = AppSettings();

  print(settings.darkMode);    // false
  print(settings.language);    // fr
}`,
    hint: 'Quand aucun constructeur n\u2019est écrit, Dart génère automatiquement un constructeur sans paramètre.',
  },
  {
    id: 'ex-11-3',
    lessonSlug: 'constructeurs',
    title: 'Plusieurs instances indépendantes',
    difficulty: 'facile',
    statement:
      "Crée une classe CartItem avec name (String) et quantity (int), avec un constructeur this. Instancie 3 articles différents dans une liste, puis affiche leur nom avec une boucle for-in.",
    starterCode: `class CartItem {
  // À compléter
}

void main() {
  // Crée une liste de 3 CartItem et affiche leurs noms
}`,
    solutionCode: `class CartItem {
  String name;
  int quantity;

  CartItem(this.name, this.quantity);
}

void main() {
  List<CartItem> cart = [
    CartItem('T-shirt', 2),
    CartItem('Casquette', 1),
    CartItem('Chaussettes', 3),
  ];

  for (CartItem item in cart) {
    print(item.name);
  }
}`,
    hint: 'Chaque appel à CartItem(...) crée un objet totalement indépendant des autres.',
  },
  {
    id: 'ex-11-4',
    lessonSlug: 'constructeurs',
    title: 'Une méthode avec le constructeur de base',
    difficulty: 'moyen',
    statement:
      "Crée une classe TodoItem avec title (String) et done (bool), un constructeur this., et une méthode toggle() qui inverse la valeur de done à chaque appel.",
    starterCode: `class TodoItem {
  // À compléter
}

void main() {
  TodoItem task = TodoItem('Réviser Dart', false);
  task.toggle();
  print(task.done);
}`,
    solutionCode: `class TodoItem {
  String title;
  bool done;

  TodoItem(this.title, this.done);

  void toggle() {
    this.done = !this.done;
  }
}

void main() {
  TodoItem task = TodoItem('Réviser Dart', false);
  task.toggle();
  print(task.done);   // true
}`,
    hint: '!this.done inverse un booléen : true devient false, et inversement.',
  },
  {
    id: 'ex-11-5',
    lessonSlug: 'constructeurs',
    title: 'Constructeur avec paramètres nommés',
    difficulty: 'moyen',
    statement:
      "Crée une classe User avec username (String, required) et age (int, valeur par défaut 18), en utilisant un constructeur avec paramètres nommés ({required this.username, this.age = 18}).",
    starterCode: `class User {
  // À compléter
}

void main() {
  User user1 = User(username: 'ayoub25');
  User user2 = User(username: 'sara_b', age: 22);

  print(user1.age);
  print(user2.age);
}`,
    solutionCode: `class User {
  String username;
  int age;

  User({required this.username, this.age = 18});
}

void main() {
  User user1 = User(username: 'ayoub25');
  User user2 = User(username: 'sara_b', age: 22);

  print(user1.age);   // 18
  print(user2.age);   // 22
}`,
    hint: 'Les paramètres nommés fonctionnent aussi avec this. : {required this.username, this.age = 18}.',
  },

  // ---- Constructeurs nommés ----
  {
    id: 'ex-11-6',
    lessonSlug: 'constructeurs',
    title: 'Créer un produit à partir d\u2019une Map',
    difficulty: 'moyen',
    statement:
      "Crée une classe Product avec un constructeur normal, et un constructeur nommé Product.fromMap(Map<String, dynamic> data) qui initialise name et price à partir de la Map, comme des données reçues d'une API.",
    starterCode: `class Product {
  // À compléter : constructeur normal + Product.fromMap

}

void main() {
  Product fromApi = Product.fromMap({'name': 'Clavier', 'price': 400.0});
  print(fromApi.name);
}`,
    solutionCode: `class Product {
  String name;
  double price;

  Product(this.name, this.price);

  Product.fromMap(Map<String, dynamic> data)
      : name = data['name'],
        price = data['price'];
}

void main() {
  Product fromApi = Product.fromMap({'name': 'Clavier', 'price': 400.0});
  print(fromApi.name);   // Clavier
}`,
    hint: 'Après les deux-points, on initialise chaque attribut séparé par une virgule : name = data[\'name\'], price = data[\'price\'];',
  },
  {
    id: 'ex-11-7',
    lessonSlug: 'constructeurs',
    title: 'Un utilisateur invité',
    difficulty: 'moyen',
    statement:
      "Crée une classe User avec username (String) et isGuest (bool), un constructeur normal, et un constructeur nommé User.guest() qui crée directement un utilisateur avec username = 'Invité' et isGuest = true.",
    starterCode: `class User {
  // À compléter
}

void main() {
  User guest = User.guest();
  print(guest.username);
  print(guest.isGuest);
}`,
    solutionCode: `class User {
  String username;
  bool isGuest;

  User(this.username, this.isGuest);

  User.guest()
      : username = 'Invité',
        isGuest = true;
}

void main() {
  User guest = User.guest();
  print(guest.username);   // Invité
  print(guest.isGuest);    // true
}`,
    hint: 'User.guest() ne prend aucun paramètre : les valeurs sont fixées directement après les deux-points.',
  },
  {
    id: 'ex-11-8',
    lessonSlug: 'constructeurs',
    title: 'Un panier vide',
    difficulty: 'moyen',
    statement:
      "Crée une classe Cart avec un attribut items (List<String>), un constructeur normal recevant la liste, et un constructeur nommé Cart.empty() qui initialise items avec une liste vide.",
    starterCode: `class Cart {
  // À compléter
}

void main() {
  Cart emptyCart = Cart.empty();
  print(emptyCart.items);
}`,
    solutionCode: `class Cart {
  List<String> items;

  Cart(this.items);

  Cart.empty() : items = [];
}

void main() {
  Cart emptyCart = Cart.empty();
  print(emptyCart.items);   // []
}`,
    hint: 'Cart.empty() : items = []; initialise directement l\u2019attribut avec une liste vide.',
  },
  {
    id: 'ex-11-9',
    lessonSlug: 'constructeurs',
    title: 'Un point à l\u2019origine',
    difficulty: 'moyen',
    statement:
      "Crée une classe Coordinate avec x et y (double), un constructeur normal, et un constructeur nommé Coordinate.zero() qui place le point à x = 0 et y = 0.",
    starterCode: `class Coordinate {
  // À compléter
}

void main() {
  Coordinate origin = Coordinate.zero();
  print('\${origin.x}, \${origin.y}');
}`,
    solutionCode: `class Coordinate {
  double x;
  double y;

  Coordinate(this.x, this.y);

  Coordinate.zero()
      : x = 0,
        y = 0;
}

void main() {
  Coordinate origin = Coordinate.zero();
  print('\${origin.x}, \${origin.y}');   // 0.0, 0.0
}`,
    hint: 'Coordinate.zero() fixe x et y à 0, sans avoir besoin de paramètres.',
  },
  {
    id: 'ex-11-10',
    lessonSlug: 'constructeurs',
    title: 'Un produit gratuit',
    difficulty: 'moyen',
    statement:
      "Crée une classe Product avec name (String) et price (double). Ajoute un constructeur nommé Product.free(String name) qui fixe price à 0 tout en gardant le name reçu en paramètre.",
    starterCode: `class Product {
  // À compléter
}

void main() {
  Product sample = Product.free('Échantillon');
  print(sample.price);
}`,
    solutionCode: `class Product {
  String name;
  double price;

  Product(this.name, this.price);

  Product.free(String name)
      : name = name,
        price = 0;
}

void main() {
  Product sample = Product.free('Échantillon');
  print(sample.price);   // 0.0
}`,
    hint: 'Un constructeur nommé peut recevoir un paramètre classique (String name) tout en fixant les autres attributs directement.',
  },
  {
    id: 'ex-11-11',
    lessonSlug: 'constructeurs',
    title: 'Notification depuis une Map',
    difficulty: 'moyen',
    statement:
      "Crée une classe AppNotification avec message (String) et read (bool). Ajoute un constructeur nommé AppNotification.fromMap(Map<String, dynamic> data) pour la créer à partir d'une Map, comme une réponse d'API.",
    starterCode: `class AppNotification {
  // À compléter
}

void main() {
  AppNotification n = AppNotification.fromMap({'message': 'Commande expédiée', 'read': false});
  print(n.message);
}`,
    solutionCode: `class AppNotification {
  String message;
  bool read;

  AppNotification(this.message, this.read);

  AppNotification.fromMap(Map<String, dynamic> data)
      : message = data['message'],
        read = data['read'];
}

void main() {
  AppNotification n = AppNotification.fromMap({'message': 'Commande expédiée', 'read': false});
  print(n.message);   // Commande expédiée
}`,
    hint: 'Même principe que Product.fromMap : chaque attribut est initialisé depuis la clé correspondante de la Map.',
  },
  {
    id: 'ex-11-12',
    lessonSlug: 'constructeurs',
    title: 'Une tâche urgente',
    difficulty: 'moyen',
    statement:
      "Crée une classe TodoItem avec title (String), done (bool) et priority (String). Ajoute un constructeur nommé TodoItem.urgent(String title) qui fixe priority à 'haute' et done à false.",
    starterCode: `class TodoItem {
  // À compléter
}

void main() {
  TodoItem task = TodoItem.urgent('Corriger le bug de production');
  print(task.priority);
}`,
    solutionCode: `class TodoItem {
  String title;
  bool done;
  String priority;

  TodoItem(this.title, this.done, this.priority);

  TodoItem.urgent(String title)
      : title = title,
        done = false,
        priority = 'haute';
}

void main() {
  TodoItem task = TodoItem.urgent('Corriger le bug de production');
  print(task.priority);   // haute
}`,
    hint: 'On peut mélanger un paramètre reçu (title) et des valeurs fixes (done, priority) dans le même constructeur nommé.',
  },
  {
    id: 'ex-11-13',
    lessonSlug: 'constructeurs',
    title: 'Deux façons de créer un utilisateur',
    difficulty: 'moyen',
    statement:
      "Reprends la classe User (username, isGuest) avec son constructeur normal et User.guest(). Instancie un utilisateur normal ET un utilisateur invité dans main(), puis affiche les deux username.",
    starterCode: `class User {
  String username;
  bool isGuest;

  User(this.username, this.isGuest);

  User.guest()
      : username = 'Invité',
        isGuest = true;
}

void main() {
  // Instancie les deux types d'utilisateurs
}`,
    solutionCode: `class User {
  String username;
  bool isGuest;

  User(this.username, this.isGuest);

  User.guest()
      : username = 'Invité',
        isGuest = true;
}

void main() {
  User registered = User('ayoub25', false);
  User guest = User.guest();

  print(registered.username);   // ayoub25
  print(guest.username);        // Invité
}`,
    hint: 'Deux constructeurs différents de la même classe peuvent être utilisés côte à côte dans le même programme.',
  },

  // ---- Constructeurs factory ----
  {
    id: 'ex-11-14',
    lessonSlug: 'constructeurs',
    title: 'Un logger singleton',
    difficulty: 'difficile',
    statement:
      "Crée une classe AppLogger avec un constructeur nommé privé _internal(), une instance statique unique, et un constructeur factory AppLogger() qui renvoie toujours cette même instance. Vérifie avec identical() que deux appels renvoient bien le même objet.",
    starterCode: `class AppLogger {
  // À compléter : pattern singleton
}

void main() {
  AppLogger logger1 = AppLogger();
  AppLogger logger2 = AppLogger();

  print(identical(logger1, logger2));
}`,
    solutionCode: `class AppLogger {
  static final AppLogger _instance = AppLogger._internal();

  AppLogger._internal();

  factory AppLogger() {
    return _instance;
  }
}

void main() {
  AppLogger logger1 = AppLogger();
  AppLogger logger2 = AppLogger();

  print(identical(logger1, logger2));   // true
}`,
    hint: 'Le constructeur factory ne crée rien de nouveau : il renvoie simplement _instance, créée une seule fois.',
  },
  {
    id: 'ex-11-15',
    lessonSlug: 'constructeurs',
    title: 'Une configuration partagée',
    difficulty: 'difficile',
    statement:
      "Crée une classe AppConfig avec un attribut environment (String), un constructeur nommé privé _internal(this.environment), une instance statique fixée à 'production', et un constructeur factory nommé AppConfig.shared() qui la renvoie.",
    starterCode: `class AppConfig {
  // À compléter
}

void main() {
  AppConfig config = AppConfig.shared();
  print(config.environment);
}`,
    solutionCode: `class AppConfig {
  final String environment;

  AppConfig._internal(this.environment);

  static final AppConfig _instance = AppConfig._internal('production');

  factory AppConfig.shared() {
    return _instance;
  }
}

void main() {
  AppConfig config = AppConfig.shared();
  print(config.environment);   // production
}`,
    hint: 'Un constructeur factory peut aussi être nommé : factory AppConfig.shared() { ... }.',
  },
  {
    id: 'ex-11-16',
    lessonSlug: 'constructeurs',
    title: 'Valider avant de créer',
    difficulty: 'difficile',
    statement:
      "Crée une classe User avec username (String), et un constructeur factory User(String username) qui renvoie User._internal('Invité') si username est vide, ou User._internal(username) sinon.",
    starterCode: `class User {
  String username;

  User._internal(this.username);

  // Constructeur factory à compléter
}

void main() {
  User user1 = User('ayoub25');
  User user2 = User('');

  print(user1.username);
  print(user2.username);
}`,
    solutionCode: `class User {
  String username;

  User._internal(this.username);

  factory User(String username) {
    if (username.isEmpty) {
      return User._internal('Invité');
    }
    return User._internal(username);
  }
}

void main() {
  User user1 = User('ayoub25');
  User user2 = User('');

  print(user1.username);   // ayoub25
  print(user2.username);   // Invité
}`,
    hint: 'Le factory peut contenir un if avant de décider quel objet renvoyer : c\u2019est ce qui le distingue d\u2019un constructeur normal.',
  },
  {
    id: 'ex-11-17',
    lessonSlug: 'constructeurs',
    title: 'Un cache d\u2019utilisateurs',
    difficulty: 'difficile',
    statement:
      "Crée une classe User avec username (String) et un cache statique Map<String, User>. Le constructeur factory User(String username) doit renvoyer l'utilisateur du cache s'il existe déjà pour ce username, sinon en créer un nouveau et l'ajouter au cache.",
    starterCode: `class User {
  String username;

  User._internal(this.username);

  static final Map<String, User> _cache = {};

  // Constructeur factory à compléter
}

void main() {
  User user1 = User('ayoub25');
  User user2 = User('ayoub25');

  print(identical(user1, user2));
}`,
    solutionCode: `class User {
  String username;

  User._internal(this.username);

  static final Map<String, User> _cache = {};

  factory User(String username) {
    if (_cache.containsKey(username)) {
      return _cache[username]!;
    }
    User newUser = User._internal(username);
    _cache[username] = newUser;
    return newUser;
  }
}

void main() {
  User user1 = User('ayoub25');
  User user2 = User('ayoub25');

  print(identical(user1, user2));   // true : le même objet est réutilisé
}`,
    hint: 'Vérifie d\u2019abord _cache.containsKey(username) ; sinon, crée l\u2019objet et ajoute-le au cache avant de le renvoyer.',
  },
  {
    id: 'ex-11-18',
    lessonSlug: 'constructeurs',
    title: 'Une remise selon le montant',
    difficulty: 'difficile',
    statement:
      "Crée une classe Discount avec label (String) et percentage (double). Ajoute un constructeur factory Discount.forAmount(double amount) qui renvoie 'VIP' (20%) si amount > 1000, 'Standard' (10%) si amount > 300, sinon 'Aucune' (0%).",
    starterCode: `class Discount {
  String label;
  double percentage;

  Discount._internal(this.label, this.percentage);

  // Constructeur factory à compléter
}

void main() {
  print(Discount.forAmount(1500).label);
  print(Discount.forAmount(500).label);
  print(Discount.forAmount(50).label);
}`,
    solutionCode: `class Discount {
  String label;
  double percentage;

  Discount._internal(this.label, this.percentage);

  factory Discount.forAmount(double amount) {
    if (amount > 1000) {
      return Discount._internal('VIP', 20);
    } else if (amount > 300) {
      return Discount._internal('Standard', 10);
    } else {
      return Discount._internal('Aucune', 0);
    }
  }
}

void main() {
  print(Discount.forAmount(1500).label);   // VIP
  print(Discount.forAmount(500).label);    // Standard
  print(Discount.forAmount(50).label);     // Aucune
}`,
    hint: 'Le factory choisit quel Discount._internal(...) construire et renvoyer, selon la valeur de amount.',
  },
  {
    id: 'ex-11-19',
    lessonSlug: 'constructeurs',
    title: 'Réponse API réussie ou en erreur',
    difficulty: 'difficile',
    statement:
      "Crée une classe ApiResponse avec success (bool), data (String?) et errorMessage (String?), un constructeur nommé privé, et deux constructeurs factory nommés : ApiResponse.success(String data) et ApiResponse.error(String message).",
    starterCode: `class ApiResponse {
  bool success;
  String? data;
  String? errorMessage;

  ApiResponse._internal(this.success, this.data, this.errorMessage);

  // Deux constructeurs factory à compléter
}

void main() {
  ApiResponse ok = ApiResponse.success('Produit chargé');
  ApiResponse fail = ApiResponse.error('Serveur indisponible');

  print(ok.data);
  print(fail.errorMessage);
}`,
    solutionCode: `class ApiResponse {
  bool success;
  String? data;
  String? errorMessage;

  ApiResponse._internal(this.success, this.data, this.errorMessage);

  factory ApiResponse.success(String data) {
    return ApiResponse._internal(true, data, null);
  }

  factory ApiResponse.error(String message) {
    return ApiResponse._internal(false, null, message);
  }
}

void main() {
  ApiResponse ok = ApiResponse.success('Produit chargé');
  ApiResponse fail = ApiResponse.error('Serveur indisponible');

  print(ok.data);            // Produit chargé
  print(fail.errorMessage);  // Serveur indisponible
}`,
    hint: 'Chaque factory nommé appelle le même constructeur privé _internal(...), avec des valeurs différentes selon le cas.',
  },
  {
    id: 'ex-11-20',
    lessonSlug: 'constructeurs',
    title: 'Bilan : les trois façons de construire un Product',
    difficulty: 'difficile',
    statement:
      "Réunis tout : crée une classe Product (name, price) avec un constructeur normal, un constructeur nommé Product.fromMap(Map data), et un constructeur factory Product.discounted(Product original, double percentage) qui renvoie un nouveau Product avec le prix réduit du pourcentage donné.",
    starterCode: `class Product {
  String name;
  double price;

  Product(this.name, this.price);

  Product.fromMap(Map<String, dynamic> data)
      : name = data['name'],
        price = data['price'];

  // Constructeur factory à compléter
}

void main() {
  Product original = Product('Veste', 350);
  Product onSale = Product.discounted(original, 20);

  print(onSale.price);
}`,
    solutionCode: `class Product {
  String name;
  double price;

  Product(this.name, this.price);

  Product.fromMap(Map<String, dynamic> data)
      : name = data['name'],
        price = data['price'];

  factory Product.discounted(Product original, double percentage) {
    double newPrice = original.price - (original.price * percentage / 100);
    return Product(original.name, newPrice);
  }
}

void main() {
  Product original = Product('Veste', 350);
  Product onSale = Product.discounted(original, 20);

  print(onSale.price);   // 280.0
}`,
    hint: 'Le factory calcule le nouveau prix, puis renvoie un nouvel objet Product créé avec le constructeur normal.',
  },
]

export default exercises11
