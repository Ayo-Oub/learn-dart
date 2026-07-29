export default {
  id: 9,
  slug: 'iteration-avancee',
  title: "Méthodes d'itération avancées",
  summary:
    "Transformer, filtrer et combiner des listes sans boucle explicite : map, where, reduce, fold, any, every.",
  duration: '20 min',

  objectives: [
    "Transformer chaque élément d'une liste avec map()",
    'Filtrer une liste avec where()',
    'Combiner tous les éléments en une seule valeur avec reduce() et fold()',
    'Tester une condition sur les éléments avec any() et every()',
  ],

  sections: [
    {
      id: 'pourquoi-ces-methodes',
      heading: 'Pourquoi ces méthodes ?',
      content: `Jusqu'ici, pour transformer ou filtrer une liste, on écrivait une boucle
for-in avec une liste vide qu'on remplissait au fur et à mesure. Dart
propose des méthodes toutes faites qui font la même chose en une seule
ligne, sans variable intermédiaire : \`map\`, \`where\`, \`reduce\`, \`fold\`,
\`any\` et \`every\`. Le code devient plus court et plus lisible une fois
qu'on est habitué.`,
      code: `List<int> numbers = [1, 2, 3, 4, 5];

// Avec une boucle classique
List<int> doubled = [];
for (int number in numbers) {
  doubled.add(number * 2);
}

// Avec map() : même résultat, en une ligne
List<int> doubledShort = numbers.map((number) => number * 2).toList();`,
    },
    {
      id: 'map',
      heading: 'map() : transformer chaque élément',
      content: `\`.map()\` applique une fonction à **chaque élément** d'une liste, et
renvoie une nouvelle collection avec les résultats. Elle ne modifie pas la
liste d'origine. Comme elle renvoie un \`Iterable\` (pas directement une
\`List\`), il faut ajouter \`.toList()\` à la fin si on veut une vraie liste.`,
      code: `List<int> numbers = [1, 2, 3, 4];

List<int> squares = numbers.map((number) => number * number).toList();
print(squares);   // [1, 4, 9, 16]

List<String> names = ['ayoub', 'sara'];
List<String> capitalized = names.map((name) => name.toUpperCase()).toList();
print(capitalized);   // [AYOUB, SARA]`,
    },
    {
      id: 'where',
      heading: 'where() : filtrer les éléments',
      content: `\`.where()\` garde uniquement les éléments pour lesquels la fonction
passée en paramètre renvoie \`true\`. C'est l'équivalent d'un \`if\` à
l'intérieur d'une boucle for-in, mais en une seule ligne.`,
      code: `List<int> numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Garde uniquement les nombres pairs
List<int> evenNumbers = numbers.where((number) => number % 2 == 0).toList();
print(evenNumbers);   // [2, 4, 6, 8]`,
    },
    {
      id: 'reduce',
      heading: 'reduce() : combiner en une seule valeur',
      content: `\`.reduce()\` combine tous les éléments d'une liste en **une seule
valeur**, en appliquant une fonction qui prend deux paramètres à chaque
étape : le résultat accumulé jusque-là, et l'élément suivant.

⚠️ \`.reduce()\` échoue sur une liste vide (il n'y a pas de premier élément
pour démarrer).`,
      code: `List<int> numbers = [1, 2, 3, 4, 5];

int sum = numbers.reduce((accumulator, current) => accumulator + current);
print(sum);   // 15

int max = numbers.reduce((accumulator, current) => current > accumulator ? current : accumulator);
print(max);   // 5`,
    },
    {
      id: 'fold',
      heading: 'fold() : comme reduce(), avec une valeur de départ',
      content: `\`.fold()\` fonctionne comme \`.reduce()\`, mais on lui donne une **valeur
de départ** explicite. Avantage : elle fonctionne même sur une liste vide
(elle renvoie alors directement la valeur de départ).`,
      code: `List<int> numbers = [1, 2, 3, 4, 5];

int sum = numbers.fold(0, (accumulator, current) => accumulator + current);
print(sum);   // 15

List<int> empty = [];
int sumEmpty = empty.fold(0, (accumulator, current) => accumulator + current);
print(sumEmpty);   // 0 (reduce() aurait provoqué une erreur ici)`,
    },
    {
      id: 'any-every',
      heading: 'any() et every() : tester une condition',
      content: `Ces deux méthodes renvoient un simple \`bool\` :

- \`.any(condition)\` : \`true\` si **au moins un** élément vérifie la
  condition.
- \`.every(condition)\` : \`true\` si **tous** les éléments vérifient la
  condition.`,
      code: `List<int> ages = [15, 22, 18, 30];

bool hasAdult = ages.any((age) => age >= 18);
print(hasAdult);   // true : au moins un adulte

bool allAdults = ages.every((age) => age >= 18);
print(allAdults);  // false : 15 n'est pas majeur`,
    },
  ],

  codeExample: `void main() {
  List<int> scores = [12, 18, 9, 15, 20, 7];

  // Garde les notes suffisantes, puis calcule leur moyenne
  List<int> passingScores = scores.where((score) => score >= 10).toList();
  int total = passingScores.fold(0, (accumulator, current) => accumulator + current);
  double average = total / passingScores.length;

  print('Notes retenues : \$passingScores');
  print('Moyenne : \$average');
}`,

  keyPoints: [
    ".map() transforme chaque élément et renvoie une nouvelle collection (penser à .toList()).",
    ".where() garde uniquement les éléments qui vérifient une condition.",
    ".reduce() combine tous les éléments en une valeur, mais échoue sur une liste vide.",
    ".fold() fait pareil que reduce(), avec une valeur de départ, même sur une liste vide.",
    ".any() teste si au moins un élément vérifie une condition ; .every() teste si tous la vérifient.",
  ],

  exercisePreview: {
    prompt:
      "À partir d'une liste de nombres entiers, utilise where() pour garder les nombres pairs, puis fold() pour calculer leur somme.",
    hint: "numbers.where((n) => n % 2 == 0).toList() puis .fold(0, (acc, current) => acc + current) sur le résultat.",
  },

  next: null,
}
