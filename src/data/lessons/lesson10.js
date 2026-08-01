export default {
  id: 10,
  slug: 'poo-classes',
  title: 'La Programmation Orientée Objet : Classes et Objets',
  summary:
    "Définir une classe, comprendre attributs et méthodes, et créer des objets par instanciation.",
  duration: '20 min',

  objectives: [
    "Comprendre ce qu'est une classe et un objet",
    'Définir une classe avec des attributs',
    'Écrire un constructeur, avec la syntaxe raccourcie this.',
    'Instancier des objets à partir d\u2019une classe',
    'Ajouter des méthodes qui décrivent le comportement des objets',
  ],

  sections: [
    {
      id: 'quest-ce-quune-classe',
      heading: "Qu'est-ce qu'une classe ?",
      content: `Jusqu'ici, on a manipulé des données séparées (une String, un int, une
Map...). Une **classe** permet de regrouper plusieurs informations liées
sous un seul modèle réutilisable — un peu comme un plan de construction.

Un **objet** est une instance concrète de ce plan. Par exemple, la classe
\`Product\` décrit ce qu'est un produit en général (il a un nom, un prix...) ;
chaque objet créé à partir d'elle représente **un** produit précis.

C'est exactement le principe utilisé par les widgets Flutter : \`Text\`,
\`Container\`, \`Column\` sont tous des classes.`,
      code: `// Le plan (la classe)
class Product {
  String name;
  double price;
}

// Deux objets concrets, construits à partir du même plan
// (on verra la syntaxe complète juste après)`,
    },
    {
      id: 'definir-une-classe',
      heading: 'Définir une classe',
      content: `Une classe se déclare avec le mot-clé \`class\`, suivi d'un nom (par
convention, en **PascalCase** : \`Product\`, \`UserProfile\`...). À l'intérieur,
on déclare les **attributs** : les variables qui décrivent l'état d'un objet.`,
      code: `class Product {
  String name;
  double price;
  bool inStock;
}`,
    },
    {
      id: 'le-constructeur',
      heading: 'Le constructeur',
      content: `Le **constructeur** est une méthode spéciale, appelée automatiquement
quand on crée un objet, qui sert à initialiser ses attributs. Il porte le
même nom que la classe.

Dart propose une syntaxe raccourcie très pratique : \`this.name\` directement
dans les paramètres du constructeur assigne automatiquement la valeur reçue
à l'attribut correspondant, sans avoir à écrire le corps du constructeur.`,
      code: `class Product {
  String name;
  double price;
  bool inStock;

  // Constructeur avec la syntaxe raccourcie this.
  Product(this.name, this.price, this.inStock);
}

// Équivalent, en version longue (à éviter, plus verbeux) :
// Product(String name, double price, bool inStock) {
//   this.name = name;
//   this.price = price;
//   this.inStock = inStock;
// }`,
    },
    {
      id: 'instancier-un-objet',
      heading: 'Instancier un objet',
      content: `**Instancier** signifie créer un objet concret à partir d'une classe, en
appelant son constructeur avec le mot-clé \`new\` (optionnel en Dart moderne,
souvent omis). Chaque objet créé possède ses propres valeurs, indépendantes
des autres.`,
      code: `class Product {
  String name;
  double price;
  bool inStock;

  Product(this.name, this.price, this.inStock);
}

void main() {
  Product headphones = Product('Casque audio', 250, true);
  Product keyboard = Product('Clavier mécanique', 400, false);

  print(headphones.name);    // Casque audio
  print(keyboard.price);     // 400.0
}`,
    },
    {
      id: 'les-methodes',
      heading: 'Les méthodes',
      content: `Une **méthode** est une fonction déclarée à l'intérieur d'une classe,
qui décrit un comportement de l'objet. Elle peut accéder directement aux
attributs de l'objet sans les recevoir en paramètre — grâce au mot-clé
\`this\`, qui désigne « l'objet actuel ».`,
      code: `class Product {
  String name;
  double price;
  bool inStock;

  Product(this.name, this.price, this.inStock);

  // Méthode qui décrit un comportement
  void applyDiscount(double percentage) {
    this.price = this.price - (this.price * percentage / 100);
  }

  String describe() {
    return '$name coûte $price DH';
  }
}

void main() {
  Product headphones = Product('Casque audio', 250, true);

  headphones.applyDiscount(10);
  print(headphones.describe());   // Casque audio coûte 225.0 DH
}`,
    },
  ],

  codeExample: `class Product {
  String name;
  double price;
  bool inStock;

  Product(this.name, this.price, this.inStock);

  String describe() {
    return '$name : $price DH';
  }
}

void main() {
  Product headphones = Product('Casque audio', 250, true);
  Product keyboard = Product('Clavier mécanique', 400, true);

  print(headphones.describe());
  print(keyboard.describe());
}`,

  keyPoints: [
    "Une classe est un plan/modèle ; un objet est une instance concrète créée à partir de ce plan.",
    'Les attributs décrivent l\u2019état d\u2019un objet ; les méthodes décrivent son comportement.',
    "Le constructeur porte le nom de la classe ; this.attribut assigne directement le paramètre reçu.",
    "Chaque objet instancié a ses propres valeurs, indépendantes des autres objets de la même classe.",
    'this, à l\u2019intérieur d\u2019une méthode, désigne l\u2019objet sur lequel la méthode a été appelée.',
  ],

  exercisePreview: {
    prompt:
      "Crée une classe TodoItem avec les attributs title (String) et done (bool), un constructeur avec this., puis instancie deux tâches et affiche leur titre.",
    hint: "class TodoItem { String title; bool done; TodoItem(this.title, this.done); }",
  },

  next: null,
}
