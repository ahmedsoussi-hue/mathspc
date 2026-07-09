/* ==========================================================================
   APP.JS - MATHS ET PHYSIQUES
   Logic: Navigation, Dynamic Cards, Interactive Quizzes, LocalStorage,
          Simulated Payments, Custom Toast and Theme Toggling.
   ========================================================================== */

// --- DATA SOURCE: CHAPTERS ---
const chaptersData = [
    {
        id: "math-lim-cont",
        title: "Limites et Continuité",
        level: "2bac-pc",
        subject: "math",
        description: "Étude des limites, continuité d'une fonction numérique, Théorème des Valeurs Intermédiaires (TVI) et fonctions réciproques.",
        courseContent: `
            <h4>1. Continuité en un point</h4>
            <p>Une fonction $f$ est continue en un point $x_0$ si et seulement si :</p>
            <div class="math-formula">lim (x → x₀) f(x) = f(x₀)</div>
            
            <h4>2. Théorème des Valeurs Intermédiaires (TVI)</h4>
            <p>Si $f$ est une fonction continue sur un intervalle $[a, b]$ et si $y$ est un réel compris entre $f(a)$ et $f(b)$, alors il existe au moins un réel $c \in [a, b]$ tel que :</p>
            <div class="math-formula">f(c) = y</div>
            <p>Si de plus la fonction $f$ est strictement monotone (strictement croissante ou strictement décroissante), la solution $c$ est unique.</p>
            
            <h4>3. Limites de référence</h4>
            <ul>
                <li>lim (x → 0) (sin x / x) = 1</li>
                <li>lim (x → 0) ((1 - cos x) / x²) = 1/2</li>
                <li>lim (x → +∞) (eˣ / x) = +∞</li>
            </ul>
        `,
        exercises: [
            {
                title: "Exercice 1 : Calcul de limite avec forme indéterminée",
                statement: "Déterminer la limite en $1$ de la fonction : <br><strong>f(x) = (x² + 2x - 3) / (x - 1)</strong>",
                solution: "Pour $x = 1$, le numérateur et le dénominateur s'annulent (forme indéterminée 0/0).<br>Factorisons le numérateur : x² + 2x - 3 = (x - 1)(x + 3).<br>Pour x ≠ 1, f(x) = x + 3.<br>D'où, <strong>lim (x → 1) f(x) = 1 + 3 = 4</strong>."
            },
            {
                title: "Exercice 2 : Application du TVI",
                statement: "Démontrer que l'équation <strong>x³ + x - 1 = 0</strong> admet une unique solution réelle sur l'intervalle [0, 1].",
                solution: "Soit f(x) = x³ + x - 1. f est continue sur [0, 1] comme fonction polynôme.<br>Calculons la dérivée : f'(x) = 3x² + 1. f'(x) > 0 pour tout x réel, donc f est strictement croissante sur [0, 1].<br>f(0) = -1 et f(1) = 1.<br>Comme 0 est compris entre f(0) et f(1) (c'est-à-dire -1 < 0 < 1), et que f est continue et strictement monotone, l'équation f(x) = 0 admet une <strong>unique solution</strong> sur [0, 1] d'après le TVI."
            },
            {
                title: "Exercice 3 : Devoir Surveillé N°2 - Étude de fonctions et exponentielles (Pr. Soussi)",
                statement: "<strong>Partie I :</strong> Soit $g$ la fonction définie sur $\\mathbb{R}$ par : $g(x) = 1 - (x^2 + 1)e^{-x}$.<br>1) Montrer que $g'(x) = (x - 1)^2 e^{-x}$ et dresser son tableau de variations.<br>2) En déduire le signe de $g(x)$ sur $\\mathbb{R}$.<br><br><strong>Partie II :</strong> Soit $f$ la fonction définie sur $\\mathbb{R}$ par : $f(x) = x - 1 + (x^2 + 2x + 3)e^{-x}$.<br>1) Déterminer la limite de $f$ en $+\\infty$, et montrer que la droite (D) : $y = x - 1$ est asymptote oblique à la courbe $(C)$.<br>2) Déterminer la limite de $f$ en $-\\infty$ et étudier la branche infinie.<br>3) Montrer que $f'(x) = g(x)$ et dresser le tableau de variations de $f$.<br>4) Montrer que l'équation $f(x) = x$ admet une unique solution $\\alpha \\in ]2, 3[$.",
                solution: "<strong>1) Dérivée de g :</strong> $g'(x) = 0 - [2x \\cdot e^{-x} + (x^2+1)(-e^{-x})] = (x^2 - 2x + 1)e^{-x} = (x-1)^2 e^{-x}$. Comme $(x-1)^2 \\ge 0$ et $e^{-x} > 0$, $g'(x) \\ge 0$, donc $g$ est strictement croissante sur $\\mathbb{R}$.<br><strong>2) Signe de g :</strong> On a $g(0) = 1 - (0+1)e^0 = 0$. Comme $g$ est strictement croissante :<br>- Si $x \\le 0$, $g(x) \\le g(0) = 0$.<br>- Si $x \\ge 0$, $g(x) \\ge g(0) = 0$.<br><br><strong>Partie II :</strong><br><strong>1) Limite en $+\\infty$ :</strong> $\\lim_{x\\to+\\infty} (x^2+2x+3)e^{-x} = 0$ (croissances comparées), donc $\\lim_{x\\to+\\infty} f(x) = +\\infty$. La différence $f(x) - (x-1) = (x^2+2x+3)e^{-x}$ tend vers $0$ en $+\\infty$, donc la droite $y = x - 1$ est une asymptote oblique à $(C)$ au voisinage de $+\\infty$.<br><strong>2) Limite en $-\\infty$ :</strong> En factorisant par $e^{-x}$, $\\lim_{x\\to-\\infty} f(x) = +\\infty$. On a $\\lim_{x\\to-\\infty} f(x)/x = -\\infty$ (branche parabolique de direction $(Oy)$).<br><strong>3) Dérivée de f :</strong> $f'(x) = 1 + [(2x+2)e^{-x} - (x^2+2x+3)e^{-x}] = 1 - (x^2+1)e^{-x} = g(x)$. Le signe de $f'(x)$ est celui de $g(x)$. Ainsi, $f$ est décroissante sur $]-\\infty, 0]$ et croissante sur $[0, +\\infty[$.<br><strong>4) TVI :</strong> Posons $h(x) = f(x) - x = (x^2+2x+3)e^{-x} - 1$. La fonction $h$ est continue et strictement décroissante sur $[2, 3]$. On calcule $h(2) \\approx 0.4 > 0$ et $h(3) \\approx -0.2 < 0$. D'après le TVI, l'équation $h(x) = 0$ (soit $f(x) = x$) admet une unique solution $\\alpha$ dans l'intervalle $]2, 3[$."
            }
        ],
        exams: [
            { title: "Devoir Surveillé N°2 - Complexes & Étude de fonctions", type: "Devoir Surveillé", year: 2026, description: "Devoir N°2 Semestre 2 rédigé par Pr. Ahmed Soussi. Contient des exercices sur les nombres complexes et l'étude complète de fonctions numériques avec exponentielles.", file: "Devoir-2.pdf" },
            { title: "Session Ordinaire 2024 - Sciences Physiques", type: "National", year: 2024 },
            { title: "Session de Rattrapage 2023 - Sciences Physiques", type: "National", year: 2023 }
        ]
    },
    {
        id: "pc-ondes-meca",
        title: "Ondes Mécaniques Progressives",
        level: "2bac-pc",
        subject: "pc",
        description: "Définition d'une onde mécanique, ondes transversales et longitudinales, célérité de propagation et retard temporel.",
        courseContent: `
            <h4>1. Définition générale</h4>
            <p>Une onde mécanique progressive est le phénomène de propagation d'une perturbation dans un milieu matériel élastique, sans transport de matière mais avec transport d'énergie.</p>
            
            <h4>2. Types d'ondes</h4>
            <ul>
                <li><strong>Onde transversale :</strong> La direction de la perturbation est perpendiculaire à la direction de propagation (ex: onde le long d'une corde, ondes à la surface de l'eau).</li>
                <li><strong>Onde longitudinale :</strong> La direction de la perturbation est parallèle à la direction de propagation (ex: onde sonore, onde le long d'un ressort).</li>
            </ul>

            <h4>3. Célérité et Retard temporel</h4>
            <p>La vitesse de propagation (célérité) d'une onde est donnée par :</p>
            <div class="math-formula">v = d / Δt</div>
            <p>Le retard temporel τ du passage de l'onde au point M₂ par rapport à son passage au point M₁ est :</p>
            <div class="math-formula">τ = M₁M₂ / v</div>
        `,
        exercises: [
            {
                title: "Exercice 1 : Calcul de la célérité d'une onde sur une corde",
                statement: "Une perturbation se propage le long d'une corde. Un chronomètre enregistre que le front de l'onde parcourt une distance de L = 4.5 m pendant une durée Δt = 0.3 s. Calculer la célérité v de l'onde.",
                solution: "En appliquant la formule v = L / Δt :<br>v = 4.5 / 0.3 = 15 m/s.<br>La célérité de l'onde est de <strong>15 m/s</strong>."
            },
            {
                title: "Exercice 2 : Retard temporel du Son dans l'eau",
                statement: "Un émetteur d'ultrasons envoie un signal dans l'eau de mer (célérité v = 1500 m/s). Le récepteur est situé à une distance d = 300 m. Calculer le retard temporel τ.",
                solution: "Le retard temporel est donné par τ = d / v.<br>τ = 300 / 1500 = 0.2 s.<br>Le récepteur reçoit le signal avec un retard de <strong>0.2 seconde</strong>."
            }
        ],
        exams: [
            { title: "Session Ordinaire 2023 - Physique-Chimie", type: "National", year: 2023 },
            { title: "Session Ordinaire 2022 - Sciences SVT", type: "National", year: 2022 }
        ]
    },
    {
        id: "pc-radioactivite",
        title: "Décroissance Radioactive",
        level: "2bac-pc",
        subject: "pc",
        description: "Noyaux, isotopes, stabilité nucléaire, radioactivités alpha, bêta, gamma et loi de décroissance radioactive.",
        courseContent: `
            <h4>1. Composition du noyau et Isotopes</h4>
            <p>Le noyau atomique est constitué de Z protons et N neutrons. Le nombre de nucléons est A = Z + N. Les isotopes sont des noyaux ayant le même Z mais des A différents.</p>

            <h4>2. Types de désintégrations</h4>
            <ul>
                <li><strong>Radioactivité α :</strong> Émission d'un noyau d'hélium ⁴He.</li>
                <li><strong>Radioactivité β⁻ :</strong> Transformation d'un neutron en proton avec émission d'un électron (⁰e⁻).</li>
                <li><strong>Radioactivité β⁺ :</strong> Transformation d'un proton en neutron avec émission d'un positron (⁰e⁺).</li>
                <li><strong>Désintégration γ :</strong> Libération d'énergie sous forme de rayonnement électromagnétique par un noyau excité.</li>
            </ul>

            <h4>3. Loi de décroissance</h4>
            <p>Le nombre de noyaux radioactifs N(t) restants à l'instant t est :</p>
            <div class="math-formula">N(t) = N₀ e^(-λt)</div>
            <p>où λ est la constante radioactive. La demi-vie t₁/₂ est la durée au bout de laquelle la moitié des noyaux initialement présents se sont désintégrés :</p>
            <div class="math-formula">t₁/₂ = ln(2) / λ</div>
        `,
        exercises: [
            {
                title: "Exercice 1 : Calcul de la demi-vie",
                statement: "La constante radioactive d'un isotope est λ = 0.0346 jour⁻¹. Déterminer sa demi-vie t₁/₂.",
                solution: "On applique la relation : t₁/₂ = ln(2) / λ.<br>t₁/₂ = 0.693 / 0.0346 ≈ 20 jours.<br>La demi-vie de cet isotope est de <strong>20 jours</strong>."
            }
        ],
        exams: [
            { title: "Session Ordinaire 2024 - PC (Exercice Physique Nucléaire)", type: "National", year: 2024 }
        ]
    },
    {
        id: "math-complexes",
        title: "Nombres Complexes",
        level: "2bac-sm",
        subject: "math",
        description: "Forme algébrique, représentation géométrique, forme trigonométrique, formule de Moivre et équations dans l'ensemble C.",
        courseContent: `
            <h4>1. Définition et Forme algébrique</h4>
            <p>L'ensemble ℂ contient un élément i tel que i² = -1. Tout nombre complexe z s'écrit de façon unique :</p>
            <div class="math-formula">z = a + ib</div>
            <p>Où a est la partie réelle Re(z) et b est la partie imaginaire Im(z).</p>

            <h4>2. Forme trigonométrique</h4>
            <p>Le module de z est |z| = √(a² + b²). L'argument θ de z vérifie cos(θ) = a/|z| et sin(θ) = b/|z|. On écrit z sous la forme :</p>
            <div class="math-formula">z = r(cos θ + i sin θ) = r e^(iθ)</div>

            <h4>3. Résolution d'équations du second degré</h4>
            <p>Dans ℂ, l'équation az² + bz + c = 0 (a ≠ 0) admet toujours des solutions. Si le discriminant Δ = b² - 4ac < 0, l'équation admet deux solutions complexes conjuguées :</p>
            <div class="math-formula">z₁ = (-b - i√-Δ) / 2a  et  z₂ = (-b + i√-Δ) / 2a</div>
        `,
        exercises: [
            {
                title: "Exercice 1 : Écriture sous forme trigonométrique",
                statement: "Mettre le nombre complexe <strong>z = 1 + i√3</strong> sous forme trigonométrique.",
                solution: "Calculons le module de z : |z| = √(1² + (√3)²) = √(1 + 3) = √4 = 2.<br>Cherchons un argument θ : cos(θ) = Re(z)/|z| = 1/2 et sin(θ) = Im(z)/|z| = √3/2.<br>Donc, θ = π/3 [2π].<br>La forme trigonométrique est : <strong>z = 2(cos(π/3) + i sin(π/3)) = 2e^(iπ/3)</strong>."
            }
        ],
        exams: [
            { title: "Session Ordinaire 2023 - Sciences Mathématiques", type: "National", year: 2023 }
        ]
    },
    {
        id: "pc-circuit-rc",
        title: "Circuits Électriques : Dipôle RC",
        level: "2bac-pc",
        subject: "pc",
        description: "Comportement du condensateur, réponse d'un dipôle RC à un échelon de tension, équation différentielle et constante de temps.",
        courseContent: `
            <h4>1. Le Condensateur</h4>
            <p>Un condensateur accumule des charges électriques. La relation entre sa charge q, sa capacité C et sa tension u_c est :</p>
            <div class="math-formula">q = C × u_c</div>
            <p>L'intensité du courant i traversant le condensateur est liée à la tension par :</p>
            <div class="math-formula">i = dq/dt = C × du_c/dt</div>

            <h4>2. Réponse à un échelon de tension (Charge)</h4>
            <p>L'équation différentielle régissant la tension u_c(t) lors de la charge sous une tension constante E est :</p>
            <div class="math-formula">u_c(t) + RC du_c/dt = E</div>
            <p>La solution de cette équation est :</p>
            <div class="math-formula">u_c(t) = E (1 - e^(-t/τ))</div>
            <p>où la constante de temps est <strong>τ = R × C</strong>.</p>
        `,
        exercises: [
            {
                title: "Exercice 1 : Détermination de la constante de temps",
                statement: "Un dipôle RC comprend un conducteur ohmique R = 10 kΩ et un condensateur C = 100 µF. Calculer la constante de temps τ.",
                solution: "Attention aux unités : R = 10 × 10³ Ω et C = 100 × 10⁻⁶ F.<br>τ = R × C = 10⁴ × 10⁻⁴ = 1 seconde.<br>La constante de temps est <strong>τ = 1 s</strong>."
            }
        ],
        exams: [
            { title: "Session Ordinaire 2024 - Sciences Physiques", type: "National", year: 2024 }
        ]
    },
    {
        id: "math-second-degre",
        title: "Équations du Second Degré",
        level: "tc",
        subject: "math",
        description: "Résolution dans R des équations du type ax² + bx + c = 0, étude du signe du trinôme et factorisation.",
        courseContent: `
            <h4>1. Discriminant</h4>
            <p>Pour résoudre ax² + bx + c = 0 (avec a ≠ 0), on calcule le discriminant :</p>
            <div class="math-formula">Δ = b² - 4ac</div>

            <h4>2. Solutions dans R</h4>
            <ul>
                <li><strong>Si Δ > 0 :</strong> Deux solutions réelles :<br>x₁ = (-b - √Δ)/2a  et  x₂ = (-b + √Δ)/2a</li>
                <li><strong>Si Δ = 0 :</strong> Une solution double :<br>x₀ = -b/2a</li>
                <li><strong>Si Δ < 0 :</strong> Pas de solution réelle.</li>
            </ul>

            <h4>3. Signe du trinôme</h4>
            <p>Le trinôme ax² + bx + c est toujours du signe de <strong>a</strong> à l'extérieur des racines (si elles existent) et du signe opposé de <strong>a</strong> entre les racines.</p>
        `,
        exercises: [
            {
                title: "Exercice 1 : Résoudre 2x² - 5x + 2 = 0",
                statement: "Résoudre dans ℝ l'équation : <strong>2x² - 5x + 2 = 0</strong>",
                solution: "Ici a = 2, b = -5, c = 2.<br>Δ = (-5)² - 4(2)(2) = 25 - 16 = 9.<br>Puisque Δ > 0, il y a deux solutions réelles :<br>x₁ = (5 - √9)/(2×2) = (5 - 3)/4 = 2/4 = 0.5.<br>x₂ = (5 + √9)/(2×2) = (5 + 3)/4 = 8/4 = 2.<br>L'ensemble des solutions est <strong>S = {0.5 ; 2}</strong>."
            }
        ],
        exams: [
            { title: "Examen Normalisé Local - Tronc Commun", type: "Régional", year: 2023 }
        ]
    }
];

// --- DATA SOURCE: QUIZZES ---
const quizzesData = [
    {
        id: "quiz-limits",
        title: "Quizz : Dérivation et Limites",
        description: "Testez votre agilité sur le calcul des limites complexes et la dérivation.",
        subject: "math",
        level: "2bac-pc",
        xp: 60,
        questions: [
            {
                question: "Quelle est la limite de sin(x)/x quand x tend vers 0 ?",
                options: ["0", "1", "+∞", "N'existe pas"],
                answer: 1,
                explanation: "Il s'agit d'une limite de référence : lim (x→0) sin(x)/x = 1. Géométriquement, cela exprime que la fonction sinus est localement assimilable à sa tangente y = x à l'origine."
            },
            {
                question: "Quelle est la dérivée de f(x) = ln(x) ?",
                options: ["eˣ", "1/x", "-1/x²", "x"],
                answer: 1,
                explanation: "La fonction logarithme népérien ln(x) est définie sur ]0, +∞[ et sa dérivée est 1/x."
            },
            {
                question: "Si f(x) = (2x - 1) / (x + 1), quelle est sa dérivée f'(x) ?",
                options: ["3 / (x + 1)²", "1 / (x + 1)²", "-3 / (x + 1)²", "3 / (x - 1)²"],
                answer: 0,
                explanation: "En appliquant la formule (u/v)' = (u'v - uv')/v² avec u=2x-1 (u'=2) et v=x+1 (v'=1) : f'(x) = [2(x+1) - (2x-1)(1)] / (x+1)² = [2x + 2 - 2x + 1] / (x+1)² = 3 / (x+1)²."
            },
            {
                question: "Si lim(x→x₀) f(x) = +∞ et lim(x→x₀) g(x) = -∞, quelle est la limite de f(x) + g(x) ?",
                options: ["0", "+∞", "Forme Indéterminée", "-∞"],
                answer: 2,
                explanation: "La somme '+∞' et '-∞' est une Forme Indéterminée (FI). La limite dépend du comportement précis de chaque fonction à l'approche de x₀."
            },
            {
                question: "Soit f continue sur [a,b] telle que f(a)×f(b) < 0. Alors l'équation f(x) = 0 admet :",
                options: ["Au moins une solution", "Aucune solution", "Exactement une solution", "Deux solutions"],
                answer: 0,
                explanation: "D'après le Théorème des Valeurs Intermédiaires (TVI), comme f est continue et change de signe sur [a,b] (f(a)×f(b) < 0), elle passe par 0 au moins une fois."
            }
        ]
    },
    {
        id: "quiz-decay",
        title: "Quizz : Noyaux et Radioactivité",
        description: "Validez vos connaissances sur le noyau atomique, les types d'ondes et la décroissance radioactive.",
        subject: "pc",
        level: "2bac-pc",
        xp: 80,
        questions: [
            {
                question: "Quel type de particule est émis lors d'une radioactivité de type α ?",
                options: ["Un électron", "Un positron", "Un noyau d'hélium 4", "Un photon"],
                answer: 2,
                explanation: "La radioactivité alpha correspond à l'émission d'un noyau d'hélium ⁴₂He composé de 2 protons et 2 neutrons."
            },
            {
                question: "Quelle relation relie la demi-vie t₁/₂ à la constante radioactive λ ?",
                options: ["t₁/₂ = λ / ln(2)", "t₁/₂ = ln(2) / λ", "t₁/₂ = ln(2) × λ", "t₁/₂ = 1 / λ"],
                answer: 1,
                explanation: "En posant N(t₁/₂) = N₀/2 dans la loi de décroissance N(t) = N₀ e^(-λt), on obtient e^(-λ t₁/₂) = 1/2, d'où -λ t₁/₂ = -ln(2) soit t₁/₂ = ln(2)/λ."
            },
            {
                question: "Quelle est la nature d'une onde sonore ?",
                options: ["Mécanique et transversale", "Électromagnétique", "Mécanique et longitudinale", "Gravitationnelle"],
                answer: 2,
                explanation: "Le son a besoin d'un milieu matériel élastique pour se propager (donc onde mécanique) et la déformation (zones de compression/dilatation) se fait parallèlement à la direction de propagation (donc onde longitudinale)."
            },
            {
                question: "Dans un circuit RC, quelle est l'expression de la constante de temps τ ?",
                options: ["τ = R / C", "τ = C / R", "τ = R × C", "τ = √(RC)"],
                answer: 2,
                explanation: "Par analyse dimensionnelle, le produit de la résistance par la capacité donne une grandeur homogène à un temps, soit τ = RC."
            }
        ]
    }
];

// --- STATE MANAGEMENT ---
let userState = {
    completedChapters: [], // IDs of mastered chapters
    completedQuizzes: {}, // { quizId: score }
    premiumUser: false,
    userName: "Élève",
    currentTab: "home"
};

// --- INITIALIZE APPLICATION ---
document.addEventListener("DOMContentLoaded", () => {
    // Load state from LocalStorage
    loadStateFromStorage();
    
    // Initial UI updates
    lucide.createIcons();
    initTheme();
    updateDashboardUI();
    renderChapters();
    renderQuizWelcomeSelector();
    
    // Register Event Listeners
    setupNavigation();
    setupFilters();
    setupModals();
    setupQuizEngine();
    setupPremiumCheckout();
    setupInteractiveTools();
});

// --- STATE STORAGE ---
function loadStateFromStorage() {
    const saved = localStorage.getItem("maths_physiques_state");
    if (saved) {
        try {
            userState = { ...userState, ...JSON.parse(saved) };
            if (userState.premiumUser) {
                document.querySelector(".user-profile").classList.add("premium-active");
                document.querySelector(".user-name").innerHTML = `Élève <i data-lucide="sparkles" style="width:12px;height:12px;color:#f43f5e;display:inline-block;vertical-align:middle;"></i>`;
                lucide.createIcons();
            }
        } catch (e) {
            console.error("Error parsing local state, resetting to default.", e);
        }
    }
}

function saveStateToStorage() {
    localStorage.setItem("maths_physiques_state", JSON.stringify(userState));
}

// --- DASHBOARD LOGIC ---
function updateDashboardUI() {
    // Counts
    document.getElementById("completedLessonsCount").textContent = userState.completedChapters.length;
    
    const quizzesTaken = Object.keys(userState.completedQuizzes).length;
    document.getElementById("quizzesTakenCount").textContent = quizzesTaken;
    
    if (quizzesTaken > 0) {
        const totalScore = Object.values(userState.completedQuizzes).reduce((sum, score) => sum + score, 0);
        const avg = Math.round(totalScore / quizzesTaken);
        document.getElementById("averageScoreText").textContent = `${avg}%`;
    } else {
        document.getElementById("averageScoreText").textContent = "0%";
    }

    // Activity List
    const activityList = document.getElementById("activityList");
    activityList.innerHTML = "";
    
    const activities = [];
    
    userState.completedChapters.forEach(chapId => {
        const chap = chaptersData.find(c => c.id === chapId);
        if (chap) {
            activities.push({
                type: "mastery",
                text: `Vous avez maîtrisé le chapitre : <strong>${chap.title}</strong>`,
                icon: "check"
            });
        }
    });
    
    Object.entries(userState.completedQuizzes).forEach(([quizId, score]) => {
        const quiz = quizzesData.find(q => q.id === quizId);
        if (quiz) {
            activities.push({
                type: "quiz",
                text: `Quizz complété : <strong>${quiz.title}</strong> avec un score de <strong>${score}%</strong>`,
                icon: "award"
            });
        }
    });
    
    if (userState.premiumUser) {
        activities.push({
            type: "premium",
            text: "<strong>Accès Premium activé !</strong> Bienvenue dans l'espace VIP.",
            icon: "sparkles"
        });
    }

    if (activities.length === 0) {
        activityList.innerHTML = `<li class="empty-activity">Aucune activité pour le moment. Commencez à lire un cours ou faites un quizz !</li>`;
    } else {
        // Show last 4 activities (reversed to show latest first)
        activities.reverse().slice(0, 4).forEach(act => {
            const li = document.createElement("li");
            li.innerHTML = `<i data-lucide="${act.icon}"></i> <span>${act.text}</span>`;
            activityList.appendChild(li);
        });
        lucide.createIcons();
    }
}

// Reset Dashboard Progress
document.getElementById("resetProgressBtn").addEventListener("click", () => {
    userState.completedChapters = [];
    userState.completedQuizzes = {};
    userState.premiumUser = false;
    
    // Reset User name representation
    document.querySelector(".user-profile").classList.remove("premium-active");
    document.querySelector(".user-name").textContent = "Élève";
    
    saveStateToStorage();
    updateDashboardUI();
    renderChapters();
    showToast("Statistiques réinitialisées avec succès.", false);
});

// --- CUSTOM TOAST NOTIFICATION ---
function showToast(message, isSuccess = true) {
    const toast = document.getElementById("toastNotification");
    const msgSpan = document.getElementById("toastMessage");
    const icon = document.getElementById("toastIcon");
    
    msgSpan.textContent = message;
    
    if (isSuccess) {
        toast.className = "toast-notification success-toast active";
        icon.setAttribute("data-lucide", "check-circle");
    } else {
        toast.className = "toast-notification active";
        icon.setAttribute("data-lucide", "info");
    }
    
    lucide.createIcons();
    
    setTimeout(() => {
        toast.classList.remove("active");
    }, 3500);
}

// --- THEME TOGGLING ---
function initTheme() {
    const themeBtn = document.getElementById("themeToggle");
    const darkIcon = themeBtn.querySelector(".dark-icon");
    const lightIcon = themeBtn.querySelector(".light-icon");
    
    // Check local storage or system preference
    const savedTheme = localStorage.getItem("maths_physiques_theme") || "dark";
    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
        darkIcon.style.display = "none";
        lightIcon.style.display = "block";
    }

    themeBtn.addEventListener("click", () => {
        const isLight = document.body.classList.toggle("light-theme");
        if (isLight) {
            localStorage.setItem("maths_physiques_theme", "light");
            darkIcon.style.display = "none";
            lightIcon.style.display = "block";
            showToast("Thème clair activé.", false);
        } else {
            localStorage.setItem("maths_physiques_theme", "dark");
            darkIcon.style.display = "block";
            lightIcon.style.display = "none";
            showToast("Thème sombre activé.", false);
        }
    });
}

// --- TAB NAVIGATION ---
function setupNavigation() {
    const navLinks = document.querySelectorAll(".nav-link");
    
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetTab = link.getAttribute("data-tab");
            switchTab(targetTab);
        });
    });

    // Handle branding/logo click to go home
    document.querySelector(".logo").addEventListener("click", () => {
        switchTab("home");
    });
    
    // Home Level buttons link to Course Tab with proper filter
    const levelBtns = document.querySelectorAll(".level-btn");
    levelBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const level = btn.getAttribute("data-level");
            document.getElementById("levelFilter").value = level;
            document.getElementById("levelFilter").dispatchEvent(new Event("change"));
            switchTab("courses");
        });
    });

    // Footer actions
    document.getElementById("footerMathsLink").addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("subjectFilter").value = "math";
        document.getElementById("subjectFilter").dispatchEvent(new Event("change"));
        switchTab("courses");
    });

    document.getElementById("footerPcLink").addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("subjectFilter").value = "pc";
        document.getElementById("subjectFilter").dispatchEvent(new Event("change"));
        switchTab("courses");
    });

    document.querySelectorAll("[data-level-footer]").forEach(fLink => {
        fLink.addEventListener("click", (e) => {
            e.preventDefault();
            const lvl = fLink.getAttribute("data-level-footer");
            document.getElementById("levelFilter").value = lvl;
            document.getElementById("levelFilter").dispatchEvent(new Event("change"));
            switchTab("courses");
        });
    });
}

function switchTab(tabId) {
    userState.currentTab = tabId;
    
    // Update menu buttons active state
    document.querySelectorAll(".nav-link").forEach(btn => {
        if (btn.getAttribute("data-tab") === tabId) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // Switch panels
    document.querySelectorAll(".tab-content").forEach(panel => {
        if (panel.id === `${tabId}-section`) {
            panel.classList.add("active");
        } else {
            panel.classList.remove("active");
        }
    });

    // Smooth scroll back to top of main view
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Global functions for inline links in footer / home
window.switchLevel = function(lvl) {
    document.getElementById("levelFilter").value = lvl;
    document.getElementById("levelFilter").dispatchEvent(new Event("change"));
    switchTab("courses");
};

window.switchSubject = function(subj) {
    document.getElementById("subjectFilter").value = subj;
    document.getElementById("subjectFilter").dispatchEvent(new Event("change"));
    switchTab("courses");
};

// --- FILTERS & COURSE RENDERER ---
function setupFilters() {
    const levelFilter = document.getElementById("levelFilter");
    const subjectFilter = document.getElementById("subjectFilter");
    const courseSearchInput = document.getElementById("courseSearchInput");
    
    // Quick Search from Hero
    const mainSearchInput = document.getElementById("mainSearchInput");
    const mainSearchBtn = document.getElementById("mainSearchBtn");

    const triggerSearch = () => {
        const val = mainSearchInput.value.trim();
        if (val) {
            courseSearchInput.value = val;
            levelFilter.value = "all";
            subjectFilter.value = "all";
            // trigger updates
            levelFilter.dispatchEvent(new Event("change"));
            switchTab("courses");
        }
    };

    mainSearchBtn.addEventListener("click", triggerSearch);
    mainSearchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") triggerSearch();
    });

    // Handle filter changes
    const applyFilters = () => {
        const activeLevel = levelFilter.value;
        const activeSubject = subjectFilter.value;
        const searchQuery = courseSearchInput.value.toLowerCase().trim();

        // Update indicators labels
        document.getElementById("activeLevelLabel").textContent = levelFilter.options[levelFilter.selectedIndex].text;
        document.getElementById("activeSubjectLabel").textContent = subjectFilter.options[subjectFilter.selectedIndex].text;

        renderChapters(activeLevel, activeSubject, searchQuery);
    };

    levelFilter.addEventListener("change", applyFilters);
    subjectFilter.addEventListener("change", applyFilters);
    courseSearchInput.addEventListener("input", applyFilters);
}

function renderChapters(level = "2bac-pc", subject = "all", query = "") {
    const container = document.getElementById("chaptersContainer");
    container.innerHTML = "";

    const filtered = chaptersData.filter(chap => {
        // level filter
        const matchLevel = (level === "all" || chap.level === level);
        // subject filter
        const matchSubject = (subject === "all" || chap.subject === subject);
        // search query
        const matchQuery = (query === "" || 
            chap.title.toLowerCase().includes(query) || 
            chap.description.toLowerCase().includes(query)
        );

        return matchLevel && matchSubject && matchQuery;
    });

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-chapters-fallback">
                <i data-lucide="book-x" style="width: 48px; height: 48px; color: var(--text-muted);"></i>
                <h3>Aucun chapitre trouvé</h3>
                <p>Essayez de modifier vos critères de filtrage ou effectuez une autre recherche.</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    filtered.forEach(chap => {
        const isMastered = userState.completedChapters.includes(chap.id);
        const card = document.createElement("div");
        card.className = `chapter-card ${chap.subject === "math" ? "math-theme" : "pc-theme"}`;
        
        card.innerHTML = `
            <div class="chapter-header">
                <span class="chapter-subject-badge ${chap.subject === "math" ? "math-badge" : "pc-badge"}">
                    ${chap.subject === "math" ? "Maths" : "Physique - Chimie"}
                </span>
                ${isMastered ? '<span class="mastered-badge"><i data-lucide="check-circle-2"></i> Maîtrisé</span>' : ''}
            </div>
            <div>
                <h4>${chap.title}</h4>
                <p>${chap.description}</p>
            </div>
            <div class="chapter-footer">
                <div class="chapter-resources-info">
                    <span><i data-lucide="file-text"></i> ${chap.exercises.length} Exos</span>
                    <span><i data-lucide="award"></i> ${chap.exams.length} Examens</span>
                </div>
                <button class="read-btn" title="Explorer le chapitre" onclick="openChapterModal('${chap.id}')">
                    <i data-lucide="arrow-right"></i>
                </button>
            </div>
        `;
        
        container.appendChild(card);
    });

    lucide.createIcons();
}

// --- LESSON DETAIL MODAL (MODAL) ---
let currentOpenChapterId = null;

function setupModals() {
    const modal = document.getElementById("lessonModal");
    const closeBtn = document.getElementById("modalCloseBtn");
    
    // Close modal event
    closeBtn.addEventListener("click", closeChapterModal);
    modal.querySelector(".modal-backdrop").addEventListener("click", closeChapterModal);

    // Modal Tabs
    const tabBtns = document.querySelectorAll("[data-modal-tab]");
    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetTab = btn.getAttribute("data-modal-tab");
            
            // Set active buttons
            tabBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            // Set active body content
            document.querySelectorAll(".modal-tab-content").forEach(content => {
                if (content.id === targetTab) {
                    content.classList.add("active");
                } else {
                    content.classList.remove("active");
                }
            });
        });
    });

    // Mark as mastered checkbox
    const masteryCheckbox = document.getElementById("markAsReadCheckbox");
    masteryCheckbox.addEventListener("change", () => {
        if (!currentOpenChapterId) return;

        const idx = userState.completedChapters.indexOf(currentOpenChapterId);
        if (masteryCheckbox.checked) {
            if (idx === -1) {
                userState.completedChapters.push(currentOpenChapterId);
                showToast("Chapitre marqué comme maîtrisé ! +15 XP", true);
            }
        } else {
            if (idx !== -1) {
                userState.completedChapters.splice(idx, 1);
                showToast("Chapitre retiré de vos maîtrisés.", false);
            }
        }
        
        saveStateToStorage();
        updateDashboardUI();
        renderChapters(
            document.getElementById("levelFilter").value,
            document.getElementById("subjectFilter").value,
            document.getElementById("courseSearchInput").value
        );
    });

    // Mock PDF download
    document.getElementById("pdfDownloadBtn").addEventListener("click", simulateDownload);
}

window.openChapterModal = function(chapterId) {
    const chap = chaptersData.find(c => c.id === chapterId);
    if (!chap) return;

    currentOpenChapterId = chapterId;
    
    // Reset Modal Tab views to "Course Summary" by default
    document.querySelectorAll("[data-modal-tab]").forEach(btn => btn.classList.remove("active"));
    document.querySelector('[data-modal-tab="course-tab"]').classList.add("active");
    
    document.querySelectorAll(".modal-tab-content").forEach(c => c.classList.remove("active"));
    document.getElementById("course-tab").classList.add("active");

    // Populate data
    document.getElementById("modalBadge").className = `modal-badge ${chap.subject === "math" ? "math-badge" : "pc-badge"}`;
    document.getElementById("modalBadge").textContent = chap.subject === "math" ? "Mathématiques" : "Physique - Chimie";
    document.getElementById("modalTitle").textContent = chap.title;
    
    // Course HTML Content
    document.getElementById("modalCourseContent").innerHTML = chap.courseContent;
    
    // Exercises Accordion
    const exercisesContainer = document.getElementById("modalExercisesContent");
    exercisesContainer.innerHTML = "";
    
    if (chap.exercises.length === 0) {
        exercisesContainer.innerHTML = `<p class="text-muted">Aucun exercice disponible pour ce chapitre.</p>`;
    } else {
        chap.exercises.forEach((ex, index) => {
            const exDiv = document.createElement("div");
            exDiv.className = "exercise-item";
            exDiv.innerHTML = `
                <div class="ex-header" onclick="toggleExerciseAccordion(${index})">
                    <span class="ex-title">${ex.title}</span>
                    <button class="ex-toggle-btn"><i data-lucide="chevron-down" id="ex-arrow-${index}"></i></button>
                </div>
                <div class="ex-body" id="ex-body-${index}" style="display: none;">
                    <p class="ex-statement">${ex.statement}</p>
                    <div class="ex-solution">
                        <h5><i data-lucide="check-circle" style="width:14px;height:14px;display:inline-block;vertical-align:middle;"></i> Solution Corrigée</h5>
                        <p>${ex.solution}</p>
                    </div>
                </div>
            `;
            exercisesContainer.appendChild(exDiv);
        });
    }

    // Exams
    const examsContainer = document.getElementById("modalExamsContent");
    examsContainer.innerHTML = "";
    if (chap.exams.length === 0) {
        examsContainer.innerHTML = `<p class="text-muted">Aucune archive d'examen pour ce chapitre.</p>`;
    } else {
        chap.exams.forEach(exam => {
            const examDiv = document.createElement("div");
            examDiv.className = "exam-item";
            
            let downloadAction = `simulateDownloadExam('${exam.title}')`;
            if (exam.file) {
                downloadAction = `downloadRealFile('${exam.file}', '${exam.title}')`;
            }
            
            examDiv.innerHTML = `
                <div class="exam-details">
                    <h5>${exam.type === "Devoir Surveillé" ? exam.title : `Examen ${exam.type} (${exam.year})`}</h5>
                    <p>${exam.description || 'Sujet officiel complet + Corrigé type rédigé par des inspecteurs.'}</p>
                </div>
                <button class="btn btn-secondary" onclick="${downloadAction}">
                    <i data-lucide="download"></i> PDF
                </button>
            `;
            examsContainer.appendChild(examDiv);
        });
    }

    // Mastered Checkbox state
    const mastered = userState.completedChapters.includes(chapterId);
    document.getElementById("markAsReadCheckbox").checked = mastered;

    // Show modal
    document.getElementById("lessonModal").classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent background scroll
    
    lucide.createIcons();
};

function closeChapterModal() {
    document.getElementById("lessonModal").classList.remove("active");
    document.body.style.overflow = ""; // Re-enable background scroll
    currentOpenChapterId = null;
}

window.toggleExerciseAccordion = function(index) {
    const body = document.getElementById(`ex-body-${index}`);
    const arrow = document.getElementById(`ex-arrow-${index}`);
    
    if (body.style.display === "none") {
        body.style.display = "block";
        arrow.setAttribute("data-lucide", "chevron-up");
    } else {
        body.style.display = "none";
        arrow.setAttribute("data-lucide", "chevron-down");
    }
    lucide.createIcons();
};

window.simulateDownload = function() {
    showToast("Téléchargement du cours PDF démarré...", false);
    setTimeout(() => {
        showToast("Fichier PDF téléchargé avec succès !", true);
    }, 2000);
};

window.simulateDownloadExam = function(title) {
    showToast(`Téléchargement de : ${title}...`, false);
    setTimeout(() => {
        showToast("Sujet & Corrigé téléchargés !", true);
    }, 2000);
};

window.downloadRealFile = function(fileUrl, title) {
    showToast(`Téléchargement de : ${title}...`, false);
    setTimeout(() => {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileUrl.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToast("Fichier téléchargé avec succès !", true);
    }, 1500);
};

// --- INTERACTIVE QUIZ ENGINE ---
let activeQuiz = null;
let currentQuestionIndex = 0;
let quizScore = 0; // Number of correct answers
let selectedOptionIndex = null;

function renderQuizWelcomeSelector() {
    const grid = document.getElementById("quizSelectorGrid");
    grid.innerHTML = "";

    quizzesData.forEach(quiz => {
        const completedScore = userState.completedQuizzes[quiz.id];
        const card = document.createElement("div");
        card.className = "quiz-card";
        card.addEventListener("click", () => startQuiz(quiz.id));

        card.innerHTML = `
            <div>
                <h3>${quiz.title}</h3>
                <p>${quiz.description}</p>
            </div>
            <div class="quiz-meta">
                <div class="quiz-meta-info">
                    <span><i data-lucide="help-circle"></i> ${quiz.questions.length} Questions</span>
                    <span><i data-lucide="zap"></i> +${quiz.xp} XP</span>
                </div>
                <div class="quiz-action-link">
                    ${completedScore !== undefined ? `Fait (${completedScore}%)` : 'Lancer <i data-lucide="chevron-right"></i>'}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    lucide.createIcons();
}

function setupQuizEngine() {
    document.getElementById("backToQuizzesBtn").addEventListener("click", quitQuiz);
    
    document.getElementById("quizSkipBtn").addEventListener("click", () => {
        // Skips question, counts as wrong
        showFeedback(false);
    });

    document.getElementById("quizNextBtn").addEventListener("click", () => {
        if (currentQuestionIndex < activeQuiz.questions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        } else {
            showQuizResults();
        }
    });

    // Actions on results screen
    document.getElementById("retryQuizBtn").addEventListener("click", () => {
        startQuiz(activeQuiz.id);
    });
    
    document.getElementById("finishQuizBtn").addEventListener("click", quitQuiz);
}

function startQuiz(quizId) {
    const quiz = quizzesData.find(q => q.id === quizId);
    if (!quiz) return;

    activeQuiz = quiz;
    currentQuestionIndex = 0;
    quizScore = 0;
    selectedOptionIndex = null;

    // Switch views
    document.getElementById("quizWelcomePanel").style.display = "none";
    document.getElementById("quizResultPanel").style.display = "none";
    document.getElementById("quizScreenPanel").style.display = "block";

    showQuestion();
}

function showQuestion() {
    const q = activeQuiz.questions[currentQuestionIndex];
    selectedOptionIndex = null;

    // Reset controls
    document.getElementById("quizNextBtn").disabled = true;
    document.getElementById("quizSkipBtn").style.display = "inline-flex";
    document.getElementById("quizFeedbackBox").style.display = "none";

    // Counter & Progress
    const totalQ = activeQuiz.questions.length;
    document.getElementById("quizCounterText").textContent = `Question ${currentQuestionIndex + 1}/${totalQ}`;
    
    const percentage = Math.round((currentQuestionIndex / totalQ) * 100);
    document.getElementById("quizProgressBar").style.style = `width: ${percentage}%`;
    document.getElementById("quizProgressBar").style.width = `${percentage}%`;

    // Text & formulas
    document.getElementById("quizQuestionText").textContent = q.question;
    
    // Options
    const optionsList = document.getElementById("quizOptionsList");
    optionsList.innerHTML = "";

    q.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = opt;
        btn.addEventListener("click", () => selectOption(idx));
        optionsList.appendChild(btn);
    });
}

function selectOption(idx) {
    if (selectedOptionIndex !== null) return; // Prevent clicking multiple options after selection

    selectedOptionIndex = idx;
    const q = activeQuiz.questions[currentQuestionIndex];
    const isCorrect = (idx === q.answer);

    // Color options
    const optionBtns = document.querySelectorAll(".option-btn");
    optionBtns.forEach((btn, index) => {
        if (index === q.answer) {
            btn.classList.add("correct");
        } else if (index === idx) {
            btn.classList.add("incorrect");
        }
    });

    if (isCorrect) {
        quizScore++;
    }

    showFeedback(isCorrect);
}

function showFeedback(isCorrect) {
    const q = activeQuiz.questions[currentQuestionIndex];
    const fbBox = document.getElementById("quizFeedbackBox");
    const fbTitle = document.getElementById("feedbackTitleText");
    const fbIcon = document.getElementById("feedbackIcon");
    const fbDesc = document.getElementById("feedbackExplanationText");

    if (isCorrect) {
        fbBox.className = "quiz-feedback-box correct-box";
        fbTitle.textContent = "Correct !";
        fbIcon.setAttribute("data-lucide", "check-circle-2");
    } else {
        fbBox.className = "quiz-feedback-box incorrect-box";
        fbTitle.textContent = "Explication :";
        fbIcon.setAttribute("data-lucide", "help-circle");
    }

    fbDesc.innerHTML = q.explanation;
    fbBox.style.display = "block";
    lucide.createIcons();

    // Toggle navigation
    document.getElementById("quizSkipBtn").style.display = "none";
    document.getElementById("quizNextBtn").disabled = false;
}

function showQuizResults() {
    document.getElementById("quizScreenPanel").style.display = "none";
    
    const resultPanel = document.getElementById("resultPanel");
    const total = activeQuiz.questions.length;
    const scorePercent = Math.round((quizScore / total) * 100);

    // Save score if better or new
    const prevScore = userState.completedQuizzes[activeQuiz.id] || 0;
    if (scorePercent > prevScore) {
        userState.completedQuizzes[activeQuiz.id] = scorePercent;
        saveStateToStorage();
        updateDashboardUI();
    }

    // Set Circle Gauge
    document.getElementById("resultScorePercentage").textContent = `${scorePercent}%`;
    const circle = document.getElementById("resultCircleStroke");
    const strokeDash = `${scorePercent}, 100`;
    circle.setAttribute("stroke-dasharray", strokeDash);
    
    // Set Breakdown
    document.getElementById("resultCorrectCount").textContent = `${quizScore}/${total}`;
    document.getElementById("resultXpText").textContent = `+${Math.round(activeQuiz.xp * (quizScore/total))} XP`;

    // Title custom evaluation
    const resultTitle = document.getElementById("resultTitle");
    if (scorePercent === 100) {
        resultTitle.textContent = "Excellent ! Score Parfait.";
    } else if (scorePercent >= 70) {
        resultTitle.textContent = "Très Bien ! Objectif atteint.";
    } else if (scorePercent >= 50) {
        resultTitle.textContent = "Pas mal, continuez vos efforts !";
    } else {
        resultTitle.textContent = "À revoir. Relisez le cours.";
    }

    document.getElementById("quizResultPanel").style.display = "block";
    showToast(`Quizz terminé ! Score : ${scorePercent}%`, true);
}

function quitQuiz() {
    activeQuiz = null;
    document.getElementById("quizScreenPanel").style.display = "none";
    document.getElementById("quizResultPanel").style.display = "none";
    document.getElementById("quizWelcomePanel").style.display = "block";
    renderQuizWelcomeSelector();
}

// --- PREMIUM CHECKOUT SYSTEM ---
function setupPremiumCheckout() {
    const modal = document.getElementById("checkoutModal");
    const backdrop = document.getElementById("checkoutModalBackdrop");
    const closeBtn = document.getElementById("checkoutCloseBtn");
    
    // Attach buttons
    document.getElementById("subSemestrielBtn").addEventListener("click", () => {
        openCheckoutModal("Semestriel", "149 DH");
    });
    
    document.getElementById("subAnnuelBtn").addEventListener("click", () => {
        openCheckoutModal("Annuel", "249 DH");
    });

    closeBtn.addEventListener("click", closeCheckoutModal);
    backdrop.addEventListener("click", closeCheckoutModal);

    // Payment methods toggling
    const pmOptions = document.querySelectorAll(".pm-option");
    pmOptions.forEach(opt => {
        opt.addEventListener("click", () => {
            pmOptions.forEach(o => o.classList.remove("active"));
            opt.classList.add("active");
            
            // Check radio button
            const radio = opt.querySelector('input[type="radio"]');
            radio.checked = true;
        });
    });

    // Form submission
    const form = document.getElementById("paymentForm");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const submitBtn = document.getElementById("paySubmitBtn");
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i data-lucide="loader" class="spin-animation"></i> Traitement sécurisé en cours...`;
        lucide.createIcons();

        setTimeout(() => {
            // Success State
            userState.premiumUser = true;
            saveStateToStorage();
            updateDashboardUI();
            
            // UI representation header
            document.querySelector(".user-profile").classList.add("premium-active");
            document.querySelector(".user-name").innerHTML = `Élève <i data-lucide="sparkles" style="width:12px;height:12px;color:#f43f5e;display:inline-block;vertical-align:middle;"></i>`;
            lucide.createIcons();

            closeCheckoutModal();
            showToast("Félicitations ! Votre accès Premium est maintenant actif !", true);

            // Re-render tabs to show premium activation effects if any
            switchTab("home");

            // Reset Form
            form.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }, 2500);
    });
}

function openCheckoutModal(planName, priceText) {
    document.getElementById("checkoutPlanName").textContent = planName;
    document.getElementById("checkoutPlanPrice").textContent = priceText;
    
    document.getElementById("checkoutModal").classList.add("active");
    document.body.style.overflow = "hidden";
    lucide.createIcons();
}

function closeCheckoutModal() {
    document.getElementById("checkoutModal").classList.remove("active");
    document.body.style.overflow = "";
}

// Add CSS keyframes for rotation in CSS dynamically if not present
const styleSheet = document.styleSheets[0];
try {
    styleSheet.insertRule(`
        @keyframes spin-animation {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `, styleSheet.cssRules.length);
    styleSheet.insertRule(`
        .spin-animation {
            animation: spin-animation 1s linear infinite;
        }
    `, styleSheet.cssRules.length);
} catch (e) {
    console.log("Dynamically added CSS rule error: " + e);
}

// --- INTERACTIVE MATHS & PHYSICS TOOLS ---
function setupInteractiveTools() {
    // 1. Maths Tool: Delta Calculator
    const btnCalcDelta = document.getElementById("btn-calc-delta");
    if (btnCalcDelta) {
        btnCalcDelta.addEventListener("click", () => {
            const a = parseFloat(document.getElementById("calc-a").value);
            const b = parseFloat(document.getElementById("calc-b").value);
            const c = parseFloat(document.getElementById("calc-c").value);
            const resultDiv = document.getElementById("delta-result");

            if (isNaN(a) || isNaN(b) || isNaN(c)) {
                resultDiv.innerHTML = `<p style="color: var(--accent);">Veuillez entrer des coefficients valides.</p>`;
                resultDiv.style.display = "block";
                return;
            }

            if (a === 0) {
                const x = -c / b;
                resultDiv.innerHTML = `
                    <div class="result-title">Équation du 1er degré (a = 0) :</div>
                    <div class="result-value">${b}x + ${c} = 0</div>
                    <div class="result-explanation">Solution unique : <strong>x = ${x.toFixed(3)}</strong></div>
                `;
            } else {
                const delta = b * b - 4 * a * c;
                let html = `
                    <div class="result-title">Résultats :</div>
                    <div class="result-value">Δ = b² - 4ac = (${b})² - 4(${a})(${c}) = <strong>${delta}</strong></div>
                `;

                if (delta > 0) {
                    const x1 = (-b - Math.sqrt(delta)) / (2 * a);
                    const x2 = (-b + Math.sqrt(delta)) / (2 * a);
                    html += `
                        <div class="result-explanation">
                            <span style="color: var(--success); font-weight: 600;">Δ > 0 : Deux solutions réelles distinctes</span><br>
                            x₁ = <strong>${x1.toFixed(3)}</strong><br>
                            x₂ = <strong>${x2.toFixed(3)}</strong><br>
                            Factorisation : <strong>${a}(x - ${x1 >= 0 ? x1.toFixed(2) : '('+x1.toFixed(2)+')'})(x - ${x2 >= 0 ? x2.toFixed(2) : '('+x2.toFixed(2)+')'})</strong>
                        </div>
                    `;
                } else if (delta === 0) {
                    const x0 = -b / (2 * a);
                    html += `
                        <div class="result-explanation">
                            <span style="color: var(--secondary); font-weight: 600;">Δ = 0 : Une solution réelle double</span><br>
                            x₀ = <strong>${x0.toFixed(3)}</strong><br>
                            Factorisation : <strong>${a}(x - ${x0 >= 0 ? x0.toFixed(2) : '('+x0.toFixed(2)+')'})²</strong>
                        </div>
                    `;
                } else {
                    const realPart = (-b / (2 * a)).toFixed(3);
                    const imagPart = (Math.sqrt(-delta) / (2 * a)).toFixed(3);
                    html += `
                        <div class="result-explanation">
                            <span style="color: var(--accent); font-weight: 600;">Δ < 0 : Pas de solution réelle</span> (Deux solutions complexes conjuguées)<br>
                            z₁ = <strong>${realPart} - i${Math.abs(imagPart)}</strong><br>
                            z₂ = <strong>${realPart} + i${Math.abs(imagPart)}</strong>
                        </div>
                    `;
                }
                resultDiv.innerHTML = html;
            }
            resultDiv.style.display = "block";
        });
    }

    // 2. Physics Tool: Wave Velocity & Delay Calculator
    const tabCalcV = document.getElementById("tab-calc-v");
    const tabCalcTau = document.getElementById("tab-calc-tau");
    const fieldT = document.getElementById("field-t");
    const fieldV = document.getElementById("field-v");
    const btnCalcWave = document.getElementById("btn-calc-wave");
    const resultWaveDiv = document.getElementById("wave-result");

    let currentMode = "v";

    if (tabCalcV && tabCalcTau) {
        tabCalcV.addEventListener("click", () => {
            currentMode = "v";
            tabCalcV.classList.add("active");
            tabCalcTau.classList.remove("active");
            fieldT.style.display = "block";
            fieldV.style.display = "none";
            resultWaveDiv.style.display = "none";
        });

        tabCalcTau.addEventListener("click", () => {
            currentMode = "tau";
            tabCalcTau.classList.add("active");
            tabCalcV.classList.remove("active");
            fieldT.style.display = "none";
            fieldV.style.display = "block";
            resultWaveDiv.style.display = "none";
        });
    }

    if (btnCalcWave) {
        btnCalcWave.addEventListener("click", () => {
            const d = parseFloat(document.getElementById("wave-d").value);
            
            if (isNaN(d) || d <= 0) {
                resultWaveDiv.innerHTML = `<p style="color: var(--accent);">Veuillez entrer une distance d > 0.</p>`;
                resultWaveDiv.style.display = "block";
                return;
            }

            if (currentMode === "v") {
                const t = parseFloat(document.getElementById("wave-t").value);
                if (isNaN(t) || t <= 0) {
                    resultWaveDiv.innerHTML = `<p style="color: var(--accent);">Veuillez entrer une durée Δt > 0.</p>`;
                    resultWaveDiv.style.display = "block";
                    return;
                }
                const v = d / t;
                resultWaveDiv.innerHTML = `
                    <div class="result-title">Résultat :</div>
                    <div class="result-value">v = d / Δt = ${d} / ${t} = <strong>${v.toFixed(3)} m/s</strong></div>
                    <div class="result-explanation">La célérité de l'onde est de <strong>${v.toFixed(2)} m/s</strong>. En km/h : <strong>${(v * 3.6).toFixed(2)} km/h</strong>.</div>
                `;
            } else {
                const v = parseFloat(document.getElementById("wave-v").value);
                if (isNaN(v) || v <= 0) {
                    resultWaveDiv.innerHTML = `<p style="color: var(--accent);">Veuillez entrer une célérité v > 0.</p>`;
                    resultWaveDiv.style.display = "block";
                    return;
                }
                const tau = d / v;
                resultWaveDiv.innerHTML = `
                    <div class="result-title">Résultat :</div>
                    <div class="result-value">τ = d / v = ${d} / ${v} = <strong>${tau.toFixed(3)} s</strong></div>
                    <div class="result-explanation">Le retard temporel τ est de <strong>${(tau * 1000).toFixed(2)} ms</strong>.</div>
                `;
            }
            resultWaveDiv.style.display = "block";
        });
    }
}
