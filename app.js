/* ==========================================================================
   APP.JS - MATHS ET PHYSIQUES
   Logic: Navigation, Dynamic Cards, Interactive Quizzes, LocalStorage,
          Simulated Payments, Custom Toast and Theme Toggling.
   ========================================================================== */

// --- DATA SOURCE: CHAPTERS ---
const chaptersData = [
    {
        id: "math-lim-cont",
        title: "Limites et continuité",
        level: "2bac-pc",
        subject: "math",
        description: "Étude des limites, continuité d'une fonction numérique, Théorème des Valeurs Intermédiaires (TVI) et fonctions réciproques.",
        courseContent: `
<!-- TABLE OF CONTENTS -->
  <div class="toc reveal">
    <div class="toc-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg> Sommaire</div>
    <ol class="toc-list">
      <li><a href="#s1"><span class="toc-num">I</span> Opérations sur les limites</a></li>
      <li><a href="#s2"><span class="toc-num">II</span> Formes indéterminées</a></li>
      <li><a href="#s3"><span class="toc-num">III</span> Limites et ordre</a></li>
      <li><a href="#s4"><span class="toc-num">IV</span> Astuces des limites</a></li>
      <li><a href="#s5"><span class="toc-num">V</span> Continuité</a></li>
      <li><a href="#s6"><span class="toc-num">VI</span> Théorème des valeurs intermédiaires</a></li>
      <li><a href="#s7"><span class="toc-num">VII</span> Fonction réciproque, racine d'ordre n et puissance rationnelle</a></li>
    </ol>
  </div>

  <!-- ═══════════════════════════════════════════
       SECTION I — Opérations sur les limites
       ═══════════════════════════════════════════ -->
  <div class="cours-section reveal" id="s1">
    <span class="section-label">Section I</span>
    <h2 class="section-heading">Opérations sur les limites</h2>

    <!-- SOMME -->
    <h3 class="sub-heading">1. Limite de la somme de deux fonctions</h3>
    <div class="math-table-wrap">
      <table class="math-table">
        <tr>
          <th>\( \displaystyle\lim_{x\to x_0} f(x) \)</th>
          <td>\( \ell \)</td><td>\( \ell \)</td><td>\( \ell \)</td>
          <td>\( -\infty \)</td><td>\( -\infty \)</td>
          <td>\( +\infty \)</td><td>\( +\infty \)</td>
        </tr>
        <tr>
          <th>\( \displaystyle\lim_{x\to x_0} g(x) \)</th>
          <td>\( \ell' \)</td><td>\( +\infty \)</td><td>\( -\infty \)</td>
          <td>\( +\infty \)</td><td>\( -\infty \)</td>
          <td>\( +\infty \)</td><td>\( -\infty \)</td>
        </tr>
        <tr>
          <th>\( \displaystyle\lim_{x\to x_0} [f(x)+g(x)] \)</th>
          <td>\( \ell+\ell' \)</td><td>\( +\infty \)</td><td>\( -\infty \)</td>
          <td class="fi-cell">F.I.</td><td>\( -\infty \)</td>
          <td>\( +\infty \)</td><td class="fi-cell">F.I.</td>
        </tr>
      </table>
    </div>

    <!-- PRODUIT -->
    <h3 class="sub-heading">2. Limite du produit de deux fonctions</h3>
    <div class="math-table-wrap">
      <table class="math-table">
        <tr>
          <th>\( \displaystyle\lim_{x\to x_0} f(x) \)</th>
          <td>\( \ell \)</td>
          <td colspan="2">\( \ell > 0 \)</td>
          <td colspan="2">\( \ell < 0 \)</td>
          <td>\( -\infty \)</td><td>\( -\infty \)</td>
          <td>\( +\infty \)</td>
          <td>\( 0 \)</td>
        </tr>
        <tr>
          <th>\( \displaystyle\lim_{x\to x_0} g(x) \)</th>
          <td>\( \ell' \)</td>
          <td>\( +\infty \)</td><td>\( -\infty \)</td>
          <td>\( +\infty \)</td><td>\( -\infty \)</td>
          <td>\( +\infty \)</td><td>\( -\infty \)</td>
          <td>\( +\infty \)</td>
          <td>\( \pm\infty \)</td>
        </tr>
        <tr>
          <th>\( \displaystyle\lim_{x\to x_0} [f(x)\times g(x)] \)</th>
          <td>\( \ell\times\ell' \)</td>
          <td>\( +\infty \)</td><td>\( -\infty \)</td>
          <td>\( -\infty \)</td><td>\( +\infty \)</td>
          <td>\( -\infty \)</td><td>\( +\infty \)</td>
          <td>\( +\infty \)</td>
          <td class="fi-cell">F.I.</td>
        </tr>
      </table>
    </div>

    <!-- QUOTIENT -->
    <h3 class="sub-heading">3. Limite du quotient de deux fonctions</h3>
    <div class="math-table-wrap">
      <table class="math-table">
        <tr>
          <th>\( \displaystyle\lim_{x\to x_0} f(x) \)</th>
          <td>\( \ell \)</td><td>\( \ell \)</td>
          <td colspan="2">\( \ell > 0 \)</td>
          <td colspan="2">\( \ell < 0 \)</td>
          <td>\( -\infty \)</td><td>\( -\infty \)</td>
          <td>\( +\infty \)</td><td>\( +\infty \)</td>
          <td>\( 0 \)</td>
          <td>\( \pm\infty \)</td>
        </tr>
        <tr>
          <th>\( \displaystyle\lim_{x\to x_0} g(x) \)</th>
          <td>\( \ell'\neq 0 \)</td><td>\( \pm\infty \)</td>
          <td>\( 0^+ \)</td><td>\( 0^- \)</td>
          <td>\( 0^+ \)</td><td>\( 0^- \)</td>
          <td>\( 0^+ \)</td><td>\( 0^- \)</td>
          <td>\( 0^+ \)</td><td>\( 0^- \)</td>
          <td>\( 0 \)</td>
          <td>\( \pm\infty \)</td>
        </tr>
        <tr>
          <th>\( \displaystyle\lim_{x\to x_0} \dfrac{f(x)}{g(x)} \)</th>
          <td>\( \dfrac{\ell}{\ell'} \)</td><td>\( 0 \)</td>
          <td>\( +\infty \)</td><td>\( -\infty \)</td>
          <td>\( -\infty \)</td><td>\( +\infty \)</td>
          <td>\( -\infty \)</td><td>\( +\infty \)</td>
          <td>\( +\infty \)</td><td>\( -\infty \)</td>
          <td class="fi-cell">F.I.</td>
          <td class="fi-cell">F.I.</td>
        </tr>
      </table>
    </div>
  </div>

  <!-- ═══════════════════════════════════════════
       SECTION II — Formes indéterminées
       ═══════════════════════════════════════════ -->
  <div class="cours-section reveal" id="s2">
    <span class="section-label gold-label">Section II</span>
    <h2 class="section-heading">Formes indéterminées</h2>

    <div class="box box-fi">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg> Les 4 formes indéterminées</div>
      <p>Les formes suivantes ne permettent pas de conclure directement sur la limite. Il faut lever l'indétermination :</p>
      <div style="display:flex; flex-wrap:wrap; gap:20px; justify-content:center; margin-top:14px; font-size:1.15rem;">
        <span>\( 0 \times \infty \)</span>
        <span>\( \dfrac{\infty}{\infty} \)</span>
        <span>\( \dfrac{0}{0} \)</span>
        <span>\( +\infty - \infty \)</span>
      </div>
    </div>

    <div class="box box-rem">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> Remarque</div>
      <p>Pour lever ces formes indéterminées, on utilise les techniques présentées dans la section <a href="#s4" style="color:var(--teal);font-weight:600;">IV — Astuces des limites</a>.</p>
    </div>
  </div>

  <!-- ═══════════════════════════════════════════
       SECTION III — Limites et ordre
       ═══════════════════════════════════════════ -->
  <div class="cours-section reveal" id="s3">
    <span class="section-label blue-label">Section III</span>
    <h2 class="section-heading">Limites <em>&</em> ordre</h2>

    <div class="grid-2x2">
      <div class="box box-thm">
        <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Théorème des gendarmes</div>
        <p>Si \( u(x) \leq f(x) \leq v(x) \) et \( \displaystyle\lim_{x\to x_0} u(x) = \lim_{x\to x_0} v(x) = \ell \), alors :</p>
        <p style="text-align:center; margin-top:8px; font-size:1.05rem; font-weight:600; color:var(--teal);">
          \( \displaystyle\lim_{x\to x_0} f(x) = \ell \)
        </p>
      </div>
      <div class="box box-thm">
        <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Variante avec valeur absolue</div>
        <p>Si \( |f(x) - \ell| \leq u(x) \) et \( \displaystyle\lim_{x\to x_0} u(x) = 0 \), alors :</p>
        <p style="text-align:center; margin-top:8px; font-size:1.05rem; font-weight:600; color:var(--teal);">
          \( \displaystyle\lim_{x\to x_0} f(x) = \ell \)
        </p>
      </div>
      <div class="box box-prop">
        <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Comparaison pour −∞</div>
        <p>Si \( f(x) \leq v(x) \) et \( \displaystyle\lim_{x\to x_0} v(x) = -\infty \), alors :</p>
        <p style="text-align:center; margin-top:8px; font-size:1.05rem; font-weight:600; color:var(--teal);">
          \( \displaystyle\lim_{x\to x_0} f(x) = -\infty \)
        </p>
      </div>
      <div class="box box-prop">
        <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Comparaison pour +∞</div>
        <p>Si \( u(x) \leq f(x) \) et \( \displaystyle\lim_{x\to x_0} u(x) = +\infty \), alors :</p>
        <p style="text-align:center; margin-top:8px; font-size:1.05rem; font-weight:600; color:var(--teal);">
          \( \displaystyle\lim_{x\to x_0} f(x) = +\infty \)
        </p>
      </div>
    </div>
  </div>

  <!-- ═══════════════════════════════════════════
       SECTION IV — Astuces des limites
       ═══════════════════════════════════════════ -->
  <div class="cours-section reveal" id="s4">
    <span class="section-label orange-label">Section IV</span>
    <h2 class="section-heading">Astuces des limites</h2>

    <!-- Fonctions rationnelles -->
    <h3 class="sub-heading">1. Fonctions rationnelles</h3>

    <div class="box box-def">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"/><circle cx="16.5" cy="7.5" r=".5"/></svg> Cas \( x \to \pm\infty \) — Factoriser par le plus haut degré</div>
      <p>On factorise le numérateur et le dénominateur par la plus grande puissance de \( x \).</p>
    </div>
    <div class="box box-example">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg> Exemple</div>
      <p>\( \displaystyle\lim_{x\to+\infty} \frac{3x^2 - x + 1}{2x^2 + 5} = \lim_{x\to+\infty} \frac{x^2\!\left(3 - \frac{1}{x} + \frac{1}{x^2}\right)}{x^2\!\left(2 + \frac{5}{x^2}\right)} = \frac{3}{2} \)</p>
    </div>

    <div class="box box-def" style="margin-top:20px;">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"/><circle cx="16.5" cy="7.5" r=".5"/></svg> Cas \( x \to a \) avec forme \( \frac{0}{0} \) — Factoriser par \( (x-a) \)</div>
      <p>Si \( f(a) = 0 \) et \( g(a) = 0 \), on factorise le numérateur et le dénominateur par \( (x - a) \) pour simplifier.</p>
    </div>
    <div class="box box-example">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg> Exemple</div>
      <p>\( \displaystyle\lim_{x\to 1} \frac{x^2 - 1}{x - 1} = \lim_{x\to 1} \frac{(x-1)(x+1)}{x-1} = \lim_{x\to 1}(x+1) = 2 \)</p>
    </div>

    <!-- Fonctions avec racines -->
    <h3 class="sub-heading">2. Fonctions avec racines</h3>

    <div class="box box-def">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"/><circle cx="16.5" cy="7.5" r=".5"/></svg> Cas \( x \to \pm\infty \) — Forme \( \infty - \infty \)</div>
      <p><strong>Si la somme des coefficients des plus hauts degrés est égale à 0 :</strong> on multiplie par le conjugué.</p>
      <p><strong>Si la somme est différente de 0 :</strong> on factorise par le plus haut degré.</p>
    </div>
    <div class="box box-example">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg> Exemple — Conjugué (somme = 0)</div>
      <p>\( \displaystyle\lim_{x\to+\infty} \left(\sqrt{x^2+x} - x\right) \)</p>
      <p>Les coefficients : \(\sqrt{1} - 1 = 0\), donc on multiplie par le conjugué :</p>
      <p>\( = \displaystyle\lim_{x\to+\infty} \frac{(x^2+x) - x^2}{\sqrt{x^2+x} + x} = \lim_{x\to+\infty} \frac{x}{\sqrt{x^2+x} + x} = \frac{1}{2} \)</p>
    </div>
    <div class="box box-example">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg> Exemple — Factorisation (somme ≠ 0)</div>
      <p>\( \displaystyle\lim_{x\to+\infty} \left(\sqrt{4x^2+1} - x\right) \)</p>
      <p>Les coefficients : \(\sqrt{4} - 1 = 1 \neq 0\), donc on factorise par \(x\) :</p>
      <p>\( = \displaystyle\lim_{x\to+\infty} x\!\left(\sqrt{4+\frac{1}{x^2}} - 1\right) = +\infty \)</p>
    </div>

    <div class="box box-def" style="margin-top:20px;">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"/><circle cx="16.5" cy="7.5" r=".5"/></svg> Cas \( x \to a \) avec forme \( \frac{0}{0} \) — Multiplier par le conjugué</div>
      <p>Lorsque la racine donne une forme \( \frac{0}{0} \), on multiplie le numérateur et le dénominateur par le conjugué de l'expression contenant la racine.</p>
    </div>
    <div class="box box-example">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg> Exemple</div>
      <p>\( \displaystyle\lim_{x\to 0} \frac{\sqrt{x+1} - 1}{x} = \lim_{x\to 0} \frac{(\sqrt{x+1}-1)(\sqrt{x+1}+1)}{x(\sqrt{x+1}+1)} = \lim_{x\to 0} \frac{x}{x(\sqrt{x+1}+1)} = \frac{1}{2} \)</p>
    </div>
  </div>

  <!-- ═══════════════════════════════════════════
       SECTION V — Continuité
       ═══════════════════════════════════════════ -->
  <div class="cours-section reveal" id="s5">
    <span class="section-label emerald-label">Section V</span>
    <h2 class="section-heading">Continuité</h2>

    <!-- Continuité en un point -->
    <h3 class="sub-heading">1. Continuité en un point</h3>

    <div class="box box-def">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Définition</div>
      <p>\( f \) est <strong>continue au point</strong> \( x_0 \) si et seulement si :
      \( \displaystyle\lim_{x\to x_0} f(x) = f(x_0) \)</p>
    </div>

    <div class="box box-def">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Continuité à droite</div>
      <p>\( f \) est continue à droite de \( x_0 \) si : \( \displaystyle\lim_{x\to x_0^+} f(x) = f(x_0) \)</p>
    </div>

    <div class="box box-def">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Continuité à gauche</div>
      <p>\( f \) est continue à gauche de \( x_0 \) si : \( \displaystyle\lim_{x\to x_0^-} f(x) = f(x_0) \)</p>
    </div>

    <div class="box box-rem">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> Remarque</div>
      <p>\( f \) est continue au point \( x_0 \) si et seulement si \( f \) est continue à droite <strong>et</strong> à gauche de \( x_0 \).</p>
    </div>

    <!-- Continuité sur un intervalle -->
    <h3 class="sub-heading">2. Continuité sur un intervalle</h3>

    <div class="box box-def">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Définitions</div>
      <ul class="cours-list">
        <li>\( f \) est continue sur un intervalle ouvert \( I = \,]a,b[\, \) si \( f \) est continue en tout point \( x \) de \( I \).</li>
        <li>\( f \) est continue sur \( [a,b] \iff f \) est continue sur \( ]a,b[ \), continue à droite de \( a \) et continue à gauche de \( b \).</li>
        <li>\( f \) est continue sur \( ]a,b] \iff f \) est continue sur \( ]a,b[ \) et continue à gauche de \( b \).</li>
        <li>\( f \) est continue sur \( [a,b[ \iff f \) est continue sur \( ]a,b[ \) et continue à droite de \( a \).</li>
      </ul>
    </div>

    <!-- Opérations -->
    <h3 class="sub-heading">3. Opérations sur les fonctions continues</h3>

    <div class="box box-prop">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Propriétés</div>
      <p>Si \( f \) et \( g \) sont continues sur \( I \) et \( \alpha \in \mathbb{R} \), alors :</p>
      <ul class="cours-list">
        <li>\( f + g \), \( f \times g \) et \( \alpha f \) sont continues sur \( I \).</li>
        <li>\( \dfrac{1}{g} \) et \( \dfrac{f}{g} \) sont continues sur \( I \) (pour tout \( x \in I \) tel que \( g(x) \neq 0 \)).</li>
      </ul>
    </div>

    <!-- Continuités usuelles -->
    <h3 class="sub-heading">4. Fonctions continues usuelles</h3>

    <div class="box box-prop">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Résultats à connaître</div>
      <ul class="cours-list">
        <li>Toute <strong>fonction polynôme</strong> est continue sur \( D_f = \mathbb{R} \).</li>
        <li>Toute <strong>fonction rationnelle</strong> est continue sur son domaine de définition \( D_f \).</li>
        <li>\( f(x) = \sin x \) et \( g(x) = \cos x \) sont continues sur \( \mathbb{R} \).</li>
        <li>\( x \mapsto \tan x \) est continue sur \( \mathbb{R} \setminus \left\{ \dfrac{\pi}{2} + k\pi,\; k \in \mathbb{Z} \right\} \).</li>
        <li>\( f(x) = \sqrt{x} \) est continue sur \( [0, +\infty[ \).</li>
      </ul>
    </div>

    <!-- Image d'un intervalle -->
    <h3 class="sub-heading">5. Image d'un intervalle par une fonction continue</h3>

    <div class="box box-thm">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Théorème</div>
      <ul class="cours-list">
        <li>L'image du segment \( [a,b] \) par une fonction continue est un segment \( J = [m, M] \) (avec \( m \) = plus petite image, \( M \) = plus grande image).</li>
        <li>L'image d'un intervalle \( I \) par une fonction continue est un intervalle \( J \). On note \( J = f(I) \).</li>
      </ul>
    </div>

    <div class="box box-prop">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Si \( f \) est continue et strictement croissante</div>
      <ul class="cours-list">
        <li>\( f([a,b]) = [f(a),\, f(b)] \)</li>
        <li>\( f(]a,b[) = \,]\!\displaystyle\lim_{x\to a^+} f(x),\, \lim_{x\to b^-} f(x)[ \)</li>
        <li>\( f([a,b[) = [f(a),\, \displaystyle\lim_{x\to b^-} f(x)[ \)</li>
        <li>\( f(]a,+\infty[) = \,]\!\displaystyle\lim_{x\to a^+} f(x),\, \lim_{x\to+\infty} f(x)[ \)</li>
      </ul>
    </div>

    <div class="box box-prop">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Si \( f \) est continue et strictement décroissante</div>
      <ul class="cours-list">
        <li>\( f([a,b]) = [f(b),\, f(a)] \)</li>
        <li>\( f(]a,b[) = \,]\!\displaystyle\lim_{x\to b^-} f(x),\, \lim_{x\to a^+} f(x)[ \)</li>
        <li>\( f([a,b[) = \,]\!\displaystyle\lim_{x\to b^-} f(x),\, f(a)] \)</li>
        <li>\( f(]a,+\infty[) = \,]\!\displaystyle\lim_{x\to+\infty} f(x),\, \lim_{x\to a^+} f(x)[ \)</li>
      </ul>
    </div>

    <!-- Composée -->
    <h3 class="sub-heading">6. Continuité de la composée</h3>

    <div class="box box-prop">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Propriétés</div>
      <ul class="cours-list">
        <li>Si \( f \) est continue en \( x_0 \) et \( g \) est continue en \( f(x_0) \), alors \( g \circ f \) est continue en \( x_0 \).</li>
        <li>Si \( f \) est continue sur \( I \) et \( g \) est continue sur \( f(I) \), alors \( g \circ f \) est continue sur \( I \).</li>
      </ul>
    </div>

    <div class="box box-example">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg> Applications</div>
      <ul class="cours-list">
        <li>\( f(x) = \sin(ax+b) \) et \( g(x) = \cos(ax+b) \) sont continues sur \( \mathbb{R} \).</li>
        <li>\( h(x) = \tan(ax+b) \) est continue pour tout \( x \) tel que \( ax+b \neq \dfrac{\pi}{2} + k\pi \).</li>
        <li>Si \( f \) est positive et continue sur \( I \), alors \( h(x) = \sqrt{f(x)} \) est continue sur \( I \).</li>
      </ul>
    </div>
  </div>

  <!-- ═══════════════════════════════════════════
       SECTION VI — TVI
       ═══════════════════════════════════════════ -->
  <div class="cours-section reveal" id="s6">
    <span class="section-label brown-label">Section VI</span>
    <h2 class="section-heading">Théorème des valeurs intermédiaires — TVI</h2>

    <p style="font-size:0.95rem; color:var(--text-mid); margin-bottom:20px;">
      Soit \( f \) une fonction définie sur \( [a,b] \). On considère les trois conditions suivantes :
    </p>

    <div class="box box-def">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg> Les 3 conditions</div>
      <p style="margin-bottom:6px;"><strong style="color:var(--teal);">Condition 1 :</strong> \( f \) est <strong style="color:var(--teal);">continue</strong> sur \( [a,b] \).</p>
      <p style="margin-bottom:6px;"><strong style="color:var(--gold);">Condition 2 :</strong> \( f \) est <strong style="color:var(--gold);">strictement monotone</strong> sur \( ]a,b[ \).</p>
      <p><strong style="color:#9b2c5a;">Condition 3 :</strong> \( f(a) \times f(b) < 0 \) &nbsp; (c'est-à-dire \( f(a) \) et \( f(b) \) sont de <strong style="color:#9b2c5a;">signes contraires</strong>).</p>
    </div>

    <div class="divider"></div>

    <!-- Implication 1 : Condition 1 + 2 -->
    <div class="box box-thm">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Conditions 1 + 2 ⟹ Fonction réciproque</div>
      <p>Si \( f \) est <strong>continue</strong> sur \( [a,b] \) et <strong>strictement monotone</strong> sur \( ]a,b[ \), alors :</p>
      <ul class="cours-list">
        <li>\( f \) réalise une <strong>bijection</strong> de \( [a,b] \) vers \( J = f([a,b]) \).</li>
        <li>\( f \) admet une <strong>fonction réciproque</strong> \( f^{-1} \) définie sur \( J \).</li>
      </ul>
    </div>

    <!-- Implication 2 : Condition 1 + 3 -->
    <div class="box box-thm">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Conditions 1 + 3 ⟹ Au moins une solution</div>
      <p>Si \( f \) est <strong>continue</strong> sur \( [a,b] \) et \( f(a) \times f(b) < 0 \), alors :</p>
      <p style="text-align:center; margin:12px 0; font-size:1.05rem;">
        L'équation \( f(x) = 0 \) admet <strong style="color:var(--teal);">au moins une solution</strong> \( c \in \,]a,b[ \) tel que \( f(c) = 0 \).
      </p>
      <p style="font-size:0.88rem; color:var(--text-light);">
        C'est le <strong>théorème de Bolzano</strong> : la fonction change de signe, donc elle passe par zéro.
      </p>
    </div>

    <!-- Implication 3 : Condition 1 + 2 + 3 -->
    <div class="box box-thm" style="border-left-color: var(--correct); background: rgba(26,122,74,0.06);">
      <div class="box-title" style="color: var(--correct);"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Conditions 1 + 2 + 3 ⟹ Solution unique</div>
      <p>Si \( f \) est <strong>continue</strong> sur \( [a,b] \), <strong>strictement monotone</strong> sur \( ]a,b[ \) et \( f(a) \times f(b) < 0 \), alors :</p>
      <p style="text-align:center; margin:12px 0; font-size:1.05rem;">
        L'équation \( f(x) = 0 \) admet <strong style="color:var(--correct);">une solution unique</strong> \( \alpha \in \,]a,b[ \) tel que \( f(\alpha) = 0 \).
      </p>
    </div>

    <div class="divider"></div>

    <div class="box box-rem">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> Comment utiliser le TVI en exercice</div>
      <ul class="cours-list">
        <li><strong>Pour montrer l'existence d'au moins une solution :</strong> vérifier que \( f \) est <strong>continue</strong> et que \( f(a) \times f(b) < 0 \). &nbsp;(Conditions 1 + 3)</li>
        <li><strong>Pour montrer l'existence et l'unicité :</strong> vérifier en plus que \( f \) est <strong>strictement monotone</strong>. &nbsp;(Conditions 1 + 2 + 3)</li>
        <li><strong>Attention :</strong> ne pas oublier de vérifier la continuité ! C'est une condition indispensable dans tous les cas.</li>
      </ul>
    </div>

    <div class="box box-rem">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> TVI général (avec \( k \) quelconque)</div>
      <p>Le TVI ne s'applique pas uniquement à l'équation \( f(x) = 0 \). De manière générale :</p>
      <p style="margin:10px 0;">Si \( f \) est continue sur \( [a,b] \), alors pour tout \( k \) compris entre \( f(a) \) et \( f(b) \), il existe au moins un \( c \in [a,b] \) tel que \( f(c) = k \).</p>
      <p style="margin:6px 0;">En pratique, pour résoudre \( f(x) = k \), on pose \( g(x) = f(x) - k \) et on applique le TVI à \( g \) :</p>
      <ul class="cours-list">
        <li>Vérifier que \( g \) est <strong>continue</strong> sur \( [a,b] \).</li>
        <li>Calculer \( g(a) = f(a) - k \) et \( g(b) = f(b) - k \), puis vérifier que \( g(a) \times g(b) < 0 \).</li>
        <li>Si en plus \( g \) (donc \( f \)) est <strong>strictement monotone</strong>, la solution est <strong>unique</strong>.</li>
      </ul>
    </div>
  </div>

  <!-- ═══════════════════════════════════════════
       SECTION VII — Fonction réciproque, racine, puissance
       ═══════════════════════════════════════════ -->
  <div class="cours-section reveal" id="s7">
    <span class="section-label plum-label">Section VII</span>
    <h2 class="section-heading">Fonction réciproque, racine d'ordre n <em>&</em> puissance rationnelle</h2>

    <!-- Fonction réciproque -->
    <h3 class="sub-heading">1. Fonction réciproque</h3>

    <div class="box box-def">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Définition</div>
      <p>Si \( f : I \to J \) est une bijection (continue et strictement monotone), alors il existe une fonction \( f^{-1} : J \to I \) appelée <strong>fonction réciproque</strong> de \( f \), telle que :</p>
      <p style="text-align:center; margin:10px 0;">\( f(x) = y \iff f^{-1}(y) = x \)</p>
    </div>

    <div class="box box-prop">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Relation entre \( f \) et \( f^{-1} \)</div>
      <ul class="cours-list">
        <li>\( \forall\, x \in I : f^{-1}\!\big(f(x)\big) = x \)</li>
        <li>\( \forall\, y \in J : f\!\big(f^{-1}(y)\big) = y \)</li>
      </ul>
    </div>

    <div class="box box-prop">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Propriétés de \( f^{-1} \)</div>
      <ul class="cours-list">
        <li>\( f^{-1} \) est continue sur \( J = f(I) \).</li>
        <li>\( f^{-1} \) et \( f \) varient dans le <strong>même sens</strong>.</li>
        <li>Les courbes \( (C_f) \) et \( (C_{f^{-1}}) \) sont symétriques par rapport à la 1ère bissectrice \( (D) : y = x \).</li>
      </ul>
    </div>

    <!-- Racine d'ordre n -->
    <h3 class="sub-heading">2. Fonction racine d'ordre n</h3>

    <div class="box box-def">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Définition</div>
      <p>La fonction réciproque de \( f(x) = x^n \) (avec \( n \in \mathbb{N}^* \)) est notée \( f^{-1}(x) = \sqrt[n]{x} = x^{1/n} \) et appelée <strong>fonction racine d'ordre n</strong>.</p>
      <p>\( f^{-1} = \sqrt[n]{\cdot} : [0,+\infty[ \to [0,+\infty[ \)</p>
    </div>

    <div class="box box-rem">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> Cas particuliers</div>
      <ul class="cours-list">
        <li>\( n = 1 \) : \( f^{-1}(x) = \sqrt[1]{x} = x \) (sans importance).</li>
        <li>\( n = 2 \) : \( f^{-1}(x) = \sqrt[2]{x} = \sqrt{x} \) (racine carrée).</li>
        <li>\( n = 3 \) : \( f^{-1}(x) = \sqrt[3]{x} \) (racine cubique).</li>
      </ul>
    </div>

    <div class="box box-prop">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Propriétés de \( \sqrt[n]{a} \) — Pour \( a \in \mathbb{R}^+ \) et \( b \in \mathbb{R}^+ \)</div>
      <ul class="cours-list">
        <li>\( \sqrt[n]{1} = 1 \;;\quad \sqrt[n]{0} = 0 \;;\quad \left(\sqrt[n]{a}\right)^n = a \;;\quad \sqrt[n]{a^n} = a \)</li>
        <li>\( \sqrt[n]{a} = b \iff a = b^n \;;\quad \sqrt[n]{a} \leq b \iff a \leq b^n \)</li>
        <li>\( \sqrt[n]{a}\;\sqrt[n]{b} = \sqrt[n]{ab} \;;\quad \dfrac{\sqrt[n]{a}}{\sqrt[n]{b}} = \sqrt[n]{\dfrac{a}{b}} \quad (b > 0) \)</li>
        <li>\( \displaystyle\lim_{x\to+\infty} \sqrt[n]{x} = +\infty \;;\quad \left(\sqrt[n]{a}\right)^m = \sqrt[n]{a^m} \)</li>
      </ul>
    </div>

    <div class="box box-prop">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Propriété de \( g(x) = \sqrt[n]{f(x)} \)</div>
      <p>Si \( \displaystyle\lim_{x\to x_0} f(x) = +\infty \), alors \( \displaystyle\lim_{x\to x_0} \sqrt[n]{f(x)} = +\infty \).</p>
      <p>Si \( \displaystyle\lim_{x\to x_0} f(x) = \ell \), alors \( \displaystyle\lim_{x\to x_0} \sqrt[n]{f(x)} = \sqrt[n]{\ell} \).</p>
    </div>

    <!-- Puissance rationnelle -->
    <h3 class="sub-heading">3. Puissance rationnelle d'un nombre positif</h3>

    <div class="box box-def">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Définition</div>
      <p>Pour \( x \in \mathbb{R}^{+*} \), \( n \in \mathbb{N}^* \) et \( m \in \mathbb{Z} \), on pose \( r = \dfrac{m}{n} \in \mathbb{Q} \) :</p>
      <p style="text-align:center; margin:10px 0; font-size:1.05rem;">\( \sqrt[n]{x^m} = x^{m/n} = x^r \)</p>
      <p>\( x^r \) est appelée <strong>puissance rationnelle</strong> du réel positif \( x \) d'exposant \( r \).</p>
      <p style="margin-top:6px; font-size:0.88rem; color:var(--text-light);">(Convention : \( 0^r = 0 \) avec \( r \neq 0 \).)</p>
    </div>

    <div class="box box-prop">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Propriétés — Pour \( a > 0 \), \( b \in \mathbb{R}^{+*} \), \( r, r' \in \mathbb{Q} \)</div>
      <ul class="cours-list">
        <li>\( a^r \times a^{r'} = a^{r+r'} \)</li>
        <li>\( \dfrac{a^r}{a^{r'}} = a^{r-r'} \)</li>
        <li>\( (a^r)^{r'} = a^{r \times r'} \)</li>
        <li>\( a^r \times b^r = (a \times b)^r \)</li>
        <li>\( \dfrac{a^r}{b^r} = \left(\dfrac{a}{b}\right)^r \)</li>
        <li>\( a^{-r} = \dfrac{1}{a^r} \)</li>
      </ul>
    </div>
  </div>
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
            { title: "Cours 1 : Continuité (BIOF) - PDF", type: "Cours", year: 2025, description: "Cours complet sur les limites, la continuité et le TVI.", file: "pdf/Cours1-Continuité-2bac-BIOF-2025.pdf" },
            { title: "Cours 1 : Continuité (BIOF) - Word", type: "Cours", year: 2025, description: "Version modifiable (.docx) du cours.", file: "pdf/Cours1-Continuité-2bac-BIOF-2025.docx" },
            { title: "Résumé de cours : Continuité (BIOF) - PDF", type: "Résumé", year: 2025, description: "Fiche de synthèse des formules et concepts clés.", file: "pdf/Résumé-Continuité-2bac-BIOF.pdf" },
            { title: "Résumé de cours : Continuité (BIOF) - Word", type: "Résumé", year: 2025, description: "Version modifiable (.docx) de la fiche de synthèse.", file: "pdf/Résumé-Continuité-2bac-BIOF.docx" },
            { title: "Série d'exercices 1 : Continuité (BIOF) - PDF", type: "Série", year: 2025, description: "Sujets d'exercices corrigés.", file: "pdf/Série1-Continuité-2bac-BIOF 2025.pdf" },
            { title: "Série d'exercices 1 : Continuité (BIOF) - Word", type: "Série", year: 2025, description: "Version modifiable (.docx) de la série d'exercices.", file: "pdf/Série1-Continuité-2bac-BIOF 2025.docx" }
        ]
    },
    {
        id: "math-deriv-etude",
        title: "Dérivation et étude des fonctions",
        level: "2bac-pc",
        subject: "math",
        description: "Calcul de dérivées, tangentes, sens de variation, extremums, branches infinies, concavité et étude complète de fonctions.",
        courseContent: `
<div class="toc reveal">
    <div class="toc-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg> Sommaire</div>
    <ol class="toc-list">
      <li><a href="#s1"><span class="toc-num">I</span> Tableau des dérivées</a></li>
      <li><a href="#s2"><span class="toc-num">II</span> Dérivabilité en un point</a></li>
      <li><a href="#s3"><span class="toc-num">III</span> Dérivabilité à droite et à gauche</a></li>
      <li><a href="#s4"><span class="toc-num">IV</span> Équation de la tangente</a></li>
      <li><a href="#s5"><span class="toc-num">V</span> Interprétation géométrique</a></li>
      <li><a href="#s6"><span class="toc-num">VI</span> Dérivabilité des fonctions usuelles</a></li>
      <li><a href="#s7"><span class="toc-num">VII</span> Opérations sur les fonctions dérivables</a></li>
      <li><a href="#s8"><span class="toc-num">VIII</span> Dérivée d'une fonction réciproque</a></li>
      <li><a href="#s9"><span class="toc-num">IX</span> Dérivation et monotonie</a></li>
      <li><a href="#s10"><span class="toc-num">X</span> Extremums d'une fonction</a></li>
      <li><a href="#s11"><span class="toc-num">XI</span> Branches infinies</a></li>
      <li><a href="#s12"><span class="toc-num">XII</span> Concavité et point d'inflexion</a></li>
    </ol>
  </div>

  <!-- ═══════════ SECTION I — Tableau des dérivées ═══════════ -->
  <div class="cours-section reveal" id="s1">
    <span class="section-label">Section I</span>
    <h2 class="section-heading">Tableau des dérivées</h2>

    <h3 class="sub-heading">1. Fonctions simples</h3>
    <div class="math-table-wrap">
      <table class="math-table">
        <tr><th>Fonction \( f(x) \)</th><th>Dérivée \( f'(x) \)</th></tr>
        <tr><td>\( a \) (constante)</td><td>\( 0 \)</td></tr>
        <tr><td>\( x \)</td><td>\( 1 \)</td></tr>
        <tr><td>\( ax \)</td><td>\( a \)</td></tr>
        <tr><td>\( x^2 \)</td><td>\( 2x \)</td></tr>
        <tr><td>\( x^n \)</td><td>\( n \cdot x^{n-1} \)</td></tr>
        <tr><td>\( \dfrac{1}{x} \)</td><td>\( \dfrac{-1}{x^2} \)</td></tr>
        <tr><td>\( \sqrt{x} \)</td><td>\( \dfrac{1}{2\sqrt{x}} \)</td></tr>
        <tr><td>\( \ln x \)</td><td>\( \dfrac{1}{x} \)</td></tr>
        <tr><td>\( e^x \)</td><td>\( e^x \)</td></tr>
        <tr><td>\( \sin x \)</td><td>\( \cos x \)</td></tr>
        <tr><td>\( \cos x \)</td><td>\( -\sin x \)</td></tr>
      </table>
    </div>

    <h3 class="sub-heading">2. Fonctions composées \( \small{(U' = dU/dx)} \)</h3>
    <div class="math-table-wrap">
      <table class="math-table">
        <tr><th>Fonction composée \( f(U) \)</th><th>Dérivée</th></tr>
        <tr><td>\( a \cdot U \)</td><td>\( a \cdot U' \)</td></tr>
        <tr><td>\( U^2 \)</td><td>\( 2U \cdot U' \)</td></tr>
        <tr><td>\( U^n \)</td><td>\( n \cdot U^{n-1} \cdot U' \)</td></tr>
        <tr><td>\( \dfrac{1}{U} \)</td><td>\( \dfrac{-U'}{U^2} \)</td></tr>
        <tr><td>\( \sqrt{U} \)</td><td>\( \dfrac{U'}{2\sqrt{U}} \)</td></tr>
        <tr><td>\( \ln(U) \)</td><td>\( \dfrac{U'}{U} \)</td></tr>
        <tr><td>\( e^U \)</td><td>\( U' \cdot e^U \)</td></tr>
        <tr><td>\( \sin(U) \)</td><td>\( U' \cdot \cos(U) \)</td></tr>
        <tr><td>\( \cos(U) \)</td><td>\( -U' \cdot \sin(U) \)</td></tr>
      </table>
    </div>

    <h3 class="sub-heading">3. Règles opératoires</h3>
    <div class="math-table-wrap">
      <table class="math-table">
        <tr><th>Opération</th><th>Dérivée</th></tr>
        <tr><td>\( U + V \)</td><td>\( U' + V' \)</td></tr>
        <tr><td>\( U \times V \)</td><td>\( U'V + UV' \)</td></tr>
        <tr><td>\( \dfrac{U}{V} \)</td><td>\( \dfrac{U'V - UV'}{V^2} \)</td></tr>
      </table>
    </div>
  </div>

  <!-- ═══════════ SECTION II — Dérivabilité en un point ═══════════ -->
  <div class="cours-section reveal" id="s2">
    <span class="section-label gold-label">Section II</span>
    <h2 class="section-heading">Dérivabilité en un point</h2>

    <div class="box box-def">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Définition</div>
      <p>\( f \) est <strong>dérivable en \( a \)</strong> si et seulement si la limite suivante existe et est finie :</p>
      <p style="text-align:center;margin:12px 0;font-size:1.05rem;">\( \displaystyle\lim_{x\to a} \dfrac{f(x) - f(a)}{x - a} = f'(a) = \ell \in \mathbb{R} \)</p>
    </div>

    <div class="box box-rem">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> Remarque</div>
      <p>Le nombre \( f'(a) \) s'appelle le <strong>nombre dérivé</strong> de \( f \) en \( a \). Géométriquement, c'est la pente de la tangente à la courbe \( (C_f) \) au point \( A(a, f(a)) \).</p>
    </div>
  </div>

  <!-- ═══════════ SECTION III — Dérivabilité à droite et à gauche ═══════════ -->
  <div class="cours-section reveal" id="s3">
    <span class="section-label blue-label">Section III</span>
    <h2 class="section-heading">Dérivabilité à droite <em>&</em> à gauche</h2>

    <div class="box box-def">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Dérivée à droite</div>
      <p>\( f \) est dérivable à <strong>droite</strong> en \( a \) si :</p>
      <p style="text-align:center;margin:10px 0;">\( \displaystyle\lim_{x\to a^+} \dfrac{f(x) - f(a)}{x - a} = f'_d(a) = \ell \in \mathbb{R} \)</p>
    </div>

    <div class="box box-def">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Dérivée à gauche</div>
      <p>\( f \) est dérivable à <strong>gauche</strong> en \( a \) si :</p>
      <p style="text-align:center;margin:10px 0;">\( \displaystyle\lim_{x\to a^-} \dfrac{f(x) - f(a)}{x - a} = f'_g(a) = \ell \in \mathbb{R} \)</p>
    </div>

    <div class="box box-prop">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Propriété</div>
      <p>\( f \) est dérivable en \( a \) \( \iff \) \( f \) est dérivable à droite <strong>et</strong> à gauche en \( a \), et \( f'_d(a) = f'_g(a) \).</p>
    </div>
  </div>

  <!-- ═══════════ SECTION IV — Équation de la tangente ═══════════ -->
  <div class="cours-section reveal" id="s4">
    <span class="section-label emerald-label">Section IV</span>
    <h2 class="section-heading">Équation de la tangente</h2>

    <div class="box box-thm">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Équation de la tangente (T)</div>
      <p>L'équation de la tangente \( (T) \) à la courbe \( (C_f) \) au point d'abscisse \( a \) est :</p>
      <p style="text-align:center;margin:12px 0;font-size:1.1rem;font-weight:600;color:var(--teal);">\( (T) : y = f'(a)(x - a) + f(a) \)</p>
    </div>

    <div class="box box-rem">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> Cas particulier</div>
      <p>Si \( f'(a) = 0 \), la tangente est <strong>horizontale</strong> : \( (T) : y = f(a) \).</p>
    </div>
  </div>

  <!-- ═══════════ SECTION V — Interprétation géométrique ═══════════ -->
  <div class="cours-section reveal" id="s5">
    <span class="section-label brown-label">Section V</span>
    <h2 class="section-heading">Interprétation géométrique</h2>

    <h3 class="sub-heading">1. Si \( f \) est dérivable en \( a \)</h3>

    <div class="math-table-wrap">
      <table class="math-table">
        <tr><th>Condition</th><th>Interprétation</th></tr>
        <tr>
          <td>\( \displaystyle\lim_{x\to a} \dfrac{f(x)-f(a)}{x-a} = \ell \in \mathbb{R}^* \)</td>
          <td style="text-align:left">\( (C_f) \) admet une <strong>tangente</strong> au point \( A(a,f(a)) \) d'équation \( (T): y = f'(a)(x-a) + f(a) \)</td>
        </tr>
        <tr>
          <td>\( \displaystyle\lim_{x\to a} \dfrac{f(x)-f(a)}{x-a} = 0 \)</td>
          <td style="text-align:left">\( (C_f) \) admet une <strong>tangente horizontale</strong> au point \( A(a,f(a)) \)</td>
        </tr>
      </table>
    </div>

    <h3 class="sub-heading">2. Dérivée à droite / à gauche seulement</h3>

    <div class="math-table-wrap">
      <table class="math-table">
        <tr><th>Condition</th><th>Interprétation</th></tr>
        <tr>
          <td>\( f'_d(a) = \ell \in \mathbb{R}^* \)</td>
          <td style="text-align:left">\( (C_f) \) admet une <strong>demi-tangente à droite</strong> au point \( A \), d'équation \( y = f'(a)(x-a)+f(a) \) pour \( x \geq a \)</td>
        </tr>
        <tr>
          <td>\( f'_g(a) = \ell \in \mathbb{R}^* \)</td>
          <td style="text-align:left">\( (C_f) \) admet une <strong>demi-tangente à gauche</strong> au point \( A \), d'équation \( y = f'(a)(x-a)+f(a) \) pour \( x \leq a \)</td>
        </tr>
        <tr>
          <td>\( f'_d(a) = 0 \)</td>
          <td style="text-align:left">\( (C_f) \) admet une <strong>demi-tangente horizontale à droite</strong> au point \( A \)</td>
        </tr>
        <tr>
          <td>\( f'_g(a) = 0 \)</td>
          <td style="text-align:left">\( (C_f) \) admet une <strong>demi-tangente horizontale à gauche</strong> au point \( A \)</td>
        </tr>
      </table>
    </div>

    <h3 class="sub-heading">3. Si \( f \) n'est pas dérivable en \( a \)</h3>

    <div class="math-table-wrap">
      <table class="math-table">
        <tr><th>Condition</th><th>Interprétation</th></tr>
        <tr>
          <td>\( \displaystyle\lim_{x\to a^+} \dfrac{f(x)-f(a)}{x-a} = +\infty \)</td>
          <td style="text-align:left">\( (C_f) \) admet une demi-tangente verticale dirigée vers <strong>le haut</strong> au point \( A(a,f(a)) \)</td>
        </tr>
        <tr>
          <td>\( \displaystyle\lim_{x\to a^-} \dfrac{f(x)-f(a)}{x-a} = -\infty \)</td>
          <td style="text-align:left">\( (C_f) \) admet une demi-tangente verticale dirigée vers <strong>le haut</strong> au point \( A(a,f(a)) \)</td>
        </tr>
        <tr>
          <td>\( \displaystyle\lim_{x\to a^+} \dfrac{f(x)-f(a)}{x-a} = -\infty \)</td>
          <td style="text-align:left">\( (C_f) \) admet une demi-tangente verticale dirigée vers <strong>le bas</strong> au point \( A(a,f(a)) \)</td>
        </tr>
        <tr>
          <td>\( \displaystyle\lim_{x\to a^-} \dfrac{f(x)-f(a)}{x-a} = +\infty \)</td>
          <td style="text-align:left">\( (C_f) \) admet une demi-tangente verticale dirigée vers <strong>le bas</strong> au point \( A(a,f(a)) \)</td>
        </tr>
      </table>
    </div>

    <div class="box box-prop">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Point anguleux</div>
      <p>Si \( f \) est dérivable à gauche et à droite en \( a \) mais \( f'_d(a) \neq f'_g(a) \), alors :</p>
      <ul class="cours-list">
        <li>\( (C_f) \) admet <strong>deux demi-tangentes</strong> au point \( A(a, f(a)) \).</li>
        <li>Le point \( A \) est appelé <strong style="color:var(--wrong);">point anguleux</strong>.</li>
      </ul>
    </div>
  </div>

  <!-- ═══════════ SECTION VI — Dérivabilité des fonctions usuelles ═══════════ -->
  <div class="cours-section reveal" id="s6">
    <span class="section-label rose-label">Section VI</span>
    <h2 class="section-heading">Dérivabilité des fonctions usuelles</h2>

    <div class="box box-prop">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Résultats à connaître</div>
      <ul class="cours-list">
        <li>Toute <strong>fonction polynôme</strong> est dérivable sur \( \mathbb{R} \).</li>
        <li>Toute <strong>fonction rationnelle</strong> est dérivable sur tout intervalle de son domaine de définition.</li>
        <li>La fonction \( \sqrt[n]{x} \) est dérivable sur \( ]0, +\infty[ \) &nbsp; (\( n \in \mathbb{N},\; n \geq 2 \)).</li>
        <li>Les fonctions \( \sin x \) et \( \cos x \) sont dérivables sur \( \mathbb{R} \).</li>
        <li>La fonction \( \tan x \) est dérivable sur \( \mathbb{R} \setminus \left\{ \dfrac{\pi}{2} + k\pi,\; k \in \mathbb{Z} \right\} \).</li>
      </ul>
    </div>
  </div>

  <!-- ═══════════ SECTION VII — Opérations ═══════════ -->
  <div class="cours-section reveal" id="s7">
    <span class="section-label orange-label">Section VII</span>
    <h2 class="section-heading">Opérations sur les fonctions dérivables</h2>

    <div class="box box-prop">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Propriétés</div>
      <p>Si \( f \) et \( g \) sont dérivables sur \( I \), \( k \in \mathbb{R} \) et \( n \in \mathbb{N} \), alors :</p>
      <ul class="cours-list">
        <li>\( f + g \), \( f \cdot g \), \( k \cdot f \) et \( f^n \) sont <strong>dérivables</strong> sur \( I \).</li>
      </ul>
      <p style="margin-top:10px;">Si de plus \( g(x) \neq 0 \) sur \( I \), alors :</p>
      <ul class="cours-list">
        <li>\( \dfrac{f}{g} \) et \( \dfrac{1}{g} \) sont <strong>dérivables</strong> sur \( I \).</li>
      </ul>
    </div>
  </div>

  <!-- ═══════════ SECTION VIII — Dérivée de la réciproque ═══════════ -->
  <div class="cours-section reveal" id="s8">
    <span class="section-label plum-label">Section VIII</span>
    <h2 class="section-heading">Dérivée d'une fonction réciproque</h2>

    <div class="box box-thm">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> En un point</div>
      <p>Si \( f \) est dérivable en \( a \) et \( f'(a) \neq 0 \), alors \( f^{-1} \) est dérivable en \( b = f(a) \) et :</p>
      <p style="text-align:center;margin:12px 0;font-size:1.05rem;font-weight:600;color:var(--teal);">\( (f^{-1})'(b) = \dfrac{1}{f'(a)} \)</p>
    </div>

    <div class="box box-thm">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Sur un intervalle</div>
      <p>Si \( f \) est dérivable sur \( I \) et \( f'(x) \neq 0 \) sur \( I \), alors \( f^{-1} \) est dérivable sur \( J = f(I) \) et :</p>
      <p style="text-align:center;margin:12px 0;font-size:1.05rem;font-weight:600;color:var(--teal);">\( (f^{-1})'(x) = \dfrac{1}{f'\!\big(f^{-1}(x)\big)} \)</p>
    </div>
  </div>

  <!-- ═══════════ SECTION IX — Dérivation et monotonie ═══════════ -->
  <div class="cours-section reveal" id="s9">
    <span class="section-label slate-label">Section IX</span>
    <h2 class="section-heading">Dérivation <em>&</em> monotonie</h2>

    <div class="box box-thm">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Théorème</div>
      <p>Soit \( f \) une fonction dérivable sur un intervalle \( I \) :</p>
    </div>

    <div class="math-table-wrap">
      <table class="math-table">
        <tr><th>Condition sur \( f'(x) \)</th><th>Conclusion sur \( f \)</th></tr>
        <tr><td>\( f'(x) \geq 0 \) sur \( I \)</td><td>\( f \) est <strong style="color:var(--correct)">croissante</strong> sur \( I \)</td></tr>
        <tr><td>\( f'(x) \leq 0 \) sur \( I \)</td><td>\( f \) est <strong style="color:var(--wrong)">décroissante</strong> sur \( I \)</td></tr>
        <tr><td>\( f'(x) = 0 \) sur \( I \)</td><td>\( f \) est <strong>constante</strong> sur \( I \)</td></tr>
      </table>
    </div>

    <div class="box box-rem">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> Remarque</div>
      <p>Si \( f'(x) > 0 \) sur \( I \) (sauf éventuellement en des points isolés), alors \( f \) est <strong>strictement croissante</strong> sur \( I \). De même pour \( f'(x) < 0 \) et strictement décroissante.</p>
    </div>
  </div>

  <!-- ═══════════ SECTION X — Extremums ═══════════ -->
  <div class="cours-section reveal" id="s10">
    <span class="section-label forest-label">Section X</span>
    <h2 class="section-heading">Extremums d'une fonction</h2>

    <div class="box box-thm">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Condition d'extremum</div>
      <p>\( f' \) s'annule en \( a \) et <strong>change de signe</strong> en \( a \) \( \iff \) \( f \) admet un <strong>extremum</strong> en \( a \).</p>
    </div>

    <h3 class="sub-heading">Minimum local</h3>
    <p style="font-size:0.94rem;color:var(--text-mid);margin-bottom:12px;">Si \( f' \) passe du signe \( - \) au signe \( + \) en \( a \) :</p>

    <div class="math-table-wrap">
      <table class="var-table">
        <tr><th>\( x \)</th><td></td><td style="font-weight:700;color:var(--wrong)">\( a \)</td><td></td></tr>
        <tr><th>\( f'(x) \)</th><td class="sign-minus">−</td><td class="sign-zero">0</td><td class="sign-plus">+</td></tr>
        <tr><th>\( f \)</th><td class="arrow-down">↘</td><td class="extremum">\( b \)</td><td class="arrow-up">↗</td></tr>
      </table>
    </div>
    <p style="text-align:center;font-size:0.92rem;color:var(--wrong);font-weight:600;margin-top:8px;">\( b = f(a) \) est la <strong>valeur minimale</strong> de la fonction \( f \)</p>

    <h3 class="sub-heading">Maximum local</h3>
    <p style="font-size:0.94rem;color:var(--text-mid);margin-bottom:12px;">Si \( f' \) passe du signe \( + \) au signe \( - \) en \( a \) :</p>

    <div class="math-table-wrap">
      <table class="var-table">
        <tr><th>\( x \)</th><td></td><td style="font-weight:700;color:var(--wrong)">\( a \)</td><td></td></tr>
        <tr><th>\( f'(x) \)</th><td class="sign-plus">+</td><td class="sign-zero">0</td><td class="sign-minus">−</td></tr>
        <tr><th>\( f \)</th><td class="arrow-up">↗</td><td class="extremum">\( b \)</td><td class="arrow-down">↘</td></tr>
      </table>
    </div>
    <p style="text-align:center;font-size:0.92rem;color:var(--wrong);font-weight:600;margin-top:8px;">\( b = f(a) \) est la <strong>valeur maximale</strong> de la fonction \( f \)</p>
  </div>

  <!-- ═══════════ SECTION XI — Branches infinies ═══════════ -->
  <div class="cours-section reveal" id="s11">
    <span class="section-label indigo-label">Section XI</span>
    <h2 class="section-heading">Branches infinies</h2>

    <h3 class="sub-heading">1. Asymptote horizontale</h3>
    <div class="box box-def">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Définition</div>
      <p>Si \( \displaystyle\lim_{x\to\pm\infty} f(x) = a \), alors la droite \( (\Delta) : y = a \) est une <strong>asymptote horizontale</strong> à \( (C_f) \) au voisinage de \( \pm\infty \).</p>
      <p style="font-size:0.88rem;color:var(--text-light);margin-top:6px;">\( (\Delta) \) est parallèle à l'axe des abscisses.</p>
    </div>

    <h3 class="sub-heading">2. Asymptote verticale</h3>
    <div class="box box-def">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Définition</div>
      <p>Si \( \displaystyle\lim_{x\to a} f(x) = \pm\infty \), alors la droite \( (\Delta) : x = a \) est une <strong>asymptote verticale</strong> à \( (C_f) \).</p>
      <p style="font-size:0.88rem;color:var(--text-light);margin-top:6px;">\( (\Delta) \) est parallèle à l'axe des ordonnées.</p>
    </div>

    <h3 class="sub-heading">3. Asymptote oblique</h3>
    <div class="box box-def">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Définition</div>
      <p>Si \( \displaystyle\lim_{x\to\pm\infty} [f(x) - (ax + b)] = 0 \), alors la droite \( (D) : y = ax + b \) est une <strong>asymptote oblique</strong> à \( (C_f) \) au voisinage de \( \pm\infty \).</p>
    </div>

    <h3 class="sub-heading">4. Branches paraboliques</h3>
    <div class="box box-rem">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> Méthode : calculer \( \displaystyle\lim_{x\to\pm\infty} \dfrac{f(x)}{x} \)</div>
    </div>

    <div class="branch-grid">
      <div class="branch-card">
        <div class="branch-card-title">Cas 1 : \( \displaystyle\lim \dfrac{f(x)}{x} = a \neq 0 \)</div>
        <p>On calcule ensuite \( \displaystyle\lim [f(x) - ax] \) :</p>
        <ul class="cours-list" style="margin-top:8px">
          <li>Si \( = b \) → asymptote oblique \( y = ax + b \)</li>
          <li>Si \( = \pm\infty \) → branche parabolique de direction \( y = ax \)</li>
        </ul>
      </div>
      <div class="branch-card">
        <div class="branch-card-title">Cas 2 : \( \displaystyle\lim \dfrac{f(x)}{x} = \pm\infty \)</div>
        <p>\( (C_f) \) admet une <strong>branche parabolique</strong> de direction celle de l'axe des ordonnées.</p>
      </div>
      <div class="branch-card">
        <div class="branch-card-title">Cas 3 : \( \displaystyle\lim \dfrac{f(x)}{x} = 0 \)</div>
        <p>\( (C_f) \) admet une <strong>branche parabolique</strong> de direction celle de l'axe des abscisses.</p>
      </div>
      <div class="branch-card">
        <div class="branch-card-title">Rappel : \( \displaystyle\lim f(x) = a \)</div>
        <p>Asymptote horizontale \( y = a \) (pas besoin de calculer \( f(x)/x \)).</p>
      </div>
    </div>
  </div>

  <!-- ═══════════ SECTION XII — Concavité et point d'inflexion ═══════════ -->
  <div class="cours-section reveal" id="s12">
    <span class="section-label">Section XII</span>
    <h2 class="section-heading">Concavité <em>&</em> point d'inflexion</h2>

    <div class="grid-2x2">
      <div class="box box-def">
        <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Convexe</div>
        <p>Une fonction est <strong>convexe</strong> sur un intervalle \( I \) si sa courbe est entièrement située <strong>au-dessus</strong> de chacune de ses tangentes.</p>
        <p style="text-align:center;margin-top:10px;font-size:1rem;font-weight:600;color:var(--teal);">\( \forall x \in I, \quad f''(x) \geq 0 \)</p>
      </div>
      <div class="box box-def">
        <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Concave</div>
        <p>Une fonction est <strong>concave</strong> sur un intervalle \( I \) si sa courbe est entièrement située <strong>au-dessous</strong> de chacune de ses tangentes.</p>
        <p style="text-align:center;margin-top:10px;font-size:1rem;font-weight:600;color:var(--teal);">\( \forall x \in I, \quad f''(x) \leq 0 \)</p>
      </div>
    </div>

    <div class="box box-thm">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Point d'inflexion</div>
      <p>Un <strong style="color:var(--teal);">point d'inflexion</strong> de la courbe \( (C_f) \) est un point où la courbe <strong>change de concavité</strong>.</p>
      <ul class="cours-list" style="margin-top:10px;">
        <li>Si \( f'' \) s'annule en \( x_0 \) et <strong>change de signe</strong> en \( x_0 \), alors \( (C_f) \) admet un point d'inflexion d'abscisse \( x_0 \).</li>
        <li>Si \( f' \) s'annule en \( x_0 \) <strong>sans changer de signe</strong>, alors \( (C_f) \) admet un point d'inflexion d'abscisse \( x_0 \). <em style="color:var(--text-light);">(cas particulier)</em></li>
      </ul>
    </div>

    <div class="box box-rem">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> En résumé</div>
      <div class="math-table-wrap">
        <table class="math-table" style="min-width:300px">
          <tr><th>Condition sur \( f''(x) \)</th><th>Conclusion</th></tr>
          <tr><td>\( f''(x) \geq 0 \)</td><td>\( (C_f) \) est <strong>convexe</strong> (courbe au-dessus des tangentes)</td></tr>
          <tr><td>\( f''(x) \leq 0 \)</td><td>\( (C_f) \) est <strong>concave</strong> (courbe au-dessous des tangentes)</td></tr>
          <tr><td>\( f'' \) change de signe en \( x_0 \)</td><td>Point d'<strong>inflexion</strong> en \( x_0 \)</td></tr>
        </table>
      </div>
    </div>
  </div>
`,
        exercises: [
            {
                title: "Exercice 1 : Équation de la tangente",
                statement: "Déterminer l'équation de la tangente à la courbe de f(x) = x² - 3x au point d'abscisse x₀ = 2.",
                solution: "Calculons f(2) = 2² - 3(2) = -2.<br>Dérivée : f'(x) = 2x - 3. D'où f'(2) = 2(2) - 3 = 1.<br>L'équation est : y = f'(2)(x - 2) + f(2) = 1(x - 2) - 2 = x - 4."
            }
        ],
        exams: [
            { title: "Devoir Surveillé N°2 - Modèle A", type: "Devoir", year: 2026 }
        ]
    },
    {
        id: "math-suites",
        title: "Suites numériques",
        level: "2bac-pc",
        subject: "math",
        description: "Suites arithmétiques et géométriques, récurrence, convergence, limites de suites et suites de type f(Un).",
        courseContent: `
<div class="toc reveal">
    <div class="toc-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg> Sommaire</div>
    <ol class="toc-list">
      <li><a href="#s1"><span class="toc-num">I</span> Généralités sur les suites</a></li>
      <li><a href="#s2"><span class="toc-num">II</span> Suite majorée, minorée, bornée</a></li>
      <li><a href="#s3"><span class="toc-num">III</span> Monotonie d'une suite</a></li>
      <li><a href="#s4"><span class="toc-num">IV</span> Suite arithmétique et suite géométrique</a></li>
      <li><a href="#s5"><span class="toc-num">V</span> Critères de convergence</a></li>
      <li><a href="#s6"><span class="toc-num">VI</span> Limites de référence</a></li>
      <li><a href="#s7"><span class="toc-num">VII</span> Suite de type \( v_n = f(u_n) \)</a></li>
      <li><a href="#s8"><span class="toc-num">VIII</span> Suite de type \( u_{n+1} = f(u_n) \)</a></li>
    </ol>
  </div>

  <!-- ═══════════ SECTION I — Généralités ═══════════ -->
  <div class="cours-section reveal" id="s1">
    <span class="section-label">Section I</span>
    <h2 class="section-heading">Généralités sur les suites</h2>

    <div class="box box-def">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Définition</div>
      <p>Une <strong>suite numérique</strong> est une application de l'ensemble des entiers naturels \( \mathbb{N} \) vers l'ensemble des réels \( \mathbb{R} \) :</p>
      <p style="text-align:center;margin:12px 0;font-size:1.1rem;">\( \begin{array}{rcl} \mathbb{N} & \to & \mathbb{R} \\ n & \mapsto & u_n \end{array} \)</p>
      <p>On note la suite \( (u_n)_{n \in \mathbb{N}} \) ou simplement \( (u_n) \). Le nombre \( u_n \) est appelé le <strong>terme général</strong> (ou terme d'indice \( n \)) de la suite.</p>
    </div>

    <div class="box box-rem">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> Modes de définition</div>
      <ul class="cours-list">
        <li><strong>Formule explicite :</strong> \( u_n \) est donné directement en fonction de \( n \). Exemple : \( u_n = 2n + 3 \).</li>
        <li><strong>Formule de récurrence :</strong> \( u_n \) est défini à partir du (ou des) termes précédents. Exemple : \( u_0 = 1 \) et \( u_{n+1} = 2u_n + 1 \).</li>
      </ul>
    </div>
  </div>

  <!-- ═══════════ SECTION II — Majorée, minorée, bornée ═══════════ -->
  <div class="cours-section reveal" id="s2">
    <span class="section-label gold-label">Section II</span>
    <h2 class="section-heading">Suite majorée, minorée, bornée</h2>

    <div class="box box-def">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Définitions</div>
      <p>Soit \( (u_n)_{n \in I} \) une suite numérique :</p>
      <ul class="cours-list">
        <li>\( (u_n) \) est <strong>majorée</strong> par un nombre réel \( M \) \( \iff \forall n \in I, \quad u_n \leq M \)</li>
        <li>\( (u_n) \) est <strong>minorée</strong> par un nombre réel \( m \) \( \iff \forall n \in I, \quad u_n \geq m \)</li>
        <li>\( (u_n) \) est <strong>bornée</strong> si \( (u_n) \) est majorée <strong>et</strong> minorée.</li>
      </ul>
    </div>

    <div class="box box-rem">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> Remarque</div>
      <p>\( (u_n) \) est bornée \( \iff \) il existe \( M > 0 \) tel que \( \forall n \in I, \; |u_n| \leq M \).</p>
    </div>
  </div>

  <!-- ═══════════ SECTION III — Monotonie ═══════════ -->
  <div class="cours-section reveal" id="s3">
    <span class="section-label blue-label">Section III</span>
    <h2 class="section-heading">Monotonie d'une suite</h2>

    <div class="box box-def">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Définitions</div>
      <p>Soit \( (u_n)_{n \in I} \) une suite numérique :</p>
      <ul class="cours-list">
        <li>\( (u_n) \) est <strong>croissante</strong> \( \iff \forall n \in I, \quad u_{n+1} \geq u_n \)</li>
        <li>\( (u_n) \) est <strong>décroissante</strong> \( \iff \forall n \in I, \quad u_{n+1} \leq u_n \)</li>
        <li>\( (u_n) \) est <strong>constante</strong> \( \iff \forall n \in I, \quad u_{n+1} = u_n \)</li>
      </ul>
    </div>

    <div class="box box-rem">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> Méthodes pour étudier la monotonie</div>
      <ul class="cours-list">
        <li><strong>Méthode 1 :</strong> Étudier le signe de \( u_{n+1} - u_n \).</li>
        <li><strong>Méthode 2 :</strong> Si \( u_n > 0 \), comparer \( \dfrac{u_{n+1}}{u_n} \) avec 1.</li>
        <li><strong>Méthode 3 :</strong> Si \( u_n = f(n) \), étudier les variations de la fonction \( f \).</li>
      </ul>
    </div>
  </div>

  <!-- ═══════════ SECTION IV — Arithmétique / Géométrique ═══════════ -->
  <div class="cours-section reveal" id="s4">
    <span class="section-label emerald-label">Section IV</span>
    <h2 class="section-heading">Suite arithmétique <em>&</em> suite géométrique</h2>

    <div class="math-table-wrap">
      <table class="math-table">
        <tr>
          <th></th>
          <th>Suite arithmétique de raison \( r \)</th>
          <th>Suite géométrique de raison \( q \)</th>
        </tr>
        <tr>
          <th>Définition</th>
          <td>\( u_{n+1} = u_n + r \)</td>
          <td>\( u_{n+1} = q \times u_n \)</td>
        </tr>
        <tr>
          <th>Terme général</th>
          <td>\( u_n = u_p + (n - p) \cdot r \)</td>
          <td>\( u_n = u_p \times q^{n-p} \)</td>
        </tr>
        <tr>
          <th>Somme de termes consécutifs</th>
          <td>\( u_p + \ldots + u_n = (n-p+1)\!\left(\dfrac{u_p + u_n}{2}\right) \)</td>
          <td>\( u_p + \ldots + u_n = u_p \times \dfrac{q^{n-p+1} - 1}{q - 1} \)</td>
        </tr>
        <tr>
          <th>\( a, b, c \) trois termes consécutifs</th>
          <td>\( 2b = a + c \)</td>
          <td>\( b^2 = a \times c \)</td>
        </tr>
      </table>
    </div>

    <div class="box box-rem">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> Cas particulier de la somme</div>
      <p>Si \( p = 0 \) :</p>
      <ul class="cours-list">
        <li><strong>Arithmétique :</strong> \( \displaystyle\sum_{k=0}^{n} u_k = (n+1)\!\left(\dfrac{u_0 + u_n}{2}\right) \)</li>
        <li><strong>Géométrique :</strong> \( \displaystyle\sum_{k=0}^{n} u_k = u_0 \times \dfrac{q^{n+1} - 1}{q - 1} \quad (q \neq 1) \)</li>
      </ul>
    </div>

    <div class="box box-example">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg> Rappel utile</div>
      <p>\( 1 + 2 + 3 + \ldots + n = \dfrac{n(n+1)}{2} \)</p>
      <p>\( 1 + q + q^2 + \ldots + q^n = \dfrac{q^{n+1} - 1}{q - 1} \quad (q \neq 1) \)</p>
    </div>
  </div>

  <!-- ═══════════ SECTION V — Critères de convergence ═══════════ -->
  <div class="cours-section reveal" id="s5">
    <span class="section-label brown-label">Section V</span>
    <h2 class="section-heading">Critères de convergence</h2>

    <div class="box box-thm">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Théorèmes fondamentaux</div>
      <ul class="cours-list">
        <li>Toute suite <strong>croissante</strong> et <strong>majorée</strong> est <strong style="color:var(--correct);">convergente</strong>.</li>
        <li>Toute suite <strong>décroissante</strong> et <strong>minorée</strong> est <strong style="color:var(--correct);">convergente</strong>.</li>
      </ul>
    </div>

    <div class="divider"></div>

    <div class="grid-2x2">
      <div class="box box-thm">
        <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Théorème des gendarmes</div>
        <p>Si \( v_n \leq u_n \leq w_n \) et \( \displaystyle\lim_{n\to+\infty} v_n = \lim_{n\to+\infty} w_n = \ell \), alors :</p>
        <p style="text-align:center;margin-top:8px;font-size:1.05rem;font-weight:600;color:var(--teal);">\( \displaystyle\lim_{n\to+\infty} u_n = \ell \)</p>
      </div>
      <div class="box box-thm">
        <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Variante avec valeur absolue</div>
        <p>Si \( |u_n - \ell| \leq v_n \) et \( \displaystyle\lim_{n\to+\infty} v_n = 0 \), alors :</p>
        <p style="text-align:center;margin-top:8px;font-size:1.05rem;font-weight:600;color:var(--teal);">\( \displaystyle\lim_{n\to+\infty} u_n = \ell \)</p>
      </div>
      <div class="box box-prop">
        <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Comparaison pour \( +\infty \)</div>
        <p>Si \( u_n \geq v_n \) et \( \displaystyle\lim_{n\to+\infty} v_n = +\infty \), alors :</p>
        <p style="text-align:center;margin-top:8px;font-size:1.05rem;font-weight:600;color:var(--teal);">\( \displaystyle\lim_{n\to+\infty} u_n = +\infty \)</p>
      </div>
      <div class="box box-prop">
        <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Comparaison pour \( -\infty \)</div>
        <p>Si \( u_n \leq v_n \) et \( \displaystyle\lim_{n\to+\infty} v_n = -\infty \), alors :</p>
        <p style="text-align:center;margin-top:8px;font-size:1.05rem;font-weight:600;color:var(--teal);">\( \displaystyle\lim_{n\to+\infty} u_n = -\infty \)</p>
      </div>
    </div>
  </div>

  <!-- ═══════════ SECTION VI — Limites de référence ═══════════ -->
  <div class="cours-section reveal" id="s6">
    <span class="section-label orange-label">Section VI</span>
    <h2 class="section-heading">Limites de référence</h2>

    <h3 class="sub-heading">1. Limite de la suite \( (n^\alpha) \) avec \( \alpha \in \mathbb{Q}^* \)</h3>

    <div class="math-table-wrap">
      <table class="math-table">
        <tr>
          <th>\( \alpha < 0 \)</th>
          <th>\( \alpha > 0 \)</th>
        </tr>
        <tr>
          <td>\( \displaystyle\lim_{n\to+\infty} n^\alpha = 0 \)</td>
          <td>\( \displaystyle\lim_{n\to+\infty} n^\alpha = +\infty \)</td>
        </tr>
      </table>
    </div>

    <div class="box box-example">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg> Exemples</div>
      <ul class="cours-list">
        <li>\( \displaystyle\lim_{n\to+\infty} n^2 = +\infty \;;\quad \lim_{n\to+\infty} \sqrt{n} = +\infty \;;\quad \lim_{n\to+\infty} \dfrac{1}{n} = 0 \;;\quad \lim_{n\to+\infty} \dfrac{1}{n^3} = 0 \)</li>
      </ul>
    </div>

    <h3 class="sub-heading">2. Limite de la suite \( (q^n) \) avec \( q \in \mathbb{R} \)</h3>

    <div class="math-table-wrap">
      <table class="math-table">
        <tr>
          <th>\( q \leq -1 \)</th>
          <th>\( -1 < q < 1 \)</th>
          <th>\( q = 1 \)</th>
          <th>\( q > 1 \)</th>
        </tr>
        <tr>
          <td>La suite \( (q^n) \) <strong>n'admet pas</strong> de limite</td>
          <td>\( \displaystyle\lim_{n\to+\infty} q^n = 0 \)</td>
          <td>\( \displaystyle\lim_{n\to+\infty} q^n = 1 \)</td>
          <td>\( \displaystyle\lim_{n\to+\infty} q^n = +\infty \)</td>
        </tr>
      </table>
    </div>

    <div class="box box-example">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg> Exemples</div>
      <ul class="cours-list">
        <li>\( \displaystyle\lim_{n\to+\infty} \left(\dfrac{1}{2}\right)^n = 0 \;;\quad \lim_{n\to+\infty} 3^n = +\infty \;;\quad \lim_{n\to+\infty} (-1)^n \) n'existe pas.</li>
      </ul>
    </div>
  </div>

  <!-- ═══════════ SECTION VII — Suite vn = f(un) ═══════════ -->
  <div class="cours-section reveal" id="s7">
    <span class="section-label plum-label">Section VII</span>
    <h2 class="section-heading">Suite de type \( v_n = f(u_n) \)</h2>

    <div class="box box-thm">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Théorème</div>
      <p>Si \( (u_n)_{n \in I} \) est une suite convergente de limite \( \ell \), et si \( f \) est une fonction <strong>continue</strong> en \( \ell \), alors :</p>
      <p>La suite \( (v_n) \) définie par \( v_n = f(u_n) \) est <strong>convergente</strong> et :</p>
      <p style="text-align:center;margin:12px 0;font-size:1.1rem;font-weight:600;color:var(--teal);">\( \displaystyle\lim_{n\to+\infty} v_n = \lim_{n\to+\infty} f(u_n) = f(\ell) \)</p>
    </div>

    <div class="box box-example">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg> Exemple</div>
      <p>Si \( u_n \to 2 \) et \( v_n = \sqrt{u_n + 5} \), alors \( v_n \to \sqrt{2+5} = \sqrt{7} \) car \( x \mapsto \sqrt{x+5} \) est continue en 2.</p>
    </div>
  </div>

  <!-- ═══════════ SECTION VIII — Suite un+1 = f(un) ═══════════ -->
  <div class="cours-section reveal" id="s8">
    <span class="section-label rose-label">Section VIII</span>
    <h2 class="section-heading">Suite de type \( u_{n+1} = f(u_n) \)</h2>

    <div class="box box-def">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Définition</div>
      <p>Soit \( (u_n) \) une suite numérique définie par :</p>
      <p style="text-align:center;margin:10px 0;">\( \begin{cases} u_0 = a \\ u_{n+1} = f(u_n) \quad n \in \mathbb{N} \end{cases} \)</p>
      <p>où \( f \) est une fonction définie sur un intervalle \( I \).</p>
    </div>

    <div class="box box-thm">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Théorème — Limite d'une suite récurrente</div>
      <p>Si les conditions suivantes sont vérifiées :</p>
      <ul class="cours-list">
        <li>\( f \) est <strong>continue</strong> sur un intervalle \( I \)</li>
        <li>\( f(I) \subset I \) &nbsp; (l'intervalle \( I \) est stable par \( f \))</li>
        <li>\( a \in I \) &nbsp; (le premier terme appartient à \( I \))</li>
        <li>\( (u_n) \) est <strong>convergente</strong></li>
      </ul>
      <p style="margin-top:12px;">Alors la limite \( \ell \) de la suite \( (u_n) \) est <strong>solution de l'équation</strong> :</p>
      <p style="text-align:center;margin:12px 0;font-size:1.1rem;font-weight:600;color:var(--teal);">\( f(x) = x \)</p>
      <p style="font-size:0.88rem;color:var(--text-light);">C'est-à-dire : \( \ell \) est un <strong>point fixe</strong> de \( f \).</p>
    </div>

    <div class="box box-rem">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> Méthode pratique en exercice</div>
      <ul class="cours-list">
        <li><strong>Étape 1 :</strong> Montrer que \( f(I) \subset I \) (souvent par récurrence : \( \forall n,\; u_n \in I \)).</li>
        <li><strong>Étape 2 :</strong> Montrer que \( (u_n) \) est monotone (étudier \( u_{n+1} - u_n \)).</li>
        <li><strong>Étape 3 :</strong> Montrer que \( (u_n) \) est bornée (majorée si croissante, minorée si décroissante).</li>
        <li><strong>Étape 4 :</strong> Conclure que \( (u_n) \) converge, puis résoudre \( f(x) = x \) pour trouver \( \ell \).</li>
      </ul>
    </div>

    <div class="box box-example">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg> Exemple</div>
      <p>Soit \( u_0 = 1 \) et \( u_{n+1} = \sqrt{2 + u_n} \). On pose \( f(x) = \sqrt{2+x} \) sur \( I = [0, +\infty[ \).</p>
      <p>Si on montre que \( (u_n) \) converge vers \( \ell \), alors \( \ell = \sqrt{2+\ell} \), donc \( \ell^2 = 2+\ell \), soit \( \ell^2 - \ell - 2 = 0 \). On obtient \( \ell = 2 \) (car \( \ell \geq 0 \)).</p>
    </div>
  </div>
`,
        exercises: [
            {
                title: "Exercice 1 : Limite de suite rationnelle",
                statement: "Calculer la limite de Un = (3n² + 5) / (2n² - 1) quand n tend vers l'infini.",
                solution: "En factorisant par le terme de plus haut degré : Un = n²(3 + 5/n²) / [n²(2 - 1/n²)] = (3 + 5/n²) / (2 - 1/n²).<br>Quand n → +∞, 5/n² → 0 et 1/n² → 0, donc <strong>lim Un = 3/2</strong>."
            }
        ],
        exams: [
            { title: "Devoir Surveillé N°3 - Suites et Fonctions", type: "Devoir", year: 2026 }
        ]
    },
    {
        id: "math-primitives",
        title: "Fonctions primitives",
        level: "2bac-pc",
        subject: "math",
        description: "Définition d'une primitive, primitives des fonctions usuelles et opérations pour déterminer les primitives.",
        courseContent: `
<div class="toc reveal">
    <div class="toc-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg> Sommaire</div>
    <ol class="toc-list">
      <li><a href="#s1"><span class="toc-num">I</span> Définition d'une primitive</a></li>
      <li><a href="#s2"><span class="toc-num">II</span> Existence et unicité des primitives</a></li>
      <li><a href="#s3"><span class="toc-num">III</span> Propriété de linéarité</a></li>
      <li><a href="#s4"><span class="toc-num">IV</span> Tableau des primitives</a></li>
    </ol>
  </div>

  <!-- ═══════════ SECTION I — Définition ═══════════ -->
  <div class="cours-section reveal" id="s1">
    <span class="section-label">Section I</span>
    <h2 class="section-heading">Définition d'une primitive</h2>

    <div class="box box-def">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Définition</div>
      <p>Soit \( f \) une fonction définie sur un intervalle \( I \).</p>
      <p>On dit que \( F \) est une <strong>fonction primitive</strong> de \( f \) sur \( I \) si :</p>
      <ul class="cours-list">
        <li>\( F \) est dérivable sur \( I \)</li>
        <li>\( \forall x \in I, \quad F'(x) = f(x) \)</li>
      </ul>
    </div>

    <div class="box box-example">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg> Exemples</div>
      <ul class="cours-list">
        <li>\( F(x) = x^3 \) est une primitive de \( f(x) = 3x^2 \) sur \( \mathbb{R} \), car \( F'(x) = 3x^2 = f(x) \).</li>
        <li>\( F(x) = \sin x \) est une primitive de \( f(x) = \cos x \) sur \( \mathbb{R} \), car \( F'(x) = \cos x = f(x) \).</li>
        <li>\( F(x) = e^x \) est une primitive de \( f(x) = e^x \) sur \( \mathbb{R} \), car \( F'(x) = e^x = f(x) \).</li>
      </ul>
    </div>
  </div>

  <!-- ═══════════ SECTION II — Existence et unicité ═══════════ -->
  <div class="cours-section reveal" id="s2">
    <span class="section-label gold-label">Section II</span>
    <h2 class="section-heading">Existence <em>&</em> unicité des primitives</h2>

    <div class="box box-thm">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Théorème d'existence</div>
      <p>Toute fonction <strong>continue</strong> sur un intervalle \( I \) admet des <strong>primitives</strong> sur \( I \).</p>
    </div>

    <div class="box box-thm">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Famille de primitives</div>
      <p>Si \( f \) admet une primitive \( F \) sur un intervalle \( I \), alors toute fonction \( G \) définie sur \( I \) par :</p>
      <p style="text-align:center;margin:12px 0;font-size:1.1rem;font-weight:600;color:var(--teal);">\( G(x) = F(x) + k \quad (k \in \mathbb{R}) \)</p>
      <p>est aussi une primitive de \( f \) sur \( I \).</p>
    </div>

    <div class="box box-rem">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> Remarque</div>
      <p>Deux primitives d'une même fonction diffèrent d'une <strong>constante</strong>. Si \( F \) et \( G \) sont deux primitives de \( f \) sur \( I \), alors il existe \( k \in \mathbb{R} \) tel que \( G(x) = F(x) + k \).</p>
    </div>

    <div class="box box-thm">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Primitive avec condition initiale</div>
      <p>Soit \( f \) une fonction admettant des primitives sur un intervalle \( I \). Soit \( x_0 \in I \) et \( y_0 \in \mathbb{R} \).</p>
      <p>Il existe une <strong>seule primitive</strong> \( F \) de \( f \) sur \( I \) vérifiant la condition :</p>
      <p style="text-align:center;margin:12px 0;font-size:1.1rem;font-weight:600;color:var(--teal);">\( F(x_0) = y_0 \)</p>
    </div>

    <div class="box box-example">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg> Exemple</div>
      <p>Trouver la primitive \( F \) de \( f(x) = 2x \) telle que \( F(1) = 3 \).</p>
      <p>Les primitives de \( 2x \) sont \( F(x) = x^2 + k \). La condition \( F(1) = 3 \) donne \( 1 + k = 3 \), donc \( k = 2 \).</p>
      <p>Résultat : \( F(x) = x^2 + 2 \).</p>
    </div>
  </div>

  <!-- ═══════════ SECTION III — Linéarité ═══════════ -->
  <div class="cours-section reveal" id="s3">
    <span class="section-label blue-label">Section III</span>
    <h2 class="section-heading">Propriété de linéarité</h2>

    <div class="box box-prop">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Propriété</div>
      <p>Si \( F \) et \( G \) sont des primitives respectives de \( f \) et \( g \) sur un intervalle \( I \), et si \( k \) est un réel, alors :</p>
      <ul class="cours-list">
        <li>\( (F + G) \) est une primitive de \( (f + g) \) sur \( I \).</li>
        <li>\( (k \cdot F) \) est une primitive de \( (k \cdot f) \) sur \( I \).</li>
      </ul>
    </div>

    <div class="box box-rem">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> En pratique</div>
      <p>La linéarité permet de calculer la primitive d'une somme terme à terme. Par exemple :</p>
      <p>Une primitive de \( f(x) = 3x^2 + 2\cos x - \dfrac{1}{x} \) est \( F(x) = x^3 + 2\sin x - \ln|x| + C \).</p>
    </div>
  </div>

  <!-- ═══════════ SECTION IV — Tableau des primitives ═══════════ -->
  <div class="cours-section reveal" id="s4">
    <span class="section-label emerald-label">Section IV</span>
    <h2 class="section-heading">Tableau des primitives</h2>

    <h3 class="sub-heading">1. Fonctions de base</h3>
    <div class="math-table-wrap">
      <table class="math-table">
        <tr><th>Fonction \( f(x) \)</th><th>Primitive \( F(x) + C \)</th></tr>
        <tr><td>\( a \) (constante)</td><td>\( ax \)</td></tr>
        <tr><td>\( x \)</td><td>\( \dfrac{x^2}{2} \)</td></tr>
        <tr><td>\( x^n \quad (n \neq -1) \)</td><td>\( \dfrac{x^{n+1}}{n+1} \)</td></tr>
        <tr><td>\( \dfrac{1}{x} \)</td><td>\( \ln|x| \)</td></tr>
        <tr><td>\( \dfrac{1}{x^2} \)</td><td>\( \dfrac{-1}{x} \)</td></tr>
        <tr><td>\( \dfrac{1}{\sqrt{x}} \)</td><td>\( 2\sqrt{x} \)</td></tr>
        <tr><td>\( e^x \)</td><td>\( e^x \)</td></tr>
        <tr><td>\( \sin x \)</td><td>\( -\cos x \)</td></tr>
        <tr><td>\( \cos x \)</td><td>\( \sin x \)</td></tr>
      </table>
    </div>

    <h3 class="sub-heading">2. Formes composées \( \small{(U' = dU/dx)} \)</h3>

    <div class="box box-rem">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> Astuce</div>
      <p>Pour les formes composées, il faut repérer la forme \( U' \cdot f(U) \) pour appliquer la formule correspondante.</p>
    </div>

    <div class="math-table-wrap">
      <table class="math-table">
        <tr><th>Forme composée</th><th>Primitive</th></tr>
        <tr><td>\( U' \cdot U \)</td><td>\( \dfrac{U^2}{2} \)</td></tr>
        <tr><td>\( U' \cdot U^n \quad (n \neq -1) \)</td><td>\( \dfrac{U^{n+1}}{n+1} \)</td></tr>
        <tr><td>\( \dfrac{U'}{U^2} \)</td><td>\( \dfrac{-1}{U} \)</td></tr>
        <tr><td>\( \dfrac{U'}{\sqrt{U}} \)</td><td>\( 2\sqrt{U} \)</td></tr>
        <tr><td>\( \dfrac{U'}{U} \)</td><td>\( \ln|U| \)</td></tr>
        <tr><td>\( U' \cdot e^U \)</td><td>\( e^U \)</td></tr>
        <tr><td>\( U' \cdot \sin(U) \)</td><td>\( -\cos(U) \)</td></tr>
        <tr><td>\( U' \cdot \cos(U) \)</td><td>\( \sin(U) \)</td></tr>
      </table>
    </div>

    <div class="box box-example">
      <div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg> Exemples d'application</div>
      <ul class="cours-list">
        <li>Primitive de \( f(x) = 2x \cdot e^{x^2} \) : on a \( U = x^2 \), \( U' = 2x \), forme \( U' \cdot e^U \). Primitive : \( F(x) = e^{x^2} + C \).</li>
        <li>Primitive de \( f(x) = \dfrac{2x+1}{x^2+x+3} \) : on a \( U = x^2+x+3 \), \( U' = 2x+1 \), forme \( \dfrac{U'}{U} \). Primitive : \( F(x) = \ln|x^2+x+3| + C \).</li>
        <li>Primitive de \( f(x) = \cos(3x) \) : on a \( U = 3x \), \( U' = 3 \). On écrit \( \cos(3x) = \frac{1}{3} \cdot 3\cos(3x) \). Primitive : \( F(x) = \dfrac{1}{3}\sin(3x) + C \).</li>
      </ul>
    </div>
  </div>
`,
        exercises: [
            {
                title: "Exercice 1 : Primitive simple",
                statement: "Déterminer la primitive de f(x) = 3x² + 4x - 1 qui s'annule en x = 0.",
                solution: "La primitive générale est F(x) = x³ + 2x² - x + C.<br>Puisque F(0) = 0, on a C = 0.<br>La solution est donc <strong>F(x) = x³ + 2x² - x</strong>."
            }
        ],
        exams: [
            { title: "Contrôle Continu N°1 - Semestre 2", type: "Devoir", year: 2026 }
        ]
    },
    {
        id: "math-logarithmes",
        title: "Fonctions logarithmiques",
        level: "2bac-pc",
        subject: "math",
        description: "Étude complète de la fonction logarithme népérien (ln) : propriétés algébriques, limites de référence et dérivées.",
        courseContent: `
<div class="toc reveal"><div class="toc-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg> Sommaire</div><ol class="toc-list">
    <li><a href="#s1"><span class="toc-num">I</span> Définition du logarithme népérien</a></li>
    <li><a href="#s2"><span class="toc-num">II</span> Propriétés de la fonction ln</a></li>
    <li><a href="#s5"><span class="toc-num">III</span> Les limites de référence</a></li>
    <li><a href="#s6"><span class="toc-num">IV</span> Dérivation</a></li>
    <li><a href="#s7"><span class="toc-num">V</span> Fonction logarithme de base \( a \)</a></li>
  </ol></div>

  <!-- I -->
  <div class="cours-section reveal" id="s1"><span class="section-label">Section I</span><h2 class="section-heading">Définition du logarithme népérien</h2>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:start">
      <div class="box box-def" style="margin:0"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Définition</div>
        <p>Le <strong>logarithme népérien</strong>, noté \(\ln\), est la primitive de \(x \mapsto \dfrac{1}{x}\) sur \(]0,+\infty[\) qui s'annule en 1.</p>
        <p style="text-align:center;margin:14px 0;font-size:1.1rem;font-weight:600;color:var(--teal)">\(\ln'(x)=\dfrac{1}{x}\quad\forall x\in\,]0,+\infty[\)</p>
        <p style="text-align:center;font-size:1.05rem;font-weight:600;color:var(--teal)">\(\ln(1)=0\)</p>
      </div>
      <div style="background:var(--white);border:1px solid rgba(13,115,119,0.12);border-radius:12px;padding:16px;display:flex;flex-direction:column;align-items:center">
        <p style="font-size:0.78rem;font-weight:600;color:var(--teal);letter-spacing:0.06em;text-transform:uppercase;margin-bottom:8px">Courbe de \( y = \ln(x) \)</p>
        <svg viewBox="-60 -130 500 310" width="100%" style="max-width:340px" xmlns="http://www.w3.org/2000/svg">
          <!-- Grid lines -->
          <!-- Vertical grid: 1 unit = 45px, origin at (0,0) -->
          <line x1="-45" y1="-120" x2="-45" y2="170" stroke="#ccc" stroke-width="0.4"/>
          <line x1="45" y1="-120" x2="45" y2="170" stroke="#ccc" stroke-width="0.4"/>
          <line x1="90" y1="-120" x2="90" y2="170" stroke="#ccc" stroke-width="0.4"/>
          <line x1="135" y1="-120" x2="135" y2="170" stroke="#ccc" stroke-width="0.4"/>
          <line x1="180" y1="-120" x2="180" y2="170" stroke="#ccc" stroke-width="0.4"/>
          <line x1="225" y1="-120" x2="225" y2="170" stroke="#ccc" stroke-width="0.4"/>
          <line x1="270" y1="-120" x2="270" y2="170" stroke="#ccc" stroke-width="0.4"/>
          <line x1="315" y1="-120" x2="315" y2="170" stroke="#ccc" stroke-width="0.4"/>
          <line x1="360" y1="-120" x2="360" y2="170" stroke="#ccc" stroke-width="0.4"/>
          <line x1="405" y1="-120" x2="405" y2="170" stroke="#ccc" stroke-width="0.4"/>
          <!-- Horizontal grid -->
          <line x1="-50" y1="-90" x2="430" y2="-90" stroke="#ccc" stroke-width="0.4"/>
          <line x1="-50" y1="-45" x2="430" y2="-45" stroke="#ccc" stroke-width="0.4"/>
          <line x1="-50" y1="45" x2="430" y2="45" stroke="#ccc" stroke-width="0.4"/>
          <line x1="-50" y1="90" x2="430" y2="90" stroke="#ccc" stroke-width="0.4"/>

          <!-- Axes (blue like reference) -->
          <defs>
            <marker id="arrowB" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#0000cc"/>
            </marker>
          </defs>
          <line x1="0" y1="170" x2="0" y2="-120" stroke="#0000cc" stroke-width="2" marker-end="url(#arrowB)"/>
          <line x1="-50" y1="0" x2="430" y2="0" stroke="#0000cc" stroke-width="2" marker-end="url(#arrowB)"/>

          <!-- Tick marks on x-axis -->
          <line x1="-45" y1="-4" x2="-45" y2="4" stroke="#0000cc" stroke-width="1.5"/>
          <text x="-50" y="18" font-size="12" fill="#0000cc" font-family="Source Sans 3" text-anchor="middle">-1</text>

          <text x="-12" y="18" font-size="12" fill="#0000cc" font-family="Source Sans 3">0</text>

          <line x1="45" y1="-4" x2="45" y2="4" stroke="#0000cc" stroke-width="1.5"/>
          <text x="45" y="18" font-size="12" fill="#0000cc" font-family="Source Sans 3" text-anchor="middle">1</text>

          <line x1="90" y1="-4" x2="90" y2="4" stroke="#0000cc" stroke-width="1.5"/>
          <text x="90" y="18" font-size="12" fill="#0000cc" font-family="Source Sans 3" text-anchor="middle">2</text>

          <!-- e ≈ 2.71 → 2.71 * 45 ≈ 122 -->
          <line x1="122" y1="-4" x2="122" y2="4" stroke="#cc0000" stroke-width="1.5"/>
          <text x="122" y="18" font-size="12" fill="#cc0000" font-family="Source Sans 3" text-anchor="middle" font-weight="700">e</text>

          <line x1="135" y1="-4" x2="135" y2="4" stroke="#0000cc" stroke-width="1.5"/>
          <text x="135" y="18" font-size="12" fill="#0000cc" font-family="Source Sans 3" text-anchor="middle">3</text>

          <line x1="180" y1="-4" x2="180" y2="4" stroke="#0000cc" stroke-width="1.5"/>
          <text x="180" y="18" font-size="12" fill="#0000cc" font-family="Source Sans 3" text-anchor="middle">4</text>

          <line x1="225" y1="-4" x2="225" y2="4" stroke="#0000cc" stroke-width="1.5"/>
          <text x="225" y="18" font-size="12" fill="#0000cc" font-family="Source Sans 3" text-anchor="middle">5</text>

          <line x1="270" y1="-4" x2="270" y2="4" stroke="#0000cc" stroke-width="1.5"/>
          <text x="270" y="18" font-size="12" fill="#0000cc" font-family="Source Sans 3" text-anchor="middle">6</text>

          <line x1="315" y1="-4" x2="315" y2="4" stroke="#0000cc" stroke-width="1.5"/>
          <text x="315" y="18" font-size="12" fill="#0000cc" font-family="Source Sans 3" text-anchor="middle">7</text>

          <line x1="360" y1="-4" x2="360" y2="4" stroke="#0000cc" stroke-width="1.5"/>
          <text x="360" y="18" font-size="12" fill="#0000cc" font-family="Source Sans 3" text-anchor="middle">8</text>

          <line x1="405" y1="-4" x2="405" y2="4" stroke="#0000cc" stroke-width="1.5"/>
          <text x="405" y="18" font-size="12" fill="#0000cc" font-family="Source Sans 3" text-anchor="middle">9</text>

          <!-- Tick marks on y-axis -->
          <line x1="-4" y1="-90" x2="4" y2="-90" stroke="#0000cc" stroke-width="1.5"/>
          <text x="-18" y="-86" font-size="12" fill="#0000cc" font-family="Source Sans 3" text-anchor="middle">2</text>

          <line x1="-4" y1="-45" x2="4" y2="-45" stroke="#0000cc" stroke-width="1.5"/>
          <text x="-18" y="-41" font-size="12" fill="#0000cc" font-family="Source Sans 3" text-anchor="middle">1</text>

          <line x1="-4" y1="45" x2="4" y2="45" stroke="#0000cc" stroke-width="1.5"/>
          <text x="-22" y="49" font-size="12" fill="#0000cc" font-family="Source Sans 3" text-anchor="middle">-1</text>

          <line x1="-4" y1="90" x2="4" y2="90" stroke="#0000cc" stroke-width="1.5"/>
          <text x="-22" y="94" font-size="12" fill="#0000cc" font-family="Source Sans 3" text-anchor="middle">-2</text>

          <!-- Red dashed lines from (e,0) to (e,1) to (0,1) -->
          <line x1="122" y1="0" x2="122" y2="-45" stroke="#cc0000" stroke-width="1.8" stroke-dasharray="8,5"/>
          <line x1="0" y1="-45" x2="122" y2="-45" stroke="#cc0000" stroke-width="1.8" stroke-dasharray="8,5"/>

          <!-- The ln(x) curve (green like reference) -->
          <!-- Key points: ln(0.1)=-2.3→(4.5,103.5) ln(0.15)=-1.9→(6.75,85.5) ln(0.25)=-1.39→(11.25,62.6) ln(0.37)=-1→(16.6,45) ln(0.5)=-0.69→(22.5,31.1) ln(0.75)=-0.29→(33.75,13) ln(1)=0→(45,0) ln(1.5)=0.41→(67.5,-18.4) ln(2)=0.69→(90,-31.1) ln(e)=1→(122,-45) ln(3)=1.1→(135,-49.5) ln(4)=1.39→(180,-62.6) ln(5)=1.61→(225,-72.4) ln(6)=1.79→(270,-80.6) ln(7)=1.95→(315,-87.8) ln(8)=2.08→(360,-93.6) ln(9)=2.2→(405,-99) -->
          <path d="M 3,150 C 5,120 7,100 11.25,62.6 C 14,48 16.6,45 22.5,31.1 C 28,18 33.75,13 45,0 C 56,-12 67.5,-18.4 90,-31.1 C 105,-38 122,-45 135,-49.5 C 157,-56 180,-62.6 225,-72.4 C 270,-80.6 315,-87.8 360,-93.6 C 385,-96 405,-99 425,-102" fill="none" stroke="#009900" stroke-width="3" stroke-linecap="round"/>

          <!-- Label f(x) = ln(x) -->
          <text x="55" y="80" font-size="14" fill="#009900" font-family="Source Sans 3" font-style="italic" font-weight="600">f(x) = ln(x)</text>
        </svg>
      </div>
    </div>
    <style>@media(max-width:640px){#s1 .section-heading+div{grid-template-columns:1fr!important}}</style>
  </div>

  <!-- II -->
  <!-- II — Propriétés (merged) -->
  <div class="cours-section reveal" id="s2"><span class="section-label gold-label">Section II</span><h2 class="section-heading">Propriétés de la fonction ln</h2>

    <h3 class="sub-heading">1. Propriétés fondamentales</h3>
    <div class="box box-prop"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Continuité et monotonie</div>
      <ul class="cours-list">
        <li>\(\ln\) est une fonction définie, continue et dérivable sur \(]0,+\infty[\).</li>
        <li>\(\ln\) est <strong>strictement croissante</strong> sur \(]0,+\infty[\).</li>
      </ul>
    </div>
    <div class="box box-prop"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Comparaison et signe</div>
      <ul class="cours-list">
        <li>\(\ln(x) > \ln(y) \iff x > y\)</li>
        <li>\(\ln(x) = \ln(y) \iff x = y\)</li>
        <li>\(\ln(x) > 0 \iff x > 1\)</li>
        <li>\(\ln(x) < 0 \iff 0 < x < 1\)</li>
      </ul>
    </div>
    <div class="box box-rem"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> Tableau de signes</div>
      <div class="math-table-wrap"><table class="math-table" style="min-width:250px">
        <tr><th>\(x\)</th><td>\(0\)</td><td></td><td>\(1\)</td><td></td><td>\(+\infty\)</td></tr>
        <tr><th>\(\ln(x)\)</th><td></td><td style="color:var(--wrong);font-weight:700">−</td><td style="font-weight:700">0</td><td style="color:var(--correct);font-weight:700">+</td><td></td></tr>
      </table></div>
    </div>

    <h3 class="sub-heading">2. Propriétés algébriques</h3>
    <div class="box box-thm"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Formules fondamentales</div>
      <p>Pour tous \(x, y \in \,]0, +\infty[\) et \(r \in \mathbb{Q}\) :</p>
      <ul class="cours-list">
        <li>\(\ln(xy) = \ln(x) + \ln(y)\)</li>
        <li>\(\ln\!\left(\dfrac{x}{y}\right) = \ln(x) - \ln(y)\)</li>
        <li>\(\ln\!\left(\dfrac{1}{x}\right) = -\ln(x)\)</li>
        <li>\(\ln(x^r) = r\,\ln(x)\)</li>
      </ul>
    </div>
    <div class="box box-example"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg> Exemples</div>
      <ul class="cours-list">
        <li>\(\ln(6) = \ln(2 \times 3) = \ln 2 + \ln 3\)</li>
        <li>\(\ln\!\left(\dfrac{3}{5}\right) = \ln 3 - \ln 5\)</li>
        <li>\(\ln(8) = \ln(2^3) = 3\ln 2\)</li>
        <li>\(\ln\!\left(\dfrac{1}{4}\right) = -\ln 4 = -2\ln 2\)</li>
        <li>\(\ln(\sqrt{x}) = \dfrac{1}{2}\ln(x)\)</li>
      </ul>
    </div>

    <h3 class="sub-heading">3. Le nombre \( e \)</h3>
    <div class="box box-def"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Définition</div>
      <p>Le nombre \(e\) est l'unique réel tel que :</p>
      <p style="text-align:center;margin:12px 0;font-size:1.1rem;font-weight:600;color:var(--teal)">\(\ln(e) = 1 \qquad e \approx 2{,}71\)</p>
    </div>
    <div class="box box-prop"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Propriétés</div>
      <ul class="cours-list">
        <li>\(\ln(e^r) = r \quad\) pour tout \(r \in \mathbb{Q}\)</li>
        <li>\(\ln(x) = r \iff x = e^r\)</li>
      </ul>
    </div>
    <div class="box box-rem"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> Passage ln ↔ exponentielle</div>
      <p>Les fonctions \(\ln\) et \(\exp\) sont réciproques l'une de l'autre. La relation \(\ln(x) = r \iff x = e^r\) permet de passer de la forme logarithmique à la forme exponentielle et inversement.</p>
    </div>
  </div>

  <!-- V -->
  <div class="cours-section reveal" id="s5"><span class="section-label brown-label">Section V</span><h2 class="section-heading">Les limites de référence</h2>
    <h3 class="sub-heading">1. Limites aux bornes</h3>
    <div class="grid-2x2">
      <div class="box box-thm"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> En \(0^+\)</div><p style="text-align:center;font-size:1.05rem;font-weight:600;color:var(--teal)">\(\displaystyle\lim_{x\to0^+}\ln(x)=-\infty\)</p></div>
      <div class="box box-thm"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> En \(+\infty\)</div><p style="text-align:center;font-size:1.05rem;font-weight:600;color:var(--teal)">\(\displaystyle\lim_{x\to+\infty}\ln(x)=+\infty\)</p></div>
    </div>
    <h3 class="sub-heading">2. Croissances comparées</h3>
    <div class="box box-thm"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> En \(0^+\)</div>
      <ul class="cours-list">
        <li>\(\displaystyle\lim_{x\to0^+}x\,\ln(x)=0\)</li>
        <li>\(\displaystyle\lim_{x\to0^+}x^n\,\ln(x)=0\qquad n\in\mathbb{N}^*\)</li>
      </ul>
    </div>
    <div class="box box-thm"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> En \(+\infty\)</div>
      <ul class="cours-list">
        <li>\(\displaystyle\lim_{x\to+\infty}\dfrac{\ln(x)}{x}=0\)</li>
        <li>\(\displaystyle\lim_{x\to+\infty}\dfrac{\ln(x)}{x^n}=0\qquad n\in\mathbb{N}^*\)</li>
      </ul>
    </div>
    <h3 class="sub-heading">3. Limites utiles</h3>
    <div class="grid-2x2">
      <div class="box box-prop"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Taux en 0</div><p style="text-align:center;font-size:1.05rem">\(\displaystyle\lim_{x\to0}\dfrac{\ln(x+1)}{x}=1\)</p></div>
      <div class="box box-prop"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Taux en 1</div><p style="text-align:center;font-size:1.05rem">\(\displaystyle\lim_{x\to1}\dfrac{\ln(x)}{x-1}=1\)</p></div>
    </div>
    <div class="box box-rem"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> Astuce mnémotechnique</div>
      <p><strong>Les puissances l'emportent toujours sur le logarithme</strong>, en \(0^+\) comme en \(+\infty\).</p>
    </div>
  </div>

  <!-- VI -->
  <div class="cours-section reveal" id="s6"><span class="section-label orange-label">Section VI</span><h2 class="section-heading">Dérivation</h2>
    <div class="box box-def"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Dérivée de ln</div>
      <p style="text-align:center;margin:10px 0;font-size:1.1rem;font-weight:600;color:var(--teal)">\((\ln x)'=\dfrac{1}{x}\qquad\text{sur }]0,+\infty[\)</p>
    </div>
    <div class="box box-thm"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Dérivée de ln|u(x)|</div>
      <p>Si \(u\) est dérivable sur \(I\) et ne s'annule pas sur \(I\), alors :</p>
      <p style="text-align:center;margin:12px 0;font-size:1.1rem;font-weight:600;color:var(--teal)">\(\left(\ln|u(x)|\right)'=\dfrac{u'(x)}{u(x)}\)</p>
    </div>
    <div class="box box-example"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg> Exemples</div>
      <ul class="cours-list">
        <li>\((\ln(x^2+1))'=\dfrac{2x}{x^2+1}\)</li>
        <li>\((\ln|2x-3|)'=\dfrac{2}{2x-3}\)</li>
        <li>\((\ln(\sin x))'=\dfrac{\cos x}{\sin x}\)</li>
      </ul>
    </div>
  </div>

  <!-- VII -->
  <div class="cours-section reveal" id="s7"><span class="section-label plum-label">Section VII</span><h2 class="section-heading">Fonction logarithme de base a</h2>
    <div class="box box-def"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Définition</div>
      <p>Soit \(a\) un réel strictement positif et différent de 1 :</p>
      <p style="text-align:center;margin:12px 0;font-size:1.1rem;font-weight:600;color:var(--teal)">\(\log_a(x)=\dfrac{\ln(x)}{\ln(a)}\)</p>
    </div>
    <div class="box box-prop"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Résultats</div>
      <ul class="cours-list">
        <li>\(\log_a(a)=1\)</li>
        <li>\(\log_e(x)=\ln(x)\)</li>
        <li>\(\log_a(a^r)=r\)</li>
      </ul>
    </div>
    <div class="box box-def"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Logarithme décimal</div>
      <p>Le logarithme de base 10, noté \(\log\) :</p>
      <p style="text-align:center;margin:12px 0;font-size:1.05rem">\(\log(x)=\dfrac{\ln(x)}{\ln(10)}\qquad\log(10^r)=r\)</p>
    </div>
    <div class="box box-example"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg> Exemples</div>
      <ul class="cours-list">
        <li>\(\log(100)=\log(10^2)=2\)</li>
        <li>\(\log_2(8)=\dfrac{\ln8}{\ln2}=\dfrac{3\ln2}{\ln2}=3\)</li>
      </ul>
    </div>
  </div>
`,
        exercises: [
            {
                title: "Exercice 1 : Résolution d'équation",
                statement: "Résoudre dans R l'équation : ln(x - 2) = 0.",
                solution: "L'équation est définie pour x > 2.<br>ln(x - 2) = 0 <=> x - 2 = 1 <=> x = 3.<br>Comme 3 ∈ ]2, +∞[, l'ensemble des solutions est <strong>S = {3}</strong>."
            }
        ],
        exams: [
            { title: "Devoir Surveillé N°3 - Logarithmes et Intégrales", type: "Devoir", year: 2026 }
        ]
    },
    {
        id: "math-complexes-pc",
        title: "Nombres complexes",
        level: "2bac-pc",
        subject: "math",
        description: "Forme algébrique, conjugué, module, argument, forme trigonométrique et résolution d'équations dans C.",
        courseContent: `
<div class="toc reveal"><div class="toc-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg> Sommaire</div><ol class="toc-list">
    <li><a href="#s1"><span class="toc-num">I</span> Définition et forme algébrique</a></li>
    <li><a href="#s2"><span class="toc-num">II</span> Conjugué et module</a></li>
    <li><a href="#s3"><span class="toc-num">III</span> Opérations</a></li>
    <li><a href="#s4"><span class="toc-num">IV</span> Puissances de i</a></li>
    <li><a href="#s5"><span class="toc-num">V</span> Forme trigonométrique (polaire)</a></li>
    <li><a href="#s6"><span class="toc-num">VI</span> Propriétés des arguments</a></li>
    <li><a href="#s7"><span class="toc-num">VII</span> Forme exponentielle d'Euler</a></li>
    <li><a href="#s8"><span class="toc-num">VIII</span> Formule de De Moivre et linéarisation</a></li>
    <li><a href="#s9"><span class="toc-num">IX</span> Interprétation géométrique</a></li>
    <li><a href="#s10"><span class="toc-num">X</span> Transformations du plan complexe</a></li>
    <li><a href="#s11"><span class="toc-num">XI</span> Valeurs remarquables et applications géométriques</a></li>
  </ol></div>

  <!-- ═══════════ I — Forme algébrique ═══════════ -->
  <div class="cours-section reveal" id="s1"><span class="section-label">Section I</span><h2 class="section-heading">Définition <em>&</em> forme algébrique</h2>
    <div class="box box-def"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Définition</div>
      <p>Le nombre \( i \) est l'<strong>unité imaginaire</strong> tel que \( i^2 = -1 \), soit \( i = \sqrt{-1} \).</p>
      <p>Tout <strong>nombre complexe</strong> \( z \) s'écrit sous la <strong>forme algébrique</strong> :</p>
      <p style="text-align:center;margin:12px 0;font-size:1.15rem;font-weight:600;color:var(--teal)">\( z = a + bi \)</p>
      <p>où \( a = \text{Re}(z) \in \mathbb{R} \) est la <strong>partie réelle</strong> et \( b = \text{Im}(z) \in \mathbb{R} \) est la <strong>partie imaginaire</strong>.</p>
    </div>
    <div class="box box-prop"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Cas particuliers</div>
      <div class="math-table-wrap"><table class="math-table"><tr><th>Type</th><th>Condition</th></tr>
        <tr><td>\( z \) est <strong>réel</strong></td><td>\( \text{Im}(z) = 0 \iff b = 0 \)</td></tr>
        <tr><td>\( z \) est <strong>imaginaire pur</strong></td><td>\( \text{Re}(z) = 0 \iff a = 0 \)</td></tr>
        <tr><td>\( z = 0 \)</td><td>\( a = 0 \) et \( b = 0 \)</td></tr>
        <tr><td>\( z_1 = z_2 \)</td><td>\( \text{Re}(z_1) = \text{Re}(z_2) \) et \( \text{Im}(z_1) = \text{Im}(z_2) \)</td></tr>
      </table></div>
    </div>
  </div>

  <!-- ═══════════ II — Conjugué et module ═══════════ -->
  <div class="cours-section reveal" id="s2"><span class="section-label gold-label">Section II</span><h2 class="section-heading">Conjugué <em>&</em> module</h2>
    <div class="grid-2x2">
      <div>
        <h3 class="sub-heading">Conjugué</h3>
        <div class="box box-def" style="margin-top:0"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Définition</div>
          <p>Le conjugué de \( z = a+bi \) est : \( \bar{z} = a - bi \)</p>
        </div>
        <div class="box box-prop"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Propriétés</div>
          <ul class="cours-list">
            <li>\( z + \bar{z} = 2\,\text{Re}(z) = 2a \)</li>
            <li>\( z - \bar{z} = 2i\,\text{Im}(z) = 2bi \)</li>
            <li>\( z \cdot \bar{z} = |z|^2 = a^2 + b^2 \)</li>
            <li>\( \overline{z_1 \pm z_2} = \bar{z_1} \pm \bar{z_2} \)</li>
            <li>\( \overline{z_1 \cdot z_2} = \bar{z_1} \cdot \bar{z_2} \)</li>
          </ul>
        </div>
      </div>
      <div>
        <h3 class="sub-heading">Module</h3>
        <div class="box box-def" style="margin-top:0"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Définition</div>
          <p style="text-align:center;font-size:1.05rem;font-weight:600;color:var(--teal)">\( |z| = \sqrt{a^2 + b^2} \)</p>
        </div>
        <div class="box box-prop"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Propriétés</div>
          <ul class="cours-list">
            <li>\( |z| \geq 0 \;;\quad |z| = 0 \iff z = 0 \)</li>
            <li>\( |\bar{z}| = |z| \)</li>
            <li>\( |z_1 \cdot z_2| = |z_1| \cdot |z_2| \)</li>
            <li>\( \left|\dfrac{z_1}{z_2}\right| = \dfrac{|z_1|}{|z_2|} \)</li>
            <li>\( |z^n| = |z|^n \)</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- ═══════════ III — Opérations ═══════════ -->
  <div class="cours-section reveal" id="s3"><span class="section-label blue-label">Section III</span><h2 class="section-heading">Opérations</h2>
    <p style="font-size:0.92rem;color:var(--text-mid);margin-bottom:12px">Soient \( z_1 = a + bi \) et \( z_2 = c + di \) :</p>
    <div class="math-table-wrap"><table class="math-table"><tr><th>Opération</th><th>Résultat</th></tr>
      <tr><td>\( z_1 + z_2 \)</td><td>\( (a+c) + (b+d)i \)</td></tr>
      <tr><td>\( z_1 - z_2 \)</td><td>\( (a-c) + (b-d)i \)</td></tr>
      <tr><td>\( z_1 \cdot z_2 \)</td><td>\( (ac - bd) + (ad + bc)i \)</td></tr>
      <tr><td>\( \dfrac{z_1}{z_2} \)</td><td>\( \dfrac{z_1 \cdot \bar{z_2}}{|z_2|^2} = \dfrac{ac+bd}{c^2+d^2} + \dfrac{bc-ad}{c^2+d^2}\,i \)</td></tr>
    </table></div>
    <div class="box box-rem"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> Astuce division</div>
      <p>Pour diviser, on multiplie numérateur et dénominateur par le <strong>conjugué du dénominateur</strong>.</p>
    </div>
  </div>

  <!-- ═══════════ IV — Puissances de i ═══════════ -->
  <div class="cours-section reveal" id="s4"><span class="section-label emerald-label">Section IV</span><h2 class="section-heading">Puissances de \( i \)</h2>
    <div class="box box-thm"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Cycle de période 4</div>
      <div class="math-table-wrap"><table class="math-table"><tr><th>\(i^0\)</th><th>\(i^1\)</th><th>\(i^2\)</th><th>\(i^3\)</th><th>\(i^{4k}\)</th><th>\(i^{4k+1}\)</th><th>\(i^{4k+2}\)</th><th>\(i^{4k+3}\)</th></tr>
        <tr><td>\(1\)</td><td>\(i\)</td><td>\(-1\)</td><td>\(-i\)</td><td style="color:var(--correct);font-weight:700">\(1\)</td><td style="color:var(--correct);font-weight:700">\(i\)</td><td style="color:var(--correct);font-weight:700">\(-1\)</td><td style="color:var(--correct);font-weight:700">\(-i\)</td></tr>
      </table></div>
    </div>
    <div class="box box-rem"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> Règle pratique</div>
      <p>Diviser l'exposant par 4. Le reste (0, 1, 2, 3) donne respectivement \( 1,\; i,\; -1,\; -i \).</p>
    </div>
  </div>

  <!-- ═══════════ V — Forme trigonométrique ═══════════ -->
  <div class="cours-section reveal" id="s5"><span class="section-label brown-label">Section V</span><h2 class="section-heading">Forme trigonométrique (polaire)</h2>
    <div class="box box-def"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Forme trigonométrique</div>
      <p>Tout nombre complexe \( z \neq 0 \) s'écrit :</p>
      <p style="text-align:center;margin:12px 0;font-size:1.15rem;font-weight:600;color:var(--teal)">\( z = r(\cos\theta + i\sin\theta) \)</p>
      <div class="math-table-wrap"><table class="math-table"><tr><th>Élément</th><th>Définition et calcul</th></tr>
        <tr><td>\( r = |z| \)</td><td>Module : \( r = \sqrt{a^2+b^2} \geq 0 \)</td></tr>
        <tr><td>\( \theta = \arg(z) \)</td><td>\( \cos\theta = \dfrac{a}{r} \) et \( \sin\theta = \dfrac{b}{r} \)</td></tr>
        <tr><td>\( a,\; b \)</td><td>\( a = r\cos\theta \;;\quad b = r\sin\theta \)</td></tr>
        <tr><td>\( \theta \in\, ]-\pi, \pi] \)</td><td>Argument principal (modulo \( 2\pi \))</td></tr>
      </table></div>
    </div>
  </div>

  <!-- ═══════════ VI — Propriétés des arguments ═══════════ -->
  <div class="cours-section reveal" id="s6"><span class="section-label rose-label">Section VI</span><h2 class="section-heading">Propriétés des arguments (mod \(2\pi\))</h2>
    <div class="math-table-wrap"><table class="math-table"><tr><th>Expression</th><th>Propriété</th><th>Expression</th><th>Propriété</th></tr>
      <tr><td>\(\arg(z_1 \cdot z_2)\)</td><td>\(\arg(z_1)+\arg(z_2)\)</td><td>\(\arg(\bar{z})\)</td><td>\(-\arg(z)\)</td></tr>
      <tr><td>\(\arg(z_1/z_2)\)</td><td>\(\arg(z_1)-\arg(z_2)\)</td><td>\(\arg(1/z)\)</td><td>\(-\arg(z)\)</td></tr>
      <tr><td>\(\arg(z^n)\)</td><td>\(n\cdot\arg(z)\)</td><td>\(\arg(-z)\)</td><td>\(\arg(z)+\pi\)</td></tr>
    </table></div>
  </div>

  <!-- ═══════════ VII — Forme exponentielle ═══════════ -->
  <div class="cours-section reveal" id="s7"><span class="section-label orange-label">Section VII</span><h2 class="section-heading">Forme exponentielle d'Euler</h2>
    <div class="box box-def"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Forme exponentielle</div>
      <p style="text-align:center;margin:12px 0;font-size:1.15rem;font-weight:600;color:var(--teal)">\( z = r \cdot e^{i\theta} \)</p>
      <p>Formule d'Euler : \( e^{i\theta} = \cos\theta + i\sin\theta \) &nbsp;;&nbsp; \( e^{-i\theta} = \cos\theta - i\sin\theta \)</p>
    </div>
    <div class="math-table-wrap"><table class="math-table"><tr><th>Opération</th><th>Formule exponentielle</th></tr>
      <tr><td>\(z_1 \cdot z_2\)</td><td>\(r_1 r_2 \cdot e^{i(\theta_1+\theta_2)}\)</td></tr>
      <tr><td>\(z_1 / z_2\)</td><td>\((r_1/r_2) \cdot e^{i(\theta_1-\theta_2)}\)</td></tr>
      <tr><td>\(z^n\)</td><td>\(r^n \cdot e^{in\theta}\)</td></tr>
      <tr><td>\(\bar{z}\)</td><td>\(r \cdot e^{-i\theta}\)</td></tr>
      <tr><td>\(1/z\)</td><td>\((1/r) \cdot e^{-i\theta}\)</td></tr>
    </table></div>
  </div>

  <!-- ═══════════ VIII — De Moivre & Linéarisation ═══════════ -->
  <div class="cours-section reveal" id="s8"><span class="section-label plum-label">Section VIII</span><h2 class="section-heading">Formule de De Moivre <em>&</em> linéarisation</h2>
    <div class="grid-2x2">
      <div class="box box-thm"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Formule de De Moivre</div>
        <p style="text-align:center;font-size:1.05rem;font-weight:600;color:var(--teal)">\( (\cos\theta + i\sin\theta)^n = \cos(n\theta) + i\sin(n\theta) \)</p>
        <p style="margin-top:8px;font-size:0.88rem;color:var(--text-light)">Ou bien : \( (r \cdot e^{i\theta})^n = r^n \cdot e^{in\theta} \)</p>
      </div>
      <div class="box box-thm"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Formules de linéarisation</div>
        <p>\( \cos\theta = \dfrac{e^{i\theta} + e^{-i\theta}}{2} \)</p>
        <p style="margin-top:8px">\( \sin\theta = \dfrac{e^{i\theta} - e^{-i\theta}}{2i} \)</p>
      </div>
    </div>
  </div>

  <!-- ═══════════ IX — Interprétation géométrique ═══════════ -->
  <div class="cours-section reveal" id="s9"><span class="section-label slate-label">Section IX</span><h2 class="section-heading">Interprétation géométrique</h2>
    <div class="math-table-wrap"><table class="math-table"><tr><th>Expression complexe</th><th>Sens géométrique</th></tr>
      <tr><td>\( |z_B - z_A| \)</td><td>Distance \( AB \)</td></tr>
      <tr><td>\( \arg(z_B - z_A) \)</td><td>Angle orienté \( (\vec{u},\, \overrightarrow{AB}) \)</td></tr>
      <tr><td>\( \dfrac{z_A + z_B}{2} \)</td><td>Affixe du milieu de \( [AB] \)</td></tr>
      <tr><td>\( |z - z_A| = r \)</td><td>Cercle de centre \( A \), rayon \( r \)</td></tr>
      <tr><td>\( |z - z_A| = |z - z_B| \)</td><td>Médiatrice du segment \( [AB] \)</td></tr>
      <tr><td>\( \arg\!\left(\dfrac{z_C - z_A}{z_B - z_A}\right) \)</td><td>Angle orienté \( (\overrightarrow{AB},\, \overrightarrow{AC}) \) au sommet \( A \)</td></tr>
    </table></div>
  </div>

  <!-- ═══════════ X — Transformations ═══════════ -->
  <div class="cours-section reveal" id="s10"><span class="section-label forest-label">Section X</span><h2 class="section-heading">Transformations du plan complexe</h2>
    <div class="math-table-wrap"><table class="math-table"><tr><th>Transformation</th><th>Écriture complexe</th></tr>
      <tr><td>Translation de vecteur \( \vec{u}\;(z_u) \)</td><td>\( z' = z + z_u \)</td></tr>
      <tr><td>Homothétie (centre \( \Omega \), rapport \( k \))</td><td>\( z' - z_\Omega = k(z - z_\Omega) \)</td></tr>
      <tr><td>Rotation (centre \( \Omega \), angle \( \theta \))</td><td>\( z' - z_\Omega = e^{i\theta}(z - z_\Omega) \)</td></tr>
      <tr><td>Symétrie centrale (centre \( \Omega \))</td><td>\( z' = 2z_\Omega - z \)</td></tr>
      <tr><td>Symétrie axiale (axe réel)</td><td>\( z' = \bar{z} \)</td></tr>
    </table></div>
  </div>

  <!-- ═══════════ XI — Valeurs remarquables & Applications ═══════════ -->
  <div class="cours-section reveal" id="s11"><span class="section-label indigo-label">Section XI</span><h2 class="section-heading">Valeurs remarquables <em>&</em> applications géométriques</h2>

    <h3 class="sub-heading">1. Tableau des valeurs remarquables</h3>
    <div class="math-table-wrap"><table class="math-table"><tr><th>\(\theta\)</th><th>\(0\)</th><th>\(\frac{\pi}{6}\)</th><th>\(\frac{\pi}{4}\)</th><th>\(\frac{\pi}{3}\)</th><th>\(\frac{\pi}{2}\)</th><th>\(\frac{2\pi}{3}\)</th><th>\(\frac{3\pi}{4}\)</th><th>\(\pi\)</th></tr>
      <tr><th>\(\cos\theta\)</th><td>\(1\)</td><td>\(\frac{\sqrt{3}}{2}\)</td><td>\(\frac{\sqrt{2}}{2}\)</td><td>\(\frac{1}{2}\)</td><td>\(0\)</td><td>\(-\frac{1}{2}\)</td><td>\(-\frac{\sqrt{2}}{2}\)</td><td>\(-1\)</td></tr>
      <tr><th>\(\sin\theta\)</th><td>\(0\)</td><td>\(\frac{1}{2}\)</td><td>\(\frac{\sqrt{2}}{2}\)</td><td>\(\frac{\sqrt{3}}{2}\)</td><td>\(1\)</td><td>\(\frac{\sqrt{3}}{2}\)</td><td>\(\frac{\sqrt{2}}{2}\)</td><td>\(0\)</td></tr>
      <tr><th>\(e^{i\theta}\)</th><td>\(1\)</td><td>\(e^{i\pi/6}\)</td><td>\(e^{i\pi/4}\)</td><td>\(e^{i\pi/3}\)</td><td>\(i\)</td><td>\(e^{i2\pi/3}\)</td><td>\(e^{i3\pi/4}\)</td><td>\(-1\)</td></tr>
    </table></div>

    <h3 class="sub-heading">2. Applications géométriques</h3>
    <div class="box box-rem"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> Outil central</div>
      <p>\( \dfrac{z_C - z_A}{z_B - z_A} \) dont le <strong>module</strong> = \( \dfrac{AC}{AB} \) et l'<strong>argument</strong> = \( (\overrightarrow{AB},\, \overrightarrow{AC}) \).</p>
    </div>

    <div class="math-table-wrap"><table class="math-table"><tr><th>Concept géométrique</th><th>Condition complexe</th></tr>
      <tr><td>A, B, C alignés</td><td>\( \dfrac{z_C - z_A}{z_B - z_A} \in \mathbb{R} \)</td></tr>
      <tr><td>A, B, C non alignés</td><td>\( \dfrac{z_C - z_A}{z_B - z_A} \notin \mathbb{R} \)</td></tr>
      <tr><td>Triangle ABC isocèle en A</td><td>\( \left|\dfrac{z_C - z_A}{z_B - z_A}\right| = 1 \) et \( \arg\!\left(\dfrac{z_C-z_A}{z_B-z_A}\right) \neq 0\;[\pi] \)</td></tr>
      <tr><td>Triangle ABC rectangle en A</td><td>\( \dfrac{z_C - z_A}{z_B - z_A} \in i\mathbb{R} \), c-à-d \( \arg = \pm\dfrac{\pi}{2} \)</td></tr>
      <tr><td>Triangle rect. isocèle en A</td><td>\( \dfrac{z_C - z_A}{z_B - z_A} = \pm\, i \)</td></tr>
      <tr><td>Triangle équilatéral</td><td>\( \dfrac{z_C - z_A}{z_B - z_A} = e^{\pm i\pi/3} = \dfrac{1 \pm \sqrt{3}\,i}{2} \)</td></tr>
    </table></div>

    <div class="divider"></div>

    <div class="math-table-wrap"><table class="math-table"><tr><th>Quadrilatère</th><th>Condition complexe</th></tr>
      <tr><td>ABCD parallélogramme</td><td>\( z_B - z_A = z_C - z_D \)</td></tr>
      <tr><td>ABCD rectangle</td><td>Parallélogramme + \( \dfrac{z_D - z_A}{z_B - z_A} \in i\mathbb{R} \)</td></tr>
      <tr><td>ABCD losange</td><td>Parallélogramme + \( \left|\dfrac{z_D-z_A}{z_B-z_A}\right| = 1 \)</td></tr>
      <tr><td>ABCD carré</td><td>Rectangle + losange, soit \( \dfrac{z_D-z_A}{z_B-z_A} = \pm\,i \)</td></tr>
    </table></div>

    <div class="divider"></div>

    <div class="math-table-wrap"><table class="math-table"><tr><th>Droites et angles</th><th>Condition</th></tr>
      <tr><td>\((AB) \parallel (CD)\)</td><td>\( \dfrac{z_D - z_C}{z_B - z_A} \in \mathbb{R} \)</td></tr>
      <tr><td>\((AB) \perp (CD)\)</td><td>\( \dfrac{z_D - z_C}{z_B - z_A} \in i\mathbb{R} \)</td></tr>
      <tr><td>Angle orienté \((\overrightarrow{AB},\,\overrightarrow{CD})\)</td><td>\( \arg\!\left(\dfrac{z_D - z_C}{z_B - z_A}\right) \;[2\pi] \)</td></tr>
      <tr><td>A, B, C, D cocycliques</td><td>\( \dfrac{z_D - z_A}{z_B - z_A} \cdot \dfrac{z_B - z_C}{z_D - z_C} \) est un rapport croisé réel</td></tr>
    </table></div>

    <div class="box box-rem"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> Clés de mémorisation</div>
      <ul class="cours-list">
        <li>\( \in \mathbb{R} \) ⟹ alignés / parallèles</li>
        <li>\( \in i\mathbb{R} \) ⟹ perpendiculaires</li>
        <li>\( = \pm\,i \) ⟹ même longueur <strong>et</strong> perpendiculaires</li>
      </ul>
    </div>
  </div>
`,
        exercises: [
            {
                title: "Exercice 1 : Équation du second degré dans C",
                statement: "Résoudre dans C l'équation : z² - 2z + 5 = 0.",
                solution: "Le discriminant est Δ = (-2)² - 4(1)(5) = 4 - 20 = -16 = (4i)².<br>Les solutions sont complexes conjuguées : z₁ = (2 - 4i)/2 = 1 - 2i et z₂ = 1 + 2i.<br><strong>S = {1 - 2i ; 1 + 2i}</strong>."
            }
        ],
        exams: [
            { title: "Devoir Surveillé N°4 - Complexes 1", type: "Devoir", year: 2026 }
        ]
    },
    {
        id: "math-devoirs-sem1",
        title: "Devoirs 1er Semestre",
        level: "2bac-pc",
        subject: "math",
        description: "Recueil de devoirs surveillés du premier semestre couvrant les limites, la continuité, les suites et les fonctions.",
        courseContent: `
            <h4>Préparation efficace au 1er Semestre</h4>
            <p>Révisez l'ensemble des notions de rentrée grâce aux devoirs types rédigés par les professeurs.</p>
        `,
        exercises: [
            {
                title: "Devoir Blanc 1",
                statement: "Sujet comprenant l'étude complète d'une fonction avec étude de la continuité et du TVI, suivi d'une partie sur les suites.",
                solution: "Consultez les fichiers PDF dans les ressources de la classe."
            }
        ],
        exams: [
            { title: "Devoir Surveillé N°1", type: "Devoir", year: 2026 },
            { title: "Devoir Surveillé N°2", type: "Devoir", year: 2026 }
        ]
    },
    {
        id: "math-exponentielles",
        title: "Fonctions exponentielles",
        level: "2bac-pc",
        subject: "math",
        description: "La fonction exponentielle (exp) : propriétés algébriques, limites de référence et étude complète.",
        courseContent: `
<div class="toc reveal"><div class="toc-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg> Sommaire</div><ol class="toc-list">
    <li><a href="#s1"><span class="toc-num">I</span> Définition et propriétés de \( e^x \)</a></li>
    <li><a href="#s2"><span class="toc-num">II</span> Domaine de définition</a></li>
    <li><a href="#s3"><span class="toc-num">III</span> Continuité et dérivabilité</a></li>
    <li><a href="#s4"><span class="toc-num">IV</span> Les limites de référence</a></li>
    <li><a href="#s5"><span class="toc-num">V</span> Représentation graphique</a></li>
    <li><a href="#s6"><span class="toc-num">VI</span> Fonction exponentielle de base \( a \)</a></li>
  </ol></div>

  <!-- ═══════════ I — Définition et propriétés ═══════════ -->
  <div class="cours-section reveal" id="s1">
    <span class="section-label">Section I</span>
    <h2 class="section-heading">Définition <em>&</em> propriétés de \( e^x \)</h2>

    <div class="box box-def"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Définition</div>
      <p>La <strong>fonction exponentielle népérienne</strong>, notée \( e^x \) (ou \( \exp(x) \)), est la <strong>fonction réciproque</strong> de la fonction \( x \mapsto \ln x \), et qui est définie sur \( \mathbb{R} \).</p>
    </div>

    <div class="grid-2x2">
      <div class="box box-prop" style="margin:0"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Relations fondamentales</div>
        <ul class="cours-list">
          <li>\( \forall x \in \mathbb{R},\quad e^x > 0 \)</li>
          <li>\( \ln(e^x) = x \)</li>
          <li>\( \forall x \in \,]0, +\infty[\;:\; e^{\ln x} = x \)</li>
          <li>\( e^x = e^y \iff x = y \)</li>
          <li>\( e^x > e^y \iff x > y \)</li>
          <li>\( e^x = y \iff x = \ln y \quad (y > 0) \)</li>
        </ul>
      </div>
      <div class="box box-prop" style="margin:0"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Propriétés algébriques</div>
        <p>\( \forall x, y \in \mathbb{R} \) et \( r \in \mathbb{Q} \) :</p>
        <ul class="cours-list">
          <li>\( e^x \times e^y = e^{x+y} \)</li>
          <li>\( (e^x)^r = e^{rx} \)</li>
          <li>\( \dfrac{1}{e^x} = e^{-x} \)</li>
          <li>\( \dfrac{e^x}{e^y} = e^{x-y} \)</li>
        </ul>
      </div>
    </div>

    <div class="box box-rem"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> Remarque importante</div>
      <p>Si \( n \) est pair, alors \( (\forall x \in \mathbb{R}^*) \) : \( \ln x^n = n\ln|x| \).</p>
    </div>
  </div>

  <!-- ═══════════ II — Domaine de définition ═══════════ -->
  <div class="cours-section reveal" id="s2">
    <span class="section-label gold-label">Section II</span>
    <h2 class="section-heading">Domaine de définition</h2>

    <div class="math-table-wrap"><table class="math-table">
      <tr><th>La fonction \( f \)</th><th>Son domaine de définition</th></tr>
      <tr><td>\( f(x) = e^x \)</td><td>\( D_f = \mathbb{R} \)</td></tr>
      <tr><td>\( f(x) = e^{u(x)} \)</td><td>\( D_f = \{x \in \mathbb{R} \;/\; x \in D_u\} \)</td></tr>
    </table></div>

    <div class="box box-rem"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> En pratique</div>
      <p>La fonction \( e^x \) est définie pour tout \( x \in \mathbb{R} \). Pour \( e^{u(x)} \), le domaine est simplement le domaine de définition de \( u \).</p>
    </div>
  </div>

  <!-- ═══════════ III — Continuité et dérivabilité ═══════════ -->
  <div class="cours-section reveal" id="s3">
    <span class="section-label blue-label">Section III</span>
    <h2 class="section-heading">Continuité <em>&</em> dérivabilité</h2>

    <div class="grid-2x2">
      <div class="box box-thm" style="margin:0"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Continuité</div>
        <p>La fonction \( x \mapsto e^x \) est <strong>continue</strong> sur \( \mathbb{R} \).</p>
        <p style="margin-top:8px;font-size:0.88rem;color:var(--text-light)">Si \( u \) est continue sur \( I \), alors \( x \mapsto e^{u(x)} \) est continue sur \( I \).</p>
      </div>
      <div class="box box-thm" style="margin:0"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Dérivabilité</div>
        <p>La fonction \( x \mapsto e^x \) est <strong>dérivable</strong> sur \( \mathbb{R} \) et :</p>
        <p style="text-align:center;margin:10px 0;font-size:1.1rem;font-weight:600;color:var(--teal)">\( (e^x)' = e^x \)</p>
      </div>
    </div>

    <div class="box box-thm"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Dérivée de \( e^{u(x)} \)</div>
      <p>Si \( u \) est dérivable sur un intervalle \( I \), alors la fonction \( x \mapsto e^{u(x)} \) est dérivable sur \( I \) et :</p>
      <p style="text-align:center;margin:12px 0;font-size:1.1rem;font-weight:600;color:var(--teal)">\( \left(e^{u(x)}\right)' = u'(x) \times e^{u(x)} \)</p>
    </div>

    <div class="box box-example"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg> Exemples</div>
      <ul class="cours-list">
        <li>Dérivée de \( f(x) = e^{3x} \) : \( f'(x) = 3e^{3x} \)</li>
        <li>Dérivée de \( f(x) = e^{x^2+1} \) : \( f'(x) = 2x \cdot e^{x^2+1} \)</li>
        <li>Dérivée de \( f(x) = e^{\sin x} \) : \( f'(x) = \cos x \cdot e^{\sin x} \)</li>
      </ul>
    </div>
  </div>

  <!-- ═══════════ IV — Les limites de référence ═══════════ -->
  <div class="cours-section reveal" id="s4">
    <span class="section-label emerald-label">Section IV</span>
    <h2 class="section-heading">Les limites de référence</h2>

    <h3 class="sub-heading">1. Limites aux bornes</h3>
    <div class="grid-2x2">
      <div class="box box-thm" style="margin:0"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> En \( +\infty \)</div>
        <p style="text-align:center;font-size:1.05rem;font-weight:600;color:var(--teal)">\( \displaystyle\lim_{x\to+\infty} e^x = +\infty \)</p>
      </div>
      <div class="box box-thm" style="margin:0"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> En \( -\infty \)</div>
        <p style="text-align:center;font-size:1.05rem;font-weight:600;color:var(--teal)">\( \displaystyle\lim_{x\to-\infty} e^x = 0 \)</p>
      </div>
    </div>

    <h3 class="sub-heading">2. Croissances comparées</h3>
    <div class="grid-2x2">
      <div class="box box-thm" style="margin:0"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> En \( +\infty \)</div>
        <p style="text-align:center;font-size:1rem;font-weight:600;color:var(--teal)">\( \displaystyle\lim_{x\to+\infty} \dfrac{e^x}{x^n} = +\infty \)</p>
        <p style="text-align:center;font-size:0.88rem;color:var(--text-light);margin-top:6px">\( n \in \mathbb{N}^* \)</p>
      </div>
      <div class="box box-thm" style="margin:0"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> En \( -\infty \)</div>
        <p style="text-align:center;font-size:1rem;font-weight:600;color:var(--teal)">\( \displaystyle\lim_{x\to-\infty} x^n \cdot e^x = 0 \)</p>
        <p style="text-align:center;font-size:0.88rem;color:var(--text-light);margin-top:6px">\( n \in \mathbb{N}^* \)</p>
      </div>
    </div>

    <div class="box box-rem"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> Interprétation</div>
      <p>En \( +\infty \) : l'exponentielle croît <strong>plus vite</strong> que n'importe quelle puissance \( x^n \). On dit que « l'exponentielle l'emporte sur la puissance ».</p>
      <p>En \( -\infty \) : \( e^x \) tend vers 0 plus vite que \( x^n \) ne tend vers \( \pm\infty \).</p>
    </div>

    <h3 class="sub-heading">3. Limite usuelle</h3>
    <div class="box box-prop"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> En 0</div>
      <p style="text-align:center;font-size:1.1rem;font-weight:600;color:var(--teal)">\( \displaystyle\lim_{x\to 0} \dfrac{e^x - 1}{x} = 1 \)</p>
    </div>
  </div>

  <!-- ═══════════ V — Représentation graphique ═══════════ -->
  <div class="cours-section reveal" id="s5">
    <span class="section-label brown-label">Section V</span>
    <h2 class="section-heading">Représentation graphique</h2>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:start">
      <div>
        <div class="box box-prop" style="margin-top:0"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Propriétés graphiques</div>
          <ul class="cours-list">
            <li>\( e^x \) est <strong>strictement croissante</strong> sur \( \mathbb{R} \)</li>
            <li>\( e^0 = 1 \) : la courbe passe par \( (0, 1) \)</li>
            <li>\( e^1 = e \approx 2{,}71 \) : point \( (1, e) \)</li>
            <li>Asymptote horizontale \( y = 0 \) en \( -\infty \)</li>
            <li>La tangente en \( (0, 1) \) a pour pente 1</li>
            <li>La courbe de \( e^x \) est symétrique de celle de \( \ln x \) par rapport à la droite \( y = x \)</li>
          </ul>
        </div>
      </div>
      <div style="background:var(--white);border:1px solid rgba(13,115,119,0.12);border-radius:12px;padding:16px;display:flex;flex-direction:column;align-items:center">
        <p style="font-size:0.78rem;font-weight:600;color:var(--teal);letter-spacing:0.06em;text-transform:uppercase;margin-bottom:8px">Courbe de \( y = e^x \)</p>
        <svg viewBox="-100 -140 340 300" width="100%" style="max-width:280px" xmlns="http://www.w3.org/2000/svg">
          <!-- Grid -->
          <line x1="-90" y1="-120" x2="230" y2="-120" stroke="#ccc" stroke-width="0.4"/>
          <line x1="-90" y1="-80" x2="230" y2="-80" stroke="#ccc" stroke-width="0.4"/>
          <line x1="-90" y1="-40" x2="230" y2="-40" stroke="#ccc" stroke-width="0.4"/>
          <line x1="-90" y1="40" x2="230" y2="40" stroke="#ccc" stroke-width="0.4"/>
          <line x1="-90" y1="80" x2="230" y2="80" stroke="#ccc" stroke-width="0.4"/>
          <line x1="-90" y1="120" x2="230" y2="120" stroke="#ccc" stroke-width="0.4"/>
          <line x1="-80" y1="-130" x2="-80" y2="150" stroke="#ccc" stroke-width="0.4"/>
          <line x1="-40" y1="-130" x2="-40" y2="150" stroke="#ccc" stroke-width="0.4"/>
          <line x1="40" y1="-130" x2="40" y2="150" stroke="#ccc" stroke-width="0.4"/>
          <line x1="80" y1="-130" x2="80" y2="150" stroke="#ccc" stroke-width="0.4"/>
          <line x1="120" y1="-130" x2="120" y2="150" stroke="#ccc" stroke-width="0.4"/>
          <line x1="160" y1="-130" x2="160" y2="150" stroke="#ccc" stroke-width="0.4"/>
          <line x1="200" y1="-130" x2="200" y2="150" stroke="#ccc" stroke-width="0.4"/>

          <!-- Axes -->
          <defs><marker id="arr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#0000cc"/></marker></defs>
          <line x1="0" y1="150" x2="0" y2="-130" stroke="#0000cc" stroke-width="2" marker-end="url(#arr)"/>
          <line x1="-95" y1="0" x2="230" y2="0" stroke="#0000cc" stroke-width="2" marker-end="url(#arr)"/>

          <!-- Ticks x -->
          <line x1="-80" y1="-3" x2="-80" y2="3" stroke="#0000cc" stroke-width="1.2"/>
          <text x="-83" y="16" font-size="10" fill="#0000cc" font-family="Source Sans 3" text-anchor="middle">-2</text>
          <line x1="-40" y1="-3" x2="-40" y2="3" stroke="#0000cc" stroke-width="1.2"/>
          <text x="-43" y="16" font-size="10" fill="#0000cc" font-family="Source Sans 3" text-anchor="middle">-1</text>
          <text x="-10" y="16" font-size="10" fill="#0000cc" font-family="Source Sans 3">0</text>
          <line x1="40" y1="-3" x2="40" y2="3" stroke="#0000cc" stroke-width="1.2"/>
          <text x="40" y="16" font-size="10" fill="#0000cc" font-family="Source Sans 3" text-anchor="middle">1</text>
          <line x1="80" y1="-3" x2="80" y2="3" stroke="#0000cc" stroke-width="1.2"/>
          <text x="80" y="16" font-size="10" fill="#0000cc" font-family="Source Sans 3" text-anchor="middle">2</text>
          <line x1="120" y1="-3" x2="120" y2="3" stroke="#0000cc" stroke-width="1.2"/>
          <text x="120" y="16" font-size="10" fill="#0000cc" font-family="Source Sans 3" text-anchor="middle">3</text>

          <!-- Ticks y -->
          <line x1="-3" y1="-40" x2="3" y2="-40" stroke="#0000cc" stroke-width="1.2"/>
          <text x="-14" y="-36" font-size="10" fill="#0000cc" font-family="Source Sans 3" text-anchor="middle">1</text>
          <line x1="-3" y1="-80" x2="3" y2="-80" stroke="#0000cc" stroke-width="1.2"/>
          <text x="-14" y="-76" font-size="10" fill="#0000cc" font-family="Source Sans 3" text-anchor="middle">2</text>
          <line x1="-3" y1="-120" x2="3" y2="-120" stroke="#0000cc" stroke-width="1.2"/>
          <text x="-14" y="-116" font-size="10" fill="#0000cc" font-family="Source Sans 3" text-anchor="middle">3</text>

          <!-- Asymptote y=0 -->
          <line x1="-95" y1="0" x2="-95" y2="0" stroke="var(--wrong)" stroke-width="1" stroke-dasharray="4,3" opacity="0.3"/>
          <text x="-88" y="35" font-size="9" fill="var(--wrong)" font-family="Source Sans 3" opacity="0.8">y = 0 (A.H.)</text>

          <!-- Dashed lines for (1,e) -->
          <line x1="40" y1="0" x2="40" y2="-108.4" stroke="#cc0000" stroke-width="1.2" stroke-dasharray="6,4"/>
          <line x1="0" y1="-108.4" x2="40" y2="-108.4" stroke="#cc0000" stroke-width="1.2" stroke-dasharray="6,4"/>
          <text x="-14" y="-104" font-size="10" fill="#cc0000" font-family="Source Sans 3" text-anchor="middle" font-weight="600">e</text>

          <!-- e^x curve (red/green) scale: 40px = 1 unit -->
          <!-- e^(-2)=0.135→(-80,-5.4) e^(-1)=0.37→(-40,-14.7) e^0=1→(0,-40) e^1=2.71→(40,-108.4) e^2=7.39→(80,-295 clip) -->
          <path d="M -90,-2.7 C -70,-7 -50,-11 -40,-14.7 C -25,-22 -10,-32 0,-40 C 12,-52 25,-72 40,-108.4 C 48,-128 52,-135 55,-140" fill="none" stroke="#009900" stroke-width="3" stroke-linecap="round"/>

          <!-- Point (0,1) -->
          <circle cx="0" cy="-40" r="3.5" fill="var(--teal)"/>
          <!-- Point (1,e) -->
          <circle cx="40" cy="-108.4" r="3.5" fill="#cc0000"/>
          <text x="50" y="-110" font-size="10" fill="#cc0000" font-family="Source Sans 3" font-weight="600">(1, e)</text>

          <!-- Label -->
          <text x="10" y="-10" font-size="12" fill="#009900" font-family="Source Sans 3" font-style="italic" font-weight="600">y = eˣ</text>
        </svg>
      </div>
    </div>
    <style>@media(max-width:640px){#s5 .section-heading+div{grid-template-columns:1fr!important}}</style>
  </div>

  <!-- ═══════════ VI — Exponentielle de base a ═══════════ -->
  <div class="cours-section reveal" id="s6">
    <span class="section-label plum-label">Section VI</span>
    <h2 class="section-heading">Fonction exponentielle de base \( a \)</h2>

    <div class="box box-def"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Définition</div>
      <p>Soit \( a \in \mathbb{R}^*_+ \setminus \{1\} \). La <strong>fonction exponentielle de base \( a \)</strong>, notée \( a^x \), est la réciproque de \( \log_a \) :</p>
      <p style="text-align:center;margin:12px 0;font-size:1.1rem;font-weight:600;color:var(--teal)">\( \forall x \in \mathbb{R},\quad a^x = e^{x\ln a} \)</p>
      <p>\( \log_a(a^x) = x \quad;\quad \forall x \in \,]0, +\infty[\;:\; a^{\log_a x} = x \)</p>
    </div>

    <div class="grid-2x2">
      <div class="box box-prop" style="margin:0"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Propriétés algébriques</div>
        <p>\( \forall x, y \in \mathbb{R} \) et \( r \in \mathbb{Q} \) :</p>
        <ul class="cours-list">
          <li>\( a^x \times a^y = a^{x+y} \)</li>
          <li>\( (a^x)^r = a^{rx} \)</li>
          <li>\( \dfrac{1}{a^x} = a^{-x} \)</li>
          <li>\( \dfrac{a^x}{a^y} = a^{x-y} \)</li>
          <li>\( a^x = a^y \iff x = y \)</li>
          <li>\( a^x = y \iff x = \log_a y \)</li>
        </ul>
      </div>
      <div class="box box-prop" style="margin:0"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Monotonie et inéquations</div>
        <div class="math-table-wrap"><table class="math-table" style="min-width:200px">
          <tr><th>\( a > 1 \)</th><th>\( 0 < a < 1 \)</th></tr>
          <tr><td>\( a^x > a^y \iff x > y \)</td><td>\( a^x > a^y \iff x < y \)</td></tr>
          <tr><td>\( \displaystyle\lim_{x\to+\infty} a^x = +\infty \)</td><td>\( \displaystyle\lim_{x\to+\infty} a^x = 0 \)</td></tr>
          <tr><td>\( \displaystyle\lim_{x\to-\infty} a^x = 0 \)</td><td>\( \displaystyle\lim_{x\to-\infty} a^x = +\infty \)</td></tr>
        </table></div>
      </div>
    </div>

    <div class="box box-thm"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Limite usuelle</div>
      <p style="text-align:center;font-size:1.05rem;font-weight:600;color:var(--teal)">\( \displaystyle\lim_{x\to 0} \dfrac{a^x - 1}{x} = \ln a \)</p>
    </div>

    <div class="box box-thm"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Dérivée</div>
      <ul class="cours-list">
        <li>\( (a^x)' = a^x \cdot \ln a \)</li>
        <li>\( (\log_a x)' = \dfrac{1}{x\ln a} \quad \forall x \in \,]0, +\infty[ \)</li>
      </ul>
    </div>
  </div>
`,
        exercises: [
            {
                title: "Exercice 1 : Simplification d'expression",
                statement: "Simplifier l'expression : A = (e²ˣ × e⁻ˣ) / e³.",
                solution: "En appliquant les règles de calcul des puissances : A = e²ˣ⁻ˣ⁻³ = eˣ⁻³."
            }
        ],
        exams: [
            { title: "Devoir Surveillé N°5 - Exponentielles", type: "Devoir", year: 2026 }
        ]
    },
    {
        id: "math-complexes-p2",
        title: "Nombres complexes (Partie 2)",
        level: "2bac-pc",
        subject: "math",
        description: "Applications géométriques des nombres complexes : distances, angles et écritures complexes des transformations.",
        courseContent: `
            <h4>1. Distance et Argument</h4>
            <p>Soient $A(z_A)$ et $B(z_B)$ deux points. La distance $AB = |z_B - z_A|$.</p>
            <p>L'angle orienté $(\\vec{u}, \\vec{AB}) \\equiv arg(z_B - z_A) \\pmod{2\\pi}$.</p>

            <h4>2. Écritures complexes de transformations</h4>
            <ul>
                <li><strong>Translation :</strong> z' = z + b (de vecteur d'affixe b)</li>
                <li><strong>Homothétie :</strong> z' - ω = k(z - ω) (de centre Ω(ω) et rapport k)</li>
                <li><strong>Rotation :</strong> z' - ω = e^(iθ)(z - ω) (de centre Ω(ω) et d'angle θ)</li>
            </ul>
        `,
        exercises: [
            {
                title: "Exercice 1 : Écriture complexe d'une rotation",
                statement: "Déterminer l'écriture complexe de la rotation R de centre Ω(2 + i) et d'angle π/2.",
                solution: "La formule est z' - ω = e^(iπ/2)(z - ω) <=> z' - (2 + i) = i(z - 2 - i).<br>Ce qui donne : z' = iz - 2i + 1 + 2 + i = iz + 3 - i."
            }
        ],
        exams: [
            { title: "Devoir Surveillé N°6 - Complexes & Géométrie", type: "Devoir", year: 2026 }
        ]
    },
    {
        id: "math-integral",
        title: "Calcul intégral",
        level: "2bac-pc",
        subject: "math",
        description: "Intégration d'une fonction continue, valeur moyenne, intégration par parties et calcul d'aires.",
        courseContent: `
<div class="toc reveal"><div class="toc-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg> Sommaire</div><ol class="toc-list">
    <li><a href="#s1"><span class="toc-num">I</span> Intégrale d'une fonction continue</a></li>
    <li><a href="#s2"><span class="toc-num">II</span> Propriétés</a></li>
    <li><a href="#s3"><span class="toc-num">III</span> Linéarité</a></li>
    <li><a href="#s4"><span class="toc-num">IV</span> Relation de Chasles</a></li>
    <li><a href="#s5"><span class="toc-num">V</span> Intégrale et comparaison</a></li>
    <li><a href="#s6"><span class="toc-num">VI</span> Valeur moyenne</a></li>
    <li><a href="#s7"><span class="toc-num">VII</span> Intégration par partie</a></li>
    <li><a href="#s8"><span class="toc-num">VIII</span> Calcul de l'aire algébrique</a></li>
    <li><a href="#s9"><span class="toc-num">IX</span> Calcul d'un volume</a></li>
  </ol></div>

  <!-- ═══════════ I — Intégrale ═══════════ -->
  <div class="cours-section reveal" id="s1">
    <span class="section-label">Section I</span>
    <h2 class="section-heading">Intégrale d'une fonction continue sur un segment</h2>

    <div class="box box-def"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Définition</div>
      <p>Soit \( f \) une fonction continue sur un intervalle \( [a, b] \) et \( F \) une primitive de \( f \) sur \( [a, b] \).</p>
      <p>L'<strong>intégrale</strong> de la fonction \( f \) entre \( a \) et \( b \) est le nombre réel :</p>
      <p style="text-align:center;margin:14px 0;font-size:1.15rem;font-weight:600;color:var(--teal)">\( \displaystyle\int_a^b f(x)\,dx = \Big[F(x)\Big]_a^b = F(b) - F(a) \)</p>
    </div>

    <div class="box box-example"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg> Exemple</div>
      <p>\( \displaystyle\int_1^3 2x\,dx = \Big[x^2\Big]_1^3 = 9 - 1 = 8 \)</p>
    </div>
  </div>

  <!-- ═══════════ II — Propriétés ═══════════ -->
  <div class="cours-section reveal" id="s2">
    <span class="section-label gold-label">Section II</span>
    <h2 class="section-heading">Propriétés</h2>

    <div class="grid-2x2">
      <div class="box box-prop" style="margin:0"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Intégrale nulle</div>
        <p style="text-align:center;font-size:1.05rem;font-weight:600;color:var(--teal)">\( \displaystyle\int_a^a f(x)\,dx = 0 \)</p>
      </div>
      <div class="box box-prop" style="margin:0"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Changement de bornes</div>
        <p style="text-align:center;font-size:1.05rem;font-weight:600;color:var(--teal)">\( \displaystyle\int_a^b f(x)\,dx = -\int_b^a f(x)\,dx \)</p>
      </div>
    </div>
  </div>

  <!-- ═══════════ III — Linéarité ═══════════ -->
  <div class="cours-section reveal" id="s3">
    <span class="section-label blue-label">Section III</span>
    <h2 class="section-heading">Linéarité</h2>

    <div class="box box-thm"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Propriétés de linéarité</div>
      <p>Pour \( k \in \mathbb{R} \) :</p>
      <ul class="cours-list">
        <li>\( \displaystyle\int_a^b k\,f(x)\,dx = k\int_a^b f(x)\,dx \)</li>
        <li>\( \displaystyle\int_a^b \big[f(x) + g(x)\big]\,dx = \int_a^b f(x)\,dx + \int_a^b g(x)\,dx \)</li>
      </ul>
    </div>
  </div>

  <!-- ═══════════ IV — Chasles ═══════════ -->
  <div class="cours-section reveal" id="s4">
    <span class="section-label emerald-label">Section IV</span>
    <h2 class="section-heading">Relation de Chasles</h2>

    <div class="box box-thm"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Relation de Chasles</div>
      <p>Pour tout \( c \in [a, b] \) :</p>
      <p style="text-align:center;margin:12px 0;font-size:1.1rem;font-weight:600;color:var(--teal)">\( \displaystyle\int_a^b f(x)\,dx = \int_a^c f(x)\,dx + \int_c^b f(x)\,dx \)</p>
    </div>
  </div>

  <!-- ═══════════ V — Intégrale et comparaison ═══════════ -->
  <div class="cours-section reveal" id="s5">
    <span class="section-label brown-label">Section V</span>
    <h2 class="section-heading">Intégrale <em>&</em> comparaison</h2>

    <div class="grid-2x2">
      <div class="box box-prop" style="margin:0"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Positivité</div>
        <p>Si \( \forall x \in [a, b] \), \( f(x) \geq 0 \), alors :</p>
        <p style="text-align:center;font-size:1.05rem;font-weight:600;color:var(--teal)">\( \displaystyle\int_a^b f(x)\,dx \geq 0 \)</p>
      </div>
      <div class="box box-prop" style="margin:0"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Comparaison</div>
        <p>Si \( \forall x \in [a, b] \), \( f(x) \geq g(x) \), alors :</p>
        <p style="text-align:center;font-size:1.05rem;font-weight:600;color:var(--teal)">\( \displaystyle\int_a^b f(x)\,dx \geq \int_a^b g(x)\,dx \)</p>
      </div>
    </div>
  </div>

  <!-- ═══════════ VI — Valeur moyenne ═══════════ -->
  <div class="cours-section reveal" id="s6">
    <span class="section-label orange-label">Section VI</span>
    <h2 class="section-heading">Valeur moyenne</h2>

    <div class="box box-def"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Définition</div>
      <p>Soit \( f \) une fonction continue sur un intervalle \( [a, b] \).</p>
      <p>La <strong>valeur moyenne</strong> de la fonction \( f \) sur \( [a, b] \) est le réel défini par :</p>
      <p style="text-align:center;margin:14px 0;font-size:1.15rem;font-weight:600;color:var(--teal)">\( \mu = \dfrac{1}{b-a}\int_a^b f(x)\,dx \)</p>
    </div>
  </div>

  <!-- ═══════════ VII — Intégration par partie ═══════════ -->
  <div class="cours-section reveal" id="s7">
    <span class="section-label plum-label">Section VII</span>
    <h2 class="section-heading">Intégration par partie</h2>

    <div class="box box-thm"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Formule d'intégration par partie (IPP)</div>
      <p>Soit \( f \) et \( g \) deux fonctions dérivables sur un intervalle \( [a, b] \), à condition que \( f' \) et \( g' \) soient continues sur \( [a, b] \). Alors :</p>
      <p style="text-align:center;margin:14px 0;font-size:1.1rem;font-weight:600;color:var(--teal)">\( \displaystyle\int_a^b f'(x) \cdot g(x)\,dx = \Big[f(x) \cdot g(x)\Big]_a^b - \int_a^b f(x) \cdot g'(x)\,dx \)</p>
    </div>

    <div class="box box-rem"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> En pratique</div>
      <p>On choisit \( f' \) et \( g \) de sorte que le produit \( f \cdot g' \) soit plus simple à intégrer que \( f' \cdot g \). Typiquement, on pose \( g(x) = \) la partie polynomiale ou logarithmique.</p>
    </div>

    <div class="box box-example"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg> Exemple</div>
      <p>Calculer \( \displaystyle\int_0^1 x\,e^x\,dx \). On pose \( g(x) = x \), \( f'(x) = e^x \), donc \( g'(x) = 1 \), \( f(x) = e^x \).</p>
      <p>\( \displaystyle\int_0^1 x\,e^x\,dx = \Big[x\,e^x\Big]_0^1 - \int_0^1 e^x\,dx = e - \Big[e^x\Big]_0^1 = e - (e-1) = 1 \).</p>
    </div>
  </div>

  <!-- ═══════════ VIII — Aire algébrique ═══════════ -->
  <div class="cours-section reveal" id="s8">
    <span class="section-label rose-label">Section VIII</span>
    <h2 class="section-heading">Calcul de l'aire algébrique d'un domaine plan</h2>

    <div class="box box-rem"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> Unité d'aire</div>
      <p>Le plan est rapporté à un repère orthonormé \( (O, \vec{i}, \vec{j}) \). L'unité d'aire (u.a.) est la surface d'un rectangle défini par le point \( O \) et les deux vecteurs \( \vec{i} \) et \( \vec{j} \) : \( 1\;\text{u.a.} = \|\vec{i}\| \times \|\vec{j}\| \).</p>
    </div>

    <h3 class="sub-heading">1. Aire entre une courbe et l'axe des abscisses</h3>
    <div class="box box-def"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Formule générale</div>
      <p>L'aire algébrique délimitée par la courbe \( (C_f) \), l'axe des abscisses, et les droites \( x = a \) et \( x = b \) est :</p>
      <p style="text-align:center;margin:12px 0;font-size:1.1rem;font-weight:600;color:var(--teal)">\( \mathcal{A} = \left(\int_a^b |f(x)|\,dx\right) \;\text{u.a.} \)</p>
    </div>

    <div class="math-table-wrap"><table class="math-table">
      <tr><th>Cas</th><th>Aire</th></tr>
      <tr><td>\( f \) positive sur \( [a, b] \)</td><td>\( \left(\displaystyle\int_a^b f(x)\,dx\right) \;\text{u.a.} \)</td></tr>
      <tr><td>\( f \) négative sur \( [a, b] \)</td><td>\( \left(\displaystyle\int_a^b -f(x)\,dx\right) \;\text{u.a.} \)</td></tr>
      <tr><td>\( f \) positive sur \( [a, c] \), négative sur \( [c, b] \)</td><td>\( \left(\displaystyle\int_a^c f(x)\,dx + \int_c^b -f(x)\,dx\right) \;\text{u.a.} \)</td></tr>
    </table></div>

    <h3 class="sub-heading">2. Aire entre deux courbes</h3>
    <div class="box box-def"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Formule</div>
      <p>L'aire algébrique comprise entre les courbes \( (C_f) \) et \( (C_g) \), et les droites \( x = a \) et \( x = b \) est :</p>
      <p style="text-align:center;margin:12px 0;font-size:1.1rem;font-weight:600;color:var(--teal)">\( \mathcal{A} = \left(\int_a^b |f(x) - g(x)|\,dx\right) \;\text{u.a.} \)</p>
    </div>

    <div class="math-table-wrap"><table class="math-table">
      <tr><th>Cas</th><th>Aire</th></tr>
      <tr><td>\( (C_f) \) au-dessus de \( (C_g) \) sur \( [a, b] \)</td><td>\( \left(\displaystyle\int_a^b \big[f(x) - g(x)\big]\,dx\right) \;\text{u.a.} \)</td></tr>
      <tr><td>\( (C_f) \) au-dessus sur \( [a, c] \), en dessous sur \( [c, b] \)</td><td>\( \left(\displaystyle\int_a^c \big[f(x) - g(x)\big]\,dx + \int_c^b \big[g(x) - f(x)\big]\,dx\right) \;\text{u.a.} \)</td></tr>
    </table></div>
  </div>

  <!-- ═══════════ IX — Volume ═══════════ -->
  <div class="cours-section reveal" id="s9">
    <span class="section-label slate-label">Section IX</span>
    <h2 class="section-heading">Calcul d'un volume</h2>

    <div class="box box-thm"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Volume de révolution</div>
      <p>Le volume du solide engendré par un tour complet de la courbe \( (C_f) \) autour de l'axe des abscisses, dans un intervalle \( [a, b] \), est :</p>
      <p style="text-align:center;margin:14px 0;font-size:1.15rem;font-weight:600;color:var(--teal)">\( V = \left(\int_a^b \pi\big[f(x)\big]^2\,dx\right) \;\text{u.a.} \)</p>
    </div>

    <div class="box box-example"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg> Exemple</div>
      <p>Le volume de la sphère de rayon \( R \) : la courbe est \( f(x) = \sqrt{R^2 - x^2} \) sur \( [-R, R] \).</p>
      <p>\( V = \displaystyle\int_{-R}^{R} \pi(R^2 - x^2)\,dx = \pi\left[R^2 x - \dfrac{x^3}{3}\right]_{-R}^{R} = \dfrac{4}{3}\pi R^3 \).</p>
    </div>
  </div>
`,
        exercises: [
            {
                title: "Exercice 1 : Calcul d'intégrale par IPP",
                statement: "Calculer l'intégrale : I = ∫(1 à e) x ln(x) dx.",
                solution: "Posons u'(x) = x => u(x) = x²/2 et v(x) = ln(x) => v'(x) = 1/x.<br>I = [x²/2 ln(x)](1 à e) - ∫(1 à e) x/2 dx = (e²/2) - [x²/4](1 à e) = e²/2 - (e²/4 - 1/4) = (e² + 1) / 4."
            }
        ],
        exams: [
            { title: "Examen National 2024 - Calcul Intégral", type: "National", year: 2024 }
        ]
    },
    {
        id: "math-equa-diff",
        title: "Équations différentielles",
        level: "2bac-pc",
        subject: "math",
        description: "Résolution des équations y' = ay + b et y'' + ay' + by = 0 et leurs applications en physique.",
        courseContent: `
<div class="toc reveal"><div class="toc-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg> Sommaire</div><ol class="toc-list">
    <li><a href="#s1"><span class="toc-num">I</span> Équation différentielle du premier ordre</a></li>
    <li><a href="#s2"><span class="toc-num">II</span> Équation différentielle du second ordre</a></li>
  </ol></div>

  <!-- ═══════════ I — Premier ordre ═══════════ -->
  <div class="cours-section reveal" id="s1">
    <span class="section-label">Section I</span>
    <h2 class="section-heading">Équation différentielle du premier ordre</h2>

    <div class="box box-def"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Forme générale</div>
      <p>L'équation différentielle du <strong>premier ordre</strong> à coefficients constants est de la forme :</p>
      <p style="text-align:center;margin:14px 0;font-size:1.2rem;font-weight:600;color:var(--teal)">\( y' = ay + b \)</p>
      <p>où \( a \) et \( b \) sont des constantes réelles (\( a \neq 0 \)).</p>
    </div>

    <div class="box box-thm"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Solution générale</div>
      <p>La <strong>solution générale</strong> de l'équation \( y' = ay + b \) est :</p>
      <p style="text-align:center;margin:14px 0;font-size:1.2rem;font-weight:600;color:var(--teal)">\( y(x) = \alpha\, e^{ax} - \dfrac{b}{a} \)</p>
      <p>où \( \alpha \in \mathbb{R} \) est une constante arbitraire.</p>
    </div>

    <div class="box box-rem"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> Cas particulier : \( b = 0 \)</div>
      <p>Si \( b = 0 \), l'équation devient \( y' = ay \) et la solution est :</p>
      <p style="text-align:center;margin:10px 0;font-size:1.05rem;font-weight:600;color:var(--teal)">\( y(x) = \alpha\, e^{ax} \qquad (\alpha \in \mathbb{R}) \)</p>
    </div>

    <div class="box box-rem"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> Condition initiale</div>
      <p>Si on impose \( y(x_0) = y_0 \), on détermine la constante \( \alpha \) de manière unique. Il y a alors une <strong>seule solution</strong> vérifiant la condition initiale.</p>
    </div>

    <div class="box box-example"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg> Exemple</div>
      <p>Résoudre \( y' = 2y - 6 \) avec \( y(0) = 5 \).</p>
      <p>Ici \( a = 2 \), \( b = -6 \). Solution générale : \( y(x) = \alpha\,e^{2x} - \dfrac{-6}{2} = \alpha\,e^{2x} + 3 \).</p>
      <p>Condition \( y(0) = 5 \) : \( \alpha + 3 = 5 \), donc \( \alpha = 2 \).</p>
      <p>Solution : \( y(x) = 2e^{2x} + 3 \).</p>
    </div>
  </div>

  <!-- ═══════════ II — Second ordre ═══════════ -->
  <div class="cours-section reveal" id="s2">
    <span class="section-label gold-label">Section II</span>
    <h2 class="section-heading">Équation différentielle du second ordre</h2>

    <div class="box box-def"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Forme générale</div>
      <p>L'équation différentielle du <strong>second ordre</strong> à coefficients constants (homogène) est de la forme :</p>
      <p style="text-align:center;margin:14px 0;font-size:1.2rem;font-weight:600;color:var(--teal)">\( y'' + ay' + by = 0 \)</p>
      <p>où \( a \) et \( b \) sont des constantes réelles.</p>
    </div>

    <div class="box box-thm"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Équation caractéristique</div>
      <p>On associe à l'équation différentielle l'<strong>équation caractéristique</strong> :</p>
      <p style="text-align:center;margin:14px 0;font-size:1.15rem;font-weight:600;color:var(--teal)">\( r^2 + ar + b = 0 \)</p>
      <p>On calcule le discriminant : \( \Delta = a^2 - 4b \).</p>
    </div>

    <h3 class="sub-heading">Les trois cas selon le signe de \( \Delta \)</h3>

    <div class="math-table-wrap"><table class="math-table">
      <tr>
        <th>Signe de \( \Delta \)</th>
        <th>Racines de l'éq. caractéristique</th>
        <th>Solution générale de \( y'' + ay' + by = 0 \)</th>
      </tr>
      <tr>
        <td style="font-weight:700;color:var(--correct)">\( \Delta > 0 \)</td>
        <td>Deux racines réelles distinctes \( r_1 \) et \( r_2 \)</td>
        <td>\( y(x) = \alpha\,e^{r_1 x} + \beta\,e^{r_2 x} \)<br/><span style="font-size:0.82rem;color:var(--text-light)">\( (\alpha, \beta) \in \mathbb{R}^2 \)</span></td>
      </tr>
      <tr>
        <td style="font-weight:700;color:var(--gold)">\( \Delta = 0 \)</td>
        <td>Une racine double réelle \( r \)</td>
        <td>\( y(x) = (\alpha x + \beta)\,e^{rx} \)<br/><span style="font-size:0.82rem;color:var(--text-light)">\( (\alpha, \beta) \in \mathbb{R}^2 \)</span></td>
      </tr>
      <tr>
        <td style="font-weight:700;color:var(--wrong)">\( \Delta < 0 \)</td>
        <td>Deux racines complexes conjuguées<br/>\( r_1 = p - iq \) et \( r_2 = p + iq \)</td>
        <td>\( y(x) = \big(\alpha\cos(qx) + \beta\sin(qx)\big)\,e^{px} \)<br/><span style="font-size:0.82rem;color:var(--text-light)">\( (\alpha, \beta) \in \mathbb{R}^2 \)</span></td>
      </tr>
    </table></div>

    <div class="box box-rem"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> Remarques importantes</div>
      <ul class="cours-list">
        <li>Dans le cas \( \Delta < 0 \) : \( p = \dfrac{-a}{2} \) (partie réelle) et \( q = \dfrac{\sqrt{|\Delta|}}{2} \) (partie imaginaire).</li>
        <li>Si \( p = 0 \) (c'est-à-dire \( a = 0 \)), la solution est purement oscillante : \( y(x) = \alpha\cos(qx) + \beta\sin(qx) \).</li>
        <li>Les constantes \( \alpha \) et \( \beta \) sont déterminées par <strong>deux conditions initiales</strong> : \( y(x_0) = y_0 \) et \( y'(x_0) = y'_0 \).</li>
      </ul>
    </div>

    <div class="divider"></div>

    <div class="box box-example"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg> Exemple 1 : \( \Delta > 0 \)</div>
      <p>Résoudre \( y'' - 3y' + 2y = 0 \).</p>
      <p>Éq. caractéristique : \( r^2 - 3r + 2 = 0 \). \( \Delta = 9 - 8 = 1 > 0 \). Racines : \( r_1 = 1 \), \( r_2 = 2 \).</p>
      <p>Solution : \( y(x) = \alpha\,e^x + \beta\,e^{2x} \).</p>
    </div>

    <div class="box box-example"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg> Exemple 2 : \( \Delta = 0 \)</div>
      <p>Résoudre \( y'' - 4y' + 4y = 0 \).</p>
      <p>Éq. caractéristique : \( r^2 - 4r + 4 = 0 \). \( \Delta = 0 \). Racine double : \( r = 2 \).</p>
      <p>Solution : \( y(x) = (\alpha x + \beta)\,e^{2x} \).</p>
    </div>

    <div class="box box-example"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg> Exemple 3 : \( \Delta < 0 \)</div>
      <p>Résoudre \( y'' + 2y' + 5y = 0 \).</p>
      <p>Éq. caractéristique : \( r^2 + 2r + 5 = 0 \). \( \Delta = 4 - 20 = -16 < 0 \).</p>
      <p>\( p = \dfrac{-2}{2} = -1 \), \( q = \dfrac{\sqrt{16}}{2} = 2 \). Racines : \( r = -1 \pm 2i \).</p>
      <p>Solution : \( y(x) = \big(\alpha\cos(2x) + \beta\sin(2x)\big)\,e^{-x} \).</p>
    </div>
  </div>
`,
        exercises: [
            {
                title: "Exercice 1 : Équation homogène du 2nd degré",
                statement: "Résoudre l'équation différentielle : y'' - 3y' + 2y = 0.",
                solution: "L'équation caractéristique est r² - 3r + 2 = 0 de solutions r₁ = 1 et r₂ = 2.<br>La solution générale est : <strong>y(x) = A eˣ + B e²ˣ</strong> (avec A et B réels)."
            }
        ],
        exams: [
            { title: "Examen National 2023 - Session Ordinaire", type: "National", year: 2023 }
        ]
    },
    {
        id: "math-geometrie-espace",
        title: "Géométrie dans l'espace",
        level: "2bac-pc",
        subject: "math",
        description: "Produit scalaire et vectoriel dans l'espace, équations de plans et sphères, représentations de droites.",
        courseContent: `
<div class="toc reveal"><div class="toc-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg> Sommaire</div><ol class="toc-list">
    <li><a href="#s1"><span class="toc-num">I</span> Vecteurs, norme et distance</a></li>
    <li><a href="#s2"><span class="toc-num">II</span> Produit scalaire</a></li>
    <li><a href="#s3"><span class="toc-num">III</span> Produit vectoriel</a></li>
    <li><a href="#s4"><span class="toc-num">IV</span> Droite dans l'espace</a></li>
    <li><a href="#s5"><span class="toc-num">V</span> Plan dans l'espace</a></li>
    <li><a href="#s6"><span class="toc-num">VI</span> Sphère</a></li>
    <li><a href="#s7"><span class="toc-num">VII</span> Intersections (sphère/plan et sphère/droite)</a></li>
    <li><a href="#s8"><span class="toc-num">VIII</span> Aires (triangle et parallélogramme)</a></li>
  </ol></div>

  <!-- ═══════════ I ═══════════ -->
  <div class="cours-section reveal" id="s1"><span class="section-label">Section I</span><h2 class="section-heading">Vecteurs, norme <em>&</em> distance</h2>
    <div class="box box-def"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Repère et coordonnées</div>
      <p>L'espace est rapporté à un repère orthonormé direct \((O,\vec{i},\vec{j},\vec{k})\). Tout point \(M\) admet des coordonnées \((x,y,z)\). Tout vecteur \(\vec{u}\) s'écrit \(\vec{u}(a,b,c)\).</p>
    </div>
    <div class="box box-thm"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Vecteur \(\overrightarrow{AB}\)</div>
      <p>Si \(A(x_A,y_A,z_A)\) et \(B(x_B,y_B,z_B)\) :</p>
      <p style="text-align:center;margin:12px 0;font-size:1.1rem;font-weight:600;color:var(--teal)">\(\overrightarrow{AB}=\begin{pmatrix}x_B-x_A\\y_B-y_A\\z_B-z_A\end{pmatrix}\)</p>
    </div>
    <div class="box box-prop"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Opérations fondamentales</div>
      <ul class="cours-list">
        <li><strong>Norme :</strong> \(\|\vec{u}\|=\sqrt{a^2+b^2+c^2}\)</li>
        <li><strong>Somme :</strong> \(\vec{u}+\vec{v}=(a+a',\;b+b',\;c+c')\)</li>
        <li><strong>Produit par un scalaire :</strong> \(k\cdot\vec{u}=(ka,\;kb,\;kc)\)</li>
      </ul>
    </div>
    <div class="grid-2x2">
      <div class="box box-thm" style="margin:0"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Distance</div>
        <p style="text-align:center;font-size:1rem;font-weight:600;color:var(--teal)">\(AB=\|\overrightarrow{AB}\|=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2+(z_B-z_A)^2}\)</p>
      </div>
      <div class="box box-thm" style="margin:0"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Milieu</div>
        <p style="text-align:center;font-size:1rem;font-weight:600;color:var(--teal)">\(I=\left(\dfrac{x_A+x_B}{2},\;\dfrac{y_A+y_B}{2},\;\dfrac{z_A+z_B}{2}\right)\)</p>
      </div>
    </div>
    <div class="box box-prop"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Colinéarité et orthogonalité</div>
      <ul class="cours-list">
        <li>\(\vec{u}\parallel\vec{v}\iff\exists k:\vec{v}=k\vec{u}\)</li>
        <li>\(\vec{u}\perp\vec{v}\iff\vec{u}\cdot\vec{v}=0\)</li>
      </ul>
    </div>
  </div>

  <!-- ═══════════ II ═══════════ -->
  <div class="cours-section reveal" id="s2"><span class="section-label gold-label">Section II</span><h2 class="section-heading">Produit scalaire</h2>
    <div class="box box-def"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Définition</div>
      <p style="text-align:center;margin:12px 0;font-size:1.15rem;font-weight:600;color:var(--teal)">\(\vec{u}\cdot\vec{v}=aa'+bb'+cc'=\|\vec{u}\|\cdot\|\vec{v}\|\cdot\cos\theta\)</p>
    </div>
    <div class="box box-prop"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Identités remarquables</div>
      <ul class="cours-list">
        <li>\(\|\vec{u}\|^2=\vec{u}\cdot\vec{u}=a^2+b^2+c^2\)</li>
        <li>\((\vec{u}+\vec{v})\cdot(\vec{u}-\vec{v})=\|\vec{u}\|^2-\|\vec{v}\|^2\)</li>
        <li>\(\|\vec{u}+\vec{v}\|^2=\|\vec{u}\|^2+2\,\vec{u}\cdot\vec{v}+\|\vec{v}\|^2\)</li>
      </ul>
    </div>
    <div class="box box-rem"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> Triangle rectangle</div>
      <p>Si \(\overrightarrow{AB}\cdot\overrightarrow{AC}=0\), alors le triangle \(ABC\) est <strong>rectangle en \(A\)</strong>.</p>
    </div>
  </div>

  <!-- ═══════════ III ═══════════ -->
  <div class="cours-section reveal" id="s3"><span class="section-label blue-label">Section III</span><h2 class="section-heading">Produit vectoriel</h2>
    <div class="box box-def"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Définition</div>
      <p style="text-align:center;margin:12px 0;font-size:1.1rem;font-weight:600;color:var(--teal)">\(\vec{u}\wedge\vec{v}=\begin{vmatrix}\vec{i}&\vec{j}&\vec{k}\\a&b&c\\a'&b'&c'\end{vmatrix}=\begin{pmatrix}bc'-cb'\\ca'-ac'\\ab'-ba'\end{pmatrix}\)</p>
    </div>
    <div class="box box-prop"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Propriétés</div>
      <ul class="cours-list">
        <li>\(\vec{u}\wedge\vec{v}\) est <strong>orthogonal</strong> à \(\vec{u}\) et à \(\vec{v}\)</li>
        <li>\(\vec{u}\wedge\vec{v}=\vec{0}\iff\vec{u}\) et \(\vec{v}\) sont <strong>colinéaires</strong></li>
        <li>\(\|\vec{u}\wedge\vec{v}\|=\|\vec{u}\|\cdot\|\vec{v}\|\cdot\sin\theta\)</li>
        <li>\(\vec{u}\wedge\vec{v}=-\vec{v}\wedge\vec{u}\) (anti-commutatif)</li>
      </ul>
    </div>
    <div class="box box-rem"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> Vecteur normal à un plan</div>
      <p>Si \(A\), \(B\), \(C\) ne sont pas alignés, alors \(\overrightarrow{AB}\wedge\overrightarrow{AC}\) est un <strong>vecteur normal au plan</strong> \((ABC)\).</p>
    </div>
  </div>

  <!-- ═══════════ IV ═══════════ -->
  <div class="cours-section reveal" id="s4"><span class="section-label emerald-label">Section IV</span><h2 class="section-heading">Droite dans l'espace</h2>
    <div class="box box-def"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Représentation paramétrique</div>
      <p>La droite \((D)\) passant par \(A(x_A,y_A,z_A)\) de vecteur directeur \(\vec{u}(a,b,c)\) :</p>
      <p style="text-align:center;margin:12px 0;font-size:1.1rem;font-weight:600;color:var(--teal)">\(\begin{cases}x=x_A+at\\y=y_A+bt\\z=z_A+ct\end{cases}\quad t\in\mathbb{R}\)</p>
    </div>
    <div class="box box-thm"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Distance d'un point à une droite</div>
      <p style="text-align:center;margin:12px 0;font-size:1.15rem;font-weight:600;color:var(--teal)">\(d(M,(D))=\dfrac{\|\overrightarrow{AM}\wedge\vec{u}\|}{\|\vec{u}\|}\)</p>
    </div>
  </div>

  <!-- ═══════════ V ═══════════ -->
  <div class="cours-section reveal" id="s5"><span class="section-label orange-label">Section V</span><h2 class="section-heading">Plan dans l'espace</h2>
    <div class="box box-def"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Équation cartésienne</div>
      <p>Le plan \((P)\) de vecteur normal \(\vec{n}(a,b,c)\) :</p>
      <p style="text-align:center;margin:12px 0;font-size:1.15rem;font-weight:600;color:var(--teal)">\((P):ax+by+cz+d=0\)</p>
    </div>
    <div class="box box-thm"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Plan passant par un point</div>
      <p style="text-align:center;font-size:1.05rem;font-weight:600;color:var(--teal)">\(a(x-x_A)+b(y-y_A)+c(z-z_A)=0\)</p>
    </div>
    <div class="box box-thm"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Distance d'un point à un plan</div>
      <p style="text-align:center;margin:12px 0;font-size:1.15rem;font-weight:600;color:var(--teal)">\(d(\Omega,(P))=\dfrac{|ax_\Omega+by_\Omega+cz_\Omega+d|}{\sqrt{a^2+b^2+c^2}}\)</p>
    </div>
    <div class="box box-example"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg> Exemple</div>
      <p>Distance de \(A(1,2,-1)\) au plan \(2x-y+2z+3=0\) : \(d=\frac{|2-2-2+3|}{3}=\frac{1}{3}\).</p>
    </div>
  </div>

  <!-- ═══════════ VI ═══════════ -->
  <div class="cours-section reveal" id="s6"><span class="section-label plum-label">Section VI</span><h2 class="section-heading">Sphère</h2>
    <div class="box box-def"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Équation cartésienne</div>
      <p>La sphère \((S)\) de centre \(\Omega(a,b,c)\) et de rayon \(R\) :</p>
      <p style="text-align:center;margin:14px 0;font-size:1.15rem;font-weight:600;color:var(--teal)">\((S):(x-a)^2+(y-b)^2+(z-c)^2=R^2\)</p>
    </div>
    <div class="box box-thm"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Sphère de diamètre \([AB]\)</div>
      <p>On utilise l'équivalence :</p>
      <p style="text-align:center;margin:12px 0;font-size:1.1rem;font-weight:600;color:var(--teal)">\(M\in(S)\iff\overrightarrow{AM}\cdot\overrightarrow{BM}=0\)</p>
    </div>
  </div>

  <!-- ═══════════ VII ═══════════ -->
  <div class="cours-section reveal" id="s7"><span class="section-label rose-label">Section VII</span><h2 class="section-heading">Intersections</h2>

    <h3 class="sub-heading">1. Intersection sphère / plan</h3>
    <div class="box box-rem"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> Méthode</div>
      <p>Soit \(H\) le projeté orthogonal du centre \(\Omega\) sur le plan \((P)\). On pose \(d=\Omega H=d(\Omega,(P))\).</p>
    </div>
    <div class="math-table-wrap"><table class="math-table">
      <tr><th>Condition</th><th>Résultat</th></tr>
      <tr><td style="font-weight:700;color:var(--correct)">\(d < R\)</td><td>\((P)\) <strong>coupe</strong> \((S)\) suivant un <strong>cercle</strong> de centre \(H\) et de rayon \(r=\sqrt{R^2-d^2}\)</td></tr>
      <tr><td style="font-weight:700;color:var(--gold)">\(d = R\)</td><td>\((P)\) est <strong>tangent</strong> à \((S)\) en \(H\)</td></tr>
      <tr><td style="font-weight:700;color:var(--wrong)">\(d > R\)</td><td>\((P)\) <strong>ne coupe pas</strong> \((S)\)</td></tr>
    </table></div>

    <div class="box box-thm"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Plan tangent à une sphère en \(A\)</div>
      <ul class="cours-list">
        <li><strong>Méthode 1 :</strong> \(M(x,y,z)\in(P)\iff\overrightarrow{AM}\cdot\overrightarrow{A\Omega}=0\)</li>
        <li><strong>Méthode 2 :</strong> \(\overrightarrow{A\Omega}\) est un vecteur normal au plan tangent \((P)\)</li>
      </ul>
    </div>

    <h3 class="sub-heading">2. Intersection sphère / droite</h3>
    <div class="box box-rem"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> Méthode</div>
      <p>Soit \(H\) le projeté orthogonal du centre \(\Omega\) sur la droite \((D)\). On pose \(d=\Omega H=d(\Omega,(D))\).</p>
    </div>
    <div class="math-table-wrap"><table class="math-table">
      <tr><th>Condition</th><th>Résultat</th></tr>
      <tr><td style="font-weight:700;color:var(--correct)">\(d < R\)</td><td>\((D)\) <strong>coupe</strong> \((S)\) en <strong>deux points distincts</strong></td></tr>
      <tr><td style="font-weight:700;color:var(--gold)">\(d = R\)</td><td>\((D)\) est <strong>tangente</strong> à \((S)\) en \(H\)</td></tr>
      <tr><td style="font-weight:700;color:var(--wrong)">\(d > R\)</td><td>\((D)\) <strong>ne coupe pas</strong> \((S)\)</td></tr>
    </table></div>
  </div>

  <!-- ═══════════ VIII ═══════════ -->
  <div class="cours-section reveal" id="s8"><span class="section-label forest-label">Section VIII</span><h2 class="section-heading">Aires (triangle <em>&</em> parallélogramme)</h2>
    <div class="grid-2x2">
      <div class="box box-thm" style="margin:0"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Aire d'un triangle</div>
        <p style="text-align:center;font-size:1.1rem;font-weight:600;color:var(--teal)">\(S_{ABC}=\dfrac{1}{2}\|\overrightarrow{AB}\wedge\overrightarrow{AC}\|\)</p>
      </div>
      <div class="box box-thm" style="margin:0"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Aire d'un parallélogramme</div>
        <p style="text-align:center;font-size:1.1rem;font-weight:600;color:var(--teal)">\(S_{ABCD}=\|\overrightarrow{AB}\wedge\overrightarrow{AC}\|\)</p>
      </div>
    </div>
    <div class="box box-example"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg> Exemple</div>
      <p>\(A(0,0,0)\), \(B(1,2,0)\), \(C(0,1,3)\). \(\overrightarrow{AB}\wedge\overrightarrow{AC}=(6,-3,1)\).</p>
      <p>\(S_{ABC}=\frac{1}{2}\sqrt{36+9+1}=\frac{\sqrt{46}}{2}\approx 3{,}39\) u.a.</p>
    </div>
  </div>
`,
        exercises: [
            {
                title: "Exercice 1 : Distance d'un point à un plan",
                statement: "Calculer la distance du point A(1, 2, 3) au plan (P) : 2x - y + 2z - 3 = 0.",
                solution: "d(A, P) = |2(1) - 2 + 2(3) - 3| / \\sqrt{2² + (-1)² + 2²} = |2 - 2 + 6 - 3| / \\sqrt{9} = 3 / 3 = 1."
            }
        ],
        exams: [
            { title: "Examen National 2024 - Géométrie dans l'espace", type: "National", year: 2024 }
        ]
    },
    {
        id: "math-probabilites",
        title: "Dénombrement et probabilités",
        level: "2bac-pc",
        subject: "math",
        description: "Analyse combinatoire, probabilités conditionnelles, variables aléatoires et loi binomiale.",
        courseContent: `
<div class="toc reveal"><div class="toc-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg> Sommaire</div><ol class="toc-list">
    <li><a href="#s1"><span class="toc-num">I</span> Terminologie des probabilités</a></li>
    <li><a href="#s2"><span class="toc-num">II</span> Probabilité d'un événement</a></li>
    <li><a href="#s3"><span class="toc-num">III</span> Probabilité conditionnelle et indépendance</a></li>
    <li><a href="#s4"><span class="toc-num">IV</span> Variable aléatoire</a></li>
    <li><a href="#s5"><span class="toc-num">V</span> Espérance, variance et écart type</a></li>
    <li><a href="#s6"><span class="toc-num">VI</span> Loi binomiale</a></li>
    <li><a href="#s7"><span class="toc-num">VII</span> Cardinal d'un ensemble — Quelle formule utiliser ?</a></li>
  </ol></div>

  <!-- I -->
  <div class="cours-section reveal" id="s1"><span class="section-label">Section I</span><h2 class="section-heading">Terminologie des probabilités</h2>
    <div class="math-table-wrap"><table class="math-table">
      <tr><th>Terme</th><th>Sens</th></tr>
      <tr><td>Expérience aléatoire</td><td>Toute expérience qui admet plus d'un résultat</td></tr>
      <tr><td>Univers \(\Omega\)</td><td>L'ensemble des événements possibles</td></tr>
      <tr><td>Événement \(A\)</td><td>\(A\) est une partie de \(\Omega\)</td></tr>
      <tr><td>Événement élémentaire</td><td>Événement contenant un seul élément</td></tr>
      <tr><td>\(A \cap B\)</td><td>\(A\) et \(B\) sont réalisés simultanément</td></tr>
      <tr><td>\(A \cup B\)</td><td>\(A\) ou \(B\) (ou les deux) est réalisé</td></tr>
      <tr><td>\(\bar{A}\)</td><td>L'événement contraire de \(A\) : \(A \cap \bar{A} = \varnothing\) et \(A \cup \bar{A} = \Omega\)</td></tr>
      <tr><td>\(A\) et \(B\) incompatibles</td><td>\(A \cap B = \varnothing\)</td></tr>
    </table></div>
  </div>

  <!-- II -->
  <div class="cours-section reveal" id="s2"><span class="section-label gold-label">Section II</span><h2 class="section-heading">Probabilité d'un événement</h2>
    <div class="box box-def"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Définition</div>
      <p>La probabilité d'un événement \(A\) est la somme des probabilités des événements élémentaires qui le composent.</p>
    </div>
    <div class="box box-prop"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Propriétés</div>
      <ul class="cours-list">
        <li>\(P(\varnothing) = 0\) et \(P(\Omega) = 1\)</li>
        <li>\(0 \leq P(A) \leq 1\) pour tout événement \(A\)</li>
        <li>\(P(A \cup B) = P(A) + P(B) - P(A \cap B)\)</li>
        <li>Si \(A\) et \(B\) sont <strong>incompatibles</strong> : \(P(A \cup B) = P(A) + P(B)\)</li>
        <li>\(P(\bar{A}) = 1 - P(A)\)</li>
      </ul>
    </div>
    <div class="box box-thm"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Équiprobabilité</div>
      <p>Si tous les événements élémentaires sont équiprobables :</p>
      <p style="text-align:center;margin:12px 0;font-size:1.15rem;font-weight:600;color:var(--teal)">\(P(A) = \dfrac{\text{Card}(A)}{\text{Card}(\Omega)} = \dfrac{\text{nombre de cas favorables}}{\text{nombre de cas possibles}}\)</p>
    </div>
  </div>

  <!-- III -->
  <div class="cours-section reveal" id="s3"><span class="section-label blue-label">Section III</span><h2 class="section-heading">Probabilité conditionnelle <em>&</em> indépendance</h2>
    <div class="box box-def"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Probabilité conditionnelle</div>
      <p>Soit \(A\) et \(B\) deux événements avec \(P(A) \neq 0\). La probabilité de \(B\) <strong>sachant que</strong> \(A\) est réalisé :</p>
      <p style="text-align:center;margin:12px 0;font-size:1.15rem;font-weight:600;color:var(--teal)">\(P_A(B) = P\!\left(\dfrac{B}{A}\right) = \dfrac{P(A \cap B)}{P(A)}\)</p>
    </div>
    <div class="box box-thm"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Formule des probabilités composées</div>
      <p>Pour \(P(A) \neq 0\) et \(P(B) \neq 0\) :</p>
      <p style="text-align:center;margin:10px 0;font-size:1.05rem;font-weight:600;color:var(--teal)">\(P(A \cap B) = P(A) \times P_A(B) = P(B) \times P_B(A)\)</p>
    </div>
    <div class="box box-def"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Indépendance</div>
      <p>\(A\) et \(B\) sont <strong>indépendants</strong> si et seulement si :</p>
      <p style="text-align:center;margin:12px 0;font-size:1.15rem;font-weight:600;color:var(--teal)">\(P(A \cap B) = P(A) \times P(B)\)</p>
    </div>
    <div class="box box-thm"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Formule des probabilités totales</div>
      <p>Soit \(\Omega_1\) et \(\Omega_2\) deux sous-univers tels que \(\Omega_1 \cap \Omega_2 = \varnothing\) et \(\Omega_1 \cup \Omega_2 = \Omega\). Pour tout événement \(A\) :</p>
      <p style="text-align:center;margin:10px 0;font-size:1.05rem;font-weight:600;color:var(--teal)">\(P(A) = P(\Omega_1) \times P_{\Omega_1}(A) + P(\Omega_2) \times P_{\Omega_2}(A)\)</p>
    </div>
  </div>

  <!-- IV -->
  <div class="cours-section reveal" id="s4"><span class="section-label emerald-label">Section IV</span><h2 class="section-heading">Variable aléatoire</h2>
    <div class="box box-def"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Définition</div>
      <p>Soit \(X\) une variable aléatoire sur \(\Omega\). Pour déterminer la <strong>loi de probabilité</strong> de \(X\), on suit deux étapes :</p>
      <ul class="cours-list">
        <li>Déterminer \(X(\Omega) = \{x_1, x_2, \ldots, x_n\}\) : l'ensemble des valeurs que peut prendre \(X\).</li>
        <li>Calculer les probabilités \(p(X = x_i)\) pour tout \(i \in \{1, 2, \ldots, n\}\).</li>
      </ul>
    </div>
    <div class="box box-rem"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> Tableau de loi</div>
      <div class="math-table-wrap"><table class="math-table" style="min-width:250px">
        <tr><th>\(x_i\)</th><td>\(x_1\)</td><td>\(x_2\)</td><td>\(\ldots\)</td><td>\(x_n\)</td></tr>
        <tr><th>\(P(X=x_i)\)</th><td>\(p_1\)</td><td>\(p_2\)</td><td>\(\ldots\)</td><td>\(p_n\)</td></tr>
      </table></div>
      <p style="margin-top:8px">On vérifie toujours que \(p_1 + p_2 + \ldots + p_n = 1\).</p>
    </div>
  </div>

  <!-- V -->
  <div class="cours-section reveal" id="s5"><span class="section-label orange-label">Section V</span><h2 class="section-heading">Espérance, variance <em>&</em> écart type</h2>
    <div class="box box-def"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Espérance mathématique</div>
      <p style="text-align:center;margin:12px 0;font-size:1.15rem;font-weight:600;color:var(--teal)">\(E(X) = x_1 p_1 + x_2 p_2 + \ldots + x_n p_n = \displaystyle\sum_{i=1}^{n} x_i \cdot p_i\)</p>
    </div>
    <div class="box box-def"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Variance</div>
      <p style="text-align:center;margin:12px 0;font-size:1.15rem;font-weight:600;color:var(--teal)">\(V(X) = E(X^2) - [E(X)]^2 = \displaystyle\sum_{i=1}^{n} (x_i)^2 \cdot p_i - \left(\sum_{i=1}^{n} x_i \cdot p_i\right)^2\)</p>
    </div>
    <div class="box box-def"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Écart type</div>
      <p style="text-align:center;margin:12px 0;font-size:1.15rem;font-weight:600;color:var(--teal)">\(\sigma(X) = \sqrt{V(X)}\)</p>
    </div>
  </div>

  <!-- VI -->
  <div class="cours-section reveal" id="s6"><span class="section-label plum-label">Section VI</span><h2 class="section-heading">Loi binomiale</h2>
    <div class="box box-def"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Définition</div>
      <p>Soit \(p\) la probabilité d'un événement \(A\) dans une expérience aléatoire. On répète cette épreuve \(n\) fois de suite. La variable aléatoire \(X\) qui lie chaque résultat au nombre de fois que \(A\) se réalise s'appelle une <strong>variable aléatoire binomiale</strong> de paramètres \(n\) et \(p\).</p>
    </div>
    <div class="box box-thm"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg> Loi de probabilité</div>
      <p>On a : \(\forall k \in \{0, 1, 2, \ldots, n\}\) :</p>
      <p style="text-align:center;margin:14px 0;font-size:1.15rem;font-weight:600;color:var(--teal)">\(P(X = k) = \binom{n}{k} \cdot p^k \cdot (1-p)^{n-k}\)</p>
      <p>où \(\binom{n}{k} = \dfrac{n!}{k!(n-k)!}\) est le coefficient binomial.</p>
    </div>
    <div class="box box-prop"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Espérance et variance</div>
      <ul class="cours-list">
        <li>\(E(X) = n \times p\)</li>
        <li>\(V(X) = n \times p \times (1-p)\)</li>
      </ul>
    </div>
    <div class="box box-example"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg> Exemple</div>
      <p>On lance une pièce 10 fois. \(X\) = nombre de « pile ». \(X\) suit \(\mathcal{B}(10,\; \frac{1}{2})\).</p>
      <p>\(P(X=3) = \binom{10}{3}\left(\frac{1}{2}\right)^3\left(\frac{1}{2}\right)^7 = 120 \times \frac{1}{1024} = \frac{120}{1024} \approx 0{,}117\).</p>
      <p>\(E(X) = 10 \times \frac{1}{2} = 5\). \(V(X) = 10 \times \frac{1}{2} \times \frac{1}{2} = 2{,}5\).</p>
    </div>
  </div>

  <!-- VII -->
  <div class="cours-section reveal" id="s7"><span class="section-label rose-label">Section VII</span><h2 class="section-heading">Cardinal d'un ensemble — Quelle formule utiliser ?</h2>

    <div class="box box-rem"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> Idée clé</div>
      <p>Pour calculer le <strong>cardinal</strong> (le nombre d'éléments) d'un ensemble, il faut d'abord identifier le <strong>type de tirage</strong> décrit dans l'énoncé. Le choix de la formule dépend de <strong>comment</strong> on tire les éléments.</p>
    </div>

    <div class="box box-def"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg> Notations</div>
      <ul class="cours-list">
        <li>\(n\) : le nombre total d'éléments (par exemple, le nombre de boules dans l'urne)</li>
        <li>\(p\) : le nombre d'éléments choisis (par exemple, le nombre de boules à la main)</li>
      </ul>
    </div>

    <div class="sub-heading">Les 3 situations de tirage</div>

    <div class="math-table-wrap"><table class="math-table" style="min-width:500px">
      <tr>
        <th style="width:30%">Type de tirage</th>
        <th style="width:25%">Formule</th>
        <th style="width:45%">Quand l'utiliser ?</th>
      </tr>
      <tr>
        <td style="font-weight:700;color:var(--teal)">Tirage simultané</td>
        <td style="font-size:1.1rem;font-weight:600;color:var(--teal)">\(\displaystyle\binom{n}{p} = \frac{n!}{p!(n-p)!}\)</td>
        <td style="text-align:left;padding-left:18px">On tire \(p\) éléments <strong>en même temps</strong> (ou d'un seul coup). L'<strong>ordre ne compte pas</strong>.<br/><em>→ On utilise la <strong>combinaison</strong></em></td>
      </tr>
      <tr>
        <td style="font-weight:700;color:#b07a10">Tirage successif <strong>sans remise</strong></td>
        <td style="font-size:1.1rem;font-weight:600;color:#b07a10">\(\displaystyle A_n^p = \frac{n!}{(n-p)!}\)</td>
        <td style="text-align:left;padding-left:18px">On tire les éléments <strong>l'un après l'autre</strong>, et on <strong>ne remet pas</strong> l'élément tiré. L'<strong>ordre compte</strong>.<br/><em>→ On utilise l'<strong>arrangement</strong></em></td>
      </tr>
      <tr>
        <td style="font-weight:700;color:#9b2c5a">Tirage successif <strong>avec remise</strong></td>
        <td style="font-size:1.1rem;font-weight:600;color:#9b2c5a">\(n^p\)</td>
        <td style="text-align:left;padding-left:18px">On tire les éléments <strong>l'un après l'autre</strong>, et on <strong>remet</strong> l'élément tiré à chaque fois. L'<strong>ordre compte</strong>.<br/><em>→ On utilise \(n^p\)</em></td>
      </tr>
    </table></div>

    <div class="sub-heading">Comment reconnaître le type de tirage ?</div>

    <div class="box box-thm"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"/><circle cx="16.5" cy="7.5" r=".5"/></svg> Méthode — Les mots-clés à repérer</div>
      <ul class="cours-list">
        <li><strong>« simultanément »</strong>, <strong>« en même temps »</strong>, <strong>« d'un seul coup »</strong>, <strong>« choisir »</strong>, <strong>« comité »</strong>, <strong>« groupe »</strong> → <strong style="color:var(--teal)">Combinaison \(\binom{n}{p}\)</strong></li>
        <li><strong>« successivement sans remise »</strong>, <strong>« l'un après l'autre sans remettre »</strong>, <strong>« code sans répétition »</strong> → <strong style="color:#b07a10">Arrangement \(A_n^p\)</strong></li>
        <li><strong>« successivement avec remise »</strong>, <strong>« on remet la boule »</strong>, <strong>« code avec répétition »</strong> → <strong style="color:#9b2c5a">\(n^p\)</strong></li>
      </ul>
    </div>

    <div class="sub-heading">Exemple concret</div>

    <div class="box box-example"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg> Exemple — Urne contenant 10 boules</div>
      <p>Une urne contient <strong>10 boules</strong> numérotées de 1 à 10. On tire <strong>3 boules</strong>.</p>
      <div class="divider"></div>
      <p><strong style="color:var(--teal)">Cas 1 — Tirage simultané :</strong><br/>
      On tire les 3 boules <em>en même temps</em>. Combien de tirages possibles ?</p>
      <p style="text-align:center;margin:10px 0;font-size:1.1rem;font-weight:600;color:var(--teal)">\(\text{Card} = \binom{10}{3} = \frac{10!}{3! \times 7!} = \frac{10 \times 9 \times 8}{3 \times 2 \times 1} = 120\)</p>
      <div class="divider"></div>
      <p><strong style="color:#b07a10">Cas 2 — Tirage successif sans remise :</strong><br/>
      On tire les boules <em>une par une sans remettre</em>. Combien de tirages possibles ?</p>
      <p style="text-align:center;margin:10px 0;font-size:1.1rem;font-weight:600;color:#b07a10">\(\text{Card} = A_{10}^{3} = \frac{10!}{(10-3)!} = 10 \times 9 \times 8 = 720\)</p>
      <div class="divider"></div>
      <p><strong style="color:#9b2c5a">Cas 3 — Tirage successif avec remise :</strong><br/>
      On tire les boules <em>une par une en remettant</em> la boule à chaque fois. Combien de tirages possibles ?</p>
      <p style="text-align:center;margin:10px 0;font-size:1.1rem;font-weight:600;color:#9b2c5a">\(\text{Card} = 10^3 = 1000\)</p>
    </div>

    <div class="box box-rem"><div class="box-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg> Remarque importante</div>
      <p>La <strong>combinaison</strong> donne toujours un résultat <strong>plus petit</strong> que l'arrangement, car dans un tirage simultané l'ordre ne compte pas :</p>
      <p style="text-align:center;margin:10px 0;font-size:1.05rem;font-weight:600;color:var(--text-dark)">\(\binom{n}{p} = \frac{A_n^p}{p!}\)</p>
      <p>Autrement dit, chaque combinaison correspond à \(p!\) arrangements (les mêmes éléments dans des ordres différents).</p>
    </div>

  </div>
`,
        exercises: [
            {
                title: "Exercice 1 : Variable aléatoire",
                statement: "Une urne contient 3 boules blanches et 2 noires. On tire 2 boules simultanément. Soit X le nombre de boules blanches tirées. Établir la loi de probabilité de X.",
                solution: "Nombre total de tirages : C(5, 2) = 10.<br>- P(X=0) (0 blanches) = C(2, 2)/10 = 1/10.<br>- P(X=1) (1 blanche, 1 noire) = C(3, 1)×C(2, 1)/10 = 6/10.<br>- P(X=2) (2 blanches) = C(3, 2)/10 = 3/10."
            }
        ],
        exams: [
            { title: "Examen National 2024 - Session de Rattrapage", type: "National", year: 2024 }
        ]
    },
    {
        id: "math-devoirs-sem2",
        title: "Devoirs 2nd Semestre",
        level: "2bac-pc",
        subject: "math",
        description: "Recueil de devoirs surveillés du second semestre couvrant l'intégration, les probabilités et la géométrie.",
        courseContent: `
            <h4>Préparation au Baccalauréat National</h4>
            <p>Entraînez-vous avec les devoirs de fin d'année pour aborder l'examen national en toute sérénité.</p>
        `,
        exercises: [
            {
                title: "Contrôle Blanc Bac",
                statement: "Examen blanc reprenant les 4 thèmes majeurs du second semestre (Calcul intégral, Équations diff, Géométrie Espace, Probabilités).",
                solution: "Les corrigés détaillés sont accessibles en téléchargement libre sur l'intranet."
            }
        ],
        exams: [
            { title: "Devoir Surveillé N°4", type: "Devoir", year: 2026 },
            { title: "Devoir Surveillé N°5", type: "Devoir", year: 2026 }
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
            <p>Un condensateur accumule des charges électriques. La relation entre sa charge q, sa capacité C et sa tension u_c is :</p>
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
    },
    {
        id: "pc-ondes-lumineuses",
        title: "Propagation d'une Onde Lumineuse",
        level: "2bac-pc",
        subject: "pc",
        description: "Nature ondulatoire de la lumière, diffraction de la lumière, dispersion par un prisme et longueur d'onde.",
        courseContent: `
            <h4>1. Nature ondulatoire de la lumière</h4>
            <p>La lumière est une onde électromagnétique qui se propage dans le vide et dans les milieux transparents. Contrairement aux ondes mécaniques, elle ne nécessite pas de milieu matériel pour se propager.</p>
            
            <h4>2. Diffraction de la lumière</h4>
            <p>Lorsqu'une onde lumineuse monochromatique de longueur d'onde λ traverse une fente de largeur a (a de l'ordre de λ), elle subit le phénomène de diffraction. L'écart angulaire θ est donné par :</p>
            <div class="math-formula">θ = λ / a</div>
            <p>Si l'écran est à une distance D de la fente, la largeur de la tache centrale L est :</p>
            <div class="math-formula">L = 2λD / a</div>

            <h4>3. Dispersion de la lumière par un prisme</h4>
            <p>L'indice de réfraction n d'un milieu transparent dépend de la fréquence de la lumière qui le traverse (n = c / v). Un prisme sépare les différentes radiations d'une lumière polychromatique (comme la lumière blanche).</p>
        `,
        exercises: [
            {
                title: "Exercice 1 : Calcul de la largeur de la fente",
                statement: "Un faisceau laser de longueur d'onde λ = 632.8 nm éclaire une fente fine. Sur un écran situé à D = 2.0 m, on observe une tache centrale de largeur L = 2.5 cm. Déterminer la largeur a de la fente.",
                solution: "On utilise la formule L = 2λD / a, d'où a = 2λD / L.<br>En convertissant tout en mètres : λ = 632.8 × 10⁻⁹ m, D = 2.0 m, L = 2.5 × 10⁻² m.<br>a = (2 × 632.8 × 10⁻⁹ × 2.0) / (2.5 × 10⁻²) = 1.01 × 10⁻⁴ m ≈ 0.10 mm."
            }
        ],
        exams: [
            { title: "Session de Rattrapage 2023 - Sciences Physiques", type: "National", year: 2023 }
        ]
    },
    {
        id: "pc-circuit-rl",
        title: "Circuits Électriques : Dipôle RL",
        level: "2bac-pc",
        subject: "pc",
        description: "Comportement de la bobine d'inductance L, réponse d'un dipôle RL à un échelon de tension et constante de temps.",
        courseContent: `
            <h4>1. La Bobine d'inductance L</h4>
            <p>Une bobine s'oppose aux variations de l'intensité du courant qui la traverse. La tension u_b à ses bornes est :</p>
            <div class="math-formula">u_b = L di/dt + r i</div>
            <p>Où L est l'inductance en Henry (H) et r est la résistance interne en Ohm (Ω).</p>

            <h4>2. Établissement du courant</h4>
            <p>L'équation différentielle pour l'intensité i(t) lors de l'application d'un échelon de tension E est :</p>
            <div class="math-formula">L di/dt + (R + r) i = E</div>
            <p>La solution est :</p>
            <div class="math-formula">i(t) = (E / (R + r)) * (1 - e^(-t/τ))</div>
            <p>où la constante de temps du circuit est <strong>τ = L / (R + r)</strong>.</p>
        `,
        exercises: [
            {
                title: "Exercice 1 : Calcul de l'inductance",
                statement: "Dans un circuit RL avec R = 50 Ω (bobine idéale r = 0), on mesure une constante de temps τ = 10 ms. Calculer l'inductance L.",
                solution: "Pour une bobine idéale, τ = L / R, donc L = τ × R.<br>L = 10 × 10⁻³ s × 50 Ω = 0.5 H."
            }
        ],
        exams: [
            { title: "Session Ordinaire 2021 - Sciences Physiques", type: "National", year: 2021 }
        ]
    },
    {
        id: "pc-mecanique-newton",
        title: "Lois de Newton & Mouvements",
        level: "2bac-pc",
        subject: "pc",
        description: "Vecteur vitesse, vecteur accélération, les trois lois de Newton et applications (mouvement rectiligne, chute verticale libre).",
        courseContent: `
            <h4>1. Vecteur Accélération</h4>
            <p>L'accélération d'un point matériel est la dérivée temporelle de son vecteur vitesse :</p>
            <div class="math-formula">a_G = dv_G / dt = d²OG / dt²</div>

            <h4>2. Deuxième loi de Newton (Relation Fondamentale de la Dynamique)</h4>
            <p>Dans un référentiel galiléen, la somme vectorielle des forces extérieures appliquées à un solide est égale au produit de sa masse par le vecteur accélération de son centre d'inertie :</p>
            <div class="math-formula">Σ F_ext = m × a_G</div>

            <h4>3. Application : Chute verticale libre</h4>
            <p>Un solide est en chute libre s'il n'est soumis qu'à son poids P. La deuxième loi donne : P = m a_G ⇒ m g = m a_G ⇒ a_G = g. L'accélération est constante et égale à la pesanteur.</p>
        `,
        exercises: [
            {
                title: "Exercice 1 : Équations horaires d'une chute libre",
                statement: "Un objet est lâché sans vitesse initiale d'une hauteur h = 20 m. Déterminer l'équation horaire de la vitesse v(t) et de la position y(t). (Prendre g = 9.8 m/s²).",
                solution: "L'accélération est a_y = -g = -9.8 m/s².<br>La vitesse est v_y(t) = -g t = -9.8 t.<br>La position est y(t) = -0.5 g t² + h = -4.9 t² + 20."
            }
        ],
        exams: [
            { title: "Session Ordinaire 2024 - Sciences Physiques (Exercice Mécanique)", type: "National", year: 2024 }
        ]
    },
    {
        id: "pc-chimie-equilibre",
        title: "Équilibre Chimique & Réactions Acido-basiques",
        level: "2bac-pc",
        subject: "pc",
        description: "Réactions réversibles, taux d'avancement final, constante d'équilibre K, quotient de réaction et pH des solutions.",
        courseContent: `
            <h4>1. Réactions s'effectuant dans les deux sens</h4>
            <p>Certaines réactions ne sont pas totales et atteignent un état d'équilibre dynamique. Le taux d'avancement final τ est :</p>
            <div class="math-formula">τ = x_f / x_max</div>
            <p>Si τ = 1, la réaction est totale. Si τ < 1, la réaction est limitée (équilibre).</p>

            <h4>2. Quotient de réaction et Constante d'équilibre</h4>
            <p>Pour la réaction aA + bB ⇌ cC + dD, le quotient de réaction Q_r est :</p>
            <div class="math-formula">Q_r = ([C]^c * [D]^d) / ([A]^a * [B]^b)</div>
            <p>À l'équilibre, Q_r,eq est égal à la constante d'équilibre K, qui ne dépend que de la température.</p>

            <h4>3. pH et réactions acido-basiques</h4>
            <p>Le pH d'une solution aqueuse est lié à la concentration en ions oxonium [H₃O⁺] par : pH = -log[H₃O⁺]. Une réaction acide-base implique un transfert de proton H⁺.</p>
        `,
        exercises: [
            {
                title: "Exercice 1 : Calcul du taux d'avancement final",
                statement: "On dissout de l'acide éthanoïque dans l'eau. La concentration initiale est C = 10⁻² mol/L. Le pH mesuré est 3.4. Calculer le taux d'avancement final τ.",
                solution: "La concentration en H₃O⁺ à l'équilibre est [H₃O⁺]_eq = 10^(-pH) = 10^(-3.4) ≈ 3.98 × 10⁻⁴ mol/L.<br>Puisque la réaction est limitée, x_f = [H₃O⁺]_eq × V. Si la réaction était totale, x_max = C × V.<br>τ = x_f / x_max = [H₃O⁺]_eq / C = 3.98 × 10⁻⁴ / 10⁻² = 3.98 × 10⁻² = 3.98%."
            }
        ],
        exams: [
            { title: "Session Ordinaire 2023 - Chimie Organique & Acides", type: "National", year: 2023 }
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
    userName: "Contactez-nous",
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
    renderHomeChapters();
    renderHomePhysicsChapters();
    // Register Event Listeners
    setupNavigation();
    setupFilters();
    setupModals();
    setupAnimations();
    setupInteractiveTools();
    setupProfileModal();
});

// --- STATE STORAGE ---
function loadStateFromStorage() {
    const saved = localStorage.getItem("maths_physiques_state");
    if (saved) {
        try {
            userState = { ...userState, ...JSON.parse(saved) };
            if (!userState.userName || userState.userName === "Élève" || userState.userName === "Dr. Soussi") {
                userState.userName = "Contactez-nous";
            }
            
            const bioNameEl = document.querySelector(".bio-display-name");
            if (bioNameEl) bioNameEl.textContent = userState.userName;
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
    const completedLessonsCountEl = document.getElementById("completedLessonsCount");
    if (completedLessonsCountEl) {
        completedLessonsCountEl.textContent = userState.completedChapters.length;
    }
    
    const quizzesTaken = Object.keys(userState.completedQuizzes).length;
    const quizzesTakenCountEl = document.getElementById("quizzesTakenCount");
    if (quizzesTakenCountEl) {
        quizzesTakenCountEl.textContent = quizzesTaken;
    }
    
    const averageScoreTextEl = document.getElementById("averageScoreText");
    if (averageScoreTextEl) {
        if (quizzesTaken > 0) {
            const totalScore = Object.values(userState.completedQuizzes).reduce((sum, score) => sum + score, 0);
            const avg = Math.round(totalScore / quizzesTaken);
            averageScoreTextEl.textContent = `${avg}%`;
        } else {
            averageScoreTextEl.textContent = "0%";
        }
    }

    // Activity List
    const activityList = document.getElementById("activityList");
    if (activityList) {
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
}

// Reset Dashboard Progress
const resetProgressBtn = document.getElementById("resetProgressBtn");
if (resetProgressBtn) {
    resetProgressBtn.addEventListener("click", () => {
        userState.completedChapters = [];
        userState.completedQuizzes = {};
        userState.premiumUser = false;
        userState.userName = "Contactez-nous";
        
        const bioNameEl = document.querySelector(".bio-display-name");
        if (bioNameEl) bioNameEl.textContent = userState.userName;
        
        saveStateToStorage();
        updateDashboardUI();
        renderChapters();
        renderHomeChapters();
        renderHomePhysicsChapters();
        showToast("Statistiques réinitialisées avec succès.", false);
    });
}

// --- CUSTOM TOAST NOTIFICATION ---
function showToast(message, isSuccess = true) {
    const toast = document.getElementById("toastNotification");
    const msgSpan = document.getElementById("toastMessage");
    const iconContainer = document.getElementById("toastIconContainer");
    
    msgSpan.textContent = message;
    
    if (isSuccess) {
        toast.className = "toast-notification success-toast active";
        iconContainer.innerHTML = '<i data-lucide="check-circle"></i>';
    } else {
        toast.className = "toast-notification active";
        iconContainer.innerHTML = '<i data-lucide="info"></i>';
    }
    
    lucide.createIcons();
    
    setTimeout(() => {
        toast.classList.remove("active");
    }, 3500);
}

// --- THEME TOGGLING ---
function initTheme() {
    // Theme toggle button has been removed in favor of a consistent light brand color palette.
    // The design is clean, professional, and accessible with high-contrast elements.
}

// --- TAB NAVIGATION ---
function setupNavigation() {
    const navLinks = document.querySelectorAll(".nav-link");
    
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            if (link.classList.contains("dropdown-toggle")) {
                e.preventDefault();
                e.stopPropagation();
                
                const parent = link.closest(".nav-dropdown");
                const wasActive = parent.classList.contains("active");
                
                // Close other dropdowns
                document.querySelectorAll(".nav-dropdown").forEach(d => d.classList.remove("active"));
                
                if (!wasActive) {
                    parent.classList.add("active");
                }
                return;
            }
            
            e.preventDefault();
            const targetTab = link.getAttribute("data-tab");
            switchTab(targetTab);
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", () => {
        document.querySelectorAll(".nav-dropdown").forEach(d => {
            d.classList.remove("active");
        });
    });

    // Handle dropdown level selection
    document.querySelectorAll("[data-level-nav]").forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const level = item.getAttribute("data-level-nav");
            
            const levelFilter = document.getElementById("levelFilter");
            if (levelFilter) {
                levelFilter.value = level;
                levelFilter.dispatchEvent(new Event("change"));
            }
            
            switchTab("courses");
            
            // Close containing dropdown
            const parent = item.closest(".nav-dropdown");
            if (parent) parent.classList.remove("active");
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
            if (tabId === "courses") {
                const currentLevel = document.getElementById("levelFilter").value;
                if (btn.id === "navLycéeToggle") {
                    const isLycée = ["2bac-sm", "2bac-pc", "2bac-svt", "1bac", "tc"].includes(currentLevel);
                    if (isLycée) btn.classList.add("active");
                    else btn.classList.remove("active");
                } else if (btn.id === "navCollègeToggle") {
                    const isCollège = ["3ac", "2ac", "1ac"].includes(currentLevel);
                    if (isCollège) btn.classList.add("active");
                    else btn.classList.remove("active");
                } else {
                    btn.classList.add("active");
                }
            } else {
                btn.classList.add("active");
            }
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

function renderHomeChapters() {
    const container = document.getElementById("homeChaptersContainer");
    if (!container) return;
    container.innerHTML = "";

    const homeChaptersList = [
        "math-lim-cont",
        "math-deriv-etude",
        "math-suites",
        "math-primitives",
        "math-logarithmes",
        "math-complexes-pc",
        "math-exponentielles",
        "math-integral",
        "math-equa-diff",
        "math-geometrie-espace",
        "math-probabilites"
    ];

    homeChaptersList.forEach((chapId, idx) => {
        const chap = chaptersData.find(c => c.id === chapId);
        if (!chap) return;

        const isMastered = userState.completedChapters.includes(chap.id);
        const card = document.createElement("div");
        card.className = `chapter-card math-theme`;
        
        const chapNum = String(idx + 1).padStart(2, '0');
        
        card.innerHTML = `
            <div class="chapter-header">
                <span class="chapter-subject-badge math-badge">
                    Chapitre ${chapNum}
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

function renderHomePhysicsChapters() {
    const container = document.getElementById("homePhysicsChaptersContainer");
    if (!container) return;
    container.innerHTML = "";

    const homePhysicsChaptersList = [
        "pc-ondes-meca",
        "pc-ondes-lumineuses",
        "pc-radioactivite",
        "pc-circuit-rc",
        "pc-circuit-rl",
        "pc-mecanique-newton",
        "pc-chimie-equilibre"
    ];

    homePhysicsChaptersList.forEach((chapId, idx) => {
        const chap = chaptersData.find(c => c.id === chapId);
        if (!chap) return;

        const isMastered = userState.completedChapters.includes(chap.id);
        const card = document.createElement("div");
        card.className = `chapter-card pc-theme`;
        
        const chapNum = String(idx + 1).padStart(2, '0');
        
        card.innerHTML = `
            <div class="chapter-header">
                <span class="chapter-subject-badge pc-badge">
                    Chapitre ${chapNum}
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

            // Trigger MathJax Typesetting for newly visible tab equations
            setTimeout(() => {
                if (window.MathJax && window.MathJax.typesetPromise) {
                    window.MathJax.typesetPromise().catch(err => console.warn(err));
                }
            }, 50);
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
        renderHomeChapters();
        renderHomePhysicsChapters();
    });


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
                    <h5>${["Devoir Surveillé", "Devoir", "Cours", "Résumé", "Série"].includes(exam.type) ? exam.title : `Examen ${exam.type} (${exam.year})`}</h5>
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

    // Trigger MathJax Typesetting for math equations inside the course summary
    setTimeout(() => {
        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise().catch(err => console.warn(err));
        }
    }, 100);
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

// --- INTERACTIVE ANIMATIONS ENGINE ---
function setupAnimations() {
    const animSelectBtns = document.querySelectorAll(".anim-select-btn");
    animSelectBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetAnim = btn.getAttribute("data-anim");
            
            // Toggle active buttons
            animSelectBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            // Toggle active workspaces
            document.querySelectorAll(".anim-workspace").forEach(workspace => {
                if (workspace.id === `anim-${targetAnim}`) {
                    workspace.style.display = "flex";
                    workspace.classList.add("active");
                    initCanvasFor(targetAnim);
                } else {
                    workspace.style.display = "none";
                    workspace.classList.remove("active");
                }
            });
        });
    });

    // Initialize the default one
    initCanvasFor("wave");
}

function initCanvasFor(type) {
    if (type === "wave") {
        setupWaveSimulator();
    } else if (type === "delay") {
        setupDelaySimulator();
    } else if (type === "newton") {
        setupNewtonSimulator();
    } else if (type === "rc") {
        setupRcSimulator();
    } else if (type === "equilibrium") {
        setupEquilibriumSimulator();
    }
}

// 1. Wave Simulator
let waveInterval = null;
let waveTime = 0;
let wavePlaying = true;
function setupWaveSimulator() {
    const canvas = document.getElementById("canvas-wave");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const amplitudeSlider = document.getElementById("wave-amplitude");
    const frequencySlider = document.getElementById("wave-frequency");
    const velocitySlider = document.getElementById("wave-velocity");
    const btnPlay = document.getElementById("btn-wave-play");

    // Remove existing event listeners by replacing nodes (to prevent duplicate events on re-init)
    const newAmp = amplitudeSlider.cloneNode(true);
    amplitudeSlider.parentNode.replaceChild(newAmp, amplitudeSlider);
    const newFreq = frequencySlider.cloneNode(true);
    frequencySlider.parentNode.replaceChild(newFreq, frequencySlider);
    const newVel = velocitySlider.cloneNode(true);
    velocitySlider.parentNode.replaceChild(newVel, velocitySlider);
    const newPlay = btnPlay.cloneNode(true);
    btnPlay.parentNode.replaceChild(newPlay, btnPlay);

    newAmp.addEventListener("input", (e) => {
        document.getElementById("val-wave-amplitude").textContent = e.target.value;
        updateWaveCalculations();
    });
    newFreq.addEventListener("input", (e) => {
        document.getElementById("val-wave-frequency").textContent = e.target.value;
        updateWaveCalculations();
    });
    newVel.addEventListener("input", (e) => {
        document.getElementById("val-wave-velocity").textContent = e.target.value;
        updateWaveCalculations();
    });

    function updateWaveCalculations() {
        const f = parseFloat(newFreq.value);
        const v = parseFloat(newVel.value);
        const lambda = Math.round(v / f);
        document.getElementById("wave-lambda-calc").textContent = lambda;
    }

    newPlay.addEventListener("click", () => {
        wavePlaying = !wavePlaying;
        newPlay.innerHTML = wavePlaying ? '<i data-lucide="pause"></i> Pause' : '<i data-lucide="play"></i> Lancer';
        lucide.createIcons();
    });

    function draw() {
        if (!canvas.offsetParent) return; // Stop drawing if workspace is hidden
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const A = parseFloat(newAmp.value);
        const f = parseFloat(newFreq.value);
        const v = parseFloat(newVel.value);
        
        if (wavePlaying) {
            waveTime += 0.03;
        }

        // Draw grid
        ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
        ctx.lineWidth = 1;
        for (let x = 0; x < canvas.width; x += 40) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
        }
        for (let y = 0; y < canvas.height; y += 40) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
        }

        // Draw center baseline
        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);
        ctx.lineTo(canvas.width, canvas.height / 2);
        ctx.stroke();

        // Draw wave
        ctx.strokeStyle = "var(--primary, #0d7377)";
        ctx.lineWidth = 3;
        ctx.shadowColor = "rgba(13, 115, 119, 0.4)";
        ctx.shadowBlur = 8;
        ctx.beginPath();
        
        const startX = 50;
        ctx.moveTo(0, canvas.height / 2);
        ctx.lineTo(startX, canvas.height / 2);

        for (let x = startX; x < canvas.width; x++) {
            const dx = x - startX;
            const tPrime = waveTime - (dx / v);
            let y = canvas.height / 2;
            if (tPrime > 0) {
                y += A * Math.sin(2 * Math.PI * f * tPrime);
            }
            ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Draw source shaker
        ctx.fillStyle = "var(--secondary, #c87f0a)";
        ctx.beginPath();
        let sourceY = canvas.height / 2;
        if (waveTime > 0) {
            sourceY += A * Math.sin(2 * Math.PI * f * waveTime);
        }
        ctx.arc(startX, sourceY, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    if (waveInterval) clearInterval(waveInterval);
    waveInterval = setInterval(draw, 30);
    updateWaveCalculations();
}

// 2. Delay Simulator
let delayInterval = null;
let delaySoundPos = -50;
let delayPlaying = false;
let delayMicro1Data = [];
let delayMicro2Data = [];
function setupDelaySimulator() {
    const canvas = document.getElementById("canvas-delay");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const distanceSlider = document.getElementById("delay-distance");
    const speedSlider = document.getElementById("delay-speed");
    const btnTrigger = document.getElementById("btn-delay-trigger");

    const newDist = distanceSlider.cloneNode(true);
    distanceSlider.parentNode.replaceChild(newDist, distanceSlider);
    const newSpeed = speedSlider.cloneNode(true);
    speedSlider.parentNode.replaceChild(newSpeed, speedSlider);
    const newTrig = btnTrigger.cloneNode(true);
    btnTrigger.parentNode.replaceChild(newTrig, btnTrigger);

    newDist.addEventListener("input", (e) => {
        document.getElementById("val-delay-distance").textContent = e.target.value;
        updateDelayCalculations();
    });
    newSpeed.addEventListener("input", (e) => {
        document.getElementById("val-delay-speed").textContent = e.target.value;
        updateDelayCalculations();
    });

    function updateDelayCalculations() {
        const d = parseFloat(newDist.value);
        const v = parseFloat(newSpeed.value);
        const d_m = d / 1000;
        const tau = (d_m / v) * 1000;
        document.getElementById("delay-tau-calc").textContent = tau.toFixed(3);
    }

    newTrig.addEventListener("click", () => {
        delaySoundPos = 50;
        delayPlaying = true;
        delayMicro1Data = [];
        delayMicro2Data = [];
    });

    function draw() {
        if (!canvas.offsetParent) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const d = parseFloat(newDist.value);
        const v = parseFloat(newSpeed.value);

        const speakerX = 100;
        const m1X = 300;
        const m2X = m1X + d;

        // Ground line
        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, 100);
        ctx.lineTo(canvas.width, 100);
        ctx.stroke();

        // Speaker
        ctx.fillStyle = "#334155";
        ctx.fillRect(speakerX - 25, 60, 20, 35);
        ctx.fillStyle = "#1e293b";
        ctx.beginPath();
        ctx.moveTo(speakerX - 5, 55);
        ctx.lineTo(speakerX + 15, 45);
        ctx.lineTo(speakerX + 15, 110);
        ctx.lineTo(speakerX - 5, 100);
        ctx.closePath();
        ctx.fill();

        // Micro 1
        ctx.fillStyle = "var(--primary, #0d7377)";
        ctx.fillRect(m1X - 4, 65, 8, 30);
        ctx.beginPath();
        ctx.arc(m1X, 60, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 10px sans-serif";
        ctx.fillText("M1", m1X - 7, 46);

        // Micro 2
        ctx.fillStyle = "var(--secondary, #c87f0a)";
        ctx.fillRect(m2X - 4, 65, 8, 30);
        ctx.beginPath();
        ctx.arc(m2X, 60, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#ffffff";
        ctx.fillText("M2", m2X - 7, 46);

        // Distance dimension
        ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(m1X, 95);
        ctx.lineTo(m1X, 120);
        ctx.moveTo(m2X, 95);
        ctx.lineTo(m2X, 120);
        ctx.moveTo(m1X, 110);
        ctx.lineTo(m2X, 110);
        ctx.stroke();
        ctx.fillStyle = "#94a3b8";
        ctx.fillText(`d = ${d} mm`, (m1X + m2X)/2 - 25, 125);

        // Sound pulse
        if (delayPlaying) {
            const frameSpeed = (v / 340) * 8;
            delaySoundPos += frameSpeed;

            ctx.strokeStyle = "rgba(148, 163, 184, 0.25)";
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(speakerX, 77, delaySoundPos - speakerX, -Math.PI/3, Math.PI/3);
            ctx.stroke();

            const distFromSpeaker = delaySoundPos - speakerX;
            const distM1 = m1X - speakerX;
            const distM2 = m2X - speakerX;

            let val1 = 0;
            if (distFromSpeaker >= distM1 && distFromSpeaker < distM1 + 60) {
                const phase = (distFromSpeaker - distM1) / 60 * Math.PI * 6;
                val1 = Math.sin(phase) * Math.exp(-(distFromSpeaker - distM1)/18);
            }
            delayMicro1Data.push(val1);

            let val2 = 0;
            if (distFromSpeaker >= distM2 && distFromSpeaker < distM2 + 60) {
                const phase = (distFromSpeaker - distM2) / 60 * Math.PI * 6;
                val2 = Math.sin(phase) * Math.exp(-(distFromSpeaker - distM2)/18);
            }
            delayMicro2Data.push(val2);

            if (delaySoundPos > canvas.width + 50) {
                delayPlaying = false;
            }
        } else {
            delayMicro1Data.push(0);
            delayMicro2Data.push(0);
        }

        if (delayMicro1Data.length > 500) delayMicro1Data.shift();
        if (delayMicro2Data.length > 500) delayMicro2Data.shift();

        // Oscilloscope Graph
        const oscY = 190;
        const oscH = 100;
        ctx.fillStyle = "#020617";
        ctx.fillRect(40, 140, 720, 100);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
        ctx.lineWidth = 1;
        
        for (let x = 40; x <= 760; x += 40) {
            ctx.beginPath();
            ctx.moveTo(x, 140);
            ctx.lineTo(x, 240);
            ctx.stroke();
        }
        for (let y = 140; y <= 240; y += 20) {
            ctx.beginPath();
            ctx.moveTo(40, y);
            ctx.lineTo(760, y);
            ctx.stroke();
        }

        // Trace M1
        ctx.strokeStyle = "var(--primary, #0d7377)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        const drawLen = Math.min(delayMicro1Data.length, 720);
        const offset = Math.max(0, delayMicro1Data.length - 720);
        for (let i = 0; i < drawLen; i++) {
            const dataVal = delayMicro1Data[offset + i];
            ctx.lineTo(40 + i, oscY - dataVal * 35);
        }
        ctx.stroke();

        // Trace M2
        ctx.strokeStyle = "var(--secondary, #c87f0a)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let i = 0; i < drawLen; i++) {
            const dataVal = delayMicro2Data[offset + i];
            ctx.lineTo(40 + i, oscY - dataVal * 35);
        }
        ctx.stroke();

        ctx.fillStyle = "#ffffff";
        ctx.font = "11px sans-serif";
        ctx.fillText("Oscilloscope Virtuel (CH1 = M1, CH2 = M2)", 50, 155);
    }

    if (delayInterval) clearInterval(delayInterval);
    delayInterval = setInterval(draw, 30);
    updateDelayCalculations();
}

// 3. Newton Simulator
let newtonInterval = null;
let newtonIsRunning = false;
let newtonX = 100;
let newtonV = 0;
function setupNewtonSimulator() {
    const canvas = document.getElementById("canvas-newton");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const angleSlider = document.getElementById("newton-angle");
    const frictionSlider = document.getElementById("newton-friction");
    const btnPlay = document.getElementById("btn-newton-play");
    const btnReset = document.getElementById("btn-newton-reset");

    const newAngle = angleSlider.cloneNode(true);
    angleSlider.parentNode.replaceChild(newAngle, angleSlider);
    const newFric = frictionSlider.cloneNode(true);
    frictionSlider.parentNode.replaceChild(newFric, frictionSlider);
    const newPlay = btnPlay.cloneNode(true);
    btnPlay.parentNode.replaceChild(newPlay, btnPlay);
    const newReset = btnReset.cloneNode(true);
    btnReset.parentNode.replaceChild(newReset, btnReset);

    newAngle.addEventListener("input", (e) => {
        document.getElementById("val-newton-angle").textContent = e.target.value;
        resetSim();
    });
    newFric.addEventListener("input", (e) => {
        document.getElementById("val-newton-friction").textContent = e.target.value;
        resetSim();
    });

    newPlay.addEventListener("click", () => {
        newtonIsRunning = !newtonIsRunning;
        newPlay.innerHTML = newtonIsRunning ? '<i data-lucide="pause"></i> Pause' : '<i data-lucide="play"></i> Lancer';
        lucide.createIcons();
    });

    newReset.addEventListener("click", resetSim);

    function resetSim() {
        newtonIsRunning = false;
        newtonX = 100;
        newtonV = 0;
        newPlay.innerHTML = '<i data-lucide="play"></i> Lancer';
        lucide.createIcons();
    }

    function draw() {
        if (!canvas.offsetParent) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const angleDeg = parseFloat(newAngle.value);
        const theta = angleDeg * Math.PI / 180;
        const mu = parseFloat(newFric.value);
        const g = 9.81;

        const sinT = Math.sin(theta);
        const cosT = Math.cos(theta);
        let acceleration = g * (sinT - mu * cosT);
        if (acceleration < 0) acceleration = 0;

        if (newtonIsRunning) {
            const dt = 0.05;
            newtonV += acceleration * dt * 25;
            newtonX += newtonV * dt;
            if (newtonX > 520) {
                newtonX = 520;
                newtonV = 0;
                newtonIsRunning = false;
                newPlay.innerHTML = '<i data-lucide="play"></i> Lancer';
                lucide.createIcons();
            }
        }

        const startPlaneX = 80;
        const startPlaneY = 200;
        const planeLength = 620;
        const endPlaneX = startPlaneX + planeLength * Math.cos(theta);
        const endPlaneY = startPlaneY - planeLength * Math.sin(theta);

        // Ground line
        ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(startPlaneX - 50, startPlaneY);
        ctx.lineTo(startPlaneX + planeLength + 50, startPlaneY);
        ctx.stroke();

        // Plane line
        ctx.strokeStyle = "#475569";
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(startPlaneX, startPlaneY);
        ctx.lineTo(endPlaneX, endPlaneY);
        ctx.stroke();

        // Angle Arc
        ctx.strokeStyle = "var(--secondary, #c87f0a)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(startPlaneX, startPlaneY, 40, -theta, 0);
        ctx.stroke();
        ctx.fillStyle = "var(--secondary, #c87f0a)";
        ctx.font = "12px sans-serif";
        ctx.fillText(`θ = ${angleDeg}°`, startPlaneX + 50, startPlaneY - 10);

        // Block
        const blockX = startPlaneX + newtonX * Math.cos(theta);
        const blockY = startPlaneY - newtonX * Math.sin(theta);
        const blockW = 50;
        const blockH = 30;

        ctx.save();
        ctx.translate(blockX, blockY);
        ctx.rotate(-theta);
        ctx.fillStyle = "rgba(13, 115, 119, 0.8)";
        ctx.fillRect(-blockW/2, -blockH, blockW, blockH);
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 2;
        ctx.strokeRect(-blockW/2, -blockH, blockW, blockH);

        const cmY = -blockH/2;
        
        // Vector P (Gravity)
        ctx.save();
        ctx.rotate(theta);
        ctx.strokeStyle = "#ef4444";
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(0, cmY);
        ctx.lineTo(0, cmY + 55);
        ctx.stroke();
        ctx.fillStyle = "#ef4444";
        ctx.beginPath();
        ctx.moveTo(-5, cmY + 50);
        ctx.lineTo(5, cmY + 50);
        ctx.lineTo(0, cmY + 57);
        ctx.fill();
        ctx.font = "bold 11px sans-serif";
        ctx.fillText("P", 8, cmY + 50);
        ctx.restore();

        // Vector RN (Normal Reaction)
        ctx.strokeStyle = "#3b82f6";
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(0, cmY);
        ctx.lineTo(0, cmY - 45);
        ctx.stroke();
        ctx.fillStyle = "#3b82f6";
        ctx.beginPath();
        ctx.moveTo(-5, cmY - 40);
        ctx.lineTo(5, cmY - 40);
        ctx.lineTo(0, cmY - 47);
        ctx.fill();
        ctx.fillText("RN", 8, cmY - 40);

        // Vector f (Friction force)
        const fLength = mu * 45;
        if (fLength > 0) {
            ctx.strokeStyle = "var(--secondary, #c87f0a)";
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.moveTo(0, cmY);
            ctx.lineTo(-fLength, cmY);
            ctx.stroke();
            ctx.fillStyle = "var(--secondary, #c87f0a)";
            ctx.beginPath();
            ctx.moveTo(-fLength + 5, cmY - 5);
            ctx.lineTo(-fLength + 5, cmY + 5);
            ctx.lineTo(-fLength, cmY);
            ctx.fill();
            ctx.fillText("f", -fLength - 12, cmY - 5);
        }

        ctx.restore();
    }

    if (newtonInterval) clearInterval(newtonInterval);
    newtonInterval = setInterval(draw, 30);
    resetSim();
}

// 4. RC Circuit Simulator
let rcInterval = null;
let rcTime = 0;
let rcChargeMode = true;
let rcVoltsData = [];
function setupRcSimulator() {
    const canvas = document.getElementById("canvas-rc");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const rSlider = document.getElementById("rc-r");
    const cSlider = document.getElementById("rc-c");
    const btnSwitch = document.getElementById("btn-rc-charge");

    const newR = rSlider.cloneNode(true);
    rSlider.parentNode.replaceChild(newR, rSlider);
    const newC = cSlider.cloneNode(true);
    cSlider.parentNode.replaceChild(newC, cSlider);
    const newSwitch = btnSwitch.cloneNode(true);
    btnSwitch.parentNode.replaceChild(newSwitch, btnSwitch);

    newR.addEventListener("input", (e) => {
        document.getElementById("val-rc-r").textContent = e.target.value;
        updateRcCalculations();
    });
    newC.addEventListener("input", (e) => {
        document.getElementById("val-rc-c").textContent = e.target.value;
        updateRcCalculations();
    });

    newSwitch.addEventListener("click", () => {
        rcChargeMode = !rcChargeMode;
        rcTime = 0;
        rcVoltsData = [];
    });

    function updateRcCalculations() {
        const R = parseFloat(newR.value);
        const C = parseFloat(newC.value);
        const tau = (R * 1000) * (C / 1000000);
        document.getElementById("rc-tau-calc").textContent = tau.toFixed(3);
    }

    function draw() {
        if (!canvas.offsetParent) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const R = parseFloat(newR.value);
        const C = parseFloat(newC.value);
        const tau = (R * 1000) * (C / 1000000);
        const E = 5.0;

        rcTime += 0.05;
        let uc = 0;
        if (rcChargeMode) {
            uc = E * (1 - Math.exp(-rcTime / tau));
        } else {
            uc = E * Math.exp(-rcTime / tau);
        }

        rcVoltsData.push(uc);
        if (rcVoltsData.length > 340) {
            rcVoltsData.shift();
        }

        const diagX = 20;
        const diagY = 50;
        const diagW = 320;
        const diagH = 150;

        ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
        ctx.lineWidth = 2;
        ctx.strokeRect(diagX, diagY, diagW, diagH);

        // Generator E
        ctx.fillStyle = "#0b0f19";
        ctx.fillRect(diagX - 15, diagY + diagH/2 - 20, 30, 40);
        ctx.fillStyle = "#1e293b";
        ctx.beginPath();
        ctx.arc(diagX, diagY + diagH/2, 16, 0, Math.PI*2);
        ctx.fill();
        ctx.strokeStyle = "#ffffff";
        ctx.stroke();
        ctx.fillStyle = "#ffffff";
        ctx.font = "12px sans-serif";
        ctx.fillText("E", diagX - 5, diagY + diagH/2 + 4);

        // Switch K
        ctx.fillStyle = "#0b0f19";
        ctx.fillRect(diagX + 50, diagY - 10, 40, 20);
        ctx.strokeStyle = "#ffffff";
        ctx.beginPath();
        ctx.moveTo(diagX + 50, diagY);
        ctx.lineTo(diagX + 65, diagY);
        if (rcChargeMode) {
            ctx.lineTo(diagX + 85, diagY);
        } else {
            ctx.lineTo(diagX + 80, diagY - 12);
        }
        ctx.moveTo(diagX + 90, diagY);
        ctx.lineTo(diagX + 90, diagY);
        ctx.stroke();
        ctx.fillStyle = "#94a3b8";
        ctx.fillText("K", diagX + 65, diagY - 18);

        // Resistor R
        ctx.fillStyle = "#0b0f19";
        ctx.fillRect(diagX + diagW/2 - 30, diagY - 15, 60, 30);
        ctx.strokeStyle = "#ffffff";
        ctx.strokeRect(diagX + diagW/2 - 30, diagY - 12, 60, 24);
        ctx.fillStyle = "#ffffff";
        ctx.fillText(`R`, diagX + diagW/2 - 5, diagY + 4);

        // Capacitor C
        ctx.fillStyle = "#0b0f19";
        ctx.fillRect(diagX + diagW - 10, diagY + diagH/2 - 25, 20, 50);
        ctx.strokeStyle = "#ffffff";
        ctx.beginPath();
        ctx.moveTo(diagX + diagW - 6, diagY + diagH/2 - 20);
        ctx.lineTo(diagX + diagW - 6, diagY + diagH/2 + 20);
        ctx.moveTo(diagX + diagW + 6, diagY + diagH/2 - 20);
        ctx.lineTo(diagX + diagW + 6, diagY + diagH/2 + 20);
        ctx.stroke();
        ctx.fillStyle = "#ffffff";
        ctx.fillText(`C`, diagX + diagW - 5, diagY + diagH/2 + 35);

        // Voltage Arrow uc
        ctx.strokeStyle = "var(--primary, #0d7377)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(diagX + diagW + 20, diagY + diagH/2 + 15);
        ctx.lineTo(diagX + diagW + 20, diagY + diagH/2 - 15);
        ctx.stroke();
        ctx.fillStyle = "var(--primary, #0d7377)";
        ctx.beginPath();
        ctx.moveTo(diagX + diagW + 17, diagY + diagH/2 - 10);
        ctx.lineTo(diagX + diagW + 23, diagY + diagH/2 - 10);
        ctx.lineTo(diagX + diagW + 20, diagY + diagH/2 - 17);
        ctx.fill();
        ctx.fillText("uc", diagX + diagW + 26, diagY + diagH/2 + 4);

        // Oscilloscope
        const oscX = 390;
        const oscY = 50;
        const oscW = 380;
        const oscH = 150;

        ctx.fillStyle = "#020617";
        ctx.fillRect(oscX, oscY, oscW, oscH);
        
        ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
        ctx.lineWidth = 1;
        for (let x = oscX; x <= oscX + oscW; x += 40) {
            ctx.beginPath();
            ctx.moveTo(x, oscY);
            ctx.lineTo(x, oscY + oscH);
            ctx.stroke();
        }
        for (let y = oscY; y <= oscY + oscH; y += 30) {
            ctx.beginPath();
            ctx.moveTo(oscX, y);
            ctx.lineTo(oscX + oscW, y);
            ctx.stroke();
        }

        // Trace
        ctx.strokeStyle = "var(--primary, #0d7377)";
        ctx.lineWidth = 3;
        ctx.shadowColor = "rgba(13, 115, 119, 0.4)";
        ctx.shadowBlur = 8;
        ctx.beginPath();
        
        const startTraceX = oscX + 20;
        const baselineY = oscY + oscH - 15;
        
        for (let i = 0; i < rcVoltsData.length; i++) {
            const vVal = rcVoltsData[i];
            const traceX = startTraceX + i;
            const traceY = baselineY - (vVal / E) * 110;
            if (i === 0) ctx.moveTo(traceX, traceY);
            else ctx.lineTo(traceX, traceY);
        }
        ctx.stroke();
        ctx.shadowBlur = 0;

        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 11px sans-serif";
        ctx.fillText(rcChargeMode ? "Mode : Charge" : "Mode : Décharge", oscX + 15, oscY + 25);
        ctx.fillStyle = "var(--primary, #0d7377)";
        ctx.fillText(`uc(t) = ${uc.toFixed(2)} V`, oscX + 15, oscY + 45);
    }

    if (rcInterval) clearInterval(rcInterval);
    rcInterval = setInterval(draw, 30);
    updateRcCalculations();
}

// 5. Chemical Equilibrium Simulator
let eqInterval = null;
let eqReactionProgress = 0.0;
let eqRunning = false;
function setupEquilibriumSimulator() {
    const canvas = document.getElementById("canvas-equilibrium");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const kSlider = document.getElementById("eq-k");
    const cSlider = document.getElementById("eq-c0");
    const btnRun = document.getElementById("btn-eq-run");

    const newK = kSlider.cloneNode(true);
    kSlider.parentNode.replaceChild(newK, kSlider);
    const newC = cSlider.cloneNode(true);
    cSlider.parentNode.replaceChild(newC, cSlider);
    const newRun = btnRun.cloneNode(true);
    btnRun.parentNode.replaceChild(newRun, btnRun);

    newK.addEventListener("input", (e) => {
        document.getElementById("val-eq-k").textContent = e.target.value;
        resetEquilibrium();
    });
    newC.addEventListener("input", (e) => {
        document.getElementById("val-eq-c0").textContent = e.target.value;
        resetEquilibrium();
    });

    newRun.addEventListener("click", () => {
        eqRunning = true;
        eqReactionProgress = 0.0;
    });

    function resetEquilibrium() {
        eqRunning = false;
        eqReactionProgress = 0.0;
        updateEquilibriumCalculations();
    }

    function updateEquilibriumCalculations() {
        const K = parseFloat(newK.value);
        const C0 = parseFloat(newC.value);
        const sqrtK = Math.sqrt(K);
        const xf = C0 * sqrtK / (1 + sqrtK);
        const tau = (xf / C0) * 100;
        
        document.getElementById("eq-xf-calc").textContent = xf.toFixed(2);
        document.getElementById("eq-tau-calc").textContent = Math.round(tau);
    }

    function draw() {
        if (!canvas.offsetParent) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const K = parseFloat(newK.value);
        const C0 = parseFloat(newC.value);
        const sqrtK = Math.sqrt(K);
        const xf = C0 * sqrtK / (1 + sqrtK);

        if (eqRunning) {
            eqReactionProgress += 0.015;
            if (eqReactionProgress > 1.0) {
                eqReactionProgress = 1.0;
                eqRunning = false;
            }
        }

        const currentX = xf * eqReactionProgress;
        const concA = C0 - currentX;
        const concB = C0 - currentX;
        const concC = currentX;
        const concD = currentX;

        let Qr = 0;
        if (concA > 0) {
            Qr = (concC * concD) / (concA * concB);
        }

        // Concentrations Bar Chart
        const startChartX = 80;
        const chartY = 190;
        const barW = 50;
        const maxBarH = 120;

        const species = [
            { label: "A", val: concA, color: "#ef4444" },
            { label: "B", val: concB, color: "#f87171" },
            { label: "C", val: concC, color: "var(--primary, #0d7377)" },
            { label: "D", val: concD, color: "#38bdf8" }
        ];

        ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(40, chartY);
        ctx.lineTo(440, chartY);
        ctx.stroke();

        species.forEach((sp, idx) => {
            const barX = startChartX + idx * 90;
            const barH = (sp.val / 2.0) * maxBarH;

            ctx.fillStyle = sp.color;
            ctx.fillRect(barX, chartY - barH, barW, barH);
            ctx.strokeStyle = "#ffffff";
            ctx.lineWidth = 1;
            ctx.strokeRect(barX, chartY - barH, barW, barH);

            ctx.fillStyle = "#ffffff";
            ctx.font = "bold 12px sans-serif";
            ctx.fillText(sp.label, barX + 20, chartY + 18);
            ctx.font = "11px sans-serif";
            ctx.fillText(`${sp.val.toFixed(2)}`, barX + 12, chartY - barH - 8);
        });

        // Curve Graph (Right)
        const gX = 480;
        const gY = 60;
        const gW = 280;
        const gH = 130;

        ctx.fillStyle = "#020617";
        ctx.fillRect(gX, gY, gW, gH);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
        ctx.strokeRect(gX, gY, gW, gH);

        // K line
        const kY = gY + gH - (K / 25) * gH;
        ctx.strokeStyle = "#ef4444";
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(gX, kY);
        ctx.lineTo(gX + gW, kY);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = "#ef4444";
        ctx.font = "10px sans-serif";
        ctx.fillText(`K = ${K.toFixed(1)}`, gX + gW - 40, kY - 4);

        // Qr Trace
        ctx.strokeStyle = "var(--primary, #0d7377)";
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        const steps = 60;
        for (let i = 0; i <= steps; i++) {
            const stepProgress = (i / steps) * eqReactionProgress;
            const sX = xf * stepProgress;
            const sA = C0 - sX;
            const sC = sX;
            let sQr = 0;
            if (sA > 0) sQr = (sC * sC) / (sA * sA);
            
            const ptX = gX + (i / steps) * gW * eqReactionProgress;
            const ptY = gY + gH - (sQr / 25) * gH;
            
            if (i === 0) ctx.moveTo(ptX, ptY);
            else ctx.lineTo(ptX, ptY);
        }
        ctx.stroke();

        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 11px sans-serif";
        ctx.fillText("Quotient de Réaction Qr(t)", gX + 15, gY + 20);
        ctx.fillStyle = "var(--primary, #0d7377)";
        ctx.fillText(`Qr = ${Qr.toFixed(2)}`, gX + 15, gY + 38);
    }

    if (eqInterval) clearInterval(eqInterval);
    eqInterval = setInterval(draw, 30);
    resetEquilibrium();
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
                resultDiv.innerHTML = `<p style="color: #000000; font-weight: 600;">Veuillez entrer des coefficients valides.</p>`;
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
                            <span style="font-weight: 600;">Δ > 0 : Deux solutions réelles distinctes</span><br>
                            x₁ = <strong>${x1.toFixed(3)}</strong><br>
                            x₂ = <strong>${x2.toFixed(3)}</strong><br>
                            Factorisation : <strong>${a}(x - ${x1 >= 0 ? x1.toFixed(2) : '('+x1.toFixed(2)+')'})(x - ${x2 >= 0 ? x2.toFixed(2) : '('+x2.toFixed(2)+')'})</strong>
                        </div>
                    `;
                } else if (delta === 0) {
                    const x0 = -b / (2 * a);
                    html += `
                        <div class="result-explanation">
                            <span style="font-weight: 600;">Δ = 0 : Une solution réelle double</span><br>
                            x₀ = <strong>${x0.toFixed(3)}</strong><br>
                            Factorisation : <strong>${a}(x - ${x0 >= 0 ? x0.toFixed(2) : '('+x0.toFixed(2)+')'})²</strong>
                        </div>
                    `;
                } else {
                    const realPart = (-b / (2 * a)).toFixed(3);
                    const imagPart = (Math.sqrt(-delta) / (2 * a)).toFixed(3);
                    html += `
                         <div class="result-explanation">
                            <span style="font-weight: 600;">Δ < 0 : Pas de solution réelle</span> (Deux solutions complexes conjuguées)<br>
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
                resultWaveDiv.innerHTML = `<p style="color: #000000; font-weight: 600;">Veuillez entrer une distance d > 0.</p>`;
                resultWaveDiv.style.display = "block";
                return;
            }

            if (currentMode === "v") {
                const t = parseFloat(document.getElementById("wave-t").value);
                if (isNaN(t) || t <= 0) {
                    resultWaveDiv.innerHTML = `<p style="color: #000000; font-weight: 600;">Veuillez entrer une durée Δt > 0.</p>`;
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
                    resultWaveDiv.innerHTML = `<p style="color: #000000; font-weight: 600;">Veuillez entrer une célérité v > 0.</p>`;
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

// --- USER PROFILE MODAL ENGINE ---
function setupProfileModal() {
    const profileBtn = document.getElementById("userProfileBtn");
    const profileModal = document.getElementById("profileModal");
    const closeBtn = document.getElementById("profileCloseBtn");
    const backdrop = document.getElementById("profileModalBackdrop");
    const resetBtn = document.getElementById("resetProfileStateBtn");
    const editBtn = document.getElementById("profileEditBtn");

    if (profileBtn && profileModal) {
        profileBtn.addEventListener("click", () => {
            profileModal.classList.add("active");
        });
    }

    const closeProfile = () => {
        profileModal.classList.remove("active");
    };

    if (closeBtn) closeBtn.addEventListener("click", closeProfile);
    if (backdrop) backdrop.addEventListener("click", closeProfile);

    // Reset progress from profile
    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            if (confirm("Voulez-vous vraiment réinitialiser toutes vos statistiques ?")) {
                userState.completedChapters = [];
                userState.completedQuizzes = {};
                userState.premiumUser = false;
                userState.userName = "Contactez-nous";
                
                const bioNameEl = document.querySelector(".bio-display-name");
                if (bioNameEl) bioNameEl.textContent = userState.userName;
                
                saveStateToStorage();
                updateDashboardUI();
                renderChapters();
                closeProfile();
                showToast("Statistiques réinitialisées avec succès.", false);
            }
        });
    }

    // Edit profile name dynamic simulation
    if (editBtn) {
        editBtn.addEventListener("click", () => {
            const newName = prompt("Entrez votre nouveau nom d'utilisateur :", userState.userName);
            if (newName && newName.trim() !== "") {
                userState.userName = newName.trim();
                
                // Update username in header
                const userNameEl = document.querySelector(".user-name");
                userNameEl.textContent = userState.userName;
                
                // Update username display in bio
                const bioNameEl = document.querySelector(".bio-display-name");
                if (bioNameEl) bioNameEl.textContent = userState.userName;
                
                saveStateToStorage();
                showToast("Profil mis à jour !", true);
            }
        });
    }
}

// Toggle interactive tools
window.toggleTool = function(headerElement) {
    const box = headerElement.closest('.interactive-tool-box');
    box.classList.toggle('collapsed');
};

