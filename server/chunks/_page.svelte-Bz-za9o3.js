import { l as attr, m as ensure_array_like, j as escape_html, p as push, h as pop, o as sanitize_props, q as spread_props, t as bind_props, u as rest_props, v as fallback, w as spread_attributes, x as clsx, y as element, z as slot } from './index-DHJEU8n8.js';

/**
 * @license lucide-svelte v0.475.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function Icon($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  push();
  let name = fallback($$props["name"], void 0);
  let color = fallback($$props["color"], "currentColor");
  let size = fallback($$props["size"], 24);
  let strokeWidth = fallback($$props["strokeWidth"], 2);
  let absoluteStrokeWidth = fallback($$props["absoluteStrokeWidth"], false);
  let iconNode = fallback($$props["iconNode"], () => [], true);
  const mergeClasses = (...classes) => classes.filter((className, index, array) => {
    return Boolean(className) && array.indexOf(className) === index;
  }).join(" ");
  const each_array = ensure_array_like(iconNode);
  $$payload.out += `<svg${spread_attributes(
    {
      ...defaultAttributes,
      ...$$restProps,
      width: size,
      height: size,
      stroke: color,
      "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      class: clsx(mergeClasses("lucide-icon", "lucide", name ? `lucide-${name}` : "", $$sanitized_props.class))
    },
    void 0,
    void 0,
    3
  )}><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let [tag, attrs] = each_array[$$index];
    element($$payload, tag, () => {
      $$payload.out += `${spread_attributes({ ...attrs }, void 0, void 0, 3)}`;
    });
  }
  $$payload.out += `<!--]--><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></svg>`;
  bind_props($$props, {
    name,
    color,
    size,
    strokeWidth,
    absoluteStrokeWidth,
    iconNode
  });
  pop();
}
function Github($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
      }
    ],
    ["path", { "d": "M9 18c-4.51 2-5-2-7-2" }]
  ];
  Icon($$payload, spread_props([
    { name: "github" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Linkedin($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
      }
    ],
    [
      "rect",
      {
        "width": "4",
        "height": "12",
        "x": "2",
        "y": "9"
      }
    ],
    ["circle", { "cx": "4", "cy": "4", "r": "2" }]
  ];
  Icon($$payload, spread_props([
    { name: "linkedin" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Mail($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "rect",
      {
        "width": "20",
        "height": "16",
        "x": "2",
        "y": "4",
        "rx": "2"
      }
    ],
    [
      "path",
      {
        "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "mail" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
const Logo = "/_app/immutable/assets/portfolio-brandmark.CRTRk6cl.png";
function Navbar($$payload) {
  $$payload.out += `<nav><div class="bg-sky-950/50 backdrop-blur-md flex z-50 items-center justify-center space-x-150 px-2 sm:px-4 py-1 fixed w-full top-0 start-0"><a href="/" class="flex"><img${attr("src", Logo)} class="me-3 h-20" alt="Logo"> <span class="self-center whitespace-nowrap text-xl font-bold dark:text-white">Hayden Crane</span></a> <div class="flex items-center space-x-6 font-medium text-white"><a href="#about" class="hover:text-cyan-300">About</a> <a href="#projects" class="hover:text-cyan-300">Projects</a> <a href="#contact" class="hover:text-cyan-300">Contact</a></div></div></nav>`;
}
function Intro($$payload) {
  $$payload.out += `<main class="bg-sky-950 flex flex-col items-center justify-center w-full mx-auto pt-40"><div class="mt-10 flex flex-col items-center justify-center w-1/2 relative"><h1 class="text-sky-300 mb-3 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">Hi, I'm Hayden</h1> <p class="text-sky-200 mb-5 text-3xl font-medium tracking-tighter sm:text-2xl md:text-4xl lg:text-4xl/none">I'm a software engineer and student at the University of Georgia.</p> <p class="mx-auto max-w-[700px] text-sky-100 md:text-xl">I'm passionate about building cool shit.</p> <div class="flex mt-4 righ-4 space-x-4"><a href="https://github.com/haydencrane28" target="_blank" aria-label="GitHub">`;
  Github($$payload, {
    size: 30,
    class: "border text-sky-100 bg-zinc-900"
  });
  $$payload.out += `<!----></a> <a href="https://www.linkedin.com/in/hayden-crane-compsci" target="_blank" aria-label="LinkedIn">`;
  Linkedin($$payload, {
    size: 30,
    class: "border text-sky-100 bg-zinc-900"
  });
  $$payload.out += `<!----></a> <a href="https://mail.google.com/mail/?view=cm&amp;to=haydenmcrane28@gmail.com" target="_blank" aria-label="LinkedIn">`;
  Mail($$payload, {
    size: 30,
    class: "border text-sky-100 bg-zinc-900"
  });
  $$payload.out += `<!----></a></div></div></main>`;
}
function Project_card($$payload, $$props) {
  let title = $$props["title"];
  let description = $$props["description"];
  let image = $$props["image"];
  let link = $$props["link"];
  let tags = $$props["tags"];
  const each_array = ensure_array_like(tags);
  $$payload.out += `<div class="bg-sky-200 overflow-hidden border rounded-lg shadow-md"><div class="relative aspect-video"><img${attr("src", image)}${attr("alt", title)} class="object-cover w-full h-full transition-transform hover:scale-105"></div> <div class="p-4"><h3 class="text-sky-950 font-semibold text-xl mb-2">${escape_html(title)}</h3> <p class="text-sky-900 text-sm text-gray-500 mb-4">${escape_html(description)}</p> <div class="flex flex-wrap gap-2"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let tag = each_array[$$index];
    $$payload.out += `<span class="inline-flex items-center rounded-md bg-gray-200 px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">${escape_html(tag)}</span>`;
  }
  $$payload.out += `<!--]--></div></div> <div class="p-4 pt-0"><a${attr("href", link)} target="_blank" aria-label="GitHub">`;
  Github($$payload, {
    size: 30,
    class: "inline-flex items-center gap-2 text-sm hover:underline"
  });
  $$payload.out += `<!----> View on GitHub</a></div></div>`;
  bind_props($$props, { title, description, image, link, tags });
}
function Projects($$payload) {
  let projects = [
    {
      title: "USLA Reference Data Application",
      description: "Description of the project",
      image: "/favicon.png",
      link: "https://github.com/haydencrane28/USLA-Reference-Data",
      tags: ["Python", "Streamlit", "SQL"]
    },
    {
      title: "USLA Reference Data Application",
      description: "Description of the project",
      image: "/favicon.png",
      link: "https://github.com/haydencrane28/USLA-Reference-Data",
      tags: ["Python", "Streamlit", "SQL"]
    },
    {
      title: "USLA Reference Data Application",
      description: "Description of the project",
      image: "/favicon.png",
      link: "https://github.com/haydencrane28/USLA-Reference-Data",
      tags: ["Python", "Streamlit", "SQL"]
    },
    {
      title: "USLA Reference Data Application",
      description: "Description of the project",
      image: "/favicon.png",
      link: "https://github.com/haydencrane28/USLA-Reference-Data",
      tags: ["Python", "Streamlit", "SQL"]
    },
    {
      title: "USLA Reference Data Application",
      description: "Description of the project",
      image: "/favicon.png",
      link: "https://github.com/haydencrane28/USLA-Reference-Data",
      tags: ["Python", "Streamlit", "SQL"]
    },
    {
      title: "USLA Reference Data Application",
      description: "Description of the project",
      image: "/favicon.png",
      link: "https://github.com/haydencrane28/USLA-Reference-Data",
      tags: ["Python", "Streamlit", "SQL"]
    }
  ];
  const each_array = ensure_array_like(projects);
  $$payload.out += `<div class="bg-sky-950 flex flex-col items-center py-12 md:py-24 lg:py-32"><div class="container px-4 md:px-6"><h1 class="text-sky-300 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h1> <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let project = each_array[$$index];
    Project_card($$payload, {
      title: project.title,
      description: project.description,
      image: project.image,
      link: project.link,
      tags: project.tags
    });
  }
  $$payload.out += `<!--]--></div></div></div>`;
}
function Tech_stack($$payload) {
  const technologies = [
    {
      category: "Frontend",
      skills: ["Svelte, TypeScript, TailwindCSS, Streamlit"]
    },
    {
      category: "Backend",
      skills: ["Python, Java, SQL, C"]
    },
    {
      category: "DevOps",
      skills: ["Git, Snowflake"]
    },
    {
      category: "Tools",
      skills: ["VSCode, REST APIs, Matlab"]
    }
  ];
  const each_array = ensure_array_like(technologies);
  $$payload.out += `<div class="bg-sky-950 flex flex-col items-center py-12 md:py-24 lg:py-32"><div class="container px-4 md:px-6"><h2 class="text-sky-300 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Tech Stack</h2> <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let tech = each_array[$$index_1];
    const each_array_1 = ensure_array_like(tech.skills);
    $$payload.out += `<div class="bg-sky-200 border rounded-md p-6"><h2 class="text-sky-900 text-lg font-semibold mb-4">${escape_html(tech.category)}</h2> <ul class="text-sky-900 flex flex-wrap gap-2"><!--[-->`;
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let skill = each_array_1[$$index];
      $$payload.out += `<li class="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">${escape_html(skill)}</li>`;
    }
    $$payload.out += `<!--]--></ul></div>`;
  }
  $$payload.out += `<!--]--></div></div></div>`;
}
function Footer($$payload) {
  $$payload.out += `<div class="bg-sky-950 border-t border-sky-900"><div class="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6"><p class="text-xs text-sky-100">© 2025 Hayden Crane. All rights reserved.</p></div></div>`;
}
function Contact($$payload, $$props) {
  push();
  let pending = false;
  $$payload.out += `<div class="bg-sky-950 flex flex-col items-center py-12 md:py-24 lg:py-32"><div class="container px-4 md:px-6"><div class="mx-auto max-w-2xl"><h2 class="text-sky-300 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Get in Touch</h2> <div class="bg-sky-200 text-sky-900 border rounded-md p-6"><form><div class="items-center space-y-4"><div><label for="name" class="block text-sm font-medium mb-2">Name</label> <input type="text" id="name" class="border rounded-sm w-full"></div> <div><label for="email" class="block text-sm font-medium mb-2">Email</label> <input type="email" id="email" class="border rounded-sm w-full"></div> <div><label for="message" class="block text-sm font-medium mb-2">Message</label> <textarea id="message" class="border rounded-sm w-full"></textarea></div> <button type="submit" class="border rounded-sm hover:text-black-200"${attr("disabled", pending, true)}>${escape_html("Send Message")}</button> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></form></div></div></div></div>`;
  pop();
}
function _page($$payload) {
  $$payload.out += `<div>`;
  Navbar($$payload);
  $$payload.out += `<!----> <section id="about">`;
  Intro($$payload);
  $$payload.out += `<!----></section> <section id="projects">`;
  Projects($$payload);
  $$payload.out += `<!----></section> `;
  Tech_stack($$payload);
  $$payload.out += `<!----> <section id="contact">`;
  Contact($$payload);
  $$payload.out += `<!----></section> `;
  Footer($$payload);
  $$payload.out += `<!----></div>`;
}

export { _page as default };
//# sourceMappingURL=_page.svelte-Bz-za9o3.js.map
