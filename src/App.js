import React, { useState } from 'react';
import Header from './components/Header';
import MenuTabs from './components/MenuTabs';
import DrinksTable from './components/DrinksTable';
import './App.css';

const hotDrinks = [
  {
    name: 'Эспрессо',
    sizes: [{ size: '-', price: 650 }],
    description: 'Крепкий итальянский эспрессо с насыщенным вкусом и ароматом. Идеальный выбор для истинных ценителей кофе.',
    ingredients: ['Молотый кофе', 'Вода'],
    img: ''
  },
  {
    name: 'Американо',
    sizes: [
      { size: 'S', price: 650 },
      { size: 'M', price: 650 }
    ],
    description: 'Классический американо — эспрессо, разбавленный горячей водой. Мягкий вкус с сохранением кофейного аромата.',
    ingredients: ['Эспрессо', 'Горячая вода'],
    img: ''
  },
  {
    name: 'Капучино',
    sizes: [
      { size: 'S', price: 900 },
      { size: 'M', price: 900 },
      { size: 'L', price: 900 }
    ],
    description: 'Итальянский капучино с идеальным балансом эспрессо, молока и пышной молочной пены. Настоящее искусство в чашке.',
    ingredients: ['Эспрессо', 'Молоко', 'Молочная пена'],
    img: ''
  },
  {
    name: 'Латте',
    sizes: [
      { size: 'M', price: 900 },
      { size: 'L', price: 900 }
    ],
    description: 'Нежный латте с большим количеством молока и тонким слоем пены. Идеальный выбор для тех, кто любит мягкий кофейный вкус.',
    ingredients: ['Эспрессо', 'Молоко', 'Молочная пена'],
    img: ''
  },
];

const authorTea = [
  {
    name: 'Чай',
    size: 'M',
    price: 300,
    description: 'Классический черный чай премиум-сорта. Насыщенный вкус и бодрящий аромат для идеального начала дня.',
    ingredients: ['Черный чай', 'Вода'],
    img: ''
  },
  {
    name: 'Чай с молоком',
    size: 'M',
    price: 350,
    description: 'Традиционный чай с молоком в английском стиле. Нежный и согревающий напиток для уютного времяпрепровождения.',
    ingredients: ['Черный чай', 'Молоко', 'Вода'],
    img: ''
  },
  {
    name: 'Чай черный чайник',
    size: 'L',
    price: 900,
    description: 'Черный чай в красивом чайнике для компании. Идеально для дружеских встреч и деловых переговоров.',
    ingredients: ['Черный чай', 'Вода'],
    img: ''
  },
  {
    name: 'Чай с молоком чайник',
    size: 'L',
    price: 900,
    description: 'Чай с молоком в чайнике для компании. Традиционный английский ритуал в современном исполнении.',
    ingredients: ['Черный чай', 'Молоко', 'Вода'],
    img: ''
  },
  {
    name: 'Чай ягодный',
    size: 'L',
    price: 1900,
    description: 'Ароматный ягодный чай с натуральными ягодами. Освежающий вкус с нотками лета в любое время года.',
    ingredients: ['Черный чай', 'Ягоды', 'Вода'],
    img: ''
  },
  {
    name: 'Чай облепиховый',
    size: 'L',
    price: 1900,
    description: 'Полезный облепиховый чай с витаминами. Укрепляет иммунитет и дарит заряд энергии.',
    ingredients: ['Черный чай', 'Облепиха', 'Вода'],
    img: ''
  },
  {
    name: 'Чай ташкентский',
    size: 'L',
    price: 1900,
    description: 'Традиционный ташкентский чай с особым вкусом и ароматом. Погружение в восточную атмосферу.',
    ingredients: ['Черный чай', 'Специи', 'Вода'],
    img: ''
  },
];

const coldAuthor = [
  {
    name: 'Айс латте / капучино',
    size: 'L',
    price: 950,
    description: 'Освежающий холодный кофе с молоком. Идеальный выбор для жаркого дня или когда хочется чего-то прохладного.',
    ingredients: ['Эспрессо', 'Молоко', 'Лёд'],
    img: ''
  },
];

const coldRefresh = [
  {
    name: 'Кола 0.5',
    size: 'L',
    price: 700,
    description: 'Классическая Coca-Cola объемом 0.5 литра. Освежающий вкус с пузырьками для бодрости.',
    ingredients: ['Кола', 'Лёд'],
    img: ''
  },
  {
    name: 'Фанта 0.5',
    size: 'L',
    price: 700,
    description: 'Яркая и вкусная Fanta объемом 0.5 литра. Фруктовый вкус для хорошего настроения.',
    ingredients: ['Фанта', 'Лёд'],
    img: ''
  },
  {
    name: 'Редбул',
    size: 'L',
    price: 1100,
    description: 'Энергетический напиток Red Bull. Заряд энергии для активного дня и продуктивной работы.',
    ingredients: ['Red Bull'],
    img: ''
  },
  {
    name: 'Горилла',
    size: 'L',
    price: 700,
    description: 'Энергетический напиток Gorilla. Мощный заряд энергии для достижения целей.',
    ingredients: ['Gorilla'],
    img: ''
  },
  {
    name: 'Вода',
    size: 'L',
    price: 450,
    description: 'Чистая питьевая вода. Освежающая и полезная для здоровья в любое время дня.',
    ingredients: ['Вода'],
    img: ''
  },
  {
    name: 'Детский сок',
    size: 'M',
    price: 350,
    description: 'Натуральный сок для детей. Полезный и вкусный напиток без искусственных добавок.',
    ingredients: ['Сок'],
    img: ''
  },
  {
    name: 'Лимонад 0.5',
    size: 'M',
    price: 950,
    description: 'Домашний лимонад объемом 0.5 литра. Освежающий напиток с натуральным лимонным вкусом.',
    ingredients: ['Лимон', 'Сахар', 'Вода', 'Лёд'],
    img: ''
  },
  {
    name: 'Лимонад 1 л',
    size: 'L',
    price: 2500,
    description: 'Домашний лимонад объемом 1 литр. Идеально для компании или семейного ужина.',
    ingredients: ['Лимон', 'Сахар', 'Вода', 'Лёд'],
    img: ''
  },
];

const hotDishesFood = [
  {
    name: 'Лапша рамен',
    price: 1500,
    description: 'Аутентичная японская лапша рамен с наваристым бульоном, нежным мясом и свежими овощами. Погружение в японскую кухню.',
    ingredients: ['Лапша', 'Бульон', 'Мясо', 'Овощи', 'Яйцо'],
    img: ''
  },
  {
    name: 'Пельмени',
    price: 1400,
    description: 'Домашние пельмени с сочной мясной начинкой, подаются со сметаной. Традиционный вкус русской кухни.',
    ingredients: ['Тесто', 'Мясо', 'Сметана'],
    img: ''
  },
  {
    name: 'Куриная лапша',
    price: 1200,
    description: 'Сытная куриная лапша с овощами в ароматном бульоне. Согревающее блюдо для души и тела.',
    ingredients: ['Лапша', 'Курица', 'Овощи', 'Бульон'],
    img: ''
  },
  {
    name: 'Чечевичный суп',
    price: 1100,
    description: 'Питательный суп из чечевицы с овощами. Полезное и вкусное блюдо для здорового питания.',
    ingredients: ['Чечевица', 'Овощи', 'Бульон'],
    img: ''
  },
  {
    name: 'Феттучини с курицей',
    price: 2290,
    description: 'Итальянская паста феттучини с нежной курицей в сливочном соусе. Гастрономическое путешествие в Италию.',
    ingredients: ['Феттучини', 'Курица', 'Сливочный соус', 'Сыр'],
    img: ''
  },
  {
    name: 'Феттучини с креветками',
    price: 2590,
    description: 'Феттучини с сочными креветками в нежном сливочном соусе. Морской вкус в итальянском стиле.',
    ingredients: ['Феттучини', 'Креветки', 'Сливочный соус', 'Сыр'],
    img: ''
  },
  {
    name: 'Феттучини с семгой',
    price: 2890,
    description: 'Феттучини с нежной семгой в сливочном соусе. Премиум-блюдо для особых случаев.',
    ingredients: ['Феттучини', 'Семга', 'Сливочный соус', 'Сыр'],
    img: ''
  },
  {
    name: 'Вок лапша',
    price: 1890,
    description: 'Обжаренная лапша с овощами и мясом в азиатском стиле. Аутентичный вкус восточной кухни.',
    ingredients: ['Лапша', 'Овощи', 'Мясо', 'Соус'],
    img: ''
  },
  {
    name: 'Бефстроганов',
    price: 2390,
    description: 'Классический бефстроганов из нежной говядины в сливочном соусе с грибами и луком. Русская классика.',
    ingredients: ['Говядина', 'Сливки', 'Грибы', 'Лук'],
    img: ''
  },
  {
    name: 'Стейк из семги',
    price: 3500,
    description: 'Стейк из свежей семги, обжаренный до золотистой корочки. Премиум-блюдо для ценителей рыбы.',
    ingredients: ['Семга', 'Специи', 'Лимон'],
    img: ''
  },
];

const breakfastBakery = [
  {
    name: 'Континентальный завтрак',
    price: 3000,
    description: 'Классический европейский завтрак: свежий круассан, сливочное масло, джем, сыр, овощи и яйцо. Идеальное начало дня.',
    ingredients: ['Круассан', 'Масло', 'Джем', 'Сыр', 'Овощи', 'Яйцо'],
    img: ''
  },
  {
    name: 'Американский завтрак',
    price: 3000,
    description: 'Сытный американский завтрак: яичница, хрустящий бекон, тосты, картофель, овощи и соус. Энергия на весь день.',
    ingredients: ['Яйца', 'Бекон', 'Тосты', 'Картофель', 'Овощи', 'Соус'],
    img: ''
  },
  {
    name: 'Круассан с семгой',
    price: 1800,
    description: 'Слоеный круассан с нежной семгой, сливочным сыром и свежей зеленью. Французская элегантность.',
    ingredients: ['Круассан', 'Семга', 'Сливочный сыр', 'Зелень'],
    img: ''
  },
  {
    name: 'Круассан с курицей',
    price: 1600,
    description: 'Круассан с сочной курицей, сыром и свежими овощами. Сытный и вкусный завтрак.',
    ingredients: ['Круассан', 'Курица', 'Сыр', 'Овощи'],
    img: ''
  },
  {
    name: 'Панини с семгой',
    price: 1800,
    description: 'Итальянский горячий сэндвич панини с нежной семгой и свежими овощами. Морской вкус в итальянском стиле.',
    ingredients: ['Панини', 'Семга', 'Овощи', 'Соус'],
    img: ''
  },
  {
    name: 'Панини с курицей',
    price: 1600,
    description: 'Итальянский горячий сэндвич панини с сочной курицей и сыром. Аутентичный вкус Италии.',
    ingredients: ['Панини', 'Курица', 'Сыр', 'Овощи'],
    img: ''
  },
  {
    name: 'Пончик',
    price: 700,
    description: 'Свежий пончик с сахарной пудрой. Классическое сладкое удовольствие для любого времени дня.',
    ingredients: ['Мука', 'Сахар', 'Дрожжи', 'Сахарная пудра'],
    img: ''
  },
];

const saladsSandwiches = [
  {
    name: 'Цезарь с курицей',
    price: 2290,
    description: 'Классический салат Цезарь с нежной курицей, свежими листьями салата, сухариками и фирменным соусом.',
    ingredients: ['Курица', 'Салат', 'Сухарики', 'Пармезан', 'Соус Цезарь'],
    img: ''
  },
  {
    name: 'Цезарь с креветками',
    price: 2390,
    description: 'Салат Цезарь с сочными креветками, листьями салата, сухариками и фирменным соусом. Морская свежесть.',
    ingredients: ['Креветки', 'Салат', 'Сухарики', 'Пармезан', 'Соус Цезарь'],
    img: ''
  },
  {
    name: 'Хрустящие баклажаны',
    price: 2100,
    description: 'Жареные баклажаны с хрустящей панировкой и ароматным соусом. Вегетарианское удовольствие.',
    ingredients: ['Баклажаны', 'Панировка', 'Соус'],
    img: ''
  },
  {
    name: 'Греческий салат',
    price: 1990,
    description: 'Свежий греческий салат с овощами, соленой фетой, оливками и оливковым маслом. Средиземноморский вкус.',
    ingredients: ['Огурцы', 'Помидоры', 'Фета', 'Оливки', 'Оливковое масло'],
    img: ''
  },
  {
    name: 'Классический сэндвич',
    price: 1300,
    description: 'Сэндвич с ветчиной, сыром и свежими овощами. Простой, но очень вкусный выбор.',
    ingredients: ['Хлеб', 'Ветчина', 'Сыр', 'Овощи'],
    img: ''
  },
  {
    name: 'Бургер',
    price: 1500,
    description: 'Классический бургер с сочной котлетой, сыром и свежими овощами. Американская классика.',
    ingredients: ['Булочка', 'Котлета', 'Сыр', 'Овощи', 'Соус'],
    img: ''
  },
  {
    name: 'Наггетсы',
    price: 1600,
    description: 'Куриные наггетсы в хрустящей панировке с соусом. Любимое блюдо детей и взрослых.',
    ingredients: ['Курица', 'Панировка', 'Соус'],
    img: ''
  },
];

const sides = [
  {
    name: 'Рис',
    price: 600,
    description: 'Отварной рис с идеальной консистенцией. Универсальный гарнир к любому блюду.',
    ingredients: ['Рис', 'Соль'],
    img: ''
  },
  {
    name: 'Пюре',
    price: 700,
    description: 'Нежное картофельное пюре с маслом. Классический гарнир с домашним вкусом.',
    ingredients: ['Картофель', 'Молоко', 'Масло', 'Соль'],
    img: ''
  },
  {
    name: 'Фри',
    price: 990,
    description: 'Хрустящий картофель фри, обжаренный до золотистой корочки. Любимый гарнир для всей семьи.',
    ingredients: ['Картофель', 'Масло', 'Соль'],
    img: ''
  },
];

const extras = [
  {
    name: 'Овсяное молоко',
    price: 500,
    description: 'Натуральное овсяное молоко с нежным вкусом. Идеально для веганов и любителей растительного молока.',
    ingredients: ['Овсяное молоко'],
    img: ''
  },
  {
    name: 'Миндальное молоко',
    price: 500,
    description: 'Ароматное миндальное молоко с богатым вкусом. Премиум-выбор для здорового питания.',
    ingredients: ['Миндальное молоко'],
    img: ''
  },
  {
    name: 'Кокосовое молоко',
    price: 500,
    description: 'Экзотическое кокосовое молоко с тропическим вкусом. Уникальный выбор для экспериментов.',
    ingredients: ['Кокосовое молоко'],
    img: ''
  },
  {
    name: 'Соевое молоко',
    price: 500,
    description: 'Классическое соевое молоко с нейтральным вкусом. Традиционный выбор для веганов.',
    ingredients: ['Соевое молоко'],
    img: ''
  },
  {
    name: 'Ванильный сироп',
    price: 200,
    description: 'Ароматный ванильный сироп с нежным вкусом. Идеально для сладких напитков и десертов.',
    ingredients: ['Ванильный сироп'],
    img: ''
  },
  {
    name: 'Карамельный сироп',
    price: 200,
    description: 'Сладкий карамельный сироп с насыщенным вкусом. Любимый выбор для кофейных напитков.',
    ingredients: ['Карамельный сироп'],
    img: ''
  },
  {
    name: 'Шоколадный сироп',
    price: 200,
    description: 'Богатый шоколадный сироп с глубоким вкусом. Идеально для сладкоежек и любителей шоколада.',
    ingredients: ['Шоколадный сироп'],
    img: ''
  },
  {
    name: 'Кленовый сироп',
    price: 200,
    description: 'Натуральный кленовый сироп с аутентичным вкусом. Канадская классика для особых случаев.',
    ingredients: ['Кленовый сироп'],
    img: ''
  },
];

function Section({ title, children }) {
  return (
    <div className="section">
      <h2 className="section-title">{title}</h2>
      <p className="section-hint">Нажмите для подробностей</p>
      {children}
    </div>
  );
}

function SectionsRow({ children }) {
  return <div className="sections-row">{children}</div>;
}

function Modal({ children, onClose }) {
  return (
    <div>
      <div
        className="modal-overlay"
        onClick={onClose}
      />
      <div
        className="modal-content"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="modal-close"
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
            <p style={{ fontSize: 15, color: '#444', margin: '8px 0 0 0' }}>{item.ingredients.join(', ')}</p>
          </>
        )}
      </div>
    </Modal>
  );
}

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <div className="App" style={{ background: '#fff' }}>
      <div className="menu-accent" />
      <Header />
      <main>
        <MenuTabs tabs={["Горячие напитки", "Холодные напитки", "Основные блюда"]}>
          {/* Горячие напитки */}
          <SectionsRow>
            <Section title="Классика">
              <DrinksTable data={hotDrinks} setSelectedItem={setSelectedItem} />
            </Section>
            {authorTea.length > 0 && (
              <Section title="Чай">
                <DrinksTable data={authorTea} setSelectedItem={setSelectedItem} />
              </Section>
            )}
            <Section title="Дополнительно">
              <DrinksTable data={extras} setSelectedItem={setSelectedItem} />
            </Section>
          </SectionsRow>
          {/* Холодные напитки */}
          <SectionsRow>
            {coldAuthor.length > 0 && (
              <Section title="Холодный кофе">
                <DrinksTable data={coldAuthor} setSelectedItem={setSelectedItem} />
              </Section>
            )}
            <Section title="Прохладительные напитки">
              <DrinksTable data={coldRefresh} setSelectedItem={setSelectedItem} />
            </Section>
          </SectionsRow>
          {/* Основные блюда */}
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
