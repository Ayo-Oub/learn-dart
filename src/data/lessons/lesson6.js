export default {
  id: 6,
  slug: 'listes',
  title: 'Les listes',
  summary:
    "Créer, modifier et parcourir des listes en Dart : add, insert, remove, spread operator et bien plus.",
  duration: '20 min',

  objectives: [
    'Créer une liste typée avec List<Type>',
    "Accéder à un élément par son index, et connaître la longueur d'une liste",
    'Ajouter, insérer et retirer des éléments (add, insert, remove, removeAt, removeLast, clear)',
    'Parcourir une liste avec for-in et forEach',
    "Combiner des listes avec l'opérateur de décomposition ...",
    'Utiliser des méthodes utiles : indexOf, sort, reversed, sublist, join...',
  ],

  sections: [
    {
      id: 'pourquoi-des-listes',
      heading: 'Pourquoi une liste ?',
      content: `Jusqu'ici, chaque variable ne contenait qu'une seule valeur. Une **liste**
permet de stocker **plusieurs valeurs du même type**, dans une seule variable,
rangées dans un ordre précis.

En Dart, une liste se déclare avec \`List<Type>\`, où \`Type\` est le type
des éléments qu'elle contient (String, int, double...).`,
      code: `List<String> fruits = ['pomme', 'banane', 'orange'];
List<int> notes = [12, 15, 9, 18];
List<String> vide = [];   // liste vide, mais typée String

print(fruits);   // [pomme, banane, orange]
print(notes);    // [12, 15, 9, 18]`,
    },
    {
      id: 'acceder-aux-elements',
      heading: 'Accéder à un élément',
      content: `Chaque élément d'une liste a une position, appelée **index**. Le premier
élément est à l'index **0**, pas 1 ! On accède à un élément avec des crochets
\`[index]\`.

La propriété \`.length\` donne le nombre d'éléments de la liste. Attention :
accéder à un index qui n'existe pas (par exemple \`fruits[10]\` sur une liste
de 3 éléments) provoque une erreur.`,
      code: `List<String> fruits = ['pomme', 'banane', 'orange'];

print(fruits[0]);        // pomme (le premier élément)
print(fruits[2]);        // orange (le troisième élément)
print(fruits.length);    // 3
print(fruits[fruits.length - 1]);   // orange (le dernier élément)`,
    },
    {
      id: 'ajouter-inserer-retirer',
      heading: 'Ajouter, insérer et retirer des éléments',
      content: `Une liste peut changer de taille pendant l'exécution du programme. Voici
les méthodes les plus courantes :

- \`.add(valeur)\` : ajoute un élément **à la fin** de la liste.
- \`.insert(index, valeur)\` : insère un élément à une **position précise**,
  en décalant les éléments suivants d'un cran vers la droite.
- \`.remove(valeur)\` : retire la **première occurrence** de cette valeur.
- \`.removeAt(index)\` : retire l'élément situé à cet index précis.
- \`.removeLast()\` : retire le dernier élément de la liste.
- \`.clear()\` : vide complètement la liste.`,
      code: `List<String> fruits = ['pomme', 'banane'];

fruits.add('orange');
print(fruits);                     // [pomme, banane, orange]

fruits.insert(1, 'kiwi');
print(fruits);                     // [pomme, kiwi, banane, orange]

fruits.remove('banane');
print(fruits);                     // [pomme, kiwi, orange]

fruits.removeAt(0);
print(fruits);                     // [kiwi, orange]

fruits.removeLast();
print(fruits);                     // [kiwi]

fruits.clear();
print(fruits);                     // []`,
    },
    {
      id: 'parcourir-une-liste',
      heading: 'Parcourir une liste : for-in et forEach',
      content: `Il y a deux façons courantes de parcourir tous les éléments d'une liste :

1. La boucle **for-in** : donne directement l'élément, sans gérer l'index.
2. La méthode **.forEach()** : exécute une fonction sur chaque élément.
   C'est une autre façon d'écrire la même chose, souvent en une seule ligne.`,
      code: `List<String> fruits = ['pomme', 'banane', 'orange'];

// Avec for-in
for (String fruit in fruits) {
  print('J\\'aime le \$fruit');
}

// Avec forEach, équivalent mais plus court
fruits.forEach((fruit) => print('J\\'aime le \$fruit'));`,
    },
    {
      id: 'spread-operator',
      heading: "L'opérateur de décomposition (spread operator ...)",
      content: `L'opérateur \`...\` (spread operator) permet d'insérer **tous les
éléments** d'une liste directement à l'intérieur d'une autre liste, sans
boucle. Très utile pour combiner ou dupliquer des listes.

Il existe aussi une version \`...?\` (spread nullable) qui évite une erreur
si la liste insérée est \`null\`.`,
      code: `List<String> fruits = ['pomme', 'banane'];
List<String> legumes = ['carotte', 'poireau'];

// Sans spread, il faudrait une boucle pour tout copier
List<String> panier = [...fruits, ...legumes, 'œuf'];
print(panier);   // [pomme, banane, carotte, poireau, œuf]

// Spread nullable : évite une erreur si la liste est null
List<String>? extras;
List<String> panierComplet = [...fruits, ...?extras];
print(panierComplet);   // [pomme, banane]`,
    },
    {
      id: 'methodes-utiles',
      heading: 'Et bien d\u2019autres méthodes utiles...',
      content: `Dart fournit encore beaucoup de méthodes pratiques sur les listes. En
voici quelques-unes que tu croiseras souvent :

- \`.contains(valeur)\` : renvoie true si la valeur est présente.
- \`.indexOf(valeur)\` : renvoie la position de la valeur (-1 si absente).
- \`.isEmpty\` / \`.isNotEmpty\` : teste si la liste est vide ou non.
- \`.sort()\` : trie la liste dans l'ordre croissant (modifie la liste).
- \`.reversed\` : renvoie les éléments dans l'ordre inverse.
- \`.sublist(debut, fin)\` : extrait une portion de la liste.
- \`.join(separateur)\` : transforme la liste en une seule String.`,
      code: `List<int> notes = [12, 18, 9, 15];

print(notes.contains(18));      // true
print(notes.indexOf(9));        // 2
print(notes.isEmpty);           // false

notes.sort();
print(notes);                    // [9, 12, 15, 18]
print(notes.reversed.toList());  // [18, 15, 12, 9]
print(notes.sublist(1, 3));      // [12, 15]
print(notes.join(', '));         // 9, 12, 15, 18`,
    },
  ],

  codeExample: `void main() {
  List<int> notes = [12, 18, 9, 15];

  notes.insert(0, 20);
  notes.add(14);

  int somme = 0;
  for (int note in notes) {
    somme += note;
  }

  double moyenne = somme / notes.length;
  print('Notes : \${notes.join(', ')}');
  print('Moyenne : \$moyenne');
}`,

  keyPoints: [
    'List<Type> stocke plusieurs valeurs du même type, dans un ordre précis.',
    'Le premier élément est à l\u2019index 0 ; .length donne le nombre d\u2019éléments.',
    '.add() ajoute à la fin, .insert(index, valeur) insère à une position précise.',
    '.remove()/.removeAt()/.removeLast()/.clear() retirent un ou tous les éléments.',
    'for-in et .forEach() parcourent tous les éléments ; ...liste combine des listes.',
    'indexOf, sort, reversed, sublist et join complètent la boîte à outils des listes.',
  ],

  exercisePreview: {
    prompt:
      "Crée une liste de 5 nombres entiers, insère un nouveau nombre en 2ème position avec insert(), puis affiche la somme de tous les éléments.",
    hint: '.insert(1, valeur) place la valeur à l\u2019index 1, en décalant les autres vers la droite.',
  },

  next: null,
}
