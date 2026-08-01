export default {
  id: 3,
  slug: 'conditions',
  title: 'Les conditions',
  summary:
    "Comparer des valeurs et faire des choix dans ton programme avec if, else et else if.",
  duration: '14 min',

  objectives: [
    'Utiliser les opérateurs de comparaison (==, !=, <, >, <=, >=)',
    'Combiner des conditions avec les opérateurs logiques (&&, ||, !)',
    'Écrire une structure if / else if / else',
    "Utiliser l'opérateur ternaire pour une condition courte",
  ],

  sections: [
    {
      id: 'operateurs-de-comparaison',
      heading: 'Les opérateurs de comparaison',
      content: `Pour comparer deux valeurs, Dart utilise les mêmes opérateurs que la
plupart des langages. Le résultat d'une comparaison est toujours un **bool**
(\`true\` ou \`false\`).

- \`==\` : égal à
- \`!=\` : différent de
- \`<\` : strictement inférieur à
- \`>\` : strictement supérieur à
- \`<=\` : inférieur ou égal à
- \`>=\` : supérieur ou égal à`,
      code: `int age = 20;

print(age == 18);   // false
print(age >= 18);   // true
print(age != 20);   // false`,
    },
    {
      id: 'operateurs-logiques',
      heading: 'Combiner des conditions',
      content: `Pour combiner plusieurs conditions, on utilise :

- \`&&\` (ET) : vrai seulement si **les deux** conditions sont vraies.
- \`||\` (OU) : vrai si **au moins une** des deux conditions est vraie.
- \`!\` (NON) : inverse une condition (true devient false, et inversement).`,
      code: `int age = 20;
bool aPermis = true;

print(age >= 18 && aPermis);   // true : les deux sont vraies
print(age < 18 || aPermis);    // true : au moins une est vraie
print(!aPermis);                // false : on inverse aPermis`,
    },
    {
      id: 'if-else',
      heading: 'La structure if / else',
      content: `\`if\` exécute un bloc de code seulement si la condition entre parenthèses
est vraie. \`else\` exécute un autre bloc si la condition est fausse.`,
      code: `int age = 16;

if (age >= 18) {
  print('Tu es majeur.');
} else {
  print('Tu es mineur.');
}`,
    },
    {
      id: 'else-if',
      heading: 'Plusieurs cas avec else if',
      content: `Quand il y a plus de deux cas possibles, on enchaîne avec \`else if\`.
Dart teste les conditions dans l'ordre et s'arrête à la première qui est
vraie.`,
      code: `int note = 14;

if (note >= 16) {
  print('Très bien');
} else if (note >= 12) {
  print('Bien');
} else if (note >= 10) {
  print('Passable');
} else {
  print('Insuffisant');
}`,
    },
    {
      id: 'operateur-ternaire',
      heading: "L'opérateur ternaire",
      content: `Pour une condition simple avec seulement deux résultats possibles, on peut
utiliser l'opérateur ternaire \`condition ? valeurSiVrai : valeurSiFaux\`. Il
tient sur une seule ligne, à la place d'un if / else complet.`,
      code: `int age = 20;

String statut = age >= 18 ? 'majeur' : 'mineur';
print(statut);   // majeur`,
    },
  ],

  codeExample: `void main() {
  int age = 20;
  bool aPermis = true;

  if (age >= 18 && aPermis) {
    print('Tu peux conduire seul.');
  } else if (age >= 18) {
    print('Tu es majeur mais tu n\\'as pas le permis.');
  } else {
    print('Tu es encore mineur.');
  }
}`,

  keyPoints: [
    'Une comparaison (==, !=, <, >, <=, >=) donne toujours un bool.',
    '&& = ET (les deux vraies), || = OU (au moins une vraie), ! = NON.',
    'if / else if / else exécute le premier bloc dont la condition est vraie.',
    "condition ? siVrai : siFaux remplace un if/else simple sur une ligne.",
  ],

  exercisePreview: {
    prompt:
      "Écris un programme qui affiche 'Pair' ou 'Impair' selon la valeur d'un nombre entier.",
    hint: 'Un nombre est pair si le reste de sa division par 2 est égal à 0 : nombre % 2 == 0.',
  },

  next: 'boucles',
}
