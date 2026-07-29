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
]

export default exercises9
