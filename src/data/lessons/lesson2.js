export default {
  id: 2,
  slug: 'variables',
  title: 'Variables et types',
  summary:
    "Déclarer des variables, comprendre les types de base, et la différence entre var, final et const.",
  duration: '12 min',

  objectives: [
    'Connaître les 4 types de base : String, int, double, bool',
    'Déclarer une variable avec un type explicite ou avec var',
    'Comprendre la différence entre var, final et const',
    "Utiliser l'interpolation de chaînes pour construire du texte",
  ],

  sections: [
    {
      id: 'types-de-base',
      heading: 'Les types de base',
      content: `En Dart, chaque variable a un type. Voici les quatre types que tu vas
utiliser presque tout le temps :

- **String** : du texte, entre guillemets simples ou doubles.
- **int** : un nombre entier (sans virgule).
- **double** : un nombre à virgule (décimal).
- **bool** : une valeur vraie ou fausse (\`true\` / \`false\`).`,
      code: `String prenom = 'Ayoub';
int age = 25;
double taille = 1.78;
bool estEtudiant = true;`,
    },
    {
      id: 'declarer-une-variable',
      heading: 'Déclarer une variable',
      content: `Il y a deux façons de déclarer une variable en Dart :

1. Avec le **type explicite**, comme dans l'exemple précédent (\`int age = 25;\`).
2. Avec **var**, et laisser Dart deviner le type tout seul à partir de la valeur.

Une fois que le type est déterminé (même avec var), il ne change plus : une
variable déclarée avec un int ne pourra jamais recevoir un texte plus tard.`,
      code: `var prenom = 'Ayoub';   // Dart comprend que c'est une String
var age = 25;            // Dart comprend que c'est un int

// age = 'vingt-cinq';   // ❌ Erreur : on ne peut pas mettre du texte dans un int`,
    },
    {
      id: 'var-final-const',
      heading: 'var, final et const : quelle différence ?',
      content: `Ces trois mots-clés servent tous à déclarer une variable, mais avec des
règles différentes :

- **var** : la valeur peut changer plus tard dans le programme.
- **final** : la valeur est fixée une seule fois, à l'exécution, et ne change
  plus jamais après.
- **const** : comme final, mais la valeur doit être connue **avant même** que
  le programme s'exécute (une valeur fixe, pas calculée).

En résumé : utilise **var** si la valeur va changer, sinon préfère **final**
(ou **const** si c'est une vraie constante, comme un taux de TVA).`,
      code: `var score = 10;
score = 15;              // ✅ OK, var peut changer

final ville = 'Oujda';
// ville = 'Rabat';      // ❌ Erreur, final ne change pas

const pi = 3.14159;      // valeur fixe, connue à l'avance`,
    },
    {
      id: 'interpolation',
      heading: 'Interpoler des variables dans un texte',
      content: `Plutôt que d'additionner des morceaux de texte avec +, Dart permet
d'insérer directement une variable dans une chaîne avec le symbole \`$\`.

Pour une expression plus complexe (pas juste une variable seule), on entoure
avec des accolades : \`\${expression}\`.`,
      code: `String prenom = 'Ayoub';
int age = 25;

print('Je m\\'appelle \$prenom et j\\'ai \$age ans.');
print('Dans 5 ans, j\\'aurai \${age + 5} ans.');`,
    },
  ],

  codeExample: `void main() {
  String prenom = 'Ayoub';
  int age = 25;
  double taille = 1.78;
  bool estEtudiant = true;

  print('\$prenom a \$age ans et mesure \$taille m.');
}`,

  keyPoints: [
    'Les 4 types de base : String, int, double, bool.',
    'var laisse Dart deviner le type ; le type ne change plus ensuite.',
    'final = fixé à l\u2019exécution, const = fixé avant l\u2019exécution.',
    'On insère une variable dans un texte avec $variable ou ${expression}.',
  ],

  exercisePreview: {
    prompt:
      "Déclare trois variables (ton prénom, ton âge, ta ville) et affiche-les dans une seule phrase avec l'interpolation de chaînes.",
    hint: "Utilise \$nomDeVariable directement à l'intérieur d'une chaîne entre guillemets.",
  },

  next: null,
}
