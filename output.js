module.exports = {
	template: `<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>{{{styles}}}</style>
    <title>{{basics.name}}'s Resume</title>
  </head>
  <body class="bg-cloud-dancer py-20 selection:bg-black selection:text-neutral-200 xl:py-40">
    <div class="space-y-12 px-20 md:mx-auto md:w-2/3 md:px-0">
      {{! header section }}
      <header class="flex flex-col items-center py-8">
        <div class="flex flex-col items-center justify-center gap-5 py-5 md:flex-row">
          <img
            src={{basics.image}}
            alt="avatar"
            class="h-32 w-32 rounded-full object-cover object-center drop-shadow-md"
          />
          <div class="space-y-2">
            <h1 class="font-inter text-txt-main text-3xl font-bold md:text-5xl">{{basics.name}}</h1>
            <div class="flex items-center gap-2 text-sm text-txt-dark">
              <svg
                class="h-6 w-6 fill-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ><path
                  d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602"
                /></svg>
              {{basics.location.city}},
              {{basics.location.countryCode}}
            </div>
          </div>
        </div>
        <h2
          class="text-xl font-thin tracking-wide text-txt-dark md:text-2xl"
        >{{basics.label}}</h2>
      </header>
      {{! contact info section}}
      <div class="grid md:grid-cols-2">
        <div class="flex flex-col">
          <a
            class="pt-1 text-sky-700 hover:underline"
            href="mailto: {{basics.email}}"
          >{{basics.email}}</a>
          <a
            class="pt-1 text-sky-700 hover:underline"
            href={{basics.website}}
            target="_blank"
          >{{basics.website}}</a>
          <a class="pt-1 text-txt-light" href="tel: {{basics.phone}}">{{basics.phone}}</a>
        </div>
        <div>
          {{#each basics.profiles}}
            <div class="flex pt-1 md:justify-end">
              <span class="font-light lowercase text-mocka-mouse">{{network}}/</span>
              <a class="text-sky-700 hover:underline" href={{url}} target="_blank">{{username}}</a>
            </div>
          {{/each}}
        </div>
      </div>
      <div class="divide-y-2">
        {{! Summary }}
        <div class="space-y-3 py-5">
          <h2 class="font-inter text-txt-main text-3xl font-bold">Summary</h2>
          <p class="text-txt-dark">{{basics.summary}}</p>
        </div>

        {{! Work }}
        {{#if (notEmpty work)}}
          <div class="py-5">
            <h2 class="pb-3 font-inter text-txt-main. text-3xl font-bold">Work</h2>
            <ul class="list-disc space-y-4">
              {{#each work}}
                <li class="ml-6 py-2">
                  <div class="flex flex-col-reverse justify-between md:flex-row md:items-center">
                      <a
                        href={{url}}
                        target="_blank"
                        class="text-xl font-semibold hover:underline"
                      >{{name}}</a>
                    <div>
                      <span class="font-light text-neutral-600">{{startDate}}
                      </span>
                      {{#if endDate}}
                        <span class="font-light text-neutral-600">-
                          {{endDate}}
                        </span>
                      {{else}}
                        <span class="font-light text-neutral-600">
                          - present</span>
                      {{/if}}
                    </div>
                  </div>
                  <span class="text-lg font-thin text-mocka-mouse">{{position}}</span>
                  <ul class="pt-3">
                    {{#each highlights}}
                      <li class="text-txt-dark">- {{this}}</li>
                    {{/each}}
                  </ul>
                </li>
              {{/each}}
            </ul>
          </div>
        {{/if}}
        {{! Education }}
        {{#if (notEmpty education)}}
          <div class="space-y-3 py-5">
            <h2 class="font-inter text-txt-main text-3xl font-bold">Education</h2>
            <ul class="list-disc">
              {{#each education}}
                <li>
                  <div class="flex flex-col-reverse justify-between md:flex-row md:items-center">
                    <a
                      href={{url}}
                      target="_blank"
                      class="pb-1 text-xl font-semibold hover:underline"
                    >{{institution}}</a>
                    <div>
                      <span class="font-light text-neutral-600">{{startDate}}
                      </span>
                      {{#if endDate}}
                        <span class="font-light text-neutral-600">-
                          {{endDate}}
                        </span>
                      {{else}}
                        <span class="font-light text-neutral-600">
                          - present</span>
                      {{/if}}
                    </div>
                  </div>
                  <span class="text-lg font-thin text-mocka-mouse">{{studyType}}
                    {{#if area}}
                      in
                      {{area}}
                    {{/if}}
                  </span>
                  <div class="flex flex-wrap gap-1 py-1">
                    {{#each courses}}
                      <div
                        class="w-fit rounded-full text-txt-dark px-3 py-1 text-sm font-semibold text-neutral-200"
                      >
                        {{this}}
                      </div>
                    {{/each}}
                  </div>
                </li>
              {{/each}}
            </ul>
          </div>
        {{/if}}
                {{! Skills }}
        {{#if (notEmpty skills)}}
          <div class="space-y-3 py-5">
            <h2 class="font-inter text-txt-main text-3xl font-bold">Skills</h2>
            <div class="justify-items grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {{#each skills}}
                <div>
                  <h3 class="text-lg font-semibold">{{name}}</h3>
                  <span class="font-light text-mocka-mouse">{{level}}</span>
                  <div class="flex flex-wrap gap-1 py-3">
                    {{#each keywords}}
                      <div
                        class="w-fit rounded-full bg-fill-dark px-3 py-1 text-sm font-semibold text-cloud-dancer"
                      >
                        {{this}}
                      </div>
                    {{/each}}
                  </div>
                </div>
              {{/each}}
            </div>
          </div>
        {{/if}}
        {{! Projects }}
        {{#if (notEmpty projects)}}
          <div class="py-5">
            <h2 class="pb-3 font-inter text-txt-main text-3xl font-bold">Projects</h2>
            <div class="grid gap-12 md:grid-cols-2 2xl:grid-cols-4">
              {{#each projects}}
                <div>
                  <a
                    href={{url}}
                    target="_blank"
                    class="text-lg font-semibold hover:underline"
                  >{{name}}</a>
                  <p class="italic">{{description}}</p>
                  <ul class="flex flex-wrap gap-1 py-3">
                    {{#each keywords}}
                      <li
                        class="w-fit rounded-full text-txt-dark px-3 py-1 text-sm font-semibold text-neutral-200"
                      >
                        {{this}}
                      </li>
                    {{/each}}
                  </ul>
                </div>
              {{/each}}
            </div>
          </div>
        {{/if}}
        {{! Languages, Interests etc }}
        <div class="pt-5">
          <div class="grid gap-12 md:grid-cols-2 2xl:grid-cols-4">
            {{#if languages}}
              <div>
                <h3 class="pb-3 text-txt-main text-lg font-semibold">Languages</h3>
                <div class="space-y-2">
                  {{#each languages}}
                    <div>
                      {{language}}
                      {{#if fluency}}
                        <div class="font-light text-neutral-600">
                          -
                          {{fluency}}
                        </div>
                      {{/if}}
                    </div>
                  {{/each}}
                </div>
              </div>
            {{/if}}
            {{#if interests}}
              <div>
                <h3 class="pb-3 text-txt-main text-lg font-semibold">Interests</h3>
                {{#each interests}}
                  <div>
                    {{name}}
                  </div>
                  {{#each keywords}}
                    <div class="font-light text-neutral-600">
                      -
                      {{this}}
                    </div>
                  {{/each}}
                {{/each}}
              </div>
            {{/if}}
            {{#if awards}}
              <section>
                <h3 class="pb-3 text-txt-main text-lg font-semibold">Awards</h3>
                <div class="space-y-4">
                  {{#each awards}}
                    <div>
                      {{#if date}}
                        <div class="text-sm font-light text-neutral-600">
                          {{date}}
                        </div>
                      {{/if}}

                      {{#if awarder}}
                        <div class="text-sm font-light text-neutral-600">
                          Awarded by:
                          {{awarder}}
                        </div>
                      {{/if}}
                      <a href={{url}} target="_blank" class="hover:underline">
                        {{title}}
                      </a>
                      {{#if summary}}
                        <div class="pt-4 font-light text-neutral-600">
                          {{summary}}
                        </div>
                      {{/if}}
                    </div>
                  {{/each}}
                </div>
              </section>
            {{/if}}
            {{#if certificates}}
              <section>
                <h3 class="pb-3 text-txt-main text-lg font-semibold">Certificates</h3>
                <div class="space-y-4">
                  {{#each certificates}}
                    <div>
                      {{#if date}}
                        <div class="text-sm font-light text-neutral-600">
                          {{date}}
                        </div>
                      {{/if}}
                      {{#if issuer}}
                        <div class="text-sm font-light text-neutral-600">
                          Issued by:
                          {{issuer}}
                        </div>
                      {{/if}}
                      <a href={{url}} target="_blank" class="hover:underline">
                        {{name}}
                      </a>
                    </div>
                  {{/each}}
                </div>
              </section>
            {{/if}}
            {{#if publications}}
              <section>
                <h3 class="pb-3 text-txt-main text-lg font-semibold">Publications</h3>
                <div class="space-y-4">
                  {{#each publications}}
                    <div>
                      {{#if releaseDate}}
                        <div class="text-sm font-light text-neutral-600">
                          {{releaseDate}}
                        </div>
                      {{/if}}
                      {{#if publisher}}
                        <div class="text-sm font-light text-neutral-600">
                          Published in
                          {{publisher}}
                        </div>
                      {{/if}}
                      <a href={{url}} target="_blank" class="hover:underline">
                        {{name}}
                      </a>
                      {{#if summary}}
                        <div class="pt-4 font-light text-neutral-600">
                          {{summary}}
                        </div>
                      {{/if}}
                    </div>
                  {{/each}}
                </div>
              </section>
            {{/if}}
          </div>
        </div>
      </div>
    </div>
    <footer class="mx-auto h-10 w-fit px-20 pt-24 pb-8 text-sm text-neutral-400">
      2026
    </footer>
  </body>
</html>`,
	styles: "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }/*! tailwindcss v3.4.19 | MIT License | https://tailwindcss.com*/*,:after,:before{box-sizing:border-box;border:0 solid}:after,:before{--tw-content:\"\"}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:Roboto,sans-serif;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.mx-auto{margin-left:auto;margin-right:auto}.ml-6{margin-left:1.5rem}.flex{display:flex}.grid{display:grid}.h-10{height:2.5rem}.h-32{height:8rem}.h-6{height:1.5rem}.w-32{width:8rem}.w-6{width:1.5rem}.w-fit{width:-moz-fit-content;width:fit-content}.list-disc{list-style-type:disc}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-12{gap:3rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-5{gap:1.25rem}.space-y-12>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(3rem*(1 - var(--tw-space-y-reverse)));margin-bottom:calc(3rem*var(--tw-space-y-reverse))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem*var(--tw-space-y-reverse))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.75rem*var(--tw-space-y-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem*var(--tw-space-y-reverse))}.divide-y-2>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-top-width:calc(2px*(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(2px*var(--tw-divide-y-reverse))}.rounded-full{border-radius:9999px}.bg-cloud-dancer{--tw-bg-opacity:1;background-color:rgb(240 238 233/var(--tw-bg-opacity,1))}.bg-fill-dark{--tw-bg-opacity:1;background-color:rgb(164 119 100/var(--tw-bg-opacity,1))}.object-cover{-o-object-fit:cover;object-fit:cover}.object-center{-o-object-position:center;object-position:center}.px-20{padding-left:5rem;padding-right:5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-20{padding-top:5rem;padding-bottom:5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.py-8{padding-top:2rem;padding-bottom:2rem}.pb-1{padding-bottom:.25rem}.pb-3{padding-bottom:.75rem}.pb-8{padding-bottom:2rem}.pt-1{padding-top:.25rem}.pt-24{padding-top:6rem}.pt-3{padding-top:.75rem}.pt-4{padding-top:1rem}.pt-5{padding-top:1.25rem}.font-inter{font-family:Inter,Open Sans,sans-serif}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-bold{font-weight:700}.font-light{font-weight:300}.font-semibold{font-weight:600}.font-thin{font-weight:100}.lowercase{text-transform:lowercase}.italic{font-style:italic}.tracking-wide{letter-spacing:.025em}.text-cloud-dancer{--tw-text-opacity:1;color:rgb(240 238 233/var(--tw-text-opacity,1))}.text-mocka-mouse{--tw-text-opacity:1;color:rgb(164 119 100/var(--tw-text-opacity,1))}.text-txt-dark,.text-txt-main{--tw-text-opacity:1;color:rgb(46 39 36/var(--tw-text-opacity,1))}.drop-shadow-md{--tw-drop-shadow:drop-shadow(0 4px 3px rgba(0,0,0,.07)) drop-shadow(0 2px 2px rgba(0,0,0,.06));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.hover\\:underline:hover{text-decoration-line:underline}@media (min-width:768px){.md\\:mx-auto{margin-left:auto;margin-right:auto}.md\\:w-2\\/3{width:66.666667%}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:flex-row{flex-direction:row}.md\\:items-center{align-items:center}.md\\:justify-end{justify-content:flex-end}.md\\:px-0{padding-left:0;padding-right:0}.md\\:text-2xl{font-size:1.5rem;line-height:2rem}.md\\:text-5xl{font-size:3rem;line-height:1}}@media (min-width:1280px){.xl\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.xl\\:py-40{padding-top:10rem;padding-bottom:10rem}}@media (min-width:1536px){.\\32xl\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}"
};