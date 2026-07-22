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
            <div class="math-formula">v = \\frac{d}{\\Delta t}</div>
            <p>Le retard temporel \\tau du passage de l'onde au point M_2 par rapport à son passage au point M_1 est :</p>
            <div class="math-formula">\\tau = \\frac{d}{v}</div>

            <div class="interactive-tool-box collapsed" style="margin-top: 24px;">
                <div class="tool-header" onclick="toggleTool(this)">
                    <h4>
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px;"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="10" y2="18"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M12 18h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/><path d="M8 18h.01"/></svg> Calculateur d'Ondes & Retards</span>
                        <i data-lucide="chevron-down" class="tool-chevron"></i>
                    </h4>
                    <p>Calculez facilement la célérité v, la distance d ou le retard temporel \\tau.</p>
                </div>
                <div class="tool-body">
                    <div class="modal-tabs" style="background: rgba(255,255,255,0.05); padding: 4px; border-radius: 8px; margin-bottom: 10px; display:flex;">
                        <button class="modal-tab-btn active" id="tab-calc-v" style="font-size: 0.75rem; padding: 6px 12px; border-radius: 6px; border:none;"><i data-lucide="activity"></i> Célérité (v)</button>
                        <button class="modal-tab-btn" id="tab-calc-tau" style="font-size: 0.75rem; padding: 6px 12px; border-radius: 6px; border:none;"><i data-lucide="timer"></i> Retard (\\tau)</button>
                    </div>
                    <div class="calc-inputs" style="grid-template-columns: repeat(2, 1fr);">
                        <div class="input-field">
                            <label for="wave-d">Distance d (m)</label>
                            <input type="number" id="wave-d" value="300">
                        </div>
                        <div class="input-field" id="field-t">
                            <label for="wave-t">Durée \\Delta t (s)</label>
                            <input type="number" id="wave-t" value="0.2">
                        </div>
                        <div class="input-field" id="field-v" style="display: none;">
                            <label for="wave-v">Célérité v (m/s)</label>
                            <input type="number" id="wave-v" value="1500">
                        </div>
                    </div>
                    <button class="btn btn-primary calc-btn" id="btn-calc-wave" style="margin-top: 10px;">Calculer</button>
                    <div class="calc-result" id="wave-result" style="display: none; color: var(--text-primary);"></div>
                </div>
            </div>
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
            <div class="math-formula">\\Delta = b^2 - 4ac</div>

            <h4>2. Solutions dans R</h4>
            <ul>
                <li><strong>Si \\Delta > 0 :</strong> Deux solutions réelles :<br>x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a}  et  x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a}</li>
                <li><strong>Si \\Delta = 0 :</strong> Une solution double :<br>x_0 = \\frac{-b}{2a}</li>
                <li><strong>Si \\Delta < 0 :</strong> Pas de solution réelle.</li>
            </ul>

            <h4>3. Signe du trinôme</h4>
            <p>Le trinôme ax² + bx + c est toujours du signe de <strong>a</strong> à l'extérieur des racines (si elles existent) et du signe opposé de <strong>a</strong> entre les racines.</p>

            <div class="interactive-tool-box collapsed" style="margin-top: 24px;">
                <div class="tool-header" onclick="toggleTool(this)">
                    <h4>
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px;"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="10" y2="18"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M12 18h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/><path d="M8 18h.01"/></svg> Calculateur de Discriminant \\Delta</span>
                        <i data-lucide="chevron-down" class="tool-chevron"></i>
                    </h4>
                    <p>Résolvez instantanément n'importe quel trinôme ax² + bx + c = 0.</p>
                </div>
                <div class="tool-body">
                    <div class="calc-inputs">
                        <div class="input-field">
                            <label for="calc-a">Coeff a</label>
                            <input type="number" id="calc-a" value="2">
                        </div>
                        <div class="input-field">
                            <label for="calc-b">Coeff b</label>
                            <input type="number" id="calc-b" value="-5">
                        </div>
                        <div class="input-field">
                            <label for="calc-c">Coeff c</label>
                            <input type="number" id="calc-c" value="2">
                        </div>
                    </div>
                    <button class="btn btn-primary calc-btn" id="btn-calc-delta">Calculer les Solutions</button>
                    <div class="calc-result" id="delta-result" style="display: none;"></div>
                </div>
            </div>
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
    },
    {
        id: "pc-tp-diodes-redressement",
        title: "TP : Diodes et Applications (Redressement & Filtrage)",
        level: "1bac",
        subject: "pc",
        description: "Utiliser une diode de redressement pour générer des signaux redressés (simple et double alternance) et filtrés par condensateur C.",
        courseContent: `
            <div class="toc reveal">
                <div class="toc-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg> Sommaire du TP</div>
                <ol class="toc-list">
                    <li><a href="#tp-s1"><span class="toc-num">I</span> Caractéristiques de la Diode de Redressement</a></li>
                    <li><a href="#tp-s2"><span class="toc-num">II</span> Redressement Simple Alternance</a></li>
                    <li><a href="#tp-s3"><span class="toc-num">III</span> Redressement Double Alternance (Pont de Graetz)</a></li>
                    <li><a href="#tp-s4"><span class="toc-num">IV</span> Filtrage par Condensateur & Ondulation</a></li>
                    <li><a href="#tp-s5"><span class="toc-num">V</span> TP Virtuel Interactif</a></li>
                </ol>
            </div>

            <div class="cours-section reveal" id="tp-s1">
                <span class="section-label">Section I</span>
                <h2 class="section-heading">Caractéristiques de la Diode de Redressement</h2>
                <p>La diode à jonction $PN$ est un composant semi-conducteur dipolaire asymétrique :</p>
                <ul>
                    <li><strong>Polarisation directe ($e(t) > V_0$) :</strong> La diode conduit le courant avec une tension de seuil $V_0$ ($\approx 0,7\text{ V}$ silicium).</li>
                    <li><strong>Polarisation inverse ($e(t) < V_0$) :</strong> La diode est bloquée ($i = 0\text{ A}$).</li>
                </ul>
            </div>

            <div class="cours-section reveal" id="tp-s2">
                <span class="section-label">Section II</span>
                <h2 class="section-heading">Redressement Simple Alternance</h2>
                <p>Pour $e(t) = E_{max} \cdot \sin(\omega t)$, la tension redressée en sortie s'écrit :</p>
                <div class="math-formula">u_s(t) = \\max(0, e(t) - V_0)</div>
                <p>Tension moyenne :</p>
                <div class="math-formula">V_{dc} = \\frac{E_{max} - V_0}{\\pi}</div>
            </div>

            <div class="cours-section reveal" id="tp-s3">
                <span class="section-label">Section III</span>
                <h2 class="section-heading">Redressement Double Alternance (Pont de Graetz)</h2>
                <p>Utilise un pont de 4 diodes pour redresser les deux alternances :</p>
                <div class="math-formula">u_s(t) = \\max(0, |e(t)| - 2 V_0)</div>
                <p>Tension moyenne :</p>
                <div class="math-formula">V_{dc} = \\frac{2(E_{max} - 2 V_0)}{\\pi}</div>
            </div>

            <div class="cours-section reveal" id="tp-s4">
                <span class="section-label">Section IV</span>
                <h2 class="section-heading">Filtrage par Condensateur & Ondulation</h2>
                <p>Un condensateur $C$ placé en parallèle sur la charge $R$ lisse la tension en se déchargeant dans $R$ pendant la phase de blocage des diodes.</p>
                <p>L'ondulation de tension (ronflement) est donnée par :</p>
                <div class="math-formula">\\Delta U \\approx \\frac{V_{dc}}{f_{red} \\cdot R \\cdot C}</div>
            </div>

            <div class="cours-section reveal" id="tp-s5" style="background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.2); padding: 20px; border-radius: 12px; margin-top: 20px;">
                <h3 style="color: var(--primary); font-family: 'Outfit', sans-serif;">Simulateur Virtuel Interactif</h3>
                <p>Visualisez les signaux redressés et filtrés en temps réel sur l'oscilloscope virtuel.</p>
                <button class="btn btn-primary" onclick="navigateToAnim('diodes-redressement')" style="margin-top: 10px; cursor: pointer;">
                    Lancer l'Animation Interactive dans le Labo Virtuel ⚡
                </button>
            </div>
        `,
        exercises: [
            {
                title: "Exercice 1 : Calcul du filtrage et de la tension de ronflement",
                statement: "Un pont de Graetz alimenté sous f = 50 Hz avec C = 220 µF et R = 1 kΩ fournit une tension moyenne Vdc = 12 V. Calculer la tension d'ondulation ΔU.",
                solution: "Double alternance => f_red = 2 × 50 = 100 Hz.<br>ΔU ≈ Vdc / (f_red × R × C) = 12 / (100 × 1000 × 220 × 10⁻⁶) = 12 / 22 = <strong>0.545 V</strong>."
            }
        ],
        exams: [
            { title: "TP d'Électronique et Redressement", type: "Pratique", year: 2024 }
        ]
    },
    {
        id: "pc-tp-transistor-bipolaire",
        title: "TP : Transistors Bipolaires (Caractéristiques & Régimes)",
        level: "1bac",
        subject: "pc",
        description: "Faire connaissance avec le transistor bipolaire NPN. Tracé des caractéristiques d'entrée I_B(V_BE), de sortie I_C(V_CE) et étude des régimes bloqué, linéaire et saturé.",
        courseContent: `
            <div class="toc reveal">
                <div class="toc-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg> Sommaire du TP</div>
                <ol class="toc-list">
                    <li><a href="#tp-tb-s1"><span class="toc-num">I</span> Constitution et Principe du Transistor Bipolaire</a></li>
                    <li><a href="#tp-tb-s2"><span class="toc-num">II</span> Caractéristique d'Entrée \(I_B = f(V_{BE})\)</a></li>
                    <li><a href="#tp-tb-s3"><span class="toc-num">III</span> Réseau de Caractéristiques de Sortie \(I_C = f(V_{CE})\)</a></li>
                    <li><a href="#tp-tb-s4"><span class="toc-num">IV</span> Les Trois Régimes de Fonctionnement</a></li>
                    <li><a href="#tp-tb-s5"><span class="toc-num">V</span> Droite de Charge Statique & Point Q</a></li>
                    <li><a href="#tp-tb-s6"><span class="toc-num">VI</span> TP Virtuel Interactif</a></li>
                </ol>
            </div>

            <div class="cours-section reveal" id="tp-tb-s1">
                <span class="section-label">Section I</span>
                <h2 class="section-heading">Constitution et Principe du Transistor Bipolaire</h2>
                <p>Le transistor bipolaire (NPN ou PNP) est un composant à semi-conducteurs à 3 électrodes :</p>
                <ul>
                    <li><strong>La Base (B) :</strong> Électrode de commande (courant d'entrée \(I_B\)).</li>
                    <li><strong>Le Collecteur (C) :</strong> Électrode de sortie (courant \(I_C\)).</li>
                    <li><strong>L'Émetteur (E) :</strong> Électrode commune (courant \(I_E = I_B + I_C\)).</li>
                </ul>
                <p>La relation fondamentale des courants est :</p>
                <div class="math-formula">I_E = I_B + I_C</div>
            </div>

            <div class="cours-section reveal" id="tp-tb-s2">
                <span class="section-label">Section II</span>
                <h2 class="section-heading">Caractéristique d'Entrée \(I_B = f(V_{BE})\)</h2>
                <p>La jonction Base-Émetteur se comporte comme une diode à jonction PN polarisée en direct :</p>
                <ul>
                    <li>Pour \(V_{BE} < V_{BE0} \approx 0,6\text{ V}\) à \(0,7\text{ V}\), le courant de base est nul (\(I_B = 0\)).</li>
                    <li>Pour \(V_{BE} \ge V_{BE0}\), le courant \(I_B\) croît très rapidement de manière exponentielle.</li>
                </ul>
            </div>

            <div class="cours-section reveal" id="tp-tb-s3">
                <span class="section-label">Section III</span>
                <h2 class="section-heading">Réseau de Caractéristiques de Sortie \(I_C = f(V_{CE})\)</h2>
                <p>La courbe de sortie représente l'évolution du courant collecteur \(I_C\) en fonction de la tension collecteur-émetteur \(V_{CE}\) pour différentes valeurs fixées du courant de base \(I_B\) :</p>
                <div class="math-formula">I_C = \beta \cdot I_B \quad \text{(en régime linéaire)}</div>
                <p>où \(\beta = h_{fe}\) est le gain en courant statique du transistor (généralement compris entre 50 et 400).</p>
            </div>

            <div class="cours-section reveal" id="tp-tb-s4">
                <span class="section-label">Section IV</span>
                <h2 class="section-heading">Les Trois Régimes de Fonctionnement</h2>
                <ul>
                    <li><strong>1. Régime Bloqué (Interrupteur Ouvert) :</strong> \(I_B = 0 \implies I_C = 0\) et \(V_{CE} = V_{CC}\). Le transistor est bloqué.</li>
                    <li><strong>2. Régime Linéaire (Amplificateur) :</strong> \(V_{CE} > V_{CE,sat}\) et \(I_C = \beta \cdot I_B\). Le courant de sortie est proportionnel au courant d'entrée.</li>
                    <li><strong>3. Régime Saturé (Interrupteur Fermé) :</strong> \(V_{CE} = V_{CE,sat} \approx 0,2\text{ V}\) et \(I_C < \beta \cdot I_B\). Le courant \(I_C\) atteint sa valeur maximale \(I_{C,sat} = \frac{V_{CC} - V_{CE,sat}}{R_C}\).</li>
                </ul>
            </div>

            <div class="cours-section reveal" id="tp-tb-s5">
                <span class="section-label">Section V</span>
                <h2 class="section-heading">Droite de Charge Statique & Point Q</h2>
                <p>La loi des mailles au niveau du circuit de sortie donne :</p>
                <div class="math-formula">V_{CC} = V_{CE} + R_C \cdot I_C \implies I_C = \frac{V_{CC} - V_{CE}}{R_C}</div>
                <p>L'intersection de cette droite avec la caractéristique \(I_C = f(V_{CE})\) détermine le <strong>Point de Fonctionnement Statique \(Q(V_{CEQ}, I_{CQ})\)</strong>.</p>
            </div>

            <div class="cours-section reveal" id="tp-tb-s6" style="background: rgba(56, 189, 248, 0.05); border: 1px solid rgba(56, 189, 248, 0.2); padding: 20px; border-radius: 12px; margin-top: 20px;">
                <h3 style="color: #38bdf8; font-family: 'Outfit', sans-serif;">Simulateur Virtuel du Transistor Bipolaire</h3>
                <p>Visualisez en direct les caractéristiques d'entrée, de sortie, le réseau de courbes \(I_C(V_{CE})\) et la droite de charge sur notre outil interactif.</p>
                <button class="btn btn-primary" onclick="navigateToAnim('transistor-bipolaire')" style="margin-top: 10px; cursor: pointer;">
                    Lancer l'Animation Interactive dans le Labo Virtuel ⚡
                </button>
            </div>
        `,
        exercises: [
            {
                title: "Exercice 1 : Détermination du régime de fonctionnement",
                statement: "Un transistor NPN a un gain β = 150. On applique VCC = 12 V, RC = 1 kΩ et IB = 40 µA. Déterminer si le transistor est en régime linéaire ou saturé, et calculer IC et VCE.",
                solution: "En régime linéaire supposé : IC = β × IB = 150 × 40 × 10⁻⁶ A = 6 mA.<br>VCE = VCC - RC × IC = 12 - (1000 × 6 × 10⁻³) = 12 - 6 = 6 V.<br>Puisque VCE = 6 V > VCE,sat (0.2 V), le transistor est bien en <strong>Régime Linéaire (Amplificateur)</strong> avec <strong>IC = 6 mA</strong> et <strong>VCE = 6 V</strong>."
            }
        ],
        exams: [
            { title: "TP d'Électronique - Transistor Bipolaire en Commutation et Amplification", type: "Pratique", year: 2024 }
        ]
    },
    {
        id: "pc-tp-aop-amplificateur",
        title: "TP : Amplificateur Opérationnel (AOP) — Visualisation des Tensions",
        level: "1bac",
        subject: "pc",
        description: "Visualiser la tension d'entrée V_in(t) et de sortie V_out(t) sur un oscilloscope bicanal. Étude des montages inverseur, non-inverseur, suiveur et du régime de saturation.",
        courseContent: `
            <div class="toc reveal">
                <div class="toc-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg> Sommaire du TP</div>
                <ol class="toc-list">
                    <li><a href="#tp-aop-s1"><span class="toc-num">I</span> Présentation & Modèle de l'AOP Idéal</a></li>
                    <li><a href="#tp-aop-s2"><span class="toc-num">II</span> Le Régime Linéaire (\(V^+ = V^-\)) & Contre-Réaction</a></li>
                    <li><a href="#tp-aop-s3"><span class="toc-num">III</span> Montages de Base (Inverseur, Non-Inverseur, Suiveur)</a></li>
                    <li><a href="#tp-aop-s4"><span class="toc-num">IV</span> Montages Avancés (Sommateur & Soustracteur Différentiel)</a></li>
                    <li><a href="#tp-aop-s5"><span class="toc-num">V</span> Montages à Capacités (Intégrateur & Dérivateur)</a></li>
                    <li><a href="#tp-aop-s6"><span class="toc-num">VI</span> Régime Non-Linéaire & Saturation (\(\pm V_{sat}\))</a></li>
                    <li><a href="#tp-aop-s7"><span class="toc-num">VII</span> TP Virtuel Interactif</a></li>
                </ol>
            </div>

            <div class="cours-section reveal" id="tp-aop-s1">
                <span class="section-label">Section I</span>
                <h2 class="section-heading">Présentation & Modèle de l'AOP Idéal</h2>
                <p>L'Amplificateur Opérationnel (AOP / AO) est un composant électronique intégré actif comportant :</p>
                <ul>
                    <li><strong>L'entrée non-inverseuse (\(V^+\)) :</strong> Borne de commande positive.</li>
                    <li><strong>L'entrée inverseuse (\(V^-\)) :</strong> Borne de commande négative.</li>
                    <li><strong>La sortie (\(V_{out}\)) :</strong> Tension amplifiée ou limitée.</li>
                    <li><strong>Alimentation symétrique (\(\pm V_{CC}\)) :</strong> Généralement \(\pm 12\text{V}\) ou \(\pm 15\text{V}\).</li>
                </ul>
                <p>Pour un AOP parfait / idéal en régime linéaire :</p>
                <div class="math-formula">i^+ = i^- = 0 \quad \text{et} \quad V^+ = V^- \implies \varepsilon = V^+ - V^- = 0</div>
            </div>

            <div class="cours-section reveal" id="tp-aop-s2">
                <span class="section-label">Section II</span>
                <h2 class="section-heading">Le Régime Linéaire & La Boucle de Contre-Réaction</h2>
                <p>Pour fonctionner en régime linéaire, la sortie de l'AOP doit obligatoirement être reliée à son entrée inverseuse (\(V^-\)) par un réseau de contre-réaction (résistance ou condensateur). La tension de sortie varie sans dépasser \(\pm V_{sat}\).</p>
            </div>

            <div class="cours-section reveal" id="tp-aop-s3">
                <span class="section-label">Section III</span>
                <h2 class="section-heading">Montages Amplificateurs de Base</h2>
                <p><strong>1. Amplificateur Inverseur :</strong> \(V_1(t)\) appliqué sur \(V^-\) via \(R_1\), avec \(V^+\) à la masse (\(0\text{V}\)).</p>
                <div class="math-formula">V_{out}(t) = -\frac{R_2}{R_1} \cdot V_1(t) \implies A_v = -\frac{R_2}{R_1} \quad (\text{Déphasage de } 180^\circ / \pi \text{ rad})</div>

                <p><strong>2. Amplificateur Non-Inverseur :</strong> \(V_1(t)\) appliqué sur \(V^+\), avec \(V^-\) relié à la masse via \(R_1\).</p>
                <div class="math-formula">V_{out}(t) = \left(1 + \frac{R_2}{R_1}\right) \cdot V_1(t) \implies A_v = 1 + \frac{R_2}{R_1} \quad (\text{En phase } 0^\circ)</div>

                <p><strong>3. Suiveur de Tension (Buffer) :</strong> Relie directement la sortie à \(V^-\) (\(R_2 = 0\)).</p>
                <div class="math-formula">V_{out}(t) = V_1(t) \implies A_v = 1 \quad (\text{Adaptateur d'impédance idéal})</div>
            </div>

            <div class="cours-section reveal" id="tp-aop-s4">
                <span class="section-label">Section IV</span>
                <h2 class="section-heading">Montages Avancés : Sommateur & Soustracteur Différentiel</h2>
                <p><strong>1. Amplificateur Sommateur Inverseur :</strong> Additionne algébriquement deux tensions \(V_1(t)\) et \(V_2\) sur l'entrée inverseuse.</p>
                <div class="math-formula">V_{out}(t) = -\frac{R_2}{R_1} \left(V_1(t) + V_2\right)</div>

                <p><strong>2. Amplificateur Soustracteur / Différentiel :</strong> Amplifie la différence entre deux tensions \(V_2\) et \(V_1(t)\).</p>
                <div class="math-formula">V_{out}(t) = \frac{R_2}{R_1} \left(V_2 - V_1(t)\right) \quad (\text{Élimine les bruits parasites communs})</div>
            </div>

            <div class="cours-section reveal" id="tp-aop-s5">
                <span class="section-label">Section V</span>
                <h2 class="section-heading">Montages à Capacités : Intégrateur & Dérivateur</h2>
                <p><strong>1. Amplificateur Intégrateur :</strong> Remplace la résistance de contre-réaction par un condensateur \(C\). La sortie est l'intégrale du signal d'entrée :</p>
                <div class="math-formula">V_{out}(t) = -\frac{1}{R_1 C} \int V_1(t) \, dt \quad (\text{Transforme un signal carré en triangulaire})</div>

                <p><strong>2. Amplificateur Dérivateur :</strong> Remplace la résistance d'entrée par un condensateur \(C\). La sortie est la dérivée du signal d'entrée :</p>
                <div class="math-formula">V_{out}(t) = -R_2 C \frac{d V_1(t)}{dt} \quad (\text{Transforme un signal triangulaire en carré})</div>
            </div>

            <div class="cours-section reveal" id="tp-aop-s6">
                <span class="section-label">Section VI</span>
                <h2 class="section-heading">Régime Non-Linéaire & Saturation (\(\pm V_{sat}\))</h2>
                <p><strong>1. Comparateur de Tension (Boucle ouverte) :</strong> Pas de contre-réaction. Compare \(V_1(t)\) à une référence \(V_{ref} = V_2\) :</p>
                <div class="math-formula">V_{out} = \begin{cases} +V_{sat} & \text{si } V_1 > V_2 \\ -V_{sat} & \text{si } V_1 < V_2 \end{cases}</div>
                <p><strong>2. Écrêtage en Régime Linéaire :</strong> Si le produit théorique \(A_v \cdot V_{1,max} > V_{sat}\), la sortie est plafonnée à \(\pm V_{sat}\).</p>
            </div>

            <div class="cours-section reveal" id="tp-aop-s7" style="background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.2); padding: 20px; border-radius: 12px; margin-top: 20px;">
                <h3 style="color: #10b981; font-family: 'Outfit', sans-serif;">Simulateur Virtuel AOP & Oscilloscope</h3>
                <p>Visualisez simultanément \(V_{in}(t)\) et \(V_{out}(t)\), choisissez parmi les 8 montages, observez l'intégration, la dérivation, le déphasage et l'écrêtage sur l'oscilloscope virtuel.</p>
                <button class="btn btn-primary" onclick="navigateToAnim('aop-amplificateur')" style="margin-top: 10px; cursor: pointer;">
                    Lancer l'Animation Interactive dans le Labo Virtuel ⚡
                </button>
            </div>
        `,
        exercises: [
            {
                title: "Exercice 1 : Calcul de gain et vérification de la saturation",
                statement: "Un montage inverseur comporte R1 = 10 kΩ et R2 = 50 kΩ. L'AOP a une saturation Vsat = 12 V. On applique Vin(t) = 2.0 sin(wt). Déterminer le gain Av, la tension théorique Vout,max et indiquer si le signal est écrêté.",
                solution: "Gain théorique : Av = -R2 / R1 = -50 / 10 = -5.<br>Tension de sortie théorique crête : |Vout,max,th| = |Av| × Vin,max = 5 × 2.0 V = 10 V.<br>Puisque 10 V < Vsat (12 V), le signal reste en <strong>Régime Linéaire sans écrêtage</strong> avec <strong>Vout,max = 10 V</strong> et un déphasage de 180°."
            }
        ],
        exams: [
            { title: "TP d'Électronique - Amplificateur Opérationnel et Montages Linéaires", type: "Pratique", year: 2024 }
        ]
    },
    {
        id: "pc-tp-mesure-resistances",
        title: "TP : Mesure de Résistances (Code Couleurs, Volt-Ampèremètre & Wheatstone)",
        level: "1bac",
        subject: "pc",
        description: "Mesure directe par le code des couleurs à anneaux, étude de la méthode Volt-Ampèremétrique (Montages Amont/Aval et erreurs systématiques) et équilibre du Pont de Wheatstone.",
        courseContent: `
            <div class="toc reveal">
                <div class="toc-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg> Sommaire du TP</div>
                <ol class="toc-list">
                    <li><a href="#tp-res-s1"><span class="toc-num">I</span> Code des Couleurs des Résistances (4 & 5 Anneaux)</a></li>
                    <li><a href="#tp-res-s2"><span class="toc-num">II</span> Méthode Volt-Ampèremétrique (Montage Aval vs Amont)</a></li>
                    <li><a href="#tp-res-s3"><span class="toc-num">III</span> Pont de Wheatstone à l'Équilibre</a></li>
                    <li><a href="#tp-res-s4"><span class="toc-num">IV</span> TP Virtuel Interactif</a></li>
                </ol>
            </div>

            <div class="cours-section reveal" id="tp-res-s1">
                <span class="section-label">Section I</span>
                <h2 class="section-heading">Code des Couleurs des Résistances</h2>
                <p>La valeur de la résistance $R$ et sa tolérance sont codées par des anneaux de couleurs :</p>
                <div class="math-formula">R = (10 \cdot A + B) \times 10^C \ \Omega \quad \pm T\%</div>
                <ul>
                    <li><strong>Moyen mnémotechnique :</strong> "Ne Manger Rien D'Important Ou Je Vous Bats Très Volontiers" (Noir=0, Marron=1, Rouge=2, Orange=3, Jaune=4, Vert=5, Bleu=6, Violet=7, Gris=8, Blanc=9).</li>
                    <li><strong>Tolérance :</strong> Or ($\pm 5\%$), Argent ($\pm 10\%$), Marron ($\pm 1\%$).</li>
                </ul>
            </div>

            <div class="cours-section reveal" id="tp-res-s2">
                <span class="section-label">Section II</span>
                <h2 class="section-heading">Méthode Volt-Ampèremétrique (Montage Amont / Aval)</h2>
                <p>Mesure indirecte en appliquant la loi d'Ohm $R_{mes} = U / I$.</p>
                <p><strong>1. Montage Aval (Voltmètre aux bornes de R) :</strong> Recommandé pour les <strong>résistances de faible valeur ($R \ll R_V$)</strong>. L'erreur est due au courant dérivé par le voltmètre ($I_V = U / R_V$).</p>
                <p><strong>2. Montage Amont (Voltmètre en amont de l'ampèremètre) :</strong> Recommandé pour les <strong>résistances de forte valeur ($R \gg R_A$)</strong>. L'erreur est due à la chute de tension interne de l'ampèremètre ($U_A = R_A \cdot I$).</p>
            </div>

            <div class="cours-section reveal" id="tp-res-s3">
                <span class="section-label">Section III</span>
                <h2 class="section-heading">Pont de Wheatstone à l'Équilibre</h2>
                <p>Le pont de Wheatstone est constitué de 4 résistances $R_1, R_2, R_3, R_x$ et d'un détecteur de zéro (galvanomètre) :</p>
                <div class="math-formula">I_G = 0 \iff \frac{R_1}{R_2} = \frac{R_3}{R_x} \implies R_x = \frac{R_2 \cdot R_3}{R_1}</div>
                <p>Méthode très précise car elle affranchit des erreurs de déviation des appareils de mesure.</p>
            </div>

            <div class="cours-section reveal" id="tp-res-s4" style="background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.2); padding: 20px; border-radius: 12px; margin-top: 20px;">
                <h3 style="color: #10b981; font-family: 'Outfit', sans-serif;">Simulateur Virtuel Mesure de Résistances</h3>
                <p>Manipulez le code des couleurs, comparez l'erreur des montages Amont/Aval et équilibrez le pont de Wheatstone.</p>
                <button class="btn btn-primary" onclick="navigateToAnim('mesure-resistances')" style="margin-top: 10px; cursor: pointer;">
                    Lancer l'Animation Interactive dans le Labo Virtuel ⚡
                </button>
            </div>
        `,
        exercises: [
            {
                title: "Exercice 1 : Choix entre montage amont et aval",
                statement: "On dispose d'un ampèremètre de résistance interne RA = 2 Ω et d'un voltmètre de résistance RV = 100 kΩ. On veut mesurer R = 10 Ω, puis RX = 50 kΩ. Quel montage choisir dans chaque cas ?",
                solution: "Pour R = 10 Ω : R < sqrt(RA × RV) = sqrt(200 000) = 447 Ω. Il faut choisir le <strong>Montage Aval</strong>.<br>Pour RX = 50 kΩ : RX > 447 Ω. Il faut choisir le <strong>Montage Amont</strong>."
            }
        ],
        exams: [
            { title: "TP Mesures Électriques et Métrologie", type: "Pratique", year: 2024 }
        ]
    },
    {
        id: "pc-tp-charge-decharge-rc",
        title: "TP : Charge et Décharge d'un Condensateur (Dipôle RC)",
        level: "1bac",
        subject: "pc",
        description: "Étude expérimentale de la réponse d'un circuit RC à un échelon de tension E. Détermination de la constante de temps tau = R*C par la tangente à l'origine.",
        courseContent: `
            <div class="toc reveal">
                <div class="toc-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg> Sommaire du TP</div>
                <ol class="toc-list">
                    <li><a href="#tp-rc-s1"><span class="toc-num">I</span> Équation Différentielle de la Charge du Condensateur</a></li>
                    <li><a href="#tp-rc-s2"><span class="toc-num">II</span> Équation Différentielle de la Décharge du Condensateur</a></li>
                    <li><a href="#tp-rc-s3"><span class="toc-num">III</span> Constante de Temps \(\\tau = R \\cdot C\) & Méthodes de Mesure</a></li>
                    <li><a href="#tp-rc-s4"><span class="toc-num">IV</span> Énergie Électrique Emmagasinée dans un Condensateur</a></li>
                    <li><a href="#tp-rc-s5"><span class="toc-num">V</span> TP Virtuel Interactif</a></li>
                </ol>
            </div>

            <div class="cours-section reveal" id="tp-rc-s1">
                <span class="section-label">Section I</span>
                <h2 class="section-heading">Équation Différentielle de la Charge</h2>
                <p>En appliquant la loi d'additivité des tensions $E = u_R(t) + u_C(t)$ avec $u_R = R \cdot i = R C \frac{du_C}{dt}$ :</p>
                <div class="math-formula">u_C(t) + R C \frac{du_C}{dt} = E \implies u_C(t) = E \left(1 - e^{-t/\tau}\right)</div>
                <p>Avec la constante de temps <strong>\(\tau = R \cdot C\)</strong> (exprimée en secondes).</p>
            </div>

            <div class="cours-section reveal" id="tp-rc-s2">
                <span class="section-label">Section II</span>
                <h2 class="section-heading">Équation Différentielle de la Décharge</h2>
                <p>Lors de la décharge à travers la résistance $R$ ($E = 0$) :</p>
                <div class="math-formula">u_C(t) + R C \frac{du_C}{dt} = 0 \implies u_C(t) = E \cdot e^{-t/\tau}</div>
            </div>

            <div class="cours-section reveal" id="tp-rc-s3">
                <span class="section-label">Section III</span>
                <h2 class="section-heading">Constante de Temps \(\tau = R \cdot C\) & Méthodes de Mesure</h2>
                <p><strong>1. Méthode de la Tangente à l'origine ($t=0$) :</strong> La tangente à l'origine croise l'asymptote $u_C = E$ (en charge) ou l'axe des temps $u_C = 0$ (en décharge) exactement à l'instant $t = \tau$.</p>
                <p><strong>2. Méthode des $63\%$ / $37\%$ :</strong> À l'instant $t = \tau$ :</p>
                <ul>
                    <li>En charge : $u_C(\tau) = E (1 - e^{-1}) \approx 0{,}63 \cdot E$ ($63\%$ de la tension finale).</li>
                    <li>En décharge : $u_C(\tau) = E e^{-1} \approx 0{,}37 \cdot E$ ($37\%$ de la tension initiale).</li>
                </ul>
            </div>

            <div class="cours-section reveal" id="tp-rc-s4">
                <span class="section-label">Section IV</span>
                <h2 class="section-heading">Énergie Électrique Emmagasinée</h2>
                <div class="math-formula">E_e = \frac{1}{2} C \cdot u_C^2</div>
                <p>L'énergie accumulée dans le condensateur en régime permanent ($u_C = E$) vaut $E_e = \frac{1}{2} C E^2$.</p>
            </div>

            <div class="cours-section reveal" id="tp-rc-s5" style="background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.2); padding: 20px; border-radius: 12px; margin-top: 20px;">
                <h3 style="color: #10b981; font-family: 'Outfit', sans-serif;">Simulateur Virtuel Charge & Décharge Condensateur</h3>
                <p>Commutez l'interrupteur K, observez la courbe transitoire $u_C(t)$ et déterminez $\tau$ grâce à la tangente à l'origine tracée en temps réel.</p>
                <button class="btn btn-primary" onclick="navigateToAnim('charge-decharge-rc')" style="margin-top: 10px; cursor: pointer;">
                    Lancer l'Animation Interactive dans le Labo Virtuel ⚡
                </button>
            </div>
        `,
        exercises: [
            {
                title: "Exercice 1 : Calcul de la constante de temps et capacité",
                statement: "Un circuit RC comporte R = 10 kΩ. Sur l'oscilloscope, on mesure tau = 0.47 ms. Calculer la capacité C du condensateur et la tension uC à t = tau pour E = 10 V.",
                solution: "C = tau / R = (0.47 × 10⁻³ s) / (10 × 10³ Ω) = 0.047 × 10⁻⁶ F = 47 nF.<br>À t = tau en charge : uC(tau) = 0.63 × 10 V = <strong>6.3 V</strong>."
            }
        ],
        exams: [
            { title: "TP Dipôle RC - Échelon de Tension et Régime Transitoire", type: "Pratique", year: 2024 }
        ]
    },
    {
        id: "pc-tp-moteur-cc",
        title: "TP : Moteur à Courant Continu (MCC) — Caractéristiques & Rendement",
        level: "1bac",
        subject: "pc",
        description: "Étude théorique et expérimentale du moteur à courant continu : équations E = K*Omega, U = E + R*I, couple Tem = K*I, étude des caractéristiques N(U), Tem(I) et bilan de puissance.",
        courseContent: `
            <div class="toc reveal">
                <div class="toc-title"><svg xmlns="http://www.w3.org/2000/svg" style="width:0.95em;height:0.95em;vertical-align:middle;display:inline-block;margin-right:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg> Sommaire du TP</div>
                <ol class="toc-list">
                    <li><a href="#tp-mcc-s1"><span class="toc-num">I</span> Constitution & Principe de Fonctionnement du Moteur CC</a></li>
                    <li><a href="#tp-mcc-s2"><span class="toc-num">II</span> Équation Électrique (\(U = E + R \cdot I\)) & Force Électromotrice (\(E = K \cdot \Omega\))</a></li>
                    <li><a href="#tp-mcc-s3"><span class="toc-num">III</span> Couple Électromagnétique (\(T_{em} = K \cdot I\)) & Caractéristique Mécanique</a></li>
                    <li><a href="#tp-mcc-s4"><span class="toc-num">IV</span> Réglage de la Vitesse de Rotation (Variation de \(U\))</a></li>
                    <li><a href="#tp-mcc-s5"><span class="toc-num">V</span> Bilan de Puissance & Rendement (\(\eta = P_u / P_a\))</a></li>
                    <li><a href="#tp-mcc-s6"><span class="toc-num">VI</span> TP Virtuel Interactif</a></li>
                </ol>
            </div>

            <div class="cours-section reveal" id="tp-mcc-s1">
                <span class="section-label">Section I</span>
                <h2 class="section-heading">Constitution & Principe de Fonctionnement</h2>
                <p>Le Moteur à Courant Continu (MCC) est une machine électrique tournante réversible composée de :</p>
                <ul>
                    <li><strong>Stator (Inducteur) :</strong> Aimants permanents ou électroaimants produisant un champ magnétique fixe $\vec{B}$.</li>
                    <li><strong>Rotor (Induit) :</strong> Bobinage conducteur en rotation parcouru par le courant $I$.</li>
                    <li><strong>Collecteur & Balais en carbone :</strong> Assurent la commutation du courant pour maintenir le couple électromagnétique toujours dans le même sens.</li>
                </ul>
            </div>

            <div class="cours-section reveal" id="tp-mcc-s2">
                <span class="section-label">Section II</span>
                <h2 class="section-heading">Équation Électrique & Force Électromotrice</h2>
                <p>En régime permanent, la tension appliquée à l'induit $U$ s'équilibre avec la force contre-électromotrice $E$ et la chute de tension dans la résistance interne $R$ :</p>
                <div class="math-formula">U = E + R \cdot I \implies E = U - R \cdot I</div>
                <p>La f.é.m. d'induction $E$ est proportionnelle à la vitesse angulaire de rotation $\Omega$ (en rad/s) :</p>
                <div class="math-formula">E = K \cdot \Omega = K \cdot \frac{2 \pi N}{60}</div>
            </div>

            <div class="cours-section reveal" id="tp-mcc-s3">
                <span class="section-label">Section III</span>
                <h2 class="section-heading">Couple Électromagnétique & Caractéristique Mécanique</h2>
                <p>Le couple électromagnétique $T_{em}$ généré par les forces de Laplace est directement proportionnel au courant d'induit $I$ :</p>
                <div class="math-formula">T_{em} = K \cdot I</div>
                <p>En exprimant la vitesse angulaire $\Omega$ en fonction de la tension $U$ et du couple $T_{em}$ :</p>
                <div class="math-formula">\Omega = \frac{U - R \cdot I}{K} = \frac{U}{K} - \frac{R}{K^2} T_{em}</div>
            </div>

            <div class="cours-section reveal" id="tp-mcc-s4">
                <span class="section-label">Section IV</span>
                <h2 class="section-heading">Réglage de la Vitesse de Rotation</h2>
                <p>À vide ($I \approx 0$), la vitesse de rotation $N_0$ varie de manière parfaitement linéaire avec la tension d'alimentation $U$ :</p>
                <div class="math-formula">N_0 \approx \frac{60}{2 \pi K} \cdot U</div>
                <p>C'est ce principe qui est utilisé dans les hacheurs (PWM) et variateurs de vitesse électroniques.</p>
            </div>

            <div class="cours-section reveal" id="tp-mcc-s5">
                <span class="section-label">Section V</span>
                <h2 class="section-heading">Bilan de Puissance & Rendement</h2>
                <ul>
                    <li><strong>Puissance absorbée (électrique) :</strong> $P_a = U \cdot I$</li>
                    <li><strong>Pertes par effet Joule (induit) :</strong> $P_j = R \cdot I^2$</li>
                    <li><strong>Puissance électromagnétique :</strong> $P_{em} = E \cdot I = T_{em} \cdot \Omega$</li>
                    <li><strong>Puissance utile (mécanique) :</strong> $P_u = T_u \cdot \Omega$</li>
                </ul>
                <div class="math-formula">\eta = \frac{P_u}{P_a} = \frac{T_u \cdot \Omega}{U \cdot I}</div>
            </div>

            <div class="cours-section reveal" id="tp-mcc-s6" style="background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.2); padding: 20px; border-radius: 12px; margin-top: 20px;">
                <h3 style="color: #10b981; font-family: 'Outfit', sans-serif;">Simulateur Virtuel Moteur à Courant Continu</h3>
                <p>Faites tourner le rotor en temps réel, ajustez $U$ et le couple de charge $T_L$, et analysez les courbes de vitesse $N(U)$ et de rendement $\eta(I)$.</p>
                <button class="btn btn-primary" onclick="navigateToAnim('moteur-cc')" style="margin-top: 10px; cursor: pointer;">
                    Lancer l'Animation Interactive dans le Labo Virtuel ⚡
                </button>
            </div>
        `,
        exercises: [
            {
                title: "Exercice 1 : Calcul du rendement et de la f.é.m. d'un moteur CC",
                statement: "Un moteur à courant continu alimenté sous U = 24 V absorbe un courant I = 5 A. Sa résistance d'induit est R = 0.8 Ω. La vitesse de rotation est N = 1500 tr/min. Calculer la f.é.m. E, la constante K, la puissance utile Pu et le rendement (on néglige les pertes mécaniques).",
                solution: "1. f.é.m. E = U - R × I = 24 - (0.8 × 5) = 24 - 4 = <strong>20 V</strong>.<br>2. Vitesse angulaire : Ω = (2π × 1500) / 60 = 157.08 rad/s.<br>3. Constante K = E / Ω = 20 / 157.08 = <strong>0.127 V·s/rad</strong>.<br>4. Puissance absorbée : Pa = U × I = 24 × 5 = 120 W.<br>5. Puissance utile : Pu = E × I = 20 × 5 = 100 W.<br>6. Rendement : η = Pu / Pa = 100 / 120 = <strong>83.3 %</strong>."
            }
        ],
        exams: [
            { title: "TP Électrotechnique - Machine à Courant Continu et Variateur de Vitesse", type: "Pratique", year: 2024 }
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


// --- METHOD SUBCARDS ROUTING MAP ---
const METHOD_SUBCARDS_MAP = {
    "sol-gel-spin-coating": { title: "Sol-Gel / Spin Coating", category: "Experimental Methods", desc: "Préparation sol-gel organométallique et dépôt de couches minces par étalement centrifuge (Spin-Coating)." },
    "cbd": { title: "Chemical Bath Deposition (CBD)", category: "Experimental Methods", desc: "Dépôt par bain chimique en milieu aqueux." },
    "electrochemical-deposition": { title: "Electrochemical Deposition", category: "Experimental Methods", desc: "Électrodéposition et réduction électrochimique sur substrat conducteur." },
    "silar": { title: "SILAR", category: "Experimental Methods", desc: "Adsorption et réaction successives d'ions en couches atomiques." },
    "sputtering": { title: "Sputtering", category: "Experimental Methods", desc: "Pulvérisation cathodique radiofréquence (RF) / magnetron." },
    "thermal-evaporation": { title: "Thermal Evaporation", category: "Experimental Methods", desc: "Évaporation thermique sous vide poussé." },
    "cvd-mocvd": { title: "CVD / MOCVD", category: "Experimental Methods", desc: "Dépôt chimique en phase vapeur à précurseurs organométalliques." },
    "pld": { title: "Pulsed Laser Deposition (PLD)", category: "Experimental Methods", desc: "Ablation et dépôt par laser pulsé UV." },
    "other-deposition": { title: "Other Thin-Film Deposition Techniques", category: "Experimental Methods", desc: "Autres méthodes d'élaboration et de croissance de films minces." },
    "xrd": { title: "XRD (X-Ray Diffraction)", category: "Thin-Film Characterization", desc: "Diffraction des Rayons X pour l'analyse de la structure cristalline." },
    "sem": { title: "SEM (Scanning Electron Microscopy)", category: "Thin-Film Characterization", desc: "Microscopie électronique à balayage (MEB) pour la morphologie de surface." },
    "tem": { title: "TEM (Transmission Electron Microscopy)", category: "Thin-Film Characterization", desc: "Microscopie électronique en transmission haute résolution." },
    "afm": { title: "AFM (Atomic Force Microscopy)", category: "Thin-Film Characterization", desc: "Microscopie à force atomique et rugométrie nanométrique." },
    "uv-vis": { title: "UV-Vis Spectroscopy", category: "Thin-Film Characterization", desc: "Spectroscopie d'absorption et de transmittance UV-Visible." },
    "photoluminescence": { title: "Photoluminescence (PL)", category: "Thin-Film Characterization", desc: "Émission photoluminescente et recombinaison radiative." },
    "raman": { title: "Raman Spectroscopy", category: "Thin-Film Characterization", desc: "Spectroscopie Raman et modes de vibration de réseau (phonons)." },
    "ftir": { title: "FTIR (Fourier Transform Infrared)", category: "Thin-Film Characterization", desc: "Spectroscopie infrarouge à transformée de Fourier." },
    "xps": { title: "XPS (X-Ray Photoelectron Spectroscopy)", category: "Thin-Film Characterization", desc: "Analyse chimique de surface et états d'oxydation des éléments." },
    "eds-edx": { title: "EDS / EDX", category: "Thin-Film Characterization", desc: "Microanalyse élémentaire par dispersion d'énergie X." },
    "hall-effect": { title: "Hall Effect", category: "Thin-Film Characterization", desc: "Mesures d'effet Hall : concentration et mobilité des porteurs." },
    "four-point-probe": { title: "Four-Point Probe", category: "Thin-Film Characterization", desc: "Mesure de la résistance carrée (Sheet Resistance)." },
    "iv-cv-measurements": { title: "I-V and C-V Measurements", category: "Thin-Film Characterization", desc: "Caractérisation courant-tension et capacité-tension." },
    "vsm": { title: "VSM (Vibrating Sample Magnetometer)", category: "Thin-Film Characterization", desc: "Magnétométrie à échantillon vibrant pour cycles d'hystérésis." },
    "squid": { title: "SQUID Magnetometry", category: "Thin-Film Characterization", desc: "Mesure magnétique ultra-sensible à dispositif supraconducteur." },
    "other-characterization": { title: "Other Characterization Techniques", category: "Thin-Film Characterization", desc: "Autres méthodes de caractérisation physique et chimique." },
    "wien2k": { title: "WIEN2k", category: "Numerical Approaches (DFT)", desc: "Code DFT full-potential (L)APW + local orbitals pour les solides." },
    "quantum-espresso": { title: "Quantum ESPRESSO", category: "Numerical Approaches (DFT)", desc: "Suite open-source DFT en ondes planes et pseudopotentiels." },
    "spr-kkr": { title: "SPR-KKR", category: "Numerical Approaches (DFT)", desc: "Calculs de structure électronique Korringa-Kohn-Rostoker avec désordre." },
    "vasp": { title: "VASP", category: "Numerical Approaches (DFT)", desc: "Vienna Ab initio Simulation Package pour calculs de dynamique moléculaire et DFT." },
    "siesta": { title: "SIESTA", category: "Numerical Approaches (DFT)", desc: "Calculs DFT ab-initio rapides à bases d'orbitales atomiques strictly localisées." },
    "boltztrap": { title: "BoltzTraP", category: "Numerical Approaches (DFT)", desc: "Calculs des propriétés de transport semi-classiques (Seebeck, conductivité)." },
    "phonopy": { title: "Phonopy", category: "Numerical Approaches (DFT)", desc: "Calculs des spectres de phonons et stabilité thermodynamique." },
    "visualization-tools": { title: "Visualization Tools (VESTA, XCrySDen, Avogadro)", category: "Numerical Approaches (DFT)", desc: "Logiciels de visualisation 3D des structures cristallines et densités électroniques." }
};

// --- ROUTER ENGINE ---
let isNavigatingFromRouter = false;

function buildCoursesURL(level = "all", subject = "all", search = "") {
    let params = [];
    if (level && level !== "all") params.push(`level=${encodeURIComponent(level)}`);
    if (subject && subject !== "all") params.push(`subject=${encodeURIComponent(subject)}`);
    if (search && search.trim() !== "") params.push(`search=${encodeURIComponent(search.trim())}`);
    let q = params.length > 0 ? "?" + params.join("&") : "";
    return "/#courses" + q;
}

function syncURL(targetUrl, replace = false) {
    if (!targetUrl) return;
    const currentFull = window.location.pathname + window.location.search + window.location.hash;
    if (currentFull === targetUrl || window.location.hash === targetUrl) return;

    try {
        if (replace) {
            history.replaceState(null, "", targetUrl);
        } else {
            history.pushState(null, "", targetUrl);
        }
    } catch (e) {
        console.warn("History pushState failed, fallback to location.hash", e);
        if (targetUrl.includes("#")) {
            window.location.hash = targetUrl.substring(targetUrl.indexOf("#"));
        }
    }
}

function updateSEO({ title, description, url }) {
    if (title) {
        document.title = title;
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', title);
        let twitterTitle = document.querySelector('meta[name="twitter:title"]');
        if (twitterTitle) twitterTitle.setAttribute('content', title);
    }
    if (description) {
        let metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', description);
        let ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute('content', description);
    }
    if (url) {
        let canonical = document.querySelector('link[rel="canonical"]');
        let fullUrl = window.location.origin + (url.startsWith('/') ? url : '/' + url);
        if (canonical) {
            canonical.setAttribute('href', fullUrl);
        } else {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            canonical.setAttribute('href', fullUrl);
            document.head.appendChild(canonical);
        }
        let ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute('content', fullUrl);
    }
}

function parseLocation() {
    let hash = window.location.hash.replace(/^#\/?/, "");
    let pathname = window.location.pathname;
    
    let path = hash;
    if (!path && pathname && pathname !== "/" && !pathname.endsWith("index.html")) {
        path = pathname.replace(/^\/+|\/+$/g, "");
    }

    let searchStr = window.location.search;
    if (hash.includes("?")) {
        searchStr = "?" + hash.split("?")[1];
        path = path.split("?")[0];
    }
    const queryParams = new URLSearchParams(searchStr);

    if (!path || path === "home") {
        return { type: "home", params: queryParams };
    }

    const parts = path.split("/").filter(Boolean);
    const main = parts[0] ? parts[0].toLowerCase() : "home";

    if (main === "home") {
        return { type: "home", params: queryParams };
    }

    if (main === "courses" || main === "cours") {
        const level = parts[1] || queryParams.get("level") || "all";
        const subject = parts[2] || queryParams.get("subject") || "all";
        const search = queryParams.get("search") || "";
        return { type: "courses", level, subject, search, params: queryParams };
    }

    if (main === "course" || main === "chapter" || main === "chapitre") {
        const chapterId = parts[1] || queryParams.get("id");
        return { type: "course", chapterId, params: queryParams };
    }

    if (main === "animations" || main === "simulations") {
        if (parts[1]) {
            return { type: "simulation", animId: parts[1], params: queryParams };
        }
        return { type: "animations", params: queryParams };
    }

    if (main === "simulation" || main === "anim") {
        const animId = parts[1] || queryParams.get("id");
        return { type: "simulation", animId, params: queryParams };
    }

    if (main === "recherche" || main === "research") {
        if (parts[1]) {
            return { type: "recherche-method", subId: parts[1], params: queryParams };
        }
        const method = queryParams.get("method") || queryParams.get("subId");
        if (method) {
            return { type: "recherche-method", subId: method, params: queryParams };
        }
        return { type: "recherche", params: queryParams };
    }

    if (main === "method") {
        const subId = parts[1] || queryParams.get("id");
        return { type: "recherche-method", subId, params: queryParams };
    }

    // Direct ID checks
    if (typeof chaptersData !== "undefined" && chaptersData.some(c => c.id === main)) {
        return { type: "course", chapterId: main, params: queryParams };
    }

    const animCardMatches = document.querySelector(`.anim-card[data-anim="${main}"]`);
    if (animCardMatches) {
        return { type: "simulation", animId: main, params: queryParams };
    }

    if (METHOD_SUBCARDS_MAP[main]) {
        return { type: "recherche-method", subId: main, params: queryParams };
    }

    return { type: "home", params: queryParams };
}

function renderRoute(route, options = {}) {
    isNavigatingFromRouter = true;
    try {
        const { type } = route;

        if (type === "home") {
            switchTab("home", { skipUrlUpdate: true });
            closeChapterModal({ skipUrlUpdate: true });
            closeMethodPage({ skipUrlUpdate: true });
            showGallery({ skipUrlUpdate: true });
            updateSEO({
                title: "Maths et Physiques | Plateforme Éducative Moderne",
                description: "Plateforme éducative et scientifique d'excellence pour les Mathématiques, la Physique-Chimie et la Recherche Scientifique (DFT, Films minces).",
                url: "/"
            });
            if (options.updateUrl) syncURL("/", options.replaceUrl);
        } else if (type === "courses") {
            switchTab("courses", { skipUrlUpdate: true });
            closeChapterModal({ skipUrlUpdate: true });
            closeMethodPage({ skipUrlUpdate: true });

            const levelFilter = document.getElementById("levelFilter");
            const subjectFilter = document.getElementById("subjectFilter");
            const courseSearchInput = document.getElementById("courseSearchInput");

            if (levelFilter && route.level) levelFilter.value = route.level;
            if (subjectFilter && route.subject) subjectFilter.value = route.subject;
            if (courseSearchInput && route.search !== undefined) courseSearchInput.value = route.search;

            const lvlVal = levelFilter ? levelFilter.value : "all";
            const subjVal = subjectFilter ? subjectFilter.value : "all";
            const searchVal = courseSearchInput ? courseSearchInput.value.toLowerCase().trim() : "";

            if (document.getElementById("activeLevelLabel") && levelFilter) {
                document.getElementById("activeLevelLabel").textContent = levelFilter.options[levelFilter.selectedIndex].text;
            }
            if (document.getElementById("activeSubjectLabel") && subjectFilter) {
                document.getElementById("activeSubjectLabel").textContent = subjectFilter.options[subjectFilter.selectedIndex].text;
            }

            renderChapters(lvlVal, subjVal, searchVal);

            let url = buildCoursesURL(lvlVal, subjVal, searchVal);
            updateSEO({
                title: "Cours & Exercices - Mathématiques et Physique-Chimie | MATHS & PC",
                description: "Accédez à tous les cours, résumés, exercices corrigés et devoirs de Mathématiques et Physique-Chimie.",
                url: url
            });
            if (options.updateUrl) syncURL(url, options.replaceUrl);
        } else if (type === "course") {
            switchTab("courses", { skipUrlUpdate: true });
            closeMethodPage({ skipUrlUpdate: true });
            const chap = chaptersData.find(c => c.id === route.chapterId);
            if (chap) {
                openChapterModal(route.chapterId, { skipUrlUpdate: true });
                let url = `/#course/${route.chapterId}`;
                updateSEO({
                    title: `${chap.title} - ${chap.subject === "math" ? "Mathématiques" : "Physique-Chimie"} | MATHS & PC`,
                    description: `Cours, résumés, exercices corrigés et devoirs pour le chapitre ${chap.title}.`,
                    url: url
                });
                if (options.updateUrl) syncURL(url, options.replaceUrl);
            } else {
                renderRoute({ type: "courses" }, options);
            }
        } else if (type === "animations") {
            switchTab("animations", { skipUrlUpdate: true });
            showGallery({ skipUrlUpdate: true });
            closeChapterModal({ skipUrlUpdate: true });
            closeMethodPage({ skipUrlUpdate: true });
            let url = "/#animations";
            updateSEO({
                title: "Simulations & Laboratoires Virtuels - Physique & Maths | MATHS & PC",
                description: "Explorez des animations interactives 2D/3D et laboratoires virtuels pour la physique et les mathématiques.",
                url: url
            });
            if (options.updateUrl) syncURL(url, options.replaceUrl);
        } else if (type === "simulation") {
            switchTab("animations", { skipUrlUpdate: true });
            closeChapterModal({ skipUrlUpdate: true });
            closeMethodPage({ skipUrlUpdate: true });
            const animId = route.animId;
            const card = document.querySelector(`.anim-card[data-anim="${animId}"]`);
            const cardTitle = card ? card.querySelector("h3")?.textContent : animId;
            openAnimPlayer(animId, cardTitle, { skipUrlUpdate: true });
            let url = `/#simulation/${animId}`;
            updateSEO({
                title: `${cardTitle || "Simulation"} - Laboratoire Virtuel | MATHS & PC`,
                description: `Simulation interactive et expérience virtuelle de physique-chimie : ${cardTitle}.`,
                url: url
            });
            if (options.updateUrl) syncURL(url, options.replaceUrl);
        } else if (type === "recherche") {
            switchTab("recherche", { skipUrlUpdate: true });
            closeMethodPage({ skipUrlUpdate: true });
            closeChapterModal({ skipUrlUpdate: true });
            let url = "/#recherche";
            updateSEO({
                title: "Recherche Scientifique & DFT - Films Minces | MATHS & PC",
                description: "Méthodes expérimentales de dépôt de films minces, caractérisation et calculs ab-initio DFT.",
                url: url
            });
            if (options.updateUrl) syncURL(url, options.replaceUrl);
        } else if (type === "recherche-method") {
            switchTab("recherche", { skipUrlUpdate: true });
            closeChapterModal({ skipUrlUpdate: true });
            const subId = route.subId;
            const methodData = METHOD_SUBCARDS_MAP[subId];
            if (methodData) {
                openMethodPage(methodData.title, methodData.category, methodData.desc, { subId, skipUrlUpdate: true });
                let url = `/#recherche/${subId}`;
                updateSEO({
                    title: `${methodData.title} - Recherche Scientifique | MATHS & PC`,
                    description: methodData.desc || `Principes, protocoles et résultats pour ${methodData.title}.`,
                    url: url
                });
                if (options.updateUrl) syncURL(url, options.replaceUrl);
            } else {
                renderRoute({ type: "recherche" }, options);
            }
        }
    } finally {
        isNavigatingFromRouter = false;
    }
}

function setupRouterEvents() {
    window.addEventListener("popstate", () => {
        const route = parseLocation();
        renderRoute(route, { updateUrl: false });
    });

    window.addEventListener("hashchange", () => {
        const route = parseLocation();
        renderRoute(route, { updateUrl: false });
    });
}


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
    renderQuizWelcomeSelector();
    // Register Event Listeners
    setupNavigation();
    setupFilters();
    setupModals();
    setupAnimations();
    setupQuizEngine();
    setupInteractiveTools();
    setupProfileModal();
    setupRouterEvents();
    triggerMathJax();

    // Initial Routing Resolution
    const initialRoute = parseLocation();
    renderRoute(initialRoute, { updateUrl: true, replaceUrl: true });
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
            
            document.querySelectorAll(".user-name").forEach(el => {
                el.textContent = userState.userName;
            });
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
    let avgScore = 0;
    if (quizzesTaken > 0) {
        const totalScore = Object.values(userState.completedQuizzes).reduce((sum, score) => sum + score, 0);
        avgScore = Math.round(totalScore / quizzesTaken);
    }
    
    if (averageScoreTextEl) {
        averageScoreTextEl.textContent = `${avgScore}%`;
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
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mainHeader = document.querySelector(".main-header");

    function closeMobileMenu() {
        if (mainHeader && mainHeader.classList.contains("mobile-menu-open")) {
            mainHeader.classList.remove("mobile-menu-open");
            if (mobileMenuBtn) {
                mobileMenuBtn.innerHTML = '<i data-lucide="menu"></i>';
                if (window.lucide) lucide.createIcons();
            }
        }
    }

    if (mobileMenuBtn && mainHeader) {
        mobileMenuBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const isOpen = mainHeader.classList.toggle("mobile-menu-open");
            mobileMenuBtn.setAttribute("aria-expanded", isOpen);
            mobileMenuBtn.innerHTML = isOpen ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
            if (window.lucide) lucide.createIcons();
        });
    }

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
            closeMobileMenu();
        });
    });

    // Close dropdowns and mobile menu when clicking outside
    document.addEventListener("click", (e) => {
        document.querySelectorAll(".nav-dropdown").forEach(d => {
            d.classList.remove("active");
        });
        if (mainHeader && !mainHeader.contains(e.target)) {
            closeMobileMenu();
        }
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
            
            // Close containing dropdown and mobile menu
            const parent = item.closest(".nav-dropdown");
            if (parent) parent.classList.remove("active");
            closeMobileMenu();
        });
    });

    // Handle branding/logo click to go home
    document.querySelector(".logo").addEventListener("click", () => {
        switchTab("home");
        closeMobileMenu();
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

function switchTab(tabId, options = {}) {
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

    if (tabId === "recherche") {
        setupRechercheSection();
    }

    // Smooth scroll back to top of main view
    window.scrollTo({ top: 0, behavior: "smooth" });
    triggerMathJax();

    if (!options.skipUrlUpdate && !isNavigatingFromRouter) {
        let url = `/#${tabId}`;
        if (tabId === "home") url = "/";
        else if (tabId === "courses") {
            const levelFilter = document.getElementById("levelFilter");
            const subjectFilter = document.getElementById("subjectFilter");
            const courseSearchInput = document.getElementById("courseSearchInput");
            url = buildCoursesURL(
                levelFilter ? levelFilter.value : "all",
                subjectFilter ? subjectFilter.value : "all",
                courseSearchInput ? courseSearchInput.value : ""
            );
        }
        syncURL(url);
    }
}

function triggerMathJax() {
    setTimeout(() => {
        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise().catch(err => console.warn(err));
        }
    }, 100);
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

        if (!isNavigatingFromRouter) {
            let targetUrl = buildCoursesURL(activeLevel, activeSubject, searchQuery);
            syncURL(targetUrl, true);
        }
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

window.openChapterModal = function(chapterId, options = {}) {
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
                    <button class="ex-toggle-btn"><i data-lucide="chevron-down" id="ex-arrow-${index}" style="transition: transform var(--transition-fast, 0.2s);"></i></button>
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
    setupInteractiveTools();

    // Trigger MathJax Typesetting for math equations inside the course summary
    setTimeout(() => {
        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise().catch(err => console.warn(err));
        }
    }, 100);
};

function closeChapterModal(options = {}) {
    const modal = document.getElementById("lessonModal");
    if (modal) modal.classList.remove("active");
    document.body.style.overflow = ""; // Re-enable background scroll
    currentOpenChapterId = null;

    if (!options.skipUrlUpdate && !isNavigatingFromRouter) {
        const levelFilter = document.getElementById("levelFilter");
        const subjectFilter = document.getElementById("subjectFilter");
        const courseSearchInput = document.getElementById("courseSearchInput");
        let targetUrl = buildCoursesURL(
            levelFilter ? levelFilter.value : "all",
            subjectFilter ? subjectFilter.value : "all",
            courseSearchInput ? courseSearchInput.value : ""
        );
        syncURL(targetUrl);
    }
}

window.toggleExerciseAccordion = function(index) {
    const body = document.getElementById(`ex-body-${index}`);
    const arrow = document.getElementById(`ex-arrow-${index}`);
    
    if (body.style.display === "none") {
        body.style.display = "block";
        if (arrow) arrow.style.transform = "rotate(180deg)";
    } else {
        body.style.display = "none";
        if (arrow) arrow.style.transform = "rotate(0deg)";
    }
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

// --- GLOBAL ANIMATION SETTINGS ---
let animPrimaryColor = "#10b981";
let animSecondaryColor = "#c87f0a";
let animScaleMultiplier = 1.0;
let animCanvasHeight = 400;

// --- INTERACTIVE ANIMATIONS ENGINE ---
function setupAnimations() {
    // 1. Color Picker Controls
    const primaryColorBtns = document.querySelectorAll(".color-btn");
    primaryColorBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            primaryColorBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            animPrimaryColor = btn.getAttribute("data-color");
            document.documentElement.style.setProperty("--primary", animPrimaryColor);
            document.documentElement.style.setProperty("--primary-hover", animPrimaryColor + "dd");
        });
    });

    const secondaryColorBtns = document.querySelectorAll(".color-btn-sec");
    secondaryColorBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            secondaryColorBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            animSecondaryColor = btn.getAttribute("data-color");
            document.documentElement.style.setProperty("--secondary", animSecondaryColor);
        });
    });

    // 2. Zoom & Height Sliders
    const zoomSlider = document.getElementById("anim-zoom-slider");
    const valZoom = document.getElementById("val-anim-zoom");
    if (zoomSlider && valZoom) {
        zoomSlider.addEventListener("input", (e) => {
            const zoomVal = parseInt(e.target.value);
            valZoom.textContent = zoomVal;
            animScaleMultiplier = zoomVal / 100;
        });
    }

    const heightSlider = document.getElementById("anim-height-slider");
    const valHeight = document.getElementById("val-anim-height");
    if (heightSlider && valHeight) {
        heightSlider.addEventListener("input", (e) => {
            const hVal = parseInt(e.target.value);
            valHeight.textContent = hVal;
            animCanvasHeight = hVal;
            
            // Resize all canvases dynamically
            document.querySelectorAll(".canvas-container canvas").forEach(canvas => {
                canvas.height = hVal;
            });
        });
    }

    // 3. Visual Gallery Cards & Player View Engine
    const galleryView = document.getElementById("anim-gallery-view");
    const playerView = document.getElementById("anim-player-view");
    const btnBackToGallery = document.getElementById("btn-back-to-gallery");
    const activeTitleSpan = document.getElementById("anim-active-title");
    const searchInput = document.getElementById("anim-search-input");
    const filterBtns = document.querySelectorAll(".anim-filter-btn");
    const animCards = document.querySelectorAll(".anim-card");

    function openAnimPlayer(targetAnim, cardTitle, options = {}) {
        if (!galleryView || !playerView) return;

        galleryView.style.display = "none";
        playerView.style.display = "block";

        if (activeTitleSpan && cardTitle) {
            activeTitleSpan.textContent = cardTitle;
        }

        // Toggle active workspace
        document.querySelectorAll(".anim-workspace").forEach(workspace => {
            if (workspace.id === `anim-${targetAnim}`) {
                workspace.style.display = "flex";
                workspace.classList.add("active");

                const canvas = workspace.querySelector("canvas");
                if (canvas) canvas.height = animCanvasHeight;

                initCanvasFor(targetAnim);
                triggerMathJax();
            } else {
                workspace.style.display = "none";
                workspace.classList.remove("active");
            }
        });

        window.scrollTo({ top: playerView.offsetTop - 80, behavior: "smooth" });

        if (!options.skipUrlUpdate && !isNavigatingFromRouter) {
            syncURL(`/#simulation/${targetAnim}`);
            updateSEO({
                title: `${cardTitle || "Simulation"} - Laboratoire Virtuel | MATHS & PC`,
                description: `Simulation interactive et expérience virtuelle de physique-chimie : ${cardTitle}.`,
                url: `/#simulation/${targetAnim}`
            });
        }
    }

    function showGallery(options = {}) {
        if (!galleryView || !playerView) return;
        playerView.style.display = "none";
        galleryView.style.display = "block";
        window.scrollTo({ top: galleryView.offsetTop - 80, behavior: "smooth" });

        if (!options.skipUrlUpdate && !isNavigatingFromRouter) {
            syncURL("/#animations");
            updateSEO({
                title: "Simulations & Laboratoires Virtuels - Physique & Maths | MATHS & PC",
                description: "Explorez des animations interactives 2D/3D et laboratoires virtuels pour la physique et les mathématiques.",
                url: "/#animations"
            });
        }
    }

    // Attach click listeners to cards
    animCards.forEach(card => {
        card.addEventListener("click", () => {
            const targetAnim = card.getAttribute("data-anim");
            const cardTitle = card.querySelector("h3") ? card.querySelector("h3").textContent : "Laboratoire Virtuel";
            openAnimPlayer(targetAnim, cardTitle);
        });
    });

    // Back to gallery button
    if (btnBackToGallery) {
        btnBackToGallery.addEventListener("click", () => {
            showGallery();
        });
    }

    // Global navigation function
    window.navigateToAnim = function(animId) {
        renderRoute({ type: "simulation", animId: animId });
    };

    // 4. Search Filter Logic
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase().trim();
            const activeFilter = document.querySelector(".anim-filter-btn.active") ? document.querySelector(".anim-filter-btn.active").getAttribute("data-filter") : "all";

            animCards.forEach(card => {
                const title = card.querySelector("h3") ? card.querySelector("h3").textContent.toLowerCase() : "";
                const desc = card.querySelector("p") ? card.querySelector("p").textContent.toLowerCase() : "";
                const keywords = card.getAttribute("data-keywords") ? card.getAttribute("data-keywords").toLowerCase() : "";
                const cat = card.getAttribute("data-category");

                const matchesQuery = query === "" || title.includes(query) || desc.includes(query) || keywords.includes(query);
                const matchesCat = activeFilter === "all" || cat === activeFilter;

                if (matchesQuery && matchesCat) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }

    // 5. Category Filter Buttons
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterCat = btn.getAttribute("data-filter");
            const query = searchInput ? searchInput.value.toLowerCase().trim() : "";

            animCards.forEach(card => {
                const title = card.querySelector("h3") ? card.querySelector("h3").textContent.toLowerCase() : "";
                const desc = card.querySelector("p") ? card.querySelector("p").textContent.toLowerCase() : "";
                const keywords = card.getAttribute("data-keywords") ? card.getAttribute("data-keywords").toLowerCase() : "";
                const cat = card.getAttribute("data-category");

                const matchesQuery = query === "" || title.includes(query) || desc.includes(query) || keywords.includes(query);
                const matchesCat = filterCat === "all" || cat === filterCat;

                if (matchesQuery && matchesCat) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // Initialize document root styles to match the default picker values
    document.documentElement.style.setProperty("--primary", animPrimaryColor);
    document.documentElement.style.setProperty("--primary-hover", animPrimaryColor + "dd");
    document.documentElement.style.setProperty("--secondary", animSecondaryColor);
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
    } else if (type === "plotter") {
        setupPlotterSimulator();
    } else if (type === "focometrie") {
        setupFocometrieSimulator();
    } else if (type === "photovoltaique") {
        setupPhotovoltaiqueSimulator();
    } else if (type === "charge-electron") {
        setupChargeElectronSimulator();
    } else if (type === "diodes-redressement") {
        setupDiodesRedressementSimulator();
    } else if (type === "transistor-bipolaire") {
        setupTransistorBipolaireSimulator();
    } else if (type === "aop-amplificateur") {
        setupAopAmplificateurSimulator();
    } else if (type === "mesure-resistances") {
        setupMesureResistancesSimulator();
    } else if (type === "charge-decharge-rc") {
        setupChargeDechargeRcSimulator();
    } else if (type === "moteur-cc") {
        setupMoteurCcSimulator();
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

        const A = parseFloat(newAmp.value) * animScaleMultiplier;
        const f = parseFloat(newFreq.value);
        const v = parseFloat(newVel.value);
        
        if (wavePlaying) {
            waveTime += 0.03;
        }

        // Draw grid
        ctx.strokeStyle = "rgba(56, 189, 248, 0.04)";
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
        ctx.strokeStyle = "rgba(148, 163, 184, 0.2)";
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);
        ctx.lineTo(canvas.width, canvas.height / 2);
        ctx.stroke();

        // Draw wave
        ctx.strokeStyle = animPrimaryColor;
        ctx.lineWidth = 3 * animScaleMultiplier;
        ctx.shadowColor = animPrimaryColor + "66";
        ctx.shadowBlur = 8 * animScaleMultiplier;
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
        ctx.fillStyle = animSecondaryColor;
        ctx.beginPath();
        let sourceY = canvas.height / 2;
        if (waveTime > 0) {
            sourceY += A * Math.sin(2 * Math.PI * f * waveTime);
        }
        ctx.arc(startX, sourceY, 8 * animScaleMultiplier, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = animSecondaryColor;
        ctx.lineWidth = 2 * animScaleMultiplier;
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

        const groundY = Math.round(canvas.height * 0.45);
        const speakerY = groundY - 40 * animScaleMultiplier;
        const microY = groundY - 40 * animScaleMultiplier;
        const oscYStart = Math.round(canvas.height * 0.6);
        const oscHeight = Math.round(canvas.height * 0.35);
        const oscY = Math.round(oscYStart + oscHeight / 2);
        const oscWidth = canvas.width - 80;

        // Ground line
        ctx.strokeStyle = animPrimaryColor + "66"; // semi-transparent green
        ctx.lineWidth = 2.5 * animScaleMultiplier;
        ctx.beginPath();
        ctx.moveTo(0, groundY);
        ctx.lineTo(canvas.width, groundY);
        ctx.stroke();

        // Speaker
        ctx.fillStyle = "#16231e"; // dark green tint
        ctx.fillRect(speakerX - 25 * animScaleMultiplier, speakerY, 20 * animScaleMultiplier, 35 * animScaleMultiplier);
        ctx.strokeStyle = animPrimaryColor;
        ctx.lineWidth = 2 * animScaleMultiplier;
        ctx.strokeRect(speakerX - 25 * animScaleMultiplier, speakerY, 20 * animScaleMultiplier, 35 * animScaleMultiplier);
        
        ctx.fillStyle = "#0c1512";
        ctx.beginPath();
        ctx.moveTo(speakerX - 5 * animScaleMultiplier, speakerY - 5 * animScaleMultiplier);
        ctx.lineTo(speakerX + 15 * animScaleMultiplier, speakerY - 15 * animScaleMultiplier);
        ctx.lineTo(speakerX + 15 * animScaleMultiplier, speakerY + 50 * animScaleMultiplier);
        ctx.lineTo(speakerX - 5 * animScaleMultiplier, speakerY + 40 * animScaleMultiplier);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Micro 1
        ctx.fillStyle = animPrimaryColor;
        ctx.fillRect(m1X - 4 * animScaleMultiplier, microY + 5 * animScaleMultiplier, 8 * animScaleMultiplier, 30 * animScaleMultiplier);
        ctx.beginPath();
        ctx.arc(m1X, microY, 8 * animScaleMultiplier, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = animPrimaryColor;
        ctx.font = `bold ${Math.round(12 * animScaleMultiplier)}px sans-serif`;
        ctx.fillText("M1", m1X - 7 * animScaleMultiplier, microY - 14 * animScaleMultiplier);

        // Micro 2
        ctx.fillStyle = animSecondaryColor;
        ctx.fillRect(m2X - 4 * animScaleMultiplier, microY + 5 * animScaleMultiplier, 8 * animScaleMultiplier, 30 * animScaleMultiplier);
        ctx.beginPath();
        ctx.arc(m2X, microY, 8 * animScaleMultiplier, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = animSecondaryColor;
        ctx.font = `bold ${Math.round(12 * animScaleMultiplier)}px sans-serif`;
        ctx.fillText("M2", m2X - 7 * animScaleMultiplier, microY - 14 * animScaleMultiplier);

        // Distance dimension
        ctx.strokeStyle = animPrimaryColor;
        ctx.lineWidth = 2 * animScaleMultiplier;
        ctx.beginPath();
        ctx.moveTo(m1X, groundY - 5);
        ctx.lineTo(m1X, groundY + 20 * animScaleMultiplier);
        ctx.moveTo(m2X, groundY - 5);
        ctx.lineTo(m2X, groundY + 20 * animScaleMultiplier);
        ctx.moveTo(m1X, groundY + 10 * animScaleMultiplier);
        ctx.lineTo(m2X, groundY + 10 * animScaleMultiplier);
        ctx.stroke();
        ctx.fillStyle = animPrimaryColor;
        ctx.font = `bold ${Math.round(12 * animScaleMultiplier)}px sans-serif`;
        ctx.fillText(`d = ${d} mm`, (m1X + m2X)/2 - 30 * animScaleMultiplier, groundY + 25 * animScaleMultiplier);

        // Sound pulse
        if (delayPlaying) {
            const frameSpeed = (v / 340) * 8;
            delaySoundPos += frameSpeed;

            ctx.strokeStyle = "rgba(148, 163, 184, 0.25)";
            ctx.lineWidth = 3 * animScaleMultiplier;
            ctx.beginPath();
            ctx.arc(speakerX, speakerY + 17 * animScaleMultiplier, delaySoundPos - speakerX, -Math.PI/3, Math.PI/3);
            ctx.stroke();

            const distFromSpeaker = delaySoundPos - speakerX;
            const distM1 = m1X - speakerX;
            const distM2 = m2X - speakerX;

            let val1 = 0;
            if (distFromSpeaker >= distM1 && distFromSpeaker < distM1 + 60 * animScaleMultiplier) {
                const phase = (distFromSpeaker - distM1) / (60 * animScaleMultiplier) * Math.PI * 6;
                val1 = Math.sin(phase) * Math.exp(-(distFromSpeaker - distM1)/(18 * animScaleMultiplier));
            }
            delayMicro1Data.push(val1);

            let val2 = 0;
            if (distFromSpeaker >= distM2 && distFromSpeaker < distM2 + 60 * animScaleMultiplier) {
                const phase = (distFromSpeaker - distM2) / (60 * animScaleMultiplier) * Math.PI * 6;
                val2 = Math.sin(phase) * Math.exp(-(distFromSpeaker - distM2)/(18 * animScaleMultiplier));
            }
            delayMicro2Data.push(val2);

            if (delaySoundPos > canvas.width + 50) {
                delayPlaying = false;
            }
        } else {
            delayMicro1Data.push(0);
            delayMicro2Data.push(0);
        }

        if (delayMicro1Data.length > oscWidth) delayMicro1Data.shift();
        if (delayMicro2Data.length > oscWidth) delayMicro2Data.shift();

        // Oscilloscope Graph
        ctx.fillStyle = "#020617";
        ctx.fillRect(40, oscYStart, oscWidth, oscHeight);
        ctx.strokeStyle = "rgba(56, 189, 248, 0.08)";
        ctx.lineWidth = 1;
        
        for (let x = 40; x <= canvas.width - 40; x += 40) {
            ctx.beginPath();
            ctx.moveTo(x, oscYStart);
            ctx.lineTo(x, oscYStart + oscHeight);
            ctx.stroke();
        }
        for (let y = oscYStart; y <= oscYStart + oscHeight; y += 20) {
            ctx.beginPath();
            ctx.moveTo(40, y);
            ctx.lineTo(canvas.width - 40, y);
            ctx.stroke();
        }

        // Trace M1
        ctx.strokeStyle = animPrimaryColor;
        ctx.lineWidth = 2 * animScaleMultiplier;
        ctx.beginPath();
        const drawLen = Math.min(delayMicro1Data.length, oscWidth);
        const offset = Math.max(0, delayMicro1Data.length - oscWidth);
        for (let i = 0; i < drawLen; i++) {
            const dataVal = delayMicro1Data[offset + i];
            ctx.lineTo(40 + i, oscY - dataVal * (oscHeight * 0.32));
        }
        ctx.stroke();

        // Trace M2
        ctx.strokeStyle = animSecondaryColor;
        ctx.lineWidth = 2 * animScaleMultiplier;
        ctx.beginPath();
        for (let i = 0; i < drawLen; i++) {
            const dataVal = delayMicro2Data[offset + i];
            ctx.lineTo(40 + i, oscY - dataVal * (oscHeight * 0.32));
        }
        ctx.stroke();

        ctx.fillStyle = "#cbd5e1";
        ctx.font = `${Math.round(11 * animScaleMultiplier)}px sans-serif`;
        ctx.fillText("Oscilloscope Virtuel (CH1 = M1, CH2 = M2)", 50, oscYStart + 15 * animScaleMultiplier);
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

        const startPlaneX = 80;
        const startPlaneY = Math.round(canvas.height * 0.8);
        const planeLength = Math.round(canvas.width * 0.8);
        const endPlaneX = startPlaneX + planeLength * Math.cos(theta);
        const endPlaneY = startPlaneY - planeLength * Math.sin(theta);

        if (newtonIsRunning) {
            const dt = 0.05;
            newtonV += acceleration * dt * 25;
            newtonX += newtonV * dt;
            const limitX = planeLength - 100;
            if (newtonX > limitX) {
                newtonX = limitX;
                newtonV = 0;
                newtonIsRunning = false;
                newPlay.innerHTML = '<i data-lucide="play"></i> Lancer';
                lucide.createIcons();
            }
        }

        // Ground line
        ctx.strokeStyle = animPrimaryColor + "66";
        ctx.lineWidth = 3 * animScaleMultiplier;
        ctx.beginPath();
        ctx.moveTo(startPlaneX - 50, startPlaneY);
        ctx.lineTo(startPlaneX + planeLength + 50, startPlaneY);
        ctx.stroke();

        // Plane line
        ctx.strokeStyle = animPrimaryColor;
        ctx.lineWidth = 6 * animScaleMultiplier;
        ctx.beginPath();
        ctx.moveTo(startPlaneX, startPlaneY);
        ctx.lineTo(endPlaneX, endPlaneY);
        ctx.stroke();

        // Angle Arc
        ctx.strokeStyle = animSecondaryColor;
        ctx.lineWidth = 2 * animScaleMultiplier;
        ctx.beginPath();
        ctx.arc(startPlaneX, startPlaneY, 40 * animScaleMultiplier, -theta, 0);
        ctx.stroke();
        ctx.fillStyle = animSecondaryColor;
        ctx.font = `bold ${Math.round(12 * animScaleMultiplier)}px sans-serif`;
        ctx.fillText(`θ = ${angleDeg}°`, startPlaneX + 50 * animScaleMultiplier, startPlaneY - 10 * animScaleMultiplier);

        // Block
        const blockX = startPlaneX + newtonX * Math.cos(theta);
        const blockY = startPlaneY - newtonX * Math.sin(theta);
        const blockW = 50 * animScaleMultiplier;
        const blockH = 30 * animScaleMultiplier;

        ctx.save();
        ctx.translate(blockX, blockY);
        ctx.rotate(-theta);
        ctx.fillStyle = animPrimaryColor + "44"; // transparent green fill
        ctx.fillRect(-blockW/2, -blockH, blockW, blockH);
        ctx.strokeStyle = animPrimaryColor;
        ctx.lineWidth = 2.5 * animScaleMultiplier;
        ctx.strokeRect(-blockW/2, -blockH, blockW, blockH);

        const cmY = -blockH/2;
        
        // Vector P (Gravity)
        ctx.save();
        ctx.rotate(theta);
        ctx.strokeStyle = "#f87171";
        ctx.lineWidth = 2.5 * animScaleMultiplier;
        ctx.beginPath();
        ctx.moveTo(0, cmY);
        ctx.lineTo(0, cmY + 55 * animScaleMultiplier);
        ctx.stroke();
        ctx.fillStyle = "#f87171";
        ctx.beginPath();
        ctx.moveTo(-5 * animScaleMultiplier, cmY + 50 * animScaleMultiplier);
        ctx.lineTo(5 * animScaleMultiplier, cmY + 50 * animScaleMultiplier);
        ctx.lineTo(0, cmY + 57 * animScaleMultiplier);
        ctx.fill();
        ctx.font = `bold ${Math.round(11 * animScaleMultiplier)}px sans-serif`;
        ctx.fillStyle = "#f87171";
        ctx.fillText("P", 8 * animScaleMultiplier, cmY + 50 * animScaleMultiplier);
        ctx.restore();

        // Vector RN (Normal Reaction)
        ctx.strokeStyle = "#60a5fa";
        ctx.lineWidth = 2.5 * animScaleMultiplier;
        ctx.beginPath();
        ctx.moveTo(0, cmY);
        ctx.lineTo(0, cmY - 45 * animScaleMultiplier);
        ctx.stroke();
        ctx.fillStyle = "#60a5fa";
        ctx.beginPath();
        ctx.moveTo(-5 * animScaleMultiplier, cmY - 40 * animScaleMultiplier);
        ctx.lineTo(5 * animScaleMultiplier, cmY - 40 * animScaleMultiplier);
        ctx.lineTo(0, cmY - 47 * animScaleMultiplier);
        ctx.fill();
        ctx.fillStyle = "#60a5fa";
        ctx.font = `bold ${Math.round(11 * animScaleMultiplier)}px sans-serif`;
        ctx.fillText("RN", 8 * animScaleMultiplier, cmY - 40 * animScaleMultiplier);

        // Vector f (Friction force)
        const fLength = mu * 45 * animScaleMultiplier;
        if (fLength > 0) {
            ctx.strokeStyle = animSecondaryColor;
            ctx.lineWidth = 2.5 * animScaleMultiplier;
            ctx.beginPath();
            ctx.moveTo(0, cmY);
            ctx.lineTo(-fLength, cmY);
            ctx.stroke();
            ctx.fillStyle = animSecondaryColor;
            ctx.beginPath();
            ctx.moveTo(-fLength + 5 * animScaleMultiplier, cmY - 5 * animScaleMultiplier);
            ctx.lineTo(-fLength + 5 * animScaleMultiplier, cmY + 5 * animScaleMultiplier);
            ctx.lineTo(-fLength, cmY);
            ctx.fill();
            ctx.fillStyle = animSecondaryColor;
            ctx.fillText("f", -fLength - 12 * animScaleMultiplier, cmY - 5 * animScaleMultiplier);
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

        const diagX = 20;
        const diagY = Math.round(canvas.height * 0.28);
        const diagW = Math.round(canvas.width * 0.38);
        const diagH = Math.round(canvas.height * 0.45);

        const oscX = Math.round(canvas.width * 0.47);
        const oscY = Math.round(canvas.height * 0.2);
        const oscW = Math.round(canvas.width * 0.5);
        const oscH = Math.round(canvas.height * 0.65);

        rcVoltsData.push(uc);
        if (rcVoltsData.length > oscW - 40) {
            rcVoltsData.shift();
        }

        ctx.strokeStyle = animPrimaryColor;
        ctx.lineWidth = 2.5 * animScaleMultiplier;
        ctx.strokeRect(diagX, diagY, diagW, diagH);

        // Generator E
        ctx.fillStyle = "#0b0f19";
        ctx.fillRect(diagX - 15 * animScaleMultiplier, diagY + diagH/2 - 20 * animScaleMultiplier, 30 * animScaleMultiplier, 40 * animScaleMultiplier);
        ctx.fillStyle = "#1e293b";
        ctx.beginPath();
        ctx.arc(diagX, diagY + diagH/2, 16 * animScaleMultiplier, 0, Math.PI*2);
        ctx.fill();
        ctx.strokeStyle = animPrimaryColor;
        ctx.lineWidth = 2.5 * animScaleMultiplier;
        ctx.stroke();
        ctx.fillStyle = animPrimaryColor;
        ctx.font = `bold ${Math.round(12 * animScaleMultiplier)}px sans-serif`;
        ctx.fillText("E", diagX - 5 * animScaleMultiplier, diagY + diagH/2 + 4 * animScaleMultiplier);

        // Switch K
        ctx.fillStyle = "#0b0f19";
        ctx.fillRect(diagX + 50 * animScaleMultiplier, diagY - 10 * animScaleMultiplier, 40 * animScaleMultiplier, 20 * animScaleMultiplier);
        ctx.strokeStyle = animPrimaryColor;
        ctx.lineWidth = 2.5 * animScaleMultiplier;
        ctx.beginPath();
        ctx.moveTo(diagX + 50 * animScaleMultiplier, diagY);
        ctx.lineTo(diagX + 65 * animScaleMultiplier, diagY);
        if (rcChargeMode) {
            ctx.lineTo(diagX + 85 * animScaleMultiplier, diagY);
        } else {
            ctx.lineTo(diagX + 80 * animScaleMultiplier, diagY - 12 * animScaleMultiplier);
        }
        ctx.moveTo(diagX + 90 * animScaleMultiplier, diagY);
        ctx.lineTo(diagX + 90 * animScaleMultiplier, diagY);
        ctx.stroke();
        ctx.fillStyle = animPrimaryColor;
        ctx.font = `bold ${Math.round(11 * animScaleMultiplier)}px sans-serif`;
        ctx.fillText("K", diagX + 65 * animScaleMultiplier, diagY - 18 * animScaleMultiplier);

        // Resistor R
        ctx.fillStyle = "#0b0f19";
        ctx.fillRect(diagX + diagW/2 - 30 * animScaleMultiplier, diagY - 15 * animScaleMultiplier, 60 * animScaleMultiplier, 30 * animScaleMultiplier);
        ctx.strokeStyle = animPrimaryColor;
        ctx.lineWidth = 2.5 * animScaleMultiplier;
        ctx.strokeRect(diagX + diagW/2 - 30 * animScaleMultiplier, diagY - 12 * animScaleMultiplier, 60 * animScaleMultiplier, 24 * animScaleMultiplier);
        ctx.fillStyle = animPrimaryColor;
        ctx.fillText(`R`, diagX + diagW/2 - 5 * animScaleMultiplier, diagY + 4 * animScaleMultiplier);

        // Capacitor C
        ctx.fillStyle = "#0b0f19";
        ctx.fillRect(diagX + diagW - 10 * animScaleMultiplier, diagY + diagH/2 - 25 * animScaleMultiplier, 20 * animScaleMultiplier, 50 * animScaleMultiplier);
        ctx.strokeStyle = animPrimaryColor;
        ctx.lineWidth = 2.5 * animScaleMultiplier;
        ctx.beginPath();
        ctx.moveTo(diagX + diagW - 6 * animScaleMultiplier, diagY + diagH/2 - 20 * animScaleMultiplier);
        ctx.lineTo(diagX + diagW - 6 * animScaleMultiplier, diagY + diagH/2 + 20 * animScaleMultiplier);
        ctx.moveTo(diagX + diagW + 6 * animScaleMultiplier, diagY + diagH/2 - 20 * animScaleMultiplier);
        ctx.lineTo(diagX + diagW + 6 * animScaleMultiplier, diagY + diagH/2 + 20 * animScaleMultiplier);
        ctx.stroke();
        ctx.fillStyle = animPrimaryColor;
        ctx.fillText(`C`, diagX + diagW - 5 * animScaleMultiplier, diagY + diagH/2 + 35 * animScaleMultiplier);

        // Voltage Arrow uc
        ctx.strokeStyle = animPrimaryColor;
        ctx.lineWidth = 2 * animScaleMultiplier;
        ctx.beginPath();
        ctx.moveTo(diagX + diagW + 20 * animScaleMultiplier, diagY + diagH/2 + 15 * animScaleMultiplier);
        ctx.lineTo(diagX + diagW + 20 * animScaleMultiplier, diagY + diagH/2 - 15 * animScaleMultiplier);
        ctx.stroke();
        ctx.fillStyle = animPrimaryColor;
        ctx.beginPath();
        ctx.moveTo(diagX + diagW + 17 * animScaleMultiplier, diagY + diagH/2 - 10 * animScaleMultiplier);
        ctx.lineTo(diagX + diagW + 23 * animScaleMultiplier, diagY + diagH/2 - 10 * animScaleMultiplier);
        ctx.lineTo(diagX + diagW + 20 * animScaleMultiplier, diagY + diagH/2 - 17 * animScaleMultiplier);
        ctx.fill();
        ctx.fillText("uc", diagX + diagW + 26 * animScaleMultiplier, diagY + diagH/2 + 4 * animScaleMultiplier);

        // Oscilloscope
        ctx.fillStyle = "#020617";
        ctx.fillRect(oscX, oscY, oscW, oscH);
        
        ctx.strokeStyle = "rgba(56, 189, 248, 0.08)";
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
        ctx.strokeStyle = animPrimaryColor;
        ctx.lineWidth = 3 * animScaleMultiplier;
        ctx.shadowColor = animPrimaryColor + "66";
        ctx.shadowBlur = 8 * animScaleMultiplier;
        ctx.beginPath();
        
        const startTraceX = oscX + 20;
        const baselineY = oscY + oscH - 25;
        
        for (let i = 0; i < rcVoltsData.length; i++) {
            const vVal = rcVoltsData[i];
            const traceX = startTraceX + i;
            const traceY = baselineY - (vVal / E) * (oscH * 0.77);
            if (i === 0) ctx.moveTo(traceX, traceY);
            else ctx.lineTo(traceX, traceY);
        }
        ctx.stroke();
        ctx.shadowBlur = 0;

        ctx.fillStyle = animSecondaryColor;
        ctx.font = `bold ${Math.round(11 * animScaleMultiplier)}px sans-serif`;
        ctx.fillText(rcChargeMode ? "Mode : Charge" : "Mode : Décharge", oscX + 20 * animScaleMultiplier, oscY + 30 * animScaleMultiplier);
        ctx.fillStyle = animPrimaryColor;
        ctx.fillText(`uc(t) = ${uc.toFixed(2)} V`, oscX + 20 * animScaleMultiplier, oscY + 50 * animScaleMultiplier);
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
        const chartY = Math.round(canvas.height * 0.8);
        const maxBarH = Math.round(canvas.height * 0.5);
        const startChartX = Math.round(canvas.width * 0.08);
        const barW = Math.round(50 * animScaleMultiplier);
        const spacingX = Math.round(90 * animScaleMultiplier);

        const gX = Math.round(canvas.width * 0.55);
        const gY = Math.round(canvas.height * 0.2);
        const gW = Math.round(canvas.width * 0.4);
        const gH = Math.round(canvas.height * 0.6);

        const species = [
            { label: "A", val: concA, color: "#ef4444" },
            { label: "B", val: concB, color: "#f87171" },
            { label: "C", val: concC, color: animPrimaryColor },
            { label: "D", val: concD, color: "#38bdf8" }
        ];

        ctx.strokeStyle = "rgba(148, 163, 184, 0.55)";
        ctx.lineWidth = 2 * animScaleMultiplier;
        ctx.beginPath();
        ctx.moveTo(40, chartY);
        ctx.lineTo(gX - 20, chartY);
        ctx.stroke();

        species.forEach((sp, idx) => {
            const barX = startChartX + idx * spacingX;
            const barH = (sp.val / 2.0) * maxBarH;

            ctx.fillStyle = sp.color;
            ctx.fillRect(barX, chartY - barH, barW, barH);
            ctx.strokeStyle = "#f8fafc";
            ctx.lineWidth = 1;
            ctx.strokeRect(barX, chartY - barH, barW, barH);

            ctx.fillStyle = "#f8fafc";
            ctx.font = `bold ${Math.round(12 * animScaleMultiplier)}px sans-serif`;
            ctx.fillText(sp.label, barX + (barW/2) - 5, chartY + 18 * animScaleMultiplier);
            ctx.font = `${Math.round(11 * animScaleMultiplier)}px sans-serif`;
            ctx.fillText(`${sp.val.toFixed(2)}`, barX + (barW/2) - 12, chartY - barH - 8 * animScaleMultiplier);
        });

        // Curve Graph (Right)
        ctx.fillStyle = "#020617";
        ctx.fillRect(gX, gY, gW, gH);
        ctx.strokeStyle = "rgba(148, 163, 184, 0.65)";
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
        ctx.font = `${Math.round(10 * animScaleMultiplier)}px sans-serif`;
        ctx.fillText(`K = ${K.toFixed(1)}`, gX + gW - 50 * animScaleMultiplier, kY - 4 * animScaleMultiplier);

        // Qr Trace
        ctx.strokeStyle = animPrimaryColor;
        ctx.lineWidth = 2.5 * animScaleMultiplier;
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

        ctx.fillStyle = "#cbd5e1";
        ctx.font = `bold ${Math.round(11 * animScaleMultiplier)}px sans-serif`;
        ctx.fillText("Quotient de Réaction Qr(t)", gX + 20 * animScaleMultiplier, gY + 30 * animScaleMultiplier);
        ctx.fillStyle = animPrimaryColor;
        ctx.fillText(`Qr = ${Qr.toFixed(2)}`, gX + 20 * animScaleMultiplier, gY + 52 * animScaleMultiplier);
    }

    if (eqInterval) clearInterval(eqInterval);
    eqInterval = setInterval(draw, 30);
    resetEquilibrium();
}

// 6. Function Plotter Simulator
let plotterInterval = null;
let plotterXProgress = -10;
let plotterDrawing = false;
let plotterMouseX = null;
let plotterMouseY = null;

function setupPlotterSimulator() {
    const canvas = document.getElementById("canvas-plotter");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const funcSelect = document.getElementById("plotter-func");
    const coeffSlider = document.getElementById("plotter-coeff");
    const btnDraw = document.getElementById("btn-plotter-draw");
    const btnClear = document.getElementById("btn-plotter-clear");

    const newFunc = funcSelect.cloneNode(true);
    funcSelect.parentNode.replaceChild(newFunc, funcSelect);
    const newCoeff = coeffSlider.cloneNode(true);
    coeffSlider.parentNode.replaceChild(newCoeff, coeffSlider);
    const newDraw = btnDraw.cloneNode(true);
    btnDraw.parentNode.replaceChild(newDraw, btnDraw);
    const newClear = btnClear.cloneNode(true);
    btnClear.parentNode.replaceChild(newClear, btnClear);

    let cachedCustomFn = null;

    function updateCustomFunc() {
        const expr = document.getElementById("plotter-custom-val").value;
        if (!expr || expr.trim() === "") {
            cachedCustomFn = null;
            return;
        }
        
        let processed = expr.replace(/\^/g, "**");
        processed = processed.replace(/\bpi\b/gi, "Math.PI");
        processed = processed.replace(/\be\b/gi, "Math.E");
        processed = processed.replace(/\bsin\b/g, "Math.sin");
        processed = processed.replace(/\bcos\b/g, "Math.cos");
        processed = processed.replace(/\btan\b/g, "Math.tan");
        processed = processed.replace(/\bexp\b/g, "Math.exp");
        processed = processed.replace(/\bln\b/g, "Math.log");
        processed = processed.replace(/\blog\b/g, "Math.log");
        processed = processed.replace(/\bsqrt\b/g, "Math.sqrt");
        processed = processed.replace(/\babs\b/g, "Math.abs");
        
        try {
            cachedCustomFn = new Function("x", "a", `
                try {
                    with (Math) {
                        return (${processed});
                    }
                } catch(e) {
                    return null;
                }
            `);
            cachedCustomFn(1, 1);
        } catch (e) {
            cachedCustomFn = null;
        }
    }

    newFunc.addEventListener("change", () => {
        const customContainer = document.getElementById("custom-func-container");
        if (newFunc.value === "custom") {
            if (customContainer) customContainer.style.display = "block";
            updateCustomFunc();
        } else {
            if (customContainer) customContainer.style.display = "none";
        }
        resetPlotter();
    });

    const customInput = document.getElementById("plotter-custom-val");
    if (customInput) {
        customInput.addEventListener("input", () => {
            updateCustomFunc();
            resetPlotter();
        });
    }
    newCoeff.addEventListener("input", (e) => {
        document.getElementById("val-plotter-coeff").textContent = e.target.value;
        resetPlotter();
    });

    newDraw.addEventListener("click", () => {
        plotterXProgress = -10;
        plotterDrawing = true;
    });

    newClear.addEventListener("click", () => {
        resetPlotter();
    });

    const rectOffset = () => canvas.getBoundingClientRect();
    canvas.addEventListener("mousemove", (e) => {
        const rect = rectOffset();
        plotterMouseX = e.clientX - rect.left;
        plotterMouseY = e.clientY - rect.top;
    });

    canvas.addEventListener("mouseleave", () => {
        plotterMouseX = null;
        plotterMouseY = null;
    });

    function resetPlotter() {
        plotterXProgress = -10;
        plotterDrawing = false;
    }

    const scaleX = 50 * animScaleMultiplier;
    const scaleY = 50 * animScaleMultiplier;
    const originX = canvas.width / 2; 
    const originY = canvas.height / 2; 

    function toPixels(x, y) {
        return {
            x: originX + x * scaleX,
            y: originY - y * scaleY
        };
    }

    function toMathX(pixelX) {
        return (pixelX - originX) / scaleX;
    }

    function evalFunc(name, x, a) {
        switch (name) {
            case "square":
                return { y: a * x * x, dy: 2 * a * x };
            case "exp":
                const valExp = a * x;
                if (valExp > 5 || valExp < -5) return null;
                return { y: Math.exp(valExp), dy: a * Math.exp(valExp) };
            case "ln":
                if (x + a <= 0.01) return null;
                return { y: Math.log(x + a), dy: 1 / (x + a) };
            case "sin":
                return { y: Math.sin(a * x), dy: a * Math.cos(a * x) };
            case "inverse":
                if (Math.abs(x) < 0.08) return null;
                return { y: a / x, dy: -a / (x * x) };
            case "custom":
                if (!cachedCustomFn) return null;
                const yVal = cachedCustomFn(x, a);
                if (yVal === null || typeof yVal !== "number" || isNaN(yVal) || !isFinite(yVal)) return null;
                
                // Calculate derivative numerically
                const h = 0.0001;
                const y1 = cachedCustomFn(x + h, a);
                const y2 = cachedCustomFn(x - h, a);
                
                if (y1 === null || y2 === null || typeof y1 !== "number" || typeof y2 !== "number" || isNaN(y1) || isNaN(y2)) {
                    return null;
                }
                
                const dyVal = (y1 - y2) / (2 * h);
                return { y: yVal, dy: dyVal };
            default:
                return null;
        }
    }

    function draw() {
        if (!canvas.offsetParent) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const fName = newFunc.value;
        const a = parseFloat(newCoeff.value);

        // Coordinate grid
        ctx.strokeStyle = "rgba(56, 189, 248, 0.04)";
        ctx.lineWidth = 1;
        for (let x = 0; x < canvas.width; x += scaleX) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
        }
        for (let y = 0; y < canvas.height; y += scaleY) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
        }

        // Axes
        ctx.strokeStyle = animPrimaryColor + "99";
        ctx.lineWidth = 2.5 * animScaleMultiplier;
        ctx.beginPath();
        ctx.moveTo(0, originY);
        ctx.lineTo(canvas.width, originY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(originX, 0);
        ctx.lineTo(originX, canvas.height);
        ctx.stroke();

        // Axis ticks & labels
        ctx.fillStyle = animPrimaryColor;
        ctx.font = `bold ${Math.round(9 * animScaleMultiplier)}px sans-serif`;
        const minTickX = -Math.floor(originX / scaleX);
        const maxTickX = Math.ceil((canvas.width - originX) / scaleX);
        for (let x = minTickX; x <= maxTickX; x++) {
            if (x === 0) continue;
            const px = toPixels(x, 0);
            ctx.fillRect(px.x - 1, originY - 4 * animScaleMultiplier, 2, 8 * animScaleMultiplier);
            ctx.fillText(x, px.x - 4, originY + 16 * animScaleMultiplier);
        }

        const minTickY = -Math.floor((canvas.height - originY) / scaleY);
        const maxTickY = Math.ceil(originY / scaleY);
        for (let y = minTickY; y <= maxTickY; y++) {
            if (y === 0) continue;
            const px = toPixels(0, y);
            ctx.fillRect(originX - 4 * animScaleMultiplier, px.y - 1, 8 * animScaleMultiplier, 2);
            ctx.fillText(y, originX + 8 * animScaleMultiplier, px.y + 3);
        }

        // Draw animation
        if (plotterDrawing) {
            plotterXProgress += 0.25;
            if (plotterXProgress > 10) {
                plotterXProgress = 10;
                plotterDrawing = false;
            }
        }

        // Draw curve
        ctx.strokeStyle = animPrimaryColor;
        ctx.lineWidth = 3 * animScaleMultiplier;
        ctx.shadowColor = animPrimaryColor + "4d";
        ctx.shadowBlur = 6 * animScaleMultiplier;
        ctx.beginPath();

        let firstPoint = true;
        const limitX = plotterDrawing ? plotterXProgress : 10;

        for (let pxX = 0; pxX < canvas.width; pxX += 2) {
            const mathX = toMathX(pxX);
            if (mathX > limitX) break;

            const res = evalFunc(fName, mathX, a);
            if (res) {
                const pxPt = toPixels(mathX, res.y);
                if (pxPt.y >= 0 && pxPt.y <= canvas.height) {
                    if (firstPoint) {
                        ctx.moveTo(pxPt.x, pxPt.y);
                        firstPoint = false;
                    } else {
                        ctx.lineTo(pxPt.x, pxPt.y);
                    }
                } else {
                    firstPoint = true; 
                }
            } else {
                firstPoint = true; 
            }
        }
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Tangent
        if (!plotterDrawing && plotterMouseX !== null) {
            const hoverMathX = toMathX(plotterMouseX);
            const res = evalFunc(fName, hoverMathX, a);

            if (res) {
                const pxPt = toPixels(hoverMathX, res.y);

                ctx.strokeStyle = animSecondaryColor;
                ctx.lineWidth = 1.5 * animScaleMultiplier;
                ctx.setLineDash([5, 3]);
                ctx.beginPath();

                const tStartX = hoverMathX - 3;
                const tEndX = hoverMathX + 3;
                const tStartY = res.dy * (tStartX - hoverMathX) + res.y;
                const tEndY = res.dy * (tEndX - hoverMathX) + res.y;

                ctx.moveTo(originX + tStartX * scaleX, originY - tStartY * scaleY);
                ctx.lineTo(originX + tEndX * scaleX, originY - tEndY * scaleY);
                ctx.stroke();
                ctx.setLineDash([]); 

                ctx.fillStyle = animSecondaryColor;
                ctx.beginPath();
                ctx.arc(pxPt.x, pxPt.y, 6 * animScaleMultiplier, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = animPrimaryColor;
                ctx.lineWidth = 1.5 * animScaleMultiplier;
                ctx.stroke();

                ctx.fillStyle = "rgba(15, 23, 42, 0.9)";
                ctx.strokeStyle = animPrimaryColor;
                ctx.lineWidth = 1.5 * animScaleMultiplier;
                const boxW = Math.round(160 * animScaleMultiplier);
                const boxH = Math.round(50 * animScaleMultiplier);
                let boxX = pxPt.x + 15 * animScaleMultiplier;
                let boxY = pxPt.y - 60 * animScaleMultiplier;
                
                if (boxX + boxW > canvas.width) boxX = pxPt.x - boxW - 15 * animScaleMultiplier;
                if (boxY < 10) boxY = pxPt.y + 15 * animScaleMultiplier;

                ctx.fillRect(boxX, boxY, boxW, boxH);
                ctx.strokeRect(boxX, boxY, boxW, boxH);

                ctx.fillStyle = animPrimaryColor;
                ctx.font = `bold ${Math.round(10 * animScaleMultiplier)}px sans-serif`;
                ctx.fillText(`Point M(${hoverMathX.toFixed(2)}, ${res.y.toFixed(2)})`, boxX + 10 * animScaleMultiplier, boxY + 18 * animScaleMultiplier);
                ctx.fillStyle = animSecondaryColor;
                ctx.fillText(`Nombre dérivé f'(x₀) = ${res.dy.toFixed(2)}`, boxX + 10 * animScaleMultiplier, boxY + 36 * animScaleMultiplier);
            }
        }
    }

    if (plotterInterval) clearInterval(plotterInterval);
    plotterInterval = setInterval(draw, 30);
    resetPlotter();
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

// 7. Focometrie Simulator
let focometrieInterval = null;
function setupFocometrieSimulator() {
    const canvas = document.getElementById("canvas-focometrie");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const methodSelect = document.getElementById("focometrie-method");
    const fSlider = document.getElementById("focometrie-f");
    const f2Slider = document.getElementById("focometrie-f2");
    const DSlider = document.getElementById("focometrie-D");
    const xLSlider = document.getElementById("focometrie-xL");
    const xOSlider = document.getElementById("focometrie-xO");
    const xSSlider = document.getElementById("focometrie-xS");
    const btnAuto = document.getElementById("btn-focometrie-auto");

    // Clean up event listeners by cloning nodes
    const newMethod = methodSelect.cloneNode(true);
    methodSelect.parentNode.replaceChild(newMethod, methodSelect);
    
    const newF = fSlider.cloneNode(true);
    fSlider.parentNode.replaceChild(newF, fSlider);
    
    const newF2 = f2Slider.cloneNode(true);
    f2Slider.parentNode.replaceChild(newF2, f2Slider);
    
    const newD = DSlider.cloneNode(true);
    DSlider.parentNode.replaceChild(newD, DSlider);
    
    const newXL = xLSlider.cloneNode(true);
    xLSlider.parentNode.replaceChild(newXL, xLSlider);
    
    const newXO = xOSlider.cloneNode(true);
    xOSlider.parentNode.replaceChild(newXO, xOSlider);
    
    const newXS = xSSlider.cloneNode(true);
    xSSlider.parentNode.replaceChild(newXS, xSSlider);
    
    const newAuto = btnAuto.cloneNode(true);
    btnAuto.parentNode.replaceChild(newAuto, btnAuto);

    // Initial variables
    let method = newMethod.value;
    let f1 = parseFloat(newF.value);
    let f2 = parseFloat(newF2.value);
    let D = parseFloat(newD.value);
    let xL = parseFloat(newXL.value);
    let xO = parseFloat(newXO.value);
    let xS = parseFloat(newXS.value);

    // Dragging state
    let dragElement = null; // 'lens1', 'screen', 'object'

    function getCoords() {
        const coords = {};
        coords.yAxis = 180;
        coords.yBench = 280;
        coords.xO = (method === "badal") ? xO : 100;
        coords.f1 = f1;
        coords.f2 = f2;
        
        if (method === "badal") {
            coords.xL1 = 250;
            coords.xL2 = coords.xL1 + f1;
            coords.xS = xS;
        } else {
            coords.xL1 = xL;
            coords.xL2 = null;
            if (method === "autocollimation") {
                coords.xS = coords.xO; // formed on the same plane
                coords.xM = xL + 40;
            } else {
                coords.xS = coords.xO + D;
            }
        }
        return coords;
    }

    function updateInputsVisibility() {
        method = newMethod.value;
        const gF = document.getElementById("group-focometrie-f");
        const gF2 = document.getElementById("group-focometrie-f2");
        const gD = document.getElementById("group-focometrie-D");
        const gXL = document.getElementById("group-focometrie-xL");
        const gXO = document.getElementById("group-focometrie-xO");
        const gXS = document.getElementById("group-focometrie-xS");
        
        // Default hide
        gF.style.display = "flex";
        gF2.style.display = "none";
        gD.style.display = "none";
        gXL.style.display = "none";
        gXO.style.display = "none";
        gXS.style.display = "none";
        
        // Show contextually
        if (method === "bessel") {
            gD.style.display = "flex";
            gXL.style.display = "flex";
            document.getElementById("label-focometrie-f").innerHTML = `Focale L (f) : <span id="val-focometrie-f">${f1}</span> mm`;
            document.getElementById("label-focometrie-D").innerHTML = `Distance D (Obj-Écran) : <span id="val-focometrie-D">${D}</span> mm`;
            document.getElementById("label-focometrie-xL").innerHTML = `Pos. Lentille L (x) : <span id="val-focometrie-xL">${xL}</span> mm`;
            newXL.min = 110;
            newXL.max = 100 + D - 10;
            newD.disabled = false;
            newXL.disabled = false;
        } else if (method === "silbermann") {
            gXL.style.display = "flex";
            document.getElementById("label-focometrie-f").innerHTML = `Focale L (f) : <span id="val-focometrie-f">${f1}</span> mm`;
            document.getElementById("label-focometrie-xL").innerHTML = `Pos. Lentille L (x) : <span id="val-focometrie-xL">${xL}</span> mm`;
            D = 4 * f1;
            newD.value = D;
            document.getElementById("val-focometrie-D").textContent = D;
            newXL.min = 110;
            newXL.max = 100 + D - 10;
            newXL.disabled = true; // locked at midpoint
            xL = 100 + D/2;
            newXL.value = xL;
            document.getElementById("val-focometrie-xL").textContent = xL;
        } else if (method === "autocollimation") {
            gXL.style.display = "flex";
            document.getElementById("label-focometrie-f").innerHTML = `Focale L (f) : <span id="val-focometrie-f">${f1}</span> mm`;
            document.getElementById("label-focometrie-xL").innerHTML = `Pos. Lentille L (x) : <span id="val-focometrie-xL">${xL}</span> mm`;
            newXL.min = 120;
            newXL.max = 350;
            newXL.disabled = false;
        } else if (method === "badal") {
            gF2.style.display = "flex";
            gXO.style.display = "flex";
            gXS.style.display = "flex";
            document.getElementById("label-focometrie-f").innerHTML = `Focale L1 (f1) : <span id="val-focometrie-f">${f1}</span> mm`;
        }
        
        updateCalculations();
        triggerMathJaxOnce();
    }

    let mathjaxTimeout = null;
    function triggerMathJaxOnce() {
        if (mathjaxTimeout) clearTimeout(mathjaxTimeout);
        mathjaxTimeout = setTimeout(() => {
            if (window.MathJax && window.MathJax.typesetPromise) {
                window.MathJax.typesetPromise().catch(err => console.warn(err));
            }
        }, 300);
    }

    function updateCalculations() {
        const c = getCoords();
        const theoryDiv = document.getElementById("focometrie-theory");
        if (!theoryDiv) return;

        if (method === "bessel") {
            const dSquare = D * D - 4 * f1 * D;
            let dText = "N/A";
            let fCalcText = "Distance D trop petite (D < 4f)";
            let dVal = 0;
            if (dSquare >= 0) {
                dVal = Math.sqrt(dSquare);
                dText = dVal.toFixed(1) + " mm";
                const fCalc = (D*D - dVal*dVal)/(4*D);
                fCalcText = fCalc.toFixed(1) + " mm";
            }
            theoryDiv.innerHTML = `
                <div class="theory-title" style="font-weight:700; font-size:1.1rem; margin-bottom:8px; color:var(--primary);"><i data-lucide="eye"></i> Méthode de Bessel</div>
                <p style="margin-bottom:8px;">Cette méthode permet de déterminer la focale d'une lentille convergente $L$ de focale $f$. 
                On fixe la distance $D$ entre l'objet $AB$ et l'écran de sorte que $D > 4f$. 
                En déplaçant la lentille, on trouve <strong>deux positions</strong> $x_1$ et $x_2$ pour lesquelles l'image sur l'écran est nette. 
                Si $d = |x_2 - x_1|$ est la distance entre ces deux positions :</p>
                <div class="equation-box" style="background:rgba(255,255,255,0.02); padding:10px; border-radius:8px; text-align:center; font-size:1.2rem; margin:10px 0; border:1px solid rgba(255,255,255,0.05);">$$f = \\frac{D^2 - d^2}{4D}$$</div>
                <p><strong>Mesures en direct :</strong><br>
                • Distance Objet-Écran $D = $ <strong style="color:var(--secondary);">${D}</strong> mm<br>
                • Distance entre les deux positions $d = $ <strong style="color:var(--secondary);">${dText}</strong><br>
                • Focale déduite $f_{calc} = $ <strong style="color:var(--primary); font-size:1.05rem;">${fCalcText}</strong></p>
            `;
        } else if (method === "silbermann") {
            const fCalc = D / 4;
            theoryDiv.innerHTML = `
                <div class="theory-title" style="font-weight:700; font-size:1.1rem; margin-bottom:8px; color:var(--primary);"><i data-lucide="eye"></i> Méthode de Silbermann</div>
                <p style="margin-bottom:8px;">Cas particulier de Bessel où l'objet et l'écran sont éloignés d'exactement $D = 4f$. 
                Les deux positions de la lentille se confondent alors au milieu ($d = 0$, soit $x_L = D/2 = 2f$). 
                L'image est nette, inversée et possède la même taille que l'objet (grandissement $\\gamma = -1$).</p>
                <div class="equation-box" style="background:rgba(255,255,255,0.02); padding:10px; border-radius:8px; text-align:center; font-size:1.2rem; margin:10px 0; border:1px solid rgba(255,255,255,0.05);">$$f = \\frac{D}{4} \\quad \\text{et} \\quad \\gamma = -1$$</div>
                <p><strong>Mesures en direct :</strong><br>
                • Distance Objet-Écran $D = $ <strong style="color:var(--secondary);">${D}</strong> mm (fixée à $4f$)<br>
                • Position idéale de la lentille $x_{milieu} = $ <strong style="color:var(--secondary);">${100 + D/2}</strong> mm<br>
                • Focale déduite $f_{calc} = $ <strong style="color:var(--primary); font-size:1.05rem;">${fCalc.toFixed(1)}</strong> mm</p>
            `;
        } else if (method === "autocollimation") {
            const dOL = xL - 100;
            theoryDiv.innerHTML = `
                <div class="theory-title" style="font-weight:700; font-size:1.1rem; margin-bottom:8px; color:var(--primary);"><i data-lucide="eye"></i> Méthode d'autocollimation</div>
                <p style="margin-bottom:8px;">On place un miroir plan juste derrière la lentille. Les rayons issus de l'objet traversent la lentille, se réfléchissent sur le miroir, et retraversent la lentille. 
                Lorsque l'objet est dans le plan focal de la lentille ($d_{OL} = f$), les rayons émergent parallèles, se réfléchissent normalement et reforment une image nette de même taille et inversée sur le plan de l'objet lui-même.</p>
                <div class="equation-box" style="background:rgba(255,255,255,0.02); padding:10px; border-radius:8px; text-align:center; font-size:1.2rem; margin:10px 0; border:1px solid rgba(255,255,255,0.05);">$$d_{OL} = f$$</div>
                <p><strong>Mesures en direct :</strong><br>
                • Distance Objet-Lentille $d_{OL} = $ <strong style="color:var(--secondary);">${dOL}</strong> mm (ajustez pour rendre l'image nette au plan de l'objet)<br>
                • Focale de la lentille réglée $f = $ <strong style="color:var(--primary); font-size:1.05rem;">${f1}</strong> mm</p>
            `;
        } else if (method === "badal") {
            const u1 = 250 - xO;
            const x = u1 - f1; // displacement relative to F1
            const v2 = xS - c.xL2;
            const f2calc = 1.0 / (1.0/v2 + x/(f1*f1));
            const f2calcText = v2 > 0 ? (-Math.abs(f2calc)).toFixed(1) + " mm" : "N/A (Pas d'image réelle)";
            theoryDiv.innerHTML = `
                <div class="theory-title" style="font-weight:700; font-size:1.1rem; margin-bottom:8px; color:var(--primary);"><i data-lucide="eye"></i> Méthode de Badal</div>
                <p style="margin-bottom:8px;">Cette méthode permet de mesurer la focale d'une lentille divergente $L_2$ ($f_2 < 0$). 
                $L_2$ est placée exactement au foyer image $F'_1$ de la lentille convergente auxiliaire $L_1$. 
                La position $v_2$ de l'image finale sur l'écran dépend de la position de l'objet par rapport au foyer objet $F_1$ de $L_1$ :</p>
                <div class="equation-box" style="background:rgba(255,255,255,0.02); padding:10px; border-radius:8px; text-align:center; font-size:1.2rem; margin:10px 0; border:1px solid rgba(255,255,255,0.05);">$$\\frac{1}{v_2} = \\frac{1}{|f_2|} - \\frac{x}{f_1^2}$$</div>
                <p style="margin-bottom:8px;">où $x = d(O, F_1) = x_{L1} - x_O - f_1$.</p>
                <p><strong>Mesures en direct :</strong><br>
                • Déplacement de l'objet par rapport à $F_1$ : $x = $ <strong style="color:var(--secondary);">${x}</strong> mm<br>
                • Distance Écran-Lentille L2 $v_2 = $ <strong style="color:var(--secondary);">${v2}</strong> mm<br>
                • Focale divergente déduite $f_{2, calc} = $ <strong style="color:var(--primary); font-size:1.05rem;">${f2calcText}</strong> (théorique)</p>
            `;
        }
        lucide.createIcons();
    }

    newMethod.addEventListener("change", () => {
        method = newMethod.value;
        if (method === "bessel") {
            D = 500;
            newD.value = D;
            xL = 220;
            newXL.value = xL;
        } else if (method === "silbermann") {
            D = 4 * f1;
            xL = 100 + D/2;
            newXL.value = xL;
        } else if (method === "autocollimation") {
            xL = 200;
            newXL.value = xL;
        } else if (method === "badal") {
            xO = 80;
            newXO.value = xO;
            xS = 650;
            newXS.value = xS;
        }
        updateInputsVisibility();
    });

    newF.addEventListener("input", (e) => {
        f1 = parseFloat(e.target.value);
        const valSpan = document.getElementById("val-focometrie-f");
        if (valSpan) valSpan.textContent = f1;
        if (method === "silbermann") {
            D = 4 * f1;
            newD.value = D;
            document.getElementById("val-focometrie-D").textContent = D;
            xL = 100 + D/2;
            newXL.value = xL;
            document.getElementById("val-focometrie-xL").textContent = xL;
        }
        updateCalculations();
    });

    newF2.addEventListener("input", (e) => {
        f2 = parseFloat(e.target.value);
        document.getElementById("val-focometrie-f2").textContent = f2;
        updateCalculations();
    });

    newD.addEventListener("input", (e) => {
        D = parseFloat(e.target.value);
        document.getElementById("val-focometrie-D").textContent = D;
        newXL.max = 100 + D - 10;
        if (xL > newXL.max) {
            xL = parseFloat(newXL.max);
            newXL.value = xL;
            document.getElementById("val-focometrie-xL").textContent = xL;
        }
        updateCalculations();
    });

    newXL.addEventListener("input", (e) => {
        xL = parseFloat(e.target.value);
        document.getElementById("val-focometrie-xL").textContent = xL;
        updateCalculations();
    });

    newXO.addEventListener("input", (e) => {
        xO = parseFloat(e.target.value);
        document.getElementById("val-focometrie-xO").textContent = xO;
        updateCalculations();
    });

    newXS.addEventListener("input", (e) => {
        xS = parseFloat(e.target.value);
        document.getElementById("val-focometrie-xS").textContent = xS;
        updateCalculations();
    });

    // Auto adjust button action
    newAuto.addEventListener("click", () => {
        if (method === "bessel") {
            const dSquare = D * D - 4 * f1 * D;
            if (dSquare >= 0) {
                const dVal = Math.sqrt(dSquare);
                const u1 = (D - dVal)/2;
                const u2 = (D + dVal)/2;
                const pos1 = Math.round(100 + u1);
                const pos2 = Math.round(100 + u2);
                
                // Toggle between pos1 and pos2
                if (Math.abs(xL - pos1) < 5) {
                    xL = pos2;
                } else {
                    xL = pos1;
                }
                newXL.value = xL;
                document.getElementById("val-focometrie-xL").textContent = xL;
            } else {
                D = Math.round(4.5 * f1);
                newD.value = D;
                document.getElementById("val-focometrie-D").textContent = D;
                const dVal = Math.sqrt(D*D - 4*f1*D);
                xL = Math.round(100 + (D - dVal)/2);
                newXL.value = xL;
                document.getElementById("val-focometrie-xL").textContent = xL;
            }
        } else if (method === "silbermann") {
            D = 4 * f1;
            newD.value = D;
            document.getElementById("val-focometrie-D").textContent = D;
            xL = 100 + D/2;
            newXL.value = xL;
            document.getElementById("val-focometrie-xL").textContent = xL;
        } else if (method === "autocollimation") {
            xL = 100 + f1;
            newXL.value = xL;
            document.getElementById("val-focometrie-xL").textContent = xL;
        } else if (method === "badal") {
            const u1 = 250 - xO;
            const xL2 = 250 + f1;
            if (u1 > f1) {
                const xI1 = 250 + (u1 * f1)/(u1 - f1);
                const u2 = xI1 - xL2;
                if (u2 < Math.abs(f2)) {
                    const v2 = (u2 * f2)/(f2 + u2);
                    xS = Math.round(xL2 + v2);
                    if (xS >= 300 && xS <= 800) {
                        newXS.value = xS;
                        document.getElementById("val-focometrie-xS").textContent = xS;
                    } else {
                        showToast("Position hors limites du banc !", false);
                    }
                } else {
                    showToast("Impossible d'obtenir une image réelle. Rapprochez l'objet.", false);
                }
            }
        }
        updateCalculations();
    });

    // Drag-and-drop mouse handling
    function getMousePos(e) {
        const rect = canvas.getBoundingClientRect();
        return {
            x: (e.clientX - rect.left) * (canvas.width / rect.width),
            y: (e.clientY - rect.top) * (canvas.height / rect.height)
        };
    }

    function checkDraggables(mouseX, mouseY) {
        const c = getCoords();
        const yAxis = c.yAxis;
        const tolX = 15;
        const tolY = 80;
        
        if (mouseY > yAxis - tolY && mouseY < yAxis + 100) {
            if (method === "badal") {
                if (Math.abs(mouseX - c.xO) < tolX) return "object";
                if (Math.abs(mouseX - c.xS) < tolX) return "screen";
            } else {
                if (Math.abs(mouseX - c.xL1) < tolX) {
                    if (method === "silbermann") return null;
                    return "lens1";
                }
                if (method !== "autocollimation" && Math.abs(mouseX - c.xS) < tolX) return "screen";
            }
        }
        return null;
    }

    canvas.addEventListener("mousedown", (e) => {
        const pos = getMousePos(e);
        dragElement = checkDraggables(pos.x, pos.y);
    });

    canvas.addEventListener("mousemove", (e) => {
        const pos = getMousePos(e);
        
        if (!dragElement) {
            const hovered = checkDraggables(pos.x, pos.y);
            canvas.style.cursor = hovered ? "ew-resize" : "default";
        } else {
            canvas.style.cursor = "ew-resize";
            const newX = Math.round(pos.x);
            
            if (dragElement === "lens1") {
                if (method === "bessel") {
                    xL = Math.max(110, Math.min(newX, 100 + D - 10));
                    newXL.value = xL;
                    document.getElementById("val-focometrie-xL").textContent = xL;
                } else if (method === "autocollimation") {
                    xL = Math.max(120, Math.min(newX, 350));
                    newXL.value = xL;
                    document.getElementById("val-focometrie-xL").textContent = xL;
                }
            } else if (dragElement === "screen") {
                if (method === "bessel") {
                    D = Math.max(300, Math.min(newX - 100, 800));
                    newD.value = D;
                    document.getElementById("val-focometrie-D").textContent = D;
                    newXL.max = 100 + D - 10;
                    if (xL > newXL.max) {
                        xL = parseFloat(newXL.max);
                        newXL.value = xL;
                        document.getElementById("val-focometrie-xL").textContent = xL;
                    }
                } else if (method === "badal") {
                    xS = Math.max(400, Math.min(newX, 850));
                    newXS.value = xS;
                    document.getElementById("val-focometrie-xS").textContent = xS;
                }
            } else if (dragElement === "object") {
                if (method === "badal") {
                    xO = Math.max(20, Math.min(newX, 180));
                    newXO.value = xO;
                    document.getElementById("val-focometrie-xO").textContent = xO;
                }
            }
            updateCalculations();
        }
    });

    const stopDrag = () => { dragElement = null; };
    canvas.addEventListener("mouseup", stopDrag);
    canvas.addEventListener("mouseleave", stopDrag);

    canvas.addEventListener("touchstart", (e) => {
        if (e.touches.length > 0) {
            const touch = e.touches[0];
            const pos = getMousePos(touch);
            dragElement = checkDraggables(pos.x, pos.y);
        }
    }, {passive: true});

    canvas.addEventListener("touchmove", (e) => {
        if (dragElement && e.touches.length > 0) {
            const touch = e.touches[0];
            const pos = getMousePos(touch);
            const newX = Math.round(pos.x);
            
            if (dragElement === "lens1") {
                if (method === "bessel") {
                    xL = Math.max(110, Math.min(newX, 100 + D - 10));
                    newXL.value = xL;
                    document.getElementById("val-focometrie-xL").textContent = xL;
                } else if (method === "autocollimation") {
                    xL = Math.max(120, Math.min(newX, 350));
                    newXL.value = xL;
                    document.getElementById("val-focometrie-xL").textContent = xL;
                }
            } else if (dragElement === "screen") {
                if (method === "bessel") {
                    D = Math.max(300, Math.min(newX - 100, 800));
                    newD.value = D;
                    document.getElementById("val-focometrie-D").textContent = D;
                    newXL.max = 100 + D - 10;
                } else if (method === "badal") {
                    xS = Math.max(400, Math.min(newX, 850));
                    newXS.value = xS;
                    document.getElementById("val-focometrie-xS").textContent = xS;
                }
            } else if (dragElement === "object") {
                if (method === "badal") {
                    xO = Math.max(20, Math.min(newX, 180));
                    newXO.value = xO;
                    document.getElementById("val-focometrie-xO").textContent = xO;
                }
            }
            updateCalculations();
        }
    }, {passive: true});

    canvas.addEventListener("touchend", stopDrag);

    // DRAW ENGINE
    function draw() {
        if (!canvas.offsetParent) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const c = getCoords();
        const yAxis = c.yAxis;
        const yBench = c.yBench;
        const scale = animScaleMultiplier;

        // 1. Draw grid
        ctx.strokeStyle = "rgba(56, 189, 248, 0.04)";
        ctx.lineWidth = 1;
        for (let x = 0; x < canvas.width; x += 40 * scale) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
        }
        for (let y = 0; y < canvas.height; y += 40 * scale) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
        }

        // 2. Draw Optical axis
        ctx.strokeStyle = "rgba(148, 163, 184, 0.3)";
        ctx.lineWidth = 1.5;
        ctx.setLineDash([6, 4]);
        ctx.beginPath();
        ctx.moveTo(30, yAxis);
        ctx.lineTo(canvas.width - 30, yAxis);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = "rgba(148, 163, 184, 0.5)";
        ctx.beginPath();
        ctx.moveTo(canvas.width - 30, yAxis - 5);
        ctx.lineTo(canvas.width - 20, yAxis);
        ctx.lineTo(canvas.width - 30, yAxis + 5);
        ctx.fill();

        // 3. Draw Optical Bench
        const gradRail = ctx.createLinearGradient(0, yBench - 5, 0, yBench + 15);
        gradRail.addColorStop(0, "#334155");
        gradRail.addColorStop(0.5, "#475569");
        gradRail.addColorStop(1, "#1e293b");
        ctx.fillStyle = gradRail;
        ctx.fillRect(40, yBench - 5, canvas.width - 80, 20);
        ctx.strokeStyle = "#64748b";
        ctx.lineWidth = 1.5;
        ctx.strokeRect(40, yBench - 5, canvas.width - 80, 20);

        ctx.fillStyle = "#94a3b8";
        ctx.font = `${Math.round(9 * scale)}px monospace`;
        ctx.textAlign = "center";
        
        const tickStep = 10;
        for (let xVal = 0; xVal <= 800; xVal += tickStep) {
            const canvasX = 50 + xVal;
            if (canvasX >= 50 && canvasX <= canvas.width - 50) {
                ctx.beginPath();
                ctx.moveTo(canvasX, yBench - 5);
                if (xVal % 100 === 0) {
                    ctx.lineTo(canvasX, yBench + 8);
                    ctx.fillText(xVal, canvasX, yBench + 25);
                } else if (xVal % 50 === 0) {
                    ctx.lineTo(canvasX, yBench + 4);
                } else {
                    ctx.lineTo(canvasX, yBench + 1);
                }
                ctx.stroke();
            }
        }

        function drawStand(x, label) {
            ctx.strokeStyle = "#475569";
            ctx.lineWidth = 4 * scale;
            ctx.beginPath();
            ctx.moveTo(x, yAxis + 10);
            ctx.lineTo(x, yBench - 5);
            ctx.stroke();

            ctx.fillStyle = "#1e293b";
            ctx.strokeStyle = "#94a3b8";
            ctx.lineWidth = 1.5;
            ctx.fillRect(x - 12 * scale, yBench - 10, 24 * scale, 12);
            ctx.strokeRect(x - 12 * scale, yBench - 10, 24 * scale, 12);

            if (label) {
                ctx.fillStyle = "#cbd5e1";
                ctx.font = `bold ${Math.round(10 * scale)}px sans-serif`;
                ctx.fillText(label, x, yBench + 5);
            }
        }

        function drawLensSymbol(x, f, isDiverging, label) {
            drawStand(x, label);

            const h = 50 * scale;
            ctx.strokeStyle = animPrimaryColor;
            ctx.lineWidth = 3 * scale;
            ctx.beginPath();
            ctx.moveTo(x, yAxis - h);
            ctx.lineTo(x, yAxis + h);
            ctx.stroke();

            ctx.fillStyle = animPrimaryColor;
            if (!isDiverging) {
                ctx.beginPath();
                ctx.moveTo(x - 5 * scale, yAxis - h + 8 * scale);
                ctx.lineTo(x, yAxis - h);
                ctx.lineTo(x + 5 * scale, yAxis - h + 8 * scale);
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(x - 5 * scale, yAxis + h - 8 * scale);
                ctx.lineTo(x, yAxis + h);
                ctx.lineTo(x + 5 * scale, yAxis + h - 8 * scale);
                ctx.stroke();
            } else {
                ctx.beginPath();
                ctx.moveTo(x - 5 * scale, yAxis - h);
                ctx.lineTo(x, yAxis - h + 8 * scale);
                ctx.lineTo(x + 5 * scale, yAxis - h);
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(x - 5 * scale, yAxis + h);
                ctx.lineTo(x, yAxis + h - 8 * scale);
                ctx.lineTo(x + 5 * scale, yAxis + h);
                ctx.stroke();
            }

            ctx.fillStyle = "rgba(56, 189, 248, 0.08)";
            ctx.beginPath();
            ctx.ellipse(x, yAxis, 12 * scale, h, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = "rgba(56, 189, 248, 0.2)";
            ctx.lineWidth = 1;
            ctx.stroke();

            ctx.fillStyle = animPrimaryColor;
            ctx.beginPath();
            ctx.arc(x, yAxis, 3 * scale, 0, Math.PI * 2);
            ctx.fill();
            ctx.font = `italic ${Math.round(11 * scale)}px sans-serif`;
            ctx.fillText("O", x - 8 * scale, yAxis - 8 * scale);

            const absF = Math.abs(f);
            const xF = x - absF;
            const xFPrime = x + absF;

            ctx.fillStyle = isDiverging ? animSecondaryColor : "#ef4444";
            ctx.beginPath();
            ctx.arc(xF, yAxis, 3 * scale, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#cbd5e1";
            ctx.font = `italic bold ${Math.round(10 * scale)}px sans-serif`;
            ctx.fillText(isDiverging ? "F'" : "F", xF, yAxis + 14 * scale);

            ctx.fillStyle = isDiverging ? animSecondaryColor : "#ef4444";
            ctx.beginPath();
            ctx.arc(xFPrime, yAxis, 3 * scale, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#cbd5e1";
            ctx.fillText(isDiverging ? "F" : "F'", xFPrime, yAxis + 14 * scale);
        }

        // Draw Object
        drawStand(c.xO, "Obj.");
        const objHeight = 40 * scale;
        ctx.strokeStyle = "#f59e0b";
        ctx.lineWidth = 3.5 * scale;
        ctx.beginPath();
        ctx.moveTo(c.xO, yAxis);
        ctx.lineTo(c.xO, yAxis - objHeight);
        ctx.stroke();
        
        ctx.fillStyle = "#f59e0b";
        ctx.beginPath();
        ctx.moveTo(c.xO - 5 * scale, yAxis - objHeight + 6 * scale);
        ctx.lineTo(c.xO, yAxis - objHeight);
        ctx.lineTo(c.xO + 5 * scale, yAxis - objHeight + 6 * scale);
        ctx.fill();

        ctx.fillStyle = "#cbd5e1";
        ctx.font = `bold ${Math.round(10 * scale)}px sans-serif`;
        ctx.fillText("A", c.xO - 10 * scale, yAxis + 12 * scale);
        ctx.fillText("B", c.xO - 10 * scale, yAxis - objHeight - 4 * scale);

        let finalImageX = null;
        let finalImageH = null;
        let isRealImage = false;
        let rays = [];

        const sampleYs = [yAxis - 30 * scale, yAxis - 15 * scale, yAxis, yAxis + 15 * scale, yAxis + 30 * scale];

        if (method === "bessel" || method === "silbermann") {
            const u = c.xL1 - c.xO;
            const f = c.f1;
            drawLensSymbol(c.xL1, f, false, method === "silbermann" ? "L (milieu)" : "L");
            
            drawStand(c.xS, "Écran");
            ctx.fillStyle = "#334155";
            ctx.fillRect(c.xS - 4 * scale, yAxis - 60 * scale, 8 * scale, 120 * scale);
            ctx.fillStyle = "#e2e8f0";
            ctx.fillRect(c.xS - 2 * scale, yAxis - 58 * scale, 4 * scale, 116 * scale);

            if (u > f) {
                const v = (u * f) / (u - f);
                finalImageX = c.xL1 + v;
                const gamma = -v / u;
                finalImageH = objHeight * gamma;
                isRealImage = true;
            }

            sampleYs.forEach(yL => {
                const s0 = (yL - (yAxis - objHeight)) / (c.xL1 - c.xO);
                const s1 = s0 - (yL - yAxis) / f;
                const yS = yL + s1 * (c.xS - c.xL1);
                
                rays.push([
                    { x1: c.xO, y1: yAxis - objHeight },
                    { x2: c.xL1, y2: yL },
                    { x2: c.xS, y2: yS }
                ]);
            });

        } else if (method === "autocollimation") {
            const u = c.xL1 - c.xO;
            const f = c.f1;
            drawLensSymbol(c.xL1, f, false, "L");

            drawStand(c.xM, "Miroir");
            ctx.fillStyle = "#475569";
            ctx.fillRect(c.xM - 4 * scale, yAxis - 50 * scale, 8 * scale, 100 * scale);
            ctx.strokeStyle = "#94a3b8";
            ctx.strokeRect(c.xM - 4 * scale, yAxis - 50 * scale, 8 * scale, 100 * scale);
            ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
            for (let y = yAxis - 46 * scale; y < yAxis + 50 * scale; y += 8 * scale) {
                ctx.beginPath();
                ctx.moveTo(c.xM + 4 * scale, y);
                ctx.lineTo(c.xM - 2 * scale, y + 6 * scale);
                ctx.stroke();
            }

            sampleYs.forEach(yL1 => {
                const s0 = (yL1 - (yAxis - objHeight)) / (c.xL1 - c.xO);
                const s1 = s0 - (yL1 - yAxis) / f;
                
                const yM = yL1 + s1 * (c.xM - c.xL1);
                const s2 = -s1;
                const yL1_back = yM + s2 * (c.xL1 - c.xM);
                const s3 = s2 + (yL1_back - yAxis) / f;
                const yReturn = yL1_back + s3 * (c.xO - c.xL1);

                rays.push([
                    { x1: c.xO, y1: yAxis - objHeight },
                    { x2: c.xL1, y2: yL1 },
                    { x2: c.xM, y2: yM },
                    { x2: c.xL1, y2: yL1_back },
                    { x2: c.xO, y2: yReturn }
                ]);
            });

            finalImageX = c.xO;
            finalImageH = -objHeight * (f / u);
            isRealImage = true;

        } else if (method === "badal") {
            const f1 = c.f1;
            const f2 = c.f2;
            
            drawLensSymbol(c.xL1, f1, false, "L1 (Aux.)");
            drawLensSymbol(c.xL2, f2, true, "L2 (Diverg.)");
            
            drawStand(c.xS, "Écran");
            ctx.fillStyle = "#334155";
            ctx.fillRect(c.xS - 4 * scale, yAxis - 60 * scale, 8 * scale, 120 * scale);
            ctx.fillStyle = "#e2e8f0";
            ctx.fillRect(c.xS - 2 * scale, yAxis - 58 * scale, 4 * scale, 116 * scale);

            const u1 = c.xL1 - c.xO;
            if (u1 > f1) {
                const xI1 = c.xL1 + (u1 * f1) / (u1 - f1);
                const u2 = xI1 - c.xL2;
                if (u2 < Math.abs(f2)) {
                    const v2 = (u2 * f2) / (f2 + u2);
                    finalImageX = c.xL2 + v2;
                    
                    const gamma1 = - (xI1 - c.xL1) / u1;
                    const gamma2 = v2 / u2;
                    finalImageH = objHeight * gamma1 * gamma2;
                    isRealImage = true;
                }
            }

            sampleYs.forEach(yL1 => {
                const s0 = (yL1 - (yAxis - objHeight)) / (c.xL1 - c.xO);
                const s1 = s0 - (yL1 - yAxis) / f1;
                
                const yL2 = yL1 + s1 * (c.xL2 - c.xL1);
                const s2 = s1 - (yL2 - yAxis) / f2;
                const yS = yL2 + s2 * (c.xS - c.xL2);
                
                rays.push([
                    { x1: c.xO, y1: yAxis - objHeight },
                    { x2: c.xL1, y2: yL1 },
                    { x2: c.xL2, y2: yL2 },
                    { x2: c.xS, y2: yS }
                ]);
            });
        }

        // Draw Rays
        ctx.save();
        ctx.shadowBlur = 0;
        rays.forEach(ray => {
            ctx.strokeStyle = "rgba(56, 189, 248, 0.35)";
            ctx.lineWidth = 1.8 * scale;
            ctx.beginPath();
            ctx.moveTo(ray[0].x1, ray[0].y1);
            for (let i = 1; i < ray.length; i++) {
                ctx.lineTo(ray[i].x2, ray[i].y2);
            }
            ctx.stroke();
        });
        ctx.restore();

        // Draw Image on Screen or source plane
        if (finalImageX !== null && finalImageH !== null) {
            let blur = 0;
            if (method === "autocollimation") {
                blur = Math.abs(c.xL1 - c.xO - c.f1) * 0.2;
            } else {
                blur = Math.abs(c.xS - finalImageX);
            }

            ctx.save();
            if (blur > 3) {
                ctx.filter = `blur(${Math.min(8, blur * 0.15)}px)`;
                ctx.strokeStyle = "rgba(239, 68, 68, 0.6)";
                ctx.lineWidth = 3.5 * scale;
                ctx.setLineDash([4, 4]);
                ctx.beginPath();
                ctx.moveTo(c.xS, yAxis);
                ctx.lineTo(c.xS, yAxis + finalImageH);
                ctx.stroke();
                ctx.setLineDash([]);
                
                ctx.fillStyle = "rgba(239, 68, 68, 0.6)";
                ctx.beginPath();
                const sign = finalImageH > 0 ? 1 : -1;
                ctx.moveTo(c.xS - 5 * scale, yAxis + finalImageH - 6 * scale * sign);
                ctx.lineTo(c.xS, yAxis + finalImageH);
                ctx.lineTo(c.xS + 5 * scale, yAxis + finalImageH - 6 * scale * sign);
                ctx.fill();
            } else {
                ctx.filter = "none";
                ctx.strokeStyle = "#10b981";
                ctx.lineWidth = 3.5 * scale;
                ctx.shadowColor = "#10b981";
                ctx.shadowBlur = 10;
                
                ctx.beginPath();
                ctx.moveTo(c.xS, yAxis);
                ctx.lineTo(c.xS, yAxis + finalImageH);
                ctx.stroke();

                ctx.fillStyle = "#10b981";
                ctx.beginPath();
                const sign = finalImageH > 0 ? 1 : -1;
                ctx.moveTo(c.xS - 5 * scale, yAxis + finalImageH - 6 * scale * sign);
                ctx.lineTo(c.xS, yAxis + finalImageH);
                ctx.lineTo(c.xS + 5 * scale, yAxis + finalImageH - 6 * scale * sign);
                ctx.fill();
                
                ctx.shadowBlur = 0;
                ctx.fillStyle = "#10b981";
                ctx.font = `bold ${Math.round(11 * scale)}px sans-serif`;
                ctx.fillText("✔ Nette", c.xS + 12 * scale, yAxis + finalImageH/2);
            }
            ctx.restore();

            ctx.fillStyle = "#cbd5e1";
            ctx.font = `bold ${Math.round(10 * scale)}px sans-serif`;
            ctx.fillText("A'", c.xS + 10 * scale, yAxis + 12 * scale);
            ctx.fillText("B'", c.xS + 10 * scale, yAxis + finalImageH - 4 * scale * (finalImageH > 0 ? -1 : 1));
        } else if (method === "badal") {
            ctx.fillStyle = "#f87171";
            ctx.font = `bold ${Math.round(11 * scale)}px sans-serif`;
            ctx.fillText("⚠ Image virtuelle (hors écran)", c.xS - 50 * scale, yAxis - 75 * scale);
        }
    }

    if (focometrieInterval) clearInterval(focometrieInterval);
    focometrieInterval = setInterval(draw, 30);

    updateInputsVisibility();
}

// 8. Photovoltaique Simulator
let photovoltaiqueInterval = null;
function setupPhotovoltaiqueSimulator() {
    const canvas = document.getElementById("canvas-photovoltaique");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const irradianceSlider = document.getElementById("pv-irradiance");
    const surfaceSlider = document.getElementById("pv-surface");
    const resistanceSlider = document.getElementById("pv-resistance");
    const btnRecord = document.getElementById("btn-pv-record");
    const btnPlot = document.getElementById("btn-pv-plot");
    const btnClear = document.getElementById("btn-pv-clear");

    // Clean up event listeners by cloning
    const newIrr = irradianceSlider.cloneNode(true);
    irradianceSlider.parentNode.replaceChild(newIrr, irradianceSlider);

    const newSurf = surfaceSlider.cloneNode(true);
    surfaceSlider.parentNode.replaceChild(newSurf, surfaceSlider);

    const newRes = resistanceSlider.cloneNode(true);
    resistanceSlider.parentNode.replaceChild(newRes, resistanceSlider);

    const newRec = btnRecord.cloneNode(true);
    btnRecord.parentNode.replaceChild(newRec, btnRecord);

    const newPlot = btnPlot.cloneNode(true);
    btnPlot.parentNode.replaceChild(newPlot, btnPlot);

    const newClr = btnClear.cloneNode(true);
    btnClear.parentNode.replaceChild(newClr, btnClear);

    // Initial variables
    let E = parseFloat(newIrr.value);
    let S = parseFloat(newSurf.value);
    let R = parseFloat(newRes.value);
    let recordedPoints = [];

    // Model parameters
    const I0 = 1e-6; // Saturation current in mA
    const Vc = 0.045; // Diode thermal voltage * ideality in V

    function getIph(irradiance, surface) {
        return 0.005 * irradiance * (surface / 50) * 100; // around 100-500 mA
    }

    // Solver for I and U
    function solveI_U(R_val, Iph) {
        if (R_val === 0) {
            return { I: Iph, U: 0 };
        }
        if (R_val >= 500) {
            // Treat max R as open circuit
            const Uco = Vc * Math.log(Iph / I0 + 1);
            return { I: 0, U: Uco };
        }
        
        // Newton Solver
        const R_k = R_val / 1000;
        let I = Iph;
        for (let i = 0; i < 30; i++) {
            const expTerm = Math.exp((I * R_k) / Vc);
            const f = I - Iph + I0 * (expTerm - 1);
            const df = 1 + (I0 * R_k / Vc) * expTerm;
            const nextI = I - f / df;
            if (isNaN(nextI) || !isFinite(nextI)) {
                // Fallback to binary search
                return solveI_UBinary(R_k, Iph);
            }
            if (Math.abs(nextI - I) < 1e-5) {
                I = nextI;
                break;
            }
            I = nextI;
        }
        I = Math.max(0, Math.min(I, Iph));
        return { I: I, U: I * R_k };
    }

    function solveI_UBinary(R_k, Iph) {
        let low = 0;
        let high = Iph;
        let I = Iph / 2;
        for (let i = 0; i < 40; i++) {
            I = (low + high) / 2;
            const U = I * R_k;
            const diff = I - Iph + I0 * (Math.exp(U / Vc) - 1);
            if (Math.abs(high - low) < 1e-5) break;
            if (diff > 0) {
                high = I;
            } else {
                low = I;
            }
        }
        return { I: I, U: I * R_k };
    }

    function getPVState() {
        const Iph = getIph(E, S);
        const { I, U } = solveI_U(R, Iph);
        const P = U * I; // Power in mW
        
        // Find theoretical maximum power point (MPP)
        let Pmax = 0;
        let Um = 0;
        let Im = 0;
        const steps = 100;
        for (let i = 0; i <= steps; i++) {
            const testR = (500 / steps) * i;
            const res = solveI_U(testR, Iph);
            const testP = res.U * res.I;
            if (testP > Pmax) {
                Pmax = testP;
                Um = res.U;
                Im = res.I;
            }
        }

        const Icc = Iph;
        const Uco = Vc * Math.log(Iph / I0 + 1);
        const FF = Pmax / (Uco * Icc);
        const Pin = E * S * 1e-4; // input light power in W
        const Pmax_W = Pmax / 1000;
        const eff = Pin > 0 ? (Pmax_W / Pin) * 100 : 0;

        return {
            I, U, P,
            Icc, Uco,
            Pmax, Um, Im,
            FF, eff
        };
    }

    function updateCalculations() {
        const state = getPVState();
        const theoryDiv = document.getElementById("photovoltaique-theory");
        if (!theoryDiv) return;

        theoryDiv.innerHTML = `
            <div class="theory-title" style="font-weight:700; font-size:1.1rem; margin-bottom:8px; color:var(--primary);"><i data-lucide="sun"></i> Rendement & Caractéristiques</div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                <div>
                    <strong style="color:var(--secondary);">Grandeurs limites :</strong><br>
                    • Courant de court-circuit $I_{cc} = $ <strong style="color:var(--text-primary);">${state.Icc.toFixed(1)}</strong> mA<br>
                    • Tension de circuit ouvert $U_{co} = $ <strong style="color:var(--text-primary);">${state.Uco.toFixed(2)}</strong> V
                </div>
                <div>
                    <strong style="color:var(--secondary);">Point de puissance maximale (MPP) :</strong><br>
                    • Puissance max $P_{max} = $ <strong style="color:var(--primary);">${state.Pmax.toFixed(1)}</strong> mW<br>
                    • Tension optimale $U_m = $ <strong style="color:var(--text-primary);">${state.Um.toFixed(2)}</strong> V<br>
                    • Courant optimal $I_m = $ <strong style="color:var(--text-primary);">${state.Im.toFixed(1)}</strong> mA
                </div>
                <div>
                    <strong style="color:var(--secondary);">Efficacité de la cellule :</strong><br>
                    • Facteur de forme $FF = $ <strong style="color:var(--text-primary);">${(state.FF * 100).toFixed(1)}</strong> %<br>
                    • Puissance lumineuse $P_{lum} = $ <strong style="color:var(--text-primary);">${(E * S * 1e-4).toFixed(3)}</strong> W<br>
                    • Rendement maximum $\\eta = $ <strong style="color:var(--primary); font-size:1.1rem;">${state.eff.toFixed(2)}</strong> %
                </div>
            </div>
        `;

        // Render equations
        setTimeout(() => {
            if (window.MathJax && window.MathJax.typesetPromise) {
                window.MathJax.typesetPromise().catch(err => console.warn(err));
            }
        }, 100);
        lucide.createIcons();
    }

    function updatePointsTable() {
        const body = document.getElementById("photovoltaique-points-body");
        if (!body) return;
        if (recordedPoints.length === 0) {
            body.innerHTML = `
                <tr>
                    <td colspan="4" style="padding: 6px; color: var(--text-secondary, #94a3b8); font-style: italic; font-size: 0.75rem;">Aucun point mesuré.</td>
                </tr>
            `;
            return;
        }

        body.innerHTML = recordedPoints.map((pt, idx) => `
            <tr style="border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
                <td style="padding: 4px;">#${idx + 1}</td>
                <td style="padding: 4px;">${pt.U.toFixed(2)}</td>
                <td style="padding: 4px;">${pt.I.toFixed(1)}</td>
                <td style="padding: 4px;">${pt.P.toFixed(1)}</td>
            </tr>
        `).join("");
    }

    newIrr.addEventListener("input", (e) => {
        E = parseFloat(e.target.value);
        document.getElementById("val-pv-irradiance").textContent = E;
        updateCalculations();
    });

    newSurf.addEventListener("input", (e) => {
        S = parseFloat(e.target.value);
        document.getElementById("val-pv-surface").textContent = S;
        updateCalculations();
    });

    newRes.addEventListener("input", (e) => {
        R = parseFloat(e.target.value);
        document.getElementById("val-pv-resistance").textContent = R === 500 ? "∞" : R;
        updateCalculations();
    });

    newRec.addEventListener("click", () => {
        const state = getPVState();
        // Check if point already exists
        const exists = recordedPoints.some(pt => Math.abs(pt.U - state.U) < 0.01);
        if (!exists) {
            recordedPoints.push({ U: state.U, I: state.I, P: state.P });
            // Sort by U
            recordedPoints.sort((a, b) => a.U - b.U);
            updatePointsTable();
            showToast("Point de mesure enregistré !", true);
        } else {
            showToast("Ce point est déjà mesuré.", false);
        }
    });

    newPlot.addEventListener("click", () => {
        // Automatically plot a set of points to fill the curve
        recordedPoints = [];
        const Iph = getIph(E, S);
        const resValues = [0, 5, 10, 15, 20, 25, 30, 40, 50, 75, 100, 150, 200, 300, 500];
        resValues.forEach(testR => {
            const res = solveI_U(testR, Iph);
            recordedPoints.push({ U: res.U, I: res.I, P: res.U * res.I });
        });
        recordedPoints.sort((a, b) => a.U - b.U);
        updatePointsTable();
        showToast("Courbes caractéristiques tracées !", true);
    });

    newClr.addEventListener("click", () => {
        recordedPoints = [];
        updatePointsTable();
        showToast("Table des points vidée.", false);
    });

    // Drawing loops
    function draw() {
        if (!canvas.offsetParent) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const state = getPVState();
        const scale = animScaleMultiplier;
        const Iph = getIph(E, S);

        // Draw grid
        ctx.strokeStyle = "rgba(56, 189, 248, 0.04)";
        ctx.lineWidth = 1;
        for (let x = 0; x < canvas.width; x += 40 * scale) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
        }
        for (let y = 0; y < canvas.height; y += 40 * scale) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
        }

        // Draw vertical separating line
        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(450, 20);
        ctx.lineTo(450, 380);
        ctx.stroke();

        // ==========================================
        // LEFT HALF: CIRCUIT SCHEMATIC & ANIMATION
        // ==========================================
        
        const lampX = 220;
        const lampY = 60;
        const cellX = 220;
        const cellY = 170;

        // Lamp background glow
        ctx.fillStyle = "rgba(251, 191, 36, 0.1)";
        ctx.beginPath();
        ctx.arc(lampX, lampY, 30 * scale, 0, Math.PI, true);
        ctx.fill();

        // Rays (density depends on E)
        const numRays = Math.round(E / 100);
        ctx.strokeStyle = `rgba(251, 191, 36, ${0.1 + (E / 1000) * 0.5})`;
        ctx.lineWidth = 2 * scale;
        for (let i = 0; i < numRays; i++) {
            const angle = Math.PI / 6 + (Math.PI * 2/3 / (numRays - 1)) * i;
            const dx = Math.cos(angle) * 70 * scale;
            const dy = Math.sin(angle) * 70 * scale;
            ctx.beginPath();
            ctx.moveTo(lampX, lampY);
            ctx.lineTo(lampX + dx, lampY + dy);
            ctx.stroke();
        }

        // Lamp bulb
        ctx.fillStyle = E > 0 ? "rgba(251, 191, 36, 0.9)" : "#475569";
        ctx.beginPath();
        ctx.arc(lampX, lampY, 12 * scale, 0, Math.PI * 2);
        ctx.fill();

        // PV Cell
        ctx.fillStyle = "#1e1b4b";
        ctx.fillRect(cellX - 40 * scale, cellY - 10 * scale, 80 * scale, 20 * scale);
        ctx.strokeStyle = "#4338ca";
        ctx.lineWidth = 2 * scale;
        ctx.strokeRect(cellX - 40 * scale, cellY - 10 * scale, 80 * scale, 20 * scale);
        
        ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
        ctx.lineWidth = 1;
        for (let gx = cellX - 30 * scale; gx <= cellX + 30 * scale; gx += 15 * scale) {
            ctx.beginPath();
            ctx.moveTo(gx, cellY - 10 * scale);
            ctx.lineTo(gx, cellY + 10 * scale);
            ctx.stroke();
        }

        // Circuit Connections
        ctx.strokeStyle = "#94a3b8";
        ctx.lineWidth = 2 * scale;
        ctx.beginPath();
        ctx.moveTo(cellX - 40 * scale, cellY);
        ctx.lineTo(130 * scale, cellY);
        ctx.lineTo(130 * scale, 320 * scale);
        
        // Ammeter
        ctx.lineTo(180 * scale, 320 * scale);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.arc(200 * scale, 320 * scale, 15 * scale, 0, Math.PI * 2);
        ctx.fillStyle = "#1e293b";
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = "#cbd5e1";
        ctx.font = `bold ${Math.round(11 * scale)}px sans-serif`;
        ctx.fillText("mA", 200 * scale, 323 * scale);

        ctx.beginPath();
        ctx.moveTo(215 * scale, 320 * scale);
        ctx.lineTo(280 * scale, 320 * scale);
        ctx.stroke();

        // Rheostat box
        ctx.fillStyle = "#334155";
        ctx.fillRect(280 * scale, 310 * scale, 80 * scale, 20 * scale);
        ctx.strokeRect(280 * scale, 310 * scale, 80 * scale, 20 * scale);

        const rPercent = R / 500;
        const sliderX = (280 + 80 * rPercent) * scale;
        ctx.strokeStyle = "#ef4444";
        ctx.fillStyle = "#ef4444";
        ctx.lineWidth = 2.5 * scale;
        ctx.beginPath();
        ctx.moveTo(sliderX, 280 * scale);
        ctx.lineTo(sliderX, 305 * scale);
        ctx.moveTo(sliderX - 4 * scale, 300 * scale);
        ctx.lineTo(sliderX, 307 * scale);
        ctx.lineTo(sliderX + 4 * scale, 300 * scale);
        ctx.stroke();

        ctx.strokeStyle = "#94a3b8";
        ctx.lineWidth = 2 * scale;
        ctx.beginPath();
        ctx.moveTo(360 * scale, 320 * scale);
        ctx.lineTo(410 * scale, 320 * scale);
        ctx.lineTo(410 * scale, cellY);
        ctx.lineTo(cellX + 40 * scale, cellY);
        ctx.stroke();

        // Voltmetre
        ctx.beginPath();
        ctx.moveTo(150 * scale, cellY);
        ctx.lineTo(150 * scale, 230 * scale);
        ctx.lineTo(180 * scale, 230 * scale);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.arc(200 * scale, 230 * scale, 15 * scale, 0, Math.PI*2);
        ctx.fillStyle = "#1e293b";
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#cbd5e1";
        ctx.font = `bold ${Math.round(12 * scale)}px sans-serif`;
        ctx.fillText("V", 200 * scale, 234 * scale);

        ctx.beginPath();
        ctx.moveTo(215 * scale, 230 * scale);
        ctx.lineTo(390 * scale, 230 * scale);
        ctx.lineTo(390 * scale, cellY);
        ctx.stroke();

        // Voltmeter display
        ctx.fillStyle = "#020617";
        ctx.fillRect(130 * scale, 252 * scale, 100 * scale, 22 * scale);
        ctx.strokeStyle = "rgba(56, 189, 248, 0.3)";
        ctx.strokeRect(130 * scale, 252 * scale, 100 * scale, 22 * scale);
        ctx.fillStyle = "#38bdf8";
        ctx.font = `bold ${Math.round(11 * scale)}px monospace`;
        ctx.fillText(`U = ${state.U.toFixed(3)} V`, 180 * scale, 267 * scale);

        // Ammeter display
        ctx.fillStyle = "#020617";
        ctx.fillRect(230 * scale, 342 * scale, 110 * scale, 22 * scale);
        ctx.strokeStyle = "rgba(56, 189, 248, 0.3)";
        ctx.strokeRect(230 * scale, 342 * scale, 110 * scale, 22 * scale);
        ctx.fillStyle = "#38bdf8";
        ctx.font = `bold ${Math.round(11 * scale)}px monospace`;
        ctx.fillText(`I = ${state.I.toFixed(1)} mA`, 285 * scale, 357 * scale);

        ctx.fillStyle = "#cbd5e1";
        ctx.font = `bold ${Math.round(10 * scale)}px sans-serif`;
        ctx.fillText("Cellule PV", cellX, cellY - 18 * scale);
        ctx.fillText("Voltmètre", 200 * scale, 208 * scale);
        ctx.fillText("Ampèremètre", 200 * scale, 298 * scale);
        ctx.fillText(`Rhéostat: ${R === 500 ? "∞" : R + " Ω"}`, 320 * scale, 295 * scale);

        // ==========================================
        // RIGHT HALF: CHART PLOTTING
        // ==========================================
        const gX = 500;
        const gY = 50;
        const gW = 310;
        const gH = 260;

        ctx.strokeStyle = "#cbd5e1";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(gX, gY);
        ctx.lineTo(gX, gY + gH);
        ctx.lineTo(gX + gW, gY + gH);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(gX + gW, gY);
        ctx.lineTo(gX + gW, gY + gH);
        ctx.stroke();

        ctx.fillStyle = "#94a3b8";
        ctx.font = `${Math.round(9 * scale)}px sans-serif`;
        ctx.textAlign = "center";
        
        for (let uVal = 0; uVal <= 1.2; uVal += 0.2) {
            const pxX = gX + (uVal / 1.2) * gW;
            ctx.beginPath();
            ctx.moveTo(pxX, gY + gH);
            ctx.lineTo(pxX, gY + gH + 4);
            ctx.stroke();
            ctx.fillText(uVal.toFixed(1), pxX, gY + gH + 15);
        }
        ctx.fillStyle = "#cbd5e1";
        ctx.font = `bold ${Math.round(10 * scale)}px sans-serif`;
        ctx.fillText("Tension U (V)", gX + gW/2, gY + gH + 30);

        ctx.fillStyle = "#94a3b8";
        ctx.textAlign = "right";
        ctx.font = `${Math.round(9 * scale)}px sans-serif`;
        for (let iVal = 0; iVal <= 600; iVal += 100) {
            const pxY = gY + gH - (iVal / 600) * gH;
            ctx.beginPath();
            ctx.moveTo(gX - 4, pxY);
            ctx.lineTo(gX, pxY);
            ctx.stroke();
            ctx.fillText(iVal, gX - 8, pxY + 3);
        }
        
        ctx.save();
        ctx.translate(gX - 40, gY + gH/2);
        ctx.rotate(-Math.PI/2);
        ctx.fillStyle = animPrimaryColor;
        ctx.font = `bold ${Math.round(10 * scale)}px sans-serif`;
        ctx.fillText("Courant I (mA)", 0, 0);
        ctx.restore();

        ctx.fillStyle = "#94a3b8";
        ctx.textAlign = "left";
        ctx.font = `${Math.round(9 * scale)}px sans-serif`;
        for (let pVal = 0; pVal <= 400; pVal += 50) {
            const pxY = gY + gH - (pVal / 400) * gH;
            ctx.beginPath();
            ctx.moveTo(gX + gW, pxY);
            ctx.lineTo(gX + gW + 4, pxY);
            ctx.stroke();
            ctx.fillText(pVal, gX + gW + 8, pxY + 3);
        }
        
        ctx.save();
        ctx.translate(gX + gW + 42, gY + gH/2);
        ctx.rotate(Math.PI/2);
        ctx.fillStyle = animSecondaryColor;
        ctx.font = `bold ${Math.round(10 * scale)}px sans-serif`;
        ctx.fillText("Puissance P (mW)", 0, 0);
        ctx.restore();

        const steps = 100;
        const ptsI = [];
        const ptsP = [];
        for (let j = 0; j <= steps; j++) {
            const testU = (state.Uco / steps) * j;
            let testI = Iph - I0 * (Math.exp(testU / Vc) - 1);
            testI = Math.max(0, testI);
            const testP = testU * testI;

            const pxX = gX + (testU / 1.2) * gW;
            const pxY_I = gY + gH - (testI / 600) * gH;
            const pxY_P = gY + gH - (testP / 400) * gH;
            
            if (pxX >= gX && pxX <= gX + gW) {
                ptsI.push({ x: pxX, y: pxY_I });
                ptsP.push({ x: pxX, y: pxY_P });
            }
        }

        ctx.strokeStyle = animPrimaryColor;
        ctx.lineWidth = 2.5 * scale;
        ctx.beginPath();
        if (ptsI.length > 0) {
            ctx.moveTo(ptsI[0].x, ptsI[0].y);
            for (let k = 1; k < ptsI.length; k++) {
                ctx.lineTo(ptsI[k].x, ptsI[k].y);
            }
            ctx.stroke();
        }

        ctx.strokeStyle = animSecondaryColor;
        ctx.lineWidth = 2.5 * scale;
        ctx.beginPath();
        if (ptsP.length > 0) {
            ctx.moveTo(ptsP[0].x, ptsP[0].y);
            for (let k = 1; k < ptsP.length; k++) {
                ctx.lineTo(ptsP[k].x, ptsP[k].y);
            }
            ctx.stroke();
        }

        recordedPoints.forEach(pt => {
            const pxX = gX + (pt.U / 1.2) * gW;
            const pxY_I = gY + gH - (pt.I / 600) * gH;
            const pxY_P = gY + gH - (pt.P / 400) * gH;

            ctx.fillStyle = animPrimaryColor;
            ctx.beginPath();
            ctx.arc(pxX, pxY_I, 4 * scale, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = "#ffffff";
            ctx.lineWidth = 1;
            ctx.stroke();

            ctx.fillStyle = animSecondaryColor;
            ctx.beginPath();
            ctx.arc(pxX, pxY_P, 4 * scale, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        });

        const curX = gX + (state.U / 1.2) * gW;
        const curY_I = gY + gH - (state.I / 600) * gH;
        const curY_P = gY + gH - (state.P / 400) * gH;

        if (curX >= gX && curX <= gX + gW) {
            ctx.fillStyle = "#ef4444";
            ctx.beginPath();
            ctx.arc(curX, curY_I, 6 * scale, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = "#ffffff";
            ctx.lineWidth = 1.5;
            ctx.stroke();

            ctx.fillStyle = "#ef4444";
            ctx.beginPath();
            ctx.arc(curX, curY_P, 6 * scale, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        }
    }

    if (photovoltaiqueInterval) clearInterval(photovoltaiqueInterval);
    photovoltaiqueInterval = setInterval(draw, 30);
    
    updateCalculations();
    updatePointsTable();
}

// 9. Charge Specifique de l'Electron Simulator
let chargeElectronInterval = null;
function setupChargeElectronSimulator() {
    const canvas = document.getElementById("canvas-charge-electron");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const voltageSlider = document.getElementById("ce-voltage");
    const currentSlider = document.getElementById("ce-current");
    const reticuleSlider = document.getElementById("ce-reticule");
    const btnRecord = document.getElementById("btn-ce-record");
    const btnPlot = document.getElementById("btn-ce-plot");
    const btnClear = document.getElementById("btn-ce-clear");
    const checkVectors = document.getElementById("ce-show-vectors");
    const checkCoils = document.getElementById("ce-show-coils");

    // Clean up event listeners by cloning
    const newVol = voltageSlider.cloneNode(true);
    voltageSlider.parentNode.replaceChild(newVol, voltageSlider);

    const newCur = currentSlider.cloneNode(true);
    currentSlider.parentNode.replaceChild(newCur, currentSlider);

    const newRet = reticuleSlider.cloneNode(true);
    reticuleSlider.parentNode.replaceChild(newRet, reticuleSlider);

    const newRec = btnRecord.cloneNode(true);
    btnRecord.parentNode.replaceChild(newRec, btnRecord);

    const newPlot = btnPlot.cloneNode(true);
    btnPlot.parentNode.replaceChild(newPlot, btnPlot);

    const newClr = btnClear.cloneNode(true);
    btnClear.parentNode.replaceChild(newClr, btnClear);

    // Initial variables
    let U = parseFloat(newVol.value);
    let I = parseFloat(newCur.value);
    let D_mes = parseFloat(newRet.value);
    let showVectors = checkVectors.checked;
    let showCoils = checkCoils.checked;
    let recordedPoints = [];

    // Physics constants
    const emRatio = 1.7588e11; // C/kg
    const kCoils = 7.79e-4; // T/A (Helmholtz constant B = k * I)

    function getB() {
        return kCoils * I;
    }

    function getV() {
        return Math.sqrt(2 * emRatio * U);
    }

    function getDActual() {
        const B = getB();
        const v = getV();
        const r = v / (B * emRatio); // in meters
        return 2 * r * 100; // in cm
    }

    function getIndividualEM() {
        const B = getB();
        const D_meters = D_mes / 100;
        return (8 * U) / (B * B * D_meters * D_meters);
    }

    function calculateRegressionFit() {
        if (recordedPoints.length < 2) return null;
        let sumXY = 0;
        let sumXX = 0;
        recordedPoints.forEach(pt => {
            sumXY += pt.xVal * pt.yVal;
            sumXX += pt.xVal * pt.xVal;
        });
        if (sumXX === 0) return null;
        const slope = sumXY / sumXX; // cm^2 / (10^8 V/T^2)
        const emFit = 8e12 / slope;
        const errorPercent = Math.abs(emFit - emRatio) / emRatio * 100;
        return { emFit, errorPercent, slope };
    }

    function updateCalculations() {
        const B = getB();
        const v = getV();
        const D_actual = getDActual();
        const em_exp = getIndividualEM();
        const aligned = Math.abs(D_mes - D_actual) < 0.15;

        const fit = calculateRegressionFit();
        let fitText = "Insuffisant (min 2 points)";
        let fitErrorText = "-";
        if (fit) {
            fitText = `${(fit.emFit / 1e11).toFixed(3)} \\times 10^{11} \\text{ C/kg}`;
            fitErrorText = `${fit.errorPercent.toFixed(1)} %`;
        }

        const theoryDiv = document.getElementById("charge-electron-theory");
        if (!theoryDiv) return;

        theoryDiv.innerHTML = `
            <div class="theory-title" style="font-weight:700; font-size:1.1rem; margin-bottom:8px; color:var(--primary);"><i data-lucide="magnet"></i> Physique de l'expérience & Modélisation</div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 15px;">
                <div>
                    <strong style="color:var(--secondary);">Paramètres physiques :</strong><br>
                    • Champ magnétique $B = $ <strong style="color:var(--text-primary);">${(B * 1000).toFixed(3)}</strong> mT<br>
                    • Vitesse des électrons $v = $ <strong style="color:var(--text-primary);">${(v / 1e6).toFixed(2)}</strong> $\\times 10^6$ m/s<br>
                    • Diamètre théorique $D = $ <strong style="color:var(--primary);">${D_actual.toFixed(2)}</strong> cm
                </div>
                <div>
                    <strong style="color:var(--secondary);">Mesure actuelle :</strong><br>
                    • Réticule ajusté à $D_{mes} = $ <strong style="color:var(--text-primary);">${D_mes.toFixed(2)}</strong> cm<br>
                    • Rapport $(e/m)_{mes} = $ <strong style="color:${aligned ? 'var(--primary)' : 'var(--secondary)'};">${(em_exp / 1e11).toFixed(3)}</strong> $\\times 10^{11}$ C/kg<br>
                    • Écart relatif = <strong style="color:${aligned ? 'var(--primary)' : '#ef4444'};">${(Math.abs(em_exp - emRatio)/emRatio * 100).toFixed(1)}</strong> %
                </div>
                <div>
                    <strong style="color:var(--secondary);">Analyse globale (Graphique) :</strong><br>
                    • Points enregistrés : <strong style="color:var(--text-primary);">${recordedPoints.length}</strong><br>
                    • Rapport $(e/m)_{fit} = $ <strong style="color:var(--primary);">${fitText}</strong><br>
                    • Écart du fit = <strong style="color:var(--text-primary);">${fitErrorText}</strong>
                </div>
            </div>
            <div style="margin-top: 12px; font-size: 0.85rem; color: var(--text-secondary); border-top: 1px solid rgba(255,255,255,0.05); padding-top: 10px;">
                <strong>Principe :</strong> Les électrons de charge $-e$ et masse $m$ sont accélérés par la tension $U$ : $\\frac{1}{2}mv^2 = eU$. 
                Ils entrent dans les bobines de Helmholtz créant un champ magnétique uniforme $B$. La force de Lorentz $\\vec{F} = -e(\\vec{v} \\times \\vec{B})$ 
                les dévie sur un cercle de rayon $R = \\frac{mv}{eB}$. On en déduit : $\\frac{e}{m} = \\frac{2U}{B^2 R^2} = \\frac{8U}{B^2 D^2}$.
            </div>
        `;

        // Render equations
        setTimeout(() => {
            if (window.MathJax && window.MathJax.typesetPromise) {
                window.MathJax.typesetPromise().catch(err => console.warn(err));
            }
        }, 100);
        lucide.createIcons();
    }

    function updatePointsTable() {
        const body = document.getElementById("charge-electron-points-body");
        if (!body) return;
        if (recordedPoints.length === 0) {
            body.innerHTML = `
                <tr>
                    <td colspan="6" style="padding: 6px; color: var(--text-secondary, #94a3b8); font-style: italic; font-size: 0.75rem;">Aucun point mesuré. Alignez le réticule et cliquez sur Mesurer.</td>
                </tr>
            `;
            return;
        }

        body.innerHTML = recordedPoints.map((pt, idx) => {
            const emVal = (80000 * pt.U) / (pt.B * pt.B * 1e-6 * pt.D * pt.D);
            return `
                <tr style="border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
                    <td style="padding: 4px;">#${idx + 1}</td>
                    <td style="padding: 4px;">${pt.U.toFixed(0)}</td>
                    <td style="padding: 4px;">${pt.I.toFixed(2)}</td>
                    <td style="padding: 4px;">${pt.B.toFixed(3)}</td>
                    <td style="padding: 4px;">${pt.D.toFixed(2)}</td>
                    <td style="padding: 4px;">${(emVal / 1e11).toFixed(3)}</td>
                </tr>
            `;
        }).join("");
    }

    newVol.addEventListener("input", (e) => {
        U = parseFloat(e.target.value);
        document.getElementById("val-ce-voltage").textContent = U;
        updateCalculations();
    });

    newCur.addEventListener("input", (e) => {
        I = parseFloat(e.target.value);
        document.getElementById("val-ce-current").textContent = I.toFixed(2);
        updateCalculations();
    });

    newRet.addEventListener("input", (e) => {
        D_mes = parseFloat(e.target.value);
        document.getElementById("val-ce-reticule").textContent = D_mes.toFixed(2);
        updateCalculations();
    });

    checkVectors.addEventListener("change", (e) => {
        showVectors = e.target.checked;
    });

    checkCoils.addEventListener("change", (e) => {
        showCoils = e.target.checked;
    });

    newRec.addEventListener("click", () => {
        const D_actual = getDActual();
        const aligned = Math.abs(D_mes - D_actual) < 0.15;
        if (!aligned) {
            showToast("Veuillez aligner précisément le réticule avec le bord du faisceau d'électrons !", false);
            return;
        }
        
        const B_val = getB();
        const xVal = (U / (B_val * B_val)) * 1e-8;
        const yVal = D_mes * D_mes;

        // Check if point already exists
        const exists = recordedPoints.some(pt => Math.abs(pt.xVal - xVal) < 0.05 && Math.abs(pt.yVal - yVal) < 0.5);
        if (!exists) {
            recordedPoints.push({
                U: U,
                I: I,
                B: B_val * 1000, // mT
                D: D_mes,
                xVal: xVal,
                yVal: yVal
            });
            // Sort by xVal
            recordedPoints.sort((a, b) => a.xVal - b.xVal);
            updatePointsTable();
            updateCalculations();
            showToast("Point de mesure enregistré !", true);
        } else {
            showToast("Ce point est déjà mesuré.", false);
        }
    });

    newPlot.addEventListener("click", () => {
        recordedPoints = [];
        const currents = [1.2, 1.4, 1.6, 1.8, 2.0, 2.2];
        currents.forEach(testI => {
            const testB = kCoils * testI;
            const testU = 150 + Math.random() * 100; // random U in range 150-250
            const testR = (Math.sqrt(2 * emRatio * testU)) / (testB * emRatio);
            const testD = 2 * testR * 100;
            
            const xVal = (testU / (testB * testB)) * 1e-8;
            const yVal = testD * testD;
            recordedPoints.push({
                U: testU,
                I: testI,
                B: testB * 1000,
                D: testD,
                xVal: xVal,
                yVal: yVal
            });
        });
        recordedPoints.sort((a, b) => a.xVal - b.xVal);
        updatePointsTable();
        updateCalculations();
        showToast("Courbes et points d'étalonnage tracés !", true);
    });

    newClr.addEventListener("click", () => {
        recordedPoints = [];
        updatePointsTable();
        updateCalculations();
        showToast("Table des points vidée.", false);
    });

    function drawArrow(fromX, fromY, toX, toY, color, label, scale) {
        const headlen = 8 * scale;
        const dx = toX - fromX;
        const dy = toY - fromY;
        const angle = Math.atan2(dy, dx);
        
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.lineWidth = 2 * scale;
        
        ctx.beginPath();
        ctx.moveTo(fromX, fromY);
        ctx.lineTo(toX, toY);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(toX, toY);
        ctx.lineTo(toX - headlen * Math.cos(angle - Math.PI / 6), toY - headlen * Math.sin(angle - Math.PI / 6));
        ctx.lineTo(toX - headlen * Math.cos(angle + Math.PI / 6), toY - headlen * Math.sin(angle + Math.PI / 6));
        ctx.closePath();
        ctx.fill();
        
        if (label) {
            ctx.fillStyle = color;
            ctx.font = `italic bold ${Math.round(11 * scale)}px sans-serif`;
            ctx.fillText(label, toX + 6 * Math.cos(angle), toY + 6 * Math.sin(angle));
        }
    }

    function draw() {
        if (!canvas.offsetParent) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const D_actual = getDActual();
        const scale = animScaleMultiplier;
        const aligned = Math.abs(D_mes - D_actual) < 0.15;

        // Draw grid
        ctx.strokeStyle = "rgba(56, 189, 248, 0.04)";
        ctx.lineWidth = 1;
        for (let x = 0; x < canvas.width; x += 40 * scale) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
        }
        for (let y = 0; y < canvas.height; y += 40 * scale) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
        }

        // Draw vertical separating line
        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(450, 20);
        ctx.lineTo(450, 380);
        ctx.stroke();

        // ==========================================
        // LEFT HALF: THE FINE BEAM TUBE & FIELD
        // ==========================================

        const cenX = 220 * scale;
        const cenY = 200 * scale;
        const bulbRad = 110 * scale;

        // 1. Draw Coils behind bulb if checked
        if (showCoils) {
            ctx.strokeStyle = "rgba(180, 83, 9, 0.15)";
            ctx.lineWidth = 12 * scale;
            ctx.beginPath();
            ctx.arc(cenX - 15 * scale, cenY, 130 * scale, 0, Math.PI * 2);
            ctx.stroke();
            
            ctx.strokeStyle = "rgba(180, 83, 9, 0.22)";
            ctx.lineWidth = 12 * scale;
            ctx.beginPath();
            ctx.arc(cenX + 15 * scale, cenY, 130 * scale, 0, Math.PI * 2);
            ctx.stroke();
        }

        // 2. Bulb glass background glow
        const bulbGrad = ctx.createRadialGradient(cenX, cenY, 20 * scale, cenX, cenY, bulbRad);
        bulbGrad.addColorStop(0, "rgba(22, 28, 45, 0.95)");
        bulbGrad.addColorStop(1, "rgba(8, 10, 18, 0.98)");
        ctx.fillStyle = bulbGrad;
        ctx.beginPath();
        ctx.arc(cenX, cenY, bulbRad, 0, Math.PI * 2);
        ctx.fill();

        // 3. Draw magnetic field crosses (otimes) in the bulb
        ctx.strokeStyle = "rgba(16, 185, 129, 0.12)";
        ctx.lineWidth = 1 * scale;
        for (let gx = 130; gx <= 310; gx += 35) {
            for (let gy = 110; gy <= 290; gy += 35) {
                const dx = gx * scale - cenX;
                const dy = gy * scale - cenY;
                if (dx*dx + dy*dy < bulbRad*bulbRad - 15*scale) {
                    const cx = gx * scale;
                    const cy = gy * scale;
                    ctx.beginPath();
                    ctx.arc(cx, cy, 5 * scale, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(cx - 3.5*scale, cy - 3.5*scale);
                    ctx.lineTo(cx + 3.5*scale, cy + 3.5*scale);
                    ctx.moveTo(cx + 3.5*scale, cy - 3.5*scale);
                    ctx.lineTo(cx - 3.5*scale, cy + 3.5*scale);
                    ctx.stroke();
                }
            }
        }

        // 4. Draw Ruler inside bulb
        ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
        ctx.lineWidth = 1 * scale;
        ctx.beginPath();
        ctx.moveTo(cenX - 90 * scale, 305 * scale);
        ctx.lineTo(cenX + 150 * scale, 305 * scale);
        ctx.stroke();

        for (let d = 0; d <= 12; d += 1) {
            const tickX = cenX + d * 20 * scale;
            const tickHeight = d % 2 === 0 ? 7 * scale : 4 * scale;
            ctx.beginPath();
            ctx.moveTo(tickX, 305 * scale);
            ctx.lineTo(tickX, (305 + tickHeight) * scale);
            ctx.stroke();
            
            if (d % 2 === 0 && d > 0) {
                ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
                ctx.font = `${Math.round(9 * scale)}px monospace`;
                ctx.textAlign = "center";
                ctx.fillText(d + "", tickX, 320 * scale);
            }
        }

        // 5. Draw electron gun
        ctx.fillStyle = "#475569";
        ctx.fillRect(cenX - 6 * scale, 280 * scale, 12 * scale, 22 * scale);
        ctx.strokeStyle = "#94a3b8";
        ctx.lineWidth = 1 * scale;
        ctx.strokeRect(cenX - 6 * scale, 280 * scale, 12 * scale, 22 * scale);
        
        ctx.fillStyle = "#f59e0b"; // filament glow
        ctx.beginPath();
        ctx.arc(cenX, 292 * scale, 2.5 * scale, 0, Math.PI * 2);
        ctx.fill();

        // 6. Draw Electron circular beam
        const R_pixels = (D_actual / 2) * 20 * scale;
        const x_c = cenX + R_pixels;
        const y_c = 280 * scale;

        ctx.save();
        ctx.shadowBlur = 12 * scale;
        ctx.shadowColor = "rgba(56, 189, 248, 0.85)";
        ctx.strokeStyle = "rgba(56, 189, 248, 0.65)";
        ctx.lineWidth = 3.5 * scale;
        ctx.beginPath();
        ctx.arc(x_c, y_c, R_pixels, Math.PI, Math.PI * 3);
        ctx.stroke();

        ctx.strokeStyle = "#e0f2fe"; // bright core
        ctx.lineWidth = 1 * scale;
        ctx.stroke();
        ctx.restore();

        // 7. Draw Réticule (Crosshair)
        const x_reticule = cenX + D_mes * 20 * scale;
        ctx.strokeStyle = aligned ? "#10b981" : "#f59e0b";
        ctx.lineWidth = 1.5 * scale;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(x_reticule, 90 * scale);
        ctx.lineTo(x_reticule, 310 * scale);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.beginPath();
        ctx.arc(x_reticule, 280 * scale, 8 * scale, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x_reticule - 12 * scale, 280 * scale);
        ctx.lineTo(x_reticule + 12 * scale, 280 * scale);
        ctx.moveTo(x_reticule, 280 * scale - 12 * scale);
        ctx.lineTo(x_reticule, 280 * scale + 12 * scale);
        ctx.stroke();

        if (aligned) {
            ctx.fillStyle = "#10b981";
            ctx.font = `bold ${Math.round(10 * scale)}px sans-serif`;
            ctx.textAlign = "center";
            ctx.fillText("ALIGNÉ", x_reticule, 266 * scale);
        }

        // 8. Draw Vectors if checked
        if (showVectors) {
            // Draw at angle 230 degrees
            const theta = 1.25 * Math.PI;
            const ptX = x_c + R_pixels * Math.cos(theta);
            const ptY = y_c + R_pixels * Math.sin(theta);

            // Velocity vector
            const vx = -Math.sin(theta);
            const vy = Math.cos(theta);
            const vLength = 40 * scale;
            drawArrow(ptX, ptY, ptX + vx * vLength, ptY + vy * vLength, "#3b82f6", "v", scale);

            // Lorentz Force vector
            const fx = -Math.cos(theta);
            const fy = -Math.sin(theta);
            const fLength = 35 * scale;
            drawArrow(ptX, ptY, ptX + fx * fLength, ptY + fy * fLength, "#ef4444", "F_L", scale);

            // Magnetic field symbol near the point
            ctx.strokeStyle = "#10b981";
            ctx.lineWidth = 1.5 * scale;
            const bX = ptX - 15 * scale;
            const bY = ptY - 15 * scale;
            ctx.beginPath();
            ctx.arc(bX, bY, 6 * scale, 0, Math.PI * 2);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(bX - 3.5*scale, bY - 3.5*scale);
            ctx.lineTo(bX + 3.5*scale, bY + 3.5*scale);
            ctx.moveTo(bX + 3.5*scale, bY - 3.5*scale);
            ctx.lineTo(bX - 3.5*scale, bY + 3.5*scale);
            ctx.stroke();
            ctx.fillStyle = "#10b981";
            ctx.font = `italic bold ${Math.round(10 * scale)}px sans-serif`;
            ctx.fillText("B", bX + 10 * scale, bY + 4 * scale);
        }

        // 9. Glass Bulb Outer Boundary
        ctx.strokeStyle = "rgba(147, 197, 253, 0.25)";
        ctx.lineWidth = 2.5 * scale;
        ctx.beginPath();
        ctx.arc(cenX, cenY, bulbRad, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
        ctx.lineWidth = 1 * scale;
        ctx.beginPath();
        ctx.arc(cenX, cenY, bulbRad - 3 * scale, -Math.PI / 4, Math.PI / 4);
        ctx.stroke();

        // ==========================================
        // RIGHT HALF: LINEAR REGRESSION PLOT
        // ==========================================
        drawGraph(recordedPoints, U, getB(), D_actual, scale);
    }

    function drawGraph(recordedPoints, U, B, D_actual, scale) {
        const gX = 520;
        const gY = 80;
        const gW = 320;
        const gH = 240;
        
        // Draw background grid
        ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
        ctx.lineWidth = 1;
        for (let gx = gX; gx <= gX + gW; gx += 40) {
            ctx.beginPath();
            ctx.moveTo(gx, gY);
            ctx.lineTo(gx, gY + gH);
            ctx.stroke();
        }
        for (let gy = gY; gy <= gY + gH; gy += 40) {
            ctx.beginPath();
            ctx.moveTo(gX, gy);
            ctx.lineTo(gX + gW, gy);
            ctx.stroke();
        }
        
        // Draw axes
        ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
        ctx.lineWidth = 1.5 * scale;
        ctx.beginPath();
        ctx.moveTo(gX, gY);
        ctx.lineTo(gX, gY + gH);
        ctx.lineTo(gX + gW, gY + gH);
        ctx.stroke();
        
        // Axis labels
        ctx.fillStyle = "#94a3b8";
        ctx.font = `${Math.round(10 * scale)}px sans-serif`;
        ctx.textAlign = "left";
        ctx.fillText("D² (cm²)", gX - 10, gY - 10);
        ctx.textAlign = "right";
        ctx.fillText("U/B² (10⁸ V/T²)", gX + gW, gY + gH + 20);
        
        // Axis ticks and numbers
        ctx.textAlign = "right";
        ctx.textBaseline = "middle";
        for (let val = 0; val <= 120; val += 20) {
            const y = gY + gH - (val / 120) * gH;
            ctx.beginPath();
            ctx.moveTo(gX - 4, y);
            ctx.lineTo(gX, y);
            ctx.stroke();
            ctx.fillText(val, gX - 8, y);
        }
        
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        for (let val = 0; val <= 3.0; val += 0.5) {
            const x = gX + (val / 3.0) * gW;
            ctx.beginPath();
            ctx.moveTo(x, gY + gH);
            ctx.lineTo(x, gY + gH + 4);
            ctx.stroke();
            ctx.fillText(val.toFixed(1), x, gY + gH + 8);
        }
        
        // Theoretical Line: D² = 45.45 * X
        ctx.strokeStyle = "rgba(56, 189, 248, 0.3)";
        ctx.lineWidth = 1.5 * scale;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(gX, gY + gH);
        const endX = 3.0;
        const endY = 45.45 * endX;
        ctx.lineTo(gX + gW, gY + gH - (endY / 120) * gH);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // Current point on the graph
        const currentX_val = (U / (B * B)) * 1e-8;
        const currentY_val = D_actual * D_actual;
        const curX = gX + (currentX_val / 3.0) * gW;
        const curY = gY + gH - (currentY_val / 120) * gH;
        
        if (curX >= gX && curX <= gX + gW && curY >= gY && curY <= gY + gH) {
            ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(curX, gY + gH);
            ctx.lineTo(curX, curY);
            ctx.lineTo(gX, curY);
            ctx.stroke();
            
            ctx.fillStyle = "rgba(56, 189, 248, 0.8)";
            ctx.beginPath();
            ctx.arc(curX, curY, 5.5 * scale, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = "#ffffff";
            ctx.lineWidth = 1;
            ctx.stroke();
        }
        
        // Plot recorded points
        recordedPoints.forEach(pt => {
            const ptX = gX + (pt.xVal / 3.0) * gW;
            const ptY = gY + gH - (pt.yVal / 120) * gH;
            
            if (ptX >= gX && ptX <= gX + gW && ptY >= gY && ptY <= gY + gH) {
                ctx.fillStyle = "#f59e0b";
                ctx.strokeStyle = "#ffffff";
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.arc(ptX, ptY, 4.5 * scale, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
            }
        });

        // Draw fit line if we have at least 2 points
        const fit = calculateRegressionFit();
        if (fit && fit.slope > 0) {
            ctx.strokeStyle = "#ef4444";
            ctx.lineWidth = 2 * scale;
            ctx.beginPath();
            ctx.moveTo(gX, gY + gH);
            const endY_fit = fit.slope * 3.0;
            ctx.lineTo(gX + gW, gY + gH - (endY_fit / 120) * gH);
            ctx.stroke();
        }
    }

    if (chargeElectronInterval) clearInterval(chargeElectronInterval);
    chargeElectronInterval = setInterval(draw, 30);
    
    updateCalculations();
    updatePointsTable();
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

// --- INTERACTIVE QUIZ ENGINE ---
let activeQuiz = null;
let currentQuestionIndex = 0;
let quizScore = 0;
let selectedOptionIndex = null;

function renderQuizWelcomeSelector() {
    const grid = document.getElementById("quizSelectorGrid");
    if (!grid) return;
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
    const backBtn = document.getElementById("backToQuizzesBtn");
    const skipBtn = document.getElementById("quizSkipBtn");
    const nextBtn = document.getElementById("quizNextBtn");
    const retryBtn = document.getElementById("retryQuizBtn");
    const finishBtn = document.getElementById("finishQuizBtn");

    if (backBtn) backBtn.addEventListener("click", quitQuiz);
    if (skipBtn) skipBtn.addEventListener("click", () => showFeedback(false));
    if (nextBtn) nextBtn.addEventListener("click", () => {
        if (currentQuestionIndex < activeQuiz.questions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        } else {
            showQuizResults();
        }
    });
    if (retryBtn) retryBtn.addEventListener("click", () => startQuiz(activeQuiz.id));
    if (finishBtn) finishBtn.addEventListener("click", quitQuiz);
}

function startQuiz(quizId) {
    const quiz = quizzesData.find(q => q.id === quizId);
    if (!quiz) return;

    activeQuiz = quiz;
    currentQuestionIndex = 0;
    quizScore = 0;
    selectedOptionIndex = null;

    document.getElementById("quizWelcomePanel").style.display = "none";
    document.getElementById("quizResultPanel").style.display = "none";
    document.getElementById("quizScreenPanel").style.display = "block";

    showQuestion();
}

function showQuestion() {
    const q = activeQuiz.questions[currentQuestionIndex];
    selectedOptionIndex = null;

    document.getElementById("quizNextBtn").disabled = true;
    document.getElementById("quizSkipBtn").style.display = "inline-flex";
    document.getElementById("quizFeedbackBox").style.display = "none";

    const totalQ = activeQuiz.questions.length;
    document.getElementById("quizCounterText").textContent = `Question ${currentQuestionIndex + 1}/${totalQ}`;
    
    const percentage = Math.round((currentQuestionIndex / totalQ) * 100);
    document.getElementById("quizProgressBar").style.width = `${percentage}%`;

    document.getElementById("quizQuestionText").textContent = q.question;
    
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
    if (selectedOptionIndex !== null) return;

    selectedOptionIndex = idx;
    const q = activeQuiz.questions[currentQuestionIndex];
    const isCorrect = (idx === q.answer);

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

    document.getElementById("quizSkipBtn").style.display = "none";
    document.getElementById("quizNextBtn").disabled = false;
}

function showQuizResults() {
    document.getElementById("quizScreenPanel").style.display = "none";
    
    const resultPanel = document.getElementById("quizResultPanel");
    const total = activeQuiz.questions.length;
    const scorePercent = Math.round((quizScore / total) * 100);

    const prevScore = userState.completedQuizzes[activeQuiz.id] || 0;
    if (scorePercent > prevScore) {
        userState.completedQuizzes[activeQuiz.id] = scorePercent;
        saveStateToStorage();
        updateDashboardUI();
    }

    document.getElementById("resultScorePercentage").textContent = `${scorePercent}%`;
    const circle = document.getElementById("resultCircleStroke");
    const strokeDash = `${scorePercent}, 100`;
    circle.setAttribute("stroke-dasharray", strokeDash);
    
    document.getElementById("resultCorrectCount").textContent = `${quizScore}/${total}`;
    document.getElementById("resultXpText").textContent = `+${Math.round(activeQuiz.xp * (quizScore/total))} XP`;

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

    resultPanel.style.display = "block";
    showToast(`Quizz terminé ! Score : ${scorePercent}%`, true);
}

function quitQuiz() {
    activeQuiz = null;
    document.getElementById("quizScreenPanel").style.display = "none";
    document.getElementById("quizResultPanel").style.display = "none";
    document.getElementById("quizWelcomePanel").style.display = "block";
    renderQuizWelcomeSelector();
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
                
                // Update username in header and modal
                document.querySelectorAll(".user-name").forEach(el => {
                    el.textContent = userState.userName;
                });
                
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

    // Global navigation function
    window.navigateToAnim = function(animId) {
        renderRoute({ type: "simulation", animId: animId });
    };

// 10. Diodes et Applications (Redressement & Filtrage) Simulator
let diodesRedressementInterval = null;
function setupDiodesRedressementSimulator() {
    const canvas = document.getElementById("canvas-diodes-redressement");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const modeSelect = document.getElementById("dr-mode");
    const emaxSlider = document.getElementById("dr-emax");
    const freqSlider = document.getElementById("dr-freq");
    const v0Slider = document.getElementById("dr-v0");
    const resistanceSlider = document.getElementById("dr-resistance");
    const capacitorSlider = document.getElementById("dr-capacitor");
    const checkEin = document.getElementById("dr-show-ein");
    const checkUout = document.getElementById("dr-show-uout");
    const btnRecord = document.getElementById("btn-dr-record");
    const btnPause = document.getElementById("btn-dr-pause");
    const btnClear = document.getElementById("btn-dr-clear");

    if (!modeSelect || !emaxSlider) return;

    // Clean up event listeners by cloning
    const newMode = modeSelect.cloneNode(true);
    modeSelect.parentNode.replaceChild(newMode, modeSelect);

    const newEmax = emaxSlider.cloneNode(true);
    emaxSlider.parentNode.replaceChild(newEmax, emaxSlider);

    const newFreq = freqSlider.cloneNode(true);
    freqSlider.parentNode.replaceChild(newFreq, freqSlider);

    const newV0 = v0Slider.cloneNode(true);
    v0Slider.parentNode.replaceChild(newV0, v0Slider);

    const newRes = resistanceSlider.cloneNode(true);
    resistanceSlider.parentNode.replaceChild(newRes, resistanceSlider);

    const newCap = capacitorSlider.cloneNode(true);
    capacitorSlider.parentNode.replaceChild(newCap, capacitorSlider);

    const newEin = checkEin.cloneNode(true);
    checkEin.parentNode.replaceChild(newEin, checkEin);

    const newUout = checkUout.cloneNode(true);
    checkUout.parentNode.replaceChild(newUout, checkUout);

    const newRec = btnRecord.cloneNode(true);
    btnRecord.parentNode.replaceChild(newRec, btnRecord);

    const newPau = btnPause.cloneNode(true);
    btnPause.parentNode.replaceChild(newPau, btnPause);

    const newClr = btnClear.cloneNode(true);
    btnClear.parentNode.replaceChild(newClr, btnClear);

    let mode = newMode.value;
    let Emax = parseFloat(newEmax.value);
    let freq = parseFloat(newFreq.value);
    let V0 = parseFloat(newV0.value);
    let R = parseFloat(newRes.value);
    let C_uF = parseFloat(newCap.value);
    let showEin = newEin.checked;
    let showUout = newUout.checked;
    let isPaused = false;

    let recordedPoints = [];
    let animTime = 0;

    function getMetrics() {
        const C_farad = C_uF * 1e-6;
        const numDiodes = mode === "double" ? 2 : 1;
        const Vmax_out = Math.max(0, Emax - numDiodes * V0);
        
        let deltaU = 0;
        let Vdc = 0;
        const fred = mode === "double" ? 2 * freq : freq;

        if (C_uF === 0 || Vmax_out === 0) {
            if (mode === "simple") {
                Vdc = Vmax_out / Math.PI;
                deltaU = Vmax_out;
            } else {
                Vdc = (2 * Vmax_out) / Math.PI;
                deltaU = Vmax_out;
            }
        } else {
            const rcTerm = fred * R * C_farad;
            deltaU = Vmax_out / (1 + rcTerm);
            deltaU = Math.min(deltaU, Vmax_out);
            Vdc = Vmax_out - deltaU / 2;
        }

        const rippleRatio = Vdc > 0 ? (deltaU / Vdc) * 100 : 0;
        return { Vmax_out, deltaU, Vdc, rippleRatio, fred };
    }

    function updateCalculations() {
        const state = getMetrics();
        const theoryDiv = document.getElementById("diodes-redressement-theory");
        if (!theoryDiv) return;

        const modeText = mode === "simple" ? "Simple Alternance (1 Diode)" : "Double Alternance (Pont de Graetz - 4 Diodes)";
        const numV0 = mode === "double" ? "2 \\cdot V_0" : "V_0";

        theoryDiv.innerHTML = `
            <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-color); border-radius: 10px; padding: 16px; margin-top: 10px;">
                <h4 style="color: var(--primary); font-size: 1rem; margin-bottom: 8px; font-family: 'Outfit', sans-serif;">
                    <i data-lucide="calculator" style="vertical-align: middle; margin-right: 6px;"></i> Résultats théoriques et mesures (${modeText})
                </h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; font-size: 0.85rem;">
                    <div><strong>Tension d'entrée crête :</strong> \\(E_{max} = ${Emax.toFixed(1)}\\text{ V}\\)</div>
                    <div><strong>Tension de sortie crête :</strong> \\(V_{max,out} = E_{max} - ${numV0} = ${state.Vmax_out.toFixed(2)}\\text{ V}\\)</div>
                    <div><strong>Tension moyenne (DC) :</strong> \\(V_{dc} \\approx ${state.Vdc.toFixed(2)}\\text{ V}\\)</div>
                    <div><strong>Tension d'ondulation :</strong> \\(\\Delta U \\approx ${state.deltaU.toFixed(2)}\\text{ V}\\)</div>
                    <div><strong>Taux de ronflement (Ripple) :</strong> \\(r = \\frac{\\Delta U}{V_{dc}} = ${state.rippleRatio.toFixed(1)}\\%\\)</div>
                    <div><strong>Constante de décharge :</strong> \\(\\tau = R \\cdot C = ${(R * C_uF * 1e-3).toFixed(2)}\\text{ ms}\\)</div>
                </div>
                <p style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 10px;">
                    <strong>Principe :</strong> Pendant l'alternance positive (ou les deux pour le pont), la diode conduit dès que \\(|e(t)| > ${numV0}\\text{V}\\) et charge le condensateur \\(C\\). Lorsque la tension d'entrée chute au-dessous de \\(u_C(t)\\), les diodes se bloquent et le condensateur se décharge avec une constante de temps \\(\\tau = R \\cdot C\\). Plus \\(C\\) est grand, plus l'ondulation \\(\\Delta U\\) est faible et la tension de sortie devient quasi-continue.
                </p>
            </div>
        `;

        if (window.lucide) window.lucide.createIcons();
        setTimeout(() => {
            if (window.MathJax && window.MathJax.typesetPromise) {
                window.MathJax.typesetPromise().catch(err => console.warn(err));
            }
        }, 100);
    }

    function updatePointsTable() {
        const body = document.getElementById("diodes-redressement-points-body");
        if (!body) return;

        if (recordedPoints.length === 0) {
            body.innerHTML = `<tr><td colspan="6" style="padding: 6px; color: var(--text-secondary); font-style: italic; font-size: 0.75rem;">Aucun point mesuré. Cliquez sur "Mesurer".</td></tr>`;
            return;
        }

        body.innerHTML = recordedPoints.map((pt) => `
            <tr style="border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
                <td style="padding: 4px;">${pt.mode === 'simple' ? 'Mono' : 'Double'}</td>
                <td style="padding: 4px;">${pt.C}</td>
                <td style="padding: 4px;">${pt.R}</td>
                <td style="padding: 4px; font-weight: 600; color: #10b981;">${pt.Vdc.toFixed(2)}</td>
                <td style="padding: 4px; color: #f59e0b;">${pt.deltaU.toFixed(2)}</td>
                <td style="padding: 4px;">${pt.r.toFixed(1)}%</td>
            </tr>
        `).join("");
    }

    newMode.addEventListener("change", (e) => {
        mode = e.target.value;
        updateCalculations();
    });

    newEmax.addEventListener("input", (e) => {
        Emax = parseFloat(e.target.value);
        document.getElementById("val-dr-emax").textContent = Emax.toFixed(1);
        updateCalculations();
    });

    newFreq.addEventListener("input", (e) => {
        freq = parseFloat(e.target.value);
        document.getElementById("val-dr-freq").textContent = freq;
        updateCalculations();
    });

    newV0.addEventListener("input", (e) => {
        V0 = parseFloat(e.target.value);
        document.getElementById("val-dr-v0").textContent = V0.toFixed(2);
        updateCalculations();
    });

    newRes.addEventListener("input", (e) => {
        R = parseFloat(e.target.value);
        document.getElementById("val-dr-resistance").textContent = R;
        updateCalculations();
    });

    newCap.addEventListener("input", (e) => {
        C_uF = parseFloat(e.target.value);
        document.getElementById("val-dr-capacitor").textContent = C_uF;
        updateCalculations();
    });

    newEin.addEventListener("change", (e) => { showEin = e.target.checked; });
    newUout.addEventListener("change", (e) => { showUout = e.target.checked; });

    newRec.addEventListener("click", () => {
        const state = getMetrics();
        recordedPoints.push({
            mode: mode,
            C: C_uF,
            R: R,
            Vdc: state.Vdc,
            deltaU: state.deltaU,
            r: state.rippleRatio
        });
        updatePointsTable();
    });

    newPau.addEventListener("click", () => {
        isPaused = !isPaused;
        newPau.innerHTML = isPaused ? `<i data-lucide="play"></i> Reprendre` : `<i data-lucide="pause"></i> Pause`;
        if (window.lucide) window.lucide.createIcons();
    });

    newClr.addEventListener("click", () => {
        recordedPoints = [];
        updatePointsTable();
    });

    function draw() {
        if (!canvas.offsetParent) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (!isPaused) {
            animTime += 0.005;
        }

        const W = canvas.width;
        const H = canvas.height;
        const scale = W / 900;

        const oscX = 40 * scale;
        const oscY = 30 * scale;
        const oscW = 540 * scale;
        const oscH = 340 * scale;
        const centerY = oscY + oscH / 2;

        ctx.fillStyle = "#090d16";
        ctx.fillRect(oscX, oscY, oscW, oscH);
        ctx.strokeStyle = "rgba(16, 185, 129, 0.15)";
        ctx.lineWidth = 1;

        for (let x = oscX; x <= oscX + oscW; x += oscW / 10) {
            ctx.beginPath();
            ctx.moveTo(x, oscY);
            ctx.lineTo(x, oscY + oscH);
            ctx.stroke();
        }
        for (let y = oscY; y <= oscY + oscH; y += oscH / 8) {
            ctx.beginPath();
            ctx.moveTo(oscX, y);
            ctx.lineTo(oscX + oscW, y);
            ctx.stroke();
        }

        ctx.strokeStyle = "rgba(16, 185, 129, 0.4)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(oscX, centerY);
        ctx.lineTo(oscX + oscW, centerY);
        ctx.stroke();

        const vScale = (oscH / 8) / 5;

        ctx.fillStyle = "rgba(16, 185, 129, 0.8)";
        ctx.font = `${Math.round(11 * scale)}px sans-serif`;
        ctx.textAlign = "left";
        ctx.fillText("CH1 (Entrée AC): 5V/div (Jaune)", oscX + 10, oscY + 20);
        ctx.fillStyle = "rgba(56, 189, 248, 0.9)";
        ctx.fillText("CH2 (Sortie Redressée): 5V/div (Cyan)", oscX + 10, oscY + 36);

        const T_period = 1 / freq;
        const timeWindow = 3 * T_period;
        const numPoints = 600;

        let isConducting = false;

        ctx.lineWidth = 2 * scale;

        if (showEin) {
            ctx.strokeStyle = "#facc15";
            ctx.shadowBlur = 4;
            ctx.shadowColor = "#facc15";
            ctx.beginPath();
            for (let i = 0; i <= numPoints; i++) {
                const t = (i / numPoints) * timeWindow;
                const e_val = Emax * Math.sin(2 * Math.PI * freq * (t + animTime));
                const pxX = oscX + (i / numPoints) * oscW;
                const pxY = centerY - e_val * vScale;
                if (i === 0) ctx.moveTo(pxX, pxY);
                else ctx.lineTo(pxX, pxY);
            }
            ctx.stroke();
            ctx.shadowBlur = 0;
        }

        if (showUout) {
            ctx.strokeStyle = "#38bdf8";
            ctx.shadowBlur = 6;
            ctx.shadowColor = "#38bdf8";
            ctx.beginPath();

            const C_farad = C_uF * 1e-6;
            const dt = timeWindow / numPoints;
            const numV0 = mode === "double" ? 2 * V0 : V0;

            let u_c = 0;
            for (let i = 0; i <= numPoints; i++) {
                const t = (i / numPoints) * timeWindow;
                const e_val = Emax * Math.sin(2 * Math.PI * freq * (t + animTime));
                
                let targetRectified = 0;
                if (mode === "simple") {
                    targetRectified = Math.max(0, e_val - numV0);
                } else {
                    targetRectified = Math.max(0, Math.abs(e_val) - numV0);
                }

                if (C_uF === 0) {
                    u_c = targetRectified;
                    isConducting = targetRectified > 0;
                } else {
                    if (targetRectified > u_c) {
                        u_c = targetRectified;
                        isConducting = true;
                    } else {
                        const decay = Math.exp(-dt / (R * C_farad));
                        u_c = u_c * decay;
                        isConducting = false;
                    }
                }

                const pxX = oscX + (i / numPoints) * oscW;
                const pxY = centerY - u_c * vScale;

                if (i === 0) ctx.moveTo(pxX, pxY);
                else ctx.lineTo(pxX, pxY);
            }
            ctx.stroke();
            ctx.shadowBlur = 0;
        }

        const metrics = getMetrics();
        const yVdc = centerY - metrics.Vdc * vScale;
        ctx.strokeStyle = "#10b981";
        ctx.lineWidth = 1.5;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(oscX, yVdc);
        ctx.lineTo(oscX + oscW, yVdc);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = "#10b981";
        ctx.font = `bold ${Math.round(10 * scale)}px sans-serif`;
        ctx.textAlign = "right";
        ctx.fillText(`V_dc = ${metrics.Vdc.toFixed(2)}V`, oscX + oscW - 10, yVdc - 4);

        const schemX = 610 * scale;
        const schemY = 30 * scale;
        const schemW = 260 * scale;
        const schemH = 340 * scale;

        ctx.fillStyle = "rgba(15, 23, 42, 0.8)";
        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
        ctx.lineWidth = 1;
        ctx.fillRect(schemX, schemY, schemW, schemH);
        ctx.strokeRect(schemX, schemY, schemW, schemH);

        ctx.fillStyle = "#ffffff";
        ctx.font = `bold ${Math.round(13 * scale)}px 'Outfit', sans-serif`;
        ctx.textAlign = "center";
        ctx.fillText(mode === "simple" ? "Circuit Simple Alternance" : "Pont de Graetz (4 Diodes)", schemX + schemW / 2, schemY + 25 * scale);

        ctx.fillStyle = isConducting ? "rgba(16, 185, 129, 0.2)" : "rgba(239, 68, 68, 0.2)";
        ctx.strokeStyle = isConducting ? "#10b981" : "#ef4444";
        ctx.lineWidth = 1.5;
        const badgeW = 180 * scale;
        const badgeH = 28 * scale;
        const badgeX = schemX + (schemW - badgeW) / 2;
        const badgeY = schemY + 40 * scale;
        ctx.fillRect(badgeX, badgeY, badgeW, badgeH);
        ctx.strokeRect(badgeX, badgeY, badgeW, badgeH);

        ctx.fillStyle = isConducting ? "#10b981" : "#ef4444";
        ctx.font = `bold ${Math.round(11 * scale)}px sans-serif`;
        ctx.fillText(isConducting ? "⚡ Diode CONDUCTRICE (Charge)" : "🔒 Diode BLOQUÉE (Décharge)", schemX + schemW / 2, badgeY + 18 * scale);

        const cX = schemX + 30 * scale;
        const cY = schemY + 95 * scale;
        const cW = 200 * scale;
        const cH = 140 * scale;

        ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
        ctx.lineWidth = 2 * scale;

        const srcX = cX;
        const srcY = cY + cH / 2;
        ctx.beginPath();
        ctx.arc(srcX, srcY, 18 * scale, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = "#facc15";
        ctx.font = `bold ${Math.round(12 * scale)}px sans-serif`;
        ctx.fillText("~", srcX, srcY + 4 * scale);

        if (mode === "simple") {
            ctx.beginPath();
            ctx.moveTo(srcX, cY);
            ctx.lineTo(srcX + 50 * scale, cY);
            
            const dX = srcX + 70 * scale;
            ctx.moveTo(srcX + 50 * scale, cY);
            ctx.lineTo(dX - 10 * scale, cY);
            ctx.fillStyle = isConducting ? "#10b981" : "rgba(255,255,255,0.4)";
            ctx.beginPath();
            ctx.moveTo(dX - 10 * scale, cY - 10 * scale);
            ctx.lineTo(dX - 10 * scale, cY + 10 * scale);
            ctx.lineTo(dX + 10 * scale, cY);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(dX + 10 * scale, cY - 10 * scale);
            ctx.lineTo(dX + 10 * scale, cY + 10 * scale);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(dX + 10 * scale, cY);
            ctx.lineTo(cX + cW, cY);
            ctx.lineTo(cX + cW, cY + cH);
            ctx.lineTo(srcX, cY + cH);
            ctx.lineTo(srcX, srcY + 18 * scale);
            ctx.moveTo(srcX, srcY - 18 * scale);
            ctx.lineTo(srcX, cY);
            ctx.stroke();

            const capX = cX + 130 * scale;
            ctx.beginPath();
            ctx.moveTo(capX, cY);
            ctx.lineTo(capX, cY + 55 * scale);
            ctx.moveTo(capX - 12 * scale, cY + 55 * scale);
            ctx.lineTo(capX + 12 * scale, cY + 55 * scale);
            ctx.moveTo(capX - 12 * scale, cY + 65 * scale);
            ctx.lineTo(capX + 12 * scale, cY + 65 * scale);
            ctx.moveTo(capX, cY + 65 * scale);
            ctx.lineTo(capX, cY + cH);
            ctx.stroke();
            ctx.fillStyle = "#38bdf8";
            ctx.font = `${Math.round(10 * scale)}px sans-serif`;
            ctx.fillText(`C=${C_uF}µF`, capX + 22 * scale, cY + 62 * scale);

            const resX = cX + cW;
            ctx.fillStyle = "rgba(15, 23, 42, 0.9)";
            ctx.fillRect(resX - 8 * scale, cY + 45 * scale, 16 * scale, 35 * scale);
            ctx.strokeRect(resX - 8 * scale, cY + 45 * scale, 16 * scale, 35 * scale);
            ctx.fillStyle = "#f59e0b";
            ctx.fillText(`R=${R}Ω`, resX - 22 * scale, cY + 65 * scale);
        } else {
            const bX = cX + 75 * scale;
            const bY = cY + cH / 2;
            const bRad = 35 * scale;

            ctx.strokeStyle = "#38bdf8";
            ctx.beginPath();
            ctx.moveTo(bX - bRad, bY);
            ctx.lineTo(bX, bY - bRad);
            ctx.lineTo(bX + bRad, bY);
            ctx.lineTo(bX, bY + bRad);
            ctx.closePath();
            ctx.stroke();

            ctx.fillStyle = "rgba(56, 189, 248, 0.15)";
            ctx.fill();

            ctx.fillStyle = "#ffffff";
            ctx.font = `bold ${Math.round(10 * scale)}px sans-serif`;
            ctx.fillText("D1", bX - 14 * scale, bY - 14 * scale);
            ctx.fillText("D2", bX + 14 * scale, bY - 14 * scale);
            ctx.fillText("D3", bX - 14 * scale, bY + 18 * scale);
            ctx.fillText("D4", bX + 14 * scale, bY + 18 * scale);

            ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
            ctx.beginPath();
            ctx.moveTo(srcX, srcY - 18 * scale);
            ctx.lineTo(srcX, cY);
            ctx.lineTo(bX - bRad, bY);
            ctx.moveTo(srcX, srcY + 18 * scale);
            ctx.lineTo(srcX, cY + cH);
            ctx.lineTo(bX, bY + bRad);

            ctx.moveTo(bX, bY - bRad);
            ctx.lineTo(cX + cW, cY);
            ctx.lineTo(cX + cW, cY + cH);
            ctx.lineTo(bX + bRad, bY);
            ctx.stroke();

            const capX = cX + 145 * scale;
            ctx.beginPath();
            ctx.moveTo(capX, cY);
            ctx.lineTo(capX, cY + 55 * scale);
            ctx.moveTo(capX - 10 * scale, cY + 55 * scale);
            ctx.lineTo(capX + 10 * scale, cY + 55 * scale);
            ctx.moveTo(capX - 10 * scale, cY + 65 * scale);
            ctx.lineTo(capX + 10 * scale, cY + 65 * scale);
            ctx.moveTo(capX, cY + 65 * scale);
            ctx.lineTo(capX, cY + cH);
            ctx.stroke();
            ctx.fillStyle = "#38bdf8";
            ctx.fillText(`C`, capX + 15 * scale, cY + 62 * scale);
        }

        const pBoxY = schemY + 250 * scale;
        ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
        ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
        ctx.fillRect(schemX + 10 * scale, pBoxY, schemW - 20 * scale, 80 * scale);
        ctx.strokeRect(schemX + 10 * scale, pBoxY, schemW - 20 * scale, 80 * scale);

        ctx.textAlign = "left";
        ctx.fillStyle = "#94a3b8";
        ctx.font = `${Math.round(10 * scale)}px sans-serif`;
        ctx.fillText(`E_max = ${Emax.toFixed(1)} V  |  f = ${freq} Hz`, schemX + 20 * scale, pBoxY + 20 * scale);
        ctx.fillText(`V_seuil (V0) = ${V0.toFixed(2)} V`, schemX + 20 * scale, pBoxY + 38 * scale);
        ctx.fillStyle = "#f59e0b";
        ctx.fillText(`Ondulation ΔU ≈ ${metrics.deltaU.toFixed(2)} V`, schemX + 20 * scale, pBoxY + 56 * scale);
        ctx.fillStyle = "#10b981";
        ctx.fillText(`Taux ronflement r ≈ ${metrics.rippleRatio.toFixed(1)}%`, schemX + 20 * scale, pBoxY + 70 * scale);
    }

    if (diodesRedressementInterval) clearInterval(diodesRedressementInterval);
    diodesRedressementInterval = setInterval(draw, 30);

    updateCalculations();
    updatePointsTable();
}

// 11. Transistor Bipolaire Simulator
let transistorBipolaireInterval = null;
function setupTransistorBipolaireSimulator() {
    const canvas = document.getElementById("canvas-transistor-bipolaire");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const plotSelect = document.getElementById("tb-plot-type");
    const betaSlider = document.getElementById("tb-beta");
    const ibSlider = document.getElementById("tb-ib");
    const vccSlider = document.getElementById("tb-vcc");
    const rcSlider = document.getElementById("tb-rc");
    const checkLoadline = document.getElementById("tb-show-loadline");
    const checkNetwork = document.getElementById("tb-show-network");
    const btnRecord = document.getElementById("btn-tb-record");
    const btnClear = document.getElementById("btn-tb-clear");

    if (!plotSelect || !betaSlider) return;

    // Clean up event listeners
    const newPlot = plotSelect.cloneNode(true);
    plotSelect.parentNode.replaceChild(newPlot, plotSelect);

    const newBeta = betaSlider.cloneNode(true);
    betaSlider.parentNode.replaceChild(newBeta, betaSlider);

    const newIb = ibSlider.cloneNode(true);
    ibSlider.parentNode.replaceChild(newIb, ibSlider);

    const newVcc = vccSlider.cloneNode(true);
    vccSlider.parentNode.replaceChild(newVcc, vccSlider);

    const newRc = rcSlider.cloneNode(true);
    rcSlider.parentNode.replaceChild(newRc, rcSlider);

    const newLoadline = checkLoadline.cloneNode(true);
    checkLoadline.parentNode.replaceChild(newLoadline, checkLoadline);

    const newNetwork = checkNetwork.cloneNode(true);
    checkNetwork.parentNode.replaceChild(newNetwork, checkNetwork);

    const newRec = btnRecord.cloneNode(true);
    btnRecord.parentNode.replaceChild(newRec, btnRecord);

    const newClr = btnClear.cloneNode(true);
    btnClear.parentNode.replaceChild(newClr, btnClear);

    let plotType = newPlot.value;
    let beta = parseFloat(newBeta.value);
    let Ib_uA = parseFloat(newIb.value);
    let Vcc = parseFloat(newVcc.value);
    let Rc = parseFloat(newRc.value);
    let showLoadline = newLoadline.checked;
    let showNetwork = newNetwork.checked;

    let recordedPoints = [];
    const Vbe0 = 0.65;
    const Vce_sat = 0.20;

    function getOperatingPoint(ibVal, betaVal, vccVal, rcVal) {
        const Ib_A = ibVal * 1e-6;
        if (ibVal === 0) {
            return {
                Ib: 0,
                Vbe: 0,
                Ic: 0,
                Vce: vccVal,
                state: "Bloqué",
                color: "#ef4444"
            };
        }

        const Vbe = Vbe0 + 0.02 * Math.log(ibVal / 10 + 1);
        const Ic_lin = betaVal * Ib_A * 1000;
        const Ic_sat = Math.max(0, ((vccVal - Vce_sat) / rcVal) * 1000);

        if (Ic_lin < Ic_sat) {
            const Vce = vccVal - (rcVal * (Ic_lin / 1000));
            return {
                Ib: ibVal,
                Vbe: Vbe,
                Ic: Ic_lin,
                Vce: Math.max(Vce_sat, Vce),
                state: "Linéaire (Amplificateur)",
                color: "#10b981"
            };
        } else {
            return {
                Ib: ibVal,
                Vbe: Vbe + 0.05,
                Ic: Ic_sat,
                Vce: Vce_sat,
                state: "Saturé (Switch ON)",
                color: "#f59e0b"
            };
        }
    }

    function updateCalculations() {
        const Q = getOperatingPoint(Ib_uA, beta, Vcc, Rc);
        const theoryDiv = document.getElementById("transistor-bipolaire-theory");
        if (!theoryDiv) return;

        const Ic_sat_mA = (((Vcc - Vce_sat) / Rc) * 1000).toFixed(2);
        const Pd_mW = (Q.Vce * Q.Ic).toFixed(2);

        theoryDiv.innerHTML = `
            <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-color); border-radius: 10px; padding: 16px; margin-top: 10px;">
                <h4 style="color: #38bdf8; font-size: 1rem; margin-bottom: 8px; font-family: 'Outfit', sans-serif;">
                    <i data-lucide="cpu" style="vertical-align: middle; margin-right: 6px;"></i> Point de Fonctionnement Statique \\(Q(V_{CEQ}, I_{CQ})\\)
                </h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; font-size: 0.85rem;">
                    <div><strong>Courant de base :</strong> \\(I_B = ${Ib_uA}\\text{ }\\mu\\text{A}\\)</div>
                    <div><strong>Tension Base-Émetteur :</strong> \\(V_{BE} \\approx ${Q.Vbe.toFixed(2)}\\text{ V}\\)</div>
                    <div><strong>Courant Collecteur :</strong> \\(I_C = ${Q.Ic.toFixed(2)}\\text{ mA}\\)</div>
                    <div><strong>Tension Collecteur-Émetteur :</strong> \\(V_{CE} = ${Q.Vce.toFixed(2)}\\text{ V}\\)</div>
                    <div><strong>Régime de Fonctionnement :</strong> <span style="color:${Q.color}; font-weight:700;">${Q.state}</span></div>
                    <div><strong>Puissance Dissipée :</strong> \\(P_D = V_{CE} \\cdot I_C = ${Pd_mW}\\text{ mW}\\)</div>
                    <div><strong>Courant de Saturation :</strong> \\(I_{C,sat} = \\frac{V_{CC} - V_{sat}}{R_C} = ${Ic_sat_mA}\\text{ mA}\\)</div>
                </div>
            </div>
        `;

        if (window.lucide) window.lucide.createIcons();
        setTimeout(() => {
            if (window.MathJax && window.MathJax.typesetPromise) {
                window.MathJax.typesetPromise().catch(err => console.warn(err));
            }
        }, 100);
    }

    function updatePointsTable() {
        const body = document.getElementById("transistor-bipolaire-points-body");
        if (!body) return;

        if (recordedPoints.length === 0) {
            body.innerHTML = `<tr><td colspan="5" style="padding: 6px; color: var(--text-secondary); font-style: italic; font-size: 0.75rem;">Aucun point mesuré. Cliquez sur "Mesurer Q".</td></tr>`;
            return;
        }

        body.innerHTML = recordedPoints.map((pt) => `
            <tr style="border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
                <td style="padding: 4px;">${pt.Ib}</td>
                <td style="padding: 4px;">${pt.Vbe.toFixed(2)}</td>
                <td style="padding: 4px;">${pt.Vce.toFixed(2)}</td>
                <td style="padding: 4px; font-weight: 600; color: #38bdf8;">${pt.Ic.toFixed(2)}</td>
                <td style="padding: 4px; color:${pt.color}; font-weight:600;">${pt.state}</td>
            </tr>
        `).join("");
    }

    newPlot.addEventListener("change", (e) => {
        plotType = e.target.value;
        updateCalculations();
    });

    newBeta.addEventListener("input", (e) => {
        beta = parseFloat(e.target.value);
        document.getElementById("val-tb-beta").textContent = beta;
        updateCalculations();
    });

    newIb.addEventListener("input", (e) => {
        Ib_uA = parseFloat(e.target.value);
        document.getElementById("val-tb-ib").textContent = Ib_uA;
        updateCalculations();
    });

    newVcc.addEventListener("input", (e) => {
        Vcc = parseFloat(e.target.value);
        document.getElementById("val-tb-vcc").textContent = Vcc.toFixed(1);
        updateCalculations();
    });

    newRc.addEventListener("input", (e) => {
        Rc = parseFloat(e.target.value);
        document.getElementById("val-tb-rc").textContent = Rc;
        updateCalculations();
    });

    newLoadline.addEventListener("change", (e) => { showLoadline = e.target.checked; });
    newNetwork.addEventListener("change", (e) => { showNetwork = e.target.checked; });

    newRec.addEventListener("click", () => {
        const Q = getOperatingPoint(Ib_uA, beta, Vcc, Rc);
        recordedPoints.push(Q);
        updatePointsTable();
    });

    newClr.addEventListener("click", () => {
        recordedPoints = [];
        updatePointsTable();
    });

    function draw() {
        if (!canvas.offsetParent) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const W = canvas.width;
        const H = canvas.height;
        const scale = W / 900;

        const pX = 50 * scale;
        const pY = 40 * scale;
        const pW = 530 * scale;
        const pH = 320 * scale;

        ctx.fillStyle = "#090d16";
        ctx.fillRect(pX, pY, pW, pH);

        ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
        ctx.lineWidth = 1;
        for (let x = pX; x <= pX + pW; x += pW / 10) {
            ctx.beginPath(); ctx.moveTo(x, pY); ctx.lineTo(x, pY + pH); ctx.stroke();
        }
        for (let y = pY; y <= pY + pH; y += pH / 8) {
            ctx.beginPath(); ctx.moveTo(pX, y); ctx.lineTo(pX + pW, y); ctx.stroke();
        }

        ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
        ctx.lineWidth = 1.5 * scale;
        ctx.beginPath();
        ctx.moveTo(pX, pY); ctx.lineTo(pX, pY + pH); ctx.lineTo(pX + pW, pY + pH);
        ctx.stroke();

        const Q_current = getOperatingPoint(Ib_uA, beta, Vcc, Rc);

        if (plotType === "output") {
            const maxVce = Math.max(15, Vcc + 2);
            const maxIc = Math.max(15, (Vcc / Rc) * 1000 * 1.2);

            ctx.fillStyle = "#94a3b8";
            ctx.font = `${Math.round(10 * scale)}px sans-serif`;
            ctx.textAlign = "left";
            ctx.fillText("Ic (mA)", pX + 5, pY - 10);
            ctx.textAlign = "right";
            ctx.fillText("Vce (V)", pX + pW, pY + pH + 20);

            const ibStepList = showNetwork ? [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100] : [Ib_uA];

            ibStepList.forEach(ibVal => {
                const isCurrentIb = Math.abs(ibVal - Ib_uA) < 1;
                ctx.strokeStyle = isCurrentIb ? "#38bdf8" : "rgba(56, 189, 248, 0.25)";
                ctx.lineWidth = isCurrentIb ? 2.5 * scale : 1 * scale;
                ctx.beginPath();

                for (let i = 0; i <= 200; i++) {
                    const vceVal = (i / 200) * maxVce;
                    const ib_A = ibVal * 1e-6;
                    let icVal = beta * ib_A * 1000;

                    if (vceVal < Vce_sat) {
                        icVal = icVal * (vceVal / Vce_sat);
                    }

                    const pxX = pX + (vceVal / maxVce) * pW;
                    const pxY = (pY + pH) - (icVal / maxIc) * pH;

                    if (i === 0) ctx.moveTo(pxX, pxY);
                    else ctx.lineTo(pxX, pxY);
                }
                ctx.stroke();

                if (showNetwork && ibVal % 20 === 0) {
                    const icEnd = beta * (ibVal * 1e-6) * 1000;
                    const endY = (pY + pH) - (icEnd / maxIc) * pH;
                    if (endY >= pY && endY <= pY + pH) {
                        ctx.fillStyle = isCurrentIb ? "#38bdf8" : "#64748b";
                        ctx.font = `${Math.round(9 * scale)}px sans-serif`;
                        ctx.textAlign = "left";
                        ctx.fillText(`${ibVal}µA`, pX + pW - 35 * scale, endY - 4);
                    }
                }
            });

            if (showLoadline) {
                const icSat_mA = (Vcc / Rc) * 1000;
                const xVcc = pX + (Vcc / maxVce) * pW;
                const yIcSat = (pY + pH) - (icSat_mA / maxIc) * pH;

                ctx.strokeStyle = "#f59e0b";
                ctx.lineWidth = 1.5 * scale;
                ctx.setLineDash([4, 4]);
                ctx.beginPath();
                ctx.moveTo(xVcc, pY + pH);
                ctx.lineTo(pX, yIcSat);
                ctx.stroke();
                ctx.setLineDash([]);

                ctx.fillStyle = "#f59e0b";
                ctx.font = `bold ${Math.round(9 * scale)}px sans-serif`;
                ctx.fillText(`VCC=${Vcc}V`, xVcc - 10, pY + pH + 15);
                ctx.fillText(`Ic,sat`, pX + 5, yIcSat - 5);
            }

            const qX = pX + (Q_current.Vce / maxVce) * pW;
            const qY = (pY + pH) - (Q_current.Ic / maxIc) * pH;

            if (qX >= pX && qX <= pX + pW && qY >= pY && qY <= pY + pH) {
                ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
                ctx.lineWidth = 1;
                ctx.setLineDash([3, 3]);
                ctx.beginPath();
                ctx.moveTo(qX, pY + pH); ctx.lineTo(qX, qY); ctx.lineTo(pX, qY);
                ctx.stroke();
                ctx.setLineDash([]);

                ctx.fillStyle = Q_current.color;
                ctx.beginPath();
                ctx.arc(qX, qY, 6 * scale, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = "#ffffff"; ctx.lineWidth = 1.5; ctx.stroke();

                ctx.fillStyle = "#ffffff";
                ctx.font = `bold ${Math.round(11 * scale)}px sans-serif`;
                ctx.textAlign = "left";
                ctx.fillText(` Q(${Q_current.Vce.toFixed(1)}V, ${Q_current.Ic.toFixed(1)}mA)`, qX + 8, qY - 6);
            }

        } else if (plotType === "input") {
            ctx.fillStyle = "#94a3b8";
            ctx.font = `${Math.round(10 * scale)}px sans-serif`;
            ctx.fillText("Ib (µA)", pX + 5, pY - 10);
            ctx.textAlign = "right";
            ctx.fillText("Vbe (V)", pX + pW, pY + pH + 20);

            ctx.strokeStyle = "#10b981";
            ctx.lineWidth = 2.5 * scale;
            ctx.beginPath();

            for (let i = 0; i <= 200; i++) {
                const vbeVal = (i / 200) * 1.0;
                let ibVal = 0;
                if (vbeVal > Vbe0) {
                    ibVal = 10 * (Math.exp((vbeVal - Vbe0) / 0.04) - 1);
                }
                ibVal = Math.min(100, ibVal);

                const pxX = pX + (vbeVal / 1.0) * pW;
                const pxY = (pY + pH) - (ibVal / 100) * pH;

                if (i === 0) ctx.moveTo(pxX, pxY);
                else ctx.lineTo(pxX, pxY);
            }
            ctx.stroke();

            const xVbe0 = pX + (Vbe0 / 1.0) * pW;
            ctx.strokeStyle = "rgba(239, 68, 68, 0.5)";
            ctx.setLineDash([4, 4]);
            ctx.beginPath(); ctx.moveTo(xVbe0, pY); ctx.lineTo(xVbe0, pY + pH); ctx.stroke();
            ctx.setLineDash([]);
            ctx.fillStyle = "#ef4444";
            ctx.font = `${Math.round(9 * scale)}px sans-serif`;
            ctx.fillText(`Seuil Vbe0 = ${Vbe0}V`, xVbe0 + 5, pY + 20);

        } else if (plotType === "transfer") {
            ctx.fillStyle = "#94a3b8";
            ctx.font = `${Math.round(10 * scale)}px sans-serif`;
            ctx.fillText("Ic (mA)", pX + 5, pY - 10);
            ctx.textAlign = "right";
            ctx.fillText("Ib (µA)", pX + pW, pY + pH + 20);

            const maxIc = Math.max(15, (Vcc / Rc) * 1000 * 1.2);

            ctx.strokeStyle = "#8b5cf6";
            ctx.lineWidth = 2.5 * scale;
            ctx.beginPath();

            const Ic_sat_mA = ((Vcc - Vce_sat) / Rc) * 1000;

            for (let i = 0; i <= 100; i++) {
                const ibVal = i;
                let icVal = beta * (ibVal * 1e-6) * 1000;
                icVal = Math.min(icVal, Ic_sat_mA);

                const pxX = pX + (ibVal / 100) * pW;
                const pxY = (pY + pH) - (icVal / maxIc) * pH;

                if (i === 0) ctx.moveTo(pxX, pxY);
                else ctx.lineTo(pxX, pxY);
            }
            ctx.stroke();

            ctx.fillStyle = "#8b5cf6";
            ctx.font = `bold ${Math.round(11 * scale)}px sans-serif`;
            ctx.fillText(`Pente β = ${beta}`, pX + 100 * scale, pY + 60 * scale);
        }

        const schemX = 610 * scale;
        const schemY = 40 * scale;
        const schemW = 260 * scale;
        const schemH = 320 * scale;

        ctx.fillStyle = "rgba(15, 23, 42, 0.8)";
        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
        ctx.lineWidth = 1;
        ctx.fillRect(schemX, schemY, schemW, schemH);
        ctx.strokeRect(schemX, schemY, schemW, schemH);

        ctx.fillStyle = "#ffffff";
        ctx.font = `bold ${Math.round(13 * scale)}px 'Outfit', sans-serif`;
        ctx.textAlign = "center";
        ctx.fillText("Symbole & Montage NPN", schemX + schemW / 2, schemY + 25 * scale);

        const badgeW = 200 * scale;
        const badgeH = 28 * scale;
        const badgeX = schemX + (schemW - badgeW) / 2;
        const badgeY = schemY + 40 * scale;

        ctx.fillStyle = Q_current.state.includes("Linéaire") ? "rgba(16, 185, 129, 0.2)" : Q_current.state.includes("Saturé") ? "rgba(245, 158, 11, 0.2)" : "rgba(239, 68, 68, 0.2)";
        ctx.strokeStyle = Q_current.color;
        ctx.lineWidth = 1.5;
        ctx.fillRect(badgeX, badgeY, badgeW, badgeH);
        ctx.strokeRect(badgeX, badgeY, badgeW, badgeH);

        ctx.fillStyle = Q_current.color;
        ctx.font = `bold ${Math.round(10 * scale)}px sans-serif`;
        ctx.fillText(Q_current.state, schemX + schemW / 2, badgeY + 18 * scale);

        const tX = schemX + 130 * scale;
        const tY = schemY + 145 * scale;
        const tRad = 28 * scale;

        ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
        ctx.lineWidth = 2 * scale;
        ctx.beginPath();
        ctx.arc(tX, tY, tRad, 0, Math.PI * 2);
        ctx.stroke();

        ctx.lineWidth = 3 * scale;
        ctx.beginPath();
        ctx.moveTo(tX - 8 * scale, tY - 14 * scale);
        ctx.lineTo(tX - 8 * scale, tY + 14 * scale);
        ctx.stroke();

        ctx.lineWidth = 2 * scale;
        ctx.beginPath();
        ctx.moveTo(tX - tRad, tY);
        ctx.lineTo(tX - 8 * scale, tY);
        ctx.stroke();
        ctx.fillStyle = "#38bdf8";
        ctx.font = `bold ${Math.round(10 * scale)}px sans-serif`;
        ctx.fillText("B", tX - tRad - 10 * scale, tY + 4 * scale);

        ctx.beginPath();
        ctx.moveTo(tX - 8 * scale, tY - 8 * scale);
        ctx.lineTo(tX + 12 * scale, tY - 18 * scale);
        ctx.lineTo(tX + 12 * scale, tY - tRad);
        ctx.stroke();
        ctx.fillStyle = "#f59e0b";
        ctx.fillText("C", tX + 22 * scale, tY - tRad + 4 * scale);

        ctx.beginPath();
        ctx.moveTo(tX - 8 * scale, tY + 8 * scale);
        ctx.lineTo(tX + 12 * scale, tY + 18 * scale);
        ctx.lineTo(tX + 12 * scale, tY + tRad);
        ctx.stroke();

        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.beginPath();
        ctx.moveTo(tX + 12 * scale, tY + 18 * scale);
        ctx.lineTo(tX + 2 * scale, tY + 12 * scale);
        ctx.lineTo(tX + 7 * scale, tY + 22 * scale);
        ctx.closePath();
        ctx.fill();
        ctx.fillText("E", tX + 22 * scale, tY + tRad + 4 * scale);

        const pBoxY = schemY + 215 * scale;
        ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
        ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
        ctx.fillRect(schemX + 10 * scale, pBoxY, schemW - 20 * scale, 90 * scale);
        ctx.strokeRect(schemX + 10 * scale, pBoxY, schemW - 20 * scale, 90 * scale);

        ctx.textAlign = "left";
        ctx.fillStyle = "#94a3b8";
        ctx.font = `${Math.round(10 * scale)}px sans-serif`;
        ctx.fillText(`Gain β (hfe) = ${beta}`, schemX + 20 * scale, pBoxY + 20 * scale);
        ctx.fillText(`IB = ${Ib_uA} µA  |  VBE ≈ ${Q_current.Vbe.toFixed(2)} V`, schemX + 20 * scale, pBoxY + 38 * scale);
        ctx.fillStyle = "#38bdf8";
        ctx.fillText(`IC = ${Q_current.Ic.toFixed(2)} mA`, schemX + 20 * scale, pBoxY + 56 * scale);
        ctx.fillStyle = "#10b981";
        ctx.fillText(`VCE = ${Q_current.Vce.toFixed(2)} V`, schemX + 20 * scale, pBoxY + 74 * scale);
    }

    if (transistorBipolaireInterval) clearInterval(transistorBipolaireInterval);
    transistorBipolaireInterval = setInterval(draw, 30);

    updateCalculations();
    updatePointsTable();
}

// 12. Amplificateur Opérationnel (AOP) Simulator
let aopAmplificateurInterval = null;
function setupAopAmplificateurSimulator() {
    const canvas = document.getElementById("canvas-aop-amplificateur");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const modeSelect = document.getElementById("aop-mode");
    const waveSelect = document.getElementById("aop-waveform");
    const vinSlider = document.getElementById("aop-vin");
    const v2Slider = document.getElementById("aop-v2");
    const freqSlider = document.getElementById("aop-freq");
    const r1Slider = document.getElementById("aop-r1");
    const r2Slider = document.getElementById("aop-r2");
    const vsatSlider = document.getElementById("aop-vsat");
    const btnRecord = document.getElementById("btn-aop-record");
    const btnPause = document.getElementById("btn-aop-pause");
    const btnClear = document.getElementById("btn-aop-clear");

    if (!modeSelect || !vinSlider) return;

    // Clean up event listeners by cloning
    const newMode = modeSelect.cloneNode(true);
    modeSelect.parentNode.replaceChild(newMode, modeSelect);

    const newWave = waveSelect.cloneNode(true);
    waveSelect.parentNode.replaceChild(newWave, waveSelect);

    const newVin = vinSlider.cloneNode(true);
    vinSlider.parentNode.replaceChild(newVin, vinSlider);

    let newV2 = v2Slider;
    if (v2Slider) {
        newV2 = v2Slider.cloneNode(true);
        v2Slider.parentNode.replaceChild(newV2, v2Slider);
    }

    const newFreq = freqSlider.cloneNode(true);
    freqSlider.parentNode.replaceChild(newFreq, freqSlider);

    const newR1 = r1Slider.cloneNode(true);
    r1Slider.parentNode.replaceChild(newR1, r1Slider);

    const newR2 = r2Slider.cloneNode(true);
    r2Slider.parentNode.replaceChild(newR2, r2Slider);

    const newVsat = vsatSlider.cloneNode(true);
    vsatSlider.parentNode.replaceChild(newVsat, vsatSlider);

    const newRec = btnRecord.cloneNode(true);
    btnRecord.parentNode.replaceChild(newRec, btnRecord);

    const newPau = btnPause.cloneNode(true);
    btnPause.parentNode.replaceChild(newPau, btnPause);

    const newClr = btnClear.cloneNode(true);
    btnClear.parentNode.replaceChild(newClr, btnClear);

    let mode = newMode.value;
    let waveform = newWave.value;
    let Vin_max = parseFloat(newVin.value);
    let V2 = newV2 ? parseFloat(newV2.value) : 0.5;
    let freq = parseFloat(newFreq.value);
    let R1 = parseFloat(newR1.value);
    let R2 = parseFloat(newR2.value);
    let Vsat = parseFloat(newVsat.value);
    let isPaused = false;

    let recordedPoints = [];
    let animTime = 0;

    function toggleV2Visibility() {
        const v2Group = document.getElementById("group-aop-v2");
        if (v2Group) {
            if (mode === "summing" || mode === "differential" || mode === "comparator") {
                v2Group.style.display = "flex";
            } else {
                v2Group.style.display = "none";
            }
        }
    }
    toggleV2Visibility();

    function getMetrics() {
        let Av = 0;
        let modeName = "";
        let phaseText = "";
        let desc = "";

        if (mode === "inverting") {
            Av = -(R2 / R1);
            modeName = "Amplificateur Inverseur";
            phaseText = "Déphasage 180° (π)";
            desc = "Amplifie la tension d'entrée \\(V_1(t)\\) avec un déphasage de 180° (signe négatif). Relation : \\(V_{out} = -\\frac{R_2}{R_1} V_1\\).";
        } else if (mode === "noninverting") {
            Av = 1 + (R2 / R1);
            modeName = "Amplificateur Non-Inverseur";
            phaseText = "En phase (0°)";
            desc = "Amplifie la tension d'entrée \\(V_1(t)\\) tout en conservant exactement sa phase (0°). Relation : \\(V_{out} = \\left(1 + \\frac{R_2}{R_1}\\right) V_1\\).";
        } else if (mode === "follower") {
            Av = 1;
            modeName = "Suiveur de Tension (Buffer)";
            phaseText = "En phase (0°)";
            desc = "La sortie recopie fidèlement l'entrée (\\(V_{out} = V_1\\), \\(A_v = 1\\)). Sert d'adaptateur d'impédance idéal grâce à son impédance d'entrée très élevée.";
        } else if (mode === "summing") {
            Av = -(R2 / R1);
            modeName = "Amplificateur Sommateur Inverseur";
            phaseText = `Vout = -${(R2/R1).toFixed(1)}(V1 + V2)`;
            desc = "Additionne algébriquement les tensions d'entrée \\(V_1(t)\\) et \\(V_2\\). Relation : \\(V_{out} = -\\frac{R_2}{R_1} (V_1 + V_2)\\). Utilisé dans les tables de mixage audio.";
        } else if (mode === "differential") {
            Av = R2 / R1;
            modeName = "Amplificateur Soustracteur / Différentiel";
            phaseText = `Vout = ${(R2/R1).toFixed(1)}(V2 - V1)`;
            desc = "Amplifie uniquement la différence entre deux tensions \\((V_2 - V_1)\\). Permet d'éliminer les bruits et interférences électromagnétiques communs.";
        } else if (mode === "integrator") {
            const omega = 2 * Math.PI * freq;
            Av = -1 / (omega * R1 * 1e3 * 1e-6);
            modeName = "Amplificateur Intégrateur";
            phaseText = "Quadrature (+90° / Primitifs)";
            desc = "Utilise un condensateur \\(C\\) en contre-réaction. La tension de sortie est l'intégrale temporelle de l'entrée : \\(V_{out}(t) = -\\frac{1}{R_1 C} \\int V_1(t) dt\\). Transforme un signal carré en triangulaire.";
        } else if (mode === "differentiator") {
            const omega = 2 * Math.PI * freq;
            Av = -omega * R2 * 1e3 * 1e-6;
            modeName = "Amplificateur Dérivateur";
            phaseText = "Quadrature (-90° / Dérivée)";
            desc = "Utilise un condensateur \\(C\\) à l'entrée. La sortie est proportionnelle à la dérivée temporelle de l'entrée : \\(V_{out}(t) = -R_2 C \\frac{d V_1(t)}{dt}\\). Transforme un signal triangulaire en carré.";
        } else if (mode === "comparator") {
            Av = 1000;
            modeName = "Comparateur de Tension (Régime Non-Linéaire)";
            phaseText = "Saturation Bipolaire ±Vsat";
            desc = "Fonctionne en boucle ouverte (sans contre-réaction). La sortie bascule à \\(+V_{sat}\\) si \\(V_1 > V_{ref}\\), et \\(-V_{sat}\\) si \\(V_1 < V_{ref}\\).";
        }

        const Vout_th_max = Math.abs(Av) * Vin_max + (mode === "summing" || mode === "differential" ? Math.abs(V2) : 0);
        const isSaturated = Vout_th_max > Vsat || mode === "comparator";
        const Vout_actual_max = Math.min(Vsat, Vout_th_max);

        return { Av, modeName, phaseText, desc, Vout_th_max, isSaturated, Vout_actual_max };
    }

    function updateCalculations() {
        const state = getMetrics();
        const theoryDiv = document.getElementById("aop-amplificateur-theory");
        if (!theoryDiv) return;

        const statusColor = state.isSaturated ? "#f59e0b" : "#10b981";
        const statusText = state.isSaturated ? "🛑 Régime Saturé (Écrêtage à ±Vsat)" : "⚡ Régime Linéaire (Amplification propre)";

        theoryDiv.innerHTML = `
            <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-color); border-radius: 10px; padding: 16px; margin-top: 10px;">
                <h4 style="color: #10b981; font-size: 1rem; margin-bottom: 6px; font-family: 'Outfit', sans-serif;">
                    <i data-lucide="activity" style="vertical-align: middle; margin-right: 6px;"></i> Résultats théoriques et oscilloscope (${state.modeName})
                </h4>
                
                <div style="background: #ffffff; border: 1px solid #cbd5e1; border-left: 4px solid #0284c7; padding: 10px 14px; border-radius: 6px; margin-bottom: 12px; font-size: 0.85rem; color: #000000; font-weight: 500; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                    <strong style="color: #0369a1; font-weight: 700;">💡 Définition & Rôle du montage :</strong> <span style="color: #000000; font-weight: 600;">${state.desc}</span>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; font-size: 0.85rem;">
                    <div><strong>Entrée 1 $V_1$ :</strong> ${Vin_max.toFixed(1)} V</div>
                    ${mode === 'summing' || mode === 'differential' || mode === 'comparator' ? `<div><strong>Entrée 2 $V_2$ :</strong> ${V2.toFixed(1)} V</div>` : ''}
                    <div><strong>Gain Théorique $A_v$ :</strong> ${mode === 'comparator' ? '∞' : state.Av.toFixed(2)}</div>
                    <div><strong>Sortie Théorique $V_{out,th}$ :</strong> ${state.Vout_th_max.toFixed(2)} V</div>
                    <div><strong>Sortie Réelle (Crête) $V_{out,max}$ :</strong> ${state.Vout_actual_max.toFixed(2)} V</div>
                    <div><strong>Relation :</strong> ${state.phaseText}</div>
                    <div><strong>Tension de Saturation $V_{sat}$ :</strong> ± ${Vsat.toFixed(1)} V</div>
                    <div style="grid-column: 1 / -1;"><strong>État de Fonctionnement :</strong> <span style="color:${statusColor}; font-weight:700;">${statusText}</span></div>
                </div>
            </div>
        `;

        if (window.lucide) window.lucide.createIcons();
        setTimeout(() => {
            if (window.MathJax && window.MathJax.typesetPromise) {
                window.MathJax.typesetPromise().catch(err => console.warn(err));
            }
        }, 100);
    }

    function updatePointsTable() {
        const body = document.getElementById("aop-amplificateur-points-body");
        if (!body) return;

        if (recordedPoints.length === 0) {
            body.innerHTML = `<tr><td colspan="5" style="padding: 6px; color: var(--text-secondary); font-style: italic; font-size: 0.75rem;">Aucun point mesuré. Cliquez sur "Mesurer".</td></tr>`;
            return;
        }

        body.innerHTML = recordedPoints.map((pt) => `
            <tr style="border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
                <td style="padding: 4px;">${pt.modeName}</td>
                <td style="padding: 4px;">${pt.Vin_max.toFixed(1)}</td>
                <td style="padding: 4px;">${pt.Av ? pt.Av.toFixed(2) : '∞'}</td>
                <td style="padding: 4px; font-weight: 600; color: #38bdf8;">${pt.Vout_actual_max.toFixed(2)}</td>
                <td style="padding: 4px; color:${pt.isSaturated ? '#f59e0b' : '#10b981'}; font-weight:600;">${pt.isSaturated ? 'Saturé' : 'Linéaire'}</td>
            </tr>
        `).join("");
    }

    newMode.addEventListener("change", (e) => {
        mode = e.target.value;
        toggleV2Visibility();
        updateCalculations();
    });

    newWave.addEventListener("change", (e) => {
        waveform = e.target.value;
        updateCalculations();
    });

    newVin.addEventListener("input", (e) => {
        Vin_max = parseFloat(e.target.value);
        document.getElementById("val-aop-vin").textContent = Vin_max.toFixed(1);
        updateCalculations();
    });

    if (newV2) {
        newV2.addEventListener("input", (e) => {
            V2 = parseFloat(e.target.value);
            document.getElementById("val-aop-v2").textContent = V2.toFixed(1);
            updateCalculations();
        });
    }

    newFreq.addEventListener("input", (e) => {
        freq = parseFloat(e.target.value);
        document.getElementById("val-aop-freq").textContent = freq;
        updateCalculations();
    });

    newR1.addEventListener("input", (e) => {
        R1 = parseFloat(e.target.value);
        document.getElementById("val-aop-r1").textContent = R1;
        updateCalculations();
    });

    newR2.addEventListener("input", (e) => {
        R2 = parseFloat(e.target.value);
        document.getElementById("val-aop-r2").textContent = R2;
        updateCalculations();
    });

    newVsat.addEventListener("input", (e) => {
        Vsat = parseFloat(e.target.value);
        document.getElementById("val-aop-vsat").textContent = Vsat.toFixed(1);
        updateCalculations();
    });

    newRec.addEventListener("click", () => {
        const state = getMetrics();
        recordedPoints.push({
            modeName: state.modeName,
            Vin_max: Vin_max,
            Av: state.Av,
            Vout_actual_max: state.Vout_actual_max,
            isSaturated: state.isSaturated
        });
        updatePointsTable();
    });

    newPau.addEventListener("click", () => {
        isPaused = !isPaused;
        newPau.innerHTML = isPaused ? `<i data-lucide="play"></i> Reprendre` : `<i data-lucide="pause"></i> Pause`;
        if (window.lucide) window.lucide.createIcons();
    });

    newClr.addEventListener("click", () => {
        recordedPoints = [];
        updatePointsTable();
    });

    function evalInputWave(t) {
        const wt = 2 * Math.PI * freq * (t + animTime);
        if (waveform === "sine") {
            return Vin_max * Math.sin(wt);
        } else if (waveform === "square") {
            return Vin_max * (Math.sin(wt) >= 0 ? 1 : -1);
        } else if (waveform === "triangle") {
            const cycle = (wt / (2 * Math.PI)) % 1;
            if (cycle < 0.25) return Vin_max * (cycle * 4);
            else if (cycle < 0.75) return Vin_max * (1 - (cycle - 0.25) * 4);
            else return Vin_max * (-1 + (cycle - 0.75) * 4);
        }
        return Vin_max * Math.sin(wt);
    }

    function evalOutputWave(vinVal, t) {
        const state = getMetrics();
        let vout_th = 0;
        const wt = 2 * Math.PI * freq * (t + animTime);

        if (mode === "inverting") {
            vout_th = state.Av * vinVal;
        } else if (mode === "noninverting") {
            vout_th = state.Av * vinVal;
        } else if (mode === "follower") {
            vout_th = vinVal;
        } else if (mode === "summing") {
            vout_th = -(R2 / R1) * (vinVal + V2);
        } else if (mode === "differential") {
            vout_th = (R2 / R1) * (V2 - vinVal);
        } else if (mode === "integrator") {
            // Primitive of input wave
            if (waveform === "sine") {
                vout_th = state.Av * Vin_max * Math.cos(wt);
            } else if (waveform === "square") {
                // Square -> Triangle
                const cycle = (wt / (2 * Math.PI)) % 1;
                vout_th = state.Av * Vin_max * (cycle < 0.5 ? (cycle * 4 - 1) : (3 - cycle * 4));
            } else {
                vout_th = state.Av * Vin_max * Math.cos(wt);
            }
        } else if (mode === "differentiator") {
            // Derivative of input wave
            if (waveform === "sine") {
                vout_th = state.Av * Vin_max * Math.cos(wt);
            } else if (waveform === "triangle") {
                // Triangle -> Square
                const cycle = (wt / (2 * Math.PI)) % 1;
                vout_th = state.Av * Vin_max * (cycle < 0.5 ? 1 : -1);
            } else {
                vout_th = state.Av * Vin_max * Math.cos(wt);
            }
        } else if (mode === "comparator") {
            vout_th = vinVal >= V2 ? Vsat : -Vsat;
        }
        return Math.max(-Vsat, Math.min(Vsat, vout_th));
    }

    function draw() {
        if (!canvas.offsetParent) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (!isPaused) {
            animTime += 0.005;
        }

        const W = canvas.width;
        const H = canvas.height;
        const scale = W / 900;

        const oscX = 40 * scale;
        const oscY = 30 * scale;
        const oscW = 540 * scale;
        const oscH = 340 * scale;
        const centerY = oscY + oscH / 2;

        ctx.fillStyle = "#090d16";
        ctx.fillRect(oscX, oscY, oscW, oscH);
        ctx.strokeStyle = "rgba(16, 185, 129, 0.15)";
        ctx.lineWidth = 1;

        for (let x = oscX; x <= oscX + oscW; x += oscW / 10) {
            ctx.beginPath(); ctx.moveTo(x, oscY); ctx.lineTo(x, oscY + oscH); ctx.stroke();
        }
        for (let y = oscY; y <= oscY + oscH; y += oscH / 8) {
            ctx.beginPath(); ctx.moveTo(oscX, y); ctx.lineTo(oscX + oscW, y); ctx.stroke();
        }

        ctx.strokeStyle = "rgba(16, 185, 129, 0.4)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(oscX, centerY); ctx.lineTo(oscX + oscW, centerY); ctx.stroke();

        const vScale = (oscH / 8) / 5;

        const yVsatPos = centerY - Vsat * vScale;
        const yVsatNeg = centerY + Vsat * vScale;

        ctx.strokeStyle = "rgba(239, 68, 68, 0.6)";
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(oscX, yVsatPos); ctx.lineTo(oscX + oscW, yVsatPos);
        ctx.moveTo(oscX, yVsatNeg); ctx.lineTo(oscX + oscW, yVsatNeg);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = "#ef4444";
        ctx.font = `${Math.round(10 * scale)}px sans-serif`;
        ctx.textAlign = "right";
        ctx.fillText(`+Vsat = ${Vsat.toFixed(1)}V`, oscX + oscW - 10, yVsatPos - 4);
        ctx.fillText(`-Vsat = -${Vsat.toFixed(1)}V`, oscX + oscW - 10, yVsatNeg + 12);

        ctx.fillStyle = "rgba(250, 204, 21, 0.9)";
        ctx.font = `${Math.round(11 * scale)}px sans-serif`;
        ctx.textAlign = "left";
        ctx.fillText("CH1 Entrée Vin(t): 5V/div (Jaune)", oscX + 10, oscY + 20);
        ctx.fillStyle = "rgba(56, 189, 248, 0.9)";
        ctx.fillText("CH2 Sortie Vout(t): 5V/div (Cyan)", oscX + 10, oscY + 36);

        const T_period = 1 / freq;
        const timeWindow = 3 * T_period;
        const numPoints = 600;

        ctx.strokeStyle = "#facc15";
        ctx.lineWidth = 2 * scale;
        ctx.shadowBlur = 4; ctx.shadowColor = "#facc15";
        ctx.beginPath();

        for (let i = 0; i <= numPoints; i++) {
            const t = (i / numPoints) * timeWindow;
            const vinVal = evalInputWave(t);
            const pxX = oscX + (i / numPoints) * oscW;
            const pxY = centerY - vinVal * vScale;

            if (i === 0) ctx.moveTo(pxX, pxY);
            else ctx.lineTo(pxX, pxY);
        }
        ctx.stroke();
        ctx.shadowBlur = 0;

        ctx.strokeStyle = "#38bdf8";
        ctx.lineWidth = 2.5 * scale;
        ctx.shadowBlur = 6; ctx.shadowColor = "#38bdf8";
        ctx.beginPath();

        for (let i = 0; i <= numPoints; i++) {
            const t = (i / numPoints) * timeWindow;
            const vinVal = evalInputWave(t);
            const voutVal = evalOutputWave(vinVal, t);
            const pxX = oscX + (i / numPoints) * oscW;
            const pxY = centerY - voutVal * vScale;

            if (i === 0) ctx.moveTo(pxX, pxY);
            else ctx.lineTo(pxX, pxY);
        }
        ctx.stroke();
        ctx.shadowBlur = 0;

        const schemX = 610 * scale;
        const schemY = 30 * scale;
        const schemW = 260 * scale;
        const schemH = 340 * scale;

        ctx.fillStyle = "rgba(15, 23, 42, 0.8)";
        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
        ctx.lineWidth = 1;
        ctx.fillRect(schemX, schemY, schemW, schemH);
        ctx.strokeRect(schemX, schemY, schemW, schemH);

        const state = getMetrics();

        ctx.fillStyle = "#ffffff";
        ctx.font = `bold ${Math.round(13 * scale)}px 'Outfit', sans-serif`;
        ctx.textAlign = "center";
        ctx.fillText(`Montage ${state.modeName}`, schemX + schemW / 2, schemY + 25 * scale);

        const badgeW = 220 * scale;
        const badgeH = 28 * scale;
        const badgeX = schemX + (schemW - badgeW) / 2;
        const badgeY = schemY + 40 * scale;

        ctx.fillStyle = state.isSaturated ? "rgba(245, 158, 11, 0.2)" : "rgba(16, 185, 129, 0.2)";
        ctx.strokeStyle = state.isSaturated ? "#f59e0b" : "#10b981";
        ctx.lineWidth = 1.5;
        ctx.fillRect(badgeX, badgeY, badgeW, badgeH);
        ctx.strokeRect(badgeX, badgeY, badgeW, badgeH);

        ctx.fillStyle = state.isSaturated ? "#f59e0b" : "#10b981";
        ctx.font = `bold ${Math.round(10 * scale)}px sans-serif`;
        ctx.fillText(state.isSaturated ? "🛑 Régime Saturé (Écrêtage)" : "⚡ Régime Linéaire (Amplification)", schemX + schemW / 2, badgeY + 18 * scale);

        const opX = schemX + 110 * scale;
        const opY = schemY + 145 * scale;
        const opSize = 45 * scale;

        ctx.strokeStyle = "#38bdf8";
        ctx.lineWidth = 2 * scale;
        ctx.fillStyle = "rgba(56, 189, 248, 0.08)";
        ctx.beginPath();
        ctx.moveTo(opX - opSize, opY - opSize);
        ctx.lineTo(opX - opSize, opY + opSize);
        ctx.lineTo(opX + opSize, opY);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#ffffff";
        ctx.font = `bold ${Math.round(14 * scale)}px sans-serif`;
        ctx.fillText("-", opX - opSize + 12 * scale, opY - opSize / 2 + 5 * scale);
        ctx.fillText("+", opX - opSize + 12 * scale, opY + opSize / 2 + 5 * scale);

        ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
        ctx.beginPath();
        ctx.moveTo(opX + opSize, opY);
        ctx.lineTo(schemX + schemW - 25 * scale, opY);
        ctx.stroke();

        ctx.fillStyle = "#38bdf8";
        ctx.font = `bold ${Math.round(10 * scale)}px sans-serif`;
        ctx.fillText("Vout", schemX + schemW - 15 * scale, opY + 4 * scale);

        // Helper functions for drawing electronic components in schematic panel
        function drawResistor(rx, ry, label, isVertical = false) {
            ctx.strokeStyle = "#f59e0b";
            ctx.lineWidth = 1.5 * scale;
            if (!isVertical) {
                const rw = 24 * scale;
                const rh = 12 * scale;
                ctx.fillStyle = "rgba(15, 23, 42, 0.95)";
                ctx.fillRect(rx - rw / 2, ry - rh / 2, rw, rh);
                ctx.strokeRect(rx - rw / 2, ry - rh / 2, rw, rh);
                if (label) {
                    ctx.fillStyle = "#f59e0b";
                    ctx.font = `${Math.round(8.5 * scale)}px sans-serif`;
                    ctx.textAlign = "center";
                    ctx.fillText(label, rx, ry - rh / 2 - 3 * scale);
                }
            } else {
                const rw = 12 * scale;
                const rh = 24 * scale;
                ctx.fillStyle = "rgba(15, 23, 42, 0.95)";
                ctx.fillRect(rx - rw / 2, ry - rh / 2, rw, rh);
                ctx.strokeRect(rx - rw / 2, ry - rh / 2, rw, rh);
                if (label) {
                    ctx.fillStyle = "#f59e0b";
                    ctx.font = `${Math.round(8.5 * scale)}px sans-serif`;
                    ctx.textAlign = "left";
                    ctx.fillText(label, rx + rw / 2 + 3 * scale, ry + 3 * scale);
                }
            }
        }

        function drawCapacitor(cx, cy, label) {
            ctx.strokeStyle = "#38bdf8";
            ctx.lineWidth = 2 * scale;
            const gap = 6 * scale;
            const h = 14 * scale;
            // Left plate
            ctx.beginPath();
            ctx.moveTo(cx - gap / 2, cy - h / 2);
            ctx.lineTo(cx - gap / 2, cy + h / 2);
            ctx.stroke();
            // Right plate
            ctx.beginPath();
            ctx.moveTo(cx + gap / 2, cy - h / 2);
            ctx.lineTo(cx + gap / 2, cy + h / 2);
            ctx.stroke();

            if (label) {
                ctx.fillStyle = "#38bdf8";
                ctx.font = `${Math.round(8.5 * scale)}px sans-serif`;
                ctx.textAlign = "center";
                ctx.fillText(label, cx, cy - h / 2 - 3 * scale);
            }
        }

        function drawGround(gx, gy) {
            ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
            ctx.lineWidth = 1.5 * scale;
            ctx.beginPath();
            ctx.moveTo(gx - 10 * scale, gy);
            ctx.lineTo(gx + 10 * scale, gy);
            ctx.moveTo(gx - 6 * scale, gy + 4 * scale);
            ctx.lineTo(gx + 6 * scale, gy + 4 * scale);
            ctx.moveTo(gx - 2 * scale, gy + 8 * scale);
            ctx.lineTo(gx + 2 * scale, gy + 8 * scale);
            ctx.stroke();
        }

        const vMinusY = opY - opSize / 2;
        const vPlusY = opY + opSize / 2;
        const inputX = opX - opSize - 50 * scale;

        // Draw Inputs, Feedback, and Component Routing based on selected Montage
        if (mode === "inverting") {
            // 1. Inverting Amplifier
            // V1 -> R1 -> V-
            ctx.strokeStyle = "#facc15";
            ctx.beginPath();
            ctx.moveTo(inputX, vMinusY);
            ctx.lineTo(opX - opSize, vMinusY);
            ctx.stroke();
            drawResistor(inputX + 25 * scale, vMinusY, `R1=${R1}kΩ`);
            ctx.fillStyle = "#facc15";
            ctx.font = `${Math.round(9 * scale)}px sans-serif`;
            ctx.textAlign = "right";
            ctx.fillText("V1(t)", inputX - 4 * scale, vMinusY + 3 * scale);

            // V+ -> Ground
            ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
            ctx.beginPath();
            ctx.moveTo(opX - opSize, vPlusY);
            ctx.lineTo(opX - opSize - 20 * scale, vPlusY);
            ctx.lineTo(opX - opSize - 20 * scale, vPlusY + 20 * scale);
            ctx.stroke();
            drawGround(opX - opSize - 20 * scale, vPlusY + 20 * scale);

            // Feedback R2 (V- to Vout)
            const fbY = opY - opSize - 15 * scale;
            ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
            ctx.beginPath();
            ctx.moveTo(opX - opSize - 10 * scale, vMinusY);
            ctx.lineTo(opX - opSize - 10 * scale, fbY);
            ctx.lineTo(opX + opSize + 10 * scale, fbY);
            ctx.lineTo(opX + opSize + 10 * scale, opY);
            ctx.stroke();
            drawResistor(opX, fbY, `R2=${R2}kΩ`);

        } else if (mode === "noninverting") {
            // 2. Non-Inverting Amplifier
            // V1 -> V+
            ctx.strokeStyle = "#facc15";
            ctx.beginPath();
            ctx.moveTo(inputX, vPlusY);
            ctx.lineTo(opX - opSize, vPlusY);
            ctx.stroke();
            ctx.fillStyle = "#facc15";
            ctx.font = `${Math.round(9 * scale)}px sans-serif`;
            ctx.textAlign = "right";
            ctx.fillText("V1(t)", inputX - 4 * scale, vPlusY + 3 * scale);

            // V- -> R1 -> Ground
            const nodeVnegX = opX - opSize - 10 * scale;
            ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
            ctx.beginPath();
            ctx.moveTo(opX - opSize, vMinusY);
            ctx.lineTo(nodeVnegX, vMinusY);
            ctx.lineTo(nodeVnegX, vMinusY + 35 * scale);
            ctx.stroke();
            drawResistor(nodeVnegX, vMinusY + 18 * scale, `R1=${R1}kΩ`, true);
            drawGround(nodeVnegX, vMinusY + 35 * scale);

            // Feedback R2
            const fbY = opY - opSize - 15 * scale;
            ctx.beginPath();
            ctx.moveTo(nodeVnegX, vMinusY);
            ctx.lineTo(nodeVnegX, fbY);
            ctx.lineTo(opX + opSize + 10 * scale, fbY);
            ctx.lineTo(opX + opSize + 10 * scale, opY);
            ctx.stroke();
            drawResistor(opX, fbY, `R2=${R2}kΩ`);

        } else if (mode === "follower") {
            // 3. Voltage Follower
            // V1 -> V+
            ctx.strokeStyle = "#facc15";
            ctx.beginPath();
            ctx.moveTo(inputX, vPlusY);
            ctx.lineTo(opX - opSize, vPlusY);
            ctx.stroke();
            ctx.fillStyle = "#facc15";
            ctx.font = `${Math.round(9 * scale)}px sans-serif`;
            ctx.textAlign = "right";
            ctx.fillText("V1(t)", inputX - 4 * scale, vPlusY + 3 * scale);

            // Direct Feedback Wire V- to Vout
            const fbY = opY - opSize - 12 * scale;
            ctx.strokeStyle = "#38bdf8";
            ctx.beginPath();
            ctx.moveTo(opX - opSize, vMinusY);
            ctx.lineTo(opX - opSize - 10 * scale, vMinusY);
            ctx.lineTo(opX - opSize - 10 * scale, fbY);
            ctx.lineTo(opX + opSize + 10 * scale, fbY);
            ctx.lineTo(opX + opSize + 10 * scale, opY);
            ctx.stroke();

        } else if (mode === "summing") {
            // 4. Inverting Summing Amplifier
            // V1 -> R1 branch
            const branchY1 = vMinusY - 10 * scale;
            const branchY2 = vMinusY + 10 * scale;
            ctx.strokeStyle = "#facc15";
            ctx.beginPath();
            ctx.moveTo(inputX, branchY1);
            ctx.lineTo(opX - opSize - 15 * scale, branchY1);
            ctx.lineTo(opX - opSize - 15 * scale, vMinusY);
            ctx.lineTo(opX - opSize, vMinusY);
            ctx.stroke();
            drawResistor(inputX + 22 * scale, branchY1, `R1=${R1}kΩ`);
            ctx.fillStyle = "#facc15";
            ctx.font = `${Math.round(8.5 * scale)}px sans-serif`;
            ctx.textAlign = "right";
            ctx.fillText("V1(t)", inputX - 4 * scale, branchY1 + 3 * scale);

            // V2 -> R1 branch
            ctx.strokeStyle = "#38bdf8";
            ctx.beginPath();
            ctx.moveTo(inputX, branchY2);
            ctx.lineTo(opX - opSize - 15 * scale, branchY2);
            ctx.stroke();
            drawResistor(inputX + 22 * scale, branchY2, `R1=${R1}kΩ`);
            ctx.fillStyle = "#38bdf8";
            ctx.font = `${Math.round(8.5 * scale)}px sans-serif`;
            ctx.textAlign = "right";
            ctx.fillText(`V2=${V2.toFixed(1)}V`, inputX - 4 * scale, branchY2 + 3 * scale);

            // V+ -> Ground
            ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
            ctx.beginPath();
            ctx.moveTo(opX - opSize, vPlusY);
            ctx.lineTo(opX - opSize - 20 * scale, vPlusY);
            ctx.lineTo(opX - opSize - 20 * scale, vPlusY + 20 * scale);
            ctx.stroke();
            drawGround(opX - opSize - 20 * scale, vPlusY + 20 * scale);

            // Feedback R2
            const fbY = opY - opSize - 15 * scale;
            ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
            ctx.beginPath();
            ctx.moveTo(opX - opSize - 10 * scale, vMinusY);
            ctx.lineTo(opX - opSize - 10 * scale, fbY);
            ctx.lineTo(opX + opSize + 10 * scale, fbY);
            ctx.lineTo(opX + opSize + 10 * scale, opY);
            ctx.stroke();
            drawResistor(opX, fbY, `R2=${R2}kΩ`);

        } else if (mode === "differential") {
            // 5. Difference / Differential Amplifier
            // V1 -> R1 -> V-
            ctx.strokeStyle = "#facc15";
            ctx.beginPath();
            ctx.moveTo(inputX, vMinusY);
            ctx.lineTo(opX - opSize, vMinusY);
            ctx.stroke();
            drawResistor(inputX + 25 * scale, vMinusY, `R1=${R1}kΩ`);
            ctx.fillStyle = "#facc15";
            ctx.font = `${Math.round(8.5 * scale)}px sans-serif`;
            ctx.textAlign = "right";
            ctx.fillText("V1(t)", inputX - 4 * scale, vMinusY + 3 * scale);

            // V2 -> R1 -> V+ and Ground via R2
            const nodeVplusX = opX - opSize - 10 * scale;
            ctx.strokeStyle = "#38bdf8";
            ctx.beginPath();
            ctx.moveTo(inputX, vPlusY);
            ctx.lineTo(opX - opSize, vPlusY);
            ctx.stroke();
            drawResistor(inputX + 25 * scale, vPlusY, `R1=${R1}kΩ`);
            ctx.fillStyle = "#38bdf8";
            ctx.font = `${Math.round(8.5 * scale)}px sans-serif`;
            ctx.textAlign = "right";
            ctx.fillText(`V2=${V2.toFixed(1)}V`, inputX - 4 * scale, vPlusY + 3 * scale);

            // R2 to Ground at V+
            ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
            ctx.beginPath();
            ctx.moveTo(nodeVplusX, vPlusY);
            ctx.lineTo(nodeVplusX, vPlusY + 35 * scale);
            ctx.stroke();
            drawResistor(nodeVplusX, vPlusY + 18 * scale, `R2=${R2}kΩ`, true);
            drawGround(nodeVplusX, vPlusY + 35 * scale);

            // Feedback R2
            const fbY = opY - opSize - 15 * scale;
            ctx.beginPath();
            ctx.moveTo(opX - opSize - 10 * scale, vMinusY);
            ctx.lineTo(opX - opSize - 10 * scale, fbY);
            ctx.lineTo(opX + opSize + 10 * scale, fbY);
            ctx.lineTo(opX + opSize + 10 * scale, opY);
            ctx.stroke();
            drawResistor(opX, fbY, `R2=${R2}kΩ`);

        } else if (mode === "integrator") {
            // 6. Integrator (R1 input, C feedback)
            // V1 -> R1 -> V-
            ctx.strokeStyle = "#facc15";
            ctx.beginPath();
            ctx.moveTo(inputX, vMinusY);
            ctx.lineTo(opX - opSize, vMinusY);
            ctx.stroke();
            drawResistor(inputX + 25 * scale, vMinusY, `R1=${R1}kΩ`);
            ctx.fillStyle = "#facc15";
            ctx.font = `${Math.round(9 * scale)}px sans-serif`;
            ctx.textAlign = "right";
            ctx.fillText("V1(t)", inputX - 4 * scale, vMinusY + 3 * scale);

            // V+ -> Ground
            ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
            ctx.beginPath();
            ctx.moveTo(opX - opSize, vPlusY);
            ctx.lineTo(opX - opSize - 20 * scale, vPlusY);
            ctx.lineTo(opX - opSize - 20 * scale, vPlusY + 20 * scale);
            ctx.stroke();
            drawGround(opX - opSize - 20 * scale, vPlusY + 20 * scale);

            // Feedback Capacitor C (V- to Vout)
            const fbY = opY - opSize - 15 * scale;
            ctx.strokeStyle = "#38bdf8";
            ctx.beginPath();
            ctx.moveTo(opX - opSize - 10 * scale, vMinusY);
            ctx.lineTo(opX - opSize - 10 * scale, fbY);
            ctx.lineTo(opX + opSize + 10 * scale, fbY);
            ctx.lineTo(opX + opSize + 10 * scale, opY);
            ctx.stroke();
            drawCapacitor(opX, fbY, "C = 1 µF");

        } else if (mode === "differentiator") {
            // 7. Differentiator (C input, R2 feedback)
            // V1 -> C -> V-
            ctx.strokeStyle = "#facc15";
            ctx.beginPath();
            ctx.moveTo(inputX, vMinusY);
            ctx.lineTo(opX - opSize, vMinusY);
            ctx.stroke();
            drawCapacitor(inputX + 25 * scale, vMinusY, "C = 1 µF");
            ctx.fillStyle = "#facc15";
            ctx.font = `${Math.round(9 * scale)}px sans-serif`;
            ctx.textAlign = "right";
            ctx.fillText("V1(t)", inputX - 4 * scale, vMinusY + 3 * scale);

            // V+ -> Ground
            ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
            ctx.beginPath();
            ctx.moveTo(opX - opSize, vPlusY);
            ctx.lineTo(opX - opSize - 20 * scale, vPlusY);
            ctx.lineTo(opX - opSize - 20 * scale, vPlusY + 20 * scale);
            ctx.stroke();
            drawGround(opX - opSize - 20 * scale, vPlusY + 20 * scale);

            // Feedback R2
            const fbY = opY - opSize - 15 * scale;
            ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
            ctx.beginPath();
            ctx.moveTo(opX - opSize - 10 * scale, vMinusY);
            ctx.lineTo(opX - opSize - 10 * scale, fbY);
            ctx.lineTo(opX + opSize + 10 * scale, fbY);
            ctx.lineTo(opX + opSize + 10 * scale, opY);
            ctx.stroke();
            drawResistor(opX, fbY, `R2=${R2}kΩ`);

        } else if (mode === "comparator") {
            // 8. Simple Comparator (Open Loop)
            // V1(t) -> V+
            ctx.strokeStyle = "#facc15";
            ctx.beginPath();
            ctx.moveTo(inputX, vPlusY);
            ctx.lineTo(opX - opSize, vPlusY);
            ctx.stroke();
            ctx.fillStyle = "#facc15";
            ctx.font = `${Math.round(9 * scale)}px sans-serif`;
            ctx.textAlign = "right";
            ctx.fillText("V1(t)", inputX - 4 * scale, vPlusY + 3 * scale);

            // Vref (V2) -> V-
            ctx.strokeStyle = "#38bdf8";
            ctx.beginPath();
            ctx.moveTo(inputX, vMinusY);
            ctx.lineTo(opX - opSize, vMinusY);
            ctx.stroke();
            ctx.fillStyle = "#38bdf8";
            ctx.font = `${Math.round(9 * scale)}px sans-serif`;
            ctx.textAlign = "right";
            ctx.fillText(`Vref=${V2.toFixed(1)}V`, inputX - 4 * scale, vMinusY + 3 * scale);
        }

        const pBoxY = schemY + 225 * scale;
        ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
        ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
        ctx.fillRect(schemX + 10 * scale, pBoxY, schemW - 20 * scale, 85 * scale);
        ctx.strokeRect(schemX + 10 * scale, pBoxY, schemW - 20 * scale, 85 * scale);

        ctx.textAlign = "left";
        ctx.fillStyle = "#94a3b8";
        ctx.font = `${Math.round(10 * scale)}px sans-serif`;
        ctx.fillText(`Gain Av = ${mode === 'comparator' ? '∞' : state.Av.toFixed(2)}`, schemX + 20 * scale, pBoxY + 20 * scale);
        ctx.fillText(`Vin(max) = ${Vin_max.toFixed(1)} V  |  f = ${freq} Hz`, schemX + 20 * scale, pBoxY + 38 * scale);
        ctx.fillStyle = "#facc15";
        ctx.fillText(`Vout(th) = ${state.Vout_th_max.toFixed(2)} V`, schemX + 20 * scale, pBoxY + 56 * scale);
        ctx.fillStyle = "#38bdf8";
        ctx.fillText(`Vout(réel) = ${state.Vout_actual_max.toFixed(2)} V (±${Vsat}V)`, schemX + 20 * scale, pBoxY + 74 * scale);
    }

    if (aopAmplificateurInterval) clearInterval(aopAmplificateurInterval);
    aopAmplificateurInterval = setInterval(draw, 30);

    updateCalculations();
    updatePointsTable();
}

// 13. TP Mesure de Résistances Simulator
let mesureResistancesInterval = null;
function setupMesureResistancesSimulator() {
    const canvas = document.getElementById("canvas-mesure-resistances");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const modeSelect = document.getElementById("res-mode");
    const b1Select = document.getElementById("res-b1");
    const b2Select = document.getElementById("res-b2");
    const multSelect = document.getElementById("res-mult");
    const tolSelect = document.getElementById("res-tol");
    const eSlider = document.getElementById("res-e");
    const rxSlider = document.getElementById("res-rx");
    const r3Slider = document.getElementById("res-r3");
    const btnRecord = document.getElementById("btn-res-record");
    const btnClear = document.getElementById("btn-res-clear");

    if (!modeSelect) return;

    const newMode = modeSelect.cloneNode(true); modeSelect.parentNode.replaceChild(newMode, modeSelect);
    const newB1 = b1Select.cloneNode(true); b1Select.parentNode.replaceChild(newB1, b1Select);
    const newB2 = b2Select.cloneNode(true); b2Select.parentNode.replaceChild(newB2, b2Select);
    const newMult = multSelect.cloneNode(true); multSelect.parentNode.replaceChild(newMult, multSelect);
    const newTol = tolSelect.cloneNode(true); tolSelect.parentNode.replaceChild(newTol, tolSelect);
    const newE = eSlider.cloneNode(true); eSlider.parentNode.replaceChild(newE, eSlider);
    const newRx = rxSlider.cloneNode(true); rxSlider.parentNode.replaceChild(newRx, rxSlider);
    const newR3 = r3Slider.cloneNode(true); r3Slider.parentNode.replaceChild(newR3, r3Slider);
    const newRec = btnRecord.cloneNode(true); btnRecord.parentNode.replaceChild(newRec, btnRecord);
    const newClr = btnClear.cloneNode(true); btnClear.parentNode.replaceChild(newClr, btnClear);

    let mode = newMode.value;
    let b1 = parseInt(newB1.value);
    let b2 = parseInt(newB2.value);
    let mult = parseFloat(newMult.value);
    let tol = parseFloat(newTol.value);
    let E = parseFloat(newE.value);
    let Rx = parseFloat(newRx.value);
    let R3 = parseFloat(newR3.value);

    let recordedPoints = [];

    const colorsMap = ["#000000", "#8b4513", "#ff0000", "#ff8c00", "#ffff00", "#008000", "#0000ff", "#ee82ee", "#808080", "#ffffff"];
    const multColorsMap = { 1: "#000000", 10: "#8b4513", 100: "#ff0000", 1000: "#ff8c00", 10000: "#ffff00", 100000: "#008000", 1000000: "#0000ff" };
    const tolColorsMap = { 5: "#ffd700", 10: "#c0c0c0", 1: "#8b4513", 2: "#ff0000" };

    function toggleControls() {
        document.getElementById("group-res-b1").style.display = (mode === "colorcode") ? "flex" : "none";
        document.getElementById("group-res-b2").style.display = (mode === "colorcode") ? "flex" : "none";
        document.getElementById("group-res-mult").style.display = (mode === "colorcode") ? "flex" : "none";
        document.getElementById("group-res-tol").style.display = (mode === "colorcode") ? "flex" : "none";
        document.getElementById("group-res-e").style.display = (mode !== "colorcode") ? "flex" : "none";
        document.getElementById("group-res-rx").style.display = (mode !== "colorcode") ? "flex" : "none";
        document.getElementById("group-res-r3").style.display = (mode === "wheatstone") ? "flex" : "none";
    }
    toggleControls();

    function getMetrics() {
        let R_real = 0;
        let R_mes = 0;
        let errPercent = 0;
        let statusText = "";
        let desc = "";

        if (mode === "colorcode") {
            R_real = (10 * b1 + b2) * mult;
            R_mes = R_real;
            errPercent = tol;
            statusText = `Valeur codée : ${R_real >= 1e6 ? (R_real/1e6).toFixed(2) + ' MΩ' : R_real >= 1e3 ? (R_real/1e3).toFixed(2) + ' kΩ' : R_real + ' Ω'} ± ${tol}%`;
            desc = "Méthode directe par lecture du code des 4 anneaux de couleurs imprimés sur le corps de la résistance.";
        } else if (mode === "aval") {
            const RV = 100000;
            const RA = 2;
            R_real = Rx;
            const Uv = E * (Rx / (Rx + RA));
            const Ia = (Uv / Rx) + (Uv / RV);
            R_mes = Uv / Ia;
            errPercent = Math.abs((R_mes - R_real) / R_real) * 100;
            statusText = Rx < 447 ? "✅ Montage Aval Idéal (Faibles résistances R << Rv)" : "⚠️ Erreur systématique élevée (R proche de Rv)";
            desc = "Montage Aval : Voltmètre branché aux bornes directes de R. Idéal pour les faibles résistances (R << Rv).";
        } else if (mode === "amont") {
            const RA = 2;
            R_real = Rx;
            R_mes = Rx + RA;
            errPercent = (RA / Rx) * 100;
            statusText = Rx > 447 ? "✅ Montage Amont Idéal (Fortes résistances R >> Ra)" : "⚠️ Erreur due à la résistance interne de l'ampèremètre Ra";
            desc = "Montage Amont : Voltmètre branché en amont de l'ampèremètre. Idéal pour les fortes résistances (R >> Ra).";
        } else if (mode === "wheatstone") {
            R_real = Rx;
            R_mes = R3;
            errPercent = Math.abs((R3 - Rx) / Rx) * 100;
            const isBalanced = Math.abs(R3 - Rx) <= 5;
            statusText = isBalanced ? "⚖️ Pont à l'Équilibre (Ig = 0 A | Rx = R3)" : "⚖️ Pont Déséquilibré (Ajuster R3 pour annuler Ig)";
            desc = "Pont de Wheatstone : Permet la mesure de précision par annulation du courant Ig dans le galvanomètre central (Ig = 0 => Rx = R2*R3/R1).";
        }

        return { R_real, R_mes, errPercent, statusText, desc };
    }

    function updateCalculations() {
        const state = getMetrics();
        const theoryDiv = document.getElementById("mesure-resistances-theory");
        if (!theoryDiv) return;

        theoryDiv.innerHTML = `
            <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-color); border-radius: 10px; padding: 16px; margin-top: 10px;">
                <h4 style="color: #10b981; font-size: 1rem; margin-bottom: 6px; font-family: 'Outfit', sans-serif;">
                    <i data-lucide="calculator" style="vertical-align: middle; margin-right: 6px;"></i> Résultats de la mesure de résistance
                </h4>
                
                <div style="background: #ffffff; border: 1px solid #cbd5e1; border-left: 4px solid #0284c7; padding: 10px 14px; border-radius: 6px; margin-bottom: 12px; font-size: 0.85rem; color: #000000; font-weight: 500; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                    <strong style="color: #0369a1; font-weight: 700;">💡 Principe & Rôle de la méthode :</strong> <span style="color: #000000; font-weight: 600;">${state.desc}</span>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; font-size: 0.85rem;">
                    <div><strong>Résistance Réelle $R_{réelle}$ :</strong> ${state.R_real.toFixed(1)} Ω</div>
                    <div><strong>Résistance Mesurée $R_{mes}$ :</strong> <span style="color:#38bdf8; font-weight:700;">${state.R_mes.toFixed(1)} Ω</span></div>
                    <div><strong>Erreur Relative $\Delta R / R$ :</strong> ${state.errPercent.toFixed(2)} %</div>
                    <div style="grid-column: 1 / -1;"><strong>État de la Mesure :</strong> <span style="color:#f59e0b; font-weight:700;">${state.statusText}</span></div>
                </div>
            </div>
        `;

        if (window.lucide) window.lucide.createIcons();
        setTimeout(() => {
            if (window.MathJax && window.MathJax.typesetPromise) {
                window.MathJax.typesetPromise().catch(err => console.warn(err));
            }
        }, 100);
    }

    function updatePointsTable() {
        const body = document.getElementById("mesure-resistances-points-body");
        if (!body) return;

        if (recordedPoints.length === 0) {
            body.innerHTML = `<tr><td colspan="5" style="padding: 6px; color: var(--text-secondary); font-style: italic; font-size: 0.75rem;">Aucun point enregistré. Cliquez sur "Enregistrer".</td></tr>`;
            return;
        }

        body.innerHTML = recordedPoints.map(pt => `
            <tr style="border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
                <td style="padding: 4px;">${pt.modeName}</td>
                <td style="padding: 4px;">${pt.R_real.toFixed(1)}</td>
                <td style="padding: 4px; font-weight: 600; color: #38bdf8;">${pt.R_mes.toFixed(1)}</td>
                <td style="padding: 4px; color:${pt.errPercent < 5 ? '#10b981' : '#f59e0b'}; font-weight:600;">${pt.errPercent.toFixed(2)} %</td>
                <td style="padding: 4px;">${pt.errPercent < 5 ? 'Précis' : 'Erreur'}</td>
            </tr>
        `).join("");
    }

    newMode.addEventListener("change", (e) => {
        mode = e.target.value;
        toggleControls();
        updateCalculations();
    });

    newB1.addEventListener("change", (e) => { b1 = parseInt(e.target.value); updateCalculations(); });
    newB2.addEventListener("change", (e) => { b2 = parseInt(e.target.value); updateCalculations(); });
    newMult.addEventListener("change", (e) => { mult = parseFloat(e.target.value); updateCalculations(); });
    newTol.addEventListener("change", (e) => { tol = parseFloat(e.target.value); updateCalculations(); });

    newE.addEventListener("input", (e) => {
        E = parseFloat(e.target.value);
        document.getElementById("val-res-e").textContent = E.toFixed(1);
        updateCalculations();
    });

    newRx.addEventListener("input", (e) => {
        Rx = parseFloat(e.target.value);
        document.getElementById("val-res-rx").textContent = Rx;
        updateCalculations();
    });

    newR3.addEventListener("input", (e) => {
        R3 = parseFloat(e.target.value);
        document.getElementById("val-res-r3").textContent = R3;
        updateCalculations();
    });

    newRec.addEventListener("click", () => {
        const state = getMetrics();
        const modeNames = { colorcode: "Code Couleurs", aval: "Volt-Amp (Aval)", amont: "Volt-Amp (Amont)", wheatstone: "Wheatstone" };
        recordedPoints.push({
            modeName: modeNames[mode],
            R_real: state.R_real,
            R_mes: state.R_mes,
            errPercent: state.errPercent
        });
        updatePointsTable();
    });

    newClr.addEventListener("click", () => {
        recordedPoints = [];
        updatePointsTable();
    });

    function draw() {
        if (!canvas.offsetParent) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const W = canvas.width;
        const H = canvas.height;
        const scale = W / 900;

        ctx.fillStyle = "#090d16";
        ctx.fillRect(0, 0, W, H);

        if (mode === "colorcode") {
            const cx = W / 2;
            const cy = H / 2;
            const rw = 360 * scale;
            const rh = 100 * scale;

            ctx.strokeStyle = "#94a3b8"; ctx.lineWidth = 12 * scale;
            ctx.beginPath(); ctx.moveTo(cx - rw / 2 - 120 * scale, cy); ctx.lineTo(cx + rw / 2 + 120 * scale, cy); ctx.stroke();

            ctx.fillStyle = "#d4b886"; ctx.strokeStyle = "#b3925b"; ctx.lineWidth = 4 * scale;
            ctx.beginPath(); ctx.roundRect(cx - rw / 2, cy - rh / 2, rw, rh, 20 * scale); ctx.fill(); ctx.stroke();

            const bWidth = 24 * scale;
            const bX1 = cx - rw / 2 + 60 * scale;
            const bX2 = cx - rw / 2 + 120 * scale;
            const bX3 = cx - rw / 2 + 180 * scale;
            const bX4 = cx + rw / 2 - 70 * scale;

            ctx.fillStyle = colorsMap[b1]; ctx.fillRect(bX1, cy - rh / 2, bWidth, rh);
            ctx.fillStyle = colorsMap[b2]; ctx.fillRect(bX2, cy - rh / 2, bWidth, rh);
            ctx.fillStyle = multColorsMap[mult] || "#000"; ctx.fillRect(bX3, cy - rh / 2, bWidth, rh);
            ctx.fillStyle = tolColorsMap[tol] || "#ffd700"; ctx.fillRect(bX4, cy - rh / 2, bWidth, rh);

            const state = getMetrics();
            ctx.fillStyle = "#ffffff";
            ctx.font = `bold ${Math.round(22 * scale)}px 'Outfit', sans-serif`;
            ctx.textAlign = "center";
            ctx.fillText(`Code des Couleurs : R = ${state.statusText}`, cx, cy + 110 * scale);

        } else if (mode === "aval" || mode === "amont") {
            ctx.strokeStyle = "#38bdf8"; ctx.lineWidth = 3 * scale;
            ctx.strokeRect(150 * scale, 80 * scale, 600 * scale, 240 * scale);

            ctx.fillStyle = "#090d16"; ctx.fillRect(130 * scale, 170 * scale, 40 * scale, 60 * scale);
            ctx.fillStyle = "#facc15"; ctx.font = `bold ${Math.round(16 * scale)}px sans-serif`;
            ctx.fillText(`Generator E = ${E}V`, 60 * scale, 205 * scale);

            ctx.fillStyle = "#090d16"; ctx.fillRect(400 * scale, 60 * scale, 60 * scale, 40 * scale);
            ctx.strokeStyle = "#f59e0b"; ctx.strokeRect(400 * scale, 60 * scale, 60 * scale, 40 * scale);
            ctx.fillStyle = "#f59e0b"; ctx.font = `bold ${Math.round(14 * scale)}px sans-serif`;
            ctx.fillText("Ampère A", 405 * scale, 85 * scale);

            ctx.fillStyle = "#090d16"; ctx.fillRect(730 * scale, 170 * scale, 40 * scale, 60 * scale);
            ctx.strokeStyle = "#10b981"; ctx.strokeRect(730 * scale, 170 * scale, 40 * scale, 60 * scale);
            ctx.fillStyle = "#10b981"; ctx.fillText(`Rx = ${Rx}Ω`, 780 * scale, 205 * scale);

            const vX = (mode === "aval") ? 700 * scale : 350 * scale;
            ctx.strokeStyle = "#38bdf8";
            ctx.beginPath(); ctx.moveTo(vX, 80 * scale); ctx.lineTo(vX, 320 * scale); ctx.stroke();
            ctx.fillStyle = "#090d16"; ctx.fillRect(vX - 25 * scale, 180 * scale, 50 * scale, 40 * scale);
            ctx.strokeRect(vX - 25 * scale, 180 * scale, 50 * scale, 40 * scale);
            ctx.fillStyle = "#38bdf8"; ctx.fillText("Volt V", vX - 20 * scale, 205 * scale);

        } else if (mode === "wheatstone") {
            const cx = W / 2;
            const cy = H / 2 - 20 * scale;
            const topY = cy - 100 * scale;
            const botY = cy + 100 * scale;
            const leftX = cx - 140 * scale;
            const rightX = cx + 140 * scale;

            ctx.strokeStyle = "#38bdf8"; ctx.lineWidth = 3 * scale;
            ctx.beginPath(); ctx.moveTo(cx, topY); ctx.lineTo(leftX, cy); ctx.lineTo(cx, botY); ctx.lineTo(rightX, cy); ctx.closePath(); ctx.stroke();

            ctx.beginPath(); ctx.moveTo(leftX, cy); ctx.lineTo(rightX, cy); ctx.stroke();
            ctx.fillStyle = "#090d16"; ctx.fillRect(cx - 30 * scale, cy - 20 * scale, 60 * scale, 40 * scale);
            ctx.strokeRect(cx - 30 * scale, cy - 20 * scale, 60 * scale, 40 * scale);

            const isBal = Math.abs(R3 - Rx) <= 5;
            ctx.fillStyle = isBal ? "#10b981" : "#ef4444";
            ctx.font = `bold ${Math.round(12 * scale)}px sans-serif`;
            ctx.textAlign = "center";
            ctx.fillText(isBal ? "Ig = 0 A (Équilibré)" : "Ig ≠ 0 A", cx, cy + 5 * scale);

            ctx.fillStyle = "#ffffff";
            ctx.fillText("R1 = 1000 Ω", cx - 90 * scale, cy - 60 * scale);
            ctx.fillText(`R3 (pot) = ${R3} Ω`, cx + 90 * scale, cy - 60 * scale);
            ctx.fillText("R2 = 1000 Ω", cx - 90 * scale, cy + 60 * scale);
            ctx.fillText(`Rx (inconnue) = ${Rx} Ω`, cx + 90 * scale, cy + 60 * scale);
        }
    }

    if (mesureResistancesInterval) clearInterval(mesureResistancesInterval);
    mesureResistancesInterval = setInterval(draw, 30);

    updateCalculations();
    updatePointsTable();
}

// 14. TP Charge et Décharge Condensateur Simulator
let chargeDechargeRcInterval = null;
function setupChargeDechargeRcSimulator() {
    const canvas = document.getElementById("canvas-charge-decharge-rc");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const toggleBtn = document.getElementById("btn-rc-toggle-switch");
    const vSlider = document.getElementById("rc-voltage");
    const rSlider = document.getElementById("rc-r");
    const cSlider = document.getElementById("rc-c");
    const btnRecord = document.getElementById("btn-rc-record");
    const btnPause = document.getElementById("btn-rc-pause");
    const btnClear = document.getElementById("btn-rc-clear");

    if (!toggleBtn || !vSlider) return;

    const newTog = toggleBtn.cloneNode(true); toggleBtn.parentNode.replaceChild(newTog, toggleBtn);
    const newV = vSlider.cloneNode(true); vSlider.parentNode.replaceChild(newV, vSlider);
    const newR = rSlider.cloneNode(true); rSlider.parentNode.replaceChild(newR, rSlider);
    const newC = cSlider.cloneNode(true); cSlider.parentNode.replaceChild(newC, cSlider);
    const newRec = btnRecord.cloneNode(true); btnRecord.parentNode.replaceChild(newRec, btnRecord);
    const newPau = btnPause.cloneNode(true); btnPause.parentNode.replaceChild(newPau, btnPause);
    const newClr = btnClear.cloneNode(true); btnClear.parentNode.replaceChild(newClr, btnClear);

    let isCharging = true;
    let E = parseFloat(newV.value);
    let R_kOhm = parseFloat(newR.value);
    let C_uF = parseFloat(newC.value);
    let isPaused = false;

    let recordedPoints = [];
    let simTime = 0;

    function getMetrics() {
        const R = R_kOhm * 1000;
        const C = C_uF * 1e-6;
        const tau_ms = R * C * 1000;
        const uC_tau = isCharging ? E * (1 - Math.exp(-1)) : E * Math.exp(-1);
        const energy_joules = 0.5 * C * Math.pow(isCharging ? E : 0, 2);

        const desc = isCharging 
            ? "En charge : Le condensateur emmagasine l'énergie électrique. La tension uC(t) augmente selon uC(t) = E(1 - e^{-t/τ}). À t = τ, uC vaut 63% de E."
            : "En décharge : Le condensateur restitue son énergie à la résistance. La tension uC(t) décroît selon uC(t) = E e^{-t/τ}. À t = τ, uC vaut 37% de E.";

        return { R, C, tau_ms, uC_tau, energy_joules, desc };
    }

    function updateCalculations() {
        const state = getMetrics();
        const theoryDiv = document.getElementById("charge-decharge-rc-theory");
        if (!theoryDiv) return;

        theoryDiv.innerHTML = `
            <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-color); border-radius: 10px; padding: 16px; margin-top: 10px;">
                <h4 style="color: #10b981; font-size: 1rem; margin-bottom: 6px; font-family: 'Outfit', sans-serif;">
                    <i data-lucide="battery-charging" style="vertical-align: middle; margin-right: 6px;"></i> Résultats du Régime Transitoire RC (${isCharging ? 'Charge' : 'Décharge'})
                </h4>
                
                <div style="background: #ffffff; border: 1px solid #cbd5e1; border-left: 4px solid #0284c7; padding: 10px 14px; border-radius: 6px; margin-bottom: 12px; font-size: 0.85rem; color: #000000; font-weight: 500; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                    <strong style="color: #0369a1; font-weight: 700;">💡 Définition & Rôle du régime :</strong> <span style="color: #000000; font-weight: 600;">${state.desc}</span>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; font-size: 0.85rem;">
                    <div><strong>Tension Générateur $E$ :</strong> ${E.toFixed(1)} V</div>
                    <div><strong>Constante de Temps $\tau = R \cdot C$ :</strong> <span style="color:#38bdf8; font-weight:700;">${state.tau_ms.toFixed(2)} ms</span></div>
                    <div><strong>Tension à $t = \tau$ ($u_C$) :</strong> <span style="color:#facc15; font-weight:700;">${state.uC_tau.toFixed(2)} V</span> (${isCharging ? '63%' : '37%'} de E)</div>
                    <div><strong>Énergie Emmagasinée $E_e$ :</strong> ${(state.energy_joules * 1e3).toFixed(2)} mJ</div>
                    <div style="grid-column: 1 / -1;"><strong>Position Interrupteur K :</strong> <span style="color:${isCharging ? '#10b981' : '#f59e0b'}; font-weight:700;">${isCharging ? '⚡ Position 1 (Alimentation par le Générateur E)' : '🔒 Position 2 (Court-circuit à la Masse)'}</span></div>
                </div>
            </div>
        `;

        if (window.lucide) window.lucide.createIcons();
        setTimeout(() => {
            if (window.MathJax && window.MathJax.typesetPromise) {
                window.MathJax.typesetPromise().catch(err => console.warn(err));
            }
        }, 100);
    }

    function updatePointsTable() {
        const body = document.getElementById("charge-decharge-rc-points-body");
        if (!body) return;

        if (recordedPoints.length === 0) {
            body.innerHTML = `<tr><td colspan="6" style="padding: 6px; color: var(--text-secondary); font-style: italic; font-size: 0.75rem;">Aucun point mesuré. Cliquez sur "Mesurer \\(\\tau\\)".</td></tr>`;
            return;
        }

        body.innerHTML = recordedPoints.map(pt => `
            <tr style="border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
                <td style="padding: 4px;">${pt.modeName}</td>
                <td style="padding: 4px;">${pt.E.toFixed(1)}</td>
                <td style="padding: 4px;">${pt.R_kOhm.toFixed(1)}</td>
                <td style="padding: 4px;">${pt.C_uF}</td>
                <td style="padding: 4px; font-weight: 600; color: #38bdf8;">${pt.tau_ms.toFixed(2)}</td>
                <td style="padding: 4px; font-weight: 600; color: #facc15;">${pt.uC_tau.toFixed(2)}</td>
            </tr>
        `).join("");
    }

    newTog.addEventListener("click", () => {
        isCharging = !isCharging;
        newTog.textContent = isCharging ? "⚡ Position 1 (Charge)" : "🔒 Position 2 (Décharge)";
        newTog.className = isCharging ? "btn btn-primary" : "btn btn-secondary";
        simTime = 0;
        updateCalculations();
    });

    newV.addEventListener("input", (e) => {
        E = parseFloat(e.target.value);
        document.getElementById("val-rc-voltage").textContent = E.toFixed(1);
        updateCalculations();
    });

    newR.addEventListener("input", (e) => {
        R_kOhm = parseFloat(e.target.value);
        document.getElementById("val-rc-r").textContent = R_kOhm.toFixed(1);
        updateCalculations();
    });

    newC.addEventListener("input", (e) => {
        C_uF = parseFloat(e.target.value);
        document.getElementById("val-rc-c").textContent = C_uF;
        updateCalculations();
    });

    newRec.addEventListener("click", () => {
        const state = getMetrics();
        recordedPoints.push({
            modeName: isCharging ? "Charge" : "Décharge",
            E: E,
            R_kOhm: R_kOhm,
            C_uF: C_uF,
            tau_ms: state.tau_ms,
            uC_tau: state.uC_tau
        });
        updatePointsTable();
    });

    newPau.addEventListener("click", () => {
        isPaused = !isPaused;
        newPau.innerHTML = isPaused ? `<i data-lucide="play"></i> Reprendre` : `<i data-lucide="pause"></i> Pause`;
        if (window.lucide) window.lucide.createIcons();
    });

    newClr.addEventListener("click", () => {
        recordedPoints = [];
        updatePointsTable();
    });

    function draw() {
        if (!canvas.offsetParent) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (!isPaused) {
            simTime += 0.02;
        }

        const W = canvas.width;
        const H = canvas.height;
        const scale = W / 900;

        const state = getMetrics();
        const tau = state.tau_ms;

        const oscX = 40 * scale;
        const oscY = 30 * scale;
        const oscW = 540 * scale;
        const oscH = 340 * scale;
        const centerY = oscY + oscH - 40 * scale;

        ctx.fillStyle = "#090d16";
        ctx.fillRect(oscX, oscY, oscW, oscH);
        ctx.strokeStyle = "rgba(16, 185, 129, 0.15)";
        ctx.lineWidth = 1;

        for (let x = oscX; x <= oscX + oscW; x += oscW / 10) {
            ctx.beginPath(); ctx.moveTo(x, oscY); ctx.lineTo(x, oscY + oscH); ctx.stroke();
        }
        for (let y = oscY; y <= oscY + oscH; y += oscH / 8) {
            ctx.beginPath(); ctx.moveTo(oscX, y); ctx.lineTo(oscX + oscW, y); ctx.stroke();
        }

        const vScale = (oscH - 60 * scale) / 15;

        ctx.strokeStyle = "rgba(16, 185, 129, 0.4)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(oscX, centerY); ctx.lineTo(oscX + oscW, centerY); ctx.stroke();

        const yE = centerY - E * vScale;
        ctx.strokeStyle = "rgba(250, 204, 21, 0.6)";
        ctx.setLineDash([4, 4]);
        ctx.beginPath(); ctx.moveTo(oscX, yE); ctx.lineTo(oscX + oscW, yE); ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = "#facc15";
        ctx.font = `${Math.round(10 * scale)}px sans-serif`;
        ctx.textAlign = "right";
        ctx.fillText(`E = ${E.toFixed(1)}V`, oscX + oscW - 10, yE - 4);

        const timeWindow = 5 * tau;
        const numPoints = 500;

        ctx.strokeStyle = "#facc15";
        ctx.lineWidth = 2 * scale;
        ctx.beginPath();
        const genVal = isCharging ? E : 0;
        ctx.moveTo(oscX, centerY - genVal * vScale);
        ctx.lineTo(oscX + oscW, centerY - genVal * vScale);
        ctx.stroke();

        ctx.strokeStyle = "#38bdf8";
        ctx.lineWidth = 2.5 * scale;
        ctx.shadowBlur = 6; ctx.shadowColor = "#38bdf8";
        ctx.beginPath();

        for (let i = 0; i <= numPoints; i++) {
            const t = (i / numPoints) * timeWindow;
            const uC = isCharging ? E * (1 - Math.exp(-t / tau)) : E * Math.exp(-t / tau);
            const pxX = oscX + (i / numPoints) * oscW;
            const pxY = centerY - uC * vScale;

            if (i === 0) ctx.moveTo(pxX, pxY);
            else ctx.lineTo(pxX, pxY);
        }
        ctx.stroke();
        ctx.shadowBlur = 0;

        const xTau = oscX + (1 / 5) * oscW;
        ctx.strokeStyle = "#10b981";
        ctx.lineWidth = 1.5 * scale;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        if (isCharging) {
            ctx.moveTo(oscX, centerY); ctx.lineTo(xTau, yE);
        } else {
            ctx.moveTo(oscX, yE); ctx.lineTo(xTau, centerY);
        }
        ctx.stroke();

        ctx.moveTo(xTau, oscY); ctx.lineTo(xTau, centerY); ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = "#10b981";
        ctx.font = `bold ${Math.round(11 * scale)}px sans-serif`;
        ctx.textAlign = "center";
        ctx.fillText(`τ = ${tau.toFixed(2)} ms`, xTau, centerY + 20 * scale);

        const yUcTau = centerY - state.uC_tau * vScale;
        ctx.fillStyle = "#facc15";
        ctx.beginPath(); ctx.arc(xTau, yUcTau, 5 * scale, 0, 2 * Math.PI); ctx.fill();
        ctx.fillText(`(${tau.toFixed(1)} ms, ${state.uC_tau.toFixed(1)}V)`, xTau + 50 * scale, yUcTau - 5 * scale);

        ctx.fillStyle = "rgba(250, 204, 21, 0.9)";
        ctx.font = `${Math.round(11 * scale)}px sans-serif`;
        ctx.textAlign = "left";
        ctx.fillText("CH1 Générateur e(t) (Jaune)", oscX + 10, oscY + 20);
        ctx.fillStyle = "rgba(56, 189, 248, 0.9)";
        ctx.fillText("CH2 Condensateur uC(t) (Cyan)", oscX + 10, oscY + 36);

        const schemX = 610 * scale;
        const schemY = 30 * scale;
        const schemW = 260 * scale;
        const schemH = 340 * scale;

        ctx.fillStyle = "rgba(15, 23, 42, 0.8)";
        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
        ctx.lineWidth = 1;
        ctx.fillRect(schemX, schemY, schemW, schemH);
        ctx.strokeRect(schemX, schemY, schemW, schemH);

        ctx.fillStyle = "#ffffff";
        ctx.font = `bold ${Math.round(13 * scale)}px 'Outfit', sans-serif`;
        ctx.textAlign = "center";
        ctx.fillText(`Circuit RC — ${isCharging ? 'Charge' : 'Décharge'}`, schemX + schemW / 2, schemY + 25 * scale);

        ctx.fillStyle = isCharging ? "rgba(16, 185, 129, 0.2)" : "rgba(245, 158, 11, 0.2)";
        ctx.strokeStyle = isCharging ? "#10b981" : "#f59e0b";
        ctx.lineWidth = 1.5;
        ctx.fillRect(schemX + 20 * scale, schemY + 40 * scale, schemW - 40 * scale, 28 * scale);
        ctx.strokeRect(schemX + 20 * scale, schemY + 40 * scale, schemW - 40 * scale, 28 * scale);

        ctx.fillStyle = isCharging ? "#10b981" : "#f59e0b";
        ctx.font = `bold ${Math.round(10 * scale)}px sans-serif`;
        ctx.fillText(isCharging ? "⚡ Switch K = Pos. 1 (Générateur E)" : "🔒 Switch K = Pos. 2 (Masse / Disch.)", schemX + schemW / 2, schemY + 58 * scale);

        const cX1 = schemX + 40 * scale;
        const cX2 = schemX + schemW - 40 * scale;
        const cY1 = schemY + 90 * scale;
        const cY2 = schemY + 220 * scale;

        ctx.strokeStyle = "#38bdf8"; ctx.lineWidth = 2 * scale;
        ctx.beginPath();
        ctx.moveTo(cX1, cY1); ctx.lineTo(cX2, cY1); ctx.lineTo(cX2, cY2); ctx.lineTo(cX1, cY2); ctx.closePath();
        ctx.stroke();

        ctx.fillStyle = "#090d16"; ctx.fillRect(schemX + 100 * scale, cY1 - 10 * scale, 60 * scale, 20 * scale);
        ctx.strokeStyle = "#f59e0b"; ctx.strokeRect(schemX + 100 * scale, cY1 - 10 * scale, 60 * scale, 20 * scale);
        ctx.fillStyle = "#f59e0b"; ctx.font = `${Math.round(9 * scale)}px sans-serif`;
        ctx.fillText(`R=${R_kOhm}kΩ`, schemX + 130 * scale, cY1 - 14 * scale);

        ctx.fillStyle = "#090d16"; ctx.fillRect(cX2 - 15 * scale, cY1 + 50 * scale, 30 * scale, 30 * scale);
        ctx.strokeStyle = "#38bdf8"; ctx.lineWidth = 3 * scale;
        ctx.beginPath();
        ctx.moveTo(cX2 - 12 * scale, cY1 + 55 * scale); ctx.lineTo(cX2 + 12 * scale, cY1 + 55 * scale);
        ctx.moveTo(cX2 - 12 * scale, cY1 + 75 * scale); ctx.lineTo(cX2 + 12 * scale, cY1 + 75 * scale);
        ctx.stroke();
        ctx.fillStyle = "#38bdf8"; ctx.font = `${Math.round(9 * scale)}px sans-serif`;
        ctx.fillText(`C=${C_uF}µF`, cX2 + 28 * scale, cY1 + 68 * scale);

        const pBoxY = schemY + 235 * scale;
        ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
        ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
        ctx.fillRect(schemX + 10 * scale, pBoxY, schemW - 20 * scale, 90 * scale);
        ctx.strokeRect(schemX + 10 * scale, pBoxY, schemW - 20 * scale, 90 * scale);

        ctx.textAlign = "left";
        ctx.fillStyle = "#94a3b8";
        ctx.font = `${Math.round(10 * scale)}px sans-serif`;
        ctx.fillText(`Tension E = ${E.toFixed(1)} V`, schemX + 20 * scale, pBoxY + 20 * scale);
        ctx.fillText(`Tau = R*C = ${tau.toFixed(2)} ms`, schemX + 20 * scale, pBoxY + 38 * scale);
        ctx.fillStyle = "#facc15";
        ctx.fillText(`uC(tau) = ${state.uC_tau.toFixed(2)} V (${isCharging ? '63%' : '37%'})`, schemX + 20 * scale, pBoxY + 56 * scale);
        ctx.fillStyle = "#10b981";
        ctx.fillText(`Énergie Ee = ${(state.energy_joules * 1e3).toFixed(2)} mJ`, schemX + 20 * scale, pBoxY + 74 * scale);
    }

    if (chargeDechargeRcInterval) clearInterval(chargeDechargeRcInterval);
    chargeDechargeRcInterval = setInterval(draw, 30);

    updateCalculations();
    updatePointsTable();
}

// 15. TP Moteur à Courant Continu (MCC) Simulator
let moteurCcInterval = null;
function setupMoteurCcSimulator() {
    const canvas = document.getElementById("canvas-moteur-cc");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const viewSelect = document.getElementById("mcc-view");
    const uSlider = document.getElementById("mcc-u");
    const tlSlider = document.getElementById("mcc-tl");
    const rSlider = document.getElementById("mcc-r");
    const kSlider = document.getElementById("mcc-k");
    const btnRecord = document.getElementById("btn-mcc-record");
    const btnPause = document.getElementById("btn-mcc-pause");
    const btnClear = document.getElementById("btn-mcc-clear");

    if (!viewSelect || !uSlider) return;

    const newView = viewSelect.cloneNode(true); viewSelect.parentNode.replaceChild(newView, viewSelect);
    const newU = uSlider.cloneNode(true); uSlider.parentNode.replaceChild(newU, uSlider);
    const newTl = tlSlider.cloneNode(true); tlSlider.parentNode.replaceChild(newTl, tlSlider);
    const newR = rSlider.cloneNode(true); rSlider.parentNode.replaceChild(newR, rSlider);
    const newK = kSlider.cloneNode(true); kSlider.parentNode.replaceChild(newK, kSlider);
    const newRec = btnRecord.cloneNode(true); btnRecord.parentNode.replaceChild(newRec, btnRecord);
    const newPau = btnPause.cloneNode(true); btnPause.parentNode.replaceChild(newPau, btnPause);
    const newClr = btnClear.cloneNode(true); btnClear.parentNode.replaceChild(newClr, btnClear);

    let view = newView.value;
    let U = parseFloat(newU.value);
    let TL = parseFloat(newTl.value);
    let R = parseFloat(newR.value);
    let K = parseFloat(newK.value);
    let isPaused = false;

    let recordedPoints = [];
    let rotorAngle = 0;

    function getMetrics() {
        const T0 = 0.02;
        const Tem = TL + T0;
        let I = Tem / K;

        let E = U - R * I;
        let Omega = 0;

        if (E <= 0 || U <= 0) {
            E = 0;
            I = U > 0 ? Math.min(U / R, 15.0) : 0;
            Omega = 0;
        } else {
            Omega = E / K;
        }

        const RPM = (60 * Omega) / (2 * Math.PI);
        const Pa = U * I;
        const Pu = TL * Omega;
        const Pem = E * I;
        const eta = Pa > 0 ? Math.max(0, Math.min(100, (Pu / Pa) * 100)) : 0;

        const isStalled = E <= 0 && U > 0;
        const statusText = isStalled 
            ? "🛑 Moteur Calé / Bloqué (Couple résistant TL trop fort, I_court-circuit = U/R)" 
            : Omega > 0 ? "⚡ Moteur en Rotation (Régime Permanent)" : "🔒 Moteur à l'Arrêt (Tension nulle U = 0V)";

        const desc = "Le Moteur à Courant Continu (MCC) convertit l'énergie électrique Pa = U·I en énergie mécanique Pu = Tu·Ω. La vitesse N est contrôlée par la tension U, tandis que le courant I s'adapte au couple résistant TL.";

        return { Tem, I, E, Omega, RPM, Pa, Pu, Pem, eta, isStalled, statusText, desc };
    }

    function updateCalculations() {
        const state = getMetrics();
        const theoryDiv = document.getElementById("moteur-cc-theory");
        if (!theoryDiv) return;

        theoryDiv.innerHTML = `
            <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-color); border-radius: 10px; padding: 16px; margin-top: 10px;">
                <h4 style="color: #10b981; font-size: 1rem; margin-bottom: 6px; font-family: 'Outfit', sans-serif;">
                    <i data-lucide="disc" style="vertical-align: middle; margin-right: 6px;"></i> Résultats du Moteur CC (Tension U = ${U.toFixed(1)} V, Charge TL = ${TL.toFixed(2)} N·m)
                </h4>
                
                <div style="background: #ffffff; border: 1px solid #cbd5e1; border-left: 4px solid #0284c7; padding: 10px 14px; border-radius: 6px; margin-bottom: 12px; font-size: 0.85rem; color: #000000; font-weight: 500; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                    <strong style="color: #0369a1; font-weight: 700;">💡 Définition & Rôle Électromécanique :</strong> <span style="color: #000000; font-weight: 600;">${state.desc}</span>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; font-size: 0.85rem;">
                    <div><strong>Courant Induit $I$ :</strong> <span style="color:#f59e0b; font-weight:700;">${state.I.toFixed(2)} A</span></div>
                    <div><strong>Force contre-électromotrice $E$ :</strong> ${state.E.toFixed(1)} V</div>
                    <div><strong>Vitesse de Rotation $N$ :</strong> <span style="color:#38bdf8; font-weight:700;">${state.RPM.toFixed(0)} tr/min</span> (${state.Omega.toFixed(1)} rad/s)</div>
                    <div><strong>Couple Électromagnétique $T_{em}$ :</strong> ${state.Tem.toFixed(2)} N·m</div>
                    <div><strong>Puissance Utile $P_u$ :</strong> ${state.Pu.toFixed(1)} W (sur une puissance absorbée $P_a$ de ${state.Pa.toFixed(1)} W)</div>
                    <div><strong>Rendement Moteur $\eta$ :</strong> <span style="color:#10b981; font-weight:700;">${state.eta.toFixed(1)} %</span></div>
                    <div style="grid-column: 1 / -1;"><strong>État de Fonctionnement :</strong> <span style="color:${state.isStalled ? '#ef4444' : '#10b981'}; font-weight:700;">${state.statusText}</span></div>
                </div>
            </div>
        `;

        if (window.lucide) window.lucide.createIcons();
        setTimeout(() => {
            if (window.MathJax && window.MathJax.typesetPromise) {
                window.MathJax.typesetPromise().catch(err => console.warn(err));
            }
        }, 100);
    }

    function updatePointsTable() {
        const body = document.getElementById("moteur-cc-points-body");
        if (!body) return;

        if (recordedPoints.length === 0) {
            body.innerHTML = `<tr><td colspan="6" style="padding: 6px; color: var(--text-secondary); font-style: italic; font-size: 0.75rem;">Aucun point mesuré. Cliquez sur "Mesurer Point".</td></tr>`;
            return;
        }

        body.innerHTML = recordedPoints.map(pt => `
            <tr style="border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
                <td style="padding: 4px;">${pt.U.toFixed(1)}</td>
                <td style="padding: 4px;">${pt.I.toFixed(2)}</td>
                <td style="padding: 4px;">${pt.E.toFixed(1)}</td>
                <td style="padding: 4px; font-weight: 600; color: #38bdf8;">${pt.RPM.toFixed(0)}</td>
                <td style="padding: 4px;">${pt.Tem.toFixed(2)}</td>
                <td style="padding: 4px; font-weight: 600; color: #10b981;">${pt.eta.toFixed(1)} %</td>
            </tr>
        `).join("");
    }

    newView.addEventListener("change", (e) => { view = e.target.value; updateCalculations(); });

    newU.addEventListener("input", (e) => {
        U = parseFloat(e.target.value);
        document.getElementById("val-mcc-u").textContent = U.toFixed(1);
        updateCalculations();
    });

    newTl.addEventListener("input", (e) => {
        TL = parseFloat(e.target.value);
        document.getElementById("val-mcc-tl").textContent = TL.toFixed(2);
        updateCalculations();
    });

    newR.addEventListener("input", (e) => {
        R = parseFloat(e.target.value);
        document.getElementById("val-mcc-r").textContent = R.toFixed(1);
        updateCalculations();
    });

    newK.addEventListener("input", (e) => {
        K = parseFloat(e.target.value);
        document.getElementById("val-mcc-k").textContent = K.toFixed(2);
        updateCalculations();
    });

    newRec.addEventListener("click", () => {
        const state = getMetrics();
        recordedPoints.push({
            U: U, I: state.I, E: state.E, RPM: state.RPM, Tem: state.Tem, eta: state.eta
        });
        updatePointsTable();
    });

    newPau.addEventListener("click", () => {
        isPaused = !isPaused;
        newPau.innerHTML = isPaused ? `<i data-lucide="play"></i> Reprendre` : `<i data-lucide="pause"></i> Pause`;
        if (window.lucide) window.lucide.createIcons();
    });

    newClr.addEventListener("click", () => {
        recordedPoints = [];
        updatePointsTable();
    });

    function draw() {
        if (!canvas.offsetParent) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const state = getMetrics();

        if (!isPaused && state.Omega > 0) {
            rotorAngle += (state.Omega * 0.005);
        }

        const W = canvas.width;
        const H = canvas.height;
        const scale = W / 900;

        ctx.fillStyle = "#090d16";
        ctx.fillRect(0, 0, W, H);

        if (view === "rotor") {
            // LEFT SIDE: ROTOR ANIMATION & POLES
            const cx = 310 * scale;
            const cy = H / 2 - 10 * scale;
            const rRadius = 75 * scale;

            // Stator Poles N (Red) and S (Blue)
            const poleW = 100 * scale;
            const poleH = 140 * scale;

            // North Pole (Left - Red)
            ctx.fillStyle = "#ef4444"; ctx.fillRect(cx - rRadius - poleW, cy - poleH / 2, poleW, poleH);
            ctx.fillStyle = "#ffffff"; ctx.font = `bold ${Math.round(22 * scale)}px sans-serif`; ctx.textAlign = "center";
            ctx.fillText("N", cx - rRadius - poleW / 2, cy + 8 * scale);

            // South Pole (Right - Blue)
            ctx.fillStyle = "#3b82f6"; ctx.fillRect(cx + rRadius, cy - poleH / 2, poleW, poleH);
            ctx.fillStyle = "#ffffff"; ctx.font = `bold ${Math.round(22 * scale)}px sans-serif`;
            ctx.fillText("S", cx + rRadius + poleW / 2, cy + 8 * scale);

            // Magnetic Field Lines B (Green Arrows)
            ctx.strokeStyle = "rgba(16, 185, 129, 0.4)"; ctx.lineWidth = 2 * scale;
            ctx.setLineDash([6, 6]);
            for (let y = cy - 50 * scale; y <= cy + 50 * scale; y += 25 * scale) {
                ctx.beginPath(); ctx.moveTo(cx - rRadius, y); ctx.lineTo(cx + rRadius, y); ctx.stroke();
            }
            ctx.setLineDash([]);

            // Rotating Armature Rotor
            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(rotorAngle);

            ctx.fillStyle = "#334155"; ctx.strokeStyle = "#94a3b8"; ctx.lineWidth = 3 * scale;
            ctx.beginPath(); ctx.arc(0, 0, rRadius, 0, 2 * Math.PI); ctx.fill(); ctx.stroke();

            // Armature Winding
            const numCoils = 8;
            for (let i = 0; i < numCoils; i++) {
                const a = (i * 2 * Math.PI) / numCoils;
                const wx = (rRadius - 16 * scale) * Math.cos(a);
                const wy = (rRadius - 16 * scale) * Math.sin(a);
                ctx.fillStyle = "#f59e0b";
                ctx.beginPath(); ctx.arc(wx, wy, 8 * scale, 0, 2 * Math.PI); ctx.fill();
            }

            // Commutator Ring
            ctx.fillStyle = "#d97706"; ctx.beginPath(); ctx.arc(0, 0, 26 * scale, 0, 2 * Math.PI); ctx.fill();
            ctx.strokeStyle = "#090d16"; ctx.lineWidth = 3 * scale;
            ctx.beginPath(); ctx.moveTo(-26 * scale, 0); ctx.lineTo(26 * scale, 0); ctx.stroke();
            ctx.restore();

            // Carbon Brushes
            ctx.fillStyle = "#1e293b"; ctx.strokeStyle = "#facc15"; ctx.lineWidth = 2 * scale;
            ctx.fillRect(cx - 12 * scale, cy - 26 * scale - 20 * scale, 24 * scale, 20 * scale);
            ctx.fillRect(cx - 12 * scale, cy + 26 * scale, 24 * scale, 20 * scale);

            // Sparks
            if (state.Omega > 0 && Math.random() < 0.6) {
                ctx.fillStyle = "#00ffff";
                ctx.beginPath(); ctx.arc(cx + (Math.random() * 14 - 7), cy - 26 * scale, 2.5 * scale, 0, 2 * Math.PI); ctx.fill();
                ctx.beginPath(); ctx.arc(cx + (Math.random() * 14 - 7), cy + 26 * scale, 2.5 * scale, 0, 2 * Math.PI); ctx.fill();
            }

            // Gauges Text under Rotor
            ctx.fillStyle = "#ffffff"; ctx.font = `bold ${Math.round(15 * scale)}px 'Outfit', sans-serif`;
            ctx.textAlign = "center";
            ctx.fillText(`Vitesse : N = ${state.RPM.toFixed(0)} tr/min (${state.Omega.toFixed(1)} rad/s)`, cx, H - 28 * scale);
            ctx.fillStyle = "#f59e0b"; ctx.font = `bold ${Math.round(13 * scale)}px sans-serif`;
            ctx.fillText(`Courant : I = ${state.I.toFixed(2)} A  |  Couple : Tem = ${state.Tem.toFixed(2)} N·m`, cx, H - 8 * scale);

            // RIGHT SIDE PANEL: SCHÉMA ÉLECTRIQUE MONTAGE DE L'INDUIT
            const schemX = 570 * scale;
            const schemY = 25 * scale;
            const schemW = 300 * scale;
            const schemH = 350 * scale;

            ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
            ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
            ctx.lineWidth = 1.5 * scale;
            ctx.fillRect(schemX, schemY, schemW, schemH);
            ctx.strokeRect(schemX, schemY, schemW, schemH);

            // Title
            ctx.fillStyle = "#ffffff";
            ctx.font = `bold ${Math.round(13 * scale)}px 'Outfit', sans-serif`;
            ctx.textAlign = "center";
            ctx.fillText("Schéma Électrique de l'Induit (MCC)", schemX + schemW / 2, schemY + 24 * scale);

            // Loop Coordinates
            const cX1 = schemX + 45 * scale;
            const cX2 = schemX + schemW - 45 * scale;
            const cY1 = schemY + 70 * scale;
            const cY2 = schemY + 220 * scale;

            // Circuit Wire Lines
            ctx.strokeStyle = "#38bdf8"; ctx.lineWidth = 2.5 * scale;
            ctx.beginPath();
            ctx.moveTo(cX1, cY1); ctx.lineTo(cX2, cY1); ctx.lineTo(cX2, cY2); ctx.lineTo(cX1, cY2); ctx.closePath();
            ctx.stroke();

            // Generator U on Left Branch (DC Source)
            ctx.fillStyle = "#090d16"; ctx.fillRect(cX1 - 20 * scale, cY1 + 45 * scale, 40 * scale, 60 * scale);
            ctx.strokeStyle = "#facc15"; ctx.lineWidth = 2 * scale;
            ctx.strokeRect(cX1 - 20 * scale, cY1 + 45 * scale, 40 * scale, 60 * scale);
            ctx.fillStyle = "#facc15"; ctx.font = `bold ${Math.round(14 * scale)}px sans-serif`; ctx.textAlign = "center";
            ctx.fillText("G", cX1, cY1 + 80 * scale);
            ctx.font = `${Math.round(9 * scale)}px sans-serif`;
            ctx.fillText(`U = ${U.toFixed(1)}V`, cX1 - 35 * scale, cY1 + 80 * scale);

            // Resistor R on Top Wire (Armature Resistance)
            ctx.fillStyle = "#090d16"; ctx.fillRect(schemX + 115 * scale, cY1 - 12 * scale, 70 * scale, 24 * scale);
            ctx.strokeStyle = "#f59e0b"; ctx.lineWidth = 2 * scale;
            ctx.strokeRect(schemX + 115 * scale, cY1 - 12 * scale, 70 * scale, 24 * scale);
            ctx.fillStyle = "#f59e0b"; ctx.font = `bold ${Math.round(10 * scale)}px sans-serif`; ctx.textAlign = "center";
            ctx.fillText(`R = ${R.toFixed(1)} Ω`, schemX + 150 * scale, cY1 + 4 * scale);

            // Motor Symbol M on Right Branch (Armature + Brushes + f.e.m E)
            ctx.fillStyle = "#090d16"; ctx.beginPath(); ctx.arc(cX2, cY1 + 75 * scale, 26 * scale, 0, 2 * Math.PI); ctx.fill();
            ctx.strokeStyle = "#10b981"; ctx.lineWidth = 2.5 * scale; ctx.stroke();
            ctx.fillStyle = "#10b981"; ctx.font = `bold ${Math.round(15 * scale)}px sans-serif`; ctx.textAlign = "center";
            ctx.fillText("M", cX2, cY1 + 75 * scale);

            // Motor Brushes
            ctx.fillStyle = "#e2e8f0";
            ctx.fillRect(cX2 - 6 * scale, cY1 + 44 * scale, 12 * scale, 6 * scale);
            ctx.fillRect(cX2 - 6 * scale, cY1 + 100 * scale, 12 * scale, 6 * scale);

            ctx.font = `${Math.round(9 * scale)}px sans-serif`;
            ctx.fillText(`E = ${state.E.toFixed(1)}V`, cX2 + 38 * scale, cY1 + 80 * scale);

            // Current Arrow I (Orange)
            ctx.fillStyle = "#f59e0b"; ctx.strokeStyle = "#f59e0b"; ctx.lineWidth = 2 * scale;
            ctx.beginPath();
            ctx.moveTo(schemX + 70 * scale, cY1 - 10 * scale);
            ctx.lineTo(schemX + 90 * scale, cY1 - 10 * scale);
            ctx.lineTo(schemX + 85 * scale, cY1 - 14 * scale);
            ctx.stroke();
            ctx.font = `bold ${Math.round(10 * scale)}px sans-serif`; ctx.textAlign = "left";
            ctx.fillText(`I = ${state.I.toFixed(2)} A`, schemX + 65 * scale, cY1 - 20 * scale);

            // Equations Summary Box inside Schematic Panel
            const pBoxY = schemY + 235 * scale;
            ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
            ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
            ctx.lineWidth = 1;
            ctx.fillRect(schemX + 10 * scale, pBoxY, schemW - 20 * scale, 105 * scale);
            ctx.strokeRect(schemX + 10 * scale, pBoxY, schemW - 20 * scale, 105 * scale);

            ctx.textAlign = "left";
            ctx.fillStyle = "#94a3b8";
            ctx.font = `${Math.round(10 * scale)}px sans-serif`;
            ctx.fillText(`Loi d'Ohm : U = E + R·I`, schemX + 20 * scale, pBoxY + 18 * scale);
            ctx.fillStyle = "#facc15";
            ctx.fillText(`• ${U.toFixed(1)}V = ${state.E.toFixed(1)}V + ${(state.I * R).toFixed(1)}V`, schemX + 20 * scale, pBoxY + 36 * scale);
            ctx.fillStyle = "#38bdf8";
            ctx.fillText(`• f.é.m. E = K·Ω = ${state.E.toFixed(1)} V`, schemX + 20 * scale, pBoxY + 54 * scale);
            ctx.fillStyle = "#f59e0b";
            ctx.fillText(`• Couple Tem = K·I = ${state.Tem.toFixed(2)} N·m`, schemX + 20 * scale, pBoxY + 72 * scale);
            ctx.fillStyle = "#10b981";
            ctx.fillText(`• Puissance Pa = U·I = ${state.Pa.toFixed(1)} W`, schemX + 20 * scale, pBoxY + 90 * scale);
        } else if (view === "principle") {
            // DETAILED ELECTROMAGNETIC PRINCIPLE & LAPLACE FORCES ANIMATION
            const cx = 310 * scale;
            const cy = H / 2 - 10 * scale;
            const rRadius = 90 * scale;

            // Stator Poles N (Red) and S (Blue)
            const poleW = 100 * scale;
            const poleH = 160 * scale;

            // North Pole (Left - Red)
            ctx.fillStyle = "#ef4444"; ctx.fillRect(cx - rRadius - poleW, cy - poleH / 2, poleW, poleH);
            ctx.fillStyle = "#ffffff"; ctx.font = `bold ${Math.round(22 * scale)}px sans-serif`; ctx.textAlign = "center";
            ctx.fillText("N (Nord)", cx - rRadius - poleW / 2, cy + 8 * scale);

            // South Pole (Right - Blue)
            ctx.fillStyle = "#3b82f6"; ctx.fillRect(cx + rRadius, cy - poleH / 2, poleW, poleH);
            ctx.fillStyle = "#ffffff"; ctx.font = `bold ${Math.round(22 * scale)}px sans-serif`;
            ctx.fillText("S (Sud)", cx + rRadius + poleW / 2, cy + 8 * scale);

            // Magnetic Field Lines B (Green Animated Arrows N -> S)
            ctx.strokeStyle = "rgba(16, 185, 129, 0.6)"; ctx.lineWidth = 2.5 * scale;
            ctx.setLineDash([8, 8]);
            for (let y = cy - 55 * scale; y <= cy + 55 * scale; y += 22 * scale) {
                ctx.beginPath(); ctx.moveTo(cx - rRadius, y); ctx.lineTo(cx + rRadius, y); ctx.stroke();
            }
            ctx.setLineDash([]);
            ctx.fillStyle = "#10b981"; ctx.font = `bold ${Math.round(11 * scale)}px sans-serif`;
            ctx.fillText("Champ Magnétique B (Stator)", cx, cy - 70 * scale);

            // Rotating Armature Loop (Single Spire)
            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(rotorAngle);

            // Loop Frame
            ctx.strokeStyle = "#f59e0b"; ctx.lineWidth = 4 * scale;
            ctx.strokeRect(-rRadius + 15 * scale, -30 * scale, (rRadius - 15 * scale) * 2, 60 * scale);

            // Conductor 1 (Top) - Current I coming out (Circle with Dot)
            const c1X = 0; const c1Y = -30 * scale;
            ctx.fillStyle = "#facc15"; ctx.beginPath(); ctx.arc(c1X, c1Y, 12 * scale, 0, 2 * Math.PI); ctx.fill();
            ctx.fillStyle = "#000000"; ctx.beginPath(); ctx.arc(c1X, c1Y, 3 * scale, 0, 2 * Math.PI); ctx.fill();

            // Conductor 2 (Bottom) - Current I going in (Circle with Cross)
            const c2X = 0; const c2Y = 30 * scale;
            ctx.fillStyle = "#facc15"; ctx.beginPath(); ctx.arc(c2X, c2Y, 12 * scale, 0, 2 * Math.PI); ctx.fill();
            ctx.strokeStyle = "#000000"; ctx.lineWidth = 2.5 * scale;
            ctx.beginPath(); ctx.moveTo(c2X - 5 * scale, c2Y - 5 * scale); ctx.lineTo(c2X + 5 * scale, c2Y + 5 * scale);
            ctx.moveTo(c2X + 5 * scale, c2Y - 5 * scale); ctx.lineTo(c2X - 5 * scale, c2Y + 5 * scale); ctx.stroke();

            ctx.restore();

            // Calculate current Conductor Positions in World Space
            const cond1X = cx + (-30 * scale) * Math.sin(-rotorAngle);
            const cond1Y = cy + (-30 * scale) * Math.cos(-rotorAngle);
            const cond2X = cx + (30 * scale) * Math.sin(-rotorAngle);
            const cond2Y = cy + (30 * scale) * Math.cos(-rotorAngle);

            // Draw Laplace Force Vectors F = I * L x B (Lime Green Arrows)
            if (state.I > 0) {
                const forceLen = Math.min(60 * scale, Math.max(25 * scale, state.I * 12 * scale));

                // Force F1 on Conductor 1 (Upwards)
                ctx.strokeStyle = "#a3e635"; ctx.fillStyle = "#a3e635"; ctx.lineWidth = 3.5 * scale;
                ctx.beginPath(); ctx.moveTo(cond1X, cond1Y); ctx.lineTo(cond1X, cond1Y - forceLen); ctx.stroke();
                ctx.beginPath(); ctx.moveTo(cond1X - 6 * scale, cond1Y - forceLen + 8 * scale); ctx.lineTo(cond1X, cond1Y - forceLen); ctx.lineTo(cond1X + 6 * scale, cond1Y - forceLen + 8 * scale); ctx.fill();
                ctx.font = `bold ${Math.round(11 * scale)}px sans-serif`; ctx.textAlign = "center";
                ctx.fillText("F1 = I·L·B (Haut)", cond1X, cond1Y - forceLen - 6 * scale);

                // Force F2 on Conductor 2 (Downwards)
                ctx.beginPath(); ctx.moveTo(cond2X, cond2Y); ctx.lineTo(cond2X, cond2Y + forceLen); ctx.stroke();
                ctx.beginPath(); ctx.moveTo(cond2X - 6 * scale, cond2Y + forceLen - 8 * scale); ctx.lineTo(cond2X, cond2Y + forceLen); ctx.lineTo(cond2X + 6 * scale, cond2Y + forceLen - 8 * scale); ctx.fill();
                ctx.fillText("F2 = -I·L·B (Bas)", cond2X, cond2Y + forceLen + 14 * scale);
            }

            // Torque Arc Arrow Tem (Counter-clockwise)
            ctx.strokeStyle = "#facc15"; ctx.lineWidth = 3 * scale;
            ctx.beginPath(); ctx.arc(cx, cy, rRadius + 20 * scale, Math.PI * 0.2, Math.PI * 0.8, false); ctx.stroke();

            // Right Panel: Pedagogical Principle Explanation
            const schemX = 570 * scale; const schemY = 25 * scale; const schemW = 300 * scale; const schemH = 350 * scale;
            ctx.fillStyle = "rgba(15, 23, 42, 0.85)"; ctx.strokeStyle = "rgba(255, 255, 255, 0.12)"; ctx.lineWidth = 1.5 * scale;
            ctx.fillRect(schemX, schemY, schemW, schemH); ctx.strokeRect(schemX, schemY, schemW, schemH);

            ctx.fillStyle = "#ffffff"; ctx.font = `bold ${Math.round(13 * scale)}px 'Outfit', sans-serif`; ctx.textAlign = "center";
            ctx.fillText("Principe Électromagnétique (Laplace)", schemX + schemW / 2, schemY + 24 * scale);

            const pTextY = schemY + 50 * scale;
            ctx.textAlign = "left"; ctx.font = `${Math.round(10 * scale)}px sans-serif`;

            ctx.fillStyle = "#ef4444"; ctx.fillText("1. Stator (Inducteur) :", schemX + 15 * scale, pTextY);
            ctx.fillStyle = "#cbd5e1"; ctx.fillText("Crée le champ d'induction fixe B (N -> S).", schemX + 25 * scale, pTextY + 16 * scale);

            ctx.fillStyle = "#f59e0b"; ctx.fillText("2. Rotor (Induit) :", schemX + 15 * scale, pTextY + 40 * scale);
            ctx.fillStyle = "#cbd5e1"; ctx.fillText(`Parcouru par le courant I = ${state.I.toFixed(2)} A.`, schemX + 25 * scale, pTextY + 56 * scale);

            ctx.fillStyle = "#a3e635"; ctx.fillText("3. Force de Laplace F = I·L x B :", schemX + 15 * scale, pTextY + 80 * scale);
            ctx.fillStyle = "#cbd5e1"; ctx.fillText("Exerce 2 forces opposées F1 et F2.", schemX + 25 * scale, pTextY + 96 * scale);

            ctx.fillStyle = "#38bdf8"; ctx.fillText("4. Couple Moteur Tem :", schemX + 15 * scale, pTextY + 120 * scale);
            ctx.fillStyle = "#cbd5e1"; ctx.fillText(`Tem = K·I = ${state.Tem.toFixed(2)} N·m fait tourner la spire.`, schemX + 25 * scale, pTextY + 136 * scale);

            // Equations Box Bottom
            const pBoxY = schemY + 215 * scale;
            ctx.fillStyle = "rgba(0, 0, 0, 0.4)"; ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"; ctx.lineWidth = 1;
            ctx.fillRect(schemX + 10 * scale, pBoxY, schemW - 20 * scale, 125 * scale);
            ctx.strokeRect(schemX + 10 * scale, pBoxY, schemW - 20 * scale, 125 * scale);

            ctx.fillStyle = "#facc15"; ctx.font = `bold ${Math.round(10 * scale)}px sans-serif`;
            ctx.fillText("Règle des 3 doigts (Main Droite) :", schemX + 20 * scale, pBoxY + 18 * scale);
            ctx.fillStyle = "#94a3b8"; ctx.font = `${Math.round(10 * scale)}px sans-serif`;
            ctx.fillText("• Pouce = Force de Laplace F", schemX + 20 * scale, pBoxY + 36 * scale);
            ctx.fillText("• Index = Champ d'Induction B", schemX + 20 * scale, pBoxY + 54 * scale);
            ctx.fillText("• Majeur = Courant Électrique I", schemX + 20 * scale, pBoxY + 72 * scale);
            ctx.fillStyle = "#10b981";
            ctx.fillText(`• Force : F = I · L · B = ${(state.I * 0.8).toFixed(2)} N`, schemX + 20 * scale, pBoxY + 92 * scale);
            ctx.fillText(`• Vitesse : N = ${state.RPM.toFixed(0)} tr/min`, schemX + 20 * scale, pBoxY + 110 * scale);

        } else if (view === "speed") {
            const gX = 80 * scale; const gY = 40 * scale; const gW = 740 * scale; const gH = 300 * scale;
            ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"; ctx.lineWidth = 1;
            ctx.strokeRect(gX, gY, gW, gH);

            ctx.fillStyle = "#ffffff"; ctx.font = `${Math.round(12 * scale)}px sans-serif`; ctx.textAlign = "center";
            ctx.fillText("Caractéristique Électromécanique : Vitesse N = f(U)", gX + gW / 2, gY - 15 * scale);

            ctx.strokeStyle = "rgba(255, 255, 255, 0.5)"; ctx.lineWidth = 2 * scale;
            ctx.beginPath(); ctx.moveTo(gX, gY + gH); ctx.lineTo(gX + gW, gY + gH); ctx.moveTo(gX, gY + gH); ctx.lineTo(gX, gY); ctx.stroke();

            ctx.strokeStyle = "#38bdf8"; ctx.lineWidth = 3 * scale; ctx.beginPath();
            const maxU = 24.0; const maxN = (60 * (24 / K)) / (2 * Math.PI);
            for (let u = 0; u <= maxU; u += 0.5) {
                const i_val = (TL + 0.02) / K;
                const e_val = u - R * i_val;
                const om_val = e_val > 0 ? e_val / K : 0;
                const n_val = (60 * om_val) / (2 * Math.PI);

                const px = gX + (u / maxU) * gW;
                const py = (gY + gH) - (n_val / maxN) * gH;
                if (u === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
            }
            ctx.stroke();

            const ptX = gX + (U / maxU) * gW;
            const ptY = (gY + gH) - (state.RPM / maxN) * gH;
            ctx.fillStyle = "#facc15"; ctx.beginPath(); ctx.arc(ptX, ptY, 6 * scale, 0, 2 * Math.PI); ctx.fill();
            ctx.fillText(`Point M (${U.toFixed(1)}V, ${state.RPM.toFixed(0)} tr/min)`, ptX, ptY - 10 * scale);

        } else if (view === "torque" || view === "efficiency") {
            const gX = 80 * scale; const gY = 40 * scale; const gW = 740 * scale; const gH = 300 * scale;
            ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"; ctx.lineWidth = 1; ctx.strokeRect(gX, gY, gW, gH);

            const isEta = view === "efficiency";
            ctx.fillStyle = "#ffffff"; ctx.font = `${Math.round(12 * scale)}px sans-serif`; ctx.textAlign = "center";
            ctx.fillText(isEta ? "Courbe de Rendement : η = f(I)" : "Caractéristique Interne de Couple : Tem = f(I)", gX + gW / 2, gY - 15 * scale);

            ctx.strokeStyle = "rgba(255, 255, 255, 0.5)"; ctx.lineWidth = 2 * scale;
            ctx.beginPath(); ctx.moveTo(gX, gY + gH); ctx.lineTo(gX + gW, gY + gH); ctx.moveTo(gX, gY + gH); ctx.lineTo(gX, gY); ctx.stroke();

            ctx.strokeStyle = isEta ? "#10b981" : "#f59e0b"; ctx.lineWidth = 3 * scale; ctx.beginPath();
            const maxI = 15.0; const maxY = isEta ? 100 : (K * maxI);

            for (let curI = 0.1; curI <= maxI; curI += 0.2) {
                let yVal = 0;
                if (isEta) {
                    const e_val = Math.max(0, U - R * curI);
                    const om_val = e_val / K;
                    const pa = U * curI;
                    const pu = (K * curI - 0.02) * om_val;
                    yVal = pa > 0 ? Math.max(0, Math.min(100, (pu / pa) * 100)) : 0;
                } else {
                    yVal = K * curI;
                }

                const px = gX + (curI / maxI) * gW;
                const py = (gY + gH) - (yVal / maxY) * gH;
                if (curI === 0.1) ctx.moveTo(px, py); else ctx.lineTo(px, py);
            }
            ctx.stroke();

            const valY = isEta ? state.eta : state.Tem;
            const ptX = gX + (state.I / maxI) * gW;
            const ptY = (gY + gH) - (valY / maxY) * gH;
            ctx.fillStyle = "#facc15"; ctx.beginPath(); ctx.arc(ptX, ptY, 6 * scale, 0, 2 * Math.PI); ctx.fill();
            ctx.fillText(`Point M (${state.I.toFixed(2)}A, ${valY.toFixed(1)}${isEta ? '%' : 'N·m'})`, ptX, ptY - 10 * scale);
        }
    }

    if (moteurCcInterval) clearInterval(moteurCcInterval);
    moteurCcInterval = setInterval(draw, 30);

    updateCalculations();
    updatePointsTable();
}

// --- RECHERCHE SCIENTIFIQUE ENGINE ---
function setupRechercheSection() {
    const searchInput = document.getElementById("recherche-search-input");
    const filterBtns = document.querySelectorAll(".recherche-filter-btn");
    const rCards = document.querySelectorAll(".recherche-card");

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase().trim();
            const activeFilter = document.querySelector(".recherche-filter-btn.active") ? document.querySelector(".recherche-filter-btn.active").getAttribute("data-rfilter") : "all";

            rCards.forEach(card => {
                const title = card.querySelector("h3") ? card.querySelector("h3").textContent.toLowerCase() : "";
                const desc = card.querySelector("p") ? card.querySelector("p").textContent.toLowerCase() : "";
                const keywords = card.getAttribute("data-rkeywords") ? card.getAttribute("data-rkeywords").toLowerCase() : "";
                const cat = card.getAttribute("data-rcat");

                const matchesQuery = query === "" || title.includes(query) || desc.includes(query) || keywords.includes(query);
                const matchesCat = activeFilter === "all" || cat === activeFilter;

                if (matchesQuery && matchesCat) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterCat = btn.getAttribute("data-rfilter");
            const query = searchInput ? searchInput.value.toLowerCase().trim() : "";

            rCards.forEach(card => {
                const title = card.querySelector("h3") ? card.querySelector("h3").textContent.toLowerCase() : "";
                const desc = card.querySelector("p") ? card.querySelector("p").textContent.toLowerCase() : "";
                const keywords = card.getAttribute("data-rkeywords") ? card.getAttribute("data-rkeywords").toLowerCase() : "";
                const cat = card.getAttribute("data-rcat");

                const matchesQuery = query === "" || title.includes(query) || desc.includes(query) || keywords.includes(query);
                const matchesCat = filterCat === "all" || cat === filterCat;

                if (matchesQuery && matchesCat) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    rCards.forEach(card => {
        card.addEventListener("click", () => {
            const title = card.querySelector("h3") ? card.querySelector("h3").textContent : "Article Scientifique";
            showToast(`Consultation de : ${title}`, true);
        });
    });

    setupExperimentalDftNavigation();
}

function openMethodPage(title, category, desc, options = {}) {
    const pagePanel = document.getElementById("method-page-panel");
    const pageTitle = document.getElementById("method-page-title");
    const pageCategory = document.getElementById("method-page-category-badge");
    const pageDesc = document.getElementById("method-page-desc");

    if (pagePanel && pageTitle && pageCategory && pageDesc) {
        pageTitle.textContent = title;
        pageCategory.textContent = category;
        pageDesc.textContent = desc || `Page dédiée aux principes, protocoles et résultats pour : ${title}`;
        
        const placeholder = pagePanel.querySelector(".sol-gel-workspace, .cbd-workspace, .electro-workspace, .silar-workspace, .xrd-workspace, div[style*='dashed']");
        
        if (title.toLowerCase().includes("sol-gel") || title.toLowerCase().includes("spin coating")) {
            if (placeholder) {
                placeholder.outerHTML = renderSolGelCustomPage();
            }
            setTimeout(() => {
                initSolGelAnimation();
            }, 100);
        } else if (title.toLowerCase().includes("chemical bath") || title.toLowerCase().includes("cbd")) {
            if (placeholder) {
                placeholder.outerHTML = renderCBDCustomPage();
            }
            setTimeout(() => {
                initCBDAnimation();
            }, 100);
        } else if (title.toLowerCase().includes("electrochemical") || title.toLowerCase().includes("électrodéposition")) {
            if (placeholder) {
                placeholder.outerHTML = renderElectrochemicalCustomPage();
            }
            setTimeout(() => {
                initElectrochemicalAnimation();
            }, 100);
        } else if (title.toLowerCase().includes("silar")) {
            if (placeholder) {
                placeholder.outerHTML = renderSilarCustomPage();
            }
            setTimeout(() => {
                initSilarAnimation();
            }, 100);
        } else if (title.toLowerCase().includes("xrd") || title.toLowerCase().includes("diffraction")) {
            if (placeholder) {
                placeholder.outerHTML = renderXRDCustomPage();
            }
            setTimeout(() => {
                initXRDAnimation();
            }, 100);
        } else {
            if (placeholder && !placeholder.querySelector("h3")?.textContent.includes("Page dédiée prête")) {
                placeholder.outerHTML = `
                <div style="background: rgba(255, 255, 255, 0.02); border: 2px dashed rgba(255, 255, 255, 0.12); border-radius: 14px; padding: 36px 24px; text-align: center;">
                    <div style="width: 56px; height: 56px; border-radius: 50%; background: rgba(56, 189, 248, 0.1); color: var(--primary, #10b981); display: inline-flex; align-items: center; justify-content: center; font-size: 1.6rem; margin-bottom: 14px;">
                        <i data-lucide="file-text"></i>
                    </div>
                    <h3 style="font-size: 1.1rem; color: #ffffff; margin-bottom: 8px;">Page dédiée prête pour le contenu</h3>
                    <p style="color: #94a3b8; font-size: 0.88rem; max-width: 650px; margin: 0 auto 16px auto; line-height: 1.6;">
                        Cet espace est structuré et réservé pour accueillir votre contenu détaillé (principes théoriques, schémas de montage, équations, protocoles expérimentaux ou fichiers de configuration DFT).
                    </p>
                    <span class="badge badge-outline" style="border-color: rgba(16, 185, 129, 0.4); color: #10b981; font-weight: 600;">Statut : Prêt à recevoir le contenu détaillé</span>
                </div>
                `;
            }
        }

        pagePanel.style.display = "block";
        pagePanel.scrollIntoView({ behavior: "smooth", block: "start" });

        if (window.lucide) {
            window.lucide.createIcons();
        }

        let subId = options.subId;
        if (!subId) {
            for (let [k, v] of Object.entries(METHOD_SUBCARDS_MAP)) {
                if (v.title.toLowerCase() === title.toLowerCase()) {
                    subId = k;
                    break;
                }
            }
        }

        if (!options.skipUrlUpdate && !isNavigatingFromRouter) {
            let targetUrl = subId ? `/#recherche/${subId}` : `/#recherche`;
            syncURL(targetUrl);
            updateSEO({
                title: `${title} - Recherche Scientifique | MATHS & PC`,
                description: desc || `Principes, protocoles et résultats pour : ${title}`,
                url: targetUrl
            });
        }
    }
}

let solGelStep = 1;
let solGelCycle = 1;
let solGelIsPlaying = false;
let solGelTimer = null;
let solGelAnimFrame = 0;
let solGelCanvasAnimId = null;

function renderSolGelCustomPage() {
    return `
    <div class="sol-gel-workspace" style="display: flex; flex-direction: column; gap: 24px; text-align: left;">
        
        <!-- Top Banner: Sol-Gel Method Overview -->
        <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 14px; padding: 20px; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 16px;">
            <div>
                <span class="badge badge-accent" style="font-size: 0.78rem; margin-bottom: 6px;"><i data-lucide="layers"></i> Protocol Officiel LMER</span>
                <h3 style="margin: 4px 0; font-size: 1.3rem; color: #ffffff;">Élaboration de Couches Minces LZO & ZnO par Voie Sol-Gel</h3>
                <p style="margin: 0; color: #94a3b8; font-size: 0.88rem;">Procédé multi-étapes : Préparation du sol &rightarrow; Dépôt par Spin-Coating (5 cycles) &rightarrow; Recuit sous air à 450°C (1h).</p>
            </div>
            <div style="display: flex; gap: 10px;">
                <button class="btn btn-primary" id="btn-start-solgel-anim" onclick="toggleSolGelPlay()" style="padding: 10px 20px; font-weight: 700;">
                    <i data-lucide="play-circle"></i> Lancer l'Animation Interactive
                </button>
            </div>
        </div>

        <!-- Main Content Layout: Interactive Canvas Animation (Left) + Original LMER Schematic (Right) -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 24px;">
            
            <!-- Left Column: Interactive Process Animation Canvas -->
            <div style="background: rgba(10, 15, 30, 0.9); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 14px; padding: 20px; display: flex; flex-direction: column; gap: 16px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h4 style="margin: 0; color: #38bdf8; font-size: 1.05rem; font-weight: 700; display: flex; align-items: center; gap: 8px;">
                        <i data-lucide="activity"></i> Simulation Interactive du Procédé
                    </h4>
                    <span id="solgel-step-badge" class="badge badge-outline" style="border-color: #38bdf8; color: #38bdf8; font-weight: 600;">Étape 1 : Préparation du Sol</span>
                </div>

                <!-- Canvas Container -->
                <div style="position: relative; width: 100%; height: 320px; background: #070a14; border-radius: 12px; border: 1px solid rgba(56, 189, 248, 0.2); overflow: hidden; display: flex; align-items: center; justify-content: center;">
                    <canvas id="solgel-canvas" width="600" height="320" style="width: 100%; height: 100%; object-fit: contain;"></canvas>
                </div>

                <!-- Animation Controls -->
                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; background: rgba(255, 255, 255, 0.03); padding: 12px; border-radius: 10px;">
                    <div style="display: flex; gap: 8px;">
                        <button class="btn btn-secondary" onclick="prevSolGelStep()" style="padding: 6px 14px; font-size: 0.82rem;"><i data-lucide="skip-back"></i> Précédent</button>
                        <button class="btn btn-primary" id="solgel-play-btn" onclick="toggleSolGelPlay()" style="padding: 6px 16px; font-size: 0.82rem;"><i data-lucide="play"></i> Lecture</button>
                        <button class="btn btn-secondary" onclick="nextSolGelStep()" style="padding: 6px 14px; font-size: 0.82rem;">Suivant <i data-lucide="skip-forward"></i></button>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 0.8rem; color: #94a3b8;">Cycles Spin-Coating :</span>
                        <span id="solgel-cycle-counter" style="color: #facc15; font-weight: 800; font-size: 0.95rem;">1 / 5</span>
                    </div>
                </div>

                <!-- Step Description Box -->
                <div id="solgel-step-info" style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid #38bdf8; padding: 12px 16px; border-radius: 6px;">
                    <h5 id="solgel-step-title" style="margin: 0 0 4px 0; color: #ffffff; font-size: 0.92rem; font-weight: 700;">1. Préparation du Sol (ZnO / LZO)</h5>
                    <p id="solgel-step-desc" style="margin: 0; color: #cbd5e1; font-size: 0.82rem; line-height: 1.4;">Dissolution des sels précurseurs sous agitation magnétique chauffante pour former un sol organométallique limpide et stable.</p>
                </div>
            </div>

            <!-- Right Column: Original LMER Method Schematic (4548.PNG) -->
            <div style="background: rgba(10, 15, 30, 0.9); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 14px; padding: 20px; display: flex; flex-direction: column; gap: 14px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h4 style="margin: 0; color: #10b981; font-size: 1.05rem; font-weight: 700; display: flex; align-items: center; gap: 8px;">
                        <i data-lucide="image"></i> Schéma Général du Procédé LMER
                    </h4>
                    <a href="assets/images/sol_gel_scheme.png" target="_blank" class="badge badge-outline" style="border-color: rgba(255,255,255,0.2); color: #cbd5e1; text-decoration: none;">
                        <i data-lucide="external-link"></i> Voir Plein Écran
                    </a>
                </div>

                <!-- Image Container -->
                <div style="border-radius: 10px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.12); background: #ffffff; padding: 6px;">
                    <img src="assets/images/sol_gel_scheme.png" alt="Méthode d'élaboration Sol-Gel LMER" style="width: 100%; height: auto; display: block; border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
                </div>

                <!-- Protocol Specifications Card -->
                <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; padding: 14px; font-size: 0.82rem; color: #cbd5e1;">
                    <h5 style="margin: 0 0 8px 0; color: #ffffff; font-weight: 700; font-size: 0.88rem;">📋 Paramètres du Procédé d'Élaboration :</h5>
                    <ul style="margin: 0; padding-left: 18px; display: flex; flex-direction: column; gap: 6px; line-height: 1.4;">
                        <li><strong>Solution Sol :</strong> Précurseurs de Zinc et Lanthane/Zirconium (ZnO & LZO sol).</li>
                        <li><strong>Dépôt :</strong> Goutte à goutte par micropipette sur substrat en verre.</li>
                        <li><strong>Spin-Coating :</strong> Rotation, accélération progressive puis vitesse constante.</li>
                        <li><strong>Traitement Thermique :</strong> Évaporation du solvant (séchage intermédiaire).</li>
                        <li><strong>Nombre de Couches :</strong> <span style="color: #facc15; font-weight: 700;">5 Répétitions au total</span>.</li>
                        <li><strong>Recuit Final :</strong> Recuit sous air à <span style="color: #ef4444; font-weight: 700;">450°C pendant 1 heure</span> en four à tube.</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
    `;
}

function initSolGelAnimation() {
    solGelStep = 1;
    solGelCycle = 1;
    solGelIsPlaying = false;
    updateSolGelStepUI();
    startSolGelCanvasLoop();
}

function toggleSolGelPlay() {
    solGelIsPlaying = !solGelIsPlaying;
    const playBtn = document.getElementById("solgel-play-btn");
    if (playBtn) {
        playBtn.innerHTML = solGelIsPlaying ? `<i data-lucide="pause"></i> Pause` : `<i data-lucide="play"></i> Lecture`;
        if (window.lucide) window.lucide.createIcons();
    }
    if (solGelIsPlaying) {
        runSolGelAutoPlay();
    } else if (solGelTimer) {
        clearInterval(solGelTimer);
    }
}

function runSolGelAutoPlay() {
    if (solGelTimer) clearInterval(solGelTimer);
    solGelTimer = setInterval(() => {
        if (!solGelIsPlaying) return;
        solGelStep++;
        if (solGelStep > 5) {
            solGelStep = 2; // Loop back to Spin-coating deposition for next layer cycle
            solGelCycle++;
            if (solGelCycle > 5) {
                solGelCycle = 5;
                solGelStep = 5; // Final annealing step
                solGelIsPlaying = false;
                toggleSolGelPlay();
            }
        }
        updateSolGelStepUI();
    }, 2800);
}

function nextSolGelStep() {
    solGelStep++;
    if (solGelStep > 5) {
        solGelStep = 1;
        solGelCycle = (solGelCycle % 5) + 1;
    }
    updateSolGelStepUI();
}

function prevSolGelStep() {
    solGelStep--;
    if (solGelStep < 1) solGelStep = 5;
    updateSolGelStepUI();
}

function updateSolGelStepUI() {
    const badge = document.getElementById("solgel-step-badge");
    const counter = document.getElementById("solgel-cycle-counter");
    const title = document.getElementById("solgel-step-title");
    const desc = document.getElementById("solgel-step-desc");

    if (counter) counter.textContent = `${solGelCycle} / 5`;

    const stepInfo = [
        {
            badge: "Étape 1 : Préparation du Sol",
            title: "1. Préparation du Sol (ZnO / LZO)",
            desc: "Mélange des sels précurseurs (Zinc / Lanthane) sous agitation magnétique chauffante. Formation d'un sol organométallique homogène."
        },
        {
            badge: "Étape 2 : Dépôt de la Solution",
            title: "2. Dépôt de la Solution (Micropipette)",
            desc: "Injection goutte à goutte du sol précurseur sur le substrat en verre propre fixé sur le plateau du Spin-Coater."
        },
        {
            badge: "Étape 3 : Spin Coating (Centrifugation)",
            title: "3. Étalement par Rotation (Spin-Coating)",
            desc: "Rotation, accélération puis vitesse constante. La force centrifuge étale la goutte en un film liquide ultrafin et uniforme."
        },
        {
            badge: "Étape 4 : Évaporation du Solvant",
            title: "4. Évaporation du Solvant (Séchage)",
            desc: "Chauffage intermédiaire pour évaporer le solvant volatile. Opération répétée 5 fois pour empiler 5 couches successives."
        },
        {
            badge: "Étape 5 : Recuit Thermique (Four à Tube)",
            title: "5. Recuit sous Air à 450°C (1 Heure)",
            desc: "Traitement thermique dans un four à tube sous air atmosphérique à 450°C pendant 1h pour cristalliser la couche mince LZO."
        }
    ];

    const current = stepInfo[solGelStep - 1];
    if (badge) badge.textContent = current.badge;
    if (title) title.textContent = current.title;
    if (desc) desc.textContent = current.desc;
}

function startSolGelCanvasLoop() {
    if (solGelCanvasAnimId) cancelAnimationFrame(solGelCanvasAnimId);
    
    function loop() {
        solGelAnimFrame++;
        drawSolGelCanvas();
        solGelCanvasAnimId = requestAnimationFrame(loop);
    }
    loop();
}

function drawSolGelCanvas() {
    const canvas = document.getElementById("solgel-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);

    // Background Grid
    ctx.strokeStyle = "rgba(56, 189, 248, 0.05)";
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 30) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
    }
    for (let y = 0; y < h; y += 30) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
    }

    if (solGelStep === 1) {
        // --- STEP 1: HOTPLATE MAGNETIC STIRRER ---
        // Base
        ctx.fillStyle = "#1e293b";
        ctx.fillRect(200, 220, 200, 50);
        ctx.strokeStyle = "#38bdf8";
        ctx.lineWidth = 2;
        ctx.strokeRect(200, 220, 200, 50);

        // Control Knobs
        ctx.fillStyle = "#38bdf8";
        ctx.beginPath(); ctx.arc(240, 245, 8, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(270, 245, 8, 0, Math.PI * 2); ctx.fill();

        // Hotplate Top
        ctx.fillStyle = "#475569";
        ctx.fillRect(190, 210, 220, 10);

        // Beaker
        ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(230, 90);
        ctx.lineTo(230, 210);
        ctx.lineTo(370, 210);
        ctx.lineTo(370, 90);
        ctx.stroke();

        // Liquid inside beaker
        ctx.fillStyle = "rgba(56, 189, 248, 0.4)";
        ctx.fillRect(233, 130, 134, 78);

        // Rotating Stirrer Bar
        const angle = (solGelAnimFrame * 0.15) % (Math.PI * 2);
        ctx.save();
        ctx.translate(300, 200);
        ctx.rotate(angle);
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(-15, -4, 30, 8);
        ctx.restore();

        // Swirling particles
        for (let i = 0; i < 8; i++) {
            const px = 300 + Math.cos(angle + i) * (20 + (i * 6));
            const py = 165 + Math.sin(angle + i) * 15;
            ctx.fillStyle = "#facc15";
            ctx.beginPath(); ctx.arc(px, py, 3, 0, Math.PI * 2); ctx.fill();
        }

        // Pouring Beakers top left
        ctx.fillStyle = "#cbd5e1";
        ctx.font = "bold 13px Inter, sans-serif";
        ctx.fillText("Mélange: ZnO + LZO Sol", 220, 75);

    } else if (solGelStep === 2) {
        // --- STEP 2: PIPETTE DEPOSITION ---
        // Spin Coater Base
        ctx.fillStyle = "#1e293b";
        ctx.fillRect(210, 220, 180, 60);
        ctx.strokeStyle = "#38bdf8";
        ctx.lineWidth = 2;
        ctx.strokeRect(210, 220, 180, 60);

        // Chuck & Substrate
        ctx.fillStyle = "#64748b";
        ctx.fillRect(285, 180, 30, 40);
        ctx.fillStyle = "#e2e8f0"; // Glass Substrate
        ctx.fillRect(230, 172, 140, 8);

        // Micropipette
        ctx.fillStyle = "#94a3b8";
        ctx.fillRect(295, 30, 10, 80);
        ctx.beginPath();
        ctx.moveTo(295, 110);
        ctx.lineTo(305, 110);
        ctx.lineTo(301, 130);
        ctx.lineTo(299, 130);
        ctx.closePath();
        ctx.fill();

        // Droplet Animation
        const dropY = 130 + ((solGelAnimFrame * 4) % 40);
        ctx.fillStyle = "#38bdf8";
        ctx.beginPath(); ctx.arc(300, dropY, 5, 0, Math.PI * 2); ctx.fill();

        // Liquid Pool on Substrate
        ctx.fillStyle = "rgba(56, 189, 248, 0.8)";
        ctx.beginPath(); ctx.ellipse(300, 172, 25, 4, 0, 0, Math.PI * 2); ctx.fill();

        ctx.fillStyle = "#cbd5e1";
        ctx.font = "bold 13px Inter, sans-serif";
        ctx.fillText("Dépôt Goutte à Goutte", 230, 20);

    } else if (solGelStep === 3) {
        // --- STEP 3: SPIN COATING ROTATION ---
        ctx.fillStyle = "#1e293b";
        ctx.fillRect(210, 220, 180, 60);
        ctx.strokeStyle = "#38bdf8";
        ctx.lineWidth = 2;
        ctx.strokeRect(210, 220, 180, 60);

        ctx.fillStyle = "#64748b";
        ctx.fillRect(285, 180, 30, 40);

        // Rotating Substrate with thin film
        const spinW = 140 + Math.sin(solGelAnimFrame * 0.3) * 10;
        ctx.fillStyle = "#e2e8f0";
        ctx.fillRect(300 - spinW/2, 172, spinW, 8);

        // Thin Film Layer
        ctx.fillStyle = "#38bdf8";
        ctx.fillRect(300 - spinW/2, 168, spinW, 4);

        // Rotation Arrows / Motion Lines
        const rAngle = solGelAnimFrame * 0.2;
        ctx.strokeStyle = "#facc15";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(300, 172, 85, rAngle, rAngle + Math.PI * 0.8);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(300, 172, 85, rAngle + Math.PI, rAngle + Math.PI * 1.8);
        ctx.stroke();

        ctx.fillStyle = "#facc15";
        ctx.font = "bold 14px Inter, sans-serif";
        ctx.fillText("ω = 3000 RPM (Centrifugation)", 200, 120);

    } else if (solGelStep === 4) {
        // --- STEP 4: SOLVENT EVAPORATION ---
        ctx.fillStyle = "#475569";
        ctx.fillRect(200, 220, 200, 20);

        // Glass Substrate
        ctx.fillStyle = "#e2e8f0";
        ctx.fillRect(230, 210, 140, 10);

        // Multilayer Film based on cycle
        for (let c = 0; c < solGelCycle; c++) {
            ctx.fillStyle = `rgba(56, 189, 248, ${0.4 + c * 0.12})`;
            ctx.fillRect(230, 206 - (c * 3), 140, 3);
        }

        // Steam Vapor Arrows Rising
        for (let i = 0; i < 5; i++) {
            const vy = 190 - ((solGelAnimFrame * 2 + i * 20) % 80);
            const vx = 240 + (i * 30);
            ctx.strokeStyle = "rgba(56, 189, 248, 0.6)";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(vx, vy);
            ctx.lineTo(vx, vy - 15);
            ctx.stroke();
        }

        ctx.fillStyle = "#38bdf8";
        ctx.font = "bold 13px Inter, sans-serif";
        ctx.fillText(`Évaporation du Solvant (Couche ${solGelCycle} / 5)`, 200, 60);

    } else if (solGelStep === 5) {
        // --- STEP 5: TUBE FURNACE ANNEALING AT 450°C ---
        // Tube Furnace Body
        const furnaceGlow = Math.abs(Math.sin(solGelAnimFrame * 0.05));
        ctx.fillStyle = "#334155";
        ctx.fillRect(150, 110, 300, 130);
        ctx.strokeStyle = `rgba(239, 68, 68, ${0.5 + furnaceGlow * 0.5})`;
        ctx.lineWidth = 4;
        ctx.strokeRect(150, 110, 300, 130);

        // Inner Quartz Tube Glowing Red Hot
        ctx.fillStyle = `rgba(239, 68, 68, ${0.2 + furnaceGlow * 0.3})`;
        ctx.fillRect(120, 150, 360, 50);

        // Substrate inside tube with crystalline LZO layer
        ctx.fillStyle = "#cbd5e1";
        ctx.fillRect(230, 175, 140, 8);
        ctx.fillStyle = "#10b981"; // Crystalline Layer
        ctx.fillRect(230, 170, 140, 5);

        // Heat Waves
        ctx.strokeStyle = "#f59e0b";
        ctx.lineWidth = 2;
        for (let w = 0; w < 3; w++) {
            const wx = 180 + (w * 80);
            ctx.beginPath();
            ctx.arc(wx, 135, 15, Math.PI, 0);
            ctx.stroke();
        }

        ctx.fillStyle = "#ef4444";
        ctx.font = "bold 15px Inter, sans-serif";
        ctx.fillText("Recuit Thermique: 450°C sous Air (1 Heure)", 140, 80);
        ctx.fillStyle = "#10b981";
        ctx.font = "bold 13px Inter, sans-serif";
        ctx.fillText("✔ Couche Mince LZO Cristallisée", 210, 275);
    }
}


function closeMethodPage(options = {}) {
    const pagePanel = document.getElementById("method-page-panel");
    if (pagePanel) {
        pagePanel.style.display = "none";
        const section = document.getElementById("experimental-dft-section");
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }
    if (!options.skipUrlUpdate && !isNavigatingFromRouter) {
        syncURL("/#recherche");
        updateSEO({
            title: "Recherche Scientifique & DFT - Films Minces | MATHS & PC",
            description: "Méthodes expérimentales de dépôt de films minces, caractérisation et calculs ab-initio DFT.",
            url: "/#recherche"
        });
    }
}

function setupExperimentalDftNavigation() {
    const tabBtns = document.querySelectorAll(".exp-tab-btn");
    const tabContents = document.querySelectorAll(".exp-tab-content");

    if (tabBtns.length === 0) return;

    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            tabBtns.forEach(b => {
                b.classList.remove("active");
                b.style.background = "rgba(255, 255, 255, 0.04)";
                b.style.color = "#94a3b8";
                b.style.borderColor = "rgba(255, 255, 255, 0.1)";
            });

            btn.classList.add("active");
            const expTab = btn.getAttribute("data-exptab");

            if (expTab === "methods") {
                btn.style.background = "rgba(56, 189, 248, 0.15)";
                btn.style.color = "#38bdf8";
                btn.style.borderColor = "rgba(56, 189, 248, 0.3)";
            } else if (expTab === "characterization") {
                btn.style.background = "rgba(16, 185, 129, 0.15)";
                btn.style.color = "#10b981";
                btn.style.borderColor = "rgba(16, 185, 129, 0.3)";
            } else if (expTab === "dft") {
                btn.style.background = "rgba(168, 85, 247, 0.15)";
                btn.style.color = "#c084fc";
                btn.style.borderColor = "rgba(168, 85, 247, 0.3)";
            }

            tabContents.forEach(content => {
                if (content.id === `exp-tab-${expTab}`) {
                    content.style.display = "grid";
                    content.classList.add("active");
                } else {
                    content.style.display = "none";
                    content.classList.remove("active");
                }
            });

            closeMethodPage();

            if (window.lucide) {
                window.lucide.createIcons();
            }
        });
    });
}

// --- CHEMICAL BATH DEPOSITION (CBD) ANIMATION ENGINE ---
let cbdTemp = 60.0;
let cbdTime = 30;
let cbdStirSpeed = 400;
let cbdElapsed = 0;
let cbdIsPlaying = false;
let cbdTimer = null;
let cbdCanvasAnimId = null;
let cbdAnimFrame = 0;

function renderCBDCustomPage() {
    return `
    <div class="cbd-workspace" style="display: flex; flex-direction: column; gap: 24px; text-align: left;">
        
        <!-- Top Banner: CBD Method Overview -->
        <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 14px; padding: 20px; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 16px;">
            <div>
                <span class="badge badge-accent" style="font-size: 0.78rem; margin-bottom: 6px;"><i data-lucide="waves"></i> Protocol Expérimental Officiel LMER</span>
                <h3 style="margin: 4px 0; font-size: 1.3rem; color: #ffffff;">Chemical Bath Deposition (CBD)</h3>
                <p style="margin: 0; color: #94a3b8; font-size: 0.88rem;">Dépôt par bain chimique d'oxyde de titane/manganèse (TiO2 et MTO sol) régulé en température à 60.0°C.</p>
            </div>
            <div style="display: flex; gap: 10px;">
                <button class="btn btn-primary" id="btn-start-cbd-anim" onclick="toggleCBDPlay()" style="padding: 10px 20px; font-weight: 700;">
                    <i data-lucide="play-circle"></i> Lancer la Simulation Interactive CBD
                </button>
            </div>
        </div>

        <!-- Main Content Layout: Interactive Canvas Animation (Left) + Original LMER Schematic (Right) -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 24px;">
            
            <!-- Left Column: Interactive CBD Setup & Growth Animation Canvas -->
            <div style="background: rgba(10, 15, 30, 0.9); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 14px; padding: 20px; display: flex; flex-direction: column; gap: 16px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h4 style="margin: 0; color: #38bdf8; font-size: 1.05rem; font-weight: 700; display: flex; align-items: center; gap: 8px;">
                        <i data-lucide="activity"></i> Montage Expérimental & Croissance du Film
                    </h4>
                    <span id="cbd-thickness-badge" class="badge badge-outline" style="border-color: #38bdf8; color: #38bdf8; font-weight: 600;">Épaisseur : 0 nm</span>
                </div>

                <!-- Canvas Container -->
                <div style="position: relative; width: 100%; height: 320px; background: #070a14; border-radius: 12px; border: 1px solid rgba(56, 189, 248, 0.2); overflow: hidden; display: flex; align-items: center; justify-content: center;">
                    <canvas id="cbd-canvas" width="600" height="320" style="width: 100%; height: 100%; object-fit: contain;"></canvas>
                </div>

                <!-- Animation Controls -->
                <div style="display: flex; flex-direction: column; gap: 12px; background: rgba(255, 255, 255, 0.03); padding: 14px; border-radius: 10px;">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 10px;">
                        <div>
                            <label style="font-size: 0.78rem; color: #94a3b8; display: block; margin-bottom: 4px;">Température (T) : <strong id="cbd-temp-val" style="color: #ef4444;">60.0 °C</strong></label>
                            <input type="range" id="cbd-temp-slider" min="30" max="90" step="1" value="60" oninput="onCBDParamChange()" style="width: 100%;">
                        </div>
                        <div>
                            <label style="font-size: 0.78rem; color: #94a3b8; display: block; margin-bottom: 4px;">Durée Bain (t) : <strong id="cbd-time-val" style="color: #facc15;">30 min</strong></label>
                            <input type="range" id="cbd-time-slider" min="10" max="90" step="5" value="30" oninput="onCBDParamChange()" style="width: 100%;">
                        </div>
                        <div>
                            <label style="font-size: 0.78rem; color: #94a3b8; display: block; margin-bottom: 4px;">Agitation : <strong id="cbd-stir-val" style="color: #38bdf8;">400 RPM</strong></label>
                            <input type="range" id="cbd-stir-slider" min="100" max="800" step="50" value="400" oninput="onCBDParamChange()" style="width: 100%;">
                        </div>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 4px;">
                        <button class="btn btn-primary" id="cbd-play-btn" onclick="toggleCBDPlay()" style="padding: 8px 18px; font-size: 0.85rem;">
                            <i data-lucide="play"></i> Démarrer la Réaction
                        </button>
                        <button class="btn btn-secondary" onclick="resetCBDAnim()" style="padding: 8px 14px; font-size: 0.85rem;">
                            <i data-lucide="rotate-ccw"></i> Réinitialiser
                        </button>
                    </div>
                </div>

                <!-- Step Description Box -->
                <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid #38bdf8; padding: 12px 16px; border-radius: 6px;">
                    <h5 style="margin: 0 0 4px 0; color: #ffffff; font-size: 0.92rem; font-weight: 700;">Principe de Dépôt en Bain Chimique (CBD)</h5>
                    <p style="margin: 0; color: #cbd5e1; font-size: 0.82rem; line-height: 1.4;">
                        Les précurseurs en solution aqueuse réagissent sous température contrôlée (60.0°C). La précipitation lente et progressive des complexes organométalliques forme un film solide adhérent de TiO2/MTO sur le substrat suspendu.
                    </p>
                </div>
            </div>

            <!-- Right Column: Original Experimental Setup Schematic (8894.png) -->
            <div style="background: rgba(10, 15, 30, 0.9); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 14px; padding: 20px; display: flex; flex-direction: column; gap: 14px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h4 style="margin: 0; color: #10b981; font-size: 1.05rem; font-weight: 700; display: flex; align-items: center; gap: 8px;">
                        <i data-lucide="image"></i> Schéma Général du Bain Chimique (CBD)
                    </h4>
                    <a href="assets/images/cbd_setup.png" target="_blank" class="badge badge-outline" style="border-color: rgba(255,255,255,0.2); color: #cbd5e1; text-decoration: none;">
                        <i data-lucide="external-link"></i> Voir Plein Écran
                    </a>
                </div>

                <!-- Image Container -->
                <div style="border-radius: 10px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.12); background: #ffffff; padding: 6px;">
                    <img src="assets/images/cbd_setup.png" alt="Dispositif expérimental Chemical Bath Deposition CBD" style="width: 100%; height: auto; display: block; border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
                </div>

                <!-- Protocol Specifications Card -->
                <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; padding: 14px; font-size: 0.82rem; color: #cbd5e1;">
                    <h5 style="margin: 0 0 8px 0; color: #ffffff; font-weight: 700; font-size: 0.88rem;">📋 Composants du Montage Expérimental :</h5>
                    <ul style="margin: 0; padding-left: 18px; display: flex; flex-direction: column; gap: 6px; line-height: 1.4;">
                        <li><strong>Thermomètre numérique :</strong> Contrôle précis de la température du bain (60.0°C).</li>
                        <li><strong>Bain-marie :</strong> Beaker d'eau distillée assurant un chauffage homogène de la réaction.</li>
                        <li><strong>Solution Préparée :</strong> Précurseurs de TiO2 et MTO sol en milieu contrôlé.</li>
                        <li><strong>Substrat & Potence :</strong> Substrat suspendu verticalement au statif pour un dépôt propre.</li>
                        <li><strong>Agitateur Magnétique :</strong> Barreau aimanté assurant l'homogénéité des réactifs.</li>
                        <li><strong>Chauffage & Support :</strong> Bec électrique réglable sur support élévateur (lab jack).</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
    `;
}

function initCBDAnimation() {
    cbdElapsed = 0;
    cbdIsPlaying = false;
    onCBDParamChange();
    startCBDCanvasLoop();
}

function onCBDParamChange() {
    const tempSlider = document.getElementById("cbd-temp-slider");
    const timeSlider = document.getElementById("cbd-time-slider");
    const stirSlider = document.getElementById("cbd-stir-slider");

    if (tempSlider) cbdTemp = parseFloat(tempSlider.value);
    if (timeSlider) cbdTime = parseInt(timeSlider.value);
    if (stirSlider) cbdStirSpeed = parseInt(stirSlider.value);

    const tempVal = document.getElementById("cbd-temp-val");
    const timeVal = document.getElementById("cbd-time-val");
    const stirVal = document.getElementById("cbd-stir-val");

    if (tempVal) tempVal.textContent = `${cbdTemp.toFixed(1)} °C`;
    if (timeVal) timeVal.textContent = `${cbdTime} min`;
    if (stirVal) stirVal.textContent = `${cbdStirSpeed} RPM`;
}

function toggleCBDPlay() {
    cbdIsPlaying = !cbdIsPlaying;
    const playBtn = document.getElementById("cbd-play-btn");
    const topBtn = document.getElementById("btn-start-cbd-anim");
    if (playBtn) {
        playBtn.innerHTML = cbdIsPlaying ? `<i data-lucide="pause"></i> Pause` : `<i data-lucide="play"></i> Démarrer la Réaction`;
        if (window.lucide) window.lucide.createIcons();
    }
    if (topBtn) {
        topBtn.innerHTML = cbdIsPlaying ? `<i data-lucide="pause-circle"></i> Pause` : `<i data-lucide="play-circle"></i> Lancer la Simulation Interactive CBD`;
        if (window.lucide) window.lucide.createIcons();
    }
}

function resetCBDAnim() {
    cbdElapsed = 0;
    cbdIsPlaying = false;
    const playBtn = document.getElementById("cbd-play-btn");
    if (playBtn) {
        playBtn.innerHTML = `<i data-lucide="play"></i> Démarrer la Réaction`;
        if (window.lucide) window.lucide.createIcons();
    }
}

function startCBDCanvasLoop() {
    if (cbdCanvasAnimId) cancelAnimationFrame(cbdCanvasAnimId);
    function loop() {
        cbdAnimFrame++;
        if (cbdIsPlaying) {
            cbdElapsed += 0.05;
            const maxDuration = cbdTime * 60;
            if (cbdElapsed >= maxDuration) {
                cbdElapsed = maxDuration;
                cbdIsPlaying = false;
                toggleCBDPlay();
            }
        }
        drawCBDCanvas();
        cbdCanvasAnimId = requestAnimationFrame(loop);
    }
    loop();
}

function drawCBDCanvas() {
    const canvas = document.getElementById("cbd-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);

    // Background Grid
    ctx.strokeStyle = "rgba(56, 189, 248, 0.05)";
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 30) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
    }
    for (let y = 0; y < h; y += 30) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
    }

    // 1. Lab Jack (Support) at bottom center
    ctx.fillStyle = "#334155";
    ctx.fillRect(210, 280, 180, 12);
    ctx.fillStyle = "#1e293b";
    ctx.fillRect(200, 292, 200, 10);
    // Scissor arms
    ctx.strokeStyle = "#94a3b8"; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(220, 280); ctx.lineTo(380, 292); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(380, 280); ctx.lineTo(220, 292); ctx.stroke();

    // 2. Electric Heating Plate (Bec Électrique)
    ctx.fillStyle = "#f8fafc";
    ctx.fillRect(210, 240, 180, 40);
    ctx.strokeStyle = "#cbd5e1"; ctx.lineWidth = 2;
    ctx.strokeRect(210, 240, 180, 40);
    // Red Light indicator
    ctx.fillStyle = cbdIsPlaying ? "#ef4444" : "#475569";
    ctx.beginPath(); ctx.arc(370, 260, 6, 0, Math.PI * 2); ctx.fill();
    if (cbdIsPlaying) {
        ctx.shadowColor = "#ef4444"; ctx.shadowBlur = 10;
        ctx.beginPath(); ctx.arc(370, 260, 6, 0, Math.PI * 2); ctx.fill();
        ctx.shadowBlur = 0;
    }
    // Heating Plate top surface
    ctx.fillStyle = "#475569";
    ctx.fillRect(200, 232, 200, 8);

    // 3. Water Bath Beaker (Bain-marie d'eau distillée)
    ctx.fillStyle = "rgba(56, 189, 248, 0.25)";
    ctx.fillRect(225, 120, 150, 112);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.7)"; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(220, 100); ctx.lineTo(220, 232); ctx.lineTo(380, 232); ctx.lineTo(380, 100); ctx.stroke();
    // Water surface label
    ctx.fillStyle = "#38bdf8"; ctx.font = "10px sans-serif"; ctx.textAlign = "left";
    ctx.fillText("Eau distillée (60.0°C)", 300, 115);

    // 4. Inner Reaction Beaker (TiO2 et MTO sol)
    ctx.fillStyle = "rgba(251, 146, 60, 0.45)"; // Orange precursor solution
    ctx.fillRect(255, 135, 90, 85);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.85)"; ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.moveTo(250, 125); ctx.lineTo(250, 220); ctx.lineTo(350, 220); ctx.lineTo(350, 125); ctx.stroke();
    ctx.fillStyle = "#f97316"; ctx.font = "bold 9px sans-serif"; ctx.textAlign = "center";
    ctx.fillText("TiO2 & MTO sol", 300, 150);

    // 5. Magnetic Stirrer Bar at bottom of inner beaker
    const stirAngle = (cbdAnimFrame * (cbdStirSpeed / 600)) % (Math.PI * 2);
    ctx.save();
    ctx.translate(300, 214);
    ctx.rotate(stirAngle);
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(-12, -3, 24, 6);
    ctx.strokeStyle = "#ffffff"; ctx.lineWidth = 1;
    ctx.strokeRect(-12, -3, 24, 6);
    ctx.restore();

    // 6. Substrate & Potence Stand
    // Stand Bar on right
    ctx.fillStyle = "#64748b";
    ctx.fillRect(450, 30, 10, 270);
    ctx.fillRect(420, 290, 70, 12);
    // Potence Arm
    ctx.fillRect(295, 45, 160, 8);
    // Vertical Clamp holding Substrate
    ctx.fillRect(295, 45, 8, 80);

    // Glass Substrate immersed vertically
    const maxDuration = cbdTime * 60;
    const progress = Math.min(1.0, cbdElapsed / maxDuration);
    const filmThicknessNm = Math.round(progress * 180 * (cbdTemp / 60.0));

    // Glass base
    ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
    ctx.fillRect(293, 115, 12, 75);
    ctx.strokeStyle = "#ffffff"; ctx.lineWidth = 1;
    ctx.strokeRect(293, 115, 12, 75);

    // Deposited Film Layer (TiO2 / MTO) on substrate sides
    if (filmThicknessNm > 0) {
        const filmAlpha = Math.min(0.9, 0.2 + progress * 0.7);
        ctx.fillStyle = `rgba(16, 185, 129, ${filmAlpha})`;
        ctx.fillRect(291, 135, 3, 55); // Left film layer
        ctx.fillRect(304, 135, 3, 55); // Right film layer
    }

    // Substrate Label
    ctx.fillStyle = "#ffffff"; ctx.font = "bold 10px sans-serif"; ctx.textAlign = "left";
    ctx.fillText("Substrat", 312, 130);

    // 7. Digital Thermometer (Left Side)
    ctx.fillStyle = "#1e293b";
    ctx.fillRect(30, 120, 130, 48);
    ctx.strokeStyle = "#38bdf8"; ctx.lineWidth = 2;
    ctx.strokeRect(30, 120, 130, 48);
    // Display Screen
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(40, 128, 110, 32);
    ctx.fillStyle = "#ef4444"; ctx.font = "bold 13px 'Courier New', monospace"; ctx.textAlign = "center";
    ctx.fillText(`TH: ${cbdTemp.toFixed(1)}°C`, 95, 149);
    // Probe wire into water bath
    ctx.strokeStyle = "#94a3b8"; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(160, 144);
    ctx.lineTo(240, 144);
    ctx.lineTo(240, 170);
    ctx.stroke();

    // 8. Animated Heat / Solution Bubbles when playing
    if (cbdIsPlaying) {
        ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
        for (let i = 0; i < 6; i++) {
            const bx = 265 + ((cbdAnimFrame * 3 + i * 15) % 70);
            const by = 210 - ((cbdAnimFrame * 2 + i * 20) % 65);
            ctx.beginPath(); ctx.arc(bx, by, 2 + (i % 2), 0, Math.PI * 2); ctx.fill();
        }
    }

    // Update thickness badge UI
    const badge = document.getElementById("cbd-thickness-badge");
    if (badge) {
        badge.textContent = `Épaisseur : ${filmThicknessNm} nm`;
    }
}

// --- ELECTROCHEMICAL DEPOSITION ANIMATION ENGINE ---
let electroVoltage = 2.5;
let electroStirSpeed = 250;
let electroTemp = 25;
let electroElapsed = 0;
let electroIsPlaying = false;
let electroTimer = null;
let electroCanvasAnimId = null;
let electroAnimFrame = 0;

function renderElectrochemicalCustomPage() {
    return `
    <div class="electro-workspace" style="display: flex; flex-direction: column; gap: 24px; text-align: left;">
        
        <!-- Top Banner: Electrochemical Deposition Overview -->
        <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 14px; padding: 20px; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 16px;">
            <div>
                <span class="badge badge-accent" style="font-size: 0.78rem; margin-bottom: 6px;"><i data-lucide="zap"></i> Protocol Expérimental Officiel LMER</span>
                <h3 style="margin: 4px 0; font-size: 1.3rem; color: #ffffff;">Electrochemical Deposition (Électrodéposition)</h3>
                <p style="margin: 0; color: #94a3b8; font-size: 0.88rem;">Réduction électrochimique contrôlée par potentiostat sur substrat conducteur immergé dans l'électrolyte.</p>
            </div>
            <div style="display: flex; gap: 10px;">
                <button class="btn btn-primary" id="btn-start-electro-anim" onclick="toggleElectroPlay()" style="padding: 10px 20px; font-weight: 700;">
                    <i data-lucide="play-circle"></i> Lancer la Simulation Interactive
                </button>
            </div>
        </div>

        <!-- Main Content Layout: Interactive Canvas Animation (Left) + Original LMER Schematic (Right) -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 24px;">
            
            <!-- Left Column: Interactive Setup & Cell Growth Animation Canvas -->
            <div style="background: rgba(10, 15, 30, 0.9); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 14px; padding: 20px; display: flex; flex-direction: column; gap: 16px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h4 style="margin: 0; color: #38bdf8; font-size: 1.05rem; font-weight: 700; display: flex; align-items: center; gap: 8px;">
                        <i data-lucide="activity"></i> Cellule Électrochimique & Potentiostat
                    </h4>
                    <span id="electro-thickness-badge" class="badge badge-outline" style="border-color: #38bdf8; color: #38bdf8; font-weight: 600;">Épaisseur : 0.0 nm</span>
                </div>

                <!-- Canvas Container -->
                <div style="position: relative; width: 100%; height: 340px; background: #070a14; border-radius: 12px; border: 1px solid rgba(56, 189, 248, 0.2); overflow: hidden; display: flex; align-items: center; justify-content: center;">
                    <canvas id="electro-canvas" width="620" height="340" style="width: 100%; height: 100%; object-fit: contain;"></canvas>
                </div>

                <!-- Animation Controls -->
                <div style="display: flex; flex-direction: column; gap: 12px; background: rgba(255, 255, 255, 0.03); padding: 14px; border-radius: 10px;">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 10px;">
                        <div>
                            <label style="font-size: 0.78rem; color: #94a3b8; display: block; margin-bottom: 4px;">Potentiel (U) : <strong id="electro-volt-val" style="color: #facc15;">2.5 V</strong></label>
                            <input type="range" id="electro-volt-slider" min="0.5" max="5.0" step="0.1" value="2.5" oninput="onElectroParamChange()" style="width: 100%;">
                        </div>
                        <div>
                            <label style="font-size: 0.78rem; color: #94a3b8; display: block; margin-bottom: 4px;">Agitation : <strong id="electro-stir-val" style="color: #38bdf8;">250 RPM</strong></label>
                            <input type="range" id="electro-stir-slider" min="50" max="600" step="25" value="250" oninput="onElectroParamChange()" style="width: 100%;">
                        </div>
                        <div>
                            <label style="font-size: 0.78rem; color: #94a3b8; display: block; margin-bottom: 4px;">Température : <strong id="electro-temp-val" style="color: #ef4444;">25 °C</strong></label>
                            <input type="range" id="electro-temp-slider" min="15" max="75" step="5" value="25" oninput="onElectroParamChange()" style="width: 100%;">
                        </div>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 4px;">
                        <button class="btn btn-primary" id="electro-play-btn" onclick="toggleElectroPlay()" style="padding: 8px 18px; font-size: 0.85rem;">
                            <i data-lucide="play"></i> Lancer la Déposition
                        </button>
                        <button class="btn btn-secondary" onclick="resetElectroAnim()" style="padding: 8px 14px; font-size: 0.85rem;">
                            <i data-lucide="rotate-ccw"></i> Réinitialiser
                        </button>
                    </div>
                </div>

                <!-- Step Description Box -->
                <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid #38bdf8; padding: 12px 16px; border-radius: 6px;">
                    <h5 style="margin: 0 0 4px 0; color: #ffffff; font-size: 0.92rem; font-weight: 700;">Loi de Faraday & Électrodéposition</h5>
                    <p style="margin: 0; color: #cbd5e1; font-size: 0.82rem; line-height: 1.4;">
                        Sous l'action du potentiel imposé par le potentiostat, les cations de la solution migrent vers la Cathode (-) où ils captent des électrons (réduction M<sup>z+</sup> + z e<sup>-</sup> &rightarrow; M<sub>solide</sub>) pour former une couche mince métallique ou d'oxyde adhérente.
                    </p>
                </div>
            </div>

            <!-- Right Column: Original Experimental Setup Schematic (122.jpg) -->
            <div style="background: rgba(10, 15, 30, 0.9); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 14px; padding: 20px; display: flex; flex-direction: column; gap: 14px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h4 style="margin: 0; color: #10b981; font-size: 1.05rem; font-weight: 700; display: flex; align-items: center; gap: 8px;">
                        <i data-lucide="image"></i> Schéma Général de l'Électrodéposition
                    </h4>
                    <a href="assets/images/electrochemical_setup.jpg" target="_blank" class="badge badge-outline" style="border-color: rgba(255,255,255,0.2); color: #cbd5e1; text-decoration: none;">
                        <i data-lucide="external-link"></i> Voir Plein Écran
                    </a>
                </div>

                <!-- Image Container -->
                <div style="border-radius: 10px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.12); background: #ffffff; padding: 6px;">
                    <img src="assets/images/electrochemical_setup.jpg" alt="Dispositif expérimental Electrochemical Deposition Potentiostat" style="width: 100%; height: auto; display: block; border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
                </div>

                <!-- Protocol Specifications Card -->
                <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; padding: 14px; font-size: 0.82rem; color: #cbd5e1;">
                    <h5 style="margin: 0 0 8px 0; color: #ffffff; font-weight: 700; font-size: 0.88rem;">📋 Composants du Montage Expérimental :</h5>
                    <ul style="margin: 0; padding-left: 18px; display: flex; flex-direction: column; gap: 6px; line-height: 1.4;">
                        <li><strong>Potentiostat / Electrochemical Analyzer :</strong> Générateur de potentiel stabilisé alimentant la cellule.</li>
                        <li><strong>Anode (+) :</strong> Électrode de contre-réaction (Anode d'oxydation connectée à la borne rouge +).</li>
                        <li><strong>Cathode (- / Substrat) :</strong> Substrat conducteur où s'effectue la réduction et la croissance du film.</li>
                        <li><strong>Électrolyte :</strong> Solution aqueuse précurseur maintenue sous agitation magnétique (250 rpm).</li>
                        <li><strong>Interface PC :</strong> Monitoring en temps réel de la densité de courant j(mA) et du temps de dépôt t(s).</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
    `;
}

function initElectrochemicalAnimation() {
    electroElapsed = 0;
    electroIsPlaying = false;
    onElectroParamChange();
    startElectroCanvasLoop();
}

function onElectroParamChange() {
    const voltSlider = document.getElementById("electro-volt-slider");
    const stirSlider = document.getElementById("electro-stir-slider");
    const tempSlider = document.getElementById("electro-temp-slider");

    if (voltSlider) electroVoltage = parseFloat(voltSlider.value);
    if (stirSlider) electroStirSpeed = parseInt(stirSlider.value);
    if (tempSlider) electroTemp = parseInt(tempSlider.value);

    const voltVal = document.getElementById("electro-volt-val");
    const stirVal = document.getElementById("electro-stir-val");
    const tempVal = document.getElementById("electro-temp-val");

    if (voltVal) voltVal.textContent = `${electroVoltage.toFixed(1)} V`;
    if (stirVal) stirVal.textContent = `${electroStirSpeed} RPM`;
    if (tempVal) tempVal.textContent = `${electroTemp} °C`;
}

function toggleElectroPlay() {
    electroIsPlaying = !electroIsPlaying;
    const playBtn = document.getElementById("electro-play-btn");
    const topBtn = document.getElementById("btn-start-electro-anim");
    if (playBtn) {
        playBtn.innerHTML = electroIsPlaying ? `<i data-lucide="pause"></i> Pause` : `<i data-lucide="play"></i> Lancer la Déposition`;
        if (window.lucide) window.lucide.createIcons();
    }
    if (topBtn) {
        topBtn.innerHTML = electroIsPlaying ? `<i data-lucide="pause-circle"></i> Pause` : `<i data-lucide="play-circle"></i> Lancer la Simulation Interactive`;
        if (window.lucide) window.lucide.createIcons();
    }
}

function resetElectroAnim() {
    electroElapsed = 0;
    electroIsPlaying = false;
    const playBtn = document.getElementById("electro-play-btn");
    if (playBtn) {
        playBtn.innerHTML = `<i data-lucide="play"></i> Lancer la Déposition`;
        if (window.lucide) window.lucide.createIcons();
    }
}

function startElectroCanvasLoop() {
    if (electroCanvasAnimId) cancelAnimationFrame(electroCanvasAnimId);
    function loop() {
        electroAnimFrame++;
        if (electroIsPlaying) {
            electroElapsed += 0.05;
        }
        drawElectrochemicalCanvas();
        electroCanvasAnimId = requestAnimationFrame(loop);
    }
    loop();
}

function drawElectrochemicalCanvas() {
    const canvas = document.getElementById("electro-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);

    // Background Grid
    ctx.strokeStyle = "rgba(56, 189, 248, 0.05)";
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 30) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
    }
    for (let y = 0; y < h; y += 30) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
    }

    // 1. Hot Plate / Magnetic Stirrer Base (Bottom)
    ctx.fillStyle = "#f8fafc";
    ctx.fillRect(140, 240, 240, 55);
    ctx.strokeStyle = "#cbd5e1"; ctx.lineWidth = 2;
    ctx.strokeRect(140, 240, 240, 55);
    
    // Front Control Panel
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(155, 275, 210, 16);
    ctx.fillStyle = "#38bdf8"; ctx.font = "bold 9px monospace"; ctx.textAlign = "left";
    ctx.fillText(`${electroTemp} °C`, 165, 287);
    ctx.fillText(`${electroStirSpeed} rpm`, 315, 287);

    // Control Knobs
    ctx.fillStyle = "#475569";
    ctx.beginPath(); ctx.arc(200, 260, 10, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(320, 260, 10, 0, Math.PI * 2); ctx.fill();

    // Hot Plate Surface
    ctx.fillStyle = "#334155";
    ctx.fillRect(130, 232, 260, 8);

    // 2. Beaker & Electrolyte Solution
    ctx.fillStyle = "rgba(56, 189, 248, 0.25)";
    ctx.fillRect(160, 110, 200, 122);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.85)"; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(155, 90); ctx.lineTo(155, 232); ctx.lineTo(365, 232); ctx.lineTo(365, 90); ctx.stroke();
    // Solution label
    ctx.fillStyle = "#38bdf8"; ctx.font = "bold 10px sans-serif"; ctx.textAlign = "center";
    ctx.fillText("Electrolyte Solution", 260, 130);

    // Magnetic Stirrer capsule at bottom
    const stirAngle = (electroAnimFrame * (electroStirSpeed / 400)) % (Math.PI * 2);
    ctx.save();
    ctx.translate(260, 218);
    ctx.rotate(stirAngle);
    ctx.fillStyle = "#475569";
    ctx.fillRect(-14, -4, 28, 8);
    ctx.strokeStyle = "#ffffff"; ctx.lineWidth = 1;
    ctx.strokeRect(-14, -4, 28, 8);
    ctx.restore();

    // 3. Stand & Electrode Holder (Left Stand)
    ctx.fillStyle = "#64748b";
    ctx.fillRect(45, 40, 10, 260);
    ctx.beginPath(); ctx.arc(50, 290, 16, 0, Math.PI * 2); ctx.fill(); // base
    // Cross Arm holding electrodes
    ctx.fillRect(40, 60, 330, 8);
    ctx.fillStyle = "#38bdf8";
    ctx.fillRect(205, 54, 10, 20); // Clamp 1
    ctx.fillRect(305, 54, 10, 20); // Clamp 2

    // 4. Electrodes in Solution
    // ANODE (+) (Orange plate on left)
    ctx.fillStyle = "#fb923c";
    ctx.fillRect(195, 125, 30, 75);
    ctx.strokeStyle = "#ea580c"; ctx.lineWidth = 1.5;
    ctx.strokeRect(195, 125, 30, 75);
    ctx.fillStyle = "#000000"; ctx.font = "bold 10px sans-serif"; ctx.textAlign = "center";
    ctx.fillText("Anode (+)", 210, 165);

    // CATHODE (-) (Substrate plate on right)
    // Film thickness growth calculation by Faraday's law approximation
    const currentDensityMa = electroVoltage * 8.5; // mA/cm2
    const growthRateNmPerSec = (currentDensityMa * 0.15); // nm/sec
    const filmThicknessNm = (electroElapsed * growthRateNmPerSec).toFixed(1);

    ctx.fillStyle = "#e2e8f0"; // Metal/glass base substrate
    ctx.fillRect(295, 125, 30, 75);
    ctx.strokeStyle = "#94a3b8"; ctx.lineWidth = 1.5;
    ctx.strokeRect(295, 125, 30, 75);

    // Electrodeposited Film Layer on Cathode surfaces
    if (parseFloat(filmThicknessNm) > 0) {
        const filmAlpha = Math.min(0.95, 0.2 + parseFloat(filmThicknessNm) / 100);
        ctx.fillStyle = `rgba(16, 185, 129, ${filmAlpha})`;
        ctx.fillRect(291, 125, 4, 75); // Left face towards anode
        ctx.fillRect(325, 125, 4, 75); // Right face
    }
    ctx.fillStyle = "#000000"; ctx.font = "bold 10px sans-serif"; ctx.textAlign = "center";
    ctx.fillText("Cathode (-)", 310, 165);

    // 5. Potentiostat / Electrochemical Analyzer (Top Right Box)
    const potX = 430; const potY = 15; const potW = 175; const potH = 100;
    ctx.fillStyle = "#1e293b"; ctx.fillRect(potX, potY, potW, potH);
    ctx.strokeStyle = "#38bdf8"; ctx.lineWidth = 2; ctx.strokeRect(potX, potY, potW, potH);
    ctx.fillStyle = "#ffffff"; ctx.font = "bold 11px sans-serif"; ctx.textAlign = "left";
    ctx.fillText("Potentiostat Analyzer", potX + 12, potY + 20);

    // Output Terminals (+) Red and (-) Black
    ctx.fillStyle = "#ef4444"; ctx.beginPath(); ctx.arc(potX + 30, potY + 45, 9, 0, Math.PI * 2); ctx.fill(); // (+) Red
    ctx.fillStyle = "#ffffff"; ctx.font = "bold 10px sans-serif"; ctx.textAlign = "center"; ctx.fillText("+", potX + 30, potY + 48);

    ctx.fillStyle = "#334155"; ctx.beginPath(); ctx.arc(potX + 30, potY + 75, 9, 0, Math.PI * 2); ctx.fill(); // (-) Black
    ctx.fillStyle = "#ffffff"; ctx.font = "bold 10px sans-serif"; ctx.textAlign = "center"; ctx.fillText("-", potX + 30, potY + 78);

    // Potentiostat Screen Display
    ctx.fillStyle = "#0f172a"; ctx.fillRect(potX + 60, potY + 35, 100, 50);
    ctx.fillStyle = "#a3e635"; ctx.font = "bold 10px monospace"; ctx.textAlign = "left";
    ctx.fillText(`U = ${electroVoltage.toFixed(1)}V`, potX + 68, potY + 52);
    ctx.fillText(`J = ${currentDensityMa.toFixed(1)}mA`, potX + 68, potY + 70);

    // Wires from Potentiostat to Electrodes
    // Red wire from (+) terminal to Anode (210, 125)
    ctx.strokeStyle = "#ef4444"; ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(potX + 30, potY + 45);
    ctx.lineTo(210, potY + 45);
    ctx.lineTo(210, 125);
    ctx.stroke();

    // Dark wire from (-) terminal to Cathode (310, 125)
    ctx.strokeStyle = "#94a3b8"; ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(potX + 30, potY + 75);
    ctx.lineTo(310, potY + 75);
    ctx.lineTo(310, 125);
    ctx.stroke();

    // 6. PC Interface Monitor (Middle Right Box)
    const pcX = 430; const pcY = 145; const pcW = 175; const pcH = 110;
    ctx.fillStyle = "#0f172a"; ctx.fillRect(pcX, pcY, pcW, pcH);
    ctx.strokeStyle = "#cbd5e1"; ctx.lineWidth = 2.5; ctx.strokeRect(pcX, pcY, pcW, pcH);
    // Monitor Stand
    ctx.fillStyle = "#64748b"; ctx.fillRect(pcX + 70, pcY + pcH, 35, 15); ctx.fillRect(pcX + 50, pcY + pcH + 15, 75, 6);

    // PC Monitor content
    ctx.fillStyle = "#38bdf8"; ctx.font = "bold 11px sans-serif"; ctx.textAlign = "center";
    ctx.fillText("PC Interface (Live)", pcX + pcW / 2, pcY + 22);

    ctx.fillStyle = "#cbd5e1"; ctx.font = "10px sans-serif"; ctx.textAlign = "left";
    ctx.fillText(`Densité : ${currentDensityMa.toFixed(1)} mA/cm²`, pcX + 12, pcY + 46);
    ctx.fillText(`Temps t : ${electroElapsed.toFixed(1)} s`, pcX + 12, pcY + 66);
    ctx.fillStyle = "#10b981"; ctx.font = "bold 11px sans-serif";
    ctx.fillText(`Épaisseur : ${filmThicknessNm} nm`, pcX + 12, pcY + 90);

    // Communication dashed line between Potentiostat & PC
    ctx.strokeStyle = "rgba(255, 255, 255, 0.4)"; ctx.lineWidth = 1.5; ctx.setLineDash([4, 4]);
    ctx.beginPath(); ctx.moveTo(potX + potW, potY + 50); ctx.lineTo(pcX + pcW + 8, potY + 50); ctx.lineTo(pcX + pcW + 8, pcY + 50); ctx.lineTo(pcX + pcW, pcY + 50); ctx.stroke();
    ctx.setLineDash([]);

    // 7. Animated Ion Migration (Cations M+ moving to Cathode) when playing
    if (electroIsPlaying) {
        ctx.fillStyle = "#a3e635";
        for (let i = 0; i < 7; i++) {
            const ionProgress = ((electroAnimFrame * 2 + i * 25) % 100) / 100.0;
            const ix = 225 + ionProgress * (290 - 225);
            const iy = 135 + (i * 9);
            ctx.beginPath(); ctx.arc(ix, iy, 3, 0, Math.PI * 2); ctx.fill();
            // ion text
            ctx.fillStyle = "#ffffff"; ctx.font = "7px sans-serif";
            ctx.fillText("+", ix + 4, iy + 2);
            ctx.fillStyle = "#a3e635";
        }
    }

    // Update thickness badge UI
    const badge = document.getElementById("electro-thickness-badge");
    if (badge) {
        badge.textContent = `Épaisseur : ${filmThicknessNm} nm`;
    }
}

// --- SILAR (SUCCESSIVE IONIC LAYER ADSORPTION AND REACTION) ANIMATION ENGINE ---
let silarStep = 1;
let silarCycle = 1;
let silarMaxCycles = 20;
let silarDipTime = 15;
let silarIsPlaying = false;
let silarTimer = null;
let silarCanvasAnimId = null;
let silarAnimFrame = 0;
let silarSubstrateX = 100;
let silarSubstrateY = 60;

function renderSilarCustomPage() {
    return `
    <div class="silar-workspace" style="display: flex; flex-direction: column; gap: 24px; text-align: left;">
        
        <!-- Top Banner: SILAR Overview -->
        <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 14px; padding: 20px; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 16px;">
            <div>
                <span class="badge badge-accent" style="font-size: 0.78rem; margin-bottom: 6px;"><i data-lucide="layers"></i> Protocol Expérimental Officiel LMER</span>
                <h3 style="margin: 4px 0; font-size: 1.3rem; color: #ffffff;">SILAR (Successive Ionic Layer Adsorption and Reaction)</h3>
                <p style="margin: 0; color: #94a3b8; font-size: 0.88rem;">Dépôt de couches atomiques par cycles d'adsorption cationique, rinçage, réaction anionique et rinçage.</p>
            </div>
            <div style="display: flex; gap: 10px;">
                <button class="btn btn-primary" id="btn-start-silar-anim" onclick="toggleSilarPlay()" style="padding: 10px 20px; font-weight: 700;">
                    <i data-lucide="play-circle"></i> Lancer l'Animation du Cycle SILAR
                </button>
            </div>
        </div>

        <!-- Main Content Layout: Interactive Canvas Animation (Left) + Original LMER Schematic (Right) -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 24px;">
            
            <!-- Left Column: Interactive SILAR Setup & Step Animation Canvas -->
            <div style="background: rgba(10, 15, 30, 0.9); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 14px; padding: 20px; display: flex; flex-direction: column; gap: 16px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h4 style="margin: 0; color: #38bdf8; font-size: 1.05rem; font-weight: 700; display: flex; align-items: center; gap: 8px;">
                        <i data-lucide="activity"></i> Simulation du Cycle SILAR
                    </h4>
                    <span id="silar-step-badge" class="badge badge-outline" style="border-color: #38bdf8; color: #38bdf8; font-weight: 600;">Étape 1 : Adsorption Cationique</span>
                </div>

                <!-- Canvas Container -->
                <div style="position: relative; width: 100%; height: 340px; background: #070a14; border-radius: 12px; border: 1px solid rgba(56, 189, 248, 0.2); overflow: hidden; display: flex; align-items: center; justify-content: center;">
                    <canvas id="silar-canvas" width="620" height="340" style="width: 100%; height: 100%; object-fit: contain;"></canvas>
                </div>

                <!-- Animation Controls -->
                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; background: rgba(255, 255, 255, 0.03); padding: 12px; border-radius: 10px;">
                    <div style="display: flex; gap: 8px;">
                        <button class="btn btn-secondary" onclick="prevSilarStep()" style="padding: 6px 14px; font-size: 0.82rem;"><i data-lucide="skip-back"></i> Précédent</button>
                        <button class="btn btn-primary" id="silar-play-btn" onclick="toggleSilarPlay()" style="padding: 6px 16px; font-size: 0.82rem;"><i data-lucide="play"></i> Lecture</button>
                        <button class="btn btn-secondary" onclick="nextSilarStep()" style="padding: 6px 14px; font-size: 0.82rem;">Suivant <i data-lucide="skip-forward"></i></button>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 0.8rem; color: #94a3b8;">Cycles SILAR :</span>
                        <span id="silar-cycle-counter" style="color: #facc15; font-weight: 800; font-size: 0.95rem;">1 / 20</span>
                    </div>
                </div>

                <!-- Step Description Box -->
                <div id="silar-step-info" style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid #38bdf8; padding: 12px 16px; border-radius: 6px;">
                    <h5 id="silar-step-title" style="margin: 0 0 4px 0; color: #ffffff; font-size: 0.92rem; font-weight: 700;">1. Adsorption Cationique (Cationic Solution)</h5>
                    <p id="silar-step-desc" style="margin: 0; color: #cbd5e1; font-size: 0.82rem; line-height: 1.4;">Immersion du substrat en verre dans le bêcher de solution cationique. Les cations (◯) s'adsorbent à la surface du substrat.</p>
                </div>
            </div>

            <!-- Right Column: Original Experimental Setup Schematic (58.png) -->
            <div style="background: rgba(10, 15, 30, 0.9); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 14px; padding: 20px; display: flex; flex-direction: column; gap: 14px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h4 style="margin: 0; color: #10b981; font-size: 1.05rem; font-weight: 700; display: flex; align-items: center; gap: 8px;">
                        <i data-lucide="image"></i> Schéma Général du Cycle SILAR
                    </h4>
                    <a href="assets/images/silar_scheme.png" target="_blank" class="badge badge-outline" style="border-color: rgba(255,255,255,0.2); color: #cbd5e1; text-decoration: none;">
                        <i data-lucide="external-link"></i> Voir Plein Écran
                    </a>
                </div>

                <!-- Image Container -->
                <div style="border-radius: 10px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.12); background: #ffffff; padding: 6px;">
                    <img src="assets/images/silar_scheme.png" alt="Procédé expérimental SILAR Cycle" style="width: 100%; height: auto; display: block; border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
                </div>

                <!-- Protocol Specifications Card -->
                <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; padding: 14px; font-size: 0.82rem; color: #cbd5e1;">
                    <h5 style="margin: 0 0 8px 0; color: #ffffff; font-weight: 700; font-size: 0.88rem;">📋 Les 4 Étapes du Cycle SILAR :</h5>
                    <ul style="margin: 0; padding-left: 18px; display: flex; flex-direction: column; gap: 6px; line-height: 1.4;">
                        <li><strong>Étape 1 - Adsorption :</strong> Immersion dans la solution cationique (Cations ◯).</li>
                        <li><strong>Étape 2 - Rinçage :</strong> Rinçage à l'eau distillée pour éliminer l'excès de cations.</li>
                        <li><strong>Étape 3 - Réaction :</strong> Immersion dans la solution anionique (Anions ●).</li>
                        <li><strong>Étape 4 - Rinçage :</strong> Rinçage final à l'eau distillée pour évacuer les réactifs non fixés.</li>
                        <li><strong>Répétition :</strong> Le cycle complet est répété N fois pour former le film mince.</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
    `;
}

function initSilarAnimation() {
    silarStep = 1;
    silarCycle = 1;
    silarIsPlaying = false;
    updateSilarStepUI();
    startSilarCanvasLoop();
}

function toggleSilarPlay() {
    silarIsPlaying = !silarIsPlaying;
    const playBtn = document.getElementById("silar-play-btn");
    const topBtn = document.getElementById("btn-start-silar-anim");
    if (playBtn) {
        playBtn.innerHTML = silarIsPlaying ? `<i data-lucide="pause"></i> Pause` : `<i data-lucide="play"></i> Lecture`;
        if (window.lucide) window.lucide.createIcons();
    }
    if (topBtn) {
        topBtn.innerHTML = silarIsPlaying ? `<i data-lucide="pause-circle"></i> Pause` : `<i data-lucide="play-circle"></i> Lancer l'Animation du Cycle SILAR`;
        if (window.lucide) window.lucide.createIcons();
    }
    if (silarIsPlaying) {
        runSilarAutoPlay();
    } else if (silarTimer) {
        clearInterval(silarTimer);
    }
}

function runSilarAutoPlay() {
    if (silarTimer) clearInterval(silarTimer);
    silarTimer = setInterval(() => {
        if (!silarIsPlaying) return;
        silarStep++;
        if (silarStep > 4) {
            silarStep = 1;
            silarCycle++;
            if (silarCycle > silarMaxCycles) {
                silarCycle = silarMaxCycles;
                silarStep = 4;
                silarIsPlaying = false;
                toggleSilarPlay();
            }
        }
        updateSilarStepUI();
    }, 2800);
}

function nextSilarStep() {
    silarStep++;
    if (silarStep > 4) {
        silarStep = 1;
        silarCycle = (silarCycle % silarMaxCycles) + 1;
    }
    updateSilarStepUI();
}

function prevSilarStep() {
    silarStep--;
    if (silarStep < 1) silarStep = 4;
    updateSilarStepUI();
}

function updateSilarStepUI() {
    const badge = document.getElementById("silar-step-badge");
    const counter = document.getElementById("silar-cycle-counter");
    const title = document.getElementById("silar-step-title");
    const desc = document.getElementById("silar-step-desc");

    if (counter) counter.textContent = `${silarCycle} / ${silarMaxCycles}`;

    const stepInfo = [
        {
            badge: "Étape 1 : Adsorption Cationique",
            title: "1. Adsorption (Cationic Solution)",
            desc: "Immersion du substrat en verre dans la solution cationique. Les cations (◯) fixent une couche d'adsorption uniforme à la surface."
        },
        {
            badge: "Étape 2 : Premier Rinçage",
            title: "2. Rinçage (Distilled Water)",
            desc: "Immersion dans l'eau distillée pour éliminer les cations en excès et ne conserver que la monocouche adsorbée."
        },
        {
            badge: "Étape 3 : Réaction Anionique",
            title: "3. Réaction (Anionic Solution)",
            desc: "Immersion dans la solution anionique. Les anions (●) réagissent avec les cations (◯) adsorbés pour former une monocouche solide."
        },
        {
            badge: "Étape 4 : Rinçage Final",
            title: "4. Rinçage Final (Distilled Water)",
            desc: "Immersion dans l'eau distillée pour éliminer les sous-produits non réagis avant d'entamer le cycle suivant."
        }
    ];

    const current = stepInfo[silarStep - 1];
    if (badge) badge.textContent = current.badge;
    if (title) title.textContent = current.title;
    if (desc) desc.textContent = current.desc;
}

function startSilarCanvasLoop() {
    if (silarCanvasAnimId) cancelAnimationFrame(silarCanvasAnimId);
    function loop() {
        silarAnimFrame++;
        drawSilarCanvas();
        silarCanvasAnimId = requestAnimationFrame(loop);
    }
    loop();
}

function drawSilarCanvas() {
    const canvas = document.getElementById("silar-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);

    // Background Grid
    ctx.strokeStyle = "rgba(56, 189, 248, 0.05)";
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 30) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
    }
    for (let y = 0; y < h; y += 30) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
    }

    // Positions of 4 Beakers
    const beakerW = 90;
    const beakerH = 110;
    const beakerY = 190;
    const beakerXs = [60, 200, 340, 480];

    const beakerColors = [
        "rgba(132, 204, 22, 0.45)", // 1. Cationic Solution (Green)
        "rgba(56, 189, 248, 0.25)", // 2. Distilled Water (Light Blue)
        "rgba(245, 158, 11, 0.45)", // 3. Anionic Solution (Yellow)
        "rgba(56, 189, 248, 0.25)"  // 4. Distilled Water (Light Blue)
    ];

    const beakerLabels = [
        "Cationic Sol.",
        "Distilled Water",
        "Anionic Sol.",
        "Distilled Water"
    ];

    // Draw 4 Beakers
    for (let i = 0; i < 4; i++) {
        const bx = beakerXs[i];
        
        // Highlight active beaker for current step
        if (silarStep === (i + 1)) {
            ctx.fillStyle = "rgba(56, 189, 248, 0.12)";
            ctx.fillRect(bx - 12, beakerY - 30, beakerW + 24, beakerH + 40);
            ctx.strokeStyle = "#38bdf8"; ctx.lineWidth = 1.5;
            ctx.strokeRect(bx - 12, beakerY - 30, beakerW + 24, beakerH + 40);
        }

        // Liquid inside beaker
        ctx.fillStyle = beakerColors[i];
        ctx.fillRect(bx, beakerY + 20, beakerW, beakerH - 20);

        // Glass Outline
        ctx.strokeStyle = "rgba(255, 255, 255, 0.8)"; ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.moveTo(bx, beakerY); ctx.lineTo(bx, beakerY + beakerH); ctx.lineTo(bx + beakerW, beakerY + beakerH); ctx.lineTo(bx + beakerW, beakerY); ctx.stroke();

        // Label
        ctx.fillStyle = "#ffffff"; ctx.font = "bold 10px sans-serif"; ctx.textAlign = "center";
        ctx.fillText(beakerLabels[i], bx + beakerW / 2, beakerY + beakerH + 16);
    }

    // Calculate Target Substrate position based on current silarStep
    const targetX = beakerXs[silarStep - 1] + beakerW / 2;
    const isDipped = silarIsPlaying || (silarAnimFrame % 60 > 20);
    const targetY = isDipped ? (beakerY + 30) : 70;

    // Smooth movement towards target position
    silarSubstrateX += (targetX - silarSubstrateX) * 0.12;
    silarSubstrateY += (targetY - silarSubstrateY) * 0.12;

    // Robot Arm Holding Substrate
    ctx.strokeStyle = "#64748b"; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(silarSubstrateX, 0); ctx.lineTo(silarSubstrateX, silarSubstrateY - 20); ctx.stroke();
    // Clamp
    ctx.fillStyle = "#38bdf8"; ctx.fillRect(silarSubstrateX - 16, silarSubstrateY - 20, 32, 8);

    // Glass Substrate Plate
    const subW = 28;
    const subH = 65;
    const subX = silarSubstrateX - subW / 2;
    const subY = silarSubstrateY;

    ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
    ctx.fillRect(subX, subY, subW, subH);
    ctx.strokeStyle = "#ffffff"; ctx.lineWidth = 1.5;
    ctx.strokeRect(subX, subY, subW, subH);

    // Accumulated SILAR Thin Film Layer (Cations ◯ and Anions ●) on substrate
    const numIons = Math.min(18, silarCycle * 2);
    for (let ion = 0; ion < numIons; ion++) {
        const ix = subX + 6 + (ion % 3) * 8;
        const iy = subY + 10 + Math.floor(ion / 3) * 9;

        // Cation (White circle)
        ctx.fillStyle = "#ffffff"; ctx.beginPath(); ctx.arc(ix, iy, 2.5, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = "#0f172a"; ctx.lineWidth = 0.8; ctx.stroke();

        // Anion (Black circle next to it if step >= 3)
        if (silarStep >= 3 || ion < (numIons - 2)) {
            ctx.fillStyle = "#0f172a"; ctx.beginPath(); ctx.arc(ix + 3, iy, 2.5, 0, Math.PI * 2); ctx.fill();
        }
    }

    // Substrate Label
    ctx.fillStyle = "#ffffff"; ctx.font = "bold 9px sans-serif"; ctx.textAlign = "center";
    ctx.fillText("Glass Substrate", silarSubstrateX, subY + subH / 2);
}

// --- XRD (X-RAY DIFFRACTION) ANALYSIS ENGINE ---
let xrd2Theta = 36.20;
let xrdFWHMDeg = 0.40;
let xrdWavelength = 0.15406;
let xrdK = 0.9;
let xrdCanvasAnimId = null;
let xrdAnimFrame = 0;

function renderXRDCustomPage() {
    return `
    <div class="xrd-workspace" style="display: flex; flex-direction: column; gap: 24px; text-align: left;">
        
        <!-- Top Banner: XRD Overview -->
        <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 14px; padding: 20px; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 16px;">
            <div>
                <span class="badge badge-accent" style="font-size: 0.78rem; margin-bottom: 6px;"><i data-lucide="box"></i> Guide & Calculateur d'Analyse Cristallographique</span>
                <h3 style="margin: 4px 0; font-size: 1.3rem; color: #ffffff;">XRD (X-Ray Diffraction) — Analyse de Pics & Taille des Cristallites</h3>
                <p style="margin: 0; color: #94a3b8; font-size: 0.88rem;">Diffraction des Rayons X : Loi de Bragg (n&lambda; = 2d sin&theta;), Équation de Scherrer et Analyse de Microdéformation.</p>
            </div>
            <div style="display: flex; gap: 10px;">
                <button class="btn btn-primary" id="btn-start-xrd-calc" onclick="scrollToXRDCalc()" style="padding: 10px 20px; font-weight: 700;">
                    <i data-lucide="calculator"></i> Calculateur de Taille de Cristallite
                </button>
            </div>
        </div>

        <!-- Main Content Layout: Interactive Canvas Diffractogram + Scherrer Calculator (Left) + 3 Infographics & Guides (Right) -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 24px;">
            
            <!-- Left Column: Interactive XRD Pattern Simulation & Scherrer Calculator -->
            <div style="background: rgba(10, 15, 30, 0.9); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 14px; padding: 20px; display: flex; flex-direction: column; gap: 16px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h4 style="margin: 0; color: #10b981; font-size: 1.05rem; font-weight: 700; display: flex; align-items: center; gap: 8px;">
                        <i data-lucide="activity"></i> Diffractogramme XRD & Calculateur Scherrer
                    </h4>
                    <span id="xrd-result-badge" class="badge badge-outline" style="border-color: #10b981; color: #10b981; font-weight: 700;">Taille D : 19.6 nm</span>
                </div>

                <!-- Canvas Diffractogram Container -->
                <div style="position: relative; width: 100%; height: 320px; background: #070a14; border-radius: 12px; border: 1px solid rgba(16, 185, 129, 0.2); overflow: hidden; display: flex; align-items: center; justify-content: center;">
                    <canvas id="xrd-canvas" width="620" height="320" style="width: 100%; height: 100%; object-fit: contain;"></canvas>
                </div>

                <!-- Interactive Calculation Controls -->
                <div id="xrd-controls-panel" style="display: flex; flex-direction: column; gap: 12px; background: rgba(255, 255, 255, 0.03); padding: 14px; border-radius: 10px;">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 10px;">
                        <div>
                            <label style="font-size: 0.78rem; color: #94a3b8; display: block; margin-bottom: 4px;">Position du Pic (2&theta;) : <strong id="xrd-2theta-val" style="color: #38bdf8;">36.20°</strong></label>
                            <input type="range" id="xrd-2theta-slider" min="15.0" max="75.0" step="0.1" value="36.2" oninput="onXRDParamChange()" style="width: 100%;">
                        </div>
                        <div>
                            <label style="font-size: 0.78rem; color: #94a3b8; display: block; margin-bottom: 4px;">Largeur FWHM (&beta;) : <strong id="xrd-fwhm-val" style="color: #facc15;">0.40°</strong></label>
                            <input type="range" id="xrd-fwhm-slider" min="0.10" max="1.20" step="0.02" value="0.40" oninput="onXRDParamChange()" style="width: 100%;">
                        </div>
                        <div>
                            <label style="font-size: 0.78rem; color: #94a3b8; display: block; margin-bottom: 4px;">Longueur d'onde (&lambda;) :</label>
                            <select id="xrd-lambda-select" onchange="onXRDParamChange()" style="width: 100%; padding: 4px 8px; border-radius: 6px; background: #0f172a; color: #fff; border: 1px solid rgba(255,255,255,0.2); font-size: 0.8rem;">
                                <option value="0.15406" selected>Cu K&alpha; (0.15406 nm)</option>
                                <option value="0.17890">Co K&alpha; (0.17890 nm)</option>
                                <option value="0.07093">Mo K&alpha; (0.07093 nm)</option>
                            </select>
                        </div>
                        <div>
                            <label style="font-size: 0.78rem; color: #94a3b8; display: block; margin-bottom: 4px;">Facteur de forme (K) : <strong id="xrd-k-val" style="color: #a3e635;">0.90</strong></label>
                            <input type="range" id="xrd-k-slider" min="0.80" max="1.00" step="0.05" value="0.90" oninput="onXRDParamChange()" style="width: 100%;">
                        </div>
                    </div>
                </div>

                <!-- Mathematical Conversion & Result Breakdown -->
                <div style="background: rgba(16, 185, 129, 0.08); border-left: 4px solid #10b981; padding: 14px; border-radius: 6px; font-size: 0.83rem; color: #cbd5e1; display: flex; flex-direction: column; gap: 6px;">
                    <h5 style="margin: 0; color: #ffffff; font-weight: 700; font-size: 0.9rem;">📐 Détail des Calculs Cristallographiques :</h5>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 8px; margin-top: 4px;">
                        <div style="background: rgba(0,0,0,0.3); padding: 8px; border-radius: 6px;">
                            <span style="color: #94a3b8; font-size: 0.75rem;">Angle Bragg &theta; :</span><br>
                            <strong id="xrd-calc-theta" style="color: #38bdf8; font-size: 0.95rem;">18.10°</strong>
                        </div>
                        <div style="background: rgba(0,0,0,0.3); padding: 8px; border-radius: 6px;">
                            <span style="color: #94a3b8; font-size: 0.75rem;">FWHM en Radians &beta; :</span><br>
                            <strong id="xrd-calc-beta-rad" style="color: #facc15; font-size: 0.95rem;">0.00698 rad</strong>
                        </div>
                        <div style="background: rgba(0,0,0,0.3); padding: 8px; border-radius: 6px;">
                            <span style="color: #94a3b8; font-size: 0.75rem;">Distance réticulaire d :</span><br>
                            <strong id="xrd-calc-dspacing" style="color: #c084fc; font-size: 0.95rem;">2.479 Å</strong>
                        </div>
                        <div style="background: rgba(0,0,0,0.3); padding: 8px; border-radius: 6px;">
                            <span style="color: #94a3b8; font-size: 0.75rem;">Microdéformation &epsilon; :</span><br>
                            <strong id="xrd-calc-strain" style="color: #ef4444; font-size: 0.95rem;">1.66 &times; 10⁻³</strong>
                        </div>
                    </div>
                </div>

                <!-- 5 Steps Workflow Guidance -->
                <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; padding: 14px;">
                    <h5 style="margin: 0 0 8px 0; color: #ffffff; font-size: 0.88rem; font-weight: 700;">🔄 Démarche Méthodologique d'Analyse XRD (5 Étapes) :</h5>
                    <ol style="margin: 0; padding-left: 18px; color: #94a3b8; font-size: 0.8rem; display: flex; flex-direction: column; gap: 4px;">
                        <li><strong>Collecter le diffractogramme :</strong> Acquisition I(2&theta;) avec un bon rapport signal/bruit.</li>
                        <li><strong>Sélectionner un pic isolé :</strong> Choisir un pic intense sans chevauchement.</li>
                        <li><strong>Mesurer la FWHM (&beta;) :</strong> Déterminer la largeur à mi-hauteur en degrés.</li>
                        <li><strong>Convertir en radians :</strong> &beta;(rad) = &beta;(°) &times; &pi; / 180.</li>
                        <li><strong>Appliquer l'équation de Scherrer :</strong> D = K &lambda; / (&beta; cos&theta;) pour extraire la taille D en nm.</li>
                    </ol>
                </div>
            </div>

            <!-- Right Column: 3 Infographics & Educational Visual Guides -->
            <div style="background: rgba(10, 15, 30, 0.9); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 14px; padding: 20px; display: flex; flex-direction: column; gap: 20px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h4 style="margin: 0; color: #10b981; font-size: 1.05rem; font-weight: 700; display: flex; align-items: center; gap: 8px;">
                        <i data-lucide="book-open"></i> Guides Infographiques de Référence XRD (3)
                    </h4>
                </div>

                <!-- Infographic 1 Card -->
                <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 14px; display: flex; flex-direction: column; gap: 10px;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span class="badge badge-accent" style="font-size: 0.72rem;">Guide 1 : Analyse des Pics XRD</span>
                        <a href="assets/images/xrd_peak_analysis_infographic.jpg" target="_blank" class="btn-open-subpage" style="font-size: 0.78rem;">
                            Plein Écran <i data-lucide="external-link"></i>
                        </a>
                    </div>
                    <div style="border-radius: 8px; overflow: hidden; background: #ffffff; padding: 4px;">
                        <img src="assets/images/xrd_peak_analysis_infographic.jpg" alt="XRD Peak Analysis Infographic" style="width: 100%; height: auto; display: block; border-radius: 4px;">
                    </div>
                    <p style="margin: 0; color: #cbd5e1; font-size: 0.8rem; line-height: 1.4;">
                        <strong>Les 5 Pilliers des Pics XRD :</strong> Position (2&theta;, déplacement de réseau/déformation), Intensité (cristallinité, orientation préférentielle), Largeur FWHM (taille de cristallite), Identification de phase (ICDD/COD) et Pics parasites (impuretés).
                    </p>
                </div>

                <!-- Infographic 2 Card -->
                <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 14px; display: flex; flex-direction: column; gap: 10px;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span class="badge badge-accent" style="font-size: 0.72rem;">Guide 2 : Fonctionnement & Équations Clefs</span>
                        <a href="assets/images/xrd_graph_analysis_guide.jpg" target="_blank" class="btn-open-subpage" style="font-size: 0.78rem;">
                            Plein Écran <i data-lucide="external-link"></i>
                        </a>
                    </div>
                    <div style="border-radius: 8px; overflow: hidden; background: #ffffff; padding: 4px;">
                        <img src="assets/images/xrd_graph_analysis_guide.jpg" alt="XRD Graph Analysis & How XRD Works Guide" style="width: 100%; height: auto; display: block; border-radius: 4px;">
                    </div>
                    <p style="margin: 0; color: #cbd5e1; font-size: 0.8rem; line-height: 1.4;">
                        <strong>Principe Physique & Équations :</strong> Génération de rayons X (Cu K&alpha;), diffraction Bragg (n&lambda; = 2d sin&theta;), détection 2&theta;, Scherrer (D = K&lambda; / (&beta; cos&theta;)) et calcul de microdéformation (&epsilon; = &beta; cos&theta; / 4).
                    </p>
                </div>

                <!-- Infographic 3 Card -->
                <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 14px; display: flex; flex-direction: column; gap: 10px;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span class="badge badge-accent" style="font-size: 0.72rem;">Guide 3 : Mesure de Taille de Cristallite (Scherrer)</span>
                        <a href="assets/images/xrd_crystallite_size_scherrer.jpg" target="_blank" class="btn-open-subpage" style="font-size: 0.78rem;">
                            Plein Écran <i data-lucide="external-link"></i>
                        </a>
                    </div>
                    <div style="border-radius: 8px; overflow: hidden; background: #ffffff; padding: 4px;">
                        <img src="assets/images/xrd_crystallite_size_scherrer.jpg" alt="How to Measure Crystallite Size Using XRD Scherrer" style="width: 100%; height: auto; display: block; border-radius: 4px;">
                    </div>
                    <p style="margin: 0; color: #cbd5e1; font-size: 0.8rem; line-height: 1.4;">
                        <strong>Distinction Particule vs Cristallite :</strong> La taille de particule (observée au MEB/TEM) est un agrégat de plusieurs domaines cohérents. La taille de cristallite (XRD) mesure le domaine individuel de diffraction cohérente.
                    </p>
                </div>

                <!-- Infographic 4 Card (MiniFlex600 Guide) -->
                <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 14px; display: flex; flex-direction: column; gap: 10px;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span class="badge badge-accent" style="font-size: 0.72rem;">Guide 4 : Lecture de Diffractogramme & Rigaku MiniFlex600</span>
                        <a href="assets/images/xrd_reading_guide_miniflex.jpg" target="_blank" class="btn-open-subpage" style="font-size: 0.78rem;">
                            Plein Écran <i data-lucide="external-link"></i>
                        </a>
                    </div>
                    <div style="border-radius: 8px; overflow: hidden; background: #ffffff; padding: 4px;">
                        <img src="assets/images/xrd_reading_guide_miniflex.jpg" alt="How to Read an XRD Pattern Rigaku MiniFlex600" style="width: 100%; height: auto; display: block; border-radius: 4px;">
                    </div>
                    <p style="margin: 0; color: #cbd5e1; font-size: 0.8rem; line-height: 1.4;">
                        <strong>Guide Expérimental & Identification de Phase (7 Étapes) :</strong> Analyse des données de diffraction brutes en informations matérielles utiles (Matching de phases ICDD/PDF, étude du bruit de fond, orientation préférentielle et de la déformation de réseau).
                    </p>
                </div>

            </div>

        </div>
    </div>
    `;
}

function initXRDAnimation() {
    onXRDParamChange();
    startXRDCanvasLoop();
}

function scrollToXRDCalc() {
    const panel = document.getElementById("xrd-controls-panel");
    if (panel) panel.scrollIntoView({ behavior: "smooth", block: "center" });
}

function onXRDParamChange() {
    const slider2T = document.getElementById("xrd-2theta-slider");
    const sliderFWHM = document.getElementById("xrd-fwhm-slider");
    const selectLambda = document.getElementById("xrd-lambda-select");
    const sliderK = document.getElementById("xrd-k-slider");

    if (slider2T) xrd2Theta = parseFloat(slider2T.value);
    if (sliderFWHM) xrdFWHMDeg = parseFloat(sliderFWHM.value);
    if (selectLambda) xrdWavelength = parseFloat(selectLambda.value);
    if (sliderK) xrdK = parseFloat(sliderK.value);

    const val2T = document.getElementById("xrd-2theta-val");
    const valFWHM = document.getElementById("xrd-fwhm-val");
    const valK = document.getElementById("xrd-k-val");

    if (val2T) val2T.textContent = `${xrd2Theta.toFixed(2)}°`;
    if (valFWHM) valFWHM.textContent = `${xrdFWHMDeg.toFixed(2)}°`;
    if (valK) valK.textContent = `${xrdK.toFixed(2)}`;

    // Mathematical Calculations
    const thetaDeg = xrd2Theta / 2.0;
    const thetaRad = (thetaDeg * Math.PI) / 180.0;
    const betaRad = (xrdFWHMDeg * Math.PI) / 180.0;

    // Scherrer Equation: D = (K * lambda) / (beta * cos(theta))
    const D_nm = (xrdK * xrdWavelength) / (betaRad * Math.cos(thetaRad));
    
    // Bragg d-spacing: d = lambda / (2 * sin(theta)) in Angstroms (1 nm = 10 A)
    const d_angstrom = (xrdWavelength * 10.0) / (2.0 * Math.sin(thetaRad));

    // Microstrain: epsilon = (beta * cos(theta)) / 4
    const strain = (betaRad * Math.cos(thetaRad)) / 4.0;

    // UI Updates
    const resBadge = document.getElementById("xrd-result-badge");
    if (resBadge) resBadge.textContent = `Taille D : ${D_nm.toFixed(1)} nm`;

    const txtTheta = document.getElementById("xrd-calc-theta");
    const txtBetaRad = document.getElementById("xrd-calc-beta-rad");
    const txtDspacing = document.getElementById("xrd-calc-dspacing");
    const txtStrain = document.getElementById("xrd-calc-strain");

    if (txtTheta) txtTheta.textContent = `${thetaDeg.toFixed(2)}°`;
    if (txtBetaRad) txtBetaRad.textContent = `${betaRad.toFixed(5)} rad`;
    if (txtDspacing) txtDspacing.textContent = `${d_angstrom.toFixed(3)} Å`;
    if (txtStrain) txtStrain.textContent = `${(strain * 1000).toFixed(2)} × 10⁻³`;
}

function startXRDCanvasLoop() {
    if (xrdCanvasAnimId) cancelAnimationFrame(xrdCanvasAnimId);
    function loop() {
        xrdAnimFrame++;
        drawXRDCanvas();
        xrdCanvasAnimId = requestAnimationFrame(loop);
    }
    loop();
}

function drawXRDCanvas() {
    const canvas = document.getElementById("xrd-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);

    // Background Grid
    ctx.strokeStyle = "rgba(56, 189, 248, 0.05)";
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 30) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
    }
    for (let y = 0; y < h; y += 30) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
    }

    // Axes
    const marginL = 55;
    const marginB = 40;
    const marginR = 20;
    const marginT = 30;
    const plotW = w - marginL - marginR;
    const plotH = h - marginT - marginB;

    // Draw Axes Box
    ctx.strokeStyle = "rgba(255, 255, 255, 0.3)"; ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(marginL, marginT);
    ctx.lineTo(marginL, h - marginB);
    ctx.lineTo(w - marginR, h - marginB);
    ctx.stroke();

    // Axis Labels
    ctx.fillStyle = "#94a3b8"; ctx.font = "11px 'Outfit', sans-serif"; ctx.textAlign = "center";
    ctx.fillText("2θ (degrés)", marginL + plotW / 2, h - 10);

    ctx.save();
    ctx.translate(18, marginT + plotH / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText("Intensité Diffractée I (u.a.)", 0, 0);
    ctx.restore();

    // 2Theta Scale ticks from 10° to 80°
    ctx.font = "9px sans-serif";
    for (let deg = 10; deg <= 80; deg += 10) {
        const xPos = marginL + ((deg - 10) / 70.0) * plotW;
        ctx.strokeStyle = "rgba(255,255,255,0.15)";
        ctx.beginPath(); ctx.moveTo(xPos, h - marginB); ctx.lineTo(xPos, h - marginB + 4); ctx.stroke();
        ctx.fillStyle = "#cbd5e1"; ctx.fillText(`${deg}°`, xPos, h - marginB + 16);
    }

    // Reference Peaks Array (Standard XRD pattern background peaks)
    const refPeaks = [
        { angle: 21.5, height: 0.35, hkl: "(101)" },
        { angle: 30.2, height: 0.90, hkl: "(110)" },
        { angle: 39.5, height: 0.50, hkl: "(200)" },
        { angle: 52.8, height: 0.42, hkl: "(211)" },
        { angle: 63.4, height: 0.38, hkl: "(220)" },
        { angle: 74.6, height: 0.28, hkl: "(301)" }
    ];

    // Plot XRD Intensity Curve
    ctx.strokeStyle = "#38bdf8"; ctx.lineWidth = 2;
    ctx.beginPath();

    const currentFWHM = xrdFWHMDeg;

    for (let px = 0; px <= plotW; px += 2) {
        const deg = 10.0 + (px / plotW) * 70.0;
        let intensity = 0.04;

        // Sum Gaussian peaks
        const distSel = deg - xrd2Theta;
        const sigmaSel = currentFWHM / 2.355;
        const selPeakInt = 0.92 * Math.exp(-(distSel * distSel) / (2 * sigmaSel * sigmaSel));
        intensity += selPeakInt;

        for (let p of refPeaks) {
            if (Math.abs(p.angle - xrd2Theta) > 1.5) {
                const dist = deg - p.angle;
                const sigma = 0.35 / 2.355;
                intensity += p.height * Math.exp(-(dist * dist) / (2 * sigma * sigma));
            }
        }

        const yPos = (h - marginB) - intensity * (plotH - 20);
        if (px === 0) ctx.moveTo(marginL + px, yPos);
        else ctx.lineTo(marginL + px, yPos);
    }
    ctx.stroke();

    // Highlight Selected Peak & Draw FWHM lines
    const selX = marginL + ((xrd2Theta - 10.0) / 70.0) * plotW;
    const selPeakHeightVal = 0.92;
    const selPeakTopY = (h - marginB) - selPeakHeightVal * (plotH - 20);
    const halfMaxY = (h - marginB) - (selPeakHeightVal / 2.0) * (plotH - 20);

    // Dotted vertical center line
    ctx.strokeStyle = "rgba(250, 204, 21, 0.7)"; ctx.lineWidth = 1.5; ctx.setLineDash([4, 4]);
    ctx.beginPath(); ctx.moveTo(selX, h - marginB); ctx.lineTo(selX, selPeakTopY - 15); ctx.stroke();
    ctx.setLineDash([]);

    // FWHM horizontal width arrow line
    const fwhmPx = (currentFWHM / 70.0) * plotW;
    ctx.strokeStyle = "#f59e0b"; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(selX - fwhmPx / 2, halfMaxY);
    ctx.lineTo(selX + fwhmPx / 2, halfMaxY);
    ctx.stroke();

    // FWHM arrows & text
    ctx.fillStyle = "#facc15"; ctx.font = "bold 10px sans-serif"; ctx.textAlign = "center";
    ctx.fillText(`FWHM β = ${currentFWHM.toFixed(2)}°`, selX, halfMaxY - 6);
    ctx.fillText(`2θ = ${xrd2Theta.toFixed(2)}°`, selX, selPeakTopY - 20);

    // Calculate Crystallite size D for annotation
    const thetaRad = (xrd2Theta / 2.0 * Math.PI) / 180.0;
    const betaRad = (currentFWHM * Math.PI) / 180.0;
    const D_nm = (xrdK * xrdWavelength) / (betaRad * Math.cos(thetaRad));

    ctx.fillStyle = "#10b981"; ctx.font = "bold 11px 'Outfit', sans-serif";
    ctx.fillText(`D = ${D_nm.toFixed(1)} nm`, selX, halfMaxY + 16);
}








