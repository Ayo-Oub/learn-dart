export default {
  id: 5,
  slug: 'fonctions',
  title: 'Les fonctions',
  summary:
    "Déclarer des fonctions, gérer leurs paramètres, et comprendre les callbacks et les closures.",
  duration: '18 min',

  objectives: [
    'Déclarer une fonction : type de retour, nom, paramètres',
    'Utiliser des paramètres positionnels, nommés, optionnels et des valeurs par défaut',
    "Écrire une fonction fléchée avec =>",
    'Passer une fonction en paramètre (callback) avec une fonction anonyme',
    'Comprendre les closures et la portée des variables',
  ],

  sections: [
    {
      id: 'declaration-de-base',
      heading: 'Déclaration de base',
      content: `Une fonction se déclare avec trois éléments : un **type de retour**, un
**nom**, et une liste de **paramètres** entre parenthèses.

Si la fonction ne renvoie aucune valeur, on utilise **void** comme type de
retour.`,
      code: `// type de retour : int, nom : additionner, paramètres : a et b
int additionner(int a, int b) {
  return a + b;
}

// type de retour : void, la fonction ne renvoie rien
void direBonjour(String prenom) {
  print('Bonjour, \$prenom !');
}

void main() {
  print(additionner(4, 6));   // 10
  direBonjour('Ayoub');        // Bonjour, Ayoub !
}`,
    },
    {
      id: 'parametres',
      heading: 'Les différents types de paramètres',
      content: `Dart propose plusieurs façons de déclarer les paramètres d'une fonction :

- **Positionnels** : l'ordre dans lequel on les écrit compte, comme
  \`additionner(4, 6)\` — le plus courant.
- **Nommés** (\`{ }\`) : on précise le nom du paramètre à l'appel, ce qui
  rend le code plus lisible. On les rend obligatoires avec \`required\`.
- **Optionnels** (\`[ ]\`) : on peut ne pas les fournir à l'appel.
- **Valeurs par défaut** (\`=\`) : utilisées si le paramètre optionnel ou
  nommé n'est pas fourni.`,
      code: `// Paramètres positionnels
int soustraire(int a, int b) => a - b;

// Paramètres nommés, avec un obligatoire (required) et un par défaut
void afficherProfil({required String prenom, int age = 18}) {
  print('\$prenom, \$age ans');
}

// Paramètre optionnel avec valeur par défaut
String saluer(String prenom, [String ville = 'Oujda']) {
  return 'Bonjour \$prenom, de \$ville !';
}

void main() {
  print(soustraire(10, 4));                  // 6
  afficherProfil(prenom: 'Ayoub', age: 25);   // Ayoub, 25 ans
  afficherProfil(prenom: 'Sara');             // Sara, 18 ans
  print(saluer('Ayoub'));                     // Bonjour Ayoub, de Oujda !
}`,
    },
    {
      id: 'syntaxe-flechee',
      heading: 'Syntaxe fléchée (Arrow syntax)',
      content: `Quand une fonction ne contient qu'une seule expression (un seul
\`return\`), on peut l'écrire en une ligne avec \`=>\`, sans accolades ni
mot-clé \`return\`. C'est purement une écriture plus courte : le résultat est
exactement le même.`,
      code: `// Écriture classique
int carre(int nombre) {
  return nombre * nombre;
}

// Même fonction, en syntaxe fléchée
int carreCourt(int nombre) => nombre * nombre;

bool estMajeur(int age) => age >= 18;`,
    },
    {
      id: 'fonctions-anonymes-lambdas',
      heading: 'Fonctions anonymes et Lambdas',
      content: `Une **fonction anonyme** (ou lambda) est une fonction sans nom, créée
directement là où on en a besoin — souvent pour la passer en paramètre à une
autre fonction. On appelle ça un **callback** : une fonction qu'on donne à
une autre fonction, pour qu'elle l'exécute au bon moment.

Tu en croiseras beaucoup avec les listes, par exemple avec \`forEach\`.`,
      code: `void executerAction(String prenom, void Function(String) action) {
  action(prenom);
}

void main() {
  // Fonction anonyme passée directement en paramètre
  executerAction('Ayoub', (nom) {
    print('Salut \$nom !');
  });

  // forEach attend aussi une fonction en callback
  List<String> fruits = ['pomme', 'banane', 'orange'];
  fruits.forEach((fruit) => print('J\\'aime le \$fruit'));
}`,
    },
    {
      id: 'lexical-closures',
      heading: 'Lexical Closures',
      content: `Une **closure** est une fonction qui « se souvient » des variables de
l'endroit où elle a été créée, même après que cet endroit a fini de
s'exécuter. C'est ce qui permet à une fonction interne d'accéder aux
variables de la fonction qui l'entoure.

En pratique, chaque fonction créée par \`creerCompteur()\` ci-dessous garde
son propre \`compte\`, indépendant des autres.`,
      code: `Function creerCompteur() {
  int compte = 0;

  return () {
    compte++;
    print('Compte : \$compte');
  };
}

void main() {
  var compteur1 = creerCompteur();
  compteur1();   // Compte : 1
  compteur1();   // Compte : 2

  var compteur2 = creerCompteur();
  compteur2();   // Compte : 1 (indépendant de compteur1)
}`,
    },
  ],

  codeExample: `int addition(int a, int b) => a + b;

void executerSurListe(List<int> nombres, void Function(int) action) {
  for (int nombre in nombres) {
    action(nombre);
  }
}

void main() {
  print(addition(4, 6));   // 10

  executerSurListe([1, 2, 3], (n) => print('Nombre : \$n'));
}`,

  keyPoints: [
    'Une fonction = type de retour + nom + paramètres (void si elle ne renvoie rien).',
    'Positionnels par défaut ; {nommés} souvent avec required ; [optionnels] avec valeur par défaut.',
    '=> remplace { return ...; } pour une fonction à une seule expression.',
    "Une fonction anonyme passée en paramètre s'appelle un callback.",
    'Une closure retient les variables de son environnement de création, même après coup.',
  ],

  exercisePreview: {
    prompt:
      "Écris une fonction creerMultiplicateur(int facteur) qui renvoie une fonction multipliant n'importe quel nombre par ce facteur.",
    hint: "Fais renvoyer à ta fonction une fonction anonyme (n) => n * facteur ; c'est une closure sur facteur.",
  },

  next: 'listes',
}