const exercises4 = [
  {
    id: 'ex-4-1',
    lessonSlug: 'boucles',
    title: 'Compter jusqu\u2019à 10',
    difficulty: 'facile',
    statement:
      "Écris une boucle for qui affiche tous les nombres de 1 à 10, un par ligne.",
    starterCode: `void main() {
  // À compléter
}`,
    solutionCode: `void main() {
  for (int i = 1; i <= 10; i++) {
    print(i);
  }
}`,
    hint: 'La condition i <= 10 permet d\u2019inclure le nombre 10 dans la boucle.',
  },
  {
    id: 'ex-4-2',
    lessonSlug: 'boucles',
    title: 'La table de multiplication',
    difficulty: 'facile',
    statement:
      "Affiche la table de multiplication de 5, de 1 à 10 (5 x 1 = 5, 5 x 2 = 10, etc.) grâce à une boucle for.",
    starterCode: `void main() {
  int table = 5;

  // À compléter
}`,
    solutionCode: `void main() {
  int table = 5;

  for (int i = 1; i <= 10; i++) {
    print('\$table x \$i = \${table * i}');
  }
}`,
    hint: 'Utilise l\u2019interpolation \${expression} pour calculer table * i directement dans le print.',
  },
  {
    id: 'ex-4-3',
    lessonSlug: 'boucles',
    title: 'Saute le 7',
    difficulty: 'moyen',
    statement:
      "Affiche les nombres de 1 à 10, mais saute le nombre 7 (ne l'affiche pas) grâce à continue.",
    starterCode: `void main() {
  for (int i = 1; i <= 10; i++) {
    // À compléter
  }
}`,
    solutionCode: `void main() {
  for (int i = 1; i <= 10; i++) {
    if (i == 7) {
      continue;
    }
    print(i);
  }
}`,
    hint: 'Place un if qui teste (i == 7) et utilise continue à l\u2019intérieur.',
  },
  {
    id: 'ex-4-4',
    lessonSlug: 'boucles',
    title: 'Le premier multiple de 13',
    difficulty: 'difficile',
    statement:
      "En partant de 1, utilise une boucle while pour trouver et afficher le premier nombre supérieur à 100 qui est un multiple de 13, puis arrête la boucle avec break.",
    starterCode: `void main() {
  int nombre = 1;

  // À compléter
}`,
    solutionCode: `void main() {
  int nombre = 1;

  while (true) {
    if (nombre > 100 && nombre % 13 == 0) {
      print(nombre);
      break;
    }
    nombre++;
  }
}`,
    hint: 'Une boucle while (true) tourne indéfiniment jusqu\u2019à ce qu\u2019un break l\u2019arrête.',
  },
]

export default exercises4
