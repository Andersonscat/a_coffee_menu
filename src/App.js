import React from 'react';
import Header from './components/Header';
import MenuTabs from './components/MenuTabs';
import DrinksTable from './components/DrinksTable';
import './App.css';

const hotDrinks = [
  { name: 'Эспрессо', sizes: [{ size: '-', price: 1000 }] },
  { name: 'Американо', sizes: [{ size: 'S', price: 1300 }, { size: 'M', price: 1500 }] },
  { name: 'Капучино', sizes: [{ size: 'S', price: 1500 }, { size: 'M', price: 1700 }, { size: 'L', price: 1900 }] },
  { name: 'Латте', sizes: [{ size: 'M', price: 1700 }, { size: 'L', price: 1900 }] },
  { name: 'Флэт уайт', sizes: [{ size: 'S', price: 1700 }] },
  { name: 'Какао', sizes: [{ size: 'M', price: 1500 }] },
  { name: 'Горячий шоколад', sizes: [{ size: 'S', price: 1500 }] },
  { name: 'Матча Латте зеленая, голубая', sizes: [{ size: 'M', price: 2100 }] },
];

const authorCoffee = [
  { name: 'Латте голд', price: 2100 },
  { name: 'Испанский латте', price: 2100 },
  { name: 'Раф фисташка-малина', price: 2100 },
  { name: 'Раф Дубайский шоколад', price: 2100, isNew: true },
];

const altCoffee = [
  { name: 'Батч', size: 'S', price: 1500 },
  { name: 'V60', size: 'M', price: 2800 },
];

const authorTea = [
  { name: 'Карак чай', size: 'M', price: 2000 },
  { name: 'Облепиха-маракуйя', size: 'L', price: 2100 },
  { name: 'Тары чай', size: 'L', price: 2100 },
  { name: 'Малина-имбирь', size: 'L', price: 2100 },
];

const leafTea = [
  { name: 'Улун апельсин зеленый', price: 1500 },
  { name: 'Английский завтрак черный', price: 1500 },
  { name: 'Ройбуш малина без кофеина', price: 1500 },
];

const extras = [
  { name: '+ Сироп', price: 300 },
  { name: '+ Альтернативное молоко', price: 600 },
  { name: '+ Безлактозное', price: 500 },
  { name: '+ Без кофеина', price: 600 },
  { name: '+ Сырная шапка', price: 300 },
];

const coldAuthor = [
  { name: 'Айс Американо', price: 1700 },
  { name: 'Айс латте / капучино', price: 1900 },
  { name: 'Айс Испанский латте', price: 2500 },
  { name: 'Айс малина раф', price: 2300, isNew: true },
  { name: 'Колд брю вишня, ананас', price: 2800 },
  { name: 'Фраппучино белвита', price: 2800 },
  { name: 'Айс матча клубника, манго, персик, банан', price: 2700, isNew: true },
  { name: 'Эспрессо тоник цитрус, малина', price: 2100, isNew: true },
  { name: 'Матча тоник грейпфрут, клубника', price: 2300, isNew: true },
];

const coldRefresh = [
  { name: 'Айс ти – Вишня-груша', price: 2100 },
  { name: 'Айс ти – Манго-маракуйя', price: 2100 },
  { name: 'Айс ти – Малина/клубника лайм', price: 2100 },
  { name: 'Лимонад – Вишня', price: 2100 },
  { name: 'Лимонад – Драгон-груша', price: 2100, isNew: true },
  { name: 'Лимонад – Клубника-банан', price: 2100 },
];

const cocktails = [
  { name: 'Тары', price: 3100 },
  { name: 'Кит-Кат', price: 3100 },
  { name: 'Нутелла банан', price: 3100 },
];

const smoothies = [
  { name: 'Зеленый ПП', price: 3100, isNew: true },
  { name: 'Протеиновый', price: 3400, isNew: true },
  { name: 'Банан-малина', price: 3100 },
  { name: 'Ананас-манго', price: 3100 },
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
  { name: 'Континентальный завтрак', price: 3200 },
  { name: 'Американский завтрак', price: 3400 },
  { name: 'Национальный завтрак', price: 3100 },
  { name: 'Блины со сметаной', price: 1200 },
  { name: 'Блины с джемом', price: 1200 },
  { name: 'Блины с шоколадом', price: 1300 },
  { name: 'Круассан с семгой', price: 2500 },
  { name: 'Круассан с курицей', price: 2200 },
  { name: 'Панини', price: 2300 },
];

const saladsSandwiches = [
  { name: 'Цезарь с курицей', price: 2500 },
  { name: 'Цезарь с креветками', price: 2700 },
  { name: 'Хрустящие баклажаны', price: 2200 },
  { name: 'Греческий салат', price: 2100 },
  { name: 'Классический сэндвич', price: 2100 },
  { name: 'Бургер', price: 2300 },
  { name: 'Наггетсы', price: 1800 },
];

const hotDishesFood = [
  { name: 'Лапша рамен', price: 2100 },
  { name: 'Пельмени', price: 2000 },
  { name: 'Куриная лапша', price: 1800 },
  { name: 'Чечевичный суп', price: 1700 },
  { name: 'Феттучини с курицей', price: 2400 },
  { name: 'Феттучини с креветками', price: 2600 },
  { name: 'Феттучини с семгой', price: 2700 },
  { name: 'Вок лапша', price: 2300 },
  { name: 'Бефстроганов', price: 2500 },
  { name: 'Стейк из семги', price: 3200 },
];

const sides = [
  { name: 'Рис', price: 800 },
  { name: 'Пюре', price: 900 },
  { name: 'Фри', price: 900 },
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
  return (
    <div className="App" style={{ background: '#fff' }}>
      <Header />
      <main style={{ maxWidth: 1200, margin: '0 auto' }}>
        <MenuTabs tabs={["Горячие напитки", "Холодные напитки", "Сезонное меню", "Завтраки и выпечка"]}>
          {/* Горячие напитки */}
          <SectionsRow>
            <Section title="Классика">
              <DrinksTable data={hotDrinks} />
            </Section>
            <Section title="Авторский кофе (M)">
              <DrinksTable data={authorCoffee} />
            </Section>
            <Section title="Альтернативный кофе">
              <DrinksTable data={altCoffee} />
            </Section>
            <Section title="Авторский чай">
              <DrinksTable data={authorTea} />
            </Section>
            <Section title="Листовой чай (L)">
              <DrinksTable data={leafTea} />
            </Section>
            <Section title="Дополнительно">
              <DrinksTable data={extras} />
            </Section>
          </SectionsRow>
          {/* Холодные напитки */}
          <SectionsRow>
            <Section title="Холодный авторский (L)">
              <DrinksTable data={coldAuthor} />
            </Section>
            <Section title="Прохладительные напитки (L)">
              <DrinksTable data={coldRefresh} />
            </Section>
            <Section title="Коктейль (L)">
              <DrinksTable data={cocktails} />
            </Section>
            <Section title="Смузи (L)">
              <DrinksTable data={smoothies} />
            </Section>
            <Section title="Дополнительно">
              <DrinksTable data={extras} />
            </Section>
          </SectionsRow>
          {/* Сезонное меню */}
          <div>
            <SeasonalMenu />
          </div>
          {/* Завтраки и выпечка + все секции */}
          <SectionsRow>
            <Section title="Завтраки и выпечка">
              <DrinksTable data={breakfastBakery} />
            </Section>
            <Section title="Салаты и Сэндвичи">
              <DrinksTable data={saladsSandwiches} />
            </Section>
            <Section title="Горячие блюда">
              <DrinksTable data={hotDishesFood} />
            </Section>
            <Section title="Гарниры">
              <DrinksTable data={sides} />
            </Section>
          </SectionsRow>
        </MenuTabs>
      </main>
    </div>
  );
}

export default App;
