import Exercise from "#/#lesson/components/Article/Exersice";
import { memo, useState } from "react";
import Markdown from "components/Markdown/Markdown";
import "public/styles/Markdown.css";
const article = `### Tabrik

Dasturlash dunyosiga xush kelibsiz! 

Web dasturlashning, va dunyodagi barcha ilovalarning asosi bo’lmish HTML kursimizni o’rganishni boshlaganingiz bilan tabriklaymiz!

HTML barcha veb-sahifalarning skeletidir. Bu dasturchilar, marketologlar va dizaynerlar tomonidan o'rganilgan birinchi til bo'lib, \`front-end\` dasturchilarining asosiy vazifasidir. Agar kodga birinchi marta teginayotgan bo‘lsangiz, uni birinchi marta *codify.uz* platformasida yozyotganingizdan bag’oyatda xursandmiz.

### HTML o’zi nima?

Bu savolga oson javob olish uchun shu misolni olamiz.

Microsoft Word yoki Google Docs kabi matn protsessorida yaratadigan hujjatni o'ylab ko'ring. Ular odatda bir nechta uslublardan iborat. Ular matnning turli bo'limlarini ko'rsatish uchun turli xil shrift o'lchamlaridan foydalanadilar, masalan, sarlavhalar, </i>kursiv</i> yoki <b>qalin</b> matinlar, jadvallar, sarlavhalar va boshqa yana imkoniyatlar.

Inson shunchaki hujjatga qarashi, sarlavha va paragraf o'rtasidagi farqni bemalol tushunishi mumkin bo'lsa, kompyuterlarda bunday sezgi yo'q. Brauzer veb-sahifani to'g'ri ko'rsatishi uchun har bir tarkib nima ekanligini aniq aytib berishi kerak.

{{{ ILLUSTRATION }}}

- Ushbu hujjatga qarab, sarlavha yoki muqova tasviri qayerda ekanligini darhol aniqlashingiz mumkin. Sizning kompyuteringiz esa unchalik aqlli emas.

Kompyuterga biz buyruqlar beramiz, qaysi narsani sarlavha sifatida ekranga uzatish kerak yoki qaysi narsani sarlavha yokida oddiy matin sifatida.

Xo'sh, biz kompyuterga qaysi narsa qanday ekanligini qanday aniq tushuntira olamiz? Kompyuter bilan qanday muloqot qila olamiz?

Aynan shu erda bizga \`HTML\` (Inglizchadan: Hyper Text Markup Language) yordam beradi. 

HTML - bu vebsaytlarning tuzilishini ta'minlovchi dasturlash tili, tog’rirog’i belgilash tili. HTML faqatgina *HTML Elementlardan* tashkil topgan. Yokida qisqacha yopish va ochish *teglari* bilan.

:::main{#info}
HTML faqatgina *Teglardan* iborat
:::

Va uni o’zlashtirish juda oson.

Misol tariqasida, \`<p>\` tegi paragraf, ya’ni oddiy matin, elementini tavsiflash uchun ishlatiladi.

:::main{#warn}
HTML Teg qanday yozilishini keyingi darsda ko’rib o’tamiz.
:::

Yokida \`<h1>\` ya’ni *heading-1* (o’zb: sarlavha-1), sarlavha elementini tavsiflash uchun ishlatiladi. Va yana shunga o’xshash rasm, video, audio, maqola, iqtibos, yokida urg’u beruvchilar uchun ko’plab teglar mavjud, bularni esa qadamba-qadam eng ko’p va xar bir dasturchi bilishi kerak bo’lgan teglarning barchasini o’rganib, mashqlar bajarib va ularni real proektlarda qo’llab o’rganib boramiz InshaAllah.

\`\`\`html
<form method="POST">
	<input placeholder="Foydalanuchi ismi:" />

	<input type="number" />
</form>
\`\`\`

- *number* - o’zb: son

:::main{#success}
O’z ismingiz \`type="number"\` bo’lgan inputga yozib ko’ring
:::

Natijada biz faqat sonlarnigina kirita olamiz. Ma’lumot turini yozish dasturimizga qo’shimcha ximoya olib keladi, sababi sondan boshqa ma’lumot turini kiritishga yo’l qo’yilmaydi,va keraksiz ma’lumot kiritishdan saqlaydi (Odam yoshini kiritiladigan joyiga, ismini yoki to’g’ri kelmaydigan ma’lumot turi bo’lmaydi).`;
function Article(props) {
  const [markdownn] =
    useState(`Tartibli ro’yxatlar bir jarayondagi turli bosqichlarni, yoki bir nechta ma’lumotlarni ketma-ketlikda sanab o‘tish, va elementlarni birinchidan oxirigacha tartibli holda sanab o’tish uchun kerak bo’ladi.

1. Sport 30 min ⚽
2. HTML ni o’rganish 1.5 soat 🧑‍💻
3. Ovqatlanish 30 min 🍗

Shu turdagi tartiblangan roʻyxatlar \`<ol>\` Ota-Ona elementi bilan boshlanib, va uning ichiga istalgan sonli \`<li>\` elementlar kiritiladi. Ro’yxatni tugallash uchun \`</ol>\` oxirida yoziladi:

~~~html
<ol>
	<li>Sport 30 min ⚽</li>
	<li>HTML ni o’rganish 1.5 soat 🧑‍💻</li>
	<li>Ovqatlanish 30 min 🍗</li>
</ol>
~~~
`);
  const markdown = article;
  return (
    <div className="h-full overflow-auto" style={{ width: props.width }}>
      <article className="px-3" id="article">
        <h1 className="py-7">HTML Kirish</h1>

        <Markdown src={markdown} />
      </article>

      <div className="exercsices pb-20">
        <div className="title | flex items-end | px-4 | bg-[#EEEEEE] w-full h-10 fc space-x-5">
          <svg
            className="h-6 w-6"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.5762 4.46354C16.7403 4.05331 16.5408 3.58773 16.1305 3.42364C15.7203 3.25955 15.2547 3.45908 15.0906 3.86931L8.42398 20.536C8.25989 20.9462 8.45942 21.4118 8.86965 21.5759C9.27988 21.74 9.74545 21.5404 9.90954 21.1302L16.5762 4.46354ZM6.43939 8.56033C6.77413 8.89507 6.77413 9.43778 6.43939 9.77251L3.71215 12.4998L6.43939 15.227C6.77413 15.5617 6.77413 16.1044 6.43939 16.4392C6.10465 16.7739 5.56194 16.7739 5.22721 16.4392L1.89387 13.1058C1.55914 12.7711 1.55914 12.2284 1.89387 11.8937L5.22721 8.56033C5.56194 8.2256 6.10465 8.2256 6.43939 8.56033ZM18.5607 8.56033C18.8954 8.2256 19.4381 8.2256 19.7729 8.56033L23.1062 11.8937C23.2669 12.0544 23.3572 12.2724 23.3572 12.4998C23.3572 12.7271 23.2669 12.9451 23.1062 13.1058L19.7729 16.4392C19.4381 16.7739 18.8954 16.7739 18.5607 16.4392C18.2259 16.1044 18.2259 15.5617 18.5607 15.227L21.2879 12.4998L18.5607 9.77251C18.2259 9.43778 18.2259 8.89507 18.5607 8.56033Z"
              fill="#05192D"
            />
          </svg>
          <h1 className="font-bold text-gray-primary">Vazifalar</h1>
        </div>
        <Exercise
          completed={true}
          body={`Great work! Kelvin can now publish his forecasts in *Celsius and Fahrenheit*.
If you’d like extra practice, try this:
          
Convert celsius to the Newton scale using the equation below
\`Newton = Celsius * (33/100)\`
          
Round down the **Newton temperature** using the \`.floor()\` method
Use \`console.log\` and string interpolation to log the temperature in newton to the console
`}
          solution={`1) Birinchi, *a* ikkinchi darajada, demak *tepa indeksi* \`<sup>..</sup>\` tegidan foydalanib, 2 sonini shu teg orasiga joylashtiramiz:
~~~html
a<sup>2</sup>
~~~

Natija esa xuddi mashqdagidek, keyingi fazifa *b* ni 2chi darajaga ko'tarish. Bu ham xuddi tepadagidek echim oladi.

~~~html
a<sup>2</sup> - b<sup>2</sup> = (a + b)(a - b)
~~~


2) Ikkinchi echim ham juda oddiy. Pastki indeksdan foydalanib 2 sonini \`<sub>2</sub>\` orasiga yozib natijani olamiz:

~~~html
log<sub>2</sub>2 = 1
~~~

Xar birini yangi qatorlarga otqazish uchun alohida \`p\` teglari orasiga joylaymiz, va yakuniy natijaga ega bo'lmiz:

~~~html
<p>
1) a<sup>2</sup> - b<sup>2</sup> = (a + b)(a - b)
</p>

<p>
2) log<sub>2</sub>2 = 1
</p>
~~~
          
Agar ikkala mashqni xam uddalagan bo'lsangiz, Barakalla!`}
        />

        <Exercise
          completed={false}
          body={`Under the heading that says \`Countries with Large Brown Bear Populations\`, add an ordered list.
         
Do not add any list items to the list just yet.`}
          solution={`
~~~js
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
~~~`}
        />
      </div>
    </div>
  );
}

export default memo(Article);
