export default {
  id: 11,
  slug: 'constructeurs',
  title: 'Les constructeurs',
  summary:
    "Aller plus loin que le constructeur de base : constructeurs nommés et constructeurs factory.",
  duration: '20 min',

  objectives: [
    "Comprendre le constructeur par défaut, généré automatiquement par Dart",
    'Créer plusieurs façons de construire un objet avec des constructeurs nommés',
    'Utiliser un constructeur factory pour contrôler la création d\u2019un objet',
    'Savoir quand choisir un constructeur nommé plutôt qu\u2019un constructeur factory',
  ],

  sections: [
    {
      id: 'constructeur-par-defaut',
      heading: 'Le constructeur par défaut',
      content: `Quand une classe ne déclare **aucun** constructeur, Dart en génère un
automatiquement : le **constructeur par défaut**, sans paramètre, qui porte
le nom de la classe. C'est ce qui permet d'écrire \`Product()\` même sans
rien avoir écrit soi-même.

Dès qu'on écrit **au moins un** constructeur à la main (même nommé), ce
constructeur par défaut disparaît : il faut alors passer explicitement par
un des constructeurs qu'on a définis.`,
      code: `class Product {
  String name = 'Produit sans nom';
  double price = 0;
}

void main() {
  // Aucun constructeur écrit : Dart fournit Product() automatiquement
  Product product = Product();
  print(product.name);   // Produit sans nom
}

// Dès qu'on écrit un constructeur personnalisé...
class User {
  String username;
  User(this.username);
}

void main2() {
  // User() sans argument ne fonctionne plus : le défaut a disparu
  User user = User('ayoub25');
}`,
    },
    {
      id: 'constructeurs-nommes',
      heading: 'Les constructeurs nommés',
      content: `Un **constructeur nommé** permet de proposer plusieurs façons de créer
un objet à partir de la même classe, chacune avec un nom explicite. La
syntaxe est \`ClassName.nomDuConstructeur(...)\`.

C'est très utilisé pour créer un objet à partir d'une source différente —
par exemple, transformer une \`Map\` (comme des données JSON reçues d'une
API) en objet \`Product\`.`,
      code: `class Product {
  String name;
  double price;

  // Constructeur "normal"
  Product(this.name, this.price);

  // Constructeur nommé : crée un Product à partir d'une Map
  Product.fromMap(Map<String, dynamic> data)
      : name = data['name'],
        price = data['price'];

  // Constructeur nommé : crée un produit gratuit
  Product.free(String name)
      : name = name,
        price = 0;
}

void main() {
  Product classic = Product('Casque audio', 250);

  Product fromApi = Product.fromMap({'name': 'Clavier', 'price': 400});

  Product freeSample = Product.free('Échantillon');

  print(fromApi.name);      // Clavier
  print(freeSample.price);  // 0.0
}`,
    },
    {
      id: 'constructeurs-factory',
      heading: 'Les constructeurs factory',
      content: `Un constructeur normal crée **toujours** un nouvel objet. Un
constructeur \`factory\` est différent : il peut contenir de la logique
avant de décider quoi renvoyer, et n'est **pas obligé** de créer un nouvel
objet à chaque appel — il peut, par exemple, renvoyer un objet déjà créé.

Cas d'usage classique : le **singleton**, où une seule instance de la
classe doit exister dans toute l'application (une configuration globale,
un logger...).`,
      code: `class AppLogger {
  // L'unique instance, créée une seule fois
  static final AppLogger _instance = AppLogger._internal();

  // Constructeur nommé privé (le _ le rend inaccessible depuis l'extérieur)
  AppLogger._internal();

  // Constructeur factory : renvoie toujours la même instance
  factory AppLogger() {
    return _instance;
  }

  void log(String message) {
    print('[LOG] $message');
  }
}

void main() {
  AppLogger logger1 = AppLogger();
  AppLogger logger2 = AppLogger();

  print(identical(logger1, logger2));   // true : c'est le même objet
  logger1.log('Application démarrée');
}`,
    },
    {
      id: 'nomme-vs-factory',
      heading: 'Constructeur nommé ou factory : lequel choisir ?',
      content: `En résumé :

- Un **constructeur nommé** sert surtout à proposer une **autre façon
  d'initialiser** les attributs (à partir d'une Map, d'une valeur par
  défaut particulière...). Il crée toujours un nouvel objet.
- Un **constructeur factory** sert quand la création demande de la
  **logique** : valider des données, réutiliser un objet existant
  (singleton), ou décider dynamiquement quoi renvoyer.

Les deux peuvent d'ailleurs se combiner : un constructeur factory peut lui
aussi être **nommé**, comme \`factory Product.fromJson(...)\`.`,
      code: `class Config {
  final String environment;

  Config._internal(this.environment);

  static final Config _instance = Config._internal('production');

  // Constructeur factory nommé : combine les deux notions
  factory Config.shared() {
    return _instance;
  }
}

void main() {
  Config config = Config.shared();
  print(config.environment);   // production
}`,
    },
  ],

  codeExample: `class Product {
  String name;
  double price;

  Product(this.name, this.price);

  Product.fromMap(Map<String, dynamic> data)
      : name = data['name'],
        price = data['price'];

  factory Product.free(String name) {
    return Product(name, 0);
  }
}

void main() {
  Product classic = Product('Casque audio', 250);
  Product fromApi = Product.fromMap({'name': 'Clavier', 'price': 400});
  Product sample = Product.free('Échantillon');

  print('\${classic.name} : \${classic.price} DH');
  print('\${fromApi.name} : \${fromApi.price} DH');
  print('\${sample.name} : \${sample.price} DH');
}`,

  keyPoints: [
    "Sans constructeur écrit, Dart génère un constructeur par défaut sans paramètre.",
    "Dès qu'on écrit un constructeur (même nommé), le constructeur par défaut disparaît.",
    "ClassName.nom(...) crée un constructeur nommé : une autre façon d'initialiser un objet.",
    "factory permet d'exécuter de la logique avant de renvoyer un objet, y compris un objet déjà existant.",
    "Le pattern singleton (une seule instance) se construit avec un constructeur factory + un constructeur nommé privé.",
  ],

  exercisePreview: {
    prompt:
      "Crée une classe User avec un constructeur normal, et un constructeur nommé User.guest() qui crée un utilisateur avec username = 'Invité'.",
    hint: "User.guest() : username = 'Invité'; est un constructeur nommé qui initialise directement l'attribut.",
  },

  next: null,
}
