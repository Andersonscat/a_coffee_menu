import React, { useState } from 'react';
import Header from './components/Header';
import MenuTabs from './components/MenuTabs';
import DrinksTable from './components/DrinksTable';
import './App.css';

const hotDrinks = [
  {
    name: 'Эспрессо',
    sizes: [{ size: '-', price: 800 }],
    description: 'Крепкий итальянский кофе, подается в маленькой чашке.',
    ingredients: ['Молотый кофе', 'Вода'],
    img: 'https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG'
  },
  {
    name: 'Американо',
    sizes: [
      { size: 'S', price: 900 },
      { size: 'M', price: 1000 }
    ],
    description: 'Классический американо — эспрессо, разбавленный горячей водой.',
    ingredients: ['Эспрессо', 'Горячая вода'],
    img: 'https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG'
  },
  {
    name: 'Капучино',
    sizes: [
      { size: 'S', price: 1000 },
      { size: 'M', price: 1100 },
      { size: 'L', price: 1200 }
    ],
    description: 'Итальянский кофе с молоком и пышной молочной пеной.',
    ingredients: ['Эспрессо', 'Молоко', 'Молочная пена'],
    img: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Cappuccino_at_Sightglass_Coffee.jpg'
  },
  {
    name: 'Латте',
    sizes: [
      { size: 'M', price: 1100 },
      { size: 'L', price: 1200 }
    ],
    description: 'Мягкий кофейный напиток с большим количеством молока.',
    ingredients: ['Эспрессо', 'Молоко', 'Молочная пена'],
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Latte_art_3.jpg'
  },
  {
    name: 'Флэт уайт',
    sizes: [{ size: 'S', price: 1100 }],
    description: 'Крепкий кофе с молоком, похожий на латте, но с меньшим количеством пены.',
    ingredients: ['Двойной эспрессо', 'Молоко'],
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Flat_white_coffee_with_pretty_feather_pattern.jpg'
  },
  {
    name: 'Какао',
    sizes: [{ size: 'M', price: 900 }],
    description: 'Горячий шоколадный напиток на молоке.',
    ingredients: ['Какао-порошок', 'Молоко', 'Сахар'],
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Hot_chocolate_%282%29.jpg'
  },
  {
    name: 'Горячий шоколад',
    sizes: [{ size: 'S', price: 1000 }],
    description: 'Плотный горячий шоколад с насыщенным вкусом.',
    ingredients: ['Шоколад', 'Молоко', 'Сливки'],
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Hot_chocolate_%282%29.jpg'
  },
  {
    name: 'Матча Латте зеленая, голубая',
    sizes: [{ size: 'M', price: 1300 }],
    description: 'Японский чай матча с молоком, насыщенный вкус и цвет.',
    ingredients: ['Матча', 'Молоко', 'Вода', 'Сахар'],
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Matcha_Latte_Art.jpg'
  },
];

const authorCoffee = [
  {
    name: 'Латте голд',
    size: 'M',
    price: 1200,
    description: 'Латте с добавлением золотого сиропа и молока.',
    ingredients: ['Эспрессо', 'Молоко', 'Золотой сироп'],
    img: ''
  },
  {
    name: 'Испанский латте',
    size: 'M',
    price: 1200,
    description: 'Сладкий латте с добавлением сгущённого молока.',
    ingredients: ['Эспрессо', 'Молоко', 'Сгущённое молоко'],
    img: ''
  },
  {
    name: 'Раф фисташка-малина',
    size: 'M',
    price: 1300,
    description: 'Кремовый раф с фисташковым и малиновым вкусом.',
    ingredients: ['Эспрессо', 'Сливки', 'Фисташковый сироп', 'Малиновый сироп'],
    img: ''
  },
  {
    name: 'Раф Дубайский шоколад',
    size: 'M',
    price: 1300,
    isNew: true,
    description: 'Раф с насыщенным шоколадным вкусом и сливками.',
    ingredients: ['Эспрессо', 'Сливки', 'Шоколадный сироп'],
    img: ''
  },
];

const altCoffee = [
  {
    name: 'Батч',
    size: 'S',
    price: 1000,
    description: 'Фильтр-кофе, приготовленный методом batch brew.',
    ingredients: ['Молотый кофе', 'Вода'],
    img: ''
  },
  {
    name: 'V60',
    size: 'M',
    price: 1200,
    description: 'Кофе, приготовленный методом V60 pour-over.',
    ingredients: ['Молотый кофе', 'Вода'],
    img: ''
  },
];

const authorTea = [
  {
    name: 'Карак чай',
    size: 'M',
    price: 900,
    description: 'Пряный индийский чай с молоком и специями.',
    ingredients: ['Чай', 'Молоко', 'Кардамон', 'Сахар'],
    img: ''
  },
  {
    name: 'Облепиха-маракуйя',
    size: 'L',
    price: 900,
    description: 'Чай с облепихой и маракуйей, насыщенный витаминами.',
    ingredients: ['Чай', 'Облепиха', 'Маракуйя', 'Мёд'],
    img: ''
  },
  {
    name: 'Тары чай',
    size: 'L',
    price: 900,
    description: 'Фирменный чай с травами и специями.',
    ingredients: ['Чай', 'Травы', 'Специи', 'Мёд'],
    img: ''
  },
  {
    name: 'Малина-имбирь',
    size: 'L',
    price: 900,
    description: 'Чай с малиной и имбирём, согревающий и ароматный.',
    ingredients: ['Чай', 'Малина', 'Имбирь', 'Мёд'],
    img: ''
  },
];

const leafTea = [
  {
    name: 'Улун апельсин зеленый',
    price: 800,
    description: 'Зелёный улун с нотами апельсина.',
    ingredients: ['Улун', 'Апельсиновая цедра'],
    img: ''
  },
  {
    name: 'Английский завтрак черный',
    price: 800,
    description: 'Классический чёрный чай в английском стиле.',
    ingredients: ['Чёрный чай'],
    img: ''
  },
  {
    name: 'Ройбуш малина без кофеина',
    price: 800,
    description: 'Травяной чай ройбуш с малиной, не содержит кофеина.',
    ingredients: ['Ройбуш', 'Малина'],
    img: ''
  },
];

const extras = [
  { name: '+ Сироп', price: 300 },
  { name: '+ Альтернативное молоко', price: 600 },
  { name: '+ Безлактозное', price: 500 },
  { name: '+ Без кофеина', price: 600 },
  { name: '+ Сырная шапка', price: 300 },
];

const coldAuthor = [
  {
    name: 'Айс Американо',
    size: 'L',
    price: 1100,
    description: 'Охлаждённый американо со льдом.',
    ingredients: ['Эспрессо', 'Вода', 'Лёд'],
    img: ''
  },
  {
    name: 'Айс латте / капучино',
    size: 'L',
    price: 1200,
    description: 'Латте или капучино, приготовленный на льду.',
    ingredients: ['Эспрессо', 'Молоко', 'Лёд'],
    img: ''
  },
  {
    name: 'Айс Испанский латте',
    size: 'L',
    price: 1300,
    description: 'Испанский латте в холодном исполнении.',
    ingredients: ['Эспрессо', 'Молоко', 'Сгущённое молоко', 'Лёд'],
    img: ''
  },
  {
    name: 'Айс малина раф',
    size: 'L',
    price: 1300,
    isNew: true,
    description: 'Раф с малиновым сиропом и сливками на льду.',
    ingredients: ['Эспрессо', 'Сливки', 'Малиновый сироп', 'Лёд'],
    img: ''
  },
  {
    name: 'Колд брю вишня, ананас',
    size: 'L',
    price: 1400,
    description: 'Холодный кофе колд брю с вишней и ананасом.',
    ingredients: ['Колд брю', 'Вишня', 'Ананас', 'Лёд'],
    img: ''
  },
  {
    name: 'Фраппучино белвита',
    size: 'L',
    price: 1400,
    description: 'Фраппучино с печеньем белвита и сливками.',
    ingredients: ['Кофе', 'Молоко', 'Печенье белвита', 'Сливки', 'Лёд'],
    img: ''
  },
  {
    name: 'Айс матча клубника, манго, персик, банан',
    size: 'L',
    price: 1400,
    isNew: true,
    description: 'Матча с ягодами и фруктами на льду.',
    ingredients: ['Матча', 'Клубника', 'Манго', 'Персик', 'Банан', 'Лёд'],
    img: ''
  },
  {
    name: 'Эспрессо тоник цитрус, малина',
    size: 'L',
    price: 1200,
    isNew: true,
    description: 'Освежающий эспрессо-тоник с цитрусом и малиной.',
    ingredients: ['Эспрессо', 'Тоник', 'Цитрус', 'Малина', 'Лёд'],
    img: ''
  },
  {
    name: 'Матча тоник грейпфрут, клубника',
    size: 'L',
    price: 1300,
    isNew: true,
    description: 'Матча с тоником, грейпфрутом и клубникой.',
    ingredients: ['Матча', 'Тоник', 'Грейпфрут', 'Клубника', 'Лёд'],
    img: ''
  },
];

const coldRefresh = [
  {
    name: 'Айс ти – Вишня-груша',
    size: 'L',
    price: 1100,
    description: 'Охлаждённый чай с вишней и грушей.',
    ingredients: ['Чай', 'Вишня', 'Груша', 'Лёд'],
    img: ''
  },
  {
    name: 'Айс ти – Манго-маракуйя',
    size: 'L',
    price: 1100,
    description: 'Охлаждённый чай с манго и маракуйей.',
    ingredients: ['Чай', 'Манго', 'Маракуйя', 'Лёд'],
    img: ''
  },
  {
    name: 'Айс ти – Малина/клубника лайм',
    size: 'L',
    price: 1100,
    description: 'Чай с малиной, клубникой и лаймом на льду.',
    ingredients: ['Чай', 'Малина', 'Клубника', 'Лайм', 'Лёд'],
    img: ''
  },
  {
    name: 'Лимонад – Вишня',
    size: 'L',
    price: 1200,
    description: 'Домашний лимонад с вишней.',
    ingredients: ['Вишня', 'Лимон', 'Сахар', 'Вода', 'Лёд'],
    img: ''
  },
  {
    name: 'Лимонад – Драгон-груша',
    size: 'L',
    price: 1300,
    isNew: true,
    description: 'Лимонад с драгонфрутом и грушей.',
    ingredients: ['Драгонфрут', 'Груша', 'Лимон', 'Сахар', 'Вода', 'Лёд'],
    img: ''
  },
  {
    name: 'Лимонад – Клубника-банан',
    size: 'L',
    price: 1200,
    description: 'Лимонад с клубникой и бананом.',
    ingredients: ['Клубника', 'Банан', 'Лимон', 'Сахар', 'Вода', 'Лёд'],
    img: ''
  },
];

const cocktails = [
  {
    name: 'Тары',
    size: 'L',
    price: 1500,
    description: 'Молочный коктейль с фирменным вкусом.',
    ingredients: ['Молоко', 'Мороженое', 'Сироп'],
    img: ''
  },
  {
    name: 'Кит-Кат',
    size: 'L',
    price: 1500,
    description: 'Коктейль с шоколадом Kit-Kat и молоком.',
    ingredients: ['Молоко', 'Мороженое', 'Kit-Kat', 'Шоколадный сироп'],
    img: ''
  },
  {
    name: 'Нутелла банан',
    size: 'L',
    price: 1500,
    description: 'Коктейль с нутеллой и бананом.',
    ingredients: ['Молоко', 'Мороженое', 'Нутелла', 'Банан'],
    img: ''
  },
];

const smoothies = [
  {
    name: 'Зеленый ПП',
    size: 'L',
    price: 1600,
    isNew: true,
    description: 'Полезный смузи с зелёными овощами и фруктами.',
    ingredients: ['Шпинат', 'Яблоко', 'Киви', 'Банан', 'Сок лимона'],
    img: ''
  },
  {
    name: 'Протеиновый',
    size: 'L',
    price: 1600,
    isNew: true,
    description: 'Смузи с протеином для поддержания энергии.',
    ingredients: ['Протеин', 'Банан', 'Молоко', 'Мёд'],
    img: ''
  },
  {
    name: 'Банан-малина',
    size: 'L',
    price: 1500,
    description: 'Смузи с бананом и малиной.',
    ingredients: ['Банан', 'Малина', 'Йогурт', 'Мёд'],
    img: ''
  },
  {
    name: 'Ананас-манго',
    size: 'L',
    price: 1500,
    description: 'Смузи с ананасом и манго.',
    ingredients: ['Ананас', 'Манго', 'Йогурт', 'Мёд'],
    img: ''
  },
];

const seasonal = [
  { name: 'Милкшейк "Фисташка"', img: 'https://raul.kz/images/menu/milkshake-fistashka.png', price: 3200 },
  { name: 'Айс-ти "Смородина-Базилик"', img: 'https://raul.kz/images/menu/ice-tea-smorodina-basilik.png', price: 2200 },
  { name: 'Лимонад "Ананас-Щавель"', img: 'https://raul.kz/images/menu/lemonade-ananas-shavel.png', price: 2200 },
  { name: 'Смузи "Тропик"', img: 'https://raul.kz/images/menu/smoothie-tropik.png', price: 3200 },
  { name: 'Бамбл "Матча арбуз"', img: 'https://raul.kz/images/menu/bambl-matcha-arbuz.png', price: 3200 },
  { name: 'Айс-какао с сырной шапкой', img: 'https://raul.kz/images/menu/ice-cacao-syrnaya-shapka.png', price: 3200 },
];

const breakfastBakery = [
  {
    name: 'Континентальный завтрак',
    price: 1500,
    description: 'Классический европейский завтрак: круассан, масло, джем, сыр, свежие овощи и яйцо.',
    ingredients: ['Круассан', 'Масло', 'Джем', 'Сыр', 'Овощи', 'Яйцо'],
    img: ''
  },
  {
    name: 'Американский завтрак',
    price: 1600,
    description: 'Яичница, бекон, тосты, картофель, овощи и соус.',
    ingredients: ['Яйца', 'Бекон', 'Тосты', 'Картофель', 'Овощи', 'Соус'],
    img: ''
  },
  {
    name: 'Национальный завтрак',
    price: 1400,
    description: 'Традиционный завтрак с кашей, лепёшкой, сыром и яйцом.',
    ingredients: ['Каша', 'Лепёшка', 'Сыр', 'Яйцо'],
    img: ''
  },
  {
    name: 'Блины со сметаной',
    price: 900,
    description: 'Тонкие блины, подаются со сметаной.',
    ingredients: ['Мука', 'Яйца', 'Молоко', 'Сметана'],
    img: ''
  },
  {
    name: 'Блины с джемом',
    price: 900,
    description: 'Тонкие блины с фруктовым джемом.',
    ingredients: ['Мука', 'Яйца', 'Молоко', 'Джем'],
    img: ''
  },
  {
    name: 'Блины с шоколадом',
    price: 1000,
    description: 'Блины с шоколадной начинкой.',
    ingredients: ['Мука', 'Яйца', 'Молоко', 'Шоколад'],
    img: ''
  },
  {
    name: 'Круассан с семгой',
    price: 1200,
    description: 'Круассан с семгой, сливочным сыром и зеленью.',
    ingredients: ['Круассан', 'Семга', 'Сливочный сыр', 'Зелень'],
    img: ''
  },
  {
    name: 'Круассан с курицей',
    price: 1100,
    description: 'Круассан с курицей, сыром и свежими овощами.',
    ingredients: ['Круассан', 'Курица', 'Сыр', 'Овощи'],
    img: ''
  },
  {
    name: 'Панини',
    price: 1200,
    description: 'Итальянский горячий сэндвич с сыром и ветчиной.',
    ingredients: ['Панини', 'Сыр', 'Ветчина'],
    img: ''
  },
];

const saladsSandwiches = [
  {
    name: 'Цезарь с курицей',
    price: 2290,
    description: 'Классический салат Цезарь с курицей, листьями салата, сухариками и соусом.',
    ingredients: ['Курица', 'Салат', 'Сухарики', 'Пармезан', 'Соус Цезарь'],
    img: ''
  },
  {
    name: 'Цезарь с креветками',
    price: 2390,
    description: 'Салат Цезарь с креветками, листьями салата, сухариками и соусом.',
    ingredients: ['Креветки', 'Салат', 'Сухарики', 'Пармезан', 'Соус Цезарь'],
    img: ''
  },
  {
    name: 'Хрустящие баклажаны',
    price: 2100,
    description: 'Жареные баклажаны с хрустящей корочкой и соусом.',
    ingredients: ['Баклажаны', 'Панировка', 'Соус'],
    img: ''
  },
  {
    name: 'Греческий салат',
    price: 1990,
    description: 'Салат с овощами, фетой, оливками и оливковым маслом.',
    ingredients: ['Огурцы', 'Помидоры', 'Фета', 'Оливки', 'Оливковое масло'],
    img: ''
  },
  {
    name: 'Классический сэндвич',
    price: 1300,
    description: 'Сэндвич с ветчиной, сыром и свежими овощами.',
    ingredients: ['Хлеб', 'Ветчина', 'Сыр', 'Овощи'],
    img: ''
  },
  {
    name: 'Бургер',
    price: 1500,
    description: 'Классический бургер с котлетой, сыром и овощами.',
    ingredients: ['Булочка', 'Котлета', 'Сыр', 'Овощи', 'Соус'],
    img: ''
  },
  {
    name: 'Наггетсы',
    price: 1600,
    description: 'Куриные наггетсы в хрустящей панировке.',
    ingredients: ['Курица', 'Панировка', 'Соус'],
    img: ''
  },
];

const hotDishesFood = [
  {
    name: 'Лапша рамен',
    price: 1500,
    description: 'Японская лапша рамен с бульоном, мясом и овощами.',
    ingredients: ['Лапша', 'Бульон', 'Мясо', 'Овощи', 'Яйцо'],
    img: ''
  },
  {
    name: 'Пельмени',
    price: 1400,
    description: 'Пельмени с мясной начинкой, подаются со сметаной.',
    ingredients: ['Тесто', 'Мясо', 'Сметана'],
    img: ''
  },
  {
    name: 'Куриная лапша',
    price: 1200,
    description: 'Куриная лапша с овощами в бульоне.',
    ingredients: ['Лапша', 'Курица', 'Овощи', 'Бульон'],
    img: ''
  },
  {
    name: 'Чечевичный суп',
    price: 1100,
    description: 'Сытный суп из чечевицы с овощами.',
    ingredients: ['Чечевица', 'Овощи', 'Бульон'],
    img: ''
  },
  {
    name: 'Феттучини с курицей',
    price: 2290,
    description: 'Итальянская паста феттучини с курицей и сливочным соусом.',
    ingredients: ['Феттучини', 'Курица', 'Сливочный соус', 'Сыр'],
    img: ''
  },
  {
    name: 'Феттучини с креветками',
    price: 2590,
    description: 'Феттучини с креветками в сливочном соусе.',
    ingredients: ['Феттучини', 'Креветки', 'Сливочный соус', 'Сыр'],
    img: ''
  },
  {
    name: 'Феттучини с семгой',
    price: 2890,
    description: 'Феттучини с семгой и сливочным соусом.',
    ingredients: ['Феттучини', 'Семга', 'Сливочный соус', 'Сыр'],
    img: ''
  },
  {
    name: 'Вок лапша',
    price: 1890,
    description: 'Обжаренная лапша с овощами и мясом в азиатском стиле.',
    ingredients: ['Лапша', 'Овощи', 'Мясо', 'Соус'],
    img: ''
  },
  {
    name: 'Бефстроганов',
    price: 2390,
    description: 'Говядина в сливочном соусе с грибами и луком.',
    ingredients: ['Говядина', 'Сливки', 'Грибы', 'Лук'],
    img: ''
  },
  {
    name: 'Стейк из семги',
    price: 3500,
    description: 'Стейк из семги, обжаренный до золотистой корочки.',
    ingredients: ['Семга', 'Специи', 'Лимон'],
    img: ''
  },
];

const sides = [
  {
    name: 'Рис',
    price: 600,
    description: 'Гарнир из отварного риса.',
    ingredients: ['Рис', 'Соль'],
    img: ''
  },
  {
    name: 'Пюре',
    price: 700,
    description: 'Картофельное пюре с маслом.',
    ingredients: ['Картофель', 'Молоко', 'Масло', 'Соль'],
    img: ''
  },
  {
    name: 'Фри',
    price: 990,
    description: 'Картофель фри, обжаренный до хрустящей корочки.',
    ingredients: ['Картофель', 'Масло', 'Соль'],
    img: ''
  },
];

function Section({ title, children }) {
  return (
    <div className="section">
      <h2 style={{ textAlign: 'center', fontWeight: 400, fontSize: 22, letterSpacing: 1 }}>{title}</h2>
      {children}
    </div>
  );
}

function SectionsRow({ children }) {
  return <div className="sections-row">{children}</div>;
}

function DrinkInfo({ item }) {
  if (!item) return null;
  return (
    <div style={{
      display: 'flex',
      gap: 40,
      alignItems: 'flex-start',
      margin: '48px auto',
      maxWidth: 800,
      background: '#fafafa',
      borderRadius: 12,
      boxShadow: '0 2px 12px #0001',
      padding: 32
    }}>
      {item.img && (
        <div style={{ minWidth: 180 }}>
          <img src={item.img} alt={item.name} style={{ maxWidth: 180, borderRadius: 8 }} />
        </div>
      )}
      <div>
        <h2 style={{ marginTop: 0 }}>{item.name}</h2>
        {item.description && <p style={{ fontSize: 18 }}>{item.description}</p>}
        {item.ingredients && (
          <>
            <h4>Ингредиенты:</h4>
            <ul>
              {item.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

function Modal({ children, onClose }) {
  return (
    <div>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.10)',
          backdropFilter: 'blur(6px)',
          zIndex: 1000,
        }}
        onClick={onClose}
      />
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: '#fff',
          borderRadius: 24,
          boxShadow: '0 4px 32px #0002',
          zIndex: 1001,
          padding: 32,
          minWidth: 340,
          minHeight: 320,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontFamily: 'Fira Mono, monospace',
        }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 16,
            right: 24,
            background: 'none',
            border: 'none',
            fontSize: 28,
            color: '#888',
            cursor: 'pointer',
            lineHeight: 1,
          }}
          aria-label="Закрыть"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}

function DrinkInfoModal({ item, onClose }) {
  if (!item) return null;
  return (
    <Modal onClose={onClose}>
      {item.img && (
        <div style={{ marginBottom: 24 }}>
          <img src={item.img} alt={item.name} style={{ maxWidth: 260, maxHeight: 180, borderRadius: 16, boxShadow: '0 2px 8px #0001' }} />
        </div>
      )}
      <div style={{ color: '#222', textAlign: 'center', fontFamily: 'Fira Mono, monospace' }}>
        <h2 style={{ margin: '12px 0 8px 0', fontWeight: 500, fontSize: 26 }}>{item.name}</h2>
        {item.description && <p style={{ fontSize: 16, margin: '8px 0 16px 0', color: '#444' }}>{item.description}</p>}
        {item.ingredients && (
          <>
            <h4 style={{ margin: '12px 0 4px 0', fontWeight: 400, fontSize: 18, color: '#333' }}>Ингредиенты:</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 15, color: '#444' }}>
              {item.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
            </ul>
          </>
        )}
      </div>
    </Modal>
  );
}

function SeasonalMenu() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 40 }}>
      {seasonal.map((item, idx) => (
        <div key={idx} style={{ textAlign: 'center' }}>
          <img src={item.img} alt={item.name} style={{ width: 180, marginBottom: 8 }} />
          <div>{item.name}<br />L — {item.price}</div>
        </div>
      ))}
    </div>
  );
}

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <div className="App" style={{ background: '#fff' }}>
      <div className="menu-accent" />
      <Header />
      <main style={{ maxWidth: 1200, margin: '0 auto' }}>
        <MenuTabs tabs={["Горячие напитки", "Холодные напитки", "Основные блюда"]}>
          {/* Горячие напитки */}
          <SectionsRow>
            <Section title="Классика">
              <DrinksTable data={hotDrinks} setSelectedItem={setSelectedItem} />
            </Section>
            <Section title="Авторский кофе">
              <DrinksTable data={authorCoffee} setSelectedItem={setSelectedItem} />
            </Section>
            <Section title="Альтернативный кофе">
              <DrinksTable data={altCoffee} setSelectedItem={setSelectedItem} />
            </Section>
            <Section title="Авторский чай">
              <DrinksTable data={authorTea} setSelectedItem={setSelectedItem} />
            </Section>
            <Section title="Листовой чай (L)">
              <DrinksTable data={leafTea} setSelectedItem={setSelectedItem} />
            </Section>
            <Section title="Дополнительно">
              <DrinksTable data={extras} setSelectedItem={setSelectedItem} />
            </Section>
          </SectionsRow>
          {/* Холодные напитки */}
          <SectionsRow>
            <Section title="Холодный авторский">
              <DrinksTable data={coldAuthor} setSelectedItem={setSelectedItem} />
            </Section>
            <Section title="Прохладительные напитки">
              <DrinksTable data={coldRefresh} setSelectedItem={setSelectedItem} />
            </Section>
            <Section title="Коктейль">
              <DrinksTable data={cocktails} setSelectedItem={setSelectedItem} />
            </Section>
            <Section title="Смузи">
              <DrinksTable data={smoothies} setSelectedItem={setSelectedItem} />
            </Section>
            <Section title="Дополнительно">
              <DrinksTable data={extras} setSelectedItem={setSelectedItem} />
            </Section>
          </SectionsRow>
          {/* Завтраки и выпечка + все секции */}
          <SectionsRow>
            <Section title="Завтраки и выпечка">
              <DrinksTable data={breakfastBakery} setSelectedItem={setSelectedItem} />
            </Section>
            <Section title="Салаты и Сэндвичи">
              <DrinksTable data={saladsSandwiches} setSelectedItem={setSelectedItem} />
            </Section>
            <Section title="Горячие блюда">
              <DrinksTable data={hotDishesFood} setSelectedItem={setSelectedItem} />
            </Section>
            <Section title="Гарниры">
              <DrinksTable data={sides} setSelectedItem={setSelectedItem} />
            </Section>
          </SectionsRow>
        </MenuTabs>
        <DrinkInfoModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      </main>
    </div>
  );
}

export default App;
