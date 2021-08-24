import { memo, useState } from "react";
import Markdown from "./Markdown/Markdown";
import Exersice from "./Article/Exersice";

function Article(props) {
  const [markdown] =
    useState(`Havola bu foydalanuvchilarga bir sayttan ikkinchi saytga o'tishni ta'minlaydi.

Sichqonchani havola ustida obirganda, sichqoncha kichik qo'lga aylanadi 👆.

Misol tariqasida [google.com](#) sayti:

![LINK](https://i.ibb.co/NCwB26G/LINK.gif)

### Havola sintaksisi

Havolalar \`<a>\` HTML elementi (tegi) yordamida yaratiladi. Orasiga beriladikan matin, bosish mumkun bo'lgan havolaga aylanadi, va \`href\` attributi yordamida saytga havola qoldirasiz:

:::main{#info}
Havola \`inline\` (Cheklangan) element
:::

~~~html
Mana shu <a href="https://kun.uz">havola:</a>
~~~

Qiziqarli tomoni \`a\` tegi kontentiga nima joylasangiz o'sha havolaga aylanadi.

Misol rasm joylaymiz:

~~~html
Rasm bilan havola
<a href="https://kun.uz">
    <img 
        src="https://i.ibb.co/Yj4M1f2/1200px-Facebook-Logo-2019.webp" 
        width="100" 
        height="100" 
    />
</a>
~~~

:::main{#success}
Rasmgning o'chamlarini \`width\` va \`height\` orqali o'zgartsa bo'ladi.
:::

Havolaning umumiy tuzilishi:

![LINK_TAG](https://i.ibb.co/QKb36dt/Group-12-1.png)

### Havola ko'rinishi

Shuningdek, havolalar barcha brauzerlarda quyidagicha ko'rinish oladi:

- Xali ustiga bosilmagan havola chizilgan va ko'k rangda
- Bosilgan havola chizilgan va binafsha rangda
- Faol havola (Ustiga bosip turulganda) chizilgan va qizil rangda

:::main{#info}
Albatta *CSS* yordamida buni o'zgartirsa bo'ladi.
:::

### *Target* Attributi

\`a\` tegini bosganingizda shu saytning ustidan yangi saytga o'tiladi.

\`Target\` attributi havolani qayerdan ochilishini belgilaydi.

Uning qiymatiga 4ta qiymat turini berish mumkun, ular quyidagilar:

#### 1. \`_self\`

Hujjat bosilgan oynadan ochadi. Yozish shart emas! (*default* qiymat)

#### 2. \`_blank\`

Saytni yangi *tabdan* (oynadan) ochadi.

#### 3. \`_parent\`

Saytni yuqori freymda ochadi

#### 4. \`_top\`

Saytni oynaning to'liq qismida ochadi

Eng ko'p qo'llaniladigani bu \`_blank\` qiymati:

~~~html
<a target="_blank" href="https://google.com">Google.com</a>
~~~

### Absolut URL vs Relative URL

Tepadagi barcha misollarda *src* attributi qiymatiga *absolut* sayt manzili kiritildi.

:::main{#success}
Sayt manzilini *URL* deb nomlash tog'riroq bo'ladi
:::

![IMAGE_URL](https://i.ibb.co/tsB9k5J/Group-14.png)

\`https://devilla.uz/about\`ning Relative va Absolut URL lari:

1. Relative URL sayt manzilining (URL) ning *directory* (*/about*) qismi.
2. Absolut URL bu sayt manzilining (URL) to'liq nomi: \`https://devilla.uz/about\`.

Agarda sizning saytingiz [devilla.uz](#) *domenida* bo'lsa va shu saytning o'ziga \`https://devilla.uz/about\` havolasi bilan yo'naltirmoqchi bo'lsangiz *directory* qismini yozish kifoya:

~~~html
<a href="/about">devilla.uz<a>
~~~

Mana shu ham bir hil natijani beradi:

~~~html
<a href="https://devilla.uz/about">devilla.uz<a>
~~~

Lekin siz [devilaa.uz](#)dan turib [google.com](#) saytiga yo'naltirmoqchi bo'lsangiz, Absolut URL ishlatishingiz shartli bo'ladi:

~~~html
<a href="https://google.com">google.com<a>
~~~
`);

  return (
    <div className="h-full overflow-auto px-2" style={{ width: props.width }}>
      <article className="px-3" id="article">
        <h1 className="py-7">HTML - Sarlavhalar</h1>

        <Markdown src={markdown} />
      </article>

      <div className="exercsices pb-10">
        <div className="title | flex items-end | px-4 my-7 mb-12 |">
          <div className="icon">
            <svg
              className="w-12"
              viewBox="0 0 34 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.4147 21.822C13.2862 21.822 13.1569 21.7778 13.0513 21.6879L9.41902 18.595C9.29372 18.4882 9.22168 18.3322 9.22168 18.1674C9.22168 18.003 9.29404 17.847 9.41902 17.7402L13.0513 14.6473C13.2872 14.4462 13.6415 14.4747 13.8426 14.7105C14.0433 14.9467 14.0151 15.301 13.779 15.5018L10.6488 18.1674L13.779 20.8331C14.0151 21.0342 14.0433 21.3884 13.8426 21.6243C13.7314 21.7549 13.5735 21.822 13.4147 21.822Z"
                fill="#017AFF"
              />
              <path
                d="M20.5854 21.822C20.4266 21.822 20.2687 21.7549 20.1578 21.6243C19.9567 21.3884 19.9852 21.0342 20.2211 20.8331L23.3513 18.1674L20.2211 15.5018C19.9852 15.301 19.9567 14.9467 20.1578 14.7105C20.3586 14.4747 20.7132 14.4462 20.9488 14.6473L24.5811 17.7402C24.7063 17.847 24.7784 18.003 24.7784 18.1674C24.7784 18.3322 24.7063 18.4882 24.5811 18.595L20.9488 21.6879C20.8432 21.7778 20.7138 21.822 20.5854 21.822Z"
                fill="#017AFF"
              />
              <path
                d="M15.7142 24.1418C15.6757 24.1418 15.6368 24.1377 15.5977 24.1296C15.2944 24.0657 15.1002 23.7678 15.1641 23.4646L17.4279 12.7165C17.4918 12.4133 17.7894 12.219 18.0929 12.2829C18.3961 12.3468 18.5903 12.6444 18.5264 12.9479L16.2627 23.6961C16.2069 23.9604 15.9739 24.1418 15.7142 24.1418Z"
                fill="#017AFF"
              />
              <path
                d="M30.2311 29.9975H3.76887C1.69085 29.9975 0 28.3069 0 26.2286V3.76887C0 1.69085 1.69085 0 3.76887 0H30.2311C32.3091 0 34 1.69085 34 3.76887V26.2286C34 28.3069 32.3091 29.9975 30.2311 29.9975ZM3.76887 1.12264C2.30981 1.12264 1.12264 2.30981 1.12264 3.76887V26.2286C1.12264 27.6876 2.30981 28.8748 3.76887 28.8748H30.2311C31.6902 28.8748 32.8774 27.6876 32.8774 26.2286V3.76887C32.8774 2.30981 31.6902 1.12264 30.2311 1.12264H3.76887Z"
                fill="#017AFF"
              />
              <path
                d="M33.4387 8.98833H0.561321C0.251216 8.98833 0 8.73712 0 8.42701C0 8.11722 0.251216 7.86569 0.561321 7.86569H33.4387C33.7488 7.86569 34 8.11722 34 8.42701C34 8.73712 33.7488 8.98833 33.4387 8.98833Z"
                fill="#017AFF"
              />
              <path
                d="M9.5907 6.30234C8.61152 6.30234 7.81433 5.50515 7.81433 4.52597C7.81433 3.54648 8.61152 2.7496 9.5907 2.7496C10.5702 2.7496 11.3671 3.54648 11.3671 4.52597C11.3671 5.50515 10.5702 6.30234 9.5907 6.30234ZM9.5907 3.87224C9.23048 3.87224 8.93697 4.16543 8.93697 4.52597C8.93697 4.88651 9.23048 5.1797 9.5907 5.1797C9.95123 5.1797 10.2444 4.88651 10.2444 4.52597C10.2444 4.16543 9.95123 3.87224 9.5907 3.87224Z"
                fill="#017AFF"
              />
              <path
                d="M4.13293 6.28513C3.15344 6.28513 2.35657 5.48825 2.35657 4.50876C2.35657 3.52927 3.15344 2.73239 4.13293 2.73239C5.11243 2.73239 5.9093 3.52927 5.9093 4.50876C5.9093 5.48825 5.11243 6.28513 4.13293 6.28513ZM4.13293 3.85503C3.77271 3.85503 3.47921 4.14854 3.47921 4.50876C3.47921 4.86929 3.77271 5.16248 4.13293 5.16248C4.49347 5.16248 4.78666 4.86929 4.78666 4.50876C4.78666 4.14854 4.49347 3.85503 4.13293 3.85503Z"
                fill="#017AFF"
              />
              <path
                d="M15.0485 6.31927C14.0693 6.31927 13.2725 5.52239 13.2725 4.5429C13.2725 3.56372 14.0693 2.76685 15.0485 2.76685C16.028 2.76685 16.8249 3.56372 16.8249 4.5429C16.8249 5.52239 16.028 6.31927 15.0485 6.31927ZM15.0485 3.88917C14.6883 3.88917 14.3951 4.18236 14.3951 4.5429C14.3951 4.90344 14.6883 5.19663 15.0485 5.19663C15.4091 5.19663 15.7022 4.90344 15.7022 4.5429C15.7022 4.18236 15.4091 3.88917 15.0485 3.88917Z"
                fill="#017AFF"
              />
            </svg>
          </div>
          <h1 className="font-bold | border-b-4 border-[#017AFF]  | text-3xl ml-5 text-[#017AFF]">
            Praktika
          </h1>
        </div>
        <Exersice
          completed={true}
          body={`Mana shu formulani HTML yordamida jonli saytga aylantiring:
><p>1) a<sup>2</sup> - b<sup>2</sup> = (a + b)(a - b)</p>
>
> <p>2) log<sub>2</sub>2 = 1</p>


:::main{#warn}
Indekslardan foydalaning!
:::
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
        <Exersice
          completed={false}
          body={`Mana shu oddiy paragrafni, ikkala iqtibos teglarini qo'llab iqtiboz yarating:

> Muvaffaqiyat - bu bir omadsizlikdan ikkinchisiga ishtiyoqni yo'qotmay harakatlanish.
>
> Uinston Cherchil`}
          solution={`
~~~html
Necha dedim ul sanamg'a: <mark>Bormog'in!</mark>
<br />
<i>Qilmadi</i> ul tark oxir bormog'in;
<br />
<ins>Munchakim</ins> xudroyliq ko'rguzdi ul,
<br />
Aql hayrat qildi <del>tashlab</del> <ins>tashlab</ins> barmog'in.
~~~

`}
        />
      </div>
    </div>
  );
}

export default memo(Article);
